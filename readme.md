<h1 align="center">Welcome to VitePress 👋</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/vitepress" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/vitepress.svg?style=for-the-badge">
  </a>
  <a href="https://learnku.fit/" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg?style=for-the-badge" />
  </a>
  <a href="https://opensource.org/licenses/MIT" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" />
  </a>
  <a href="https://twitter.com/zhaiyuxin103" target="_blank">
    <img alt="Twitter: zhaiyuxin103" src="https://img.shields.io/twitter/follow/zhaiyuxin103.svg?style=for-the-badge" />
  </a>
</p>

## 项目简介

这是一个基于 [VitePress](https://vitepress.dev/) 构建的个人知识库和博客网站，主要分享编程学习心得、工具使用技巧以及生活感悟。

### 🏠 [在线访问](https://zhaiyuxin103.github.io/vitepress/)

## 技术栈

- **框架**: [VitePress](https://vitepress.dev/) - 基于 Vite 和 Vue 的静态站点生成器
- **包管理器**: [pnpm](https://pnpm.io/) - 快速、节省磁盘空间的包管理器
- **代码规范**:
  - [ESLint](https://eslint.org/) - JavaScript/TypeScript 代码检查
  - [Prettier](https://prettier.io/) - 代码格式化
  - [Commitlint](https://commitlint.js.org/) - Git 提交信息规范检查
- **Git Hooks**: [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/lint-staged/lint-staged)

## 项目结构

```text
vitepress/
├── docs/                    # 文档目录
│   ├── programe/           # 编程相关文档
│   │   ├── API/            # API 相关
│   │   ├── Flutter/        # Flutter 开发
│   │   ├── Go/             # Go 语言
│   │   ├── Java/           # Java 开发
│   │   ├── JavaScript/     # JavaScript
│   │   ├── PHP/            # PHP 开发
│   │   └── Python/         # Python 开发
│   ├── tool/               # 工具使用
│   │   ├── Git/            # Git 相关
│   │   ├── Linux/          # Linux 命令
│   │   └── VSCode/         # VSCode 技巧
│   ├── life/               # 生活感悟
│   ├── other/              # 其他杂项
│   └── public/             # 静态资源
│       └── images/         # 图片资源
├── eslint.config.ts        # ESLint 配置
├── prettier.config.mjs     # Prettier 配置
├── commitlint.config.mjs   # Commitlint 配置
└── package.json            # 项目配置
```

## 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

## 安装

本项目使用 `pnpm` 作为包管理器，安装前请确保已安装 pnpm：

```bash
# 安装 pnpm（如果尚未安装）
npm install -g pnpm

# 安装项目依赖
pnpm install
```

## 开发

### 启动开发服务器

```bash
pnpm docs:dev
```

启动后，访问 http://localhost:5173 查看网站。

### 构建生产版本

```bash
pnpm docs:build
```

构建产物将输出到 `.vitepress/dist` 目录。

### 预览生产构建

```bash
pnpm docs:serve
```

## 代码规范

### 代码格式化

```bash
# 格式化代码
pnpm format

# 检查代码格式
pnpm format:check
```

### 代码检查

```bash
# 运行 ESLint 并自动修复
pnpm lint
```

### Git 提交规范

项目使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范，提交信息会自动通过 Commitlint 检查。

示例：

```bash
git commit -m "feat: 添加新功能"
git commit -m "fix: 修复某个 bug"
git commit -m "docs: 更新文档"
```

## 脚本命令

| 命令 | 说明 |
|------|------|
| `pnpm docs:dev` | 启动开发服务器 |
| `pnpm docs:build` | 构建生产版本 |
| `pnpm docs:serve` | 预览生产构建 |
| `pnpm format` | 格式化所有代码 |
| `pnpm format:check` | 检查代码格式 |
| `pnpm lint` | 运行 ESLint 并自动修复 |

## 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'feat: Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 作者

👤 **翟宇鑫**

- 个人网站: https://learnku.fit/
- Twitter: [@zhaiyuxin103](https://twitter.com/zhaiyuxin103)
- GitHub: [@zhaiyuxin103](https://github.com/zhaiyuxin103)
- LinkedIn: [@zhaiyuxin103](https://linkedin.com/in/zhaiyuxin103)

## 支持

如果这个项目对你有帮助，请给我一个 ⭐️

<a href="https://www.patreon.com/zhaiyuxin103">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" alt="Become a Patron" width="160">
</a>

## 许可证

Copyright © 2022 [翟宇鑫](https://github.com/zhaiyuxin103).  
本项目采用 [MIT](https://opensource.org/licenses/MIT) 许可证。

## 致谢

感谢 JetBrains 为本项目和其他开源项目提供免费许可证支持。

[![JetBrains](https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.svg)](https://www.jetbrains.com/?from=https://github.com/zhaiyuxin103)

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
