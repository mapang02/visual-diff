import { JSX } from "preact";
import { diffWords, diffLines, diffWordsWithSpace, diffArrays } from "diff";

interface DiffDisplayProps {
    origText: string;
    changedText: string;
}
function computeDiff(origText: string, changedText: string) {
    //const diff = diffArrays(origText.split(/(\r?\n|[^\S\r\n]+)/), changedText.split(/(\r?\n|[^\S\r\n]+)/))
    const diff = diffWordsWithSpace(origText, changedText);
    console.log(JSON.stringify(diff));
    let leftText: JSX.Element[] = [];
    let rightText: JSX.Element[] = [];
    diff.forEach((d) => {
        if (d.added) {
            const addedText = (
                <span class="bg-green-400 whitespace-pre">
                    {d.value}
                </span>
            );
            rightText.push(addedText);
        }
        else if (d.removed) {
            const removedText = (
                <span class="bg-red-400 whitespace-pre">
                    {d.value}
                </span>
            );
            leftText.push(removedText);
        }
        else {
            const unchangedText = (
                <span class="whitespace-pre">
                    {d.value}
                </span>
            );
            leftText.push(unchangedText);
            rightText.push(unchangedText);
        }
    });

    return [leftText, rightText];
}

export default function DiffDisplay(props: DiffDisplayProps) {
    const [leftText, rightText] = computeDiff(props.origText, props.changedText);
    return (
        <>
            <div class="text-left grid grid-cols-2">
                <p>{leftText}</p>
                <p>{rightText}</p>
            </div>
        </>
    );
}