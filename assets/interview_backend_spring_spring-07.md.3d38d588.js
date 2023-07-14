import{_ as a,o as e,c as r,V as o}from"./chunks/framework.c6d8cbec.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/spring/spring-07.md","filePath":"interview/backend/spring/spring-07.md"}'),t={name:"interview/backend/spring/spring-07.md"},n=o('<h3 id="_1、如何使用springboot实现异常处理" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C2021%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#1%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8springboot%E5%AE%9E%E7%8E%B0%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86" target="_blank" rel="noreferrer">1、如何使用SpringBoot实现异常处理？</a> <a class="header-anchor" href="#_1、如何使用springboot实现异常处理" aria-label="Permalink to &quot;[1、如何使用SpringBoot实现异常处理？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring面试题大汇总，2021面试题及答案汇总.md#1如何使用springboot实现异常处理)&quot;">​</a></h3><p>Spring提供了一种使用ControllerAdvice处理异常的非常有用的方法。 我们通过实现一个ControlerAdvice类，来处理控制器类抛出的所有异常。</p><h3 id="_2、如何在springboot中禁用actuator端点安全性" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C2021%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#2%E5%A6%82%E4%BD%95%E5%9C%A8springboot%E4%B8%AD%E7%A6%81%E7%94%A8actuator%E7%AB%AF%E7%82%B9%E5%AE%89%E5%85%A8%E6%80%A7" target="_blank" rel="noreferrer">2、如何在SpringBoot中禁用Actuator端点安全性？</a> <a class="header-anchor" href="#_2、如何在springboot中禁用actuator端点安全性" aria-label="Permalink to &quot;[2、如何在SpringBoot中禁用Actuator端点安全性？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring面试题大汇总，2021面试题及答案汇总.md#2如何在springboot中禁用actuator端点安全性)&quot;">​</a></h3><p>默认情况下，所有敏感的HTTP端点都是安全的，只有具有ACTUATOR角色的用户才能访问它们。</p><p>安全性是使用标准的HttpServletRequest.isUserInRole方法实施的。 我们可以使用management.security.enabled = false 来禁用安全性。只有在执行机构端点在防火墙后访问时，才建议禁用安全性。</p><p>如何在自定义端口上运行SpringBoot应用程序？ 为了在自定义端口上运行SpringBoot应用程序，您可以在application.properties中指定端口。 server.port = 8090</p><h3 id="_3、谈一下领域驱动设计" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C2021%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#3%E8%B0%88%E4%B8%80%E4%B8%8B%E9%A2%86%E5%9F%9F%E9%A9%B1%E5%8A%A8%E8%AE%BE%E8%AE%A1" target="_blank" rel="noreferrer">3、谈一下领域驱动设计</a> <a class="header-anchor" href="#_3、谈一下领域驱动设计" aria-label="Permalink to &quot;[3、谈一下领域驱动设计](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring面试题大汇总，2021面试题及答案汇总.md#3谈一下领域驱动设计)&quot;">​</a></h3><p>主要关注核心领域逻辑。基于领域的模型检测复杂设计。这涉及与公司层面领域方面的专家定期合作，以解决与领域相关的问题并改进应用程序的模型。在回答这个微服务面试问题时，您还需要提及DDD的核心基础知识。他们是：</p><p><strong>1、</strong> DDD主要关注领域逻辑和领域本身。</p><p><strong>2、</strong> 复杂的设计完全基于领域的模型。</p><p><strong>3、</strong> 为了改进模型的设计并解决任何新出现的问题，DDD不断与公司领域方面的专家合作。</p><h3 id="_4、什么是-apache-kafka" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C2021%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#4%E4%BB%80%E4%B9%88%E6%98%AF-apache-kafka" target="_blank" rel="noreferrer">4、什么是 Apache Kafka？</a> <a class="header-anchor" href="#_4、什么是-apache-kafka" aria-label="Permalink to &quot;[4、什么是 Apache Kafka？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring面试题大汇总，2021面试题及答案汇总.md#4什么是-apache-kafka)&quot;">​</a></h3><p>Apache Kafka 是一个分布式发布 - 订阅消息系统。它是一个可扩展的，容错的发布 - 订阅消息系统，它使我们能够构建分布式应用程序。这是一个 Apache 顶级项目。Kafka 适合离线和在线消息消费。</p><h3 id="_5、spring-cloud-sleuth" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C2021%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#5spring-cloud-sleuth" target="_blank" rel="noreferrer">5、Spring Cloud Sleuth</a> <a class="header-anchor" href="#_5、spring-cloud-sleuth" aria-label="Permalink to &quot;[5、Spring Cloud Sleuth](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring面试题大汇总，2021面试题及答案汇总.md#5spring-cloud-sleuth)&quot;">​</a></h3><p>Spring Cloud应用程序的分布式请求链路跟踪，支持使用Zipkin、HTrace和基于日志（例如ELK）的跟踪。</p><h3 id="_6、eureka和zookeeper都可以提供服务注册与发现的功能-请说说两个的区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C2021%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#6eureka%E5%92%8Czookeeper%E9%83%BD%E5%8F%AF%E4%BB%A5%E6%8F%90%E4%BE%9B%E6%9C%8D%E5%8A%A1%E6%B3%A8%E5%86%8C%E4%B8%8E%E5%8F%91%E7%8E%B0%E7%9A%84%E5%8A%9F%E8%83%BD,%E8%AF%B7%E8%AF%B4%E8%AF%B4%E4%B8%A4%E4%B8%AA%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">6、Eureka和ZooKeeper都可以提供服务注册与发现的功能,请说说两个的区别</a> <a class="header-anchor" href="#_6、eureka和zookeeper都可以提供服务注册与发现的功能-请说说两个的区别" aria-label="Permalink to &quot;[6、Eureka和ZooKeeper都可以提供服务注册与发现的功能,请说说两个的区别](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring面试题大汇总，2021面试题及答案汇总.md#6eureka和zookeeper都可以提供服务注册与发现的功能,请说说两个的区别)&quot;">​</a></h3><p>ZooKeeper保证的是CP,Eureka保证的是AP，ZooKeeper在选举期间注册服务瘫痪,虽然服务最终会恢复,但是选举期间不可用的。Eureka各个节点是平等关系,只要有一台Eureka就可以保证服务可用,而查询到的数据并不是最新的自我保护机制会导致Eureka不再从注册列表移除因长时间没收到心跳而应该过期的服务。Eureka仍然能够接受新服务的注册和查询请求,但是不会被同步到其他节点(高可用)。当网络稳定时,当前实例新的注册信息会被同步到其他节点中(最终一致性)。Eureka可以很好的应对因网络故障导致部分节点失去联系的情况,而不会像ZooKeeper一样使得整个注册系统瘫痪。</p><p><strong>1、</strong> ZooKeeper有Leader和Follower角色,Eureka各个节点平等</p><p><strong>2、</strong> ZooKeeper采用过半数存活原则,Eureka采用自我保护机制解决分区问题</p><p><strong>3、</strong> Eureka本质上是一个工程,而ZooKeeper只是一个进程</p><h3 id="_7、spring-cloud抛弃了dubbo-的rpc通信-采用的是基于http的rest方式。" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C2021%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#7spring-cloud%E6%8A%9B%E5%BC%83%E4%BA%86dubbo-%E7%9A%84rpc%E9%80%9A%E4%BF%A1%E9%87%87%E7%94%A8%E7%9A%84%E6%98%AF%E5%9F%BA%E4%BA%8Ehttp%E7%9A%84rest%E6%96%B9%E5%BC%8F%E3%80%82" target="_blank" rel="noreferrer">7、Spring Cloud抛弃了Dubbo 的RPC通信，采用的是基于HTTP的REST方式。</a> <a class="header-anchor" href="#_7、spring-cloud抛弃了dubbo-的rpc通信-采用的是基于http的rest方式。" aria-label="Permalink to &quot;[7、Spring Cloud抛弃了Dubbo 的RPC通信，采用的是基于HTTP的REST方式。](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring面试题大汇总，2021面试题及答案汇总.md#7spring-cloud抛弃了dubbo-的rpc通信采用的是基于http的rest方式。)&quot;">​</a></h3><p>严格来说，这两种方式各有优劣。虽然在一定程度上来说，后者牺牲了服务调用的性能，但也避免了上面提到的原生RPC带来的问题。而且REST相比RPC更为灵活，服务提供方和调用方的依赖只依靠一纸契约，不存在代码级别的强依赖，这在强调快速演化的微服务环境下，显得更为合适。</p><h3 id="_8、什么是-javaconfig" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C2021%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#8%E4%BB%80%E4%B9%88%E6%98%AF-javaconfig" target="_blank" rel="noreferrer">8、什么是 JavaConfig？</a> <a class="header-anchor" href="#_8、什么是-javaconfig" aria-label="Permalink to &quot;[8、什么是 JavaConfig？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring面试题大汇总，2021面试题及答案汇总.md#8什么是-javaconfig)&quot;">​</a></h3><p><strong>1、</strong> <code>面向对象的配置</code>。由于配置被定义为 JavaConfig 中的类，因此用户可以充分利用 Java 中的面向对象功能。一个配置类可以继承另一个，重写它的<a href="/docs/Bean.html">@Bean </a> 方法等。</p><p><strong>2、</strong> <code>减少或消除 XML 配置</code>。基于依赖注入原则的外化配置的好处已被证明。但是，许多开发人员不希望在 XML 和 Java 之间来回切换。JavaConfig 为开发人员提供了一种纯 Java 方法来配置与 XML 配置概念相似的 Spring 容器。从技术角度来讲，只使用 JavaConfig 配置类来配置容器是可行的，但实际上很多人认为将JavaConfig 与 XML 混合匹配是理想的。</p><p><strong>3、</strong> <code>类型安全和重构友好</code>。JavaConfig 提供了一种类型安全的方法来配置 Spring容器。由于 Java 5.0 对泛型的支持，现在可以按类型而不是按名称检索 bean，不需要任何强制转换或基于字符串的查找。</p><h3 id="_9、使用spring框架的好处是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C2021%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#9%E4%BD%BF%E7%94%A8spring%E6%A1%86%E6%9E%B6%E7%9A%84%E5%A5%BD%E5%A4%84%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">9、使用Spring框架的好处是什么？</a> <a class="header-anchor" href="#_9、使用spring框架的好处是什么" aria-label="Permalink to &quot;[9、使用Spring框架的好处是什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring面试题大汇总，2021面试题及答案汇总.md#9使用spring框架的好处是什么)&quot;">​</a></h3><p>**轻量：**Spring 是轻量的，基本的版本大约2MB。</p><p>控制反转：Spring通过控制反转实现了松散耦合，对象们给出它们的依赖，而不是创建或查找依赖的对象们。</p><p>面向切面的编程(AOP)：Spring支持面向切面的编程，并且把应用业务逻辑和系统服务分开。</p><p>**容器：**Spring 包含并管理应用中对象的生命周期和配置。</p><p>**MVC框架：**Spring的WEB框架是个精心设计的框架，是Web框架的一个很好的替代品。</p><p>**事务管理：**Spring 提供一个持续的事务管理接口，可以扩展到上至本地事务下至全局事务（JTA）。</p><p>**异常处理：**Spring 提供方便的API把具体技术相关的异常（比如由JDBC，Hibernate or JDO抛出的）转化为一致的unchecked 异常。</p><h3 id="_10、springboot-提供了哪些核心功能" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C2021%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#10springboot-%E6%8F%90%E4%BE%9B%E4%BA%86%E5%93%AA%E4%BA%9B%E6%A0%B8%E5%BF%83%E5%8A%9F%E8%83%BD" target="_blank" rel="noreferrer">10、SpringBoot 提供了哪些核心功能？</a> <a class="header-anchor" href="#_10、springboot-提供了哪些核心功能" aria-label="Permalink to &quot;[10、SpringBoot 提供了哪些核心功能？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring面试题大汇总，2021面试题及答案汇总.md#10springboot-提供了哪些核心功能)&quot;">​</a></h3><p><strong>1、</strong> 独立运行 Spring 项目</p><p><strong>2、</strong> 内嵌 Servlet 容器</p><p>SpringBoot 可以选择内嵌 Tomcat、Jetty 或者 Undertow，这样我们无须以 war 包形式部署项目。</p><p><strong>3、</strong> 提供 Starter 简化 Maven 配置</p><p>例如，当你使用了 spring-boot-starter-web ，会自动加入如下依赖：<code>spring-boot-starter-web</code> 的 pom 文件</p><p><strong>4、</strong> 自动配置 Spring Bean</p><p>SpringBoot 检测到特定类的存在，就会针对这个应用做一定的配置，进行自动配置 Bean ，这样会极大地减少我们要使用的配置。</p><p><strong>5、</strong> 准生产的应用监控</p><p>SpringBoot 提供基于 HTTP、JMX、SSH 对运行时的项目进行监控。</p><p><strong>6、</strong> 无代码生成和 XML 配置</p><p>SpringBoot 没有引入任何形式的代码生成，它是使用的 Spring 4.0 的条件 <a href="/docs/Condition.html">@Condition </a> 注解以实现根据条件进行配置。同时使用了 Maven /Gradle 的依赖传递解析机制来实现 Spring 应用里面的自动配置。</p><h3 id="_11、什么是-aop-切点" tabindex="-1">11、什么是 AOP 切点 <a class="header-anchor" href="#_11、什么是-aop-切点" aria-label="Permalink to &quot;11、什么是 AOP 切点&quot;">​</a></h3><h3 id="_12、什么是-spring-data-rest" tabindex="-1">12、什么是 Spring Data REST? <a class="header-anchor" href="#_12、什么是-spring-data-rest" aria-label="Permalink to &quot;12、什么是 Spring Data REST?&quot;">​</a></h3><h3 id="_13、什么是金丝雀释放" tabindex="-1">13、什么是金丝雀释放？ <a class="header-anchor" href="#_13、什么是金丝雀释放" aria-label="Permalink to &quot;13、什么是金丝雀释放？&quot;">​</a></h3><h3 id="_14、第二层缓存" tabindex="-1">14、第二层缓存： <a class="header-anchor" href="#_14、第二层缓存" aria-label="Permalink to &quot;14、第二层缓存：&quot;">​</a></h3><h3 id="_15、列举-ioc-的一些好处。" tabindex="-1">15、列举 IoC 的一些好处。 <a class="header-anchor" href="#_15、列举-ioc-的一些好处。" aria-label="Permalink to &quot;15、列举 IoC 的一些好处。&quot;">​</a></h3><h3 id="_16、合同测试你懂什么" tabindex="-1">16、合同测试你懂什么？ <a class="header-anchor" href="#_16、合同测试你懂什么" aria-label="Permalink to &quot;16、合同测试你懂什么？&quot;">​</a></h3><h3 id="_17、yaml-配置的优势在哪里" tabindex="-1">17、YAML 配置的优势在哪里 ? <a class="header-anchor" href="#_17、yaml-配置的优势在哪里" aria-label="Permalink to &quot;17、YAML 配置的优势在哪里 ?&quot;">​</a></h3><h3 id="_18、比较一下-spring-security-和-shiro-各自的优缺点" tabindex="-1">18、比较一下 Spring Security 和 Shiro 各自的优缺点 ? <a class="header-anchor" href="#_18、比较一下-spring-security-和-shiro-各自的优缺点" aria-label="Permalink to &quot;18、比较一下 Spring Security 和 Shiro 各自的优缺点 ?&quot;">​</a></h3><h3 id="_19、可以在springboot-application中禁用默认的web服务器吗" tabindex="-1">19、可以在SpringBoot application中禁用默认的Web服务器吗？ <a class="header-anchor" href="#_19、可以在springboot-application中禁用默认的web服务器吗" aria-label="Permalink to &quot;19、可以在SpringBoot application中禁用默认的Web服务器吗？&quot;">​</a></h3><h3 id="_20、如何设计一套api接口" tabindex="-1">20、如何设计一套API接口 <a class="header-anchor" href="#_20、如何设计一套api接口" aria-label="Permalink to &quot;20、如何设计一套API接口&quot;">​</a></h3><h3 id="_21、微服务之间是如何独立通讯的" tabindex="-1">21、微服务之间是如何独立通讯的? <a class="header-anchor" href="#_21、微服务之间是如何独立通讯的" aria-label="Permalink to &quot;21、微服务之间是如何独立通讯的?&quot;">​</a></h3><h3 id="_22、怎样开启注解装配" tabindex="-1">22、怎样开启注解装配？ <a class="header-anchor" href="#_22、怎样开启注解装配" aria-label="Permalink to &quot;22、怎样开启注解装配？&quot;">​</a></h3><h3 id="_23、eureka缓存机制" tabindex="-1">23、eureka缓存机制： <a class="header-anchor" href="#_23、eureka缓存机制" aria-label="Permalink to &quot;23、eureka缓存机制：&quot;">​</a></h3><h3 id="_24、spring-cloud-sleuth" tabindex="-1">24、Spring Cloud Sleuth <a class="header-anchor" href="#_24、spring-cloud-sleuth" aria-label="Permalink to &quot;24、Spring Cloud Sleuth&quot;">​</a></h3><h3 id="_25、spring-jdbc-api-中存在哪些类" tabindex="-1">25、spring JDBC API 中存在哪些类？ <a class="header-anchor" href="#_25、spring-jdbc-api-中存在哪些类" aria-label="Permalink to &quot;25、spring JDBC API 中存在哪些类？&quot;">​</a></h3><h3 id="_26、spring-mvc的控制器是不是单例模式-如果是-有什么问题-怎么解决" tabindex="-1">26、Spring MVC的控制器是不是单例模式,如果是,有什么问题,怎么解决？ <a class="header-anchor" href="#_26、spring-mvc的控制器是不是单例模式-如果是-有什么问题-怎么解决" aria-label="Permalink to &quot;26、Spring MVC的控制器是不是单例模式,如果是,有什么问题,怎么解决？&quot;">​</a></h3><h3 id="_27、自动装配有什么局限" tabindex="-1">27、自动装配有什么局限？ <a class="header-anchor" href="#_27、自动装配有什么局限" aria-label="Permalink to &quot;27、自动装配有什么局限？&quot;">​</a></h3><h3 id="_28、eureka和zookeeper都可以提供服务注册与发现的功能-请说说两个的区别" tabindex="-1">28、eureka和zookeeper都可以提供服务注册与发现的功能，请说说两个的区别？ <a class="header-anchor" href="#_28、eureka和zookeeper都可以提供服务注册与发现的功能-请说说两个的区别" aria-label="Permalink to &quot;28、eureka和zookeeper都可以提供服务注册与发现的功能，请说说两个的区别？&quot;">​</a></h3><h3 id="_29、是否可以在springboot中覆盖或替换嵌入式tomcat" tabindex="-1">29、是否可以在SpringBoot中覆盖或替换嵌入式Tomcat？ <a class="header-anchor" href="#_29、是否可以在springboot中覆盖或替换嵌入式tomcat" aria-label="Permalink to &quot;29、是否可以在SpringBoot中覆盖或替换嵌入式Tomcat？&quot;">​</a></h3><h3 id="_30、spring-中有多少种-ioc-容器" tabindex="-1">30、spring 中有多少种 IOC 容器？ <a class="header-anchor" href="#_30、spring-中有多少种-ioc-容器" aria-label="Permalink to &quot;30、spring 中有多少种 IOC 容器？&quot;">​</a></h3>',66),i=[n];function p(s,E,h,l,g,A){return e(),r("div",null,i)}const d=a(t,[["render",p]]);export{c as __pageData,d as default};
