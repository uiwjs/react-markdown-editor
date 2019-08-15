import classnames from 'classnames';
import * as React from "react";
import { IInstance } from './common/codemirror';
import { IProps } from './common/props';
import CodeMirror, { ICodeMirror } from './components/CodeMirror';
import PreviewMarkdown, { IPreviewMarkdown } from './components/PreviewMarkdown';
import ToolBar from './components/ToolBar';
import ToolBarMode from './components/ToolBarMode';
import './index.less';

export interface IMarkdownEditor extends IProps, ICodeMirror {
  prefixCls?: string,
  value?: string,
  height?: number,
  visble?: boolean,
  toolbars?: string[],
  toolbarsMode?: string[],
  previewProps?: IPreviewMarkdown['previewProps'];
  options?: CodeMirror.EditorConfiguration,
}

interface IMarkdownEditorState { }

export default class MarkdownEditor extends React.PureComponent<IMarkdownEditor, IMarkdownEditorState> {
  public static displayName = 'MarkdownEditor';
  public static defaultProps: IMarkdownEditor = {
    onChange: () => null,
    prefixCls: 'md-editor',
    value: '',
    visble: true,
  };
  public container!: HTMLDivElement;
  public editorClientHeight!: number;
  public preview!: PreviewMarkdown;
  public toolbarsMode!: ToolBarMode;
  public CodeMirror!: CodeMirror;
  public render() {
    const { prefixCls, className, toolbars, toolbarsMode, onChange, visble, previewProps, ...codemirrorProps } = this.props;
    return (
      <div ref={(node: HTMLDivElement) => this.container = node}>
        <div className={classnames(prefixCls, className)}>
          <ToolBarMode ref={(mode: ToolBarMode) => this.toolbarsMode = mode} toolbarsMode={toolbarsMode} onClick={this.onClickMode} />
          <ToolBar toolbars={toolbars} onClick={this.onClick} />
          <div className={classnames(`${prefixCls}-content`)}>
            <CodeMirror
              ref={this.getInstance}
              {...codemirrorProps}
              onChange={this.onChange}
            />
            <PreviewMarkdown
              visble={visble}
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
    if (this.preview) {
      this.props.visble ? this.preview.show() : this.preview.hide();
      this.CodeMirror.editor.setSize(this.props.visble ? '50%' : '100%');
      const { clientHeight } = this.CodeMirror.editor.getScrollInfo();
      this.editorClientHeight = clientHeight;
      window.addEventListener('resize', this.handleResize, true);
    }
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize, true);
  }

  public handleResize = () => {
    const isfullscreen = this.toolbarsMode.state.fullscreen
    if (isfullscreen) {
      this.setEditorSize(isfullscreen);
    }
  }

  public componentWillReceiveProps(nextProps: IMarkdownEditor) {
    if (nextProps.visble !== this.props.visble) {
      nextProps.visble ? this.preview.show() : this.preview.hide();
      this.CodeMirror.editor.setSize(nextProps.visble ? '50%' : '100%');
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
      onChange(editor, data, value);
    }
  }

  private previewMarkdown() {
    if (this.preview) {
      this.preview.state.visble ? this.preview.hide() : this.preview.show();
      this.toolbarsMode.updateMode('preview', !this.preview.state.visble);
      this.CodeMirror.editor.setSize(this.preview.state.visble ? '100%' : '50%');
    }
  }

  private fullScreen() {
    const { prefixCls } = this.props;
    if (this.toolbarsMode && this.container) {
      const isfullscreen = !this.toolbarsMode.state.fullscreen
      this.toolbarsMode.updateMode('fullscreen', isfullscreen);
      this.container.className = isfullscreen ? classnames(`${prefixCls}-fullscreen`) : '';
      document.body.style.overflow = isfullscreen ? 'hidden' : 'initial';
      this.setEditorSize(isfullscreen);
    }
  }

  private setEditorSize(isfullscreen: boolean) {
    const clientHeight = document.body.clientHeight;
    this.CodeMirror.editor.setSize(this.preview.state.visble ? '50%' : '100%', isfullscreen ? clientHeight - 33 : this.editorClientHeight);
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