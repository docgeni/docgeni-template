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
- `npm run build`: build this angular component lib
- `npm run test`: exec unit tests of component lib
- `npm run build:docs`: build docs site to dist/docgeni-site
- `npm run lint`: lint component lib
## Directory Structure

```
.
|── .docgeni
│   ├── public
│   │   ├──assets
│           ├── images
│   │   ├──tsconfig.json
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

## Angular Versions

Current Angular Version: `18.x`

Angular|Branch|
--|--
11.x|[ng-11.x](https://github.com/docgeni/docgeni-template/tree/ng-11.x)
12.x|[ng-12.x](https://github.com/docgeni/docgeni-template/tree/ng-12.x)
13.x|[ng-13.x](https://github.com/docgeni/docgeni-template/tree/ng-13.x)
14.x|[ng-14.x](https://github.com/docgeni/docgeni-template/tree/ng-14.x)
15.x|[ng-15.x](https://github.com/docgeni/docgeni-template/tree/ng-15.x)
16.x|[ng-16.x](https://github.com/docgeni/docgeni-template/tree/ng-16.x)
17.x|[ng-17.x](https://github.com/docgeni/docgeni-template/tree/ng-17.x)
18.x|[master](https://github.com/docgeni/docgeni-template/tree/master)
