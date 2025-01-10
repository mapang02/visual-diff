import { JSX } from "preact";
import TextInputContext from "../context/TextInputContext";
import { useContext } from "preact/hooks";

interface TextAreaProps extends JSX.TextareaHTMLAttributes<HTMLTextAreaElement> {
  extraProp?: string;
}

// @ts-ignore
export default function TextArea(props: TextAreaProps) {
  const { inputState, setInputState } = useContext(TextInputContext)!;

  /*
  const submitInputText = (e: JSX.TargetedSubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    setInputState({oldText: formData.get("old-text") as string, newText: formData.get("new-text") as string});
  }
  */
    
  return (
    <div>
      <div class="grid grid-cols-2">
        <textarea
          name="old-text"
          class="w-full resize-none"
          onInput={(e) => setInputState({ ...inputState, oldInput: e.currentTarget.value })}
          value={inputState.oldInput}
        />
        <textarea
          name="new-text"
          class="w-full resize-none"
          onInput={(e) => setInputState({ ...inputState, newInput: e.currentTarget.value })}
          value={inputState.newInput}
        />
      </div>
      <button
        onClick={() => setInputState({ ...inputState, oldTextValue: inputState.oldInput, newTextValue: inputState.newInput })}
      >
        Compute Diff
      </button>
    </div>
  )
}