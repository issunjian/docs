import{_ as s,o as n,c as a,V as l}from"./chunks/framework.c6d8cbec.js";const u=JSON.parse('{"title":"Flex 布局教程：实例篇","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/css/Flex布局实例篇.md","filePath":"frontend/css/Flex布局实例篇.md"}'),p={name:"frontend/css/Flex布局实例篇.md"},e=l(`<h1 id="flex-布局教程-实例篇" tabindex="-1">Flex 布局教程：实例篇 <a class="header-anchor" href="#flex-布局教程-实例篇" aria-label="Permalink to &quot;Flex 布局教程：实例篇&quot;">​</a></h1><p>作者： <a href="https://www.ruanyifeng.com/" target="_blank" rel="noreferrer">阮一峰</a></p><p>日期： <a href="https://www.ruanyifeng.com/blog/2015/07/" target="_blank" rel="noreferrer">2015年7月14日</a></p><p><a href="https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html" target="_blank" rel="noreferrer">上一篇文章</a>介绍了Flex布局的语法，今天介绍常见布局的Flex写法。</p><p>你会看到，不管是什么布局，Flex往往都可以几行命令搞定。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071327.png" alt=""></p><p>我只列出代码，详细的语法解释请查阅<a href="https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html" target="_blank" rel="noreferrer">《Flex布局教程：语法篇》</a>。我的主要参考资料是<a href="http://davidwalsh.name/flexbox-dice" target="_blank" rel="noreferrer">Landon Schropp</a>的文章和<a href="http://philipwalton.github.io/solved-by-flexbox/" target="_blank" rel="noreferrer">Solved by Flexbox</a>。</p><h2 id="一、骰子的布局" tabindex="-1">一、骰子的布局 <a class="header-anchor" href="#一、骰子的布局" aria-label="Permalink to &quot;一、骰子的布局&quot;">​</a></h2><p>骰子的一面，最多可以放置9个点。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071328.png" alt=""></p><p>下面，就来看看Flex如何实现，从1个点到9个点的布局。你可以到<a href="https://codepen.io/LandonSchropp/pen/KpzzGo" target="_blank" rel="noreferrer">codepen</a>查看Demo。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071329.png" alt=""></p><p>如果不加说明，本节的HTML模板一律如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span></code></pre></div></blockquote><p>上面代码中，div元素（代表骰子的一个面）是Flex容器，span元素（代表一个点）是Flex项目。如果有多个项目，就要添加多个span元素，以此类推。</p><h3 id="_1-1-单项目" tabindex="-1">1.1 单项目 <a class="header-anchor" href="#_1-1-单项目" aria-label="Permalink to &quot;1.1 单项目&quot;">​</a></h3><p>首先，只有左上角1个点的情况。Flex布局默认就是首行左对齐，所以一行代码就够了。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071301.png" alt=""></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.box {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.box {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><p>设置项目的对齐方式，就能实现居中对齐和右对齐。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071302.png" alt=""></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.box {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">  justify-content: center;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.box {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">  justify-content: center;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071303.png" alt=""></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.box {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">  justify-content: flex-end;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.box {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">  justify-content: flex-end;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><p>设置交叉轴对齐方式，可以垂直移动主轴。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071304.png" alt=""></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.box {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">  align-items: center;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.box {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">  align-items: center;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071305.png" alt=""></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.box {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">  justify-content: center;</span></span>
<span class="line"><span style="color:#f6f6f4;">  align-items: center;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.box {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">  justify-content: center;</span></span>
<span class="line"><span style="color:#24292e;">  align-items: center;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071306.png" alt=""></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.box {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">  justify-content: center;</span></span>
<span class="line"><span style="color:#f6f6f4;">  align-items: flex-end;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.box {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">  justify-content: center;</span></span>
<span class="line"><span style="color:#24292e;">  align-items: flex-end;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071307.png" alt=""></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.box {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">  justify-content: flex-end;</span></span>
<span class="line"><span style="color:#f6f6f4;">  align-items: flex-end;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.box {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">  justify-content: flex-end;</span></span>
<span class="line"><span style="color:#24292e;">  align-items: flex-end;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><h3 id="_1-2-双项目" tabindex="-1">1.2 双项目 <a class="header-anchor" href="#_1-2-双项目" aria-label="Permalink to &quot;1.2 双项目&quot;">​</a></h3><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071308.png" alt=""></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.box {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">  justify-content: space-between;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.box {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">  justify-content: space-between;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071309.png" alt=""></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.box {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex-direction: column;</span></span>
<span class="line"><span style="color:#f6f6f4;">  justify-content: space-between;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.box {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">  flex-direction: column;</span></span>
<span class="line"><span style="color:#24292e;">  justify-content: space-between;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071310.png" alt=""></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.box {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex-direction: column;</span></span>
<span class="line"><span style="color:#f6f6f4;">  justify-content: space-between;</span></span>
<span class="line"><span style="color:#f6f6f4;">  align-items: center;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.box {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">  flex-direction: column;</span></span>
<span class="line"><span style="color:#24292e;">  justify-content: space-between;</span></span>
<span class="line"><span style="color:#24292e;">  align-items: center;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071311.png" alt=""></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.box {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex-direction: column;</span></span>
<span class="line"><span style="color:#f6f6f4;">  justify-content: space-between;</span></span>
<span class="line"><span style="color:#f6f6f4;">  align-items: flex-end;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.box {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">  flex-direction: column;</span></span>
<span class="line"><span style="color:#24292e;">  justify-content: space-between;</span></span>
<span class="line"><span style="color:#24292e;">  align-items: flex-end;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071312.png" alt=""></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.box {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">.item:nth-child(2) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  align-self: center;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.box {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.item:nth-child(2) {</span></span>
<span class="line"><span style="color:#24292e;">  align-self: center;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071313.png" alt=""></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.box {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">  justify-content: space-between;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">.item:nth-child(2) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  align-self: flex-end;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.box {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">  justify-content: space-between;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.item:nth-child(2) {</span></span>
<span class="line"><span style="color:#24292e;">  align-self: flex-end;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><h3 id="_1-3-三项目" tabindex="-1">1.3 三项目 <a class="header-anchor" href="#_1-3-三项目" aria-label="Permalink to &quot;1.3 三项目&quot;">​</a></h3><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071314.png" alt=""></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.box {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">.item:nth-child(2) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  align-self: center;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">.item:nth-child(3) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  align-self: flex-end;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.box {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.item:nth-child(2) {</span></span>
<span class="line"><span style="color:#24292e;">  align-self: center;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.item:nth-child(3) {</span></span>
<span class="line"><span style="color:#24292e;">  align-self: flex-end;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><h3 id="_1-4-四项目" tabindex="-1">1.4 四项目 <a class="header-anchor" href="#_1-4-四项目" aria-label="Permalink to &quot;1.4 四项目&quot;">​</a></h3><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071315.png" alt=""></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.box {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex-wrap: wrap;</span></span>
<span class="line"><span style="color:#f6f6f4;">  justify-content: flex-end;</span></span>
<span class="line"><span style="color:#f6f6f4;">  align-content: space-between;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.box {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">  flex-wrap: wrap;</span></span>
<span class="line"><span style="color:#24292e;">  justify-content: flex-end;</span></span>
<span class="line"><span style="color:#24292e;">  align-content: space-between;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071316.png" alt=""></p><p>HTML代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;div class=&quot;column&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;div class=&quot;column&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div class=&quot;column&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div class=&quot;column&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span></code></pre></div></blockquote><p>CSS代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.box {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex-wrap: wrap;</span></span>
<span class="line"><span style="color:#f6f6f4;">  align-content: space-between;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">.column {</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex-basis: 100%;</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">  justify-content: space-between;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.box {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">  flex-wrap: wrap;</span></span>
<span class="line"><span style="color:#24292e;">  align-content: space-between;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.column {</span></span>
<span class="line"><span style="color:#24292e;">  flex-basis: 100%;</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">  justify-content: space-between;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><h3 id="_1-5-六项目" tabindex="-1">1.5 六项目 <a class="header-anchor" href="#_1-5-六项目" aria-label="Permalink to &quot;1.5 六项目&quot;">​</a></h3><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071317.png" alt=""></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.box {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex-wrap: wrap;</span></span>
<span class="line"><span style="color:#f6f6f4;">  align-content: space-between;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.box {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">  flex-wrap: wrap;</span></span>
<span class="line"><span style="color:#24292e;">  align-content: space-between;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071318.png" alt=""></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.box {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex-direction: column;</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex-wrap: wrap;</span></span>
<span class="line"><span style="color:#f6f6f4;">  align-content: space-between;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.box {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">  flex-direction: column;</span></span>
<span class="line"><span style="color:#24292e;">  flex-wrap: wrap;</span></span>
<span class="line"><span style="color:#24292e;">  align-content: space-between;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071319.png" alt=""></p><p>HTML代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;div class=&quot;row&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;div class=&quot;row&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;div class=&quot;row&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">     &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">     &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div class=&quot;row&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div class=&quot;row&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div class=&quot;row&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">     &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#24292e;">     &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span></code></pre></div></blockquote><p>CSS代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.box {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex-wrap: wrap;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">.row{</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex-basis: 100%;</span></span>
<span class="line"><span style="color:#f6f6f4;">  display:flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">.row:nth-child(2){</span></span>
<span class="line"><span style="color:#f6f6f4;">  justify-content: center;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">.row:nth-child(3){</span></span>
<span class="line"><span style="color:#f6f6f4;">  justify-content: space-between;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.box {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">  flex-wrap: wrap;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.row{</span></span>
<span class="line"><span style="color:#24292e;">  flex-basis: 100%;</span></span>
<span class="line"><span style="color:#24292e;">  display:flex;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.row:nth-child(2){</span></span>
<span class="line"><span style="color:#24292e;">  justify-content: center;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.row:nth-child(3){</span></span>
<span class="line"><span style="color:#24292e;">  justify-content: space-between;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><h3 id="_1-6-九项目" tabindex="-1">1.6 九项目 <a class="header-anchor" href="#_1-6-九项目" aria-label="Permalink to &quot;1.6 九项目&quot;">​</a></h3><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071320.png" alt=""></p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.box {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex-wrap: wrap;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.box {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">  flex-wrap: wrap;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><h2 id="二、网格布局" tabindex="-1">二、网格布局 <a class="header-anchor" href="#二、网格布局" aria-label="Permalink to &quot;二、网格布局&quot;">​</a></h2><h3 id="_2-1-基本网格布局" tabindex="-1">2.1 基本网格布局 <a class="header-anchor" href="#_2-1-基本网格布局" aria-label="Permalink to &quot;2.1 基本网格布局&quot;">​</a></h3><p>最简单的网格布局，就是平均分布。在容器里面平均分配空间，跟上面的骰子布局很像，但是需要设置项目的自动缩放。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071321.png" alt=""></p><p>HTML代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;div class=&quot;Grid&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;div class=&quot;Grid-cell&quot;&gt;...&lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;div class=&quot;Grid-cell&quot;&gt;...&lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;div class=&quot;Grid-cell&quot;&gt;...&lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;Grid&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div class=&quot;Grid-cell&quot;&gt;...&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div class=&quot;Grid-cell&quot;&gt;...&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div class=&quot;Grid-cell&quot;&gt;...&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span></code></pre></div></blockquote><p>CSS代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.Grid {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">.Grid-cell {</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex: 1;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.Grid {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.Grid-cell {</span></span>
<span class="line"><span style="color:#24292e;">  flex: 1;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><h3 id="_2-2-百分比布局" tabindex="-1">2.2 百分比布局 <a class="header-anchor" href="#_2-2-百分比布局" aria-label="Permalink to &quot;2.2 百分比布局&quot;">​</a></h3><p>某个网格的宽度为固定的百分比，其余网格平均分配剩余的空间。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071322.png" alt=""></p><p>HTML代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;div class=&quot;Grid&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;div class=&quot;Grid-cell u-1of4&quot;&gt;...&lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;div class=&quot;Grid-cell&quot;&gt;...&lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;div class=&quot;Grid-cell u-1of3&quot;&gt;...&lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;Grid&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div class=&quot;Grid-cell u-1of4&quot;&gt;...&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div class=&quot;Grid-cell&quot;&gt;...&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div class=&quot;Grid-cell u-1of3&quot;&gt;...&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span></code></pre></div></blockquote><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.Grid {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">.Grid-cell {</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex: 1;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">.Grid-cell.u-full {</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex: 0 0 100%;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">.Grid-cell.u-1of2 {</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex: 0 0 50%;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">.Grid-cell.u-1of3 {</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex: 0 0 33.3333%;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">.Grid-cell.u-1of4 {</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex: 0 0 25%;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.Grid {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.Grid-cell {</span></span>
<span class="line"><span style="color:#24292e;">  flex: 1;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.Grid-cell.u-full {</span></span>
<span class="line"><span style="color:#24292e;">  flex: 0 0 100%;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.Grid-cell.u-1of2 {</span></span>
<span class="line"><span style="color:#24292e;">  flex: 0 0 50%;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.Grid-cell.u-1of3 {</span></span>
<span class="line"><span style="color:#24292e;">  flex: 0 0 33.3333%;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.Grid-cell.u-1of4 {</span></span>
<span class="line"><span style="color:#24292e;">  flex: 0 0 25%;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><h2 id="三、圣杯布局" tabindex="-1">三、圣杯布局 <a class="header-anchor" href="#三、圣杯布局" aria-label="Permalink to &quot;三、圣杯布局&quot;">​</a></h2><p><a href="https://en.wikipedia.org/wiki/Holy_Grail_(web_design)" target="_blank" rel="noreferrer">圣杯布局</a>（Holy Grail Layout）指的是一种最常见的网站布局。页面从上到下，分成三个部分：头部（header），躯干（body），尾部（footer）。其中躯干又水平分成三栏，从左到右为：导航、主栏、副栏。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071323.png" alt=""></p><p>HTML代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;body class=&quot;HolyGrail&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;header&gt;...&lt;/header&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;div class=&quot;HolyGrail-body&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;main class=&quot;HolyGrail-content&quot;&gt;...&lt;/main&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;nav class=&quot;HolyGrail-nav&quot;&gt;...&lt;/nav&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;aside class=&quot;HolyGrail-ads&quot;&gt;...&lt;/aside&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;footer&gt;...&lt;/footer&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/body&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;body class=&quot;HolyGrail&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;header&gt;...&lt;/header&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div class=&quot;HolyGrail-body&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;main class=&quot;HolyGrail-content&quot;&gt;...&lt;/main&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;nav class=&quot;HolyGrail-nav&quot;&gt;...&lt;/nav&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;aside class=&quot;HolyGrail-ads&quot;&gt;...&lt;/aside&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;footer&gt;...&lt;/footer&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span></code></pre></div></blockquote><p>CSS代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.HolyGrail {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">  min-height: 100vh;</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex-direction: column;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">header,</span></span>
<span class="line"><span style="color:#f6f6f4;">footer {</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex: 1;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">.HolyGrail-body {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex: 1;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">.HolyGrail-content {</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex: 1;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">.HolyGrail-nav, .HolyGrail-ads {</span></span>
<span class="line"><span style="color:#f6f6f4;">  /* 两个边栏的宽度设为12em */</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex: 0 0 12em;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">.HolyGrail-nav {</span></span>
<span class="line"><span style="color:#f6f6f4;">  /* 导航放到最左边 */</span></span>
<span class="line"><span style="color:#f6f6f4;">  order: -1;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.HolyGrail {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">  min-height: 100vh;</span></span>
<span class="line"><span style="color:#24292e;">  flex-direction: column;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">header,</span></span>
<span class="line"><span style="color:#24292e;">footer {</span></span>
<span class="line"><span style="color:#24292e;">  flex: 1;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.HolyGrail-body {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">  flex: 1;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.HolyGrail-content {</span></span>
<span class="line"><span style="color:#24292e;">  flex: 1;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.HolyGrail-nav, .HolyGrail-ads {</span></span>
<span class="line"><span style="color:#24292e;">  /* 两个边栏的宽度设为12em */</span></span>
<span class="line"><span style="color:#24292e;">  flex: 0 0 12em;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.HolyGrail-nav {</span></span>
<span class="line"><span style="color:#24292e;">  /* 导航放到最左边 */</span></span>
<span class="line"><span style="color:#24292e;">  order: -1;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><p>如果是小屏幕，躯干的三栏自动变为垂直叠加。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@media (max-width: 768px) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  .HolyGrail-body {</span></span>
<span class="line"><span style="color:#f6f6f4;">    flex-direction: column;</span></span>
<span class="line"><span style="color:#f6f6f4;">    flex: 1;</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">  .HolyGrail-nav,</span></span>
<span class="line"><span style="color:#f6f6f4;">  .HolyGrail-ads,</span></span>
<span class="line"><span style="color:#f6f6f4;">  .HolyGrail-content {</span></span>
<span class="line"><span style="color:#f6f6f4;">    flex: auto;</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@media (max-width: 768px) {</span></span>
<span class="line"><span style="color:#24292e;">  .HolyGrail-body {</span></span>
<span class="line"><span style="color:#24292e;">    flex-direction: column;</span></span>
<span class="line"><span style="color:#24292e;">    flex: 1;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  .HolyGrail-nav,</span></span>
<span class="line"><span style="color:#24292e;">  .HolyGrail-ads,</span></span>
<span class="line"><span style="color:#24292e;">  .HolyGrail-content {</span></span>
<span class="line"><span style="color:#24292e;">    flex: auto;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><h2 id="四、输入框的布局" tabindex="-1">四、输入框的布局 <a class="header-anchor" href="#四、输入框的布局" aria-label="Permalink to &quot;四、输入框的布局&quot;">​</a></h2><p>我们常常需要在输入框的前方添加提示，后方添加按钮。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071324.png" alt=""></p><p>HTML代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;div class=&quot;InputAddOn&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;span class=&quot;InputAddOn-item&quot;&gt;...&lt;/span&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;input class=&quot;InputAddOn-field&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;button class=&quot;InputAddOn-item&quot;&gt;...&lt;/button&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;InputAddOn&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;span class=&quot;InputAddOn-item&quot;&gt;...&lt;/span&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;input class=&quot;InputAddOn-field&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;button class=&quot;InputAddOn-item&quot;&gt;...&lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span></code></pre></div></blockquote><p>CSS代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.InputAddOn {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">.InputAddOn-field {</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex: 1;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.InputAddOn {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.InputAddOn-field {</span></span>
<span class="line"><span style="color:#24292e;">  flex: 1;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><h2 id="五、悬挂式布局" tabindex="-1">五、悬挂式布局 <a class="header-anchor" href="#五、悬挂式布局" aria-label="Permalink to &quot;五、悬挂式布局&quot;">​</a></h2><p>有时，主栏的左侧或右侧，需要添加一个图片栏。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071325.png" alt=""></p><p>HTML代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;div class=&quot;Media&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;img class=&quot;Media-figure&quot; src=&quot;&quot; alt=&quot;&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;p class=&quot;Media-body&quot;&gt;...&lt;/p&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;Media&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;img class=&quot;Media-figure&quot; src=&quot;&quot; alt=&quot;&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;p class=&quot;Media-body&quot;&gt;...&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span></code></pre></div></blockquote><p>CSS代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.Media {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">  align-items: flex-start;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">.Media-figure {</span></span>
<span class="line"><span style="color:#f6f6f4;">  margin-right: 1em;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">.Media-body {</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex: 1;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.Media {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">  align-items: flex-start;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.Media-figure {</span></span>
<span class="line"><span style="color:#24292e;">  margin-right: 1em;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.Media-body {</span></span>
<span class="line"><span style="color:#24292e;">  flex: 1;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><h3 id="六、固定的底栏" tabindex="-1">六、固定的底栏 <a class="header-anchor" href="#六、固定的底栏" aria-label="Permalink to &quot;六、固定的底栏&quot;">​</a></h3><p>有时，页面内容太少，无法占满一屏的高度，底栏就会抬高到页面的中间。这时可以采用Flex布局，让底栏总是出现在页面的底部。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071326.png" alt=""></p><p>HTML代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;body class=&quot;Site&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;header&gt;...&lt;/header&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;main class=&quot;Site-content&quot;&gt;...&lt;/main&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;footer&gt;...&lt;/footer&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/body&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;body class=&quot;Site&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;header&gt;...&lt;/header&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;main class=&quot;Site-content&quot;&gt;...&lt;/main&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;footer&gt;...&lt;/footer&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span></code></pre></div></blockquote><p>CSS代码如下。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.Site {</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">  min-height: 100vh;</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex-direction: column;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">.Site-content {</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex: 1;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.Site {</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">  min-height: 100vh;</span></span>
<span class="line"><span style="color:#24292e;">  flex-direction: column;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.Site-content {</span></span>
<span class="line"><span style="color:#24292e;">  flex: 1;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><h3 id="七-流式布局" tabindex="-1">七，流式布局 <a class="header-anchor" href="#七-流式布局" aria-label="Permalink to &quot;七，流式布局&quot;">​</a></h3><p>每行的项目数固定，会自动分行。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071330.png" alt=""></p><p>CSS的写法。</p><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">.parent {</span></span>
<span class="line"><span style="color:#f6f6f4;">  width: 200px;</span></span>
<span class="line"><span style="color:#f6f6f4;">  height: 150px;</span></span>
<span class="line"><span style="color:#f6f6f4;">  background-color: black;</span></span>
<span class="line"><span style="color:#f6f6f4;">  display: flex;</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex-flow: row wrap;</span></span>
<span class="line"><span style="color:#f6f6f4;">  align-content: flex-start;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">.child {</span></span>
<span class="line"><span style="color:#f6f6f4;">  box-sizing: border-box;</span></span>
<span class="line"><span style="color:#f6f6f4;">  background-color: white;</span></span>
<span class="line"><span style="color:#f6f6f4;">  flex: 0 0 25%;</span></span>
<span class="line"><span style="color:#f6f6f4;">  height: 50px;</span></span>
<span class="line"><span style="color:#f6f6f4;">  border: 1px solid red;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.parent {</span></span>
<span class="line"><span style="color:#24292e;">  width: 200px;</span></span>
<span class="line"><span style="color:#24292e;">  height: 150px;</span></span>
<span class="line"><span style="color:#24292e;">  background-color: black;</span></span>
<span class="line"><span style="color:#24292e;">  display: flex;</span></span>
<span class="line"><span style="color:#24292e;">  flex-flow: row wrap;</span></span>
<span class="line"><span style="color:#24292e;">  align-content: flex-start;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.child {</span></span>
<span class="line"><span style="color:#24292e;">  box-sizing: border-box;</span></span>
<span class="line"><span style="color:#24292e;">  background-color: white;</span></span>
<span class="line"><span style="color:#24292e;">  flex: 0 0 25%;</span></span>
<span class="line"><span style="color:#24292e;">  height: 50px;</span></span>
<span class="line"><span style="color:#24292e;">  border: 1px solid red;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><p>（完）</p><h3 id="文档信息" tabindex="-1">文档信息 <a class="header-anchor" href="#文档信息" aria-label="Permalink to &quot;文档信息&quot;">​</a></h3><ul><li>版权声明：自由转载-非商用-非衍生-保持署名（<a href="http://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh" target="_blank" rel="noreferrer">创意共享3.0许可证</a>）</li><li>发表日期： 2015年7月14日</li></ul><p>本文转载，如有侵权，请联系删除。</p>`,123),o=[e];function t(c,i,r,f,y,d){return n(),a("div",null,o)}const h=s(p,[["render",t]]);export{u as __pageData,h as default};
