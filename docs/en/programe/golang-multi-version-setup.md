::: tip
This walkthrough uses **macOS**.
:::

Using Homebrew on macOS makes switching between multiple Go versions straightforward.

Install the latest version:

```shell
brew install go
```

At the time of writing, the latest Go release is 1.20:

```shell
go version
go version go1.20.2 darwin/arm64
```

Install a specific version:

```shell
brew install go@1.19
```

First, unlink the current version:

```shell
brew unlink go
Unlinking /opt/homebrew/Cellar/go/1.20.2... 2 symlinks removed.
```

Then link the version you want:

```shell
brew link go@1.19
Linking /opt/homebrew/Cellar/go@1.19/1.19.7... 2 symlinks created.

If you need to have this software first in your PATH instead consider running:
  echo 'export PATH="/opt/homebrew/opt/go@1.19/bin:$PATH"' >> ~/.zshrc
```

Test that the switch succeeded:

```shell
go version
go version go1.19.7 darwin/arm64
```

::: info
Article republished from: [How to Use Multiple Go Versions (Mac)](https://learnku.com/go/wikis/61549)
:::
