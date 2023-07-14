import{_ as s,o as a,c as n,V as e}from"./chunks/framework.c6d8cbec.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/前端/前端最新面试题2021年，常见面试题及答案汇总.md","filePath":"interview/backend/前端/前端最新面试题2021年，常见面试题及答案汇总.md"}'),l={name:"interview/backend/前端/前端最新面试题2021年，常见面试题及答案汇总.md"},p=e(`<h3 id="_1、模块热更新" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#1%E6%A8%A1%E5%9D%97%E7%83%AD%E6%9B%B4%E6%96%B0" target="_blank" rel="noreferrer">1、模块热更新</a> <a class="header-anchor" href="#_1、模块热更新" aria-label="Permalink to &quot;[1、模块热更新](https://gitee.com/souyunku/DevBooks/blob/master/docs/前端/前端最新面试题2021年，常见面试题及答案汇总.md#1模块热更新)&quot;">​</a></h3><p>模块热更新是webpack的一个功能，他可以使代码修改过后不用刷新就可以更新，是高级版的自动刷新浏览器</p><blockquote><p>devServer中通过hot属性可以控制模块的热替换</p></blockquote><p><strong>通过配置文件</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const webpack = require(&#39;webpack&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">const path = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">let env = p<wbr>rocess.env.NODE_ENV == &quot;development&quot; ? &quot;development&quot; : &quot;production&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">const config = {</span></span>
<span class="line"><span style="color:#f6f6f4;">  mode: env,</span></span>
<span class="line"><span style="color:#f6f6f4;"> devServer: {</span></span>
<span class="line"><span style="color:#f6f6f4;">     hot:true</span></span>
<span class="line"><span style="color:#f6f6f4;"> }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">  plugins: [</span></span>
<span class="line"><span style="color:#f6f6f4;">     new webpack.HotModuleReplacementPlugin(), //热加载插件</span></span>
<span class="line"><span style="color:#f6f6f4;">  ],</span></span>
<span class="line"><span style="color:#f6f6f4;">module.exports = config;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const webpack = require(&#39;webpack&#39;);</span></span>
<span class="line"><span style="color:#24292e;">const path = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#24292e;">let env = p<wbr>rocess.env.NODE_ENV == &quot;development&quot; ? &quot;development&quot; : &quot;production&quot;;</span></span>
<span class="line"><span style="color:#24292e;">const config = {</span></span>
<span class="line"><span style="color:#24292e;">  mode: env,</span></span>
<span class="line"><span style="color:#24292e;"> devServer: {</span></span>
<span class="line"><span style="color:#24292e;">     hot:true</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">  plugins: [</span></span>
<span class="line"><span style="color:#24292e;">     new webpack.HotModuleReplacementPlugin(), //热加载插件</span></span>
<span class="line"><span style="color:#24292e;">  ],</span></span>
<span class="line"><span style="color:#24292e;">module.exports = config;</span></span></code></pre></div><p><strong>通过命令行</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#f6f6f4;">    &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    &quot;start&quot;: &quot;NODE_ENV=development  webpack-dev-server --config  webpack.develop.config.js --hot&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">  },</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;start&quot;: &quot;NODE_ENV=development  webpack-dev-server --config  webpack.develop.config.js --hot&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span></code></pre></div><h3 id="_2、position的值" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#2position%E7%9A%84%E5%80%BC" target="_blank" rel="noreferrer">2、position的值？</a> <a class="header-anchor" href="#_2、position的值" aria-label="Permalink to &quot;[2、position的值？](https://gitee.com/souyunku/DevBooks/blob/master/docs/前端/前端最新面试题2021年，常见面试题及答案汇总.md#2position的值)&quot;">​</a></h3><p><strong>1、</strong> static（默认）：按照正常文档流进行排列；</p><p><strong>2、</strong> relative（相对定位）：不脱离文档流，参考自身静态位置通过 top, bottom, left, right 定位；</p><p><strong>3、</strong> absolute(绝对定位)：参考距其最近一个不为static的父级元素通过top, bottom, left, right 定位；</p><p><strong>4、</strong> fixed(固定定位)：所固定的参照对像是可视窗口。</p><h3 id="_3、组件化和模块化" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#3%E7%BB%84%E4%BB%B6%E5%8C%96%E5%92%8C%E6%A8%A1%E5%9D%97%E5%8C%96" target="_blank" rel="noreferrer">3、组件化和模块化</a> <a class="header-anchor" href="#_3、组件化和模块化" aria-label="Permalink to &quot;[3、组件化和模块化](https://gitee.com/souyunku/DevBooks/blob/master/docs/前端/前端最新面试题2021年，常见面试题及答案汇总.md#3组件化和模块化)&quot;">​</a></h3><p><strong>组件化</strong></p><p><strong>为什么要组件化开发</strong></p><p>有时候页面代码量太大，逻辑太多或者同一个功能组件在许多页面均有使用，维护起来相当复杂，这个时候，就需要组件化开发来进行功能拆分、组件封装，已达到组件通用性，增强代码可读性，维护成本也能大大降低</p><p><strong>组件化开发的优点</strong></p><p>很大程度上降低系统各个功能的耦合性，并且提高了功能内部的聚合性。这对前端工程化及降低代码的维护来说，是有很大的好处的，耦合性的降低，提高了系统的伸展性，降低了开发的复杂度，提升开发效率，降低开发成本</p><p><strong>组件化开发的原则</strong></p><p><strong>1、</strong> 专一</p><p><strong>2、</strong> 可配置性</p><p><strong>3、</strong> 标准性</p><p><strong>4、</strong> 复用性</p><p><strong>5、</strong> 可维护性</p><p><strong>模块化</strong></p><p><strong>为什么要模块化</strong></p><p>早期的javascript版本没有块级作用域、没有类、没有包、也没有模块，这样会带来一些问题，如复用、依赖、冲突、代码组织混乱等，随着前端的膨胀，模块化显得非常迫切</p><p><strong>模块化的好处</strong></p><p><strong>1、</strong> 避免变量污染，命名冲突</p><p><strong>2、</strong> 提高代码复用率</p><p><strong>3、</strong> 提高了可维护性</p><p><strong>4、</strong> 方便依赖关系管理</p><p><strong>模块化的几种方法</strong></p><p>函数封装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">var myModule = {</span></span>
<span class="line"><span style="color:#f6f6f4;">    var1: 1,</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    var2: 2,</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    fn1: function(){</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    },</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    fn2: function(){</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var myModule = {</span></span>
<span class="line"><span style="color:#24292e;">    var1: 1,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    var2: 2,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    fn1: function(){</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    fn2: function(){</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">总结：这样避免了变量污染，只要保证模块名唯一即可，同时同一模块内的成员也有了关系</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">缺陷：外部可以睡意修改内部成员，这样就会产生意外的安全问题</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">总结：这样避免了变量污染，只要保证模块名唯一即可，同时同一模块内的成员也有了关系</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">缺陷：外部可以睡意修改内部成员，这样就会产生意外的安全问题</span></span></code></pre></div><p>立即执行函数表达式(IIFE)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">var myModule = (function(){</span></span>
<span class="line"><span style="color:#f6f6f4;">    var var1 = 1;</span></span>
<span class="line"><span style="color:#f6f6f4;">    var var2 = 2;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    function fn1(){</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    function fn2(){</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">return {</span></span>
<span class="line"><span style="color:#f6f6f4;">    fn1: fn1,</span></span>
<span class="line"><span style="color:#f6f6f4;">    fn2: fn2</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span>
<span class="line"><span style="color:#f6f6f4;">})();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var myModule = (function(){</span></span>
<span class="line"><span style="color:#24292e;">    var var1 = 1;</span></span>
<span class="line"><span style="color:#24292e;">    var var2 = 2;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function fn1(){</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function fn2(){</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">return {</span></span>
<span class="line"><span style="color:#24292e;">    fn1: fn1,</span></span>
<span class="line"><span style="color:#24292e;">    fn2: fn2</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;">})();</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">总结：这样在模块外部无法修改我们没有暴露出来的变量、函数</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">缺点：功能相对较弱，封装过程增加了工作量，仍会导致命名空间污染可能、闭包是有成本的</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">总结：这样在模块外部无法修改我们没有暴露出来的变量、函数</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">缺点：功能相对较弱，封装过程增加了工作量，仍会导致命名空间污染可能、闭包是有成本的</span></span></code></pre></div><h3 id="_4、new操作符具体干了什么呢" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#4new%E6%93%8D%E4%BD%9C%E7%AC%A6%E5%85%B7%E4%BD%93%E5%B9%B2%E4%BA%86%E4%BB%80%E4%B9%88%E5%91%A2" target="_blank" rel="noreferrer">4、new操作符具体干了什么呢?</a> <a class="header-anchor" href="#_4、new操作符具体干了什么呢" aria-label="Permalink to &quot;[4、new操作符具体干了什么呢?](https://gitee.com/souyunku/DevBooks/blob/master/docs/前端/前端最新面试题2021年，常见面试题及答案汇总.md#4new操作符具体干了什么呢)&quot;">​</a></h3><p><strong>1、</strong> 创建一个空对象，并且 <code>this</code> 变量引用该对象，同时还继承了该函数的原型</p><p><strong>2、</strong> 属性和方法被加入到 <code>this</code> 引用的对象中</p><p><strong>3、</strong> 新创建的对象由 <code>this</code> 所引用，并且最后隐式的返回 <code>this</code></p><h3 id="_5、-map和-each有什么区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#5$$map%E5%92%8C$$each%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB###" target="_blank" rel="noreferrer">5、$$.map和$$.each有什么区别###</a> <a class="header-anchor" href="#_5、-map和-each有什么区别" aria-label="Permalink to &quot;[5、$$.map和$$.each有什么区别###](https://gitee.com/souyunku/DevBooks/blob/master/docs/前端/前端最新面试题2021年，常见面试题及答案汇总.md#5$$map和$$each有什么区别###)&quot;">​</a></h3><p>map()方法主要用来遍历操作数组和对象，会返回一个新的数组。$.map()方法适用于将数组或对象每个项目新阵列映射到一个新数组的函数；</p><p>each()主要用于遍历jquery对象，返回的是原来的数组，并不会新创建一个数组。</p><h3 id="_6、css-reset-和-normalize-css-有什么区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#6css-reset-%E5%92%8C-normalizecss-%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">6、css reset 和 normalize.css 有什么区别？</a> <a class="header-anchor" href="#_6、css-reset-和-normalize-css-有什么区别" aria-label="Permalink to &quot;[6、css reset 和 normalize.css 有什么区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/前端/前端最新面试题2021年，常见面试题及答案汇总.md#6css-reset-和-normalizecss-有什么区别)&quot;">​</a></h3><p>相关知识点：</p><p>为什么会有 CSS Reset 的存在呢？那是因为早期的浏览器支持和理解的 CSS 规范不同，导致渲染页面时效果不一致，会出现很多兼容性问题。</p><p>reset 的目的，是将所有的浏览器的自带样式重置掉，这样更易于保持各浏览器渲染的一致性。</p><p>normalize 的理念则是尽量保留浏览器的默认样式，不进行太多的重置，而尽力让这些样式保持一致并尽可能与现代标准相符合。</p><p>1.Normalize.css 保护了有价值的默认值</p><p>Reset 通过为几乎所有的元素施加默认样式，强行使得元素有相同的视觉效果。 相比之下，Normalize.css 保持了许多默认的浏览器样式。 这就意味着你不用再为所有公共的排版元素重新设置样式。 当一个元素在不同的浏览器中有不同的默认值时，Normalize.css 会力求让这些样式保持一致并尽可能与现代标准相符合。</p><p>2.Normalize.css 修复了浏览器的 bug</p><p>它修复了常见的桌面端和移动端浏览器的 bug。这往往超出了 Reset 所能做到的范畴。关于这一点，Normalize.css 修复的问题包含了 HTML5 元素的显示设置、预格式化文字的 font-size 问题、在 IE9 中 SVG 的溢出、许多出现在各浏览器和操作系统中的与表单相关的 bug。</p><p>3.Normalize.css 没有复杂的继承链</p><p>使用 Reset 最让人困扰的地方莫过于在浏览器调试工具中大段大段的继承链。在 Normalize.css 中就不会有这样的问题，因为在我们的准则中对多选择器的使用时非常谨慎的，我们仅会有目的地对目标元素设置样式。</p><p>4.Normalize.css 是模块化的</p><p>这个项目已经被拆分为多个相关却又独立的部分，这使得你能够很容易也很清楚地知道哪些元素被设置了特定的值。因此这能让你自己选择性地移除掉某些永远不会用到部分（比如表单的一般化）。</p><p>5.Normalize.css 拥有详细的文档</p><p>Normalize.css 的代码基于详细而全面的跨浏览器研究与测试。这个文件中拥有详细的代码说明并在 Github Wiki 中有进一步的说明。这意味着你可以找到每一行代码具体完成了什么工作、为什么要写这句代码、浏览器之间的差异，并且你可以更容易地进行自己的测试。</p><p><strong>回</strong></p><p>css reset 是最早的一种解决浏览器间样式不兼容问题的方案，它的基本思想是将浏览器的所有样式都重置掉，从而达到所有浏览器样式保持一致的效果。但是使用这种方法，可能会带来一些性能上的问题，并且对于一些元素的不必要的样式的重置，其实反而会造成画蛇添足的效果。</p><p>后面出现一种更好的解决浏览器间样式不兼容的方法，就是 normalize.css ，它的思想是尽量的保留浏览器自带的样式，通过在原有的样式的基础上进行调整，来保持各个浏览器间的样式表现一致。相对与 css reset，normalize.css 的方法保留了有价值的默认值，并且修复了一些浏览器的 bug，而且使用 normalize.css 不会造成元素复杂的继承链。</p><h3 id="_7、display-inline-block-什么时候不会显示间隙-携程" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#7display:inline-block-%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E4%B8%8D%E4%BC%9A%E6%98%BE%E7%A4%BA%E9%97%B4%E9%9A%99%E6%90%BA%E7%A8%8B" target="_blank" rel="noreferrer">7、display:inline-block 什么时候不会显示间隙？(携程)</a> <a class="header-anchor" href="#_7、display-inline-block-什么时候不会显示间隙-携程" aria-label="Permalink to &quot;[7、display:inline-block 什么时候不会显示间隙？(携程)](https://gitee.com/souyunku/DevBooks/blob/master/docs/前端/前端最新面试题2021年，常见面试题及答案汇总.md#7display:inline-block-什么时候不会显示间隙携程)&quot;">​</a></h3><p><strong>1、</strong> 移除空格</p><p><strong>2、</strong> 使用<code>margin</code>负值</p><p><strong>3、</strong> 使用<code>font-size:0</code></p><p><strong>4、</strong> <code>letter-spacing</code></p><p><strong>5、</strong> <code>word-spacing</code></p><h3 id="_8、微信小程序-如何封装数据请求" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#8%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%A6%82%E4%BD%95%E5%B0%81%E8%A3%85%E6%95%B0%E6%8D%AE%E8%AF%B7%E6%B1%82" target="_blank" rel="noreferrer">8、微信小程序，如何封装数据请求</a> <a class="header-anchor" href="#_8、微信小程序-如何封装数据请求" aria-label="Permalink to &quot;[8、微信小程序，如何封装数据请求](https://gitee.com/souyunku/DevBooks/blob/master/docs/前端/前端最新面试题2021年，常见面试题及答案汇总.md#8微信小程序如何封装数据请求)&quot;">​</a></h3><p><strong>封装接口</strong></p><blockquote><p>项目/utils/api.js</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 将请求进行 Promise 封装</span></span>
<span class="line"><span style="color:#f6f6f4;">const fetch = ({url, data}) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  // 打印接口请求的信息</span></span>
<span class="line"><span style="color:#f6f6f4;">  console.log(\`【step 1】API 接口：\${url}\`);</span></span>
<span class="line"><span style="color:#f6f6f4;">  console.log(&quot;【step 2】data 传参：&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">  console.log(data);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  // 返回 Promise</span></span>
<span class="line"><span style="color:#f6f6f4;">  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">    wx.request({</span></span>
<span class="line"><span style="color:#f6f6f4;">      url: getApp().globalData.api + url,</span></span>
<span class="line"><span style="color:#f6f6f4;">      data: data,</span></span>
<span class="line"><span style="color:#f6f6f4;">      success: res =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        // 成功时的处理</span></span>
<span class="line"><span style="color:#f6f6f4;">        if (res.data.code == 0) {</span></span>
<span class="line"><span style="color:#f6f6f4;">          console.log(&quot;【step 3】请求成功：&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">          console.log(res.data);</span></span>
<span class="line"><span style="color:#f6f6f4;">          return resolve(res.data);</span></span>
<span class="line"><span style="color:#f6f6f4;">        } else {</span></span>
<span class="line"><span style="color:#f6f6f4;">          wx.showModal({</span></span>
<span class="line"><span style="color:#f6f6f4;">            title: &#39;请求失败&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">            content: res.data.message,</span></span>
<span class="line"><span style="color:#f6f6f4;">            showCancel: false</span></span>
<span class="line"><span style="color:#f6f6f4;">          });</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">      },</span></span>
<span class="line"><span style="color:#f6f6f4;">      fail: err =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">        // 失败时的处理</span></span>
<span class="line"><span style="color:#f6f6f4;">        console.log(err);</span></span>
<span class="line"><span style="color:#f6f6f4;">        return reject(err);</span></span>
<span class="line"><span style="color:#f6f6f4;">      }</span></span>
<span class="line"><span style="color:#f6f6f4;">    })</span></span>
<span class="line"><span style="color:#f6f6f4;">  })</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"> * code 换取 openId</span></span>
<span class="line"><span style="color:#f6f6f4;"> * @data {</span></span>
<span class="line"><span style="color:#f6f6f4;"> *   jsCode - wx.login() 返回的 code</span></span>
<span class="line"><span style="color:#f6f6f4;"> * }</span></span>
<span class="line"><span style="color:#f6f6f4;"> */</span></span>
<span class="line"><span style="color:#f6f6f4;">export const wxLogin = data =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return fetch({</span></span>
<span class="line"><span style="color:#f6f6f4;">    url: &quot;tbcUser/getWechatOpenId&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    data: data</span></span>
<span class="line"><span style="color:#f6f6f4;">  })</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 将请求进行 Promise 封装</span></span>
<span class="line"><span style="color:#24292e;">const fetch = ({url, data}) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  // 打印接口请求的信息</span></span>
<span class="line"><span style="color:#24292e;">  console.log(\`【step 1】API 接口：\${url}\`);</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&quot;【step 2】data 传参：&quot;);</span></span>
<span class="line"><span style="color:#24292e;">  console.log(data);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  // 返回 Promise</span></span>
<span class="line"><span style="color:#24292e;">  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    wx.request({</span></span>
<span class="line"><span style="color:#24292e;">      url: getApp().globalData.api + url,</span></span>
<span class="line"><span style="color:#24292e;">      data: data,</span></span>
<span class="line"><span style="color:#24292e;">      success: res =&gt; {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        // 成功时的处理</span></span>
<span class="line"><span style="color:#24292e;">        if (res.data.code == 0) {</span></span>
<span class="line"><span style="color:#24292e;">          console.log(&quot;【step 3】请求成功：&quot;);</span></span>
<span class="line"><span style="color:#24292e;">          console.log(res.data);</span></span>
<span class="line"><span style="color:#24292e;">          return resolve(res.data);</span></span>
<span class="line"><span style="color:#24292e;">        } else {</span></span>
<span class="line"><span style="color:#24292e;">          wx.showModal({</span></span>
<span class="line"><span style="color:#24292e;">            title: &#39;请求失败&#39;,</span></span>
<span class="line"><span style="color:#24292e;">            content: res.data.message,</span></span>
<span class="line"><span style="color:#24292e;">            showCancel: false</span></span>
<span class="line"><span style="color:#24292e;">          });</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">      fail: err =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        // 失败时的处理</span></span>
<span class="line"><span style="color:#24292e;">        console.log(err);</span></span>
<span class="line"><span style="color:#24292e;">        return reject(err);</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">  })</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> * code 换取 openId</span></span>
<span class="line"><span style="color:#24292e;"> * @data {</span></span>
<span class="line"><span style="color:#24292e;"> *   jsCode - wx.login() 返回的 code</span></span>
<span class="line"><span style="color:#24292e;"> * }</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">export const wxLogin = data =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  return fetch({</span></span>
<span class="line"><span style="color:#24292e;">    url: &quot;tbcUser/getWechatOpenId&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    data: data</span></span>
<span class="line"><span style="color:#24292e;">  })</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>调用接口</strong></p><blockquote><p>项目/pages/login/login.js</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">import {</span></span>
<span class="line"><span style="color:#f6f6f4;">  wxLogin,</span></span>
<span class="line"><span style="color:#f6f6f4;">} from &#39;../../utils/api.js&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import {</span></span>
<span class="line"><span style="color:#24292e;">  wxLogin,</span></span>
<span class="line"><span style="color:#24292e;">} from &#39;../../utils/api.js&#39;</span></span></code></pre></div><p><strong>使用接口</strong></p><blockquote><p>项目/pages/login/login.js</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">wxLogin({</span></span>
<span class="line"><span style="color:#f6f6f4;">  jsCode: this.data.code</span></span>
<span class="line"><span style="color:#f6f6f4;">}).then(</span></span>
<span class="line"><span style="color:#f6f6f4;">  res =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">    console.log(&quot;【step 4】返回成功处理：&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">    console.log(res.data);</span></span>
<span class="line"><span style="color:#f6f6f4;">  },</span></span>
<span class="line"><span style="color:#f6f6f4;">  err =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">    console.log(&quot;【step 4】返回失败处理：&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">    console.log(err);</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">wxLogin({</span></span>
<span class="line"><span style="color:#24292e;">  jsCode: this.data.code</span></span>
<span class="line"><span style="color:#24292e;">}).then(</span></span>
<span class="line"><span style="color:#24292e;">  res =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&quot;【step 4】返回成功处理：&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    console.log(res.data);</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  err =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&quot;【step 4】返回失败处理：&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    console.log(err);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">)</span></span></code></pre></div><h3 id="_9、javascript创建对象的几种方式" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#9javascript%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%87%A0%E7%A7%8D%E6%96%B9%E5%BC%8F" target="_blank" rel="noreferrer">9、javascript创建对象的几种方式？</a> <a class="header-anchor" href="#_9、javascript创建对象的几种方式" aria-label="Permalink to &quot;[9、javascript创建对象的几种方式？](https://gitee.com/souyunku/DevBooks/blob/master/docs/前端/前端最新面试题2021年，常见面试题及答案汇总.md#9javascript创建对象的几种方式)&quot;">​</a></h3><p><code>javascript</code>创建对象简单的说,无非就是使用内置对象或各种自定义对象，当然还可以用<code>JSON</code>；但写法有很多种，也能混合使用</p><p>对象字面量的方式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">person={firstname:&quot;Mark&quot;,lastname:&quot;Yun&quot;,age:25,eyecolor:&quot;black&quot;};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">person={firstname:&quot;Mark&quot;,lastname:&quot;Yun&quot;,age:25,eyecolor:&quot;black&quot;};</span></span></code></pre></div><p>用<code>function</code>来模拟无参的构造函数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function Person(){}</span></span>
<span class="line"><span style="color:#f6f6f4;">    var person=new Person();//定义一个function，如果使用new&quot;实例化&quot;,该function可以看作是一个Class</span></span>
<span class="line"><span style="color:#f6f6f4;">        person.name=&quot;Mark&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">        person.age=&quot;25&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">        person.work=function(){</span></span>
<span class="line"><span style="color:#f6f6f4;">        alert(person.name+&quot; hello...&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">person.work();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Person(){}</span></span>
<span class="line"><span style="color:#24292e;">    var person=new Person();//定义一个function，如果使用new&quot;实例化&quot;,该function可以看作是一个Class</span></span>
<span class="line"><span style="color:#24292e;">        person.name=&quot;Mark&quot;;</span></span>
<span class="line"><span style="color:#24292e;">        person.age=&quot;25&quot;;</span></span>
<span class="line"><span style="color:#24292e;">        person.work=function(){</span></span>
<span class="line"><span style="color:#24292e;">        alert(person.name+&quot; hello...&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">person.work();</span></span></code></pre></div><p>用<code>function</code>来模拟参构造函数来实现（用<code>this</code>关键字定义构造的上下文属性）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function Pet(name,age,hobby){</span></span>
<span class="line"><span style="color:#f6f6f4;">       this.name=name;//this作用域：当前对象</span></span>
<span class="line"><span style="color:#f6f6f4;">       this.age=age;</span></span>
<span class="line"><span style="color:#f6f6f4;">       this.hobby=hobby;</span></span>
<span class="line"><span style="color:#f6f6f4;">       this.eat=function(){</span></span>
<span class="line"><span style="color:#f6f6f4;">          alert(&quot;我叫&quot;+this.name+&quot;,我喜欢&quot;+this.hobby+&quot;,是个程序员&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">       }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    var maidou =new Pet(&quot;麦兜&quot;,25,&quot;coding&quot;);//实例化、创建对象</span></span>
<span class="line"><span style="color:#f6f6f4;">    maidou.eat();//调用eat方法</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Pet(name,age,hobby){</span></span>
<span class="line"><span style="color:#24292e;">       this.name=name;//this作用域：当前对象</span></span>
<span class="line"><span style="color:#24292e;">       this.age=age;</span></span>
<span class="line"><span style="color:#24292e;">       this.hobby=hobby;</span></span>
<span class="line"><span style="color:#24292e;">       this.eat=function(){</span></span>
<span class="line"><span style="color:#24292e;">          alert(&quot;我叫&quot;+this.name+&quot;,我喜欢&quot;+this.hobby+&quot;,是个程序员&quot;);</span></span>
<span class="line"><span style="color:#24292e;">       }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    var maidou =new Pet(&quot;麦兜&quot;,25,&quot;coding&quot;);//实例化、创建对象</span></span>
<span class="line"><span style="color:#24292e;">    maidou.eat();//调用eat方法</span></span></code></pre></div><p>用工厂方式来创建（内置对象）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">var wcDog =new Object();</span></span>
<span class="line"><span style="color:#f6f6f4;">     wcDog.name=&quot;旺财&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">     wcDog.age=3;</span></span>
<span class="line"><span style="color:#f6f6f4;">     wcDog.work=function(){</span></span>
<span class="line"><span style="color:#f6f6f4;">       alert(&quot;我是&quot;+wcDog.name+&quot;,汪汪汪......&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">     }</span></span>
<span class="line"><span style="color:#f6f6f4;">     wcDog.work();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var wcDog =new Object();</span></span>
<span class="line"><span style="color:#24292e;">     wcDog.name=&quot;旺财&quot;;</span></span>
<span class="line"><span style="color:#24292e;">     wcDog.age=3;</span></span>
<span class="line"><span style="color:#24292e;">     wcDog.work=function(){</span></span>
<span class="line"><span style="color:#24292e;">       alert(&quot;我是&quot;+wcDog.name+&quot;,汪汪汪......&quot;);</span></span>
<span class="line"><span style="color:#24292e;">     }</span></span>
<span class="line"><span style="color:#24292e;">     wcDog.work();</span></span></code></pre></div><p>用原型方式来创建</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function Dog(){</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">     }</span></span>
<span class="line"><span style="color:#f6f6f4;">     Dog.prototype.name=&quot;旺财&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">     Dog.prototype.eat=function(){</span></span>
<span class="line"><span style="color:#f6f6f4;">     alert(this.name+&quot;是个吃货&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">     }</span></span>
<span class="line"><span style="color:#f6f6f4;">     var wangcai =new Dog();</span></span>
<span class="line"><span style="color:#f6f6f4;">     wangcai.eat();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Dog(){</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">     }</span></span>
<span class="line"><span style="color:#24292e;">     Dog.prototype.name=&quot;旺财&quot;;</span></span>
<span class="line"><span style="color:#24292e;">     Dog.prototype.eat=function(){</span></span>
<span class="line"><span style="color:#24292e;">     alert(this.name+&quot;是个吃货&quot;);</span></span>
<span class="line"><span style="color:#24292e;">     }</span></span>
<span class="line"><span style="color:#24292e;">     var wangcai =new Dog();</span></span>
<span class="line"><span style="color:#24292e;">     wangcai.eat();</span></span></code></pre></div><p>用混合方式来创建</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function Car(name,price){</span></span>
<span class="line"><span style="color:#f6f6f4;">      this.name=name;</span></span>
<span class="line"><span style="color:#f6f6f4;">      this.price=price; </span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">     Car.prototype.sell=function(){</span></span>
<span class="line"><span style="color:#f6f6f4;">       alert(&quot;我是&quot;+this.name+&quot;，我现在卖&quot;+this.price+&quot;万元&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">      }</span></span>
<span class="line"><span style="color:#f6f6f4;">    var camry =new Car(&quot;凯美瑞&quot;,27);</span></span>
<span class="line"><span style="color:#f6f6f4;">    camry.sell();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Car(name,price){</span></span>
<span class="line"><span style="color:#24292e;">      this.name=name;</span></span>
<span class="line"><span style="color:#24292e;">      this.price=price; </span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">     Car.prototype.sell=function(){</span></span>
<span class="line"><span style="color:#24292e;">       alert(&quot;我是&quot;+this.name+&quot;，我现在卖&quot;+this.price+&quot;万元&quot;);</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    var camry =new Car(&quot;凯美瑞&quot;,27);</span></span>
<span class="line"><span style="color:#24292e;">    camry.sell();</span></span></code></pre></div><h3 id="_10、async-和-defer-的作用是什么-有什么区别-浏览器解析过程" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#10async-%E5%92%8C-defer-%E7%9A%84%E4%BD%9C%E7%94%A8%E6%98%AF%E4%BB%80%E4%B9%88%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%E6%B5%8F%E8%A7%88%E5%99%A8%E8%A7%A3%E6%9E%90%E8%BF%87%E7%A8%8B" target="_blank" rel="noreferrer">10、async 和 defer 的作用是什么？有什么区别？（浏览器解析过程）</a> <a class="header-anchor" href="#_10、async-和-defer-的作用是什么-有什么区别-浏览器解析过程" aria-label="Permalink to &quot;[10、async 和 defer 的作用是什么？有什么区别？（浏览器解析过程）](https://gitee.com/souyunku/DevBooks/blob/master/docs/前端/前端最新面试题2021年，常见面试题及答案汇总.md#10async-和-defer-的作用是什么有什么区别浏览器解析过程)&quot;">​</a></h3><p>脚本没有 defer 或 async，浏览器会立即加载并执行指定的脚本，也就是说不等待后续载入的文档元素，读到就加载并执行。</p><p>defer 属性表示延迟执行引入的 JavaScript，即这段 JavaScript 加载时 HTML 并未停止解析，这两个过程是并行的。当整个 document 解析完毕后再执行脚本文件，在 DOMContentLoaded 事件触发之前完成。多个脚本按顺序执行。</p><p>async 属性表示异步执行引入的 JavaScript，与 defer 的区别在于，如果已经加载好，就会开始执行，也就是说它的执行仍然会阻塞文档的解析，只是它的加载过程不会阻塞。多个脚本的执行顺序无法保证。</p><p>详细资料可以参考：</p><p><a href="https://segmentfault.com/q/1010000000640869" target="_blank" rel="noreferrer">《defer 和 async 的区别》</a></p><h3 id="_11、前端页面有哪三层构成-分别是什么-作用是什么" tabindex="-1">11、前端页面有哪三层构成，分别是什么?作用是什么? <a class="header-anchor" href="#_11、前端页面有哪三层构成-分别是什么-作用是什么" aria-label="Permalink to &quot;11、前端页面有哪三层构成，分别是什么?作用是什么?&quot;">​</a></h3><h3 id="_12、怎么理解promise对象" tabindex="-1">12、怎么理解Promise对象？ <a class="header-anchor" href="#_12、怎么理解promise对象" aria-label="Permalink to &quot;12、怎么理解Promise对象？&quot;">​</a></h3><h3 id="_13、视差滚动效果" tabindex="-1">13、视差滚动效果？ <a class="header-anchor" href="#_13、视差滚动效果" aria-label="Permalink to &quot;13、视差滚动效果？&quot;">​</a></h3><h3 id="_14、css3有哪些新特性" tabindex="-1">14、CSS3有哪些新特性？ <a class="header-anchor" href="#_14、css3有哪些新特性" aria-label="Permalink to &quot;14、CSS3有哪些新特性？&quot;">​</a></h3><h3 id="_15、什么是文档的预解析-浏览器解析过程" tabindex="-1">15、什么是文档的预解析？（浏览器解析过程） <a class="header-anchor" href="#_15、什么是文档的预解析-浏览器解析过程" aria-label="Permalink to &quot;15、什么是文档的预解析？（浏览器解析过程）&quot;">​</a></h3><h3 id="_16、xhtml和html有什么区别" tabindex="-1">16、xhtml和html有什么区别? <a class="header-anchor" href="#_16、xhtml和html有什么区别" aria-label="Permalink to &quot;16、xhtml和html有什么区别?&quot;">​</a></h3><h3 id="_17、请解释一下css3的flexbox-弹性盒布局模型-以及适用场景" tabindex="-1">17、请解释一下CSS3的flexbox（弹性盒布局模型）,以及适用场景？ <a class="header-anchor" href="#_17、请解释一下css3的flexbox-弹性盒布局模型-以及适用场景" aria-label="Permalink to &quot;17、请解释一下CSS3的flexbox（弹性盒布局模型）,以及适用场景？&quot;">​</a></h3><h3 id="_18、什么是构造函数-与普通函数有什么区别" tabindex="-1">18、什么是构造函数？与普通函数有什么区别? <a class="header-anchor" href="#_18、什么是构造函数-与普通函数有什么区别" aria-label="Permalink to &quot;18、什么是构造函数？与普通函数有什么区别?&quot;">​</a></h3><h3 id="_19、px-em-rem的区别" tabindex="-1">19、px，em，rem的区别？ <a class="header-anchor" href="#_19、px-em-rem的区别" aria-label="Permalink to &quot;19、px，em，rem的区别？&quot;">​</a></h3><h3 id="_20、为什么typeof-null-返回-object-如何检查一个值是否为-null" tabindex="-1">20、为什么typeof null 返回 object？如何检查一个值是否为 null？ <a class="header-anchor" href="#_20、为什么typeof-null-返回-object-如何检查一个值是否为-null" aria-label="Permalink to &quot;20、为什么typeof null 返回 object？如何检查一个值是否为 null？&quot;">​</a></h3><h3 id="_21、请描述一下-cookies-sessionstorage-和-localstorage-的区别" tabindex="-1">21、请描述一下 cookies，sessionStorage 和 localStorage 的区别？ <a class="header-anchor" href="#_21、请描述一下-cookies-sessionstorage-和-localstorage-的区别" aria-label="Permalink to &quot;21、请描述一下 cookies，sessionStorage 和 localStorage 的区别？&quot;">​</a></h3><h3 id="_22、call-apply-两者之间的区别" tabindex="-1">22、call &amp; apply 两者之间的区别### <a class="header-anchor" href="#_22、call-apply-两者之间的区别" aria-label="Permalink to &quot;22、call &amp; apply 两者之间的区别###&quot;">​</a></h3><h3 id="_23、-use-strict-是干嘛用的" tabindex="-1">23、&#39;use strict&#39; 是干嘛用的？ <a class="header-anchor" href="#_23、-use-strict-是干嘛用的" aria-label="Permalink to &quot;23、&#39;use strict&#39; 是干嘛用的？&quot;">​</a></h3><h3 id="_24、html优化" tabindex="-1">24、HTML优化 <a class="header-anchor" href="#_24、html优化" aria-label="Permalink to &quot;24、HTML优化&quot;">​</a></h3><h3 id="_25、web开发中会话跟踪的方法有哪些" tabindex="-1">25、web开发中会话跟踪的方法有哪些 <a class="header-anchor" href="#_25、web开发中会话跟踪的方法有哪些" aria-label="Permalink to &quot;25、web开发中会话跟踪的方法有哪些&quot;">​</a></h3><h3 id="_26、闭包" tabindex="-1">26、闭包 <a class="header-anchor" href="#_26、闭包" aria-label="Permalink to &quot;26、闭包&quot;">​</a></h3><h3 id="_27、dtd-介绍" tabindex="-1">27、DTD 介绍 <a class="header-anchor" href="#_27、dtd-介绍" aria-label="Permalink to &quot;27、DTD 介绍&quot;">​</a></h3><h3 id="_28、javascript-中-this-值是什么" tabindex="-1">28、JavaScript 中 <code>this</code> 值是什么？ <a class="header-anchor" href="#_28、javascript-中-this-值是什么" aria-label="Permalink to &quot;28、JavaScript 中 \`this\` 值是什么？&quot;">​</a></h3><h3 id="_29、微信小程序-文件主要目录及文件作用" tabindex="-1">29、微信小程序，文件主要目录及文件作用 <a class="header-anchor" href="#_29、微信小程序-文件主要目录及文件作用" aria-label="Permalink to &quot;29、微信小程序，文件主要目录及文件作用&quot;">​</a></h3><h3 id="_30、如何检查值是否虚值" tabindex="-1">30、如何检查值是否虚值？ <a class="header-anchor" href="#_30、如何检查值是否虚值" aria-label="Permalink to &quot;30、如何检查值是否虚值？&quot;">​</a></h3><h3 id="_31、什么是-async-await-及其如何工作" tabindex="-1">31、什么是 <code>async/await</code> 及其如何工作？ <a class="header-anchor" href="#_31、什么是-async-await-及其如何工作" aria-label="Permalink to &quot;31、什么是 \`async/await\` 及其如何工作？&quot;">​</a></h3>`,121),o=[p];function t(c,r,i,f,d,u){return a(),n("div",null,o)}const E=s(l,[["render",t]]);export{h as __pageData,E as default};
