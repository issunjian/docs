import{_ as a,o as e,c as t,V as o}from"./chunks/framework.c6d8cbec.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/rabbitmq/rabbitmq-01.md","filePath":"interview/backend/rabbitmq/rabbitmq-01.md"}'),r={name:"interview/backend/rabbitmq/rabbitmq-01.md"},i=o(`<h3 id="_1、vhost-是什么-起什么作用" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/RabbitMQ/RabbitMQ%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#1vhost-%E6%98%AF%E4%BB%80%E4%B9%88%E8%B5%B7%E4%BB%80%E4%B9%88%E4%BD%9C%E7%94%A8" target="_blank" rel="noreferrer">1、vhost 是什么？起什么作用？</a> <a class="header-anchor" href="#_1、vhost-是什么-起什么作用" aria-label="Permalink to &quot;[1、vhost 是什么？起什么作用？](https://gitee.com/souyunku/DevBooks/blob/master/docs/RabbitMQ/RabbitMQ最新2021年面试题，高级面试题及附答案解析.md#1vhost-是什么起什么作用)&quot;">​</a></h3><p>vhost 可以理解为虚拟 broker ，即 mini-RabbitMQ server。其内部均含有独立的queue、exchange 和 binding 等，但最最重要的是，其拥有独立的权限系统，可以做到vhost 范围的用户控制。</p><p>当然，从 RabbitMQ 的全局角度，vhost 可以作为不同权限隔离的手段（一个典型的例子就是不同的应用可以跑在不同的 vhost 中）。</p><h3 id="_2、amqp协议3层" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/RabbitMQ/RabbitMQ%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#2amqp%E5%8D%8F%E8%AE%AE3%E5%B1%82" target="_blank" rel="noreferrer">2、AMQP协议3层？</a> <a class="header-anchor" href="#_2、amqp协议3层" aria-label="Permalink to &quot;[2、AMQP协议3层？](https://gitee.com/souyunku/DevBooks/blob/master/docs/RabbitMQ/RabbitMQ最新2021年面试题，高级面试题及附答案解析.md#2amqp协议3层)&quot;">​</a></h3><p><strong>1、</strong> Module Layer：协议最高层，主要定义了一些客户端调用的命令，客户端可以用这些命令实现自己的业务逻辑。</p><p><strong>2、</strong> Session Layer：中间层，主要负责客户端命令发送给服务器，再将服务端应答返回客户端，提供可靠性同步机制和错误处理。</p><p><strong>3、</strong> TransportLayer：最底层，主要传输二进制数据流，提供帧的处理、信道服用、错误检测和数据表示等。</p><h3 id="_3、rabbitmq-topic-主题模式-路由模式的一种" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/RabbitMQ/RabbitMQ%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#3rabbitmq-topic-%E4%B8%BB%E9%A2%98%E6%A8%A1%E5%BC%8F%E8%B7%AF%E7%94%B1%E6%A8%A1%E5%BC%8F%E7%9A%84%E4%B8%80%E7%A7%8D" target="_blank" rel="noreferrer">3、RabbitMQ topic 主题模式(路由模式的一种)</a> <a class="header-anchor" href="#_3、rabbitmq-topic-主题模式-路由模式的一种" aria-label="Permalink to &quot;[3、RabbitMQ topic 主题模式(路由模式的一种)](https://gitee.com/souyunku/DevBooks/blob/master/docs/RabbitMQ/RabbitMQ最新2021年面试题，高级面试题及附答案解析.md#3rabbitmq-topic-主题模式路由模式的一种)&quot;">​</a></h3><p><img src="https://gitee.com/souyunkutech/souyunku-home/raw/master/images/souyunku-web/2020/5/2/030/5/35_8.png#alt=35%5C_8.png" alt=""></p><p><strong>1、</strong> 星号井号代表通配符</p><p><strong>2、</strong> 星号代表多个单词,井号代表一个单词</p><p><strong>3、</strong> 路由功能添加模糊匹配</p><p><strong>4、</strong> 消息产生者产生消息,把消息交给交换机</p><p><strong>5、</strong> 交换机根据key的规则模糊匹配到对应的队列,由队列的监听消费者接收消息消费</p><p>在我的理解看来就是routing查询的一种模糊匹配，就类似sql的模糊查询方式</p><h3 id="_4、rabbitmq基本概念" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/RabbitMQ/RabbitMQ%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#4rabbitmq%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5" target="_blank" rel="noreferrer">4、RabbitMQ基本概念</a> <a class="header-anchor" href="#_4、rabbitmq基本概念" aria-label="Permalink to &quot;[4、RabbitMQ基本概念](https://gitee.com/souyunku/DevBooks/blob/master/docs/RabbitMQ/RabbitMQ最新2021年面试题，高级面试题及附答案解析.md#4rabbitmq基本概念)&quot;">​</a></h3><p><strong>1、</strong> Broker： 简单来说就是消息队列服务器实体</p><p><strong>2、</strong> Exchange： 消息交换机，它指定消息按什么规则，路由到哪个队列</p><p><strong>3、</strong> Queue： 消息队列载体，每个消息都会被投入到一个或多个队列</p><p><strong>4、</strong> Binding： 绑定，它的作用就是把exchange和queue按照路由规则绑定起来</p><p><strong>5、</strong> Routing Key： 路由关键字，exchange根据这个关键字进行消息投递</p><p><strong>6、</strong> VHost： vhost 可以理解为虚拟 broker ，即 mini-RabbitMQ server。其内部均含有独立的 queue、exchange 和 binding 等，但最最重要的是，其拥有独立的权限系统，可以做到 vhost 范围的用户控制。当然，从 RabbitMQ 的全局角度，vhost 可以作为不同权限隔离的手段（一个典型的例子就是不同的应用可以跑在不同的 vhost 中）。</p><p><strong>7、</strong> Producer： 消息生产者，就是投递消息的程序</p><p><strong>8、</strong> Consumer： 消息消费者，就是接受消息的程序</p><p><strong>9、</strong> Channel： 消息通道，在客户端的每个连接里，可建立多个channel，每个channel代表一个会话任务</p><p>由Exchange、Queue、RoutingKey三个才能决定一个从Exchange到Queue的唯一的线路。</p><h3 id="_5、消息如何被优先消费" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/RabbitMQ/RabbitMQ%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#5%E6%B6%88%E6%81%AF%E5%A6%82%E4%BD%95%E8%A2%AB%E4%BC%98%E5%85%88%E6%B6%88%E8%B4%B9" target="_blank" rel="noreferrer">5、消息如何被优先消费？</a> <a class="header-anchor" href="#_5、消息如何被优先消费" aria-label="Permalink to &quot;[5、消息如何被优先消费？](https://gitee.com/souyunku/DevBooks/blob/master/docs/RabbitMQ/RabbitMQ最新2021年面试题，高级面试题及附答案解析.md#5消息如何被优先消费)&quot;">​</a></h3><p>生产者</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">Map&lt;String, Object&gt; argss = new HashMap&lt;String, Object&gt;();</span></span>
<span class="line"><span style="color:#f6f6f4;">argss.put(&quot;x-max-priority&quot;,10);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Map&lt;String, Object&gt; argss = new HashMap&lt;String, Object&gt;();</span></span>
<span class="line"><span style="color:#24292e;">argss.put(&quot;x-max-priority&quot;,10);</span></span></code></pre></div><p>消费者</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">AMQP.BasicProperties properties = new AMQP.BasicProperties.Builder()</span></span>
<span class="line"><span style="color:#f6f6f4;">    .priority(5) // 优先级，默认为5，配合队列的 x-max-priority 属性使用</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">AMQP.BasicProperties properties = new AMQP.BasicProperties.Builder()</span></span>
<span class="line"><span style="color:#24292e;">    .priority(5) // 优先级，默认为5，配合队列的 x-max-priority 属性使用</span></span></code></pre></div><h3 id="_6、在单-node-系统和多-node-构成的-cluster-系统中声明-queue、exchange-以及进行-binding-会有什么不同" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/RabbitMQ/RabbitMQ%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#6%E5%9C%A8%E5%8D%95-node-%E7%B3%BB%E7%BB%9F%E5%92%8C%E5%A4%9A-node-%E6%9E%84%E6%88%90%E7%9A%84-cluster-%E7%B3%BB%E7%BB%9F%E4%B8%AD%E5%A3%B0%E6%98%8E-queueexchange-%E4%BB%A5%E5%8F%8A%E8%BF%9B%E8%A1%8C-binding-%E4%BC%9A%E6%9C%89%E4%BB%80%E4%B9%88%E4%B8%8D%E5%90%8C" target="_blank" rel="noreferrer">6、在单 node 系统和多 node 构成的 cluster 系统中声明 queue、exchange ，以及进行 binding 会有什么不同？</a> <a class="header-anchor" href="#_6、在单-node-系统和多-node-构成的-cluster-系统中声明-queue、exchange-以及进行-binding-会有什么不同" aria-label="Permalink to &quot;[6、在单 node 系统和多 node 构成的 cluster 系统中声明 queue、exchange ，以及进行 binding 会有什么不同？](https://gitee.com/souyunku/DevBooks/blob/master/docs/RabbitMQ/RabbitMQ最新2021年面试题，高级面试题及附答案解析.md#6在单-node-系统和多-node-构成的-cluster-系统中声明-queueexchange-以及进行-binding-会有什么不同)&quot;">​</a></h3><p>当你在单 node 上声明 queue 时，只要该 node 上相关元数据进行了变更，你就会得到 Queue.Declare-ok 回应；而在 cluster 上声明 queue ，则要求 cluster 上的全部node 都要进行元数据成功更新，才会得到 Queue.Declare-ok 回应。</p><p>另外，若 node 类型为 RAM node 则变更的数据仅保存在内存中，若类型为 disk node 则还要变更保存在磁盘上的数据。</p><h3 id="_7、rabbitmq消息是如何路由的" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/RabbitMQ/RabbitMQ%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#7rabbitmq%E6%B6%88%E6%81%AF%E6%98%AF%E5%A6%82%E4%BD%95%E8%B7%AF%E7%94%B1%E7%9A%84" target="_blank" rel="noreferrer">7、RabbitMQ消息是如何路由的？</a> <a class="header-anchor" href="#_7、rabbitmq消息是如何路由的" aria-label="Permalink to &quot;[7、RabbitMQ消息是如何路由的？](https://gitee.com/souyunku/DevBooks/blob/master/docs/RabbitMQ/RabbitMQ最新2021年面试题，高级面试题及附答案解析.md#7rabbitmq消息是如何路由的)&quot;">​</a></h3><p><strong>消息路由必须有三部分：交换器、路由、绑定。</strong></p><p>生产者把消息发布到交换器上，绑定决定了消息如何从路由器路由到特定的队列；消息最终到达队列，并被消费者接收。</p><ol><li>消息发布到交换器时，消息将拥有一个 路由键（routing key） ， 在消息创建时设定。</li><li>通过队列路由键，可以把队列绑定到交换器上。</li><li>消息到达交换器后，RabbitMQ会将消息的路由键与队列的路由键进行匹配（针对不同的交换器有不同的路由规则）。如果能够匹配到队列，则消息会投递到相应队列中；如果不能匹配到任何队列，消息将进入&quot;黑洞&quot;。</li></ol><p><strong>常用的交换器主要分为以下三种：</strong></p><ol><li>direct ：如果路由键完全匹配，消息就会被投递到相应的队列；每个AMQP的实现都必须有一个direct交换器，包含一个空白字符串名称的默认交换器。声明一个队列时，会自动绑定到默认交换器，并且以队列名称作为路由键：channel -&gt; basic_public($msg, &#39;&#39;, &#39;queue-name&#39;)</li><li>fanout ： 如果交换器收到消息，将会广播到所有绑定的队列上；</li><li>topic ：可以使来自不同源头的消息能够到达同一个队列。使用topic交换器时，可以使用通配符，比如：&quot;*&quot; 匹配特定位置的任意文本，&quot;.&quot; 把路由键分为了几个标识符， &quot;#&quot; 匹配所有规则等。</li><li>特别注意：发往topic交换器的消息不能随意的设置选择键（routing_key），必须是有&quot;.&quot;隔开的一系列的标识符组成。</li></ol><h3 id="_8、交换器4种类型" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/RabbitMQ/RabbitMQ%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#8%E4%BA%A4%E6%8D%A2%E5%99%A84%E7%A7%8D%E7%B1%BB%E5%9E%8B" target="_blank" rel="noreferrer">8、交换器4种类型？</a> <a class="header-anchor" href="#_8、交换器4种类型" aria-label="Permalink to &quot;[8、交换器4种类型？](https://gitee.com/souyunku/DevBooks/blob/master/docs/RabbitMQ/RabbitMQ最新2021年面试题，高级面试题及附答案解析.md#8交换器4种类型)&quot;">​</a></h3><p>主要有以下4种。</p><p>fanout:把所有发送到该交换器的消息路由到所有与该交换器绑定的队列中。</p><p>direct:把消息路由到BindingKey和RoutingKey完全匹配的队列中。</p><p>topic:</p><p>匹配规则：</p><p>RoutingKey 为一个 点号&#39;.&#39;: 分隔的字符串。 比如: java.xiaoka.show</p><p>BindingKey和RoutingKey一样也是点号“.“分隔的字符串。</p><p>BindingKey可使用 _ 和 # 用于做模糊匹配，_匹配一个单词，#匹配多个或者0个</p><p>headers:不依赖路由键匹配规则路由消息。是根据发送消息内容中的headers属性进行匹配。性能差，基本用不到。</p><h3 id="_9、交换器无法根据自身类型和路由键找到符合条件队列时-有哪些处理" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/RabbitMQ/RabbitMQ%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#9%E4%BA%A4%E6%8D%A2%E5%99%A8%E6%97%A0%E6%B3%95%E6%A0%B9%E6%8D%AE%E8%87%AA%E8%BA%AB%E7%B1%BB%E5%9E%8B%E5%92%8C%E8%B7%AF%E7%94%B1%E9%94%AE%E6%89%BE%E5%88%B0%E7%AC%A6%E5%90%88%E6%9D%A1%E4%BB%B6%E9%98%9F%E5%88%97%E6%97%B6%E6%9C%89%E5%93%AA%E4%BA%9B%E5%A4%84%E7%90%86" target="_blank" rel="noreferrer">9、交换器无法根据自身类型和路由键找到符合条件队列时，有哪些处理？</a> <a class="header-anchor" href="#_9、交换器无法根据自身类型和路由键找到符合条件队列时-有哪些处理" aria-label="Permalink to &quot;[9、交换器无法根据自身类型和路由键找到符合条件队列时，有哪些处理？](https://gitee.com/souyunku/DevBooks/blob/master/docs/RabbitMQ/RabbitMQ最新2021年面试题，高级面试题及附答案解析.md#9交换器无法根据自身类型和路由键找到符合条件队列时有哪些处理)&quot;">​</a></h3><p>mandatory ：true 返回消息给生产者。</p><p>mandatory: false 直接丢弃。</p><h3 id="_10、rabbitmq队列结构" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/RabbitMQ/RabbitMQ%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#10rabbitmq%E9%98%9F%E5%88%97%E7%BB%93%E6%9E%84" target="_blank" rel="noreferrer">10、RabbitMQ队列结构？</a> <a class="header-anchor" href="#_10、rabbitmq队列结构" aria-label="Permalink to &quot;[10、RabbitMQ队列结构？](https://gitee.com/souyunku/DevBooks/blob/master/docs/RabbitMQ/RabbitMQ最新2021年面试题，高级面试题及附答案解析.md#10rabbitmq队列结构)&quot;">​</a></h3><p><strong>通常由以下两部分组成：</strong></p><p>rabbit_amqqueue_process：负责协议相关的消息处理，即接收生产者的消息、向消费者交付消息、处理消息的确认(包括生产端的 confirm 和消费端的 ack) 等。</p><p>backing_queue：是消息存储的具体形式和引擎，并向 rabbit amqqueue process 提供相关的接口以供调用。</p><h3 id="_11、什么是mq" tabindex="-1">11、什么是MQ <a class="header-anchor" href="#_11、什么是mq" aria-label="Permalink to &quot;11、什么是MQ&quot;">​</a></h3><h3 id="_12、如何保证rabbitmq消息的顺序性" tabindex="-1">12、如何保证RabbitMQ消息的顺序性？ <a class="header-anchor" href="#_12、如何保证rabbitmq消息的顺序性" aria-label="Permalink to &quot;12、如何保证RabbitMQ消息的顺序性？&quot;">​</a></h3><h3 id="_13、消息基于什么传输" tabindex="-1">13、消息基于什么传输？ <a class="header-anchor" href="#_13、消息基于什么传输" aria-label="Permalink to &quot;13、消息基于什么传输？&quot;">​</a></h3><h3 id="_14、rabbitmq的特点" tabindex="-1">14、RabbitMQ的特点? <a class="header-anchor" href="#_14、rabbitmq的特点" aria-label="Permalink to &quot;14、RabbitMQ的特点?&quot;">​</a></h3><h3 id="_15、为什么要使用rabbitmq" tabindex="-1">15、为什么要使用rabbitmq <a class="header-anchor" href="#_15、为什么要使用rabbitmq" aria-label="Permalink to &quot;15、为什么要使用rabbitmq&quot;">​</a></h3><h3 id="_16、amqp模型的几大组件" tabindex="-1">16、AMQP模型的几大组件？ <a class="header-anchor" href="#_16、amqp模型的几大组件" aria-label="Permalink to &quot;16、AMQP模型的几大组件？&quot;">​</a></h3><h3 id="_17、如何确保消息不丢失" tabindex="-1">17、如何确保消息不丢失？ <a class="header-anchor" href="#_17、如何确保消息不丢失" aria-label="Permalink to &quot;17、如何确保消息不丢失？&quot;">​</a></h3><h3 id="_18、rabbitmq-work工作模式-资源的竞争" tabindex="-1">18、RabbitMQ work工作模式(资源的竞争) <a class="header-anchor" href="#_18、rabbitmq-work工作模式-资源的竞争" aria-label="Permalink to &quot;18、RabbitMQ work工作模式(资源的竞争)&quot;">​</a></h3><h3 id="_19、amqp模型的几大组件" tabindex="-1">19、AMQP模型的几大组件？ <a class="header-anchor" href="#_19、amqp模型的几大组件" aria-label="Permalink to &quot;19、AMQP模型的几大组件？&quot;">​</a></h3><h3 id="_20、使用rabbitmq的场景" tabindex="-1">20、使用rabbitmq的场景 <a class="header-anchor" href="#_20、使用rabbitmq的场景" aria-label="Permalink to &quot;20、使用rabbitmq的场景&quot;">​</a></h3><h3 id="_21、什么是exchange交换器" tabindex="-1">21、什么是Exchange交换器？ <a class="header-anchor" href="#_21、什么是exchange交换器" aria-label="Permalink to &quot;21、什么是Exchange交换器？&quot;">​</a></h3><h3 id="_22、mq的优点" tabindex="-1">22、MQ的优点 <a class="header-anchor" href="#_22、mq的优点" aria-label="Permalink to &quot;22、MQ的优点&quot;">​</a></h3><h3 id="_23、为什么-heavy-rpc-的使用场景下不建议采用-disk-node" tabindex="-1">23、为什么 heavy RPC 的使用场景下不建议采用 disk node ？ <a class="header-anchor" href="#_23、为什么-heavy-rpc-的使用场景下不建议采用-disk-node" aria-label="Permalink to &quot;23、为什么 heavy RPC 的使用场景下不建议采用 disk node ？&quot;">​</a></h3><h3 id="_24、如何保证rabbitmq不被重复消费" tabindex="-1">24、如何保证RabbitMQ不被重复消费？ <a class="header-anchor" href="#_24、如何保证rabbitmq不被重复消费" aria-label="Permalink to &quot;24、如何保证RabbitMQ不被重复消费？&quot;">​</a></h3><h3 id="_25、如何确保消息正确地发送至rabbitmq-如何确保消息接收方消费了消息" tabindex="-1">25、如何确保消息正确地发送至RabbitMQ？ 如何确保消息接收方消费了消息？ <a class="header-anchor" href="#_25、如何确保消息正确地发送至rabbitmq-如何确保消息接收方消费了消息" aria-label="Permalink to &quot;25、如何确保消息正确地发送至RabbitMQ？ 如何确保消息接收方消费了消息？&quot;">​</a></h3><h3 id="_26、rabbitmq-包括哪些要素" tabindex="-1">26、RabbitMQ 包括哪些要素？ <a class="header-anchor" href="#_26、rabbitmq-包括哪些要素" aria-label="Permalink to &quot;26、RabbitMQ 包括哪些要素？&quot;">​</a></h3><h3 id="_27、设计mq思路" tabindex="-1">27、设计MQ思路 <a class="header-anchor" href="#_27、设计mq思路" aria-label="Permalink to &quot;27、设计MQ思路&quot;">​</a></h3><h3 id="_28、rabbitmq-中的-broker-是指什么-cluster-又是指什么" tabindex="-1">28、RabbitMQ 中的 Broker 是指什么？Cluster 又是指什么？ <a class="header-anchor" href="#_28、rabbitmq-中的-broker-是指什么-cluster-又是指什么" aria-label="Permalink to &quot;28、RabbitMQ 中的 Broker 是指什么？Cluster 又是指什么？&quot;">​</a></h3>`,75),s=[i];function b(n,E,l,h,c,u){return e(),t("div",null,s)}const A=a(r,[["render",b]]);export{d as __pageData,A as default};