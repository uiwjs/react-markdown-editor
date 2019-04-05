import classnames from 'classnames';
import * as React from "react";
import { IProps } from './common/props';
import CodeMirror, { ICodeMirror } from './components/CodeMirror';
import ToolBar from './components/ToolBar';
import './index.less';

export interface IMarkdownEditorProps extends IProps, ICodeMirror {
  prefixCls?: string,
  value?: string,
  height?: number,
  toolbars?: string[],
  options?: CodeMirror.EditorConfiguration,
}

interface IMarkdownEditorState {
  editor?: CodeMirror;
}

export default class MarkdownEditor extends React.PureComponent<IMarkdownEditorProps, IMarkdownEditorState, {}> {
  public static displayName = 'MarkdownEditor';
  public static defaultProps: IMarkdownEditorProps = {
    prefixCls: 'md-editor',
    value: '',
  };
  // public state: IMarkdownEditorState = {
  //   editor: undefined,
  // };
  public CodeMirror!: CodeMirror;
  public render() {
    const { prefixCls, className, toolbars, onChange, ...codemirrorProps } = this.props;
    return (
      <div className={classnames(prefixCls, className)}>
        <ToolBar toolbars={toolbars} onClick={this.onClick} />
        <CodeMirror
          ref={this.getInstance}
          {...codemirrorProps}
          onChange={this.onChange}
        />
      </div>
    );
  }
  public getInstance = (editor: CodeMirror) => {
    if (editor) {
      this.CodeMirror = editor;
    }
  }
  private onChange = () => {
    // private onChange = (editor: CodeMirror, editorChange: CodeMirror.EditorChange) => {
    // console.log('test', editor, editorChange);
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