import React from 'react';
import { ICommand} from './'

export const olist: ICommand = {
  name: 'olist',
  keyCommand: 'olist',
  button: { 'aria-label': 'Add olist text' },
  icon: (
    <svg width="12" height="12" viewBox="0 0 32 32">
      <path fill="currentColor" d="M12 2h20v4h-20v-4zM12 14h20v4h-20v-4zM12 26h20v4h-20v-4zM0 4c0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.209-1.791-4-4-4s-4 1.791-4 4zM0 16c0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.209-1.791-4-4-4s-4 1.791-4 4zM0 28c0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.209-1.791-4-4-4s-4 1.791-4 4z" />
    </svg>
  ),
  execute: (editor, selection, position) => {
    const value = selection ? `- ${selection}` : '- ';
    editor.replaceSelection(value);
    position.ch = !!selection ? position.ch : position.ch + 2;
    editor.setCursor(position.line, position.ch);
    editor.focus();
  },
};