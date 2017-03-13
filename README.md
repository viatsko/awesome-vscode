# Awesome VS Code [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

A curated list of delightful [Visual Studio Code](https://code.visualstudio.com/) packages and resources. For more awesomeness, check out [awesome](https://github.com/sindresorhus/awesome).

# Table of Content

- [Official](#official)
- [Syntax](#syntax)
- [Lint and IntelliSense](#lint-and-intellisense)
 - [C++](#c)
 - [CSS](#css)
 - [Go](#go)
 - [JavaScript](#javascript)
 - [Markdown](#markdown)
 - [Python](#python)
 - [Rust](#rust)
- [Themes](#themes)
 - [Custom theme for VS code](#custom-theme-for-vs-code)
 - [Material-theme](#material-theme)
 - [Base16 Ocean Kit](#base16-ocean-kit)
 - [Seti](#seti)
 - [Atom One Dark Syntax Theme](#atom-one-dark-syntax-theme)
 - [An Old Hope Theme](#an-old-hope-theme)
- [Productivity](#productivity)
 - [Azure IoT Toolkit](#azure-iot-toolkit)
 - [Bookmarks](#bookmarks)
 - [Copy Relative Path](#copy-relative-path)
 - [Gi](#gi)
 - [Git History](#git-history)
 - [Git Project Manager](#git-project-manager)
 - [GitLink](#gitlink)
 - [Icon Fonts](#icon-fonts)
 - [Multiple clipboards](#multiple-clipboards)
 - [Path IntelliSense](#path-intellisense)
 - [Project Manager](#project-manager)
 - [REST Client](#rest-client)
 - [Yo](#yo)
- [Formatting/Beautification](#formatting-beautification)
 - [Align](#align)
 - [Auto Close Tag](#auto-close-tag)
 - [Auto Rename Tag](#auto-rename-tag)
 - [beautify](#beautify)
 - [ECMAScript Quotes Transformer](#ecmascript-quotes-transformer)
 - [join-lines](#join-lines)
 - [Sort Lines](#sort-lines)
- [Uncategorized](#uncategorized)
 - [Code Runner](#code-runner)
 - [Color Highlight](#color-highlight)
 - [Dash](#dash)
 - [Debugger for Chrome](#debugger-for-chrome)
 - [ECMAScript Quotes Transformer](#ecmascript-quotes-transformer)
 - [Editor Config for VS Code](#editor-config-for-vs-code)
 - [ftp-sync](#ftp-sync)
 - [Runner](#runner)
 - [Slack](#slack)
 - [SVG Viewer](#svg-viewer)
 - [Vim Mode](#vim-mode)
- [Resources for extension developers](#resources-for-extension-developers)
 - [Documentation](#documentation)
 - [Libraries](#libraries)
 - [Tools](#tools)
- [Contribute](#contribute)
- [License](#license)

## Official

- [Official website](https://code.visualstudio.com/)
- [Source code](https://github.com/microsoft/vscode) on GitHub
- [Releases (stable channel)](http://code.visualstudio.com/download)
- [Releases (insiders channel)](http://code.visualstudio.com/insiders)
- [Monthly iteration plans](https://github.com/Microsoft/vscode/issues?utf8=%E2%9C%93&q=label%3Aiteration-plan+)

## Syntax

Language packages extend the editor with syntax highlighting and/or snippets for a specific language or file format.

- [Arduino](https://marketplace.visualstudio.com/items?itemName=moozzyk.Arduino)
- [CMake](https://marketplace.visualstudio.com/items?itemName=twxs.cmake)
- [Dart](https://marketplace.visualstudio.com/items?itemName=DanTup.dart-code)
- [Dockerfile](https://marketplace.visualstudio.com/items?itemName=PeterJausovec.vscode-docker)
- [EJS](https://marketplace.visualstudio.com/items?itemName=QassimFarid.ejs-language-support)
- [Elixir](https://marketplace.visualstudio.com/items?itemName=mjmcloug.vscode-elixir)
- [Elm](https://marketplace.visualstudio.com/items?itemName=sbrink.elm)
- [Erlang](https://marketplace.visualstudio.com/items?itemName=pgourlain.erlang)
- [F#](https://marketplace.visualstudio.com/items?itemName=Ionide.Ionide-fsharp)
- [Fortran](https://marketplace.visualstudio.com/items?itemName=Gimly81.fortran)
- [Handlebars](https://marketplace.visualstudio.com/items?itemName=andrejunges.Handlebars)
- [Mason](https://marketplace.visualstudio.com/items?itemName=viatsko.html-mason)
- [Parser 3](https://marketplace.visualstudio.com/items?itemName=viatsko.parser3)
- [Pascal](https://marketplace.visualstudio.com/items?itemName=alefragnani.pascal), or [OmniPascal](https://marketplace.visualstudio.com/items?itemName=Wosi.omnipascal) (only for Windows)
- [Perl HTML-Template](https://marketplace.visualstudio.com/items?itemName=viatsko.perl-html-template)
- [Protobuf](https://marketplace.visualstudio.com/items?itemName=peterj.proto)
- [Ruby](https://marketplace.visualstudio.com/items?itemName=groksrc.ruby)
- [Scala](https://marketplace.visualstudio.com/items?itemName=itryapitsin.Scala)
- [Stylus](https://marketplace.visualstudio.com/items?itemName=buzinas.stylus)
- [Swift](https://marketplace.visualstudio.com/items?itemName=Kasik96.swift)
- [Twig](https://marketplace.visualstudio.com/items?itemName=whatwedo.twig)

## Lint and IntelliSense

In case the awesome nirvana that is linting has not yet been unleashed upon you:
> lint was the name originally given to a particular program that flagged some suspicious and non-portable constructs (likely to be bugs) in C language source code. The term is now applied generically to tools that flag suspicious usage in software written in any computer language.

Unlike some other editors, VS Code supports IntelliSense, linting, outline out-of-the-box and doesn't require any separate extension to run linter packages. Some linters are already integrated in VS Code, you can find the full list in the official documentation, [Languages](https://code.visualstudio.com/Docs/languages/overview) section.

### C++

- [C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools) - Preview C/C++ extension by [Microsoft](https://microsoft.com), read [official blog post](https://blogs.msdn.microsoft.com/vcblog/2016/03/31/cc-extension-for-visual-studio-code/) for the details
- [gnu-global-tags](https://marketplace.visualstudio.com/items?itemName=austin.code-gnu-global) - Provide Intellisense for C/C++ with the help of the GNU Global tool.
- [YouCompleteMe](https://marketplace.visualstudio.com/items?itemName=RichardHe.you-complete-me) - Provides semantic completions for C/C++ (and TypeScript, JavaScript, Objective-C, Golang, Rust) using [YouCompleteMe](http://valloric.github.io/YouCompleteMe/).

### CSS

- [stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint) - Lint CSS/SCSS.
- [Autoprefixer](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-autoprefixer)
  Parse CSS,SCSS, LESS and add vendor prefixes automatically.
  ![Autoprefixer](https://cloud.githubusercontent.com/assets/7034281/16823311/da82a3c6-496b-11e6-8d95-0bebbf0b9607.gif)

### Go

- [Go](https://marketplace.visualstudio.com/items?itemName=lukehoban.Go) - Rich language support for the Go language.

### Haskell

- [haskell-linter](https://marketplace.visualstudio.com/items?itemName=hoovercj.haskell-linter)

### JavaScript

- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Linter for [eslint](http://eslint.org/).
- [XO](https://marketplace.visualstudio.com/items?itemName=samverschueren.linter-xo) - Linter for [XO](https://github.com/sindresorhus/xo).
- [AVA](https://marketplace.visualstudio.com/items?itemName=samverschueren.ava) - Snippets for [AVA](https://github.com/sindresorhus/ava).

### Markdown

- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) - Linter for [markdownlint](https://github.com/DavidAnson/markdownlint).

### PHP

- [phpcs](https://marketplace.visualstudio.com/items?itemName=ikappas.phpcs) - PHP CodeSniffer for Visual Studio Code

### Python

- [Python](https://marketplace.visualstudio.com/items?itemName=donjayamanne.python) - Linting, Debugging (multi threaded, web apps), Intellisense, auto-completion, code formatting, snippets, unit testing, and more.

### Rust

- [Rust](https://marketplace.visualstudio.com/items?itemName=kalitaalexey.vscode-rust) - Linting, auto-completion, code formatting, snippets and more


## Themes

### UI

Unfortunately, VS Code doesn't support custom UI themes yet https://github.com/Microsoft/vscode/issues/1833

However, this extension allow you to do it by patching VS code, until it's implemented as a default feature :

#### [Custom theme for VS code](https://marketplace.visualstudio.com/items?itemName=bentx.vscode-custom-theme)
> Customize your Visual Studio Code experience, use your own colors.

![](https://raw.githubusercontent.com/bentx/vscode-custom-theme/master/images/screen.gif)

If you're feeling brave, there are at least two custom UIs for VS Code:

- [Essence](https://github.com/flagello/Essence)
- [Pragmatic Essence](https://github.com/orta/Essence) 

### Syntax

#### [Material-theme](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)

![](https://raw.githubusercontent.com/Binaryify/Material-Theme-vscode/master/static/screenshot1.png)

#### [Base16 Ocean Kit](https://marketplace.visualstudio.com/items?itemName=chipcollier.Theme-OceanKit)

![](https://cloud.githubusercontent.com/assets/376065/12876166/98575186-cdfb-11e5-953d-2691ccad3472.png)

#### [Seti](https://marketplace.visualstudio.com/items?itemName=bialikover.theme-seti)

![](https://cloud.githubusercontent.com/assets/376065/12876209/0c5c2060-cdfd-11e5-9ff9-f3db152fc7fe.png)

#### [Atom One Dark Syntax Theme](https://marketplace.visualstudio.com/items?itemName=andischerer.theme-atom-one-dark)

![](https://raw.github.com/andischerer/vscode-theme-atom-one-dark/master/theme.png)

#### [An Old Hope Theme](https://marketplace.visualstudio.com/items?itemName=dustinsanders.an-old-hope-theme-vscode)

![](https://raw.githubusercontent.com/dustinsanders/an-old-hope-theme-vscode/master/dark.png)

## Productivity

### [Azure IoT Toolkit](https://marketplace.visualstudio.com/items?itemName=formulahendry.azure-iot-toolkit)

> Everything you need for the Azure IoT development: Interact with Azure IoT Hub; IoT Device Management; Discover Ethernet, USB serial, WiFi connected devices

![](https://raw.githubusercontent.com/formulahendry/vscode-azure-iot-toolkit/master/images/monitor.gif)

### [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks)

> Mark lines and jump to them

![](https://github.com/alefragnani/vscode-bookmarks/raw/master/images/bookmarks-commands.png)

![](https://github.com/alefragnani/vscode-bookmarks/raw/master/images/bookmarks-toggle.png)

### [Copy Relative Path](https://marketplace.visualstudio.com/items?itemName=alexdima.copy-relative-path)

> Copy Relative Path from a File

#### [Gi](https://marketplace.visualstudio.com/items?itemName=rubbersheep.gi)
> Generating .gitignore files made easy.

![](https://github.com/hasit/vscode-gi/raw/master/assets/gi.gif)

### [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)

> View git log, file or line History

![](https://raw.githubusercontent.com/DonJayamanne/gitHistoryVSCode/master/images/fileHistoryCommand.gif)

### [Git Project Manager](https://marketplace.visualstudio.com/items?itemName=felipecaputo.git-project-manager)

> Automatically indexes your git projects and lets you easily toggle between them

### [GitLink](https://marketplace.visualstudio.com/items?itemName=qezhu.gitlink)

> GoTo current file's online link in browser and Copy the link in clipboard.

![](https://raw.githubusercontent.com/qinezh/vscode-gitlink/master/images/how_to_use_it.gif)

### [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

> Provides Git CodeLens information (most recent commit, # of authors), on-demand inline blame annotations, status bar blame information, file and blame history explorers, and commands to compare changes with the working tree or previous versions.

![](https://raw.githubusercontent.com/eamodio/vscode-git-codelens/master/images/preview-gitlens.gif)

### [Icon Fonts](https://marketplace.visualstudio.com/items?itemName=idleberg.icon-fonts)

> Snippets for popular icon fonts such as Font Awesome, Ionicons, Glyphicons, Octicons, Material Design Icons and many more!

### [Multiple clipboards](https://marketplace.visualstudio.com/items?itemName=slevesque.vscode-multiclip)

> Override the regular Copy and Cut commands to keep selections in a clipboard ring

### [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

> Visual Studio Code plugin that autocompletes filenames

![](https://i.giphy.com/iaHeUiDeTUZuo.gif)

### [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)

> Easily switch between projects.

![](https://raw.githubusercontent.com/alefragnani/vscode-project-manager/master/images/project-manager-commands.png)

### [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

> Allows you to send HTTP request and view the response in Visual Studio Code directly.

![](https://raw.githubusercontent.com/Huachao/vscode-restclient/master/images/usage.gif)

### [Yo](https://marketplace.visualstudio.com/items?itemName=samverschueren.yo)

> Scaffold projects using [Yeoman](http://yeoman.io/)

![](https://raw.githubusercontent.com/SamVerschueren/vscode-yo/master/media/yo.gif)

## Formatting & Beautification

### [Align](https://marketplace.visualstudio.com/items?itemName=steve8708.Align)

> Align text in vscode like the atom-alignment package

![](https://cdn-images-1.medium.com/max/1600/1*U0MbxS9dVaRRJibCoyVS9g.png)

### [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)

> Automatically add HTML/XML close tag, same as Visual Studio IDE or Sublime Text

![](https://raw.githubusercontent.com/formulahendry/vscode-auto-close-tag/master/images/usage.gif)

### [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

> Auto rename paired HTML/XML tags

![](https://raw.githubusercontent.com/formulahendry/vscode-auto-rename-tag/master/images/usage.gif)

### [beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)

> Beautify code in place for VS Code

### [ECMAScript Quotes Transformer](https://marketplace.visualstudio.com/items?itemName=vilicvane.es-quotes)

> Transform quotes of ECMAScript string literals

![](https://cloud.githubusercontent.com/assets/970430/10563944/4cc04462-75d1-11e5-984b-41e0a21a72c3.gif)

### [join-lines](https://marketplace.visualstudio.com/items?itemName=wmaurer.join-lines)

> Use Ctrl+j/Cmd+j to join lines, just like in Atom and similar to Sublime Text.

![](https://cloud.githubusercontent.com/assets/2899448/11255751/36ee036a-8e48-11e5-8e1f-8889bf2df026.gif)

### [Sort Lines](https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines)

> Sorts lines of text in specific order

![](https://github.com/Tyriar/vscode-sort-lines/raw/master/images/usage-animation.gif)

## Uncategorized

### [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)

> Run code snippet or code file for multiple languages: C, C++, Java, JavaScript, PHP, Python, Perl, Ruby, Go, Lua, Groovy, PowerShell, BAT/CMD, BASH/SH, F# Script, C# Script, VBScript, TypeScript, CoffeeScript, Scala, Swift, Julia, Crystal, OCaml Script

![](https://raw.githubusercontent.com/formulahendry/vscode-code-runner/master/images/usage.gif)

### [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

> Highlight web colors in your editor

![](https://cdn-images-1.medium.com/max/1600/1*ZwE7OHKR5opvDCJJOw9KeQ.png)

### [Dash](https://marketplace.visualstudio.com/items?itemName=deerawan.vscode-dash)

> Dash integration in Visual Studio Code

![](https://cdn-images-1.medium.com/max/2000/1*sqGllC-pgXNaEBfB-cxG9Q.png)

### [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

> A VS Code extension to debug your JavaScript code in the Chrome browser, or other targets that support the Chrome Debugging Protocol.

![](https://github.com/Microsoft/vscode-chrome-debug/raw/master/images/screenshot.png)

### [Editor Config for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

> Editor Config for VS Code

### [ftp-sync](https://marketplace.visualstudio.com/items?itemName=lukasz-wronski.ftp-sync)

> Auto-sync your work to remote FTP server

![](http://i.imgur.com/W9h4pwW.gif)

### [Runner](https://marketplace.visualstudio.com/items?itemName=mattn.Runner)

> Run various scripts right from VS Code

![](https://raw.githubusercontent.com/mattn/vscode-runner/master/images/screenshot.gif)

### [Slack](https://marketplace.visualstudio.com/items?itemName=sozercan.slack)

> Send messages and code snippets, upload files to Slack

![](https://raw.githubusercontent.com/sozercan/vscode-slack/master/slack-upload.gif)

### [SVG Viewer](https://marketplace.visualstudio.com/items?itemName=cssho.vscode-svgviewer)

> View an SVG in the editor and export it as data URI scheme or PNG.

![SVG Viewer](https://github.com/cssho/vscode-svgviewer/blob/master/img/preview.png)

### [Vim Mode](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)

> Relatively new, but promising extension implementing Vim features in VSCode. Authors suggest to join their [Slack channel](https://vscodevim-slackin.azurewebsites.net/) for feature requests on your favorite Vim features

![](https://github.com/VSCodeVim/Vim/raw/master/images/screen.png)

## Resources for extension developers

### Documentation

- [Extending Visual Studio Code](https://code.visualstudio.com/docs/extensions/overview) section of [Official Documentation](https://code.visualstudio.com/docs)

### Libraries

- [vscode-set-text](https://github.com/samverschueren/vscode-set-text) - An easy-to-use VS Code `#setText()` method.

### Tools

- [Online TextMate Themes Editor](http://tmtheme-editor.herokuapp.com/) - since VS Code supports TextMate themes, you can create them in this online editor and then create a new VS Code package using [Yo Code](https://code.visualstudio.com/docs/tools/yocode) tool
- [Yo Code - Extension Generator](https://code.visualstudio.com/docs/tools/yocode)
- [Open in Code](https://github.com/sozercan/OpenInCode) - macOS Finder toolbar app to open current folder in Visual Studio Code
![](https://camo.githubusercontent.com/edbae5fe27d6c7af23218e60cb07e3a5061bbbab/687474703a2f2f692e696d6775722e636f6d2f4c6d56484978572e676966)

## Contribute

Contributions welcome! Read the [contribution guidelines](CONTRIBUTING.md) first.


## License

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](http://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Valerii Iatsko](http://codingbox.io) has waived all copyright and related or neighboring rights to this work.
