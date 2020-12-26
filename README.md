<p align="center">
  <a href="https://github.com/uiwjs/react-markdown-editor">
    <img alt="react-markdown-editor logo" src="./website/logo.svg?sanitize=true">
  </a>
</p>

<!--dividing-->

<p align="center">
  <a href="https://github.com/uiwjs/react-markdown-editor/actions">
    <img alt="Build & Deploy" src="https://github.com/uiwjs/react-markdown-editor/workflows/Build%20&%20Deploy/badge.svg">
  </a>
  <a href="https://github.com/uiwjs/react-markdown-editor/issues">
    <img alt="Issues" src="https://img.shields.io/github/issues/uiwjs/react-markdown-editor.svg">
  </a>
  <a href="https://github.com/uiwjs/react-markdown-editor/network">
    <img alt="Forks" src="https://img.shields.io/github/forks/uiwjs/react-markdown-editor.svg">
  </a>
  <a href="https://github.com/uiwjs/react-markdown-editor/stargazers">
    <img alt="Stars" src="https://img.shields.io/github/stars/uiwjs/react-markdown-editor.svg">
  </a>
  <a href="https://github.com/uiwjs/react-markdown-editor/releases">
    <img alt="Release" src="https://img.shields.io/github/release/uiwjs/react-markdown-editor.svg">
  </a>
  <a href="https://www.npmjs.com/package/@uiw/react-markdown-editor">
    <img alt="npm version" src="https://img.shields.io/npm/v/@uiw/react-markdown-editor.svg">
  </a>
</p>

<p align="center">
  A markdown editor with preview, implemented with React.js and TypeScript.
</p>

## Install

```bash
npm i @uiw/react-markdown-editor
```

## Document

Official document [demo preview](https://uiwjs.github.io/react-markdown-editor/) ([🇨🇳中国镜像网站](http://uiw.gitee.io/react-markdown-editor/))

## Basic Usage

```jsx
import MarkdownEditor from '@uiw/react-markdown-editor';
import React from 'react';
import ReactDOM from 'react-dom';

const Dome = () => (
  <MarkdownEditor
    value={this.state.markdown}
    onChange={this.updateMarkdown}
  />
);
```

controlled usage

```jsx
import MarkdownEditor from '@uiw/react-markdown-editor';
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      markdown: '# This is a H1  \n## This is a H2  \n###### This is a H6',
    };
    this.updateMarkdown = this.updateMarkdown.bind(this);
  }

  updateMarkdown(editor, data, value) {
    this.setState({ markdown: value });
  }

  render() {
    return (
      <MarkdownEditor
        value={this.state.markdown}
        onChange={this.updateMarkdown}
      />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

## Props

- `value (string)` - the raw markdown that will be converted to html (**required**)
- `visible?:boolean` - Shows a preview that will be converted to html.
- `toolbars?:array` - Tool display settings.
- `toolbarsMode?:array` - Tool display settings.
- `onChange?:function(editor: IInstance, data: CodeMirror.EditorChange, value: string)` - called when a change is made (**required**)
- `onBlur?: function(editor: IInstance, event: Event)` - event occurs when an object loses focus
- `previewProps` - [react-markdown options](https://github.com/rexxars/react-markdown#options)

> [Other Props Options](https://github.com/uiwjs/react-markdown-editor/blob/8de6abbf628b6d272d7da1c28e985fbbcba71b93/src/components/CodeMirror/index.tsx#L21-L60)


### Development

```bash
npm run dev
npm run type-check:watch
npm run doc
```

## Other

- [@uiw/react-codemirror](https://github.com/uiwjs/react-codemirror): CodeMirror component for React.
- [@uiw/react-monacoeditor](https://github.com/jaywcjlove/react-monacoeditor): Monaco Editor component for React.
- [@uiw/react-md-editor](https://github.com/uiwjs/react-md-editor): A simple markdown editor with preview, implemented with React.js and TypeScript.

## License

[MIT © Kenny Wong](./LICENSE)