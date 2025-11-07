## Preface

By default, `phpMyAdmin` only connects to a single `MySQL` server, with connection details stored in the configuration file. Editing the configuration every time you want to switch servers can be a hassle. Follow the methods below to make switching effortless.

## Method 1

::: info
Enter the server `IP`, username, and password manually when logging into `phpMyAdmin`.
:::

### Drawbacks

Logging in is tedious, and switching servers requires logging out first.

### Steps

1. Copy `config.sample.inc.php` in the phpMyAdmin root directory and rename it to `config.inc.php`.
2. Change `$cfg['AllowArbitraryServer']` from `false` to `true` to allow multiple `MySQL` servers.

   ```php
   /**
    * allow login to any user entered server in cookie based authentication
    *
    * @global boolean $cfg['AllowArbitraryServer']
    */
   $cfg['AllowArbitraryServer'] = true;
   ```

## Method 2 (Recommended)

::: info
On the login page, simply enter your username and password while the server address is selectable from a dropdown. You can even switch servers after logging in.

If security requirements are low, set `auth_type` to `config` to skip username/password entirely and just use the dropdown to switch servers.
:::

### Advantages

Logging in is much easier, and you can switch servers without logging out.

### Steps

1. Copy `config.sample.inc.php` in the phpMyAdmin root directory and rename it to `config.inc.php`.
2. Define multiple server configurations in the file:

   ```php
   $hosts = [
       1 => ['host' => 'localhost', 'user' => 'root', 'password' => 'root'],
       2 => ['host' => '192.168.10.10', 'user' => 'homestead', 'password' => 'secret']
   ];
   ```

3. Add the following code snippet to iterate over and load all server configurations:

   ```php
   for ($i = 1; $i <= count($hosts); $i++) {
       /* Authentication type */
       $cfg['Servers'][$i]['auth_type'] = 'cookie';
       /* Server parameters */
       $cfg['Servers'][$i]['host'] = $hosts[$i]['host']; // host
       $cfg['Servers'][$i]['connect_type'] = 'tcp';
       $cfg['Servers'][$i]['compress'] = false;
       /* Select mysqli if your server has it */
       $cfg['Servers'][$i]['extension'] = 'mysql';
       $cfg['Servers'][$i]['AllowNoPassword'] = true;
       $cfg['Servers'][$i]['user'] = $hosts[$i]['user']; // username
       $cfg['Servers'][$i]['password'] = $hosts[$i]['password']; // password
   }
   ```

4. Save the file and log in again—you can now manage multiple `MySQL` servers seamlessly.

::: tip
Article republished from: [Configure phpMyAdmin to enter an IP and manage multiple MySQL servers at login](https://www.oicto.com/phpmyadmin-mysql-ip/)
:::
