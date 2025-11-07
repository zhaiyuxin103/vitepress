## Overview

Composer offers a `path` repository type that lets you load packages from a local directory. This makes it easy to tweak code quickly and commit changes directly to your project’s VCS. The official docs for [path repositories](https://getcomposer.org/doc/05-repositories.md#path) can feel a bit abstract, so this guide walks through every step using [InfyOmLabs/laravel-generator](https://github.com/InfyOmLabs/laravel-generator) as an example.

## 1. Bring the Package into Your Project

Add `laravel-generator` to your local `packages` directory any way you like. Here we’ll use `git clone`.

Run the following from the project root:

```bash
mkdir packages
cd packages
git clone https://github.com/InfyOmLabs/laravel-generator.git
```

Result:

![file](/images/PHP/Composer本地路径加载第三方扩展包/laravel-generator-localization.png)

## 2. Update `composer.json`

Use a `path` repository entry under `repositories` in `composer.json` to point to the local package.<br>
See the [official explanation here](https://getcomposer.org/doc/05-repositories.md#path).<br>
We’ll map the package to `packages/laravel-generator`.

```json
{
  "repositories": [
    {
      "type": "path",
      "url": "packages/laravel-generator"
    }
  ]
}
```

Make sure you only update the `repositories` section, as shown below:

![file](/images/PHP/Composer本地路径加载第三方扩展包/composer-json.png)

## 3. Require the Package

Run `composer require` to load the package. This command adds `infyomlabs/laravel-generator:*@dev` to `composer.json`, installs dependencies, and updates `composer.lock`.

> For more about `composer require`, see [The Right Way to Install Composer Packages](https://learnku.com/php/t/1901/correct-method-for-installing-composer-expansion-pack).

```bash
composer require "infyomlabs/laravel-generator:*@dev"
```

::: tip
The `*@dev` suffix is critical.
:::

You should see output similar to:

![file](/images/PHP/Composer本地路径加载第三方扩展包/require.png)

If you’re adding a brand-new package, you can stop here.

## 4. Switch an Existing Package to the `path` Repository

If you originally installed the package using another repository type and now want to switch to `path`, first remove it:

```bash
composer remove infyomlabs/laravel-generator
```

Then follow the steps above to reinstall it from the local path.

## How It Works

Composer creates a directory symlink so that `vendor/infyomlabs/laravel-generator` points to `packages/laravel-generator`, as shown below:

![file](/images/PHP/Composer本地路径加载第三方扩展包/link.png)

---

::: tip
Article republished from: [Composer Load Third-Party Packages from a Local Path](https://learnku.com/laravel/t/1999/composer-local-path-loading-third-party-extension-pack)
:::
