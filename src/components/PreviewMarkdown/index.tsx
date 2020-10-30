import classnames from 'classnames'
import hljs from 'highlight.js';
import * as React from 'react';
import ReactMarkdown, { MarkdownAbstractSyntaxTree, ReactMarkdownProps } from 'react-markdown';
import { IProps } from '../../common/props';
import './hljs.less';
import './index.less';
import './markdown.less';

hljs.configure({
  classPrefix: '', // don't append class prefix
  tabReplace: '  ', // 2 spaces
});

export interface IPreviewMarkdown extends IProps {
  visible: boolean;
  previewProps?: ReactMarkdownProps;
  value?: string;
  prefixCls?: string;
  style?: React.CSSProperties;
}

export interface IPreviewMarkdownState {
  value?: string;
  visible?: boolean;
}

export default class PreviewMarkdown extends React.Component<IPreviewMarkdown, IPreviewMarkdownState> {
  public static defaultProps: IPreviewMarkdown = {
    prefixCls: 'md-editor',
    visible: true,
  }
  public node!: HTMLDivElement;
  constructor(props: IPreviewMarkdown) {
    super(props);
    this.state = {
      value: props.value,
      visible: props.visible,
    }
  }

  public componentDidMount() {
    this.highlight();
  }

  public show() {
    this.setState({ visible: true });
  }

  public hide() {
    this.setState({ visible: false });
  }
  static getDerivedStateFromProps(props: IPreviewMarkdown, state: IPreviewMarkdownState) {
    if (props.value !== state.value) {
      return {
        value: props.value
      }
    }
    return null;
  }

  public highlight() {
    const code = this.node.getElementsByTagName('code') as unknown as HTMLElement[];
    for (const value of code) {
      const tag = value.parentNode as HTMLElement;
      if (tag && tag.tagName === 'PRE') {
        hljs.highlightBlock(value);
      }
    }
  }

  public updateSource(value: string) {
    this.setState({ value }, () => {
      this.highlight();
    });
  }

  public render() {
    const { prefixCls, visible, value, previewProps, ...elementProps } = this.props;
    return (
      <div
        ref={(node: HTMLDivElement) => this.node = node}
        className={classnames(`${prefixCls}-preview`, {
          [`${prefixCls}-visible`]: this.state.visible,
        })}
        {...elementProps}
      >
        <ReactMarkdown
          className={classnames(`${prefixCls}-markdown`)}
          source={this.state.value}
          escapeHtml={false}
          allowNode={this.allowNode}
          {...previewProps}
        />
      </div>
    );
  }
  private allowNode = (node: MarkdownAbstractSyntaxTree) => {
    if (node.type === 'html' && node.value) {
      if (/<!--([^]+?)-->/.test(node.value)) {
        return false;
      }
    }
    return true;
  }
}