import{_ as e,o as t,c as a,V as n}from"./chunks/framework.c6d8cbec.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/netty/netty-02.md","filePath":"interview/backend/netty/netty-02.md"}'),o={name:"interview/backend/netty/netty-02.md"},r=n(`<h3 id="_1、nio的组成" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Netty/Netty%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#1nio%E7%9A%84%E7%BB%84%E6%88%90" target="_blank" rel="noreferrer">1、NIO的组成？</a> <a class="header-anchor" href="#_1、nio的组成" aria-label="Permalink to &quot;[1、NIO的组成？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Netty/Netty最新2021年面试题附答案解析，大汇总.md#1nio的组成)&quot;">​</a></h3><p>Buffer：与Channel进行交互，数据是从Channel读入缓冲区，从缓冲区写入Channel中的</p><p>flip方法 ：反转此缓冲区，将position给limit，然后将position置为0，其实就是切换读写模式</p><p>clear方法 ：清除此缓冲区，将position置为0，把capacity的值给limit。</p><p>rewind方法 ：重绕此缓冲区，将position置为0</p><p>DirectByteBuffer可减少一次系统空间到用户空间的拷贝。但Buffer创建和销毁的成本更高，不可控，通常会用内存池来提高性能。直接缓冲区主要分配给那些易受基础系统的本机I/O 操作影响的大型、持久的缓冲区。如果数据量比较小的中小应用情况下，可以考虑使用heapBuffer，由JVM进行管理。</p><p>Channel：表示 IO 源与目标打开的连接，是双向的，但不能直接访问数据，只能与Buffer 进行交互。通过源码可知，FileChannel的read方法和write方法都导致数据复制了两次！</p><p>Selector可使一个单独的线程管理多个Channel，open方法可创建Selector，register方法向多路复用器器注册通道，可以监听的事件类型：读、写、连接、accept。注册事件后会产生一个SelectionKey：它表示SelectableChannel 和Selector 之间的注册关系，wakeup方法：使尚未返回的第一个选择操作立即返回，唤醒的</p><p>原因是：注册了新的channel或者事件；channel关闭，取消注册；优先级更高的事件触发（如定时器事件），希望及时处理。</p><p>Selector在Linux的实现类是EPollSelectorImpl，委托给EPollArrayWrapper实现，其中三个native方法是对epoll的封装，而EPollSelectorImpl、implRegister方法，通过调用epoll_ctl向epoll实例中注册事件，还将注册的文件描述符(fd)与SelectionKey的对应关系添加到fdToKey中，这个map维护了文件描述符与SelectionKey的映射。</p><p>fdToKey有时会变得非常大，因为注册到Selector上的Channel非常多（百万连接）；过期或失效的Channel没有及时关闭。fdToKey总是串行读取的，而读取是在select方法中进行的，该方法是非线程安全的。</p><p>Pipe：两个线程之间的单向数据连接，数据会被写到sink通道，从source通道读取</p><p>NIO的服务端建立过程：Selector.open()：打开一个Selector；ServerSocketChannel.open()：创建服务端的Channel；bind()：绑定到某个端口上。并配置非阻塞模式；register()：注册Channel和关注的事件到Selector上；select()轮询拿到已经就绪的事件</p><h3 id="_2、netty-的线程模型" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Netty/Netty%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#2netty-%E7%9A%84%E7%BA%BF%E7%A8%8B%E6%A8%A1%E5%9E%8B" target="_blank" rel="noreferrer">2、Netty 的线程模型？</a> <a class="header-anchor" href="#_2、netty-的线程模型" aria-label="Permalink to &quot;[2、Netty 的线程模型？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Netty/Netty最新2021年面试题附答案解析，大汇总.md#2netty-的线程模型)&quot;">​</a></h3><p>Netty 通过 Reactor 模型基于多路复用器接收并处理用户请求，内部实现了两个线程池，<strong>boss 线程池和 work 线程池</strong>，其中** boss 线程池**的线程负责处理请求的 accept 事件，当接收到 accept 事件的请求时，把对应的 socket 封装到一个 NioSocketChannel 中，并交给 <strong>work线程池</strong>，其中 work 线程池负责请求的 read 和 write 事件，由对应的 Handler 处理。</p><p>**单线程模型：**所有 I/O 操作都由一个线程完成，即多路复用、事件分发和处理都是在一个Reactor 线程上完成的。既要接收客户端的连接请求,向服务端发起连接，又要发送/读取请求或应答/响应消息。一个 NIO线程同时处理成百上千的链路，性能上无法支撑，速度慢，若线程进入死循环，整个程序不可用，对于高负载、大并发的应用场景不合适。</p><p>**多线程模型：**有一个 NIO 线程（Acceptor） 只负责监听服务端，接收客户端的 TCP 连接请求；NIO 线程池负责网络 IO 的操作，即消息的读取、解码、编码和发送；1 个 NIO 线程可以同时处理 N 条链路，但是 1 个链路只对应 1 个 NIO 线程，这是为了防止发生并发操作问题。但在并发百万客户端连接或需要安全认证时，一个 Acceptor 线程可能会存在性能不足问题。</p><p>**主从多线程模型：**Acceptor线程用于绑定监听端口，接收客户端连接，将 SocketChannel从主线程池的 Reactor 线程的多路复用器上移除，重新注册到 Sub 线程池的线程上，用于处理 I/O 的读写等操作，从而保证 mainReactor 只负责接入认证、握手等操作；</p><h3 id="_3、netty-核心组件有哪些-分别有什么作用" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Netty/Netty%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#3netty-%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6%E6%9C%89%E5%93%AA%E4%BA%9B%E5%88%86%E5%88%AB%E6%9C%89%E4%BB%80%E4%B9%88%E4%BD%9C%E7%94%A8" target="_blank" rel="noreferrer">3、Netty 核心组件有哪些？分别有什么作用？</a> <a class="header-anchor" href="#_3、netty-核心组件有哪些-分别有什么作用" aria-label="Permalink to &quot;[3、Netty 核心组件有哪些？分别有什么作用？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Netty/Netty最新2021年面试题附答案解析，大汇总.md#3netty-核心组件有哪些分别有什么作用)&quot;">​</a></h3><p>Netty 核心组件有哪些？分别有什么作用？</p><p><strong>Channel</strong></p><p>Channel 接口是 Netty 对网络操作抽象类，它除了包括基本的 I/O 操作，如 bind()、connect()、read()、write() 等。</p><p>比较常用的Channel接口实现类是NioServerSocketChannel（服务端）和NioSocketChannel（客户端），这两个 Channel 可以和 BIO 编程模型中的ServerSocket以及Socket两个概念对应上。Netty 的 Channel 接口所提供的 API，大大地降低了直接使用 Socket 类的复杂性。</p><p><strong>EventLoop</strong></p><p>这么说吧！EventLoop（事件循环）接口可以说是 Netty 中最核心的概念了！</p><p>《Netty 实战》这本书是这样介绍它的：</p><p>EventLoop 定义了 Netty 的核心抽象，用于处理连接的生命周期中所发生的事件。</p><p>是不是很难理解？说实话，我学习 Netty 的时候看到这句话是没太能理解的。</p><p>说白了，<strong>EventLoop 的主要作用实际就是负责监听网络事件并调用事件处理器进行相关 I/O 操作的处理。</strong></p><p>那 Channel 和 EventLoop 直接有啥联系呢？</p><p>Channel 为 Netty 网络操作(读写等操作)抽象类，EventLoop 负责处理注册到其上的Channel 处理 I/O 操作，两者配合参与 I/O 操作。</p><p><strong>ChannelFuture</strong></p><p>Netty 是异步非阻塞的，所有的 I/O 操作都为异步的。</p><p>因此，我们不能立刻得到操作是否执行成功，但是，你可以通过 ChannelFuture 接口的 addListener() 方法注册一个 ChannelFutureListener，当操作执行成功或者失败时，监听就会自动触发返回结果。</p><p>并且，你还可以通过ChannelFuture 的 channel() 方法获取关联的Channel</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">public interface ChannelFuture extends Future&lt;Void&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">    Channel channel();</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    ChannelFuture addListener(GenericFutureListener&lt;? extends Future&lt;? super Void&gt;&gt; var1);</span></span>
<span class="line"><span style="color:#f6f6f4;">     ......</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    ChannelFuture sync() throws InterruptedException;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public interface ChannelFuture extends Future&lt;Void&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    Channel channel();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    ChannelFuture addListener(GenericFutureListener&lt;? extends Future&lt;? super Void&gt;&gt; var1);</span></span>
<span class="line"><span style="color:#24292e;">     ......</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    ChannelFuture sync() throws InterruptedException;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>另外，我们还可以通过 ChannelFuture 接口的 sync()方法让异步的操作变成同步的。</p><p><strong>ChannelHandler 和 ChannelPipeline</strong></p><p>下面这段代码使用过 Netty 的小伙伴应该不会陌生，我们指定了序列化编解码器以及自定义的 ChannelHandler 处理消息。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">b.group(eventLoopGroup)</span></span>
<span class="line"><span style="color:#f6f6f4;">        .handler(new ChannelInitializer&lt;SocketChannel&gt;() {</span></span>
<span class="line"><span style="color:#f6f6f4;">            @Override</span></span>
<span class="line"><span style="color:#f6f6f4;">            protected void initChannel(SocketChannel ch) {</span></span>
<span class="line"><span style="color:#f6f6f4;">                ch.pipeline().addLast(new NettyKryoDecoder(kryoSerializer, RpcResponse.class));</span></span>
<span class="line"><span style="color:#f6f6f4;">                ch.pipeline().addLast(new NettyKryoEncoder(kryoSerializer, RpcRequest.class));</span></span>
<span class="line"><span style="color:#f6f6f4;">                ch.pipeline().addLast(new KryoClientHandler());</span></span>
<span class="line"><span style="color:#f6f6f4;">            }</span></span>
<span class="line"><span style="color:#f6f6f4;">        });</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">b.group(eventLoopGroup)</span></span>
<span class="line"><span style="color:#24292e;">        .handler(new ChannelInitializer&lt;SocketChannel&gt;() {</span></span>
<span class="line"><span style="color:#24292e;">            @Override</span></span>
<span class="line"><span style="color:#24292e;">            protected void initChannel(SocketChannel ch) {</span></span>
<span class="line"><span style="color:#24292e;">                ch.pipeline().addLast(new NettyKryoDecoder(kryoSerializer, RpcResponse.class));</span></span>
<span class="line"><span style="color:#24292e;">                ch.pipeline().addLast(new NettyKryoEncoder(kryoSerializer, RpcRequest.class));</span></span>
<span class="line"><span style="color:#24292e;">                ch.pipeline().addLast(new KryoClientHandler());</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        });</span></span></code></pre></div><p>ChannelHandler 是消息的具体处理器。他负责处理读写操作、客户端连接等事情。</p><p>ChannelPipeline 为 ChannelHandler 的链，提供了一个容器并定义了用于沿着链传播入站和出站事件流的 API 。当 Channel 被创建时，它会被自动地分配到它专属的 ChannelPipeline。</p><p>我们可以在 ChannelPipeline 上通过 addLast() 方法添加一个或者多个ChannelHandler ，因为一个数据或者事件可能会被多个 Handler 处理。当一个 ChannelHandler 处理完之后就将数据交给下一个 ChannelHandler 。</p><h3 id="_4、什么是-tcp-粘包-拆包-有什么解决办法呢" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Netty/Netty%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#4%E4%BB%80%E4%B9%88%E6%98%AF-tcp-%E7%B2%98%E5%8C%85/%E6%8B%86%E5%8C%85%E6%9C%89%E4%BB%80%E4%B9%88%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95%E5%91%A2" target="_blank" rel="noreferrer">4、什么是 TCP 粘包/拆包?有什么解决办法呢？</a> <a class="header-anchor" href="#_4、什么是-tcp-粘包-拆包-有什么解决办法呢" aria-label="Permalink to &quot;[4、什么是 TCP 粘包/拆包?有什么解决办法呢？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Netty/Netty最新2021年面试题附答案解析，大汇总.md#4什么是-tcp-粘包/拆包有什么解决办法呢)&quot;">​</a></h3><p>什么是 TCP 粘包/拆包?</p><p>TCP 粘包/拆包 就是你基于 TCP 发送数据的时候，出现了多个字符串“粘”在了一起或者一个字符串被“拆”开的问题。比如你多次发送：“你好,你真帅啊！哥哥！”，但是客户端接收到的可能是下面这样的：</p><p><img src="https://p29-tt.byteimg.com/large/pgc-image/4320f906f0e54b989ab19fde5f823a16#alt=" alt=""></p><p>那有什么解决办法呢?</p><p><strong>使用 Netty 自带的解码器</strong></p><p>LineBasedFrameDecoder : 发送端发送数据包的时候，每个数据包之间以换行符作为分隔，LineBasedFrameDecoder 的工作原理是它依次遍历 ByteBuf 中的可读字节，判断是否有换行符，然后进行相应的截取。</p><p>DelimiterBasedFrameDecoder : 可以自定义分隔符解码器，<strong>LineBasedFrameDecoder</strong> 实际上是一种特殊的 DelimiterBasedFrameDecoder 解码器。</p><p>FixedLengthFrameDecoder: 固定长度解码器，它能够按照指定的长度对消息进行相应的拆包。</p><p>LengthFieldBasedFrameDecoder：</p><p><strong>自定义序列化编解码器</strong></p><p>在 Java 中自带的有实现 Serializable 接口来实现序列化，但由于它性能、安全性等原因一般情况下是不会被使用到的。</p><p>通常情况下，我们使用 Protostuff、Hessian2、json 序列方式比较多，另外还有一些序列化性能非常好的序列化方式也是很好的选择：</p><p>专门针对 Java 语言的：Kryo，FST 等等</p><p>跨语言的：Protostuff（基于 protobuf 发展而来），ProtoBuf，Thrift，Avro，MsgPack 等等</p><h3 id="_5、netty-的使用场景" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Netty/Netty%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#5netty-%E7%9A%84%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF" target="_blank" rel="noreferrer">5、Netty 的使用场景</a> <a class="header-anchor" href="#_5、netty-的使用场景" aria-label="Permalink to &quot;[5、Netty 的使用场景](https://gitee.com/souyunku/DevBooks/blob/master/docs/Netty/Netty最新2021年面试题附答案解析，大汇总.md#5netty-的使用场景)&quot;">​</a></h3><p><strong>1、</strong> 构建高性能、低时延的各种 Java 中间件，Netty 主要作为基础通信框架提供高性能、低时延的通信服务。例如：RocketMQ ，分布式消息队列。Dubbo ，服务调用框架。Spring WebFlux ，基于响应式的 Web 框架。</p><p><strong>2、</strong> 公有或者私有协议栈的基础通信框架，例如可以基于 Netty 构建异步、高性能的 WebSocket、Protobuf 等协议的支持。</p><p><strong>3、</strong> 各领域应用，例如大数据、游戏等，Netty 作为高性能的通信框架用于内部各模块的数据分发、传输和汇总等，实现模块之间高性能通信。</p><h3 id="_6、如何选择序列化协议" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Netty/Netty%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#6%E5%A6%82%E4%BD%95%E9%80%89%E6%8B%A9%E5%BA%8F%E5%88%97%E5%8C%96%E5%8D%8F%E8%AE%AE" target="_blank" rel="noreferrer">6、如何选择序列化协议？</a> <a class="header-anchor" href="#_6、如何选择序列化协议" aria-label="Permalink to &quot;[6、如何选择序列化协议？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Netty/Netty最新2021年面试题附答案解析，大汇总.md#6如何选择序列化协议)&quot;">​</a></h3><p>具体场景</p><p>对于公司间的系统调用，如果性能要求在100ms以上的服务，基于XML的SOAP协议是一个值得考虑的方案。</p><p>基于Web browser的Ajax，以及Mobile app与服务端之间的通讯，JSON协议是首选。对于性能要求不太高，或者以动态类型语言为主，或者传输数据载荷很小的的运用场景，JSON也是非常不错的选择。</p><p>对于调试环境比较恶劣的场景，采用JSON或XML能够极大的提高调试效率，降低系统开发成本。</p><p>当对性能和简洁性有极高要求的场景，Protobuf，Thrift，Avro之间具有一定的竞争关系。</p><p>对于T级别的数据的持久化应用场景，Protobuf和Avro是首要选择。如果持久化后的数据存储在hadoop子项目里，Avro会是更好的选择。</p><p>对于持久层非Hadoop项目，以静态类型语言为主的应用场景，Protobuf会更符合静态类型语言工程师的开发习惯。由于Avro的设计理念偏向于动态类型语言，对于动态语言为主的应用场景，Avro是更好的选择。</p><p>如果需要提供一个完整的RPC解决方案，Thrift是一个好的选择。</p><p>如果序列化之后需要支持不同的传输层协议，或者需要跨防火墙访问的高性能场景，Protobuf可以优先考虑。</p><p>protobuf的数据类型有多种：bool、double、float、int32、int64、string、bytes、enum、message。protobuf的限定符：required: 必须赋值，不能为空、optional:字段可以赋值，也可以不赋值、repeated: 该字段可以重复任意次数（包括0次）、枚举；只能用指定的常量集中的一个值作为其值；</p><p>protobuf的基本规则：每个消息中必须至少留有一个required类型的字段、包含0个或多个optional类型的字段；repeated表示的字段可以包含0个或多个数据；[1,15]之内的标识号在编码的时候会占用一个字节（常用），[16,2047]之内的标识号则占用2个字节，标识号一定不能重复、使用消息类型，也可以将消息嵌套任意多层，可用嵌套消息类型来代替组。</p><p>protobuf的消息升级原则：不要更改任何已有的字段的数值标识；不能移除已经存在的required字段，optional和repeated类型的字段可以被移除，但要保留标号不能被重用。新添加的字段必须是optional或repeated。因为旧版本程序无法读取或写入新增的required限定符的字段。</p><p>编译器为每一个消息类型生成了一个.java文件，以及一个特殊的Builder类（该类是用来创建消息类接口的）。如：UserProto.User.Builder builder = UserProto.User.newBuilder();builder.build()；</p><p>Netty中的使用：ProtobufVarint32FrameDecoder 是用于处理半包消息的解码类；ProtobufDecoder(UserProto.User.getDefaultInstance())这是创建的UserProto.java文件中的解码类；ProtobufVarint32LengthFieldPrepender 对protobuf协议的消息头上加上一个长度为32的整形字段，用于标志这个消息的长度的类；ProtobufEncoder 是编码类</p><p>将StringBuilder转换为ByteBuf类型：copiedBuffer()方法</p><h3 id="_7、tcp-粘包-拆包的原因及解决方法" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Netty/Netty%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#7tcp-%E7%B2%98%E5%8C%85/%E6%8B%86%E5%8C%85%E7%9A%84%E5%8E%9F%E5%9B%A0%E5%8F%8A%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95" target="_blank" rel="noreferrer">7、TCP 粘包/拆包的原因及解决方法？</a> <a class="header-anchor" href="#_7、tcp-粘包-拆包的原因及解决方法" aria-label="Permalink to &quot;[7、TCP 粘包/拆包的原因及解决方法？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Netty/Netty最新2021年面试题附答案解析，大汇总.md#7tcp-粘包/拆包的原因及解决方法)&quot;">​</a></h3><p>TCP 是以流的方式来处理数据，一个完整的包可能会被 TCP 拆分成多个包进行发送，也可能把小的封装成一个大的数据包发送。</p><p><strong>TCP 粘包/分包的原因：</strong></p><p>应用程序写入的字节大小大于套接字发送缓冲区的大小，会发生拆包现象，而应用程序写入数据小于套接字缓冲区大小，网卡将应用多次写入的数据发送到网络上，这将会发生粘包现象；</p><p>进行 MSS 大小的 TCP 分段，当 TCP 报文长度-TCP 头部长度&gt;MSS 的时候将发生拆包以太网帧的 payload（净荷）大于 MTU（1500 字节）进行 ip 分片。</p><p><strong>解决方法</strong></p><p>**消息定长：**FixedLengthFrameDecoder 类</p><p>**包尾增加特殊字符分割：**行分隔符类：LineBasedFrameDecoder 或自定义分隔符类</p><p>**DelimiterBasedFrameDecoder：**将消息分为消息头和消息体：LengthFieldBasedFrameDecoder 类。分为有头部的拆包与粘包、长度字段在前且有头部的拆包与粘包、多扩展头部的拆包与粘包。</p><h3 id="_8、netty-的零拷贝实现" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Netty/Netty%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#8netty-%E7%9A%84%E9%9B%B6%E6%8B%B7%E8%B4%9D%E5%AE%9E%E7%8E%B0" target="_blank" rel="noreferrer">8、Netty 的零拷贝实现？</a> <a class="header-anchor" href="#_8、netty-的零拷贝实现" aria-label="Permalink to &quot;[8、Netty 的零拷贝实现？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Netty/Netty最新2021年面试题附答案解析，大汇总.md#8netty-的零拷贝实现)&quot;">​</a></h3><p>Netty 的接收和发送 ByteBuffer 采用 DIRECT BUFFERS，使用堆外直接内存进行 Socket 读写，不需要进行字节缓冲区的二次拷贝。堆内存多了一次内存拷贝，JVM 会将堆内存Buffer 拷贝一份到直接内存中，然后才写入 Socket 中。ByteBuffer 由 ChannelConfig 分配，而 ChannelConfig 创建 ByteBufAllocator 默认使用 Direct Buffer</p><p>CompositeByteBuf 类可以将多个 ByteBuf 合并为一个逻辑上的 ByteBuf, 避免了传统通过内存拷贝的方式将几个小 Buffer 合并成一个大的 Buffer。addComponents 方法将header与 body 合并为一个逻辑上的 ByteBuf, 这两个 ByteBuf 在 CompositeByteBuf 内部都是单独存在的, CompositeByteBuf 只是逻辑上是一个整体。</p><p>通过 FileRegion 包装的 FileChannel.tranferTo 方法 实现文件传输, 可以直接将文件缓冲区的数据发送到目标 Channel，避免了传统通过循环 write 方式导致的内存拷贝问题。</p><p>通过 wrap 方法, 我们可以将 byte[] 数组、ByteBuf、ByteBuffer 等包装成一个 NettyByteBuf 对象, 进而避免了拷贝操作。</p><p>Selector BUG：若 Selector 的轮询结果为空，也没有 wakeup 或新消息处理，则发生空轮询，CPU 使用率 100%，</p><p>Netty 的解决办法：对 Selector 的 select 操作周期进行统计，每完成一次空的 select 操作进行一次计数，若在某个周期内连续发生 N 次空轮询，则触发了 epoll 死循环 bug。重建Selector，判断是否是其他线程发起的重建请求，若不是则将原 SocketChannel 从旧的Selector 上去除注册，重新注册到新的 Selector 上，并将原来的 Selector 关闭。</p><h3 id="_9、netty的线程模型" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Netty/Netty%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#9netty%E7%9A%84%E7%BA%BF%E7%A8%8B%E6%A8%A1%E5%9E%8B" target="_blank" rel="noreferrer">9、Netty的线程模型？</a> <a class="header-anchor" href="#_9、netty的线程模型" aria-label="Permalink to &quot;[9、Netty的线程模型？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Netty/Netty最新2021年面试题附答案解析，大汇总.md#9netty的线程模型)&quot;">​</a></h3><p>Netty通过Reactor模型基于多路复用器接收并处理用户请求，内部实现了两个线程池，boss线程池和work线程池，其中boss线程池的线程负责处理请求的accept事件，当接收到accept事件的请求时，把对应的socket封装到一个NioSocketChannel中，并交给work线程池，其中work线程池负责请求的read和write事件，由对应的Handler处理。</p><p>单线程模型：所有I/O操作都由一个线程完成，即多路复用、事件分发和处理都是在一个Reactor线程上完成的。既要接收客户端的连接请求,向服务端发起连接，又要发送/读取请求或应答/响应消息。一个NIO 线程同时处理成百上千的链路，性能上无法支撑，速度慢，若线程进入死循环，整个程序不可用，对于高负载、大并发的应用场景不合适。</p><p>多线程模型：有一个NIO 线程（Acceptor） 只负责监听服务端，接收客户端的TCP 连接请求；NIO 线程池负责网络IO 的操作，即消息的读取、解码、编码和发送；1 个NIO 线程可以同时处理N 条链路，但是1 个链路只对应1 个NIO 线程，这是为了防止发生并发操作问题。但在并发百万客户端连接或需要安全认证时，一个Acceptor 线程可能会存在性能不足问题。</p><p>主从多线程模型：Acceptor 线程用于绑定监听端口，接收客户端连接，将SocketChannel 从主线程池的Reactor 线程的多路复用器上移除，重新注册到Sub 线程池的线程上，用于处理I/O 的读写等操作，从而保证mainReactor只负责接入认证、握手等操作；</p><h3 id="_10、netty-空闲检测" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Netty/Netty%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#10netty-%E7%A9%BA%E9%97%B2%E6%A3%80%E6%B5%8B" target="_blank" rel="noreferrer">10、Netty 空闲检测</a> <a class="header-anchor" href="#_10、netty-空闲检测" aria-label="Permalink to &quot;[10、Netty 空闲检测](https://gitee.com/souyunku/DevBooks/blob/master/docs/Netty/Netty最新2021年面试题附答案解析，大汇总.md#10netty-空闲检测)&quot;">​</a></h3><p>IdleStateHandler ，用于检测连接的读写是否处于空闲状态。如果是，则会触发 IdleStateEvent 。</p><h3 id="_11、netty-高性能表现在哪些方面" tabindex="-1">11、Netty 高性能表现在哪些方面？ <a class="header-anchor" href="#_11、netty-高性能表现在哪些方面" aria-label="Permalink to &quot;11、Netty 高性能表现在哪些方面？&quot;">​</a></h3><h3 id="_12、netty自己实现的bytebuf有什么优点" tabindex="-1">12、Netty自己实现的ByteBuf有什么优点 <a class="header-anchor" href="#_12、netty自己实现的bytebuf有什么优点" aria-label="Permalink to &quot;12、Netty自己实现的ByteBuf有什么优点&quot;">​</a></h3><h3 id="_13、nio-的组成" tabindex="-1">13、NIO 的组成？ <a class="header-anchor" href="#_13、nio-的组成" aria-label="Permalink to &quot;13、NIO 的组成？&quot;">​</a></h3><h3 id="_14、bootstrap-和-serverbootstrap-了解么" tabindex="-1">14、Bootstrap 和 ServerBootstrap 了解么？ <a class="header-anchor" href="#_14、bootstrap-和-serverbootstrap-了解么" aria-label="Permalink to &quot;14、Bootstrap 和 ServerBootstrap 了解么？&quot;">​</a></h3><h3 id="_15、nioeventloopgroup-默认的构造函数会起多少线程" tabindex="-1">15、NioEventLoopGroup 默认的构造函数会起多少线程？ <a class="header-anchor" href="#_15、nioeventloopgroup-默认的构造函数会起多少线程" aria-label="Permalink to &quot;15、NioEventLoopGroup 默认的构造函数会起多少线程？&quot;">​</a></h3><h3 id="_16、netty怎样实现零拷贝" tabindex="-1">16、Netty怎样实现零拷贝 <a class="header-anchor" href="#_16、netty怎样实现零拷贝" aria-label="Permalink to &quot;16、Netty怎样实现零拷贝&quot;">​</a></h3><h3 id="_17、nioeventloopgroup-源码" tabindex="-1">17、NIOEventLoopGroup 源码？ <a class="header-anchor" href="#_17、nioeventloopgroup-源码" aria-label="Permalink to &quot;17、NIOEventLoopGroup 源码？&quot;">​</a></h3><h3 id="_18、netty-如何实现高性能" tabindex="-1">18、Netty 如何实现高性能 <a class="header-anchor" href="#_18、netty-如何实现高性能" aria-label="Permalink to &quot;18、Netty 如何实现高性能&quot;">​</a></h3><h3 id="_19、netty为什么说使用简单" tabindex="-1">19、Netty为什么说使用简单 <a class="header-anchor" href="#_19、netty为什么说使用简单" aria-label="Permalink to &quot;19、Netty为什么说使用简单&quot;">​</a></h3><h3 id="_20、tcp-粘包-拆包的原因及解决方法" tabindex="-1">20、TCP 粘包/拆包的原因及解决方法？ <a class="header-anchor" href="#_20、tcp-粘包-拆包的原因及解决方法" aria-label="Permalink to &quot;20、TCP 粘包/拆包的原因及解决方法？&quot;">​</a></h3><h3 id="_21、netty-的高性能体现在哪方面" tabindex="-1">21、Netty 的高性能体现在哪方面 <a class="header-anchor" href="#_21、netty-的高性能体现在哪方面" aria-label="Permalink to &quot;21、Netty 的高性能体现在哪方面&quot;">​</a></h3><h3 id="_22、netty-的优势有哪些" tabindex="-1">22、Netty 的优势有哪些？ <a class="header-anchor" href="#_22、netty-的优势有哪些" aria-label="Permalink to &quot;22、Netty 的优势有哪些？&quot;">​</a></h3><h3 id="_23、netty-和-tomcat-的区别" tabindex="-1">23、Netty 和 Tomcat 的区别？ <a class="header-anchor" href="#_23、netty-和-tomcat-的区别" aria-label="Permalink to &quot;23、Netty 和 Tomcat 的区别？&quot;">​</a></h3><h3 id="_24、netty的特点是什么-为什么选择-netty" tabindex="-1">24、Netty的特点是什么（ 为什么选择 Netty ） <a class="header-anchor" href="#_24、netty的特点是什么-为什么选择-netty" aria-label="Permalink to &quot;24、Netty的特点是什么（ 为什么选择 Netty ）&quot;">​</a></h3><h3 id="_25、netty-长连接、心跳机制了解么" tabindex="-1">25、Netty 长连接、心跳机制了解么？ <a class="header-anchor" href="#_25、netty-长连接、心跳机制了解么" aria-label="Permalink to &quot;25、Netty 长连接、心跳机制了解么？&quot;">​</a></h3><h3 id="_26、netty-线程模型了解么" tabindex="-1">26、Netty 线程模型了解么？ <a class="header-anchor" href="#_26、netty-线程模型了解么" aria-label="Permalink to &quot;26、Netty 线程模型了解么？&quot;">​</a></h3><h3 id="_27、netty如何实现重连" tabindex="-1">27、Netty如何实现重连 <a class="header-anchor" href="#_27、netty如何实现重连" aria-label="Permalink to &quot;27、Netty如何实现重连&quot;">​</a></h3><h3 id="_28、netty-的核心组件介绍下" tabindex="-1">28、Netty 的核心组件介绍下 <a class="header-anchor" href="#_28、netty-的核心组件介绍下" aria-label="Permalink to &quot;28、Netty 的核心组件介绍下&quot;">​</a></h3><h3 id="_29、netty-是什么" tabindex="-1">29、Netty 是什么？ <a class="header-anchor" href="#_29、netty-是什么" aria-label="Permalink to &quot;29、Netty 是什么？&quot;">​</a></h3><h3 id="_30、为什么要用-netty" tabindex="-1">30、为什么要用 Netty？ <a class="header-anchor" href="#_30、为什么要用-netty" aria-label="Permalink to &quot;30、为什么要用 Netty？&quot;">​</a></h3><h3 id="_31、默认情况-netty-起多少线程-何时启动" tabindex="-1">31、默认情况 Netty 起多少线程？何时启动？ <a class="header-anchor" href="#_31、默认情况-netty-起多少线程-何时启动" aria-label="Permalink to &quot;31、默认情况 Netty 起多少线程？何时启动？&quot;">​</a></h3><h3 id="_32、aio-是什么" tabindex="-1">32、AIO 是什么？ <a class="header-anchor" href="#_32、aio-是什么" aria-label="Permalink to &quot;32、AIO 是什么？&quot;">​</a></h3><h3 id="_33、什么是netty" tabindex="-1">33、什么是Netty <a class="header-anchor" href="#_33、什么是netty" aria-label="Permalink to &quot;33、什么是Netty&quot;">​</a></h3><h3 id="_34、bio、nio和aio的区别" tabindex="-1">34、BIO、NIO和AIO的区别？ <a class="header-anchor" href="#_34、bio、nio和aio的区别" aria-label="Permalink to &quot;34、BIO、NIO和AIO的区别？&quot;">​</a></h3>`,125),s=[r];function l(p,i,c,h,d,y){return t(),a("div",null,s)}const B=e(o,[["render",l]]);export{u as __pageData,B as default};