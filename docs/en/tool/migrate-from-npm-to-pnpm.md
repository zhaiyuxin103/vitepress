## Install pnpm

[https://pnpm.io/installation](https://pnpm.io/installation)

## Remove `node_modules`

```shell
npx npkill
```

## Add a `preinstall` Hook

```json
{
  "scripts": {
    "preinstall": "npx only-allow pnpm" // [!code ++]
    // ...
  }
}
```

## (Optional) Create `pnpm-workspace.yaml`

::: tip
This touches on a software development strategy called `monorepo`.
:::

```yaml
packages:
  # include packages in subfolders (change as required)
  - 'apps/**'
  # all packages in direct subdirs of packages/
  - 'packages/**'
  # exclude packages that are inside test directories
  - '!**/test/**'
```

Remove `workspaces` from `package.json`.

## (Optional) Warning When Running `pnpm add`

1. Add the `-w` flag when installing:

   ```shell
   pnpm add <pkg> -w
   ```

   ::: info
   Some third-party scripts run `pnpm add` automatically, so you may not control the CLI options—see the next approach.

   This might not be the best practice in a `monorepo` setup.
   :::

2. Create an `.npmrc` file in the project root with the following content:

   ```text
   ignore-workspace-root-check=true
   ```

## Generate `pnpm-lock.yaml` from `package-lock.json`

```shell
pnpm import
```

## Remove `package-lock.json`

```shell
rm -f package-lock.json
```

## Install Dependencies with `pnpm`

```shell
# Alias: pnpm i
pnpm install
```

## Replace `npm run xxx` with `pnpm xxx`

```json
{
  "scripts": {
    "test": "npm run test", // [!code --]
    "test": "pnpm test" // [!code ++]
  }
}
```

## Update `engine` in `package.json`

- [https://pnpm.io/package_json#engines](https://pnpm.io/package_json#engines)

::: tip
This article references:

- [How to migrate from yarn / npm to pnpm](https://dev.to/andreychernykh/yarn-npm-to-pnpm-migration-guide-2n04)
- [Migrate npm to pnpm](https://gist.github.com/mmyoji/ea01398a1cbeded5bf1a701711593759)
  :::
