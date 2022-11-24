[![CI](https://github.com/aoisupersix/aspnet-core-react-typescript-template/actions/workflows/ci.yml/badge.svg)](https://github.com/aoisupersix/aspnet-core-react-typescript-template/actions/workflows/ci.yml)

# ASP.NET Core Razor pages & TypeScript & React Based Boilerplate

ASP.NET Core application boilerplate that uses React + TypeScript partially based on MPA with Razor pages.

# Features

- Coexistence of Razor pages and React + TypeScript
- Client-side package restoration and bundle execution during ASP.NET build
- React hot reload/debug support

# Prerequirements

- Visual Studio 2022
- vscode
- .NET 6 SDK
- node.js 18

# Getting started

1. Clone repository

```sh
git clone https://github.com/aoisupersix/aspnetcore-razor-react-boilerplate
cd aspnetcore-razor-react-boilerplate
```

2. Open and run `RazorReactBoilerplate.sln` on VisualStudio

3. Open `https://localhost:7257/Page1` on browser

# Debugging React on VisualStudio

Open the React file (e.g. `RazorReactBoilerplate/Scripts/src/page-scripts/page1.tsx`) in VisualStudio and place a breakpoint to debug the relevant part.

![](/resources/debugonvs.png)

# Debugging React on vscode

1. Open vscode with `RazorReactBoilerplate/Scripts` as root

```sh
code RazorReactBoilerplate/Scripts
```

2. Place breakpoints in React file and run "Launch MSEdge"

![](/resources/launchmsedge.png)

![](/resources/debugonvscode.png)

# Hot reloading in React

Run `npm run watch` on `RazorReactBoilerplate/Scripts` or run build task (Ctrl+Shift+B) on vscode.

```sh
cd RazorReactBoilerplate/Scripts
npm run watch
```

The bundled file will be output to `wwwroot/js/` and changes will be reflected after refreshing in the browser.

# License

The MIT License(MIT)

Copyright(c) 2022 aoisupersix

[license.md](license.md)
