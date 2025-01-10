import { useContext } from "preact/hooks";
import { OptionsContext } from "../context/OptionsContext";

export default function OptionsMenu() {
  const { options, setOptions } = useContext(OptionsContext)!;
  
  return (
    <fieldset class="w-max border border-neutral-200 rounded p-2 m-auto text-left">
      <legend class="text-center px-2 m-auto">Options</legend>
      <div>
        <label class="text-left mx-2">Diff level:</label>
        <input
          type="radio"
          id="diff-mode-option-1"
          name="diff-mode-option"
          onClick={() => setOptions({...options, diffMode: "word"})}
          checked={options.diffMode === "word"}
        />
        <label class="pl-0.5 pr-2" for="diff-option-1">
          Word
        </label>
        <input
          type="radio"
          id="diff-mode-option-2"
          name="diff-mode-option"
          onClick={() => setOptions({...options, diffMode: "char"})}
        />
        <label class="pl-0.5 pr-2" for="diff-option-2">
          Character
        </label>
      </div>
      <div>
        <label class="text-left mx-2" for="collapse-option">Collapse common lines:</label>
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