设计 API 授权，或者调用第三方 API 时，经常会接触到：

```http
Authorization : Bearer Tokenxxxxxx
```

有没有疑惑为何不直接写成这样就得了：

```http
Authorization : Tokenxxxxxx
```

这是因为 W3C 的 [HTTP 1.0](https://www.rfc-editororg/rfc/rfc1945) 规范，Authorization 的格式是：

```http
Authorization: <type> <authorization-parameters>
```

所以 Bearer 是授权的类型，常见的授权类型还有：

| 授权类型                     | 说明                                                                                                   |
| :--------------------------- | :----------------------------------------------------------------------------------------------------- |
| **Basic**                    | 用于 http-basic 认证                                                                                   |
| **Bearer**                   | 常见于 OAuth 和 JWT 授权                                                                               |
| **Digest**                   | MD5 哈希的 http-digest 认证（已弃用）                                                                  |
| **HOBA**                     | HTTP 消息签名认证（已弃用）                                                                            |
| **Mutual**                   | HTTP 消息签名认证（已弃用）                                                                            |
| **Negotiate**                | [SPNEGO](https://tools.ietf.org/html/rfc4559) 认证（已弃用）                                           |
| **SCRAM-SHA-1**              | SCRAM-SHA-1 认证（已弃用）                                                                             |
| **SCRAM-SHA-256**            | SCRAM-SHA-256 认证（已弃用）                                                                           |
| **vapid**                    | VAPID 认证                                                                                             |
| **AWS4-HMAC-SHA256**         | [AWS](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html) 认证 |
| **AWS4-HMAC-SHA256-PAYLOAD** | [AWS](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html) 认证 |
| **MAC**                      | [MAC](https://tools.ietf.org/html/rfc2617#section-3) 认证                                              |
| **Netrc**                    | [Netrc](https://tools.ietf.org/html/rfc1738#section-10) 认证                                           |

::: tip
本文转载自：[Summer](https://learnku.com/users/1) - [API 授权为啥要在 Authorization 标头里加个 Bearer？](https://learnku.com/articles/68715)
:::
