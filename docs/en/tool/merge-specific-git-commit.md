# How to Merge a Specific Git Commit

::: tip
Example: `develop` contains a commit that needs to be merged into `main`.
:::

1. Run `git log` on the source branch to find the commit ID you want to merge.

   ![file](/images/Git如何合并某个commit/log.jpeg)

2. Check out the target branch, e.g. `git checkout main`.

   ![file](/images/Git如何合并某个commit/checkout.png)

3. Use `git cherry-pick <commit_id>` to apply the commit, then push as needed.

   ![file](/images/Git如何合并某个commit/cherry.png)
