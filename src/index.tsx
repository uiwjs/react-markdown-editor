import * as React from "react";
import { HTMLDivProps, IProps } from './common/props';

export interface IMarkdownEditorProps extends IProps, HTMLDivProps {
  value?: string,
}

// export class Tag extends React.PureComponent<ITagProps, {}> {
export default class MarkdownEditor extends React.PureComponent<IMarkdownEditorProps, {}> {
  public static displayName = 'MarkdownEditor';
  public static defaultProps: IMarkdownEditorProps = {
    value: '',
  };
  public render() {
    // const { className } = this.props;
    
    return (
      <div> tests </div>
    );
  }
}