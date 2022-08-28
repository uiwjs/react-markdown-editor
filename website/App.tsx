import { useState } from 'react';
import BackToUp from '@uiw/react-back-to-top';
import GithubCorner from '@uiw/react-github-corners';
import MarkdownPreview from '@uiw/react-markdown-preview';
import '@wcj/dark-mode';
import DocumentStr from '../README.md';
import MarkdownEditor from '../';
import styles from './App.module.less';
import Footer from './components/Footer';
import { ReactComponent as Logo } from './logo.svg';

const DocumentStrSource = DocumentStr.replace(/([\s\S]*)<!--dividing-->/, '').replace(/^\n*/g, '');
let count = 1;

export default function App() {
  const [visible, setVisible] = useState(true);
  const [mdstr, setMdstr] = useState<string>(DocumentStrSource);
  const [hideToolbar, setHideToolbar] = useState(true);
  return (
    <div className={styles.warpper}>
      <BackToUp>Top</BackToUp>
      <dark-mode light="Light" dark="Dart" style={{ position: 'fixed' }}></dark-mode>
      <GithubCorner fixed target="__blank" href="https://github.com/uiwjs/react-markdown-editor" />
      <div className={styles.logo}>
        <Logo style={{ fill: 'currentColor' }} />
      </div>
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
      <MarkdownPreview source={DocumentStrSource} className={styles.doc} />
      <Footer
        name="Kenny Wong"
        href="https://github.com/uiwjs/react-markdown-editor"
        github="https://github.com/uiwjs/react-markdown-editor"
        year={2019}
      />
    </div>
  );
}
