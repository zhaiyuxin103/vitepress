# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal knowledge base and blog site built with VitePress, containing programming tutorials, tool usage tips, and life reflections. The site is written primarily in Chinese and deployed to GitHub Pages.

**Live Site**: https://zhaiyuxin103.github.io/vitepress/

## Package Manager

**IMPORTANT**: This project uses `pnpm` exclusively. The `preinstall` script enforces this requirement and will fail if you try to use npm or yarn.

## Development Commands

### Running the Development Server
```bash
pnpm docs:dev
```
The dev server runs at http://localhost:5173

### Building
```bash
pnpm docs:build
```
Outputs to `docs/.vitepress/dist`

### Preview Production Build
```bash
pnpm docs:serve
```

### Code Quality

**Linting** (ESLint with auto-fix):
```bash
pnpm lint
```

**Formatting** (Prettier):
```bash
pnpm format          # Format all files
pnpm format:check    # Check formatting without writing
```

## Git Workflow & Commit Standards

This project enforces **Conventional Commits** via Commitlint with Husky hooks:

- **pre-commit**: Runs `lint-staged` (though lint-staged config is not currently in package.json - likely runs formatters/linters on staged files)
- **commit-msg**: Validates commit message format

### Commit Message Format
```text
type: description

Examples:
feat: 添加新功能
fix: 修复某个 bug
docs: 更新文档
style: 代码格式调整
refactor: 重构代码
chore: 构建配置变更
```

## Project Architecture

### Directory Structure
```text
docs/
├── .vitepress/
│   ├── config.ts          # VitePress configuration
│   ├── dist/              # Build output (ignored)
│   └── cache/             # VitePress cache (ignored)
├── programe/              # Programming tutorials
│   ├── PHP/
│   ├── Go/
│   ├── Java/
│   ├── Flutter/
│   ├── JavaScript/
│   ├── Python/
│   └── API/
├── tool/                  # Tool usage guides
│   ├── Git/
│   ├── Linux/
│   ├── Excel/
│   └── VSCode/
├── life/                  # Life & interests
├── other/                 # Miscellaneous
└── public/                # Static assets
    └── images/            # Image resources
```

### VitePress Configuration

**Location**: `docs/.vitepress/config.ts`

Key settings:
- **Base path**: `/vitepress/` (for GitHub Pages deployment)
- **Language**: `zh-CN`
- **Markdown plugins**: `markdown-it-task-lists` for checkbox support
- **Search**: Algolia search integration
- **Theme**: GitHub light syntax highlighting with line numbers
- **Clean URLs**: Enabled (no `.html` extensions)

The sidebar navigation is manually configured for each section (programe, tool, life, other) with collapsible groups.

## TypeScript Configuration

- **Module system**: ESNext with Node resolution
- **Strict mode**: Enabled
- **Unused locals**: Errors on unused variables
- **JSX**: Preserved (for Vue components)

## Linting & Formatting

### ESLint (`eslint.config.ts`)
Configured using the new flat config format with plugins for:
- JavaScript/TypeScript (`@eslint/js`, `typescript-eslint`)
- JSON/JSONC/JSON5 (`@eslint/json`)
- Markdown (`@eslint/markdown`)
- CSS (`@eslint/css`)

**Ignored paths**: `docs/.vitepress/dist/`, `docs/.vitepress/cache/`

### Prettier (`prettier.config.mjs`)
Minimal configuration:
- `singleQuote: true`

## Content Guidelines

When adding new documentation:
1. Place files in appropriate category folder (`programe/`, `tool/`, `life/`, `other/`)
2. Update sidebar configuration in `docs/.vitepress/config.ts`
3. Use proper markdown formatting (VitePress supports GitHub-flavored markdown)
4. Images should be placed in `docs/public/images/` with appropriate subdirectories
5. Follow the existing Chinese language style for consistency

## Deployment

The site is deployed to GitHub Pages. The base URL is configured as `/vitepress/` to match the GitHub repository name.
