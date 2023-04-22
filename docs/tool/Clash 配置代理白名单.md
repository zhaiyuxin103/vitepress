## Windows

::: info
有待补充~
:::

## MacOS

- 编辑 `~/.config/clash/proxyIgnoreList.plist`（如果没有该文件，则新建）

- 参考[示例文件](https://github.com/yichengchen/clashX/blob/master/proxyIgnoreList.plist)加入自定义的白名单域名

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
    <!-- 上面的不可以删掉，加入新的域名 -->
	<string>*.baidu.com</string>
	<string>*.test</string>
</array>
</plist>
```

- 重启 `ClashX`

## Linux

::: info
有待补充~
:::
