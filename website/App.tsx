import * as React from 'react';
import MarkdownEditor from '../src';
import styles from './App.less';
import GithubCorner from './components/GithubCorner';
import Logo from './Logo';

export default class App extends React.Component {
  public render() {
    return (
      <div className={styles.warpper}>
        <GithubCorner url="https://github.com/uiwjs/react-markdown-editor" />
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.editor}>
          <MarkdownEditor />
        </div>
      </div>
    );
  }
}