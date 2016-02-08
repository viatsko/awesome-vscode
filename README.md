# Awesome VS Code [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

A curated list of delightful VS Code packages and resources. For more awesomeness, check out [awesome](https://github.com/sindresorhus/awesome).

# Table of Content

- [Syntax](#syntax)
- [Lint and IntelliSense](#lint-and-intellisense)
 - [C++](#c++)
 - [CSS](#css)
 - [Go](#go)
 - [JavaScript](#javascript)
 - [Python](#python)
- [Themes](#themes)
 - [Material-theme](#material-theme)
 - [Base16 Ocean Kit](#base16-ocean-kit)
 - [Seti](#seti)
- [Uncategorized](#uncategorized)
 - [Align](#align)
 - [beautify](#beautify)
 - [Bookmarks](#bookmarks)
 - [Color Highlight](#color-highlight)
 - [Dash](#dash)
 - [Debugger for Chrome](#debugger-for-chrome)
 - [ECMAScript Quotes Transformer](#ecmascript-quotes-transformer)
 - [Editor Config for VS Code](#editor-config-for-vs-code)
 - [ftp-sync](#ftp-sync)
 - [join-lines](#join-lines)
 - [Project Manager](#project-manager)
 - [Runner](#runner)
 - [Sort Lines](#sort-lines)
 - [Yo](#yo)
- [Resources for extension developers](#resources-for-extension-developers)
 - [Utilities](#utilities)
- [Contribute](#contribute)
- [License](#license)


## Syntax

Language packages extend the editor with syntax highlighting and/or snippets for a specific language or file format.

- [Dockerfile](https://marketplace.visualstudio.com/items?itemName=PeterJausovec.vscode-docker)
- [Elixir](https://marketplace.visualstudio.com/items?itemName=mjmcloug.vscode-elixir)
- [F#](https://marketplace.visualstudio.com/items?itemName=Ionide.Ionide-fsharp)
- [JS is JSX](https://marketplace.visualstudio.com/items?itemName=eg2.js-is-jsx)
- [Stylus](https://marketplace.visualstudio.com/items?itemName=buzinas.stylus)


## Lint and IntelliSense

In case the awesome nirvana that is linting has not yet been unleashed upon you:
> lint was the name originally given to a particular program that flagged some suspicious and non-portable constructs (likely to be bugs) in C language source code. The term is now applied generically to tools that flag suspicious usage in software written in any computer language.

Unlike some other editors, VS Code supports IntelliSense, linting, outline out-of-the-box and doesn't require any separate extension to run linter packages. Some linters are already integrated in VS Code, you can find the full list in the official documentation, [Languages](https://code.visualstudio.com/Docs/languages/overview) section.

## Lint and IntelliSense

### C++

- [gnu-global-tags](https://marketplace.visualstudio.com/items?itemName=austin.code-gnu-global) - Provide Intellisense for C/C++ with the help of the GNU Global tool.

### CSS

- [stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint) - Lint CSS/SCSS.

### Go

- [Go](https://marketplace.visualstudio.com/items?itemName=lukehoban.Go) - Rich language support for the Go language.

### JavaScript

- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Linter for [eslint](http://eslint.org/).
- [XO](https://marketplace.visualstudio.com/items?itemName=samverschueren.linter-xo) - Linter for [XO](https://github.com/sindresorhus/xo).

### Python

- [Python](https://marketplace.visualstudio.com/items?itemName=donjayamanne.python) - Linting, Debugging (multi threaded, web apps), Intellisense, auto-completion, code formatting, snippets, unit testing, and more.


## Themes

### UI

Unfortunately, VS Code doesn't support custom UI themes yet https://github.com/Microsoft/vscode/issues/1833

### Syntax

#### [Material-theme](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)

![](https://cloud.githubusercontent.com/assets/376065/12876148/12607198-cdfb-11e5-96d0-db87feb95b01.png)

#### [Base16 Ocean Kit](https://marketplace.visualstudio.com/items?itemName=chipcollier.Theme-OceanKit)

![](https://cloud.githubusercontent.com/assets/376065/12876166/98575186-cdfb-11e5-953d-2691ccad3472.png)

#### [Seti](https://marketplace.visualstudio.com/items?itemName=bialikover.theme-seti)

![](https://cloud.githubusercontent.com/assets/376065/12876209/0c5c2060-cdfd-11e5-9ff9-f3db152fc7fe.png)

## Uncategorized

### [Align](https://marketplace.visualstudio.com/items?itemName=steve8708.Align)

> Align text in vscode like the atom-alignment package

![](https://cdn-images-1.medium.com/max/1600/1*U0MbxS9dVaRRJibCoyVS9g.png)

### [beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)

> Beautify code in place for VS Code

### [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks)

> Mark lines and jump to them

![](https://github.com/alefragnani/vscode-bookmarks/raw/master/images/bookmarks-commands.png)

![](https://github.com/alefragnani/vscode-bookmarks/raw/master/images/bookmarks-toggle.png)

### [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

> Highlight web colors in your editor

![](https://cdn-images-1.medium.com/max/1600/1*ZwE7OHKR5opvDCJJOw9KeQ.png)

### [Dash](https://marketplace.visualstudio.com/items?itemName=deerawan.vscode-dash)

> Dash integration in Visual Studio Code

![](https://cdn-images-1.medium.com/max/2000/1*sqGllC-pgXNaEBfB-cxG9Q.png)

### [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

> A VS Code extension to debug your JavaScript code in the Chrome browser, or other targets that support the Chrome Debugging Protocol.

![](https://github.com/Microsoft/vscode-chrome-debug/raw/master/images/screenshot.png)

### [ECMAScript Quotes Transformer](https://marketplace.visualstudio.com/items?itemName=vilicvane.es-quotes)

> Transform quotes of ECMAScript string literals

![](https://cloud.githubusercontent.com/assets/970430/10563944/4cc04462-75d1-11e5-984b-41e0a21a72c3.gif)

### [Editor Config for VS Code](https://marketplace.visualstudio.com/items?itemName=chrisdias.vscodeEditorConfig)

> Editor Config for VS Code

### [ftp-sync](https://marketplace.visualstudio.com/items?itemName=lukasz-wronski.ftp-sync)

> Auto sync your work to remote FTP server

![](http://i.imgur.com/W9h4pwW.gif)

### [join-lines](https://marketplace.visualstudio.com/items?itemName=wmaurer.join-lines)

> Use Ctrl+j/Cmd+j to join lines, just like in Atom and similar to Sublime Text.

![](https://cloud.githubusercontent.com/assets/2899448/11255751/36ee036a-8e48-11e5-8e1f-8889bf2df026.gif)

### [Project Manager](https://marketplace.visualstudio.com/items?itemName=Shan.project-manager)

> Create and open projects instantly by saving the workspace folder in VSCode.

![](https://cloud.githubusercontent.com/assets/376065/12876200/691a69b6-cdfc-11e5-9c89-0af18acd965b.png)

### [Runner](https://marketplace.visualstudio.com/items?itemName=mattn.Runner)

> Run various scripts right from VS Code

![](https://raw.githubusercontent.com/mattn/vscode-runner/master/images/screenshot.gif)

### [Sort Lines](https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines)

> Sorts lines of text in specific order

![](https://github.com/Tyriar/vscode-sort-lines/raw/master/images/usage-animation.gif)

### [Yo](https://marketplace.visualstudio.com/items?itemName=samverschueren.yo)

> Scaffold projects using [Yeoman](http://yeoman.io/)

![](https://raw.githubusercontent.com/SamVerschueren/vscode-yo/master/media/yo.gif)


## Resources for extension developers

### Utilities

- [vscode-set-text](https://github.com/samverschueren/vscode-set-text) - An easy-to-use VS Code `#setText()` method.


## Contribute

Contributions welcome! Read the [contribution guidelines](CONTRIBUTING.md) first.


## License

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Valerii Iatsko](http://codingbox.io) has waived all copyright and related or neighboring rights to this work.
