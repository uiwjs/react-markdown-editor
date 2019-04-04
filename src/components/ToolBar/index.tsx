import classnames from 'classnames';
import * as React from "react";
import { HTMLDivProps, IProps } from '../../common/props';
import icon from '../Icon/bar';
import './index.less';

interface IconType {
  [key: string]: HTMLElement
}


const barIcons: string[] = ['bold', 'italic', 'strike', 'olist', 'ulist', 'link', 'image', 'quote'];

export interface IToolBarProps extends IProps, HTMLDivProps {
  prefixCls: string,
}

export default class ToolBar extends React.PureComponent<IToolBarProps, {}> {
  public static displayName = 'ToolBar';
  public static defaultProps: IToolBarProps = {
    prefixCls: 'md-editor',
  };
  public render() {
    const { prefixCls, className, ...htmlProps } = this.props;
    return (
      <div className={classnames(`${prefixCls}-toolbar`, className)} {...htmlProps}>
        {barIcons.map((name: string, key) => {
          const Icon = (icon as unknown as IconType)[name];
          return (
            <button key={key}> {Icon} </button>
          );
        })}
      </div>
    );
  }
}