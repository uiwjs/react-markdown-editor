import classnames from 'classnames';
import * as React from "react";
import { IProps } from './common/props';
import CodeMirror, { ICodeMirror } from './components/CodeMirror';
import MarkdownPreview, { MarkdownPreviewProps } from '@uiw/react-markdown-preview';
import ToolBar, { IToolBarProps } from './components/ToolBar';
import { getCommands, getModeCommands } from './commands';
import './index.less';

export interface IMarkdownEditor extends IProps, ICodeMirror {
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
  const [value, setValue] = React.useState(props.value || '');
  const codeMirror = React.createRef<CodeMirror>();
  const previewContainer = React.useRef<HTMLDivElement | null>()
  const [editor, setEditor] = React.useState<CodeMirror.Editor>();
	const container = React.useRef<HTMLDivElement>(null);
	const containerEditor = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
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
      <div className={classnames(prefixCls, className)}>
        <ToolBar {...toolBarProps} toolbars={toolbarsMode} mode />
        <ToolBar {...toolBarProps} toolbars={toolbars} />
        <div className={classnames(`${prefixCls}-content`)}>
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
            className={classnames(`${prefixCls}-preview`)}
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
