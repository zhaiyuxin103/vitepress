import { defineConfig } from "vitepress";

export default defineConfig({
  title: "月上陌阡",
  titleTemplate: "责难无以成事",
  description: "责难无以成事",
  appearance: true,
  base: "/vitepress/",
  ignoreDeadLinks: true,
  lang: "zh-CN",
  lastUpdated: true,
  markdown: {
    theme: "github-light",
    lineNumbers: true,
    headers: {
      level: [0, 0],
    },
  },
  cleanUrls: true,

  sitemap: {
    hostname: 'https://zhaiyuxin103.github.io/vitepress/',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  head: [
    ['link', { rel: 'icon', href: '/vitepress-logo-mini.svg' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh' }],
    ['meta', { name: 'og:site_name', content: '月上陌阡' }],
    [
      "link",
      {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: ""},
    ],
    // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    ["meta", {name: "theme-color", content: "#3c8772"}],
  ],

  // Theme related configurations.
  themeConfig: {
    logo: "/logo.png",
    nav: [
      {
        text: "分类",
        items: [
          {text: "编程技术", link: "programe/index"},
          {text: "生活兴趣", link: "life/index"},
          {text: "软件工具", link: "tool/index"},
          {text: "其他", link: "other/index"},
        ],
      },
      {text: "友人帐", link: "links"},
      {text: "关于我", link: "about"},
    ],
    sidebar: {
      "programe/": [
        {
          text: "PHP",
          collapsed: false,
          items: [
            {
              text: "Composer 本地路径加载第三方扩展包",
              link: "/programe/PHP/Composer 本地路径加载第三方扩展包",
            },
            {
              text: "使用 Composer 管理 Git Hooks",
              link: "/programe/PHP/使用 Composer 管理 Git Hooks",
            },
            {text: "搭建 Yaf 脚手架", link: "/programe/PHP/搭建 Yaf 脚手架"},
          ],
        },
        {
          text: "Go",
          collapsed: false,
          items: [
            {
              text: "多版本共存",
              link: "/programe/Go/多版本共存",
            },
          ],
        },
        {
          text: "Java",
          collapsed: false,
          items: [
            {text: "开发环境部署", link: "/programe/Java/开发环境部署"},
          ],
        },
        {
          text: "Flutter",
          collapsed: false,
          items: [
            {text: "开发环境部署", link: "/programe/Flutter/开发环境部署"},
            {
              text: "开发环境部署问题汇总",
              link: "/programe/Flutter/开发环境部署问题汇总",
            },
          ],
        },
        {
          text: "API",
          collapsed: false,
          items: [
            {
              text: "Postman 自动化设置变量",
              link: "/programe/API/Postman 自动化设置变量",
            },
            {
              text: "授权为啥要在 Authorization 标头里加个 Bearer？",
              link: "/programe/API/授权为啥要在 Authorization 标头里加个 Bearer",
            },
          ],
        },
        {
          text: "Other",
          collapsed: false,
          items: [
            {
              text: "H5 输入框聚焦时禁止放大页面",
              link: "/programe/H5 输入框聚焦时禁止放大页面",
            },
            {
              text: "切换 IAM 角色（AWS CLI）",
              link: "/programe/切换 IAM 角色（AWS CLI）",
            },
            {
              text: "依赖注入如何实现解耦",
              link: "/programe/依赖注入如何实现解耦",
            },
          ],
        },
      ],
      "life/": [
        {
          text: "生活兴趣",
          collapsed: false,
          items: [
            {text: "刷抖音", link: "/life/刷抖音"},
            {
              text: "大教堂终将倒下，但集市永存",
              link: "/life/大教堂终将倒下，但集市永存",
            },
            {
              text: "如何给开源项目贡献源码",
              link: "/life/如何给开源项目贡献源码",
            },
          ],
        },
      ],
      "tool/": [
        {
          text: "Git",
          collapsed: false,
          items: [
            {
              text: "Git Commit Emoji 提交指南",
              link: "/tool/Git Commit Emoji 提交指南",
            },
            {
              text: "Git 如何合并某个 commit",
              link: "/tool/Git 如何合并某个 commit",
            },
            {
              text: "Git 修改分支名称",
              link: "/tool/Git/修改分支名称",
            },
          ],
        },
        {
          text: "软件工具",
          collapsed: false,
          items: [
            {
              text: "从这篇教程开始, 成为 Sublime Text 大师",
              link: "/tool/从这篇教程开始，成为%20Sublime%20Text%20大师",
            },
            {
              text: "使用 phpMyAdmin 管理多台 MySQL 服务器",
              link: "/tool/使用 phpMyAdmin 管理多台 MySQL 服务器",
            },
            {
              text: "如何输入直角引号（「」和『』）",
              link: "/tool/如何输入直角引号（「」和『』）",
            },
            {
              text: "Clash 配置代理白名单",
              link: "/tool/Clash 配置代理白名单",
            },
          ],
        },
      ],
      "other/": [
        {
          text: "其他",
          collapsed: false,
          items: [
            {text: "配置环境变量", link: "/other/配置环境变量"},
            {text: "软件版本命名规范", link: "/other/软件版本命名规范"},
          ],
        },
      ],
    },
    siteTitle: "月上陌阡",
    editLink: {
      pattern: "https://github.com/zhaiyuxin103/vitepress/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    socialLinks: [{icon: "github", link: "https://github.com/zhaiyuxin103"}],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },

    search: {
      provider: 'algolia',
      options: {
        appId: '8J64VVRP8K',
        apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
        indexName: 'vitepress'
      }
    },

    carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg'
    }
  },
});
