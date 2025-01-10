import { useState } from 'preact/hooks'
//import preactLogo from './assets/preact.svg'
//import viteLogo from '/vite.svg'
import './app.css'
import DiffDisplay from './components/DiffDisplay'
import OptionsMenu from './components/OptionsMenu';
import TextInput from './components/TextInput';
import { DiffOptions, OptionsContext } from "./context/OptionsContext";
import { TextInputState, TextInputContext } from "./context/TextInputContext";

export function App() {
  const defaultOptions: DiffOptions = {
    diffMode: "word",
    collapseLines: false
  };
  const [options, setOptions] = useState(defaultOptions);
  const [inputState, setInputState] = useState<TextInputState>({ oldInput: "", newInput: "", oldTextValue: "", newTextValue: "" });

  const diffDisplayBox = (
    <div class="h-[50svh] overflow-auto bg-gray-100/10 border border-neutral-200 rounded my-2 p-1">
      <DiffDisplay/>
    </div>
  );

  return (
    <OptionsContext.Provider value={{ options: options, setOptions: setOptions }}>
      <TextInputContext.Provider value={{ inputState: inputState, setInputState: setInputState }}>
        <div class="m-4 max-h-svh">
          {!(inputState.oldTextValue === "" && inputState.newTextValue === "") ? diffDisplayBox : <div/>}
          <TextInput/>
          <div class="m-auto">
            <OptionsMenu/>
          </div>
        </div>
      </TextInputContext.Provider>
    </OptionsContext.Provider>
  )
}
