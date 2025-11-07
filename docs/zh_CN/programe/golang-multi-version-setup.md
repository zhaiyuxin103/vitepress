<div class="tip custom-block" style="padding-top: 8px">
本文基于 <strong>Mac</strong> 系统
</div>

Mac 下使用 homebrew 可以轻松实现 Go 多版本切换。

使用以下方法安装最新版本：

```shell
$ brew install go
```

写这篇文章时，Go 的最新版本为 1.20：

```shell
$ go version
go version go1.20.2 darwin/arm64
```

使用以下方法安装指定版本：

```shell
brew install go@1.19
```

首先 unlink：

```shell
brew unlink go
Unlinking /opt/homebrew/Cellar/go/1.20.2... 2 symlinks removed.
```

link 指定版本：

```shell
$ brew link go@1.19
Linking /opt/homebrew/Cellar/go@1.19/1.19.7... 2 symlinks created.

If you need to have this software first in your PATH instead consider running:
  echo 'export PATH="/opt/homebrew/opt/go@1.19/bin:$PATH"' >> ~/.zshrc
```

测试下是否成功：

```shell
go version
go version go1.19.7 darwin/arm64
```

::: info
本文转载自：[如何使用 Go 多版本（Mac）](https://learnku.com/go/wikis/61549)
:::
