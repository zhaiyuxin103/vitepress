### 说明
Composer 提供了 `Path` 加载本地扩展包的方法，允许我们将扩展包以本地目录形式进行加载，方便快速修改，也可以把修改后的代码提交到项目的 VCS 中。  
官方提供了 [使用 path 加载的文档](https://getcomposer.org/doc/05-repositories.md#path)，可以操作起来不够清晰，此文将一步步讲解如何操作。  
下文将以 [InfyOmLabs/laravel-generator](https://github.com/InfyOmLabs/laravel-generator) 扩展包为例，演示所有的步骤。

### 1. 将项目本地化
你可以通过任何方式将 `laravel-generator` 放入你的 packages 目录。本文将以 `git clone` 的方式完成此操作。

根目录下：
```bash
mkdir packages
cd packages
git clone https://github.com/InfyOmLabs/laravel-generator.git
```
如下图：

![file](/images/Composer本地路径加载第三方扩展包/laravel-generator-localization.png)

### 2. 修改 composer.json 文件

我们可以利用 `composer.json` 里的 `repositories` 中的 `path` 方式创建自定义 package。<br>
[官方解释见此](https://getcomposer.org/doc/05-repositories.md#path)<br>
下面将 `laravel-generator` 的下载地址对应到本地的 `packages/laravel-generator` 目录。

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

注意只修改 `repositories` 选项，如图：

![file](/images/Composer本地路径加载第三方扩展包/composer-json.png)

### 3. 更新 composer

使用 `require` 命令来加载扩展包，此命令会自动把 `infyomlabs/laravel-generator:*@dev` 添加到 composer.json 文件中，并且安装依赖和更新 composer.lock 文件。

> 更多关于 `composer require` 的信息请见：[正确的 Composer 扩展包安装方法](https://learnku.com/php/t/1901/correct-method-for-installing-composer-expansion-pack)

```bash
composer require "infyomlabs/laravel-generator:*@dev"
```

::: tip 
这里的 `*@dev` 很重要
:::

输入如下：

![file](/images/Composer本地路径加载第三方扩展包/require.png)

如果你新加入一个扩展包，上面的流程已经讲完。

### 4. 更换扩展包加载方式

如果你一开始是使用除了 `path` 的其他方式加载的，现在想换为使用 `path` 加载，你可以使用 `remove` 命令移除：

```bash
composer remove infyomlabs/laravel-generator
```

然后再参照上面的流程重新加载

### 工作原理

composer 会创建一个文件夹链接，把 `vendor/infyomlabs/laravel-generator` 文件夹链接到 `packages/laravel-generator` 下，如图：

![file](/images/Composer本地路径加载第三方扩展包/link.png)

---

::: tip
本文转载自：[Composer 本地路径加载第三方扩展包](https://learnku.com/laravel/t/1999/composer-local-path-loading-third-party-extension-pack)
:::