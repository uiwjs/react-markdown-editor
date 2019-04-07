import classnames from 'classnames';
import * as React from "react";
import { IInstance } from './common/codemirror';
import { IProps } from './common/props';
import CodeMirror, { ICodeMirror } from './components/CodeMirror';
import PreviewMarkdown from './components/PreviewMarkdown';
import ToolBar from './components/ToolBar';
import './index.less';

export interface IMarkdownEditor extends IProps, ICodeMirror {
  prefixCls?: string,
  value?: string,
  height?: number,
  toolbars?: string[],
  options?: CodeMirror.EditorConfiguration,
}

interface IMarkdownEditorState {
  preview: boolean;
}

export default class MarkdownEditor extends React.PureComponent<IMarkdownEditor, IMarkdownEditorState, {}> {
  public static displayName = 'MarkdownEditor';
  public static defaultProps: IMarkdownEditor = {
    onChange: () => null,
    prefixCls: 'md-editor',
    value: '',
  };
  public preview!: PreviewMarkdown;
  public CodeMirror!: CodeMirror;
  constructor(props: IMarkdownEditor) {
    super(props);
    this.state = {
      preview: true,
    }
  }
  public render() {
    const { prefixCls, className, toolbars, onChange, ...codemirrorProps } = this.props;
    return (
      <div className={classnames(prefixCls, className)}>
        <ToolBar toolbars={toolbars} onClick={this.onClick} />
        <div className={classnames(`${prefixCls}-content`)}>
          <CodeMirror
            width={this.state.preview ? '50%' : '100%'}
            ref={this.getInstance}
            {...codemirrorProps}
            onChange={this.onChange}
          />
          <PreviewMarkdown
            ref={(pmd: PreviewMarkdown) => this.preview = pmd}
            value={this.props.value}
            visble={this.state.preview}
          />
        </div>
      </div>
    );
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
    this.setState({ preview: !this.state.preview });
  }
  private onClick = (type: string) => {
    if (type === 'preview') {
      this.previewMarkdown();
      return;
    }
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