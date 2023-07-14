import{_ as s,o as n,c as a,V as l}from"./chunks/framework.c6d8cbec.js";const p="/docs/img/echart-line.png",m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/graph/Echarts子弹图一维.md","filePath":"frontend/graph/Echarts子弹图一维.md"}'),o={name:"frontend/graph/Echarts子弹图一维.md"},e=l('<h2 id="子弹图一维" tabindex="-1">子弹图一维 <a class="header-anchor" href="#子弹图一维" aria-label="Permalink to &quot;子弹图一维&quot;">​</a></h2><img src="'+p+`"><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> line11Engine </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">EchartLine</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">    container</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> line1.value,</span></span>
<span class="line"><span style="color:#F6F6F4;">    xAxisName</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">北斗(GHz)</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    seriesData</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [[</span><span style="color:#BF9EEE;">0.5</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">0.5</span><span style="color:#F6F6F4;">], [</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">0.5</span><span style="color:#F6F6F4;">], </span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">, [</span><span style="color:#BF9EEE;">2.5</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">0.5</span><span style="color:#F6F6F4;">], [</span><span style="color:#BF9EEE;">4</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">0.5</span><span style="color:#F6F6F4;">]]</span></span>
<span class="line"><span style="color:#F6F6F4;">  })</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">line11Engine</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EchartLine</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    container: line1.value,</span></span>
<span class="line"><span style="color:#24292E;">    xAxisName: </span><span style="color:#032F62;">&#39;北斗(GHz)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    seriesData: [[</span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;">], [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;">], </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, [</span><span style="color:#005CC5;">2.5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;">], [</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;">]]</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">*</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">as</span><span style="color:#F6F6F4;"> echarts </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">echarts/core</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> { GridComponent } </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">echarts/components</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> { LineChart } </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">echarts/charts</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> { UniversalTransition } </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">echarts/features</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> { CanvasRenderer } </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">echarts/renderers</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">echarts.</span><span style="color:#62E884;">use</span><span style="color:#F6F6F4;">([GridComponent, LineChart, CanvasRenderer, UniversalTransition])</span></span>
<span class="line"><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">default</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">EchartLine</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">constructor</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">opt</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.myChart </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> echarts.</span><span style="color:#62E884;">init</span><span style="color:#F6F6F4;">(opt.container)</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.xAxisName </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> opt.xAxisName</span></span>
<span class="line"><span style="color:#F6F6F4;">    opt.seriesColor </span><span style="color:#F286C4;">&amp;&amp;</span><span style="color:#F6F6F4;"> (</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.seriesColor </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> opt.seriesColor)</span></span>
<span class="line"><span style="color:#F6F6F4;">    opt.seriesData </span><span style="color:#F286C4;">&amp;&amp;</span><span style="color:#F6F6F4;"> (</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.seriesData </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> opt.seriesData)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.</span><span style="color:#62E884;">setOptions</span><span style="color:#F6F6F4;">(opt.container)</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  xAxisName </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">  seriesColor </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">#24b035</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">  seriesData </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [[</span><span style="color:#BF9EEE;">0.5</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">0.5</span><span style="color:#F6F6F4;">], [</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">0.5</span><span style="color:#F6F6F4;">], </span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">, [</span><span style="color:#BF9EEE;">2.5</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">0.5</span><span style="color:#F6F6F4;">], [</span><span style="color:#BF9EEE;">4</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">0.5</span><span style="color:#F6F6F4;">]]</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">setOptions</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">container</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> containerRect </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> container.</span><span style="color:#62E884;">getBoundingClientRect</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 设置宽度 保证刻度的长度一致</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 获取多维数组的最大值</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> maxValue </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> Math.max.</span><span style="color:#62E884;">apply</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.seriesData.</span><span style="color:#62E884;">flat</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">Infinity</span><span style="color:#F6F6F4;">))</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> option </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">      height</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">50</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      width</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> Math.</span><span style="color:#62E884;">max</span><span style="color:#F6F6F4;">(maxValue </span><span style="color:#F286C4;">*</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">80</span><span style="color:#F6F6F4;">, Math.</span><span style="color:#62E884;">ceil</span><span style="color:#F6F6F4;">(containerRect.width)),</span></span>
<span class="line"><span style="color:#F6F6F4;">      grid</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">        top</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">10</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        bottom</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        containLabel</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        left</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">100</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        right</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span></span>
<span class="line"><span style="color:#F6F6F4;">      },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">      xAxis</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">        type</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">value</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        name</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.xAxisName,</span></span>
<span class="line"><span style="color:#F6F6F4;">        nameLocation</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">start</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        nameTextStyle</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">          color</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">#ffffff</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          height</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">50</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          verticalAlign</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">bottom</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          lineHeight</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">50</span></span>
<span class="line"><span style="color:#F6F6F4;">        },</span></span>
<span class="line"><span style="color:#F6F6F4;">        boundaryGap</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        min</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        max</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> Math.</span><span style="color:#62E884;">max</span><span style="color:#F6F6F4;">(maxValue, Math.</span><span style="color:#62E884;">ceil</span><span style="color:#F6F6F4;">(containerRect.width) </span><span style="color:#F286C4;">/</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">80</span><span style="color:#F6F6F4;">),</span></span>
<span class="line"><span style="color:#F6F6F4;">        interval</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        axisTick</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">          inside</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span></span>
<span class="line"><span style="color:#F6F6F4;">        },</span></span>
<span class="line"><span style="color:#F6F6F4;">        axisLine</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">          lineStyle</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">            color</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">#ffffff</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">          }</span></span>
<span class="line"><span style="color:#F6F6F4;">        },</span></span>
<span class="line"><span style="color:#F6F6F4;">        splitLine</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">          show</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">      },</span></span>
<span class="line"><span style="color:#F6F6F4;">      yAxis</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">        type</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">value</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        max</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        min</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        splitNumber</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        axisLabel</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">          show</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span></span>
<span class="line"><span style="color:#F6F6F4;">        },</span></span>
<span class="line"><span style="color:#F6F6F4;">        axisLine</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">          show</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span></span>
<span class="line"><span style="color:#F6F6F4;">        },</span></span>
<span class="line"><span style="color:#F6F6F4;">        axisTick</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">          show</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span></span>
<span class="line"><span style="color:#F6F6F4;">        },</span></span>
<span class="line"><span style="color:#F6F6F4;">        splitLine</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">          show</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">      },</span></span>
<span class="line"><span style="color:#F6F6F4;">      series</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">        {</span></span>
<span class="line"><span style="color:#F6F6F4;">          data</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.seriesData,</span></span>
<span class="line"><span style="color:#F6F6F4;">          type</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">line</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          lineStyle</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">            width</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">20</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">            color</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.seriesColor</span></span>
<span class="line"><span style="color:#F6F6F4;">          },</span></span>
<span class="line"><span style="color:#F6F6F4;">          symbolSize</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0.1</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">          label</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">            normal</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">              </span><span style="color:#62E884;">formatter</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">a</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">                </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> a.data[</span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">]</span></span>
<span class="line"><span style="color:#F6F6F4;">              },</span></span>
<span class="line"><span style="color:#F6F6F4;">              color</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">#ffffff</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">              show</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">              position</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">top</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">              distance</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">10</span></span>
<span class="line"><span style="color:#F6F6F4;">            }</span></span>
<span class="line"><span style="color:#F6F6F4;">          },</span></span>
<span class="line"><span style="color:#F6F6F4;">          smooth</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">      ]</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.myChart.</span><span style="color:#62E884;">setOption</span><span style="color:#F6F6F4;">(option)</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">resize</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.myChart.</span><span style="color:#62E884;">resize</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> echarts </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;echarts/core&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { GridComponent } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;echarts/components&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { LineChart } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;echarts/charts&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { UniversalTransition } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;echarts/features&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { CanvasRenderer } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;echarts/renderers&#39;</span></span>
<span class="line"><span style="color:#24292E;">echarts.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">([GridComponent, LineChart, CanvasRenderer, UniversalTransition])</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EchartLine</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">opt</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.myChart </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> echarts.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(opt.container)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.xAxisName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> opt.xAxisName</span></span>
<span class="line"><span style="color:#24292E;">    opt.seriesColor </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.seriesColor </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> opt.seriesColor)</span></span>
<span class="line"><span style="color:#24292E;">    opt.seriesData </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.seriesData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> opt.seriesData)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">setOptions</span><span style="color:#24292E;">(opt.container)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">xAxisName</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">seriesColor</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;#24b035&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">seriesData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [[</span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;">], [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;">], </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, [</span><span style="color:#005CC5;">2.5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;">], [</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;">]]</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setOptions</span><span style="color:#24292E;">(</span><span style="color:#E36209;">container</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">containerRect</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> container.</span><span style="color:#6F42C1;">getBoundingClientRect</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 设置宽度 保证刻度的长度一致</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 获取多维数组的最大值</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">maxValue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Math.max.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.seriesData.</span><span style="color:#6F42C1;">flat</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">Infinity</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">option</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      height: </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      width: Math.</span><span style="color:#6F42C1;">max</span><span style="color:#24292E;">(maxValue </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">, Math.</span><span style="color:#6F42C1;">ceil</span><span style="color:#24292E;">(containerRect.width)),</span></span>
<span class="line"><span style="color:#24292E;">      grid: {</span></span>
<span class="line"><span style="color:#24292E;">        top: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        bottom: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        containLabel: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        left: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        right: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      xAxis: {</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;value&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.xAxisName,</span></span>
<span class="line"><span style="color:#24292E;">        nameLocation: </span><span style="color:#032F62;">&#39;start&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        nameTextStyle: {</span></span>
<span class="line"><span style="color:#24292E;">          color: </span><span style="color:#032F62;">&#39;#ffffff&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          height: </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          verticalAlign: </span><span style="color:#032F62;">&#39;bottom&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          lineHeight: </span><span style="color:#005CC5;">50</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        boundaryGap: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        min: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        max: Math.</span><span style="color:#6F42C1;">max</span><span style="color:#24292E;">(maxValue, Math.</span><span style="color:#6F42C1;">ceil</span><span style="color:#24292E;">(containerRect.width) </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        interval: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        axisTick: {</span></span>
<span class="line"><span style="color:#24292E;">          inside: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        axisLine: {</span></span>
<span class="line"><span style="color:#24292E;">          lineStyle: {</span></span>
<span class="line"><span style="color:#24292E;">            color: </span><span style="color:#032F62;">&#39;#ffffff&#39;</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        splitLine: {</span></span>
<span class="line"><span style="color:#24292E;">          show: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      yAxis: {</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;value&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        max: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        min: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        splitNumber: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        axisLabel: {</span></span>
<span class="line"><span style="color:#24292E;">          show: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        axisLine: {</span></span>
<span class="line"><span style="color:#24292E;">          show: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        axisTick: {</span></span>
<span class="line"><span style="color:#24292E;">          show: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        splitLine: {</span></span>
<span class="line"><span style="color:#24292E;">          show: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      series: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          data: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.seriesData,</span></span>
<span class="line"><span style="color:#24292E;">          type: </span><span style="color:#032F62;">&#39;line&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          lineStyle: {</span></span>
<span class="line"><span style="color:#24292E;">            width: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            color: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.seriesColor</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          symbolSize: </span><span style="color:#005CC5;">0.1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          label: {</span></span>
<span class="line"><span style="color:#24292E;">            normal: {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">formatter</span><span style="color:#24292E;">: </span><span style="color:#E36209;">a</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> a.data[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">              color: </span><span style="color:#032F62;">&#39;#ffffff&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              position: </span><span style="color:#032F62;">&#39;top&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              distance: </span><span style="color:#005CC5;">10</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          smooth: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.myChart.</span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">(option)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">resize</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.myChart.</span><span style="color:#6F42C1;">resize</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,4),c=[e];function t(r,F,y,E,i,C){return n(),a("div",null,c)}const f=s(o,[["render",t]]);export{m as __pageData,f as default};
