## Preface

Contributing code to open-source projects can be done in two ways:

1. Having write access to the repository, allowing direct pushes
2. Not having write access, submitting changes through Pull Requests (PRs)

This article will briefly explain the PR workflow. For clarity, we'll use the following terminology:

- Open-source repository: **Main repository**
- Forked repository: **Fork repository**

## Fork & Pull Request

Using the open-source project [golang/go](https://github.com/golang/go) as an example, fork the open-source repository to your own account.

### Fork Repository

Clone the forked repository to your local machine:

```bash
$ git clone git@github.com:zhaiyuxin103/go.git
```

After completing your code changes, commit and save:

```bash
$ git add -A
$ git commit -m "feat: something messages"
$ git push
```

### Main Repository

Open your forked repository's [homepage](https://github.com/zhaiyuxin103/go), click "New pull request", and submit your changes to the main repository.

## Syncing Latest Code from Main Repository

```bash
$ git remote add upstream https://github.com/golang/go.git
$ git fetch upstream
$ git merge upstream/master
```

::: tip
Article republished from: [How to Contribute Code to Open-Source Projects](https://blog.cnguu.cn/life/%E5%A6%82%E4%BD%95%E7%BB%99%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE%E8%B4%AB%E7%8C%AE%E4%BB%A3%E7%A0%81.html)
:::
