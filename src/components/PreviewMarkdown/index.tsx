import classnames from 'classnames'
import hljs from 'highlight.js';
import * as React from 'react';
import ReactMarkdown, { MarkdownAbstractSyntaxTree } from 'react-markdown';
import { IProps } from '../../common/props';
import './hljs.less';
import './index.less';
import './markdown.less';

hljs.configure({
  classPrefix: '', // don't append class prefix
  tabReplace: '  ', // 2 spaces
});

export interface IPreviewMarkdown extends IProps {
  visble: boolean;
  value?: string;
  prefixCls?: string;
  style?: React.CSSProperties;
}

export interface IPreviewMarkdownState {
  value?: string;
  visble?: boolean;
}

export default class PreviewMarkdown extends React.Component<IPreviewMarkdown, IPreviewMarkdownState> {
  public static defaultProps: IPreviewMarkdown = {
    prefixCls: 'md-editor',
    visble: true,
  }
  public node!: HTMLDivElement;
  constructor(props: IPreviewMarkdown) {
    super(props);
    this.state = {
      value: props.value,
      visble: props.visble,
    }
  }

  public componentDidMount() {
    this.highlight();
  }

  public show() {
    this.setState({ visble: true });
  }

  public hide() {
    this.setState({ visble: false });
  }

  public componentWillReceiveProps(nextProps: IPreviewMarkdown) {
    if (nextProps.visble !== this.props.visble) {
      this.setState({ visble: nextProps.visble });
    }
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
    const { prefixCls, visble, value, ...elementProps } = this.props;
    return (
      <div
        ref={(node: HTMLDivElement) => this.node = node}
        className={classnames(`${prefixCls}-preview`, {
          [`${prefixCls}-visble`]: this.state.visble,
        })}
        {...elementProps}
      >
        <ReactMarkdown
          className={classnames(`${prefixCls}-markdown`)}
          source={this.state.value}
          escapeHtml={false}
          allowNode={this.allowNode}
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