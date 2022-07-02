import MarkdownEditor from '../';
import { useState } from 'react';
import '@wcj/dark-mode';
import DocumentStr from '../README.md';
import styles from './App.module.less';
import Footer from './components/Footer';
import GithubCorner from '@uiw/react-github-corners';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { ReactComponent as Logo } from './logo.svg';

const DocumentStrSource = DocumentStr.replace(/([\s\S]*)<!--dividing-->/, '').replace(/^\n*/g, '');
let count = 1;

export default function App() {
  const [visible, setVisible] = useState(true);
  const [mdstr, setMdstr] = useState<string>(DocumentStrSource);
  return (
    <div className={styles.warpper}>
      <dark-mode light="Light" dark="Dart" style={{ position: 'fixed' }}></dark-mode>
      <GithubCorner fixed target="__blank" href="https://github.com/uiwjs/react-markdown-editor" />
      <div className={styles.logo}>
        <Logo style={{ fill: 'currentColor' }} />
      </div>
      <div className={styles.editor}>
        <MarkdownEditor visible={visible} height="500px" value={mdstr} />
        <div style={{ marginTop: 10 }}>
          <button
            onClick={() => {
              count += 1;
              setMdstr(`String ${count}`);
            }}
          >
            Modify Markdown
          </button>
          <button onClick={() => setVisible(!visible)}>{visible ? 'Show' : 'Hide'}</button>
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
