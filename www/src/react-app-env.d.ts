/// <reference types="react-scripts" />

declare module '*.module.less' {
  const content: any;
  export default content;
}

declare var VERSION: string;

declare module '*.md' {
  import { CodeBlockData } from 'markdown-react-code-preview-loader';
  const src: CodeBlockData;
  export default src;
}
