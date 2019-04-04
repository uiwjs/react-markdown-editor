import classnames from 'classnames';
import * as React from "react";
import { HTMLDivProps, IProps } from '../../common/props';
import icon from '../Icon/bar';
import './index.less';

export interface IIconProps {
  [key: string]: HTMLElement
}

export interface IToolBarProps extends IProps {
  prefixCls: string,
  toolbars: string[],
  onClick: (type: string) => void,
}

export default class ToolBar extends React.PureComponent<IToolBarProps, {}> {
  public static displayName = 'ToolBar';
  public static defaultProps: IToolBarProps = {
    onClick: () => null,
    prefixCls: 'md-editor',
    toolbars: ['bold', 'italic', 'header', 'strike', 'underline', 'olist', 'ulist', 'todo', 'link', 'image', 'quote', 'preview'],
  };
  public render() {
    const { prefixCls, className, onClick, toolbars, ...htmlProps } = this.props;
    return (
      <div className={classnames(`${prefixCls}-toolbar`, className)} {...htmlProps}>
        {toolbars.map((name: string, key) => {
          const Icon = (icon as unknown as IIconProps)[name];
          return (
            <button key={key} onClick={onClick.bind(this, name)}> {Icon} </button>
          );
        })}
      </div>
    );
  }
}