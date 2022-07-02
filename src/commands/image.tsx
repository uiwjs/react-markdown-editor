import { EditorSelection } from '@codemirror/state';
import { ICommand } from './';

export const image: ICommand = {
  name: 'image',
  keyCommand: 'image',
  button: { 'aria-label': 'Add image text' },
  icon: (
    <svg width="14" height="14" viewBox="0 0 20 20">
      <path
        fill="currentColor"
        d="M15 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-7H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 13l-6-5-2 2-4-5-4 8V4h16v11z"
      />
    </svg>
  ),
  execute: ({ state, view }) => {
    if (!state || !view) return;
    const main = view.state.selection.main;
    const txt = view.state.sliceDoc(view.state.selection.main.from, view.state.selection.main.to);
    view.dispatch({
      changes: {
        from: main.from,
        to: main.to,
        insert: `![](${txt})`,
      },
      selection: EditorSelection.range(main.from + 4, main.to + 4),
      // selection: { anchor: main.from + 4 },
    });
  },
};
