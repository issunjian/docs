import{_ as a,o as e,c as o,V as r}from"./chunks/framework.c6d8cbec.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/jvm/jvm-03.md","filePath":"interview/backend/jvm/jvm-03.md"}'),t={name:"interview/backend/jvm/jvm-03.md"},s=r('<h3 id="_1、zgc-了解吗" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#1zgc-%E4%BA%86%E8%A7%A3%E5%90%97" target="_blank" rel="noreferrer">1、ZGC 了解吗？</a> <a class="header-anchor" href="#_1、zgc-了解吗" aria-label="Permalink to &quot;[1、ZGC 了解吗？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新2021年面试题附答案解析，大汇总.md#1zgc-了解吗)&quot;">​</a></h3><p>JDK11 中加入的具有实验性质的低延迟垃圾收集器，目标是尽可能在不影响吞吐量的前提下，实现在任意堆内存大小都可以把停顿时间限制在 10ms 以内的低延迟。</p><p>基于 Region 内存布局，不设分代，使用了读屏障、染色指针和内存多重映射等技术实现可并发的标记-整理，以低延迟为首要目标。</p><p>ZGC 的 Region 具有动态性，是动态创建和销毁的，并且容量大小也是动态变化的。</p><h3 id="_2、safepoint是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#2safepoint%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">2、safepoint是什么？</a> <a class="header-anchor" href="#_2、safepoint是什么" aria-label="Permalink to &quot;[2、safepoint是什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新2021年面试题附答案解析，大汇总.md#2safepoint是什么)&quot;">​</a></h3><p>STW并不会只发生在内存回收的时候。现在程序员这么卷，碰到几次safepoint的问题几率也是比较大的。</p><p>当发生GC时，用户线程必须全部停下来，才可以进行垃圾回收，这个状态我们可以认为JVM是安全的（safe），整个堆的状态是稳定的。</p><p>如果在GC前，有线程迟迟进入不了safepoint，那么整个JVM都在等待这个阻塞的线程，造成了整体GC的时间变长。</p><h3 id="_3、jvm-提供的常用工具" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#3jvm-%E6%8F%90%E4%BE%9B%E7%9A%84%E5%B8%B8%E7%94%A8%E5%B7%A5%E5%85%B7" target="_blank" rel="noreferrer">3、JVM 提供的常用工具</a> <a class="header-anchor" href="#_3、jvm-提供的常用工具" aria-label="Permalink to &quot;[3、JVM 提供的常用工具](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新2021年面试题附答案解析，大汇总.md#3jvm-提供的常用工具)&quot;">​</a></h3><p><strong>jps：</strong></p><p>用来显示本地的 Java 进程，可以查看本地运行着几个 Java 程序，并显示他们的进程号。 命令格式：jps</p><p><strong>jinfo：</strong></p><p>运行环境参数：Java System 属性和 JVM 命令行参数，Java class path 等信息。 命令格式：jinfo 进程 pid</p><p><strong>jstat：</strong></p><p>监视虚拟机各种运行状态信息的命令行工具。 命令格式：jstat -gc 123 250 20</p><p><strong>jstack：</strong></p><p>可以观察到 JVM 中当前所有线程的运行情况和线程当前状态。 命令格式：jstack 进程 pid</p><p><strong>jmap：</strong></p><p>观察运行中的 JVM 物理内存的占用情况（如：产生哪些对象，及其数量）。 命令格式：jmap [option] pid</p><h3 id="_4、cms-收集器-多线程标记清除算法" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#4cms-%E6%94%B6%E9%9B%86%E5%99%A8%E5%A4%9A%E7%BA%BF%E7%A8%8B%E6%A0%87%E8%AE%B0%E6%B8%85%E9%99%A4%E7%AE%97%E6%B3%95" target="_blank" rel="noreferrer">4、CMS 收集器（多线程标记清除算法）</a> <a class="header-anchor" href="#_4、cms-收集器-多线程标记清除算法" aria-label="Permalink to &quot;[4、CMS 收集器（多线程标记清除算法）](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新2021年面试题附答案解析，大汇总.md#4cms-收集器多线程标记清除算法)&quot;">​</a></h3><p>Concurrent mark sweep(CMS)收集器是一种年老代垃圾收集器，其最主要目标是获取最短垃圾回收停顿时间， 和其他年老代使用标记-整理算法不同，它使用多线程的标记-清除算法。最短的垃圾收集停顿时间可以为交互比较高的程序提高用户体验。CMS 工作机制相比其他的垃圾收集器来说更复杂。整个过程分为以下 4 个阶段：</p><p><strong>初始标记</strong></p><p>只是标记一下 GC Roots 能直接关联的对象，速度很快，仍然需要暂停所有的工作线程。</p><p><strong>并发标记</strong></p><p>进行 GC Roots 跟踪的过程，和用户线程一起工作，不需要暂停工作线程。</p><p><strong>重新标记</strong></p><p>为了修正在并发标记期间，因用户程序继续运行而导致标记产生变动的那一部分对象的标记记录，仍然需要暂停所有的工作线程。</p><p><strong>并发清除</strong></p><p>清除 GC Roots 不可达对象，和用户线程一起工作，不需要暂停工作线程。由于耗时最长的并发标记和并发清除过程中，垃圾收集线程可以和用户现在一起并发工作， 所以总体上来看CMS 收集器的内存回收和用户线程是一起并发地执行。</p><h3 id="_5、对象都是优先分配在年轻代上的吗" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#5%E5%AF%B9%E8%B1%A1%E9%83%BD%E6%98%AF%E4%BC%98%E5%85%88%E5%88%86%E9%85%8D%E5%9C%A8%E5%B9%B4%E8%BD%BB%E4%BB%A3%E4%B8%8A%E7%9A%84%E5%90%97" target="_blank" rel="noreferrer">5、对象都是优先分配在年轻代上的吗？</a> <a class="header-anchor" href="#_5、对象都是优先分配在年轻代上的吗" aria-label="Permalink to &quot;[5、对象都是优先分配在年轻代上的吗？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新2021年面试题附答案解析，大汇总.md#5对象都是优先分配在年轻代上的吗)&quot;">​</a></h3><p>不是。当新生代内存不够时，老年代分配担保。而大对象则是直接在老年代分配。</p><h3 id="_6、有哪些-gc-算法" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#6%E6%9C%89%E5%93%AA%E4%BA%9B-gc-%E7%AE%97%E6%B3%95" target="_blank" rel="noreferrer">6、有哪些 GC 算法？</a> <a class="header-anchor" href="#_6、有哪些-gc-算法" aria-label="Permalink to &quot;[6、有哪些 GC 算法？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新2021年面试题附答案解析，大汇总.md#6有哪些-gc-算法)&quot;">​</a></h3><p><strong>标记-清除算法</strong></p><p>分为标记和清除阶段，首先从每个 GC Roots 出发依次标记有引用关系的对象，最后清除没有标记的对象。</p><p>执行效率不稳定，如果堆包含大量对象且大部分需要回收，必须进行大量标记清除，导致效率随对象数量增长而降低。</p><p>存在内存空间碎片化问题，会产生大量不连续的内存碎片，导致以后需要分配大对象时容易触发 Full GC。</p><p><strong>标记-复制算法</strong></p><p>为了解决内存碎片问题，将可用内存按容量划分为大小相等的两块，每次只使用其中一块。当使用的这块空间用完了，就将存活对象复制到另一块，再把已使用过的内存空间一次清理掉。主要用于进行新生代。</p><p>实现简单、运行高效，解决了内存碎片问题。代价是可用内存缩小为原来的一半，浪费空间。</p><p>HotSpot 把新生代划分为一块较大的 Eden 和两块较小的 Survivor，每次分配内存只使用 Eden 和其中一块 Survivor。垃圾收集时将 Eden 和 Survivor 中仍然存活的对象一次性复制到另一块 Survivor 上，然后直接清理掉 Eden 和已用过的那块 Survivor。HotSpot 默认Eden 和 Survivor 的大小比例是 8:1，即每次新生代中可用空间为整个新生代的 90%。</p><p><strong>标记-整理算法</strong></p><p>标记-复制算法在对象存活率高时要进行较多复制操作，效率低。如果不想浪费空间，就需要有额外空间分配担保，应对被使用内存中所有对象都存活的极端情况，所以老年代一般不使用此算法。</p><p>老年代使用标记-整理算法，标记过程与标记-清除算法一样，但不直接清理可回收对象，而是让所有存活对象都向内存空间一端移动，然后清理掉边界以外的内存。</p><p>标记-清除与标记-整理的差异在于前者是一种非移动式算法而后者是移动式的。如果移动存活对象，尤其是在老年代这种每次回收都有大量对象存活的区域，是一种极为负重的操作，而且移动必须全程暂停用户线程。如果不移动对象就会导致空间碎片问题，只能依赖更复杂的内存分配器和访问器解决。</p><h3 id="_7、有什么堆外内存的排查思路" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#7%E6%9C%89%E4%BB%80%E4%B9%88%E5%A0%86%E5%A4%96%E5%86%85%E5%AD%98%E7%9A%84%E6%8E%92%E6%9F%A5%E6%80%9D%E8%B7%AF" target="_blank" rel="noreferrer">7、有什么堆外内存的排查思路？</a> <a class="header-anchor" href="#_7、有什么堆外内存的排查思路" aria-label="Permalink to &quot;[7、有什么堆外内存的排查思路？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新2021年面试题附答案解析，大汇总.md#7有什么堆外内存的排查思路)&quot;">​</a></h3><p>进程占用的内存，可以使用top命令，看RES段占用的值。如果这个值大大超出我们设定的最大堆内存，则证明堆外内存占用了很大的区域。</p><p>使用gdb可以将物理内存dump下来，通常能看到里面的内容。更加复杂的分析可以使用perf工具，或者谷歌开源的gperftools。那些申请内存最多的native函数，很容易就可以找到。</p><h3 id="_8、swap会影响性能么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#8swap%E4%BC%9A%E5%BD%B1%E5%93%8D%E6%80%A7%E8%83%BD%E4%B9%88" target="_blank" rel="noreferrer">8、SWAP会影响性能么？</a> <a class="header-anchor" href="#_8、swap会影响性能么" aria-label="Permalink to &quot;[8、SWAP会影响性能么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新2021年面试题附答案解析，大汇总.md#8swap会影响性能么)&quot;">​</a></h3><p>当操作系统内存不足的时候，会将部分数据写入到SWAP交换分中，但是SWAP的性能是比较低的。如果应用的访问量较大，需要频繁申请和销毁内存，就容易发生卡顿。一般高并发场景下，会禁用SWAP。</p><h3 id="_9、你知道哪些jvm性能调优" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#9%E4%BD%A0%E7%9F%A5%E9%81%93%E5%93%AA%E4%BA%9Bjvm%E6%80%A7%E8%83%BD%E8%B0%83%E4%BC%98" target="_blank" rel="noreferrer">9、你知道哪些JVM性能调优</a> <a class="header-anchor" href="#_9、你知道哪些jvm性能调优" aria-label="Permalink to &quot;[9、你知道哪些JVM性能调优](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新2021年面试题附答案解析，大汇总.md#9你知道哪些jvm性能调优)&quot;">​</a></h3><p><strong>设定堆内存大小</strong></p><p><strong>1、</strong> -Xmx：堆内存最大限制。设定新生代大小。新生代不宜太小，否则会有大量对象涌入老年代</p><p><strong>2、</strong> -XX:NewSize：新生代大小</p><p><strong>3、</strong> -XX:NewRatio 新生代和老生代占比</p><p><strong>4、</strong> -XX:SurvivorRatio：伊甸园空间和幸存者空间的占比</p><p><strong>5、</strong> 设定垃圾回收器 年轻代用 -XX:+UseParNewGC 年老代用-XX:+UseConcMarkSweepGC</p><h3 id="_10、你都有哪些手段用来排查内存溢出" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#10%E4%BD%A0%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E6%89%8B%E6%AE%B5%E7%94%A8%E6%9D%A5%E6%8E%92%E6%9F%A5%E5%86%85%E5%AD%98%E6%BA%A2%E5%87%BA" target="_blank" rel="noreferrer">10、你都有哪些手段用来排查内存溢出？</a> <a class="header-anchor" href="#_10、你都有哪些手段用来排查内存溢出" aria-label="Permalink to &quot;[10、你都有哪些手段用来排查内存溢出？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新2021年面试题附答案解析，大汇总.md#10你都有哪些手段用来排查内存溢出)&quot;">​</a></h3><p>（这个话题很大，可以从实践环节中随便摘一个进行总结，下面举例一个最普通的）</p><p>你可以来一个中规中矩的回</p><p>内存溢出包含很多种情况，我在平常工作中遇到最多的就是<code>堆溢出</code>。有一次线上遇到故障，重新启动后，使用jstat命令，发现Old区在一直增长。我使用jmap命令，导出了一份线上堆栈，然后使用<code>MAT</code>进行分析。通过对<code>GC Roots</code>的分析，我发现了一个非常大的HashMap对象，这个原本是有位同学<code>做缓存</code>用的，但是一个无界缓存，造成了堆内存占用一直上升。后来，将这个缓存改成 guava的Cache，并设置了弱引用，故障就消失了。</p><p>这个回答不是十分出彩，但着实是常见问题，让人挑不出毛病。</p><h3 id="_11、jit是什么" tabindex="-1">11、JIT是什么？ <a class="header-anchor" href="#_11、jit是什么" aria-label="Permalink to &quot;11、JIT是什么？&quot;">​</a></h3><h3 id="_12、java-中堆和栈有什么区别" tabindex="-1">12、Java 中堆和栈有什么区别？ <a class="header-anchor" href="#_12、java-中堆和栈有什么区别" aria-label="Permalink to &quot;12、Java 中堆和栈有什么区别？&quot;">​</a></h3><h3 id="_13、方法区" tabindex="-1">13、方法区 <a class="header-anchor" href="#_13、方法区" aria-label="Permalink to &quot;13、方法区&quot;">​</a></h3><h3 id="_14、你能保证-gc-执行吗" tabindex="-1">14、你能保证 GC 执行吗？ <a class="header-anchor" href="#_14、你能保证-gc-执行吗" aria-label="Permalink to &quot;14、你能保证 GC 执行吗？&quot;">​</a></h3><h3 id="_15、说说g1垃圾收集器的工作原理" tabindex="-1">15、说说G1垃圾收集器的工作原理 <a class="header-anchor" href="#_15、说说g1垃圾收集器的工作原理" aria-label="Permalink to &quot;15、说说G1垃圾收集器的工作原理&quot;">​</a></h3><h3 id="_16、方法区的作用是什么" tabindex="-1">16、方法区的作用是什么？ <a class="header-anchor" href="#_16、方法区的作用是什么" aria-label="Permalink to &quot;16、方法区的作用是什么？&quot;">​</a></h3><h3 id="_17、parnew-垃圾收集器-serial-多线程" tabindex="-1">17、ParNew 垃圾收集器（Serial+多线程） <a class="header-anchor" href="#_17、parnew-垃圾收集器-serial-多线程" aria-label="Permalink to &quot;17、ParNew 垃圾收集器（Serial+多线程）&quot;">​</a></h3><h3 id="_18、你知道哪些内存分配与回收策略" tabindex="-1">18、你知道哪些内存分配与回收策略？ <a class="header-anchor" href="#_18、你知道哪些内存分配与回收策略" aria-label="Permalink to &quot;18、你知道哪些内存分配与回收策略？&quot;">​</a></h3><h3 id="_19、什么是栈" tabindex="-1">19、什么是栈 <a class="header-anchor" href="#_19、什么是栈" aria-label="Permalink to &quot;19、什么是栈&quot;">​</a></h3><h3 id="_20、minor-gc和full-gc-有什么不同呢" tabindex="-1">20、Minor Gc和Full GC 有什么不同呢？ <a class="header-anchor" href="#_20、minor-gc和full-gc-有什么不同呢" aria-label="Permalink to &quot;20、Minor Gc和Full GC 有什么不同呢？&quot;">​</a></h3><h3 id="_21、jvm怎么判断一个对象是不是要回收" tabindex="-1">21、JVM怎么判断一个对象是不是要回收？ <a class="header-anchor" href="#_21、jvm怎么判断一个对象是不是要回收" aria-label="Permalink to &quot;21、JVM怎么判断一个对象是不是要回收？&quot;">​</a></h3><h3 id="_22、说一下java对象的创建过程" tabindex="-1">22、说一下Java对象的创建过程 <a class="header-anchor" href="#_22、说一下java对象的创建过程" aria-label="Permalink to &quot;22、说一下Java对象的创建过程&quot;">​</a></h3><h3 id="_23、怎么看死锁的线程" tabindex="-1">23、怎么看死锁的线程？ <a class="header-anchor" href="#_23、怎么看死锁的线程" aria-label="Permalink to &quot;23、怎么看死锁的线程？&quot;">​</a></h3><h3 id="_24、jvm垃圾回收机制-何时触发minorgc等操作" tabindex="-1">24、JVM垃圾回收机制，何时触发MinorGC等操作 <a class="header-anchor" href="#_24、jvm垃圾回收机制-何时触发minorgc等操作" aria-label="Permalink to &quot;24、JVM垃圾回收机制，何时触发MinorGC等操作&quot;">​</a></h3><h3 id="_25、gc垃圾回收算法与垃圾收集器的关系" tabindex="-1">25、GC垃圾回收算法与垃圾收集器的关系？ <a class="header-anchor" href="#_25、gc垃圾回收算法与垃圾收集器的关系" aria-label="Permalink to &quot;25、GC垃圾回收算法与垃圾收集器的关系？&quot;">​</a></h3><h3 id="_26、永久代" tabindex="-1">26、永久代 <a class="header-anchor" href="#_26、永久代" aria-label="Permalink to &quot;26、永久代&quot;">​</a></h3><h3 id="_27、谈谈jvm中-对类加载器的认识" tabindex="-1">27、谈谈JVM中，对类加载器的认识 <a class="header-anchor" href="#_27、谈谈jvm中-对类加载器的认识" aria-label="Permalink to &quot;27、谈谈JVM中，对类加载器的认识&quot;">​</a></h3><h3 id="_28、描述一下什么情况下-对象会从年轻代进入老年代" tabindex="-1">28、描述一下什么情况下，对象会从年轻代进入老年代 <a class="header-anchor" href="#_28、描述一下什么情况下-对象会从年轻代进入老年代" aria-label="Permalink to &quot;28、描述一下什么情况下，对象会从年轻代进入老年代&quot;">​</a></h3><h3 id="_29、可达性分析" tabindex="-1">29、可达性分析 <a class="header-anchor" href="#_29、可达性分析" aria-label="Permalink to &quot;29、可达性分析&quot;">​</a></h3><h3 id="_30、描述一下jvm加载class文件的原理机制" tabindex="-1">30、描述一下JVM加载class文件的原理机制？ <a class="header-anchor" href="#_30、描述一下jvm加载class文件的原理机制" aria-label="Permalink to &quot;30、描述一下JVM加载class文件的原理机制？&quot;">​</a></h3><h3 id="_31、描述一下-jvm-加载-class-文件的原理机制" tabindex="-1">31、描述一下 JVM 加载 class 文件的原理机制 <a class="header-anchor" href="#_31、描述一下-jvm-加载-class-文件的原理机制" aria-label="Permalink to &quot;31、描述一下 JVM 加载 class 文件的原理机制&quot;">​</a></h3>',82),E=[s];function n(i,l,h,m,c,d){return e(),o("div",null,E)}const B=a(t,[["render",n]]);export{A as __pageData,B as default};