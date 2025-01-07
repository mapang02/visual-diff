import { JSX } from "preact";
import { useContext } from "preact/hooks";
import { OptionsContext } from "../context/OptionsContext";

interface OptionsMenuProps extends JSX.TextareaHTMLAttributes<HTMLTextAreaElement> {
    extraProp?: string;
}

export default function OptionsMenu(props: OptionsMenuProps) {
    const { options, setOptions } = useContext(OptionsContext)!;
    
    return (
        <fieldset>
            <legend>Option:</legend>
            <div>
                <input
                    type="radio"
                    id="diff-mode-option-1"
                    name="diff-mode-option"
                    onClick={() => setOptions({...options, diffMode: "word"})}
                    checked={options.diffMode === "word"}
                />
                <label for="diff-option-1">Word</label>
                <input
                    type="radio"
                    id="diff-mode-option-2"
                    name="diff-mode-option"
                    onClick={() => setOptions({...options, diffMode: "char"})}
                />
                <label for="diff-option-2">Character</label>
            </div>
            <div>
                <label for="collapse-option">Collapse common lines:</label>
                <input
                    type="checkbox"
                    id="collapse-option"
                    name="collapse-option"
                    onClick={() => setOptions({...options, collapseLines: !options.collapseLines})}
                />
            </div>
        </fieldset>
    );
}