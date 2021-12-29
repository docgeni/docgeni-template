/**
 * @type {import('@docgeni/core').DocgeniConfig}
 */
module.exports = {
    mode: 'full',
    title: 'ALib',
    logoUrl: 'https://cdn.pingcode.com/open-sources/docgeni/logo.png',
    docsDir: 'docs',
    repoUrl: 'https://github.com/docgeni/docgeni-template',
    footer: 'Open-source MIT Licensed | Copyright © 2020-present Powered by self',
    navs: [
        null,
        {
            title: 'Components',
            path: 'components',
            lib: 'alib',
            locales: {
                'zh-cn': {
                    title: '组件'
                }
            }
        },
        {
            title: 'GitHub',
            path: 'https://github.com/docgeni/docgeni-template',
            isExternal: true
        }
    ],
    libs: [
        {
            name: 'alib',
            rootDir: './src',
            include: [],
            exclude: '',
            apiMode: 'compatible',
            categories: [
                {
                    id: 'general',
                    title: 'General',
                    locales: {
                        'zh-cn': {
                            title: '通用'
                        }
                    }
                }
            ]
        }
    ],
    defaultLocale: 'en-us',
    locales: [
        {
            key: 'en-us',
            name: 'EN'
        },
        {
            key: 'zh-cn',
            name: '中文'
        }
    ]
};
