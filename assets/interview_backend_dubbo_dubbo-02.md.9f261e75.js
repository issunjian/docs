import{_ as o,o as e,c as t,V as a}from"./chunks/framework.c6d8cbec.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/dubbo/dubbo-02.md","filePath":"interview/backend/dubbo/dubbo-02.md"}'),s={name:"interview/backend/dubbo/dubbo-02.md"},r=a(`<h3 id="_1、说说核心的配置有哪些" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#1%E8%AF%B4%E8%AF%B4%E6%A0%B8%E5%BF%83%E7%9A%84%E9%85%8D%E7%BD%AE%E6%9C%89%E5%93%AA%E4%BA%9B" target="_blank" rel="noreferrer">1、说说核心的配置有哪些？</a> <a class="header-anchor" href="#_1、说说核心的配置有哪些" aria-label="Permalink to &quot;[1、说说核心的配置有哪些？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo最新2021年面试题大汇总，附答案.md#1说说核心的配置有哪些)&quot;">​</a></h3><table><thead><tr><th>标签</th><th>用途</th><th>解释</th></tr></thead><tbody><tr><td><a href="./.html">dubbo:service/</a></td><td>服务配置</td><td>用于暴露一个服务，定义服务的元信息，一个服务可以用多个协议暴露，一个服务也可以注册到多个注册中心</td></tr><tr><td><a href="./.html">dubbo:reference/</a></td><td>引用配置</td><td>用于创建一个远程服务代理，一个引用可以指向多个注册中心</td></tr><tr><td><a href="./.html">dubbo:protocol/</a></td><td>协议配置</td><td>用于配置提供服务的协议信息，协议由提供方指定，消费方被动接受</td></tr><tr><td><a href="./.html">dubbo:application/</a></td><td>应用配置</td><td>用于配置当前应用信息，不管该应用是提供者还是消费者</td></tr><tr><td><a href="./.html">dubbo:module/</a></td><td>模块配置</td><td>用于配置当前模块信息，可选</td></tr><tr><td><a href="./.html">dubbo:registry/</a></td><td>注册中心配置</td><td>用于配置连接注册中心相关信息</td></tr><tr><td><a href="./.html">dubbo:monitor/</a></td><td>监控中心配置</td><td>用于配置连接监控中心相关信息，可选</td></tr><tr><td><a href="./.html">dubbo:provider/</a></td><td>提供方配置</td><td>当 ProtocolConfig 和 ServiceConfig 某属性没有配置时，采用此缺省值，可选</td></tr><tr><td><a href="./.html">dubbo:consumer/</a></td><td>消费方配置</td><td>当 ReferenceConfig 某属性没有配置时，采用此缺省值，可选</td></tr><tr><td><a href="./.html">dubbo:method/</a></td><td>方法配置</td><td>用于 ServiceConfig 和 ReferenceConfig 指定方法级的配置信息</td></tr><tr><td><a href="./.html">dubbo:argument</a></td><td>参数配置</td><td>用于指定方法参数配置</td></tr></tbody></table><p><code>如果是SpringBoot项目就只需要注解，或者开Application配置文件！！！</code></p><h3 id="_2、dubbo-支持哪些协议-每种协议的应用场景-优缺点" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#2dubbo-%E6%94%AF%E6%8C%81%E5%93%AA%E4%BA%9B%E5%8D%8F%E8%AE%AE%E6%AF%8F%E7%A7%8D%E5%8D%8F%E8%AE%AE%E7%9A%84%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF%E4%BC%98%E7%BC%BA%E7%82%B9" target="_blank" rel="noreferrer">2、Dubbo 支持哪些协议，每种协议的应用场景，优缺点？</a> <a class="header-anchor" href="#_2、dubbo-支持哪些协议-每种协议的应用场景-优缺点" aria-label="Permalink to &quot;[2、Dubbo 支持哪些协议，每种协议的应用场景，优缺点？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo最新2021年面试题大汇总，附答案.md#2dubbo-支持哪些协议每种协议的应用场景优缺点)&quot;">​</a></h3><p><strong>1、</strong> dubbo：单一长连接和 NIO 异步通讯，适合大并发小数据量的服务调用，以及消费者远大于提供者。传输协议 TCP，异步， Hessian 序列化；</p><p><strong>2、</strong> rmi：采用 JDK 标准的 rmi 协议实现，传输参数和返回参数对象需要实现Serializable 接口，使用 java 标准序列化机制，使用阻塞式短连接，传输数据包大小混合，消费者和提供者个数差不多，可传文件，传输协议 TCP。多个短连接， TCP 协议传输，同步传输，适用常规的远程服务调用和 rmi 互操作。在依赖低版本的 Common-Collections 包， java 序列化存在安全漏洞；</p><p><strong>3、</strong> http：基于 Http 表单提交的远程调用协议，使用 Spring 的 HttpInvoke 实现。多个短连接，传输协议 HTTP，传入参数大小混合，提供者个数多于消费者，需要给应用程序和浏览器 JS 调用；</p><p><strong>4、</strong> webservice：基于 WebService 的远程调用协议，集成 CXF 实现，提供和原生 WebService 的互操作。多个短连接，基于 HTTP 传输，同步传输，适用系统集成和跨语言调用；</p><p><strong>5、</strong> hessian：集成 Hessian 服务，基于 HTTP 通讯，采用 Servlet 暴露服务，Dubbo 内嵌 Jetty 作为服务器时默认实现，提供与 Hession 服务互操作。多个短连接，同步 HTTP 传输， Hessian 序列化，传入参数较大，提供者大于消费者，提供者压力较大，可传文件；</p><p><strong>6、</strong> Redis：基于 Redis 实现的 RPC 协议</p><h3 id="_3、服务提供者能实现失效踢出是什么原理" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#3%E6%9C%8D%E5%8A%A1%E6%8F%90%E4%BE%9B%E8%80%85%E8%83%BD%E5%AE%9E%E7%8E%B0%E5%A4%B1%E6%95%88%E8%B8%A2%E5%87%BA%E6%98%AF%E4%BB%80%E4%B9%88%E5%8E%9F%E7%90%86" target="_blank" rel="noreferrer">3、服务提供者能实现失效踢出是什么原理？</a> <a class="header-anchor" href="#_3、服务提供者能实现失效踢出是什么原理" aria-label="Permalink to &quot;[3、服务提供者能实现失效踢出是什么原理？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo最新2021年面试题大汇总，附答案.md#3服务提供者能实现失效踢出是什么原理)&quot;">​</a></h3><p>服务失效踢出基于zookeeper的临时节点原理。</p><h3 id="_4、prc架构组件" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#4prc%E6%9E%B6%E6%9E%84%E7%BB%84%E4%BB%B6" target="_blank" rel="noreferrer">4、PRC架构组件</a> <a class="header-anchor" href="#_4、prc架构组件" aria-label="Permalink to &quot;[4、PRC架构组件](https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo最新2021年面试题大汇总，附答案.md#4prc架构组件)&quot;">​</a></h3><p>一个基本的RPC架构里面应该至少包含以下4个组件：</p><p><strong>1、</strong> 客户端（Client）:服务调用方（服务消费者）</p><p><strong>2、</strong> 客户端存根（Client Stub）:存放服务端地址信息，将客户端的请求参数数据信息打包成网络消息，再通过网络传输发送给服务端</p><p><strong>3、</strong> 服务端存根（Server Stub）:接收客户端发送过来的请求消息并进行解包，然后再调用本地服务进行处理4、服务端（Server）:服务的真正提供者</p><p><img src="https://gitee.com/souyunkutech/souyunku-home/raw/master/images/souyunku-web/2020/5/2/026/54/80_4.png#alt=80%5C_4.png" alt=""></p><ul><li>具体调用过程：</li></ul><p><strong>1、</strong> 服务消费者（client客户端）通过调用本地服务的方式调用需要消费的服务；</p><p><strong>2、</strong> 客户端存根（client stub）接收到调用请求后负责将方法、入参等信息序列化（组装）成能够进行网络传输的消息体；</p><p><strong>3、</strong> 客户端存根（client stub）找到远程的服务地址，并且将消息通过网络发送给服务端；</p><p><strong>4、</strong> 服务端存根（server stub）收到消息后进行解码（反序列化操作）；</p><p><strong>5、</strong> 服务端存根（server stub）根据解码结果调用本地的服务进行相关处理；</p><p><strong>6、</strong> 本地服务执行具体业务逻辑并将处理结果返回给服务端存根（server stub）；</p><p><strong>7、</strong> 服务端存根（server stub）将返回结果重新打包成消息（序列化）并通过网络发送至消费方；</p><p><strong>8、</strong> 客户端存根（client stub）接收到消息，并进行解码（反序列化）；</p><p><strong>9、</strong> 服务消费方得到最终结果；</p><p><code>而RPC框架的实现目标则是将上面的第2-10步完好地封装起来，也就是把调用、编码/解码的过程给封装起来，让用户感觉上像调用本地服务一样的调用远程服务。</code></p><h3 id="_5、服务调用是阻塞的吗" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#5%E6%9C%8D%E5%8A%A1%E8%B0%83%E7%94%A8%E6%98%AF%E9%98%BB%E5%A1%9E%E7%9A%84%E5%90%97" target="_blank" rel="noreferrer">5、服务调用是阻塞的吗？</a> <a class="header-anchor" href="#_5、服务调用是阻塞的吗" aria-label="Permalink to &quot;[5、服务调用是阻塞的吗？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo最新2021年面试题大汇总，附答案.md#5服务调用是阻塞的吗)&quot;">​</a></h3><p>默认是阻塞的，可以异步调用，没有返回值的可以这么做。</p><h3 id="_6、dubbo-服务集群配置-集群容错模式" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#6dubbo-%E6%9C%8D%E5%8A%A1%E9%9B%86%E7%BE%A4%E9%85%8D%E7%BD%AE%E9%9B%86%E7%BE%A4%E5%AE%B9%E9%94%99%E6%A8%A1%E5%BC%8F" target="_blank" rel="noreferrer">6、dubbo 服务集群配置（集群容错模式）</a> <a class="header-anchor" href="#_6、dubbo-服务集群配置-集群容错模式" aria-label="Permalink to &quot;[6、dubbo 服务集群配置（集群容错模式）](https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo最新2021年面试题大汇总，附答案.md#6dubbo-服务集群配置集群容错模式)&quot;">​</a></h3><p>在集群调用失败时， Dubbo 提供了多种容错方案，缺省为 failover 重试。可以自行扩展集群容错策略</p><p>l Failover Cluster(默认)</p><p>失败自动切换，当出现失败，重试其它服务器。(缺省)通常用于读操作，</p><p>但重试会带来更长延迟。可通过 retries=&quot;2&quot;来设置重试次数(不含第一次)。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;dubbo:service retries=&quot;2&quot; cluster=&quot;failover&quot;/&gt;或：&lt;dubbo:reference retries=&quot;2&quot; cluster=&quot;failover&quot;/&gt;cluster=&quot;failover&quot;可以不用写,因为默认就是 failover</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dubbo:service retries=&quot;2&quot; cluster=&quot;failover&quot;/&gt;或：&lt;dubbo:reference retries=&quot;2&quot; cluster=&quot;failover&quot;/&gt;cluster=&quot;failover&quot;可以不用写,因为默认就是 failover</span></span></code></pre></div><p><strong>Failfast Cluster</strong></p><p>快速失败，只发起一次调用，失败立即报错。通常用于非幂等性的写操作，</p><p>比如新增记录。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">dubbo:service cluster=&quot;failfast&quot; /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">dubbo:service cluster=&quot;failfast&quot; /&gt;</span></span></code></pre></div><p>或：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;dubbo:reference cluster=&quot;failfast&quot; /&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">cluster=&quot;failfast&quot;和 把 cluster=&quot;failover&quot;、 retries=&quot;0&quot;是一样的效果,retries=&quot;0&quot;就是不重</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dubbo:reference cluster=&quot;failfast&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">cluster=&quot;failfast&quot;和 把 cluster=&quot;failover&quot;、 retries=&quot;0&quot;是一样的效果,retries=&quot;0&quot;就是不重</span></span></code></pre></div><p>Failsafe Cluster失败安全，出现异常时，直接忽略。通常用于写入审计日志等操作。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;dubbo:service cluster=&quot;failsafe&quot; /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dubbo:service cluster=&quot;failsafe&quot; /&gt;</span></span></code></pre></div><p>或：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;dubbo:reference cluster=&quot;failsafe&quot; /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dubbo:reference cluster=&quot;failsafe&quot; /&gt;</span></span></code></pre></div><p><strong>Failback Cluster</strong></p><p>失败自动恢复，后台记录失败请求，定时重发。通常用于消息通知操作。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;dubbo:service cluster=&quot;failback&quot; /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dubbo:service cluster=&quot;failback&quot; /&gt;</span></span></code></pre></div><p>或：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;dubbo:reference cluster=&quot;failback&quot; /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dubbo:reference cluster=&quot;failback&quot; /&gt;</span></span></code></pre></div><p>Forking Cluster并行调用多个服务器，只要一个成功即返回。通常用于实时性要求较高的读</p><p>操作，但需要浪费更多服务资源。可通过 forks=&quot;2&quot;来设置最大并行数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;dubbo:service cluster=“forking&quot; forks=&quot;2&quot;/&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dubbo:service cluster=“forking&quot; forks=&quot;2&quot;/&gt;</span></span></code></pre></div><p>或：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;dubbo:reference cluster=“forking&quot; forks=&quot;2&quot;/&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dubbo:reference cluster=“forking&quot; forks=&quot;2&quot;/&gt;</span></span></code></pre></div><h3 id="_7、dubbo-核心功能有哪些" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#7dubbo-%E6%A0%B8%E5%BF%83%E5%8A%9F%E8%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B" target="_blank" rel="noreferrer">7、Dubbo 核心功能有哪些？</a> <a class="header-anchor" href="#_7、dubbo-核心功能有哪些" aria-label="Permalink to &quot;[7、Dubbo 核心功能有哪些？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo最新2021年面试题大汇总，附答案.md#7dubbo-核心功能有哪些)&quot;">​</a></h3><p><strong>1、</strong> Remoting：网络通信框架，提供对多种NIO框架抽象封装，包括“同步转异步”和“请求-响应”模式的信息交换方式。</p><p><strong>2、</strong> Cluster：服务框架，提供基于接口方法的透明远程过程调用，包括多协议支持，以及软负载均衡，失败容错，地址路由，动态配置等集群支持。</p><p><strong>3、</strong> Registry：服务注册，基于注册中心目录服务，使服务消费方能动态的查找服务提供方，使地址透明，使服务提供方可以平滑增加或减少机器。</p><h3 id="_8、为什么要用dubbo" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#8%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E7%94%A8dubbo" target="_blank" rel="noreferrer">8、为什么要用Dubbo？</a> <a class="header-anchor" href="#_8、为什么要用dubbo" aria-label="Permalink to &quot;[8、为什么要用Dubbo？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo最新2021年面试题大汇总，附答案.md#8为什么要用dubbo)&quot;">​</a></h3><p>随着服务化的进一步发展，服务越来越多，服务之间的调用和依赖关系也越来越复杂，诞生了面向服务的架构体系(SOA)，</p><p>也因此衍生出了一系列相应的技术，如对服务提供、服务调用、连接处理、通信协议、序列化方式、服务发现、服务路由、日志输出等行为进行封装的服务框架。</p><p>就这样为分布式系统的服务治理框架就出现了，Dubbo也就这样产生了。</p><h3 id="_9、服务调用超时问题怎么解决" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#9%E6%9C%8D%E5%8A%A1%E8%B0%83%E7%94%A8%E8%B6%85%E6%97%B6%E9%97%AE%E9%A2%98%E6%80%8E%E4%B9%88%E8%A7%A3%E5%86%B3" target="_blank" rel="noreferrer">9、服务调用超时问题怎么解决</a> <a class="header-anchor" href="#_9、服务调用超时问题怎么解决" aria-label="Permalink to &quot;[9、服务调用超时问题怎么解决](https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo最新2021年面试题大汇总，附答案.md#9服务调用超时问题怎么解决)&quot;">​</a></h3><p>dubbo在调用服务不成功时，默认是会重试两次的。这样在服务端的处理时间超过了设定的超时时间时，就会有重复请求，比如在发邮件时，可能就会发出多份重复邮件，执行注册请求时，就会插入多条重复的注册数据，那么怎么解决超时问题呢？如下</p><p>对于核心的服务中心，去除dubbo超时重试机制，并重新评估设置超时时间。 业务处理代码必须放在服务端，客户端只做参数验证和服务调用，不涉及业务流程处理 全局配置实例</p><p>&lt;dubbo:provider delay=&quot;-1&quot; timeout=&quot;6000&quot; retries=&quot;0&quot;/&gt;</p><p>当然Dubbo的重试机制其实是非常好的QOS保证，它的路由机制，是会帮你把超时的请求路由到其他机器上，而不是本机尝试，所以 dubbo的重试机器也能一定程度的保证服务的质量。但是请一定要综合线上的访问情况，给出综合的评估。</p><h3 id="_10、dubbo-通信协议-dubbo-协议为什么要消费者比提供者个数多" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#10dubbo-%E9%80%9A%E4%BF%A1%E5%8D%8F%E8%AE%AE-dubbo-%E5%8D%8F%E8%AE%AE%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E6%B6%88%E8%B4%B9%E8%80%85%E6%AF%94%E6%8F%90%E4%BE%9B%E8%80%85%E4%B8%AA%E6%95%B0%E5%A4%9A" target="_blank" rel="noreferrer">10、dubbo 通信协议 dubbo 协议为什么要消费者比提供者个数多？</a> <a class="header-anchor" href="#_10、dubbo-通信协议-dubbo-协议为什么要消费者比提供者个数多" aria-label="Permalink to &quot;[10、dubbo 通信协议 dubbo 协议为什么要消费者比提供者个数多？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo最新2021年面试题大汇总，附答案.md#10dubbo-通信协议-dubbo-协议为什么要消费者比提供者个数多)&quot;">​</a></h3><p>因 dubbo 协议采用单一长连接，假设网络为千兆网卡(1024Mbit=128MByte)，根据测试经验数据每条连接最多只能压满 7MByte(不同的环境可能不一样，供参考)，理论上 1 个服务提供者需要 20个服务消费者才能压满网卡。</p><h3 id="_11、dubbo服务降级-失败重试怎么做" tabindex="-1">11、Dubbo服务降级，失败重试怎么做？ <a class="header-anchor" href="#_11、dubbo服务降级-失败重试怎么做" aria-label="Permalink to &quot;11、Dubbo服务降级，失败重试怎么做？&quot;">​</a></h3><h3 id="_12、dubbo是什么" tabindex="-1">12、dubbo是什么 <a class="header-anchor" href="#_12、dubbo是什么" aria-label="Permalink to &quot;12、dubbo是什么&quot;">​</a></h3><h3 id="_13、dubbo-和-spring-cloud-的区别" tabindex="-1">13、Dubbo 和 Spring Cloud 的区别？ <a class="header-anchor" href="#_13、dubbo-和-spring-cloud-的区别" aria-label="Permalink to &quot;13、Dubbo 和 Spring Cloud 的区别？&quot;">​</a></h3><h3 id="_14、rpc和soa、soap、rest的区别" tabindex="-1">14、RPC和SOA、SOAP、REST的区别 <a class="header-anchor" href="#_14、rpc和soa、soap、rest的区别" aria-label="Permalink to &quot;14、RPC和SOA、SOAP、REST的区别&quot;">​</a></h3><h3 id="_15、dubbo-支持分布式事务吗" tabindex="-1">15、Dubbo 支持分布式事务吗？ <a class="header-anchor" href="#_15、dubbo-支持分布式事务吗" aria-label="Permalink to &quot;15、Dubbo 支持分布式事务吗？&quot;">​</a></h3><h3 id="_16、rpc使用了哪些关键技术-序列化" tabindex="-1">16、RPC使用了哪些关键技术，序列化 <a class="header-anchor" href="#_16、rpc使用了哪些关键技术-序列化" aria-label="Permalink to &quot;16、RPC使用了哪些关键技术，序列化&quot;">​</a></h3><h3 id="_17、dubbo-spi-和-java-spi-区别" tabindex="-1">17、Dubbo SPI 和 Java SPI 区别？ <a class="header-anchor" href="#_17、dubbo-spi-和-java-spi-区别" aria-label="Permalink to &quot;17、Dubbo SPI 和 Java SPI 区别？&quot;">​</a></h3><h3 id="_18、为什么要用-dubbo" tabindex="-1">18、为什么要用 Dubbo？ <a class="header-anchor" href="#_18、为什么要用-dubbo" aria-label="Permalink to &quot;18、为什么要用 Dubbo？&quot;">​</a></h3><h3 id="_19、dubbo-通信协议-dubbo-协议为什么采用异步单一长连接" tabindex="-1">19、dubbo 通信协议 dubbo 协议为什么采用异步单一长连接 <a class="header-anchor" href="#_19、dubbo-通信协议-dubbo-协议为什么采用异步单一长连接" aria-label="Permalink to &quot;19、dubbo 通信协议 dubbo 协议为什么采用异步单一长连接&quot;">​</a></h3><h3 id="_20、dubbo必须依赖的包有哪些" tabindex="-1">20、Dubbo必须依赖的包有哪些？ <a class="header-anchor" href="#_20、dubbo必须依赖的包有哪些" aria-label="Permalink to &quot;20、Dubbo必须依赖的包有哪些？&quot;">​</a></h3><h3 id="_21、你还了解别的分布式框架吗" tabindex="-1">21、你还了解别的分布式框架吗？ <a class="header-anchor" href="#_21、你还了解别的分布式框架吗" aria-label="Permalink to &quot;21、你还了解别的分布式框架吗？&quot;">​</a></h3><h3 id="_22、dubbo-支持哪些协议-它们的优缺点有哪些" tabindex="-1">22、Dubbo 支持哪些协议，它们的优缺点有哪些？ <a class="header-anchor" href="#_22、dubbo-支持哪些协议-它们的优缺点有哪些" aria-label="Permalink to &quot;22、Dubbo 支持哪些协议，它们的优缺点有哪些？&quot;">​</a></h3><h3 id="_23、dubbo-使用的是什么通信框架" tabindex="-1">23、Dubbo 使用的是什么通信框架? <a class="header-anchor" href="#_23、dubbo-使用的是什么通信框架" aria-label="Permalink to &quot;23、Dubbo 使用的是什么通信框架?&quot;">​</a></h3><h3 id="_24、dubbo-集群的负载均衡有哪些策略" tabindex="-1">24、Dubbo 集群的负载均衡有哪些策略? <a class="header-anchor" href="#_24、dubbo-集群的负载均衡有哪些策略" aria-label="Permalink to &quot;24、Dubbo 集群的负载均衡有哪些策略?&quot;">​</a></h3><h3 id="_25、dubbo-推荐什么协议" tabindex="-1">25、Dubbo 推荐什么协议？ <a class="header-anchor" href="#_25、dubbo-推荐什么协议" aria-label="Permalink to &quot;25、Dubbo 推荐什么协议？&quot;">​</a></h3><h3 id="_26、dubbo-和-spring-cloud-有什么哪些区别" tabindex="-1">26、Dubbo 和 Spring Cloud 有什么哪些区别？ <a class="header-anchor" href="#_26、dubbo-和-spring-cloud-有什么哪些区别" aria-label="Permalink to &quot;26、Dubbo 和 Spring Cloud 有什么哪些区别？&quot;">​</a></h3><h3 id="_27、dubbo-telnet-命令能做什么" tabindex="-1">27、Dubbo telnet 命令能做什么？ <a class="header-anchor" href="#_27、dubbo-telnet-命令能做什么" aria-label="Permalink to &quot;27、Dubbo telnet 命令能做什么？&quot;">​</a></h3><h3 id="_28、dubbo集群提供了哪些负载均衡策略" tabindex="-1">28、Dubbo集群提供了哪些负载均衡策略？ <a class="header-anchor" href="#_28、dubbo集群提供了哪些负载均衡策略" aria-label="Permalink to &quot;28、Dubbo集群提供了哪些负载均衡策略？&quot;">​</a></h3><h3 id="_29、dubbo-和-dubbox-之间的区别" tabindex="-1">29、dubbo 和 dubbox 之间的区别？ <a class="header-anchor" href="#_29、dubbo-和-dubbox-之间的区别" aria-label="Permalink to &quot;29、dubbo 和 dubbox 之间的区别？&quot;">​</a></h3><h3 id="_30、dubbo-在安全机制方面如何解决的" tabindex="-1">30、dubbo 在安全机制方面如何解决的？ <a class="header-anchor" href="#_30、dubbo-在安全机制方面如何解决的" aria-label="Permalink to &quot;30、dubbo 在安全机制方面如何解决的？&quot;">​</a></h3>`,92),b=[r];function u(l,d,n,i,c,p){return e(),t("div",null,b)}const g=o(s,[["render",u]]);export{E as __pageData,g as default};
