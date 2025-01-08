import { JSX } from "preact";
import { Change, diffLines, diffWordsWithSpace, diffChars } from "diff";
import { useContext } from "preact/hooks";
import { OptionsContext } from "../context/OptionsContext";

interface DiffDisplayProps {
  oldText: string;
  newText: string;
}

const REMOVED_TEXT_STYLE = "bg-red-400/50";
const ADDED_TEXT_STYLE = "bg-green-400/50";
const REGULAR_TEXT_STYLE = "";
const REMOVED_LINE_STYLE = "table-cell text-left whitespace-pre-wrap bg-red-200/50";
const ADDED_LINE_STYLE = "table-cell text-left whitespace-pre-wrap bg-green-200/50";
const REGULAR_LINE_STYLE = "table-cell text-left whitespace-pre-wrap";
const FILLER_LINE_STYLE = "table-cell text-left bg-gray-50/10";
const COLLAPSED_LINE_STYLE = "table-cell text-left bg-gray-100/50";
const LINE_NUM_STYLE = "table-cell text-right pr-2";

export default function DiffDisplay(props: DiffDisplayProps) {
  const { options } = useContext(OptionsContext)!;
  
  // Get line-level diff, separate into old lines and new lines with padding lines so that unedited lines stay at the same level
  const lineDiff = diffLines(props.oldText, props.newText, { newlineIsToken: false, ignoreNewlineAtEof: false });
  console.log(lineDiff);
  
  let oLines: Change[] = [];
  let nLines: Change[] = [];
  const paddingLine: Change = { count: 0, value: "", added: false, removed: false};
  lineDiff.forEach((ch, idx) => {
    let lines = ch.value.split("\n");
    if (lines.length > ch.count!) { // Remove erroneous empty section at end of hunk if it is not a new section
      lines.pop();
    }
    if (ch.removed) {
      lines.forEach((ln) => {
        oLines.push({ count: 1, value: ln, added: ch.added, removed: ch.removed });
      });
    }
    else if (ch.added) {
      lines.forEach((ln) => {
        nLines.push({ count: 1, value: ln, added: ch.added, removed: ch.removed });
      });
    }
    else {
      // Insert padding lines so that both sides have the same number of preceding lines
      while (nLines.length > oLines.length) {
        oLines.push(paddingLine);
      }
      while (oLines.length > nLines.length) {
        nLines.push(paddingLine);
      }

      lines.forEach((ln) => {
        oLines.push({ count: 1, value: ln, added: ch.added, removed: ch.removed });
        nLines.push({ count: 1, value: ln, added: ch.added, removed: ch.removed });
      });
    }
  });

  // If either text ends in newline, it must be manually inserted
  for (let i = lineDiff.length - 1; i >= 0; i--) {
    if (!lineDiff[i].added) {
      if (lineDiff[i].value.endsWith("\n")) {
        oLines.push({ count: 1, value: "", added: lineDiff[i].added, removed: lineDiff[i].removed });
      }
      break;
    }
  }
  for (let i = lineDiff.length - 1; i >= 0; i--) {
    if (!lineDiff[i].removed) {
      if (lineDiff[i].value.endsWith("\n")) {
        nLines.push({ count: 1, value: "", added: lineDiff[i].added, removed: lineDiff[i].removed });
      }
      break;
    }
  }
  
  // Add final padding lines if needed
  while (nLines.length > oLines.length) {
    oLines.push(paddingLine);
  }
  while (oLines.length > nLines.length) {
    nLines.push(paddingLine);
  }
  
  console.log("oLines:");
  console.log(oLines);
  console.log("nLines:");
  console.log(nLines);

  // Compare each line, and generate word/char-level diffs between compared lines
  // Removed or added lines paired with a padding line are considered completely changed, receiving deeper-colored highlighting
  let oLineHunks: Change[][] = [];
  let nLineHunks: Change[][] = [];
  
  for (let i = 0; i < oLines.length; i++) {
    if (oLines[i].count === 0) {    // Old text has padding line
      oLineHunks.push([]);
      nLineHunks.push([nLines[i]]);
    }
    else if (nLines[i].count === 0) {   // New text has padding line
      nLineHunks.push([]);
      oLineHunks.push([oLines[i]]);
    }
    else {
      if (!oLines[i].removed && !nLines[i].added) {   // Line is unedited between texts
        oLineHunks.push([oLines[i]]);
        nLineHunks.push([nLines[i]]);
      }
      else {  // Removed line paired with added line, find diff
        let diff: Change[];
        if (options.diffMode === "char") {
          diff = diffChars(oLines[i].value, nLines[i].value);
        }
        else {
          diff = diffWordsWithSpace(oLines[i].value, nLines[i].value);
        }

        let oCurrLine: Change[] = [];
        let nCurrLine: Change[] = [];
        diff.forEach((ch) => {
          if (ch.removed) {   // Text chunk only present in old text
            oCurrLine.push(ch);
          }
          else if (ch.added) {  // Text chunk only present in new text
            nCurrLine.push(ch);
          }
          else {  // Unedited text chunk
            oCurrLine.push(ch);
            nCurrLine.push(ch);
          }
        });

        // If one line is blank, push an empty change so it is not registered as a padding line
        if (oCurrLine.length === 0) {
          oCurrLine.push({ count: 0, value: "", added: false, removed: false})
        }
        if (nCurrLine.length === 0) {
          nCurrLine.push({ count: 0, value: "", added: false, removed: false})
        }

        oLineHunks.push(oCurrLine);
        nLineHunks.push(nCurrLine);
      }
    }
  }
  console.log(oLineHunks);
  console.log(nLineHunks);

  // Format hunks from line-by-line diffs into table rows
  let dispTableLines: JSX.Element[] = [];
  let oLineNum = 0;
  let nLineNum = 0;
  let oCollapseStart: number | null = null;
  let nCollapseStart: number | null = null;
  for (let i = 0; i < oLineHunks.length; i++) {
    // Determine highlight color of line based on whether it contains edits
    let oLineStyle = FILLER_LINE_STYLE;
    if (oLineHunks[i].length > 0) {
      oLineStyle = REMOVED_LINE_STYLE;
      oLineNum += 1;
    }

    let nLineStyle = FILLER_LINE_STYLE;
    if (nLineHunks[i].length > 0) {
      nLineStyle = ADDED_LINE_STYLE;
      nLineNum += 1;
    }
    // Remove highlight if both lines are unedited
    if (oLineHunks[i].length === 1 && !oLineHunks[i][0].removed && nLineHunks[i].length === 1 && !nLineHunks[i][0].added) {
      oLineStyle = REGULAR_LINE_STYLE;
      nLineStyle = REGULAR_LINE_STYLE;
    }

    // Handle text collapsing (if in effect)
    if (options.collapseLines) {
      if (oLineStyle === REGULAR_LINE_STYLE) {
        // Mark start point of collapsed section
        if (oCollapseStart === null) {
          oCollapseStart = oLineNum;
          nCollapseStart = nLineNum;
        }
        // Mark end point of collapsed section if next line is not unedited, create entry indicating this info
        if (i + 1 === oLineHunks.length || !(oLineHunks[i + 1].length === 1 && !oLineHunks[i + 1][0].removed && nLineHunks[i + 1].length === 1 && !nLineHunks[i + 1][0].added)) {
          const oCollapseText = `Lines ${oCollapseStart} to ${oLineNum} collapsed`;
          const nCollapseText = `Lines ${nCollapseStart} to ${nLineNum} collapsed`;
          const collapsedLinesEntry = (
            <div class="table-row">
              <div class={COLLAPSED_LINE_STYLE}></div>
              <div class={COLLAPSED_LINE_STYLE}>{oCollapseText}</div>
              <div class={COLLAPSED_LINE_STYLE}></div>
              <div class={COLLAPSED_LINE_STYLE}>{nCollapseText}</div>
            </div>
          );
          dispTableLines.push(collapsedLinesEntry);
  
          oCollapseStart = null;
          nCollapseStart = null;
        }
        continue;
      }
    }

    // Convert paired line diffs into text spans
    const oLineSpans = oLineHunks[i].map((ch) => {
      if (ch.removed) {
        return (
          <span class={REMOVED_TEXT_STYLE}>{ch.value}</span>
        );
      }
      return (
        <span class={REGULAR_TEXT_STYLE}>{ch.value}</span>
      );
    });
    const nLineSpans = nLineHunks[i].map((ch) => {
      if (ch.added) {
        return (
          <span class={ADDED_TEXT_STYLE}>{ch.value}</span>
        );
      }
      return (
        <span class={REGULAR_TEXT_STYLE}>{ch.value}</span>
      );
    });

    const oLineText = <div class={oLineStyle}>{oLineSpans}</div>
    const nLineText = <div class={nLineStyle}>{nLineSpans}</div>
    const oLineNumDisp = <div class={LINE_NUM_STYLE}>{oLineSpans.length > 0 ? oLineNum : ""}</div>
    const nLineNumDisp = <div class={LINE_NUM_STYLE}>{nLineSpans.length > 0 ? nLineNum : ""}</div>
    const dispTableEntry = (
      <div class="table-row">
        {oLineNumDisp}
        {oLineText}
        {nLineNumDisp}
        {nLineText}
      </div>
    );
    dispTableLines.push(dispTableEntry);
  }

  return (
    <table class="table-fixed w-full">
      <thead>
        <tr>
          <th class="w-8"/>
          <th/>
          <th class="w-8"/>
          <th/>
        </tr>
      </thead>
      {dispTableLines}
    </table>
  );
}