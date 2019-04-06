import classnames from 'classnames'
import React from 'react';
import ReactMarkdown, { MarkdownAbstractSyntaxTree } from 'react-markdown';
import { IProps } from '../../common/props';
import './index.less';

export interface IPreviewMarkdown extends IProps {
  visble: boolean;
  value?: string;
  prefixCls?: string;
  style?: React.CSSProperties;
}

export interface IPreviewMarkdownState {
  value?: string;
}

export default class PreviewMarkdown extends React.Component<IPreviewMarkdown, IPreviewMarkdownState> {
  public static defaultProps: IPreviewMarkdown = {
    prefixCls: 'md-editor',
    visble: true,
  }
  constructor(props: IPreviewMarkdown) {
    super(props);
    this.state = {
      value: props.value,
    }
  }

  public updateSource(value: string) {
    this.setState({ value });
  }

  public render() {
    const { prefixCls, visble, value, ...elementProps } = this.props;
    return (
      <div
        className={classnames(`${prefixCls}-preview`, {
          [`${prefixCls}-visble`]: visble
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