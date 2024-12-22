import { useState } from 'preact/hooks'
import { JSX } from "preact";
import TextArea from './components/TextArea'
import DiffDisplay from './components/DiffDisplay'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [origText, setOrigText] = useState("");
  const [changedText, setChangedText] = useState("");
  const [diffDisplayState, setDiffDisplayState] = useState({origText: "", changedText: ""})

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

  return (
    <>
      <DiffDisplay
        origText={diffDisplayState.origText}
        changedText={diffDisplayState.changedText}
      />
      <div class="grid grid-cols-2">
        <TextArea onInput={updateOrigText} class="w-full resize-none"></TextArea>
        <TextArea onInput={updateChangedText} class="w-full resize-none"></TextArea>
      </div>
      <button onClick={computeDiff}>Compute Diff</button>
    </>
  )
}
