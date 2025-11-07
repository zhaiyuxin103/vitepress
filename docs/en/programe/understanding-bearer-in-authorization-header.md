# Why Add `Bearer` in the Authorization Header?

When designing API authorization—or consuming a third-party API—you often see headers like:

```http
Authorization: Bearer Tokenxxxxxx
```

Have you ever wondered why we don't simply write it as:

```http
Authorization: Tokenxxxxxx
```

The reason goes back to the [HTTP/1.0 specification](https://www.rfc-editor.org/rfc/rfc1945) from the W3C. It defines the Authorization header as:

```http
Authorization: <type> <authorization-parameters>
```

So `Bearer` is the authorization _type_. Other common types include:

| Authorization Type           | Description                                                                                                      |
| :--------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| **Basic**                    | Used for HTTP Basic authentication                                                                               |
| **Bearer**                   | Commonly seen with OAuth and JWT                                                                                 |
| **Digest**                   | HTTP Digest authentication with MD5 hashing (deprecated)                                                         |
| **HOBA**                     | HTTP Origin-Bound Authentication (deprecated)                                                                    |
| **Mutual**                   | HTTP message signature authentication (deprecated)                                                               |
| **Negotiate**                | [SPNEGO](https://tools.ietf.org/html/rfc4559) authentication (deprecated)                                        |
| **SCRAM-SHA-1**              | SCRAM-SHA-1 authentication (deprecated)                                                                          |
| **SCRAM-SHA-256**            | SCRAM-SHA-256 authentication (deprecated)                                                                        |
| **vapid**                    | VAPID authentication                                                                                             |
| **AWS4-HMAC-SHA256**         | [AWS](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html) authentication |
| **AWS4-HMAC-SHA256-PAYLOAD** | [AWS](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html) authentication |
| **MAC**                      | [MAC](https://www.rfc-editor.org/rfc/rfc2617#section-3) authentication                                           |
| **Netrc**                    | [Netrc](https://www.rfc-editor.org/rfc/rfc1738#section-10) authentication                                        |

::: tip
Article republished from: [Summer](https://learnku.com/users/1) — [Why Does the Authorization Header Need `Bearer`?](https://learnku.com/articles/68715)
:::
