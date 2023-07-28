import { createRoot } from 'react-dom/client';
import data from '@uiw/react-markdown-editor/README.md';
import MarkdownPreviewExample from '@uiw/react-markdown-preview-example';
import styled from 'styled-components';
import { ExampleDemo } from './Example';
import { ReactComponent as Logo } from './logo.svg';

const Footer = styled.footer`
  text-align: center;
  padding: 25px 0 50px 0;
  font-size: 12px;
  line-height: 20px;
  a {
    color: var(--color-accent-fg);
  }
`;

const Github = MarkdownPreviewExample.Github;
const Example = MarkdownPreviewExample.Example;
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <MarkdownPreviewExample
    source={data.source}
    components={data.components}
    data={data.data}
    logo={<Logo style={{ maxHeight: 210 }} />}
    version={`v${VERSION}`}
  >
    <Github href="https://github.com/uiwjs/react-markdown-editor" />
    <Example>
      <ExampleDemo />
    </Example>
    <Footer>
      <div>
        Licensed under MIT. (Yes it&acute;s free and{' '}
        <a href="https://github.com/uiwjs/react-markdown-editor">open-sourced</a>)
      </div>
      <div>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiwjs/react-markdown-editor">
          © Kenny Wong
        </a>
        <span>&nbsp;2019</span>
      </div>
    </Footer>
  </MarkdownPreviewExample>,
);
