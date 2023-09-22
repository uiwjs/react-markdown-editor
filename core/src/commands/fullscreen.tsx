import React, { useEffect, useRef, useState } from 'react';
import { ICommand } from '.';
import { IMarkdownEditor, ToolBarProps } from '..';

const Fullscreen: React.FC<{ command: ICommand; editorProps: IMarkdownEditor & ToolBarProps }> = (props) => {
  const { editorProps } = props;
  const $height = useRef<number>(0);
  const [full, setFull] = useState(false);
  const fullRef = useRef(full);
  const entriesHandle: ResizeObserverCallback = (entries: ResizeObserverEntry[]) => {
    for (const entry of entries) {
      if (!$height.current) {
        $height.current = entry.target.clientHeight;
      }
      if (editorProps.editor?.current?.view?.dom) {
        if (fullRef.current) {
          editorProps.editor.current.view.dom.style.height = `${entry.target.clientHeight}px`;
        } else {
          editorProps.editor.current.view.dom.removeAttribute('style');
        }
      }
    }
    robserver.current?.disconnect();
    robserver.current = undefined;
  };

  const robserver = useRef<ResizeObserver | undefined>(new ResizeObserver(entriesHandle));

  useEffect(() => {
    if (!robserver.current) {
      robserver.current = new ResizeObserver(entriesHandle);
    }
    if (
      editorProps.containerEditor &&
      editorProps.containerEditor.current &&
      editorProps.containerEditor.current.parentElement &&
      robserver.current
    ) {
      const parentElement = editorProps.containerEditor.current.parentElement;
      robserver.current.observe(parentElement);
    }
    return () => {
      if (robserver.current) {
        robserver.current.disconnect();
        robserver.current = undefined;
      }
    };
  }, [editorProps.containerEditor, entriesHandle, editorProps.editor, full, robserver]);

  useEffect(() => {
    if (!document) return;
    if (editorProps && editorProps.container && editorProps.container.current && editorProps.editor) {
      const container = editorProps.container.current;
      document.body.style.overflow = full ? 'hidden' : 'initial';
      if (container && full) {
        container.style.zIndex = '999';
        container.style.position = 'fixed';
        container.style.top = '0px';
        container.style.bottom = '0px';
        container.style.left = '0px';
        container.style.right = '0px';
      } else if (container) {
        container.style.position = 'initial';
        container.style.top = 'initial';
        container.style.bottom = 'initial';
        container.style.left = 'initial';
        container.style.right = 'initial';
      }
    }
  }, [full, editorProps]);

  const click = () => {
    fullRef.current = !full;
    setFull(!full);
  };

  return (
    <button onClick={click} type="button" className={full ? 'active' : ''}>
      {props.command.icon}
    </button>
  );
};

export const fullscreen: ICommand = {
  name: 'fullscreen',
  keyCommand: 'fullscreen',
  button: (command, props, opts) => <Fullscreen command={command} editorProps={{ ...props, ...opts }} />,
  icon: (
    <svg fill="currentColor" viewBox="0 0 448 512" height="15" width="15">
      <path d="M128 32H32C14.31 32 0 46.31 0 64v96c0 17.69 14.31 32 32 32s32-14.31 32-32V96h64c17.69 0 32-14.31 32-32s-14.3-32-32-32zm288 0h-96c-17.69 0-32 14.31-32 32s14.31 32 32 32h64v64c0 17.69 14.31 32 32 32s32-14.31 32-32V64c0-17.69-14.3-32-32-32zM128 416H64v-64c0-17.69-14.31-32-32-32S0 334.31 0 352v96c0 17.69 14.31 32 32 32h96c17.69 0 32-14.31 32-32s-14.3-32-32-32zm288-96c-17.69 0-32 14.31-32 32v64h-64c-17.69 0-32 14.31-32 32s14.31 32 32 32h96c17.69 0 32-14.31 32-32v-96c0-17.7-14.3-32-32-32z" />
    </svg>
  ),
};
