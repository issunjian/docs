import{_ as s,o as n,c as a,V as l}from"./chunks/framework.c6d8cbec.js";const u=JSON.parse('{"title":"Echarts问题总结","description":"","frontmatter":{},"headers":[],"relativePath":"problem/graphical/Echarts问题总结.md","filePath":"problem/graphical/Echarts问题总结.md"}'),p={name:"problem/graphical/Echarts问题总结.md"},o=l(`<h1 id="echarts问题总结" tabindex="-1">Echarts问题总结 <a class="header-anchor" href="#echarts问题总结" aria-label="Permalink to &quot;Echarts问题总结&quot;">​</a></h1><h2 id="屏幕适配问题" tabindex="-1">屏幕适配问题 <a class="header-anchor" href="#屏幕适配问题" aria-label="Permalink to &quot;屏幕适配问题&quot;">​</a></h2><blockquote><p>方案一: 使用<code>scss</code>函数计算比例</p></blockquote><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">//默认设计稿的宽度</span></span>
<span class="line"><span style="color:#F6F6F4;">$designWidth</span><span style="color:#F286C4;">:</span><span style="color:#BF9EEE;">1920</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#7B7F8B;">//默认设计稿的高度</span></span>
<span class="line"><span style="color:#F6F6F4;">$designHeight</span><span style="color:#F286C4;">:</span><span style="color:#BF9EEE;">1080</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">//px转为vw的函数</span></span>
<span class="line"><span style="color:#F286C4;">@function</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">vw</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">$px</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">@return</span><span style="color:#F6F6F4;"> math.</span><span style="color:#97E1F1;">div</span><span style="color:#F6F6F4;">($px , $designWidth) </span><span style="color:#F286C4;">*</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">100</span><span style="color:#F286C4;">vw</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">//px转为vh的函数</span></span>
<span class="line"><span style="color:#F286C4;">@function</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">vh</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">$px</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">@return</span><span style="color:#F6F6F4;"> math.</span><span style="color:#97E1F1;">div</span><span style="color:#F6F6F4;">($px , $designHeight) </span><span style="color:#F286C4;">*</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">100</span><span style="color:#F286C4;">vh</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//默认设计稿的宽度</span></span>
<span class="line"><span style="color:#E36209;">$designWidth</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">1920</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">//默认设计稿的高度</span></span>
<span class="line"><span style="color:#E36209;">$designHeight</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">1080</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//px转为vw的函数</span></span>
<span class="line"><span style="color:#D73A49;">@function</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">vw</span><span style="color:#24292E;">(</span><span style="color:#E36209;">$px</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">@return</span><span style="color:#24292E;"> </span><span style="color:#E36209;">math</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">div</span><span style="color:#24292E;">(</span><span style="color:#E36209;">$px</span><span style="color:#24292E;"> , </span><span style="color:#E36209;">$designWidth</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">vw</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//px转为vh的函数</span></span>
<span class="line"><span style="color:#D73A49;">@function</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">vh</span><span style="color:#24292E;">(</span><span style="color:#E36209;">$px</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">@return</span><span style="color:#24292E;"> </span><span style="color:#E36209;">math</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">div</span><span style="color:#24292E;">(</span><span style="color:#E36209;">$px</span><span style="color:#24292E;"> , </span><span style="color:#E36209;">$designHeight</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">vh</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="左侧菜单折叠响应式" tabindex="-1">左侧菜单折叠响应式 <a class="header-anchor" href="#左侧菜单折叠响应式" aria-label="Permalink to &quot;左侧菜单折叠响应式&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#62E884;">mounted</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#7B7F8B;">// 监听窗口大小,所有echart实例尺寸尺寸改变</span></span>
<span class="line"><span style="color:#F6F6F4;">    window.</span><span style="color:#62E884;">addEventListener</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">resize</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.chartsInstance.</span><span style="color:#62E884;">forEach</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">chart</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">        chart.</span><span style="color:#62E884;">resize</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">      });</span></span>
<span class="line"><span style="color:#F6F6F4;">    });</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//监听div容器的无效</span></span>
<span class="line"><span style="color:#F6F6F4;">   </span><span style="color:#7B7F8B;">/*this.$refs.onlineIspRef.addEventListener(&quot;resize&quot;,() =&gt; {</span></span>
<span class="line"><span style="color:#7B7F8B;">      this.chartsInstance.forEach(chart =&gt; {</span></span>
<span class="line"><span style="color:#7B7F8B;">        chart.resize()</span></span>
<span class="line"><span style="color:#7B7F8B;">      });</span></span>
<span class="line"><span style="color:#7B7F8B;">    })*/</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mounted</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6A737D;">// 监听窗口大小,所有echart实例尺寸尺寸改变</span></span>
<span class="line"><span style="color:#24292E;">    window.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;resize&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.chartsInstance.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">chart</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        chart.</span><span style="color:#6F42C1;">resize</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//监听div容器的无效</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">/*this.$refs.onlineIspRef.addEventListener(&quot;resize&quot;,() =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">      this.chartsInstance.forEach(chart =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">        chart.resize()</span></span>
<span class="line"><span style="color:#6A737D;">      });</span></span>
<span class="line"><span style="color:#6A737D;">    })*/</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p>方案: 侧边栏按钮点击展开/折叠时, 手动触发<code>window.resize</code></p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#62E884;">toggleLeftMenu</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">      Cookies.</span><span style="color:#62E884;">set</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">sidebar</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.leftMenuOpen </span><span style="color:#F286C4;">?</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">close</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">open</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, {path</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">/</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">});</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.$store.</span><span style="color:#62E884;">commit</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">toggleLeftMenu</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, </span><span style="color:#F286C4;">!</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.leftMenuOpen);</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.</span><span style="color:#62E884;">doResize</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#62E884;">doResize</span><span style="color:#F6F6F4;">(){ </span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">setTimeout</span><span style="color:#F6F6F4;">(</span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;">(){</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> ev </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Event</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">resize</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, {</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">bubbles</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">cancelable</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">});</span></span>
<span class="line"><span style="color:#F6F6F4;">          window.</span><span style="color:#62E884;">dispatchEvent</span><span style="color:#F6F6F4;">(ev);</span></span>
<span class="line"><span style="color:#F6F6F4;">      },</span><span style="color:#BF9EEE;">120</span><span style="color:#F6F6F4;">);</span><span style="color:#7B7F8B;">//不使用定时器没反应</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//有效, 而且提示event.initEvent方法已经过时(deprecated)</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//但是折线图左侧收缩/延伸会有抖动问题,需要调节定时器时间使比较不突兀</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">/*setTimeout(function(){</span></span>
<span class="line"><span style="color:#7B7F8B;">      if(document.createEvent) {</span></span>
<span class="line"><span style="color:#7B7F8B;">          var event = document.createEvent(&quot;HTMLEvents&quot;);</span></span>
<span class="line"><span style="color:#7B7F8B;">          event.initEvent(&quot;resize&quot;, true, true);</span></span>
<span class="line"><span style="color:#7B7F8B;">          window.dispatchEvent(event);</span></span>
<span class="line"><span style="color:#7B7F8B;">      } else if(document.createEventObject) {</span></span>
<span class="line"><span style="color:#7B7F8B;">          window.fireEvent(&quot;onresize&quot;);</span></span>
<span class="line"><span style="color:#7B7F8B;">      }</span></span>
<span class="line"><span style="color:#7B7F8B;">  },120);*/</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span></span>
<span class="line"><span style="color:#F6F6F4;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">toggleLeftMenu</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      Cookies.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;sidebar&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.leftMenuOpen </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;close&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;open&#39;</span><span style="color:#24292E;">, {path: </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$store.</span><span style="color:#6F42C1;">commit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;toggleLeftMenu&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">!</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.leftMenuOpen);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">doResize</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6F42C1;">doResize</span><span style="color:#24292E;">(){ </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> ev </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Event</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;resize&quot;</span><span style="color:#24292E;">, {</span><span style="color:#032F62;">&quot;bubbles&quot;</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;cancelable&quot;</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">          window.</span><span style="color:#6F42C1;">dispatchEvent</span><span style="color:#24292E;">(ev);</span></span>
<span class="line"><span style="color:#24292E;">      },</span><span style="color:#005CC5;">120</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">//不使用定时器没反应</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//有效, 而且提示event.initEvent方法已经过时(deprecated)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//但是折线图左侧收缩/延伸会有抖动问题,需要调节定时器时间使比较不突兀</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/*setTimeout(function(){</span></span>
<span class="line"><span style="color:#6A737D;">      if(document.createEvent) {</span></span>
<span class="line"><span style="color:#6A737D;">          var event = document.createEvent(&quot;HTMLEvents&quot;);</span></span>
<span class="line"><span style="color:#6A737D;">          event.initEvent(&quot;resize&quot;, true, true);</span></span>
<span class="line"><span style="color:#6A737D;">          window.dispatchEvent(event);</span></span>
<span class="line"><span style="color:#6A737D;">      } else if(document.createEventObject) {</span></span>
<span class="line"><span style="color:#6A737D;">          window.fireEvent(&quot;onresize&quot;);</span></span>
<span class="line"><span style="color:#6A737D;">      }</span></span>
<span class="line"><span style="color:#6A737D;">  },120);*/</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h2 id="地图缩放重叠问题" tabindex="-1">地图缩放重叠问题 <a class="header-anchor" href="#地图缩放重叠问题" aria-label="Permalink to &quot;地图缩放重叠问题&quot;">​</a></h2><p><img src="https://zerdocs.oss-cn-shanghai.aliyuncs.com/interview/202303291527581.png" alt=""></p><p><a href="https://echarts.apache.org/zh/option.html#series-map.geoIndex" target="_blank" rel="noreferrer">Echart文档参考</a></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">default</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">	geo</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">		roam</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">		map</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">china</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">		aspectScale</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0.75</span><span style="color:#F6F6F4;">,  </span></span>
<span class="line"><span style="color:#F6F6F4;">		zoom</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1.1</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">		itemStyle</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">			normal</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">				shadowColor</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">#ddd</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">				shadowOffsetX</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">				shadowOffsetY</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">			},</span></span>
<span class="line"><span style="color:#F6F6F4;">		},</span></span>
<span class="line"><span style="color:#F6F6F4;">		regions</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">			{</span></span>
<span class="line"><span style="color:#F6F6F4;">				name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">南海诸岛</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">				itemStyle</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">					areaColor</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">rgba(0, 10, 52, 1)</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">					borderColor</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">rgba(0, 10, 52, 1)</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">					normal</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">						opacity</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">						label</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">							show</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">							color</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">#009cc9</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">						},</span></span>
<span class="line"><span style="color:#F6F6F4;">					},</span></span>
<span class="line"><span style="color:#F6F6F4;">				},</span></span>
<span class="line"><span style="color:#F6F6F4;">			},</span></span>
<span class="line"><span style="color:#F6F6F4;">		],</span></span>
<span class="line"><span style="color:#F6F6F4;">	},</span></span>
<span class="line"><span style="color:#F6F6F4;">	series</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">		{</span></span>
<span class="line"><span style="color:#F6F6F4;">			type</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">map</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">			geoIndex</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">, </span><span style="color:#7B7F8B;">//方案一：设置这个属性</span></span>
<span class="line"><span style="color:#F6F6F4;">			label</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">				normal</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">					show</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">					textStyle</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">						color</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">#666</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">					},</span></span>
<span class="line"><span style="color:#F6F6F4;">				},</span></span>
<span class="line"><span style="color:#F6F6F4;">				emphasis</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">					textStyle</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">						color</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">#fff</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,  </span></span>
<span class="line"><span style="color:#F6F6F4;">					},</span></span>
<span class="line"><span style="color:#F6F6F4;">				},</span></span>
<span class="line"><span style="color:#F6F6F4;">			},</span></span>
<span class="line"><span style="color:#F6F6F4;">			itemStyle</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">				normal</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">					borderType</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">dashed</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">				},</span></span>
<span class="line"><span style="color:#F6F6F4;">				emphasis</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">					areaColor</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">#3777DD</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">					borderWidth</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0.1</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">				},</span></span>
<span class="line"><span style="color:#F6F6F4;">			},</span></span>
<span class="line"><span style="color:#F6F6F4;">			zoom</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1.1</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">			map</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">china</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#7B7F8B;">// //方案二：删除这个属性</span></span>
<span class="line"><span style="color:#F6F6F4;">		},</span></span>
<span class="line"><span style="color:#F6F6F4;">	],</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	geo: {</span></span>
<span class="line"><span style="color:#24292E;">		roam: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		map: </span><span style="color:#032F62;">&quot;china&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		aspectScale: </span><span style="color:#005CC5;">0.75</span><span style="color:#24292E;">,  </span></span>
<span class="line"><span style="color:#24292E;">		zoom: </span><span style="color:#005CC5;">1.1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">			normal: {</span></span>
<span class="line"><span style="color:#24292E;">				shadowColor: </span><span style="color:#032F62;">&quot;#ddd&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				shadowOffsetX: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				shadowOffsetY: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			},</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">		regions: [</span></span>
<span class="line"><span style="color:#24292E;">			{</span></span>
<span class="line"><span style="color:#24292E;">				name: </span><span style="color:#032F62;">&quot;南海诸岛&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">					areaColor: </span><span style="color:#032F62;">&quot;rgba(0, 10, 52, 1)&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">					borderColor: </span><span style="color:#032F62;">&quot;rgba(0, 10, 52, 1)&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">					normal: {</span></span>
<span class="line"><span style="color:#24292E;">						opacity: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">						label: {</span></span>
<span class="line"><span style="color:#24292E;">							show: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">							color: </span><span style="color:#032F62;">&quot;#009cc9&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">						},</span></span>
<span class="line"><span style="color:#24292E;">					},</span></span>
<span class="line"><span style="color:#24292E;">				},</span></span>
<span class="line"><span style="color:#24292E;">			},</span></span>
<span class="line"><span style="color:#24292E;">		],</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">	series: [</span></span>
<span class="line"><span style="color:#24292E;">		{</span></span>
<span class="line"><span style="color:#24292E;">			type: </span><span style="color:#032F62;">&quot;map&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			geoIndex: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//方案一：设置这个属性</span></span>
<span class="line"><span style="color:#24292E;">			label: {</span></span>
<span class="line"><span style="color:#24292E;">				normal: {</span></span>
<span class="line"><span style="color:#24292E;">					show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">					textStyle: {</span></span>
<span class="line"><span style="color:#24292E;">						color: </span><span style="color:#032F62;">&quot;#666&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">					},</span></span>
<span class="line"><span style="color:#24292E;">				},</span></span>
<span class="line"><span style="color:#24292E;">				emphasis: {</span></span>
<span class="line"><span style="color:#24292E;">					textStyle: {</span></span>
<span class="line"><span style="color:#24292E;">						color: </span><span style="color:#032F62;">&quot;#fff&quot;</span><span style="color:#24292E;">,  </span></span>
<span class="line"><span style="color:#24292E;">					},</span></span>
<span class="line"><span style="color:#24292E;">				},</span></span>
<span class="line"><span style="color:#24292E;">			},</span></span>
<span class="line"><span style="color:#24292E;">			itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">				normal: {</span></span>
<span class="line"><span style="color:#24292E;">					borderType: </span><span style="color:#032F62;">&quot;dashed&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				},</span></span>
<span class="line"><span style="color:#24292E;">				emphasis: {</span></span>
<span class="line"><span style="color:#24292E;">					areaColor: </span><span style="color:#032F62;">&quot;#3777DD&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">					borderWidth: </span><span style="color:#005CC5;">0.1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				},</span></span>
<span class="line"><span style="color:#24292E;">			},</span></span>
<span class="line"><span style="color:#24292E;">			zoom: </span><span style="color:#005CC5;">1.1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			map: </span><span style="color:#032F62;">&quot;china&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// //方案二：删除这个属性</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">	],</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,12),t=[o];function e(c,r,F,y,i,E){return n(),a("div",null,t)}const C=s(p,[["render",e]]);export{u as __pageData,C as default};
