import{_ as s,o as n,c as a,V as p}from"./chunks/framework.c6d8cbec.js";const l="/docs/assets/nginx-01.4759742a.png",e="/docs/assets/nginx-02.1c40fec4.png",o="/docs/assets/nginx-03.b6f9c176.png",t="/docs/assets/nginx-04.b8cfc043.png",c="/docs/assets/nginx-05.aea532fb.png",i="/docs/assets/nginx-06.65d8fc5c.png",r="/docs/assets/nginx-07.5a5271b1.png",g="/docs/assets/nginx-08.26fa271e.png",f="/docs/assets/nginx-09.2029de2a.png",d="/docs/assets/nginx-10.f49b13c8.png",x="/docs/assets/nginx-11.f530d582.png",y="/docs/assets/nginx-12.c12a13a4.png",h="/docs/assets/nginx-13.71f45e05.png",m="/docs/assets/nginx-14.710df18e.png",u="/docs/assets/nginx-15.d5c4e966.png",R=JSON.parse('{"title":"5分钟带你深入浅出搞懂 Nginx","description":"","frontmatter":{"category":["Java企业级开发"],"tag":["Nginx"],"shortTitle":"Nginx"},"headers":[],"relativePath":"backend/tobetter/nginx/nginx.md","filePath":"backend/tobetter/nginx/nginx.md"}'),_={name:"backend/tobetter/nginx/nginx.md"},b=p('<h1 id="_5分钟带你深入浅出搞懂-nginx" tabindex="-1">5分钟带你深入浅出搞懂 Nginx <a class="header-anchor" href="#_5分钟带你深入浅出搞懂-nginx" aria-label="Permalink to &quot;5分钟带你深入浅出搞懂 Nginx&quot;">​</a></h1><p>最近在搭建一个网站，就不可避免地要用到 Nginx，索性就出一期 Nginx 的入门教程，希望也可以帮助到大家~😁</p><p>作为开发者，相信大家都知道 Nginx 的重要性。Nginx 是一个高性能的 HTTP 和反向代理 Web 服务器，由俄罗斯的伊戈尔·赛索耶夫开发，第一个版本发布于 2004 年 10 月 4 日。</p><img src="'+l+'"><p>Nginx 的特点是：</p><ul><li>内存占用少</li><li>并发能力强（可支持大约 50000 个并发连接）</li><li>配置超简洁</li><li>bug 非常少</li><li>安装超简单</li><li>服务特别稳（几个月也不需要重启）</li></ul><p>基于这些特点，越来越多的网站开始使用 Nginx。于是，掌握 Nginx 就变成了开发者的一项必不可少的技能。</p><h3 id="一、nginx-的作用" tabindex="-1">一、Nginx 的作用 <a class="header-anchor" href="#一、nginx-的作用" aria-label="Permalink to &quot;一、Nginx 的作用&quot;">​</a></h3><p><strong>反向代理</strong>是 Nginx 作为 Web 服务器最常用的功能之一。什么是反向代理呢？很多初学者在第一次遇到这个名词的时候总免不了出现很多问号。</p><img src="'+e+'"><p>那要想搞明白什么是反向代理，就必须得搞明白什么是正向代理。</p><p>举个例子，小二的浏览器是无法直接访问谷哥的，但香港的代理服务器是可以访问谷哥的，于是小二访问了香港的代理服务器，也就间接地访问了谷哥。那这台代理服务器也就是<strong>正向代理</strong>。</p><img src="'+o+'"><p>总结一句就是，<strong>正向代理是代理客户端的</strong>，让你能正常访问目的服务器。</p><p>与之相反，<strong>反向代理是代理服务器的</strong>，让大量的请求均衡地访问到某一台服务器上。</p><p>举个例子，10 万个小二同时在访问 itwanger.com， 如果只有一台服务器的话，很容易就瘫痪了，于是高并发的情况下会有很多台服务器（假如 10 台吧）来接这个活，那怎么让 10 万个小二访问到这 10 台服务器呢？</p><p>这就需要一个反向代理服务器了，反向代理服务器让 1 万个小二访问服务器 A，1 万个小二访问服务器 B，1 个小二访问服务器 C，这样的话，每台服务器的压力就相应减小了，是不是很 nice？</p><img src="'+t+'"><p>那问题来了。每台服务器的能力可能不同，比如说服务器 A 的内存比较大一点，有 100 个 G；服务器 B 的内存小一点，有 10 个 G；服务器 C 的内存更小一点，只有 1 个 G。怎么才能让没台服务器承担起它能力范围内的访问呢？</p><p><strong>Nginx 内置了轮询和加权轮询来达到负载均衡的目的</strong>。服务器 A 牛逼就把它的权重加大一点，让 5 万个小二访问它；服务器 B 弱一点，权重就再小一点，让 2 万个小二访问它；服务器 C 更弱，权重就最小，让 1 万个小二访问它。</p><p>除此之外，Nginx 还有一个很牛逼的功能是<strong>动静分离</strong>。</p><p>在我们的软件开发中，有些请求是需要后台处理的；有些请求是不需要后台处理的，比如说 css、js 这些文件请求，这些不需要经过后台处理的文件就叫静态文件。</p><p>我们可以根据一些规则，把动态资源和静态资源分开，然后通过 Nginx 把请求分开，静态资源的请求就不需要经过 Web 服务器处理了，从而提高整体上的资源的响应速度。</p><img src="'+c+'"><h3 id="二、nginx-的安装" tabindex="-1">二、Nginx 的安装 <a class="header-anchor" href="#二、nginx-的安装" aria-label="Permalink to &quot;二、Nginx 的安装&quot;">​</a></h3><p>针对不同的操作系统，Nginx 的安装各不相同。Windows 可以直接到官网下载 zip 绿色安装包，解压后就可以了。</p><blockquote><p><a href="http://nginx.org/en/download.html" target="_blank" rel="noreferrer">http://nginx.org/en/download.html</a></p></blockquote><p>之前带大家白票过阿里云的服务器，有 Linux 服务器的话，直接通过<a href="https://mp.weixin.qq.com/s/ditN9J80rSWwnYRumwb4ww" target="_blank" rel="noreferrer">宝塔面板</a>这个神器就可以安装了。</p><p>不过，如果在安装宝塔面板必备工具包的时候，如果选择了 phpmyadmin（MySQL 的管理工具），会覆盖掉 80 端口，就导致没办法直接通过默认配置的方式访问 Nginx 启动页面了。</p><img src="'+i+'"><p>我这里以 macOS 环境为例，来演示一下。</p><p>第一步，通过 <code>brew info nginx</code> 命令查看 Nginx 是否安装。</p><img src="'+r+'"><p>第二步，通过 <code>brew install nginx</code> 命令安装 Nginx。</p><img src="'+g+'"><p>从以上信息可以得出：</p><ul><li>根目录是 <code>/usr/local/var/www</code></li><li>配置文件是 <code>/usr/local/etc/nginx/nginx.conf</code></li><li>默认端口是 8080</li></ul><p>第三步，通过 <code>nginx</code> 命令启动 Nginx。</p><img src="'+f+'"><p>第四步，在浏览器地址栏通过 <code>localhost:8080</code> 访问，可以看到以下欢迎页面。</p><img src="'+d+`"><h3 id="三、nginx-常用命令" tabindex="-1">三、Nginx 常用命令 <a class="header-anchor" href="#三、nginx-常用命令" aria-label="Permalink to &quot;三、Nginx 常用命令&quot;">​</a></h3><p>通常来说，Nginx 一旦启动后，我们是很少让它退出的，使用最多的就是 reload 命令。当我们修改了配置文件，是需要执行一次 reload 命令让 Nginx 生效的。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">nginx  启动</span></span>
<span class="line"><span style="color:#f6f6f4;">nginx -s stop  停止</span></span>
<span class="line"><span style="color:#f6f6f4;">nginx -s quit  安全退出</span></span>
<span class="line"><span style="color:#f6f6f4;">nginx -s reload  重新加载配置文件</span></span>
<span class="line"><span style="color:#f6f6f4;">ps aux|grep nginx  查看nginx进程</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">nginx  启动</span></span>
<span class="line"><span style="color:#24292e;">nginx -s stop  停止</span></span>
<span class="line"><span style="color:#24292e;">nginx -s quit  安全退出</span></span>
<span class="line"><span style="color:#24292e;">nginx -s reload  重新加载配置文件</span></span>
<span class="line"><span style="color:#24292e;">ps aux|grep nginx  查看nginx进程</span></span></code></pre></div><p>要知道，Nginx 的 reload 对用户是无感的，这一点我觉得很牛逼~</p><h3 id="四、nginx-的配置" tabindex="-1">四、Nginx 的配置 <a class="header-anchor" href="#四、nginx-的配置" aria-label="Permalink to &quot;四、Nginx 的配置&quot;">​</a></h3><p>我们先来看一下 Nginx 的配置结构图：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">main        # 全局配置</span></span>
<span class="line"><span style="color:#f6f6f4;">├── events  # 配置网络连接</span></span>
<span class="line"><span style="color:#f6f6f4;">├── http    # 配置代理、缓存、日志等</span></span>
<span class="line"><span style="color:#f6f6f4;">│   ├── upstream # 配置负载均衡</span></span>
<span class="line"><span style="color:#f6f6f4;">│   ├── server   # 配置虚拟主机，可以有多个 server</span></span>
<span class="line"><span style="color:#f6f6f4;">│   ├── server</span></span>
<span class="line"><span style="color:#f6f6f4;">│   │   ├── location  # 用于匹配 URI（URL 是 URI 的一种），可以有多个 location</span></span>
<span class="line"><span style="color:#f6f6f4;">│   │   ├── location</span></span>
<span class="line"><span style="color:#f6f6f4;">│   │   └── ...</span></span>
<span class="line"><span style="color:#f6f6f4;">│   └── ...</span></span>
<span class="line"><span style="color:#f6f6f4;">└── ...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">main        # 全局配置</span></span>
<span class="line"><span style="color:#24292e;">├── events  # 配置网络连接</span></span>
<span class="line"><span style="color:#24292e;">├── http    # 配置代理、缓存、日志等</span></span>
<span class="line"><span style="color:#24292e;">│   ├── upstream # 配置负载均衡</span></span>
<span class="line"><span style="color:#24292e;">│   ├── server   # 配置虚拟主机，可以有多个 server</span></span>
<span class="line"><span style="color:#24292e;">│   ├── server</span></span>
<span class="line"><span style="color:#24292e;">│   │   ├── location  # 用于匹配 URI（URL 是 URI 的一种），可以有多个 location</span></span>
<span class="line"><span style="color:#24292e;">│   │   ├── location</span></span>
<span class="line"><span style="color:#24292e;">│   │   └── ...</span></span>
<span class="line"><span style="color:#24292e;">│   └── ...</span></span>
<span class="line"><span style="color:#24292e;">└── ...</span></span></code></pre></div><p>再把 Nginx 的默认配置拉出来看一下，我把注释加了进去，这样大家很容易就明白这行配置是用来干嘛的了。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">worker_processes  1; # Nginx 进程数，一般设置为和 CPU 核数一样</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">events {</span></span>
<span class="line"><span style="color:#f6f6f4;">    worker_connections  1024; # 每个进程允许最大并发数</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">http {</span></span>
<span class="line"><span style="color:#f6f6f4;">    include       mime.types; # 文件扩展名与类型映射表</span></span>
<span class="line"><span style="color:#f6f6f4;">    default_type  application/octet-stream;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    sendfile        on; # 开启高效传输模式</span></span>
<span class="line"><span style="color:#f6f6f4;">    keepalive_timeout  65; # 保持连接的时间，也叫超时时间，单位秒</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    server {</span></span>
<span class="line"><span style="color:#f6f6f4;">        listen       8080; # 配置监听的端口</span></span>
<span class="line"><span style="color:#f6f6f4;">        server_name  localhost; # 配置的域名</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        location / {</span></span>
<span class="line"><span style="color:#f6f6f4;">            root   html; # 网站根目录</span></span>
<span class="line"><span style="color:#f6f6f4;">            index  index.html index.htm; # 默认首页文件</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        error_page   500 502 503 504  /50x.html; # 默认50x对应的访问页面</span></span>
<span class="line"><span style="color:#f6f6f4;">        location = /50x.html {</span></span>
<span class="line"><span style="color:#f6f6f4;">            root   html;</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    include servers/*; # 加载子配置项</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">worker_processes  1; # Nginx 进程数，一般设置为和 CPU 核数一样</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">events {</span></span>
<span class="line"><span style="color:#24292e;">    worker_connections  1024; # 每个进程允许最大并发数</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">http {</span></span>
<span class="line"><span style="color:#24292e;">    include       mime.types; # 文件扩展名与类型映射表</span></span>
<span class="line"><span style="color:#24292e;">    default_type  application/octet-stream;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    sendfile        on; # 开启高效传输模式</span></span>
<span class="line"><span style="color:#24292e;">    keepalive_timeout  65; # 保持连接的时间，也叫超时时间，单位秒</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    server {</span></span>
<span class="line"><span style="color:#24292e;">        listen       8080; # 配置监听的端口</span></span>
<span class="line"><span style="color:#24292e;">        server_name  localhost; # 配置的域名</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        location / {</span></span>
<span class="line"><span style="color:#24292e;">            root   html; # 网站根目录</span></span>
<span class="line"><span style="color:#24292e;">            index  index.html index.htm; # 默认首页文件</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        error_page   500 502 503 504  /50x.html; # 默认50x对应的访问页面</span></span>
<span class="line"><span style="color:#24292e;">        location = /50x.html {</span></span>
<span class="line"><span style="color:#24292e;">            root   html;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    include servers/*; # 加载子配置项</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>好，现在我们登录宝塔面板，尝试把默认的 server 配置复制到 Linux 服务器中的 Nginx 配置里。</p><img src="`+x+`"><p>简单解释一下。</p><p>由于我的服务器上 80 端口是默认打开的，所以我将监听端口配置成了 80，如果你配置成其他端口的话，记得宝塔面板和云服务的安全组里把端口打开。</p><p>root 我指定了 <code>/home/www</code> 目录，首页文件为 index.html。这个文件是我自定义的，来看一下内容。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;title&gt;沉默王二&lt;/title&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;body&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;img src=&quot;niubi.jpeg&quot; /&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;/body&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;title&gt;沉默王二&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;img src=&quot;niubi.jpeg&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div><p>很言简意赅，总之就是二哥，牛逼~</p><p>好，保存配置文件，并且 reload Nginx，我们在本地的浏览器中输入服务器的 IP 地址就可以看到效果了。</p><img src="`+y+'"><h3 id="五、nginx-的学习资料" tabindex="-1">五、Nginx 的学习资料 <a class="header-anchor" href="#五、nginx-的学习资料" aria-label="Permalink to &quot;五、Nginx 的学习资料&quot;">​</a></h3><p>关于 Nginx 的负载均衡，还有动静分离，等到二哥的网站跑起来后，可以专门搞个视频给大家演示下，比较直观一点。Nginx 的入门非常简单，但有一说一，如果想要在工作中用好 Nginx，还是需要花费一番功夫的。</p><p>我这里再给大家推荐一些不错的学习资料吧。</p><p><strong>1）狂神说的视频入门教程</strong>，我个人觉得，狂神的入门教程还是非常舒适的，语速和内容都刚刚好。</p><img src="'+h+'"><blockquote><p><a href="https://www.bilibili.com/video/BV1F5411J7vK" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1F5411J7vK</a></p></blockquote><p><strong>2）黑马程序员Nginx教程</strong>，总共 159 讲，基本上算是非常全面的 Nginx 的视频教程了。</p><img src="'+m+'"><blockquote><p><a href="https://www.bilibili.com/video/BV1ov41187bq" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1ov41187bq</a></p></blockquote><p><strong>3）极客时间上的 Nginx100 讲</strong>，讲的比较深一点，涉及到不少原理层面的东西。钱包比较鼓的话，可以去付费下。不过，听说在某个地方也可以白票。</p><p><strong>4）Nginx 从入门到实践，万字详解</strong>，图文版的，可以到掘金上看看这篇文章，内容基本上面面俱到了（可以看一下下面的目录），配合前面的视频课，拿下 Nginx 基本上是稳了。</p><img src="'+u+'"><blockquote><p><a href="https://juejin.cn/post/6844904144235413512" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904144235413512</a></p></blockquote><p>这些资料如果能全部过一遍的话，我要喊你 Nginx 小王子了，估计公司遇到 Nginx 问题的话，你肯定是解决问题的那一个。</p>',73),v=[b];function N(k,q,w,C,P,T){return n(),a("div",null,v)}const S=s(_,[["render",N]]);export{R as __pageData,S as default};
