import { createContext } from "preact";
import { Dispatch } from "preact/hooks";

export interface TextInputState {
  oldInput: string,
  newInput: string,
  oldTextValue: string,
  newTextValue: string
}

export interface TextInputStateDispatch {
  inputState: TextInputState,
  setInputState: Dispatch<TextInputState>
}

export const TextInputContext = createContext<TextInputStateDispatch|null>(null);
export default TextInputContext;

