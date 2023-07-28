import { useState } from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';
import DocumentStr from '@uiw/react-markdown-editor/README.md';
import styled from 'styled-components';

const DocumentStrSource = DocumentStr.source.replace(/([\s\S]*)<!--dividing-->/, '').replace(/^\n*/g, '');
let count = 1;

const Wrapper = styled.div`
  max-width: 56rem;
`;

export function ExampleDemo() {
  const [visible, setVisible] = useState(true);
  const [mdstr, setMdstr] = useState<string>(DocumentStrSource);
  const [hideToolbar, setHideToolbar] = useState(true);
  const [toolbarBottom, setToolbarBottom] = useState(false);
  const [enableScroll, setEnableScroll] = useState(true);
  return (
    <Wrapper>
      <MarkdownEditor
        visible={visible}
        height="500px"
        value={mdstr}
        enableScroll={enableScroll}
        hideToolbar={hideToolbar}
        toolbarBottom={toolbarBottom}
      />
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
        <label>
          <input type="checkbox" checked={enableScroll} onChange={(evn) => setEnableScroll(evn.target.checked)} />
          enableScroll
        </label>
        <label>
          <input type="checkbox" checked={toolbarBottom} onChange={(evn) => setToolbarBottom(evn.target.checked)} />
          toolbarBottom
        </label>
        <button onClick={() => setVisible(!visible)}>{visible ? 'Show' : 'Hide'}</button>
        <span>v{VERSION}</span>
      </div>
    </Wrapper>
  );
}
