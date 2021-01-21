const {description} = require('../../package')

module.exports = {

    title: 'Peter的个人博客',
    description: description,
    base: '/blog/',
    head: [
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
    ],
    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        nav: [
            {
                text: 'Java',
                link: '/java/',
            },
            {
                text: 'Framework',
                link: '/config/'
            },
            {
                text: 'UI',
                link: '/ui/'
            },
            {
                text: '性能优化',
                link: '/optimize/'
            },
            {
                text: 'NDK',
                link: '/ndk/'
            },
            {
                text: '开源框架',
                link: '/open-framework/'
            },
            {
                text: 'jetpack',
                link: '/jetpack/'
            },
        ],
        sidebar: {
            '/java/': [
                {
                    collapsable: false,
                    children: [
                        '',
                        'using-vue',
                    ]
                }
            ],
        }
    },
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}
