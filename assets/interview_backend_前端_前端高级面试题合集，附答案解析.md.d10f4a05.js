import{_ as s,o as a,c as n,V as e}from"./chunks/framework.c6d8cbec.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/前端/前端高级面试题合集，附答案解析.md","filePath":"interview/backend/前端/前端高级面试题合集，附答案解析.md"}'),l={name:"interview/backend/前端/前端高级面试题合集，附答案解析.md"},o=e(`<h3 id="_1、什么是同源-协议相同-域名相同-端口相同" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%90%88%E9%9B%86%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#1%E4%BB%80%E4%B9%88%E6%98%AF%E5%90%8C%E6%BA%90%EF%BC%9A%E5%8D%8F%E8%AE%AE%E7%9B%B8%E5%90%8C-%E5%9F%9F%E5%90%8D%E7%9B%B8%E5%90%8C-%E7%AB%AF%E5%8F%A3%E7%9B%B8%E5%90%8C" target="_blank" rel="noreferrer">1、什么是同源：协议相同 域名相同 端口相同</a> <a class="header-anchor" href="#_1、什么是同源-协议相同-域名相同-端口相同" aria-label="Permalink to &quot;[1、什么是同源：协议相同 域名相同 端口相同](https://gitee.com/souyunku/DevBooks/blob/master/docs/前端/前端高级面试题合集，附答案解析.md#1什么是同源：协议相同-域名相同-端口相同)&quot;">​</a></h3><p>同源政策的目的，是为了保证用户信息的安全，防止恶意的网站窃取数据。</p><p><strong>如果非同源，共有三种行为受到限制</strong></p><p><strong>1、</strong> <code>Cookie</code>、<code>LocalStorage</code> 和 <code>IndexDB</code> 无法读取。</p><p><strong>2、</strong> <code>DOM</code> 无法获得。</p><p><strong>3、</strong> <code>AJAX</code> 请求不能发送。</p><h3 id="_2、请大概描述下页面访问cookie的限制条件" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%90%88%E9%9B%86%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#2%E8%AF%B7%E5%A4%A7%E6%A6%82%E6%8F%8F%E8%BF%B0%E4%B8%8B%E9%A1%B5%E9%9D%A2%E8%AE%BF%E9%97%AEcookie%E7%9A%84%E9%99%90%E5%88%B6%E6%9D%A1%E4%BB%B6" target="_blank" rel="noreferrer">2、请大概描述下页面访问cookie的限制条件</a> <a class="header-anchor" href="#_2、请大概描述下页面访问cookie的限制条件" aria-label="Permalink to &quot;[2、请大概描述下页面访问cookie的限制条件](https://gitee.com/souyunku/DevBooks/blob/master/docs/前端/前端高级面试题合集，附答案解析.md#2请大概描述下页面访问cookie的限制条件)&quot;">​</a></h3><p>跨域问题，设置了<code>HttpOnly</code>。</p><h3 id="_3、什么是回调函数" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%90%88%E9%9B%86%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#3%E4%BB%80%E4%B9%88%E6%98%AF%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0" target="_blank" rel="noreferrer">3、什么是回调函数？</a> <a class="header-anchor" href="#_3、什么是回调函数" aria-label="Permalink to &quot;[3、什么是回调函数？](https://gitee.com/souyunku/DevBooks/blob/master/docs/前端/前端高级面试题合集，附答案解析.md#3什么是回调函数)&quot;">​</a></h3><p><strong>回调函数</strong>是一段可执行的代码段，它作为一个参数传递给其他的代码，其作用是在需要的时候方便调用这段（回调函数）代码。</p><p>在JavaScript中函数也是对象的一种，同样对象可以作为参数传递给函数，因此函数也可以作为参数传递给另外一个函数，这个作为参数的函数就是回调函数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const btnAdd = document.getElementById(&#39;btnAdd&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">btnAdd.addEventListener(&#39;click&#39;, function clickCallback(e) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    // do something useless</span></span>
<span class="line"><span style="color:#f6f6f4;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const btnAdd = document.getElementById(&#39;btnAdd&#39;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">btnAdd.addEventListener(&#39;click&#39;, function clickCallback(e) {</span></span>
<span class="line"><span style="color:#24292e;">    // do something useless</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><p>在本例中，我们等待<code>id</code>为<code>btnAdd</code>的元素中的<code>click</code>事件，如果它被单击，则执行<code>clickCallback</code>函数。回调函数向某些数据或事件添加一些功能。</p><p>数组中的<code>reduce</code>、<code>filter</code>和<code>map</code>方法需要一个回调作为参数。回调的一个很好的类比是，当你打电话给某人，如果他们不接，你留下一条消息，你期待他们回调。调用某人或留下消息的行为是事件或数据，回调是你希望稍后发生的操作。</p><h3 id="_4、http-method" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%90%88%E9%9B%86%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#4http-method" target="_blank" rel="noreferrer">4、HTTP method</a> <a class="header-anchor" href="#_4、http-method" aria-label="Permalink to &quot;[4、HTTP method](https://gitee.com/souyunku/DevBooks/blob/master/docs/前端/前端高级面试题合集，附答案解析.md#4http-method)&quot;">​</a></h3><p><strong>1、</strong> 一台服务器要与<code>HTTP1.1</code>兼容，只要为资源实现<code>GET</code>和<code>HEAD</code>方法即可。</p><p><strong>2、</strong> <code>GET</code>是最常用的方法，通常<code>用于请求服务器</code>发送某个资源。</p><p><strong>3、</strong> <code>HEAD</code> 与 <code>GET</code> 类似，但服务器在响应中值返回首部，不返回实体的主体部分。</p><p><strong>4、</strong> <code>PUT</code> 让服务器用请求的主体部分来创建一个由所请求的 <code>URL</code> 命名的新文档，或者，如果那个 <code>URL</code> 已经存在的话，就用干这个主体替代它。</p><p><strong>5、</strong> <code>POST</code> 起初是用来向服务器输入数据的。实际上，通常会用它来支持HTML的表单。表单中填好的数据通常会被送给服务器，然后由服务器将其发送到要去的地方。</p><p><strong>6、</strong> <code>TRACE</code> 会在目的服务器端发起一个<code>环回诊断</code>，最后一站的服务器会弹回一个<code>TRACE</code>响应并在响应主体中携带它收到的<code>原始请求报文</code>。<code>TRACE</code> 方法主要用于诊断，用于验证请求<code>是否如愿穿过了请求/响应链</code>。</p><p><strong>7、</strong> <code>OPTIONS</code> 方法请求 <code>web</code> 服务器告知其支持的各种功能。可以查询服务器支持哪些方法或者对某些特殊资源支持哪些方法。</p><p><strong>8、</strong> <code>DELETE</code> 请求服务器删除请求 <code>URL</code> 指定的资源。</p><h3 id="_5、jq中-attr-和-prop-有什么区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%90%88%E9%9B%86%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#5jq%E4%B8%AD-attr-%E5%92%8C-prop-%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB###" target="_blank" rel="noreferrer">5、Jq中 attr 和 prop 有什么区别###</a> <a class="header-anchor" href="#_5、jq中-attr-和-prop-有什么区别" aria-label="Permalink to &quot;[5、Jq中 attr 和 prop 有什么区别###](https://gitee.com/souyunku/DevBooks/blob/master/docs/前端/前端高级面试题合集，附答案解析.md#5jq中-attr-和-prop-有什么区别###)&quot;">​</a></h3><p>对于HTML元素本身就带有的固有属性，在处理时，使用prop方法。</p><p>对于HTML元素我们自己自定义的DOM属性，在处理时，使用attr方法。</p><h3 id="_6、ajax原理" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%90%88%E9%9B%86%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#6ajax%E5%8E%9F%E7%90%86" target="_blank" rel="noreferrer">6、Ajax原理</a> <a class="header-anchor" href="#_6、ajax原理" aria-label="Permalink to &quot;[6、Ajax原理](https://gitee.com/souyunku/DevBooks/blob/master/docs/前端/前端高级面试题合集，附答案解析.md#6ajax原理)&quot;">​</a></h3><p><strong>1、</strong> <code>Ajax</code>的原理简单来说是在用户和服务器之间加了—个中间层(<code>AJAX</code>引擎)，通过<code>XmlHttpRequest</code>对象来向服务器发异步请求，从服务器获得数据，然后用<code>javascrip</code>t来操作<code>DOM</code>而更新页面。使用户操作与服务器响应异步化。这其中最关键的一步就是从服务器获得请求数据</p><p><strong>2、</strong> <code>Ajax</code>的过程只涉及<code>JavaScript</code>、<code>XMLHttpRequest</code>和<code>DOM</code>。<code>XMLHttpRequest</code>是<code>aja</code>x的核心机制</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 1、创建连接</span></span>
<span class="line"><span style="color:#f6f6f4;">    var xhr = null;</span></span>
<span class="line"><span style="color:#f6f6f4;">    xhr = new XMLHttpRequest()</span></span>
<span class="line"><span style="color:#f6f6f4;">    // 2、连接服务器</span></span>
<span class="line"><span style="color:#f6f6f4;">    xhr.open(&#39;get&#39;, url, true)</span></span>
<span class="line"><span style="color:#f6f6f4;">    // 3、发送请求</span></span>
<span class="line"><span style="color:#f6f6f4;">    xhr.send(null);</span></span>
<span class="line"><span style="color:#f6f6f4;">    // 4、接受请求</span></span>
<span class="line"><span style="color:#f6f6f4;">    xhr.onreadystatechange = function(){</span></span>
<span class="line"><span style="color:#f6f6f4;">        if(xhr.readyState == 4){</span></span>
<span class="line"><span style="color:#f6f6f4;">            if(xhr.status == 200){</span></span>
<span class="line"><span style="color:#f6f6f4;">                success(xhr.responseText);</span></span>
<span class="line"><span style="color:#f6f6f4;">            } else { // fail</span></span>
<span class="line"><span style="color:#f6f6f4;">                fail &amp;&amp; fail(xhr.status);</span></span>
<span class="line"><span style="color:#f6f6f4;">            }</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 1、创建连接</span></span>
<span class="line"><span style="color:#24292e;">    var xhr = null;</span></span>
<span class="line"><span style="color:#24292e;">    xhr = new XMLHttpRequest()</span></span>
<span class="line"><span style="color:#24292e;">    // 2、连接服务器</span></span>
<span class="line"><span style="color:#24292e;">    xhr.open(&#39;get&#39;, url, true)</span></span>
<span class="line"><span style="color:#24292e;">    // 3、发送请求</span></span>
<span class="line"><span style="color:#24292e;">    xhr.send(null);</span></span>
<span class="line"><span style="color:#24292e;">    // 4、接受请求</span></span>
<span class="line"><span style="color:#24292e;">    xhr.onreadystatechange = function(){</span></span>
<span class="line"><span style="color:#24292e;">        if(xhr.readyState == 4){</span></span>
<span class="line"><span style="color:#24292e;">            if(xhr.status == 200){</span></span>
<span class="line"><span style="color:#24292e;">                success(xhr.responseText);</span></span>
<span class="line"><span style="color:#24292e;">            } else { // fail</span></span>
<span class="line"><span style="color:#24292e;">                fail &amp;&amp; fail(xhr.status);</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h3 id="_7、浏览器架构" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%90%88%E9%9B%86%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#7%E6%B5%8F%E8%A7%88%E5%99%A8%E6%9E%B6%E6%9E%84" target="_blank" rel="noreferrer">7、浏览器架构</a> <a class="header-anchor" href="#_7、浏览器架构" aria-label="Permalink to &quot;[7、浏览器架构](https://gitee.com/souyunku/DevBooks/blob/master/docs/前端/前端高级面试题合集，附答案解析.md#7浏览器架构)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">* 用户界面</span></span>
<span class="line"><span style="color:#f6f6f4;">  * 主进程</span></span>
<span class="line"><span style="color:#f6f6f4;">  * 内核</span></span>
<span class="line"><span style="color:#f6f6f4;">      * 渲染引擎</span></span>
<span class="line"><span style="color:#f6f6f4;">      * JS 引擎</span></span>
<span class="line"><span style="color:#f6f6f4;">          * 执行栈</span></span>
<span class="line"><span style="color:#f6f6f4;">      * 事件触发线程</span></span>
<span class="line"><span style="color:#f6f6f4;">          * 消息队列</span></span>
<span class="line"><span style="color:#f6f6f4;">              * 微任务</span></span>
<span class="line"><span style="color:#f6f6f4;">              * 宏任务</span></span>
<span class="line"><span style="color:#f6f6f4;">      * 网络异步线程</span></span>
<span class="line"><span style="color:#f6f6f4;">      * 定时器线程</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">* 用户界面</span></span>
<span class="line"><span style="color:#24292e;">  * 主进程</span></span>
<span class="line"><span style="color:#24292e;">  * 内核</span></span>
<span class="line"><span style="color:#24292e;">      * 渲染引擎</span></span>
<span class="line"><span style="color:#24292e;">      * JS 引擎</span></span>
<span class="line"><span style="color:#24292e;">          * 执行栈</span></span>
<span class="line"><span style="color:#24292e;">      * 事件触发线程</span></span>
<span class="line"><span style="color:#24292e;">          * 消息队列</span></span>
<span class="line"><span style="color:#24292e;">              * 微任务</span></span>
<span class="line"><span style="color:#24292e;">              * 宏任务</span></span>
<span class="line"><span style="color:#24292e;">      * 网络异步线程</span></span>
<span class="line"><span style="color:#24292e;">      * 定时器线程</span></span></code></pre></div><h3 id="_8、什么是缓存及它有什么作用" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%90%88%E9%9B%86%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#8%E4%BB%80%E4%B9%88%E6%98%AF%E7%BC%93%E5%AD%98%E5%8F%8A%E5%AE%83%E6%9C%89%E4%BB%80%E4%B9%88%E4%BD%9C%E7%94%A8" target="_blank" rel="noreferrer">8、什么是缓存及它有什么作用？</a> <a class="header-anchor" href="#_8、什么是缓存及它有什么作用" aria-label="Permalink to &quot;[8、什么是缓存及它有什么作用？](https://gitee.com/souyunku/DevBooks/blob/master/docs/前端/前端高级面试题合集，附答案解析.md#8什么是缓存及它有什么作用)&quot;">​</a></h3><p>缓存是建立一个函数的过程，这个函数能够记住之前计算的结果或值。使用缓存函数是为了避免在最后一次使用相同参数的计算中已经执行的函数的计算。这节省了时间，但也有不利的一面，即我们将消耗更多的内存来保存以前的结果。</p><h3 id="_9、组件中的data为什么是函数" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%90%88%E9%9B%86%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#9%E7%BB%84%E4%BB%B6%E4%B8%AD%E7%9A%84data%E4%B8%BA%E4%BB%80%E4%B9%88%E6%98%AF%E5%87%BD%E6%95%B0" target="_blank" rel="noreferrer">9、组件中的data为什么是函数？</a> <a class="header-anchor" href="#_9、组件中的data为什么是函数" aria-label="Permalink to &quot;[9、组件中的data为什么是函数？](https://gitee.com/souyunku/DevBooks/blob/master/docs/前端/前端高级面试题合集，附答案解析.md#9组件中的data为什么是函数)&quot;">​</a></h3><p>为什么组件中的data必须是一个函数，然后return一个对象，而new Vue实例里，data可以直接是一个对象？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// data</span></span>
<span class="line"><span style="color:#f6f6f4;">data() {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return {</span></span>
<span class="line"><span style="color:#f6f6f4;">    message: &quot;子组件&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    childName:this.name</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">// new Vue</span></span>
<span class="line"><span style="color:#f6f6f4;">new Vue({</span></span>
<span class="line"><span style="color:#f6f6f4;">  el: &#39;#app&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">  router,</span></span>
<span class="line"><span style="color:#f6f6f4;">  template: &#39;&lt;App/&gt;&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">  components: {App}</span></span>
<span class="line"><span style="color:#f6f6f4;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// data</span></span>
<span class="line"><span style="color:#24292e;">data() {</span></span>
<span class="line"><span style="color:#24292e;">  return {</span></span>
<span class="line"><span style="color:#24292e;">    message: &quot;子组件&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    childName:this.name</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// new Vue</span></span>
<span class="line"><span style="color:#24292e;">new Vue({</span></span>
<span class="line"><span style="color:#24292e;">  el: &#39;#app&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  router,</span></span>
<span class="line"><span style="color:#24292e;">  template: &#39;&lt;App/&gt;&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  components: {App}</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><p>因为组件是用来复用的，JS里对象是引用关系，这样作用域没有隔离，而new Vue的实例，是不会被复用的，因此不存在引用对象问题</p><h3 id="_10、什么是事件冒泡" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%90%88%E9%9B%86%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#10%E4%BB%80%E4%B9%88%E6%98%AF%E4%BA%8B%E4%BB%B6%E5%86%92%E6%B3%A1" target="_blank" rel="noreferrer">10、什么是事件冒泡？</a> <a class="header-anchor" href="#_10、什么是事件冒泡" aria-label="Permalink to &quot;[10、什么是事件冒泡？](https://gitee.com/souyunku/DevBooks/blob/master/docs/前端/前端高级面试题合集，附答案解析.md#10什么是事件冒泡)&quot;">​</a></h3><p>当<strong>事件</strong>发生在<strong>DOM</strong>元素上时，该<strong>事件</strong>并不完全发生在那个元素上。在冒泡阶段，事件冒泡，或者事件发生在它的父代，祖父母，祖父母的父代，直到到达<code>window</code>为止。</p><p>假设有如下的 HTML 结构：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;div class=&quot;grandparent&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;div class=&quot;parent&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;div class=&quot;child&quot;&gt;1&lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;grandparent&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div class=&quot;parent&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div class=&quot;child&quot;&gt;1&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span></code></pre></div><p>对应的 JS 代码:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function addEvent(el, event, callback, isCapture = false) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  if (!el || !event || !callback || typeof callback !== &#39;function&#39;) return;</span></span>
<span class="line"><span style="color:#f6f6f4;">  if (typeof el === &#39;string&#39;) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    el = document.querySelector(el);</span></span>
<span class="line"><span style="color:#f6f6f4;">  };</span></span>
<span class="line"><span style="color:#f6f6f4;">  el.addEventListener(event, callback, isCapture);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">addEvent(document, &#39;DOMContentLoaded&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">  const child = document.querySelector(&#39;.child&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">  const parent = document.querySelector(&#39;.parent&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">  const grandparent = document.querySelector(&#39;.grandparent&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  addEvent(child, &#39;click&#39;, function (e) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    console.log(&#39;child&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">  });</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  addEvent(parent, &#39;click&#39;, function (e) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    console.log(&#39;parent&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">  });</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  addEvent(grandparent, &#39;click&#39;, function (e) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    console.log(&#39;grandparent&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">  });</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  addEvent(document, &#39;click&#39;, function (e) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    console.log(&#39;document&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">  });</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  addEvent(&#39;html&#39;, &#39;click&#39;, function (e) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    console.log(&#39;html&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">  })</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  addEvent(window, &#39;click&#39;, function (e) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    console.log(&#39;window&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">  })</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function addEvent(el, event, callback, isCapture = false) {</span></span>
<span class="line"><span style="color:#24292e;">  if (!el || !event || !callback || typeof callback !== &#39;function&#39;) return;</span></span>
<span class="line"><span style="color:#24292e;">  if (typeof el === &#39;string&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">    el = document.querySelector(el);</span></span>
<span class="line"><span style="color:#24292e;">  };</span></span>
<span class="line"><span style="color:#24292e;">  el.addEventListener(event, callback, isCapture);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">addEvent(document, &#39;DOMContentLoaded&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  const child = document.querySelector(&#39;.child&#39;);</span></span>
<span class="line"><span style="color:#24292e;">  const parent = document.querySelector(&#39;.parent&#39;);</span></span>
<span class="line"><span style="color:#24292e;">  const grandparent = document.querySelector(&#39;.grandparent&#39;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  addEvent(child, &#39;click&#39;, function (e) {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&#39;child&#39;);</span></span>
<span class="line"><span style="color:#24292e;">  });</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  addEvent(parent, &#39;click&#39;, function (e) {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&#39;parent&#39;);</span></span>
<span class="line"><span style="color:#24292e;">  });</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  addEvent(grandparent, &#39;click&#39;, function (e) {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&#39;grandparent&#39;);</span></span>
<span class="line"><span style="color:#24292e;">  });</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  addEvent(document, &#39;click&#39;, function (e) {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&#39;document&#39;);</span></span>
<span class="line"><span style="color:#24292e;">  });</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  addEvent(&#39;html&#39;, &#39;click&#39;, function (e) {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&#39;html&#39;);</span></span>
<span class="line"><span style="color:#24292e;">  })</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  addEvent(window, &#39;click&#39;, function (e) {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&#39;window&#39;);</span></span>
<span class="line"><span style="color:#24292e;">  })</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><p><code>addEventListener</code>方法具有第三个可选参数<code>useCapture</code>，其默认值为<code>false</code>，事件将在冒泡阶段中发生，如果为<code>true</code>，则事件将在捕获阶段中发生。如果单击<code>child</code>元素，它将分别在控制台上记录<code>child</code>，<code>parent</code>，<code>grandparent</code>，<code>html</code>，<code>document</code>和<code>window</code>，这就是事件冒泡。</p><h3 id="_11、微信小程序-页面数据传递" tabindex="-1">11、微信小程序，页面数据传递 <a class="header-anchor" href="#_11、微信小程序-页面数据传递" aria-label="Permalink to &quot;11、微信小程序，页面数据传递&quot;">​</a></h3><h3 id="_12、行内元素有哪些-块级元素有哪些-空-void-元素有那些" tabindex="-1">12、行内元素有哪些？块级元素有哪些？ 空(void)元素有那些 <a class="header-anchor" href="#_12、行内元素有哪些-块级元素有哪些-空-void-元素有那些" aria-label="Permalink to &quot;12、行内元素有哪些？块级元素有哪些？ 空(void)元素有那些&quot;">​</a></h3><h3 id="_13、在网页中的应该使用奇数还是偶数的字体-为什么呢" tabindex="-1">13、在网页中的应该使用奇数还是偶数的字体？为什么呢？ <a class="header-anchor" href="#_13、在网页中的应该使用奇数还是偶数的字体-为什么呢" aria-label="Permalink to &quot;13、在网页中的应该使用奇数还是偶数的字体？为什么呢？&quot;">​</a></h3><h3 id="_14、null-undefined-的区别" tabindex="-1">14、null，undefined 的区别？ <a class="header-anchor" href="#_14、null-undefined-的区别" aria-label="Permalink to &quot;14、null，undefined 的区别？&quot;">​</a></h3><h3 id="_15、开发时如何对项目进行管理-gulp" tabindex="-1">15、开发时如何对项目进行管理?gulp? <a class="header-anchor" href="#_15、开发时如何对项目进行管理-gulp" aria-label="Permalink to &quot;15、开发时如何对项目进行管理?gulp?&quot;">​</a></h3><h3 id="_16、commonjs-requirejs-amd-cmd-umd" tabindex="-1">16、commonjs?requirejs?AMD|CMD|UMD? <a class="header-anchor" href="#_16、commonjs-requirejs-amd-cmd-umd" aria-label="Permalink to &quot;16、commonjs?requirejs?AMD|CMD|UMD?&quot;">​</a></h3><h3 id="_17、dom事件模型和事件流" tabindex="-1">17、DOM事件模型和事件流？ <a class="header-anchor" href="#_17、dom事件模型和事件流" aria-label="Permalink to &quot;17、DOM事件模型和事件流？&quot;">​</a></h3><h3 id="_18、渲染过程中遇到-js-文件怎么处理-浏览器解析过程" tabindex="-1">18、渲染过程中遇到 JS 文件怎么处理？（浏览器解析过程） <a class="header-anchor" href="#_18、渲染过程中遇到-js-文件怎么处理-浏览器解析过程" aria-label="Permalink to &quot;18、渲染过程中遇到 JS 文件怎么处理？（浏览器解析过程）&quot;">​</a></h3><h3 id="_19、全屏滚动的原理是什么-用到了css的哪些属性" tabindex="-1">19、全屏滚动的原理是什么？用到了CSS的哪些属性？ <a class="header-anchor" href="#_19、全屏滚动的原理是什么-用到了css的哪些属性" aria-label="Permalink to &quot;19、全屏滚动的原理是什么？用到了CSS的哪些属性？&quot;">​</a></h3><h3 id="_20、行内元素定义" tabindex="-1">20、行内元素定义 <a class="header-anchor" href="#_20、行内元素定义" aria-label="Permalink to &quot;20、行内元素定义&quot;">​</a></h3><h3 id="_21、常见的浏览器端的存储技术有哪些" tabindex="-1">21、常见的浏览器端的存储技术有哪些？ <a class="header-anchor" href="#_21、常见的浏览器端的存储技术有哪些" aria-label="Permalink to &quot;21、常见的浏览器端的存储技术有哪些？&quot;">​</a></h3><h3 id="_22、sgml-、-html-、xml-和-xhtml-的区别" tabindex="-1">22、SGML 、 HTML 、XML 和 XHTML 的区别？ <a class="header-anchor" href="#_22、sgml-、-html-、xml-和-xhtml-的区别" aria-label="Permalink to &quot;22、SGML 、 HTML 、XML 和 XHTML 的区别？&quot;">​</a></h3><h3 id="_23、ajax-是什么" tabindex="-1">23、AJAX 是什么？ <a class="header-anchor" href="#_23、ajax-是什么" aria-label="Permalink to &quot;23、AJAX 是什么？&quot;">​</a></h3><h3 id="_24、三大框架的区别" tabindex="-1">24、三大框架的区别： <a class="header-anchor" href="#_24、三大框架的区别" aria-label="Permalink to &quot;24、三大框架的区别：&quot;">​</a></h3><h3 id="_25、如何合并两个数组-数组删除一个元素" tabindex="-1">25、如何合并两个数组？数组删除一个元素? <a class="header-anchor" href="#_25、如何合并两个数组-数组删除一个元素" aria-label="Permalink to &quot;25、如何合并两个数组？数组删除一个元素?&quot;">​</a></h3><h3 id="_26、清除浮动的几种方式-各自的优缺点" tabindex="-1">26、清除浮动的几种方式，各自的优缺点 <a class="header-anchor" href="#_26、清除浮动的几种方式-各自的优缺点" aria-label="Permalink to &quot;26、清除浮动的几种方式，各自的优缺点&quot;">​</a></h3><h3 id="_27、git-和-svn的区别" tabindex="-1">27、git 和 svn的区别? <a class="header-anchor" href="#_27、git-和-svn的区别" aria-label="Permalink to &quot;27、git 和 svn的区别?&quot;">​</a></h3><h3 id="_28、块级元素定义" tabindex="-1">28、块级元素定义 <a class="header-anchor" href="#_28、块级元素定义" aria-label="Permalink to &quot;28、块级元素定义&quot;">​</a></h3><h3 id="_29、disabled-readyonly" tabindex="-1">29、disabled readyonly? <a class="header-anchor" href="#_29、disabled-readyonly" aria-label="Permalink to &quot;29、disabled readyonly?&quot;">​</a></h3><h3 id="_30、如何在一行中计算多个表达式的值" tabindex="-1">30、如何在一行中计算多个表达式的值？ <a class="header-anchor" href="#_30、如何在一行中计算多个表达式的值" aria-label="Permalink to &quot;30、如何在一行中计算多个表达式的值？&quot;">​</a></h3>`,65),p=[o];function c(t,r,i,d,f,E){return a(),n("div",null,p)}const y=s(l,[["render",c]]);export{u as __pageData,y as default};
