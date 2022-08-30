import BackToUp from '@uiw/react-back-to-top';
import GithubCorner from '@uiw/react-github-corners';
import MarkdownPreview from '@uiw/react-markdown-preview';
import '@wcj/dark-mode';
import DocumentStr from '../README.md';
import styles from './App.module.less';
import Footer from './components/Footer';
import { ReactComponent as Logo } from './logo.svg';
import { Example } from './Example';

const DocumentStrSource = DocumentStr.replace(/([\s\S]*)<!--dividing-->/, '').replace(/^\n*/g, '');

export default function App() {
  return (
    <div className={styles.warpper}>
      <BackToUp>Top</BackToUp>
      <dark-mode light="Light" dark="Dart" style={{ position: 'fixed' }}></dark-mode>
      <GithubCorner fixed target="__blank" href="https://github.com/uiwjs/react-markdown-editor" />
      <div className={styles.logo}>
        <Logo style={{ fill: 'currentColor' }} />
      </div>
      <Example />
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
