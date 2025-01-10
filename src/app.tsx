import { useState } from 'preact/hooks'
//import TextArea from './components/TextArea'
import DiffDisplay from './components/DiffDisplay'
//import preactLogo from './assets/preact.svg'
//import viteLogo from '/vite.svg'
import './app.css'
import OptionsMenu from './components/OptionsMenu';
import { DiffOptions, OptionsContext } from "./context/OptionsContext";
import { TextInputState, TextInputContext } from "./context/TextInputContext";
import TextInput from './components/TextInput';

export function App() {
  //const [oldText, setOldText] = useState("");
  //const [newText, setNewText] = useState("");
  const [options, setOptions] = useState<DiffOptions>({ diffMode: "word", collapseLines: false });
  const [inputState, setInputState] = useState<TextInputState>({ oldInput: "", newInput: "", oldTextValue: "", newTextValue: "" });


  const swapInputs = () => {
    setInputState({ oldInput: inputState.newTextValue, newInput: inputState.oldTextValue, oldTextValue: inputState.newTextValue, newTextValue: inputState.oldTextValue })
  }

  return (
    <OptionsContext.Provider value={{ options: options, setOptions: setOptions }}>
      <TextInputContext.Provider value={{ inputState: inputState, setInputState: setInputState }}>
        <div class="w-full">
          <OptionsMenu/>
          <button
            name="swap-inputs"
            onClick={swapInputs}
          >
            Swap
          </button>
          <DiffDisplay/>
          <TextInput/>
        </div>
      </TextInputContext.Provider>
    </OptionsContext.Provider>
  )
}
