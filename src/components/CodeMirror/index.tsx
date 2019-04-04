import CodeMirror, { Doc, DocConstructor, Editor, EditorConfiguration, EditorFromTextArea } from 'codemirror';
import 'codemirror/mode/markdown/markdown';
import React, { Component } from 'react';
import { IReactCodeMirrorState } from '../../common/codemirror';
import { HTMLDivProps, IProps } from '../../common/props';
import './codemirror.less';
import './index.less';

export interface IReactCodeMirrorProps extends IProps, HTMLDivProps {
  value?: string,
  options: EditorConfiguration,
  width?: number | string,
  height?: number | string,
}

export default class ReactCodeMirror extends Component<IReactCodeMirrorProps, IReactCodeMirrorState> {
  public static defaultProps: IReactCodeMirrorProps = {
    height: '100%',
    options: {
      lineNumbers: true,
      mode: 'markdown',
      tabSize: 2,
    },
    value: '',
    width: '100%',
  }
  public textarea!: HTMLTextAreaElement;
  // public editor!: CodeMirror.Editor<Doc>;
  // public editor!: Doc | Editor | EditorFromTextArea;
  public editor!: any;
  // public editor!: CodeMirror.Editor | EditorFromTextArea;
  // public editor!: Doc | EditorFromTextArea;
  // public editor!: Doc | EditorFromTextArea;
  // public editor!: Doc | Editor | EditorFromTextArea | Editor;
  public constructor(props: Readonly<IReactCodeMirrorProps>) {
    super(props);
  }
  public render() {
    return (
      <textarea ref={(instance: HTMLTextAreaElement) => { this.textarea = instance; }} />
    )
  }

  public componentDidMount() {
    this.renderCodeMirror(this.props);
  }

  public async componentWillReceiveProps(nextPros: IReactCodeMirrorProps) {
    this.renderCodeMirror(nextPros);
  }

  private async renderCodeMirror(props: IReactCodeMirrorProps) {
    const { value, width, height, options } = props;
    const editorOption = { tabSize: 2, lineNumbers: true, ...options, mode: 'markdown' }
    // 生成codemirror实例
    this.editor = CodeMirror.fromTextArea(this.textarea, editorOption);
    // 获取CodeMirror用于获取其中的一些常量
    // this.codemirror = CodeMirror;
    // 事件处理映射
    // const eventDict = this.getEventHandleFromProps();
    // Object.keys(eventDict).forEach((event: string) => {
    //   this.editor.on(eventDict[event], this.props[event]);
    // });

    // 初始化值
    this.editor.setValue(value || '');
    this.editor.setOption(name, editorOption.mode);

    if (width || height) {
      // 设置尺寸
      this.editor.setSize(width, height);
    }
  }
}