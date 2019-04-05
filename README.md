<p align="center">
  <a href="https://github.com/uiwjs/react-markdown-editor">
    <img src="./website/logo.svg?sanitize=true">
  </a>
</p>

<!--dividing-->

<p align="center">
  <a href="https://github.com/uiwjs/react-markdown-editor/issues">
    <img src="https://img.shields.io/github/issues/uiwjs/react-markdown-editor.svg">
  </a>
  <a href="https://github.com/uiwjs/react-markdown-editor/network">
    <img src="https://img.shields.io/github/forks/uiwjs/react-markdown-editor.svg">
  </a>
  <a href="https://github.com/uiwjs/react-markdown-editor/stargazers">
    <img src="https://img.shields.io/github/stars/uiwjs/react-markdown-editor.svg">
  </a>
  <a href="https://github.com/uiwjs/react-markdown-editor/releases">
    <img src="https://img.shields.io/github/release/uiwjs/react-markdown-editor.svg">
  </a>
  <a href="https://www.npmjs.com/package/@uiwjs/react-markdown-editor">
    <img src="https://img.shields.io/npm/v/@uiwjs/react-markdown-editor.svg">
  </a>
</p>

<p align="center">
  A markdown editor with preview, implemented with React.js and TypeScript.
</p>

## Install

```bash
npm i @uiwjs/react-markdown-editor
```

## Basic Usage

```jsx
import MarkdownEditor from '@uiwjs/react-markdown-editor';
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

  updateMarkdown(value) {
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

- value (*string*) - the raw markdown that will be converted to html (**required**)
- onChange (*function*) - called when a change is made (**required**)


### Development

```bash
npm run dev
npm run type-check:watch
npm run doc
```

## License

[MIT © Kenny Wong](./LICENSE)