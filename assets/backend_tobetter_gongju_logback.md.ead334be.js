import{_ as s,o as n,c as a,V as l}from"./chunks/framework.c6d8cbec.js";const o="/docs/assets/logback-320329e9-a754-427f-8a19-2e4f809b6a6f.a00320e1.png",p="/docs/assets/logback-6ba1b465-5533-49dd-b875-48a10ba29f8e.113e3bf6.png",e="/docs/assets/logback-2696cd8b-7e8c-4476-9a06-272fd22fa4b6.144e4730.png",t="/docs/assets/logback-82d78a15-8ae0-4377-a7af-aebd5cda4fda.8cd082b3.png",c="/docs/assets/logback-2df2d06e-1b01-428b-8444-d765056e25bb.ef5d3253.png",r="/docs/assets/logback-1f7d8e00-4be6-4863-940c-037862ad2c41.3b4798ae.png",i="/docs/assets/logback-b81ab795-2a2c-44c3-a4b8-b96ef78dcd88.abe53a78.png",g="/docs/assets/logback-b30bc0ca-5c78-4853-922b-36bb0c7d8628.135b7cc3.png",y="/docs/assets/logback-6c934584-3624-4f40-8108-13bfffc0c40b.e0412f1b.png",d="/docs/assets/logback-7a0edcdf-8706-4a83-9c09-413fc07967ad.82466282.png",f="/docs/assets/logback-536aa50e-b195-403e-8409-85e4f6966522.2ef5da75.png",D=JSON.parse('{"title":"Logback：Spring Boot内置的日志处理框架","description":"","frontmatter":{"title":"Logback：Spring Boot内置的日志处理框架","category":["Java企业级开发"],"tag":["辅助工具/轮子"]},"headers":[],"relativePath":"backend/tobetter/gongju/logback.md","filePath":"backend/tobetter/gongju/logback.md"}'),u={name:"backend/tobetter/gongju/logback.md"},F=l('<p>就在昨天，老板听我说完 Logback 有多牛逼之后，彻底动心了，对我下了死命令，“这么好的日志系统，你还不赶紧点，把它切换到咱的项目当中！”</p><p>我们项目之前用的 Log4j，在我看来，已经足够用了，毕竟是小公司，性能上的要求没那么苛刻。</p><img src="'+o+'"><p><a href="https://mp.weixin.qq.com/s/AXgNnJe8djD901EmhFkWUg" target="_blank" rel="noreferrer">Log4j</a> 介绍过了，<a href="https://mp.weixin.qq.com/s/EhKf1rHWL-QII0f6eo0uVA" target="_blank" rel="noreferrer">SLF4J</a> 也介绍过了，那接下来，你懂的，Logback 就要隆重地登场了，毕竟它哥仨有一个爹，那就是巨佬 Ceki Gulcu。</p><h3 id="_01、logback-强在哪" tabindex="-1">01、Logback 强在哪 <a class="header-anchor" href="#_01、logback-强在哪" aria-label="Permalink to &quot;01、Logback 强在哪&quot;">​</a></h3><p>1）非常自然地实现了 SLF4J，不需要像 Log4j 和 JUL 那样加一个适配层。</p><img src="'+p+'"><p>2）Spring Boot 的默认日志框架使用的是 Logback。一旦某款工具库成为了默认选项，那就说明这款工具已经超过了其他竞品。</p><img src="'+e+'"><p>注意看下图（证据找到了，来自 <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-logging" target="_blank" rel="noreferrer">Spring Boot 官网</a>）：</p><img src="'+t+'"><p>也可以通过源码的形式看得到：</p><img src="'+c+`"><p>3）支持自动重新加载配置文件，不需要另外创建扫描线程来监视。</p><p>4）既然是巨佬的新作，那必然在性能上有了很大的提升，不然呢？</p><h3 id="_02、logback-使用示例" tabindex="-1">02、Logback 使用示例 <a class="header-anchor" href="#_02、logback-使用示例" aria-label="Permalink to &quot;02、Logback 使用示例&quot;">​</a></h3><p><strong>第一步</strong>，在 pom.xml 文件中添加 Logback 的依赖：</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">&lt;</span><span style="color:#F286C4;">dependency</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">    &lt;</span><span style="color:#F286C4;">groupId</span><span style="color:#F6F6F4;">&gt;ch.qos.logback&lt;/</span><span style="color:#F286C4;">groupId</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">    &lt;</span><span style="color:#F286C4;">artifactId</span><span style="color:#F6F6F4;">&gt;logback-classic&lt;/</span><span style="color:#F286C4;">artifactId</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">    &lt;</span><span style="color:#F286C4;">version</span><span style="color:#F6F6F4;">&gt;1.2.3&lt;/</span><span style="color:#F286C4;">version</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">&lt;/</span><span style="color:#F286C4;">dependency</span><span style="color:#F6F6F4;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">dependency</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">groupId</span><span style="color:#24292E;">&gt;ch.qos.logback&lt;/</span><span style="color:#22863A;">groupId</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">artifactId</span><span style="color:#24292E;">&gt;logback-classic&lt;/</span><span style="color:#22863A;">artifactId</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">version</span><span style="color:#24292E;">&gt;1.2.3&lt;/</span><span style="color:#22863A;">version</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">dependency</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>Maven 会自动导入另外两个依赖：</p><img src="`+r+`"><p>logback-core 是 Logback 的核心，logback-classic 是 SLF4J 的实现。</p><p><strong>第二步</strong>，来个最简单的测试用例：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> org.slf4j.Logger;</span></span>
<span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> org.slf4j.LoggerFactory;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">/**</span></span>
<span class="line"><span style="color:#7B7F8B;"> * </span><span style="color:#F286C4;">@author</span><span style="color:#7B7F8B;"> 王二</span></span>
<span class="line"><span style="color:#7B7F8B;"> */</span></span>
<span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Test</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">static</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Logger</span><span style="color:#F6F6F4;"> logger </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> LoggerFactory.</span><span style="color:#62E884;">getLogger</span><span style="color:#F6F6F4;">(Test.class);</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">static</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">main</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;">[] </span><span style="color:#FFB86C;font-style:italic;">args</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        logger.</span><span style="color:#62E884;">debug</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">logback</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> org.slf4j.Logger;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> org.slf4j.LoggerFactory;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@author</span><span style="color:#6A737D;"> 王二</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Test</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> Logger logger </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> LoggerFactory.</span><span style="color:#6F42C1;">getLogger</span><span style="color:#24292E;">(Test.class);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] </span><span style="color:#E36209;">args</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        logger.</span><span style="color:#6F42C1;">debug</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;logback&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Logger 和 LoggerFactory 都来自 SLF4J，所以如果项目是从 Log4j + SLF4J 切换到 Logback 的话，此时的代码是零改动的。</p><p>运行 Test 类，可以在控制台看到以下信息：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">12:04:20.149 [main] DEBUG com.itwanger.Test - logback</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">12:04:20.149 [main] DEBUG com.itwanger.Test - logback</span></span></code></pre></div><p>在没有配置文件的情况下，一切都是默认的，Logback 的日志信息会输出到控制台。可以通过 StatusPrinter 来打印 Logback 的内部信息：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#97E1F1;font-style:italic;">LoggerContext</span><span style="color:#F6F6F4;"> lc </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> (LoggerContext)LoggerFactory.</span><span style="color:#62E884;">getILoggerFactory</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">StatusPrinter.</span><span style="color:#62E884;">print</span><span style="color:#F6F6F4;">(lc);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">LoggerContext lc </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (LoggerContext)LoggerFactory.</span><span style="color:#6F42C1;">getILoggerFactory</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">StatusPrinter.</span><span style="color:#6F42C1;">print</span><span style="color:#24292E;">(lc);</span></span></code></pre></div><p>在 main 方法中添加以上代码后，再次运行 Test 类，可以在控制台看到以下信息：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">12:59:22.314 [main] DEBUG com.itwanger.Test - logback</span></span>
<span class="line"><span style="color:#f6f6f4;">12:59:22,261 |-INFO in ch.qos.logback.classic.LoggerContext[default] - Could NOT find resource [logback-test.xml]</span></span>
<span class="line"><span style="color:#f6f6f4;">12:59:22,262 |-INFO in ch.qos.logback.classic.LoggerContext[default] - Could NOT find resource [logback.groovy]</span></span>
<span class="line"><span style="color:#f6f6f4;">12:59:22,262 |-INFO in ch.qos.logback.classic.LoggerContext[default] - Could NOT find resource [logback.xml]</span></span>
<span class="line"><span style="color:#f6f6f4;">12:59:22,268 |-INFO in ch.qos.logback.classic.BasicConfigurator@5e853265 - Setting up default configuration.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">12:59:22.314 [main] DEBUG com.itwanger.Test - logback</span></span>
<span class="line"><span style="color:#24292e;">12:59:22,261 |-INFO in ch.qos.logback.classic.LoggerContext[default] - Could NOT find resource [logback-test.xml]</span></span>
<span class="line"><span style="color:#24292e;">12:59:22,262 |-INFO in ch.qos.logback.classic.LoggerContext[default] - Could NOT find resource [logback.groovy]</span></span>
<span class="line"><span style="color:#24292e;">12:59:22,262 |-INFO in ch.qos.logback.classic.LoggerContext[default] - Could NOT find resource [logback.xml]</span></span>
<span class="line"><span style="color:#24292e;">12:59:22,268 |-INFO in ch.qos.logback.classic.BasicConfigurator@5e853265 - Setting up default configuration.</span></span></code></pre></div><p>也就是说，Logback 会在 classpath 路径下先寻找 logback-test.xml 文件，没有找到的话，寻找 logback.groovy 文件，还没有的话，寻找 logback.xml 文件，都找不到的话，就输出到控制台。</p><p>一般来说，我们会在本地环境中配置 logback-test.xml，在生产环境下配置 logback.xml。</p><p><strong>第三步</strong>，在 resource 目录下增加 logback-test.xml 文件，内容如下所示：</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">&lt;</span><span style="color:#F286C4;">configuration</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;font-style:italic;">debug</span><span style="color:#F6F6F4;">=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">true</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">    &lt;</span><span style="color:#F286C4;">appender</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;font-style:italic;">name</span><span style="color:#F6F6F4;">=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">STDOUT</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;font-style:italic;">class</span><span style="color:#F6F6F4;">=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">ch.qos.logback.core.ConsoleAppender</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">        &lt;</span><span style="color:#F286C4;">encoder</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">            &lt;</span><span style="color:#F286C4;">pattern</span><span style="color:#F6F6F4;">&gt;%d{HH:mm:ss.SSS} %relative [%thread] %-5level %logger{36} - %msg%n&lt;/</span><span style="color:#F286C4;">pattern</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">        &lt;/</span><span style="color:#F286C4;">encoder</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">    &lt;/</span><span style="color:#F286C4;">appender</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    &lt;</span><span style="color:#F286C4;">root</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;font-style:italic;">level</span><span style="color:#F6F6F4;">=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">debug</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">        &lt;</span><span style="color:#F286C4;">appender-ref</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;font-style:italic;">ref</span><span style="color:#F6F6F4;">=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">STDOUT</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;"> /&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">    &lt;/</span><span style="color:#F286C4;">root</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">&lt;/</span><span style="color:#F286C4;">configuration</span><span style="color:#F6F6F4;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">configuration</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">debug</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;true&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">appender</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;STDOUT&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ch.qos.logback.core.ConsoleAppender&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">encoder</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">pattern</span><span style="color:#24292E;">&gt;%d{HH:mm:ss.SSS} %relative [%thread] %-5level %logger{36} - %msg%n&lt;/</span><span style="color:#22863A;">pattern</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">encoder</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">appender</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">root</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">level</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;debug&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">appender-ref</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;STDOUT&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">root</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">configuration</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>Logback 的配置文件非常灵活，最基本的结构为 <code>&lt;configuration&gt;</code> 元素，包含 0 或多个 <code>&lt;appender&gt;</code> 元素，其后跟 0 或多个 <code>&lt;logger&gt;</code> 元素，其后再跟最多只能存在一个的 <code>&lt;root&gt;</code> 元素。</p><img src="`+i+'"><p><strong>1）配置 appender</strong>，也就是配置日志的输出目的地，通过 name 属性指定名字，通过 class 属性指定目的地：</p><ul><li>ch.qos.logback.core.ConsoleAppender：输出到控制台。</li><li>ch.qos.logback.core.FileAppender：输出到文件。</li><li>ch.qos.logback.core.rolling.RollingFileAppender：文件大小超过阈值时产生一个新文件。</li></ul><p>除了输出到本地，还可以通过 SocketAppender 和 SSLSocketAppender 输出到远程设备，通过 SMTPAppender 输出到邮件。甚至可以通过 DBAppender 输出到数据库中。</p><p>encoder 负责把日志信息转换成字节数组，并且把字节数组写到输出流。</p><p>pattern 用来指定日志的输出格式：</p><ul><li><code>%d</code>：输出的时间格式。</li><li><code>%thread</code>：日志的线程名。</li><li><code>%-5level</code>：日志的输出级别，填充到 5 个字符。比如说 info 只有 4 个字符，就填充一个空格，这样日志信息就对齐了。</li></ul><p>反例（没有指定 -5 的情况）：</p><img src="'+g+`"><ul><li><code>%logger{length}</code>：logger 的名称，length 用来缩短名称。没有指定表示完整输出；0 表示只输出 logger 最右边点号之后的字符串；其他数字表示输出小数点最后边点号之前的字符数量。</li><li><code>%msg</code>：日志的具体信息。</li><li><code>%n</code>：换行符。</li><li><code>%relative</code>：输出从程序启动到创建日志记录的时间，单位为毫秒。</li></ul><p><strong>2）配置 root</strong>，它只支持一个属性——level，值可以为：TRACE、DEBUG、INFO、WARN、ERROR、ALL、OFF。</p><p>appender-ref 用来指定具体的 appender。</p><p><strong>3）查看内部状态信息</strong>。</p><p>可以在代码中通过 StatusPrinter 来打印 Logback 内部状态信息，也可以通过在 configuration 上开启 debug 来打印内部状态信息。</p><p>重新运行 Test 类，可以在控制台看到以下信息：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">13:54:54,718 |-INFO in ch.qos.logback.classic.LoggerContext[default] - Found resource [logback-test.xml] at [file:/Users/maweiqing/Documents/GitHub/JavaPointNew/codes/logbackDemo/target/classes/logback-test.xml]</span></span>
<span class="line"><span style="color:#f6f6f4;">13:54:54,826 |-INFO in ch.qos.logback.core.joran.action.AppenderAction - About to instantiate appender of type [ch.qos.logback.core.ConsoleAppender]</span></span>
<span class="line"><span style="color:#f6f6f4;">13:54:54,828 |-INFO in ch.qos.logback.core.joran.action.AppenderAction - Naming appender as [STDOUT]</span></span>
<span class="line"><span style="color:#f6f6f4;">13:54:54,833 |-INFO in ch.qos.logback.core.joran.action.NestedComplexPropertyIA - Assuming default type [ch.qos.logback.classic.encoder.PatternLayoutEncoder] for [encoder] property</span></span>
<span class="line"><span style="color:#f6f6f4;">13:54:54,850 |-INFO in ch.qos.logback.classic.joran.action.RootLoggerAction - Setting level of ROOT logger to DEBUG</span></span>
<span class="line"><span style="color:#f6f6f4;">13:54:54,850 |-INFO in ch.qos.logback.core.joran.action.AppenderRefAction - Attaching appender named [STDOUT] to Logger[ROOT]</span></span>
<span class="line"><span style="color:#f6f6f4;">13:54:54,850 |-INFO in ch.qos.logback.classic.joran.action.ConfigurationAction - End of configuration.</span></span>
<span class="line"><span style="color:#f6f6f4;">13:54:54,851 |-INFO in ch.qos.logback.classic.joran.JoranConfigurator@f8c1ddd - Registering current configuration as safe fallback point</span></span>
<span class="line"><span style="color:#f6f6f4;">13:54:54.853 [main] DEBUG com.itwanger.Test - logback</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">13:54:54,718 |-INFO in ch.qos.logback.classic.LoggerContext[default] - Found resource [logback-test.xml] at [file:/Users/maweiqing/Documents/GitHub/JavaPointNew/codes/logbackDemo/target/classes/logback-test.xml]</span></span>
<span class="line"><span style="color:#24292e;">13:54:54,826 |-INFO in ch.qos.logback.core.joran.action.AppenderAction - About to instantiate appender of type [ch.qos.logback.core.ConsoleAppender]</span></span>
<span class="line"><span style="color:#24292e;">13:54:54,828 |-INFO in ch.qos.logback.core.joran.action.AppenderAction - Naming appender as [STDOUT]</span></span>
<span class="line"><span style="color:#24292e;">13:54:54,833 |-INFO in ch.qos.logback.core.joran.action.NestedComplexPropertyIA - Assuming default type [ch.qos.logback.classic.encoder.PatternLayoutEncoder] for [encoder] property</span></span>
<span class="line"><span style="color:#24292e;">13:54:54,850 |-INFO in ch.qos.logback.classic.joran.action.RootLoggerAction - Setting level of ROOT logger to DEBUG</span></span>
<span class="line"><span style="color:#24292e;">13:54:54,850 |-INFO in ch.qos.logback.core.joran.action.AppenderRefAction - Attaching appender named [STDOUT] to Logger[ROOT]</span></span>
<span class="line"><span style="color:#24292e;">13:54:54,850 |-INFO in ch.qos.logback.classic.joran.action.ConfigurationAction - End of configuration.</span></span>
<span class="line"><span style="color:#24292e;">13:54:54,851 |-INFO in ch.qos.logback.classic.joran.JoranConfigurator@f8c1ddd - Registering current configuration as safe fallback point</span></span>
<span class="line"><span style="color:#24292e;">13:54:54.853 [main] DEBUG com.itwanger.Test - logback</span></span></code></pre></div><p><strong>4）自动重载配置</strong>。</p><p>之前提到 Logback 很强的一个功能就是支持自动重载配置，那想要启用这个功能也非常简单，只需要在 configuration 元素上添加 <code>scan=true</code> 即可。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;configuration scan=&quot;true&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    ...</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/configuration&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;configuration scan=&quot;true&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    ...</span></span>
<span class="line"><span style="color:#24292e;">&lt;/configuration&gt;</span></span></code></pre></div><p>默认情况下，扫描的时间间隔是一分钟一次。如果想要调整时间间隔，可以通过 scanPeriod 属性进行调整，单位可以是毫秒（milliseconds）、秒（seconds）、分钟（minutes）或者小时（hours）。</p><p>下面这个示例指定的时间间隔是 30 秒：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;configuration scan=&quot;true&quot; scanPeriod=&quot;30 seconds&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">   ...</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/configuration&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;configuration scan=&quot;true&quot; scanPeriod=&quot;30 seconds&quot;</span></span>
<span class="line"><span style="color:#24292e;">   ...</span></span>
<span class="line"><span style="color:#24292e;">&lt;/configuration&gt;</span></span></code></pre></div><p>注意：如果指定了时间间隔，没有指定时间单位，默认的时间单位为毫秒。</p><p>当设置 <code>scan=true</code> 后，Logback 会起一个 ReconfigureOnChangeTask 的任务来监视配置文件的变化。</p><h3 id="_03、把-log4j-properties-转成-logback-test-xml" tabindex="-1">03、把 log4j.properties 转成 logback-test.xml <a class="header-anchor" href="#_03、把-log4j-properties-转成-logback-test-xml" aria-label="Permalink to &quot;03、把 log4j.properties 转成 logback-test.xml&quot;">​</a></h3><p>如果你的项目以前用的 Log4j，那么可以通过下面这个网址把 log4j.properties 转成 logback-test.xml：</p><blockquote><p><a href="http://logback.qos.ch/translator/" target="_blank" rel="noreferrer">http://logback.qos.ch/translator/</a></p></blockquote><p>把之前 log4j.properties 的内容拷贝一份：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">### 设置###</span></span>
<span class="line"><span style="color:#f6f6f4;">log4j.rootLogger = debug,stdout,D,E</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">### 输出信息到控制台 ###</span></span>
<span class="line"><span style="color:#f6f6f4;">log4j.appender.stdout = org.apache.log4j.ConsoleAppender</span></span>
<span class="line"><span style="color:#f6f6f4;">log4j.appender.stdout.Target = System.out</span></span>
<span class="line"><span style="color:#f6f6f4;">log4j.appender.stdout.layout = org.apache.log4j.PatternLayout</span></span>
<span class="line"><span style="color:#f6f6f4;">log4j.appender.stdout.layout.ConversionPattern = [%-5p] %d{yyyy-MM-dd HH:mm:ss,SSS} method:%l%n%m%n</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">### 输出DEBUG 级别以上的日志到=debug.log ###</span></span>
<span class="line"><span style="color:#f6f6f4;">log4j.appender.D = org.apache.log4j.DailyRollingFileAppender</span></span>
<span class="line"><span style="color:#f6f6f4;">log4j.appender.D.File = debug.log</span></span>
<span class="line"><span style="color:#f6f6f4;">log4j.appender.D.Append = true</span></span>
<span class="line"><span style="color:#f6f6f4;">log4j.appender.D.Threshold = DEBUG </span></span>
<span class="line"><span style="color:#f6f6f4;">log4j.appender.D.layout = org.apache.log4j.PatternLayout</span></span>
<span class="line"><span style="color:#f6f6f4;">log4j.appender.D.layout.ConversionPattern = %d{yyyy-MM-dd HH:mm:ss}  [ %t:%r ] - [ %p ]  %m%n</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">### 输出ERROR 级别以上的日志到=error.log ###</span></span>
<span class="line"><span style="color:#f6f6f4;">log4j.appender.E = org.apache.log4j.DailyRollingFileAppender</span></span>
<span class="line"><span style="color:#f6f6f4;">log4j.appender.E.File =error.log </span></span>
<span class="line"><span style="color:#f6f6f4;">log4j.appender.E.Append = true</span></span>
<span class="line"><span style="color:#f6f6f4;">log4j.appender.E.Threshold = ERROR </span></span>
<span class="line"><span style="color:#f6f6f4;">log4j.appender.E.layout = org.apache.log4j.PatternLayout</span></span>
<span class="line"><span style="color:#f6f6f4;">log4j.appender.E.layout.ConversionPattern = %d{yyyy-MM-dd HH:mm:ss}  [ %t:%r ] - [ %p ]  %m%n</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">### 设置###</span></span>
<span class="line"><span style="color:#24292e;">log4j.rootLogger = debug,stdout,D,E</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">### 输出信息到控制台 ###</span></span>
<span class="line"><span style="color:#24292e;">log4j.appender.stdout = org.apache.log4j.ConsoleAppender</span></span>
<span class="line"><span style="color:#24292e;">log4j.appender.stdout.Target = System.out</span></span>
<span class="line"><span style="color:#24292e;">log4j.appender.stdout.layout = org.apache.log4j.PatternLayout</span></span>
<span class="line"><span style="color:#24292e;">log4j.appender.stdout.layout.ConversionPattern = [%-5p] %d{yyyy-MM-dd HH:mm:ss,SSS} method:%l%n%m%n</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">### 输出DEBUG 级别以上的日志到=debug.log ###</span></span>
<span class="line"><span style="color:#24292e;">log4j.appender.D = org.apache.log4j.DailyRollingFileAppender</span></span>
<span class="line"><span style="color:#24292e;">log4j.appender.D.File = debug.log</span></span>
<span class="line"><span style="color:#24292e;">log4j.appender.D.Append = true</span></span>
<span class="line"><span style="color:#24292e;">log4j.appender.D.Threshold = DEBUG </span></span>
<span class="line"><span style="color:#24292e;">log4j.appender.D.layout = org.apache.log4j.PatternLayout</span></span>
<span class="line"><span style="color:#24292e;">log4j.appender.D.layout.ConversionPattern = %d{yyyy-MM-dd HH:mm:ss}  [ %t:%r ] - [ %p ]  %m%n</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">### 输出ERROR 级别以上的日志到=error.log ###</span></span>
<span class="line"><span style="color:#24292e;">log4j.appender.E = org.apache.log4j.DailyRollingFileAppender</span></span>
<span class="line"><span style="color:#24292e;">log4j.appender.E.File =error.log </span></span>
<span class="line"><span style="color:#24292e;">log4j.appender.E.Append = true</span></span>
<span class="line"><span style="color:#24292e;">log4j.appender.E.Threshold = ERROR </span></span>
<span class="line"><span style="color:#24292e;">log4j.appender.E.layout = org.apache.log4j.PatternLayout</span></span>
<span class="line"><span style="color:#24292e;">log4j.appender.E.layout.ConversionPattern = %d{yyyy-MM-dd HH:mm:ss}  [ %t:%r ] - [ %p ]  %m%n</span></span></code></pre></div><p>粘贴到该网址的文本域：</p><img src="`+y+`"><p>点击「Translate」，可以得到以下内容：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;!-- For assistance related to logback-translator or configuration  --&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;!-- files in general, please contact the logback user mailing list --&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;!-- at http://www.qos.ch/mailman/listinfo/logback-user             --&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;!--                                                                --&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;!-- For professional support please see                            --&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;!--    http://www.qos.ch/shop/products/professionalSupport         --&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;!--                                                                --&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;configuration&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;appender name=&quot;stdout&quot; class=&quot;ch.qos.logback.core.ConsoleAppender&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;Target&gt;System.out&lt;/Target&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;encoder&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">      &lt;pattern&gt;[%-5p] %d{yyyy-MM-dd HH:mm:ss,SSS} method:%l%n%m%n&lt;/pattern&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;/encoder&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;/appender&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;appender name=&quot;D&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;!--See http://logback.qos.ch/manual/appenders.html#RollingFileAppender--&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;!--and http://logback.qos.ch/manual/appenders.html#TimeBasedRollingPolicy--&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;!--for further documentation--&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;Append&gt;true&lt;/Append&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;File&gt;debug.log&lt;/File&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;encoder&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">      &lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss} [ %t:%r ] - [ %p ] %m%n&lt;/pattern&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;/encoder&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;filter class=&quot;ch.qos.logback.classic.filter.ThresholdFilter&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">      &lt;level&gt;DEBUG&lt;/level&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;/filter&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;/appender&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;appender name=&quot;E&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;!--See http://logback.qos.ch/manual/appenders.html#RollingFileAppender--&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;!--and http://logback.qos.ch/manual/appenders.html#TimeBasedRollingPolicy--&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;!--for further documentation--&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;File&gt;error.log&lt;/File&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;Append&gt;true&lt;/Append&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;encoder&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">      &lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss} [ %t:%r ] - [ %p ] %m%n&lt;/pattern&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;/encoder&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;filter class=&quot;ch.qos.logback.classic.filter.ThresholdFilter&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">      &lt;level&gt;ERROR&lt;/level&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;/filter&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;/appender&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;root level=&quot;debug&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;appender-ref ref=&quot;stdout&quot;/&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;appender-ref ref=&quot;D&quot;/&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;appender-ref ref=&quot;E&quot;/&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;/root&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/configuration&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;!-- For assistance related to logback-translator or configuration  --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!-- files in general, please contact the logback user mailing list --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!-- at http://www.qos.ch/mailman/listinfo/logback-user             --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!--                                                                --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!-- For professional support please see                            --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!--    http://www.qos.ch/shop/products/professionalSupport         --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!--                                                                --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;configuration&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;appender name=&quot;stdout&quot; class=&quot;ch.qos.logback.core.ConsoleAppender&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;Target&gt;System.out&lt;/Target&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;encoder&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;pattern&gt;[%-5p] %d{yyyy-MM-dd HH:mm:ss,SSS} method:%l%n%m%n&lt;/pattern&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/encoder&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/appender&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;appender name=&quot;D&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;!--See http://logback.qos.ch/manual/appenders.html#RollingFileAppender--&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;!--and http://logback.qos.ch/manual/appenders.html#TimeBasedRollingPolicy--&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;!--for further documentation--&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;Append&gt;true&lt;/Append&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;File&gt;debug.log&lt;/File&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;encoder&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss} [ %t:%r ] - [ %p ] %m%n&lt;/pattern&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/encoder&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;filter class=&quot;ch.qos.logback.classic.filter.ThresholdFilter&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;level&gt;DEBUG&lt;/level&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/filter&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/appender&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;appender name=&quot;E&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;!--See http://logback.qos.ch/manual/appenders.html#RollingFileAppender--&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;!--and http://logback.qos.ch/manual/appenders.html#TimeBasedRollingPolicy--&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;!--for further documentation--&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;File&gt;error.log&lt;/File&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;Append&gt;true&lt;/Append&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;encoder&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss} [ %t:%r ] - [ %p ] %m%n&lt;/pattern&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/encoder&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;filter class=&quot;ch.qos.logback.classic.filter.ThresholdFilter&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;level&gt;ERROR&lt;/level&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/filter&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/appender&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;root level=&quot;debug&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;appender-ref ref=&quot;stdout&quot;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;appender-ref ref=&quot;D&quot;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;appender-ref ref=&quot;E&quot;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/root&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/configuration&gt;</span></span></code></pre></div><p>可以确认一下内容，发现三个 appender 都在。</p><img src="`+d+`"><p>但是呢，转换后的文件并不能直接使用，需要稍微做一些调整，因为：</p><p>第一，日志的格式化有细微的不同，Logback 中没有 <code>%l</code>。</p><p>第二，RollingFileAppender 需要指定 RollingPolicy 和 TriggeringPolicy，前者负责日志的滚动功能，后者负责日志滚动的时机。如果 RollingPolicy 也实现了 TriggeringPolicy 接口，那么只需要设置 RollingPolicy 就好了。</p><p>TimeBasedRollingPolicy 和 SizeAndTimeBasedRollingPolicy 是两种最常用的滚动策略。</p><p>TimeBasedRollingPolicy 同时实现了 RollingPolicy 与 TriggeringPolicy 接口，因此使用 TimeBasedRollingPolicy 的时候就可以不指定 TriggeringPolicy。</p><p>TimeBasedRollingPolicy 可以指定以下属性：</p><ul><li><p>fileNamePattern，用来定义文件的名字（必选项）。它的值应该由文件名加上一个 <code>%d</code> 的占位符。<code>%d</code> 应该包含 <code>java.text.SimpleDateFormat</code> 中规定的日期格式，缺省是 <code>yyyy-MM-dd</code>。滚动周期是通过 fileNamePattern 推断出来的。</p></li><li><p>maxHistory，最多保留多少数量的日志文件（可选项），将会通过异步的方式删除旧的文件。比如，你指定按月滚动，指定 <code>maxHistory = 6</code>，那么 6 个月内的日志文件将会保留，超过 6 个月的将会被删除。</p></li><li><p>totalSizeCap，所有日志文件的大小（可选项）。超出这个大小时，旧的日志文件将会被异步删除。需要配合 maxHistory 属性一起使用，并且是第二条件。</p></li></ul><p>来看下面这个 RollingFileAppender 配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;appender name=&quot;D&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;file&gt;debug.log&lt;/file&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.TimeBasedRollingPolicy&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;!--            按天滚动 --&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;fileNamePattern&gt;debug.%d{yyyy-MM-dd}.log&lt;/fileNamePattern&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;!--            保存 30 天的历史记录，最大大小为 30GB --&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;maxHistory&gt;30&lt;/maxHistory&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;totalSizeCap&gt;3GB&lt;/totalSizeCap&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;/rollingPolicy&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;encoder&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;pattern&gt;%relative [%thread] %level %logger{35} - %msg%n&lt;/pattern&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;/encoder&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/appender&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;appender name=&quot;D&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;file&gt;debug.log&lt;/file&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.TimeBasedRollingPolicy&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;!--            按天滚动 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;fileNamePattern&gt;debug.%d{yyyy-MM-dd}.log&lt;/fileNamePattern&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;!--            保存 30 天的历史记录，最大大小为 30GB --&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;maxHistory&gt;30&lt;/maxHistory&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;totalSizeCap&gt;3GB&lt;/totalSizeCap&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/rollingPolicy&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;encoder&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;pattern&gt;%relative [%thread] %level %logger{35} - %msg%n&lt;/pattern&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/encoder&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/appender&gt;</span></span></code></pre></div><p>基于按天滚动的文件策略，最多保留 30 天，最大大小为 30G。</p><p>SizeAndTimeBasedRollingPolicy 比 TimeBasedRollingPolicy 多了一个日志文件大小设定的属性：maxFileSize，其他完全一样。</p><p>基于我们对 RollingPolicy 的了解，可以把 logback-test.xml 的内容调整为以下内容：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;configuration&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;appender name=&quot;stdout&quot; class=&quot;ch.qos.logback.core.ConsoleAppender&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;Target&gt;System.out&lt;/Target&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;encoder&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;pattern&gt;%d{HH:mm:ss.SSS} [%thread] %level %logger{36} - %msg%n&lt;/pattern&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;/encoder&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;/appender&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;appender name=&quot;D&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;Append&gt;true&lt;/Append&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;File&gt;debug.log&lt;/File&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.TimeBasedRollingPolicy&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;!--            按天轮转 --&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;fileNamePattern&gt;debug.%d{yyyy-MM-dd}.log&lt;/fileNamePattern&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;!--            保存 30 天的历史记录，最大大小为 30GB --&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;maxHistory&gt;30&lt;/maxHistory&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;totalSizeCap&gt;3GB&lt;/totalSizeCap&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;/rollingPolicy&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;encoder&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;pattern&gt;%relative [%thread] %-5level %logger{35} - %msg%n&lt;/pattern&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;/encoder&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/appender&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;appender name=&quot;E&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;File&gt;error.log&lt;/File&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.TimeBasedRollingPolicy&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;!--            按天轮转 --&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;fileNamePattern&gt;error.%d{yyyy-MM-dd}.log&lt;/fileNamePattern&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;!--            保存 30 天的历史记录，最大大小为 30GB --&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;maxHistory&gt;30&lt;/maxHistory&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;totalSizeCap&gt;3GB&lt;/totalSizeCap&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;/rollingPolicy&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;encoder&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss} [ %t:%r ] - [ %p ] %m%n&lt;/pattern&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;/encoder&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;filter class=&quot;ch.qos.logback.classic.filter.ThresholdFilter&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;level&gt;ERROR&lt;/level&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;/filter&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;/appender&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;root level=&quot;debug&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;appender-ref ref=&quot;stdout&quot;/&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;appender-ref ref=&quot;D&quot;/&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;appender-ref ref=&quot;E&quot;/&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;/root&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/configuration&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;configuration&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;appender name=&quot;stdout&quot; class=&quot;ch.qos.logback.core.ConsoleAppender&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;Target&gt;System.out&lt;/Target&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;encoder&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;pattern&gt;%d{HH:mm:ss.SSS} [%thread] %level %logger{36} - %msg%n&lt;/pattern&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/encoder&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/appender&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;appender name=&quot;D&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;Append&gt;true&lt;/Append&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;File&gt;debug.log&lt;/File&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.TimeBasedRollingPolicy&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;!--            按天轮转 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;fileNamePattern&gt;debug.%d{yyyy-MM-dd}.log&lt;/fileNamePattern&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;!--            保存 30 天的历史记录，最大大小为 30GB --&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;maxHistory&gt;30&lt;/maxHistory&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;totalSizeCap&gt;3GB&lt;/totalSizeCap&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/rollingPolicy&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;encoder&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;pattern&gt;%relative [%thread] %-5level %logger{35} - %msg%n&lt;/pattern&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/encoder&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/appender&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;appender name=&quot;E&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;File&gt;error.log&lt;/File&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.TimeBasedRollingPolicy&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;!--            按天轮转 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;fileNamePattern&gt;error.%d{yyyy-MM-dd}.log&lt;/fileNamePattern&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;!--            保存 30 天的历史记录，最大大小为 30GB --&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;maxHistory&gt;30&lt;/maxHistory&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;totalSizeCap&gt;3GB&lt;/totalSizeCap&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/rollingPolicy&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;encoder&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss} [ %t:%r ] - [ %p ] %m%n&lt;/pattern&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/encoder&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;filter class=&quot;ch.qos.logback.classic.filter.ThresholdFilter&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;level&gt;ERROR&lt;/level&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/filter&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/appender&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;root level=&quot;debug&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;appender-ref ref=&quot;stdout&quot;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;appender-ref ref=&quot;D&quot;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;appender-ref ref=&quot;E&quot;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/root&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/configuration&gt;</span></span></code></pre></div><p>修改 Test 类的内容：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Test</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">static</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Logger</span><span style="color:#F6F6F4;"> logger </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> LoggerFactory.</span><span style="color:#62E884;">getLogger</span><span style="color:#F6F6F4;">(Test.class);</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">static</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">main</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;">[] </span><span style="color:#FFB86C;font-style:italic;">args</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        logger.</span><span style="color:#62E884;">debug</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">logback</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">        logger.</span><span style="color:#62E884;">error</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">logback</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Test</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> Logger logger </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> LoggerFactory.</span><span style="color:#6F42C1;">getLogger</span><span style="color:#24292E;">(Test.class);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] </span><span style="color:#E36209;">args</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        logger.</span><span style="color:#6F42C1;">debug</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;logback&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        logger.</span><span style="color:#6F42C1;">error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;logback&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>运行后，可以在 target 目录下看到两个文件：debug.log 和 errror.log。</p><img src="`+f+'"><p>到此为止，项目已经从 Log4j 切换到 Logback 了，过程非常的丝滑顺畅，嘿嘿。</p><h3 id="_04、logback-手册" tabindex="-1">04、Logback 手册 <a class="header-anchor" href="#_04、logback-手册" aria-label="Permalink to &quot;04、Logback 手册&quot;">​</a></h3><p>Logback 的官网上是有一份手册的，非常详细，足足 200 多页，只不过是英文版的。小伙伴们可以看完我这篇文章入门实操的 Logback 教程后，到下面的地址看官方手册。</p><blockquote><p><a href="http://logback.qos.ch/manual/index.html" target="_blank" rel="noreferrer">http://logback.qos.ch/manual/index.html</a></p></blockquote><p>如果英文阅读能力有限的话，可以到 GitHub 上查看雷锋翻译的中文版：</p><blockquote><p><a href="https://github.com/itwanger/logback-chinese-manual" target="_blank" rel="noreferrer">https://github.com/itwanger/logback-chinese-manual</a></p></blockquote><p>当然了，还有一部分小伙伴喜欢看离线版的 PDF，我已经整理好了：</p><blockquote><p>链接:<a href="https://pan.baidu.com/s/16FrbwycYUUIfKknlLhRKYA" target="_blank" rel="noreferrer">https://pan.baidu.com/s/16FrbwycYUUIfKknlLhRKYA</a> 密码:bptl</p></blockquote>',95),b=[F];function h(m,q,k,E,v,C){return n(),a("div",null,b)}const T=s(u,[["render",h]]);export{D as __pageData,T as default};
