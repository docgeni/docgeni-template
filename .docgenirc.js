module.exports = {
    $schema: '@docgeni/cli/cli.schema.json',
    mode: 'full',
    title: 'Docgeni',
    logoUrl: 'https://cdn.worktile.com/open-sources/docgeni/logos/docgeni.png',
    docsPath: './docs',
    output: 'dist/docs-site',
    repoUrl: 'https://github.com/docgeni/docgeni',
    navs: [
        null,
        {
            title: '组件',
            path: 'components',
            lib: 'docgeni-template',
            locales: {
                'en-us': {
                    title: 'Components'
                }
            }
        },
        {
            title: 'GitHub',
            path: 'https://github.com/docgeni/docgeni',
            isExternal: true
        },
        {
            title: '更新日志',
            path: 'https://github.com/docgeni/docgeni/blob/master/CHANGELOG.md',
            isExternal: true,
            locales: {
                'en-us': {
                    title: 'Changelog'
                }
            }
        }
    ],
    libs: [
        {
            name: 'docgeni-template',
            rootDir: './projects/docgeni-template',
            include: [],
            exclude: '',
            categories: [
                {
                    id: 'general',
                    title: '通用',
                    locales: {
                        'en-us': {
                            title: 'General'
                        }
                    }
                }

            ]
        }
    ]
};
