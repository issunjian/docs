import{_ as o,o as a,c as r,V as t}from"./chunks/framework.c6d8cbec.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/springboot/springboot-05.md","filePath":"interview/backend/springboot/springboot-05.md"}'),e={name:"interview/backend/springboot/springboot-05.md"},n=t('<h3 id="_1、什么是-javaconfig" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#1%E4%BB%80%E4%B9%88%E6%98%AF-javaconfig" target="_blank" rel="noreferrer">1、什么是 JavaConfig？</a> <a class="header-anchor" href="#_1、什么是-javaconfig" aria-label="Permalink to &quot;[1、什么是 JavaConfig？](https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot最新面试题，2021年面试题及答案汇总.md#1什么是-javaconfig)&quot;">​</a></h3><p><strong>1、</strong> <code>面向对象的配置</code>。由于配置被定义为 JavaConfig 中的类，因此用户可以充分利用 Java 中的面向对象功能。一个配置类可以继承另一个，重写它的<a href="/docs/Bean.html">@Bean </a> 方法等。</p><p><strong>2、</strong> <code>减少或消除 XML 配置</code>。基于依赖注入原则的外化配置的好处已被证明。但是，许多开发人员不希望在 XML 和 Java 之间来回切换。JavaConfig 为开发人员提供了一种纯 Java 方法来配置与 XML 配置概念相似的 Spring 容器。从技术角度来讲，只使用 JavaConfig 配置类来配置容器是可行的，但实际上很多人认为将JavaConfig 与 XML 混合匹配是理想的。</p><p><strong>3、</strong> <code>类型安全和重构友好</code>。JavaConfig 提供了一种类型安全的方法来配置 Spring容器。由于 Java 5.0 对泛型的支持，现在可以按类型而不是按名称检索 bean，不需要任何强制转换或基于字符串的查找。</p><h3 id="_2、springboot多数据源拆分的思路" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#2springboot%E5%A4%9A%E6%95%B0%E6%8D%AE%E6%BA%90%E6%8B%86%E5%88%86%E7%9A%84%E6%80%9D%E8%B7%AF" target="_blank" rel="noreferrer">2、SpringBoot多数据源拆分的思路</a> <a class="header-anchor" href="#_2、springboot多数据源拆分的思路" aria-label="Permalink to &quot;[2、SpringBoot多数据源拆分的思路](https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot最新面试题，2021年面试题及答案汇总.md#2springboot多数据源拆分的思路)&quot;">​</a></h3><p>先在properties配置文件中配置两个数据源，创建分包mapper，使用@ConfigurationProperties读取properties中的配置，使用@MapperScan注册到对应的mapper包中</p><h3 id="_3、前后端分离-如何维护接口文档" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#3%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB%E5%A6%82%E4%BD%95%E7%BB%B4%E6%8A%A4%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3-" target="_blank" rel="noreferrer">3、前后端分离，如何维护接口文档 ?</a> <a class="header-anchor" href="#_3、前后端分离-如何维护接口文档" aria-label="Permalink to &quot;[3、前后端分离，如何维护接口文档 ?](https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot最新面试题，2021年面试题及答案汇总.md#3前后端分离如何维护接口文档-)&quot;">​</a></h3><p>前后端分离开发日益流行，大部分情况下，我们都是通过 SpringBoot 做前后端分离开发，前后端分离一定会有接口文档，不然会前后端会深深陷入到扯皮中。一个比较笨的方法就是使用 word 或者 md 来维护接口文档，但是效率太低，接口一变，所有人手上的文档都得变。在 SpringBoot 中，这个问题常见的解决方案是 Swagger ，使用 Swagger 我们可以快速生成一个接口文档网站，接口一旦发生变化，文档就会自动更新，所有开发工程师访问这一个在线网站就可以获取到最新的接口文档，非常方便。</p><h3 id="_4、什么是-spring-data" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#4%E4%BB%80%E4%B9%88%E6%98%AF-spring-data" target="_blank" rel="noreferrer">4、什么是 Spring Data？</a> <a class="header-anchor" href="#_4、什么是-spring-data" aria-label="Permalink to &quot;[4、什么是 Spring Data？](https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot最新面试题，2021年面试题及答案汇总.md#4什么是-spring-data)&quot;">​</a></h3><p>来自：<a href="/docs/projects.spring.io/spring-.html">//projects.spring.io/spring-</a> data/</p><p>Spring Data 的使命是在保证底层数据存储特殊性的前提下，为数据访问提供一个熟悉的，一致性的，基于 Spring 的编程模型。这使得使用数据访问技术，关系数据库和非关系数据库，map-reduce 框架以及基于云的数据服务变得很容易。</p><p>为了让它更简单一些，Spring Data 提供了不受底层数据源限制的 Abstractions 接口。</p><p>你可以定义一简单的库，用来插入，更新，删除和检索代办事项，而不需要编写大量的代码。</p><h3 id="_5、什么是-springboot" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#5%E4%BB%80%E4%B9%88%E6%98%AF-springboot" target="_blank" rel="noreferrer">5、什么是 SpringBoot？</a> <a class="header-anchor" href="#_5、什么是-springboot" aria-label="Permalink to &quot;[5、什么是 SpringBoot？](https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot最新面试题，2021年面试题及答案汇总.md#5什么是-springboot)&quot;">​</a></h3><p>SpringBoot 是 Spring 开源组织下的子项目，是 Spring 组件一站式解决方案，主要是简化了使用 Spring 的难度，简省了繁重的配置，提供了各种启动器，使开发者能快速上手。</p><h3 id="_6、springboot如何实现打包" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#6springboot%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E6%89%93%E5%8C%85" target="_blank" rel="noreferrer">6、SpringBoot如何实现打包</a> <a class="header-anchor" href="#_6、springboot如何实现打包" aria-label="Permalink to &quot;[6、SpringBoot如何实现打包](https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot最新面试题，2021年面试题及答案汇总.md#6springboot如何实现打包)&quot;">​</a></h3><p>进入项目目录在控制台输入mvn clean package，clean是清空已存在的项目包，package进行打包</p><p>或者点击左边选项栏中的Mavne，先点击clean在点击package</p><h3 id="_7、spring、springboot、springmvc的区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#7springspringbootspringmvc%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">7、Spring、SpringBoot、SpringMVC的区别？</a> <a class="header-anchor" href="#_7、spring、springboot、springmvc的区别" aria-label="Permalink to &quot;[7、Spring、SpringBoot、SpringMVC的区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot最新面试题，2021年面试题及答案汇总.md#7springspringbootspringmvc的区别)&quot;">​</a></h3><p><strong>1、</strong> Spring框架就像一个家族，有众多衍生产品，例如boot、mvc、jpa等等。但他们的基础都是Spring的ioc、aop。ioc提供了依赖注入的容器，aop解决了面向横切面编程，然后在此两者的基础上实现了其它延伸产品的高级功能；</p><p><strong>2、</strong> springMVC是基于Servlet的一个MVC框架主要解决WEB开发的问题；</p><p><strong>3、</strong> 为了简化开发的使用，从而创造性地推出了SpringBoot框架，默认优于配置</p><h3 id="_8、你如何理解-springboot-中的-starters" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#8%E4%BD%A0%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3-springboot-%E4%B8%AD%E7%9A%84-starters" target="_blank" rel="noreferrer">8、你如何理解 SpringBoot 中的 Starters？</a> <a class="header-anchor" href="#_8、你如何理解-springboot-中的-starters" aria-label="Permalink to &quot;[8、你如何理解 SpringBoot 中的 Starters？](https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot最新面试题，2021年面试题及答案汇总.md#8你如何理解-springboot-中的-starters)&quot;">​</a></h3><p>Starters可以理解为启动器，它包含了一系列可以集成到应用里面的依赖包，你可以一站式集成 Spring 及其他技术，而不需要到处找示例代码和依赖包。如你想使用 Spring JPA 访问数据库，只要加入 spring-boot-starter-data-jpa 启动器依赖就能使用了。</p><h3 id="_9、您使用了哪些-starter-maven-依赖项" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#9%E6%82%A8%E4%BD%BF%E7%94%A8%E4%BA%86%E5%93%AA%E4%BA%9B-starter-maven-%E4%BE%9D%E8%B5%96%E9%A1%B9" target="_blank" rel="noreferrer">9、您使用了哪些 starter maven 依赖项？</a> <a class="header-anchor" href="#_9、您使用了哪些-starter-maven-依赖项" aria-label="Permalink to &quot;[9、您使用了哪些 starter maven 依赖项？](https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot最新面试题，2021年面试题及答案汇总.md#9您使用了哪些-starter-maven-依赖项)&quot;">​</a></h3><p><strong>使用了下面的一些依赖项</strong></p><p><strong>1、</strong> spring-boot-starter-web 嵌入tomcat和web开发需要servlet与jsp支持</p><p><strong>2、</strong> spring-boot-starter-data-jpa 数据库支持</p><p><strong>3、</strong> spring-boot-starter-data-Redis Redis数据库支持</p><p><strong>4、</strong> spring-boot-starter-data-solr solr支持</p><p><strong>5、</strong> mybatis-spring-boot-starter 第三方的mybatis集成starter</p><p>自定义的starter(如果自己开发过就可以说出来)</p><h3 id="_10、什么是-javaconfig" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#10%E4%BB%80%E4%B9%88%E6%98%AF-javaconfig" target="_blank" rel="noreferrer">10、什么是 JavaConfig？</a> <a class="header-anchor" href="#_10、什么是-javaconfig" aria-label="Permalink to &quot;[10、什么是 JavaConfig？](https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot最新面试题，2021年面试题及答案汇总.md#10什么是-javaconfig)&quot;">​</a></h3><p>Spring JavaConfig 是 Spring 社区的产品，它提供了配置 Spring IoC 容器的纯Java 方法。因此它有助于避免使用 XML 配置。使用 JavaConfig 的优点在于：</p><p><strong>1、</strong> 面向对象的配置。由于配置被定义为 JavaConfig 中的类，因此用户可以充分利用 Java 中的面向对象功能。一个配置类可以继承另一个，重写它的<a href="/docs/Bean.html">@Bean </a> 方法等。</p><p><strong>2、</strong> 减少或消除 XML 配置。基于依赖注入原则的外化配置的好处已被证明。但是，许多开发人员不希望在 XML 和 Java 之间来回切换。JavaConfig 为开发人员提供了一种纯 Java 方法来配置与 XML 配置概念相似的 Spring 容器。从技术角度来讲，只使用 JavaConfig 配置类来配置容器是可行的，但实际上很多人认为将JavaConfig 与 XML 混合匹配是理想的。</p><p><strong>3、</strong> 类型安全和重构友好。JavaConfig 提供了一种类型安全的方法来配置 Spring容器。由于 Java 5.0 对泛型的支持，现在可以按类型而不是按名称检索 bean，不需要任何强制转换或基于字符串的查找。</p><h3 id="_11、springboot有哪些优点" tabindex="-1">11、SpringBoot有哪些优点？ <a class="header-anchor" href="#_11、springboot有哪些优点" aria-label="Permalink to &quot;11、SpringBoot有哪些优点？&quot;">​</a></h3><h3 id="_12、什么是-apache-kafka" tabindex="-1">12、什么是 Apache Kafka？ <a class="header-anchor" href="#_12、什么是-apache-kafka" aria-label="Permalink to &quot;12、什么是 Apache Kafka？&quot;">​</a></h3><h3 id="_13、我们如何监视所有-springboot-微服务" tabindex="-1">13、我们如何监视所有 SpringBoot 微服务？ <a class="header-anchor" href="#_13、我们如何监视所有-springboot-微服务" aria-label="Permalink to &quot;13、我们如何监视所有 SpringBoot 微服务？&quot;">​</a></h3><h3 id="_14、如何使用-springboot-实现异常处理" tabindex="-1">14、如何使用 SpringBoot 实现异常处理？ <a class="header-anchor" href="#_14、如何使用-springboot-实现异常处理" aria-label="Permalink to &quot;14、如何使用 SpringBoot 实现异常处理？&quot;">​</a></h3><h3 id="_15、什么是starter" tabindex="-1">15、什么是starter? <a class="header-anchor" href="#_15、什么是starter" aria-label="Permalink to &quot;15、什么是starter?&quot;">​</a></h3><h3 id="_16、什么是swagger-你用springboot实现了它吗" tabindex="-1">16、什么是Swagger？你用SpringBoot实现了它吗？ <a class="header-anchor" href="#_16、什么是swagger-你用springboot实现了它吗" aria-label="Permalink to &quot;16、什么是Swagger？你用SpringBoot实现了它吗？&quot;">​</a></h3><h3 id="_17、如何不通过任何配置来选择-hibernate-作为-jpa-的默认实现" tabindex="-1">17、如何不通过任何配置来选择 Hibernate 作为 JPA 的默认实现？ <a class="header-anchor" href="#_17、如何不通过任何配置来选择-hibernate-作为-jpa-的默认实现" aria-label="Permalink to &quot;17、如何不通过任何配置来选择 Hibernate 作为 JPA 的默认实现？&quot;">​</a></h3><h3 id="_18、springboot-中如何实现定时任务" tabindex="-1">18、SpringBoot 中如何实现定时任务 ? <a class="header-anchor" href="#_18、springboot-中如何实现定时任务" aria-label="Permalink to &quot;18、SpringBoot 中如何实现定时任务 ?&quot;">​</a></h3><h3 id="_19、开启-springboot-特性有哪几种方式" tabindex="-1">19、开启 SpringBoot 特性有哪几种方式？ <a class="header-anchor" href="#_19、开启-springboot-特性有哪几种方式" aria-label="Permalink to &quot;19、开启 SpringBoot 特性有哪几种方式？&quot;">​</a></h3><h3 id="_20、各服务之间通信-对restful和rpc这2种方式如何做选择" tabindex="-1">20、各服务之间通信，对Restful和Rpc这2种方式如何做选择？ <a class="header-anchor" href="#_20、各服务之间通信-对restful和rpc这2种方式如何做选择" aria-label="Permalink to &quot;20、各服务之间通信，对Restful和Rpc这2种方式如何做选择？&quot;">​</a></h3><h3 id="_21、-springbootapplication注释在内部有什么用处" tabindex="-1">21、@SpringBootApplication注释在内部有什么用处? <a class="header-anchor" href="#_21、-springbootapplication注释在内部有什么用处" aria-label="Permalink to &quot;21、@SpringBootApplication注释在内部有什么用处?&quot;">​</a></h3><h3 id="_22、springboot中的监视器是什么" tabindex="-1">22、SpringBoot中的监视器是什么？ <a class="header-anchor" href="#_22、springboot中的监视器是什么" aria-label="Permalink to &quot;22、SpringBoot中的监视器是什么？&quot;">​</a></h3><h3 id="_23、运行-springboot-有哪几种方式" tabindex="-1">23、运行 SpringBoot 有哪几种方式？ <a class="header-anchor" href="#_23、运行-springboot-有哪几种方式" aria-label="Permalink to &quot;23、运行 SpringBoot 有哪几种方式？&quot;">​</a></h3><h3 id="_24、什么是自动配置" tabindex="-1">24、什么是自动配置？ <a class="header-anchor" href="#_24、什么是自动配置" aria-label="Permalink to &quot;24、什么是自动配置？&quot;">​</a></h3><h3 id="_25、您使用了哪些-starter-maven-依赖项" tabindex="-1">25、您使用了哪些 starter maven 依赖项？ <a class="header-anchor" href="#_25、您使用了哪些-starter-maven-依赖项" aria-label="Permalink to &quot;25、您使用了哪些 starter maven 依赖项？&quot;">​</a></h3><h3 id="_26、springboot-打成的-jar-和普通的-jar-有什么区别" tabindex="-1">26、SpringBoot 打成的 jar 和普通的 jar 有什么区别 ? <a class="header-anchor" href="#_26、springboot-打成的-jar-和普通的-jar-有什么区别" aria-label="Permalink to &quot;26、SpringBoot 打成的 jar 和普通的 jar 有什么区别 ?&quot;">​</a></h3><h3 id="_27、springboot-的核心配置文件有哪几个-它们的区别是什么" tabindex="-1">27、SpringBoot 的核心配置文件有哪几个？它们的区别是什么？ <a class="header-anchor" href="#_27、springboot-的核心配置文件有哪几个-它们的区别是什么" aria-label="Permalink to &quot;27、SpringBoot 的核心配置文件有哪几个？它们的区别是什么？&quot;">​</a></h3><h3 id="_28、springboot-实现热部署有哪几种方式" tabindex="-1">28、SpringBoot 实现热部署有哪几种方式？ <a class="header-anchor" href="#_28、springboot-实现热部署有哪几种方式" aria-label="Permalink to &quot;28、SpringBoot 实现热部署有哪几种方式？&quot;">​</a></h3><h3 id="_29、springboot常用的starter有哪些" tabindex="-1">29、SpringBoot常用的starter有哪些? <a class="header-anchor" href="#_29、springboot常用的starter有哪些" aria-label="Permalink to &quot;29、SpringBoot常用的starter有哪些?&quot;">​</a></h3><h3 id="_30、springboot-的核心配置文件有哪几个-它们的区别是什么" tabindex="-1">30、SpringBoot 的核心配置文件有哪几个？它们的区别是什么？ <a class="header-anchor" href="#_30、springboot-的核心配置文件有哪几个-它们的区别是什么" aria-label="Permalink to &quot;30、SpringBoot 的核心配置文件有哪几个？它们的区别是什么？&quot;">​</a></h3><h3 id="_31、为什么我们需要-spring-boot-maven-plugin" tabindex="-1">31、为什么我们需要 spring-boot-maven-plugin? <a class="header-anchor" href="#_31、为什么我们需要-spring-boot-maven-plugin" aria-label="Permalink to &quot;31、为什么我们需要 spring-boot-maven-plugin?&quot;">​</a></h3>',58),i=[n];function s(p,g,E,B,h,l){return a(),r("div",null,i)}const d=o(e,[["render",s]]);export{c as __pageData,d as default};