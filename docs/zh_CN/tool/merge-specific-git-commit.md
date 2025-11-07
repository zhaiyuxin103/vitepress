---
title: Git 如何合并某个 commit
editLink: true
---

::: tip
本文以 `main` 分支和 `develop` 分支举例<br/>
需要将 `develop` 分支上的某一个 `commit` 合并到 `main` 分支上
:::

1. 使用 `git log` 查看需要合并的 `commit id`

   ![file](/images/Git如何合并某个commit/log.jpeg)

2. 切换到目标分支：`git checkout main`

   ![file](/images/Git如何合并某个commit/checkout.png)

3. 执行合并：`git cherry-pick <commit_id>`，最后 `push` 即可

   ![file](/images/Git如何合并某个commit/cherry.png)
