import{_ as a,o as e,c as r,V as o}from"./chunks/framework.c6d8cbec.js";const B=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/java/java-13.md","filePath":"interview/backend/java/java-13.md"}'),t={name:"interview/backend/java/java-13.md"},s=o('<h3 id="_1、说一下java对象的创建过程" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E5%85%A8%E5%B8%A6%E7%AD%94%E6%A1%88%EF%BC%8C%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0.md#1%E8%AF%B4%E4%B8%80%E4%B8%8Bjava%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%88%9B%E5%BB%BA%E8%BF%87%E7%A8%8B" target="_blank" rel="noreferrer">1、说一下Java对象的创建过程</a> <a class="header-anchor" href="#_1、说一下java对象的创建过程" aria-label="Permalink to &quot;[1、说一下Java对象的创建过程](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java面试题大全带答案，持续更新.md#1说一下java对象的创建过程)&quot;">​</a></h3><p><strong>1、</strong> 类加载检查：虚拟机遇到一条 new 指令时，首先将去检查这个指令的参数是否能在常量池中定位到这个类的符号引用，并且检查这个符号引用代表的类是否已被加载过、解析和初始化过。如果没有，那必须先执行相应的类加载过程。2）分配内存：在类加载检查通过后，接下来虚拟机将为新生对象分配内存。对象所需的内存大小在类加载完成后便可确定，为对象分配空间的任务等同于把一块确定大小的内存从 Java 堆中划分出来。分配方式有 “指针碰撞” 和 “空闲列表” 两种，选择那种分配方式由 Java 堆是否规整决定，而Java堆是否规整又由所采用的垃圾收集器是否带有压缩整理功能决定。选择以上2种方式中的哪一种，取决于 Java 堆内存是否规整。而 Java 堆内存是否规整，取决于 GC 收集器的算法是&quot;标记-清除&quot;，还是&quot;标记-整理&quot;（也称作&quot;标记-压缩&quot;），值得注意的是，复制算法内存也是规整的。</p><p><strong>2、</strong> 在创建对象的时候有一个很重要的问题，就是线程安全，因为在实际开发过程中，创建对象是很频繁的事情，作为虚拟机来说，必须要保证线程是安全的，通常来讲，虚拟机采用两种方式来保证线程安全：CAS+失败重试：CAS 是乐观锁的一种实现方式。所谓乐观锁就是，每次不加锁而是假设没有冲突而去完成某项操作，如果因为冲突失败就重试，直到成功为止。虚拟机采用 CAS 配上失败重试的方式保证更新操作的原子性。TLAB：为每一个线程预先在Eden区分配一块儿内存，JVM在给线程中的对象分配内存时，首先在TLAB分配，当对象大于TLAB中的剩余内存或TLAB的内存已用尽时，再采用上述的CAS进行内存分配</p><p><strong>3、</strong> 初始化零值：内存分配完成后，虚拟机需要将分配到的内存空间都初始化为零值（不包括对象头），这一步操作保证了对象的实例字段在 Java 代码中可以不赋初始值就直接使用，程序能访问到这些字段的数据类型所对应的零值。</p><p><strong>4、</strong> 设置对象头：初始化零值完成之后，虚拟机要对对象进行必要的设置，例如这个对象是那个类的实例、如何才能找到类的元数据信息、对象的哈希吗、对象的 GC 分代年龄等信息。这些信息存放在对象头中。另外，根据虚拟机当前运行状态的不同，如是否启用偏向锁等，对象头会有不同的设置方式。</p><p><strong>5、</strong> 执行 init 方法：在上面工作都完成之后，从虚拟机的视角来看，一个新的对象已经产生了，但从 Java 程序的视角来看，对象创建才刚开始， 方法还没有执行，所有的字段都还为零。所以一般来说，执行 new 指令之后会接着执行 方法，把对象按照程序员的意愿进行初始化，这样一个真正可用的对象才算完全产生出来。</p><h3 id="_2、java-中-linkedhashmap-和-priorityqueue-的区别是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E5%85%A8%E5%B8%A6%E7%AD%94%E6%A1%88%EF%BC%8C%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0.md#2java-%E4%B8%AD-linkedhashmap-%E5%92%8C-priorityqueue-%E7%9A%84%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">2、Java 中 LinkedHashMap 和 PriorityQueue 的区别是什么？</a> <a class="header-anchor" href="#_2、java-中-linkedhashmap-和-priorityqueue-的区别是什么" aria-label="Permalink to &quot;[2、Java 中 LinkedHashMap 和 PriorityQueue 的区别是什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java面试题大全带答案，持续更新.md#2java-中-linkedhashmap-和-priorityqueue-的区别是什么)&quot;">​</a></h3><p>PriorityQueue 保证最高或者最低优先级的的元素总是在队列头部，但是 LinkedHashMap 维持的顺序是元素插入的顺序。当遍历一个 PriorityQueue 时，没有任何顺序保证，但是 LinkedHashMap 课保证遍历顺序是元素插入的顺序。</p><h3 id="_3、threadpoolexecutor饱和策略有哪些" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E5%85%A8%E5%B8%A6%E7%AD%94%E6%A1%88%EF%BC%8C%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0.md#3threadpoolexecutor%E9%A5%B1%E5%92%8C%E7%AD%96%E7%95%A5%E6%9C%89%E5%93%AA%E4%BA%9B" target="_blank" rel="noreferrer">3、ThreadPoolExecutor饱和策略有哪些？</a> <a class="header-anchor" href="#_3、threadpoolexecutor饱和策略有哪些" aria-label="Permalink to &quot;[3、ThreadPoolExecutor饱和策略有哪些？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java面试题大全带答案，持续更新.md#3threadpoolexecutor饱和策略有哪些)&quot;">​</a></h3><p><code>如果当前同时运行的线程数量达到最大线程数量并且队列也已经被放满了任时，ThreadPoolTaskExecutor 定义一些策略:</code></p><p><strong>1、</strong> ThreadPoolExecutor.AbortPolicy：抛出 RejectedExecutionException来拒绝新任务的处理。</p><p><strong>2、</strong> ThreadPoolExecutor.CallerRunsPolicy：调用执行自己的线程运行任务。您不会任务请求。但是这种策略会降低对于新任务提交速度，影响程序的整体性能。另外，这个策略喜欢增加队列容量。如果您的应用程序可以承受此延迟并且你不能任务丢弃任何一个任务请求的话，你可以选择这个策略。</p><p><strong>3、</strong> ThreadPoolExecutor.DiscardPolicy：不处理新任务，直接丢弃掉。</p><p><strong>4、</strong> ThreadPoolExecutor.DiscardOldestPolicy： 此策略将丢弃最早的未处理的任务请求。</p><h3 id="_4、可达性分析" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E5%85%A8%E5%B8%A6%E7%AD%94%E6%A1%88%EF%BC%8C%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0.md#4%E5%8F%AF%E8%BE%BE%E6%80%A7%E5%88%86%E6%9E%90" target="_blank" rel="noreferrer">4、可达性分析</a> <a class="header-anchor" href="#_4、可达性分析" aria-label="Permalink to &quot;[4、可达性分析](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java面试题大全带答案，持续更新.md#4可达性分析)&quot;">​</a></h3><p>为了解决引用计数法的循环引用问题， Java 使用了可达性分析的方法。通过一系列的“GC roots”对象作为起点搜索。如果在“GC roots”和一个对象之间没有可达路径，则称该对象是不可达的。要注意的是，不可达对象不等价于可回收对象， 不可达对象变为可回收对象至少要经过两次标记过程。两次标记后仍然是可回收对象，则将面临回收。</p><h3 id="_5、成员变量与局部变量的区别有那些" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E5%85%A8%E5%B8%A6%E7%AD%94%E6%A1%88%EF%BC%8C%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0.md#5%E6%88%90%E5%91%98%E5%8F%98%E9%87%8F%E4%B8%8E%E5%B1%80%E9%83%A8%E5%8F%98%E9%87%8F%E7%9A%84%E5%8C%BA%E5%88%AB%E6%9C%89%E9%82%A3%E4%BA%9B" target="_blank" rel="noreferrer">5、成员变量与局部变量的区别有那些？</a> <a class="header-anchor" href="#_5、成员变量与局部变量的区别有那些" aria-label="Permalink to &quot;[5、成员变量与局部变量的区别有那些？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java面试题大全带答案，持续更新.md#5成员变量与局部变量的区别有那些)&quot;">​</a></h3><p><strong>1、</strong> 从语法形式上，看成员变量是属于类的，而局部变量是在方法中定义的变量或是方法的参数；成员变量可以被public,private,static等修饰符所修饰，而局部变量不能被访问控制修饰符及static所修饰；成员变量和局部变量都能被final所修饰；</p><p><strong>2、</strong> 从变量在内存中的存储方式来看，成员变量是对象的一部分，而对象存在于堆内存，局部变量存在于栈内存</p><p><strong>3、</strong> 从变量在内存中的生存时间上看，成员变量是对象的一部分，它随着对象的创建而存在，而局部变量随着方法的调用而自动消失。</p><p><strong>4、</strong> 成员变量如果没有被赋初值，则会自动以类型的默认值而赋值（一种情况例外被final修饰但没有被static修饰的成员变量必须显示地赋值）；而局部变量则不会自动赋值。</p><h3 id="_6、hashmap-的长度为什么是2的幂次方" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E5%85%A8%E5%B8%A6%E7%AD%94%E6%A1%88%EF%BC%8C%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0.md#6hashmap-%E7%9A%84%E9%95%BF%E5%BA%A6%E4%B8%BA%E4%BB%80%E4%B9%88%E6%98%AF2%E7%9A%84%E5%B9%82%E6%AC%A1%E6%96%B9" target="_blank" rel="noreferrer">6、HashMap 的长度为什么是2的幂次方</a> <a class="header-anchor" href="#_6、hashmap-的长度为什么是2的幂次方" aria-label="Permalink to &quot;[6、HashMap 的长度为什么是2的幂次方](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java面试题大全带答案，持续更新.md#6hashmap-的长度为什么是2的幂次方)&quot;">​</a></h3><p>为了能让 HashMap 存取高效，尽量较少碰撞，也就是要尽量把数据分配均匀，每个链表/红黑树长度大致相同。这个实现就是把数据存到哪个链表/红黑树中的算法。</p><p><strong>这个算法应该如何设计呢？</strong></p><p>我们首先可能会想到采用%取余的操作来实现。但是，重点来了：“取余(%)操作中如果除数是2的幂次则等价于与其除数减一的与(&amp;)操作（也就是说 hash%length==hash&amp;(length-1)的前提是 length 是2的 n 次方；）。” 并且 采用二进制位操作 &amp;，相对于%能够提高运算效率，这就解释了 HashMap 的长度为什么是2的幂次方。</p><p><strong>那为什么是两次扰动呢？</strong></p><p>这样就是加大哈希值低位的随机性，使得分布更均匀，从而提高对应数组存储下标位置的随机性&amp;均匀性，最终减少Hash冲突，两次就够了，已经达到了高位低位同时参与运算的目的；</p><h3 id="_7、谈谈jvm中-对类加载器的认识" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E5%85%A8%E5%B8%A6%E7%AD%94%E6%A1%88%EF%BC%8C%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0.md#7%E8%B0%88%E8%B0%88jvm%E4%B8%AD%E5%AF%B9%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8%E7%9A%84%E8%AE%A4%E8%AF%86" target="_blank" rel="noreferrer">7、谈谈JVM中，对类加载器的认识</a> <a class="header-anchor" href="#_7、谈谈jvm中-对类加载器的认识" aria-label="Permalink to &quot;[7、谈谈JVM中，对类加载器的认识](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java面试题大全带答案，持续更新.md#7谈谈jvm中对类加载器的认识)&quot;">​</a></h3><p>类加载器是JVM的组成部分之一。将字节码文件加载进JVM。</p><p><strong>类加载分为四部分：</strong></p><p><strong>1、</strong> BootStrapClassLoader，即跟类加载器，加载java运行时所需的类，如String，Integer等存在${java_home}/jre/lib/rt.jar包类的所有类。</p><p><strong>2、</strong> ExtensionClassLoader,扩展类加载器，加载一些扩展类，即${java_home}/jre/lib/ext/*.jar包</p><p><strong>3、</strong> AppClassLoader，系统加载类，加载自定义的类，级classpath下的所有类</p><p><strong>4、</strong> ClassLoader 抽象类加载器：用户自定义的类加载器，用户定义的类加载器都要继承次ClassLoader</p><p><strong>5、</strong> Jvm默认采用的是双亲委派类加载机制，即先加载父类在加载子类，对上面四个类加载器采用自顶向下加载</p><h3 id="_8、你对线程优先级的理解是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E5%85%A8%E5%B8%A6%E7%AD%94%E6%A1%88%EF%BC%8C%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0.md#8%E4%BD%A0%E5%AF%B9%E7%BA%BF%E7%A8%8B%E4%BC%98%E5%85%88%E7%BA%A7%E7%9A%84%E7%90%86%E8%A7%A3%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">8、你对线程优先级的理解是什么？</a> <a class="header-anchor" href="#_8、你对线程优先级的理解是什么" aria-label="Permalink to &quot;[8、你对线程优先级的理解是什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java面试题大全带答案，持续更新.md#8你对线程优先级的理解是什么)&quot;">​</a></h3><p><strong>1、</strong> 每一个线程都是有优先级的，一般来说，高优先级的线程在运行时会具有优先权，但这依赖于线程调度的实现，这个实现是和操作系统相关的(OS dependent)。我们可以定义线程的优先级，但是这并不能保证高优先级的线程会在低优先级的线程前执行。线程优先级是一个int变量(从1-10)，1代表最低优先级，10代表最高优先级。</p><p><strong>2、</strong> java的线程优先级调度会委托给操作系统去处理，所以与具体的操作系统优先级有关，如非特别需要，一般无需设置线程优先级。</p><h3 id="_9、构造器-constructor-是否可被重写-override" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E5%85%A8%E5%B8%A6%E7%AD%94%E6%A1%88%EF%BC%8C%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0.md#9%E6%9E%84%E9%80%A0%E5%99%A8constructor%E6%98%AF%E5%90%A6%E5%8F%AF%E8%A2%AB%E9%87%8D%E5%86%99override" target="_blank" rel="noreferrer">9、构造器（constructor）是否可被重写（override）？</a> <a class="header-anchor" href="#_9、构造器-constructor-是否可被重写-override" aria-label="Permalink to &quot;[9、构造器（constructor）是否可被重写（override）？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java面试题大全带答案，持续更新.md#9构造器constructor是否可被重写override)&quot;">​</a></h3><p>构造器不能被继承，因此不能被重写，但可以被重载。</p><h3 id="_10、jvm-年轻代到年老代的晋升过程的判断条件是什么呢" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E5%85%A8%E5%B8%A6%E7%AD%94%E6%A1%88%EF%BC%8C%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0.md#10jvm-%E5%B9%B4%E8%BD%BB%E4%BB%A3%E5%88%B0%E5%B9%B4%E8%80%81%E4%BB%A3%E7%9A%84%E6%99%8B%E5%8D%87%E8%BF%87%E7%A8%8B%E7%9A%84%E5%88%A4%E6%96%AD%E6%9D%A1%E4%BB%B6%E6%98%AF%E4%BB%80%E4%B9%88%E5%91%A2" target="_blank" rel="noreferrer">10、JVM 年轻代到年老代的晋升过程的判断条件是什么呢？</a> <a class="header-anchor" href="#_10、jvm-年轻代到年老代的晋升过程的判断条件是什么呢" aria-label="Permalink to &quot;[10、JVM 年轻代到年老代的晋升过程的判断条件是什么呢？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java面试题大全带答案，持续更新.md#10jvm-年轻代到年老代的晋升过程的判断条件是什么呢)&quot;">​</a></h3><p><strong>1、</strong> 部分对象会在From和To区域中复制来复制去,如此交换15次(由JVM参数MaxTenuringThreshold决定,这个参数默认是15),最终如果还是存活,就存入到老年代。</p><p><strong>2、</strong> 如果对象的大小大于Eden的二分之一会直接分配在old，如果old也分配不下，会做一次majorGC，如果小于eden的一半但是没有足够的空间，就进行minorgc也就是新生代GC。</p><p><strong>3、</strong> minor gc后，survivor仍然放不下，则放到老年代</p><p><strong>4、</strong> 动态年龄判断 ，大于等于某个年龄的对象超过了survivor空间一半 ，大于等于某个年龄的对象直接进入老年代</p><h3 id="_11、什么是字节码-采用字节码的最大好处是什么-什么java是虚拟机" tabindex="-1">11、什么是字节码？采用字节码的最大好处是什么？什么Java是虚拟机？ <a class="header-anchor" href="#_11、什么是字节码-采用字节码的最大好处是什么-什么java是虚拟机" aria-label="Permalink to &quot;11、什么是字节码？采用字节码的最大好处是什么？什么Java是虚拟机？&quot;">​</a></h3><h3 id="_12、策略模式的优点和缺点" tabindex="-1">12、策略模式的优点和缺点 <a class="header-anchor" href="#_12、策略模式的优点和缺点" aria-label="Permalink to &quot;12、策略模式的优点和缺点&quot;">​</a></h3><h3 id="_13、spring中如何使用注解来配置bean-有哪些相关的注解" tabindex="-1">13、Spring中如何使用注解来配置Bean？有哪些相关的注解？ <a class="header-anchor" href="#_13、spring中如何使用注解来配置bean-有哪些相关的注解" aria-label="Permalink to &quot;13、Spring中如何使用注解来配置Bean？有哪些相关的注解？&quot;">​</a></h3><h3 id="_14、什么是乐观锁和悲观锁" tabindex="-1">14、什么是乐观锁和悲观锁 <a class="header-anchor" href="#_14、什么是乐观锁和悲观锁" aria-label="Permalink to &quot;14、什么是乐观锁和悲观锁&quot;">​</a></h3><h3 id="_15、多线程的劣势" tabindex="-1">15、多线程的劣势： <a class="header-anchor" href="#_15、多线程的劣势" aria-label="Permalink to &quot;15、多线程的劣势：&quot;">​</a></h3><h3 id="_16、java的数据结构有那些" tabindex="-1">16、Java的数据结构有那些？ <a class="header-anchor" href="#_16、java的数据结构有那些" aria-label="Permalink to &quot;16、Java的数据结构有那些？&quot;">​</a></h3><h3 id="_17、你都用过g1垃圾回收器的哪几个重要参数" tabindex="-1">17、你都用过G1垃圾回收器的哪几个重要参数？ <a class="header-anchor" href="#_17、你都用过g1垃圾回收器的哪几个重要参数" aria-label="Permalink to &quot;17、你都用过G1垃圾回收器的哪几个重要参数？&quot;">​</a></h3><h3 id="_18、类与对象的关系" tabindex="-1">18、类与对象的关系? <a class="header-anchor" href="#_18、类与对象的关系" aria-label="Permalink to &quot;18、类与对象的关系?&quot;">​</a></h3><h3 id="_19、什么是java虚拟机-为什么java被称作是-平台无关的编程语言" tabindex="-1">19、什么是Java虚拟机？为什么Java被称作是“平台无关的编程语言”？ <a class="header-anchor" href="#_19、什么是java虚拟机-为什么java被称作是-平台无关的编程语言" aria-label="Permalink to &quot;19、什么是Java虚拟机？为什么Java被称作是“平台无关的编程语言”？&quot;">​</a></h3><h3 id="_20、-与equlas有什么区别" tabindex="-1">20、==与equlas有什么区别？ <a class="header-anchor" href="#_20、-与equlas有什么区别" aria-label="Permalink to &quot;20、==与equlas有什么区别？&quot;">​</a></h3><h3 id="_21、集合框架底层数据结构" tabindex="-1">21、集合框架底层数据结构 <a class="header-anchor" href="#_21、集合框架底层数据结构" aria-label="Permalink to &quot;21、集合框架底层数据结构&quot;">​</a></h3><h3 id="_22、当打开其他程序的网页时-使用的target属性是哪个" tabindex="-1">22、当打开其他程序的网页时，使用的target属性是哪个？ <a class="header-anchor" href="#_22、当打开其他程序的网页时-使用的target属性是哪个" aria-label="Permalink to &quot;22、当打开其他程序的网页时，使用的target属性是哪个？&quot;">​</a></h3><h3 id="_23、java中有几种方法可以实现一个线程" tabindex="-1">23、java中有几种方法可以实现一个线程？ <a class="header-anchor" href="#_23、java中有几种方法可以实现一个线程" aria-label="Permalink to &quot;23、java中有几种方法可以实现一个线程？&quot;">​</a></h3><h3 id="_24、多线程的常用方法" tabindex="-1">24、多线程的常用方法 <a class="header-anchor" href="#_24、多线程的常用方法" aria-label="Permalink to &quot;24、多线程的常用方法&quot;">​</a></h3><h3 id="_25、可以直接调用thread类的run-方法么" tabindex="-1">25、可以直接调用Thread类的run ()方法么？ <a class="header-anchor" href="#_25、可以直接调用thread类的run-方法么" aria-label="Permalink to &quot;25、可以直接调用Thread类的run ()方法么？&quot;">​</a></h3><h3 id="_26、如果父类只有有参构造方法-那么子类必须要重写父类的构造方法吗" tabindex="-1">26、如果父类只有有参构造方法，那么子类必须要重写父类的构造方法吗？ <a class="header-anchor" href="#_26、如果父类只有有参构造方法-那么子类必须要重写父类的构造方法吗" aria-label="Permalink to &quot;26、如果父类只有有参构造方法，那么子类必须要重写父类的构造方法吗？&quot;">​</a></h3><h3 id="_27、守护线程和用户线程有什么区别呢" tabindex="-1">27、守护线程和用户线程有什么区别呢？ <a class="header-anchor" href="#_27、守护线程和用户线程有什么区别呢" aria-label="Permalink to &quot;27、守护线程和用户线程有什么区别呢？&quot;">​</a></h3><h3 id="_28、你在项目中哪些地方用到了xml" tabindex="-1">28、你在项目中哪些地方用到了XML？ <a class="header-anchor" href="#_28、你在项目中哪些地方用到了xml" aria-label="Permalink to &quot;28、你在项目中哪些地方用到了XML？&quot;">​</a></h3><h3 id="_29、什么时候使用组合模式" tabindex="-1">29、什么时候使用组合模式？ <a class="header-anchor" href="#_29、什么时候使用组合模式" aria-label="Permalink to &quot;29、什么时候使用组合模式？&quot;">​</a></h3><h3 id="_30、是否可以继承string类" tabindex="-1">30、是否可以继承String类？ <a class="header-anchor" href="#_30、是否可以继承string类" aria-label="Permalink to &quot;30、是否可以继承String类？&quot;">​</a></h3><h3 id="_31、栈" tabindex="-1">31、栈 <a class="header-anchor" href="#_31、栈" aria-label="Permalink to &quot;31、栈&quot;">​</a></h3><h3 id="_32、阐述jdbc操作数据库的步骤。" tabindex="-1">32、阐述JDBC操作数据库的步骤。 <a class="header-anchor" href="#_32、阐述jdbc操作数据库的步骤。" aria-label="Permalink to &quot;32、阐述JDBC操作数据库的步骤。&quot;">​</a></h3><h3 id="_33、谈谈对-oom-的认识" tabindex="-1">33、谈谈对 OOM 的认识 <a class="header-anchor" href="#_33、谈谈对-oom-的认识" aria-label="Permalink to &quot;33、谈谈对 OOM 的认识&quot;">​</a></h3><h3 id="_34、说一下垃圾分代收集的过程" tabindex="-1">34、说一下垃圾分代收集的过程 <a class="header-anchor" href="#_34、说一下垃圾分代收集的过程" aria-label="Permalink to &quot;34、说一下垃圾分代收集的过程&quot;">​</a></h3><h3 id="_35、什么是uml" tabindex="-1">35、什么是UML？ <a class="header-anchor" href="#_35、什么是uml" aria-label="Permalink to &quot;35、什么是UML？&quot;">​</a></h3><h3 id="_36、怎么查看服务器默认的垃圾回收器是哪一个" tabindex="-1">36、怎么查看服务器默认的垃圾回收器是哪一个？ <a class="header-anchor" href="#_36、怎么查看服务器默认的垃圾回收器是哪一个" aria-label="Permalink to &quot;36、怎么查看服务器默认的垃圾回收器是哪一个？&quot;">​</a></h3><h3 id="_37、简述java的对象结构" tabindex="-1">37、简述Java的对象结构 <a class="header-anchor" href="#_37、简述java的对象结构" aria-label="Permalink to &quot;37、简述Java的对象结构&quot;">​</a></h3><h3 id="_38、什么是cas" tabindex="-1">38、什么是CAS <a class="header-anchor" href="#_38、什么是cas" aria-label="Permalink to &quot;38、什么是CAS&quot;">​</a></h3><h3 id="_39、请解释stackoverflowerror和outofmemeryerror的区别" tabindex="-1">39、请解释StackOverflowError和OutOfMemeryError的区别？ <a class="header-anchor" href="#_39、请解释stackoverflowerror和outofmemeryerror的区别" aria-label="Permalink to &quot;39、请解释StackOverflowError和OutOfMemeryError的区别？&quot;">​</a></h3><h3 id="_40、java中如何实现多线程" tabindex="-1">40、Java中如何实现多线程 <a class="header-anchor" href="#_40、java中如何实现多线程" aria-label="Permalink to &quot;40、Java中如何实现多线程&quot;">​</a></h3>',75),n=[s];function h(i,E,l,d,u,c){return e(),r("div",null,n)}const m=a(t,[["render",h]]);export{B as __pageData,m as default};
