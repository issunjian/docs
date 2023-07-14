import{_ as a,o,c as e,V as r}from"./chunks/framework.c6d8cbec.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/spring/spring-17.md","filePath":"interview/backend/spring/spring-17.md"}'),n={name:"interview/backend/spring/spring-17.md"},t=r(`<h3 id="_1、spring-dao-有什么用" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#1spring-dao-%E6%9C%89%E4%BB%80%E4%B9%88%E7%94%A8" target="_blank" rel="noreferrer">1、spring DAO 有什么用？</a> <a class="header-anchor" href="#_1、spring-dao-有什么用" aria-label="Permalink to &quot;[1、spring DAO 有什么用？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring最新面试题，2021年面试题及答案汇总.md#1spring-dao-有什么用)&quot;">​</a></h3><p>Spring DAO 使得 JDBC，Hibernate 或 JDO 这样的数据访问技术更容易以一种统一的方式工作。这使得用户容易在持久性技术之间切换。它还允许您在编写代码时，无需考虑捕获每种技术不同的异常。</p><h3 id="_2、什么是端到端微服务测试" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#2%E4%BB%80%E4%B9%88%E6%98%AF%E7%AB%AF%E5%88%B0%E7%AB%AF%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%B5%8B%E8%AF%95" target="_blank" rel="noreferrer">2、什么是端到端微服务测试？</a> <a class="header-anchor" href="#_2、什么是端到端微服务测试" aria-label="Permalink to &quot;[2、什么是端到端微服务测试？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring最新面试题，2021年面试题及答案汇总.md#2什么是端到端微服务测试)&quot;">​</a></h3><p>端到端测试验证了工作流中的每个流程都正常运行。这可确保系统作为一个整体协同工作并满足所有要求。</p><p>通俗地说，你可以说端到端测试是一种测试，在特定时期后测试所有东西。</p><p><img src="https://gitee.com/souyunkutech/souyunku-home/raw/master/images/souyunku-web/2019/08/0816/01/img_17.png#alt=img%5C_17.png" alt=""></p><p>图14：测试层次 – 微服务面试问题</p><h3 id="_3、解释web-模块。" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#3%E8%A7%A3%E9%87%8Aweb-%E6%A8%A1%E5%9D%97%E3%80%82" target="_blank" rel="noreferrer">3、解释WEB 模块。</a> <a class="header-anchor" href="#_3、解释web-模块。" aria-label="Permalink to &quot;[3、解释WEB 模块。](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring最新面试题，2021年面试题及答案汇总.md#3解释web-模块。)&quot;">​</a></h3><p>Spring的WEB模块是构建在application context 模块基础之上，提供一个适合web应用的上下文。这个模块也包括支持多种面向web的任务，如透明地处理多个文件上传请求和程序级请求参数的绑定到你的业务对象。它也有对Jakarta Struts的支持。</p><h3 id="_4、springboot-的核心注解是哪个-它主要由哪几个注解组成的" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#4springboot-%E7%9A%84%E6%A0%B8%E5%BF%83%E6%B3%A8%E8%A7%A3%E6%98%AF%E5%93%AA%E4%B8%AA%E5%AE%83%E4%B8%BB%E8%A6%81%E7%94%B1%E5%93%AA%E5%87%A0%E4%B8%AA%E6%B3%A8%E8%A7%A3%E7%BB%84%E6%88%90%E7%9A%84" target="_blank" rel="noreferrer">4、SpringBoot 的核心注解是哪个？它主要由哪几个注解组成的？</a> <a class="header-anchor" href="#_4、springboot-的核心注解是哪个-它主要由哪几个注解组成的" aria-label="Permalink to &quot;[4、SpringBoot 的核心注解是哪个？它主要由哪几个注解组成的？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring最新面试题，2021年面试题及答案汇总.md#4springboot-的核心注解是哪个它主要由哪几个注解组成的)&quot;">​</a></h3><p>启动类上面的注解是@SpringBootApplication，它也是 SpringBoot 的核心注解，主要组合包含了以下 3 个注解：</p><p>@SpringBootConfiguration：组合了 <a href="/docs/Configuration.html">@Configuration </a> 注解，实现配置文件的功能。</p><p>@EnableAutoConfiguration：打开自动配置的功能，也可以关闭某个自动配置的选项，如关闭数据源自动配置功能： [@SpringBootApplication(exclude ](/SpringBootApplication(exclude ) = { DataSourceAutoConfiguration.class })。</p><p>@ComponentScan：Spring组件扫描。</p><h3 id="_5、spring-提供了哪些配置方式" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#5spring-%E6%8F%90%E4%BE%9B%E4%BA%86%E5%93%AA%E4%BA%9B%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F" target="_blank" rel="noreferrer">5、spring 提供了哪些配置方式？</a> <a class="header-anchor" href="#_5、spring-提供了哪些配置方式" aria-label="Permalink to &quot;[5、spring 提供了哪些配置方式？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring最新面试题，2021年面试题及答案汇总.md#5spring-提供了哪些配置方式)&quot;">​</a></h3><p>bean 所需的依赖项和服务在 XML 格式的配置文件中指定。 这些配置文件通常包含许多 bean 定义和特定于应用程序的配置选项。 它们通常以 bean 标签开头。</p><p><strong>例如：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;bean id=&quot;studentbean&quot; class=&quot;org.edureka.firstSpring.StudentBean&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">     &lt;property name=&quot;name&quot; value=&quot;Edureka&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/bean&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;bean id=&quot;studentbean&quot; class=&quot;org.edureka.firstSpring.StudentBean&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">     &lt;property name=&quot;name&quot; value=&quot;Edureka&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/bean&gt;</span></span></code></pre></div><p><strong>基于注解配置</strong></p><p>您可以通过在相关的类，方法或字段声明上使用注解，将 bean 配置为组件类本身，而不是使用 XML 来描述 bean 装配。 默认情况下，Spring 容器中未打开注解装配。 因此，您需要在使用它之前在 Spring 配置文件中启用它。 例如：</p><p>context:annotation-config/</p><p>Spring 的 Java 配置是通过使用<a href="/docs/Bean.html">@Bean </a> 和 <a href="/docs/Configuration.html">@Configuration </a> 来实现。</p><p><a href="/docs/Bean.html">@Bean </a> 注解扮演与 元素相同的角色。 <a href="/docs/Configuration.html">@Configuration </a> 类允许通过简单地调用同一个类中的其他<a href="/docs/Bean.html">@Bean </a> 方法来定义 bean 间依赖关系。</p><p><strong>例如：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">public class StudentConfig {</span></span>
<span class="line"><span style="color:#f6f6f4;">    @Bean</span></span>
<span class="line"><span style="color:#f6f6f4;">    public StudentBean myStudent() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return new StudentBean();</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class StudentConfig {</span></span>
<span class="line"><span style="color:#24292e;">    @Bean</span></span>
<span class="line"><span style="color:#24292e;">    public StudentBean myStudent() {</span></span>
<span class="line"><span style="color:#24292e;">        return new StudentBean();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="_6、springboot需要独立的容器运行" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#6springboot%E9%9C%80%E8%A6%81%E7%8B%AC%E7%AB%8B%E7%9A%84%E5%AE%B9%E5%99%A8%E8%BF%90%E8%A1%8C" target="_blank" rel="noreferrer">6、SpringBoot需要独立的容器运行？</a> <a class="header-anchor" href="#_6、springboot需要独立的容器运行" aria-label="Permalink to &quot;[6、SpringBoot需要独立的容器运行？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring最新面试题，2021年面试题及答案汇总.md#6springboot需要独立的容器运行)&quot;">​</a></h3><p>SpringBoot不需要独立的容器就可以运行，因为在SpringBoot工程发布的jar文件里已经包含了tomcat的jar文件。SpringBoot运行的时候会创建tomcat对象，实现web服务功能。也可以将SpringBoot发布成war文件，放到tomcat文件里面运行</p><h3 id="_7、微服务之间是如何独立通讯的" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#7%E5%BE%AE%E6%9C%8D%E5%8A%A1%E4%B9%8B%E9%97%B4%E6%98%AF%E5%A6%82%E4%BD%95%E7%8B%AC%E7%AB%8B%E9%80%9A%E8%AE%AF%E7%9A%84" target="_blank" rel="noreferrer">7、微服务之间是如何独立通讯的</a> <a class="header-anchor" href="#_7、微服务之间是如何独立通讯的" aria-label="Permalink to &quot;[7、微服务之间是如何独立通讯的](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring最新面试题，2021年面试题及答案汇总.md#7微服务之间是如何独立通讯的)&quot;">​</a></h3><p><strong>1、</strong> 远程过程调用（Remote Procedure Invocation）：也就是我们常说的服务的注册与发现，直接通过远程过程调用来访问别的service。</p><p><strong>优点：</strong></p><p>简单，常见,因为没有中间件代理，系统更简单</p><p><strong>缺点：</strong></p><p><strong>1、</strong> 只支持请求/响应的模式，不支持别的，比如通知、请求/异步响应、发布/订阅、发布/异步响应</p><p><strong>2、</strong> 降低了可用性，因为客户端和服务端在请求过程中必须都是可用的</p><p><strong>2、</strong> 消息：使用异步消息来做服务间通信。服务间通过消息管道来交换消息，从而通信。</p><p><strong>优点:</strong></p><p><strong>1、</strong> 把客户端和服务端解耦，更松耦合</p><p><strong>2、</strong> 提高可用性，因为消息中间件缓存了消息，直到消费者可以消费</p><p><strong>3、</strong> 支持很多通信机制比如通知、请求/异步响应、发布/订阅、发布/异步响应</p><p><strong>缺点:</strong></p><p>消息中间件有额外的复杂</p><h3 id="_8、什么是csrf攻击" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#8%E4%BB%80%E4%B9%88%E6%98%AFcsrf%E6%94%BB%E5%87%BB" target="_blank" rel="noreferrer">8、什么是CSRF攻击？</a> <a class="header-anchor" href="#_8、什么是csrf攻击" aria-label="Permalink to &quot;[8、什么是CSRF攻击？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring最新面试题，2021年面试题及答案汇总.md#8什么是csrf攻击)&quot;">​</a></h3><p>CSRF代表跨站请求伪造。这是一种攻击，迫使最终用户在当前通过身份验证的Web应用程序上执行不需要的操作。CSRF攻击专门针对状态改变请求，而不是数据窃取，因为攻击者无法查看对伪造请求的响应。</p><h3 id="_9、使用-spring-有哪些方式" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#9%E4%BD%BF%E7%94%A8-spring-%E6%9C%89%E5%93%AA%E4%BA%9B%E6%96%B9%E5%BC%8F" target="_blank" rel="noreferrer">9、使用 Spring 有哪些方式？</a> <a class="header-anchor" href="#_9、使用-spring-有哪些方式" aria-label="Permalink to &quot;[9、使用 Spring 有哪些方式？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring最新面试题，2021年面试题及答案汇总.md#9使用-spring-有哪些方式)&quot;">​</a></h3><p><strong>使用 Spring 有以下方式：</strong></p><p><strong>1、</strong> 作为一个成熟的 Spring Web 应用程序。</p><p><strong>2、</strong> 作为第三方 Web 框架，使用 Spring Frameworks 中间层。</p><p><strong>3、</strong> 用于远程使用。</p><p><strong>4、</strong> 作为企业级 Java Bean，它可以包装现有的 POJO（Plain Old Java Objects）。</p><h3 id="_10、运行-springboot-有哪几种方式" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#10%E8%BF%90%E8%A1%8C-springboot-%E6%9C%89%E5%93%AA%E5%87%A0%E7%A7%8D%E6%96%B9%E5%BC%8F" target="_blank" rel="noreferrer">10、运行 SpringBoot 有哪几种方式？</a> <a class="header-anchor" href="#_10、运行-springboot-有哪几种方式" aria-label="Permalink to &quot;[10、运行 SpringBoot 有哪几种方式？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring最新面试题，2021年面试题及答案汇总.md#10运行-springboot-有哪几种方式)&quot;">​</a></h3><p>打包用命令或者放到容器中运行</p><p>用 Maven/ Gradle 插件运行</p><p>直接执行 main 方法运行</p><h3 id="_11、springboot-starter-的工作原理是什么" tabindex="-1">11、SpringBoot Starter 的工作原理是什么？ <a class="header-anchor" href="#_11、springboot-starter-的工作原理是什么" aria-label="Permalink to &quot;11、SpringBoot Starter 的工作原理是什么？&quot;">​</a></h3><h3 id="_12、微服务的优点" tabindex="-1">12、微服务的优点 <a class="header-anchor" href="#_12、微服务的优点" aria-label="Permalink to &quot;12、微服务的优点&quot;">​</a></h3><h3 id="_13、什么是eureka的自我保护模式" tabindex="-1">13、什么是Eureka的自我保护模式， <a class="header-anchor" href="#_13、什么是eureka的自我保护模式" aria-label="Permalink to &quot;13、什么是Eureka的自我保护模式，&quot;">​</a></h3><h3 id="_14、如何使用-springboot-生成一个-war-文件" tabindex="-1">14、如何使用 SpringBoot 生成一个 WAR 文件？ <a class="header-anchor" href="#_14、如何使用-springboot-生成一个-war-文件" aria-label="Permalink to &quot;14、如何使用 SpringBoot 生成一个 WAR 文件？&quot;">​</a></h3><h3 id="_15、spring框架中的单例bean是线程安全的吗" tabindex="-1">15、Spring框架中的单例bean是线程安全的吗? <a class="header-anchor" href="#_15、spring框架中的单例bean是线程安全的吗" aria-label="Permalink to &quot;15、Spring框架中的单例bean是线程安全的吗?&quot;">​</a></h3><h3 id="_16、你如何理解-springboot-配置加载顺序" tabindex="-1">16、你如何理解 SpringBoot 配置加载顺序？ <a class="header-anchor" href="#_16、你如何理解-springboot-配置加载顺序" aria-label="Permalink to &quot;16、你如何理解 SpringBoot 配置加载顺序？&quot;">​</a></h3><h3 id="_17、spring、springboot、springmvc的区别" tabindex="-1">17、Spring、SpringBoot、SpringMVC的区别？ <a class="header-anchor" href="#_17、spring、springboot、springmvc的区别" aria-label="Permalink to &quot;17、Spring、SpringBoot、SpringMVC的区别？&quot;">​</a></h3><h3 id="_18、缓存机制" tabindex="-1">18、缓存机制： <a class="header-anchor" href="#_18、缓存机制" aria-label="Permalink to &quot;18、缓存机制：&quot;">​</a></h3><h3 id="_19、eureka如何-保证ap" tabindex="-1">19、Eureka如何 保证AP <a class="header-anchor" href="#_19、eureka如何-保证ap" aria-label="Permalink to &quot;19、Eureka如何 保证AP&quot;">​</a></h3><h3 id="_20、springboot-2-x-有什么新特性-与-1-x-有什么区别" tabindex="-1">20、SpringBoot 2.X 有什么新特性？与 1.X 有什么区别？ <a class="header-anchor" href="#_20、springboot-2-x-有什么新特性-与-1-x-有什么区别" aria-label="Permalink to &quot;20、SpringBoot 2.X 有什么新特性？与 1.X 有什么区别？&quot;">​</a></h3><h3 id="_21、单片-soa和微服务架构有什么区别" tabindex="-1">21、单片，SOA和微服务架构有什么区别？ <a class="header-anchor" href="#_21、单片-soa和微服务架构有什么区别" aria-label="Permalink to &quot;21、单片，SOA和微服务架构有什么区别？&quot;">​</a></h3><h3 id="_22、什么是执行器停机" tabindex="-1">22、什么是执行器停机？ <a class="header-anchor" href="#_22、什么是执行器停机" aria-label="Permalink to &quot;22、什么是执行器停机？&quot;">​</a></h3><h3 id="_23、什么是客户证书" tabindex="-1">23、什么是客户证书？ <a class="header-anchor" href="#_23、什么是客户证书" aria-label="Permalink to &quot;23、什么是客户证书？&quot;">​</a></h3><h3 id="_24、什么是hystrix" tabindex="-1">24、什么是Hystrix? <a class="header-anchor" href="#_24、什么是hystrix" aria-label="Permalink to &quot;24、什么是Hystrix?&quot;">​</a></h3><h3 id="_25、springboot-有哪几种读取配置的方式" tabindex="-1">25、SpringBoot 有哪几种读取配置的方式？ <a class="header-anchor" href="#_25、springboot-有哪几种读取配置的方式" aria-label="Permalink to &quot;25、SpringBoot 有哪几种读取配置的方式？&quot;">​</a></h3><h3 id="_26、mvc是什么-mvc设计模式的好处有哪些" tabindex="-1">26、MVC是什么？MVC设计模式的好处有哪些 <a class="header-anchor" href="#_26、mvc是什么-mvc设计模式的好处有哪些" aria-label="Permalink to &quot;26、MVC是什么？MVC设计模式的好处有哪些&quot;">​</a></h3><h3 id="_27、什么是springboot" tabindex="-1">27、什么是SpringBoot？ <a class="header-anchor" href="#_27、什么是springboot" aria-label="Permalink to &quot;27、什么是SpringBoot？&quot;">​</a></h3><h3 id="_28、xmlbeanfactory" tabindex="-1">28、XMLBeanFactory <a class="header-anchor" href="#_28、xmlbeanfactory" aria-label="Permalink to &quot;28、XMLBeanFactory&quot;">​</a></h3><h3 id="_29、服务降级底层是如何实现的" tabindex="-1">29、服务降级底层是如何实现的？ <a class="header-anchor" href="#_29、服务降级底层是如何实现的" aria-label="Permalink to &quot;29、服务降级底层是如何实现的？&quot;">​</a></h3><h3 id="_30、spring-cloud和springboot版本对应关系" tabindex="-1">30、Spring Cloud和SpringBoot版本对应关系 <a class="header-anchor" href="#_30、spring-cloud和springboot版本对应关系" aria-label="Permalink to &quot;30、Spring Cloud和SpringBoot版本对应关系&quot;">​</a></h3><h3 id="_31、有哪些不同类型的ioc-依赖注入-方式" tabindex="-1">31、有哪些不同类型的IOC（依赖注入）方式？ <a class="header-anchor" href="#_31、有哪些不同类型的ioc-依赖注入-方式" aria-label="Permalink to &quot;31、有哪些不同类型的IOC（依赖注入）方式？&quot;">​</a></h3>`,74),s=[t];function i(p,l,E,g,c,h){return o(),e("div",null,s)}const B=a(n,[["render",i]]);export{d as __pageData,B as default};