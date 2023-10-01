import{_ as s,o as a,c as e,S as o}from"./chunks/framework.8b0da900.js";const n="/vitepress/images/PHP/Composer本地路径加载第三方扩展包/laravel-generator-localization.png",r="/vitepress/images/PHP/Composer本地路径加载第三方扩展包/composer-json.png",p="/vitepress/images/PHP/Composer本地路径加载第三方扩展包/require.png",l="/vitepress/images/PHP/Composer本地路径加载第三方扩展包/link.png",v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"programe/PHP/Composer 本地路径加载第三方扩展包.md","filePath":"programe/PHP/Composer 本地路径加载第三方扩展包.md","lastUpdated":1672831215000}'),t={name:"programe/PHP/Composer 本地路径加载第三方扩展包.md"},c=o(`<h3 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h3><p>Composer 提供了 <code>Path</code> 加载本地扩展包的方法，允许我们将扩展包以本地目录形式进行加载，方便快速修改，也可以把修改后的代码提交到项目的 VCS 中。<br> 官方提供了 <a href="https://getcomposer.org/doc/05-repositories.md#path" target="_blank" rel="noreferrer">使用 path 加载的文档</a>，可以操作起来不够清晰，此文将一步步讲解如何操作。<br> 下文将以 <a href="https://github.com/InfyOmLabs/laravel-generator" target="_blank" rel="noreferrer">InfyOmLabs/laravel-generator</a> 扩展包为例，演示所有的步骤。</p><h3 id="_1-将项目本地化" tabindex="-1">1. 将项目本地化 <a class="header-anchor" href="#_1-将项目本地化" aria-label="Permalink to &quot;1. 将项目本地化&quot;">​</a></h3><p>你可以通过任何方式将 <code>laravel-generator</code> 放入你的 packages 目录。本文将以 <code>git clone</code> 的方式完成此操作。</p><p>根目录下：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-light"><code><span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">packages</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">packages</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/InfyOmLabs/laravel-generator.git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如下图：</p><p><img src="`+n+`" alt="file"></p><h3 id="_2-修改-composer-json-文件" tabindex="-1">2. 修改 composer.json 文件 <a class="header-anchor" href="#_2-修改-composer-json-文件" aria-label="Permalink to &quot;2. 修改 composer.json 文件&quot;">​</a></h3><p>我们可以利用 <code>composer.json</code> 里的 <code>repositories</code> 中的 <code>path</code> 方式创建自定义 package。<br><a href="https://getcomposer.org/doc/05-repositories.md#path" target="_blank" rel="noreferrer">官方解释见此</a><br> 下面将 <code>laravel-generator</code> 的下载地址对应到本地的 <code>packages/laravel-generator</code> 目录。</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;repositories&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;path&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;packages/laravel-generator&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>注意只修改 <code>repositories</code> 选项，如图：</p><p><img src="`+r+'" alt="file"></p><h3 id="_3-更新-composer" tabindex="-1">3. 更新 composer <a class="header-anchor" href="#_3-更新-composer" aria-label="Permalink to &quot;3. 更新 composer&quot;">​</a></h3><p>使用 <code>require</code> 命令来加载扩展包，此命令会自动把 <code>infyomlabs/laravel-generator:*@dev</code> 添加到 composer.json 文件中，并且安装依赖和更新 composer.lock 文件。</p><blockquote><p>更多关于 <code>composer require</code> 的信息请见：<a href="https://learnku.com/php/t/1901/correct-method-for-installing-composer-expansion-pack" target="_blank" rel="noreferrer">正确的 Composer 扩展包安装方法</a></p></blockquote><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-light"><code><span class="line"><span style="color:#6F42C1;">composer</span><span style="color:#24292E;"> </span><span style="color:#032F62;">require</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;infyomlabs/laravel-generator:*@dev&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这里的 <code>*@dev</code> 很重要</p></div><p>输入如下：</p><p><img src="'+p+'" alt="file"></p><p>如果你新加入一个扩展包，上面的流程已经讲完。</p><h3 id="_4-更换扩展包加载方式" tabindex="-1">4. 更换扩展包加载方式 <a class="header-anchor" href="#_4-更换扩展包加载方式" aria-label="Permalink to &quot;4. 更换扩展包加载方式&quot;">​</a></h3><p>如果你一开始是使用除了 <code>path</code> 的其他方式加载的，现在想换为使用 <code>path</code> 加载，你可以使用 <code>remove</code> 命令移除：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-light"><code><span class="line"><span style="color:#6F42C1;">composer</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remove</span><span style="color:#24292E;"> </span><span style="color:#032F62;">infyomlabs/laravel-generator</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后再参照上面的流程重新加载</p><h3 id="工作原理" tabindex="-1">工作原理 <a class="header-anchor" href="#工作原理" aria-label="Permalink to &quot;工作原理&quot;">​</a></h3><p>composer 会创建一个文件夹链接，把 <code>vendor/infyomlabs/laravel-generator</code> 文件夹链接到 <code>packages/laravel-generator</code> 下，如图：</p><p><img src="'+l+'" alt="file"></p><hr><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>本文转载自：<a href="https://learnku.com/laravel/t/1999/composer-local-path-loading-third-party-extension-pack" target="_blank" rel="noreferrer">Composer 本地路径加载第三方扩展包</a></p></div>',30),i=[c];function d(m,b,u,h,g,_){return a(),e("div",null,i)}const k=s(t,[["render",d]]);export{v as __pageData,k as default};
