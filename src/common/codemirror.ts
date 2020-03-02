import * as CodeMirror from 'codemirror';

export interface IReactCodeMirrorState {
  codeMirrorOptions: object,
}


export interface IEventDict {
  [key: string]: string;
}


export interface ISetScrollOptions {
  x?: number | null;
  y?: number | null;
}


export interface ISetSelectionOptions {
  anchor: CodeMirror.Position;
  head: CodeMirror.Position;
}

export interface IGetSelectionOptions {
  ranges: ISetSelectionOptions[];
  origin: string;
  update: (ranges: ISetSelectionOptions[]) => void;
}

/* <tshacks>: laundry list of incorrect typings in @types/codemirror */
export interface IDoc extends CodeMirror.Doc {
  setCursor: (pos: CodeMirror.Position, ch?: number, options?: {}) => void;
  setSelections: (ranges: ISetSelectionOptions[]) => void;
}

export interface IInstance extends CodeMirror.Editor {
  options: CodeMirror.EditorConfiguration
}

export interface IDefineModeOptions {
  fn: () => CodeMirror.Mode<any>;
  name: string;
}

export type DomEvent = (editor: IInstance, event: Event) => void;
