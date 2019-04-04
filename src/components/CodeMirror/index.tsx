import CodeMirror from 'codemirror';
// import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import React, { Component } from 'react';
import { IReactCodeMirrorState } from '../../common/codemirror';
import { HTMLDivProps, IProps } from '../../common/props';
import './codemirror.less';
import './index.less';

export interface IReactCodeMirrorProps extends IProps, HTMLDivProps {
  value?: string,
  options: CodeMirror.EditorConfiguration,
  width?: number | string,
  height?: number | string,
}

export default class ReactCodeMirror extends Component<IReactCodeMirrorProps, IReactCodeMirrorState> {
  public static defaultProps: IReactCodeMirrorProps = {
    height: '100%',
    options: {
      mode: 'markdown',
      tabSize: 2,
    },
    value: '',
    width: '100%',
  }
  public textarea!: HTMLTextAreaElement;
  public editor!: CodeMirror.EditorFromTextArea;
  public constructor(props: Readonly<IReactCodeMirrorProps>) {
    super(props);
  }
  public render() {
    return (
      <textarea ref={(instance: HTMLTextAreaElement) => { this.textarea = instance; }} />
    )
  }

  public async componentDidMount() {
    this.renderCodeMirror(this.props);
  }

  public async componentWillReceiveProps(nextPros: IReactCodeMirrorProps) {
    this.renderCodeMirror(nextPros);
    // await this.setState({
    //   codeMirrorOptions: { ...this.state.codeMirrorOptions, ...nextPros.options },
    // });
  }

  private async renderCodeMirror(props: IReactCodeMirrorProps) {
    const { value, width, height, options } = props;
    // await import(`codemirror/mode/${options.mode}/${options.mode}.js`);
    // console.log('options:', options);
    // 生成codemirror实例
    this.editor = CodeMirror.fromTextArea(this.textarea, options);
    // 获取CodeMirror用于获取其中的一些常量
    // this.codemirror = CodeMirror;
    // 事件处理映射
    // const eventDict = this.getEventHandleFromProps();

    // Object.keys(eventDict).forEach((event: string) => {
    //   this.editor.on(eventDict[event], this.props[event]);
    // });

    // 初始化值
    this.editor.setValue(value || '');
    // markdown codemirror/mode/markdown/markdown.js

    this.editor.setOption(name, options.mode);

    if (width || height) {
      // 设置尺寸
      this.editor.setSize(width, height);
    }
  }
}