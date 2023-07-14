import{_ as s,o as n,c as a,V as p}from"./chunks/framework.c6d8cbec.js";const h=JSON.parse('{"title":"Spring Session","description":"","frontmatter":{},"headers":[],"relativePath":"java/javaee/spring/SpringSession.md","filePath":"java/javaee/spring/SpringSession.md"}'),l={name:"java/javaee/spring/SpringSession.md"},e=p(`<h1 id="spring-session" tabindex="-1">Spring Session <a class="header-anchor" href="#spring-session" aria-label="Permalink to &quot;Spring Session&quot;">​</a></h1><h2 id="session-共享问题" tabindex="-1">Session 共享问题 <a class="header-anchor" href="#session-共享问题" aria-label="Permalink to &quot;Session 共享问题&quot;">​</a></h2><p>在 Web 项目开发中，Session 会话管理是一个很重要的部分，用于存储与记录用户的状态或相关的数据。</p><p>通常情况下 session 交由容器（tomcat）来负责存储和管理，但是如果项目部署在多台 tomcat 中，则 session 管理存在很大的问题：</p><ol><li><p>多台 tomcat 之间无法共享 session ，当负载均衡跳转到其它 tomcat 时，session 就失效了，用户就退出了登录。</p></li><li><p>一旦 tomcat 容器关闭或重启也会导致 session 会话失效。</p></li></ol><h2 id="spring-session-简介" tabindex="-1">Spring Session 简介 <a class="header-anchor" href="#spring-session-简介" aria-label="Permalink to &quot;Spring Session 简介&quot;">​</a></h2><p>Spring Session 是 Spring 家族中的一个子项目，Spring Session 提供了用于管理用户会话信息的 API 和实现。</p><p>它把 servlet 容器实现的 httpSession 替换为 spring-session ，Session 信息存储在 Redis 或其它数据库中统一管理，解决了 session 共享的问题。</p><h2 id="spring-session-实现" tabindex="-1">Spring Session 实现 <a class="header-anchor" href="#spring-session-实现" aria-label="Permalink to &quot;Spring Session 实现&quot;">​</a></h2><p>SessionRepositoryFilter 类是一个 Filter 过滤器，符合 Servlet 的规范定义，用来修改包装请求和响应。这里负责包装切换 HttpSession 至 Spring Session 的请求和响应。</p><p>在登录/登出时调用 session.setAttritube 和 session.removeAttritube 方法时，将切换为对 redis 中的 session 进行修改。</p><h2 id="spring-session-实现-1" tabindex="-1">Spring Session 实现 <a class="header-anchor" href="#spring-session-实现-1" aria-label="Permalink to &quot;Spring Session 实现&quot;">​</a></h2><h3 id="导入依赖" tabindex="-1">导入依赖 <a class="header-anchor" href="#导入依赖" aria-label="Permalink to &quot;导入依赖&quot;">​</a></h3><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">&lt;!-- Spring Boot Redis 依赖  --&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">	&lt;</span><span style="color:#F286C4;">dependency</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">	    &lt;</span><span style="color:#F286C4;">groupId</span><span style="color:#F6F6F4;">&gt;org.springframework.boot&lt;/</span><span style="color:#F286C4;">groupId</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">	    &lt;</span><span style="color:#F286C4;">artifactId</span><span style="color:#F6F6F4;">&gt;spring-boot-starter-data-redis&lt;/</span><span style="color:#F286C4;">artifactId</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">	&lt;/</span><span style="color:#F286C4;">dependency</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span></span>
<span class="line"><span style="color:#F6F6F4;">    &lt;</span><span style="color:#F286C4;">dependency</span><span style="color:#F6F6F4;">&gt;  </span></span>
<span class="line"><span style="color:#F6F6F4;">        &lt;</span><span style="color:#F286C4;">groupId</span><span style="color:#F6F6F4;">&gt;org.springframework.session&lt;/</span><span style="color:#F286C4;">groupId</span><span style="color:#F6F6F4;">&gt;  </span></span>
<span class="line"><span style="color:#F6F6F4;">        &lt;</span><span style="color:#F286C4;">artifactId</span><span style="color:#F6F6F4;">&gt;spring-session-data-redis&lt;/</span><span style="color:#F286C4;">artifactId</span><span style="color:#F6F6F4;">&gt;  </span></span>
<span class="line"><span style="color:#F6F6F4;">	&lt;/</span><span style="color:#F286C4;">dependency</span><span style="color:#F6F6F4;">&gt;   </span></span>
<span class="line"><span style="color:#F6F6F4;">	</span></span>
<span class="line"><span style="color:#F6F6F4;">	&lt;</span><span style="color:#F286C4;">dependency</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">	    &lt;</span><span style="color:#F286C4;">groupId</span><span style="color:#F6F6F4;">&gt;org.springframework.session&lt;/</span><span style="color:#F286C4;">groupId</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">	    &lt;</span><span style="color:#F286C4;">artifactId</span><span style="color:#F6F6F4;">&gt;spring-session-core&lt;/</span><span style="color:#F286C4;">artifactId</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">	&lt;/</span><span style="color:#F286C4;">dependency</span><span style="color:#F6F6F4;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- Spring Boot Redis 依赖  --&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">dependency</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	    &lt;</span><span style="color:#22863A;">groupId</span><span style="color:#24292E;">&gt;org.springframework.boot&lt;/</span><span style="color:#22863A;">groupId</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	    &lt;</span><span style="color:#22863A;">artifactId</span><span style="color:#24292E;">&gt;spring-boot-starter-data-redis&lt;/</span><span style="color:#22863A;">artifactId</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;/</span><span style="color:#22863A;">dependency</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">dependency</span><span style="color:#24292E;">&gt;  </span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">groupId</span><span style="color:#24292E;">&gt;org.springframework.session&lt;/</span><span style="color:#22863A;">groupId</span><span style="color:#24292E;">&gt;  </span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">artifactId</span><span style="color:#24292E;">&gt;spring-session-data-redis&lt;/</span><span style="color:#22863A;">artifactId</span><span style="color:#24292E;">&gt;  </span></span>
<span class="line"><span style="color:#24292E;">	&lt;/</span><span style="color:#22863A;">dependency</span><span style="color:#24292E;">&gt;   </span></span>
<span class="line"><span style="color:#24292E;">	</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">dependency</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	    &lt;</span><span style="color:#22863A;">groupId</span><span style="color:#24292E;">&gt;org.springframework.session&lt;/</span><span style="color:#22863A;">groupId</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	    &lt;</span><span style="color:#22863A;">artifactId</span><span style="color:#24292E;">&gt;spring-session-core&lt;/</span><span style="color:#22863A;">artifactId</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;/</span><span style="color:#22863A;">dependency</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h3><p>配置文件 <code>application.properties</code></p><div class="language-properties vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">properties</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;"># Spring Session 配置</span></span>
<span class="line"><span style="color:#7B7F8B;"># 数据源</span></span>
<span class="line"><span style="color:#F286C4;">spring.session.store-type=</span><span style="color:#F6F6F4;">redis</span></span>
<span class="line"><span style="color:#7B7F8B;"># redis 刷新模式</span></span>
<span class="line"><span style="color:#F286C4;">spring.session.redis.flush-mode=</span><span style="color:#F6F6F4;">on_save</span></span>
<span class="line"><span style="color:#7B7F8B;"># redis 命名空间</span></span>
<span class="line"><span style="color:#F286C4;">spring.session.redis.namespace=</span><span style="color:#F6F6F4;">test_session</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># session 过期时间</span></span>
<span class="line"><span style="color:#F286C4;">server.servlet.session.timeout=</span><span style="color:#F6F6F4;">3600s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># Redis 配置</span></span>
<span class="line"><span style="color:#7B7F8B;"># Redis数据库索引</span></span>
<span class="line"><span style="color:#F286C4;">spring.redis.database=</span><span style="color:#F6F6F4;">0</span></span>
<span class="line"><span style="color:#7B7F8B;"># Redis服务器地址</span></span>
<span class="line"><span style="color:#F286C4;">spring.redis.host=</span><span style="color:#F6F6F4;">192.168.0.1</span></span>
<span class="line"><span style="color:#7B7F8B;"># Redis服务器连接端口</span></span>
<span class="line"><span style="color:#F286C4;">spring.redis.port=</span><span style="color:#F6F6F4;">6379</span></span>
<span class="line"><span style="color:#7B7F8B;"># Redis服务器连接密码</span></span>
<span class="line"><span style="color:#F286C4;">spring.redis.password=</span><span style="color:#F6F6F4;">1234</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Spring Session 配置</span></span>
<span class="line"><span style="color:#6A737D;"># 数据源</span></span>
<span class="line"><span style="color:#D73A49;">spring.session.store-type</span><span style="color:#24292E;">=redis</span></span>
<span class="line"><span style="color:#6A737D;"># redis 刷新模式</span></span>
<span class="line"><span style="color:#D73A49;">spring.session.redis.flush-mode</span><span style="color:#24292E;">=on_save</span></span>
<span class="line"><span style="color:#6A737D;"># redis 命名空间</span></span>
<span class="line"><span style="color:#D73A49;">spring.session.redis.namespace</span><span style="color:#24292E;">=test_session</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># session 过期时间</span></span>
<span class="line"><span style="color:#D73A49;">server.servlet.session.timeout</span><span style="color:#24292E;">=3600s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Redis 配置</span></span>
<span class="line"><span style="color:#6A737D;"># Redis数据库索引</span></span>
<span class="line"><span style="color:#D73A49;">spring.redis.database</span><span style="color:#24292E;">=0</span></span>
<span class="line"><span style="color:#6A737D;"># Redis服务器地址</span></span>
<span class="line"><span style="color:#D73A49;">spring.redis.host</span><span style="color:#24292E;">=192.168.0.1</span></span>
<span class="line"><span style="color:#6A737D;"># Redis服务器连接端口</span></span>
<span class="line"><span style="color:#D73A49;">spring.redis.port</span><span style="color:#24292E;">=6379</span></span>
<span class="line"><span style="color:#6A737D;"># Redis服务器连接密码</span></span>
<span class="line"><span style="color:#D73A49;">spring.redis.password</span><span style="color:#24292E;">=1234</span></span></code></pre></div><blockquote><p>参考链接 <a href="https://www.cnblogs.com/lxyit/p/9672097.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/lxyit/p/9672097.html</a></p></blockquote>`,18),o=[e];function t(r,c,i,y,F,d){return n(),a("div",null,o)}const S=s(l,[["render",t]]);export{h as __pageData,S as default};
