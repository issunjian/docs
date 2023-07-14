import{_ as a,H as n,o as l,c as e,J as o,V as p}from"./chunks/framework.c6d8cbec.js";const g=JSON.parse('{"title":"微信小程序","description":"","frontmatter":{"title":"微信小程序","date":"2019-09-03T12:02:41.000Z","categories":"微信小程序"},"headers":[],"relativePath":"mobile/微信小程序.md","filePath":"mobile/微信小程序.md"}'),t={name:"mobile/微信小程序.md"},c=p(`<div class="language-tex vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tex</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">### 基本语法</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">### Mustache语法   \`{{}}\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">&gt; \`{{something}}\` 双花括号中的变量是在\`js\`文件中的\`data\`对象定义的</span></span>
<span class="line"><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">&gt; **注意双花括号中不要写空格,如果有空格，将最终被解析成为字符串**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">1. 组件的属性(需要在双引号之内)：\`id=&quot;item-{{id}}&quot;\`，\`wx:if=&quot;{{isShow}}&quot;\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">2. 关键字：\`&lt;checkbox checked=&quot;{{false}}&quot;&gt; &lt;/checkbox&gt;\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">   **特别注意：不要直接写 checked=&quot;false&quot;，其计算结果是一个字符串，转成 boolean 类型后代表真值。**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">3. 该语法支持简单的运算，**三元表达式，逻辑判断，计算，字符串拼接等**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">4. 可以合成对象，\`data=&quot;{{for: a, bar: b}}&quot;\`,a=1,b=2,ab是在\`data\`中定义的变量，最后得到的合成对象是\`{for:1,bar:2}\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">5. 也可以使用展开运算符，\`data=&quot;{{...obj}}&quot;\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">### 基本语法</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">### Mustache语法   \`{{}}\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&gt; \`{{something}}\` 双花括号中的变量是在\`js\`文件中的\`data\`对象定义的</span></span>
<span class="line"><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&gt; **注意双花括号中不要写空格,如果有空格，将最终被解析成为字符串**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">1. 组件的属性(需要在双引号之内)：\`id=&quot;item-{{id}}&quot;\`，\`wx:if=&quot;{{isShow}}&quot;\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">2. 关键字：\`&lt;checkbox checked=&quot;{{false}}&quot;&gt; &lt;/checkbox&gt;\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   **特别注意：不要直接写 checked=&quot;false&quot;，其计算结果是一个字符串，转成 boolean 类型后代表真值。**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">3. 该语法支持简单的运算，**三元表达式，逻辑判断，计算，字符串拼接等**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">4. 可以合成对象，\`data=&quot;{{for: a, bar: b}}&quot;\`,a=1,b=2,ab是在\`data\`中定义的变量，最后得到的合成对象是\`{for:1,bar:2}\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">5. 也可以使用展开运算符，\`data=&quot;{{...obj}}&quot;\`</span></span></code></pre></div><h3 id="组件-标签" tabindex="-1">组件(标签) <a class="header-anchor" href="#组件-标签" aria-label="Permalink to &quot;组件(标签)&quot;">​</a></h3><p><code>div</code>===&gt; <code>view</code></p><p><code>span</code>===&gt;<code>text</code></p><h4 id="text-标签" tabindex="-1">text 标签 <a class="header-anchor" href="#text-标签" aria-label="Permalink to &quot;text 标签&quot;">​</a></h4><blockquote><p>需要设置属性<code>selectable</code>为 true 的之后才能触发长按选择文字</p></blockquote><p>1 text 标签相当于以前的 span 标签 2 默认是行内元素 不会换行！！！ 3 在小程序中 <strong>只有它可以实现 长按文字 复制</strong>！！</p><h4 id="image-图片标签" tabindex="-1">image 图片标签 <a class="header-anchor" href="#image-图片标签" aria-label="Permalink to &quot;image 图片标签&quot;">​</a></h4><p>1 观察 <strong>image 标签</strong>的默认宽度和高度</p><p>​ <strong>320 * 240 px</strong></p><p>​ 默认情况下 高度 不会跟随图片的宽度改变而发生改变</p><p>2 src 要加载的图片路径</p><p>​ 1 小程序中用的图片都使用<strong>外网</strong>的 可以使用<a href="https://images.ac.cn/" target="_blank" rel="noreferrer">图床</a> <a href="https://imgchr.com/" target="_blank" rel="noreferrer">还有备用的</a></p><p>​ 小程序项目要上线 大小限制 是 <strong>2M</strong></p><p>3 mode 渲染模式</p><p>​ 1 把 image 标签分成两个部分来理解 和以前的 div + 背景图片一样！！！</p><p>​ 1 相框 部分</p><p>​ 2 图片内容部分</p><p>​</p><p>​ 2 <strong>widthFix</strong> 用得比较多的！！</p><p>​ 1 图片内容 等于 相框的宽度</p><p>​ 2 图片的高度 会跟随着 图片内容的宽度 <strong>等比例发生变化</strong></p><p>​ 3 这个属性的效果 其实就等于 web 中的图片的默认效果 高度等比例变化</p><p>​ 3 scaleToFill <strong>默认值</strong></p><p>​ 1 把图片内容 填 充满 相框！！ <strong>不保持宽高比例</strong></p><p>​ 4 aspectFit 用得比较多的！！</p><p>​ 1 等比例拉伸图片内容</p><p>​ 2 相框会完全的包住图片内容</p><p>​ 5 aspectFill</p><p>​ 1 等比例拉伸图片内容</p><p>​ 2 图片内容会填充满 相框</p><p>​ 6 以上的属性和以前学习过</p><p>​ background-size:</p><p>​ contain</p><p>​ cover</p><p>​ 100% 100%</p><p><img src="https://s2.ax1x.com/2019/09/03/nkdUOO.png" alt="1564129700966"></p><h2 id="checkbox-group" tabindex="-1"><code>checkbox-group</code> <a class="header-anchor" href="#checkbox-group" aria-label="Permalink to &quot;\`checkbox-group\`&quot;">​</a></h2><blockquote><p>使用该组件才能触发事件，<code>bind:change</code></p></blockquote><p>配合<code>checkbox</code>使用，复选框，checkbox 的 color 属性可以修改选中状态的颜色</p><h4 id="rich-text" tabindex="-1"><code>rich-text</code> <a class="header-anchor" href="#rich-text" aria-label="Permalink to &quot;\`rich-text\`&quot;">​</a></h4><blockquote><p>富文本标签，相当于<code>vue</code>中的<code>v-html</code></p></blockquote><p>当它的<code>nodes</code>属性是字符串的时候，只能支持<code>html</code>的标签，而不是小程序中的组件</p><p>更加推荐使用数组</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">&lt;</span><span style="color:#97E1F1;font-style:italic;">rich-text</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;font-style:italic;">nodes</span><span style="color:#F286C4;">=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">{{nodes}}</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">&gt;&lt;/</span><span style="color:#97E1F1;font-style:italic;">rich-text</span><span style="color:#F6F6F4;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#62E884;">page</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">  data</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    nodes</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">      {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 定义标签名</span></span>
<span class="line"><span style="color:#F6F6F4;">        name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">div</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 定义标签属性</span></span>
<span class="line"><span style="color:#F6F6F4;">        attrs</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">          style</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">color:white;height:150px;background:#bfa;</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        },</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 定义子节点</span></span>
<span class="line"><span style="color:#F6F6F4;">        children</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">          {</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#7B7F8B;">// 必须定义type属性为text的时候才能输出文字</span></span>
<span class="line"><span style="color:#F6F6F4;">            type</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">text</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">            text</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">444444</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          },</span></span>
<span class="line"><span style="color:#F6F6F4;">        ],</span></span>
<span class="line"><span style="color:#F6F6F4;">      },</span></span>
<span class="line"><span style="color:#F6F6F4;">    ],</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">rich-text</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">nodes</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;{{nodes}}&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#005CC5;">rich-text</span><span style="color:#24292E;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">page</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  data: {</span></span>
<span class="line"><span style="color:#24292E;">    nodes: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 定义标签名</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&quot;div&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 定义标签属性</span></span>
<span class="line"><span style="color:#24292E;">        attrs: {</span></span>
<span class="line"><span style="color:#24292E;">          style: </span><span style="color:#032F62;">&quot;color:white;height:150px;background:#bfa;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 定义子节点</span></span>
<span class="line"><span style="color:#24292E;">        children: [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 必须定义type属性为text的时候才能输出文字</span></span>
<span class="line"><span style="color:#24292E;">            type: </span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&quot;444444&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h4 id="swiper" tabindex="-1"><code>swiper</code> <a class="header-anchor" href="#swiper" aria-label="Permalink to &quot;\`swiper\`&quot;">​</a></h4><blockquote><p>轮播图组件默认高度是<code>150px</code> 宽度是 100%</p></blockquote><p>需要配合<code>swiper-item</code>组件一起使用</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">&lt;</span><span style="color:#EE6666;font-style:italic;text-decoration:underline;">swiper</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;font-style:italic;">indicator-dots</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;font-style:italic;">autoplay</span><span style="color:#F286C4;">=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">{{true}}</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;font-style:italic;">circular</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;font-style:italic;">interval</span><span style="color:#F286C4;">=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">3000</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">  &lt;</span><span style="color:#F286C4;">swiper-item</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">    &lt;</span><span style="color:#EE6666;font-style:italic;text-decoration:underline;">image</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#62E884;font-style:italic;">mode</span><span style="color:#F286C4;">=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">widthFix</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#62E884;font-style:italic;">src</span><span style="color:#F286C4;">=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">https://img.alicdn.com/imgextra/i2/108/O1CN01WIZp3I1CfVK0ukVDB_!!108-0-luban.jpg</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">    /&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">  &lt;/</span><span style="color:#F286C4;">swiper-item</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">  &lt;</span><span style="color:#F286C4;">swiper-item</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">    &lt;</span><span style="color:#EE6666;font-style:italic;text-decoration:underline;">image</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#62E884;font-style:italic;">mode</span><span style="color:#F286C4;">=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">widthFix</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#62E884;font-style:italic;">src</span><span style="color:#F286C4;">=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">    /&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">  &lt;/</span><span style="color:#F286C4;">swiper-item</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">&lt;/</span><span style="color:#EE6666;font-style:italic;text-decoration:underline;">swiper</span><span style="color:#F6F6F4;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">swiper</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">indicator-dots</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">autoplay</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{{true}}&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">circular</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">interval</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;3000&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">swiper-item</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">image</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">mode</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;widthFix&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://img.alicdn.com/imgextra/i2/108/O1CN01WIZp3I1CfVK0ukVDB_!!108-0-luban.jpg&quot;</span></span>
<span class="line"><span style="color:#24292E;">    /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">swiper-item</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">swiper-item</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">image</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">mode</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;widthFix&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg&quot;</span></span>
<span class="line"><span style="color:#24292E;">    /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">swiper-item</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#B31D28;font-style:italic;">swiper</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h4 id="navigator" tabindex="-1"><code>navigator</code> <a class="header-anchor" href="#navigator" aria-label="Permalink to &quot;\`navigator\`&quot;">​</a></h4><blockquote><p>类似超链接标签，用于跳转页面或者小程序</p></blockquote><h4 id="数组循环" tabindex="-1">数组循环 <a class="header-anchor" href="#数组循环" aria-label="Permalink to &quot;数组循环&quot;">​</a></h4><blockquote><p>默认数组的当前项的下标变量名默认为 <code>index</code>，数组当前项的变量名默认为 <code>item</code></p></blockquote><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">&lt;</span><span style="color:#EE6666;font-style:italic;text-decoration:underline;">view</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;font-style:italic;">wx:for</span><span style="color:#F286C4;">=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">{{array}}</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;font-style:italic;">wx:for-index</span><span style="color:#F286C4;">=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">index</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;font-style:italic;">默认值，可以不写</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;font-style:italic;">也可以通过这个方式重命名</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;font-style:italic;">wx:for-item</span><span style="color:#F286C4;">=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">item</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;font-style:italic;">默认值，可以不写</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;font-style:italic;">wx:key</span><span style="color:#F286C4;">=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">id</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">&gt;&lt;/</span><span style="color:#EE6666;font-style:italic;text-decoration:underline;">view</span><span style="color:#F6F6F4;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">view</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">wx:for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{{array}}&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">wx:for-index</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;index&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">默认值，可以不写</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">也可以通过这个方式重命名</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">wx:for-item</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">默认值，可以不写</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">wx:key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;id&quot;</span></span>
<span class="line"><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><blockquote><p><strong>当 <code>wx:for</code> 的值为字符串时，会将字符串解析成字符串数组</strong></p></blockquote><h4 id="wx-key" tabindex="-1"><code>wx:key</code> <a class="header-anchor" href="#wx-key" aria-label="Permalink to &quot;\`wx:key\`&quot;">​</a></h4><blockquote><p>两种值</p></blockquote><div class="language-tex vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tex</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">字符串: 代表在 for 循环的 array 中 item 的某个 property(属性)，该 property 的值需要是列表中唯一的字符串或数字，且不能动态改变。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">保留关键字: *this 代表在 for 循环中的 item 本身，这种表示需要 item 本身是一个唯一的字符串或者数字，</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">字符串: 代表在 for 循环的 array 中 item 的某个 property(属性)，该 property 的值需要是列表中唯一的字符串或数字，且不能动态改变。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">保留关键字: *this 代表在 for 循环中的 item 本身，这种表示需要 item 本身是一个唯一的字符串或者数字，</span></span></code></pre></div><h4 id="wx-if" tabindex="-1"><code>wx:if</code> <a class="header-anchor" href="#wx-if" aria-label="Permalink to &quot;\`wx:if\`&quot;">​</a></h4><p><code>&lt;block/&gt;</code> 并不是一个组件，它仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。<strong>相当于<code>vue</code>中的<code>&lt;template&gt;&lt;/template&gt;</code></strong></p><p><strong><code>wx:if</code> vs <code>hidden属性</code></strong>=====&gt; vue 中的<code>v-if</code>，<code>v-show</code></p><h3 id="wxss" tabindex="-1">wxss <a class="header-anchor" href="#wxss" aria-label="Permalink to &quot;wxss&quot;">​</a></h3><h4 id="rpx尺寸单位" tabindex="-1"><code>rpx</code>尺寸单位 <a class="header-anchor" href="#rpx尺寸单位" aria-label="Permalink to &quot;\`rpx\`尺寸单位&quot;">​</a></h4><blockquote><p>不同的屏幕的<code>rpx</code>转换为像素的值不同</p></blockquote><p><code>rpx</code>（responsive pixel）: 可以根据屏幕宽度进行自适应。<strong>规定屏幕宽为<code>750rpx</code></strong>。如在 <code>iPhone6</code> 上，屏幕宽度为<code>375px</code>，共有 750 个物理像素，则<code>750rpx = 375px = 750物理像素</code>，<code>1rpx = 0.5px = 1物理像素</code>。</p><blockquote><p><code>vw</code> 视口宽度，<code>vh</code> 视口高度</p></blockquote><h4 id="引入文件" tabindex="-1">引入文件 <a class="header-anchor" href="#引入文件" aria-label="Permalink to &quot;引入文件&quot;">​</a></h4><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">/* 导入 只支持相对路径 */</span></span>
<span class="line"><span style="color:#F286C4;">@import</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">./styles/reset.wxss</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* 导入 只支持相对路径 */</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./styles/reset.wxss&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div><p>可以使用插件<code>easy less</code>把<code>less</code>文件转换为<code>wxss</code>文件</p><h2 id="complate-回调函数" tabindex="-1">complate 回调函数 <a class="header-anchor" href="#complate-回调函数" aria-label="Permalink to &quot;complate 回调函数&quot;">​</a></h2><blockquote><p>表示不管请求是失败还是成功都会执行的回调函数</p></blockquote><p><strong>一般用于关闭提示信息，比如 loading 图标提示</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">wx.</span><span style="color:#62E884;">showLoading</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">  title</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">加载中</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#62E884;">setTimeout</span><span style="color:#F6F6F4;">(</span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> () {</span></span>
<span class="line"><span style="color:#F6F6F4;">  wx.</span><span style="color:#62E884;">hideLoading</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">}, </span><span style="color:#BF9EEE;">2000</span><span style="color:#F6F6F4;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">wx.</span><span style="color:#6F42C1;">showLoading</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  title: </span><span style="color:#032F62;">&quot;加载中&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  wx.</span><span style="color:#6F42C1;">hideLoading</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}, </span><span style="color:#005CC5;">2000</span><span style="color:#24292E;">);</span></span></code></pre></div><h2 id="wx-getsetting" tabindex="-1">wx.getSetting <a class="header-anchor" href="#wx-getsetting" aria-label="Permalink to &quot;wx.getSetting&quot;">​</a></h2><blockquote><p>执行函数，通过回调函数 success 的形参，<code>result.authSetting</code>可以获取用户授权情况</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> scope </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> res1.authSetting[</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">scope.address</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">]  </span><span style="color:#7B7F8B;">// 这里的属性名对应下表</span></span>
<span class="line"><span style="color:#F6F6F4;">这时候</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">scope</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">的值,3中情况</span></span>
<span class="line"><span style="color:#BF9EEE;">undefined</span></span>
<span class="line"><span style="color:#BF9EEE;">true</span></span>
<span class="line"><span style="color:#BF9EEE;">false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> scope </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> res1.authSetting[</span><span style="color:#032F62;">&#39;scope.address&#39;</span><span style="color:#24292E;">]  </span><span style="color:#6A737D;">// 这里的属性名对应下表</span></span>
<span class="line"><span style="color:#24292E;">这时候</span><span style="color:#032F62;">&#39;scope&#39;</span><span style="color:#24292E;">的值,3中情况</span></span>
<span class="line"><span style="color:#005CC5;">undefined</span></span>
<span class="line"><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#005CC5;">false</span></span></code></pre></div><h3 id="scope-列表" tabindex="-1">scope 列表 <a class="header-anchor" href="#scope-列表" aria-label="Permalink to &quot;scope 列表&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">scope</th><th style="text-align:left;">对应接口</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">scope.userInfo</td><td style="text-align:left;"><a href="https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html" target="_blank" rel="noreferrer">wx.getUserInfo</a></td><td style="text-align:left;">用户信息</td></tr><tr><td style="text-align:left;">scope.userLocation</td><td style="text-align:left;"><a href="https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html" target="_blank" rel="noreferrer">wx.getLocation</a>, <a href="https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html" target="_blank" rel="noreferrer">wx.chooseLocation</a></td><td style="text-align:left;">地理位置</td></tr><tr><td style="text-align:left;">scope.userLocationBackground</td><td style="text-align:left;"><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/(wx.userLocationBackground)" target="_blank" rel="noreferrer">wx.userLocationBackground</a></td><td style="text-align:left;">后台定位</td></tr><tr><td style="text-align:left;">scope.address</td><td style="text-align:left;"><a href="https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html" target="_blank" rel="noreferrer">wx.chooseAddress</a></td><td style="text-align:left;">通讯地址</td></tr><tr><td style="text-align:left;">scope.invoiceTitle</td><td style="text-align:left;"><a href="https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoiceTitle.html" target="_blank" rel="noreferrer">wx.chooseInvoiceTitle</a></td><td style="text-align:left;">发票抬头</td></tr><tr><td style="text-align:left;">scope.invoice</td><td style="text-align:left;"><a href="https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoice.html" target="_blank" rel="noreferrer">wx.chooseInvoice</a></td><td style="text-align:left;">获取发票</td></tr><tr><td style="text-align:left;">scope.werun</td><td style="text-align:left;"><a href="https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.getWeRunData.html" target="_blank" rel="noreferrer">wx.getWeRunData</a></td><td style="text-align:left;">微信运动步数</td></tr><tr><td style="text-align:left;">scope.record</td><td style="text-align:left;"><a href="https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.startRecord.html" target="_blank" rel="noreferrer">wx.startRecord</a></td><td style="text-align:left;">录音功能</td></tr><tr><td style="text-align:left;">scope.writePhotosAlbum</td><td style="text-align:left;"><a href="https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.saveImageToPhotosAlbum.html" target="_blank" rel="noreferrer">wx.saveImageToPhotosAlbum</a>, <a href="https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.saveVideoToPhotosAlbum.html" target="_blank" rel="noreferrer">wx.saveVideoToPhotosAlbum</a></td><td style="text-align:left;">保存到相册</td></tr><tr><td style="text-align:left;">scope.camera</td><td style="text-align:left;"><a href="https://developers.weixin.qq.com/miniprogram/dev/component/camera.html" target="_blank" rel="noreferrer">camera</a> 组件</td><td style="text-align:left;">摄像头</td></tr></tbody></table><h2 id="chooseaddress" tabindex="-1">chooseAddress <a class="header-anchor" href="#chooseaddress" aria-label="Permalink to &quot;chooseAddress&quot;">​</a></h2><blockquote><p>获取用户的通讯地址</p></blockquote><p>navigateTo</p><blockquote><p>页面跳转</p></blockquote><p>navigateBack</p><blockquote><p>页面返回</p></blockquote><h3 id="注意点" tabindex="-1">注意点 <a class="header-anchor" href="#注意点" aria-label="Permalink to &quot;注意点&quot;">​</a></h3><p>只有当前页面配置了<code>tabBar</code>时，底部的导航栏才会出现，没有配置的页面底部是没有导航栏的</p><p><img src="https://s2.ax1x.com/2019/09/03/nkd2X8.png" alt="1564840249809"></p>`,87);function r(i,y,d,F,E,h){const s=n("Banner");return l(),e("div",null,[o(s),c])}const x=a(t,[["render",r]]);export{g as __pageData,x as default};
