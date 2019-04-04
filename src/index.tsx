import classnames from 'classnames';
import * as React from "react";
import { HTMLDivProps, IProps } from './common/props';
import ToolBar from './components/ToolBar';
import './index.less';

export interface IMarkdownEditorProps extends IProps, HTMLDivProps {
  prefixCls: string,
  value?: string,
}

export default class MarkdownEditor extends React.PureComponent<IMarkdownEditorProps, {}> {
  public static displayName = 'MarkdownEditor';
  public static defaultProps: IMarkdownEditorProps = {
    prefixCls: 'md-editor',
    value: '',
  };
  public render() {
    const { prefixCls, className } = this.props;
    return (
      <div className={classnames(prefixCls, className)}>
        <ToolBar />
        tests
      </div>
    );
  }
}