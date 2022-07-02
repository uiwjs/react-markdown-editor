import { ICommand } from './';

export const header: ICommand = {
  name: 'header',
  keyCommand: 'header',
  button: { 'aria-label': 'Add header text' },
  icon: (
    <svg width="12" height="12" viewBox="0 0 512 512">
      <path
        fill="currentColor"
        d="M496 80V48c0-8.837-7.163-16-16-16H320c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h37.621v128H154.379V96H192c8.837 0 16-7.163 16-16V48c0-8.837-7.163-16-16-16H32c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h37.275v320H32c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h160c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16h-37.621V288H357.62v128H320c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h160c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16h-37.275V96H480c8.837 0 16-7.163 16-16z"
      />
    </svg>
  ),
  execute: ({ state, view }) => {
    if (!state || !view) return;
    const lineInfo = view.state.doc.lineAt(view.state.selection.main.from);
    let mark = '#';
    const matchMark = lineInfo.text.match(/^#+/);
    if (matchMark && matchMark[0]) {
      const txt = matchMark[0];
      if (txt.length < 6) {
        mark = txt + '#';
      }
    }
    if (mark.length > 6) {
      mark = '#';
    }
    const title = lineInfo.text.replace(/^#+/, '');
    view.dispatch({
      changes: {
        from: lineInfo.from,
        to: lineInfo.to,
        insert: `${mark}${title}`,
      },
      // selection: EditorSelection.range(lineInfo.from + mark.length, lineInfo.to),
      selection: { anchor: lineInfo.from + mark.length },
    });
  },
};
