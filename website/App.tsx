import * as React from 'react';
import DocumentStr from '../README.md';
import MarkdownEditor from '../src';
import styles from './App.less';
import Footer from './components/Footer';
import GithubCorner from './components/GithubCorner';
import ReactMarkdown from './components/Markdown';
import Logo from './Logo';

export default class App extends React.Component {
  public render() {
    const DocumentStrSource = DocumentStr.replace(/([\s\S]*)<!--dividing-->/, '').replace(/^\n*/g, '');
    return (
      <div className={styles.warpper}>
        <GithubCorner url="https://github.com/uiwjs/react-markdown-editor" />
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.editor}>
          <MarkdownEditor
            options={{
              autofocus: true,
              showCursorWhenSelecting: true,
            }}
            height={500}
            value={DocumentStrSource}
          />
        </div>
        <ReactMarkdown source={DocumentStrSource} className={styles.doc} />
        <Footer name="Kenny Wong" href="" year={2019}/>
      </div>
    );
  }
}