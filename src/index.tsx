import React, { useState, createRef, useRef, useImperativeHandle } from 'react';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { EditorView } from '@codemirror/view';
import CodeMirror, { ReactCodeMirrorProps, ReactCodeMirrorRef } from '@uiw/react-codemirror';
import MarkdownPreview, { MarkdownPreviewProps, MarkdownPreviewRef } from '@uiw/react-markdown-preview';
import ToolBar, { IToolBarProps } from './components/ToolBar';
import { getCommands, getModeCommands } from './commands';
import { defaultTheme } from './theme';
import './index.less';

export * from './commands';

export const scrollerStyle = EditorView.theme({
  '&.cm-editor, & .cm-scroller': {
    borderBottomRightRadius: '3px',
    borderBottomLeftRadius: '3px',
  },
});

export interface IMarkdownEditor extends ReactCodeMirrorProps {
  className?: string;
  prefixCls?: string;
  /** The raw markdown that will be converted to html (**required**) */
  value?: string;
  /** Shows a preview that will be converted to html. */
  visible?: boolean;
  visibleEditor?: boolean;
  /** Tool display settings. */
  toolbars?: IToolBarProps['toolbars'];
  /** Tool display settings. */
  toolbarsMode?: IToolBarProps['toolbars'];
  /** [@uiw/react-markdown-preview](https://github.com/uiwjs/react-markdown-preview#options-props) options */
  previewProps?: MarkdownPreviewProps;
}

export interface ToolBarProps {
  editor?: ReactCodeMirrorRef;
  preview: React.RefObject<MarkdownPreviewRef>;
  container: React.RefObject<HTMLDivElement>;
  containerEditor: React.RefObject<HTMLDivElement>;
  editorProps: IMarkdownEditor;
}

export interface MarkdownEditorRef {
  editor: React.RefObject<ReactCodeMirrorRef> | null;
  preview?: React.RefObject<MarkdownPreviewRef> | null;
}

export default React.forwardRef<MarkdownEditorRef, IMarkdownEditor>(MarkdownEditor);

function MarkdownEditor(
  props: IMarkdownEditor,
  ref?: ((instance: MarkdownEditorRef) => void) | React.RefObject<MarkdownEditorRef> | null,
) {
  const {
    prefixCls = 'md-editor',
    className,
    onChange,
    toolbars = getCommands(),
    toolbarsMode = getModeCommands(),
    visible = true,
    visibleEditor = true,
    previewProps = {},
    extensions = [],
    ...codemirrorProps
  } = props;
  const [value, setValue] = useState(props.value || '');
  const codeMirror = createRef<ReactCodeMirrorRef>();
  const previewContainer = useRef<MarkdownPreviewRef>(null);
  const container = useRef<HTMLDivElement>(null);
  const containerEditor = useRef<HTMLDivElement>(null);
  const [editor, setEditor] = useState<ReactCodeMirrorRef>();

  useImperativeHandle(
    ref,
    () => ({
      editor: codeMirror,
      preview: previewContainer,
    }),
    [codeMirror, previewContainer],
  );

  const toolBarProps: ToolBarProps = {
    editor: editor,
    preview: previewContainer,
    container: container,
    containerEditor: containerEditor,
    editorProps: props,
  };
  return (
    <div className={`${prefixCls || ''} wmde-markdown-var ${className || ''}`} ref={container}>
      <div>
        <ToolBar {...toolBarProps} toolbars={toolbarsMode} mode />
        <ToolBar {...toolBarProps} toolbars={toolbars} />
      </div>
      <div className={`${prefixCls}-content`} style={{ height: codemirrorProps.height }}>
        <div className={`${prefixCls}-content-editor`} ref={containerEditor}>
          {visibleEditor && (
            <CodeMirror
              theme={defaultTheme}
              {...codemirrorProps}
              extensions={[
                markdown({ base: markdownLanguage, codeLanguages: languages }),
                scrollerStyle,
                ...extensions,
              ]}
              height={
                typeof codemirrorProps.height === 'number' ? `${codemirrorProps.height}px` : codemirrorProps.height
              }
              ref={($ref) => {
                if (!editor && $ref && $ref.editor && $ref.state && $ref.view) {
                  setEditor({ ...$ref });
                }
              }}
              onChange={(value, viewUpdate) => {
                setValue(value);
                onChange && onChange(value, viewUpdate);
              }}
            />
          )}
        </div>
        <MarkdownPreview
          {...previewProps}
          data-visible={!!visible}
          className={`${prefixCls}-preview`}
          ref={previewContainer}
          source={value}
        />
      </div>
    </div>
  );
}
