import{_ as s,o as n,c as a,V as l}from"./chunks/framework.c6d8cbec.js";const g=JSON.parse('{"title":"AntV X6 技术分享","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/graph/AntV_X6.md","filePath":"frontend/graph/AntV_X6.md"}'),p={name:"frontend/graph/AntV_X6.md"},e=l(`<h1 id="antv-x6-技术分享" tabindex="-1">AntV X6 技术分享 <a class="header-anchor" href="#antv-x6-技术分享" aria-label="Permalink to &quot;AntV X6 技术分享&quot;">​</a></h1><h3 id="一、本文目的" tabindex="-1">一、本文目的 <a class="header-anchor" href="#一、本文目的" aria-label="Permalink to &quot;一、本文目的&quot;">​</a></h3><p>对 AntV x6 知识点的一个总结，也为其他开发同学提供一个说明文档。</p><h3 id="二、知识要点" tabindex="-1">二、知识要点 <a class="header-anchor" href="#二、知识要点" aria-label="Permalink to &quot;二、知识要点&quot;">​</a></h3><h4 id="_1、简介" tabindex="-1">1、简介 <a class="header-anchor" href="#_1、简介" aria-label="Permalink to &quot;1、简介&quot;">​</a></h4><p>X6 是 AntV 旗下的图编辑引擎，提供了一系列开箱即用的交互组件和简单易用的节点定制能力，方便我们快速搭建流程图、DAG 图、ER 图等图应用。</p><h4 id="_2、安装" tabindex="-1">2、安装 <a class="header-anchor" href="#_2、安装" aria-label="Permalink to &quot;2、安装&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">npm i @antv/x6 -S</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">yarn add @antv/6</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm i @antv/x6 -S</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">yarn add @antv/6</span></span></code></pre></div><h4 id="_3、实例代码" tabindex="-1">3、实例代码 <a class="header-anchor" href="#_3、实例代码" aria-label="Permalink to &quot;3、实例代码&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">import { Graph } from &#39;@antv/x6&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">const graph = new Graph({</span></span>
<span class="line"><span style="color:#f6f6f4;">  container: document.getElementById(&#39;container&#39;),</span></span>
<span class="line"><span style="color:#f6f6f4;">  width: 800,</span></span>
<span class="line"><span style="color:#f6f6f4;">  height: 600,</span></span>
<span class="line"><span style="color:#f6f6f4;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import { Graph } from &#39;@antv/x6&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const graph = new Graph({</span></span>
<span class="line"><span style="color:#24292e;">  container: document.getElementById(&#39;container&#39;),</span></span>
<span class="line"><span style="color:#24292e;">  width: 800,</span></span>
<span class="line"><span style="color:#24292e;">  height: 600,</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><h4 id="_4、画布-graph" tabindex="-1">4、画布 Graph <a class="header-anchor" href="#_4、画布-graph" aria-label="Permalink to &quot;4、画布 Graph&quot;">​</a></h4><p>在 X6 中，Graph 是图的载体，它包含了图上的所有元素（节点、边等），同时挂载了图的相关操作（如交互监听、元素操作、渲染等）。</p><h5 id="a-常用的方法" tabindex="-1">a. 常用的方法： <a class="header-anchor" href="#a-常用的方法" aria-label="Permalink to &quot;a. 常用的方法：&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">graph.dispose() // 销毁画布</span></span>
<span class="line"><span style="color:#f6f6f4;">graph.centerContent() //内容居中,画布内容中心与视口中心对齐</span></span>
<span class="line"><span style="color:#f6f6f4;">graph.zoom() // 获取缩放级别</span></span>
<span class="line"><span style="color:#f6f6f4;">graph.zoom(0.2) // 在原来缩放级别上增加 0.2</span></span>
<span class="line"><span style="color:#f6f6f4;">graph.zoom(-0.2) // 在原来缩放级别上减少 0.2</span></span>
<span class="line"><span style="color:#f6f6f4;">graph.getCells() // 返回画布中所有节点和边</span></span>
<span class="line"><span style="color:#f6f6f4;">graph.getNodes() // 返回画布中所有节点</span></span>
<span class="line"><span style="color:#f6f6f4;">graph.getEdges() // 返回画布中所有边</span></span>
<span class="line"><span style="color:#f6f6f4;">graph.toJSON() // 导出图中的节点和边</span></span>
<span class="line"><span style="color:#f6f6f4;">graph.fromJSON() // 反序列化 按照指定的 JSON 数据渲染节点和边。</span></span>
<span class="line"><span style="color:#f6f6f4;">graph.clearCells() // 清空画布</span></span>
<span class="line"><span style="color:#f6f6f4;">graph.resetCells() // 清空画布并添加用指定的节点/边</span></span>
<span class="line"><span style="color:#f6f6f4;">graph.getCellById() 根据节点/边的 ID 获取节点/边。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">graph.dispose() // 销毁画布</span></span>
<span class="line"><span style="color:#24292e;">graph.centerContent() //内容居中,画布内容中心与视口中心对齐</span></span>
<span class="line"><span style="color:#24292e;">graph.zoom() // 获取缩放级别</span></span>
<span class="line"><span style="color:#24292e;">graph.zoom(0.2) // 在原来缩放级别上增加 0.2</span></span>
<span class="line"><span style="color:#24292e;">graph.zoom(-0.2) // 在原来缩放级别上减少 0.2</span></span>
<span class="line"><span style="color:#24292e;">graph.getCells() // 返回画布中所有节点和边</span></span>
<span class="line"><span style="color:#24292e;">graph.getNodes() // 返回画布中所有节点</span></span>
<span class="line"><span style="color:#24292e;">graph.getEdges() // 返回画布中所有边</span></span>
<span class="line"><span style="color:#24292e;">graph.toJSON() // 导出图中的节点和边</span></span>
<span class="line"><span style="color:#24292e;">graph.fromJSON() // 反序列化 按照指定的 JSON 数据渲染节点和边。</span></span>
<span class="line"><span style="color:#24292e;">graph.clearCells() // 清空画布</span></span>
<span class="line"><span style="color:#24292e;">graph.resetCells() // 清空画布并添加用指定的节点/边</span></span>
<span class="line"><span style="color:#24292e;">graph.getCellById() 根据节点/边的 ID 获取节点/边。</span></span></code></pre></div><h5 id="b-画布反序列化" tabindex="-1">b. 画布反序列化 <a class="header-anchor" href="#b-画布反序列化" aria-label="Permalink to &quot;b. 画布反序列化&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const data = {</span></span>
<span class="line"><span style="color:#f6f6f4;">  // 节点</span></span>
<span class="line"><span style="color:#f6f6f4;">  nodes: [</span></span>
<span class="line"><span style="color:#f6f6f4;">    {</span></span>
<span class="line"><span style="color:#f6f6f4;">      id: &#39;node1&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">      x: 40,</span></span>
<span class="line"><span style="color:#f6f6f4;">      y: 40,</span></span>
<span class="line"><span style="color:#f6f6f4;">      width: 80,</span></span>
<span class="line"><span style="color:#f6f6f4;">      height: 40,</span></span>
<span class="line"><span style="color:#f6f6f4;">      label: &#39;Hello&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">    },</span></span>
<span class="line"><span style="color:#f6f6f4;">    {</span></span>
<span class="line"><span style="color:#f6f6f4;">      id: &#39;node2&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">      x: 160,</span></span>
<span class="line"><span style="color:#f6f6f4;">      y: 180,</span></span>
<span class="line"><span style="color:#f6f6f4;">      width: 80,</span></span>
<span class="line"><span style="color:#f6f6f4;">      height: 40,</span></span>
<span class="line"><span style="color:#f6f6f4;">      label: &#39;World&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">  ],</span></span>
<span class="line"><span style="color:#f6f6f4;">  // 边</span></span>
<span class="line"><span style="color:#f6f6f4;">  edges: [</span></span>
<span class="line"><span style="color:#f6f6f4;">    {</span></span>
<span class="line"><span style="color:#f6f6f4;">      source: &#39;node1&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">      target: &#39;node2&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">  ]</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  graph.fromJSON(data)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const data = {</span></span>
<span class="line"><span style="color:#24292e;">  // 节点</span></span>
<span class="line"><span style="color:#24292e;">  nodes: [</span></span>
<span class="line"><span style="color:#24292e;">    {</span></span>
<span class="line"><span style="color:#24292e;">      id: &#39;node1&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      x: 40,</span></span>
<span class="line"><span style="color:#24292e;">      y: 40,</span></span>
<span class="line"><span style="color:#24292e;">      width: 80,</span></span>
<span class="line"><span style="color:#24292e;">      height: 40,</span></span>
<span class="line"><span style="color:#24292e;">      label: &#39;Hello&#39;</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    {</span></span>
<span class="line"><span style="color:#24292e;">      id: &#39;node2&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      x: 160,</span></span>
<span class="line"><span style="color:#24292e;">      y: 180,</span></span>
<span class="line"><span style="color:#24292e;">      width: 80,</span></span>
<span class="line"><span style="color:#24292e;">      height: 40,</span></span>
<span class="line"><span style="color:#24292e;">      label: &#39;World&#39;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  ],</span></span>
<span class="line"><span style="color:#24292e;">  // 边</span></span>
<span class="line"><span style="color:#24292e;">  edges: [</span></span>
<span class="line"><span style="color:#24292e;">    {</span></span>
<span class="line"><span style="color:#24292e;">      source: &#39;node1&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      target: &#39;node2&#39;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  ]</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  graph.fromJSON(data)</span></span></code></pre></div><h4 id="_5、节点-node" tabindex="-1">5、节点 Node <a class="header-anchor" href="#_5、节点-node" aria-label="Permalink to &quot;5、节点 Node&quot;">​</a></h4><p>Node 是所有节点的基类，继承自 <a href="https://x6.antv.vision/zh/docs/api/model/cell" target="_blank" rel="noreferrer">Cell</a>，并定义了节点的通用属性和方法。</p><h5 id="a-常用方法" tabindex="-1">a. 常用方法： <a class="header-anchor" href="#a-常用方法" aria-label="Permalink to &quot;a. 常用方法：&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">node.isNode() // 判断是不是节点</span></span>
<span class="line"><span style="color:#f6f6f4;">node.getBBox() // 获取节点的包围盒</span></span>
<span class="line"><span style="color:#f6f6f4;">node.size() // 获取节点大小</span></span>
<span class="line"><span style="color:#f6f6f4;">node.resize() // 改变节点大小</span></span>
<span class="line"><span style="color:#f6f6f4;">node.scale() // 缩放节点</span></span>
<span class="line"><span style="color:#f6f6f4;">node.position() // 获取节点位置</span></span>
<span class="line"><span style="color:#f6f6f4;">node.position(30, 30) // 设置节点位置</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">node.isNode() // 判断是不是节点</span></span>
<span class="line"><span style="color:#24292e;">node.getBBox() // 获取节点的包围盒</span></span>
<span class="line"><span style="color:#24292e;">node.size() // 获取节点大小</span></span>
<span class="line"><span style="color:#24292e;">node.resize() // 改变节点大小</span></span>
<span class="line"><span style="color:#24292e;">node.scale() // 缩放节点</span></span>
<span class="line"><span style="color:#24292e;">node.position() // 获取节点位置</span></span>
<span class="line"><span style="color:#24292e;">node.position(30, 30) // 设置节点位置</span></span></code></pre></div><h5 id="b-创建内置节点" tabindex="-1">b. 创建内置节点 <a class="header-anchor" href="#b-创建内置节点" aria-label="Permalink to &quot;b. 创建内置节点&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 方式一：构造函数</span></span>
<span class="line"><span style="color:#f6f6f4;">import { Shape } from &#39;@antv/x6&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">// 创建节点</span></span>
<span class="line"><span style="color:#f6f6f4;">const rect = new Shape.Rect({</span></span>
<span class="line"><span style="color:#f6f6f4;">  x: 100,</span></span>
<span class="line"><span style="color:#f6f6f4;">  y: 200,</span></span>
<span class="line"><span style="color:#f6f6f4;">  width: 80,</span></span>
<span class="line"><span style="color:#f6f6f4;">  height: 40,</span></span>
<span class="line"><span style="color:#f6f6f4;">  angle: 30,</span></span>
<span class="line"><span style="color:#f6f6f4;">  attrs: {</span></span>
<span class="line"><span style="color:#f6f6f4;">    body: {</span></span>
<span class="line"><span style="color:#f6f6f4;">      fill: &#39;blue&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    },</span></span>
<span class="line"><span style="color:#f6f6f4;">    label: {</span></span>
<span class="line"><span style="color:#f6f6f4;">      text: &#39;Hello&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">      fill: &#39;white&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    },</span></span>
<span class="line"><span style="color:#f6f6f4;">  },</span></span>
<span class="line"><span style="color:#f6f6f4;">})</span></span>
<span class="line"><span style="color:#f6f6f4;">graph.addNode(rect)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">// 方式二：graph.addNode</span></span>
<span class="line"><span style="color:#f6f6f4;">const rect = graph.addNode({</span></span>
<span class="line"><span style="color:#f6f6f4;">  shape: &#39;rect&#39;, // 指定使用何种图形，默认值为 &#39;rect&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">  x: 100,</span></span>
<span class="line"><span style="color:#f6f6f4;">  y: 200,</span></span>
<span class="line"><span style="color:#f6f6f4;">  width: 80,</span></span>
<span class="line"><span style="color:#f6f6f4;">  height: 40,</span></span>
<span class="line"><span style="color:#f6f6f4;">  angle: 30,</span></span>
<span class="line"><span style="color:#f6f6f4;">  attrs: {</span></span>
<span class="line"><span style="color:#f6f6f4;">    body: {</span></span>
<span class="line"><span style="color:#f6f6f4;">      fill: &#39;blue&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    },</span></span>
<span class="line"><span style="color:#f6f6f4;">    label: {</span></span>
<span class="line"><span style="color:#f6f6f4;">      text: &#39;Hello&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">      fill: &#39;white&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    },</span></span>
<span class="line"><span style="color:#f6f6f4;">  },</span></span>
<span class="line"><span style="color:#f6f6f4;">})</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">// 方式三：graph.createNode</span></span>
<span class="line"><span style="color:#f6f6f4;">const node = graph.createNode({</span></span>
<span class="line"><span style="color:#f6f6f4;">  width: 75,</span></span>
<span class="line"><span style="color:#f6f6f4;">  height: 38,</span></span>
<span class="line"><span style="color:#f6f6f4;">  shape: &#39;html&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">  attrs: {</span></span>
<span class="line"><span style="color:#f6f6f4;">    label: {</span></span>
<span class="line"><span style="color:#f6f6f4;">      text: &#39;开始&#39;, // 文本</span></span>
<span class="line"><span style="color:#f6f6f4;">      style: {</span></span>
<span class="line"><span style="color:#f6f6f4;">        visibility: &#39;hidden&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">      }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">  },</span></span>
<span class="line"><span style="color:#f6f6f4;">  ports: {</span></span>
<span class="line"><span style="color:#f6f6f4;">    groups,</span></span>
<span class="line"><span style="color:#f6f6f4;">    items: startGroupItems</span></span>
<span class="line"><span style="color:#f6f6f4;">  },</span></span>
<span class="line"><span style="color:#f6f6f4;">  type: &#39;start&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">  nodeDescription: &#39;开始节点描述&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">  html: &#39;start-html&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">  ...startNodeSetting</span></span>
<span class="line"><span style="color:#f6f6f4;">});</span></span>
<span class="line"><span style="color:#f6f6f4;">this.dnd.start(node, e);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 方式一：构造函数</span></span>
<span class="line"><span style="color:#24292e;">import { Shape } from &#39;@antv/x6&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 创建节点</span></span>
<span class="line"><span style="color:#24292e;">const rect = new Shape.Rect({</span></span>
<span class="line"><span style="color:#24292e;">  x: 100,</span></span>
<span class="line"><span style="color:#24292e;">  y: 200,</span></span>
<span class="line"><span style="color:#24292e;">  width: 80,</span></span>
<span class="line"><span style="color:#24292e;">  height: 40,</span></span>
<span class="line"><span style="color:#24292e;">  angle: 30,</span></span>
<span class="line"><span style="color:#24292e;">  attrs: {</span></span>
<span class="line"><span style="color:#24292e;">    body: {</span></span>
<span class="line"><span style="color:#24292e;">      fill: &#39;blue&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    label: {</span></span>
<span class="line"><span style="color:#24292e;">      text: &#39;Hello&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      fill: &#39;white&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">graph.addNode(rect)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 方式二：graph.addNode</span></span>
<span class="line"><span style="color:#24292e;">const rect = graph.addNode({</span></span>
<span class="line"><span style="color:#24292e;">  shape: &#39;rect&#39;, // 指定使用何种图形，默认值为 &#39;rect&#39;</span></span>
<span class="line"><span style="color:#24292e;">  x: 100,</span></span>
<span class="line"><span style="color:#24292e;">  y: 200,</span></span>
<span class="line"><span style="color:#24292e;">  width: 80,</span></span>
<span class="line"><span style="color:#24292e;">  height: 40,</span></span>
<span class="line"><span style="color:#24292e;">  angle: 30,</span></span>
<span class="line"><span style="color:#24292e;">  attrs: {</span></span>
<span class="line"><span style="color:#24292e;">    body: {</span></span>
<span class="line"><span style="color:#24292e;">      fill: &#39;blue&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    label: {</span></span>
<span class="line"><span style="color:#24292e;">      text: &#39;Hello&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      fill: &#39;white&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 方式三：graph.createNode</span></span>
<span class="line"><span style="color:#24292e;">const node = graph.createNode({</span></span>
<span class="line"><span style="color:#24292e;">  width: 75,</span></span>
<span class="line"><span style="color:#24292e;">  height: 38,</span></span>
<span class="line"><span style="color:#24292e;">  shape: &#39;html&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  attrs: {</span></span>
<span class="line"><span style="color:#24292e;">    label: {</span></span>
<span class="line"><span style="color:#24292e;">      text: &#39;开始&#39;, // 文本</span></span>
<span class="line"><span style="color:#24292e;">      style: {</span></span>
<span class="line"><span style="color:#24292e;">        visibility: &#39;hidden&#39;</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  ports: {</span></span>
<span class="line"><span style="color:#24292e;">    groups,</span></span>
<span class="line"><span style="color:#24292e;">    items: startGroupItems</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  type: &#39;start&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  nodeDescription: &#39;开始节点描述&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  html: &#39;start-html&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  ...startNodeSetting</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;">this.dnd.start(node, e);</span></span></code></pre></div><h5 id="c-注册自定义-html-节点" tabindex="-1">c. 注册自定义 HTML 节点 <a class="header-anchor" href="#c-注册自定义-html-节点" aria-label="Permalink to &quot;c. 注册自定义 HTML 节点&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">registerHTMLComponent() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    const startHtml = \`</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;div class=&quot;custom-node-wrap&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">          &lt;div class=&quot;custom-node start-node&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;svg class=&quot;icon&quot; aria-hidden=&quot;true&quot; class=&quot;custom-node-body-img&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">              &lt;use xlink:href=&quot;#iconkaishi&quot;&gt;&lt;/use&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;/svg&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;div class=&quot;text&quot;&gt;开始&lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">          &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        \`;</span></span>
<span class="line"><span style="color:#f6f6f4;">    const approvalHtml = \`</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;div class=&quot;custom-node-wrap&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">          &lt;div class=&quot;custom-node approval-node&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;div class=&quot;custom-node-header approval-node-header&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">              &lt;div class=&quot;custom-node-header-name approval-node-name&quot;&gt;审批节点&lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">              &lt;i class=&quot;custom-node-header-icon iconfont iconshenpi&quot;&gt;&lt;/i&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;div class=&quot;custom-node-body&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">              &lt;img class=&quot;custom-node-body-img&quot; src=&quot;/static/images/avatar.png&quot;/&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        \`;</span></span>
<span class="line"><span style="color:#f6f6f4;">    const aggregationHtml = \`</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;div class=&quot;custom-node-wrap&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">          &lt;div class=&quot;custom-node aggregation-node&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;div class=&quot;custom-node-body aggregation-node-body&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;div class=&quot;custom-node-body-user aggregation-node-name&quot;&gt;聚合节点&lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;svg class=&quot;icon&quot; aria-hidden=&quot;true&quot; class=&quot;custom-node-body-img&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">              &lt;use xlink:href=&quot;#iconjuhejiedian&quot;&gt;&lt;/use&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;/svg&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">          &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        \`;</span></span>
<span class="line"><span style="color:#f6f6f4;">    const endHtml = \`</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;div class=&quot;custom-node-wrap&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">          &lt;div class=&quot;custom-node end-node&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;svg class=&quot;icon&quot; aria-hidden=&quot;true&quot; class=&quot;custom-node-body-img&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">              &lt;use xlink:href=&quot;#iconjieshu&quot;&gt;&lt;/use&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;/svg&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;div class=&quot;text&quot;&gt;结束&lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">          &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        \`;</span></span>
<span class="line"><span style="color:#f6f6f4;">    const branchHtml = \`</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;div class=&quot;branch-node-wrap&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">             &lt;div class=&quot;branch-node&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">               &lt;svg fill=&quot;#fff&quot; width=&quot;110&quot; height=&quot;54&quot; version=&quot;1.1&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                 &lt;polygon points=&quot;0,27 55,0 110,27 55,54&quot;/&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                 &lt;g&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                   &lt;path d=&quot;M110,27 L55,54 Z&quot; stroke=&quot;rgba(0, 0, 0, 0.1)&quot; stroke-width=&quot;2&quot; transform=&quot;translate(0, -1)&quot;&gt;&lt;/path&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                   &lt;path d=&quot;M55,54 L0,27 Z&quot; stroke=&quot;rgba(0, 0, 0, 0.1)&quot; stroke-width=&quot;2&quot; transform=&quot;translate(0, -1)&quot;&gt;&lt;/path&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                 &lt;/g&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                 &lt;use width=&quot;18px&quot; height=&quot;18px&quot; x=&quot;30&quot; y=&quot;18&quot; xlink:href=&quot;#iconfenzhijiedian-yuanxing&quot;&gt;&lt;/use&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">               &lt;/svg&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">             &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        \`;</span></span>
<span class="line"><span style="color:#f6f6f4;">    Graph.registerHTMLComponent(&#39;start-html&#39;, startHtml, true);</span></span>
<span class="line"><span style="color:#f6f6f4;">    Graph.registerHTMLComponent(&#39;approval-html&#39;, approvalHtml, true);</span></span>
<span class="line"><span style="color:#f6f6f4;">    Graph.registerHTMLComponent(&#39;aggregation-html&#39;, aggregationHtml, true);</span></span>
<span class="line"><span style="color:#f6f6f4;">    Graph.registerHTMLComponent(&#39;end-html&#39;, endHtml, true);</span></span>
<span class="line"><span style="color:#f6f6f4;">    Graph.registerHTMLComponent(&#39;branch-html&#39;, branchHtml, true);</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">registerHTMLComponent() {</span></span>
<span class="line"><span style="color:#24292e;">    const startHtml = \`</span></span>
<span class="line"><span style="color:#24292e;">        &lt;div class=&quot;custom-node-wrap&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">          &lt;div class=&quot;custom-node start-node&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;svg class=&quot;icon&quot; aria-hidden=&quot;true&quot; class=&quot;custom-node-body-img&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">              &lt;use xlink:href=&quot;#iconkaishi&quot;&gt;&lt;/use&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/svg&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;div class=&quot;text&quot;&gt;开始&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">          &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">        \`;</span></span>
<span class="line"><span style="color:#24292e;">    const approvalHtml = \`</span></span>
<span class="line"><span style="color:#24292e;">        &lt;div class=&quot;custom-node-wrap&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">          &lt;div class=&quot;custom-node approval-node&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;div class=&quot;custom-node-header approval-node-header&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">              &lt;div class=&quot;custom-node-header-name approval-node-name&quot;&gt;审批节点&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">              &lt;i class=&quot;custom-node-header-icon iconfont iconshenpi&quot;&gt;&lt;/i&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;div class=&quot;custom-node-body&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">              &lt;img class=&quot;custom-node-body-img&quot; src=&quot;/static/images/avatar.png&quot;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">        \`;</span></span>
<span class="line"><span style="color:#24292e;">    const aggregationHtml = \`</span></span>
<span class="line"><span style="color:#24292e;">        &lt;div class=&quot;custom-node-wrap&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">          &lt;div class=&quot;custom-node aggregation-node&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;div class=&quot;custom-node-body aggregation-node-body&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;div class=&quot;custom-node-body-user aggregation-node-name&quot;&gt;聚合节点&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;svg class=&quot;icon&quot; aria-hidden=&quot;true&quot; class=&quot;custom-node-body-img&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">              &lt;use xlink:href=&quot;#iconjuhejiedian&quot;&gt;&lt;/use&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/svg&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">          &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">        \`;</span></span>
<span class="line"><span style="color:#24292e;">    const endHtml = \`</span></span>
<span class="line"><span style="color:#24292e;">        &lt;div class=&quot;custom-node-wrap&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">          &lt;div class=&quot;custom-node end-node&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;svg class=&quot;icon&quot; aria-hidden=&quot;true&quot; class=&quot;custom-node-body-img&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">              &lt;use xlink:href=&quot;#iconjieshu&quot;&gt;&lt;/use&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/svg&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;div class=&quot;text&quot;&gt;结束&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">          &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">        \`;</span></span>
<span class="line"><span style="color:#24292e;">    const branchHtml = \`</span></span>
<span class="line"><span style="color:#24292e;">            &lt;div class=&quot;branch-node-wrap&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">             &lt;div class=&quot;branch-node&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">               &lt;svg fill=&quot;#fff&quot; width=&quot;110&quot; height=&quot;54&quot; version=&quot;1.1&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                 &lt;polygon points=&quot;0,27 55,0 110,27 55,54&quot;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">                 &lt;g&gt;</span></span>
<span class="line"><span style="color:#24292e;">                   &lt;path d=&quot;M110,27 L55,54 Z&quot; stroke=&quot;rgba(0, 0, 0, 0.1)&quot; stroke-width=&quot;2&quot; transform=&quot;translate(0, -1)&quot;&gt;&lt;/path&gt;</span></span>
<span class="line"><span style="color:#24292e;">                   &lt;path d=&quot;M55,54 L0,27 Z&quot; stroke=&quot;rgba(0, 0, 0, 0.1)&quot; stroke-width=&quot;2&quot; transform=&quot;translate(0, -1)&quot;&gt;&lt;/path&gt;</span></span>
<span class="line"><span style="color:#24292e;">                 &lt;/g&gt;</span></span>
<span class="line"><span style="color:#24292e;">                 &lt;use width=&quot;18px&quot; height=&quot;18px&quot; x=&quot;30&quot; y=&quot;18&quot; xlink:href=&quot;#iconfenzhijiedian-yuanxing&quot;&gt;&lt;/use&gt;</span></span>
<span class="line"><span style="color:#24292e;">               &lt;/svg&gt;</span></span>
<span class="line"><span style="color:#24292e;">             &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">        \`;</span></span>
<span class="line"><span style="color:#24292e;">    Graph.registerHTMLComponent(&#39;start-html&#39;, startHtml, true);</span></span>
<span class="line"><span style="color:#24292e;">    Graph.registerHTMLComponent(&#39;approval-html&#39;, approvalHtml, true);</span></span>
<span class="line"><span style="color:#24292e;">    Graph.registerHTMLComponent(&#39;aggregation-html&#39;, aggregationHtml, true);</span></span>
<span class="line"><span style="color:#24292e;">    Graph.registerHTMLComponent(&#39;end-html&#39;, endHtml, true);</span></span>
<span class="line"><span style="color:#24292e;">    Graph.registerHTMLComponent(&#39;branch-html&#39;, branchHtml, true);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span></code></pre></div><h5 id="d-渲染-vue-节点" tabindex="-1">d. 渲染 Vue 节点 <a class="header-anchor" href="#d-渲染-vue-节点" aria-label="Permalink to &quot;d. 渲染 Vue 节点&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">npm install @antv/x6-vue-shape</span></span>
<span class="line"><span style="color:#f6f6f4;">在 vue2 下还需要安装 @vue/composition-api</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">import { Graph } from &#39;@antv/x6&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">import &#39;@antv/x6-vue-shape&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">import ServiceNode from &#39;./service-node.vue&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">Graph.registerVueComponent(</span></span>
<span class="line"><span style="color:#f6f6f4;">  &#39;service-node&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">  {</span></span>
<span class="line"><span style="color:#f6f6f4;">    template: &#39;&lt;service-node&gt;&lt;/service-node&gt;&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    components: {</span></span>
<span class="line"><span style="color:#f6f6f4;">      ServiceNode</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">  },</span></span>
<span class="line"><span style="color:#f6f6f4;">  true</span></span>
<span class="line"><span style="color:#f6f6f4;">)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">const graph = new Graph({</span></span>
<span class="line"><span style="color:#f6f6f4;">  container: document.getElementById(&#39;graph&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">})</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">const node1 = graph.addNode({</span></span>
<span class="line"><span style="color:#f6f6f4;">  shape: &quot;vue-shape&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">  x: 300,</span></span>
<span class="line"><span style="color:#f6f6f4;">  y: 250,</span></span>
<span class="line"><span style="color:#f6f6f4;">  component: &quot;service-node&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">});</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">const node2 = graph.addNode({</span></span>
<span class="line"><span style="color:#f6f6f4;">  shape: &quot;vue-shape&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">  x: 300,</span></span>
<span class="line"><span style="color:#f6f6f4;">  y: 550,</span></span>
<span class="line"><span style="color:#f6f6f4;">  component: &quot;service-node&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">});</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">graph.addEdge({</span></span>
<span class="line"><span style="color:#f6f6f4;">  source: node1,</span></span>
<span class="line"><span style="color:#f6f6f4;">  target: node2,</span></span>
<span class="line"><span style="color:#f6f6f4;">  vertices: [</span></span>
<span class="line"><span style="color:#f6f6f4;">    { x: 300, y: 250 },</span></span>
<span class="line"><span style="color:#f6f6f4;">    { x: 300, y: 550 }</span></span>
<span class="line"><span style="color:#f6f6f4;">  ]</span></span>
<span class="line"><span style="color:#f6f6f4;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm install @antv/x6-vue-shape</span></span>
<span class="line"><span style="color:#24292e;">在 vue2 下还需要安装 @vue/composition-api</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">import { Graph } from &#39;@antv/x6&#39;</span></span>
<span class="line"><span style="color:#24292e;">import &#39;@antv/x6-vue-shape&#39;</span></span>
<span class="line"><span style="color:#24292e;">import ServiceNode from &#39;./service-node.vue&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Graph.registerVueComponent(</span></span>
<span class="line"><span style="color:#24292e;">  &#39;service-node&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  {</span></span>
<span class="line"><span style="color:#24292e;">    template: &#39;&lt;service-node&gt;&lt;/service-node&gt;&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    components: {</span></span>
<span class="line"><span style="color:#24292e;">      ServiceNode</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  true</span></span>
<span class="line"><span style="color:#24292e;">)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const graph = new Graph({</span></span>
<span class="line"><span style="color:#24292e;">  container: document.getElementById(&#39;graph&#39;)</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const node1 = graph.addNode({</span></span>
<span class="line"><span style="color:#24292e;">  shape: &quot;vue-shape&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  x: 300,</span></span>
<span class="line"><span style="color:#24292e;">  y: 250,</span></span>
<span class="line"><span style="color:#24292e;">  component: &quot;service-node&quot;</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const node2 = graph.addNode({</span></span>
<span class="line"><span style="color:#24292e;">  shape: &quot;vue-shape&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  x: 300,</span></span>
<span class="line"><span style="color:#24292e;">  y: 550,</span></span>
<span class="line"><span style="color:#24292e;">  component: &quot;service-node&quot;</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">graph.addEdge({</span></span>
<span class="line"><span style="color:#24292e;">  source: node1,</span></span>
<span class="line"><span style="color:#24292e;">  target: node2,</span></span>
<span class="line"><span style="color:#24292e;">  vertices: [</span></span>
<span class="line"><span style="color:#24292e;">    { x: 300, y: 250 },</span></span>
<span class="line"><span style="color:#24292e;">    { x: 300, y: 550 }</span></span>
<span class="line"><span style="color:#24292e;">  ]</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><h4 id="_6、边-edge" tabindex="-1">6、边 Edge <a class="header-anchor" href="#_6、边-edge" aria-label="Permalink to &quot;6、边 Edge&quot;">​</a></h4><p>Edge 是边的基类，继承自 <a href="https://x6.antv.vision/zh/docs/api/model/cell" target="_blank" rel="noreferrer">Cell</a>，并定义了边的通用属性和方法。</p><h5 id="a-连接到画布上的点" tabindex="-1">a. 连接到画布上的点 <a class="header-anchor" href="#a-连接到画布上的点" aria-label="Permalink to &quot;a. 连接到画布上的点&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const edge = new Shape.Edge({</span></span>
<span class="line"><span style="color:#f6f6f4;">  source: { x: 40, y: 40 },</span></span>
<span class="line"><span style="color:#f6f6f4;">  target: { x: 180, y: 80 },</span></span>
<span class="line"><span style="color:#f6f6f4;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const edge = new Shape.Edge({</span></span>
<span class="line"><span style="color:#24292e;">  source: { x: 40, y: 40 },</span></span>
<span class="line"><span style="color:#24292e;">  target: { x: 180, y: 80 },</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><h5 id="b-连接到节点-边" tabindex="-1">b. 连接到节点/边 <a class="header-anchor" href="#b-连接到节点-边" aria-label="Permalink to &quot;b. 连接到节点/边&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const edge = new Shape.Edge({</span></span>
<span class="line"><span style="color:#f6f6f4;">  source: { cell: &#39;source-cell-id&#39; },</span></span>
<span class="line"><span style="color:#f6f6f4;">  target: { cell: &#39;target-cell-id&#39; },</span></span>
<span class="line"><span style="color:#f6f6f4;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const edge = new Shape.Edge({</span></span>
<span class="line"><span style="color:#24292e;">  source: { cell: &#39;source-cell-id&#39; },</span></span>
<span class="line"><span style="color:#24292e;">  target: { cell: &#39;target-cell-id&#39; },</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><h5 id="c-连接到节点上的链接桩" tabindex="-1">c. 连接到节点上的链接桩 <a class="header-anchor" href="#c-连接到节点上的链接桩" aria-label="Permalink to &quot;c. 连接到节点上的链接桩&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const edge = new Shape.Edge({</span></span>
<span class="line"><span style="color:#f6f6f4;">  source: { cell: &#39;source-cell-id&#39;, port: &#39;port-id&#39; },</span></span>
<span class="line"><span style="color:#f6f6f4;">  target: { cell: &#39;target-cell-id&#39;, port: &#39;port-id&#39; },</span></span>
<span class="line"><span style="color:#f6f6f4;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const edge = new Shape.Edge({</span></span>
<span class="line"><span style="color:#24292e;">  source: { cell: &#39;source-cell-id&#39;, port: &#39;port-id&#39; },</span></span>
<span class="line"><span style="color:#24292e;">  target: { cell: &#39;target-cell-id&#39;, port: &#39;port-id&#39; },</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><h5 id="d-连接到节点上的某个元素" tabindex="-1">d. 连接到节点上的某个元素 <a class="header-anchor" href="#d-连接到节点上的某个元素" aria-label="Permalink to &quot;d. 连接到节点上的某个元素&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const edge = new Shape.Edge({</span></span>
<span class="line"><span style="color:#f6f6f4;">  source: { cell: &#39;source-cell-id&#39;, selector: &#39;some-selector&#39; },</span></span>
<span class="line"><span style="color:#f6f6f4;">  target: { cell: &#39;target-cell-id&#39;, selector: &#39;some-selector&#39; },</span></span>
<span class="line"><span style="color:#f6f6f4;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const edge = new Shape.Edge({</span></span>
<span class="line"><span style="color:#24292e;">  source: { cell: &#39;source-cell-id&#39;, selector: &#39;some-selector&#39; },</span></span>
<span class="line"><span style="color:#24292e;">  target: { cell: &#39;target-cell-id&#39;, selector: &#39;some-selector&#39; },</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><h5 id="e-自定义边" tabindex="-1">e. 自定义边： <a class="header-anchor" href="#e-自定义边" aria-label="Permalink to &quot;e. 自定义边：&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">import { Shape } from &#39;@antv/x6&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">export class TreeEdge extends Shape.Edge {</span></span>
<span class="line"><span style="color:#f6f6f4;">// ...</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">TreeEdge.config({</span></span>
<span class="line"><span style="color:#f6f6f4;">  zIndex: 1</span></span>
<span class="line"><span style="color:#f6f6f4;">});</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">Edge.registry.register(&#39;tree-edge&#39;, TreeEdge, true);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import { Shape } from &#39;@antv/x6&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export class TreeEdge extends Shape.Edge {</span></span>
<span class="line"><span style="color:#24292e;">// ...</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">TreeEdge.config({</span></span>
<span class="line"><span style="color:#24292e;">  zIndex: 1</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Edge.registry.register(&#39;tree-edge&#39;, TreeEdge, true);</span></span></code></pre></div><h5 id="f-常用的方法有" tabindex="-1">f. 常用的方法有 <a class="header-anchor" href="#f-常用的方法有" aria-label="Permalink to &quot;f. 常用的方法有&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">edge.isEdge() // 判断是不是边</span></span>
<span class="line"><span style="color:#f6f6f4;">edge.getBBox() // 返回边的包围盒</span></span>
<span class="line"><span style="color:#f6f6f4;">edge.getSource() // 获取边的起始节点/起始点信息</span></span>
<span class="line"><span style="color:#f6f6f4;">edge.getTarget() // 获取边的终止节点/终止点信息</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">edge.isEdge() // 判断是不是边</span></span>
<span class="line"><span style="color:#24292e;">edge.getBBox() // 返回边的包围盒</span></span>
<span class="line"><span style="color:#24292e;">edge.getSource() // 获取边的起始节点/起始点信息</span></span>
<span class="line"><span style="color:#24292e;">edge.getTarget() // 获取边的终止节点/终止点信息</span></span></code></pre></div><h5 id="g-箭头" tabindex="-1">g. 箭头 <a class="header-anchor" href="#g-箭头" aria-label="Permalink to &quot;g. 箭头&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 内置箭头：https://x6.antv.vision/zh/docs/tutorial/intermediate/marker#%E5%86%85%E7%BD%AE%E7%AE%AD%E5%A4%B4</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">const markers = [</span></span>
<span class="line"><span style="color:#f6f6f4;">  [&#39;block&#39;, { size: 6 }],</span></span>
<span class="line"><span style="color:#f6f6f4;">  [&#39;classic&#39;, { size: 6 }],</span></span>
<span class="line"><span style="color:#f6f6f4;">  [&#39;diamond&#39;, { size: 8 }],</span></span>
<span class="line"><span style="color:#f6f6f4;">  [&#39;circle&#39;, { size: 6 }],</span></span>
<span class="line"><span style="color:#f6f6f4;">  [&#39;circlePlus&#39;, { size: 6 }],</span></span>
<span class="line"><span style="color:#f6f6f4;">  [&#39;ellipse&#39;, { rx: 6, ry: 4 }],</span></span>
<span class="line"><span style="color:#f6f6f4;">  [&#39;cross&#39;, { size: 8, offset: 1 }],</span></span>
<span class="line"><span style="color:#f6f6f4;">  [&#39;async&#39;, { size: 8, offset: 1 }],</span></span>
<span class="line"><span style="color:#f6f6f4;">]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">markers.forEach(([marker, args], i) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">  graph.addEdge({</span></span>
<span class="line"><span style="color:#f6f6f4;">    sourcePoint: [220, 30 + i * 40],</span></span>
<span class="line"><span style="color:#f6f6f4;">    targetPoint: [500, 30 + i * 40],</span></span>
<span class="line"><span style="color:#f6f6f4;">    label: marker,</span></span>
<span class="line"><span style="color:#f6f6f4;">    attrs: {</span></span>
<span class="line"><span style="color:#f6f6f4;">      line: {</span></span>
<span class="line"><span style="color:#f6f6f4;">        sourceMarker: {</span></span>
<span class="line"><span style="color:#f6f6f4;">          args,</span></span>
<span class="line"><span style="color:#f6f6f4;">          name: marker,</span></span>
<span class="line"><span style="color:#f6f6f4;">        },</span></span>
<span class="line"><span style="color:#f6f6f4;">        targetMarker: {</span></span>
<span class="line"><span style="color:#f6f6f4;">          args,</span></span>
<span class="line"><span style="color:#f6f6f4;">          name: marker,</span></span>
<span class="line"><span style="color:#f6f6f4;">        },</span></span>
<span class="line"><span style="color:#f6f6f4;">        strokeWidth: 1,</span></span>
<span class="line"><span style="color:#f6f6f4;">      },</span></span>
<span class="line"><span style="color:#f6f6f4;">    },</span></span>
<span class="line"><span style="color:#f6f6f4;">  })</span></span>
<span class="line"><span style="color:#f6f6f4;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 内置箭头：https://x6.antv.vision/zh/docs/tutorial/intermediate/marker#%E5%86%85%E7%BD%AE%E7%AE%AD%E5%A4%B4</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const markers = [</span></span>
<span class="line"><span style="color:#24292e;">  [&#39;block&#39;, { size: 6 }],</span></span>
<span class="line"><span style="color:#24292e;">  [&#39;classic&#39;, { size: 6 }],</span></span>
<span class="line"><span style="color:#24292e;">  [&#39;diamond&#39;, { size: 8 }],</span></span>
<span class="line"><span style="color:#24292e;">  [&#39;circle&#39;, { size: 6 }],</span></span>
<span class="line"><span style="color:#24292e;">  [&#39;circlePlus&#39;, { size: 6 }],</span></span>
<span class="line"><span style="color:#24292e;">  [&#39;ellipse&#39;, { rx: 6, ry: 4 }],</span></span>
<span class="line"><span style="color:#24292e;">  [&#39;cross&#39;, { size: 8, offset: 1 }],</span></span>
<span class="line"><span style="color:#24292e;">  [&#39;async&#39;, { size: 8, offset: 1 }],</span></span>
<span class="line"><span style="color:#24292e;">]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">markers.forEach(([marker, args], i) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  graph.addEdge({</span></span>
<span class="line"><span style="color:#24292e;">    sourcePoint: [220, 30 + i * 40],</span></span>
<span class="line"><span style="color:#24292e;">    targetPoint: [500, 30 + i * 40],</span></span>
<span class="line"><span style="color:#24292e;">    label: marker,</span></span>
<span class="line"><span style="color:#24292e;">    attrs: {</span></span>
<span class="line"><span style="color:#24292e;">      line: {</span></span>
<span class="line"><span style="color:#24292e;">        sourceMarker: {</span></span>
<span class="line"><span style="color:#24292e;">          args,</span></span>
<span class="line"><span style="color:#24292e;">          name: marker,</span></span>
<span class="line"><span style="color:#24292e;">        },</span></span>
<span class="line"><span style="color:#24292e;">        targetMarker: {</span></span>
<span class="line"><span style="color:#24292e;">          args,</span></span>
<span class="line"><span style="color:#24292e;">          name: marker,</span></span>
<span class="line"><span style="color:#24292e;">        },</span></span>
<span class="line"><span style="color:#24292e;">        strokeWidth: 1,</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">  })</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><h4 id="_7、基类-cell" tabindex="-1">7、基类 cell <a class="header-anchor" href="#_7、基类-cell" aria-label="Permalink to &quot;7、基类 cell&quot;">​</a></h4><p>Cell 是 <a href="https://x6.antv.vision/zh/docs/api/model/node" target="_blank" rel="noreferrer">Node</a> 和 <a href="https://x6.antv.vision/zh/docs/api/model/edge" target="_blank" rel="noreferrer">Edge</a> 的基类，包含节点和边的通用属性和方法定义，如属性样式、可见性、业务数据等，并且在实例化、样式定制、默认选项、自定义选项等方面具有相同的行为。</p><h5 id="a-常用的方法有" tabindex="-1">a. 常用的方法有： <a class="header-anchor" href="#a-常用的方法有" aria-label="Permalink to &quot;a. 常用的方法有：&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">cell.isNode() // 监测是否是Node实例</span></span>
<span class="line"><span style="color:#f6f6f4;">cell.isEdge() // 监测是否是Edge实例</span></span>
<span class="line"><span style="color:#f6f6f4;">cell.attr() // 获取全部属性值</span></span>
<span class="line"><span style="color:#f6f6f4;">cell.attr(&#39;body/fill&#39;)  // 获取某一属性值</span></span>
<span class="line"><span style="color:#f6f6f4;">cell.attr(&#39;body/fill&#39;, &#39;#f5f5f5&#39;) // 设置某一属性值</span></span>
<span class="line"><span style="color:#f6f6f4;">cell.getProp().type // 获取指定的属性值。</span></span>
<span class="line"><span style="color:#f6f6f4;">cell.setProp(&#39;name&#39;, val); // 设置属性</span></span>
<span class="line"><span style="color:#f6f6f4;">cell.removeProp(&#39;zIndex&#39;); // 删除单个属性</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">cell.isNode() // 监测是否是Node实例</span></span>
<span class="line"><span style="color:#24292e;">cell.isEdge() // 监测是否是Edge实例</span></span>
<span class="line"><span style="color:#24292e;">cell.attr() // 获取全部属性值</span></span>
<span class="line"><span style="color:#24292e;">cell.attr(&#39;body/fill&#39;)  // 获取某一属性值</span></span>
<span class="line"><span style="color:#24292e;">cell.attr(&#39;body/fill&#39;, &#39;#f5f5f5&#39;) // 设置某一属性值</span></span>
<span class="line"><span style="color:#24292e;">cell.getProp().type // 获取指定的属性值。</span></span>
<span class="line"><span style="color:#24292e;">cell.setProp(&#39;name&#39;, val); // 设置属性</span></span>
<span class="line"><span style="color:#24292e;">cell.removeProp(&#39;zIndex&#39;); // 删除单个属性</span></span></code></pre></div><h4 id="_8、辅助工具" tabindex="-1">8、辅助工具 <a class="header-anchor" href="#_8、辅助工具" aria-label="Permalink to &quot;8、辅助工具&quot;">​</a></h4><h5 id="a-自定义-tooltip-弹框" tabindex="-1">a. 自定义 tooltip 弹框 <a class="header-anchor" href="#a-自定义-tooltip-弹框" aria-label="Permalink to &quot;a. 自定义 tooltip 弹框&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">import { ToolsView, Graph } from &#39;@antv/x6&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;">import insertCss from &#39;insert-css&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">insertCss(\`</span></span>
<span class="line"><span style="color:#f6f6f4;">  .inner-box {</span></span>
<span class="line"><span style="color:#f6f6f4;">    box-sizing: border-box;</span></span>
<span class="line"><span style="color:#f6f6f4;">    width: 590px;</span></span>
<span class="line"><span style="color:#f6f6f4;">    z-index: 2;</span></span>
<span class="line"><span style="color:#f6f6f4;">    max-height: 175px;</span></span>
<span class="line"><span style="color:#f6f6f4;">    padding: 20px;</span></span>
<span class="line"><span style="color:#f6f6f4;">    color: rgba(255, 255, 255, 65);</span></span>
<span class="line"><span style="color:#f6f6f4;">    background-color: rgba(36, 40, 52, 1);</span></span>
<span class="line"><span style="color:#f6f6f4;">    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.5);</span></span>
<span class="line"><span style="color:#f6f6f4;">    border: 1px solid rgba(255, 255, 255, 0.2);</span></span>
<span class="line"><span style="color:#f6f6f4;">    position: absolute;</span></span>
<span class="line"><span style="color:#f6f6f4;">    display: none;</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">  .inner-box::before {</span></span>
<span class="line"><span style="color:#f6f6f4;">    width: 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">    height: 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">    content: &#39;&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;">    border-left: 7px solid transparent;</span></span>
<span class="line"><span style="color:#f6f6f4;">    border-right: 7px solid transparent;</span></span>
<span class="line"><span style="color:#f6f6f4;">    border-bottom: 10px solid rgba(255, 255, 255, 0.2);</span></span>
<span class="line"><span style="color:#f6f6f4;">    position: absolute;</span></span>
<span class="line"><span style="color:#f6f6f4;">    top: -10px;</span></span>
<span class="line"><span style="color:#f6f6f4;">    left: 49px;</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">  .inner-box::after {</span></span>
<span class="line"><span style="color:#f6f6f4;">    width: 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">    height: 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">    content: &#39;&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;">    border-left: 6px solid transparent;</span></span>
<span class="line"><span style="color:#f6f6f4;">    border-right: 6px solid transparent;</span></span>
<span class="line"><span style="color:#f6f6f4;">    border-bottom: 8px solid rgba(36, 40, 52, 1);</span></span>
<span class="line"><span style="color:#f6f6f4;">    position: absolute;</span></span>
<span class="line"><span style="color:#f6f6f4;">    top: -8px;</span></span>
<span class="line"><span style="color:#f6f6f4;">    left: 50px;</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">  .inner-box-main-title {</span></span>
<span class="line"><span style="color:#f6f6f4;">    font-size: 18px;</span></span>
<span class="line"><span style="color:#f6f6f4;">    font-weight: 600;</span></span>
<span class="line"><span style="color:#f6f6f4;">    color: rgba(65, 133, 255, 100);</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">  .inner-box-main-text {</span></span>
<span class="line"><span style="color:#f6f6f4;">    font-size: 12px;</span></span>
<span class="line"><span style="color:#f6f6f4;">    line-height: 20px;</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">\`);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">export class TooltipTool extends ToolsView.ToolItem {</span></span>
<span class="line"><span style="color:#f6f6f4;">  render() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    const dom = \`</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;div class=&quot;inner-box-main&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">      &lt;div class=&quot;inner-box-main-title&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">      &lt;p class=&quot;inner-box-main-text&quot;&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    \`;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    this.knob = ToolsView.createElement(&#39;div&#39;, false);</span></span>
<span class="line"><span style="color:#f6f6f4;">    this.knob.setAttribute(&#39;class&#39;, &#39;inner-box&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">    this.knob.innerHTML = dom;</span></span>
<span class="line"><span style="color:#f6f6f4;">    this.container.appendChild(this.knob);</span></span>
<span class="line"><span style="color:#f6f6f4;">    this.updatePosition();</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    return this;</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  updatePosition() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    const cell = this.cell;</span></span>
<span class="line"><span style="color:#f6f6f4;">    const { position, name, description } = cell.getProp();</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    if (description &amp;&amp; name) {</span></span>
<span class="line"><span style="color:#f6f6f4;">      const style = this.knob.style;</span></span>
<span class="line"><span style="color:#f6f6f4;">      style.display = &#39;block&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;">      style.left = \`\${position.x}px\`;</span></span>
<span class="line"><span style="color:#f6f6f4;">      style.top = \`\${position.y + 70}px\`;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">      this.knob.querySelector(&#39;.inner-box-main-title&#39;).innerHTML = name;</span></span>
<span class="line"><span style="color:#f6f6f4;">      this.knob.querySelector(&#39;.inner-box-main-text&#39;).innerHTML = description;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">TooltipTool.config({</span></span>
<span class="line"><span style="color:#f6f6f4;">  tagName: &#39;div&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">  isSVGElement: false</span></span>
<span class="line"><span style="color:#f6f6f4;">});</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">Graph.registerNodeTool(&#39;tooltip&#39;, TooltipTool, true);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">// 页面实例化</span></span>
<span class="line"><span style="color:#f6f6f4;">new TooltipTool()</span></span>
<span class="line"><span style="color:#f6f6f4;">cell.addTools([{ name: &#39;tooltip&#39; }]); // 添加tooltip</span></span>
<span class="line"><span style="color:#f6f6f4;">cell.removeTools(); // 删除tooltip</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import { ToolsView, Graph } from &#39;@antv/x6&#39;;</span></span>
<span class="line"><span style="color:#24292e;">import insertCss from &#39;insert-css&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">insertCss(\`</span></span>
<span class="line"><span style="color:#24292e;">  .inner-box {</span></span>
<span class="line"><span style="color:#24292e;">    box-sizing: border-box;</span></span>
<span class="line"><span style="color:#24292e;">    width: 590px;</span></span>
<span class="line"><span style="color:#24292e;">    z-index: 2;</span></span>
<span class="line"><span style="color:#24292e;">    max-height: 175px;</span></span>
<span class="line"><span style="color:#24292e;">    padding: 20px;</span></span>
<span class="line"><span style="color:#24292e;">    color: rgba(255, 255, 255, 65);</span></span>
<span class="line"><span style="color:#24292e;">    background-color: rgba(36, 40, 52, 1);</span></span>
<span class="line"><span style="color:#24292e;">    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.5);</span></span>
<span class="line"><span style="color:#24292e;">    border: 1px solid rgba(255, 255, 255, 0.2);</span></span>
<span class="line"><span style="color:#24292e;">    position: absolute;</span></span>
<span class="line"><span style="color:#24292e;">    display: none;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  .inner-box::before {</span></span>
<span class="line"><span style="color:#24292e;">    width: 0;</span></span>
<span class="line"><span style="color:#24292e;">    height: 0;</span></span>
<span class="line"><span style="color:#24292e;">    content: &#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    border-left: 7px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;">    border-right: 7px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;">    border-bottom: 10px solid rgba(255, 255, 255, 0.2);</span></span>
<span class="line"><span style="color:#24292e;">    position: absolute;</span></span>
<span class="line"><span style="color:#24292e;">    top: -10px;</span></span>
<span class="line"><span style="color:#24292e;">    left: 49px;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  .inner-box::after {</span></span>
<span class="line"><span style="color:#24292e;">    width: 0;</span></span>
<span class="line"><span style="color:#24292e;">    height: 0;</span></span>
<span class="line"><span style="color:#24292e;">    content: &#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    border-left: 6px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;">    border-right: 6px solid transparent;</span></span>
<span class="line"><span style="color:#24292e;">    border-bottom: 8px solid rgba(36, 40, 52, 1);</span></span>
<span class="line"><span style="color:#24292e;">    position: absolute;</span></span>
<span class="line"><span style="color:#24292e;">    top: -8px;</span></span>
<span class="line"><span style="color:#24292e;">    left: 50px;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  .inner-box-main-title {</span></span>
<span class="line"><span style="color:#24292e;">    font-size: 18px;</span></span>
<span class="line"><span style="color:#24292e;">    font-weight: 600;</span></span>
<span class="line"><span style="color:#24292e;">    color: rgba(65, 133, 255, 100);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  .inner-box-main-text {</span></span>
<span class="line"><span style="color:#24292e;">    font-size: 12px;</span></span>
<span class="line"><span style="color:#24292e;">    line-height: 20px;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">\`);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export class TooltipTool extends ToolsView.ToolItem {</span></span>
<span class="line"><span style="color:#24292e;">  render() {</span></span>
<span class="line"><span style="color:#24292e;">    const dom = \`</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div class=&quot;inner-box-main&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;div class=&quot;inner-box-main-title&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;p class=&quot;inner-box-main-text&quot;&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    \`;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    this.knob = ToolsView.createElement(&#39;div&#39;, false);</span></span>
<span class="line"><span style="color:#24292e;">    this.knob.setAttribute(&#39;class&#39;, &#39;inner-box&#39;);</span></span>
<span class="line"><span style="color:#24292e;">    this.knob.innerHTML = dom;</span></span>
<span class="line"><span style="color:#24292e;">    this.container.appendChild(this.knob);</span></span>
<span class="line"><span style="color:#24292e;">    this.updatePosition();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    return this;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  updatePosition() {</span></span>
<span class="line"><span style="color:#24292e;">    const cell = this.cell;</span></span>
<span class="line"><span style="color:#24292e;">    const { position, name, description } = cell.getProp();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    if (description &amp;&amp; name) {</span></span>
<span class="line"><span style="color:#24292e;">      const style = this.knob.style;</span></span>
<span class="line"><span style="color:#24292e;">      style.display = &#39;block&#39;;</span></span>
<span class="line"><span style="color:#24292e;">      style.left = \`\${position.x}px\`;</span></span>
<span class="line"><span style="color:#24292e;">      style.top = \`\${position.y + 70}px\`;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      this.knob.querySelector(&#39;.inner-box-main-title&#39;).innerHTML = name;</span></span>
<span class="line"><span style="color:#24292e;">      this.knob.querySelector(&#39;.inner-box-main-text&#39;).innerHTML = description;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">TooltipTool.config({</span></span>
<span class="line"><span style="color:#24292e;">  tagName: &#39;div&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  isSVGElement: false</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Graph.registerNodeTool(&#39;tooltip&#39;, TooltipTool, true);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 页面实例化</span></span>
<span class="line"><span style="color:#24292e;">new TooltipTool()</span></span>
<span class="line"><span style="color:#24292e;">cell.addTools([{ name: &#39;tooltip&#39; }]); // 添加tooltip</span></span>
<span class="line"><span style="color:#24292e;">cell.removeTools(); // 删除tooltip</span></span></code></pre></div><h3 id="三、参考阅读" tabindex="-1">三、参考阅读 <a class="header-anchor" href="#三、参考阅读" aria-label="Permalink to &quot;三、参考阅读&quot;">​</a></h3><h5 id="官网" tabindex="-1"><a href="https://x6.antv.vision/zh" target="_blank" rel="noreferrer">官网</a> <a class="header-anchor" href="#官网" aria-label="Permalink to &quot;[官网](https://x6.antv.vision/zh)&quot;">​</a></h5><h5 id="github" tabindex="-1"><a href="https://github.com/antvis/X6" target="_blank" rel="noreferrer">github</a> <a class="header-anchor" href="#github" aria-label="Permalink to &quot;[github](https://github.com/antvis/X6)&quot;">​</a></h5><h5 id="国内镜像" tabindex="-1"><a href="https://antv-x6.gitee.io/zh" target="_blank" rel="noreferrer">国内镜像</a> <a class="header-anchor" href="#国内镜像" aria-label="Permalink to &quot;[国内镜像](https://antv-x6.gitee.io/zh)&quot;">​</a></h5><h5 id="布局" tabindex="-1"><a href="https://x6.antv.vision/zh/docs/tutorial/advanced/layout" target="_blank" rel="noreferrer">布局</a> <a class="header-anchor" href="#布局" aria-label="Permalink to &quot;[布局](https://x6.antv.vision/zh/docs/tutorial/advanced/layout)&quot;">​</a></h5>`,54),o=[e];function t(c,r,i,f,y,d){return n(),a("div",null,o)}const u=s(p,[["render",t]]);export{g as __pageData,u as default};
