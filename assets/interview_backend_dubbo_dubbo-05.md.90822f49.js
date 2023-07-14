import{_ as o,o as a,c as e,V as b}from"./chunks/framework.c6d8cbec.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/dubbo/dubbo-05.md","filePath":"interview/backend/dubbo/dubbo-05.md"}'),E={name:"interview/backend/dubbo/dubbo-05.md"},r=b('<h3 id="_1、dubbo集群提供了哪些负载均衡策略" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#1dubbo%E9%9B%86%E7%BE%A4%E6%8F%90%E4%BE%9B%E4%BA%86%E5%93%AA%E4%BA%9B%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E7%AD%96%E7%95%A5" target="_blank" rel="noreferrer">1、Dubbo集群提供了哪些负载均衡策略？</a> <a class="header-anchor" href="#_1、dubbo集群提供了哪些负载均衡策略" aria-label="Permalink to &quot;[1、Dubbo集群提供了哪些负载均衡策略？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo最新面试题2021年，常见面试题及答案汇总.md#1dubbo集群提供了哪些负载均衡策略)&quot;">​</a></h3><p><strong>1、</strong> Random LoadBalance: 随机选取提供者策略，有利于动态调整提供者权重。截面碰撞率高，调用次数越多，分布越均匀。</p><p><strong>2、</strong> RoundRobin LoadBalance: 轮循选取提供者策略，平均分布，但是存在请求累积的问题。</p><p><strong>3、</strong> LeastActive LoadBalance: 最少活跃调用策略，解决慢提供者接收更少的请求。</p><p><strong>4、</strong> ConstantHash LoadBalance: 一致性 Hash 策略，使相同参数请求总是发到同一提供者，一台机器宕机，可以基于虚拟节点，分摊至其他提供者，避免引起提供者的剧烈变动。</p><p>默认为 Random 随机调用。</p><h3 id="_2、dubbo-服务器注册与发现的流程" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#2dubbo-%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%B3%A8%E5%86%8C%E4%B8%8E%E5%8F%91%E7%8E%B0%E7%9A%84%E6%B5%81%E7%A8%8B" target="_blank" rel="noreferrer">2、Dubbo 服务器注册与发现的流程？</a> <a class="header-anchor" href="#_2、dubbo-服务器注册与发现的流程" aria-label="Permalink to &quot;[2、Dubbo 服务器注册与发现的流程？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo最新面试题2021年，常见面试题及答案汇总.md#2dubbo-服务器注册与发现的流程)&quot;">​</a></h3><p><strong>1、</strong> Provider（提供者）绑定指定端口并启动服务。</p><p><strong>2、</strong> 提供者连接注册中心，并发本机 IP、端口、应用信息和提供服务信息发送至注册中心存储。</p><p><strong>3、</strong> Consumer（消费者），连接注册中心 ，并发送应用信息、所求服务信息至注册中心。</p><p><strong>4、</strong> 注册中心根据消费者所求服务信息匹配对应的提供者列表发送至 Consumer 应用缓存。</p><p><strong>5、</strong> Consumer 在发起远程调用时基于缓存的消费者列表择其一发起调用。</p><p><strong>6、</strong> Provider 状态变更会实时通知注册中心、在由注册中心实时推送至 Consumer。</p><h3 id="_3、同一个服务多个注册的情况下可以直连某一个服务吗" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#3%E5%90%8C%E4%B8%80%E4%B8%AA%E6%9C%8D%E5%8A%A1%E5%A4%9A%E4%B8%AA%E6%B3%A8%E5%86%8C%E7%9A%84%E6%83%85%E5%86%B5%E4%B8%8B%E5%8F%AF%E4%BB%A5%E7%9B%B4%E8%BF%9E%E6%9F%90%E4%B8%80%E4%B8%AA%E6%9C%8D%E5%8A%A1%E5%90%97" target="_blank" rel="noreferrer">3、同一个服务多个注册的情况下可以直连某一个服务吗？</a> <a class="header-anchor" href="#_3、同一个服务多个注册的情况下可以直连某一个服务吗" aria-label="Permalink to &quot;[3、同一个服务多个注册的情况下可以直连某一个服务吗？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo最新面试题2021年，常见面试题及答案汇总.md#3同一个服务多个注册的情况下可以直连某一个服务吗)&quot;">​</a></h3><p>可以直连，修改配置即可，也可以通过 telnet 直接某个服务。</p><h3 id="_4、默认使用什么序列化框架-你知道的还有哪些" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#4%E9%BB%98%E8%AE%A4%E4%BD%BF%E7%94%A8%E4%BB%80%E4%B9%88%E5%BA%8F%E5%88%97%E5%8C%96%E6%A1%86%E6%9E%B6%E4%BD%A0%E7%9F%A5%E9%81%93%E7%9A%84%E8%BF%98%E6%9C%89%E5%93%AA%E4%BA%9B" target="_blank" rel="noreferrer">4、默认使用什么序列化框架，你知道的还有哪些？</a> <a class="header-anchor" href="#_4、默认使用什么序列化框架-你知道的还有哪些" aria-label="Permalink to &quot;[4、默认使用什么序列化框架，你知道的还有哪些？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo最新面试题2021年，常见面试题及答案汇总.md#4默认使用什么序列化框架你知道的还有哪些)&quot;">​</a></h3><p>默认使用Hessian序列化，还有Duddo、FastJson、Java自带序列化。</p><h3 id="_5、你还了解别的分布式框架吗" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#5%E4%BD%A0%E8%BF%98%E4%BA%86%E8%A7%A3%E5%88%AB%E7%9A%84%E5%88%86%E5%B8%83%E5%BC%8F%E6%A1%86%E6%9E%B6%E5%90%97" target="_blank" rel="noreferrer">5、你还了解别的分布式框架吗？</a> <a class="header-anchor" href="#_5、你还了解别的分布式框架吗" aria-label="Permalink to &quot;[5、你还了解别的分布式框架吗？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo最新面试题2021年，常见面试题及答案汇总.md#5你还了解别的分布式框架吗)&quot;">​</a></h3><p>别的还有 spring 的 spring cloud，facebook 的 thrift，twitter 的 finagle 等。冲上云霄，Dubbo Go！GO语言版本都发布了～推荐阅读：Spring Cloud是什么，和Dubbo对比呢？</p><h3 id="_6、dubbo-的使用场景有哪些" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#6dubbo-%E7%9A%84%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF%E6%9C%89%E5%93%AA%E4%BA%9B" target="_blank" rel="noreferrer">6、Dubbo 的使用场景有哪些？</a> <a class="header-anchor" href="#_6、dubbo-的使用场景有哪些" aria-label="Permalink to &quot;[6、Dubbo 的使用场景有哪些？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo最新面试题2021年，常见面试题及答案汇总.md#6dubbo-的使用场景有哪些)&quot;">​</a></h3><p><strong>1、</strong> 透明化的远程方法调用：就像调用本地方法一样调用远程方法，只需简单配置，没有任何API侵入。</p><p><strong>2、</strong> 软负载均衡及容错机制：可在内网替代 F5 等硬件负载均衡器，降低成本，减少单点。</p><p><strong>3、</strong> 服务自动注册与发现：不再需要写死服务提供方地址，注册中心基于接口名查询服务提供者的IP地址，并且能够平滑添加或删除服务提供者。</p><h3 id="_7、dubbo-的注册中心集群挂掉-者和订阅者之间还能通信么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#7dubbo-%E7%9A%84%E6%B3%A8%E5%86%8C%E4%B8%AD%E5%BF%83%E9%9B%86%E7%BE%A4%E6%8C%82%E6%8E%89%E8%80%85%E5%92%8C%E8%AE%A2%E9%98%85%E8%80%85%E4%B9%8B%E9%97%B4%E8%BF%98%E8%83%BD%E9%80%9A%E4%BF%A1%E4%B9%88" target="_blank" rel="noreferrer">7、Dubbo 的注册中心集群挂掉，者和订阅者之间还能通信么？</a> <a class="header-anchor" href="#_7、dubbo-的注册中心集群挂掉-者和订阅者之间还能通信么" aria-label="Permalink to &quot;[7、Dubbo 的注册中心集群挂掉，者和订阅者之间还能通信么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo最新面试题2021年，常见面试题及答案汇总.md#7dubbo-的注册中心集群挂掉者和订阅者之间还能通信么)&quot;">​</a></h3><p>可以的，启动 dubbo 时，消费者会从 zookeeper 拉取注册的生产者的地址接口等数据，缓存在本地。</p><p>每次调用时，按照本地存储的地址进行调用。</p><h3 id="_8、同一个服务多个注册的情况下可以直连某一个服务吗" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#8%E5%90%8C%E4%B8%80%E4%B8%AA%E6%9C%8D%E5%8A%A1%E5%A4%9A%E4%B8%AA%E6%B3%A8%E5%86%8C%E7%9A%84%E6%83%85%E5%86%B5%E4%B8%8B%E5%8F%AF%E4%BB%A5%E7%9B%B4%E8%BF%9E%E6%9F%90%E4%B8%80%E4%B8%AA%E6%9C%8D%E5%8A%A1%E5%90%97" target="_blank" rel="noreferrer">8、同一个服务多个注册的情况下可以直连某一个服务吗？</a> <a class="header-anchor" href="#_8、同一个服务多个注册的情况下可以直连某一个服务吗" aria-label="Permalink to &quot;[8、同一个服务多个注册的情况下可以直连某一个服务吗？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo最新面试题2021年，常见面试题及答案汇总.md#8同一个服务多个注册的情况下可以直连某一个服务吗)&quot;">​</a></h3><p>可以点对点直连，修改配置即可，也可以通过telnet直连某个服务。</p><h3 id="_9、默认使用什么序列化框架-你知道的还有哪些" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#9%E9%BB%98%E8%AE%A4%E4%BD%BF%E7%94%A8%E4%BB%80%E4%B9%88%E5%BA%8F%E5%88%97%E5%8C%96%E6%A1%86%E6%9E%B6%E4%BD%A0%E7%9F%A5%E9%81%93%E7%9A%84%E8%BF%98%E6%9C%89%E5%93%AA%E4%BA%9B" target="_blank" rel="noreferrer">9、默认使用什么序列化框架，你知道的还有哪些？</a> <a class="header-anchor" href="#_9、默认使用什么序列化框架-你知道的还有哪些" aria-label="Permalink to &quot;[9、默认使用什么序列化框架，你知道的还有哪些？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo最新面试题2021年，常见面试题及答案汇总.md#9默认使用什么序列化框架你知道的还有哪些)&quot;">​</a></h3><p>推荐使用Hessian序列化，还有Dubbo、FastJson、Java自带序列化。</p><h3 id="_10、dubbo-和-dubbox-之间的区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#10dubbo-%E5%92%8C-dubbox-%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">10、Dubbo 和 Dubbox 之间的区别？</a> <a class="header-anchor" href="#_10、dubbo-和-dubbox-之间的区别" aria-label="Permalink to &quot;[10、Dubbo 和 Dubbox 之间的区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Dubbo/Dubbo最新面试题2021年，常见面试题及答案汇总.md#10dubbo-和-dubbox-之间的区别)&quot;">​</a></h3><p>dubbox 基于 dubbo 上做了一些扩展，如加了服务可 restful 调用，更新了开源组件等。</p><h3 id="_11、rpc使用了哪些关键技术-服务调用" tabindex="-1">11、RPC使用了哪些关键技术，服务调用 <a class="header-anchor" href="#_11、rpc使用了哪些关键技术-服务调用" aria-label="Permalink to &quot;11、RPC使用了哪些关键技术，服务调用&quot;">​</a></h3><h3 id="_12、rpc使用了哪些关键技术-rmi" tabindex="-1">12、RPC使用了哪些关键技术，RMI <a class="header-anchor" href="#_12、rpc使用了哪些关键技术-rmi" aria-label="Permalink to &quot;12、RPC使用了哪些关键技术，RMI&quot;">​</a></h3><h3 id="_13、rpc使用了哪些关键技术-从服务提供者的角度看" tabindex="-1">13、RPC使用了哪些关键技术，从服务提供者的角度看： <a class="header-anchor" href="#_13、rpc使用了哪些关键技术-从服务提供者的角度看" aria-label="Permalink to &quot;13、RPC使用了哪些关键技术，从服务提供者的角度看：&quot;">​</a></h3><h3 id="_14、服务提供者能实现失效踢出是什么原理" tabindex="-1">14、服务提供者能实现失效踢出是什么原理？ <a class="header-anchor" href="#_14、服务提供者能实现失效踢出是什么原理" aria-label="Permalink to &quot;14、服务提供者能实现失效踢出是什么原理？&quot;">​</a></h3><h3 id="_15、rpc使用了哪些关键技术-hessian" tabindex="-1">15、RPC使用了哪些关键技术，Hessian <a class="header-anchor" href="#_15、rpc使用了哪些关键技术-hessian" aria-label="Permalink to &quot;15、RPC使用了哪些关键技术，Hessian&quot;">​</a></h3><h3 id="_16、默认使用的是什么通信框架-还有别的选择吗" tabindex="-1">16、默认使用的是什么通信框架，还有别的选择吗? <a class="header-anchor" href="#_16、默认使用的是什么通信框架-还有别的选择吗" aria-label="Permalink to &quot;16、默认使用的是什么通信框架，还有别的选择吗?&quot;">​</a></h3><h3 id="_17、rpc使用了哪些关键技术-服务注册中心" tabindex="-1">17、RPC使用了哪些关键技术，服务注册中心 <a class="header-anchor" href="#_17、rpc使用了哪些关键技术-服务注册中心" aria-label="Permalink to &quot;17、RPC使用了哪些关键技术，服务注册中心&quot;">​</a></h3><h3 id="_18、dubbo有哪几种负载均衡策略-默认是哪种" tabindex="-1">18、Dubbo有哪几种负载均衡策略，默认是哪种？ <a class="header-anchor" href="#_18、dubbo有哪几种负载均衡策略-默认是哪种" aria-label="Permalink to &quot;18、Dubbo有哪几种负载均衡策略，默认是哪种？&quot;">​</a></h3><h3 id="_19、rpc使用了哪些关键技术-主流rpc框架有哪些" tabindex="-1">19、RPC使用了哪些关键技术，主流RPC框架有哪些 <a class="header-anchor" href="#_19、rpc使用了哪些关键技术-主流rpc框架有哪些" aria-label="Permalink to &quot;19、RPC使用了哪些关键技术，主流RPC框架有哪些&quot;">​</a></h3><h3 id="_20、一般使用什么注册中心-还有别的选择吗" tabindex="-1">20、一般使用什么注册中心？还有别的选择吗？ <a class="header-anchor" href="#_20、一般使用什么注册中心-还有别的选择吗" aria-label="Permalink to &quot;20、一般使用什么注册中心？还有别的选择吗？&quot;">​</a></h3><h3 id="_21、rpc使用了哪些关键技术-rpc的实现原理架构图" tabindex="-1">21、RPC使用了哪些关键技术，RPC的实现原理架构图 <a class="header-anchor" href="#_21、rpc使用了哪些关键技术-rpc的实现原理架构图" aria-label="Permalink to &quot;21、RPC使用了哪些关键技术，RPC的实现原理架构图&quot;">​</a></h3><h3 id="_22、dubbo的管理控制台能做什么" tabindex="-1">22、Dubbo的管理控制台能做什么？ <a class="header-anchor" href="#_22、dubbo的管理控制台能做什么" aria-label="Permalink to &quot;22、Dubbo的管理控制台能做什么？&quot;">​</a></h3><h3 id="_23、dubbo-在安全方面有哪些措施" tabindex="-1">23、Dubbo 在安全方面有哪些措施？ <a class="header-anchor" href="#_23、dubbo-在安全方面有哪些措施" aria-label="Permalink to &quot;23、Dubbo 在安全方面有哪些措施？&quot;">​</a></h3><h3 id="_24、dubbo-支持哪些协议-它们的优缺点有哪些" tabindex="-1">24、Dubbo 支持哪些协议，它们的优缺点有哪些？ <a class="header-anchor" href="#_24、dubbo-支持哪些协议-它们的优缺点有哪些" aria-label="Permalink to &quot;24、Dubbo 支持哪些协议，它们的优缺点有哪些？&quot;">​</a></h3><h3 id="_25、你还了解别的分布式框架吗" tabindex="-1">25、你还了解别的分布式框架吗？ <a class="header-anchor" href="#_25、你还了解别的分布式框架吗" aria-label="Permalink to &quot;25、你还了解别的分布式框架吗？&quot;">​</a></h3><h3 id="_26、dubbo-超时设置有哪些方式" tabindex="-1">26、Dubbo 超时设置有哪些方式？ <a class="header-anchor" href="#_26、dubbo-超时设置有哪些方式" aria-label="Permalink to &quot;26、Dubbo 超时设置有哪些方式？&quot;">​</a></h3><h3 id="_27、dubbo能做什么" tabindex="-1">27、dubbo能做什么 <a class="header-anchor" href="#_27、dubbo能做什么" aria-label="Permalink to &quot;27、dubbo能做什么&quot;">​</a></h3><h3 id="_28、dubbo-的集群容错方案有哪些" tabindex="-1">28、Dubbo 的集群容错方案有哪些？ <a class="header-anchor" href="#_28、dubbo-的集群容错方案有哪些" aria-label="Permalink to &quot;28、Dubbo 的集群容错方案有哪些？&quot;">​</a></h3><h3 id="_29、默认使用什么序列化框架-你知道的还有哪些" tabindex="-1">29、默认使用什么序列化框架，你知道的还有哪些？ <a class="header-anchor" href="#_29、默认使用什么序列化框架-你知道的还有哪些" aria-label="Permalink to &quot;29、默认使用什么序列化框架，你知道的还有哪些？&quot;">​</a></h3><h3 id="_30、dubbo有哪几种集群容错方案-默认是哪种" tabindex="-1">30、Dubbo有哪几种集群容错方案，默认是哪种？ <a class="header-anchor" href="#_30、dubbo有哪几种集群容错方案-默认是哪种" aria-label="Permalink to &quot;30、Dubbo有哪几种集群容错方案，默认是哪种？&quot;">​</a></h3>',52),t=[r];function u(s,B,d,n,A,h){return a(),e("div",null,t)}const c=o(E,[["render",u]]);export{i as __pageData,c as default};
