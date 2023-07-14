import{_ as s,o as n,c as a,V as p}from"./chunks/framework.c6d8cbec.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/vue/vue-router/vue-router子路由路径写和不写的差别.md","filePath":"frontend/vue/vue-router/vue-router子路由路径写和不写的差别.md"}'),l={name:"frontend/vue/vue-router/vue-router子路由路径写和不写的差别.md"},o=p(`<h2 id="vue子路由路径写-和不写-的差别" tabindex="-1">vue子路由路径写/和不写/的差别 <a class="header-anchor" href="#vue子路由路径写-和不写-的差别" aria-label="Permalink to &quot;vue子路由路径写/和不写/的差别&quot;">​</a></h2><blockquote><p>路由的配置</p></blockquote><ul><li>子路由写/的时候代表是绝对路径 跳转的时候直接在跟路径下跟上子路由</li><li>不写/的时候 会进行拼接 在原有路径上跟上新的path路径</li><li>如果父路由是/ 的时候 子路由写不写/都可以</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> Vue </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">vue</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> VueRouter </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">vue-router</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">Vue.</span><span style="color:#62E884;">use</span><span style="color:#F6F6F4;">(VueRouter)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> router </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">VueRouter</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">  routes</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">    {</span></span>
<span class="line"><span style="color:#F6F6F4;">      path</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">/login</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#62E884;">component</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">@/02.form表单组件.vue</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">    },</span></span>
<span class="line"><span style="color:#F6F6F4;">    {</span></span>
<span class="line"><span style="color:#F6F6F4;">      path</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">/abc</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#62E884;">component</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">@/layout.vue</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">),</span></span>
<span class="line"><span style="color:#F6F6F4;">      children</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">        {</span></span>
<span class="line"><span style="color:#F6F6F4;">          path</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">/tree</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">//子路由写了/代表绝对路径 跳转的时候 地址是这个http://localhost:8080/#/tree</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#62E884;">component</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">@/03.tree树形组件.vue</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">        },</span></span>
<span class="line"><span style="color:#F6F6F4;">        {</span></span>
<span class="line"><span style="color:#F6F6F4;">          path</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">table</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#7B7F8B;">//子路由没有写/ 代表的拼接的路径 跳转的时候地址是     http://localhost:8080/#/abc/table</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#62E884;">component</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">@/00.table表格.vue</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">      ]</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">  ]</span></span>
<span class="line"><span style="color:#F6F6F4;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">default</span><span style="color:#F6F6F4;"> router</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> VueRouter </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Vue.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(VueRouter)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">router</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VueRouter</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  routes: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;/login&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@/02.form表单组件.vue&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;/abc&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@/layout.vue&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      children: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          path: </span><span style="color:#032F62;">&#39;/tree&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">//子路由写了/代表绝对路径 跳转的时候 地址是这个http://localhost:8080/#/tree</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@/03.tree树形组件.vue&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          path: </span><span style="color:#032F62;">&#39;table&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">//子路由没有写/ 代表的拼接的路径 跳转的时候地址是     http://localhost:8080/#/abc/table</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@/00.table表格.vue&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> router</span></span></code></pre></div>`,4),e=[o];function t(c,r,F,y,E,i){return n(),a("div",null,e)}const C=s(l,[["render",t]]);export{D as __pageData,C as default};
