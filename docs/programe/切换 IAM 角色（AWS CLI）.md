## 配置多个 Profile

1. 使用命名配置文件：`aws configure --profile <profile-name>`

2. 依次输入 `AWS Access Key ID`、`AWS Secret Access Key`、`region name`、`output format` 即可完成配置
   ![file](/images/切换IAM角色（AWS-CLI）/profile.png)

3. 此时生成的 `config` 和 `credentials` 文件中，会使用 `profile-name` 来区分不同的配置
   ![file](/images/切换IAM角色（AWS-CLI）/file.png)

## 使用多个 Profile

### 基本用法

1. 命令后面加上参数 `--profile <profile_name>` 即可使用 `profile_name` 对应的 `profile`

2. 如下命令使用 `Record China` 的 `profile` 来查看 `S3` 下的 `bucket list`
   ![file](/images/切换IAM角色（AWS-CLI）/used.png)

### 简化

1. 每次输入 `--profile <profile_name>` 是很繁琐的事情，在 `Mac` 或 `Linux` 下，可以使用 `alias` 来简化

```bash
alias aws_Record-China='aws --profile Record-China'
```

2. 之后每次使用的时候，直接使用 `aws_Record-China` 来使用 `Record-China` 的 `profile` 运行 `aws` 命令

3. 以下命令设置 `aws_Record-China` 为使用 `Record-China` 的 `profile` 来运行 `aws` 命令
   ![file](/images/切换IAM角色（AWS-CLI）/alias.png)

4. 添加到 `~/.zshrc` 中使得 `alias` 永久生效

```bash
echo "alias aws_Record-China='aws --profile Record-China'" >> ~/.zshrc
```

## 设置默认的 Profile

1. 如果有一个账号是使用的比较频繁的，而不想每次都使用 `alias` 的方式来运行 `aws`
   命令，也可以设置环境变量 `AWS_DEFAULT_PROFILE` 为频繁使用的账号名，此时输入 `aws `时候，会自动使用指定的账号配置

```bash
export AWS_DEFAULT_PROFILE=Record-China
```

2. 运行结果如下:
   ![file](/images/切换IAM角色（AWS-CLI）/default.png)

3. 添加到 `~/.zshrc` 中来使 `AWS_DEFAULT_PROFILE` 永久生效

```bash
echo "export AWS_DEFAULT_PROFILE=Record-China" >> ~/.zshrc
```

> [!TIP]
> 本文参考自：
>
> - [AWS Command Line Interface Documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html#cli-configure-profiles-create)
> - [如何在 aws cli 中使用多个配置文件](https://www.jibing57.com/2017/10/24/how-to-use-aws-cli-with-multi-user/)
