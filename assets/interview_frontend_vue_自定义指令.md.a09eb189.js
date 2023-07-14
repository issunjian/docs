import{_ as s,o as n,c as a,V as l}from"./chunks/framework.c6d8cbec.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/frontend/vue/自定义指令.md","filePath":"interview/frontend/vue/自定义指令.md"}'),p={name:"interview/frontend/vue/自定义指令.md"},o=l(`<h2 id="一键复制" tabindex="-1">一键复制 <a class="header-anchor" href="#一键复制" aria-label="Permalink to &quot;一键复制&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">//方案一：</span></span>
<span class="line"><span style="color:#F6F6F4;">Vue.</span><span style="color:#62E884;">directive</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">copy</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">bind</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">el</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    el.</span><span style="color:#62E884;">addEventListener</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">click</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> () {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> range </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> document.</span><span style="color:#62E884;">createRange</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">      range.</span><span style="color:#62E884;">selectNode</span><span style="color:#F6F6F4;">(el);</span></span>
<span class="line"><span style="color:#F6F6F4;">      window.</span><span style="color:#62E884;">getSelection</span><span style="color:#F6F6F4;">().</span><span style="color:#62E884;">addRange</span><span style="color:#F6F6F4;">(range);</span></span>
<span class="line"><span style="color:#F6F6F4;">      document.</span><span style="color:#62E884;">execCommand</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">copy</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">      window.</span><span style="color:#62E884;">getSelection</span><span style="color:#F6F6F4;">().</span><span style="color:#62E884;">removeAllRanges</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">    });</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">//方案二：</span></span>
<span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> { Notification } </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">element-ui</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> COPY </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">bind</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">el</span><span style="color:#F6F6F4;">, { </span><span style="color:#FFB86C;font-style:italic;">value</span><span style="color:#F6F6F4;"> }) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    el.$value </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> value;</span></span>
<span class="line"><span style="color:#F6F6F4;">    el.</span><span style="color:#62E884;">handler</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">!</span><span style="color:#F6F6F4;">el.$value) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        Notification.</span><span style="color:#62E884;">success</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">          title</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">无复制内容</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        });</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">      }</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> textarea </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> document.</span><span style="color:#62E884;">createElement</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">textarea</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">      textarea.readOnly </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">readonly</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">      textarea.style.position </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">absolute</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">      textarea.style.left </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">-9999px</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">      textarea.value </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> el.$value;</span></span>
<span class="line"><span style="color:#F6F6F4;">      document.body.</span><span style="color:#62E884;">appendChild</span><span style="color:#F6F6F4;">(textarea);</span></span>
<span class="line"><span style="color:#F6F6F4;">      textarea.</span><span style="color:#62E884;">select</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> result </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> document.</span><span style="color:#62E884;">execCommand</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">Copy</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (result) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        Notification.</span><span style="color:#62E884;">success</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">          title</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">复制成功</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        });</span></span>
<span class="line"><span style="color:#F6F6F4;">      }</span></span>
<span class="line"><span style="color:#F6F6F4;">      document.body.</span><span style="color:#62E884;">removeChild</span><span style="color:#F6F6F4;">(textarea);</span></span>
<span class="line"><span style="color:#F6F6F4;">    };</span></span>
<span class="line"><span style="color:#F6F6F4;">    el.</span><span style="color:#62E884;">addEventListener</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">click</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, el.handler);</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">componentUpdated</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">el</span><span style="color:#F6F6F4;">, { </span><span style="color:#FFB86C;font-style:italic;">value</span><span style="color:#F6F6F4;"> }) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    el.$value </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> value;</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">unbind</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">el</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    el.</span><span style="color:#62E884;">removeEventListener</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">click</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, el.handler);</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//方案一：</span></span>
<span class="line"><span style="color:#24292E;">Vue.</span><span style="color:#6F42C1;">directive</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;copy&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">bind</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">el</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    el.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;click&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> range </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createRange</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">      range.</span><span style="color:#6F42C1;">selectNode</span><span style="color:#24292E;">(el);</span></span>
<span class="line"><span style="color:#24292E;">      window.</span><span style="color:#6F42C1;">getSelection</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">addRange</span><span style="color:#24292E;">(range);</span></span>
<span class="line"><span style="color:#24292E;">      document.</span><span style="color:#6F42C1;">execCommand</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;copy&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      window.</span><span style="color:#6F42C1;">getSelection</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">removeAllRanges</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//方案二：</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Notification } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;element-ui&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">COPY</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">bind</span><span style="color:#24292E;">(</span><span style="color:#E36209;">el</span><span style="color:#24292E;">, { </span><span style="color:#E36209;">value</span><span style="color:#24292E;"> }) {</span></span>
<span class="line"><span style="color:#24292E;">    el.$value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value;</span></span>
<span class="line"><span style="color:#24292E;">    el.</span><span style="color:#6F42C1;">handler</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">el.$value) {</span></span>
<span class="line"><span style="color:#24292E;">        Notification.</span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">          title: </span><span style="color:#032F62;">&quot;无复制内容&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">textarea</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;textarea&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      textarea.readOnly </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      textarea.style.position </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;absolute&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      textarea.style.left </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;-9999px&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      textarea.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> el.$value;</span></span>
<span class="line"><span style="color:#24292E;">      document.body.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(textarea);</span></span>
<span class="line"><span style="color:#24292E;">      textarea.</span><span style="color:#6F42C1;">select</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">execCommand</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Copy&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (result) {</span></span>
<span class="line"><span style="color:#24292E;">        Notification.</span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">          title: </span><span style="color:#032F62;">&quot;复制成功&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      document.body.</span><span style="color:#6F42C1;">removeChild</span><span style="color:#24292E;">(textarea);</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">    el.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;click&quot;</span><span style="color:#24292E;">, el.handler);</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">componentUpdated</span><span style="color:#24292E;">(</span><span style="color:#E36209;">el</span><span style="color:#24292E;">, { </span><span style="color:#E36209;">value</span><span style="color:#24292E;"> }) {</span></span>
<span class="line"><span style="color:#24292E;">    el.$value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">unbind</span><span style="color:#24292E;">(</span><span style="color:#E36209;">el</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    el.</span><span style="color:#6F42C1;">removeEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;click&quot;</span><span style="color:#24292E;">, el.handler);</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div>`,2),e=[o];function t(c,r,y,F,E,i){return n(),a("div",null,e)}const C=s(p,[["render",t]]);export{d as __pageData,C as default};
