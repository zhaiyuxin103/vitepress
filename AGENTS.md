# Repository Guidelines

This repository hosts a VitePress-powered knowledge site. Follow these rules to keep content, code, and navigation consistent and easy to maintain.

## Project Structure & Module Organization
- Source content lives in `docs/`; site config is in `docs/.vitepress/config.ts`.
- Categories: `docs/programe/`, `docs/tool/`, `docs/life/`, `docs/other/`.
- Static assets belong in `docs/public/` (e.g., `docs/public/images/...`). Reference as `/images/...` or `/logo.png`.
- When adding a page, also update `themeConfig.nav`/`themeConfig.sidebar` in `docs/.vitepress/config.ts`.

## Build, Test, and Development Commands
- Use pnpm only (enforced by `only-allow`). Examples:
  - `pnpm install` — install dependencies.
  - `pnpm docs:dev` — start local dev server.
  - `pnpm docs:build` — build static site to `docs/.vitepress/dist`.
  - `pnpm docs:serve` — preview the production build.
  - `pnpm format` / `pnpm format:check` — format or verify formatting.
  - `pnpm lint` — run ESLint with auto-fix.

## Coding Style & Naming Conventions
- Prettier formats code; single quotes enabled (see `prettier.config.mjs`). Use 2-space indent.
- ESLint covers JS/TS/JSON/CSS/Markdown (see `eslint.config.ts`). Fix all lints before committing.
- Markdown naming: use clear, human-readable filenames. Non‑Latin names are allowed; for English, prefer `kebab-case.md`.
- Each Markdown file should start with a single `#` H1 title; keep headings and links consistent with filenames.

## Testing Guidelines
- No unit tests are configured. Validate changes by:
  - Running `pnpm docs:build` (the build must succeed).
  - Previewing via `pnpm docs:serve` to check navigation, links, and assets.

## Commit & Pull Request Guidelines
- Conventional Commits are required (Commitlint + Husky):
  - Types: `feat`, `fix`, `docs`, `chore`, `refactor`, `style`, `perf`.
  - Examples: `docs(tool): add Navicat install guide`, `feat: enable task list plugin`.
- PRs must include: concise description, scope (files/paths), linked issues, and screenshots if UI/visual changes.
- Keep PRs small and focused; run `pnpm format` and `pnpm lint` before pushing.

## Security & Configuration Tips
- Deployment uses GitHub Pages with `base: '/vitepress/'`. Don’t change `base`, `sitemap.hostname`, or `editLink.pattern` unless deployment/repo changes.
- Do not commit secrets. Images should be optimized and stored under `docs/public/images/`.

## Agent-Specific Notes
- Do not rename/move Markdown files without updating all references and the sidebar/nav.
- Prefer minimal, surgical changes; honor Prettier/ESLint and existing content structure.

