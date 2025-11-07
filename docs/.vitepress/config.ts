import { defineConfig } from 'vitepress';
import taskLists from 'markdown-it-task-lists';

export default defineConfig({
  title: '月上陌阡',
  titleTemplate: '责难无以成事',
  description: '责难无以成事',
  appearance: true,
  base: '/vitepress/',
  ignoreDeadLinks: true,
  lastUpdated: true,
  markdown: {
    theme: 'github-light',
    lineNumbers: true,
    headers: {
      level: [0, 0],
    },
    config: (md) => {
      // 使用更多的 Markdown-it 插件！
      md.use(taskLists);
    },
  },
  cleanUrls: true,

  sitemap: {
    hostname: 'https://zhaiyuxin103.github.io/vitepress/',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'));
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/vitepress-logo-mini.svg' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        logo: '/logo.png',
        nav: [
          {
            text: 'Categories',
            items: [
              { text: 'Programming', link: '/en/programe/index' },
              { text: 'Life', link: '/en/life/index' },
              { text: 'Tools', link: '/en/tool/index' },
              { text: 'Other', link: '/en/other/index' },
            ],
          },
          { text: 'Friends', link: '/en/links' },
          { text: 'About', link: '/en/about' },
        ],
        sidebar: {
          '/en/programe/': [
            {
              text: 'PHP',
              collapsed: false,
              items: [
                {
                  text: 'Setup Yaf Skeleton',
                  link: '/en/programe/setup-yaf-skeleton',
                },
                {
                  text: 'Load Composer Packages from a Local Path',
                  link: '/en/programe/load-local-packages-with-composer',
                },
                {
                  text: 'Manage Git Hooks with Composer',
                  link: '/en/programe/manage-git-hooks-with-composer',
                },
              ],
            },
            {
              text: 'API',
              collapsed: false,
              items: [
                {
                  text: 'Understanding the Bearer in the Authorization Header',
                  link: '/en/programe/understanding-bearer-in-authorization-header',
                },
                {
                  text: 'Postman Automatically Set Variables',
                  link: '/en/programe/automate-variables-in-postman',
                },
              ],
            },
          ],
          '/en/life/': [
            {
              text: 'Life',
              collapsed: false,
              items: [
                {
                  text: 'Cathedrals Fall, Markets Endure',
                  link: '/en/life/cathedrals-fall-markets-endure',
                },
                {
                  text: 'Contributing to Open Source',
                  link: '/en/life/contributing-to-open-source',
                },
                {
                  text: 'On Scrolling TikTok',
                  link: '/en/life/on-scrolling-tiktok',
                },
              ],
            },
          ],
          '/en/tool/': [
            {
              text: 'Git',
              collapsed: false,
              items: [
                {
                  text: 'Git Branch Sync Methods',
                  link: '/en/tool/git-branch-sync-methods',
                },
              ],
            },
          ],
          '/en/other/': [
            {
              text: 'Other',
              collapsed: false,
              items: [
                {
                  text: 'Configuring Environment Variables',
                  link: '/en/other/setup-environment-variables',
                },
                {
                  text: 'Software Version Naming Rules',
                  link: '/en/other/version-naming-rules',
                },
              ],
            },
          ],
        },
        siteTitle: '月上陌阡',
        editLink: {
          pattern:
            'https://github.com/zhaiyuxin103/vitepress/edit/main/docs/:path',
          text: 'Edit this page on GitHub',
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/zhaiyuxin103' },
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2019-present Evan You',
        },

        search: {
          provider: 'algolia',
          options: {
            appId: '8J64VVRP8K',
            apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
            indexName: 'vitepress',
          },
        },

        carbonAds: {
          code: 'CEBDT27Y',
          placement: 'vuejsorg',
        },
      },
    },
    zh_CN: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh_CN/',
      themeConfig: {
        logo: '/logo.png',
        nav: [
          {
            text: '分类',
            items: [
              { text: '编程技术', link: '/zh_CN/programe/index' },
              { text: '生活兴趣', link: '/zh_CN/life/index' },
              { text: '软件工具', link: '/zh_CN/tool/index' },
              { text: '其他', link: '/zh_CN/other/index' },
            ],
          },
          { text: '友人帐', link: '/zh_CN/links' },
          { text: '关于我', link: '/zh_CN/about' },
        ],
        sidebar: {
          '/zh_CN/programe/': [
            {
              text: 'PHP',
              collapsed: false,
              items: [
                {
                  text: 'Composer 本地路径加载第三方扩展包',
                  link: '/zh_CN/programe/load-local-packages-with-composer',
                },
                {
                  text: '使用 Composer 管理 Git Hooks',
                  link: '/zh_CN/programe/manage-git-hooks-with-composer',
                },
                {
                  text: '搭建 Yaf 脚手架',
                  link: '/zh_CN/programe/setup-yaf-skeleton',
                },
              ],
            },
            {
              text: 'Go',
              collapsed: false,
              items: [
                {
                  text: '多版本共存',
                  link: '/zh_CN/programe/Go/多版本共存',
                },
              ],
            },
            {
              text: 'Java',
              collapsed: false,
              items: [
                {
                  text: '开发环境部署',
                  link: '/zh_CN/programe/Java/开发环境部署',
                },
              ],
            },
            {
              text: 'Flutter',
              collapsed: false,
              items: [
                {
                  text: '开发环境部署',
                  link: '/zh_CN/programe/Flutter/开发环境部署',
                },
                {
                  text: '开发环境部署问题汇总',
                  link: '/zh_CN/programe/Flutter/开发环境部署问题汇总',
                },
              ],
            },
            {
              text: 'API',
              collapsed: false,
              items: [
                {
                  text: 'Postman 自动化设置变量',
                  link: '/zh_CN/programe/automate-variables-in-postman',
                },
                {
                  text: '授权为啥要在 Authorization 标头里加个 Bearer？',
                  link: '/zh_CN/programe/understanding-bearer-in-authorization-header',
                },
              ],
            },
            {
              text: 'Other',
              collapsed: false,
              items: [
                {
                  text: 'H5 输入框聚焦时禁止放大页面',
                  link: '/zh_CN/programe/H5 输入框聚焦时禁止放大页面',
                },
                {
                  text: '切换 IAM 角色（AWS CLI）',
                  link: '/zh_CN/programe/切换 IAM 角色（AWS CLI）',
                },
                {
                  text: '依赖注入如何实现解耦',
                  link: '/zh_CN/programe/依赖注入如何实现解耦',
                },
              ],
            },
          ],
          '/zh_CN/life/': [
            {
              text: '生活兴趣',
              collapsed: false,
              items: [
                { text: '刷抖音', link: '/zh_CN/life/on-scrolling-tiktok' },
                {
                  text: '大教堂终将倒下，但集市永存',
                  link: '/zh_CN/life/cathedrals-fall-markets-endure',
                },
                {
                  text: '如何给开源项目贡献源码',
                  link: '/zh_CN/life/contributing-to-open-source',
                },
              ],
            },
          ],
          '/zh_CN/tool/': [
            {
              text: 'Git',
              collapsed: false,
              items: [
                {
                  text: 'Git Commit Emoji 提交指南',
                  link: '/zh_CN/tool/Git Commit Emoji 提交指南',
                },
                {
                  text: 'Git 如何合并某个 commit',
                  link: '/zh_CN/tool/Git 如何合并某个 commit',
                },
                {
                  text: 'Git 修改分支名称',
                  link: '/zh_CN/tool/Git/修改分支名称',
                },
                {
                  text: 'Git 分支落后同步方法',
                  link: '/zh_CN/tool/git-branch-sync-methods',
                },
              ],
            },
            {
              text: '软件工具',
              collapsed: false,
              items: [
                {
                  text: '从这篇教程开始, 成为 Sublime Text 大师',
                  link: '/zh_CN/tool/从这篇教程开始，成为%20Sublime%20Text%20大师',
                },
                {
                  text: '使用 phpMyAdmin 管理多台 MySQL 服务器',
                  link: '/zh_CN/tool/使用 phpMyAdmin 管理多台 MySQL 服务器',
                },
                {
                  text: '如何输入直角引号（「」和『』）',
                  link: '/zh_CN/tool/如何输入直角引号（「」和『』）',
                },
                {
                  text: 'Clash 配置代理白名单',
                  link: '/zh_CN/tool/Clash 配置代理白名单',
                },
              ],
            },
            {
              text: '包管理',
              collapsed: false,
              items: [
                {
                  text: '从 npm 迁移到 pnpm',
                  link: '/zh_CN/tool/从 npm 迁移到 pnpm',
                },
              ],
            },
          ],
          '/zh_CN/other/': [
            {
              text: '其他',
              collapsed: false,
              items: [
                {
                  text: '配置环境变量',
                  link: '/zh_CN/other/setup-environment-variables',
                },
                {
                  text: '软件版本命名规范',
                  link: '/zh_CN/other/version-naming-rules',
                },
              ],
            },
          ],
        },
        siteTitle: '月上陌阡',
        editLink: {
          pattern:
            'https://github.com/zhaiyuxin103/vitepress/edit/main/docs/:path',
          text: 'Edit this page on GitHub',
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/zhaiyuxin103' },
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2019-present Evan You',
        },

        search: {
          provider: 'algolia',
          options: {
            appId: '8J64VVRP8K',
            apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
            indexName: 'vitepress',
          },
        },

        carbonAds: {
          code: 'CEBDT27Y',
          placement: 'vuejsorg',
        },
      },
    },
  },
});
