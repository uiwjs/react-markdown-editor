import * as React from "react";
import { IProps } from '../../common/props';
import CodeMirror from 'codemirror';
import './index.less';
import { ICommand, defaultCommands } from '../../commands';
import { IMarkdownEditor } from '../../';

export interface IToolBarProps extends IProps {
  editorProps: IMarkdownEditor;
  mode?: boolean;
  preview?: HTMLDivElement | null;
  container?: HTMLDivElement | null;
  containerEditor?: HTMLDivElement | null;
  prefixCls?: string;
  editor?: CodeMirror.Editor;
  toolbars?: (keyof (typeof defaultCommands))[] | ICommand[] | false;
  onClick?: (type: string) => void;
}

export default function ToolBar(props: IToolBarProps) {
  const { prefixCls = 'md-editor', className, onClick, toolbars = [], editor, mode, preview, container, containerEditor, editorProps = {}, ...htmlProps } = props;
  if (!toolbars || toolbars.length === 0) return null;
  function handleClick(execute: ICommand['execute']) {
    if (execute && editor) {
      execute(editor, editor.getSelection(), editor.getCursor(), { preview, container });
    }
  }
  return (
    <div className={`${prefixCls}-toolbar ${className} ${mode ? `${prefixCls}-toolbar-mode` : ''}`} {...htmlProps}>
      {[...toolbars].map((command, key) => {
        let buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {
          type: 'button',
        }
        const obj = typeof command === 'string' ? defaultCommands[command] : command;
        if (!obj) return;
        buttonProps.children = obj.icon;
        buttonProps.onClick = () => handleClick(obj.execute);
        if (obj.button && typeof obj.button === 'object') {
          const btn: React.ButtonHTMLAttributes<HTMLButtonElement> = obj.button;
          (Object.keys(btn) as (keyof React.ButtonHTMLAttributes<HTMLButtonElement>)[]).forEach((key) => {
            buttonProps[key] = btn[key];
          });
        } else if (typeof obj.button === 'function') {
          return React.cloneElement(obj.button(obj, editorProps, { preview, container, containerEditor, editor }), { key });
        }

        return (
          <button {...buttonProps} key={key} />
        );
      })}
    </div>
  );

}
