## Configure Multiple Profiles

1. Create a named profile with `aws configure --profile <profile-name>`.

2. Enter the `AWS Access Key ID`, `AWS Secret Access Key`, `region name`, and `output format` to complete the setup.

   ![file](/images/切换IAM角色（AWS-CLI）/profile.png)

3. The generated `config` and `credentials` files will now contain separate entries keyed by `profile-name`.

   ![file](/images/切换IAM角色（AWS-CLI）/file.png)

## Use the Profiles

### Basic Usage

1. Append `--profile <profile_name>` to your CLI command to run it with the desired profile.

2. For example, the command below uses the profile `Record China` to list S3 buckets.

   ![file](/images/切换IAM角色（AWS-CLI）/used.png)

### Simplify with Aliases

1. Typing `--profile <profile_name>` every time gets tedious. On macOS or Linux, define a shell alias:

   ```bash
   alias aws_Record-China='aws --profile Record-China'
   ```

2. From then on, simply run `aws_Record-China` to execute AWS CLI commands with that profile.

3. The screenshot below shows this alias in action.

   ![file](/images/切换IAM角色（AWS-CLI）/alias.png)

4. Add the alias to `~/.zshrc` so it persists:

   ```bash
   echo "alias aws_Record-China='aws --profile Record-China'" >> ~/.zshrc
   ```

## Set a Default Profile

1. If you frequently use one account and don’t want to rely on aliases, set the `AWS_DEFAULT_PROFILE` environment variable. Afterwards, running `aws` will automatically use that profile.

   ```bash
   export AWS_DEFAULT_PROFILE=Record-China
   ```

2. Example output:

   ![file](/images/切换IAM角色（AWS-CLI）/default.png)

3. Add the export to `~/.zshrc` to keep it active across sessions:

   ```bash
   echo "export AWS_DEFAULT_PROFILE=Record-China" >> ~/.zshrc
   ```

::: tip
References:

- [AWS CLI Documentation: Configure Multiple Profiles](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html#cli-configure-profiles-create)
- [How to Use Multiple Profiles in AWS CLI](https://www.jibing57.com/2017/10/24/how-to-use-aws-cli-with-multi-user/)
  :::
