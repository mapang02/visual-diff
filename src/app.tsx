import { Dispatch, useContext, useState } from 'preact/hooks'
import { JSX, createContext } from "preact";
import TextArea from './components/TextArea'
import DiffDisplay from './components/DiffDisplay'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import OptionsMenu from './components/OptionsMenu';
import { DiffOptions, OptionsContext } from "./context/OptionsContext";

export function App() {
  const [oldText, setOldText] = useState("");
  const [newText, setNewText] = useState("");
  const [options, setOptions] = useState<DiffOptions>({ diffMode: "word", collapseLines: false });
  const [diffDisplayState, setDiffDisplayState] = useState({ oldText: "", newText: "" });

  /*
  const updateOrigText = (e: JSX.TargetedInputEvent<HTMLTextAreaElement>) => {
    setOrigText(e.currentTarget.value);
  }

  const updateChangedText = (e: JSX.TargetedInputEvent<HTMLTextAreaElement>) => {
    setChangedText(e.currentTarget.value);
  }

  const computeDiff = (_) => {
    console.log(origText);
    console.log(changedText);
    setDiffDisplayState({origText: origText, changedText: changedText});
  }
  */

  const submitInputText = (e: JSX.TargetedSubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    setDiffDisplayState({oldText: formData.get("old-text") as string, newText: formData.get("new-text") as string});
  }

  return (
    <OptionsContext.Provider value={{ options: options, setOptions: setOptions }}>
      <div class="w-full">
        <OptionsMenu/>
        <DiffDisplay
          oldText={diffDisplayState.oldText}
          newText={diffDisplayState.newText}
        />
        <form onSubmit={submitInputText}>
          <div class="grid grid-cols-2">
            <textarea
              name="old-text"
              class="w-full resize-none"
            />
            <textarea
              name="new-text"
              class="w-full resize-none"
            />
          </div>
          <button type="submit">Compute Diff</button>
        </form>
      </div>
    </OptionsContext.Provider>
  )
}
