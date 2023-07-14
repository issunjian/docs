import{_ as a,o as s,c as n,V as e}from"./chunks/framework.c6d8cbec.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/java/java-08.md","filePath":"interview/backend/java/java-08.md"}'),l={name:"interview/backend/java/java-08.md"},o=e(`<h3 id="_1、并行和并发有什么区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E6%95%B4%E7%90%86%E5%8F%8A%E7%AD%94%E6%A1%88.md#1%E5%B9%B6%E8%A1%8C%E5%92%8C%E5%B9%B6%E5%8F%91%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">1、并行和并发有什么区别？</a> <a class="header-anchor" href="#_1、并行和并发有什么区别" aria-label="Permalink to &quot;[1、并行和并发有什么区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java高级面试题整理及答案.md#1并行和并发有什么区别)&quot;">​</a></h3><p><strong>1、</strong> 并发：多个任务在同一个 CPU 核上，按细分的时间片轮流(交替)执行，从逻辑上来看那些任务是同时执行。</p><p><strong>2、</strong> 并行：单位时间内，多个处理器或多核处理器同时处理多个任务，是真正意义上的“同时进行”。</p><p><strong>3、</strong> 串行：有n个任务，由一个线程按顺序执行。由于任务、方法都在一个线程执行所以不存在线程不安全情况，也就不存在临界区的问题。</p><p><strong>做一个形象的比喻：</strong></p><p><strong>1、</strong> 并发 = 俩个人用一台电脑。</p><p><strong>2、</strong> 并行 = 俩个人分配了俩台电脑。</p><p><strong>3、</strong> 串行 = 俩个人排队使用一台电脑。</p><h3 id="_2、hibernate中sessionfactory是线程安全的吗-session是线程安全的吗-两个线程能够共享同一个session吗" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E6%95%B4%E7%90%86%E5%8F%8A%E7%AD%94%E6%A1%88.md#2hibernate%E4%B8%ADsessionfactory%E6%98%AF%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E7%9A%84%E5%90%97session%E6%98%AF%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E7%9A%84%E5%90%97%E4%B8%A4%E4%B8%AA%E7%BA%BF%E7%A8%8B%E8%83%BD%E5%A4%9F%E5%85%B1%E4%BA%AB%E5%90%8C%E4%B8%80%E4%B8%AAsession%E5%90%97" target="_blank" rel="noreferrer">2、Hibernate中SessionFactory是线程安全的吗？Session是线程安全的吗（两个线程能够共享同一个Session吗）？</a> <a class="header-anchor" href="#_2、hibernate中sessionfactory是线程安全的吗-session是线程安全的吗-两个线程能够共享同一个session吗" aria-label="Permalink to &quot;[2、Hibernate中SessionFactory是线程安全的吗？Session是线程安全的吗（两个线程能够共享同一个Session吗）？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java高级面试题整理及答案.md#2hibernate中sessionfactory是线程安全的吗session是线程安全的吗两个线程能够共享同一个session吗)&quot;">​</a></h3><p>SessionFactory对应Hibernate的一个数据存储的概念，它是线程安全的，可以被多个线程并发访问。SessionFactory一般只会在启动的时候构建。对于应用程序，最好将SessionFactory通过单例模式进行封装以便于访问。Session是一个轻量级非线程安全的对象（线程间不能共享session），它表示与数据库进行交互的一个工作单元。Session是由SessionFactory创建的，在任务完成之后它会被关闭。Session是持久层服务对外提供的主要接口。Session会延迟获取数据库连接（也就是在需要的时候才会获取）。为了避免创建太多的session，可以使用ThreadLocal将session和当前线程绑定在一起，这样可以让同一个线程获得的总是同一个session。Hibernate 3中SessionFactory的getCurrentSession()方法就可以做到。</p><h3 id="_3、java会存在内存泄漏吗-请简单描述。" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E6%95%B4%E7%90%86%E5%8F%8A%E7%AD%94%E6%A1%88.md#3java%E4%BC%9A%E5%AD%98%E5%9C%A8%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F%E5%90%97%E8%AF%B7%E7%AE%80%E5%8D%95%E6%8F%8F%E8%BF%B0%E3%80%82" target="_blank" rel="noreferrer">3、Java会存在内存泄漏吗？请简单描述。</a> <a class="header-anchor" href="#_3、java会存在内存泄漏吗-请简单描述。" aria-label="Permalink to &quot;[3、Java会存在内存泄漏吗？请简单描述。](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java高级面试题整理及答案.md#3java会存在内存泄漏吗请简单描述。)&quot;">​</a></h3><p>内存泄漏是指不再被使用的对象或者变量一直被占据在内存中。理论上来说，Java是有GC垃圾回收机制的，也就是说，不再被使用的对象，会被GC自动回收掉，自动从内存中清除</p><p>但是，即使这样，Java也还是存在着内存泄漏的情况，java导致内存泄露的原因很明确：长生命周期的对象持有短生命周期对象的引用就很可能发生内存泄露，尽管短生命周期对象已经不再需要，但是因为长生命周期对象持有它的引用而导致不能被回收，这就是java中内存泄露的发生场景。</p><h3 id="_4、生产环境服务器变慢-如何诊断处理" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E6%95%B4%E7%90%86%E5%8F%8A%E7%AD%94%E6%A1%88.md#4%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%8F%98%E6%85%A2%E5%A6%82%E4%BD%95%E8%AF%8A%E6%96%AD%E5%A4%84%E7%90%86" target="_blank" rel="noreferrer">4、生产环境服务器变慢，如何诊断处理？</a> <a class="header-anchor" href="#_4、生产环境服务器变慢-如何诊断处理" aria-label="Permalink to &quot;[4、生产环境服务器变慢，如何诊断处理？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java高级面试题整理及答案.md#4生产环境服务器变慢如何诊断处理)&quot;">​</a></h3><p><strong>1、</strong> 使用 top 指令，服务器中 CPU 和 内存的使用情况，-H 可以按 CPU 使用率降序，-M 内存使用率降序。排除其他进程占用过高的硬件资源，对 Java 服务造成影响。</p><p><strong>2、</strong> 如果发现 CPU 使用过高，可以使用 top 指令查出 JVM 中占用 CPU 过高的线程，通过 jstack 找到对应的线程代码调用，排查出问题代码。</p><p><strong>3、</strong> 如果发现内存使用率比较高，可以 dump 出 JVM 堆内存，然后借助 MAT 进行分析，查出大对象或者占用最多的对象来自哪里，为什么会长时间占用这么多；如果 dump 出的堆内存文件正常，此时可以考虑堆外内存被大量使用导致出现问题，需要借助操作系统指令 pmap 查出进程的内存分配情况、gdb dump 出具体内存信息、perf 查看本地函数调用等。</p><p><strong>4、</strong> 如果 CPU 和 内存使用率都很正常，那就需要进一步开启 GC 日志，分析用户线程暂停的时间、各部分内存区域 GC 次数和时间等指标，可以借助 jstat 或可视化工具 GCeasy 等，如果问题出在 GC 上面的话，考虑是否是内存不够、根据垃圾对象的特点进行参数调优、使用更适合的垃圾收集器；分析 jstack 出来的各个线程状态。如果问题实在比较隐蔽，考虑是否可以开启 jmx，使用 visualmv 等可视化工具远程监控与分析。</p><h3 id="_5、你是如何理解fiber的" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E6%95%B4%E7%90%86%E5%8F%8A%E7%AD%94%E6%A1%88.md#5%E4%BD%A0%E6%98%AF%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3fiber%E7%9A%84" target="_blank" rel="noreferrer">5、你是如何理解fiber的?</a> <a class="header-anchor" href="#_5、你是如何理解fiber的" aria-label="Permalink to &quot;[5、你是如何理解fiber的?](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java高级面试题整理及答案.md#5你是如何理解fiber的)&quot;">​</a></h3><p>React Fiber 是一种基于浏览器的<strong>单线程调度算法</strong>.</p><p>React 16之前 ，<code>reconcilation</code> 算法实际上是递归，想要中断递归是很困难的，React 16 开始使用了循环来代替之前的递归.</p><p><code>Fiber</code>：<strong>一种将 <code>recocilation</code> （递归 diff），拆分成无数个小任务的算法；它随时能够停止，恢复。停止恢复的时机取决于当前的一帧（16ms）内，还有没有足够的时间允许计算。</strong></p><blockquote><p><a href="https://github.com/xiaomuzhu/front-end-interview/blob/master/docs/guide/fiber.md" target="_blank" rel="noreferrer">Fiber 详解</a></p></blockquote><h3 id="_6、hashmap的扩容操作是怎么实现的" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E6%95%B4%E7%90%86%E5%8F%8A%E7%AD%94%E6%A1%88.md#6hashmap%E7%9A%84%E6%89%A9%E5%AE%B9%E6%93%8D%E4%BD%9C%E6%98%AF%E6%80%8E%E4%B9%88%E5%AE%9E%E7%8E%B0%E7%9A%84" target="_blank" rel="noreferrer">6、HashMap的扩容操作是怎么实现的？</a> <a class="header-anchor" href="#_6、hashmap的扩容操作是怎么实现的" aria-label="Permalink to &quot;[6、HashMap的扩容操作是怎么实现的？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java高级面试题整理及答案.md#6hashmap的扩容操作是怎么实现的)&quot;">​</a></h3><p><strong>1、</strong> 在jdk1.8中，resize方法是在hashmap中的键值对大于阀值时或者初始化时，就调用resize方法进行扩容；</p><p><strong>2、</strong> 每次扩展的时候，都是扩展2倍；</p><p><strong>3、</strong> 扩展后Node对象的位置要么在原位置，要么移动到原偏移量两倍的位置。</p><p>在putVal()中，我们看到在这个函数里面使用到了2次resize()方法，resize()方法表示的在进行第一次初始化时会对其进行扩容，或者当该数组的实际大小大于其临界值值(第一次为12),这个时候在扩容的同时也会伴随的桶上面的元素进行重新分发，这也是JDK1.8版本的一个优化的地方，在1.7中，扩容之后需要重新去计算其Hash值，根据Hash值对其进行分发，但在1.8版本中，则是根据在同一个桶的位置中进行判断(e.hash &amp; oldCap)是否为0，重新进行hash分配后，该元素的位置要么停留在原始位置，要么移动到原始位置+增加的数组大小这个位置上</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">final Node &lt; K, V &gt; [] resize() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    Node &lt; K, V &gt; [] oldTab = table; //oldTab指向hash桶数组</span></span>
<span class="line"><span style="color:#f6f6f4;">    int oldCap = (oldTab == null) ? 0 : oldTab.length;</span></span>
<span class="line"><span style="color:#f6f6f4;">    int oldThr = threshold;</span></span>
<span class="line"><span style="color:#f6f6f4;">    int newCap, newThr = 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (oldCap &gt; 0) { //如果oldCap不为空的话，就是hash桶数组不为空</span></span>
<span class="line"><span style="color:#f6f6f4;">        if (oldCap &gt;= MAXIMUM_CAPACITY) { //如果大于最大容量了，就赋值为整数最大的阀值</span></span>
<span class="line"><span style="color:#f6f6f4;">            threshold = Integer.MAX_VALUE;</span></span>
<span class="line"><span style="color:#f6f6f4;">            return oldTab; //返回</span></span>
<span class="line"><span style="color:#f6f6f4;">        } //如果当前hash桶数组的长度在扩容后仍然小于最大容量 并且oldCap大于默认值16</span></span>
<span class="line"><span style="color:#f6f6f4;">        else if ((newCap = oldCap &lt;&lt; 1) &lt; MAXIMUM_CAPACITY &amp;&amp; oldCap &gt;= DEFAULT_INITIAL_CAPACITY) newThr = oldThr &lt;&lt; 1; // double threshold 双倍扩容阀值threshold</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    // 旧的容量为0，但threshold大于零，代表有参构造有cap传入，threshold已经被初始化成最小2的n次幂</span></span>
<span class="line"><span style="color:#f6f6f4;">    // 直接将该值赋给新的容量</span></span>
<span class="line"><span style="color:#f6f6f4;">    else if (oldThr &gt; 0) // initial capacity was placed in threshold</span></span>
<span class="line"><span style="color:#f6f6f4;">        newCap = oldThr;</span></span>
<span class="line"><span style="color:#f6f6f4;">    // 无参构造创建的map，给出默认容量和threshold 16, 16*0.75</span></span>
<span class="line"><span style="color:#f6f6f4;">    else { // zero initial threshold signifies using defaults</span></span>
<span class="line"><span style="color:#f6f6f4;">        newCap = DEFAULT_INITIAL_CAPACITY;</span></span>
<span class="line"><span style="color:#f6f6f4;">        newThr = (int)(DEFAULT_LOAD_FACTOR * DEFAULT_INITIAL_CAPACITY);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    // 新的threshold = 新的cap * 0.75</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (newThr == 0) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        float ft = (float) newCap * loadFactor;</span></span>
<span class="line"><span style="color:#f6f6f4;">        newThr = (newCap &lt; MAXIMUM_CAPACITY &amp;&amp; ft &lt; (float) MAXIMUM_CAPACITY ? (int) ft : Integer.MAX_VALUE);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    threshold = newThr;</span></span>
<span class="line"><span style="color:#f6f6f4;">    // 计算出新的数组长度后赋给当前成员变量table</span></span>
<span class="line"><span style="color:#f6f6f4;">    @</span></span>
<span class="line"><span style="color:#f6f6f4;">    SuppressWarnings({</span></span>
<span class="line"><span style="color:#f6f6f4;">        &quot;rawtypes&quot;, &quot;unchecked&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">    })</span></span>
<span class="line"><span style="color:#f6f6f4;">    Node &lt; K, V &gt; [] newTab = (Node &lt; K, V &gt; []) new Node[newCap]; //新建hash桶数组</span></span>
<span class="line"><span style="color:#f6f6f4;">    table = newTab; //将新数组的值复制给旧的hash桶数组</span></span>
<span class="line"><span style="color:#f6f6f4;">    // 如果原先的数组没有初始化，那么resize的初始化工作到此结束，否则进入扩容元素重排逻辑，使其均匀的分散</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (oldTab != null) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        // 遍历新数组的所有桶下标</span></span>
<span class="line"><span style="color:#f6f6f4;">        for (int j = 0; j &lt; oldCap; ++j) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            Node &lt; K, V &gt; e;</span></span>
<span class="line"><span style="color:#f6f6f4;">            if ((e = oldTab[j]) != null) {</span></span>
<span class="line"><span style="color:#f6f6f4;">                // 旧数组的桶下标赋给临时变量e，并且解除旧数组中的引用，否则就数组无法被GC回收</span></span>
<span class="line"><span style="color:#f6f6f4;">                oldTab[j] = null;</span></span>
<span class="line"><span style="color:#f6f6f4;">                // 如果e.next==null，代表桶中就一个元素，不存在链表或者红黑树</span></span>
<span class="line"><span style="color:#f6f6f4;">                if (e.next == null)</span></span>
<span class="line"><span style="color:#f6f6f4;">                // 用同样的hash映射算法把该元素加入新的数组</span></span>
<span class="line"><span style="color:#f6f6f4;">                    newTab[e.hash &amp; (newCap - 1)] = e;</span></span>
<span class="line"><span style="color:#f6f6f4;">                // 如果e是TreeNode并且e.next!=null，那么处理树中元素的重排</span></span>
<span class="line"><span style="color:#f6f6f4;">                else if (e instanceof TreeNode)</span></span>
<span class="line"><span style="color:#f6f6f4;">                ((TreeNode &lt; K, V &gt; ) e).split(this, newTab, j, oldCap);</span></span>
<span class="line"><span style="color:#f6f6f4;">                // e是链表的头并且e.next!=null，那么处理链表中元素重排</span></span>
<span class="line"><span style="color:#f6f6f4;">                else { // preserve order</span></span>
<span class="line"><span style="color:#f6f6f4;">                    // loHead,loTail 代表扩容后不用变换下标，见注1</span></span>
<span class="line"><span style="color:#f6f6f4;">                    Node &lt; K, V &gt; loHead = null, loTail = null;</span></span>
<span class="line"><span style="color:#f6f6f4;">                    // hiHead,hiTail 代表扩容后变换下标，见注1</span></span>
<span class="line"><span style="color:#f6f6f4;">                    Node &lt; K, V &gt; hiHead = null, hiTail = null;</span></span>
<span class="line"><span style="color:#f6f6f4;">                    Node &lt; K, V &gt; next;</span></span>
<span class="line"><span style="color:#f6f6f4;">                    // 遍历链表</span></span>
<span class="line"><span style="color:#f6f6f4;">                    do {</span></span>
<span class="line"><span style="color:#f6f6f4;">                        next = e.next;</span></span>
<span class="line"><span style="color:#f6f6f4;">                        if ((e.hash &amp; oldCap) == 0) {</span></span>
<span class="line"><span style="color:#f6f6f4;">                            if (loTail == null)</span></span>
<span class="line"><span style="color:#f6f6f4;">                            // 初始化head指向链表当前元素e，e不一定是链表的第一个元素，初始化后loHead</span></span>
<span class="line"><span style="color:#f6f6f4;">                            // 代表下标保持不变的链表的头元素</span></span>
<span class="line"><span style="color:#f6f6f4;">                                loHead = e;</span></span>
<span class="line"><span style="color:#f6f6f4;">                            else</span></span>
<span class="line"><span style="color:#f6f6f4;">                            // loTail.next指向当前e</span></span>
<span class="line"><span style="color:#f6f6f4;">                                loTail.next = e;</span></span>
<span class="line"><span style="color:#f6f6f4;">                            // loTail指向当前的元素e</span></span>
<span class="line"><span style="color:#f6f6f4;">                            // 初始化后，loTail和loHead指向相同的内存，所以当loTail.next指向下一个元素时，</span></span>
<span class="line"><span style="color:#f6f6f4;">                            // 底层数组中的元素的next引用也相应发生变化，造成lowHead.next.next.....</span></span>
<span class="line"><span style="color:#f6f6f4;">                            // 跟随loTail同步，使得lowHead可以链接到所有属于该链表的元素。</span></span>
<span class="line"><span style="color:#f6f6f4;">                            loTail = e;</span></span>
<span class="line"><span style="color:#f6f6f4;">                        } else {</span></span>
<span class="line"><span style="color:#f6f6f4;">                            if (hiTail == null)</span></span>
<span class="line"><span style="color:#f6f6f4;">                            // 初始化head指向链表当前元素e, 初始化后hiHead代表下标更改的链表头元素</span></span>
<span class="line"><span style="color:#f6f6f4;">                                hiHead = e;</span></span>
<span class="line"><span style="color:#f6f6f4;">                            else hiTail.next = e;</span></span>
<span class="line"><span style="color:#f6f6f4;">                            hiTail = e;</span></span>
<span class="line"><span style="color:#f6f6f4;">                        }</span></span>
<span class="line"><span style="color:#f6f6f4;">                    } while ((e = next) != null);</span></span>
<span class="line"><span style="color:#f6f6f4;">                    // 遍历结束, 将tail指向null，并把链表头放入新数组的相应下标，形成新的映射。</span></span>
<span class="line"><span style="color:#f6f6f4;">                    if (loTail != null) {</span></span>
<span class="line"><span style="color:#f6f6f4;">                        loTail.next = null;</span></span>
<span class="line"><span style="color:#f6f6f4;">                        newTab[j] = loHead;</span></span>
<span class="line"><span style="color:#f6f6f4;">                    }</span></span>
<span class="line"><span style="color:#f6f6f4;">                    if (hiTail != null) {</span></span>
<span class="line"><span style="color:#f6f6f4;">                        hiTail.next = null;</span></span>
<span class="line"><span style="color:#f6f6f4;">                        newTab[j + oldCap] = hiHead;</span></span>
<span class="line"><span style="color:#f6f6f4;">                    }</span></span>
<span class="line"><span style="color:#f6f6f4;">                }</span></span>
<span class="line"><span style="color:#f6f6f4;">            }</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    return newTab;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">final Node &lt; K, V &gt; [] resize() {</span></span>
<span class="line"><span style="color:#24292e;">    Node &lt; K, V &gt; [] oldTab = table; //oldTab指向hash桶数组</span></span>
<span class="line"><span style="color:#24292e;">    int oldCap = (oldTab == null) ? 0 : oldTab.length;</span></span>
<span class="line"><span style="color:#24292e;">    int oldThr = threshold;</span></span>
<span class="line"><span style="color:#24292e;">    int newCap, newThr = 0;</span></span>
<span class="line"><span style="color:#24292e;">    if (oldCap &gt; 0) { //如果oldCap不为空的话，就是hash桶数组不为空</span></span>
<span class="line"><span style="color:#24292e;">        if (oldCap &gt;= MAXIMUM_CAPACITY) { //如果大于最大容量了，就赋值为整数最大的阀值</span></span>
<span class="line"><span style="color:#24292e;">            threshold = Integer.MAX_VALUE;</span></span>
<span class="line"><span style="color:#24292e;">            return oldTab; //返回</span></span>
<span class="line"><span style="color:#24292e;">        } //如果当前hash桶数组的长度在扩容后仍然小于最大容量 并且oldCap大于默认值16</span></span>
<span class="line"><span style="color:#24292e;">        else if ((newCap = oldCap &lt;&lt; 1) &lt; MAXIMUM_CAPACITY &amp;&amp; oldCap &gt;= DEFAULT_INITIAL_CAPACITY) newThr = oldThr &lt;&lt; 1; // double threshold 双倍扩容阀值threshold</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    // 旧的容量为0，但threshold大于零，代表有参构造有cap传入，threshold已经被初始化成最小2的n次幂</span></span>
<span class="line"><span style="color:#24292e;">    // 直接将该值赋给新的容量</span></span>
<span class="line"><span style="color:#24292e;">    else if (oldThr &gt; 0) // initial capacity was placed in threshold</span></span>
<span class="line"><span style="color:#24292e;">        newCap = oldThr;</span></span>
<span class="line"><span style="color:#24292e;">    // 无参构造创建的map，给出默认容量和threshold 16, 16*0.75</span></span>
<span class="line"><span style="color:#24292e;">    else { // zero initial threshold signifies using defaults</span></span>
<span class="line"><span style="color:#24292e;">        newCap = DEFAULT_INITIAL_CAPACITY;</span></span>
<span class="line"><span style="color:#24292e;">        newThr = (int)(DEFAULT_LOAD_FACTOR * DEFAULT_INITIAL_CAPACITY);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    // 新的threshold = 新的cap * 0.75</span></span>
<span class="line"><span style="color:#24292e;">    if (newThr == 0) {</span></span>
<span class="line"><span style="color:#24292e;">        float ft = (float) newCap * loadFactor;</span></span>
<span class="line"><span style="color:#24292e;">        newThr = (newCap &lt; MAXIMUM_CAPACITY &amp;&amp; ft &lt; (float) MAXIMUM_CAPACITY ? (int) ft : Integer.MAX_VALUE);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    threshold = newThr;</span></span>
<span class="line"><span style="color:#24292e;">    // 计算出新的数组长度后赋给当前成员变量table</span></span>
<span class="line"><span style="color:#24292e;">    @</span></span>
<span class="line"><span style="color:#24292e;">    SuppressWarnings({</span></span>
<span class="line"><span style="color:#24292e;">        &quot;rawtypes&quot;, &quot;unchecked&quot;</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">    Node &lt; K, V &gt; [] newTab = (Node &lt; K, V &gt; []) new Node[newCap]; //新建hash桶数组</span></span>
<span class="line"><span style="color:#24292e;">    table = newTab; //将新数组的值复制给旧的hash桶数组</span></span>
<span class="line"><span style="color:#24292e;">    // 如果原先的数组没有初始化，那么resize的初始化工作到此结束，否则进入扩容元素重排逻辑，使其均匀的分散</span></span>
<span class="line"><span style="color:#24292e;">    if (oldTab != null) {</span></span>
<span class="line"><span style="color:#24292e;">        // 遍历新数组的所有桶下标</span></span>
<span class="line"><span style="color:#24292e;">        for (int j = 0; j &lt; oldCap; ++j) {</span></span>
<span class="line"><span style="color:#24292e;">            Node &lt; K, V &gt; e;</span></span>
<span class="line"><span style="color:#24292e;">            if ((e = oldTab[j]) != null) {</span></span>
<span class="line"><span style="color:#24292e;">                // 旧数组的桶下标赋给临时变量e，并且解除旧数组中的引用，否则就数组无法被GC回收</span></span>
<span class="line"><span style="color:#24292e;">                oldTab[j] = null;</span></span>
<span class="line"><span style="color:#24292e;">                // 如果e.next==null，代表桶中就一个元素，不存在链表或者红黑树</span></span>
<span class="line"><span style="color:#24292e;">                if (e.next == null)</span></span>
<span class="line"><span style="color:#24292e;">                // 用同样的hash映射算法把该元素加入新的数组</span></span>
<span class="line"><span style="color:#24292e;">                    newTab[e.hash &amp; (newCap - 1)] = e;</span></span>
<span class="line"><span style="color:#24292e;">                // 如果e是TreeNode并且e.next!=null，那么处理树中元素的重排</span></span>
<span class="line"><span style="color:#24292e;">                else if (e instanceof TreeNode)</span></span>
<span class="line"><span style="color:#24292e;">                ((TreeNode &lt; K, V &gt; ) e).split(this, newTab, j, oldCap);</span></span>
<span class="line"><span style="color:#24292e;">                // e是链表的头并且e.next!=null，那么处理链表中元素重排</span></span>
<span class="line"><span style="color:#24292e;">                else { // preserve order</span></span>
<span class="line"><span style="color:#24292e;">                    // loHead,loTail 代表扩容后不用变换下标，见注1</span></span>
<span class="line"><span style="color:#24292e;">                    Node &lt; K, V &gt; loHead = null, loTail = null;</span></span>
<span class="line"><span style="color:#24292e;">                    // hiHead,hiTail 代表扩容后变换下标，见注1</span></span>
<span class="line"><span style="color:#24292e;">                    Node &lt; K, V &gt; hiHead = null, hiTail = null;</span></span>
<span class="line"><span style="color:#24292e;">                    Node &lt; K, V &gt; next;</span></span>
<span class="line"><span style="color:#24292e;">                    // 遍历链表</span></span>
<span class="line"><span style="color:#24292e;">                    do {</span></span>
<span class="line"><span style="color:#24292e;">                        next = e.next;</span></span>
<span class="line"><span style="color:#24292e;">                        if ((e.hash &amp; oldCap) == 0) {</span></span>
<span class="line"><span style="color:#24292e;">                            if (loTail == null)</span></span>
<span class="line"><span style="color:#24292e;">                            // 初始化head指向链表当前元素e，e不一定是链表的第一个元素，初始化后loHead</span></span>
<span class="line"><span style="color:#24292e;">                            // 代表下标保持不变的链表的头元素</span></span>
<span class="line"><span style="color:#24292e;">                                loHead = e;</span></span>
<span class="line"><span style="color:#24292e;">                            else</span></span>
<span class="line"><span style="color:#24292e;">                            // loTail.next指向当前e</span></span>
<span class="line"><span style="color:#24292e;">                                loTail.next = e;</span></span>
<span class="line"><span style="color:#24292e;">                            // loTail指向当前的元素e</span></span>
<span class="line"><span style="color:#24292e;">                            // 初始化后，loTail和loHead指向相同的内存，所以当loTail.next指向下一个元素时，</span></span>
<span class="line"><span style="color:#24292e;">                            // 底层数组中的元素的next引用也相应发生变化，造成lowHead.next.next.....</span></span>
<span class="line"><span style="color:#24292e;">                            // 跟随loTail同步，使得lowHead可以链接到所有属于该链表的元素。</span></span>
<span class="line"><span style="color:#24292e;">                            loTail = e;</span></span>
<span class="line"><span style="color:#24292e;">                        } else {</span></span>
<span class="line"><span style="color:#24292e;">                            if (hiTail == null)</span></span>
<span class="line"><span style="color:#24292e;">                            // 初始化head指向链表当前元素e, 初始化后hiHead代表下标更改的链表头元素</span></span>
<span class="line"><span style="color:#24292e;">                                hiHead = e;</span></span>
<span class="line"><span style="color:#24292e;">                            else hiTail.next = e;</span></span>
<span class="line"><span style="color:#24292e;">                            hiTail = e;</span></span>
<span class="line"><span style="color:#24292e;">                        }</span></span>
<span class="line"><span style="color:#24292e;">                    } while ((e = next) != null);</span></span>
<span class="line"><span style="color:#24292e;">                    // 遍历结束, 将tail指向null，并把链表头放入新数组的相应下标，形成新的映射。</span></span>
<span class="line"><span style="color:#24292e;">                    if (loTail != null) {</span></span>
<span class="line"><span style="color:#24292e;">                        loTail.next = null;</span></span>
<span class="line"><span style="color:#24292e;">                        newTab[j] = loHead;</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                    if (hiTail != null) {</span></span>
<span class="line"><span style="color:#24292e;">                        hiTail.next = null;</span></span>
<span class="line"><span style="color:#24292e;">                        newTab[j + oldCap] = hiHead;</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    return newTab;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="_7、解释如何使用war文件部署web应用程序" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E6%95%B4%E7%90%86%E5%8F%8A%E7%AD%94%E6%A1%88.md#7%E8%A7%A3%E9%87%8A%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8war%E6%96%87%E4%BB%B6%E9%83%A8%E7%BD%B2web%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F" target="_blank" rel="noreferrer">7、解释如何使用WAR文件部署web应用程序?</a> <a class="header-anchor" href="#_7、解释如何使用war文件部署web应用程序" aria-label="Permalink to &quot;[7、解释如何使用WAR文件部署web应用程序?](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java高级面试题整理及答案.md#7解释如何使用war文件部署web应用程序)&quot;">​</a></h3><p>在Tomcat的web应用程序目录下，jsp、servlet和它们的支持文件被放置在适当的子目录中。你可以将web应用程序目录下的所有文件压缩到一个压缩文件中，以.war文件扩展名结束。你可以通过在webapps目录中放置WAR文件来执行web应用程序。当一个web服务器开始执行时，它会将WAR文件的内容提取到适当的webapps子目录中。</p><h3 id="_8、常用的并发工具类有哪些" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E6%95%B4%E7%90%86%E5%8F%8A%E7%AD%94%E6%A1%88.md#8%E5%B8%B8%E7%94%A8%E7%9A%84%E5%B9%B6%E5%8F%91%E5%B7%A5%E5%85%B7%E7%B1%BB%E6%9C%89%E5%93%AA%E4%BA%9B" target="_blank" rel="noreferrer">8、常用的并发工具类有哪些？</a> <a class="header-anchor" href="#_8、常用的并发工具类有哪些" aria-label="Permalink to &quot;[8、常用的并发工具类有哪些？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java高级面试题整理及答案.md#8常用的并发工具类有哪些)&quot;">​</a></h3><p><strong>1、</strong> CountDownLatch</p><p><strong>2、</strong> CyclicBarrier</p><p><strong>3、</strong> Semaphore</p><p><strong>4、</strong> Exchanger</p><h3 id="_9、你能保证-gc-执行吗" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E6%95%B4%E7%90%86%E5%8F%8A%E7%AD%94%E6%A1%88.md#9%E4%BD%A0%E8%83%BD%E4%BF%9D%E8%AF%81-gc-%E6%89%A7%E8%A1%8C%E5%90%97" target="_blank" rel="noreferrer">9、你能保证 GC 执行吗？</a> <a class="header-anchor" href="#_9、你能保证-gc-执行吗" aria-label="Permalink to &quot;[9、你能保证 GC 执行吗？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java高级面试题整理及答案.md#9你能保证-gc-执行吗)&quot;">​</a></h3><p>不能，虽然你可以调用 System.gc() 或者 Runtime.gc()，但是没有办法保证 GC 的执行。</p><h3 id="_10、哪些集合类是线程安全的" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E6%95%B4%E7%90%86%E5%8F%8A%E7%AD%94%E6%A1%88.md#10%E5%93%AA%E4%BA%9B%E9%9B%86%E5%90%88%E7%B1%BB%E6%98%AF%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E7%9A%84" target="_blank" rel="noreferrer">10、哪些集合类是线程安全的？</a> <a class="header-anchor" href="#_10、哪些集合类是线程安全的" aria-label="Permalink to &quot;[10、哪些集合类是线程安全的？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java高级面试题整理及答案.md#10哪些集合类是线程安全的)&quot;">​</a></h3><p><strong>1、</strong> Vector：就比Arraylist多了个 synchronized （线程安全），因为效率较低，现在已经不太建议使用。</p><p><strong>2、</strong> hashTable：就比hashMap多了个synchronized (线程安全)，不建议使用。</p><p><strong>3、</strong> ConcurrentHashMap：是Java5中支持高并发、高吞吐量的线程安全HashMap实现。它由Segment数组结构和HashEntry数组结构组成。Segment数组在ConcurrentHashMap里扮演锁的角色，HashEntry则用于存储键-值对数据。一个ConcurrentHashMap里包含一个Segment数组，Segment的结构和HashMap类似，是一种数组和链表结构；一个Segment里包含一个HashEntry数组，每个HashEntry是一个链表结构的元素；每个Segment守护着一个HashEntry数组里的元素，当对HashEntry数组的数据进行修改时，必须首先获得它对应的Segment锁。（推荐使用）</p><h3 id="_11、事务的acid是指什么" tabindex="-1">11、事务的ACID是指什么？ <a class="header-anchor" href="#_11、事务的acid是指什么" aria-label="Permalink to &quot;11、事务的ACID是指什么？&quot;">​</a></h3><h3 id="_12、对象分配规则" tabindex="-1">12、对象分配规则 <a class="header-anchor" href="#_12、对象分配规则" aria-label="Permalink to &quot;12、对象分配规则&quot;">​</a></h3><h3 id="_13、两个对象值相同-x-equals-y-true-但却可有不同的hash-code-这句话对不对" tabindex="-1">13、两个对象值相同(x.equals(y) == true)，但却可有不同的hash code，这句话对不对？ <a class="header-anchor" href="#_13、两个对象值相同-x-equals-y-true-但却可有不同的hash-code-这句话对不对" aria-label="Permalink to &quot;13、两个对象值相同(x.equals(y) == true)，但却可有不同的hash code，这句话对不对？&quot;">​</a></h3><h3 id="_14、创建对象的过程是什么" tabindex="-1">14、创建对象的过程是什么？ <a class="header-anchor" href="#_14、创建对象的过程是什么" aria-label="Permalink to &quot;14、创建对象的过程是什么？&quot;">​</a></h3><h3 id="_15、-和-的区别" tabindex="-1">15、&amp;和&amp;&amp;的区别 <a class="header-anchor" href="#_15、-和-的区别" aria-label="Permalink to &quot;15、&amp;和&amp;&amp;的区别&quot;">​</a></h3><h3 id="_16、为什么wait-notify-和notifyall-必须在同步方法或者同步块中被调用" tabindex="-1">16、为什么wait(), notify()和notifyAll ()必须在同步方法或者同步块中被调用？ <a class="header-anchor" href="#_16、为什么wait-notify-和notifyall-必须在同步方法或者同步块中被调用" aria-label="Permalink to &quot;16、为什么wait(), notify()和notifyAll ()必须在同步方法或者同步块中被调用？&quot;">​</a></h3><h3 id="_17、java中的继承是单继承还是多继承" tabindex="-1">17、Java中的继承是单继承还是多继承 <a class="header-anchor" href="#_17、java中的继承是单继承还是多继承" aria-label="Permalink to &quot;17、Java中的继承是单继承还是多继承&quot;">​</a></h3><h3 id="_18、java-中-如何将字符串-yyyymmdd-转换为日期" tabindex="-1">18、Java 中，如何将字符串 YYYYMMDD 转换为日期？ <a class="header-anchor" href="#_18、java-中-如何将字符串-yyyymmdd-转换为日期" aria-label="Permalink to &quot;18、Java 中，如何将字符串 YYYYMMDD 转换为日期？&quot;">​</a></h3><h3 id="_19、请你谈谈对oom的认识" tabindex="-1">19、请你谈谈对OOM的认识 <a class="header-anchor" href="#_19、请你谈谈对oom的认识" aria-label="Permalink to &quot;19、请你谈谈对OOM的认识&quot;">​</a></h3><h3 id="_20、copyonwritearraylist可以用于什么应用场景" tabindex="-1">20、CopyOnWriteArrayList可以用于什么应用场景？ <a class="header-anchor" href="#_20、copyonwritearraylist可以用于什么应用场景" aria-label="Permalink to &quot;20、CopyOnWriteArrayList可以用于什么应用场景？&quot;">​</a></h3><h3 id="_21、什么时候使用享元模式" tabindex="-1">21、什么时候使用享元模式？ <a class="header-anchor" href="#_21、什么时候使用享元模式" aria-label="Permalink to &quot;21、什么时候使用享元模式？&quot;">​</a></h3><h3 id="_22、什么是executors" tabindex="-1">22、什么是Executors？ <a class="header-anchor" href="#_22、什么是executors" aria-label="Permalink to &quot;22、什么是Executors？&quot;">​</a></h3><h3 id="_23、死锁与活锁的区别-死锁与饥饿的区别" tabindex="-1">23、死锁与活锁的区别，死锁与饥饿的区别？ <a class="header-anchor" href="#_23、死锁与活锁的区别-死锁与饥饿的区别" aria-label="Permalink to &quot;23、死锁与活锁的区别，死锁与饥饿的区别？&quot;">​</a></h3><h3 id="_24、堆的作用是什么" tabindex="-1">24、堆的作用是什么？ <a class="header-anchor" href="#_24、堆的作用是什么" aria-label="Permalink to &quot;24、堆的作用是什么？&quot;">​</a></h3><h3 id="_25、垃圾回收的优点和原理。说说2种回收机制" tabindex="-1">25、垃圾回收的优点和原理。说说2种回收机制 <a class="header-anchor" href="#_25、垃圾回收的优点和原理。说说2种回收机制" aria-label="Permalink to &quot;25、垃圾回收的优点和原理。说说2种回收机制&quot;">​</a></h3><h3 id="_26、react如何进行组件-逻辑复用" tabindex="-1">26、React如何进行组件/逻辑复用? <a class="header-anchor" href="#_26、react如何进行组件-逻辑复用" aria-label="Permalink to &quot;26、React如何进行组件/逻辑复用?&quot;">​</a></h3><h3 id="_27、请解释一下mac代表什么" tabindex="-1">27、请解释一下MAC代表什么? <a class="header-anchor" href="#_27、请解释一下mac代表什么" aria-label="Permalink to &quot;27、请解释一下MAC代表什么?&quot;">​</a></h3><h3 id="_28、threadlocal是什么-有什么用" tabindex="-1">28、ThreadLocal是什么？有什么用？ <a class="header-anchor" href="#_28、threadlocal是什么-有什么用" aria-label="Permalink to &quot;28、ThreadLocal是什么？有什么用？&quot;">​</a></h3><h3 id="_29、线程的生命周期" tabindex="-1">29、线程的生命周期？ <a class="header-anchor" href="#_29、线程的生命周期" aria-label="Permalink to &quot;29、线程的生命周期？&quot;">​</a></h3><h3 id="_30、说几个常见的编译时异常类" tabindex="-1">30、说几个常见的编译时异常类？ <a class="header-anchor" href="#_30、说几个常见的编译时异常类" aria-label="Permalink to &quot;30、说几个常见的编译时异常类？&quot;">​</a></h3><h3 id="_31、java-如何实现多线程之间的通讯和协作" tabindex="-1">31、Java 如何实现多线程之间的通讯和协作？ <a class="header-anchor" href="#_31、java-如何实现多线程之间的通讯和协作" aria-label="Permalink to &quot;31、Java 如何实现多线程之间的通讯和协作？&quot;">​</a></h3><h3 id="_32、什么是java-timer-类-如何创建一个有特定时间间隔的任务" tabindex="-1">32、什么是Java Timer 类？如何创建一个有特定时间间隔的任务？ <a class="header-anchor" href="#_32、什么是java-timer-类-如何创建一个有特定时间间隔的任务" aria-label="Permalink to &quot;32、什么是Java Timer 类？如何创建一个有特定时间间隔的任务？&quot;">​</a></h3><h3 id="_33、使用js获取一个表单元素" tabindex="-1">33、使用js获取一个表单元素 <a class="header-anchor" href="#_33、使用js获取一个表单元素" aria-label="Permalink to &quot;33、使用js获取一个表单元素&quot;">​</a></h3><h3 id="_34、多线程同步和互斥有几种实现方法-都是什么" tabindex="-1">34、多线程同步和互斥有几种实现方法，都是什么？ <a class="header-anchor" href="#_34、多线程同步和互斥有几种实现方法-都是什么" aria-label="Permalink to &quot;34、多线程同步和互斥有几种实现方法，都是什么？&quot;">​</a></h3><h3 id="_35、什么是重排序" tabindex="-1">35、什么是重排序 <a class="header-anchor" href="#_35、什么是重排序" aria-label="Permalink to &quot;35、什么是重排序&quot;">​</a></h3><h3 id="_36、java-中-java-util-date-与-java-sql-date-有什么区别" tabindex="-1">36、Java 中 java.util.Date 与 java.sql.Date 有什么区别？ <a class="header-anchor" href="#_36、java-中-java-util-date-与-java-sql-date-有什么区别" aria-label="Permalink to &quot;36、Java 中 java.util.Date 与 java.sql.Date 有什么区别？&quot;">​</a></h3><h3 id="_37、说说类加载的过程" tabindex="-1">37、说说类加载的过程 <a class="header-anchor" href="#_37、说说类加载的过程" aria-label="Permalink to &quot;37、说说类加载的过程&quot;">​</a></h3><h3 id="_38、react最新的生命周期是怎样的" tabindex="-1">38、React最新的生命周期是怎样的? <a class="header-anchor" href="#_38、react最新的生命周期是怎样的" aria-label="Permalink to &quot;38、React最新的生命周期是怎样的?&quot;">​</a></h3><h3 id="_39、复制算法-copying" tabindex="-1">39、复制算法（copying） <a class="header-anchor" href="#_39、复制算法-copying" aria-label="Permalink to &quot;39、复制算法（copying）&quot;">​</a></h3><h3 id="_40、用java的套接字编程实现一个多线程的回显-echo-服务器。" tabindex="-1">40、用Java的套接字编程实现一个多线程的回显（echo）服务器。 <a class="header-anchor" href="#_40、用java的套接字编程实现一个多线程的回显-echo-服务器。" aria-label="Permalink to &quot;40、用Java的套接字编程实现一个多线程的回显（echo）服务器。&quot;">​</a></h3>`,72),p=[o];function t(r,i,c,h,f,d){return s(),n("div",null,p)}const A=a(l,[["render",t]]);export{E as __pageData,A as default};
