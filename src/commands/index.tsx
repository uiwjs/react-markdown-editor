import { Editor, Position } from 'codemirror';
import { bold } from './bold';
import { italic } from './italic';
import { header } from './header';
import { strike } from './strike';
import { underline } from './underline';
import { olist } from './olist';
import { ulist } from './ulist';
import { link } from './link';
import { todo } from './todo';
import { image } from './image';
import { fullscreen } from './fullscreen';
import { preview } from './preview';
import { IMarkdownEditor } from '../';

export type ButtonHandle = (command: ICommand, props: IMarkdownEditor, options: {
  preview?: HTMLDivElement | null,
  container?: HTMLDivElement | null,
  containerEditor?: HTMLDivElement | null;
  editor?: Editor;
}) => JSX.Element

export type ICommand = {
  icon?: React.ReactElement;
  name?: string;
  keyCommand?: string;
  button?: ButtonHandle | React.ButtonHTMLAttributes<HTMLButtonElement>;
  execute?: (editor: Editor, selection: string, position: Position, opts: {
    preview?: HTMLDivElement | null,
    container?: HTMLDivElement | null,
  }) => void;
}

export const defaultCommands = { bold, italic, header, strike, underline, olist, ulist, link, todo, image, fullscreen, preview }

export const getCommands: () => ICommand[] = () => 
  Object.keys(defaultCommands).filter(key => !/^(fullscreen|preview)/.test(key))
    .map((key) => defaultCommands[key as (keyof (typeof defaultCommands))]);

export const getModeCommands: () => ICommand[] = () => [preview, fullscreen];