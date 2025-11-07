::: tip
Example: rename `master` to `main`.
:::

## Steps

### Rename the Local Branch

```shell
git branch -m master main
```

### Push the New Branch and Set Upstream

```shell
git push -u origin main
```

### Update the Default Branch

Set `main` as the default branch in your repository settings (e.g., on GitHub).

### Delete the Old Remote Branch

```shell
git push origin --delete master
```
