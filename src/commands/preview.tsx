import React, { useEffect, useState } from 'react';
import { ICommand} from './';
import { IMarkdownEditor } from '../';

type Options = {
  preview?: HTMLDivElement | null;
  container?: HTMLDivElement | null;
  containerEditor?: HTMLDivElement | null;
  editor?: CodeMirror.Editor;
}

const Preview: React.FC<{ command: ICommand, editorProps: IMarkdownEditor & Options }> = (props) => {
  const { editorProps: { preview, containerEditor } } = props;
  const [visible, setVisible] = useState(props.editorProps.visible);
  useEffect(() => {
    setVisible(props.editorProps.visible);
  }, [props.editorProps.visible]);

  useEffect(() => {
    if (preview) {
      preview.style.borderBottomRightRadius = '3px';
    }
    if (preview && visible) {
      preview.style.width = '50%';
      preview.style.overflow = 'auto';
      preview.style.borderLeft = '1px solid #dfdfe0';
      preview.style.padding = '20px';
      if (containerEditor) {
        containerEditor.style.width = '50%'
      }
    } else if (preview) {
      preview.style.width = '0%';
      preview.style.overflow = 'hidden';
      preview.style.borderLeft = '0px';
      preview.style.padding = '0';
      if (containerEditor) {
        containerEditor.style.width = '100%'
      }
    }
  }, [preview, containerEditor, visible]);

  return (
    <button
      onClick={() => setVisible(!visible)}
      type="button"
      className={visible ? 'active' : ''}
    >
      {props.command.icon}
    </button>
  )
}

export const preview: ICommand = {
  name: 'preview',
  keyCommand: 'preview',
  button: (command, props, opts) => <Preview command={command} editorProps={{ ...props, ...opts }} />,
  icon: (
    <svg width="16" height="16" viewBox="0 0 32 32">
      <path fill="currentColor" d="M0 16c3.037-5.864 9.058-9.802 16-9.802s12.963 3.938 15.953 9.703l0.047 0.1c-3.037 5.864-9.058 9.802-16 9.802s-12.963-3.938-15.953-9.703l-0.047-0.1zM16 22.531c3.607 0 6.531-2.924 6.531-6.531s-2.924-6.531-6.531-6.531v0c-3.607 0-6.531 2.924-6.531 6.531s2.924 6.531 6.531 6.531v0zM16 19.265c-1.804 0-3.265-1.461-3.265-3.265s1.461-3.265 3.265-3.265v0c1.804 0 3.265 1.461 3.265 3.265s-1.461 3.265-3.265 3.265v0z" />
    </svg>
  ),
};