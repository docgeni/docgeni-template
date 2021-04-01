# Docgeni Template

A template for Angular Lib & Docs use Docgeni.

[![docgeni](https://img.shields.io/badge/docs%20by-docgeni-348fe4)](https://github.com/docgeni/docgeni)

## How to use?

Click the top right button "Use this template" of this repo.

![Use Docgeni Template](https://cdn.pingcode.com/open-sources/docgeni/use-docgeni-template.png)

## Live Preview

https://docgeni.github.io/docgeni-template

## Commands
- `npm run start`: start development for this lib, it is an alias for `npm run start:docs`
- `npm ru build`: build this angular component lib
- `npm ru test`: exec unit tests of component lib
- `npm run build:docs`: build docs site to dist/docgeni-site
- `npm run lint`: lint component lib
## Directory Structure

```
.
├── docs
│   ├── guides
│   │   ├── getting-started.md
│   │   ├── index.md
│   │   └── intro.md
│   └── zh-cn
│       └── guides
│           ├── getting-started.md
│           ├── index.md
│           └── intro.md
├── src
│   ├── README.md
│   ├── button
│   │   ├── api
│   │   │   ├── en-us.js
│   │   │   └── zh-cn.js
│   │   ├── button.component.html
│   │   ├── button.component.spec.ts
│   │   ├── button.component.ts
│   │   ├── button.module.ts
│   │   ├── doc
│   │   │   ├── en-us.md
│   │   │   └── zh-cn.md
│   │   ├── examples
│   │   │   ├── basic
│   │   │   │   ├── basic.component.css
│   │   │   │   ├── basic.component.html
│   │   │   │   └── basic.component.ts
│   │   │   └── module.ts
│   │   ├── index.ts
│   │   └── package.json
│   ├── karma.conf.js
│   ├── ng-package.json
│   ├── package.json
│   ├── public-api.ts
│   ├── test.ts
│   ├── tsconfig.lib.json
│   ├── tsconfig.lib.prod.json
│   ├── tsconfig.spec.json
│   └── tslint.json
├── angular.json
├── tsconfig.json
├── tslint.json
├── package-lock.json
├── package.json
└── README.md

```
