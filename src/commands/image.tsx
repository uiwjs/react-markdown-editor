import React from 'react';
import { ICommand} from './'

export const image: ICommand = {
  name: 'image',
  keyCommand: 'image',
  button: { 'aria-label': 'Add image text' },
  icon: (
    <svg width="14" height="14" viewBox="0 0 20 20">
      <path fill="currentColor" d="M15 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-7H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 13l-6-5-2 2-4-5-4 8V4h16v11z" />
    </svg>
  ),
  execute: (editor, selection, position) => {
    const value = selection ? `${selection} ![]()` : '![]()\n';
    editor.replaceSelection(value);
    // position.ch = !!selection ? position.ch : position.ch + 1;
    editor.setCursor(position.line, position.ch);
    editor.focus();
  },
};
