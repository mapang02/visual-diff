import TextInputContext from "../context/TextInputContext";
import { useContext } from "preact/hooks";

const TEXT_INPUT_STYLE = "w-full p-2 rounded font-mono resize-none";

export default function TextArea() {
  const { inputState, setInputState } = useContext(TextInputContext)!;

  const swapInputs = () => {
    setInputState({
      oldInput: inputState.newTextValue,
      newInput: inputState.oldTextValue,
      oldTextValue: inputState.newTextValue,
      newTextValue: inputState.oldTextValue
    })
  }
    
  return (
    <div>
      <div class="grid grid-cols-[1fr_max-content_1fr] gap-x-2 gap-y-2 items-center">
        <div>
          Original text:
        </div>
        <div/>
        <div>
          Modified text:
        </div>
        <textarea
          name="old-text"
          class={TEXT_INPUT_STYLE}
          onInput={(e) => setInputState({ ...inputState, oldInput: e.currentTarget.value })}
          value={inputState.oldInput}
        />
        <button
          class="h-max p-1"
          onClick={swapInputs}
        >
          {"↔"}
        </button>
        <textarea
          name="new-text"
          class={TEXT_INPUT_STYLE}
          onInput={(e) => setInputState({ ...inputState, newInput: e.currentTarget.value })}
          value={inputState.newInput}
        />
      </div>
      <button
        class="my-2"
        onClick={() => setInputState({ ...inputState, oldTextValue: inputState.oldInput, newTextValue: inputState.newInput })}
      >
        Compute Diff
      </button>
    </div>
  )
}