## Overview

Using emojis in `git commit` messages makes the history easier to scan and highlights the intent of each change.

## Commit Format

Follow this structure when writing commit messages:

```text
:emoji:<type>(<scope>): <subject>
```

- Keep the subject under 100 characters
- Use sentence case, imperative mood
- No punctuation at the end

## Common Emoji

| Emoji    | Code                          | Meaning (ZH)                | Meaning (EN)                                 |
| :------- | :---------------------------- | :-------------------------- | :------------------------------------------- |
| 🎉       | `:tada:`                      | 初始化提交                  | Initial commit                               |
| ✨       | `:sparkles:`                  | 添加新特性                  | Introducing new features                     |
| 🔖       | `:bookmark:`                  | 发行 / 版本标签             | Releasing / Version tags                     |
| 🐛       | `:bug:`                       | 修复 bug                    | Fixing a bug                                 |
| 🚑       | `:ambulance:`                 | 核心代码修复                | Critical hotfix                              |
| 🌐       | `:globe_with_meridians:`      | 国际化与本地化              | Internationalization / localization          |
| 💄       | `:lipstick:`                  | 更新界面和样式文件          | Adding or updating UI and styles             |
| 🎬       | `:clapper:`                   | 更新演示 / 示例             | Updating demos / examples                    |
| 🚨       | `:rotating_light:`            | 移除警告信息                | Removing linter warnings                     |
| 🔧       | `:wrench:`                    | 修改配置文件                | Changing configuration files                 |
| ➕       | `:heavy_plus_sign:`           | 添加依赖                    | Adding a dependency                          |
| ➖       | `:heavy_minus_sign:`          | 移除依赖                    | Removing a dependency                        |
| ⬆️       | `:arrow_up:`                  | 升级依赖                    | Upgrading dependencies                       |
| ⬇️       | `:arrow_down:`                | 依赖降级                    | Downgrading dependencies                     |
| ⚡️ / 🐎 | `:zap:` / `:racehorse:`       | 提升性能                    | Improving performance                        |
| 📈       | `:chart_with_upwards_trend:`  | 添加代码跟踪分析            | Adding / updating analytics or tracking      |
| 🚀       | `:rocket:`                    | 部署程序                    | Deploying stuff                              |
| ✅       | `:white_check_mark:`          | 添加测试代码                | Adding / updating tests                      |
| 📝       | `:memo:`                      | 撰写文档                    | Writing docs                                 |
| 🔨       | `:hammer:`                    | 重大重构                    | Major refactoring                            |
| 🎨       | `:art:`                       | 改进代码结构 / 代码格式     | Improving code structure / format            |
| 🔥       | `:fire:`                      | 移除代码或文件              | Removing code or files                       |
| ✏️       | `:pencil2:`                   | 修复拼写错误                | Fixing typos                                 |
| 🚧       | `:construction:`              | 正在进行中                  | Work in progress                             |
| 👷       | `:construction_worker:`       | 添加 CI 构建到系统          | Adding / updating CI build system            |
| 💚       | `:green_heart:`               | 修复 CI 构建                | Fixing CI build                              |
| 🔒       | `:lock:`                      | 修复安全问题                | Fixing security issues                       |
| 🐳       | `:whale:`                     | Docker 相关工作             | Work related to Docker                       |
| 🍎       | `:apple:`                     | 修复 macOS 下的问题         | Fixing something on macOS                    |
| 🐧       | `:penguin:`                   | 修复 Linux 下的问题         | Fixing something on Linux                    |
| 🏁       | `:checked_flag:`              | 修复 Windows 下的问题       | Fixing something on Windows                  |
| 🤖       | `:robot:`                     | 修复 Android 平台的问题     | Fixing something on Android                  |
| 🍏       | `:green_apple:`               | 修复 iOS 平台的问题         | Fixing something on iOS                      |
| 💩       | `:hankey:`                    | 改进垃圾代码                | Writing bad code that needs cleanup          |
| ⏪       | `:rewind:`                    | 恢复修改                    | Reverting changes                            |
| 🔀       | `:twisted_rightwards_arrows:` | 合并分支                    | Merging branches                             |
| 📦       | `:package:`                   | 更新已编译的文件或包        | Adding / updating compiled files or packages |
| 👽       | `:alien:`                     | 由于外部 API 更改而更新代码 | Updating code due to external API changes    |
| 🚚       | `:truck:`                     | 移动或重命名文件            | Moving or renaming files                     |
| 📄       | `:page_facing_up:`            | 添加或更新许可证            | Adding / updating license                    |
| 💥       | `:boom:`                      | 引入重大变化                | Introducing breaking changes                 |
| 🍱       | `:bento:`                     | 增加或更新资源文件          | Adding / updating assets                     |
| 👌       | `:ok_hand:`                   | 更新代码，因为代码审核变更  | Updating code after code review              |
| ♿️       | `:wheelchair:`                | 提高可访问性                | Improving accessibility                      |
| 💡       | `:bulb:`                      | 添加源码注释                | Adding / updating comments                   |
| 🍻       | `:beers:`                     | 醉酒写代码                  | Writing code drunkenly                       |
| 💬       | `:speech_balloon:`            | 更新文本和字面量            | Adding / updating text and literals          |
| 🗃       | `:card_file_box:`             | 执行数据库相关的变化        | Performing database changes                  |
| 🔊       | `:loud_sound:`                | 添加日志记录                | Adding / updating logs                       |
| 🔇       | `:mute:`                      | 删除日志记录                | Removing logs                                |
| 👥       | `:busts_in_silhouette:`       | 添加贡献者                  | Adding / updating contributor(s)             |
| 🚸       | `:children_crossing:`         | 提高用户体验 / 可用性       | Improving UX / usability                     |
| 🏗       | `:building_construction:`     | 架构调整                    | Making architectural changes                 |
| 📱       | `:iphone:`                    | 响应式设计                  | Working on responsive design                 |
| 🤡       | `:clown_face:`                | 模拟数据                    | Mocking things                               |
| 🥚       | `:egg:`                       | 添加一个彩蛋                | Adding / updating an easter egg              |
| 🙈       | `:see_no_evil:`               | 添加或更新 .gitignore 文件  | Adding / updating .gitignore                 |
| 📸       | `:camera_flash:`              | 添加或更新快照              | Adding / updating snapshots                  |
| 📌       | `:pushpin:`                   | 将依赖项固定到特定版本      | Pinning dependencies                         |
| ♻️       | `:recycle:`                   | 重构代码                    | Refactoring code                             |
| ⚗       | `:alembic:`                   | 尝试新事物                  | Experimenting with new things                |
| 🔍       | `:mag:`                       | 改善SEO                     | Improving SEO                                |
| ☸️       | `:wheel_of_dharma:`           | 关于 Kubernetes 的工作      | Work related to Kubernetes                   |
| 🏷️       | `:label:`                     | 添加或更新类型              | Adding / updating types (Flow, TypeScript)   |
| 🌱       | `:seedling:`                  | 添加或更新数据填充文件      | Adding / updating seed files                 |
| 🚩       | `:triangular_flag_on_post:`   | 添加 / 更新 / 删除功能标志  | Adding / updating / removing feature flags   |
| 🥅       | `:goal_net:`                  | 捕获异常                    | Catching errors                              |
| 💫       | `:dizzy:`                     | 添加或更新动画和过渡        | Adding / updating animations                 |
| 🗑       | `:wastebasket:`               | 弃用需要清除的代码          | Deprecating code slated for removal          |

::: tip
References:

- [Git commit emoji 食用指南](https://blog.cnguu.cn/program/git-commit-emoji-shi-yong-zhi-nan.html)
- [gitmoji](https://github.com/carloscuesta/gitmoji)
- [gitmoji (Chinese translation)](https://github.com/biezhi/gitmoji)
  :::
