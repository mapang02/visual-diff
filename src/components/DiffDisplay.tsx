import { JSX } from "preact";
import { diffWords, diffLines, diffWordsWithSpace, diffArrays, Change, createPatch, structuredPatch, diffChars } from "diff";

interface DiffDisplayProps {
    origText: string;
    changedText: string;
}

interface TextSpan {
    text: string,
    added?: boolean,
    removed?: boolean
}

const REMOVED_TEXT_STYLE = "bg-red-400/50";
const ADDED_TEXT_STYLE = "bg-green-400/50";
const REGULAR_TEXT_STYLE = "";
const REMOVED_LINE_STYLE = "table-cell text-left bg-red-200/50";
const ADDED_LINE_STYLE = "table-cell text-left bg-green-200/50";
const REGULAR_LINE_STYLE = "table-cell text-left";
const FILLER_LINE_STYLE = "table-cell text-left bg-gray-50/10";
const LINE_NUM_STYLE = "table-cell text-right pr-2";

function formatDiffLines(oldText: string, newText: string) {
    const lineDiff = diffLines(oldText, newText, { newlineIsToken: false, ignoreNewlineAtEof: false });
    console.log(lineDiff);
    
    // Separate into old lines and new lines, add padding lines so that unedited lines stay at the same level
    let oLines: Change[] = [];
    let nLines: Change[] = [];
    const paddingLine: Change = { count: 0, value: "", added: false, removed: false};
    lineDiff.forEach((ch, lineno) => {
        const lines = ch.value.split("\n").slice(0, (lineno === lineDiff.length - 1) ? undefined : -1);
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
    // Add final padding lines if needed
    console.log(`oLines.length: ${oLines.length}, nLines.length: ${nLines.length}`);
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

    // Compare each line, and convert to HTML line by line
    let visualDiffLines: JSX.Element[] = []
    let oLineCount = 0;
    let nLineCount = 0;
    for (let i = 0; i < oLines.length; i++) {
        let oLineText = <div class={FILLER_LINE_STYLE}></div>
        let nLineText = <div class={FILLER_LINE_STYLE}></div>

        if (oLines[i].count === 0) {
            nLineText = (
                <div class={ADDED_LINE_STYLE}>
                    <span class={ADDED_TEXT_STYLE}>
                        {nLines[i].value}
                    </span>
                </div>
            );
            nLineCount += 1;
        }
        else if (nLines[i].count === 0) {
            oLineText = (
                <div class={REMOVED_LINE_STYLE}>
                    <span class={REMOVED_TEXT_STYLE}>
                        {oLines[i].value}
                    </span>
                </div>
            );
            oLineCount += 1;
        }
        else { // Determine diff between matched lines
            if (!oLines[i].removed && !nLines[i].added) {
                oLineText = (
                    <div class={REGULAR_LINE_STYLE}>
                        <span>
                            {oLines[i].value}
                        </span>
                    </div>
                );
                nLineText = (
                    <div class={REGULAR_LINE_STYLE}>
                        <span>
                            {nLines[i].value}
                        </span>
                    </div>
                );
            }
            else {
                let diff = diffWordsWithSpace(oLines[i].value, nLines[i].value);
                let oLineSpans: JSX.Element[] = [];
                let nLineSpans: JSX.Element[] = [];
                diff.forEach((ch) => {
                    if (ch.removed) {
                        const removedSpan = <span class={REMOVED_TEXT_STYLE}>{ch.value}</span>;
                        oLineSpans.push(removedSpan);
                    }
                    else if (ch.added) {
                        const addedSpan = <span class={ADDED_TEXT_STYLE}>{ch.value}</span>;
                        nLineSpans.push(addedSpan);
                    }
                    else {
                        const sharedSpan = <span class={REGULAR_TEXT_STYLE}>{ch.value}</span>;
                        oLineSpans.push(sharedSpan);
                        nLineSpans.push(sharedSpan);
                    }
                });

                oLineText = (
                    <div class={REMOVED_LINE_STYLE}>
                        <span>
                            {oLineSpans}
                        </span>
                    </div>
                );
                nLineText = (
                    <div class={ADDED_LINE_STYLE}>
                        <span>
                            {nLineSpans}
                        </span>
                    </div>
                );
            }
            oLineCount += 1;
            nLineCount += 1;
        }

        const oLineNumDisp = <div class={LINE_NUM_STYLE}>{oLines[i].count ? oLineCount : ""}</div>
        const nLineNumDisp = <div class={LINE_NUM_STYLE}>{nLines[i].count ? nLineCount : ""}</div>
        const visualDiffRow = (
            <div class="table-row">
                {oLineNumDisp}
                {oLineText}
                {nLineNumDisp}
                {nLineText}
            </div>
        );
        visualDiffLines.push(visualDiffRow);
    }

    return visualDiffLines;
}

export default function DiffDisplay(props: DiffDisplayProps) {
    const visualDiffLines = formatDiffLines(props.origText, props.changedText);
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
            {visualDiffLines}
        </table>
    );
}