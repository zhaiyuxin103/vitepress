import { defineConfig } from 'vitepress'

export default defineConfig({
    title: '月上陌阡',
    titleTemplate: '责难无以成事',
    description: '责难无以成事',
    appearance: true,
    base: '/vitepress/',
    head: [
        ['link', {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''}],
        // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        ['meta', { name: 'theme-color', content: '#3c8772' }],
    ],
    ignoreDeadLinks: true,
    lang: 'zh-CN',
    lastUpdated: true,
    markdown: {
        theme: 'material-palenight',
        lineNumbers: true,
        headers: {
            level: [0, 0]
        }
    },
    cleanUrls: 'without-subfolders',
    // Theme related configurations.
    themeConfig: {
        logo: '/logo.png',
        nav: [
            {
                text: '分类',
                items: [
                    {text: '编程技术', link: 'programe/index'},
                    {text: '生活兴趣', link: 'life/index'},
                    {text: '软件工具', link: 'tool/index'},
                    {text: '其他', link: 'other/index'},
                ]
            },
            {text: '友人帐', link: 'links'},
            {text: '关于我', link: 'about'},
        ],
        sidebar: {
            'programe/': [
                {
                    text: '编程技术',
                    collapsible: true,
                    collapsed: false,
                    items: [
                        { text: 'API 授权为啥要在 Authorization 标头里加个 Bearer？', link: '/programe/API 授权为啥要在 Authorization 标头里加个 Bearer' },
                    ]
                }
            ],
            'life/': [
                {
                    text: '生活兴趣',
                    collapsible: true,
                    collapsed: false,
                    items: [
                        { text: '刷抖音', link: '/life/刷抖音' },
                    ]
                }
            ],
            'tool/': [
                {
                    text: '软件工具',
                    collapsible: true,
                    collapsed: false,
                    items: []
                }
            ],
            'other/': [
                {
                    text: '其他',
                    collapsible: true,
                    collapsed: false,
                    items: []
                }
            ]
        },
        siteTitle: '月上陌阡',
        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/zhaiyuxin103'},
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
        }
    }
});
