import React, { useState, createRef, useRef, useEffect } from 'react';
import CodeMirror, { ICodeMirror } from './components/CodeMirror';
import MarkdownPreview, { MarkdownPreviewProps } from '@uiw/react-markdown-preview';
import ToolBar, { IToolBarProps } from './components/ToolBar';
import { getCommands, getModeCommands } from './commands';
import './index.less';

export * from './commands';

export interface IMarkdownEditor extends ICodeMirror {
  className?: string;
  prefixCls?: string,
  value?: string,
  height?: number,
  visible?: boolean,
  visibleEditor?: boolean,
  toolbars?: IToolBarProps['toolbars'],
  toolbarsMode?: IToolBarProps['toolbars'],
  previewProps?: MarkdownPreviewProps;
  options?: CodeMirror.EditorConfiguration,
}

export default function MarkdownEditor(props: IMarkdownEditor) {
  const {
    prefixCls = 'md-editor', className,
    onChange,
    toolbars = getCommands(),
    toolbarsMode = getModeCommands(),
    visible = true,
    visibleEditor = true,
    previewProps = {}, ...codemirrorProps } = props;
  const [value, setValue] = useState(props.value || '');
  const codeMirror = createRef<CodeMirror>();
  const previewContainer = useRef<HTMLDivElement | null>()
  const [editor, setEditor] = useState<CodeMirror.Editor>();
	const container = useRef<HTMLDivElement>(null);
	const containerEditor = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (codeMirror.current) {
      setEditor(codeMirror.current.editor);
    }
  }, [codeMirror.current]);

  const toolBarProps = {
    editor,
    preview: previewContainer.current,
    container: container.current,
    containerEditor: containerEditor.current,
    editorProps: props
  }
  return (
    <div ref={container}>
      <div className={`${prefixCls || ''} ${className || ''}`}>
        <ToolBar {...toolBarProps} toolbars={toolbarsMode} mode />
        <ToolBar {...toolBarProps} toolbars={toolbars} />
        <div className={`${prefixCls}-content`}>
          <div className={`${prefixCls}-content-editor`} ref={containerEditor}>
            {visibleEditor && (
              <CodeMirror
                visibleEditor={visibleEditor}
                {...codemirrorProps}
                ref={codeMirror}
                onChange={(editor, data) => {
                  setValue(editor.getValue());
                  onChange && onChange(editor, data, editor.getValue())
                }}
              />
            )}
          </div>
          <MarkdownPreview
            {...previewProps}
            data-visible={!!visible}
            className={`${prefixCls}-preview`}
            ref={(instance) => {
              if(instance && instance.mdp) {
                previewContainer.current = instance.mdp.current
              }
            }}
            source={value}
          />
        </div>
      </div>
    </div>
  );
}
