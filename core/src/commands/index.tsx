import { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { bold } from './bold';
import { code, codeBlock } from './code';
import { italic } from './italic';
import { header } from './header';
import { strike } from './strike';
import { underline } from './underline';
import { olist } from './olist';
import { ulist } from './ulist';
import { quote } from './quote';
import { link } from './link';
import { todo } from './todo';
import { image } from './image';
import { redo } from './redo';
import { undo } from './undo';
import { fullscreen } from './fullscreen';
import { preview } from './preview';
import { IMarkdownEditor, ToolBarProps } from '..';

export type ButtonHandle = (command: ICommand, props: IMarkdownEditor, options: ToolBarProps) => JSX.Element;

export type ICommand = {
  icon?: React.ReactElement;
  name?: string;
  keyCommand?: string;
  button?: ButtonHandle | React.ButtonHTMLAttributes<HTMLButtonElement>;
  execute?: (editor: ReactCodeMirrorRef) => void;
};

export const defaultCommands = {
  undo,
  redo,
  bold,
  italic,
  header,
  strike,
  underline,
  quote,
  olist,
  ulist,
  todo,
  link,
  image,
  code,
  codeBlock,
  fullscreen,
  preview,
};

export const getCommands: () => ICommand[] = () =>
  Object.keys(defaultCommands)
    .filter((key) => !/^(fullscreen|preview)/.test(key))
    .map((key) => defaultCommands[key as keyof typeof defaultCommands]);

export const getModeCommands: () => ICommand[] = () => [preview, fullscreen];
