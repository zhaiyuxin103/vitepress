### 在 Tests 脚本中设置变量

```js
if (pm.response.code === 200) {
    const response = JSON.parse(pm.response.text());
    if (response.data.access_token) {
        pm.environment.set('access_token', response.data.access_token);
    }
}
```

![file](/images/Postman自动化设置变量/example.png)

::: tip
本文转载自：[Postman 自动化设置 token 变量](https://learnku.com/laravel/t/15270/postman-automation-sets-token-variables)
:::
