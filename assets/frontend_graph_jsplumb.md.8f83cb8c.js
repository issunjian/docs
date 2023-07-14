import{_ as s,o as n,c as a,V as l}from"./chunks/framework.c6d8cbec.js";const e="/docs/assets/20180227184229_wKfyUd_jsPlumb_Diagram_Example.df609d52.jpeg",p="/docs/assets/20180227151857_Pu4O9c_jsPlumb-Connector-Components.99ad6a65.jpeg",o="/docs/assets/20180415224517_SK0PUc_Jietu20180415-224454.0752c932.jpeg",t="/docs/assets/20180227191655_GOJLi1_Jietu20180227-191647.b2e35871.jpeg",c="/docs/assets/20180227192135_1AWJH6_Jietu20180227-192120.e23a0000.jpeg",r="/docs/assets/20180227192811_AA9fXd_Jietu20180227-192758.a8a59882.jpeg",i="/docs/assets/20180227193801_OejsPz_Jietu20180227-193752.bdf775fd.jpeg",d="/docs/assets/20180227193308_wYaELY_Jietu20180227-193254.81deaded.jpeg",y="/docs/assets/20180227193546_yg6Z4L_Jietu20180227-193527.264b81f2.jpeg",f="/docs/assets/20180227194136_zIlkwP_Jietu20180227-194127.770044c4.jpeg",u="/docs/assets/20180227195351_B18Pal_Jietu20180227-195338.03f38760.jpeg",h="/docs/assets/20180227195859_fFawMs_Jietu20180227-195844.e31e6270.jpeg",m="/docs/assets/20180227200100_wEX1FU_Jietu20180227-200047.6bef0689.jpeg",b="/docs/assets/20180713130405_UnzvUT_Jietu20180713-130335.89fc7839.jpeg",g="/docs/assets/20180713131254_dLSYLW_Jietu20180713-131238.7700d590.jpeg",F="/docs/assets/20180713132452_xkiWxs_Jietu20180713-132430.6fcf5104.jpeg",E="/docs/assets/20180713133303_xif4MK_Screenshot.052d3cb7.jpeg",v="/docs/assets/20181023204322_QVz4Cm_Jietu20181023-204022.9082b5a1.jpeg",j="/docs/assets/20181023204336_p2KxaX_Jietu20181023-204054.42700063.jpeg",q="/docs/assets/20181023210318_r0MaTA_Jietu20181023-210309.093f99ba.jpeg",_="/docs/assets/20181015195143_kNd9Sd_Jietu20181015-194116.d4bb0005.jpeg",k="/docs/assets/20180509225507_aRk1UV_Jietu20180509-225433.3a371a90.jpeg",P="/docs/assets/Jietu20190620-133950.f78ab46b.jpg",C="/docs/assets/Jietu20181226-123854.5a53d0c9.jpg",D="/docs/assets/20180628154158_hryb52_Jietu20180628-153918.d5124ba5.jpeg",w="/docs/assets/20180611171335_XWq41h_Jietu20180611-171327.82c684b3.jpeg",x="/docs/assets/20180611171125_1LBQdG_Jietu20180611-171117.f2e942f5.jpeg",S="/docs/assets/20180611171745_mwZc75_Jietu20180611-171731.ad8dc851.jpeg",A="/docs/assets/20180611171213_XS3vL4_Jietu20180611-171206.0ad02562.jpeg",B="/docs/assets/20180626102133_EAJjjY_Jietu20180626-102115.00730c8c.jpeg",O="/docs/assets/20180626102608_hCABQQ_summary.96979781.jpeg",z="/docs/assets/20180626102646_RPHmnl_example5.8942f476.jpeg",I="/docs/assets/20180626102701_S66sli_petrol.0cb1d638.jpeg",R="/docs/assets/20180626102715_wPb7pW_dfd2.e6288d52.jpeg",J="/docs/assets/20180816163348_S3yJbT_Jietu20180816-163228.833b3b8c.jpeg",X=JSON.parse('{"title":"1. jsplumb 中文基础教程","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/graph/jsplumb.md","filePath":"frontend/graph/jsplumb.md"}'),L={name:"frontend/graph/jsplumb.md"},T=l('<h1 id="_1-jsplumb-中文基础教程" tabindex="-1">1. jsplumb 中文基础教程 <a class="header-anchor" href="#_1-jsplumb-中文基础教程" aria-label="Permalink to &quot;1. jsplumb 中文基础教程&quot;">​</a></h1><p>后续更新会在仓库：<a href="https://github.com/wangduanduan/jsplumb-chinese-tutorial.git" target="_blank" rel="noreferrer">https://github.com/wangduanduan/jsplumb-chinese-tutorial.git</a></p><blockquote><p>阅读建议：由于本教程目录太多，建议安装谷歌浏览器插件<a href="https://chrome.google.com/webstore/detail/smart-toc/lifgeihcfpkmmlfjbailfpfhbahhibba" target="_blank" rel="noreferrer">Smart TOC</a>，方便目录按照目录跳转查看。</p></blockquote><h2 id="_1-1-什么是jsplumb" tabindex="-1">1.1. 什么是jsplumb？ <a class="header-anchor" href="#_1-1-什么是jsplumb" aria-label="Permalink to &quot;1.1. 什么是jsplumb？&quot;">​</a></h2><p>你有没有想过在你的网站上展示图表或者甚至在浏览器应用程序中使用它？用jsPlumb你可以！它是完全免费的，并根据MIT许可证提供。您可以直接从jsPlumb github网站下载框架。</p><p>该项目主要由Simon Porritt开发，他在澳大利亚西德尼担任网络开发人员。 jsPlumb由他积极开发。作为许多优秀的开发人员，他似乎更喜欢开发代码而不是编写教程，这就是为什么我提供一个简单的入门教程。</p><p><img src="'+e+'" alt=""></p><h2 id="_1-2-jsplumb能干什么" tabindex="-1">1.2. jsplumb能干什么？ <a class="header-anchor" href="#_1-2-jsplumb能干什么" aria-label="Permalink to &quot;1.2. jsplumb能干什么？&quot;">​</a></h2><p>那么如果你应该使用它取决于你想用jsPlumb做什么。该框架适用于必须绘制图表的Web应用程序，例如类似于Visio的应用程序或工作流程设计器等。由于图表项目和连接的所有参数都是非常精细可控的，因此您可以绘制您可以想到的任何类型的图表的！</p><h2 id="_1-3-基本概念" tabindex="-1">1.3. 基本概念 <a class="header-anchor" href="#_1-3-基本概念" aria-label="Permalink to &quot;1.3. 基本概念&quot;">​</a></h2><ul><li>Souce 源节点</li><li>Target 目标节点</li><li>Anchor 锚点 锚点位于源节点或者目标节点上</li><li>Endpoint 端点 端点位于连线上</li><li>Connector 连接 或者也可以理解是连接线</li><li>Overlays 可以理解为在连接线上的文字或者箭头之类的东东</li></ul><p><img src="'+p+`" alt=""></p><h3 id="_1-3-1-anchors-todo" tabindex="-1">1.3.1. Anchors [todo] <a class="header-anchor" href="#_1-3-1-anchors-todo" aria-label="Permalink to &quot;1.3.1. Anchors [todo]&quot;">​</a></h3><p>锚点类型：</p><ul><li>静态锚点</li><li>动态锚点</li><li>边缘锚点</li><li>固定锚点</li></ul><h3 id="_1-3-2-connectors-todo" tabindex="-1">1.3.2. Connectors [todo] <a class="header-anchor" href="#_1-3-2-connectors-todo" aria-label="Permalink to &quot;1.3.2. Connectors [todo]&quot;">​</a></h3><p>连线类型：</p><ul><li>Bezier 贝塞尔曲线</li><li>Straight 直线</li><li>Flowchart 90度转角线</li><li>State Machine 状态机</li></ul><h3 id="_1-3-3-endpoints-todo" tabindex="-1">1.3.3. Endpoints [todo] <a class="header-anchor" href="#_1-3-3-endpoints-todo" aria-label="Permalink to &quot;1.3.3. Endpoints [todo]&quot;">​</a></h3><p>端点类型:</p><ul><li>Dot 圆点</li><li>Rectangle 矩形</li><li>Image 图像</li><li>Blank 空白</li></ul><h3 id="_1-3-4-overlays-todo" tabindex="-1">1.3.4. Overlays [todo] <a class="header-anchor" href="#_1-3-4-overlays-todo" aria-label="Permalink to &quot;1.3.4. Overlays [todo]&quot;">​</a></h3><p>Overlays可以理解为在连接线上的文字或者箭头之类的东东</p><p>Overlays类型</p><ul><li>Arrow</li><li>Label</li><li>PlainArrow</li><li>Diamond</li><li>Custom</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">// 连线上overlay可以多个，</span></span>
<span class="line"><span style="color:#7B7F8B;">// 每个overlay可以指定相对位置</span></span>
<span class="line"><span style="color:#7B7F8B;">// label类型的overlay实际上可以在里面直接写html</span></span>
<span class="line"><span style="color:#7B7F8B;">// </span></span>
<span class="line"><span style="color:#F6F6F4;">jsPlumb.</span><span style="color:#62E884;">connect</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">...</span></span>
<span class="line"><span style="color:#F6F6F4;">  connectorOverlays: [</span></span>
<span class="line"><span style="color:#F6F6F4;">    [</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">Arrow</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, {</span></span>
<span class="line"><span style="color:#F6F6F4;">      width</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">10</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      length</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">10</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      location</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span></span>
<span class="line"><span style="color:#F6F6F4;">    }],</span></span>
<span class="line"><span style="color:#F6F6F4;">    [</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">Label</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, {</span></span>
<span class="line"><span style="color:#F6F6F4;">      label</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">&lt;button class=&quot;delete-node-btn&quot;&gt;X&lt;/button&gt;</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      cssClass</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      labelStyle</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">        color</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">red</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">      },</span></span>
<span class="line"><span style="color:#F6F6F4;">      events</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#62E884;">click</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">labelOverlay</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">originalEvent</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">          console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">click on label overlay for :</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> labelOverlay.component)</span></span>
<span class="line"><span style="color:#F6F6F4;">          console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(labelOverlay)</span></span>
<span class="line"><span style="color:#F6F6F4;">          console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(originalEvent)</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">      }</span></span>
<span class="line"><span style="color:#F6F6F4;">    }]</span></span>
<span class="line"><span style="color:#F6F6F4;">  ]</span></span>
<span class="line"><span style="color:#F6F6F4;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 连线上overlay可以多个，</span></span>
<span class="line"><span style="color:#6A737D;">// 每个overlay可以指定相对位置</span></span>
<span class="line"><span style="color:#6A737D;">// label类型的overlay实际上可以在里面直接写html</span></span>
<span class="line"><span style="color:#6A737D;">// </span></span>
<span class="line"><span style="color:#24292E;">jsPlumb.</span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">  connectorOverlays: [</span></span>
<span class="line"><span style="color:#24292E;">    [</span><span style="color:#032F62;">&#39;Arrow&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">      width: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      length: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      location: </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">    }],</span></span>
<span class="line"><span style="color:#24292E;">    [</span><span style="color:#032F62;">&#39;Label&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&#39;&lt;button class=&quot;delete-node-btn&quot;&gt;X&lt;/button&gt;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      cssClass: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      labelStyle: {</span></span>
<span class="line"><span style="color:#24292E;">        color: </span><span style="color:#032F62;">&#39;red&#39;</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      events: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">click</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">labelOverlay</span><span style="color:#24292E;">, </span><span style="color:#E36209;">originalEvent</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">          console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;click on label overlay for :&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> labelOverlay.component)</span></span>
<span class="line"><span style="color:#24292E;">          console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(labelOverlay)</span></span>
<span class="line"><span style="color:#24292E;">          console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(originalEvent)</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }]</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h3 id="_1-3-5-groups-todo" tabindex="-1">1.3.5. Groups [todo] <a class="header-anchor" href="#_1-3-5-groups-todo" aria-label="Permalink to &quot;1.3.5. Groups [todo]&quot;">​</a></h3><h2 id="_1-4-样式设置-todo" tabindex="-1">1.4. 样式设置 [todo] <a class="header-anchor" href="#_1-4-样式设置-todo" aria-label="Permalink to &quot;1.4. 样式设置 [todo]&quot;">​</a></h2><h1 id="_2-基础demos" tabindex="-1">2. 基础demos <a class="header-anchor" href="#_2-基础demos" aria-label="Permalink to &quot;2. 基础demos&quot;">​</a></h1><h2 id="_2-1-连接两个节点" tabindex="-1">2.1. 连接两个节点 <a class="header-anchor" href="#_2-1-连接两个节点" aria-label="Permalink to &quot;2.1. 连接两个节点&quot;">​</a></h2><p>demo: <a href="https://wdd.js.org/jsplumb-chinese-tutorial/demos/01.html" target="_blank" rel="noreferrer">https://wdd.js.org/jsplumb-chinese-tutorial/demos/01.html</a></p><p>jsPlumb.ready方法和jquery的ready方法差不多的功能，jsPlumb.connect用于建立连线</p><p><img src="`+o+`" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;div id=&quot;diagramContainer&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;div id=&quot;item_left&quot; class=&quot;item&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;div id=&quot;item_right&quot; class=&quot;item&quot; style=&quot;margin-left:50px;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;script src=&quot;https://cdn.bootcss.com/jsPlumb/2.6.8/js/jsplumb.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    /* global jsPlumb */</span></span>
<span class="line"><span style="color:#f6f6f4;">    jsPlumb.ready(function () {</span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.connect({</span></span>
<span class="line"><span style="color:#f6f6f4;">        source: &#39;item_left&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">        target: &#39;item_right&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">        endpoint: &#39;Dot&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">      })</span></span>
<span class="line"><span style="color:#f6f6f4;">    })</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div id=&quot;diagramContainer&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div id=&quot;item_left&quot; class=&quot;item&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div id=&quot;item_right&quot; class=&quot;item&quot; style=&quot;margin-left:50px;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;script src=&quot;https://cdn.bootcss.com/jsPlumb/2.6.8/js/jsplumb.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">    /* global jsPlumb */</span></span>
<span class="line"><span style="color:#24292e;">    jsPlumb.ready(function () {</span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.connect({</span></span>
<span class="line"><span style="color:#24292e;">        source: &#39;item_left&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        target: &#39;item_right&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        endpoint: &#39;Dot&#39;</span></span>
<span class="line"><span style="color:#24292e;">      })</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/script&gt;</span></span></code></pre></div><p>参数说明： jsPlumb.connect(config) return connection</p><table><thead><tr><th>参数</th><th>参数类型</th><th>是否必须</th><th>说明</th></tr></thead><tbody><tr><td>source</td><td>String,Object,Endpoint</td><td>是</td><td>连线源的标识，可以是id, element, 或者Endpoint</td></tr><tr><td>target</td><td>String,Object,Endpoint</td><td>是</td><td>连线目标的标识，可以是id, element, 或者Endpoint</td></tr><tr><td>endpoint</td><td>String</td><td>可选</td><td>端点类型，形状</td></tr></tbody></table><p><a href="https://github.com/jsplumb/jsplumb/blob/da6688b86fbfba621bf3685e4431a4d9be7213b4/doc/api/jsplumb-api.js#L76" target="_blank" rel="noreferrer">&gt;&gt;&gt; connect方法详情</a></p><h2 id="_2-2-可拖动节点" tabindex="-1">2.2. 可拖动节点 <a class="header-anchor" href="#_2-2-可拖动节点" aria-label="Permalink to &quot;2.2. 可拖动节点&quot;">​</a></h2><p>demo: <a href="https://wdd.js.org/jsplumb-chinese-tutorial/demos/02.html" target="_blank" rel="noreferrer">https://wdd.js.org/jsplumb-chinese-tutorial/demos/02.html</a></p><p>使用draggable可以让节点被拖动，<a href="https://github.com/jsplumb/jsplumb/blob/da6688b86fbfba621bf3685e4431a4d9be7213b4/doc/api/jsplumb-api.js#L690" target="_blank" rel="noreferrer">draggable方法参考</a></p><p><img src="`+t+`" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;div id=&quot;diagramContainer&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;div id=&quot;item_left&quot; class=&quot;item&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;div id=&quot;item_right&quot; class=&quot;item&quot; style=&quot;left:150px;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;script src=&quot;https://cdn.bootcss.com/jsPlumb/2.6.8/js/jsplumb.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    /* global jsPlumb */</span></span>
<span class="line"><span style="color:#f6f6f4;">    jsPlumb.ready(function () {</span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.connect({</span></span>
<span class="line"><span style="color:#f6f6f4;">        source: &#39;item_left&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">        target: &#39;item_right&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">        endpoint: &#39;Rectangle&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">      })</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.draggable(&#39;item_left&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.draggable(&#39;item_right&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">    })</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div id=&quot;diagramContainer&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div id=&quot;item_left&quot; class=&quot;item&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div id=&quot;item_right&quot; class=&quot;item&quot; style=&quot;left:150px;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;script src=&quot;https://cdn.bootcss.com/jsPlumb/2.6.8/js/jsplumb.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">    /* global jsPlumb */</span></span>
<span class="line"><span style="color:#24292e;">    jsPlumb.ready(function () {</span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.connect({</span></span>
<span class="line"><span style="color:#24292e;">        source: &#39;item_left&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        target: &#39;item_right&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        endpoint: &#39;Rectangle&#39;</span></span>
<span class="line"><span style="color:#24292e;">      })</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.draggable(&#39;item_left&#39;)</span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.draggable(&#39;item_right&#39;)</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/script&gt;</span></span></code></pre></div><h2 id="_2-3-连接的其他参数" tabindex="-1">2.3. 连接的其他参数 <a class="header-anchor" href="#_2-3-连接的其他参数" aria-label="Permalink to &quot;2.3. 连接的其他参数&quot;">​</a></h2><p>demo: <a href="https://wdd.js.org/jsplumb-chinese-tutorial/demos/03.html" target="_blank" rel="noreferrer">https://wdd.js.org/jsplumb-chinese-tutorial/demos/03.html</a></p><p>可以通过connector去设置连接线的形状，如直线或者曲线之类的。anchor可以去设置锚点的位置。</p><p>jsplumb连线的样式有四种</p><ul><li><code>Bezier</code>: 贝塞尔曲线</li><li><code>Flowchart</code>: 具有90度转折点的流程线</li><li><code>StateMachine</code>: 状态机</li><li><code>Straight</code>: 直线</li></ul><p><img src="`+c+`" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;div id=&quot;diagramContainer&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;div id=&quot;item_left&quot; class=&quot;item&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;div id=&quot;item_right&quot; class=&quot;item&quot; style=&quot;left:150px;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;script src=&quot;https://cdn.bootcss.com/jsPlumb/2.6.8/js/jsplumb.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    /* global jsPlumb */</span></span>
<span class="line"><span style="color:#f6f6f4;">    jsPlumb.ready(function () {</span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.connect({</span></span>
<span class="line"><span style="color:#f6f6f4;">        source: &#39;item_left&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">        target: &#39;item_right&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">        endpoint: &#39;Rectangle&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">        connector: [&#39;Bezier&#39;],</span></span>
<span class="line"><span style="color:#f6f6f4;">        anchor: [&#39;Left&#39;, &#39;Right&#39;]</span></span>
<span class="line"><span style="color:#f6f6f4;">      })</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.draggable(&#39;item_left&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.draggable(&#39;item_right&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">    })</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div id=&quot;diagramContainer&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div id=&quot;item_left&quot; class=&quot;item&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div id=&quot;item_right&quot; class=&quot;item&quot; style=&quot;left:150px;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;script src=&quot;https://cdn.bootcss.com/jsPlumb/2.6.8/js/jsplumb.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">    /* global jsPlumb */</span></span>
<span class="line"><span style="color:#24292e;">    jsPlumb.ready(function () {</span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.connect({</span></span>
<span class="line"><span style="color:#24292e;">        source: &#39;item_left&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        target: &#39;item_right&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        endpoint: &#39;Rectangle&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        connector: [&#39;Bezier&#39;],</span></span>
<span class="line"><span style="color:#24292e;">        anchor: [&#39;Left&#39;, &#39;Right&#39;]</span></span>
<span class="line"><span style="color:#24292e;">      })</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.draggable(&#39;item_left&#39;)</span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.draggable(&#39;item_right&#39;)</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/script&gt;</span></span></code></pre></div><h2 id="_2-4-设置连接的默认值" tabindex="-1">2.4. 设置连接的默认值 <a class="header-anchor" href="#_2-4-设置连接的默认值" aria-label="Permalink to &quot;2.4. 设置连接的默认值&quot;">​</a></h2><p>demo: <a href="https://wdd.js.org/jsplumb-chinese-tutorial/demos/04.html" target="_blank" rel="noreferrer">https://wdd.js.org/jsplumb-chinese-tutorial/demos/04.html</a></p><p>很多连线都是相同设置的情况下，可以将配置抽离出来，作为一个单独的变量，作为connect的第二个参数传入。实际上connect的第二个参数会和第一个参数merge，作为一个整体。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    /* global jsPlumb */</span></span>
<span class="line"><span style="color:#f6f6f4;">    jsPlumb.ready(function () {</span></span>
<span class="line"><span style="color:#f6f6f4;">      var common = {</span></span>
<span class="line"><span style="color:#f6f6f4;">        endpoint: &#39;Rectangle&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">        connector: [&#39;Bezier&#39;],</span></span>
<span class="line"><span style="color:#f6f6f4;">        anchor: [&#39;Left&#39;, &#39;Right&#39;]</span></span>
<span class="line"><span style="color:#f6f6f4;">      }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.connect({</span></span>
<span class="line"><span style="color:#f6f6f4;">        source: &#39;item_left&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">        target: &#39;item_right&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">      }, common)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.draggable(&#39;item_left&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.draggable(&#39;item_right&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">    })</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">    /* global jsPlumb */</span></span>
<span class="line"><span style="color:#24292e;">    jsPlumb.ready(function () {</span></span>
<span class="line"><span style="color:#24292e;">      var common = {</span></span>
<span class="line"><span style="color:#24292e;">        endpoint: &#39;Rectangle&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        connector: [&#39;Bezier&#39;],</span></span>
<span class="line"><span style="color:#24292e;">        anchor: [&#39;Left&#39;, &#39;Right&#39;]</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.connect({</span></span>
<span class="line"><span style="color:#24292e;">        source: &#39;item_left&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        target: &#39;item_right&#39;</span></span>
<span class="line"><span style="color:#24292e;">      }, common)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.draggable(&#39;item_left&#39;)</span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.draggable(&#39;item_right&#39;)</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/script&gt;</span></span></code></pre></div><h2 id="_2-5-给连接加上样式" tabindex="-1">2.5. 给连接加上样式 <a class="header-anchor" href="#_2-5-给连接加上样式" aria-label="Permalink to &quot;2.5. 给连接加上样式&quot;">​</a></h2><p>demo: <a href="https://wdd.js.org/jsplumb-chinese-tutorial/demos/05.html" target="_blank" rel="noreferrer">https://wdd.js.org/jsplumb-chinese-tutorial/demos/05.html</a></p><p>例如给连线设置不同的颜色，设置不同的粗细之类的。</p><p><img src="`+r+`" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">jsPlumb.connect({</span></span>
<span class="line"><span style="color:#f6f6f4;">  source: &#39;item_left&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">  target: &#39;item_right&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">  paintStyle: { stroke: &#39;lightgray&#39;, strokeWidth: 3 },</span></span>
<span class="line"><span style="color:#f6f6f4;">  endpointStyle: { fill: &#39;lightgray&#39;, outlineStroke: &#39;darkgray&#39;, outlineWidth: 2 }</span></span>
<span class="line"><span style="color:#f6f6f4;">}, common)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">jsPlumb.connect({</span></span>
<span class="line"><span style="color:#24292e;">  source: &#39;item_left&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  target: &#39;item_right&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  paintStyle: { stroke: &#39;lightgray&#39;, strokeWidth: 3 },</span></span>
<span class="line"><span style="color:#24292e;">  endpointStyle: { fill: &#39;lightgray&#39;, outlineStroke: &#39;darkgray&#39;, outlineWidth: 2 }</span></span>
<span class="line"><span style="color:#24292e;">}, common)</span></span></code></pre></div><h2 id="_2-6-给连接加上箭头" tabindex="-1">2.6. 给连接加上箭头 <a class="header-anchor" href="#_2-6-给连接加上箭头" aria-label="Permalink to &quot;2.6. 给连接加上箭头&quot;">​</a></h2><p>demo: <a href="https://wdd.js.org/jsplumb-chinese-tutorial/demos/06.html" target="_blank" rel="noreferrer">https://wdd.js.org/jsplumb-chinese-tutorial/demos/06.html</a></p><p>箭头实际上是通过设置<code>overlays</code>去设置的，可以设置箭头的长宽以及箭头的位置，location 0.5表示箭头位于中间，location 1表示箭头设置在连线末端。 一根连线是可以添加多个箭头的。</p><p><code>overlays</code>也是一个比较重要的概念，overlays可以理解为遮罩层。遮罩层不仅仅可以设置箭头，也可以设置其他内容。</p><p>overlays有五种类型，下面给出简介。具体使用方法参见 <a href="http://jsplumb.github.io/jsplumb/overlays.html" target="_blank" rel="noreferrer">http://jsplumb.github.io/jsplumb/overlays.html</a></p><ul><li><code>Arrow</code> 一个可配置的箭头</li><li><code>Label</code> 标签，可以在连接上显示文字信息</li><li><code>PlainArrow</code> 原始类型的箭头</li><li><code>Diamond</code> 菱形箭头</li><li><code>Custom</code> 自定义类型</li></ul><p><img src="`+i+`" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">jsPlumb.connect({</span></span>
<span class="line"><span style="color:#f6f6f4;">  source: &#39;item_left&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">  target: &#39;item_right&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">  paintStyle: { stroke: &#39;lightgray&#39;, strokeWidth: 3 },</span></span>
<span class="line"><span style="color:#f6f6f4;">  endpointStyle: { fill: &#39;lightgray&#39;, outlineStroke: &#39;darkgray&#39;, outlineWidth: 2 },</span></span>
<span class="line"><span style="color:#f6f6f4;">  overlays: [ [&#39;Arrow&#39;, { width: 12, length: 12, location: 0.5 }] ]</span></span>
<span class="line"><span style="color:#f6f6f4;">}, common)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">jsPlumb.connect({</span></span>
<span class="line"><span style="color:#24292e;">  source: &#39;item_left&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  target: &#39;item_right&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  paintStyle: { stroke: &#39;lightgray&#39;, strokeWidth: 3 },</span></span>
<span class="line"><span style="color:#24292e;">  endpointStyle: { fill: &#39;lightgray&#39;, outlineStroke: &#39;darkgray&#39;, outlineWidth: 2 },</span></span>
<span class="line"><span style="color:#24292e;">  overlays: [ [&#39;Arrow&#39;, { width: 12, length: 12, location: 0.5 }] ]</span></span>
<span class="line"><span style="color:#24292e;">}, common)</span></span></code></pre></div><h2 id="_2-7-增加一个端点" tabindex="-1">2.7. 增加一个端点 <a class="header-anchor" href="#_2-7-增加一个端点" aria-label="Permalink to &quot;2.7. 增加一个端点&quot;">​</a></h2><p>demo: <a href="https://wdd.js.org/jsplumb-chinese-tutorial/demos/07.html" target="_blank" rel="noreferrer">https://wdd.js.org/jsplumb-chinese-tutorial/demos/07.html</a></p><p>addEndpoint方法可以用来增加端点，<a href="https://github.com/jsplumb/jsplumb/blob/da6688b86fbfba621bf3685e4431a4d9be7213b4/doc/api/jsplumb-api.js#L57" target="_blank" rel="noreferrer">具体使用请看</a></p><p><img src="`+d+`" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">jsPlumb.ready(function () {</span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.addEndpoint(&#39;item_left&#39;, {</span></span>
<span class="line"><span style="color:#f6f6f4;">        anchors: [&#39;Right&#39;]</span></span>
<span class="line"><span style="color:#f6f6f4;">      })</span></span>
<span class="line"><span style="color:#f6f6f4;">    })</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">jsPlumb.ready(function () {</span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.addEndpoint(&#39;item_left&#39;, {</span></span>
<span class="line"><span style="color:#24292e;">        anchors: [&#39;Right&#39;]</span></span>
<span class="line"><span style="color:#24292e;">      })</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span></code></pre></div><h2 id="_2-8-拖动创建连接" tabindex="-1">2.8. 拖动创建连接 <a class="header-anchor" href="#_2-8-拖动创建连接" aria-label="Permalink to &quot;2.8. 拖动创建连接&quot;">​</a></h2><p>demo: <a href="https://wdd.js.org/jsplumb-chinese-tutorial/demos/08.html" target="_blank" rel="noreferrer">https://wdd.js.org/jsplumb-chinese-tutorial/demos/08.html</a></p><p>如果你将<code>isSource</code>和<code>isTarget</code>设置成true，那么久可以用户在拖动时，自动创建连接。</p><p><img src="`+y+`" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">jsPlumb.ready(function () {</span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.setContainer(&#39;diagramContainer&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">      var common = {</span></span>
<span class="line"><span style="color:#f6f6f4;">        isSource: true,</span></span>
<span class="line"><span style="color:#f6f6f4;">        isTarget: true,</span></span>
<span class="line"><span style="color:#f6f6f4;">        connector: [&#39;Straight&#39;]</span></span>
<span class="line"><span style="color:#f6f6f4;">      }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.addEndpoint(&#39;item_left&#39;, {</span></span>
<span class="line"><span style="color:#f6f6f4;">        anchors: [&#39;Right&#39;]</span></span>
<span class="line"><span style="color:#f6f6f4;">      }, common)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.addEndpoint(&#39;item_right&#39;, {</span></span>
<span class="line"><span style="color:#f6f6f4;">        anchor: &#39;Left&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">      }, common)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.addEndpoint(&#39;item_right&#39;, {</span></span>
<span class="line"><span style="color:#f6f6f4;">        anchor: &#39;Right&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">      }, common)</span></span>
<span class="line"><span style="color:#f6f6f4;">    })</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">jsPlumb.ready(function () {</span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.setContainer(&#39;diagramContainer&#39;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      var common = {</span></span>
<span class="line"><span style="color:#24292e;">        isSource: true,</span></span>
<span class="line"><span style="color:#24292e;">        isTarget: true,</span></span>
<span class="line"><span style="color:#24292e;">        connector: [&#39;Straight&#39;]</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.addEndpoint(&#39;item_left&#39;, {</span></span>
<span class="line"><span style="color:#24292e;">        anchors: [&#39;Right&#39;]</span></span>
<span class="line"><span style="color:#24292e;">      }, common)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.addEndpoint(&#39;item_right&#39;, {</span></span>
<span class="line"><span style="color:#24292e;">        anchor: &#39;Left&#39;</span></span>
<span class="line"><span style="color:#24292e;">      }, common)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.addEndpoint(&#39;item_right&#39;, {</span></span>
<span class="line"><span style="color:#24292e;">        anchor: &#39;Right&#39;</span></span>
<span class="line"><span style="color:#24292e;">      }, common)</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span></code></pre></div><p><code>一般来说拖动创建的连接，可以再次拖动，让连接断开。如果不想触发这种行为，可以设置。</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">jsPlumb.</span><span style="color:#62E884;">importDefaults</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">    ConnectionsDetachable</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span></span>
<span class="line"><span style="color:#F6F6F4;">  })</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">jsPlumb.</span><span style="color:#6F42C1;">importDefaults</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    ConnectionsDetachable: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span></code></pre></div><p><code>如果你需要在连接被拖动建立后，更新数据模型，则需要订阅connection事件</code>, 回调函数的info对象里，有你所需的任何数据。比如说从哪个节点拖动到哪个节点的。</p><p>关于事件，可以参考事件章节。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">jsPlumb.</span><span style="color:#62E884;">bind</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">connection</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">info</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">originalEvent</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">   .. update your model </span><span style="color:#F286C4;">in</span><span style="color:#F6F6F4;"> here, maybe.</span></span>
<span class="line"><span style="color:#F6F6F4;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">jsPlumb.</span><span style="color:#6F42C1;">bind</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;connection&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">info</span><span style="color:#24292E;">, </span><span style="color:#E36209;">originalEvent</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">   .. update your model </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> here, maybe.</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h2 id="_2-9-给端点增加样式" tabindex="-1">2.9. 给端点增加样式 <a class="header-anchor" href="#_2-9-给端点增加样式" aria-label="Permalink to &quot;2.9. 给端点增加样式&quot;">​</a></h2><p>demo: <a href="https://wdd.js.org/jsplumb-chinese-tutorial/demos/09.html" target="_blank" rel="noreferrer">https://wdd.js.org/jsplumb-chinese-tutorial/demos/09.html</a></p><p>通过设置各种 <code>*Style</code>来改变连接或者端点的样式。</p><p><img src="`+f+`" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">jsPlumb.ready(function () {</span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.setContainer(&#39;diagramContainer&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">      var common = {</span></span>
<span class="line"><span style="color:#f6f6f4;">        isSource: true,</span></span>
<span class="line"><span style="color:#f6f6f4;">        isTarget: true,</span></span>
<span class="line"><span style="color:#f6f6f4;">        connector: &#39;Straight&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">        endpoint: &#39;Dot&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">        paintStyle: {</span></span>
<span class="line"><span style="color:#f6f6f4;">          fill: &#39;white&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">          outlineStroke: &#39;blue&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">          strokeWidth: 3</span></span>
<span class="line"><span style="color:#f6f6f4;">        },</span></span>
<span class="line"><span style="color:#f6f6f4;">        hoverPaintStyle: {</span></span>
<span class="line"><span style="color:#f6f6f4;">          outlineStroke: &#39;lightblue&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">        },</span></span>
<span class="line"><span style="color:#f6f6f4;">        connectorStyle: {</span></span>
<span class="line"><span style="color:#f6f6f4;">          outlineStroke: &#39;green&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">          strokeWidth: 1</span></span>
<span class="line"><span style="color:#f6f6f4;">        },</span></span>
<span class="line"><span style="color:#f6f6f4;">        connectorHoverStyle: {</span></span>
<span class="line"><span style="color:#f6f6f4;">          strokeWidth: 2</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">      }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.addEndpoint(&#39;item_left&#39;, {</span></span>
<span class="line"><span style="color:#f6f6f4;">        anchors: [&#39;Right&#39;]</span></span>
<span class="line"><span style="color:#f6f6f4;">      }, common)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.addEndpoint(&#39;item_right&#39;, {</span></span>
<span class="line"><span style="color:#f6f6f4;">        anchor: &#39;Left&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">      }, common)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.addEndpoint(&#39;item_right&#39;, {</span></span>
<span class="line"><span style="color:#f6f6f4;">        anchor: &#39;Right&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">      }, common)</span></span>
<span class="line"><span style="color:#f6f6f4;">    })</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">jsPlumb.ready(function () {</span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.setContainer(&#39;diagramContainer&#39;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      var common = {</span></span>
<span class="line"><span style="color:#24292e;">        isSource: true,</span></span>
<span class="line"><span style="color:#24292e;">        isTarget: true,</span></span>
<span class="line"><span style="color:#24292e;">        connector: &#39;Straight&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        endpoint: &#39;Dot&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        paintStyle: {</span></span>
<span class="line"><span style="color:#24292e;">          fill: &#39;white&#39;,</span></span>
<span class="line"><span style="color:#24292e;">          outlineStroke: &#39;blue&#39;,</span></span>
<span class="line"><span style="color:#24292e;">          strokeWidth: 3</span></span>
<span class="line"><span style="color:#24292e;">        },</span></span>
<span class="line"><span style="color:#24292e;">        hoverPaintStyle: {</span></span>
<span class="line"><span style="color:#24292e;">          outlineStroke: &#39;lightblue&#39;</span></span>
<span class="line"><span style="color:#24292e;">        },</span></span>
<span class="line"><span style="color:#24292e;">        connectorStyle: {</span></span>
<span class="line"><span style="color:#24292e;">          outlineStroke: &#39;green&#39;,</span></span>
<span class="line"><span style="color:#24292e;">          strokeWidth: 1</span></span>
<span class="line"><span style="color:#24292e;">        },</span></span>
<span class="line"><span style="color:#24292e;">        connectorHoverStyle: {</span></span>
<span class="line"><span style="color:#24292e;">          strokeWidth: 2</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.addEndpoint(&#39;item_left&#39;, {</span></span>
<span class="line"><span style="color:#24292e;">        anchors: [&#39;Right&#39;]</span></span>
<span class="line"><span style="color:#24292e;">      }, common)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.addEndpoint(&#39;item_right&#39;, {</span></span>
<span class="line"><span style="color:#24292e;">        anchor: &#39;Left&#39;</span></span>
<span class="line"><span style="color:#24292e;">      }, common)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.addEndpoint(&#39;item_right&#39;, {</span></span>
<span class="line"><span style="color:#24292e;">        anchor: &#39;Right&#39;</span></span>
<span class="line"><span style="color:#24292e;">      }, common)</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span></code></pre></div><h2 id="_2-10-节点改变尺寸" tabindex="-1">2.10. 节点改变尺寸 <a class="header-anchor" href="#_2-10-节点改变尺寸" aria-label="Permalink to &quot;2.10. 节点改变尺寸&quot;">​</a></h2><p>demo: <a href="https://wdd.js.org/jsplumb-chinese-tutorial/demos/10.html" target="_blank" rel="noreferrer">https://wdd.js.org/jsplumb-chinese-tutorial/demos/10.html</a></p><p>jsplumb实际上不支持改变节点大小，实际上只能通过jquery ui resizable 方法去改变。</p><p><img src="`+u+`" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;div id=&quot;diagramContainer&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;div id=&quot;item_left&quot; class=&quot;item&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;div id=&quot;item_right&quot; class=&quot;item&quot; style=&quot;left:150px;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;script src=&quot;https://code.jquery.com/jquery-1.11.3.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;script src=&quot;https://code.jquery.com/ui/1.12.1/jquery-ui.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;script src=&quot;./lib/jquery.jsplumb.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    /* global jsPlumb, $ */</span></span>
<span class="line"><span style="color:#f6f6f4;">    $(&#39;.item&#39;).resizable({</span></span>
<span class="line"><span style="color:#f6f6f4;">      resize: function (event, ui) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        jsPlumb.repaint(ui.helper)</span></span>
<span class="line"><span style="color:#f6f6f4;">      }</span></span>
<span class="line"><span style="color:#f6f6f4;">    })</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    jsPlumb.ready(function () {</span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.connect({</span></span>
<span class="line"><span style="color:#f6f6f4;">        source: &#39;item_left&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">        target: &#39;item_right&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">        endpoint: &#39;Rectangle&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">      })</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.draggable(&#39;item_left&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.draggable(&#39;item_right&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">    })</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div id=&quot;diagramContainer&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div id=&quot;item_left&quot; class=&quot;item&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div id=&quot;item_right&quot; class=&quot;item&quot; style=&quot;left:150px;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;script src=&quot;https://code.jquery.com/jquery-1.11.3.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;script src=&quot;https://code.jquery.com/ui/1.12.1/jquery-ui.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;script src=&quot;./lib/jquery.jsplumb.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">    /* global jsPlumb, $ */</span></span>
<span class="line"><span style="color:#24292e;">    $(&#39;.item&#39;).resizable({</span></span>
<span class="line"><span style="color:#24292e;">      resize: function (event, ui) {</span></span>
<span class="line"><span style="color:#24292e;">        jsPlumb.repaint(ui.helper)</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    jsPlumb.ready(function () {</span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.connect({</span></span>
<span class="line"><span style="color:#24292e;">        source: &#39;item_left&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        target: &#39;item_right&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        endpoint: &#39;Rectangle&#39;</span></span>
<span class="line"><span style="color:#24292e;">      })</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.draggable(&#39;item_left&#39;)</span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.draggable(&#39;item_right&#39;)</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/script&gt;</span></span></code></pre></div><h2 id="_2-11-限制节点拖动区域" tabindex="-1">2.11. 限制节点拖动区域 <a class="header-anchor" href="#_2-11-限制节点拖动区域" aria-label="Permalink to &quot;2.11. 限制节点拖动区域&quot;">​</a></h2><p>demo: <a href="https://wdd.js.org/jsplumb-chinese-tutorial/demos/11.html" target="_blank" rel="noreferrer">https://wdd.js.org/jsplumb-chinese-tutorial/demos/11.html</a></p><p>默认情况下，节点可以被拖动到区域外边，如果想只能在区域内拖动，需要设置containment，这样节点只能在固定区域内移动。</p><p>实际上上这个功能是使用jQueryUI的功能，所以函数的使用可以参考jQueryUI的文档。<a href="https://jqueryui.com/draggable/#constrain-movement" target="_blank" rel="noreferrer">https://jqueryui.com/draggable/#constrain-movement</a></p><p><img src="`+h+`" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">jsPlumb.draggable(&#39;item_left&#39;, {containment: &#39;parent&#39;})</span></span>
<span class="line"><span style="color:#f6f6f4;">jsPlumb.draggable(&#39;item_right&#39;, {containment: &#39;parent&#39;})</span></span>
<span class="line"><span style="color:#f6f6f4;">jsPlumb.draggable(&#39;some-id&#39;, {containment: &quot;#containment-wrapper&quot;})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">jsPlumb.draggable(&#39;item_left&#39;, {containment: &#39;parent&#39;})</span></span>
<span class="line"><span style="color:#24292e;">jsPlumb.draggable(&#39;item_right&#39;, {containment: &#39;parent&#39;})</span></span>
<span class="line"><span style="color:#24292e;">jsPlumb.draggable(&#39;some-id&#39;, {containment: &quot;#containment-wrapper&quot;})</span></span></code></pre></div><h2 id="_2-12-节点网格对齐" tabindex="-1">2.12. 节点网格对齐 <a class="header-anchor" href="#_2-12-节点网格对齐" aria-label="Permalink to &quot;2.12. 节点网格对齐&quot;">​</a></h2><p>demo: <a href="https://wdd.js.org/jsplumb-chinese-tutorial/demos/12.html" target="_blank" rel="noreferrer">https://wdd.js.org/jsplumb-chinese-tutorial/demos/12.html</a> 网格对齐实际上是设置了<code>grid</code>属性，使移动只能按照固定的尺寸移动。然后用一张图作为背景铺开作为网格来实现的。</p><p><img src="`+m+`" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">#diagramContainer {</span></span>
<span class="line"><span style="color:#f6f6f4;">  padding: 20px;</span></span>
<span class="line"><span style="color:#f6f6f4;">  width: 80%;</span></span>
<span class="line"><span style="color:#f6f6f4;">  height: 400px;</span></span>
<span class="line"><span style="color:#f6f6f4;">  border: 1px solid gray;</span></span>
<span class="line"><span style="color:#f6f6f4;">  background-image: url(./images/20180227163310_1bVYeW_grid.jpeg);</span></span>
<span class="line"><span style="color:#f6f6f4;">  background-repeat: repeat;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">jsPlumb.draggable(&#39;item_left&#39;, {</span></span>
<span class="line"><span style="color:#f6f6f4;">  containment: &#39;parent&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">  grid: [10, 10]</span></span>
<span class="line"><span style="color:#f6f6f4;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#diagramContainer {</span></span>
<span class="line"><span style="color:#24292e;">  padding: 20px;</span></span>
<span class="line"><span style="color:#24292e;">  width: 80%;</span></span>
<span class="line"><span style="color:#24292e;">  height: 400px;</span></span>
<span class="line"><span style="color:#24292e;">  border: 1px solid gray;</span></span>
<span class="line"><span style="color:#24292e;">  background-image: url(./images/20180227163310_1bVYeW_grid.jpeg);</span></span>
<span class="line"><span style="color:#24292e;">  background-repeat: repeat;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">jsPlumb.draggable(&#39;item_left&#39;, {</span></span>
<span class="line"><span style="color:#24292e;">  containment: &#39;parent&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  grid: [10, 10]</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><h2 id="_2-13-给连接添加点击事件-点击删除连线" tabindex="-1">2.13. 给连接添加点击事件：点击删除连线 <a class="header-anchor" href="#_2-13-给连接添加点击事件-点击删除连线" aria-label="Permalink to &quot;2.13. 给连接添加点击事件：点击删除连线&quot;">​</a></h2><p>demo: <a href="https://wdd.js.org/jsplumb-chinese-tutorial/demos/13.html" target="_blank" rel="noreferrer">https://wdd.js.org/jsplumb-chinese-tutorial/demos/13.html</a></p><p><img src="`+b+`" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 请单点击一下连接线, </span></span>
<span class="line"><span style="color:#f6f6f4;">jsPlumb.bind(&#39;click&#39;, function (conn, originalEvent) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  if (window.prompt(&#39;确定删除所点击的连接吗？ 输入1确定&#39;) === &#39;1&#39;) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    jsPlumb.detach(conn)</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 请单点击一下连接线, </span></span>
<span class="line"><span style="color:#24292e;">jsPlumb.bind(&#39;click&#39;, function (conn, originalEvent) {</span></span>
<span class="line"><span style="color:#24292e;">  if (window.prompt(&#39;确定删除所点击的连接吗？ 输入1确定&#39;) === &#39;1&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">    jsPlumb.detach(conn)</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><p>jsPlumb支持许多事件</p><p><code>jsPlumb Events列表</code></p><ul><li>connection</li><li>connectionDetached</li><li>connectionMoved</li><li>click</li><li>dblclick</li><li>endpointClick</li><li>endpointDblClick</li><li>contextmenu</li><li>beforeDrop</li><li>beforeDetach</li><li>zoom</li><li>Connection Events</li><li>Endpoint Events</li><li>Overlay Events</li><li>Unbinding Events</li></ul><p>参考用法参考：<a href="https://github.com/jsplumb/jsplumb/blob/da6688b86f/doc/wiki/events.md" target="_blank" rel="noreferrer">https://github.com/jsplumb/jsplumb/blob/da6688b86f/doc/wiki/events.md</a></p><h2 id="_2-14-删除节点-包括节点相关的连接" tabindex="-1">2.14. 删除节点，包括节点相关的连接 <a class="header-anchor" href="#_2-14-删除节点-包括节点相关的连接" aria-label="Permalink to &quot;2.14. 删除节点，包括节点相关的连接&quot;">​</a></h2><p>demo: <a href="https://wdd.js.org/jsplumb-chinese-tutorial/demos/14.html" target="_blank" rel="noreferrer">https://wdd.js.org/jsplumb-chinese-tutorial/demos/14.html</a></p><p><img src="`+g+`" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// nodeId为节点id, remove方法可以删除节点以及和节点相关的连线</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(&#39;3 秒后移除左边节点包括它的连线&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">setTimeout(function () {</span></span>
<span class="line"><span style="color:#f6f6f4;">  jsPlumb.remove(&#39;item_left&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">}, 3000)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// nodeId为节点id, remove方法可以删除节点以及和节点相关的连线</span></span>
<span class="line"><span style="color:#24292e;">console.log(&#39;3 秒后移除左边节点包括它的连线&#39;)</span></span>
<span class="line"><span style="color:#24292e;">setTimeout(function () {</span></span>
<span class="line"><span style="color:#24292e;">  jsPlumb.remove(&#39;item_left&#39;)</span></span>
<span class="line"><span style="color:#24292e;">}, 3000)</span></span></code></pre></div><p>注意remove方法有些情况下是无法删除干净连线的，<a href="https://github.com/jsplumb/jsplumb/blob/da6688b86fbfba621bf3685e4431a4d9be7213b4/doc/api/jsplumb-api.js#L648" target="_blank" rel="noreferrer">详情</a></p><h2 id="_2-15-通过编码连接endpoint" tabindex="-1">2.15. 通过编码连接endPoint <a class="header-anchor" href="#_2-15-通过编码连接endpoint" aria-label="Permalink to &quot;2.15. 通过编码连接endPoint&quot;">​</a></h2><p>demo: <a href="https://wdd.js.org/jsplumb-chinese-tutorial/demos/15.html" target="_blank" rel="noreferrer">https://wdd.js.org/jsplumb-chinese-tutorial/demos/15.html</a></p><p><img src="`+F+`" alt=""></p><p>初始化数据后，给节点加上了endPoint, 如果想编码让endPoint连接上。需要在addEndpoint时，就给该断点加上一个uuid, 然后通过connect()方法，将两个断点连接上。建议使用<a href="https://github.com/kelektiv/node-uuid" target="_blank" rel="noreferrer">node-uuid</a>给每个断点都加上唯一的uuid， 这样以后连接就方便多了。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">jsPlumb.addEndpoint(&#39;item_left&#39;, {</span></span>
<span class="line"><span style="color:#f6f6f4;">  anchors: [&#39;Right&#39;],</span></span>
<span class="line"><span style="color:#f6f6f4;">  uuid: &#39;fromId&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">})</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">jsPlumb.addEndpoint(&#39;item_right&#39;, {</span></span>
<span class="line"><span style="color:#f6f6f4;">  anchors: [&#39;Left&#39;],</span></span>
<span class="line"><span style="color:#f6f6f4;">  uuid: &#39;toId&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">})</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(&#39;3 秒后建立连线&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">setTimeout(function () {</span></span>
<span class="line"><span style="color:#f6f6f4;">  jsPlumb.connect({ uuids: [&#39;fromId&#39;, &#39;toId&#39;] })</span></span>
<span class="line"><span style="color:#f6f6f4;">}, 3000)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">jsPlumb.addEndpoint(&#39;item_left&#39;, {</span></span>
<span class="line"><span style="color:#24292e;">  anchors: [&#39;Right&#39;],</span></span>
<span class="line"><span style="color:#24292e;">  uuid: &#39;fromId&#39;</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">jsPlumb.addEndpoint(&#39;item_right&#39;, {</span></span>
<span class="line"><span style="color:#24292e;">  anchors: [&#39;Left&#39;],</span></span>
<span class="line"><span style="color:#24292e;">  uuid: &#39;toId&#39;</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">console.log(&#39;3 秒后建立连线&#39;)</span></span>
<span class="line"><span style="color:#24292e;">setTimeout(function () {</span></span>
<span class="line"><span style="color:#24292e;">  jsPlumb.connect({ uuids: [&#39;fromId&#39;, &#39;toId&#39;] })</span></span>
<span class="line"><span style="color:#24292e;">}, 3000)</span></span></code></pre></div><h2 id="_2-16-连接前的检查-判断是否建立连接" tabindex="-1">2.16. 连接前的检查，判断是否建立连接 <a class="header-anchor" href="#_2-16-连接前的检查-判断是否建立连接" aria-label="Permalink to &quot;2.16. 连接前的检查，判断是否建立连接&quot;">​</a></h2><p>demo: <a href="https://wdd.js.org/jsplumb-chinese-tutorial/demos/16.html" target="_blank" rel="noreferrer">https://wdd.js.org/jsplumb-chinese-tutorial/demos/16.html</a></p><p><img src="`+E+`" alt=""></p><p>有时候当用户从A端点连接到B端点时，需要做一些检查，如果不符合条件，就不让连接建立。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 当连接建立前</span></span>
<span class="line"><span style="color:#f6f6f4;">jsPlumb.bind(&#39;beforeDrop&#39;, function (info) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  var a = 10</span></span>
<span class="line"><span style="color:#f6f6f4;">  var b = 2</span></span>
<span class="line"><span style="color:#f6f6f4;">  if (a &lt; b) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    console.log(&#39;连接会自动建立&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">    return true // 连接会自动建立</span></span>
<span class="line"><span style="color:#f6f6f4;">  } else {</span></span>
<span class="line"><span style="color:#f6f6f4;">    console.log(&#39;连接取消&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">    return false // 连接不会建立，注意，必须是false</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 当连接建立前</span></span>
<span class="line"><span style="color:#24292e;">jsPlumb.bind(&#39;beforeDrop&#39;, function (info) {</span></span>
<span class="line"><span style="color:#24292e;">  var a = 10</span></span>
<span class="line"><span style="color:#24292e;">  var b = 2</span></span>
<span class="line"><span style="color:#24292e;">  if (a &lt; b) {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&#39;连接会自动建立&#39;)</span></span>
<span class="line"><span style="color:#24292e;">    return true // 连接会自动建立</span></span>
<span class="line"><span style="color:#24292e;">  } else {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&#39;连接取消&#39;)</span></span>
<span class="line"><span style="color:#24292e;">    return false // 连接不会建立，注意，必须是false</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><h2 id="_2-17-一个端点如何拖拽出多条连线" tabindex="-1">2.17. 一个端点如何拖拽出多条连线 <a class="header-anchor" href="#_2-17-一个端点如何拖拽出多条连线" aria-label="Permalink to &quot;2.17. 一个端点如何拖拽出多条连线&quot;">​</a></h2><p>demo <a href="https://wdd.js.org/jsplumb-chinese-tutorial/demos/17.html" target="_blank" rel="noreferrer">https://wdd.js.org/jsplumb-chinese-tutorial/demos/17.html</a></p><p>默认情况下，<code>maxConnections</code>的值是1，也就是一个端点最多只能拉出一条连线。</p><p>你也可以设置成其他值，例如5，表示最多可以有5条连线。</p><p>如果你想不限制连线的数量，那么可以将该值设置为<code>-1</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">var common = {</span></span>
<span class="line"><span style="color:#f6f6f4;">  isSource: true,</span></span>
<span class="line"><span style="color:#f6f6f4;">  isTarget: true,</span></span>
<span class="line"><span style="color:#f6f6f4;">  connector: [&#39;Straight&#39;],</span></span>
<span class="line"><span style="color:#f6f6f4;">  maxConnections: -1</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">jsPlumb.addEndpoint(&#39;item_left&#39;, {</span></span>
<span class="line"><span style="color:#f6f6f4;">  anchors: [&#39;Right&#39;]</span></span>
<span class="line"><span style="color:#f6f6f4;">}, common)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var common = {</span></span>
<span class="line"><span style="color:#24292e;">  isSource: true,</span></span>
<span class="line"><span style="color:#24292e;">  isTarget: true,</span></span>
<span class="line"><span style="color:#24292e;">  connector: [&#39;Straight&#39;],</span></span>
<span class="line"><span style="color:#24292e;">  maxConnections: -1</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">jsPlumb.addEndpoint(&#39;item_left&#39;, {</span></span>
<span class="line"><span style="color:#24292e;">  anchors: [&#39;Right&#39;]</span></span>
<span class="line"><span style="color:#24292e;">}, common)</span></span></code></pre></div><h2 id="_2-18-整个节点作为source或者target" tabindex="-1">2.18. 整个节点作为source或者target <a class="header-anchor" href="#_2-18-整个节点作为source或者target" aria-label="Permalink to &quot;2.18. 整个节点作为source或者target&quot;">​</a></h2><p>demo: <a href="https://wdd.js.org/jsplumb-chinese-tutorial/demos/18.html" target="_blank" rel="noreferrer">https://wdd.js.org/jsplumb-chinese-tutorial/demos/18.html</a></p><p>整个节点作为source或者target， 并且将锚点设置成Continuous，那么锚点就会随着节点的位置改变而改变自己的位置。</p><p>jsPlumb的锚点分为四类</p><ul><li><code>Static</code> 静态 固定位置的锚点</li><li><code>Dynamic</code> jsPlumb自动选择合适的锚点，动态锚点</li><li><code>Perimeter</code> 边缘锚点，会根据节点形状去改变位置</li><li><code>Continuous</code> 根据节点位置，自动调整位置的锚点</li></ul><p>详情：<a href="https://github.com/jsplumb/jsplumb/blob/da6688b86f/doc/wiki/anchors.md" target="_blank" rel="noreferrer">https://github.com/jsplumb/jsplumb/blob/da6688b86f/doc/wiki/anchors.md</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">window.jsPlumb.ready(function () {</span></span>
<span class="line"><span style="color:#f6f6f4;">      var jsPlumb = window.jsPlumb</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.makeSource(&#39;A&#39;, {</span></span>
<span class="line"><span style="color:#f6f6f4;">        endpoint:&quot;Dot&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">        anchor: &quot;Continuous&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">      })</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.makeTarget(&#39;B&#39;, {</span></span>
<span class="line"><span style="color:#f6f6f4;">        endpoint:&quot;Dot&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">        anchor: &quot;Continuous&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">      })</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.draggable(&#39;A&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.draggable(&#39;B&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">    })</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">window.jsPlumb.ready(function () {</span></span>
<span class="line"><span style="color:#24292e;">      var jsPlumb = window.jsPlumb</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.makeSource(&#39;A&#39;, {</span></span>
<span class="line"><span style="color:#24292e;">        endpoint:&quot;Dot&quot;,</span></span>
<span class="line"><span style="color:#24292e;">        anchor: &quot;Continuous&quot;</span></span>
<span class="line"><span style="color:#24292e;">      })</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.makeTarget(&#39;B&#39;, {</span></span>
<span class="line"><span style="color:#24292e;">        endpoint:&quot;Dot&quot;,</span></span>
<span class="line"><span style="color:#24292e;">        anchor: &quot;Continuous&quot;</span></span>
<span class="line"><span style="color:#24292e;">      })</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.draggable(&#39;A&#39;)</span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.draggable(&#39;B&#39;)</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span></code></pre></div><p><img src="`+v+'" alt=""></p><p><img src="'+j+`" alt=""></p><h2 id="_2-19-节点缩放" tabindex="-1">2.19. 节点缩放 <a class="header-anchor" href="#_2-19-节点缩放" aria-label="Permalink to &quot;2.19. 节点缩放&quot;">​</a></h2><p>demo: <a href="https://wdd.js.org/jsplumb-chinese-tutorial/demos/19.html" target="_blank" rel="noreferrer">https://wdd.js.org/jsplumb-chinese-tutorial/demos/19.html</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">window.jsPlumb.ready(function () {</span></span>
<span class="line"><span style="color:#f6f6f4;">      var jsPlumb = window.jsPlumb</span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.setContainer(&quot;diagramContainer&quot;)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.connect({</span></span>
<span class="line"><span style="color:#f6f6f4;">        source: &#39;A&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">        target: &#39;B&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">        endpoint: &#39;Dot&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">      })</span></span>
<span class="line"><span style="color:#f6f6f4;">      </span></span>
<span class="line"><span style="color:#f6f6f4;">      var baseZoom = 1</span></span>
<span class="line"><span style="color:#f6f6f4;">      setInterval(() =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">        baseZoom -= 0.1</span></span>
<span class="line"><span style="color:#f6f6f4;">        if (baseZoom &lt; 0.5) {</span></span>
<span class="line"><span style="color:#f6f6f4;">          baseZoom = 1</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">        zoom(baseZoom)</span></span>
<span class="line"><span style="color:#f6f6f4;">      }, 1000)</span></span>
<span class="line"><span style="color:#f6f6f4;">    })</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    function zoom (scale) {</span></span>
<span class="line"><span style="color:#f6f6f4;">      $(&quot;#diagramContainer&quot;).css({</span></span>
<span class="line"><span style="color:#f6f6f4;">          &quot;-webkit-transform&quot;: \`scale(\${scale})\`,</span></span>
<span class="line"><span style="color:#f6f6f4;">          &quot;-moz-transform&quot;: \`scale(\${scale})\`,</span></span>
<span class="line"><span style="color:#f6f6f4;">          &quot;-ms-transform&quot;: \`scale(\${scale})\`,</span></span>
<span class="line"><span style="color:#f6f6f4;">          &quot;-o-transform&quot;: \`scale(\${scale})\`,</span></span>
<span class="line"><span style="color:#f6f6f4;">          &quot;transform&quot;: \`scale(\${scale})\`</span></span>
<span class="line"><span style="color:#f6f6f4;">      })</span></span>
<span class="line"><span style="color:#f6f6f4;">      jsPlumb.setZoom(0.75);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">window.jsPlumb.ready(function () {</span></span>
<span class="line"><span style="color:#24292e;">      var jsPlumb = window.jsPlumb</span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.setContainer(&quot;diagramContainer&quot;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.connect({</span></span>
<span class="line"><span style="color:#24292e;">        source: &#39;A&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        target: &#39;B&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        endpoint: &#39;Dot&#39;</span></span>
<span class="line"><span style="color:#24292e;">      })</span></span>
<span class="line"><span style="color:#24292e;">      </span></span>
<span class="line"><span style="color:#24292e;">      var baseZoom = 1</span></span>
<span class="line"><span style="color:#24292e;">      setInterval(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        baseZoom -= 0.1</span></span>
<span class="line"><span style="color:#24292e;">        if (baseZoom &lt; 0.5) {</span></span>
<span class="line"><span style="color:#24292e;">          baseZoom = 1</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        zoom(baseZoom)</span></span>
<span class="line"><span style="color:#24292e;">      }, 1000)</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function zoom (scale) {</span></span>
<span class="line"><span style="color:#24292e;">      $(&quot;#diagramContainer&quot;).css({</span></span>
<span class="line"><span style="color:#24292e;">          &quot;-webkit-transform&quot;: \`scale(\${scale})\`,</span></span>
<span class="line"><span style="color:#24292e;">          &quot;-moz-transform&quot;: \`scale(\${scale})\`,</span></span>
<span class="line"><span style="color:#24292e;">          &quot;-ms-transform&quot;: \`scale(\${scale})\`,</span></span>
<span class="line"><span style="color:#24292e;">          &quot;-o-transform&quot;: \`scale(\${scale})\`,</span></span>
<span class="line"><span style="color:#24292e;">          &quot;transform&quot;: \`scale(\${scale})\`</span></span>
<span class="line"><span style="color:#24292e;">      })</span></span>
<span class="line"><span style="color:#24292e;">      jsPlumb.setZoom(0.75);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><p><img src="`+q+`" alt=""></p><h1 id="_3-jsplumb事件列表" tabindex="-1">3. jsPlumb事件列表 <a class="header-anchor" href="#_3-jsplumb事件列表" aria-label="Permalink to &quot;3. jsPlumb事件列表&quot;">​</a></h1><h2 id="_3-1-常用事件" tabindex="-1">3.1. 常用事件 <a class="header-anchor" href="#_3-1-常用事件" aria-label="Permalink to &quot;3.1. 常用事件&quot;">​</a></h2><p>具体事件中回调函数中参数的字段含义，参见 绑定事件的方式, 以connection事件为例子</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">jsPlumb.</span><span style="color:#62E884;">bind</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">connection</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">info</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">   .. update your model </span><span style="color:#F286C4;">in</span><span style="color:#F6F6F4;"> here, maybe.</span></span>
<span class="line"><span style="color:#F6F6F4;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">jsPlumb.</span><span style="color:#6F42C1;">bind</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;connection&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">info</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">   .. update your model </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> here, maybe.</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h3 id="_3-1-1-connection-连接建立时触发" tabindex="-1">3.1.1. connection 连接建立时触发 <a class="header-anchor" href="#_3-1-1-connection-连接建立时触发" aria-label="Permalink to &quot;3.1.1. connection 连接建立时触发&quot;">​</a></h3><p><code>connection(info, originalEvent)</code></p><ul><li>info.connection</li><li>info.sourceId</li><li>info.targetId</li><li>info.source</li><li>info.target</li><li>info.sourceEndpoint</li><li>info.targetEndpoint</li><li>originalEvent: 原始事件。只有用户拖动创建的连接，originalEvent才存在。</li></ul><p><strong>注意事项</strong>：通过编码连接节点，也会触发connection事件，如果只想处理用户拖动创建建立的连接，可以判断第二个参数originalEvent是否存在。</p><h3 id="_3-1-2-connectiondetached-连接断开时触发" tabindex="-1">3.1.2. connectionDetached 连接断开时触发 <a class="header-anchor" href="#_3-1-2-connectiondetached-连接断开时触发" aria-label="Permalink to &quot;3.1.2. connectionDetached 连接断开时触发&quot;">​</a></h3><p><code>connectionDetached(info, originalEvent)</code></p><ul><li>info.connection</li><li>info.sourceId</li><li>info.targetId</li><li>info.source</li><li>info.target</li><li>info.sourceEndpoint</li><li>info.targetEndpoint</li><li>originalEvent</li></ul><p><strong>注意事项</strong>：当拖动一个连线出现后，却没有连接到目标端点就放弃时，不会触发connectionDetached事件，会触发connectionAborted事件</p><h3 id="_3-1-3-connectionmoved-连接移动事件" tabindex="-1">3.1.3. connectionMoved 连接移动事件 <a class="header-anchor" href="#_3-1-3-connectionmoved-连接移动事件" aria-label="Permalink to &quot;3.1.3. connectionMoved 连接移动事件&quot;">​</a></h3><p><code>connectionMoved(info, originalEvent)</code></p><h3 id="_3-1-4-connectionaborted-连接取消事件" tabindex="-1">3.1.4. connectionAborted 连接取消事件 <a class="header-anchor" href="#_3-1-4-connectionaborted-连接取消事件" aria-label="Permalink to &quot;3.1.4. connectionAborted 连接取消事件&quot;">​</a></h3><p><code>connectionAborted(connection, originalEvent)</code></p><h3 id="_3-1-5-click-连接点击事件" tabindex="-1">3.1.5. click 连接点击事件 <a class="header-anchor" href="#_3-1-5-click-连接点击事件" aria-label="Permalink to &quot;3.1.5. click 连接点击事件&quot;">​</a></h3><p><code>click(connection, originalEvent)</code></p><h3 id="_3-1-6-dblclick-连接双击事件" tabindex="-1">3.1.6. dblclick 连接双击事件 <a class="header-anchor" href="#_3-1-6-dblclick-连接双击事件" aria-label="Permalink to &quot;3.1.6. dblclick 连接双击事件&quot;">​</a></h3><p><code>dblclick(connection, originalEvent)</code></p><h3 id="_3-1-7-connectiondrag-连接拖动事件" tabindex="-1">3.1.7. connectionDrag 连接拖动事件 <a class="header-anchor" href="#_3-1-7-connectiondrag-连接拖动事件" aria-label="Permalink to &quot;3.1.7. connectionDrag 连接拖动事件&quot;">​</a></h3><p><code>connectionDrag(connection)</code></p><h3 id="_3-1-8-connectiondragstop-连接停止拖动事件" tabindex="-1">3.1.8. connectionDragStop 连接停止拖动事件 <a class="header-anchor" href="#_3-1-8-connectiondragstop-连接停止拖动事件" aria-label="Permalink to &quot;3.1.8. connectionDragStop 连接停止拖动事件&quot;">​</a></h3><p><code>connectionDragStop(connection)</code></p><h3 id="_3-1-9-endpointclick-端点单击事件" tabindex="-1">3.1.9. endpointClick 端点单击事件 <a class="header-anchor" href="#_3-1-9-endpointclick-端点单击事件" aria-label="Permalink to &quot;3.1.9. endpointClick 端点单击事件&quot;">​</a></h3><p><code>endpointClick(endpoint, originalEvent)</code></p><h3 id="_3-1-10-endpointdblclick-端点双击事件" tabindex="-1">3.1.10. endpointDblClick 端点双击事件 <a class="header-anchor" href="#_3-1-10-endpointdblclick-端点双击事件" aria-label="Permalink to &quot;3.1.10. endpointDblClick 端点双击事件&quot;">​</a></h3><p><code>endpointDblClick(endpoint, originalEvent)</code></p><h3 id="_3-1-11-contextmenu-鼠标右键事件" tabindex="-1">3.1.11. contextmenu 鼠标右键事件 <a class="header-anchor" href="#_3-1-11-contextmenu-鼠标右键事件" aria-label="Permalink to &quot;3.1.11. contextmenu 鼠标右键事件&quot;">​</a></h3><p><code>contextmenu(component, originalEvent)</code></p><h3 id="_3-1-12-beforedrop-连接建立前事件" tabindex="-1">3.1.12. beforeDrop 连接建立前事件 <a class="header-anchor" href="#_3-1-12-beforedrop-连接建立前事件" aria-label="Permalink to &quot;3.1.12. beforeDrop 连接建立前事件&quot;">​</a></h3><p><code>beforeDrop(info)</code> 注意如果这个回调函数返回false, 那么连接将不会被建立，可以用来连接建立的拦截</p><h3 id="_3-1-13-beforedetach-连接断开前事件" tabindex="-1">3.1.13. beforeDetach 连接断开前事件 <a class="header-anchor" href="#_3-1-13-beforedetach-连接断开前事件" aria-label="Permalink to &quot;3.1.13. beforeDetach 连接断开前事件&quot;">​</a></h3><p><code>beforeDetach(connection)</code></p><h3 id="_3-1-14-zoom-缩放事件" tabindex="-1">3.1.14. zoom 缩放事件 <a class="header-anchor" href="#_3-1-14-zoom-缩放事件" aria-label="Permalink to &quot;3.1.14. zoom 缩放事件&quot;">​</a></h3><p><code>zoom(value)</code></p><h2 id="_3-2-其他事件" tabindex="-1">3.2. 其他事件 <a class="header-anchor" href="#_3-2-其他事件" aria-label="Permalink to &quot;3.2. 其他事件&quot;">​</a></h2><h3 id="_3-2-1-connection-events" tabindex="-1">3.2.1. Connection Events <a class="header-anchor" href="#_3-2-1-connection-events" aria-label="Permalink to &quot;3.2.1. Connection Events&quot;">​</a></h3><p>在获得一个连接后，可以单独给某个连接绑定事件</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> connection </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> jsPlumb.</span><span style="color:#62E884;">connect</span><span style="color:#F6F6F4;">({source</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">d1</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, target</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">d2</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">});</span></span>
<span class="line"><span style="color:#F6F6F4;">connection.</span><span style="color:#62E884;">bind</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">click</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">conn</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">you clicked on </span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, conn);</span></span>
<span class="line"><span style="color:#F6F6F4;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> connection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> jsPlumb.</span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">({source:</span><span style="color:#032F62;">&quot;d1&quot;</span><span style="color:#24292E;">, target:</span><span style="color:#032F62;">&quot;d2&quot;</span><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">connection.</span><span style="color:#6F42C1;">bind</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;click&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">conn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;you clicked on &quot;</span><span style="color:#24292E;">, conn);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p>当获取到连接后，连接还可以绑定其他事件</p><ul><li>click(connection, originalEvent) - notification a Connection was clicked.</li><li>dblclick(connection, originalEvent) - notification a Connection was double-clicked.</li><li>contextmenu(connection, originalEvent) - a right-click on the Connection.</li><li>mouseover(connection, originalEvent) - notification the mouse is over the Connection&#39;s path.</li><li>mouseout(connection, originalEvent) - notification the mouse has exited the Connection&#39;s path.</li><li>mousedown(connection, originalEvent) - notification the mouse button was pressed on the Connection&#39;s path.</li><li>mouseup(connection, originalEvent) - notification the mouse button was released on the Connection&#39;s path.</li></ul><h3 id="_3-2-2-endpoint-events" tabindex="-1">3.2.2. Endpoint Events <a class="header-anchor" href="#_3-2-2-endpoint-events" aria-label="Permalink to &quot;3.2.2. Endpoint Events&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> endpoint </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> jsPlumb.</span><span style="color:#62E884;">addEndpoint</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">d1</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, { someOptions } );</span></span>
<span class="line"><span style="color:#F6F6F4;">endpoint.</span><span style="color:#62E884;">bind</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">click</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">endpoint</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">you clicked on </span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, endpoint);</span></span>
<span class="line"><span style="color:#F6F6F4;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> endpoint </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> jsPlumb.</span><span style="color:#6F42C1;">addEndpoint</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;d1&quot;</span><span style="color:#24292E;">, { someOptions } );</span></span>
<span class="line"><span style="color:#24292E;">endpoint.</span><span style="color:#6F42C1;">bind</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;click&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">endpoint</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;you clicked on &quot;</span><span style="color:#24292E;">, endpoint);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><ul><li>click(endpoint, originalEvent) - notification an Endpoint was clicked.</li><li>dblclick(endpoint, originalEvent) - notification an Endpoint was double-clicked.</li><li>contextmenu(endpoint, originalEvent) - a right-click on the Endpoint.</li><li>mouseover(endpoint, originalEvent) - notification the mouse is over the Endpoint.</li><li>mouseout(endpoint, originalEvent) - notification the mouse has exited the Endpoint.</li><li>mousedown(endpoint, originalEvent) - notification the mouse button was pressed on the Endpoint.</li><li>mouseup(endpoint, originalEvent) - notification the mouse button was released on the Endpoint.</li><li>maxConnections(info, originalEvent) - notification the user tried to drop a Connection on an Endpoint that already has the maximum number of Connections. info is an object literal containing these values: <ul><li>info.endpoint : Endpoint on which the Connection was dropped</li><li>info.connection : The Connection the user tried to drop</li><li>info.maxConnections : The value of maxConnections for the Endpoint</li></ul></li></ul><h3 id="_3-2-3-overlay-events" tabindex="-1">3.2.3. Overlay Events <a class="header-anchor" href="#_3-2-3-overlay-events" aria-label="Permalink to &quot;3.2.3. Overlay Events&quot;">​</a></h3><p>可以把Overlay理解为连线上的文字或者图标，可以给这些overlays单独绑定事件。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">jsPlumb.connect({</span></span>
<span class="line"><span style="color:#f6f6f4;">    source:&quot;el1&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    target:&quot;el2&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    overlays:[</span></span>
<span class="line"><span style="color:#f6f6f4;">      [ &quot;Label&quot;, {</span></span>
<span class="line"><span style="color:#f6f6f4;">        events:{</span></span>
<span class="line"><span style="color:#f6f6f4;">          click:function(labelOverlay, originalEvent) { </span></span>
<span class="line"><span style="color:#f6f6f4;">            console.log(&quot;click on label overlay for :&quot; + labelOverlay.component); </span></span>
<span class="line"><span style="color:#f6f6f4;">          }</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">      }],</span></span>
<span class="line"><span style="color:#f6f6f4;">      [ &quot;Diamond&quot;, {</span></span>
<span class="line"><span style="color:#f6f6f4;">        events:{</span></span>
<span class="line"><span style="color:#f6f6f4;">          dblclick:function(diamondOverlay, originalEvent) { </span></span>
<span class="line"><span style="color:#f6f6f4;">            console.log(&quot;double click on diamond overlay for : &quot; + diamondOverlay.component); </span></span>
<span class="line"><span style="color:#f6f6f4;">          }</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">      }]    </span></span>
<span class="line"><span style="color:#f6f6f4;">    ]</span></span>
<span class="line"><span style="color:#f6f6f4;">  });</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">jsPlumb.connect({</span></span>
<span class="line"><span style="color:#24292e;">    source:&quot;el1&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    target:&quot;el2&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    overlays:[</span></span>
<span class="line"><span style="color:#24292e;">      [ &quot;Label&quot;, {</span></span>
<span class="line"><span style="color:#24292e;">        events:{</span></span>
<span class="line"><span style="color:#24292e;">          click:function(labelOverlay, originalEvent) { </span></span>
<span class="line"><span style="color:#24292e;">            console.log(&quot;click on label overlay for :&quot; + labelOverlay.component); </span></span>
<span class="line"><span style="color:#24292e;">          }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">      }],</span></span>
<span class="line"><span style="color:#24292e;">      [ &quot;Diamond&quot;, {</span></span>
<span class="line"><span style="color:#24292e;">        events:{</span></span>
<span class="line"><span style="color:#24292e;">          dblclick:function(diamondOverlay, originalEvent) { </span></span>
<span class="line"><span style="color:#24292e;">            console.log(&quot;double click on diamond overlay for : &quot; + diamondOverlay.component); </span></span>
<span class="line"><span style="color:#24292e;">          }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">      }]    </span></span>
<span class="line"><span style="color:#24292e;">    ]</span></span>
<span class="line"><span style="color:#24292e;">  });</span></span></code></pre></div><h1 id="_4-jsplumb默认配置简介" tabindex="-1">4. jsPlumb默认配置简介 <a class="header-anchor" href="#_4-jsplumb默认配置简介" aria-label="Permalink to &quot;4. jsPlumb默认配置简介&quot;">​</a></h1><p>参考地址: <a href="https://github.com/jsplumb/jsplumb/blob/da6688b86f/doc/wiki/defaults.md" target="_blank" rel="noreferrer">https://github.com/jsplumb/jsplumb/blob/da6688b86f/doc/wiki/defaults.md</a></p><p>jsPlumb的配置项有很多，如果你不主动去设置，那么jsPlumb就使用默认的配置。</p><p>另外建议你不要修改默认的配置，而是使用自定义的方式。</p><p>另外一点要注意，如果你想修改默认配置，那么使用importDefaults方法，并且属性的首字母要大写。如果你用addEndpoint, 并使用类似maxConnections的属性，那么首字母要小写。</p><p>参见demo: <a href="https://wdd.js.org/jsplumb-chinese-tutorial/demos/17.html" target="_blank" rel="noreferrer">https://wdd.js.org/jsplumb-chinese-tutorial/demos/17.html</a> demo上需要你自己手动拖动创建连接。</p><p><img src="`+_+`" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">var common = {</span></span>
<span class="line"><span style="color:#f6f6f4;">  isSource: true,</span></span>
<span class="line"><span style="color:#f6f6f4;">  isTarget: true,</span></span>
<span class="line"><span style="color:#f6f6f4;">  connector: [&#39;Straight&#39;],</span></span>
<span class="line"><span style="color:#f6f6f4;">  maxConnections: -1</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">jsPlumb.addEndpoint(&#39;item_left&#39;, {</span></span>
<span class="line"><span style="color:#f6f6f4;">  anchors: [&#39;Right&#39;]</span></span>
<span class="line"><span style="color:#f6f6f4;">}, common)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var common = {</span></span>
<span class="line"><span style="color:#24292e;">  isSource: true,</span></span>
<span class="line"><span style="color:#24292e;">  isTarget: true,</span></span>
<span class="line"><span style="color:#24292e;">  connector: [&#39;Straight&#39;],</span></span>
<span class="line"><span style="color:#24292e;">  maxConnections: -1</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">jsPlumb.addEndpoint(&#39;item_left&#39;, {</span></span>
<span class="line"><span style="color:#24292e;">  anchors: [&#39;Right&#39;]</span></span>
<span class="line"><span style="color:#24292e;">}, common)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">Anchor : &quot;BottomCenter&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">Anchors : [ null, null ],</span></span>
<span class="line"><span style="color:#f6f6f4;">ConnectionsDetachable   : true,</span></span>
<span class="line"><span style="color:#f6f6f4;">ConnectionOverlays  : [],</span></span>
<span class="line"><span style="color:#f6f6f4;">Connector : &quot;Bezier&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">Container : null,</span></span>
<span class="line"><span style="color:#f6f6f4;">DoNotThrowErrors  : false,</span></span>
<span class="line"><span style="color:#f6f6f4;">DragOptions : { },</span></span>
<span class="line"><span style="color:#f6f6f4;">DropOptions : { },</span></span>
<span class="line"><span style="color:#f6f6f4;">Endpoint : &quot;Dot&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">Endpoints : [ null, null ],</span></span>
<span class="line"><span style="color:#f6f6f4;">EndpointOverlays : [ ],</span></span>
<span class="line"><span style="color:#f6f6f4;">EndpointStyle : { fill : &quot;#456&quot; },</span></span>
<span class="line"><span style="color:#f6f6f4;">EndpointStyles : [ null, null ],</span></span>
<span class="line"><span style="color:#f6f6f4;">EndpointHoverStyle : null,</span></span>
<span class="line"><span style="color:#f6f6f4;">EndpointHoverStyles : [ null, null ],</span></span>
<span class="line"><span style="color:#f6f6f4;">HoverPaintStyle : null,</span></span>
<span class="line"><span style="color:#f6f6f4;">LabelStyle : { color : &quot;black&quot; },</span></span>
<span class="line"><span style="color:#f6f6f4;">LogEnabled : false,</span></span>
<span class="line"><span style="color:#f6f6f4;">Overlays : [ ],</span></span>
<span class="line"><span style="color:#f6f6f4;">MaxConnections : 1,</span></span>
<span class="line"><span style="color:#f6f6f4;">PaintStyle : { strokeWidth : 8, stroke : &quot;#456&quot; },</span></span>
<span class="line"><span style="color:#f6f6f4;">ReattachConnections : false,</span></span>
<span class="line"><span style="color:#f6f6f4;">RenderMode : &quot;svg&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">Scope : &quot;jsPlumb_DefaultScope&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Anchor : &quot;BottomCenter&quot;,</span></span>
<span class="line"><span style="color:#24292e;">Anchors : [ null, null ],</span></span>
<span class="line"><span style="color:#24292e;">ConnectionsDetachable   : true,</span></span>
<span class="line"><span style="color:#24292e;">ConnectionOverlays  : [],</span></span>
<span class="line"><span style="color:#24292e;">Connector : &quot;Bezier&quot;,</span></span>
<span class="line"><span style="color:#24292e;">Container : null,</span></span>
<span class="line"><span style="color:#24292e;">DoNotThrowErrors  : false,</span></span>
<span class="line"><span style="color:#24292e;">DragOptions : { },</span></span>
<span class="line"><span style="color:#24292e;">DropOptions : { },</span></span>
<span class="line"><span style="color:#24292e;">Endpoint : &quot;Dot&quot;,</span></span>
<span class="line"><span style="color:#24292e;">Endpoints : [ null, null ],</span></span>
<span class="line"><span style="color:#24292e;">EndpointOverlays : [ ],</span></span>
<span class="line"><span style="color:#24292e;">EndpointStyle : { fill : &quot;#456&quot; },</span></span>
<span class="line"><span style="color:#24292e;">EndpointStyles : [ null, null ],</span></span>
<span class="line"><span style="color:#24292e;">EndpointHoverStyle : null,</span></span>
<span class="line"><span style="color:#24292e;">EndpointHoverStyles : [ null, null ],</span></span>
<span class="line"><span style="color:#24292e;">HoverPaintStyle : null,</span></span>
<span class="line"><span style="color:#24292e;">LabelStyle : { color : &quot;black&quot; },</span></span>
<span class="line"><span style="color:#24292e;">LogEnabled : false,</span></span>
<span class="line"><span style="color:#24292e;">Overlays : [ ],</span></span>
<span class="line"><span style="color:#24292e;">MaxConnections : 1,</span></span>
<span class="line"><span style="color:#24292e;">PaintStyle : { strokeWidth : 8, stroke : &quot;#456&quot; },</span></span>
<span class="line"><span style="color:#24292e;">ReattachConnections : false,</span></span>
<span class="line"><span style="color:#24292e;">RenderMode : &quot;svg&quot;,</span></span>
<span class="line"><span style="color:#24292e;">Scope : &quot;jsPlumb_DefaultScope&quot;</span></span></code></pre></div><p>你也可以从<code>jsPlumb.Defaults</code>对象中查看默认的配置。如果你想要更加个性化的设置连线，那么最好可以了解一下，它的默认设置有哪些，从而方便的来完成自己的设计需求。</p><p><img src="`+k+`" alt=""></p><p>默认参数的简介:</p><ul><li><code>Anchor</code> 锚点，即端点连接的位置</li><li><code>Anchors</code> 多个锚点 [源锚点，目标锚点].</li><li><code>Connector</code> 连接</li><li><code>ConnectionsDetachable</code> 节点是否可以用鼠标拖动使其断开，默认为true。即用鼠标连接上的连线，也可以使用鼠标拖动让其断开。设置成false，可以让其拖动也不会自动断开。</li><li><code>Container</code> 连线的容器</li><li><code>DoNotThrowErrors</code> 是否抛出错误</li><li><code>ConnectionOverlays</code> 连接遮罩层</li><li><code>DragOptions</code> 拖动设置</li><li><code>DropOptions</code> 拖放设置</li><li><code>Endpoint</code> 端点</li><li><code>Endpoints</code> 数组形式的，[源端点，目标端点]</li><li><code>EndpointOverlays</code> 端点遮罩层</li><li><code>EndpointStyle</code> 端点样式</li><li><code>EndpointStyles</code> [源端点样式，目标端点样式]</li><li><code>EndpointHoverStyle</code> 端点鼠标经过的样式</li><li><code>EndpointHoverStyles</code> [源端点鼠标经过样式，目标端点鼠标经过样式]</li><li><code>HoverPaintStyle</code> 鼠标经过连接线时的样式</li><li><code>LabelStyle</code> 标签样式</li><li><code>LogEnabled</code> 是否启用日志</li><li><code>Overlays</code> 连接线和端点的遮罩层样式</li><li><code>MaxConnections</code> 端点最大连接线数量默认为1， 设置成-1可以表示无数个连接</li><li><code>PaintStyle</code> 连线样式</li><li><code>ReattachConnections</code> 端点是否可以再次重新连接</li><li><code>RenderMode</code> 渲染模式，默认是svg</li><li><code>Scope</code> 作用域，用来区分哪些端点可以连接，作用域相同的可以连接</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 可以使用importDefaults，来重写某些默认设置</span></span>
<span class="line"><span style="color:#f6f6f4;">jsPlumb.importDefaults({</span></span>
<span class="line"><span style="color:#f6f6f4;">  PaintStyle : {</span></span>
<span class="line"><span style="color:#f6f6f4;">    strokeWidth:13,</span></span>
<span class="line"><span style="color:#f6f6f4;">    stroke: &#39;rgba(200,0,0,0.5)&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">  },</span></span>
<span class="line"><span style="color:#f6f6f4;">  DragOptions : { cursor: &quot;crosshair&quot; },</span></span>
<span class="line"><span style="color:#f6f6f4;">  Endpoints : [ [ &quot;Dot&quot;, { radius:7 } ], [ &quot;Dot&quot;, { radius:11 } ] ],</span></span>
<span class="line"><span style="color:#f6f6f4;">  EndpointStyles : [{ fill:&quot;#225588&quot; }, { fill:&quot;#558822&quot; }]</span></span>
<span class="line"><span style="color:#f6f6f4;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 可以使用importDefaults，来重写某些默认设置</span></span>
<span class="line"><span style="color:#24292e;">jsPlumb.importDefaults({</span></span>
<span class="line"><span style="color:#24292e;">  PaintStyle : {</span></span>
<span class="line"><span style="color:#24292e;">    strokeWidth:13,</span></span>
<span class="line"><span style="color:#24292e;">    stroke: &#39;rgba(200,0,0,0.5)&#39;</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  DragOptions : { cursor: &quot;crosshair&quot; },</span></span>
<span class="line"><span style="color:#24292e;">  Endpoints : [ [ &quot;Dot&quot;, { radius:7 } ], [ &quot;Dot&quot;, { radius:11 } ] ],</span></span>
<span class="line"><span style="color:#24292e;">  EndpointStyles : [{ fill:&quot;#225588&quot; }, { fill:&quot;#558822&quot; }]</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><h1 id="_5-工具函数" tabindex="-1">5. 工具函数 <a class="header-anchor" href="#_5-工具函数" aria-label="Permalink to &quot;5. 工具函数&quot;">​</a></h1><h2 id="_5-1-重绘某个元素-jsplumb-revalidate" tabindex="-1">5.1. 重绘某个元素 jsPlumb.revalidate <a class="header-anchor" href="#_5-1-重绘某个元素-jsplumb-revalidate" aria-label="Permalink to &quot;5.1. 重绘某个元素 jsPlumb.revalidate&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">jsPlumb.</span><span style="color:#62E884;">revalidate</span><span style="color:#F6F6F4;">(el)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">jsPlumb.</span><span style="color:#6F42C1;">revalidate</span><span style="color:#24292E;">(el)</span></span></code></pre></div><p>关于 el:</p><ul><li>a string, representing the id of some element</li><li>a list of strings, representing the ids of some elements</li><li>a DOM element</li><li>a list of DOM elements</li><li>a selector from your underlying library</li></ul><h2 id="_5-2-重绘所有元素-jsplumb-repainteverything" tabindex="-1">5.2. 重绘所有元素 jsPlumb.repaintEverything <a class="header-anchor" href="#_5-2-重绘所有元素-jsplumb-repainteverything" aria-label="Permalink to &quot;5.2. 重绘所有元素 jsPlumb.repaintEverything&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">jsPlumb.</span><span style="color:#62E884;">repaintEverything</span><span style="color:#F6F6F4;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">jsPlumb.</span><span style="color:#6F42C1;">repaintEverything</span><span style="color:#24292E;">()</span></span></code></pre></div><h2 id="_5-3-重设节点id-jsplumb-setid" tabindex="-1">5.3. 重设节点ID jsPlumb.setId <a class="header-anchor" href="#_5-3-重设节点id-jsplumb-setid" aria-label="Permalink to &quot;5.3. 重设节点ID jsPlumb.setId&quot;">​</a></h2><p>节点的ID对jsPlumb的重要性不言而喻，有时候我们需要改变节点的id, 那么需要显式的告诉jsPlumb节点id改变了。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">jsPlumb.</span><span style="color:#62E884;">setId</span><span style="color:#F6F6F4;">(el, newId);</span></span>
<span class="line"><span style="color:#7B7F8B;">// 或者</span></span>
<span class="line"><span style="color:#F6F6F4;">jsPlumb.</span><span style="color:#62E884;">setIdChanged</span><span style="color:#F6F6F4;">(oldId, newId);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">jsPlumb.</span><span style="color:#6F42C1;">setId</span><span style="color:#24292E;">(el, newId);</span></span>
<span class="line"><span style="color:#6A737D;">// 或者</span></span>
<span class="line"><span style="color:#24292E;">jsPlumb.</span><span style="color:#6F42C1;">setIdChanged</span><span style="color:#24292E;">(oldId, newId);</span></span></code></pre></div><h2 id="_5-4-删除节点-jsplumb-remove" tabindex="-1">5.4. 删除节点 jsPlumb.remove <a class="header-anchor" href="#_5-4-删除节点-jsplumb-remove" aria-label="Permalink to &quot;5.4. 删除节点 jsPlumb.remove&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> conn </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> jsPlumb.</span><span style="color:#62E884;">connect</span><span style="color:#F6F6F4;">({source</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">element1</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, target</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">element2</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">});</span></span>
<span class="line"><span style="color:#F286C4;">...</span></span>
<span class="line"><span style="color:#F6F6F4;">jsPlumb.</span><span style="color:#62E884;">remove</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">element1</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> conn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> jsPlumb.</span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">({source:</span><span style="color:#032F62;">&quot;element1&quot;</span><span style="color:#24292E;">, target:</span><span style="color:#032F62;">&quot;element2&quot;</span><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">jsPlumb.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;element1&quot;</span><span style="color:#24292E;">);</span></span></code></pre></div><h2 id="_5-5-清空所有节点连接和端点-jsplumb-empty" tabindex="-1">5.5. 清空所有节点连接和端点 jsPlumb.empty <a class="header-anchor" href="#_5-5-清空所有节点连接和端点-jsplumb-empty" aria-label="Permalink to &quot;5.5. 清空所有节点连接和端点 jsPlumb.empty&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> conn </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> jsPlumb.</span><span style="color:#62E884;">connect</span><span style="color:#F6F6F4;">({source</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">one</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, target</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">someOtherElement</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">});</span></span>
<span class="line"><span style="color:#F286C4;">...</span></span>
<span class="line"><span style="color:#F6F6F4;">jsPlumb.</span><span style="color:#62E884;">empty</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">list</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> conn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> jsPlumb.</span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">({source:</span><span style="color:#032F62;">&quot;one&quot;</span><span style="color:#24292E;">, target:</span><span style="color:#032F62;">&quot;someOtherElement&quot;</span><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">jsPlumb.</span><span style="color:#6F42C1;">empty</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;list&quot;</span><span style="color:#24292E;">);</span></span></code></pre></div><h2 id="_5-6-移除连线-jsplumb-detach" tabindex="-1">5.6. 移除连线 jsPlumb.detach <a class="header-anchor" href="#_5-6-移除连线-jsplumb-detach" aria-label="Permalink to &quot;5.6. 移除连线 jsPlumb.detach&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> conn </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> jsPlumb.</span><span style="color:#62E884;">connect</span><span style="color:#F6F6F4;">({ some params});</span></span>
<span class="line"><span style="color:#F286C4;">...</span></span>
<span class="line"><span style="color:#F6F6F4;">jsPlumb.</span><span style="color:#62E884;">detach</span><span style="color:#F6F6F4;">(conn);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> conn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> jsPlumb.</span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">({ some params});</span></span>
<span class="line"><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">jsPlumb.</span><span style="color:#6F42C1;">detach</span><span style="color:#24292E;">(conn);</span></span></code></pre></div><h2 id="_5-7-移除某个节点上的所有连线-jsplumb-deleteconnectionsforelement" tabindex="-1">5.7. 移除某个节点上的所有连线 jsPlumb.deleteConnectionsForElement <a class="header-anchor" href="#_5-7-移除某个节点上的所有连线-jsplumb-deleteconnectionsforelement" aria-label="Permalink to &quot;5.7. 移除某个节点上的所有连线 jsPlumb.deleteConnectionsForElement&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">jsPlumb.</span><span style="color:#62E884;">deleteConnectionsForElement</span><span style="color:#F6F6F4;">(el, [params])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">jsPlumb.</span><span style="color:#6F42C1;">deleteConnectionsForElement</span><span style="color:#24292E;">(el, [params])</span></span></code></pre></div><h2 id="_5-8-移除所有节点上的连线-jsplumb-deleteeveryconnection" tabindex="-1">5.8. 移除所有节点上的连线 jsPlumb.deleteEveryConnection() <a class="header-anchor" href="#_5-8-移除所有节点上的连线-jsplumb-deleteeveryconnection" aria-label="Permalink to &quot;5.8. 移除所有节点上的连线 jsPlumb.deleteEveryConnection()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">jsPlumb.</span><span style="color:#62E884;">deleteEveryConnection</span><span style="color:#F6F6F4;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">jsPlumb.</span><span style="color:#6F42C1;">deleteEveryConnection</span><span style="color:#24292E;">()</span></span></code></pre></div><h2 id="_5-9-移除某个节点上的端点" tabindex="-1">5.9. 移除某个节点上的端点 <a class="header-anchor" href="#_5-9-移除某个节点上的端点" aria-label="Permalink to &quot;5.9. 移除某个节点上的端点&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> ep </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> jsPlumb.</span><span style="color:#62E884;">addEndpoint</span><span style="color:#F6F6F4;">(someElement, { </span><span style="color:#F286C4;">...</span><span style="color:#F6F6F4;"> });</span></span>
<span class="line"><span style="color:#F286C4;">...</span></span>
<span class="line"><span style="color:#F6F6F4;">jsPlumb.</span><span style="color:#62E884;">deleteEndpoint</span><span style="color:#F6F6F4;">(ep);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> ep </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> jsPlumb.</span><span style="color:#6F42C1;">addEndpoint</span><span style="color:#24292E;">(someElement, { </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> });</span></span>
<span class="line"><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">jsPlumb.</span><span style="color:#6F42C1;">deleteEndpoint</span><span style="color:#24292E;">(ep);</span></span></code></pre></div><h2 id="_5-10-移除所有节点上的端点" tabindex="-1">5.10. 移除所有节点上的端点 <a class="header-anchor" href="#_5-10-移除所有节点上的端点" aria-label="Permalink to &quot;5.10. 移除所有节点上的端点&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">jsPlumb.</span><span style="color:#62E884;">deleteEveryEndpoint</span><span style="color:#F6F6F4;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">jsPlumb.</span><span style="color:#6F42C1;">deleteEveryEndpoint</span><span style="color:#24292E;">();</span></span></code></pre></div><h2 id="_5-11-元素的显示与隐藏" tabindex="-1">5.11. 元素的显示与隐藏 <a class="header-anchor" href="#_5-11-元素的显示与隐藏" aria-label="Permalink to &quot;5.11. 元素的显示与隐藏&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">jsPlumb.</span><span style="color:#62E884;">hide</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">window5</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">); </span><span style="color:#7B7F8B;">// 隐藏节点的所有连线</span></span>
<span class="line"><span style="color:#F6F6F4;">jsPlumb.</span><span style="color:#62E884;">hide</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">window5</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">); </span><span style="color:#7B7F8B;">// 隐藏节点的所有端点</span></span>
<span class="line"><span style="color:#F6F6F4;">jsPlumb.</span><span style="color:#62E884;">show</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">window5</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">); </span><span style="color:#7B7F8B;">// 显示节点的所有连线</span></span>
<span class="line"><span style="color:#F6F6F4;">jsPlumb.</span><span style="color:#62E884;">toggleVisible</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">window5</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">); </span><span style="color:#7B7F8B;">// 反转显示节点的连线</span></span>
<span class="line"><span style="color:#F6F6F4;">jsPlumb.</span><span style="color:#62E884;">show</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">window5</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">); </span><span style="color:#7B7F8B;">// 显示节点的所有连线和端点</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">jsPlumb.</span><span style="color:#6F42C1;">hide</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;window5&quot;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 隐藏节点的所有连线</span></span>
<span class="line"><span style="color:#24292E;">jsPlumb.</span><span style="color:#6F42C1;">hide</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;window5&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 隐藏节点的所有端点</span></span>
<span class="line"><span style="color:#24292E;">jsPlumb.</span><span style="color:#6F42C1;">show</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;window5&quot;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 显示节点的所有连线</span></span>
<span class="line"><span style="color:#24292E;">jsPlumb.</span><span style="color:#6F42C1;">toggleVisible</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;window5&quot;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 反转显示节点的连线</span></span>
<span class="line"><span style="color:#24292E;">jsPlumb.</span><span style="color:#6F42C1;">show</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;window5&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 显示节点的所有连线和端点</span></span></code></pre></div><h1 id="_6-样式修改" tabindex="-1">6. 样式修改 <a class="header-anchor" href="#_6-样式修改" aria-label="Permalink to &quot;6. 样式修改&quot;">​</a></h1><h2 id="_6-1-通过css添加样式" tabindex="-1">6.1. 通过css添加样式 <a class="header-anchor" href="#_6-1-通过css添加样式" aria-label="Permalink to &quot;6.1. 通过css添加样式&quot;">​</a></h2><p>参考：<a href="http://jsplumb.github.io/jsplumb/styling-via-css.html" target="_blank" rel="noreferrer">http://jsplumb.github.io/jsplumb/styling-via-css.html</a></p><h2 id="_6-2-paintstyle属性添加" tabindex="-1">6.2. paintStyle属性添加 <a class="header-anchor" href="#_6-2-paintstyle属性添加" aria-label="Permalink to &quot;6.2. paintStyle属性添加&quot;">​</a></h2><p>参考：<a href="http://jsplumb.github.io/jsplumb/paint-styles.html" target="_blank" rel="noreferrer">http://jsplumb.github.io/jsplumb/paint-styles.html</a></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">jsPlumb.</span><span style="color:#62E884;">connect</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">    source</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">el1</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    target</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">el2</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    paintStyle</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;">{ stroke</span><span style="color:#F286C4;">:</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">blue</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, strokeWidth</span><span style="color:#F286C4;">:</span><span style="color:#BF9EEE;">10</span><span style="color:#F6F6F4;"> }</span></span>
<span class="line"><span style="color:#F6F6F4;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">jsPlumb.</span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    source:</span><span style="color:#032F62;">&quot;el1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    target:</span><span style="color:#032F62;">&quot;el2&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    paintStyle:{ stroke:</span><span style="color:#032F62;">&quot;blue&quot;</span><span style="color:#24292E;">, strokeWidth:</span><span style="color:#005CC5;">10</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h1 id="_7-查询-todo" tabindex="-1">7. 查询 [todo] <a class="header-anchor" href="#_7-查询-todo" aria-label="Permalink to &quot;7. 查询 [todo]&quot;">​</a></h1><h1 id="_8-视图与数据结构同步" tabindex="-1">8. 视图与数据结构同步 <a class="header-anchor" href="#_8-视图与数据结构同步" aria-label="Permalink to &quot;8. 视图与数据结构同步&quot;">​</a></h1><p><strong>首先，jsplumb并不维护你的数据结构。</strong> 你的数据结构你自己维护，如果页面发生改变，jsplumb会通过事件通知你。你通过事件去改变你的数据。</p><p>熟悉react或者vue的，会有点熟悉，这不就是单向数据流吗？</p><ol><li>通过渲染逻辑将基本数据结构渲染成连线图</li><li>连线图发生改变，如发生连线之类的，jsplumb会通过事件告诉你</li><li>你需要处理jsplumb给你的事件，然后修改你的基本数据</li></ol><p><img src="`+P+`" alt=""></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">[</span></span>
<span class="line"><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">  id</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">  link</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">}, </span></span>
<span class="line"><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">  id</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">  link</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">}]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  id: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  link: </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">}, </span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  id: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  link: </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">}]</span></span></code></pre></div><p>当你收到连接建立事件后，例如1连接到了2， 你需要修改这个数据结构。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">[</span></span>
<span class="line"><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">  id</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">  link</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">2</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">}, </span></span>
<span class="line"><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">  id</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">  link</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">}]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  id: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  link: </span><span style="color:#032F62;">&#39;2&#39;</span></span>
<span class="line"><span style="color:#24292E;">}, </span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  id: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  link: </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">}]</span></span></code></pre></div><h1 id="_9-有没有稍微复杂一点-带有拖放的栗子" tabindex="-1">9. 有没有稍微复杂一点，带有拖放的栗子？ <a class="header-anchor" href="#_9-有没有稍微复杂一点-带有拖放的栗子" aria-label="Permalink to &quot;9. 有没有稍微复杂一点，带有拖放的栗子？&quot;">​</a></h1><p>项目地址：<a href="https://github.com/wangduanduan/visual-ivr" target="_blank" rel="noreferrer">https://github.com/wangduanduan/visual-ivr</a> 在线demo: <a href="https://wdd.js.org/visual-ivr/" target="_blank" rel="noreferrer">https://wdd.js.org/visual-ivr/</a></p><p><img src="`+C+'" alt=""></p><p>上图是基于jsplumb做的最基础的demo版本。</p><p>下图是是最近优化后的版本</p><p><img src="'+D+'" alt=""></p><hr><p>模仿官网database-visualizer实现sqlflow数据血缘流程图的demo</p><p>项目地址：<a href="https://github.com/mizuhokaga/jsplumb-dataLineage" target="_blank" rel="noreferrer">https://github.com/mizuhokaga/jsplumb-dataLineage</a></p><p><img src="https://github.com/mizuhokaga/jsplumb-dataLineage/raw/master/imgs/myflow.png" alt=""></p><h1 id="_10-还有哪些类似的图形连线可视化项目" tabindex="-1">10. 还有哪些类似的图形连线可视化项目 <a class="header-anchor" href="#_10-还有哪些类似的图形连线可视化项目" aria-label="Permalink to &quot;10. 还有哪些类似的图形连线可视化项目&quot;">​</a></h1><h2 id="_10-1-g6-antv" tabindex="-1">10.1. G6 AntV <a class="header-anchor" href="#_10-1-g6-antv" aria-label="Permalink to &quot;10.1. G6 AntV&quot;">​</a></h2><p><a href="https://github.com/antvis/g6" target="_blank" rel="noreferrer">https://github.com/antvis/g6</a></p><p><img src="'+w+'" alt=""></p><h2 id="_10-2-vivagraphjs" tabindex="-1">10.2. VivaGraphJS <a class="header-anchor" href="#_10-2-vivagraphjs" aria-label="Permalink to &quot;10.2. VivaGraphJS&quot;">​</a></h2><p><a href="https://github.com/anvaka/VivaGraphJS" target="_blank" rel="noreferrer">https://github.com/anvaka/VivaGraphJS</a></p><p><img src="'+x+'" alt=""></p><p><img src="'+S+'" alt=""></p><h2 id="_10-3-springy" tabindex="-1">10.3. springy <a class="header-anchor" href="#_10-3-springy" aria-label="Permalink to &quot;10.3. springy&quot;">​</a></h2><p><a href="https://github.com/dhotson/springy" target="_blank" rel="noreferrer">https://github.com/dhotson/springy</a></p><p><img src="'+A+'" alt=""></p><h2 id="_10-4-graphviz" tabindex="-1">10.4. graphviz <a class="header-anchor" href="#_10-4-graphviz" aria-label="Permalink to &quot;10.4. graphviz&quot;">​</a></h2><p><a href="https://www.graphviz.org/about/" target="_blank" rel="noreferrer">https://www.graphviz.org/about/</a></p><p>中文有个基本的介绍文档写的不错，参考：<a href="https://casatwy.com/shi-yong-dotyu-yan-he-graphvizhui-tu-fan-yi.html" target="_blank" rel="noreferrer">https://casatwy.com/shi-yong-dotyu-yan-he-graphvizhui-tu-fan-yi.html</a></p><p>graphviz可以把你写的.dot文件渲染成一张图。</p><p>mac上首先要安装：<code>brew install graphviz</code></p><p>然后如果你用vscode的话，vscode上又graphviz的扩展插件，可以预览你的dot文件。</p><p>总体来说，graphviz的功能十分强大，同时它也提供了其他语言的脚本api来方便绘图。总之，如果你不想通过拖拉拽来绘制一些流程图，又对图形布局不是很感兴趣的话，<code>graphviz是一个免费而且效率高而且能装逼的工具</code></p><p><img src="'+B+'" alt=""></p><p>再贴几张graphviz的绘图</p><p><img src="'+O+'" alt=""></p><p><img src="'+z+'" alt=""></p><p><img src="'+I+'" alt=""></p><p><img src="'+R+'" alt=""></p><h2 id="_10-5-visjs" tabindex="-1">10.5. visjs <a class="header-anchor" href="#_10-5-visjs" aria-label="Permalink to &quot;10.5. visjs&quot;">​</a></h2><p><a href="http://visjs.org/index.html" target="_blank" rel="noreferrer">http://visjs.org/index.html</a></p><p>该项目看起来不错，github上将近有7000 star, 但是它的开发者似乎没时间维护该项目了，正在给该项目找下家。</p><p><img src="'+J+'" alt=""></p><h1 id="_11-参考资源" tabindex="-1">11. 参考资源 <a class="header-anchor" href="#_11-参考资源" aria-label="Permalink to &quot;11. 参考资源&quot;">​</a></h1><ul><li><a href="http://jsplumb.github.io/jsplumb/home.html" target="_blank" rel="noreferrer">官方文档</a></li></ul>',286),W=[T];function $(M,V,Z,H,G,U){return n(),a("div",null,W)}const Q=s(L,[["render",$]]);export{X as __pageData,Q as default};
