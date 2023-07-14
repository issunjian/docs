import{_ as a,o,c as r,V as e}from"./chunks/framework.c6d8cbec.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/spring/spring-09.md","filePath":"interview/backend/spring/spring-09.md"}'),t={name:"interview/backend/spring/spring-09.md"},n=e('<h3 id="_1、springboot-的自动配置是如何实现的" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E5%85%A8%E5%B8%A6%E7%AD%94%E6%A1%88%EF%BC%8C%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0.md#1springboot-%E7%9A%84%E8%87%AA%E5%8A%A8%E9%85%8D%E7%BD%AE%E6%98%AF%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E7%9A%84" target="_blank" rel="noreferrer">1、SpringBoot 的自动配置是如何实现的？</a> <a class="header-anchor" href="#_1、springboot-的自动配置是如何实现的" aria-label="Permalink to &quot;[1、SpringBoot 的自动配置是如何实现的？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring面试题大全带答案，持续更新.md#1springboot-的自动配置是如何实现的)&quot;">​</a></h3><p>SpringBoot 项目的启动注解是：@SpringBootApplication，其实它就是由下面三个注解组成的：</p><p><strong>1、</strong> <a href="/docs/Configuration.html">@Configuration </a></p><p><strong>2、</strong> <a href="/docs/ComponentScan.html">@ComponentScan </a></p><p><strong>3、</strong> @EnableAutoConfiguration</p><p>其中 @EnableAutoConfiguration 是实现自动配置的入口，该注解又通过 <a href="/docs/Import.html">@Import </a> 注解导入了AutoConfigurationImportSelector，在该类中加载 META-INF/spring.factories 的配置信息。然后筛选出以 EnableAutoConfiguration 为 key 的数据，加载到 IOC 容器中，实现自动配置功能！</p><h3 id="_2、能否举一个例子来解释更多-staters-的内容" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E5%85%A8%E5%B8%A6%E7%AD%94%E6%A1%88%EF%BC%8C%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0.md#2%E8%83%BD%E5%90%A6%E4%B8%BE%E4%B8%80%E4%B8%AA%E4%BE%8B%E5%AD%90%E6%9D%A5%E8%A7%A3%E9%87%8A%E6%9B%B4%E5%A4%9A-staters-%E7%9A%84%E5%86%85%E5%AE%B9" target="_blank" rel="noreferrer">2、能否举一个例子来解释更多 Staters 的内容？</a> <a class="header-anchor" href="#_2、能否举一个例子来解释更多-staters-的内容" aria-label="Permalink to &quot;[2、能否举一个例子来解释更多 Staters 的内容？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring面试题大全带答案，持续更新.md#2能否举一个例子来解释更多-staters-的内容)&quot;">​</a></h3><p>让我们来思考一个 Stater 的例子 -SpringBoot Stater Web。</p><p>如果你想开发一个 web 应用程序或者是公开 REST 服务的应用程序。SpringBoot Start Web 是首选。让我们使用 Spring Initializr 创建一个 SpringBoot Start Web 的快速项目。</p><p><strong>依赖项可以被分为：</strong></p><p><strong>1、</strong> Spring - core，beans，context，aop</p><p><strong>2、</strong> Web MVC - （Spring MVC）</p><p><strong>3、</strong> Jackson - for JSON Binding</p><p><strong>4、</strong> Validation - Hibernate,Validation API</p><p><strong>5、</strong> Enbedded Servlet Container - Tomcat</p><p><strong>6、</strong> Logging - logback,slf4j</p><p>任何经典的 Web 应用程序都会使用所有这些依赖项。SpringBoot Starter Web 预先打包了这些依赖项。</p><p>作为一个开发者，我不需要再担心这些依赖项和它们的兼容版本。</p><h3 id="_3、什么是spring-cloud-gateway" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E5%85%A8%E5%B8%A6%E7%AD%94%E6%A1%88%EF%BC%8C%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0.md#3%E4%BB%80%E4%B9%88%E6%98%AFspring-cloud-gateway" target="_blank" rel="noreferrer">3、什么是Spring Cloud Gateway?</a> <a class="header-anchor" href="#_3、什么是spring-cloud-gateway" aria-label="Permalink to &quot;[3、什么是Spring Cloud Gateway?](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring面试题大全带答案，持续更新.md#3什么是spring-cloud-gateway)&quot;">​</a></h3><p>Spring Cloud Gateway是Spring Cloud官方推出的第二代网关框架，取代Zuul网关。网关作为流量的，在微服务系统中有着非常作用，网关常见的功能有路由转发、权限校验、限流控制等作用。</p><p>使用了一个RouteLocatorBuilder的bean去创建路由，除了创建路由RouteLocatorBuilder可以让你添加各种predicates和filters，predicates断言的意思，顾名思义就是根据具体的请求的规则，由具体的route去处理，filters是各种过滤器，用来对请求做各种判断和修改。</p><h3 id="_4、当-springboot-应用程序作为-java-应用程序运行时-后台会发生什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E5%85%A8%E5%B8%A6%E7%AD%94%E6%A1%88%EF%BC%8C%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0.md#4%E5%BD%93-springboot-%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E4%BD%9C%E4%B8%BA-java-%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E8%BF%90%E8%A1%8C%E6%97%B6%E5%90%8E%E5%8F%B0%E4%BC%9A%E5%8F%91%E7%94%9F%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">4、当 SpringBoot 应用程序作为 Java 应用程序运行时，后台会发生什么？</a> <a class="header-anchor" href="#_4、当-springboot-应用程序作为-java-应用程序运行时-后台会发生什么" aria-label="Permalink to &quot;[4、当 SpringBoot 应用程序作为 Java 应用程序运行时，后台会发生什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring面试题大全带答案，持续更新.md#4当-springboot-应用程序作为-java-应用程序运行时后台会发生什么)&quot;">​</a></h3><p>如果你使用 Eclipse IDE，Eclipse maven 插件确保依赖项或者类文件的改变一经添加，就会被编译并在目标文件中准备好！在这之后，就和其它的 Java 应用程序一样了。</p><p>当你启动 java 应用程序的时候，spring boot 自动配置文件就会魔法般的启用了。</p><p>当 SpringBoot 应用程序检测到你正在开发一个 web 应用程序的时候，它就会启动 tomcat。</p><h3 id="_5、我们如何监视所有-springboot-微服务" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E5%85%A8%E5%B8%A6%E7%AD%94%E6%A1%88%EF%BC%8C%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0.md#5%E6%88%91%E4%BB%AC%E5%A6%82%E4%BD%95%E7%9B%91%E8%A7%86%E6%89%80%E6%9C%89-springboot-%E5%BE%AE%E6%9C%8D%E5%8A%A1" target="_blank" rel="noreferrer">5、我们如何监视所有 SpringBoot 微服务？</a> <a class="header-anchor" href="#_5、我们如何监视所有-springboot-微服务" aria-label="Permalink to &quot;[5、我们如何监视所有 SpringBoot 微服务？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring面试题大全带答案，持续更新.md#5我们如何监视所有-springboot-微服务)&quot;">​</a></h3><p>SpringBoot 提供监视器端点以监控各个微服务的度量。这些端点对于获取有关应用程序的信息（如它们是否已启动）以及它们的组件（如数据库等）是否正常运行很有帮助。但是，使用监视器的一个主要缺点或困难是，我们必须单独打开应用程序的知识点以了解其状态或健康状况。想象一下涉及 50 个应用程序的微服务，管理员将不得不击中所有 50 个应用程序的执行终端。为了帮助我们处理这种情况，我们将使用位于的开源项目。它建立在 SpringBoot Actuator 之上，它提供了一个 Web UI，使我们能够可视化多个应用程序的度量。</p><h3 id="_6、什么是嵌入式服务器-我们为什么要使用嵌入式服务器呢" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E5%85%A8%E5%B8%A6%E7%AD%94%E6%A1%88%EF%BC%8C%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0.md#6%E4%BB%80%E4%B9%88%E6%98%AF%E5%B5%8C%E5%85%A5%E5%BC%8F%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%88%91%E4%BB%AC%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E4%BD%BF%E7%94%A8%E5%B5%8C%E5%85%A5%E5%BC%8F%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%91%A2" target="_blank" rel="noreferrer">6、什么是嵌入式服务器？我们为什么要使用嵌入式服务器呢?</a> <a class="header-anchor" href="#_6、什么是嵌入式服务器-我们为什么要使用嵌入式服务器呢" aria-label="Permalink to &quot;[6、什么是嵌入式服务器？我们为什么要使用嵌入式服务器呢?](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring面试题大全带答案，持续更新.md#6什么是嵌入式服务器我们为什么要使用嵌入式服务器呢)&quot;">​</a></h3><p>思考一下在你的虚拟机上部署应用程序需要些什么。</p><p>第一步：安装 Java</p><p>第二部：安装 Web 或者是应用程序的服务器（Tomat/Wbesphere/Weblogic 等等）</p><p>第三部：部署应用程序 war 包</p><p>如果我们想简化这些步骤，应该如何做呢？</p><p>让我们来思考如何使服务器成为应用程序的一部分？</p><p>你只需要一个安装了 Java 的虚拟机，就可以直接在上面部署应用程序了，</p><p>是不是很爽？</p><p>这个想法是嵌入式服务器的起源。</p><p>当我们创建一个可以部署的应用程序的时候，我们将会把服务器（例如，tomcat）嵌入到可部署的服务器中。</p><p>例如，对于一个 SpringBoot 应用程序来说，你可以生成一个包含 Embedded Tomcat 的应用程序 jar。你就可以像运行正常 Java 应用程序一样来运行 web 应用程序了。</p><p>嵌入式服务器就是我们的可执行单元包含服务器的二进制文件（例如，tomcat.jar）。</p><h3 id="_7、注解原理是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E5%85%A8%E5%B8%A6%E7%AD%94%E6%A1%88%EF%BC%8C%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0.md#7%E6%B3%A8%E8%A7%A3%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">7、注解原理是什么</a> <a class="header-anchor" href="#_7、注解原理是什么" aria-label="Permalink to &quot;[7、注解原理是什么](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring面试题大全带答案，持续更新.md#7注解原理是什么)&quot;">​</a></h3><p>注解本质是一个继承了Annotation的特殊接口，其具体实现类是Java运行时生成的动态代理类。我们通过反射获取注解时，返回的是Java运行时生成的动态代理对象。通过代理对象调用自定义注解的方法，会最终调用AnnotationInvocationHandler的invoke方法。该方法会从memberValues这个Map中索引出对应的值。而memberValues的来源是Java常量池。</p><h3 id="_8、spring-cloud-consul" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E5%85%A8%E5%B8%A6%E7%AD%94%E6%A1%88%EF%BC%8C%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0.md#8spring-cloud-consul" target="_blank" rel="noreferrer">8、Spring Cloud Consul</a> <a class="header-anchor" href="#_8、spring-cloud-consul" aria-label="Permalink to &quot;[8、Spring Cloud Consul](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring面试题大全带答案，持续更新.md#8spring-cloud-consul)&quot;">​</a></h3><p>基于Hashicorp Consul的服务治理组件。</p><h3 id="_9、介绍一下-webapplicationcontext" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E5%85%A8%E5%B8%A6%E7%AD%94%E6%A1%88%EF%BC%8C%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0.md#9%E4%BB%8B%E7%BB%8D%E4%B8%80%E4%B8%8B-webapplicationcontext" target="_blank" rel="noreferrer">9、介绍一下 WebApplicationContext</a> <a class="header-anchor" href="#_9、介绍一下-webapplicationcontext" aria-label="Permalink to &quot;[9、介绍一下 WebApplicationContext](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring面试题大全带答案，持续更新.md#9介绍一下-webapplicationcontext)&quot;">​</a></h3><p>WebApplicationContext 继承了ApplicationContext 并增加了一些WEB应用必备的特有功能，它不同于一般的ApplicationContext ，因为它能处理主题，并找到被关联的servlet。</p><h3 id="_10、如何理解-spring-中的代理" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E5%85%A8%E5%B8%A6%E7%AD%94%E6%A1%88%EF%BC%8C%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0.md#10%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-spring-%E4%B8%AD%E7%9A%84%E4%BB%A3%E7%90%86" target="_blank" rel="noreferrer">10、如何理解 Spring 中的代理？</a> <a class="header-anchor" href="#_10、如何理解-spring-中的代理" aria-label="Permalink to &quot;[10、如何理解 Spring 中的代理？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring面试题大全带答案，持续更新.md#10如何理解-spring-中的代理)&quot;">​</a></h3><p>将 Advice 应用于目标对象后创建的对象称为代理。在客户端对象的情况下，目标对象和代理对象是相同的。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">Advice + Target Object = Proxy</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Advice + Target Object = Proxy</span></span></code></pre></div><h3 id="_11、您将如何在微服务上执行安全测试" tabindex="-1">11、您将如何在微服务上执行安全测试？ <a class="header-anchor" href="#_11、您将如何在微服务上执行安全测试" aria-label="Permalink to &quot;11、您将如何在微服务上执行安全测试？&quot;">​</a></h3><h3 id="_12、什么是微服务架构" tabindex="-1">12、什么是微服务架构 <a class="header-anchor" href="#_12、什么是微服务架构" aria-label="Permalink to &quot;12、什么是微服务架构&quot;">​</a></h3><h3 id="_13、spring-mvc中函数的返回值是什么" tabindex="-1">13、Spring MVC中函数的返回值是什么？ <a class="header-anchor" href="#_13、spring-mvc中函数的返回值是什么" aria-label="Permalink to &quot;13、Spring MVC中函数的返回值是什么？&quot;">​</a></h3><h3 id="_14、spring-framework-有哪些不同的功能" tabindex="-1">14、Spring Framework 有哪些不同的功能？ <a class="header-anchor" href="#_14、spring-framework-有哪些不同的功能" aria-label="Permalink to &quot;14、Spring Framework 有哪些不同的功能？&quot;">​</a></h3><h3 id="_15、beanfactory-–-beanfactory-实现举例。" tabindex="-1">15、BeanFactory – BeanFactory 实现举例。 <a class="header-anchor" href="#_15、beanfactory-–-beanfactory-实现举例。" aria-label="Permalink to &quot;15、BeanFactory – BeanFactory 实现举例。&quot;">​</a></h3><h3 id="_16、什么是yaml" tabindex="-1">16、什么是YAML？ <a class="header-anchor" href="#_16、什么是yaml" aria-label="Permalink to &quot;16、什么是YAML？&quot;">​</a></h3><h3 id="_17、spring-boot监听器流程" tabindex="-1">17、spring boot监听器流程? <a class="header-anchor" href="#_17、spring-boot监听器流程" aria-label="Permalink to &quot;17、spring boot监听器流程?&quot;">​</a></h3><h3 id="_18、什么是-aop什么是引入" tabindex="-1">18、什么是 AOP什么是引入? <a class="header-anchor" href="#_18、什么是-aop什么是引入" aria-label="Permalink to &quot;18、什么是 AOP什么是引入?&quot;">​</a></h3><h3 id="_19、如何在-springboot-启动的时候运行一些特定的代码" tabindex="-1">19、如何在 SpringBoot 启动的时候运行一些特定的代码？ <a class="header-anchor" href="#_19、如何在-springboot-启动的时候运行一些特定的代码" aria-label="Permalink to &quot;19、如何在 SpringBoot 启动的时候运行一些特定的代码？&quot;">​</a></h3><h3 id="_20、spring-boot-核心配置文件是什么-bootstrap、properties-和-application、properties-有何区别" tabindex="-1">20、spring boot 核心配置文件是什么？bootstrap、properties 和 application、properties 有何区别 ? <a class="header-anchor" href="#_20、spring-boot-核心配置文件是什么-bootstrap、properties-和-application、properties-有何区别" aria-label="Permalink to &quot;20、spring boot 核心配置文件是什么？bootstrap、properties 和 application、properties 有何区别 ?&quot;">​</a></h3><h3 id="_21、什么是-springboot-stater" tabindex="-1">21、什么是 SpringBoot Stater ？ <a class="header-anchor" href="#_21、什么是-springboot-stater" aria-label="Permalink to &quot;21、什么是 SpringBoot Stater ？&quot;">​</a></h3><h3 id="_22、springboot-自动配置原理" tabindex="-1">22、SpringBoot 自动配置原理 <a class="header-anchor" href="#_22、springboot-自动配置原理" aria-label="Permalink to &quot;22、SpringBoot 自动配置原理&quot;">​</a></h3><h3 id="_23、什么是semantic监控" tabindex="-1">23、什么是Semantic监控？ <a class="header-anchor" href="#_23、什么是semantic监控" aria-label="Permalink to &quot;23、什么是Semantic监控？&quot;">​</a></h3><h3 id="_24、什么是spring-mvc-简单介绍下你对spring-mvc的理解" tabindex="-1">24、什么是Spring MVC？简单介绍下你对Spring MVC的理解？ <a class="header-anchor" href="#_24、什么是spring-mvc-简单介绍下你对spring-mvc的理解" aria-label="Permalink to &quot;24、什么是Spring MVC？简单介绍下你对Spring MVC的理解？&quot;">​</a></h3><h3 id="_25、微服务测试的主要障碍是什么" tabindex="-1">25、微服务测试的主要障碍是什么？ <a class="header-anchor" href="#_25、微服务测试的主要障碍是什么" aria-label="Permalink to &quot;25、微服务测试的主要障碍是什么？&quot;">​</a></h3><h3 id="_26、如何重新加载springboot上的更改-而无需重新启动服务器" tabindex="-1">26、如何重新加载SpringBoot上的更改，而无需重新启动服务器？ <a class="header-anchor" href="#_26、如何重新加载springboot上的更改-而无需重新启动服务器" aria-label="Permalink to &quot;26、如何重新加载SpringBoot上的更改，而无需重新启动服务器？&quot;">​</a></h3><h3 id="_27、spring-mvc常用的注解有哪些" tabindex="-1">27、Spring MVC常用的注解有哪些？ <a class="header-anchor" href="#_27、spring-mvc常用的注解有哪些" aria-label="Permalink to &quot;27、Spring MVC常用的注解有哪些？&quot;">​</a></h3><h3 id="_28、springboot默认支持的日志框架有哪些-可以进行哪些设置" tabindex="-1">28、SpringBoot默认支持的日志框架有哪些？可以进行哪些设置？ <a class="header-anchor" href="#_28、springboot默认支持的日志框架有哪些-可以进行哪些设置" aria-label="Permalink to &quot;28、SpringBoot默认支持的日志框架有哪些？可以进行哪些设置？&quot;">​</a></h3><h3 id="_29、-requestmapping-注解有什么用" tabindex="-1">29、<a href="/docs/RequestMapping.html">@RequestMapping </a> 注解有什么用？ <a class="header-anchor" href="#_29、-requestmapping-注解有什么用" aria-label="Permalink to &quot;29、[@RequestMapping ](/RequestMapping ) 注解有什么用？&quot;">​</a></h3><h3 id="_30、22。你能否给出关于休息和微服务的要点" tabindex="-1">30、22。你能否给出关于休息和微服务的要点？ <a class="header-anchor" href="#_30、22。你能否给出关于休息和微服务的要点" aria-label="Permalink to &quot;30、22。你能否给出关于休息和微服务的要点？&quot;">​</a></h3>',69),i=[n];function p(s,E,l,g,c,h){return o(),r("div",null,i)}const A=a(t,[["render",p]]);export{d as __pageData,A as default};
