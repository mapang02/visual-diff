import { JSX } from "preact";
import { diffWords, diffLines, diffWordsWithSpace, diffArrays, Change, createPatch, structuredPatch } from "diff";

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
const FILLER_LINE_STYLE = "table-cell text-left bg-gray-50/10"

function formatDiffText(origText: string, changedText: string) {
    const diff = diffWordsWithSpace(origText, changedText);
    console.log(diff);

    let [oLineSpans, cLineSpans] = arrangeIntoLines(diff);
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
    
    let visualDiffLines: JSX.Element[] = []
    let oNumLines = 0;
    let cNumLines = 0;
    for (let i = 0; i < oLineSpans.length; i++) {
        // Convert TextSpan objects to HTML spans
        let hasRemovedText = false;
        const oParsedSpans = oLineSpans[i].map((textSpan) => {
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
        const oLineStyle = hasRemovedText ? REMOVED_LINE_STYLE : (oParsedSpans.length === 0 ? FILLER_LINE_STYLE : REGULAR_LINE_STYLE);
        if (oParsedSpans.length > 0) {
            oNumLines += 1;
        }
        const oLineCount = <div class="table-cell text-right">{oParsedSpans.length > 0 ? oNumLines : ""}</div>;
        const oLineText = <div class={oLineStyle}>{oParsedSpans}</div>;

        let hasAddedText = false;
        const cParsedSpans = cLineSpans[i].map((textSpan) => {
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
        const cLineStyle = hasAddedText ? ADDED_LINE_STYLE : (cParsedSpans.length === 0 ? FILLER_LINE_STYLE : REGULAR_LINE_STYLE);
        if (cParsedSpans.length > 0) {
            cNumLines += 1;
        }
        const cLineCount = <div class="table-cell text-right">{cParsedSpans.length > 0 ? cNumLines : ""}</div>;
        const cLineText = <div class={cLineStyle}>{cParsedSpans}</div>;

        const visualDiffRow = (
            <div class="table-row">
                {oLineCount}
                {oLineText}
                {cLineCount}
                {cLineText}
            </div>
        );
        visualDiffLines.push(visualDiffRow);
    }

    return (
        <table class="table-fixed w-full">
            <thead>
                <tr>
                    <th class="w-10"/>
                    <th/>
                    <th class="w-10"/>
                    <th/>
                </tr>
            </thead>
            {visualDiffLines}
        </table>
    );

    // Format spans into line divs
    /*
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
        const lineStyle = hasRemovedText ? REMOVED_LINE_STYLE : (parsedSpans.length === 0 ? FILLER_LINE_STYLE : REGULAR_LINE_STYLE);
        return (
            <div class="table-row">
                <div class="table-cell text-right">{i + 1}</div>
                <div class={lineStyle}>{parsedSpans}</div>
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
    */
}

function arrangeIntoLines(changes: Change[]) {
    let oLineSpans: TextSpan[][] = [];
    let cLineSpans: TextSpan[][] = [];
    let oCurrLine: TextSpan[] = [];
    let cCurrLine: TextSpan[] = [];
    changes.forEach((ch) => {
        // Start adding text to new line if \n is encountered in diff
        ch.value.split(/(\n)/).filter(s => s.length > 0).forEach((span) => {
            if (span === "\n") {
                // If this is within a change, add a dummy span so that empty line is colored correctly when processing later
                if (ch.removed) {
                    if (oCurrLine.length == 0) {
                        oCurrLine.push({text: "", removed: true});
                    }
                }
                else if (ch.added) {
                    if (cCurrLine.length == 0) {
                        cCurrLine.push({text: "", added: true});
                    }
                }

                // Start new line
                if (!ch.removed) {
                    cLineSpans.push(cCurrLine);
                    cCurrLine = [];
                }
                if (!ch.added) {
                    oLineSpans.push(oCurrLine);
                    oCurrLine = [];
                }
            }
            else {
                // Pad the smaller array so line numbers for shared chunks match
                if (!ch.added && !ch.removed) {
                    while (oLineSpans.length < cLineSpans.length) {
                        oLineSpans.push([]);
                    }
                    while (cLineSpans.length < oLineSpans.length) {
                        cLineSpans.push([]);
                    }
                }

                if (!ch.added) {
                    oCurrLine.push({text: span, removed: ch.removed});
                }
                if (!ch.removed) {
                    cCurrLine.push({text: span, added: ch.added});
                }
            }
        });
    });
    oLineSpans.push(oCurrLine);
    cLineSpans.push(cCurrLine);
    return [oLineSpans, cLineSpans];
}

export default function DiffDisplay(props: DiffDisplayProps) {
    /*
    const [oText, cText] = formatDiffText(props.origText, props.changedText);
    return (
        <>
            <div class="text-left grid grid-cols-2 whitespace-pre">
                <div>{oText}</div>
                <div>{cText}</div>
            </div>
        </>
    );
    */
   return formatDiffText(props.origText, props.changedText);
}