When a project grows more complex, a full-fledged IDE like PhpStorm is often the best choice. Unfortunately, my laptop has limited RAM (still saving for a new MBP), and I crave speed, so I refuse to give up the mighty Sublime Text. One day, while browsing Laracasts, I stumbled across Jeffrey’s lessons and finally managed to turn Sublime into a power tool worthy of PhpStorm—or even Vim.

[Download the latest Sublime Text 3](https://www.sublimetext.com/)

## Learn to Use Package Control

Package Control is the package manager that manages all other plugins. Check the official instructions or community posts to get it installed.

- How to use Package Control? [https://packagecontrol.io/](https://packagecontrol.io/)

## The Look Matters

If you want to build something beautiful, you need good taste—and that includes your editor’s appearance.

![file](/images/从这篇教程开始，成为Sublime大师/theme.png)

My personal theme: **Material Theme**

- Installation guide: [GitHub](https://github.com/equinusocio/material-theme)

A comfortable coding font relieves eye fatigue and improves reading speed. I highly recommend [JetBrains Mono](https://www.jetbrains.com/lp/mono/). What font do you use?

- How to install fonts? [JetBrains](https://www.jetbrains.com/lp/mono/)

Themes have countless tweaks—experiment freely and search for tutorials when needed.

## Two Must-Know Shortcuts

To master Sublime, remember these two shortcuts:

- `Command + P` – lightning-fast file switcher
- `Command + R / Command + Shift + R` – jump between functions within a file

## Create Files Quickly

Don’t keep right-clicking folders to create and delete files. Try this plugin instead:

- AdvancedNewFile: [https://github.com/skuroda/Sublime-AdvancedNewFile](https://github.com/skuroda/Sublime-AdvancedNewFile)

Someone once said developers will spend two hours automating a task just to save one second—seems about right.

## Linting Tools

[SublimeLinter](https://packagecontrol.io/search/SublimeLinter) is one of my must-have plugins. It highlights invalid patterns and errors and supports more than ten languages: JavaScript, CSS, HTML, Java, PHP, Python, Ruby, and more.

![file](/images/从这篇教程开始，成为Sublime大师/sublimelinter.png)

I mainly write PHP at work, so I installed SublimeLinter-php, SublimeLinter-phplint, SublimeLinter-phpcs, and SublimeLinter-phpmd. They can be finicky—set aside time to tinker or feel free to ask for help. I still haven’t found a one-size-fits-all guide.

## Syntax Highlighting

For example, [Laravel Blade Highlighter](https://packagecontrol.io/packages/Laravel%20Blade%20Highlighter) is a must for me. Just search [Sublime Package](https://packagecontrol.io/search) with keywords like “Highlighter” or “Laravel” and you’ll find what you need. The reason I highlight this is simple: highlighted code is easier on the eyes, so it’s a must-have.

## Vintage: A Gift for Vim Fans

Remove `Vintage` from the `ignored_packages` array in **Preferences → Settings - User**:

::: tip
Don’t delete the entire `ignored_packages` setting, even if the list is empty.
:::

```json
...
"ignored_packages": [
  "Vintage"
],
...
```

Open any file, hit `Esc`, and bam—full Vim mode. Familiar vibes restored.

> Learning Vim is easy :smirk:—type `vimtutor` in any terminal to get started (and fall into the rabbit hole).

## Built for PHP Workflow

The real core here is snippets. Someone collected the PHP and Laravel snippets from the course—check them out:

[https://github.com/jonasvanderhaegen/Handy-for-sublime-and-a-faster-better-workflow](https://github.com/jonasvanderhaegen/Handy-for-sublime-and-a-faster-better-workflow)

If you don’t know how to write snippets yet, start here:

- [Unofficial help docs](https://sublime-undocs-zh.readthedocs.io/en/latest/extensibility/snippets.html)
- [Hand-holding guide to writing Sublime snippets](https://www.jianshu.com/p/356bd7b2ea8e)

Handy plugins:

- [erichard/SublimePHPCompanion](https://github.com/erichard/SublimePHPCompanion): Great PHP 5.3+ helpers, such as auto-importing dependencies similar to PhpStorm.
- Bind Sublime shortcuts to run tests: [GitHub](https://github.com/evgeny-golubev/SimplePHPUnit-for-Sublime-Text)

## For Artisan Users

Search **Package Install** for “Laravel 5 Artisan.” After installation, you can run Artisan commands directly in Sublime. Need a new controller?

![file](/images/从这篇教程开始，成为Sublime大师/artisan.png)

So convenient.

## DIY to Your Heart’s Content

One more essential capability:

- Automatically format code with `fabpot/php-cs-fixer`

Try gathering the necessary resources and set it up yourself.

## My Personal Settings (Reference Only—Don’t Copy Blindly)

```json
{
  "always_show_minimap_viewport": true,
  "caret_style": "phase",
  "color_scheme": "Packages/Material Theme/schemes/Material-Theme-Darker.tmTheme",
  "default_line_ending": "unix",
  "ensure_newline_at_eof_on_save": true,
  "findreplace_small": true,
  "font_face": "JetBrains Mono",
  "font_size": 14,
  "highlight_line": false,
  "hot_exit": false,
  "ignored_packages": [],
  "line_numbers": true,
  "line_padding_bottom": 8,
  "line_padding_top": 8,
  "phpunit-sublime-terminal": "iTerm",
  "remember_open_files": false,
  "show_definitions": false,
  "show_panel_on_build": false,
  "tab_size": 4,
  "tabs_small": false,
  "theme": "Material-Theme-Darker.sublime-theme",
  "translate_tabs_to_spaces": true,
  "trim_trailing_white_space_on_save": true,
  "word_wrap": true
}
```

## Frequently Used Plugins

::: tip
In Sublime Text press `Ctrl + Shift + P`, type “install”, choose **Package Control: Install Package**, then search for the plugin name and press Enter to install.
:::

| Plugin                                                                          | Description                                                                                                                                                                             |
| :------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ColorsSublime                                                                   | Theme manager for code highlighting. Follow the docs to configure two additional settings.                                                                                              |
| Material Theme                                                                  | Fantastic editor theme (author: equinusocio).                                                                                                                                           |
| Blade Snippets                                                                  | Blade template snippets.                                                                                                                                                                |
| Laravel Blade Highlighter                                                       | Blade syntax highlighting.                                                                                                                                                              |
| SyncedSideBar                                                                   | Automatically locates the current file in the sidebar.                                                                                                                                  |
| Alignment                                                                       | Keyboard-driven alignment—perfect for neat freaks. Consider customizing shortcuts on macOS. [Homepage](https://github.com/wbond/sublime_alignment) [Example](https://imgur.com/eIBowAw) |
| [BracketHighlighter](https://packagecontrol.io/packages/BracketHighlighter)     | Highlights matching brackets.                                                                                                                                                           |
| EditorConfig                                                                    | `.editorconfig` formatting support.                                                                                                                                                     |
| [Emmet](https://packagecontrol.io/packages/Emmet)                               | Essential for frontend work—shortcut driven. [Cheat sheet](https://docs.emmet.io/cheat-sheet/)                                                                                          |
| SideBarEnhancements                                                             | Enhanced context menu for the sidebar.                                                                                                                                                  |
| SCSS                                                                            | Official SCSS syntax highlighting.                                                                                                                                                      |
| [AdvancedNewFile](https://packagecontrol.io/packages/AutoFileName)              | Quickly create new files. [Homepage](https://github.com/skuroda/Sublime-AdvancedNewFile)                                                                                                |
| GitGutter                                                                       | Marks code changes inline. [Homepage](https://github.com/jisaacks/GitGutter)                                                                                                            |
| [Laravel 5 Artisan](https://packagecontrol.io/packages/Laravel%205%20Artisan)   | Run Artisan commands.                                                                                                                                                                   |
| [Laravel 5 Snippets](https://packagecontrol.io/packages/Laravel%205%20Snippets) | Laravel code snippets.                                                                                                                                                                  |
| SublimeLinter                                                                   | General-purpose linting framework.                                                                                                                                                      |
| SublimeLinter-PHP                                                               | Real-time PHP linting.                                                                                                                                                                  |
| erichard/SublimePHPCompanion                                                    | Auto-import namespaces. [Homepage](https://github.com/erichard/SublimePHPCompanion)                                                                                                     |
| [DocBlockr](https://packagecontrol.io/packages/DocBlockr)                       | Generate docblocks.                                                                                                                                                                     |
| [Code Snippets](https://packagecontrol.io/search/Snippets)                      | Language-specific snippets (e.g., Blade/Laravel).                                                                                                                                       |
| [SublimeLinter](https://packagecontrol.io/search/SublimeLinter)                 | Code linting (listed again because it’s that good).                                                                                                                                     |
| [ConvertToUTF8](https://packagecontrol.io/packages/ConvertToUTF8)               | Convert files to UTF-8.                                                                                                                                                                 |
| [JsFormat](https://packagecontrol.io/packages/JsFormat)                         | JavaScript formatter.                                                                                                                                                                   |
| [Bracket Highlighter](https://github.com/facelessuser/BracketHighlighter)       | Matches `[]`, `()`, `{}`, `""`, and more to highlight start/end markers.                                                                                                                |
| [Trailing Spaces](https://github.com/SublimeText/TrailingSpaces)                | Detect and remove trailing whitespace.                                                                                                                                                  |

## Final Thoughts

Be cautious when installing plugins—editor performance matters.

::: tip
This article references:

- [从这篇教程开始, 成为 Sublime Text 大师](https://learnku.com/laravel/t/2825/start-with-this-tutorial-and-become-a-sublime-text-master)
- [为 Laravel 开发而配置的 Sublime Text 3](https://learnku.com/articles/3688/sublime-text-3-configured-for-laravel-development)
- [安利一些好用的 Sublime 插件](https://learnku.com/laravel/t/4833/amway-some-useful-sublime-plug-ins)

And a few posts I always revisit when (re)installing Sublime:

- [如何优雅地使用 Sublime Text](https://www.jeffjade.com/2015/12/15/2015-04-17-toss-sublime-text/)
- [实用的 Sublime 插件集合](https://blog.csdn.net/jianhua0902/article/details/43761899)
  :::
