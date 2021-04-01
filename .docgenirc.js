/**
 * @type {import('@docgeni/template').DocgeniConfig}
 */
module.exports = {
    mode: 'full',
    title: 'ALib',
    logoUrl: 'https://cdn.worktile.com/open-sources/docgeni/logos/docgeni.png',
    docsDir: 'docs',
    repoUrl: 'https://github.com/docgeni/docgeni-template',
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
