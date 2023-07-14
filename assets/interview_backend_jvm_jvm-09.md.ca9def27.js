import{_ as a,o as s,c as e,V as n}from"./chunks/framework.c6d8cbec.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/jvm/jvm-09.md","filePath":"interview/backend/jvm/jvm-09.md"}'),o={name:"interview/backend/jvm/jvm-09.md"},t=n(`<h3 id="_1、类加载为什么要使用双亲委派模式-有没有什么场景是打破了这个模式" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#1%E7%B1%BB%E5%8A%A0%E8%BD%BD%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E4%BD%BF%E7%94%A8%E5%8F%8C%E4%BA%B2%E5%A7%94%E6%B4%BE%E6%A8%A1%E5%BC%8F%E6%9C%89%E6%B2%A1%E6%9C%89%E4%BB%80%E4%B9%88%E5%9C%BA%E6%99%AF%E6%98%AF%E6%89%93%E7%A0%B4%E4%BA%86%E8%BF%99%E4%B8%AA%E6%A8%A1%E5%BC%8F" target="_blank" rel="noreferrer">1、类加载为什么要使用双亲委派模式，有没有什么场景是打破了这个模式？</a> <a class="header-anchor" href="#_1、类加载为什么要使用双亲委派模式-有没有什么场景是打破了这个模式" aria-label="Permalink to &quot;[1、类加载为什么要使用双亲委派模式，有没有什么场景是打破了这个模式？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新面试题及答案整理，汇总版.md#1类加载为什么要使用双亲委派模式有没有什么场景是打破了这个模式)&quot;">​</a></h3><p><strong>双亲委托模型的重要用途是为了解决类载入过程中的安全性问题。</strong></p><p><strong>1、</strong> 假设有一个开发者自己编写了一个名为<code>java.lang.Object</code>的类，想借此欺骗JVM。现在他要使用自定义<code>ClassLoader</code>来加载自己编写的<code>java.lang.Object</code>类。</p><p><strong>2、</strong> 然而幸运的是，双亲委托模型不会让他成功。因为JVM会优先在<code>Bootstrap ClassLoader</code>的路径下找到<code>java.lang.Object</code>类，并载入它</p><p>Java的类加载是否一定遵循双亲委托模型？</p><p><strong>1、</strong> 在实际开发中，我们可以通过自定义ClassLoader，并重写父类的loadClass方法，来打破这一机制。</p><p><strong>2、</strong> SPI就是打破了双亲委托机制的(SPI：服务提供发现)。</p><h3 id="_2、生产环境-cpu-占用过高-你如何解决" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#2%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83-cpu-%E5%8D%A0%E7%94%A8%E8%BF%87%E9%AB%98%E4%BD%A0%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3" target="_blank" rel="noreferrer">2、生产环境 CPU 占用过高，你如何解决？</a> <a class="header-anchor" href="#_2、生产环境-cpu-占用过高-你如何解决" aria-label="Permalink to &quot;[2、生产环境 CPU 占用过高，你如何解决？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新面试题及答案整理，汇总版.md#2生产环境-cpu-占用过高你如何解决)&quot;">​</a></h3><p><strong>1、</strong> top + H 指令找出占用 CPU 最高的进程的 pid</p><p><strong>2、</strong> top -H -p</p><p>在该进程中找到，哪些线程占用的 CPU 最高的线程，记录下 tid</p><p><strong>3、</strong> jstack -l</p><p>threads.txt，导出进程的线程栈信息到文本，导出出现异常的话，加上 -F 参数</p><p><strong>4、</strong> 将 tid 转换为十六进制，在 threads.txt 中搜索，查到对应的线程代码执行栈，在代码中查找占 CPU 比较高的原因。其中 tid 转十六进制，可以借助 Linux 的 printf &quot;%x&quot; tid 指令</p><p>我用上述方法查到过，jvm 多条线程疯狂 full gc 导致的CPU 100% 的问题和 JDK1.6 HashMap 并发 put 导致线程 CPU 100% 的问题</p><h3 id="_3、jvm-的内存模型是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#3jvm-%E7%9A%84%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">3、JVM 的内存模型是什么？</a> <a class="header-anchor" href="#_3、jvm-的内存模型是什么" aria-label="Permalink to &quot;[3、JVM 的内存模型是什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新面试题及答案整理，汇总版.md#3jvm-的内存模型是什么)&quot;">​</a></h3><p>JVM 试图定义一种统一的内存模型，能将各种底层硬件以及操作系统的内存访问差异进行封装，使 Java 程序在不同硬件以及操作系统上都能达到相同的并发效果。它分为工作内存和主内存，线程无法对主存储器直接进行操作，如果一个线程要和另外一个线程通信，那么只能通过主存进行交换。</p><h3 id="_4、你知道哪些gc类型" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#4%E4%BD%A0%E7%9F%A5%E9%81%93%E5%93%AA%E4%BA%9Bgc%E7%B1%BB%E5%9E%8B" target="_blank" rel="noreferrer">4、你知道哪些GC类型？</a> <a class="header-anchor" href="#_4、你知道哪些gc类型" aria-label="Permalink to &quot;[4、你知道哪些GC类型？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新面试题及答案整理，汇总版.md#4你知道哪些gc类型)&quot;">​</a></h3><p>Minor GC：发生在年轻代的 GC。Major GC：发生在老年代的 GC。Full GC：全堆垃圾回收。比如 Metaspace 区引起年轻代和老年代的回收。</p><h3 id="_5、如何判断一个常量是废弃常量" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#5%E5%A6%82%E4%BD%95%E5%88%A4%E6%96%AD%E4%B8%80%E4%B8%AA%E5%B8%B8%E9%87%8F%E6%98%AF%E5%BA%9F%E5%BC%83%E5%B8%B8%E9%87%8F-" target="_blank" rel="noreferrer">5、如何判断一个常量是废弃常量 ？</a> <a class="header-anchor" href="#_5、如何判断一个常量是废弃常量" aria-label="Permalink to &quot;[5、如何判断一个常量是废弃常量 ？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新面试题及答案整理，汇总版.md#5如何判断一个常量是废弃常量-)&quot;">​</a></h3><p>运行时常量池主要回收的是废弃的常量。假如在常量池中存在字符串 &quot;abc&quot;，如果当前没有任何 String 对象引用该字符串常量的话，就说明常量 &quot;abc&quot; 就是废弃常量，如果这时发生内存回收的话而且有必要的话，&quot;abc&quot; 就会被系统清理出常量池。</p><h3 id="_6、对象的内存布局了解吗" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#6%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%86%85%E5%AD%98%E5%B8%83%E5%B1%80%E4%BA%86%E8%A7%A3%E5%90%97" target="_blank" rel="noreferrer">6、对象的内存布局了解吗？</a> <a class="header-anchor" href="#_6、对象的内存布局了解吗" aria-label="Permalink to &quot;[6、对象的内存布局了解吗？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新面试题及答案整理，汇总版.md#6对象的内存布局了解吗)&quot;">​</a></h3><p>对象在堆内存的存储布局可分为对象头、实例数据和对齐填充。</p><p><strong>对象头</strong>占 12B，包括对象标记和类型指针。对象标记存储对象自身的运行时数据，如哈希码、GC 分代年龄、锁标志、偏向线程 ID 等，这部分占 8B，称为 Mark Word。Mark Word 被设计为动态数据结构，以便在极小的空间存储更多数据，根据对象状态复用存储空间。</p><p>类型指针是对象指向它的类型元数据的指针，占 4B。JVM 通过该指针来确定对象是哪个类的实例。</p><p><strong>实例数据</strong>是对象真正存储的有效信息，即本类对象的实例成员变量和所有可见的父类成员变量。存储顺序会受到虚拟机分配策略参数和字段在源码中定义顺序的影响。相同宽度的字段总是被分配到一起存放，在满足该前提条件的情况下父类中定义的变量会出现在子类之前。</p><p><strong>对齐填充</strong>不是必然存在的，仅起占位符作用。虚拟机的自动内存管理系统要求任何对象的大小必须是 8B 的倍数，对象头已被设为 8B 的 1 或 2 倍，如果对象实例数据部分没有对齐，需要对齐填充补全。</p><h3 id="_7、java对象的布局了解过吗" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#7java%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%B8%83%E5%B1%80%E4%BA%86%E8%A7%A3%E8%BF%87%E5%90%97" target="_blank" rel="noreferrer">7、Java对象的布局了解过吗？</a> <a class="header-anchor" href="#_7、java对象的布局了解过吗" aria-label="Permalink to &quot;[7、Java对象的布局了解过吗？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新面试题及答案整理，汇总版.md#7java对象的布局了解过吗)&quot;">​</a></h3><p>对象头区域此处存储的信息包括两部分：1、对象自身的运行时数据( MarkWord )，占8字节 存储 hashCode、GC 分代年龄、锁类型标记、偏向锁线程 ID 、 CAS 锁指向线程 LockRecord 的指针等， synconized 锁的机制与这个部分( markwork )密切相关，用 markword 中最低的三位代表锁的状态，其中一位是偏向锁位，另外两位是普通锁位。2、对象类型指针( Class Pointer )，占4字节 对象指向它的类元数据的指针、 JVM 就是通过它来确定是哪个 Class 的实例。</p><p>实例数据区域 此处存储的是对象真正有效的信息，比如对象中所有字段的内容</p><p>对齐填充区域 JVM 的实现 HostSpot 规定对象的起始地址必须是 8 字节的整数倍，换句话来说，现在 64 位的 OS 往外读取数据的时候一次性读取 64bit 整数倍的数据，也就是 8 个字节，所以 HotSpot 为了高效读取对象，就做了&quot;对齐&quot;，如果一个对象实际占的内存大小不是 8byte 的整数倍时，就&quot;补位&quot;到 8byte 的整数倍。所以对齐填充区域的大小不是固定的。</p><h3 id="_8、谈谈双亲委派模型" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#8%E8%B0%88%E8%B0%88%E5%8F%8C%E4%BA%B2%E5%A7%94%E6%B4%BE%E6%A8%A1%E5%9E%8B" target="_blank" rel="noreferrer">8、谈谈双亲委派模型</a> <a class="header-anchor" href="#_8、谈谈双亲委派模型" aria-label="Permalink to &quot;[8、谈谈双亲委派模型](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新面试题及答案整理，汇总版.md#8谈谈双亲委派模型)&quot;">​</a></h3><p><strong>1、</strong> Parents Delegation Model，这里的 Parents 翻译成双亲有点不妥，类加载向上传递的过程中只有单亲；parents 更多的是多级向上的意思。</p><p><strong>2、</strong> 除了顶层的启动类加载器，其他的类加载器在加载之前，都会委派给它的父加载器进行加载，一层层向上传递，直到所有父类加载器都无法加载，自己才会加载该类。</p><p><strong>3、</strong> 双亲委派模型，更好地解决了各个类加载器协作时基础类的一致性问题，避免类的重复加载；防止核心API库被随意篡改。</p><p><strong>JDK 9 之前</strong></p><p><strong>1、</strong> 启动类加载器（Bootstrp ClassLoader），加载 /lib/rt.jar、-Xbootclasspath</p><p><strong>2、</strong> 扩展类加载器（Extension ClassLoader）sun.misc.Launcher$ExtClassLoader，加载 /lib/ext、java.ext.dirs</p><p><strong>3、</strong> 应用程序类加载器（Application ClassLoader，sun.misc.Launcher$AppClassLoader），加载 CLASSPTH、-classpath、-cp、Manifest</p><p><strong>4、</strong> 自定义类加载器</p><p>JDK 9 开始 Extension ClassLoader 被 Platform ClassLoader 取代，启动类加载器、平台类加载器、应用程序类加载器全都继承于 jdk.internal.loader.BuiltinClassLoader</p><p>类加载代码逻辑</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">protected synchronized Class&lt;?&gt; loadClass(String name, boolean resolve) throws ClassNotFoundException {</span></span>
<span class="line"><span style="color:#f6f6f4;">  // 首先，检查请求的类是否已经被加载过了</span></span>
<span class="line"><span style="color:#f6f6f4;">  Class c = findLoadedClass(name);</span></span>
<span class="line"><span style="color:#f6f6f4;">  if (c == null) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    try {</span></span>
<span class="line"><span style="color:#f6f6f4;">      if (parent != null) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        c = parent.loadClass(name, false);</span></span>
<span class="line"><span style="color:#f6f6f4;">      } else {</span></span>
<span class="line"><span style="color:#f6f6f4;">        c = findBootstrapClassOrNull(name);</span></span>
<span class="line"><span style="color:#f6f6f4;">      }</span></span>
<span class="line"><span style="color:#f6f6f4;">    } catch (ClassNotFoundException e) {</span></span>
<span class="line"><span style="color:#f6f6f4;">      // 如果父类加载器抛出ClassNotFoundException</span></span>
<span class="line"><span style="color:#f6f6f4;">      // 说明父类加载器无法完成加载请求</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (c == null) {</span></span>
<span class="line"><span style="color:#f6f6f4;">      // 在父类加载器无法加载时</span></span>
<span class="line"><span style="color:#f6f6f4;">      // 再调用本身的findClass方法来进行类加载</span></span>
<span class="line"><span style="color:#f6f6f4;">      c = findClass(name);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">  if (resolve) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    resolveClass(c);</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">  return c;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">protected synchronized Class&lt;?&gt; loadClass(String name, boolean resolve) throws ClassNotFoundException {</span></span>
<span class="line"><span style="color:#24292e;">  // 首先，检查请求的类是否已经被加载过了</span></span>
<span class="line"><span style="color:#24292e;">  Class c = findLoadedClass(name);</span></span>
<span class="line"><span style="color:#24292e;">  if (c == null) {</span></span>
<span class="line"><span style="color:#24292e;">    try {</span></span>
<span class="line"><span style="color:#24292e;">      if (parent != null) {</span></span>
<span class="line"><span style="color:#24292e;">        c = parent.loadClass(name, false);</span></span>
<span class="line"><span style="color:#24292e;">      } else {</span></span>
<span class="line"><span style="color:#24292e;">        c = findBootstrapClassOrNull(name);</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    } catch (ClassNotFoundException e) {</span></span>
<span class="line"><span style="color:#24292e;">      // 如果父类加载器抛出ClassNotFoundException</span></span>
<span class="line"><span style="color:#24292e;">      // 说明父类加载器无法完成加载请求</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    if (c == null) {</span></span>
<span class="line"><span style="color:#24292e;">      // 在父类加载器无法加载时</span></span>
<span class="line"><span style="color:#24292e;">      // 再调用本身的findClass方法来进行类加载</span></span>
<span class="line"><span style="color:#24292e;">      c = findClass(name);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  if (resolve) {</span></span>
<span class="line"><span style="color:#24292e;">    resolveClass(c);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  return c;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="_9、cms分为哪几个阶段" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#9cms%E5%88%86%E4%B8%BA%E5%93%AA%E5%87%A0%E4%B8%AA%E9%98%B6%E6%AE%B5" target="_blank" rel="noreferrer">9、CMS分为哪几个阶段?</a> <a class="header-anchor" href="#_9、cms分为哪几个阶段" aria-label="Permalink to &quot;[9、CMS分为哪几个阶段?](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新面试题及答案整理，汇总版.md#9cms分为哪几个阶段)&quot;">​</a></h3><p>CMS已经弃用。生活美好，时间有限，不建议再深入研究了。如果碰到问题，直接祭出回收过程即可。</p><p><strong>1、</strong> 初始标记</p><p><strong>2、</strong> 并发标记</p><p><strong>3、</strong> 并发预清理</p><p><strong>4、</strong> 并发可取消的预清理</p><p><strong>5、</strong> 重新标记</p><p><strong>6、</strong> 并发清理</p><p>由于《深入理解java虚拟机》一书的流行，面试时省略3、4步一般也是没问题的。</p><h3 id="_10、解释-java-堆空间及-gc" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#10%E8%A7%A3%E9%87%8A-java-%E5%A0%86%E7%A9%BA%E9%97%B4%E5%8F%8A-gc" target="_blank" rel="noreferrer">10、解释 Java 堆空间及 GC？</a> <a class="header-anchor" href="#_10、解释-java-堆空间及-gc" aria-label="Permalink to &quot;[10、解释 Java 堆空间及 GC？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新面试题及答案整理，汇总版.md#10解释-java-堆空间及-gc)&quot;">​</a></h3><p>当通过 Java 命令启动 Java 进程的时候，会为它分配内存。内存的一部分用于创建堆空间，当程序中创建对象的时候，就从对空间中分配内存。GC 是 JVM 内部的一个进程，回收无效对象的内存用于将来的分配。</p><h3 id="_11、调优命令有哪些" tabindex="-1">11、调优命令有哪些？ <a class="header-anchor" href="#_11、调优命令有哪些" aria-label="Permalink to &quot;11、调优命令有哪些？&quot;">​</a></h3><h3 id="_12、java-中-weakreference-与-softreference-的区别" tabindex="-1">12、Java 中 WeakReference 与 SoftReference 的区别？ <a class="header-anchor" href="#_12、java-中-weakreference-与-softreference-的区别" aria-label="Permalink to &quot;12、Java 中 WeakReference 与 SoftReference 的区别？&quot;">​</a></h3><h3 id="_13、jre、jdk、jvm-及-jit-之间有什么不同" tabindex="-1">13、JRE、JDK、JVM 及 JIT 之间有什么不同？ <a class="header-anchor" href="#_13、jre、jdk、jvm-及-jit-之间有什么不同" aria-label="Permalink to &quot;13、JRE、JDK、JVM 及 JIT 之间有什么不同？&quot;">​</a></h3><h3 id="_14、cms都有哪些问题" tabindex="-1">14、CMS都有哪些问题？ <a class="header-anchor" href="#_14、cms都有哪些问题" aria-label="Permalink to &quot;14、CMS都有哪些问题？&quot;">​</a></h3><h3 id="_15、java-8-为什么要将永久代-permgen-替换为元空间-metaspace-呢" tabindex="-1">15、Java 8 为什么要将永久代(PermGen)替换为元空间(MetaSpace)呢？ <a class="header-anchor" href="#_15、java-8-为什么要将永久代-permgen-替换为元空间-metaspace-呢" aria-label="Permalink to &quot;15、Java 8 为什么要将永久代(PermGen)替换为元空间(MetaSpace)呢？&quot;">​</a></h3><h3 id="_16、64-位-jvm-中-int-的长度是多数" tabindex="-1">16、64 位 JVM 中，int 的长度是多数？ <a class="header-anchor" href="#_16、64-位-jvm-中-int-的长度是多数" aria-label="Permalink to &quot;16、64 位 JVM 中，int 的长度是多数？&quot;">​</a></h3><h3 id="_17、介绍一下-jvm-中垃圾收集器有哪些-他们特点分别是什么" tabindex="-1">17、介绍一下 JVM 中垃圾收集器有哪些？ 他们特点分别是什么？ <a class="header-anchor" href="#_17、介绍一下-jvm-中垃圾收集器有哪些-他们特点分别是什么" aria-label="Permalink to &quot;17、介绍一下 JVM 中垃圾收集器有哪些？ 他们特点分别是什么？&quot;">​</a></h3><h3 id="_18、jvm中一次完整的gc流程是怎样的-对象如何晋升到老年代" tabindex="-1">18、JVM中一次完整的GC流程是怎样的，对象如何晋升到老年代？ <a class="header-anchor" href="#_18、jvm中一次完整的gc流程是怎样的-对象如何晋升到老年代" aria-label="Permalink to &quot;18、JVM中一次完整的GC流程是怎样的，对象如何晋升到老年代？&quot;">​</a></h3><h3 id="_19、遇到过堆外内存溢出吗" tabindex="-1">19、遇到过堆外内存溢出吗？ <a class="header-anchor" href="#_19、遇到过堆外内存溢出吗" aria-label="Permalink to &quot;19、遇到过堆外内存溢出吗？&quot;">​</a></h3><h3 id="_20、对象的访问定位有哪几种方式" tabindex="-1">20、对象的访问定位有哪几种方式? <a class="header-anchor" href="#_20、对象的访问定位有哪几种方式" aria-label="Permalink to &quot;20、对象的访问定位有哪几种方式?&quot;">​</a></h3><h3 id="_21、什么是分布式垃圾回收-dgc-它是如何工作的" tabindex="-1">21、什么是分布式垃圾回收（DGC）？它是如何工作的？ <a class="header-anchor" href="#_21、什么是分布式垃圾回收-dgc-它是如何工作的" aria-label="Permalink to &quot;21、什么是分布式垃圾回收（DGC）？它是如何工作的？&quot;">​</a></h3><h3 id="_22、遇到过元空间溢出吗" tabindex="-1">22、遇到过元空间溢出吗？ <a class="header-anchor" href="#_22、遇到过元空间溢出吗" aria-label="Permalink to &quot;22、遇到过元空间溢出吗？&quot;">​</a></h3><h3 id="_23、说说zgc垃圾收集器的工作原理" tabindex="-1">23、说说ZGC垃圾收集器的工作原理 <a class="header-anchor" href="#_23、说说zgc垃圾收集器的工作原理" aria-label="Permalink to &quot;23、说说ZGC垃圾收集器的工作原理&quot;">​</a></h3><h3 id="_24、垃圾回收器的基本原理是什么-垃圾回收器可以马上回收内存吗-有什么办法主动通知虚拟机进行垃圾回收" tabindex="-1">24、垃圾回收器的基本原理是什么？垃圾回收器可以马上回收内存吗？有什么办法主动通知虚拟机进行垃圾回收？ <a class="header-anchor" href="#_24、垃圾回收器的基本原理是什么-垃圾回收器可以马上回收内存吗-有什么办法主动通知虚拟机进行垃圾回收" aria-label="Permalink to &quot;24、垃圾回收器的基本原理是什么？垃圾回收器可以马上回收内存吗？有什么办法主动通知虚拟机进行垃圾回收？&quot;">​</a></h3><h3 id="_25、说说类加载的过程" tabindex="-1">25、说说类加载的过程 <a class="header-anchor" href="#_25、说说类加载的过程" aria-label="Permalink to &quot;25、说说类加载的过程&quot;">​</a></h3><h3 id="_26、serial-垃圾收集器-单线程、-复制算法" tabindex="-1">26、Serial 垃圾收集器（单线程、 复制算法） <a class="header-anchor" href="#_26、serial-垃圾收集器-单线程、-复制算法" aria-label="Permalink to &quot;26、Serial 垃圾收集器（单线程、 复制算法）&quot;">​</a></h3><h3 id="_27、如何写一段简单的死锁代码" tabindex="-1">27、如何写一段简单的死锁代码？ <a class="header-anchor" href="#_27、如何写一段简单的死锁代码" aria-label="Permalink to &quot;27、如何写一段简单的死锁代码？&quot;">​</a></h3><h3 id="_28、如何找到死锁的线程" tabindex="-1">28、如何找到死锁的线程？ <a class="header-anchor" href="#_28、如何找到死锁的线程" aria-label="Permalink to &quot;28、如何找到死锁的线程？&quot;">​</a></h3><h3 id="_29、直接内存是什么" tabindex="-1">29、直接内存是什么？ <a class="header-anchor" href="#_29、直接内存是什么" aria-label="Permalink to &quot;29、直接内存是什么？&quot;">​</a></h3><h3 id="_30、新生代与复制算法" tabindex="-1">30、新生代与复制算法 <a class="header-anchor" href="#_30、新生代与复制算法" aria-label="Permalink to &quot;30、新生代与复制算法&quot;">​</a></h3>`,74),l=[t];function r(p,c,i,E,d,h){return s(),e("div",null,l)}const B=a(o,[["render",r]]);export{u as __pageData,B as default};