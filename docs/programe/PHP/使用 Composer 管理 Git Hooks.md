:::tip
本文以 MacOS 12.1、[Laravel 10.x](https://laravel.com/) 框架为例
:::

## 安装扩展包

根目录下：

```bash
composer require --dev brainmaestro/composer-git-hooks:v3.0.0-alpha.1
```

如下图：

![file](/images/PHP/使用Composer管理Git-Hooks/install.png)

## 修改配置

> 修改 `composer.json` 文件

1. 添加 `scripts` 选项

    ```json
    {
      "scripts": {
        "post-update-cmd": [
          "@php artisan vendor:publish --tag=laravel-assets --ansi --force",
          "cghooks update" // [!code ++]
        ],
        "post-merge": "composer install", // [!code ++]
        "post-install-cmd": [ // [!code ++]
          "cghooks add --ignore-lock", // [!code ++]
          "cghooks update" // [!code ++]
        ], // [!code ++]
        "cghooks": "vendor/bin/cghooks" // [!code ++]
      }
    }
    ```
 
2. 向 `extra` 选项中添加 `hooks` 选项

    ```json
    {
      "extra": {
        "laravel": {
          "dont-discover": []
        },
        "hooks": { // [!code ++]
          "config": { // [!code ++]
            "stop-on-failure": [ // [!code ++]
              "pre-commit", // [!code ++]
              "pre-push" // [!code ++]
            ] // [!code ++]
          }, // [!code ++]
          "pre-commit": [ // [!code ++]
            "echo Running pre-commit hooks...", // [!code ++]
            "./vendor/bin/pint", // [!code ++]
            "echo Running tests...", // [!code ++]
            "php artisan test" // [!code ++]
          ], // [!code ++]
          "commit-msg": "grep -qE '^(feat|fix|chore|docs|style|refactor|perf|test|build|ci|revert)\\([^)]+\\):\\s.+\\s?(?:\\(#\\d+\\))?' $1 || (echo 'Commit message must follow Conventional Commits specification!' && exit 1)", // [!code ++]
          "pre-push": [ // [!code ++]
            "echo Running pre-push hooks...", // [!code ++]
            "./vendor/bin/pint --test", // [!code ++]
            "echo Running tests...", // [!code ++]
            "php artisan test" // [!code ++]
          ], // [!code ++]
          "post-merge": "composer install" // [!code ++]
        } // [!code ++]
      }
    }
    ```

## 添加 Git Hooks

根目录下：

```bash
composer cghooks add --force-win
```

:::tip
更多信息可参考：[brainmaestro/composer-git-hooks](https://github.com/BrainMaestro/composer-git-hooks)
:::