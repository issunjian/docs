import{_ as s,o as n,c as a,V as p}from"./chunks/framework.c6d8cbec.js";const F=JSON.parse('{"title":"什么是跨域，怎么解决","description":"","frontmatter":{"author":"HearLing"},"headers":[],"relativePath":"interview/frontend/net/cors/index.md","filePath":"interview/frontend/net/cors/index.md"}'),e={name:"interview/frontend/net/cors/index.md"},l=p(`<h1 id="什么是跨域-怎么解决" tabindex="-1">什么是跨域，怎么解决 <a class="header-anchor" href="#什么是跨域-怎么解决" aria-label="Permalink to &quot;什么是跨域，怎么解决&quot;">​</a></h1><p>要聊跨域，那就要先聊聊 同源策略了。</p><h2 id="什么是同源策略" tabindex="-1">什么是同源策略 <a class="header-anchor" href="#什么是同源策略" aria-label="Permalink to &quot;什么是同源策略&quot;">​</a></h2><p>在浏览器安全里面我们也有讲过：</p><p>如果两个 URL 的协议、域名和端口都相同，我们就称这两个 URL 同源。两个不同的源之间若想要相互访问资源或者操作 DOM，那么会有一套基础的安全策略的制约，我们把这称为同源策略。</p><ul><li>DOM 层面：限制了来自不同源的 JavaScript 脚本对当前 DOM 对象读和写的操作。</li><li>数据层面：限制了不同源的站点读取当前站点的 Cookie、IndexDB、LocalStorage 等数据。</li><li>网络层面：限制了通过 XMLHttpRequest 等方式将站点的数据发送给不同源的站点。</li></ul><p>所以我们通常说的跨域问题，都是同源策略对 Ajax 产生的影响。下面列举一些常见的解决跨域问题的方法：</p><h2 id="代理" tabindex="-1">代理 <a class="header-anchor" href="#代理" aria-label="Permalink to &quot;代理&quot;">​</a></h2><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/476218fe8ac54be9addf17812ada3e21~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt=""></p><p>一图胜前言，以 vue 为例，配置：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">// vue 的开发服务器代理配置</span></span>
<span class="line"><span style="color:#7B7F8B;">// vue.config.js</span></span>
<span class="line"><span style="color:#97E1F1;font-style:italic;">module</span><span style="color:#F6F6F4;">.</span><span style="color:#97E1F1;font-style:italic;">exports</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  devServer</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 配置开发服务器</span></span>
<span class="line"><span style="color:#F6F6F4;">    proxy</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">// 配置代理</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">/api</span><span style="color:#DEE492;">&#39;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 若请求路径以 /api 开头</span></span>
<span class="line"><span style="color:#F6F6F4;">        target</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">http://dev.taobao.com</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, </span><span style="color:#7B7F8B;">// 将其转发到 http://dev.taobao.com</span></span>
<span class="line"><span style="color:#F6F6F4;">      },</span></span>
<span class="line"><span style="color:#F6F6F4;">    },</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// vue 的开发服务器代理配置</span></span>
<span class="line"><span style="color:#6A737D;">// vue.config.js</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  devServer: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 配置开发服务器</span></span>
<span class="line"><span style="color:#24292E;">    proxy: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 配置代理</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;/api&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 若请求路径以 /api 开头</span></span>
<span class="line"><span style="color:#24292E;">        target: </span><span style="color:#032F62;">&#39;http://dev.taobao.com&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 将其转发到 http://dev.taobao.com</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>这样的场景就如图所示，可以用在开发环境解决跨域</p><h2 id="jsonp" tabindex="-1">JSONP <a class="header-anchor" href="#jsonp" aria-label="Permalink to &quot;JSONP&quot;">​</a></h2><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f0206925bfde4e939756c32ae800c777~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt=""></p><p>做法就如图所示，用 script 元素请求服务器，浏览器并不会阻止 script 元素的请求，不会产生跨域。服务器拿到请求后，响应一段 js 代码（函数 callback 调用），调用客户端预先生成好的函数，把浏览器需要的数据作为参数传给函数，从而间接传递给客户端。</p><p>缺点很明显：只能支持 GET 请求</p><h2 id="cors" tabindex="-1">CORS <a class="header-anchor" href="#cors" aria-label="Permalink to &quot;CORS&quot;">​</a></h2><p>跨域资源共享：当浏览器需要跨域访问服务器，需要获得服务器允许。详细可以看这个 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS" target="_blank" rel="noreferrer">官方解释</a>。CORS 标准对不同的场景有规范要求，这里就只列举常见的简单请求场景吧。</p><p><img src="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/cors_principle.png" alt=""></p><p>简单场景的要求：</p><ul><li>使用 GET、HEAD、POST 三者之一</li><li>除了被用户代理自动设置的标头字段（例如 Connection、User-Agent 或其他在 Fetch 规范中定义为禁用标头名称的标头），允许人为设置的字段为 Fetch 规范定义的对 CORS 安全的标头字段集合。 <blockquote><p>上述的集合：Accept、Accept-Language、Content-Language、Content-Type（需要注意额外的限制）、Range（只允许简单的范围标头值 如 bytes=256- 或 bytes=127-255）</p></blockquote></li><li>Content-Type 标头所指定的媒体类型的值仅限于 <code>text/plain</code>、<code>multipart/form-data</code>、<code>application/x-www-form-urlencoded</code> 三者之一。</li><li>给定一个 XMLHttpRequest 实例 xhr，没有调用 xhr.upload.addEventListener()，以监听该上传请求。</li><li>请求中没有使用 ReadableStream 对象。</li></ul><p>比如说，假如站点 <code>https://foo.example</code> 的网页应用想要访问 <code>https://bar.other</code> 的资源。foo.example 的网页中可能包含类似于下面的 JavaScript 代码：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> xhr </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">XMLHttpRequest</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> url </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">https://bar.other/resources/public-data/</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">xhr.</span><span style="color:#62E884;">open</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">GET</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, url)</span></span>
<span class="line"><span style="color:#F6F6F4;">xhr.onreadystatechange </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> someHandler</span></span>
<span class="line"><span style="color:#F6F6F4;">xhr.</span><span style="color:#62E884;">send</span><span style="color:#F6F6F4;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">xhr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">XMLHttpRequest</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">url</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;https://bar.other/resources/public-data/&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">xhr.</span><span style="color:#6F42C1;">open</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;GET&#39;</span><span style="color:#24292E;">, url)</span></span>
<span class="line"><span style="color:#24292E;">xhr.onreadystatechange </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> someHandler</span></span>
<span class="line"><span style="color:#24292E;">xhr.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">()</span></span></code></pre></div><p>此操作实行了客户端和服务器之间的简单交换，使用 CORS 标头字段来处理权限：</p><p><img src="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/simple-req.png" alt=""></p><p>上述请求报文：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">GET /resources/public-data/ HTTP/1.1</span></span>
<span class="line"><span style="color:#f6f6f4;">Host: bar.other</span></span>
<span class="line"><span style="color:#f6f6f4;">User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0</span></span>
<span class="line"><span style="color:#f6f6f4;">Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8</span></span>
<span class="line"><span style="color:#f6f6f4;">Accept-Language: en-us,en;q=0.5</span></span>
<span class="line"><span style="color:#f6f6f4;">Accept-Encoding: gzip,deflate</span></span>
<span class="line"><span style="color:#f6f6f4;">Connection: keep-alive</span></span>
<span class="line"><span style="color:#f6f6f4;">Origin: https://foo.example //表明该请求来源于 http://foo.example</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">GET /resources/public-data/ HTTP/1.1</span></span>
<span class="line"><span style="color:#24292e;">Host: bar.other</span></span>
<span class="line"><span style="color:#24292e;">User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0</span></span>
<span class="line"><span style="color:#24292e;">Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8</span></span>
<span class="line"><span style="color:#24292e;">Accept-Language: en-us,en;q=0.5</span></span>
<span class="line"><span style="color:#24292e;">Accept-Encoding: gzip,deflate</span></span>
<span class="line"><span style="color:#24292e;">Connection: keep-alive</span></span>
<span class="line"><span style="color:#24292e;">Origin: https://foo.example //表明该请求来源于 http://foo.example</span></span></code></pre></div><p>服务器如何响应：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">HTTP/1.1 200 OK</span></span>
<span class="line"><span style="color:#f6f6f4;">Date: Mon, 01 Dec 2008 00:23:53 GMT</span></span>
<span class="line"><span style="color:#f6f6f4;">Server: Apache/2</span></span>
<span class="line"><span style="color:#f6f6f4;">Access-Control-Allow-Origin: *</span></span>
<span class="line"><span style="color:#f6f6f4;">Keep-Alive: timeout=2, max=100</span></span>
<span class="line"><span style="color:#f6f6f4;">Connection: Keep-Alive</span></span>
<span class="line"><span style="color:#f6f6f4;">Transfer-Encoding: chunked</span></span>
<span class="line"><span style="color:#f6f6f4;">Content-Type: application/xml</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">[…XML Data…]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">HTTP/1.1 200 OK</span></span>
<span class="line"><span style="color:#24292e;">Date: Mon, 01 Dec 2008 00:23:53 GMT</span></span>
<span class="line"><span style="color:#24292e;">Server: Apache/2</span></span>
<span class="line"><span style="color:#24292e;">Access-Control-Allow-Origin: *</span></span>
<span class="line"><span style="color:#24292e;">Keep-Alive: timeout=2, max=100</span></span>
<span class="line"><span style="color:#24292e;">Connection: Keep-Alive</span></span>
<span class="line"><span style="color:#24292e;">Transfer-Encoding: chunked</span></span>
<span class="line"><span style="color:#24292e;">Content-Type: application/xml</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">[…XML Data…]</span></span></code></pre></div><p>本例中，服务端返回的 Access-Control-Allow-Origin 标头的 Access-Control-Allow-Origin: * 值表明，该资源可以被任意外源访问。。如果 <code>https://bar.other</code> 的资源持有者想限制他的资源只能通过 <code>https://foo.example</code> 来访问（也就是说，非 <code>https://foo.example</code> 域无法通过跨源访问访问到该资源），他可以设置：<code>Access-Control-Allow-Origin: https://foo.example</code></p><p>其它需要预检和附带身份凭证的场景的可以在官方详细了解。</p><h2 id="跨域请求如何携带-cookie" tabindex="-1">跨域请求如何携带 cookie? <a class="header-anchor" href="#跨域请求如何携带-cookie" aria-label="Permalink to &quot;跨域请求如何携带 cookie?&quot;">​</a></h2><p>这涉及到 CROS 规范中的附带身份凭证的请求，只是有一个比较好的问法。</p><p>通过 CROS 跨域设置 withCredentials 标志为 true，从而向服务器发送 Cookies。但是，也需要服务器端的响应中携带 Access-Control-Allow-Credentials: true，浏览器才会把响应内容返回给请求的发送者。</p><p><img src="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/cred-req-updated.png" alt=""></p><p>客户端与服务器端交互示例如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">GET /resources/credentialed-content/ HTTP/1.1</span></span>
<span class="line"><span style="color:#f6f6f4;">Host: bar.other</span></span>
<span class="line"><span style="color:#f6f6f4;">User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0</span></span>
<span class="line"><span style="color:#f6f6f4;">Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8</span></span>
<span class="line"><span style="color:#f6f6f4;">Accept-Language: en-us,en;q=0.5</span></span>
<span class="line"><span style="color:#f6f6f4;">Accept-Encoding: gzip,deflate</span></span>
<span class="line"><span style="color:#f6f6f4;">Connection: keep-alive</span></span>
<span class="line"><span style="color:#f6f6f4;">Referer: https://foo.example/examples/credential.html</span></span>
<span class="line"><span style="color:#f6f6f4;">Origin: https://foo.example</span></span>
<span class="line"><span style="color:#f6f6f4;">Cookie: pageAccess=2</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">HTTP/1.1 200 OK</span></span>
<span class="line"><span style="color:#f6f6f4;">Date: Mon, 01 Dec 2008 01:34:52 GMT</span></span>
<span class="line"><span style="color:#f6f6f4;">Server: Apache/2</span></span>
<span class="line"><span style="color:#f6f6f4;">Access-Control-Allow-Origin: https://foo.example</span></span>
<span class="line"><span style="color:#f6f6f4;">Access-Control-Allow-Credentials: true</span></span>
<span class="line"><span style="color:#f6f6f4;">Cache-Control: no-cache</span></span>
<span class="line"><span style="color:#f6f6f4;">Pragma: no-cache</span></span>
<span class="line"><span style="color:#f6f6f4;">Set-Cookie: pageAccess=3; expires=Wed, 31-Dec-2008 01:34:53 GMT</span></span>
<span class="line"><span style="color:#f6f6f4;">Vary: Accept-Encoding, Origin</span></span>
<span class="line"><span style="color:#f6f6f4;">Content-Encoding: gzip</span></span>
<span class="line"><span style="color:#f6f6f4;">Content-Length: 106</span></span>
<span class="line"><span style="color:#f6f6f4;">Keep-Alive: timeout=2, max=100</span></span>
<span class="line"><span style="color:#f6f6f4;">Connection: Keep-Alive</span></span>
<span class="line"><span style="color:#f6f6f4;">Content-Type: text/plain</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">[text/plain payload]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">GET /resources/credentialed-content/ HTTP/1.1</span></span>
<span class="line"><span style="color:#24292e;">Host: bar.other</span></span>
<span class="line"><span style="color:#24292e;">User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0</span></span>
<span class="line"><span style="color:#24292e;">Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8</span></span>
<span class="line"><span style="color:#24292e;">Accept-Language: en-us,en;q=0.5</span></span>
<span class="line"><span style="color:#24292e;">Accept-Encoding: gzip,deflate</span></span>
<span class="line"><span style="color:#24292e;">Connection: keep-alive</span></span>
<span class="line"><span style="color:#24292e;">Referer: https://foo.example/examples/credential.html</span></span>
<span class="line"><span style="color:#24292e;">Origin: https://foo.example</span></span>
<span class="line"><span style="color:#24292e;">Cookie: pageAccess=2</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">HTTP/1.1 200 OK</span></span>
<span class="line"><span style="color:#24292e;">Date: Mon, 01 Dec 2008 01:34:52 GMT</span></span>
<span class="line"><span style="color:#24292e;">Server: Apache/2</span></span>
<span class="line"><span style="color:#24292e;">Access-Control-Allow-Origin: https://foo.example</span></span>
<span class="line"><span style="color:#24292e;">Access-Control-Allow-Credentials: true</span></span>
<span class="line"><span style="color:#24292e;">Cache-Control: no-cache</span></span>
<span class="line"><span style="color:#24292e;">Pragma: no-cache</span></span>
<span class="line"><span style="color:#24292e;">Set-Cookie: pageAccess=3; expires=Wed, 31-Dec-2008 01:34:53 GMT</span></span>
<span class="line"><span style="color:#24292e;">Vary: Accept-Encoding, Origin</span></span>
<span class="line"><span style="color:#24292e;">Content-Encoding: gzip</span></span>
<span class="line"><span style="color:#24292e;">Content-Length: 106</span></span>
<span class="line"><span style="color:#24292e;">Keep-Alive: timeout=2, max=100</span></span>
<span class="line"><span style="color:#24292e;">Connection: Keep-Alive</span></span>
<span class="line"><span style="color:#24292e;">Content-Type: text/plain</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">[text/plain payload]</span></span></code></pre></div>`,37),o=[l];function c(t,r,i,y,f,d){return n(),a("div",null,o)}const g=s(e,[["render",c]]);export{F as __pageData,g as default};
