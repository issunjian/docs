import{_ as a,o as e,c as o,V as n}from"./chunks/framework.c6d8cbec.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/java/java-22.md","filePath":"interview/backend/java/java-22.md"}'),r={name:"interview/backend/java/java-22.md"},s=n(`<h3 id="_1、volatile-关键字的作用" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#1volatile-%E5%85%B3%E9%94%AE%E5%AD%97%E7%9A%84%E4%BD%9C%E7%94%A8" target="_blank" rel="noreferrer">1、volatile 关键字的作用</a> <a class="header-anchor" href="#_1、volatile-关键字的作用" aria-label="Permalink to &quot;[1、volatile 关键字的作用](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题2021年，常见面试题及答案汇总.md#1volatile-关键字的作用)&quot;">​</a></h3><p><strong>1、</strong> 对于可见性，Java 提供了 volatile 关键字来保证可见性和禁止指令重排。 volatile 提供 happens-before 的保证，确保一个线程的修改能对其他线程是可见的。当一个共享变量被 volatile修饰时，它会保证修改的值会立即被更新到主内存中，当有其他线程需要读取时，它会去内存中读取新值。</p><p><strong>2、</strong> 从实践角度而言，volatile 的一个重要作用就是和 CAS 结合，保证了原子性，详细的可以参见 java.util.concurrent.atomic 包下的类，比如 AtomicInteger。</p><p><strong>3、</strong> volatile 常用于多线程环境下的单次操作(单次读或者单次写)。</p><h3 id="_2、java-中用到的线程调度算法是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#2java-%E4%B8%AD%E7%94%A8%E5%88%B0%E7%9A%84%E7%BA%BF%E7%A8%8B%E8%B0%83%E5%BA%A6%E7%AE%97%E6%B3%95%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">2、Java 中用到的线程调度算法是什么？</a> <a class="header-anchor" href="#_2、java-中用到的线程调度算法是什么" aria-label="Permalink to &quot;[2、Java 中用到的线程调度算法是什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题2021年，常见面试题及答案汇总.md#2java-中用到的线程调度算法是什么)&quot;">​</a></h3><p>计算机通常只有一个 CPU，在任意时刻只能执行一条机器指令，每个线程只有获得CPU 的使用权才能执行指令。所谓多线程的并发运行，其实是指从宏观上看，各个线程轮流获得 CPU 的使用权，分别执行各自的任务。在运行池中，会有多个处于就绪状态的线程在等待 CPU，JAVA 虚拟机的一项任务就是负责线程的调度，线程调度是指按照特定机制为多个线程分配 CPU 的使用权。（Java是由JVM中的线程计数器来实现线程调度）</p><p><strong>有两种调度模型：</strong></p><p>分时调度模型和抢占式调度模型。</p><p><strong>1、</strong> 分时调度模型是指让所有的线程轮流获得 cpu 的使用权，并且平均分配每个线程占用的 CPU 的时间片这个也比较好理解。</p><p><strong>2、</strong> Java虚拟机采用抢占式调度模型，是指优先让可运行池中优先级高的线程占用CPU，如果可运行池中的线程优先级相同，那么就随机选择一个线程，使其占用CPU。处于运行状态的线程会一直运行，直至它不得不放弃 CPU。</p><h3 id="_3、简单描述一下-分代-垃圾回收的过程" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#3%E7%AE%80%E5%8D%95%E6%8F%8F%E8%BF%B0%E4%B8%80%E4%B8%8B%E5%88%86%E4%BB%A3%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E7%9A%84%E8%BF%87%E7%A8%8B" target="_blank" rel="noreferrer">3、简单描述一下（分代）垃圾回收的过程</a> <a class="header-anchor" href="#_3、简单描述一下-分代-垃圾回收的过程" aria-label="Permalink to &quot;[3、简单描述一下（分代）垃圾回收的过程](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题2021年，常见面试题及答案汇总.md#3简单描述一下分代垃圾回收的过程)&quot;">​</a></h3><p>分代回收器有两个分区：老生代和新生代，新生代默认的空间占比总空间的 <code>1/3</code>，老生代的默认占比是 <code>2/3</code>。</p><p>新生代使用的是复制算法，新生代里有 3 个分区：<code>Eden</code>、<code>To Survivor</code>、<code>From Survivor</code>，它们的默认占比是 <code>8:1:1</code>，它的执行流程如下：</p><p><strong>当年轻代中的Eden区分配满的时候，就会触发年轻代的GC（Minor GC）。具体过程如下：</strong></p><p><strong>1、</strong> 在Eden区执行了 <code>第一次</code>GC之后，存活的对象会被移动到其中一个Survivor分区（以下简称from）</p><p><strong>2、</strong> Eden区再次GC，这时会采用复制算法，将Eden和from区一起清理。存活的对象会被复制到to区。接下来，只需要清空from区就可以了</p><h3 id="_4、什么是可重入锁-reentrantlock" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#4%E4%BB%80%E4%B9%88%E6%98%AF%E5%8F%AF%E9%87%8D%E5%85%A5%E9%94%81reentrantlock" target="_blank" rel="noreferrer">4、什么是可重入锁（ReentrantLock）？</a> <a class="header-anchor" href="#_4、什么是可重入锁-reentrantlock" aria-label="Permalink to &quot;[4、什么是可重入锁（ReentrantLock）？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题2021年，常见面试题及答案汇总.md#4什么是可重入锁reentrantlock)&quot;">​</a></h3><p>举例来说明锁的可重入性</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">public class UnReentrant{</span></span>
<span class="line"><span style="color:#f6f6f4;">    Lock lock = new Lock();</span></span>
<span class="line"><span style="color:#f6f6f4;">    public void outer(){</span></span>
<span class="line"><span style="color:#f6f6f4;">        lock.lock();</span></span>
<span class="line"><span style="color:#f6f6f4;">        inner();</span></span>
<span class="line"><span style="color:#f6f6f4;">        lock.unlock();</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    public void inner(){</span></span>
<span class="line"><span style="color:#f6f6f4;">        lock.lock();</span></span>
<span class="line"><span style="color:#f6f6f4;">        //do something</span></span>
<span class="line"><span style="color:#f6f6f4;">        lock.unlock();</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class UnReentrant{</span></span>
<span class="line"><span style="color:#24292e;">    Lock lock = new Lock();</span></span>
<span class="line"><span style="color:#24292e;">    public void outer(){</span></span>
<span class="line"><span style="color:#24292e;">        lock.lock();</span></span>
<span class="line"><span style="color:#24292e;">        inner();</span></span>
<span class="line"><span style="color:#24292e;">        lock.unlock();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    public void inner(){</span></span>
<span class="line"><span style="color:#24292e;">        lock.lock();</span></span>
<span class="line"><span style="color:#24292e;">        //do something</span></span>
<span class="line"><span style="color:#24292e;">        lock.unlock();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>outer中调用了inner，outer先锁住了lock，这样inner就不能再获取lock。其实调用outer的线程已经获取了lock锁，但是不能在inner中重复利用已经获取的锁资源，这种锁即称之为 不可重入可重入就意味着：线程可以进入任何一个它已经拥有的锁所同步着的代码块。</p><p>synchronized、ReentrantLock都是可重入的锁，可重入锁相对来说简化了并发编程的开发。</p><h3 id="_5、线程池有什么优点" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#5%E7%BA%BF%E7%A8%8B%E6%B1%A0%E6%9C%89%E4%BB%80%E4%B9%88%E4%BC%98%E7%82%B9" target="_blank" rel="noreferrer">5、线程池有什么优点？</a> <a class="header-anchor" href="#_5、线程池有什么优点" aria-label="Permalink to &quot;[5、线程池有什么优点？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题2021年，常见面试题及答案汇总.md#5线程池有什么优点)&quot;">​</a></h3><p><strong>1、</strong> 降低资源消耗：重用存在的线程，减少对象创建销毁的开销。</p><p><strong>2、</strong> 提高响应速度。可有效的控制最大并发线程数，提高系统资源的使用率，同时避免过多资源竞争，避免堵塞。当任务到达时，任务可以不需要的等到线程创建就能立即执行。</p><p><strong>3、</strong> 提高线程的可管理性。线程是稀缺资源，如果无限制的创建，不仅会消耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一的分配，调优和监控。</p><p><strong>4、</strong> 附加功能：提供定时执行、定期执行、单线程、并发数控制等功能。</p><h3 id="_6、你有哪些手段来排查-oom-的问题" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#6%E4%BD%A0%E6%9C%89%E5%93%AA%E4%BA%9B%E6%89%8B%E6%AE%B5%E6%9D%A5%E6%8E%92%E6%9F%A5-oom-%E7%9A%84%E9%97%AE%E9%A2%98" target="_blank" rel="noreferrer">6、你有哪些手段来排查 OOM 的问题？</a> <a class="header-anchor" href="#_6、你有哪些手段来排查-oom-的问题" aria-label="Permalink to &quot;[6、你有哪些手段来排查 OOM 的问题？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题2021年，常见面试题及答案汇总.md#6你有哪些手段来排查-oom-的问题)&quot;">​</a></h3><p><strong>1、</strong> 增加两个参数 -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp/heapdump.hprof，当 OOM 发生时自动 dump 堆内存信息到指定目录</p><p><strong>2、</strong> 同时 jstat 查看监控 JVM 的内存和 GC 情况，先观察问题大概出在什么区域</p><p><strong>3、</strong> 使用 MAT 工具载入到 dump 文件，分析大对象的占用情况，比如 HashMap 做缓存未清理，时间长了就会内存溢出，可以把改为弱引用</p><h3 id="_7、什么是线程异步-什么是线程同步" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#7%E4%BB%80%E4%B9%88%E6%98%AF%E7%BA%BF%E7%A8%8B%E5%BC%82%E6%AD%A5%E4%BB%80%E4%B9%88%E6%98%AF%E7%BA%BF%E7%A8%8B%E5%90%8C%E6%AD%A5" target="_blank" rel="noreferrer">7、什么是线程异步？什么是线程同步？</a> <a class="header-anchor" href="#_7、什么是线程异步-什么是线程同步" aria-label="Permalink to &quot;[7、什么是线程异步？什么是线程同步？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题2021年，常见面试题及答案汇总.md#7什么是线程异步什么是线程同步)&quot;">​</a></h3><p><strong>1、</strong> 线程同步：同时只有一条线程执行一个任务</p><p><strong>2、</strong> 线程异步：同时有多条线程可以执行执行任务</p><h3 id="_8、java-中-受检查异常-和-不受检查异常的区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#8java-%E4%B8%AD%E5%8F%97%E6%A3%80%E6%9F%A5%E5%BC%82%E5%B8%B8-%E5%92%8C-%E4%B8%8D%E5%8F%97%E6%A3%80%E6%9F%A5%E5%BC%82%E5%B8%B8%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">8、Java 中，受检查异常 和 不受检查异常的区别？</a> <a class="header-anchor" href="#_8、java-中-受检查异常-和-不受检查异常的区别" aria-label="Permalink to &quot;[8、Java 中，受检查异常 和 不受检查异常的区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题2021年，常见面试题及答案汇总.md#8java-中受检查异常-和-不受检查异常的区别)&quot;">​</a></h3><p>受检查异常编译器在编译期间检查。对于这种异常，方法强制处理或者通过 throws 子句声明。其中一种情况是 Exception 的子类但不是 RuntimeException 的子类。非受检查是 RuntimeException 的子类，在编译阶段不受编译器的检查。</p><h3 id="_9、oop-中的-组合、聚合和关联有什么区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#9oop-%E4%B8%AD%E7%9A%84-%E7%BB%84%E5%90%88%E8%81%9A%E5%90%88%E5%92%8C%E5%85%B3%E8%81%94%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">9、OOP 中的 组合、聚合和关联有什么区别？</a> <a class="header-anchor" href="#_9、oop-中的-组合、聚合和关联有什么区别" aria-label="Permalink to &quot;[9、OOP 中的 组合、聚合和关联有什么区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题2021年，常见面试题及答案汇总.md#9oop-中的-组合聚合和关联有什么区别)&quot;">​</a></h3><p>如果两个对象彼此有关系，就说他们是彼此相关联的。组合和聚合是面向对象中的两种形式的关联。组合是一种比聚合更强力的关联。组合中，一个对象是另一个的拥有者，而聚合则是指一个对象使用另一个对象。如果对象 A 是由对象 B 组合的，则 A 不存在的话，B一定不存在，但是如果 A 对象聚合了一个对象 B，则即使 A 不存在了，B 也可以单独存在。</p><h3 id="_10、java网络编程有几种" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#10java%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B%E6%9C%89%E5%87%A0%E7%A7%8D" target="_blank" rel="noreferrer">10、Java网络编程有几种？</a> <a class="header-anchor" href="#_10、java网络编程有几种" aria-label="Permalink to &quot;[10、Java网络编程有几种？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题2021年，常见面试题及答案汇总.md#10java网络编程有几种)&quot;">​</a></h3><p>TCP编程</p><p>UDP编程</p><h3 id="_11、怎么在jdbc内调用一个存储过程" tabindex="-1">11、怎么在JDBC内调用一个存储过程 <a class="header-anchor" href="#_11、怎么在jdbc内调用一个存储过程" aria-label="Permalink to &quot;11、怎么在JDBC内调用一个存储过程&quot;">​</a></h3><h3 id="_12、collection接口下有那些集合框架" tabindex="-1">12、Collection接口下有那些集合框架？ <a class="header-anchor" href="#_12、collection接口下有那些集合框架" aria-label="Permalink to &quot;12、Collection接口下有那些集合框架？&quot;">​</a></h3><h3 id="_13、minorgc、majorgc、fullgc-什么时候发生" tabindex="-1">13、MinorGC、MajorGC、FullGC 什么时候发生？ <a class="header-anchor" href="#_13、minorgc、majorgc、fullgc-什么时候发生" aria-label="Permalink to &quot;13、MinorGC、MajorGC、FullGC 什么时候发生？&quot;">​</a></h3><h3 id="_14、readwritelock是什么" tabindex="-1">14、ReadWriteLock是什么 <a class="header-anchor" href="#_14、readwritelock是什么" aria-label="Permalink to &quot;14、ReadWriteLock是什么&quot;">​</a></h3><h3 id="_15、自动装箱与拆箱" tabindex="-1">15、自动装箱与拆箱 <a class="header-anchor" href="#_15、自动装箱与拆箱" aria-label="Permalink to &quot;15、自动装箱与拆箱&quot;">​</a></h3><h3 id="_16、设计模式的六大原则" tabindex="-1">16、设计模式的六大原则 <a class="header-anchor" href="#_16、设计模式的六大原则" aria-label="Permalink to &quot;16、设计模式的六大原则&quot;">​</a></h3><h3 id="_17、给我一个符合开闭原则的设计模式的例子" tabindex="-1">17、给我一个符合开闭原则的设计模式的例子？ <a class="header-anchor" href="#_17、给我一个符合开闭原则的设计模式的例子" aria-label="Permalink to &quot;17、给我一个符合开闭原则的设计模式的例子？&quot;">​</a></h3><h3 id="_18、concurrenthashmap-底层具体实现知道吗-实现原理是什么" tabindex="-1">18、ConcurrentHashMap 底层具体实现知道吗？实现原理是什么？ <a class="header-anchor" href="#_18、concurrenthashmap-底层具体实现知道吗-实现原理是什么" aria-label="Permalink to &quot;18、ConcurrentHashMap 底层具体实现知道吗？实现原理是什么？&quot;">​</a></h3><h3 id="_19、如何避免线程死锁" tabindex="-1">19、如何避免线程死锁 <a class="header-anchor" href="#_19、如何避免线程死锁" aria-label="Permalink to &quot;19、如何避免线程死锁&quot;">​</a></h3><h3 id="_20、类加载是什么" tabindex="-1">20、类加载是什么？ <a class="header-anchor" href="#_20、类加载是什么" aria-label="Permalink to &quot;20、类加载是什么？&quot;">​</a></h3><h3 id="_21、说说线程栈" tabindex="-1">21、说说线程栈 <a class="header-anchor" href="#_21、说说线程栈" aria-label="Permalink to &quot;21、说说线程栈&quot;">​</a></h3><h3 id="_22、url是什么-由哪些部分组成" tabindex="-1">22、url是什么？由哪些部分组成？ <a class="header-anchor" href="#_22、url是什么-由哪些部分组成" aria-label="Permalink to &quot;22、url是什么？由哪些部分组成？&quot;">​</a></h3><h3 id="_23、comparable-和-comparator的区别" tabindex="-1">23、comparable 和 comparator的区别？ <a class="header-anchor" href="#_23、comparable-和-comparator的区别" aria-label="Permalink to &quot;23、comparable 和 comparator的区别？&quot;">​</a></h3><h3 id="_24、在java中定义一个不做事且没有参数的构造方法的作用" tabindex="-1">24、在Java中定义一个不做事且没有参数的构造方法的作用 <a class="header-anchor" href="#_24、在java中定义一个不做事且没有参数的构造方法的作用" aria-label="Permalink to &quot;24、在Java中定义一个不做事且没有参数的构造方法的作用&quot;">​</a></h3><h3 id="_25、copyonwritearraylist-的设计思想" tabindex="-1">25、CopyOnWriteArrayList 的设计思想? <a class="header-anchor" href="#_25、copyonwritearraylist-的设计思想" aria-label="Permalink to &quot;25、CopyOnWriteArrayList 的设计思想?&quot;">​</a></h3><h3 id="_26、能够找到-reference-chain-的对象-就一定会存活么" tabindex="-1">26、能够找到 Reference Chain 的对象，就一定会存活么？ <a class="header-anchor" href="#_26、能够找到-reference-chain-的对象-就一定会存活么" aria-label="Permalink to &quot;26、能够找到 Reference Chain 的对象，就一定会存活么？&quot;">​</a></h3><h3 id="_27、什么是竞争条件-你怎样发现和解决竞争" tabindex="-1">27、什么是竞争条件？你怎样发现和解决竞争？ <a class="header-anchor" href="#_27、什么是竞争条件-你怎样发现和解决竞争" aria-label="Permalink to &quot;27、什么是竞争条件？你怎样发现和解决竞争？&quot;">​</a></h3><h3 id="_28、为什么代码会重排序" tabindex="-1">28、为什么代码会重排序？ <a class="header-anchor" href="#_28、为什么代码会重排序" aria-label="Permalink to &quot;28、为什么代码会重排序？&quot;">​</a></h3><h3 id="_29、谈谈双亲委派模型" tabindex="-1">29、谈谈双亲委派模型 <a class="header-anchor" href="#_29、谈谈双亲委派模型" aria-label="Permalink to &quot;29、谈谈双亲委派模型&quot;">​</a></h3><h3 id="_30、谈谈-jvm-中的常量池" tabindex="-1">30、谈谈 JVM 中的常量池 <a class="header-anchor" href="#_30、谈谈-jvm-中的常量池" aria-label="Permalink to &quot;30、谈谈 JVM 中的常量池&quot;">​</a></h3><h3 id="_31、jvm垃圾回收时候如何确定垃圾-什么是gc-roots" tabindex="-1">31、JVM垃圾回收时候如何确定垃圾？什么是GC Roots？ <a class="header-anchor" href="#_31、jvm垃圾回收时候如何确定垃圾-什么是gc-roots" aria-label="Permalink to &quot;31、JVM垃圾回收时候如何确定垃圾？什么是GC Roots？&quot;">​</a></h3><h3 id="_32、session加载实体对象的过程。" tabindex="-1">32、Session加载实体对象的过程。 <a class="header-anchor" href="#_32、session加载实体对象的过程。" aria-label="Permalink to &quot;32、Session加载实体对象的过程。&quot;">​</a></h3><h3 id="_33、32-位和-64-位的-jvm-int-类型变量的长度是多数" tabindex="-1">33、32 位和 64 位的 JVM，int 类型变量的长度是多数？ <a class="header-anchor" href="#_33、32-位和-64-位的-jvm-int-类型变量的长度是多数" aria-label="Permalink to &quot;33、32 位和 64 位的 JVM，int 类型变量的长度是多数？&quot;">​</a></h3><h3 id="_34、为什么-arraylist-的-elementdata-加上-transient-修饰" tabindex="-1">34、为什么 ArrayList 的 elementData 加上 transient 修饰？ <a class="header-anchor" href="#_34、为什么-arraylist-的-elementdata-加上-transient-修饰" aria-label="Permalink to &quot;34、为什么 ArrayList 的 elementData 加上 transient 修饰？&quot;">​</a></h3><h3 id="_35、java软引用" tabindex="-1">35、JAVA软引用 <a class="header-anchor" href="#_35、java软引用" aria-label="Permalink to &quot;35、JAVA软引用&quot;">​</a></h3><h3 id="_36、parallel-scavenge-收集器-多线程复制算法、高效" tabindex="-1">36、Parallel Scavenge 收集器（多线程复制算法、高效） <a class="header-anchor" href="#_36、parallel-scavenge-收集器-多线程复制算法、高效" aria-label="Permalink to &quot;36、Parallel Scavenge 收集器（多线程复制算法、高效）&quot;">​</a></h3><h3 id="_37、java-虚拟机栈的作用" tabindex="-1">37、Java 虚拟机栈的作用？ <a class="header-anchor" href="#_37、java-虚拟机栈的作用" aria-label="Permalink to &quot;37、Java 虚拟机栈的作用？&quot;">​</a></h3><h3 id="_38、cas的问题" tabindex="-1">38、CAS的问题 <a class="header-anchor" href="#_38、cas的问题" aria-label="Permalink to &quot;38、CAS的问题&quot;">​</a></h3><h3 id="_39、什么情况会造成元空间溢出" tabindex="-1">39、什么情况会造成元空间溢出？ <a class="header-anchor" href="#_39、什么情况会造成元空间溢出" aria-label="Permalink to &quot;39、什么情况会造成元空间溢出？&quot;">​</a></h3><h3 id="_40、final、finalize-和-finally-的不同之处" tabindex="-1">40、final、finalize 和 finally 的不同之处？ <a class="header-anchor" href="#_40、final、finalize-和-finally-的不同之处" aria-label="Permalink to &quot;40、final、finalize 和 finally 的不同之处？&quot;">​</a></h3><h3 id="_41、sql优化有那些方法" tabindex="-1">41、Sql优化有那些方法？ <a class="header-anchor" href="#_41、sql优化有那些方法" aria-label="Permalink to &quot;41、Sql优化有那些方法？&quot;">​</a></h3>`,71),t=[s];function l(i,c,E,h,p,d){return e(),o("div",null,t)}const A=a(r,[["render",l]]);export{u as __pageData,A as default};
