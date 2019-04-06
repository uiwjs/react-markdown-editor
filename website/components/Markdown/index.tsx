import classNames from 'classnames';
import hljs from 'highlight.js';
import React, { Component, HTMLAttributes } from 'react';
import ReactMarkdown, { MarkdownAbstractSyntaxTree } from 'react-markdown';
import styles from './styles/index.less';

hljs.configure({
  classPrefix: '', // don't append class prefix
  tabReplace: '  ', // 2 spaces
});

interface IMarkdown extends HTMLAttributes<HTMLDivElement> {
  source?: string;
}

export default class Markdown extends Component<IMarkdown, any> {
  public node!: HTMLDivElement;
  public render() {
    const { source, ...otherProps } = this.props;
    return (
      <div className={classNames(styles.container)} ref={(node: HTMLDivElement) => { this.node = node; }} {...otherProps}>
        <ReactMarkdown
          className={classNames(styles.markdown)}
          source={source}
          escapeHtml={false}
          allowNode={this.allowNode}
        />
      </div>
    );
  }
  public componentDidMount() {
    const code = this.node.getElementsByTagName('code') as unknown as HTMLElement[];
    for (const value of code) {
      const tag = value.parentNode as HTMLElement;
      if (tag && tag.tagName === 'PRE') {
        hljs.highlightBlock(value);
      }
    }
  }
  private allowNode = (node: MarkdownAbstractSyntaxTree) => {
    if (node.type === 'html' && node.value) {
      if (/<!--([^]+?)-->/.test(node.value)) {
        return false;
      }
      // const scriptValue = node.value.match(/<script.*?>(.*?)<\/script>/ig);
      // node.value.replace(/<script.*?>(.*?)<\/script>/, (te) => {
      //   console.log('te:', te);
      // });
    }
    return true;
  }

}
