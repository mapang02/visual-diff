import { JSX } from "preact";
import { diffWords, diffLines, diffWordsWithSpace, diffArrays, Change } from "diff";

interface DiffDisplayProps {
    origText: string;
    changedText: string;
}

interface TextSpan {
    text: string,
    added?: boolean,
    removed?: boolean
}

const REMOVED_TEXT_STYLE = "bg-red-400";
const ADDED_TEXT_STYLE = "bg-green-400";
const REGULAR_TEXT_STYLE = "";
const REMOVED_LINE_STYLE = "table-cell bg-red-200";
const ADDED_LINE_STYLE = "table-cell bg-green-200";
const REGULAR_LINE_STYLE = "table-cell";

function formatDiffText(origText: string, changedText: string) {
    const diff = diffWordsWithSpace(origText, changedText);

    let oLineSpans = arrangeIntoLines(diff, false, true);
    let cLineSpans = arrangeIntoLines(diff, true, false);
    console.log(oLineSpans);
    console.log(cLineSpans);

    // Make word diff prettier by merging diffs separated by non-edited spaces
    const allWhitespace = /^\s+$/;
    oLineSpans.forEach((oLine) => {
        for (let i = 1; i < oLine.length - 1; i++) {
            if (!!oLine[i - 1].removed && !!oLine[i + 1].removed && !oLine[i].removed && oLine[i].text.match(allWhitespace)) {
                oLine[i].removed = true;
            }
        }
    });
    cLineSpans.forEach((cLine) => {
        for (let i = 1; i < cLine.length - 1; i++) {
            if (!!cLine[i - 1].added && !!cLine[i + 1].added && !cLine[i].added && cLine[i].text.match(allWhitespace)) {
                cLine[i].added = true;
            }
        }
    });

    // Format spans in line divs
    const oLineDivs = oLineSpans.map((oLine, i) => {
        // Convert TextSpan objects to HTML spans
        let hasRemovedText = false;
        const parsedSpans = oLine.map((textSpan) => {
            if (textSpan.removed) {
                hasRemovedText = true;
                return (
                    <span class={REMOVED_TEXT_STYLE}>{textSpan.text}</span>
                );
            }
            return (
                <span class={REGULAR_TEXT_STYLE}>{textSpan.text}</span>
            );
        });

        // Build the div for the line
        return (
            <div class="table-row">
                <div class="table-cell text-right">{i + 1}</div>
                <div class={hasRemovedText ? REMOVED_LINE_STYLE : REGULAR_LINE_STYLE}>{parsedSpans}</div>
            </div>
        )
    });
    const cLineDivs = cLineSpans.map((cLine, i) => {
        // Convert TextSpan objects to HTML spans
        let hasAddedText = false;
        const parsedSpans = cLine.map((textSpan) => {
            if (textSpan.added) {
                hasAddedText = true;
                return (
                    <span class={ADDED_TEXT_STYLE}>{textSpan.text}</span>
                );
            }
            return (
                <span class={REGULAR_TEXT_STYLE}>{textSpan.text}</span>
            );
        });

        // Build the div for the line
        return (
            <div class="table-row">
                <div class="table-cell text-right">{i + 1}</div>
                <div class={hasAddedText ? ADDED_LINE_STYLE : REGULAR_LINE_STYLE}>{parsedSpans}</div>
            </div>
        )
    });

    const oLineSection = (
        <div class="table w-full">
            <div class="table-row">
                {oLineDivs}
            </div>
        </div>
    );
    const cLineSection = (
        <div class="table w-full">
            <div class="table-row">
                {cLineDivs}
            </div>
        </div>
    );
    return [oLineSection, cLineSection];
}

function arrangeIntoLines(changes: Change[], checkAdded: boolean, checkRemoved: boolean) {
    let lineSpans: TextSpan[][] = [];
    let currLineSpans: TextSpan[] = [];
    changes.forEach((ch) => {
        if (!(ch.added && !checkAdded) && !(ch.removed && !checkRemoved)) {
            // Start adding text to new line if \n is encountered in diff
            ch.value.split("\n").forEach((span, i) => {
                if (i > 0) {
                    // If this is within a change, add a dummy span so that empty line is colored correctly when processing later
                    if (currLineSpans.length == 0 && (ch.added || ch.removed)) {
                        currLineSpans.push({text: "", added: ch.added, removed: ch.removed});
                    }
    
                    lineSpans.push(currLineSpans);
                    currLineSpans = [];
                }
                currLineSpans.push({text: span, added: ch.added, removed: ch.removed});
            });
        }
    });
    lineSpans.push(currLineSpans);
    return lineSpans;
}

export default function DiffDisplay(props: DiffDisplayProps) {
    const [oText, cText] = formatDiffText(props.origText, props.changedText);
    return (
        <>
            <div class="text-left grid grid-cols-2 whitespace-pre">
                <div>{oText}</div>
                <div>{cText}</div>
            </div>
        </>
    );
}