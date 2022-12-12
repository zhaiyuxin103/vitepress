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
                        { text: 'Composer 本地路径加载第三方扩展包', link: '/programe/Composer 本地路径加载第三方扩展包' },
                        { text: 'Java 开发环境部署', link: '/programe/Java 开发环境部署' },
                        { text: 'Flutter 开发环境部署问题汇总', link: '/programe/Flutter 开发环境部署问题汇总' },
                        { text: 'Flutter 开发环境部署', link: '/programe/Flutter 开发环境部署' },
                        { text: '搭建 Yaf 脚手架', link: '/programe/搭建 Yaf 脚手架' },
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
                        { text: '大教堂终将倒下，但集市永存', link: '/life/大教堂终将倒下，但集市永存' },
                        { text: '如何给开源项目贡献源码', link: '/life/如何给开源项目贡献源码' },
                    ]
                }
            ],
            'tool/': [
                {
                    text: '软件工具',
                    collapsible: true,
                    collapsed: false,
                    items: [
                        { text: '从这篇教程开始, 成为 Sublime Text 大师', link: '/tool/从这篇教程开始, 成为 Sublime Text 大师' },
                        { text: '使用 phpMyAdmin 管理多台 MySQL 服务器', link: '/tool/使用 phpMyAdmin 管理多台 MySQL 服务器' },
                        { text: '如何输入直角引号（「」和『』）', link: '/tool/如何输入直角引号（「」和『』）' },
                    ]
                }
            ],
            'other/': [
                {
                    text: '其他',
                    collapsible: true,
                    collapsed: false,
                    items: [
                        { text: '配置环境变量', link: '/other/配置环境变量' },
                    ]
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
