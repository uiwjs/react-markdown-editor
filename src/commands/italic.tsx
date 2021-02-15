import React from 'react';
import { ICommand} from './'

export const italic: ICommand = {
  name: 'italic',
  keyCommand: 'italic',
  button: { 'aria-label': 'Add italic text' },
  icon: (
    <svg width="12" height="12" viewBox="0 0 320 512">
      <path fill="currentColor" d="M204.758 416h-33.849l62.092-320h40.725a16 16 0 0 0 15.704-12.937l6.242-32C297.599 41.184 290.034 32 279.968 32H120.235a16 16 0 0 0-15.704 12.937l-6.242 32C96.362 86.816 103.927 96 113.993 96h33.846l-62.09 320H46.278a16 16 0 0 0-15.704 12.935l-6.245 32C22.402 470.815 29.967 480 40.034 480h158.479a16 16 0 0 0 15.704-12.935l6.245-32c1.927-9.88-5.638-19.065-15.704-19.065z" />
    </svg>
  ),
  execute: (editor, selection, position) => {
    const value = selection ? `*${selection}*` : `**`;
    editor.replaceSelection(value);
    position.ch = !!selection ? position.ch : position.ch + 1;
    editor.setCursor(position.line, position.ch);
    editor.focus();
  },
};