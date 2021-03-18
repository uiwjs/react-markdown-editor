import * as CodeMirror from 'codemirror';
import 'codemirror/mode/markdown/markdown';
import React, { Component } from 'react';
import { DomEvent, IDefineModeOptions, IEventDict, IGetSelectionOptions, IInstance, ISetScrollOptions, ISetSelectionOptions } from '../../common/codemirror';
import './codemirror.less';
import './index.less';

declare let global: any;
declare let require: any;

const SERVER_RENDERED = (typeof navigator === 'undefined' || global.PREVENT_CODEMIRROR_RENDER === true);

let cm: any;
if (!SERVER_RENDERED) {
  // tslint:disable-next-line: no-var-requires
  cm = require('codemirror');
}

export interface ICodeMirror {
  value?: string,
  width?: number | string,
  height?: number | string,
  className?: string;
  cursor?: CodeMirror.Position;
  defineMode?: IDefineModeOptions;
  editorDidConfigure?: (editor: IInstance) => void;
  editorDidMount?: (editor: IInstance, value: string, cb: () => void) => void;
  editorWillMount?: () => void;
  editorWillUnmount?: (lib: any) => void;
  onClear?: (from: CodeMirror.Position, to: CodeMirror.Position) => void;
  onBlur?: DomEvent;
  onChange?: (editor: IInstance, data: CodeMirror.EditorChange, value: string) => void;
  onContextMenu?: DomEvent;
  onCopy?: DomEvent;
  onCursor?: (editor: IInstance, data: CodeMirror.Position) => void;
  onCut?: DomEvent;
  onCursorActivity?: (editor: IInstance) => void;
  onDblClick?: DomEvent;
  onDragEnter?: DomEvent;
  onDragLeave?: DomEvent;
  onDragOver?: DomEvent
  onDragStart?: DomEvent;
  onDrop?: DomEvent;
  onFocus?: DomEvent
  onGutterClick?: (editor: IInstance, lineNumber: number, gutter: string, event: Event) => void;
  onKeyDown?: DomEvent;
  onKeyPress?: DomEvent;
  onKeyUp?: DomEvent;
  onMouseDown?: DomEvent;
  onPaste?: DomEvent;
  onRenderLine?: (editor: IInstance, line: CodeMirror.LineHandle, element: HTMLElement) => void;
  onScroll?: (editor: IInstance, data: CodeMirror.ScrollInfo) => void;
  onSelection?: (editor: IInstance, data: IGetSelectionOptions) => void;
  onTouchStart?: DomEvent;
  onUpdate?: (editor: IInstance) => void;
  onViewportChange?: (editor: IInstance, start: number, end: number) => void;
  options?: CodeMirror.EditorConfiguration
  selection?: { ranges: ISetSelectionOptions[], focus?: boolean };
  scroll?: ISetScrollOptions;
  [key: string]: any,
}

export interface ICodeMirrorState {
  value: string;
}

export default class ReactCodeMirror extends Component<ICodeMirror, ICodeMirrorState> {
  public static defaultProps: ICodeMirror = {
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
  public editor!: CodeMirror.Editor;
  // public editor!: Doc | Editor | EditorFromTextArea | Editor;
  public constructor(props: Readonly<ICodeMirror>) {
    super(props);
    if (SERVER_RENDERED) {
      return;
    }

    if (this.props.editorWillMount) {
      this.props.editorWillMount();
    }
  }
  public render() {
    return (
      <textarea ref={(instance: HTMLTextAreaElement) => this.textarea = instance} />
    );
  }

  public componentDidMount() {
    if (SERVER_RENDERED) {
      return;
    }

    const { options } = this.props;
    if (this.props.defineMode) {
      if (this.props.defineMode.name && this.props.defineMode.fn) {
        cm.defineMode(this.props.defineMode.name, this.props.defineMode.fn);
      }
    }

    const editorOption = { tabSize: 2, lineNumbers: true, ...options, mode: 'markdown' };
    // 生成codemirror实例
    this.editor = cm.fromTextArea(this.textarea, editorOption) as CodeMirror.EditorFromTextArea;
    this.renderCodeMirror(this.props);
  }

  componentDidUpdate(prevProps: ICodeMirror) {
    const { value, width, height } = this.props;
    if (this.editor.getValue() !== value && value !== prevProps.value) {
      this.editor.setValue(value || '');
    }
    if (width !== prevProps.width || height !== prevProps.height) {
      // Setting Size
      this.editor.setSize(width, height);
    }
  }

  public shouldComponentUpdate(nextProps: ICodeMirror, nextState: ICodeMirrorState) {
    return nextProps.value !== this.props.value 
    || nextProps.options !== this.props.options
    || nextProps.height !== this.props.height
    || nextProps.width !== this.props.width;
  }
  // 将 props 中所有的事件处理函数映射并保存
  public getEventHandleFromProps(): IEventDict {
    const propNames = Object.keys(this.props);
    const eventHandle = propNames.filter((prop) => {
      return /^on+/.test(prop);
    });

    const eventDict: IEventDict = {};
    eventHandle.forEach((ele) => {
      eventDict[ele] = ele.replace(/^on[A-Z]/g, s => s.slice(2).toLowerCase()) as string;
    });

    return eventDict;
  }

  private renderCodeMirror(props: ICodeMirror) {
    const { value, width, height } = props;
    // 获取CodeMirror用于获取其中的一些常量
    // 事件处理映射
    const eventDict = this.getEventHandleFromProps();
    Object.keys(eventDict).forEach((event: string) => {
      const handle = this.props[event];
      this.editor.on(eventDict[event], handle);
    });
    // Init value
    this.editor.setValue(value || '');
    // this.editor.setOption(name, editorOption.mode);

    if (width || height) {
      // Setting size
      this.editor.setSize(width, height);
    }
  }
}