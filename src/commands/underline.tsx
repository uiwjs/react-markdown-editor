import React from 'react';
import { ICommand} from './'

export const underline: ICommand = {
  name: 'underline',
  keyCommand: 'underline',
  button: { 'aria-label': 'Add underline text' },
  icon: (
    <svg width="14" height="14" viewBox="0 0 20 20">
      <path fill="currentColor" d="M10 17c3.3 0 6-2.7 6-6V3.5c0-.8-.7-1.5-1.5-1.5S13 2.7 13 3.5V11c0 1.7-1.3 3-3 3s-3-1.3-3-3V3.5C7 2.7 6.3 2 5.5 2S4 2.7 4 3.5V11c0 3.3 2.7 6 6 6zM16.5 19h-13c-.3 0-.5.2-.5.5s.2.5.5.5h13c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z" />
    </svg>
  ),
  execute: (editor, selection, position) => {
    const value = selection ? `<u>${selection}</u>` : '<u></u>';
    editor.replaceSelection(value);
    position.ch = !!selection ? position.ch : position.ch + 3;
    editor.setCursor(position.line, position.ch);
    editor.focus();
  },
};