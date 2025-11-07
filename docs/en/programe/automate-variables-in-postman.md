## Scenario

Assume the API returns JSON like this:

```json
{
  "accessToken": " 1 1 s+Z"
}
```

## Goal

Save the `accessToken` to a Postman environment variable.

## Implementation

Add the following code to Postman’s **Tests** tab:

```javascript
var jsonData = JSON.parse(responseBody);
environment.set('access_token', jsonData.accessToken);
```

## Result

Switch to the target environment to verify that `access_token` is now saved.

![file](/images/Postman自动化设置变量/example.png)
