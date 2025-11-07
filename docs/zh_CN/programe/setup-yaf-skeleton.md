## 安装 Yaf 扩展

1. 首先通过 phpinfo 确认自己的 PHP 版本是 TS 还是 NTS

   ![file](/images/PHP/搭建Yaf脚手架/thread-safety.png)

2. 前往 [PECL 官网](http://pecl.php.net/package/yaf) 下载扩展

   ![file](/images/PHP/搭建Yaf脚手架/dll.png)

   ![file](/images/PHP/搭建Yaf脚手架/download.png)

3. 解压之后将文件夹中的 **php_yaf.dll** 文件剪切到 PHP 的扩展目录

   :::tip
   扩展目录根据自己的情况来判断，不要照搬哈 ~
   :::

   ![file](/images/PHP/搭建Yaf脚手架/extension_dir.png)

4. 修改 PHP 配置文件

   ![file](/images/PHP/搭建Yaf脚手架/ini.png)

   在适当的位置添加以下代码：

   ```ini
   extension=php_yaf.dll
   [yaf]
   yaf.use_namespace=1
   yaf.use_spl_autoload=1
   ```

5. 重启 Nginx，再次查看 phpinfo，能看到以下信息即为安装成功

   :::tip
   可能需要重启电脑才会生效
   :::

   ![file](/images/PHP/搭建Yaf脚手架/success.png)

## 安装脚手架

::: tip
博主选择了 [`overtrue/yaf-skeleton`](https://github.com/overtrue/yaf-skeleton)这款脚手架，因为实在忍受不了这种啥都没有的框架，所以选了有些基础封装的脚手架
:::

1. 拉取代码：`composer create-project overtrue/yaf-skeleton skeleton`

2. 安装模板引擎：`composer require league/plates`

3. 最后配置 Nginx 站点即可运行 :tada:

![file](/images/PHP/搭建Yaf脚手架/website.png)
