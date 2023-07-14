import{_ as s,o as a,c as n,V as e}from"./chunks/framework.c6d8cbec.js";const l="/docs/images/cesium/674.png",p="/docs/images/cesium/676.png",o="/docs/images/cesium/678.png",c="/docs/images/cesium/677.png",t="/docs/images/cesium/675.png",r="/docs/images/cesium/679.png",V=JSON.parse('{"title":"矢量图层","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/graph/smart-globle/03-矢量图层.md","filePath":"frontend/graph/smart-globle/03-矢量图层.md"}'),i={name:"frontend/graph/smart-globle/03-矢量图层.md"},f=e(`<h1 id="矢量图层" tabindex="-1">矢量图层 <a class="header-anchor" href="#矢量图层" aria-label="Permalink to &quot;矢量图层&quot;">​</a></h1><p>在<a href="http://sg.smartgis.cn/static/#!tutorials/image-layers.md" target="_blank" rel="noreferrer">上一节教程</a>中，我们介绍了影像图层，它提供了世界或者局部的的基础影像。那么矢量就是用来表示真实世界中具体的物体或者符号。其大致分为三类：</p><p><strong>第一类是点类型，可以表示世界中某个具体位置的事物，比如人、车、城市、楼房等可以抽象成某一个具体的点位置；</strong></p><p><strong>第二类是线类型，可以表示世界中具有连续性质的事物，比如铁路、河流、公路、地下管线等具有代表性的线类型，还可以表示风的流向、飞机航线、运行轨迹等类型。</strong></p><p><strong>第三类是面类型，可以表示世界中具有面积性质的事物，比如土地、湖泊等类型。</strong></p><p><strong>所有的矢量由矢量图层统一管理、使用。</strong></p><h2 id="添加一个矢量点" tabindex="-1">添加一个矢量点 <a class="header-anchor" href="#添加一个矢量点" aria-label="Permalink to &quot;添加一个矢量点&quot;">​</a></h2><p>本示例代码中，假设你已经创建好了二维、三维视图。</p><p>代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 创建一个矢量图层，并添加到视图，这里会一起操作二维三维，以下同样，不在单独说明，变量名以ol开始的指的是二维，以cs开始的指的是三维</span></span>
<span class="line"><span style="color:#f6f6f4;">var olVectorLayer = olView.addLayer(new sg.olvector.VectorLayer());</span></span>
<span class="line"><span style="color:#f6f6f4;">var csVectorLayer = csView.addLayer(new sg.csvector.VectorLayer());</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">// 创建一个矢量点，需要注意的是在三维里，点有两种：一种是贴地的点，它会随地表高低起伏，在地面上显示，忽略高度信息；一种是空间位置的点，会考虑高度信息，如果其高度低于地表高度，会被遮挡</span></span>
<span class="line"><span style="color:#f6f6f4;">var olPoint = olVectorLayer.addVector(new sg.olvector.Point({</span></span>
<span class="line"><span style="color:#f6f6f4;">    lonlat: [100,30]</span></span>
<span class="line"><span style="color:#f6f6f4;">}));</span></span>
<span class="line"><span style="color:#f6f6f4;">// 贴地点</span></span>
<span class="line"><span style="color:#f6f6f4;">var csGroundPoint = csVectorLayer.addVector(new sg.csvector.GroundPoint({</span></span>
<span class="line"><span style="color:#f6f6f4;">    position: Cesium.Cartesian3.fromDegrees(100,30,100000)</span></span>
<span class="line"><span style="color:#f6f6f4;">}));</span></span>
<span class="line"><span style="color:#f6f6f4;">// 空间点</span></span>
<span class="line"><span style="color:#f6f6f4;">var csPoint = csVectorLayer.addVector(new sg.csvector.Point({</span></span>
<span class="line"><span style="color:#f6f6f4;">    position: Cesium.Cartesian3.fromDegrees(100,30,100000)</span></span>
<span class="line"><span style="color:#f6f6f4;">}));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 创建一个矢量图层，并添加到视图，这里会一起操作二维三维，以下同样，不在单独说明，变量名以ol开始的指的是二维，以cs开始的指的是三维</span></span>
<span class="line"><span style="color:#24292e;">var olVectorLayer = olView.addLayer(new sg.olvector.VectorLayer());</span></span>
<span class="line"><span style="color:#24292e;">var csVectorLayer = csView.addLayer(new sg.csvector.VectorLayer());</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 创建一个矢量点，需要注意的是在三维里，点有两种：一种是贴地的点，它会随地表高低起伏，在地面上显示，忽略高度信息；一种是空间位置的点，会考虑高度信息，如果其高度低于地表高度，会被遮挡</span></span>
<span class="line"><span style="color:#24292e;">var olPoint = olVectorLayer.addVector(new sg.olvector.Point({</span></span>
<span class="line"><span style="color:#24292e;">    lonlat: [100,30]</span></span>
<span class="line"><span style="color:#24292e;">}));</span></span>
<span class="line"><span style="color:#24292e;">// 贴地点</span></span>
<span class="line"><span style="color:#24292e;">var csGroundPoint = csVectorLayer.addVector(new sg.csvector.GroundPoint({</span></span>
<span class="line"><span style="color:#24292e;">    position: Cesium.Cartesian3.fromDegrees(100,30,100000)</span></span>
<span class="line"><span style="color:#24292e;">}));</span></span>
<span class="line"><span style="color:#24292e;">// 空间点</span></span>
<span class="line"><span style="color:#24292e;">var csPoint = csVectorLayer.addVector(new sg.csvector.Point({</span></span>
<span class="line"><span style="color:#24292e;">    position: Cesium.Cartesian3.fromDegrees(100,30,100000)</span></span>
<span class="line"><span style="color:#24292e;">}));</span></span></code></pre></div><img src="`+l+`"><p>从图中可以看到二维地图里绘制了一个点，三维地图里分别有一个贴地的点和空间位置的点，三维的点的经纬度位置都是经度100，纬度30，高度100000米。</p><p>需要注意的是二维坐标是以<strong>数组</strong>来表示的，比如[100,30]，指示的是经度100，纬度30的位置；而三维坐标是<a href="https://baike.baidu.com/item/%E5%9C%B0%E5%BF%83%E5%9C%B0%E5%9B%BA%E5%9D%90%E6%A0%87%E7%B3%BB/22657523?fr=aladdin" target="_blank" rel="noreferrer">ECEF坐标</a>来表示的，使用的类型是<a href="https://cesium.com/docs/cesiumjs-ref-doc/Cartesian3.html?classFilter=cartesian3" target="_blank" rel="noreferrer">Cesium.Cartesian3</a>。</p><h2 id="改变点的属性" tabindex="-1">改变点的属性 <a class="header-anchor" href="#改变点的属性" aria-label="Permalink to &quot;改变点的属性&quot;">​</a></h2><p>绘制完一个矢量之后，该矢量有很多方法可以改变其属性，比如我们要改变点的位置、颜色、大小等。我们使用上面创建的点来演示一些方法的使用，更详细的方法请参考api文档。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 改变二维点的位置</span></span>
<span class="line"><span style="color:#f6f6f4;">olPoint.setPosition([130,30]);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">// 设置点不显示填充色</span></span>
<span class="line"><span style="color:#f6f6f4;">olPoint.setFill(false);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">// 设置点的线衬色为‘cyan’</span></span>
<span class="line"><span style="color:#f6f6f4;">olPoint.setStrokeColor(&#39;cyan&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">// 设置点的半径为10像素</span></span>
<span class="line"><span style="color:#f6f6f4;">olPoint.setRadius(10);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 改变二维点的位置</span></span>
<span class="line"><span style="color:#24292e;">olPoint.setPosition([130,30]);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 设置点不显示填充色</span></span>
<span class="line"><span style="color:#24292e;">olPoint.setFill(false);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 设置点的线衬色为‘cyan’</span></span>
<span class="line"><span style="color:#24292e;">olPoint.setStrokeColor(&#39;cyan&#39;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 设置点的半径为10像素</span></span>
<span class="line"><span style="color:#24292e;">olPoint.setRadius(10);</span></span></code></pre></div><p>更改后如下图，可以看到二维视图里的点没有填充色了，边线颜色变成了&#39;cyan&#39;，半径也变大了。</p><img src="`+p+`"><h2 id="添加一个图标-标签" tabindex="-1">添加一个图标&amp;标签 <a class="header-anchor" href="#添加一个图标-标签" aria-label="Permalink to &quot;添加一个图标&amp;标签&quot;">​</a></h2><p>示例代码接着上面的教程，假设你已经创建好了矢量图层之后，代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 创建一个二维图标，并添加到二维矢量图层</span></span>
<span class="line"><span style="color:#f6f6f4;">var olIcon = olVectorLayer.addVector(new sg.olvector.Icon({</span></span>
<span class="line"><span style="color:#f6f6f4;">    lonlat: [116.395645,39.929986]</span></span>
<span class="line"><span style="color:#f6f6f4;">}));</span></span>
<span class="line"><span style="color:#f6f6f4;">// 创建一个二维标签，并添加到二维矢量图层</span></span>
<span class="line"><span style="color:#f6f6f4;">var olLabel = olVectorLayer.addVector(new sg.olvector.Label({</span></span>
<span class="line"><span style="color:#f6f6f4;">    lonlat: [116.395645,39.929986],</span></span>
<span class="line"><span style="color:#f6f6f4;">    noteText: &#39;北京&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">}));</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">// 创建一个三维贴地图标，并添加到三维矢量图层</span></span>
<span class="line"><span style="color:#f6f6f4;">var csIcon = csVectorLayer.addVector(new sg.csvector.GroundIcon({</span></span>
<span class="line"><span style="color:#f6f6f4;">    position: Cesium.Cartesian3.fromDegrees(116.395645,39.929986)</span></span>
<span class="line"><span style="color:#f6f6f4;">}));</span></span>
<span class="line"><span style="color:#f6f6f4;">// 创建一个三维贴地标签，并添加到三维矢量图层</span></span>
<span class="line"><span style="color:#f6f6f4;">var csLabel = csVectorLayer.addVector(new sg.csvector.GroundLabel({</span></span>
<span class="line"><span style="color:#f6f6f4;">    position: Cesium.Cartesian3.fromDegrees(116.395645,39.929986),</span></span>
<span class="line"><span style="color:#f6f6f4;">    noteText: &#39;北京&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">}));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 创建一个二维图标，并添加到二维矢量图层</span></span>
<span class="line"><span style="color:#24292e;">var olIcon = olVectorLayer.addVector(new sg.olvector.Icon({</span></span>
<span class="line"><span style="color:#24292e;">    lonlat: [116.395645,39.929986]</span></span>
<span class="line"><span style="color:#24292e;">}));</span></span>
<span class="line"><span style="color:#24292e;">// 创建一个二维标签，并添加到二维矢量图层</span></span>
<span class="line"><span style="color:#24292e;">var olLabel = olVectorLayer.addVector(new sg.olvector.Label({</span></span>
<span class="line"><span style="color:#24292e;">    lonlat: [116.395645,39.929986],</span></span>
<span class="line"><span style="color:#24292e;">    noteText: &#39;北京&#39;</span></span>
<span class="line"><span style="color:#24292e;">}));</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 创建一个三维贴地图标，并添加到三维矢量图层</span></span>
<span class="line"><span style="color:#24292e;">var csIcon = csVectorLayer.addVector(new sg.csvector.GroundIcon({</span></span>
<span class="line"><span style="color:#24292e;">    position: Cesium.Cartesian3.fromDegrees(116.395645,39.929986)</span></span>
<span class="line"><span style="color:#24292e;">}));</span></span>
<span class="line"><span style="color:#24292e;">// 创建一个三维贴地标签，并添加到三维矢量图层</span></span>
<span class="line"><span style="color:#24292e;">var csLabel = csVectorLayer.addVector(new sg.csvector.GroundLabel({</span></span>
<span class="line"><span style="color:#24292e;">    position: Cesium.Cartesian3.fromDegrees(116.395645,39.929986),</span></span>
<span class="line"><span style="color:#24292e;">    noteText: &#39;北京&#39;</span></span>
<span class="line"><span style="color:#24292e;">}));</span></span></code></pre></div><img src="`+o+`"><p><strong>注意，标签(Label)和标牌(Popup)不是同一个类型，标牌(Popup)会在后面的教程中介绍。</strong></p><p>创建的图标，我们没有指定图标的url或者image，会使用默认的图标显示，如上图所示。</p><h2 id="改变图标-标签" tabindex="-1">改变图标&amp;标签 <a class="header-anchor" href="#改变图标-标签" aria-label="Permalink to &quot;改变图标&amp;标签&quot;">​</a></h2><p>默认的图标和标签在相同位置显示有些重合，我们希望让标签向右移动一点，并且让图标换个颜色并变大一些，代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 设置二维图标的颜色为&#39;red&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">olIcon.setColor(&#39;red&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">// 设置二维图标变大2倍</span></span>
<span class="line"><span style="color:#f6f6f4;">olIcon.setScale(2.0);</span></span>
<span class="line"><span style="color:#f6f6f4;">// 设置二维标签的偏移像素为x方向(屏幕向右为正)20像素，y方向(屏幕向下为正)0像素</span></span>
<span class="line"><span style="color:#f6f6f4;">olLabel.setNoteOffset([20,0]);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">// 设置三维贴地图标的颜色为&#39;yellow&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">csIcon.setColor(&#39;red&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">// 设置三维贴地图标变大1.5倍</span></span>
<span class="line"><span style="color:#f6f6f4;">csIcon.setScale(1.5);</span></span>
<span class="line"><span style="color:#f6f6f4;">// 设置三维贴地标签的偏移像素为x方向(屏幕向右为正)20像素，y方向(屏幕向下为正)0像素</span></span>
<span class="line"><span style="color:#f6f6f4;">csLabel.setNoteOffset([20,0]);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 设置二维图标的颜色为&#39;red&#39;</span></span>
<span class="line"><span style="color:#24292e;">olIcon.setColor(&#39;red&#39;);</span></span>
<span class="line"><span style="color:#24292e;">// 设置二维图标变大2倍</span></span>
<span class="line"><span style="color:#24292e;">olIcon.setScale(2.0);</span></span>
<span class="line"><span style="color:#24292e;">// 设置二维标签的偏移像素为x方向(屏幕向右为正)20像素，y方向(屏幕向下为正)0像素</span></span>
<span class="line"><span style="color:#24292e;">olLabel.setNoteOffset([20,0]);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 设置三维贴地图标的颜色为&#39;yellow&#39;</span></span>
<span class="line"><span style="color:#24292e;">csIcon.setColor(&#39;red&#39;);</span></span>
<span class="line"><span style="color:#24292e;">// 设置三维贴地图标变大1.5倍</span></span>
<span class="line"><span style="color:#24292e;">csIcon.setScale(1.5);</span></span>
<span class="line"><span style="color:#24292e;">// 设置三维贴地标签的偏移像素为x方向(屏幕向右为正)20像素，y方向(屏幕向下为正)0像素</span></span>
<span class="line"><span style="color:#24292e;">csLabel.setNoteOffset([20,0]);</span></span></code></pre></div><img src="`+c+'"><h2 id="所有的二维矢量" tabindex="-1">所有的二维矢量 <a class="header-anchor" href="#所有的二维矢量" aria-label="Permalink to &quot;所有的二维矢量&quot;">​</a></h2><p>二维支持很多矢量，常见的点、线、面、圆、环、扇等，具体请参考api文档。</p><img src="'+t+'"><p>不同的矢量有不同的方法控制其参数，api文档里会有详细的介绍，此外，所有的矢量都支持显隐、闪烁等通用的控制。</p><h2 id="所有的三维矢量" tabindex="-1">所有的三维矢量 <a class="header-anchor" href="#所有的三维矢量" aria-label="Permalink to &quot;所有的三维矢量&quot;">​</a></h2><p>三维支持的矢量比二维更多更复杂，常见的点、线、面、圆、环、扇等都分别有贴地和空间两种类型，此外还有更加复杂的自定义三维网格、模型、大规模数字城市等类型，具体请参考api文档。</p><img src="'+r+'">',35),y=[f];function d(g,m,h,u,v,_){return a(),n("div",null,y)}const L=s(i,[["render",d]]);export{V as __pageData,L as default};
