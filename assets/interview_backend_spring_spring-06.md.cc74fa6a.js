import{_ as e,o,c as r,V as a}from"./chunks/framework.c6d8cbec.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/spring/spring-06.md","filePath":"interview/backend/spring/spring-06.md"}'),n={name:"interview/backend/spring/spring-06.md"},t=a(`<h3 id="_1、如何给静态变量赋值" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E6%95%B4%E7%90%86%E5%8F%8A%E7%AD%94%E6%A1%88.md#1%E5%A6%82%E4%BD%95%E7%BB%99%E9%9D%99%E6%80%81%E5%8F%98%E9%87%8F%E8%B5%8B%E5%80%BC" target="_blank" rel="noreferrer">1、如何给静态变量赋值？</a> <a class="header-anchor" href="#_1、如何给静态变量赋值" aria-label="Permalink to &quot;[1、如何给静态变量赋值？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring高级面试题整理及答案.md#1如何给静态变量赋值)&quot;">​</a></h3><p>SpringBoot无法通过@Value给静态变量赋值</p><p>此时需要给当前类加@Component注解，通过set方法设置@Value注解加载set方法上，set方法的参数可以任意命名，不能同属性名，此后当前工具类下的静态方法可直接使用属性值。</p><h3 id="_2、如何重新加载-springboot-上的更改-而无需重新启动服务器-springboot项目如何热部署" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E6%95%B4%E7%90%86%E5%8F%8A%E7%AD%94%E6%A1%88.md#2%E5%A6%82%E4%BD%95%E9%87%8D%E6%96%B0%E5%8A%A0%E8%BD%BD-springboot-%E4%B8%8A%E7%9A%84%E6%9B%B4%E6%94%B9%E8%80%8C%E6%97%A0%E9%9C%80%E9%87%8D%E6%96%B0%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1%E5%99%A8springboot%E9%A1%B9%E7%9B%AE%E5%A6%82%E4%BD%95%E7%83%AD%E9%83%A8%E7%BD%B2" target="_blank" rel="noreferrer">2、如何重新加载 SpringBoot 上的更改，而无需重新启动服务器？SpringBoot项目如何热部署？</a> <a class="header-anchor" href="#_2、如何重新加载-springboot-上的更改-而无需重新启动服务器-springboot项目如何热部署" aria-label="Permalink to &quot;[2、如何重新加载 SpringBoot 上的更改，而无需重新启动服务器？SpringBoot项目如何热部署？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring高级面试题整理及答案.md#2如何重新加载-springboot-上的更改而无需重新启动服务器springboot项目如何热部署)&quot;">​</a></h3><p>这可以使用 DEV 工具来实现。通过这种依赖关系，您可以节省任何更改，嵌入式tomcat 将重新启动。SpringBoot 有一个开发工具（DevTools）模块，它有助于提高开发人员的生产力。Java 开发人员面临的一个主要挑战是将文件更改自动部署到服务器并自动重启服务器。开发人员可以重新加载 SpringBoot 上的更改，而无需重新启动服务器。这将消除每次手动部署更改的需要。SpringBoot 在发布它的第一个版本时没有这个功能。这是开发人员最需要的功能。DevTools 模块完全满足开发人员的需求。该模块将在生产环境中被禁用。它还提供 H2 数据库控制台以更好地测试应用程序。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;groupId&gt;org、springframework、boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;artifactId&gt;spring-boot-devtools&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;groupId&gt;org、springframework、boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;artifactId&gt;spring-boot-devtools&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><h3 id="_3、spring-bean-容器的生命周期是什么样的" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E6%95%B4%E7%90%86%E5%8F%8A%E7%AD%94%E6%A1%88.md#3spring-bean-%E5%AE%B9%E5%99%A8%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%98%AF%E4%BB%80%E4%B9%88%E6%A0%B7%E7%9A%84" target="_blank" rel="noreferrer">3、spring bean 容器的生命周期是什么样的？</a> <a class="header-anchor" href="#_3、spring-bean-容器的生命周期是什么样的" aria-label="Permalink to &quot;[3、spring bean 容器的生命周期是什么样的？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring高级面试题整理及答案.md#3spring-bean-容器的生命周期是什么样的)&quot;">​</a></h3><p><strong>1、</strong> spring bean 容器的生命周期流程如下：</p><p><strong>2、</strong> Spring 容器根据配置中的 bean 定义中实例化 bean。</p><p><strong>3、</strong> Spring 使用依赖注入填充所有属性，如 bean 中所定义的配置。</p><p><strong>4、</strong> 如果 bean 实现 BeanNameAware 接口，则工厂通过传递 bean 的 ID 来调用 setBeanName()。</p><p><strong>5、</strong> 如果 bean 实现 BeanFactoryAware 接口，工厂通过传递自身的实例来调用 setBeanFactory()。</p><p><strong>6、</strong> 如果存在与 bean 关联的任何 BeanPostProcessors，则调用 preProcessBeforeInitialization() 方法。</p><p><strong>7、</strong> 如果为 bean 指定了 init 方法（ 的 init-method 属性），那么将调用它。</p><p><strong>8、</strong> 最后，如果存在与 bean 关联的任何 BeanPostProcessors，则将调用 postProcessAfterInitialization() 方法。</p><p><strong>9、</strong> 如果 bean 实现 DisposableBean 接口，当 spring 容器关闭时，会调用 destory()。</p><p><strong>10、</strong> 如果为 bean 指定了 destroy 方法（ 的 destroy-method 属性），那么将调用它。</p><p>###什么是 spring 的内部 bean？</p><p>只有将 bean 用作另一个 bean 的属性时，才能将 bean 声明为内部 bean。 为了定义 bean，Spring 的基于 XML 的配置元数据在 或 中提供了 元素的使用。 内部 bean 总是匿名的，它们总是作为原型。</p><p>###什么是 spring 装配</p><p>当 bean 在 Spring 容器中组合在一起时，它被称为装配或 bean 装配。</p><p>Spring 容器需要知道需要什么 bean 以及容器应该如何使用依赖注入来将 bean 绑定在一起，同时装配 bean。</p><p>###自动装配有哪些方式？</p><p>Spring 容器能够自动装配 bean。 也就是说，可以通过检查 BeanFactory 的内容让 Spring 自动解析 bean 的协作者。</p><p><strong>自动装配的不同模式：</strong></p><p><strong>1、</strong> no - 这是默认设置，表示没有自动装配。 应使用显式 bean 引用进行装配。</p><p><strong>2、</strong> byName - 它根据 bean 的名称注入对象依赖项。 它匹配并装配其属性与 XML 文件中由相同名称定义的 bean。</p><p><strong>3、</strong> byType - 它根据类型注入对象依赖项。 如果属性的类型与 XML 文件中的一个 bean 名称匹配，则匹配并装配属性。</p><p><strong>4、</strong> 构造函数 - 它通过调用类的构造函数来注入依赖项。 它有大量的参数。</p><p><strong>5、</strong> autodetect - 首先容器尝试通过构造函数使用 autowire 装配，如果不能，则尝试通过 byType 自动装配。</p><h3 id="_4、springcloud限流" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E6%95%B4%E7%90%86%E5%8F%8A%E7%AD%94%E6%A1%88.md#4springcloud%E9%99%90%E6%B5%81%EF%BC%9A" target="_blank" rel="noreferrer">4、SpringCloud限流：</a> <a class="header-anchor" href="#_4、springcloud限流" aria-label="Permalink to &quot;[4、SpringCloud限流：](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring高级面试题整理及答案.md#4springcloud限流：)&quot;">​</a></h3><p><strong>1、</strong> 我们可以通过semaphore.maxConcurrentRequests,coreSize,maxQueueSize和queueSizeRejectionThreshold设置信号量模式下的最大并发量、线程池大小、缓冲区大小和缓冲区降级阈值。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">#不设置缓冲区，当请求数超过coreSize时直接降级</span></span>
<span class="line"><span style="color:#f6f6f4;">hystrix.threadpool.userThreadPool.maxQueueSize=-1超时时间大于我们的timeout接口返回时间</span></span>
<span class="line"><span style="color:#f6f6f4;">hystrix.command.userCommandKey.execution.isolation.thread.timeoutInMilliseconds=15000</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#不设置缓冲区，当请求数超过coreSize时直接降级</span></span>
<span class="line"><span style="color:#24292e;">hystrix.threadpool.userThreadPool.maxQueueSize=-1超时时间大于我们的timeout接口返回时间</span></span>
<span class="line"><span style="color:#24292e;">hystrix.command.userCommandKey.execution.isolation.thread.timeoutInMilliseconds=15000</span></span></code></pre></div><p>这个时候我们连续多次请求/user/command/timeout接口，在第一个请求还没有成功返回时，查看输出日志可以发现只有第一个请求正常的进入到user-service的接口中，其它请求会直接返回降级信息。这样我们就实现了对服务请求的限流。</p><p><strong>2、</strong> 漏桶算法：水（请求）先进入到漏桶里，漏桶以一定的速度出水，当水流入速度过大会直接溢出，可以看出漏桶算法能强行限制数据的传输速率。</p><p><img src="https://gitee.com/souyunkutech/souyunku-home/raw/master/images/souyunku-web/2020/5/2/01/44/45_7.png#alt=45%5C_7.png" alt=""></p><p><strong>3、</strong> 令牌桶算法：除了要求能够限制数据的平均传输速率外，还要求允许某种程度的突发传输。这时候漏桶算法可能就不合适了，令牌桶算法更为适合。 如图所示，令牌桶算法的原理是系统会以一个恒定的速度往桶里放入令牌，而如果请求需要被处理，则需要先从桶里获取一个令牌，当桶里没有令牌可取时，则拒绝服务。</p><p><img src="https://gitee.com/souyunkutech/souyunku-home/raw/master/images/souyunku-web/2020/5/2/01/44/45_8.png#alt=45%5C_8.png" alt=""></p><h3 id="_5、什么是spring-cloud-config" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E6%95%B4%E7%90%86%E5%8F%8A%E7%AD%94%E6%A1%88.md#5%E4%BB%80%E4%B9%88%E6%98%AFspring-cloud-config" target="_blank" rel="noreferrer">5、什么是Spring Cloud Config?</a> <a class="header-anchor" href="#_5、什么是spring-cloud-config" aria-label="Permalink to &quot;[5、什么是Spring Cloud Config?](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring高级面试题整理及答案.md#5什么是spring-cloud-config)&quot;">​</a></h3><p>Spring Cloud Config为分布式系统中的外部配置提供服务器和客户端支持，可以方便的对微服务各个环境下的配置进行集中式管理。Spring Cloud Config分为Config Server和Config Client两部分。Config Server负责读取配置文件，并且暴露Http API接口，Config Client通过调用Config Server的接口来读取配置文件。</p><h3 id="_6、spring-cloud解决了哪些问题" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E6%95%B4%E7%90%86%E5%8F%8A%E7%AD%94%E6%A1%88.md#6spring-cloud%E8%A7%A3%E5%86%B3%E4%BA%86%E5%93%AA%E4%BA%9B%E9%97%AE%E9%A2%98" target="_blank" rel="noreferrer">6、Spring Cloud解决了哪些问题？</a> <a class="header-anchor" href="#_6、spring-cloud解决了哪些问题" aria-label="Permalink to &quot;[6、Spring Cloud解决了哪些问题？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring高级面试题整理及答案.md#6spring-cloud解决了哪些问题)&quot;">​</a></h3><p>在使用SpringBoot开发分布式微服务时，我们面临的问题很少由Spring Cloud解决。</p><p>与分布式系统相关的复杂性 – 包括网络问题，延迟开销，带宽问题，安全问题。</p><p>处理服务发现的能力 – 服务发现允许集群中的进程和服务找到彼此并进行通信。</p><p>解决冗余问题 – 冗余问题经常发生在分布式系统中。</p><p>负载平衡 – 改进跨多个计算资源（例如计算机集群，网络链接，中央处理单元）的工作负载分布。</p><p>减少性能问题 – 减少因各种操作开销导致的性能问题。</p><h3 id="_7、springcloud核心组件及其作用-以及springcloud工作原理" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E6%95%B4%E7%90%86%E5%8F%8A%E7%AD%94%E6%A1%88.md#7springcloud%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6%E5%8F%8A%E5%85%B6%E4%BD%9C%E7%94%A8%E4%BB%A5%E5%8F%8Aspringcloud%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%EF%BC%9A" target="_blank" rel="noreferrer">7、springcloud核心组件及其作用，以及springcloud工作原理：</a> <a class="header-anchor" href="#_7、springcloud核心组件及其作用-以及springcloud工作原理" aria-label="Permalink to &quot;[7、springcloud核心组件及其作用，以及springcloud工作原理：](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring高级面试题整理及答案.md#7springcloud核心组件及其作用以及springcloud工作原理：)&quot;">​</a></h3><p><img src="https://gitee.com/souyunkutech/souyunku-home/raw/master/images/souyunku-web/2020/5/2/01/44/45_9.png#alt=45%5C_9.png" alt=""></p><p><strong>springcloud由以下几个核心组件构成：</strong></p><p><strong>1、</strong> Eureka：各个服务启动时，Eureka Client都会将服务注册到Eureka Server，并且Eureka Client还可以反过来从Eureka Server拉取注册表，从而知道其他服务在哪里</p><p><strong>2、</strong> Ribbon：服务间发起请求的时候，基于Ribbon做负载均衡，从一个服务的多台机器中选择一台</p><p><strong>3、</strong> Feign：基于Feign的动态代理机制，根据注解和选择的机器，拼接请求URL地址，发起请求</p><p><strong>4、</strong> Hystrix：发起请求是通过Hystrix的线程池来走的，不同的服务走不同的线程池，实现了不同服务调用的隔离，避免了服务雪崩的问题</p><p><strong>5、</strong> Zuul：如果前端、移动端要调用后端系统，统一从Zuul网关进入，由Zuul网关转发请求给对应的服务</p><h3 id="_8、什么是依赖注入" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E6%95%B4%E7%90%86%E5%8F%8A%E7%AD%94%E6%A1%88.md#8%E4%BB%80%E4%B9%88%E6%98%AF%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5" target="_blank" rel="noreferrer">8、什么是依赖注入？</a> <a class="header-anchor" href="#_8、什么是依赖注入" aria-label="Permalink to &quot;[8、什么是依赖注入？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring高级面试题整理及答案.md#8什么是依赖注入)&quot;">​</a></h3><p>在依赖注入中，您不必创建对象，但必须描述如何创建它们。您不是直接在代码中将组件和服务连接在一起，而是描述配置文件中哪些组件需要哪些服务。由 IoC 容器将它们装配在一起。</p><h3 id="_9、你能否举一个以-readonly-为事务管理的例子" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E6%95%B4%E7%90%86%E5%8F%8A%E7%AD%94%E6%A1%88.md#9%E4%BD%A0%E8%83%BD%E5%90%A6%E4%B8%BE%E4%B8%80%E4%B8%AA%E4%BB%A5-readonly-%E4%B8%BA%E4%BA%8B%E5%8A%A1%E7%AE%A1%E7%90%86%E7%9A%84%E4%BE%8B%E5%AD%90" target="_blank" rel="noreferrer">9、你能否举一个以 ReadOnly 为事务管理的例子？</a> <a class="header-anchor" href="#_9、你能否举一个以-readonly-为事务管理的例子" aria-label="Permalink to &quot;[9、你能否举一个以 ReadOnly 为事务管理的例子？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring高级面试题整理及答案.md#9你能否举一个以-readonly-为事务管理的例子)&quot;">​</a></h3><p>当你从数据库读取内容的时候，你想把事物中的用户描述或者是其它描述设置为只读模式，以便于 Hebernate 不需要再次检查实体的变化。这是非常高效的。</p><h3 id="_10、什么是springboot" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E6%95%B4%E7%90%86%E5%8F%8A%E7%AD%94%E6%A1%88.md#10%E4%BB%80%E4%B9%88%E6%98%AFspringboot" target="_blank" rel="noreferrer">10、什么是SpringBoot？</a> <a class="header-anchor" href="#_10、什么是springboot" aria-label="Permalink to &quot;[10、什么是SpringBoot？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Spring/Spring高级面试题整理及答案.md#10什么是springboot)&quot;">​</a></h3><p>Spring boot是微服务面试问题的主要话题。 随着新功能的加入，Spring变得越来越复杂。无论何时启动新项目，都必须添加新的构建路径或Maven依赖项。简而言之，你需要从头开始做每件事。SpringBoot是一种帮助您避免所有代码配置的解决方案。</p><h3 id="_11、你如何理解-springboot-中的-starters" tabindex="-1">11、你如何理解 SpringBoot 中的 Starters？ <a class="header-anchor" href="#_11、你如何理解-springboot-中的-starters" aria-label="Permalink to &quot;11、你如何理解 SpringBoot 中的 Starters？&quot;">​</a></h3><h3 id="_12、springboot的缺点" tabindex="-1">12、SpringBoot的缺点 <a class="header-anchor" href="#_12、springboot的缺点" aria-label="Permalink to &quot;12、SpringBoot的缺点&quot;">​</a></h3><h3 id="_13、什么是-aop" tabindex="-1">13、什么是 AOP？ <a class="header-anchor" href="#_13、什么是-aop" aria-label="Permalink to &quot;13、什么是 AOP？&quot;">​</a></h3><h3 id="_14、eureka和zookeeper都可以提供服务注册与发现的功能-请说说两个的区别" tabindex="-1">14、Eureka和ZooKeeper都可以提供服务注册与发现的功能,请说说两个的区别 <a class="header-anchor" href="#_14、eureka和zookeeper都可以提供服务注册与发现的功能-请说说两个的区别" aria-label="Permalink to &quot;14、Eureka和ZooKeeper都可以提供服务注册与发现的功能,请说说两个的区别&quot;">​</a></h3><h3 id="_15、一个spring的应用看起来象什么" tabindex="-1">15、一个Spring的应用看起来象什么？ <a class="header-anchor" href="#_15、一个spring的应用看起来象什么" aria-label="Permalink to &quot;15、一个Spring的应用看起来象什么？&quot;">​</a></h3><h3 id="_16、过渡到微服务时的常见错误" tabindex="-1">16、过渡到微服务时的常见错误 <a class="header-anchor" href="#_16、过渡到微服务时的常见错误" aria-label="Permalink to &quot;16、过渡到微服务时的常见错误&quot;">​</a></h3><h3 id="_17、jdbctemplate" tabindex="-1">17、JdbcTemplate <a class="header-anchor" href="#_17、jdbctemplate" aria-label="Permalink to &quot;17、JdbcTemplate&quot;">​</a></h3><h3 id="_18、ribbon底层实现原理" tabindex="-1">18、Ribbon底层实现原理 <a class="header-anchor" href="#_18、ribbon底层实现原理" aria-label="Permalink to &quot;18、Ribbon底层实现原理&quot;">​</a></h3><h3 id="_19、springboot-日志框架" tabindex="-1">19、SpringBoot 日志框架： <a class="header-anchor" href="#_19、springboot-日志框架" aria-label="Permalink to &quot;19、SpringBoot 日志框架：&quot;">​</a></h3><h3 id="_20、springboot-有哪几种读取配置的方式" tabindex="-1">20、SpringBoot 有哪几种读取配置的方式？ <a class="header-anchor" href="#_20、springboot-有哪几种读取配置的方式" aria-label="Permalink to &quot;20、SpringBoot 有哪几种读取配置的方式？&quot;">​</a></h3><h3 id="_21、微服务限流-dubbo限流-dubbo提供了多个和请求相关的filter-activelimitfilter-executelimitfilter-tpslimiterfilter" tabindex="-1">21、微服务限流 dubbo限流：dubbo提供了多个和请求相关的filter：ActiveLimitFilter ExecuteLimitFilter TPSLimiterFilter <a class="header-anchor" href="#_21、微服务限流-dubbo限流-dubbo提供了多个和请求相关的filter-activelimitfilter-executelimitfilter-tpslimiterfilter" aria-label="Permalink to &quot;21、微服务限流 dubbo限流：dubbo提供了多个和请求相关的filter：ActiveLimitFilter ExecuteLimitFilter TPSLimiterFilter&quot;">​</a></h3><h3 id="_22、springcloud的优缺点" tabindex="-1">22、SpringCloud的优缺点 <a class="header-anchor" href="#_22、springcloud的优缺点" aria-label="Permalink to &quot;22、SpringCloud的优缺点&quot;">​</a></h3><h3 id="_23、什么是-spring-cloud-bus" tabindex="-1">23、什么是 Spring Cloud Bus？ <a class="header-anchor" href="#_23、什么是-spring-cloud-bus" aria-label="Permalink to &quot;23、什么是 Spring Cloud Bus？&quot;">​</a></h3><h3 id="_24、-requestmapping-注解有什么用" tabindex="-1">24、<a href="/docs/RequestMapping.html">@RequestMapping </a> 注解有什么用？ <a class="header-anchor" href="#_24、-requestmapping-注解有什么用" aria-label="Permalink to &quot;24、[@RequestMapping ](/RequestMapping ) 注解有什么用？&quot;">​</a></h3><h3 id="_25、spring-boot-starter-parent-有什么用" tabindex="-1">25、spring-boot-starter-parent 有什么用 ? <a class="header-anchor" href="#_25、spring-boot-starter-parent-有什么用" aria-label="Permalink to &quot;25、spring-boot-starter-parent 有什么用 ?&quot;">​</a></h3><h3 id="_26、自动装配有什么局限" tabindex="-1">26、自动装配有什么局限？ <a class="header-anchor" href="#_26、自动装配有什么局限" aria-label="Permalink to &quot;26、自动装配有什么局限？&quot;">​</a></h3><h3 id="_27、如何使用-springboot-自动重装我的应用程序" tabindex="-1">27、如何使用 SpringBoot 自动重装我的应用程序？ <a class="header-anchor" href="#_27、如何使用-springboot-自动重装我的应用程序" aria-label="Permalink to &quot;27、如何使用 SpringBoot 自动重装我的应用程序？&quot;">​</a></h3><h3 id="_28、什么是spring-cloud" tabindex="-1">28、什么是Spring Cloud？ <a class="header-anchor" href="#_28、什么是spring-cloud" aria-label="Permalink to &quot;28、什么是Spring Cloud？&quot;">​</a></h3><h3 id="_29、什么是spring-cloud-bus" tabindex="-1">29、什么是Spring Cloud Bus? <a class="header-anchor" href="#_29、什么是spring-cloud-bus" aria-label="Permalink to &quot;29、什么是Spring Cloud Bus?&quot;">​</a></h3><h3 id="_30、requestmapping-和-getmapping-的不同之处在哪里" tabindex="-1">30、RequestMapping 和 GetMapping 的不同之处在哪里？ <a class="header-anchor" href="#_30、requestmapping-和-getmapping-的不同之处在哪里" aria-label="Permalink to &quot;30、RequestMapping 和 GetMapping 的不同之处在哪里？&quot;">​</a></h3><h3 id="_31、什么是-spring-profiles" tabindex="-1">31、什么是 Spring Profiles？ <a class="header-anchor" href="#_31、什么是-spring-profiles" aria-label="Permalink to &quot;31、什么是 Spring Profiles？&quot;">​</a></h3>`,82),s=[t];function i(p,l,g,u,d,c){return o(),r("div",null,s)}const E=e(n,[["render",i]]);export{h as __pageData,E as default};
