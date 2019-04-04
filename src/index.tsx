import classnames from 'classnames';
import * as React from "react";
import { HTMLDivProps, IProps } from './common/props';
import CodeMirror from './components/CodeMirror';
import ToolBar from './components/ToolBar';
import './index.less';

export interface IMarkdownEditorProps extends IProps, HTMLDivProps {
  prefixCls: string,
  value?: string,
  height?: number,
}

export default class MarkdownEditor extends React.PureComponent<IMarkdownEditorProps, {}> {
  public static displayName = 'MarkdownEditor';
  public static defaultProps: IMarkdownEditorProps = {
    prefixCls: 'md-editor',
    value: '',
  };
  public render() {
    const { prefixCls, className, ...codemirrorProps } = this.props;
    return (
      <div className={classnames(prefixCls, className)}>
        <ToolBar />
        <CodeMirror {...codemirrorProps} />
      </div>
    );
  }
}