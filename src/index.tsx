import classnames from 'classnames';
import * as React from "react";
import { IInstance } from './common/codemirror';
import { IProps } from './common/props';
import CodeMirror, { ICodeMirror } from './components/CodeMirror';
import PreviewMarkdown, { IPreviewMarkdown } from './components/PreviewMarkdown';
import ToolBar from './components/ToolBar';
import ToolBarMode, { IToolBarModeProps } from './components/ToolBarMode';
import './index.less';

export interface IMarkdownEditor extends IProps, ICodeMirror {
  prefixCls?: string,
  value?: string,
  height?: number,
  visible?: boolean,
  visibleEditor?: boolean,
  toolbars?: string[] | false,
  toolbarsMode?: IToolBarModeProps['toolbarsMode'] | false,
  previewProps?: IPreviewMarkdown['previewProps'];
  options?: CodeMirror.EditorConfiguration,
}

interface IMarkdownEditorState { }

export default class MarkdownEditor extends React.PureComponent<IMarkdownEditor, IMarkdownEditorState> {
  public static displayName = 'MarkdownEditor';
  public static defaultProps: IMarkdownEditor = {
    onChange: () => null,
    onBlur: () => null,
    prefixCls: 'md-editor',
    value: '',
    visibleEditor: true,
    visible: true,
  };
  public container!: HTMLDivElement;
  public editorClientHeight!: number;
  public preview!: PreviewMarkdown;
  public toolbarsMode!: ToolBarMode;
  public CodeMirror!: CodeMirror;
  public render() {
    const { prefixCls, className, toolbars, toolbarsMode, onChange, onBlur, visible: visible, visibleEditor: visibleEditor, previewProps, ...codemirrorProps } = this.props;
    return (
      <div ref={(node: HTMLDivElement) => this.container = node}>
        <div className={classnames(prefixCls, className)}>
          <ToolBarMode ref={(mode: ToolBarMode) => this.toolbarsMode = mode} toolbarsMode={toolbarsMode} onClick={this.onClickMode} />
          <ToolBar toolbars={toolbars} onClick={this.onClick} />
          <div className={classnames(`${prefixCls}-content`)}>
            {visibleEditor && (
              <CodeMirror
                visibleEditor={visibleEditor}
                ref={this.getInstance}
                {...codemirrorProps}
                onChange={this.onChange}
                onBlur={this.onBlur}
              />
            )}
            <PreviewMarkdown
              visible={visible}
              ref={(pmd: PreviewMarkdown) => this.preview = pmd}
              value={this.props.value}
              previewProps={previewProps}
            />
          </div>
        </div>
      </div>
    );
  }

  public componentDidMount() {
    if (this.preview && this.CodeMirror) {
      this.props.visible ? this.preview.show() : this.preview.hide();
      this.CodeMirror.editor.setSize(this.props.visible ? '50%' : '100%');
      const { clientHeight } = this.CodeMirror.editor.getScrollInfo();
      this.editorClientHeight = clientHeight;
      window.addEventListener('resize', this.handleResize, true);
    }
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize, true);
  }

  public handleResize = () => {
    const isFullScreen = this.toolbarsMode.state.fullscreen
    if (isFullScreen) {
      this.setEditorSize(isFullScreen);
    }
  }

  public componentWillReceiveProps(nextProps: IMarkdownEditor) {
    if (nextProps.visible !== this.props.visible) {
      nextProps.visible ? this.preview.show() : this.preview.hide();
      this.CodeMirror.editor.setSize(nextProps.visible ? '50%' : '100%');
    }
  }

  public getInstance = (editor: CodeMirror) => {
    if (editor) {
      this.CodeMirror = editor;
    }
  }
  private onChange = (editor: IInstance, data: CodeMirror.EditorChange, value: string) => {
    const { onChange } = this.props as IMarkdownEditor;
    if (onChange) {
      if (this.preview) {
        this.preview.updateSource(editor.getValue());
      }
      onChange(editor, data, editor.getValue());
    }
  }

  private onBlur = (editor: IInstance, event: Event) => {
    const { onBlur } = this.props as IMarkdownEditor;
    if (onBlur) {
      onBlur(editor, event);
    }
  }

  private previewMarkdown() {
    if (this.preview) {
      this.preview.state.visible ? this.preview.hide() : this.preview.show();
      this.toolbarsMode.updateMode('preview', !this.preview.state.visible);
      this.CodeMirror.editor.setSize(this.preview.state.visible ? '100%' : '50%');
    }
  }

  private fullScreen() {
    const { prefixCls } = this.props;
    if (this.toolbarsMode && this.container) {
      const isFullScreen = !this.toolbarsMode.state.fullscreen
      this.toolbarsMode.updateMode('fullscreen', isFullScreen);
      this.container.className = isFullScreen ? classnames(`${prefixCls}-fullscreen`) : '';
      document.body.style.overflow = isFullScreen ? 'hidden' : 'initial';
      this.setEditorSize(isFullScreen);
    }
  }

  private setEditorSize(isFullScreen: boolean) {
    const clientHeight = document.body.clientHeight;
    this.CodeMirror.editor.setSize(this.preview.state.visible ? '50%' : '100%', isFullScreen ? clientHeight - 33 : this.editorClientHeight);
  }

  private onClickMode = (type: string) => {
    if (type === 'preview') {
      this.previewMarkdown();
      return;
    }
    if (type === 'fullscreen') {
      this.fullScreen();
      return;
    }
  }

  private onClick = (type: string) => {
    const selection = this.CodeMirror.editor.getSelection();
    const pos = this.CodeMirror.editor.getCursor();
    let value = '';
    // 'header', 'strike', 'underline', 'olist', 'ulist', 'todo', 'link', 'image', 'quote', 'preview'
    if (type === 'bold') {
      value = selection ? `**${selection}**` : `****`;
      pos.ch = selection ? pos.ch : pos.ch + 2;
    }
    if (type === 'italic') {
      value = selection ? `*${selection}*` : `**`;
      pos.ch = selection ? pos.ch : pos.ch + 1;
    }
    if (type === 'header') {
      value = selection ? `# ${selection}` : '# ';
      pos.ch = selection ? pos.ch : pos.ch + 2;
    }
    if (type === 'strike') {
      value = selection ? `~~${selection}~~` : '~~~~';
      pos.ch = selection ? pos.ch : pos.ch + 2;
    }
    if (type === 'underline') {
      value = selection ? `<u>${selection}</u>` : '<u></u>';
      pos.ch = selection ? pos.ch : pos.ch + 3;
    }
    if (type === 'olist') {
      value = selection ? `- ${selection}` : '- ';
      pos.ch = selection ? pos.ch : pos.ch + 2;
    }
    if (type === 'ulist') {
      value = selection ? `1. ${selection}` : '1. ';
      pos.ch = selection ? pos.ch : pos.ch + 3;
    }
    if (type === 'todo') {
      value = selection ? `- [ ] ${selection}` : '- [ ] ';
      pos.ch = selection ? pos.ch : pos.ch + 6;
    }
    if (type === 'link') {
      value = '[连接说明](连接地址 "连接标题")';
    }
    if (type === 'image') {
      value = selection ? `${selection} ![](图片地址 "图片描述")` : '![图片描述](图片地址 "图片描述")\n';
    }
    if (type === 'quote') {
      value = selection ? `> ${selection}` : '> ';
      pos.ch = selection ? pos.ch : pos.ch + 2;
    }
    this.CodeMirror.editor.replaceSelection(value);
    this.CodeMirror.editor.focus();
    this.CodeMirror.editor.setCursor(pos.line, pos.ch);
  }
}