import { createContext } from "preact";
import { Dispatch } from "preact/hooks";

export type DiffMode = "word" | "char";

export interface DiffOptions {
  diffMode: DiffMode
  collapseLines: boolean
}

export interface DiffOptionsContext {
  options: DiffOptions,
  setOptions: Dispatch<DiffOptions>
}

export const OptionsContext = createContext<DiffOptionsContext|null>(null);
export default OptionsContext;

