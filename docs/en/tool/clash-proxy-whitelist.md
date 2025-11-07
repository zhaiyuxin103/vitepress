## Windows

::: info
To be added.
:::

## macOS

- Edit `~/.config/clash/proxyIgnoreList.plist` (create the file if it does not exist).
- Based on the [example file](https://github.com/yichengchen/clashX/blob/master/proxyIgnoreList.plist), add your custom whitelist domains.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<array>
    <string>192.168.0.0/16</string>
    <string>10.0.0.0/8</string>
    <string>172.16.0.0/12</string>
    <string>127.0.0.1</string>
    <string>localhost</string>
    <string>*.local</string>
    <string>*.crashlytics.com</string>
    <!-- Do not remove the entries above; append new domains below -->
    <string>*.baidu.com</string>
    <string>*.test</string>
</array>
</plist>
```

- Restart `ClashX`.

## Linux

::: info
To be added.
:::
