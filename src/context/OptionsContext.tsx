import { createContext } from "preact";
import { Dispatch } from "preact/hooks";

export type DiffMode = "word" | "char";

export interface DiffOptions {
  diffMode: DiffMode
  collapseLines: boolean
}

export interface DiffOptionsDispatch {
  options: DiffOptions,
  setOptions: Dispatch<DiffOptions>
}

export const OptionsContext = createContext<DiffOptionsDispatch|null>(null);
export default OptionsContext;

