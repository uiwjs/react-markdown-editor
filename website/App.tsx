import * as React from 'react';
import MarkdownEditor from '../src';
import styles from './App.less';
import GithubCorner from './components/GithubCorner';
import logo from './logo.svg';

export default class App extends React.Component {
  public render() {
    return (
      <div className={styles.warpper}>
        <GithubCorner url="https://github.com/uiwjs/react-markdown-editor" />
        <img src={logo} />
        <div className={styles.editor}>
          <MarkdownEditor />
        </div>
      </div>
    );
  }
}