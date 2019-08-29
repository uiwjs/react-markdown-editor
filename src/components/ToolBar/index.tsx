import classnames from 'classnames';
import * as React from "react";
import { IIconProps, IProps } from '../../common/props';
import icon from '../Icon/bar';
import './index.less';

export interface IToolBarProps extends IProps {
  prefixCls: string,
  toolbars: string[] | false,
  onClick: (type: string) => void,
}

export default class ToolBar extends React.PureComponent<IToolBarProps, {}> {
  public static displayName = 'ToolBar';
  public static defaultProps: IToolBarProps = {
    onClick: () => null,
    prefixCls: 'md-editor',
    toolbars: ['bold', 'italic', 'header', 'strike', 'underline', 'olist', 'ulist', 'todo', 'link', 'image', 'quote'],
  };
  public render() {
    const { prefixCls, className, onClick, toolbars, ...htmlProps } = this.props;
    if (!toolbars || toolbars.length === 0) return null;
    return (
      <div className={classnames(`${prefixCls}-toolbar`, className)} {...htmlProps}>
        {toolbars.map((name: string, key) => {
          const Icon = (icon as unknown as IIconProps)[name];
          return (
            <button type="button" key={key} onClick={onClick.bind(this, name)}> {Icon} </button>
          );
        })}
      </div>
    );
  }
}