# Building a Yaf Scaffold

## Install the Yaf Extension

1. Start by checking `phpinfo` to confirm whether your PHP build is Thread Safe (TS) or Non-Thread Safe (NTS).

   ![file](/images/PHP/搭建Yaf脚手架/thread-safety.png)

2. Visit the [PECL website](http://pecl.php.net/package/yaf) to download the extension.

   ![file](/images/PHP/搭建Yaf脚手架/dll.png)

   ![file](/images/PHP/搭建Yaf脚手架/download.png)

3. After extracting the archive, move the **php_yaf.dll** file into your PHP extension directory.

   ::: tip
   Make sure to locate your own extension directory—don't copy the path blindly.
   :::

   ![file](/images/PHP/搭建Yaf脚手架/extension_dir.png)

4. Edit the PHP configuration file.

   ![file](/images/PHP/搭建Yaf脚手架/ini.png)

   Add the following block in an appropriate location:

   ```ini
   extension=php_yaf.dll
   [yaf]
   yaf.use_namespace=1
   yaf.use_spl_autoload=1
   ```

5. Restart Nginx and check `phpinfo` again. Seeing the section below means the installation succeeded.

   ::: tip
   A full system reboot may be required before the change takes effect.
   :::

   ![file](/images/PHP/搭建Yaf脚手架/success.png)

## Install the Scaffold

::: tip
I chose the [`overtrue/yaf-skeleton`](https://github.com/overtrue/yaf-skeleton) scaffold because the blank framework felt too barebones—this one comes with some sensible defaults.
:::

1. Pull the code: `composer create-project overtrue/yaf-skeleton skeleton`
2. Install the template engine: `composer require league/plates`
3. Configure the Nginx site and you are ready to run :tada:

![file](/images/PHP/搭建Yaf脚手架/website.png)
