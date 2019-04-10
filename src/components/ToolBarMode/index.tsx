import classnames from 'classnames';
import * as React from "react";
import { IIconProps, IProps } from '../../common/props';
import icon from '../Icon/bar';
import './index.less';

export interface IToolBarModeProps extends IProps {
  prefixCls: string,
  toolbarsMode: string[],
  onClick: (type: string) => void,
}

export interface IToolBarModeState {
  preview: boolean,
  fullscreen: boolean,
  [key: string]: any,
}

export default class ToolBarMode extends React.PureComponent<IToolBarModeProps, IToolBarModeState, {}> {
  public static displayName = 'ToolBar';
  public static defaultProps: IToolBarModeProps = {
    onClick: () => null,
    prefixCls: 'md-editor',
    toolbarsMode: ['preview', 'fullscreen'],
  };
  constructor(props: IToolBarModeProps) {
    super(props);
    this.state = {
      fullscreen: false,
      preview: true,
    }
  }

  public updateMode(key: string, value?: boolean) {
    this.setState({ [key]: value });
  }

  public render() {
    const { prefixCls, className, onClick, toolbarsMode, ...htmlProps } = this.props;
    const { preview, fullscreen } = this.state;
    return (
      <div className={classnames(`${prefixCls}-toolbar`, `${prefixCls}-toolbar-mode`, className)} {...htmlProps}>
        {toolbarsMode.map((name: string, key) => {
          const Icon = (icon as unknown as IIconProps)[name];
          return (
            <button
              key={key}
              type="button"
              className={classnames({
                active: (preview && name === 'preview') || fullscreen && name === 'fullscreen',
              })}
              onClick={onClick.bind(this, name)}
            >
              {Icon}
            </button>
          );
        })}
      </div>
    );
  }
}