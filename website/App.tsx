import MarkdownEditor from '../';
import '@uiw/reset.css/reset.less';
import * as React from 'react';
import DocumentStr from '../README.md';
import styles from './App.module.less';
import Footer from './components/Footer';
import GithubCorner from '@uiw/react-github-corners';
import MarkdownPreview from '@uiw/react-markdown-preview';
import Logo from './Logo';

const DocumentStrSource = DocumentStr.replace(/([\s\S]*)<!--dividing-->/, '').replace(/^\n*/g, '');

interface IAppState {
  mdstr: string;
  visible: boolean;
}

let count = 1;

export default class App extends React.Component<any, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      mdstr: DocumentStrSource,
      visible: true,
    }
  }
  public render() {
    return (
      <div className={styles.warpper}>
        <GithubCorner fixed target="__blank" href="https://github.com/uiwjs/react-markdown-editor" />
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.editor}>
          <button onClick={() => {
            count += 1;
            this.setState({ mdstr: `String ${count}` });
          }}>Modify Markdown</button>
          <button onClick={() => {
            this.setState({ visible: !this.state.visible })
          }}>{this.state.visible ? 'Show' : 'Hide'}</button>
          <MarkdownEditor
            visible={this.state.visible}
            options={{
              autofocus: true,
              showCursorWhenSelecting: true,
            }}
            height={500}
            value={this.state.mdstr}
          />
        </div>
        <MarkdownPreview source={DocumentStrSource} className={styles.doc} />
        <Footer name="Kenny Wong" href="https://github.com/uiwjs/react-markdown-editor" github="https://github.com/uiwjs/react-markdown-editor" year={2019}/>
      </div>
    );
  }
}