import MarkdownEditor from '../';
import '@uiw/reset.css/reset.less';
import React, { useState } from 'react';
import DocumentStr from '../README.md';
import styles from './App.module.less';
import Footer from './components/Footer';
import GithubCorner from '@uiw/react-github-corners';
import MarkdownPreview from '@uiw/react-markdown-preview';
import Logo from './Logo';

const DocumentStrSource = DocumentStr.replace(/([\s\S]*)<!--dividing-->/, '').replace(/^\n*/g, '');
let count = 1;

export default function App() {
  const [visible, setVisible] = useState(true);
  const [mdstr, setMdstr] = useState<string>(DocumentStrSource);
  return (
    <div className={styles.warpper}>
      <GithubCorner fixed target="__blank" href="https://github.com/uiwjs/react-markdown-editor" />
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.editor}>
        <button onClick={() => {
          count += 1;
          setMdstr(`String ${count}`);
        }}>Modify Markdown</button>
        <button onClick={() => setVisible(!visible)}>{visible ? 'Show' : 'Hide'}</button>
        <MarkdownEditor
          visible={visible}
          options={{
            autofocus: true,
            showCursorWhenSelecting: true,
          }}
          height={500}
          value={mdstr}
        />
      </div>
      <MarkdownPreview source={DocumentStrSource} className={styles.doc} />
      <Footer name="Kenny Wong" href="https://github.com/uiwjs/react-markdown-editor" github="https://github.com/uiwjs/react-markdown-editor" year={2019}/>
    </div>
  );
}
