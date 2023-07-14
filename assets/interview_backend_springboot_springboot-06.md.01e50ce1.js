import{_ as o,o as t,c as r,V as a}from"./chunks/framework.c6d8cbec.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/springboot/springboot-06.md","filePath":"interview/backend/springboot/springboot-06.md"}'),e={name:"interview/backend/springboot/springboot-06.md"},n=a(`<h3 id="_1、什么是-springboot-stater" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#1%E4%BB%80%E4%B9%88%E6%98%AF-springboot-stater-" target="_blank" rel="noreferrer">1、什么是 SpringBoot Stater ？</a> <a class="header-anchor" href="#_1、什么是-springboot-stater" aria-label="Permalink to &quot;[1、什么是 SpringBoot Stater ？](https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot最新面试题2021年，常见面试题及答案汇总.md#1什么是-springboot-stater-)&quot;">​</a></h3><p>启动器是一套方便的依赖没描述符，它可以放在自己的程序中。你可以一站式的获取你所需要的 Spring 和相关技术，而不需要依赖描述符的通过示例代码搜索和复制黏贴的负载。</p><p>例如，如果你想使用 Sping 和 JPA 访问数据库，只需要你的项目包含 spring-boot-starter-data-jpa 依赖项，你就可以完美进行。</p><h3 id="_2、springboot多数据源事务如何管理" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#2springboot%E5%A4%9A%E6%95%B0%E6%8D%AE%E6%BA%90%E4%BA%8B%E5%8A%A1%E5%A6%82%E4%BD%95%E7%AE%A1%E7%90%86" target="_blank" rel="noreferrer">2、SpringBoot多数据源事务如何管理</a> <a class="header-anchor" href="#_2、springboot多数据源事务如何管理" aria-label="Permalink to &quot;[2、SpringBoot多数据源事务如何管理](https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot最新面试题2021年，常见面试题及答案汇总.md#2springboot多数据源事务如何管理)&quot;">​</a></h3><p>第一种方式是在service层的@TransactionManager中使用transactionManager指定DataSourceConfig中配置的事务</p><p>第二种是使用jta-atomikos实现分布式事务管理</p><h3 id="_3、springboot-中的-starter-到底是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#3springboot-%E4%B8%AD%E7%9A%84-starter-%E5%88%B0%E5%BA%95%E6%98%AF%E4%BB%80%E4%B9%88-" target="_blank" rel="noreferrer">3、SpringBoot 中的 starter 到底是什么 ?</a> <a class="header-anchor" href="#_3、springboot-中的-starter-到底是什么" aria-label="Permalink to &quot;[3、SpringBoot 中的 starter 到底是什么 ?](https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot最新面试题2021年，常见面试题及答案汇总.md#3springboot-中的-starter-到底是什么-)&quot;">​</a></h3><p>首先，这个 Starter 并非什么新的技术点，基本上还是基于 Spring 已有功能来实现的。首先它提供了一个自动化配置类，一般命名为 XXXAutoConfiguration ，在这个配置类中通过条件注解来决定一个配置是否生效（条件注解就是 Spring 中原本就有的），然后它还会提供一系列的默认配置，也允许开发者根据实际情况自定义相关配置，然后通过类型安全的属性注入将这些配置属性注入进来，新注入的属性会代替掉默认属性。正因为如此，很多第三方框架，我们只需要引入依赖就可以直接使用了。当然，开发者也可以自定义 Starter</p><h3 id="_4、springboot-有哪几种读取配置的方式" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#4springboot-%E6%9C%89%E5%93%AA%E5%87%A0%E7%A7%8D%E8%AF%BB%E5%8F%96%E9%85%8D%E7%BD%AE%E7%9A%84%E6%96%B9%E5%BC%8F" target="_blank" rel="noreferrer">4、SpringBoot 有哪几种读取配置的方式？</a> <a class="header-anchor" href="#_4、springboot-有哪几种读取配置的方式" aria-label="Permalink to &quot;[4、SpringBoot 有哪几种读取配置的方式？](https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot最新面试题2021年，常见面试题及答案汇总.md#4springboot-有哪几种读取配置的方式)&quot;">​</a></h3><p>SpringBoot 可以通过 @PropertySource,@Value,@Environment, @ConfigurationProperties 来绑定变量</p><h3 id="_5、springboot-支持哪些日志框架-推荐和默认的日志框架是哪个" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#5springboot-%E6%94%AF%E6%8C%81%E5%93%AA%E4%BA%9B%E6%97%A5%E5%BF%97%E6%A1%86%E6%9E%B6%E6%8E%A8%E8%8D%90%E5%92%8C%E9%BB%98%E8%AE%A4%E7%9A%84%E6%97%A5%E5%BF%97%E6%A1%86%E6%9E%B6%E6%98%AF%E5%93%AA%E4%B8%AA" target="_blank" rel="noreferrer">5、SpringBoot 支持哪些日志框架？推荐和默认的日志框架是哪个？</a> <a class="header-anchor" href="#_5、springboot-支持哪些日志框架-推荐和默认的日志框架是哪个" aria-label="Permalink to &quot;[5、SpringBoot 支持哪些日志框架？推荐和默认的日志框架是哪个？](https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot最新面试题2021年，常见面试题及答案汇总.md#5springboot-支持哪些日志框架推荐和默认的日志框架是哪个)&quot;">​</a></h3><p>SpringBoot 支持 Java Util Logging, Log4j2, Lockback 作为日志框架，如果你使用 Starters 启动器，SpringBoot 将使用 Logback 作为默认日志框架.</p><h3 id="_6、spring-boot扫描流程" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#6spring-boot%E6%89%AB%E6%8F%8F%E6%B5%81%E7%A8%8B" target="_blank" rel="noreferrer">6、spring boot扫描流程?</a> <a class="header-anchor" href="#_6、spring-boot扫描流程" aria-label="Permalink to &quot;[6、spring boot扫描流程?](https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot最新面试题2021年，常见面试题及答案汇总.md#6spring-boot扫描流程)&quot;">​</a></h3><p><strong>1、</strong> 调用run方法中的<code>refreshContext</code>方法</p><p><strong>2、</strong> 用AbstractApplicationContext中的<code>refresh</code>方法</p><p><strong>3、</strong> 委托给<code>invokeBeanFactoryPostProcessors</code>去处理调用链</p><p><strong>4、</strong> 其中一个方法<code>postProcessBeanDefinitionRegistry会</code>去调用<code>processConfigBeanDefinitions</code>解析<code>beandefinitions</code></p><p><strong>5、</strong> 在<code>processConfigBeanDefinitions</code>中有一个<code>parse</code>方法，其中有<code>componentScanParser.parse</code>的方法，这个方法会扫描当前路径下所有<code>Component</code>组件</p><h3 id="_7、什么是springboot" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#7%E4%BB%80%E4%B9%88%E6%98%AFspringboot" target="_blank" rel="noreferrer">7、什么是SpringBoot？</a> <a class="header-anchor" href="#_7、什么是springboot" aria-label="Permalink to &quot;[7、什么是SpringBoot？](https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot最新面试题2021年，常见面试题及答案汇总.md#7什么是springboot)&quot;">​</a></h3><p>用来简化spring应用的初始搭建以及开发过程，使用特定的方式来进行配置（<code>properties</code>或<code>yml</code>文件）创建独立的spring引用程序 main方法运行，嵌入的Tomcat 无需部署war文件，简化maven配置，自动配置spring添加对应功能starter自动化配置</p><h3 id="_8、springboot-支持哪些日志框架-推荐和默认的日志框架是哪个" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#8springboot-%E6%94%AF%E6%8C%81%E5%93%AA%E4%BA%9B%E6%97%A5%E5%BF%97%E6%A1%86%E6%9E%B6%E6%8E%A8%E8%8D%90%E5%92%8C%E9%BB%98%E8%AE%A4%E7%9A%84%E6%97%A5%E5%BF%97%E6%A1%86%E6%9E%B6%E6%98%AF%E5%93%AA%E4%B8%AA" target="_blank" rel="noreferrer">8、SpringBoot 支持哪些日志框架？推荐和默认的日志框架是哪个？</a> <a class="header-anchor" href="#_8、springboot-支持哪些日志框架-推荐和默认的日志框架是哪个" aria-label="Permalink to &quot;[8、SpringBoot 支持哪些日志框架？推荐和默认的日志框架是哪个？](https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot最新面试题2021年，常见面试题及答案汇总.md#8springboot-支持哪些日志框架推荐和默认的日志框架是哪个)&quot;">​</a></h3><p>SpringBoot 支持 Java Util Logging, Log4j2, Lockback 作为日志框架，如果你使用 Starters 启动器，SpringBoot 将使用 Logback 作为默认日志框架，但是不管是那种日志框架他都支持将配置文件输出到控制台或者文件中。</p><h3 id="_9、如何重新加载springboot上的更改-而无需重新启动服务器" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#9%E5%A6%82%E4%BD%95%E9%87%8D%E6%96%B0%E5%8A%A0%E8%BD%BDspringboot%E4%B8%8A%E7%9A%84%E6%9B%B4%E6%94%B9%E8%80%8C%E6%97%A0%E9%9C%80%E9%87%8D%E6%96%B0%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1%E5%99%A8" target="_blank" rel="noreferrer">9、如何重新加载SpringBoot上的更改，而无需重新启动服务器？</a> <a class="header-anchor" href="#_9、如何重新加载springboot上的更改-而无需重新启动服务器" aria-label="Permalink to &quot;[9、如何重新加载SpringBoot上的更改，而无需重新启动服务器？](https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot最新面试题2021年，常见面试题及答案汇总.md#9如何重新加载springboot上的更改而无需重新启动服务器)&quot;">​</a></h3><p>这可以使用DEV工具来实现。通过这种依赖关系，您可以节省任何更改，嵌入式tomcat将重新启动。SpringBoot有一个开发工具（DevTools）模块，它有助于提高开发人员的生产力。Java开发人员面临的一个主要挑战是将文件更改自动部署到服务器并自动重启服务器。开发人员可以重新加载SpringBoot上的更改，而无需重新启动服务器。这将消除每次手动部署更改的需要。SpringBoot在发布它的第一个版本时没有这个功能。这是开发人员最需要的功能。DevTools模块完全满足开发人员的需求。该模块将在生产环境中被禁用。它还提供H2数据库控制台以更好地测试应用程序。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;artifactId&gt;spring-boot-devtools&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;optional&gt;true&lt;/optional&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;artifactId&gt;spring-boot-devtools&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;optional&gt;true&lt;/optional&gt;</span></span></code></pre></div><h3 id="_10、什么是-yaml" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#10%E4%BB%80%E4%B9%88%E6%98%AF-yaml" target="_blank" rel="noreferrer">10、什么是 YAML？</a> <a class="header-anchor" href="#_10、什么是-yaml" aria-label="Permalink to &quot;[10、什么是 YAML？](https://gitee.com/souyunku/DevBooks/blob/master/docs/SpringBoot/SpringBoot最新面试题2021年，常见面试题及答案汇总.md#10什么是-yaml)&quot;">​</a></h3><p>YAML 是一种人类可读的数据序列化语言。它通常用于配置文件。与属性文件相比，如果我们想要在配置文件中添加复杂的属性，YAML 文件就更加结构化，而且更少混淆。可以看出 YAML 具有分层配置数据。</p><h3 id="_11、为什么我们需要-spring-boot-maven-plugin" tabindex="-1">11、为什么我们需要 spring-boot-maven-plugin? <a class="header-anchor" href="#_11、为什么我们需要-spring-boot-maven-plugin" aria-label="Permalink to &quot;11、为什么我们需要 spring-boot-maven-plugin?&quot;">​</a></h3><h3 id="_12、如何使用-springboot-生成一个-war-文件" tabindex="-1">12、如何使用 SpringBoot 生成一个 WAR 文件？ <a class="header-anchor" href="#_12、如何使用-springboot-生成一个-war-文件" aria-label="Permalink to &quot;12、如何使用 SpringBoot 生成一个 WAR 文件？&quot;">​</a></h3><h3 id="_13、运行-springboot-有哪几种方式" tabindex="-1">13、运行 SpringBoot 有哪几种方式？ <a class="header-anchor" href="#_13、运行-springboot-有哪几种方式" aria-label="Permalink to &quot;13、运行 SpringBoot 有哪几种方式？&quot;">​</a></h3><h3 id="_14、jpa-和-hibernate-有哪些区别" tabindex="-1">14、JPA 和 Hibernate 有哪些区别？ <a class="header-anchor" href="#_14、jpa-和-hibernate-有哪些区别" aria-label="Permalink to &quot;14、JPA 和 Hibernate 有哪些区别？&quot;">​</a></h3><h3 id="_15、当-springboot-应用程序作为-java-应用程序运行时-后台会发生什么" tabindex="-1">15、当 SpringBoot 应用程序作为 Java 应用程序运行时，后台会发生什么？ <a class="header-anchor" href="#_15、当-springboot-应用程序作为-java-应用程序运行时-后台会发生什么" aria-label="Permalink to &quot;15、当 SpringBoot 应用程序作为 Java 应用程序运行时，后台会发生什么？&quot;">​</a></h3><h3 id="_16、你如何理解-springboot-配置加载顺序" tabindex="-1">16、你如何理解 SpringBoot 配置加载顺序？ <a class="header-anchor" href="#_16、你如何理解-springboot-配置加载顺序" aria-label="Permalink to &quot;16、你如何理解 SpringBoot 配置加载顺序？&quot;">​</a></h3><h3 id="_17、springboot-自动配置原理是什么" tabindex="-1">17、SpringBoot 自动配置原理是什么？ <a class="header-anchor" href="#_17、springboot-自动配置原理是什么" aria-label="Permalink to &quot;17、SpringBoot 自动配置原理是什么？&quot;">​</a></h3><h3 id="_18、springboot、spring-mvc-和-spring-有什么区别" tabindex="-1">18、SpringBoot、Spring MVC 和 Spring 有什么区别 <a class="header-anchor" href="#_18、springboot、spring-mvc-和-spring-有什么区别" aria-label="Permalink to &quot;18、SpringBoot、Spring MVC 和 Spring 有什么区别&quot;">​</a></h3><h3 id="_19、如何在springboot中禁用actuator端点安全性" tabindex="-1">19、如何在SpringBoot中禁用Actuator端点安全性？ <a class="header-anchor" href="#_19、如何在springboot中禁用actuator端点安全性" aria-label="Permalink to &quot;19、如何在SpringBoot中禁用Actuator端点安全性？&quot;">​</a></h3><h3 id="_20、你能否举一个以-readonly-为事务管理的例子" tabindex="-1">20、你能否举一个以 ReadOnly 为事务管理的例子？ <a class="header-anchor" href="#_20、你能否举一个以-readonly-为事务管理的例子" aria-label="Permalink to &quot;20、你能否举一个以 ReadOnly 为事务管理的例子？&quot;">​</a></h3><h3 id="_21、spring-boot监听器流程" tabindex="-1">21、spring boot监听器流程? <a class="header-anchor" href="#_21、spring-boot监听器流程" aria-label="Permalink to &quot;21、spring boot监听器流程?&quot;">​</a></h3><h3 id="_22、如何使用springboot实现分页和排序" tabindex="-1">22、如何使用SpringBoot实现分页和排序？ <a class="header-anchor" href="#_22、如何使用springboot实现分页和排序" aria-label="Permalink to &quot;22、如何使用SpringBoot实现分页和排序？&quot;">​</a></h3><h3 id="_23、springboot常用的starter有哪些" tabindex="-1">23、SpringBoot常用的starter有哪些？ <a class="header-anchor" href="#_23、springboot常用的starter有哪些" aria-label="Permalink to &quot;23、SpringBoot常用的starter有哪些？&quot;">​</a></h3><h3 id="_24、为什么我们不建议在实际的应用程序中使用-spring-data-rest" tabindex="-1">24、为什么我们不建议在实际的应用程序中使用 Spring Data Rest? <a class="header-anchor" href="#_24、为什么我们不建议在实际的应用程序中使用-spring-data-rest" aria-label="Permalink to &quot;24、为什么我们不建议在实际的应用程序中使用 Spring Data Rest?&quot;">​</a></h3><h3 id="_25、springboot支持什么前端模板" tabindex="-1">25、SpringBoot支持什么前端模板， <a class="header-anchor" href="#_25、springboot支持什么前端模板" aria-label="Permalink to &quot;25、SpringBoot支持什么前端模板，&quot;">​</a></h3><h3 id="_26、spring-boot-starter-parent-有什么用" tabindex="-1">26、spring-boot-starter-parent 有什么用 ? <a class="header-anchor" href="#_26、spring-boot-starter-parent-有什么用" aria-label="Permalink to &quot;26、spring-boot-starter-parent 有什么用 ?&quot;">​</a></h3><h3 id="_27、springboot-自动配置原理" tabindex="-1">27、SpringBoot 自动配置原理 <a class="header-anchor" href="#_27、springboot-自动配置原理" aria-label="Permalink to &quot;27、SpringBoot 自动配置原理&quot;">​</a></h3><h3 id="_28、什么是-javaconfig" tabindex="-1">28、什么是 JavaConfig？ <a class="header-anchor" href="#_28、什么是-javaconfig" aria-label="Permalink to &quot;28、什么是 JavaConfig？&quot;">​</a></h3><h3 id="_29、保护-springboot-应用有哪些方法" tabindex="-1">29、保护 SpringBoot 应用有哪些方法？ <a class="header-anchor" href="#_29、保护-springboot-应用有哪些方法" aria-label="Permalink to &quot;29、保护 SpringBoot 应用有哪些方法？&quot;">​</a></h3><h3 id="_30、什么是-spring-batch" tabindex="-1">30、什么是 Spring Batch? <a class="header-anchor" href="#_30、什么是-spring-batch" aria-label="Permalink to &quot;30、什么是 Spring Batch?&quot;">​</a></h3><h3 id="_31、spring-boot-核心配置文件是什么-bootstrap-properties-和-application-properties-有何区别" tabindex="-1">31、spring boot 核心配置文件是什么？bootstrap.properties 和 application.properties 有何区别 ? <a class="header-anchor" href="#_31、spring-boot-核心配置文件是什么-bootstrap-properties-和-application-properties-有何区别" aria-label="Permalink to &quot;31、spring boot 核心配置文件是什么？bootstrap.properties 和 application.properties 有何区别 ?&quot;">​</a></h3>`,48),i=[n];function s(p,g,E,B,l,b){return t(),r("div",null,i)}const h=o(e,[["render",s]]);export{d as __pageData,h as default};