import { useState } from 'react';
import MarkdownEditor from '../';
import DocumentStr from '../README.md';
import styles from './App.module.less';

const DocumentStrSource = DocumentStr.replace(/([\s\S]*)<!--dividing-->/, '').replace(/^\n*/g, '');
let count = 1;

export function Example() {
  const [visible, setVisible] = useState(true);
  const [mdstr, setMdstr] = useState<string>(DocumentStrSource);
  const [hideToolbar, setHideToolbar] = useState(true);
  return (
    <div className={styles.editor}>
      <MarkdownEditor visible={visible} height="500px" value={mdstr} hideToolbar={hideToolbar} />
      <div style={{ marginTop: 10, display: 'flex', gap: '10px' }}>
        <button
          onClick={() => {
            count += 1;
            setMdstr(`String ${count}`);
          }}
        >
          Modify Markdown
        </button>
        <label>
          <input type="checkbox" checked={hideToolbar} onChange={(evn) => setHideToolbar(evn.target.checked)} />
          hideToolbar
        </label>
        <button onClick={() => setVisible(!visible)}>{visible ? 'Show' : 'Hide'}</button>
        <span>v{VERSION}</span>
      </div>
    </div>
  );
}
