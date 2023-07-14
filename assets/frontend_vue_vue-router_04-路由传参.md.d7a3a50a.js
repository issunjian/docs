import{_ as s,o as a,c as n,V as l}from"./chunks/framework.c6d8cbec.js";const p="/docs/images/vue-router/image-2023-01-15_14-45-56-066-04-路由传参.png",m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/vue/vue-router/04-路由传参.md","filePath":"frontend/vue/vue-router/04-路由传参.md"}'),o={name:"frontend/vue/vue-router/04-路由传参.md"},e=l(`<blockquote><p>[!NOTE] Important Note 在 8 月份之后的 vue 中，若不把 params 参数写在路由路径中将不会在组件中得到 params 参数，所以说现在 params 参数也会显示在地址栏上了。不是弃用 params。<br><a href="https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414" target="_blank" rel="noreferrer">https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414</a>-2022-08-22</p></blockquote><h2 id="query-路由传参" tabindex="-1">Query 路由传参 <a class="header-anchor" href="#query-路由传参" aria-label="Permalink to &quot;Query 路由传参&quot;">​</a></h2><h3 id="传递参数" tabindex="-1">传递参数 <a class="header-anchor" href="#传递参数" aria-label="Permalink to &quot;传递参数&quot;">​</a></h3><p>编程式导航 使用 router push 或者 replace 的时候 改为对象形式新增 query 必须传入一个对象，会将 query 对象展示在 路由路径(url) 上</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">toDetail</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">item</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Item</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    router.</span><span style="color:#62E884;">push</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">        path</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">/reg</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        query</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> item</span></span>
<span class="line"><span style="color:#F6F6F4;">    })</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">toDetail</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">item</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Item</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    router.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        path: </span><span style="color:#032F62;">&#39;/reg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        query: item</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><img src="`+p+`"><h3 id="接受参数" tabindex="-1">接受参数 <a class="header-anchor" href="#接受参数" aria-label="Permalink to &quot;接受参数&quot;">​</a></h3><p>使用 useRoute 的 query</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> { useRoute } </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">vue-router</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> route </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">useRoute</span><span style="color:#F6F6F4;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useRoute } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">route</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useRoute</span><span style="color:#24292E;">()</span></span></code></pre></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">&lt;</span><span style="color:#F286C4;">div</span><span style="color:#F6F6F4;">&gt;品牌：{{ route.query?.name }}&lt;/</span><span style="color:#F286C4;">div</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;"> &lt;</span><span style="color:#F286C4;">div</span><span style="color:#F6F6F4;">&gt;价格：{{ route.query?.price }}&lt;/</span><span style="color:#F286C4;">div</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;"> &lt;</span><span style="color:#F286C4;">div</span><span style="color:#F6F6F4;">&gt;ID：{{ route.query?.id }}&lt;/</span><span style="color:#F286C4;">div</span><span style="color:#F6F6F4;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;品牌：{{ route.query?.name }}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;"> &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;价格：{{ route.query?.price }}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;"> &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;ID：{{ route.query?.id }}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="params-路由传参" tabindex="-1">Params 路由传参 <a class="header-anchor" href="#params-路由传参" aria-label="Permalink to &quot;Params 路由传参&quot;">​</a></h2><p>编程式导航 使用 router push 或者 replace 的时候 改为对象形式并且只能使用 name，path 无效，然后传入 params</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">toDetail</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">item</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Item</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    router.</span><span style="color:#62E884;">push</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">        name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">Reg</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        params</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> item</span></span>
<span class="line"><span style="color:#F6F6F4;">    })</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">toDetail</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">item</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Item</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    router.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;Reg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        params: item</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>接受参数</p><p>使用 useRoute 的 params</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> { useRoute } </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">vue-router</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> route </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">useRoute</span><span style="color:#F6F6F4;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useRoute } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">route</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useRoute</span><span style="color:#24292E;">()</span></span></code></pre></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">&lt;</span><span style="color:#F286C4;">div</span><span style="color:#F6F6F4;">&gt;品牌：{{ route.params?.name }}&lt;/</span><span style="color:#F286C4;">div</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">&lt;</span><span style="color:#F286C4;">div</span><span style="color:#F6F6F4;">&gt;价格：{{ route.params?.price }}&lt;/</span><span style="color:#F286C4;">div</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">&lt;</span><span style="color:#F286C4;">div</span><span style="color:#F6F6F4;">&gt;ID：{{ route.params?.id }}&lt;/</span><span style="color:#F286C4;">div</span><span style="color:#F6F6F4;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;品牌：{{ route.params?.name }}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;价格：{{ route.params?.price }}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;ID：{{ route.params?.id }}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="动态路由传参" tabindex="-1">动态路由传参 <a class="header-anchor" href="#动态路由传参" aria-label="Permalink to &quot;动态路由传参&quot;">​</a></h2><p>很多时候，我们需要将给定匹配模式的路由映射到同一个组件。 例如，我们可能有一个 User 组件，它应该对所有用户进行渲染，但用户 ID 不同。 在 Vue Router 中，我们可以在路径中使用一个动态字段来实现，我们称之为 路径参数</p><p><strong>路径参数 用冒号 : 表示。当一个路由被匹配时，它的 params 的值将在每个组件</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> routes</span><span style="color:#F286C4;">:</span><span style="color:#97E1F1;font-style:italic;">Array</span><span style="color:#F6F6F4;">&lt;</span><span style="color:#FFB86C;font-style:italic;">RouteRecordRaw</span><span style="color:#F6F6F4;">&gt; </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">    {</span></span>
<span class="line"><span style="color:#F6F6F4;">        path</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">/</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        name</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">Login</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#62E884;">component</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;">()</span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">../components/login.vue</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">    },</span></span>
<span class="line"><span style="color:#F6F6F4;">    {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">//动态路由参数</span></span>
<span class="line"><span style="color:#F6F6F4;">        path</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">/reg/:id</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        name</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">Reg</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#62E884;">component</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;">()</span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">../components/reg.vue</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#D73A49;">:</span><span style="color:#6F42C1;">Array</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">RouteRecordRaw</span><span style="color:#24292E;">&gt; </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        path:</span><span style="color:#032F62;">&quot;/&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        name:</span><span style="color:#032F62;">&quot;Login&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">:()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;../components/login.vue&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//动态路由参数</span></span>
<span class="line"><span style="color:#24292E;">        path:</span><span style="color:#032F62;">&quot;/reg/:id&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        name:</span><span style="color:#032F62;">&quot;Reg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">:()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;../components/reg.vue&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">toDetail</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">item</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Item</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    router.</span><span style="color:#62E884;">push</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">        name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">Reg</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        params</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">            id</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> item.id</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">    })</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">toDetail</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">item</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Item</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    router.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;Reg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        params: {</span></span>
<span class="line"><span style="color:#24292E;">            id: item.id</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> { useRoute } </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">vue-router</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> { data } </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">./list.json</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> route </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">useRoute</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> item </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> data.</span><span style="color:#62E884;">find</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">v</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> v.id </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Number</span><span style="color:#F6F6F4;">(route.params.id))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useRoute } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { data } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./list.json&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">route</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useRoute</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> data.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">(</span><span style="color:#E36209;">v</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> v.id </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Number</span><span style="color:#24292E;">(route.params.id))</span></span></code></pre></div><h2 id="二者的区别" tabindex="-1">二者的区别 <a class="header-anchor" href="#二者的区别" aria-label="Permalink to &quot;二者的区别&quot;">​</a></h2><ol><li>query 传参配置的是 path，而 params 传参配置的是 name，在 params 中配置 path 无效</li><li>query 在路由配置不需要设置参数，而 params 必须设置</li><li>query 传递的参数会显示在地址栏中</li><li>params 传参刷新会无效，但是 query 会保存传递过来的值，刷新不变 ;</li><li>路由配置</li></ol><blockquote><p>版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。 本文链接：<a href="https://blog.csdn.net/qq1195566313/article/details/123613595" target="_blank" rel="noreferrer">https://blog.csdn.net/qq1195566313/article/details/123613595</a></p></blockquote>`,26),t=[e];function c(r,y,F,i,E,u){return a(),n("div",null,t)}const g=s(o,[["render",c]]);export{m as __pageData,g as default};
