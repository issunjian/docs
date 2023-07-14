import{_ as s,o as a,c as n,V as l}from"./chunks/framework.c6d8cbec.js";const e="/docs/images/cesium/smart-globle.png",p="/docs/images/cesium/670.png",h=JSON.parse('{"title":"开始SmartGloble","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/graph/smart-globle/01-入门.md","filePath":"frontend/graph/smart-globle/01-入门.md"}'),t={name:"frontend/graph/smart-globle/01-入门.md"},o=l('<h1 id="开始smartgloble" tabindex="-1">开始SmartGloble <a class="header-anchor" href="#开始smartgloble" aria-label="Permalink to &quot;开始SmartGloble&quot;">​</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p><strong>SmartGloble</strong> 是一个基于javascript的浏览器端的二三维一体化数字地球平台。</p><img src="'+e+`"><h2 id="开发包介绍" tabindex="-1">开发包介绍 <a class="header-anchor" href="#开发包介绍" aria-label="Permalink to &quot;开发包介绍&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">+ documents</span></span>
<span class="line"><span style="color:#f6f6f4;">+ examples</span></span>
<span class="line"><span style="color:#f6f6f4;">+ smartgloble</span></span>
<span class="line"><span style="color:#f6f6f4;">+ static</span></span>
<span class="line"><span style="color:#f6f6f4;">- index.html</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">+ documents</span></span>
<span class="line"><span style="color:#24292e;">+ examples</span></span>
<span class="line"><span style="color:#24292e;">+ smartgloble</span></span>
<span class="line"><span style="color:#24292e;">+ static</span></span>
<span class="line"><span style="color:#24292e;">- index.html</span></span></code></pre></div><p><strong>documents</strong>是SmartGloble的api文档目录</p><p><strong>examples</strong>是所有的示例所在目录</p><p><strong>smartgloble</strong>是SmartGloble的开发包，开发自己的app应用时，需要引入</p><p><strong>static</strong>是网站的静态资源，包括教程、链接之类的内容</p><h2 id="开发环境推荐" tabindex="-1">开发环境推荐 <a class="header-anchor" href="#开发环境推荐" aria-label="Permalink to &quot;开发环境推荐&quot;">​</a></h2><ul><li><p>开发工具推荐VSCode</p></li><li><p>插件推荐安装LiveServer（支持热更新的web调试服务器）</p></li><li><p>插件推荐安装Beautify（代码美化，帮助您快速格式化代码）</p></li></ul><h2 id="第一个程序" tabindex="-1">第一个程序 <a class="header-anchor" href="#第一个程序" aria-label="Permalink to &quot;第一个程序&quot;">​</a></h2><p>代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;!DOCTYPE HTML&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;meta charset=&quot;utf-8&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;meta name=&quot;viewport&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">        content=&quot;width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;title&gt;Smart Globle&lt;/title&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;link rel=&quot;stylesheet&quot; href=&quot;../smartgloble/lib/SmartCesium/Widgets/widgets.css&quot; type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;link rel=&quot;stylesheet&quot; href=&quot;../smartgloble/lib/openlayers/ol.css&quot; type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;link rel=&quot;stylesheet&quot; href=&quot;../smartgloble/smartgloble.css&quot; type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;script src=&quot;../smartgloble/lib/SmartCesium/Cesium.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;script src=&quot;../smartgloble/lib/openlayers/ol.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;script src=&quot;../smartgloble/smartgloble.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        html {</span></span>
<span class="line"><span style="color:#f6f6f4;">            height: 100%;</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        body {</span></span>
<span class="line"><span style="color:#f6f6f4;">            height: 100%;</span></span>
<span class="line"><span style="color:#f6f6f4;">            width: 100%;</span></span>
<span class="line"><span style="color:#f6f6f4;">            margin: 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">            overflow: hidden;</span></span>
<span class="line"><span style="color:#f6f6f4;">            padding: 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">            background: #000;</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        .fullWindow {</span></span>
<span class="line"><span style="color:#f6f6f4;">            position: relative;</span></span>
<span class="line"><span style="color:#f6f6f4;">            top: 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">            left: 0%;</span></span>
<span class="line"><span style="color:#f6f6f4;">            height: 100%;</span></span>
<span class="line"><span style="color:#f6f6f4;">            width: 100%;</span></span>
<span class="line"><span style="color:#f6f6f4;">            margin: 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">            overflow: hidden;</span></span>
<span class="line"><span style="color:#f6f6f4;">            padding: 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">            font-family: sans-serif;</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        .white {</span></span>
<span class="line"><span style="color:#f6f6f4;">            background: url(./image/map-background.jpg) repeat;</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;/style&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;div id=&quot;widget&quot; class=&quot;fullWindow&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;div id=&quot;map2d&quot; class=&quot;white&quot; style=&quot;position: absolute; width: 50%; height: 100%;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;div id=&quot;map3d&quot; style=&quot;position: absolute; width: 50%; height: 100%; right: 0;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;script&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        var defaultOlImageLayer = new sg.olimage.WebMercatorTileLayer({</span></span>
<span class="line"><span style="color:#f6f6f4;">            name: &#39;google影像&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">            url: &#39;https://mt0.google.cn/vt/lyrs=s&amp;hl=zh-CN&amp;gl=cn&amp;x={x}&amp;y={y}&amp;z={z}&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">        });</span></span>
<span class="line"><span style="color:#f6f6f4;">        var defaultCsImageLayer = new sg.csimage.WebMercatorTileLayer({</span></span>
<span class="line"><span style="color:#f6f6f4;">            name: &#39;google影像&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">            url: &#39;https://mt0.google.cn/vt/lyrs=s&amp;hl=zh-CN&amp;gl=cn&amp;x={x}&amp;y={y}&amp;z={z}&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">        });</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        window.csView = new sg.csview.View({</span></span>
<span class="line"><span style="color:#f6f6f4;">            target: &#39;map3d&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">            layers: defaultCsImageLayer</span></span>
<span class="line"><span style="color:#f6f6f4;">        });</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        window.olView = new sg.olview.View({</span></span>
<span class="line"><span style="color:#f6f6f4;">            target: &#39;map2d&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">            layers: [defaultOlImageLayer]</span></span>
<span class="line"><span style="color:#f6f6f4;">        });</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        csView.on(&#39;Loaded&#39;, load);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        function load() {</span></span>
<span class="line"><span style="color:#f6f6f4;">            var olcs_camera = new sg.olcs.Camera(csView.getViewer().scene, olView.getMap());</span></span>
<span class="line"><span style="color:#f6f6f4;">            olcs_camera.activate();</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">            console.log(sg.Version);</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;/script&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!DOCTYPE HTML&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;meta charset=&quot;utf-8&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;meta name=&quot;viewport&quot;</span></span>
<span class="line"><span style="color:#24292e;">        content=&quot;width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;title&gt;Smart Globle&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;link rel=&quot;stylesheet&quot; href=&quot;../smartgloble/lib/SmartCesium/Widgets/widgets.css&quot; type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;link rel=&quot;stylesheet&quot; href=&quot;../smartgloble/lib/openlayers/ol.css&quot; type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;link rel=&quot;stylesheet&quot; href=&quot;../smartgloble/smartgloble.css&quot; type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;script src=&quot;../smartgloble/lib/SmartCesium/Cesium.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;script src=&quot;../smartgloble/lib/openlayers/ol.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;script src=&quot;../smartgloble/smartgloble.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        html {</span></span>
<span class="line"><span style="color:#24292e;">            height: 100%;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        body {</span></span>
<span class="line"><span style="color:#24292e;">            height: 100%;</span></span>
<span class="line"><span style="color:#24292e;">            width: 100%;</span></span>
<span class="line"><span style="color:#24292e;">            margin: 0;</span></span>
<span class="line"><span style="color:#24292e;">            overflow: hidden;</span></span>
<span class="line"><span style="color:#24292e;">            padding: 0;</span></span>
<span class="line"><span style="color:#24292e;">            background: #000;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        .fullWindow {</span></span>
<span class="line"><span style="color:#24292e;">            position: relative;</span></span>
<span class="line"><span style="color:#24292e;">            top: 0;</span></span>
<span class="line"><span style="color:#24292e;">            left: 0%;</span></span>
<span class="line"><span style="color:#24292e;">            height: 100%;</span></span>
<span class="line"><span style="color:#24292e;">            width: 100%;</span></span>
<span class="line"><span style="color:#24292e;">            margin: 0;</span></span>
<span class="line"><span style="color:#24292e;">            overflow: hidden;</span></span>
<span class="line"><span style="color:#24292e;">            padding: 0;</span></span>
<span class="line"><span style="color:#24292e;">            font-family: sans-serif;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        .white {</span></span>
<span class="line"><span style="color:#24292e;">            background: url(./image/map-background.jpg) repeat;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/style&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div id=&quot;widget&quot; class=&quot;fullWindow&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;div id=&quot;map2d&quot; class=&quot;white&quot; style=&quot;position: absolute; width: 50%; height: 100%;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;div id=&quot;map3d&quot; style=&quot;position: absolute; width: 50%; height: 100%; right: 0;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">        var defaultOlImageLayer = new sg.olimage.WebMercatorTileLayer({</span></span>
<span class="line"><span style="color:#24292e;">            name: &#39;google影像&#39;,</span></span>
<span class="line"><span style="color:#24292e;">            url: &#39;https://mt0.google.cn/vt/lyrs=s&amp;hl=zh-CN&amp;gl=cn&amp;x={x}&amp;y={y}&amp;z={z}&#39;</span></span>
<span class="line"><span style="color:#24292e;">        });</span></span>
<span class="line"><span style="color:#24292e;">        var defaultCsImageLayer = new sg.csimage.WebMercatorTileLayer({</span></span>
<span class="line"><span style="color:#24292e;">            name: &#39;google影像&#39;,</span></span>
<span class="line"><span style="color:#24292e;">            url: &#39;https://mt0.google.cn/vt/lyrs=s&amp;hl=zh-CN&amp;gl=cn&amp;x={x}&amp;y={y}&amp;z={z}&#39;</span></span>
<span class="line"><span style="color:#24292e;">        });</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        window.csView = new sg.csview.View({</span></span>
<span class="line"><span style="color:#24292e;">            target: &#39;map3d&#39;,</span></span>
<span class="line"><span style="color:#24292e;">            layers: defaultCsImageLayer</span></span>
<span class="line"><span style="color:#24292e;">        });</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        window.olView = new sg.olview.View({</span></span>
<span class="line"><span style="color:#24292e;">            target: &#39;map2d&#39;,</span></span>
<span class="line"><span style="color:#24292e;">            layers: [defaultOlImageLayer]</span></span>
<span class="line"><span style="color:#24292e;">        });</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        csView.on(&#39;Loaded&#39;, load);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        function load() {</span></span>
<span class="line"><span style="color:#24292e;">            var olcs_camera = new sg.olcs.Camera(csView.getViewer().scene, olView.getMap());</span></span>
<span class="line"><span style="color:#24292e;">            olcs_camera.activate();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            console.log(sg.Version);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div><h2 id="代码分析" tabindex="-1">代码分析 <a class="header-anchor" href="#代码分析" aria-label="Permalink to &quot;代码分析&quot;">​</a></h2><ol><li>在HTML的head标签内包含smartgloble的所需的css和js库</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;link rel=&quot;stylesheet&quot; href=&quot;../smartgloble/lib/SmartCesium/Widgets/widgets.css&quot; type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;link rel=&quot;stylesheet&quot; href=&quot;../smartgloble/lib/openlayers/ol.css&quot; type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;link rel=&quot;stylesheet&quot; href=&quot;../smartgloble/smartgloble.css&quot; type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;script src=&quot;../smartgloble/lib/SmartCesium/Cesium.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;script src=&quot;../smartgloble/lib/openlayers/ol.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;script src=&quot;../smartgloble/smartgloble.js&quot;&gt;&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;link rel=&quot;stylesheet&quot; href=&quot;../smartgloble/lib/SmartCesium/Widgets/widgets.css&quot; type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;link rel=&quot;stylesheet&quot; href=&quot;../smartgloble/lib/openlayers/ol.css&quot; type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;link rel=&quot;stylesheet&quot; href=&quot;../smartgloble/smartgloble.css&quot; type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;script src=&quot;../smartgloble/lib/SmartCesium/Cesium.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;script src=&quot;../smartgloble/lib/openlayers/ol.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;script src=&quot;../smartgloble/smartgloble.js&quot;&gt;&lt;/script&gt;</span></span></code></pre></div><ol><li>设置网页全局样式</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">html {</span></span>
<span class="line"><span style="color:#f6f6f4;">    height: 100%;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">body {</span></span>
<span class="line"><span style="color:#f6f6f4;">    height: 100%;</span></span>
<span class="line"><span style="color:#f6f6f4;">    width: 100%;</span></span>
<span class="line"><span style="color:#f6f6f4;">    margin: 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">    overflow: hidden;</span></span>
<span class="line"><span style="color:#f6f6f4;">    padding: 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">    background: #000;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">.fullWindow {</span></span>
<span class="line"><span style="color:#f6f6f4;">    position: relative;</span></span>
<span class="line"><span style="color:#f6f6f4;">    top: 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">    left: 0%;</span></span>
<span class="line"><span style="color:#f6f6f4;">    height: 100%;</span></span>
<span class="line"><span style="color:#f6f6f4;">    width: 100%;</span></span>
<span class="line"><span style="color:#f6f6f4;">    margin: 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">    overflow: hidden;</span></span>
<span class="line"><span style="color:#f6f6f4;">    padding: 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">    font-family: sans-serif;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">.white {</span></span>
<span class="line"><span style="color:#f6f6f4;">    background: url(./image/map-background.jpg) repeat;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">html {</span></span>
<span class="line"><span style="color:#24292e;">    height: 100%;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">body {</span></span>
<span class="line"><span style="color:#24292e;">    height: 100%;</span></span>
<span class="line"><span style="color:#24292e;">    width: 100%;</span></span>
<span class="line"><span style="color:#24292e;">    margin: 0;</span></span>
<span class="line"><span style="color:#24292e;">    overflow: hidden;</span></span>
<span class="line"><span style="color:#24292e;">    padding: 0;</span></span>
<span class="line"><span style="color:#24292e;">    background: #000;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.fullWindow {</span></span>
<span class="line"><span style="color:#24292e;">    position: relative;</span></span>
<span class="line"><span style="color:#24292e;">    top: 0;</span></span>
<span class="line"><span style="color:#24292e;">    left: 0%;</span></span>
<span class="line"><span style="color:#24292e;">    height: 100%;</span></span>
<span class="line"><span style="color:#24292e;">    width: 100%;</span></span>
<span class="line"><span style="color:#24292e;">    margin: 0;</span></span>
<span class="line"><span style="color:#24292e;">    overflow: hidden;</span></span>
<span class="line"><span style="color:#24292e;">    padding: 0;</span></span>
<span class="line"><span style="color:#24292e;">    font-family: sans-serif;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.white {</span></span>
<span class="line"><span style="color:#24292e;">    background: url(./image/map-background.jpg) repeat;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span></code></pre></div><ol><li>分别创建一个HTML标签去承载二维视图和三维视图</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;div id=&quot;widget&quot; class=&quot;fullWindow&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;div id=&quot;map2d&quot; class=&quot;white&quot; style=&quot;position: absolute; width: 50%; height: 100%;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;div id=&quot;map3d&quot; style=&quot;position: absolute; width: 50%; height: 100%; right: 0;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div id=&quot;widget&quot; class=&quot;fullWindow&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div id=&quot;map2d&quot; class=&quot;white&quot; style=&quot;position: absolute; width: 50%; height: 100%;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div id=&quot;map3d&quot; style=&quot;position: absolute; width: 50%; height: 100%; right: 0;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span></code></pre></div><ol><li>分别构建二维视图和三维视图，并添加一个影像图层</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">var defaultOlImageLayer = new sg.olimage.WebMercatorTileLayer({</span></span>
<span class="line"><span style="color:#f6f6f4;">    name: &#39;google影像&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    url: &#39;https://mt0.google.cn/vt/lyrs=s&amp;hl=zh-CN&amp;gl=cn&amp;x={x}&amp;y={y}&amp;z={z}&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">});</span></span>
<span class="line"><span style="color:#f6f6f4;">var defaultCsImageLayer = new sg.csimage.WebMercatorTileLayer({</span></span>
<span class="line"><span style="color:#f6f6f4;">    name: &#39;google影像&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    url: &#39;https://mt0.google.cn/vt/lyrs=s&amp;hl=zh-CN&amp;gl=cn&amp;x={x}&amp;y={y}&amp;z={z}&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">});</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">window.csView = new sg.csview.View({</span></span>
<span class="line"><span style="color:#f6f6f4;">    target: &#39;map3d&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    layers: defaultCsImageLayer</span></span>
<span class="line"><span style="color:#f6f6f4;">});</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">window.olView = new sg.olview.View({</span></span>
<span class="line"><span style="color:#f6f6f4;">    target: &#39;map2d&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    layers: [defaultOlImageLayer]</span></span>
<span class="line"><span style="color:#f6f6f4;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var defaultOlImageLayer = new sg.olimage.WebMercatorTileLayer({</span></span>
<span class="line"><span style="color:#24292e;">    name: &#39;google影像&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    url: &#39;https://mt0.google.cn/vt/lyrs=s&amp;hl=zh-CN&amp;gl=cn&amp;x={x}&amp;y={y}&amp;z={z}&#39;</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;">var defaultCsImageLayer = new sg.csimage.WebMercatorTileLayer({</span></span>
<span class="line"><span style="color:#24292e;">    name: &#39;google影像&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    url: &#39;https://mt0.google.cn/vt/lyrs=s&amp;hl=zh-CN&amp;gl=cn&amp;x={x}&amp;y={y}&amp;z={z}&#39;</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">window.csView = new sg.csview.View({</span></span>
<span class="line"><span style="color:#24292e;">    target: &#39;map3d&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    layers: defaultCsImageLayer</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">window.olView = new sg.olview.View({</span></span>
<span class="line"><span style="color:#24292e;">    target: &#39;map2d&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    layers: [defaultOlImageLayer]</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><ol><li>添加三维视图初始化完成事件，并在三维视图初始化完成之后，绑定二三维视图联动</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">csView.on(&#39;Loaded&#39;, load);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">function load() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    var olcs_camera = new sg.olcs.Camera(csView.getViewer().scene, olView.getMap());</span></span>
<span class="line"><span style="color:#f6f6f4;">    olcs_camera.activate();</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    console.log(sg.Version);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">csView.on(&#39;Loaded&#39;, load);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function load() {</span></span>
<span class="line"><span style="color:#24292e;">    var olcs_camera = new sg.olcs.Camera(csView.getViewer().scene, olView.getMap());</span></span>
<span class="line"><span style="color:#24292e;">    olcs_camera.activate();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    console.log(sg.Version);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><ol><li>在Web服务器中访问(推荐直接在VSCode里打开LiveServer)，就可以看到二维地图和三维地球了，享受您的SmartGloble开发之旅吧！</li></ol><img src="`+p+'">',28),c=[o];function i(r,f,y,g,u,d){return a(),n("div",null,c)}const q=s(t,[["render",i]]);export{h as __pageData,q as default};
