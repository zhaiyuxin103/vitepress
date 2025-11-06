## 安装 pnpm

[https://pnpm.io/installation](https://pnpm.io/installation)

## 删除 node_modules

```shell
npx npkill
```

## 添加 preinstall hook

```json
{
  "scripts": {
    "preinstall": "npx only-allow pnpm" // [!code ++]
    // ...
  }
}
```

## [可选]创建 pnpm-workspace.yaml 并写入以下内容

> [!TIP]
>
> - [ ] 这里涉及到一个名为 `monorepo` 的软件开发策略

```yaml
packages:
  # include packages in subfolders (change as required)
  - 'apps/**'
  # all packages in direct subdirs of packages/
  - 'packages/**'
  # exclude packages that are inside test directories
  - '!**/test/**'
```

将 `workspaces` 从 `package.json` 中删除

## [可选]使用 pnpm add 安装依赖有警告

1. 执行 `pnpm add` 时增加 `-w` 选项

> [!INFO]
> 考虑到某些第三方会自主执行 pnpm add，此时不好控制 cli 选项，所以推荐第二种方案
>
> - [ ] 考虑到 `monorepo`，这里应该不是最佳实践

2. 根目录下创建 `.npmrc` 文件并写入 `ignore-workspace-root-check=true`

## 依据 package-lock.json 生成 pnpm-lock.yaml

```shell
pnpm import
```

## 删除 package-lock.json

```shell
rm -f package-lock.json
```

## 使用 `pnpm` 安装依赖

```shell
# 别名：pnpm i
pnpm install
```

## 将 npm run xxx 替换为 pnpm xxx

```json
{
  "scripts": {
    "test": "npm run test", // [!code --]
    "test": "pnpm test" // [!code ++]
  }
}
```

## 修改 package.json 文件中 engine

- [https://pnpm.io/package_json#engines](https://pnpm.io/package_json#engines)

> [!TIP]
> 本文参考于以下文章：
>
> - [How to migrate from yarn / npm to pnpm](https://dev.to/andreychernykh/yarn-npm-to-pnpm-migration-guide-2n04)
> - [Migrate npm to pnpm](https://gist.github.com/mmyoji/ea01398a1cbeded5bf1a701711593759)
