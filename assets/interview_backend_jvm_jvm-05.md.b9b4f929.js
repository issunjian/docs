import{_ as a,o as e,c as o,V as r}from"./chunks/framework.c6d8cbec.js";const p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/jvm/jvm-05.md","filePath":"interview/backend/jvm/jvm-05.md"}'),t={name:"interview/backend/jvm/jvm-05.md"},s=r('<h3 id="_1、堆" tabindex="-1">1、堆 <a class="header-anchor" href="#_1、堆" aria-label="Permalink to &quot;1、堆&quot;">​</a></h3><p>JVM内存管理最大的一块,对被线程共享,目的是存放对象的实例,几乎所欲的对象实例都会放在这里,当堆没有可用空间时,会抛出OOM异常.根据对象的存活周期不同,JVM把对象进行分代管理,由垃圾回收器进行垃圾的回收管理</p><h3 id="_2、老年代与标记复制算法" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#2%E8%80%81%E5%B9%B4%E4%BB%A3%E4%B8%8E%E6%A0%87%E8%AE%B0%E5%A4%8D%E5%88%B6%E7%AE%97%E6%B3%95" target="_blank" rel="noreferrer">2、老年代与标记复制算法</a> <a class="header-anchor" href="#_2、老年代与标记复制算法" aria-label="Permalink to &quot;[2、老年代与标记复制算法](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新面试题，2021年面试题及答案汇总.md#2老年代与标记复制算法)&quot;">​</a></h3><p><strong>而老年代因为每次只回收少量对象，因而采用 Mark-Compact 算法。</strong></p><p><strong>1、</strong> JAVA 虚拟机提到过的处于方法区的永生代(Permanet Generation)， 它用来存储 class 类，常量，方法描述等。对永生代的回收主要包括废弃常量和无用的类。</p><p><strong>2、</strong> 对象的内存分配主要在新生代的 Eden Space 和 Survivor Space 的 From Space(Survivor 目前存放对象的那一块)，少数情况会直接分配到老生代。</p><p><strong>3、</strong> 当新生代的 Eden Space 和 From Space 空间不足时就会发生一次 GC，进行 GC 后， EdenSpace 和 From Space 区的存活对象会被挪到 To Space，然后将 Eden Space 和 FromSpace 进行清理。</p><p><strong>4、</strong> 如果 To Space 无法足够存储某个对象，则将这个对象存储到老生代。</p><p><strong>5、</strong> 在进行 GC 后，使用的便是 Eden Space 和 To Space 了，如此反复循环。</p><p><strong>6、</strong> 当对象在 Survivor 去躲过一次 GC 后，其年龄就会+1。默认情况下年龄到达 15 的对象会被移到老生代中。</p><h3 id="_3、分代回收" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#3%E5%88%86%E4%BB%A3%E5%9B%9E%E6%94%B6" target="_blank" rel="noreferrer">3、分代回收</a> <a class="header-anchor" href="#_3、分代回收" aria-label="Permalink to &quot;[3、分代回收](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新面试题，2021年面试题及答案汇总.md#3分代回收)&quot;">​</a></h3><p>分代回收基于两个事实:大部分对象很快就不使用了,还有一部分不会立即无用,但也不会持续很长时间</p><p>年轻代-&gt;标记-复制</p><p>老年代-&gt;标记-清除</p><h3 id="_4、说一下堆和栈的区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#4%E8%AF%B4%E4%B8%80%E4%B8%8B%E5%A0%86%E5%92%8C%E6%A0%88%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">4、说一下堆和栈的区别</a> <a class="header-anchor" href="#_4、说一下堆和栈的区别" aria-label="Permalink to &quot;[4、说一下堆和栈的区别](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新面试题，2021年面试题及答案汇总.md#4说一下堆和栈的区别)&quot;">​</a></h3><p><strong>1、</strong> 物理地址 堆的物理地址分配对对象是不连续的。因此性能慢些。在GC的时候也要考虑到不连续的分配，所以有各种算法。比如，标记-消除，复制，标记-压缩，分代（即新生代使用复制算法，老年代使用标记——压缩） 栈使用的是数据结构中的栈，先进后出的原则，物理地址分配是连续的。所以性能快。</p><p><strong>2、</strong> 内存分别 堆因为是不连续的，所以分配的内存是在运行期确认的，因此大小不固定。一般堆大小远远大于栈。栈是连续的，所以分配的内存大小要在编译期就确认，大小是固定的。</p><p><strong>3、</strong> 存放的内容 堆存放的是对象的实例和数组。因此该区更关注的是数据的存储 栈存放：局部变量，操作数栈，返回结果。该区更关注的是程序方法的执行。</p><p><strong>4、</strong> 程序的可见度 堆对于整个应用程序都是共享、可见的。栈只对于线程是可见的。所以也是线程私有。他的生命周期和线程相同。</p><h3 id="_5、方法区-永久代-线程共享" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#5%E6%96%B9%E6%B3%95%E5%8C%BA/%E6%B0%B8%E4%B9%85%E4%BB%A3%E7%BA%BF%E7%A8%8B%E5%85%B1%E4%BA%AB" target="_blank" rel="noreferrer">5、方法区/永久代（线程共享）</a> <a class="header-anchor" href="#_5、方法区-永久代-线程共享" aria-label="Permalink to &quot;[5、方法区/永久代（线程共享）](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新面试题，2021年面试题及答案汇总.md#5方法区/永久代线程共享)&quot;">​</a></h3><p>即我们常说的永久代(Permanent Generation), 用于存储被 JVM 加载的类信息、常量、静态变量即、时编译器编译后的代码等数据.HotSpot VM把GC分代收集扩展至方法区, 即使用Java堆的永久代来实现方法区, 这样 HotSpot 的垃圾收集器就可以像管理 Java 堆一样管理这部分内存,而不必为方法区开发专门的内存管理器(永久带的内存回收的主要目标是针对常量池的回收和类型的卸载, 因此收益一般很小) 。</p><p>运行时常量池（Runtime Constant Pool）是方法区的一部分。Class 文件中除了有类的版本、字段、方法、接口等描述等信息外，还有一项信息是常量池 （Constant Pool Table），用于存放编译期生成的各种字面量和符号引用，这部分内容将在类加载后存放到方法区的运行时常量池中。Java 虚拟机对 Class 文件的每一部分（自然也包括常量池）的格式都有严格的规定，每一个字节用于存储哪种数据都必须符合规范上的要求，这样才会被虚拟机认可、装载和执行。</p><h3 id="_6、类加载器" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#6%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8" target="_blank" rel="noreferrer">6、类加载器</a> <a class="header-anchor" href="#_6、类加载器" aria-label="Permalink to &quot;[6、类加载器](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新面试题，2021年面试题及答案汇总.md#6类加载器)&quot;">​</a></h3><p>虚拟机设计团队把加载动作放到 JVM 外部实现，以便让应用程序决定如何获取所需的类， JVM 提供了 3 种类加载器：</p><p>启动类加载器(Bootstrap ClassLoader)</p><p>负责加载 JAVA_HOME\\lib 目录中的， 或通过-Xbootclasspath 参数指定路径中的， 且被虚拟机认可（按文件名识别， 如 rt.jar） 的类。</p><p><strong>扩展类加载器(Extension ClassLoader)</strong></p><p>负责加载 JAVA_HOME\\lib\\ext 目录中的，或通过 java.ext.dirs 系统变量指定路径中的类库。</p><p><strong>应用程序类加载器(Application ClassLoader)：</strong></p><p>负责加载用户路径（classpath）上的类库。JVM 通过双亲委派模型进行类的加载， 当然我们也可以通过继承 java.lang.ClassLoader实现自定义的类加载器。</p><h3 id="_7、谈谈永久代" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#7%E8%B0%88%E8%B0%88%E6%B0%B8%E4%B9%85%E4%BB%A3" target="_blank" rel="noreferrer">7、谈谈永久代</a> <a class="header-anchor" href="#_7、谈谈永久代" aria-label="Permalink to &quot;[7、谈谈永久代](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新面试题，2021年面试题及答案汇总.md#7谈谈永久代)&quot;">​</a></h3><p><strong>1、</strong> JDK 8 之前，Hotspot 中方法区的实现是永久代（Perm）</p><p><strong>2、</strong> JDK 7 开始把原本放在永久代的字符串常量池、静态变量等移出到堆，JDK 8 开始去除永久代，使用元空间（Metaspace），永久代剩余内容移至元空间，元空间直接在本地内存分配。</p><h3 id="_8、zgc收集器中的染色指针有什么用" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#8zgc%E6%94%B6%E9%9B%86%E5%99%A8%E4%B8%AD%E7%9A%84%E6%9F%93%E8%89%B2%E6%8C%87%E9%92%88%E6%9C%89%E4%BB%80%E4%B9%88%E7%94%A8" target="_blank" rel="noreferrer">8、ZGC收集器中的染色指针有什么用？</a> <a class="header-anchor" href="#_8、zgc收集器中的染色指针有什么用" aria-label="Permalink to &quot;[8、ZGC收集器中的染色指针有什么用？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新面试题，2021年面试题及答案汇总.md#8zgc收集器中的染色指针有什么用)&quot;">​</a></h3><p>染色指针是一种直接将少量额外的信息存储在指针上的技术，可是为什么指针本身也可以存储额外信息呢？在64位系统中，理论可以访问的内存高达16EB（2的64次幂）字节 [3] 。实际上，基于需求（用不到那么多内存）、性能（地址越宽在做地址转换时需要的页表级数越多）和成本（消耗更多晶体管）的考虑，在AMD64架构 [4] 中只支持到52位（4PB）的地址总线和48位（256TB）的虚拟地址空间，所以目前64位的硬件实际能够支持的最大内存只有256TB。此外，操作系统一侧也还会施加自己的约束，64位的Linux则分别支持47位（128TB）的进程虚拟地址空间和46位（64TB）的物理地址空间，64位的Windows系统甚至只支持44位（16TB）的物理地址空间。尽管Linux下64位指针的高18位不能用来寻址，但剩余的46位指针所能支持的64TB内存在今天仍然能够充分满足大型服务器的需要。鉴于此，ZGC的染色指针技术继续盯上了这剩下的46位指针宽度，将其高4位提取出来存储四个标志信息。通过这些标志位，虚拟机可以直接从指针中看到其引用对象的三色标记状态、是否进入了重分配集（即被移动过）、是否只能通过finalize()方法才能被访问到。当然，由于这些标志位进一步压缩了原本就只有46位的地址空间，也直接导致ZGC能够管理的内存不可以超过4TB（2的42次幂） 。</p><h3 id="_9、jvm垃圾回收时候如何确定垃圾-什么是gc-roots" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#9jvm%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E6%97%B6%E5%80%99%E5%A6%82%E4%BD%95%E7%A1%AE%E5%AE%9A%E5%9E%83%E5%9C%BE%E4%BB%80%E4%B9%88%E6%98%AFgc-roots" target="_blank" rel="noreferrer">9、JVM垃圾回收时候如何确定垃圾？什么是GC Roots？</a> <a class="header-anchor" href="#_9、jvm垃圾回收时候如何确定垃圾-什么是gc-roots" aria-label="Permalink to &quot;[9、JVM垃圾回收时候如何确定垃圾？什么是GC Roots？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新面试题，2021年面试题及答案汇总.md#9jvm垃圾回收时候如何确定垃圾什么是gc-roots)&quot;">​</a></h3><p>JVM采用的是可达性分析算法。JVM是通过GC Roots来判定对象的存活的。从<code>GC Roots</code>向下追溯、搜索，会产生一个叫做<code>Reference Chain</code>的链条。当一个对象不能和任何一个GC Root产生关系，就判定为垃圾。</p><p><strong>GC Roots大体包括：</strong></p><p><strong>1、</strong> 活动线程相关的各种引用，比如虚拟机栈中栈帧里的引用。</p><p><strong>2、</strong> 类的静态变量的引用。</p><p><strong>3、</strong> JNI引用等。</p><p><strong>当然也有比较详细的回答，个人认为这些就够了。详细版本如下：</strong></p><p><strong>1、</strong> Java线程中，当前所有正在被调用的方法的 <code>引用类型</code>参数、局部变量、临时值等。也就是与我们 <code>栈帧</code>相关的各种引用。</p><p><strong>2、</strong> 所有当前被加载的Java类。</p><p><strong>3、</strong> Java类的引用类型静态变量。</p><p><strong>4、</strong> 运行时常量池里的引用类型常量（String或Class类型）。</p><p><strong>5、</strong> JVM内部数据结构的一些引用，比如 <code>sun.jvm.hotspot.memory.Universe</code>类。</p><p><strong>6、</strong> 用于同步的监控对象，比如调用了对象的 <code>wait()</code>方法。</p><p><strong>7、</strong> JNI handles，包括global handles和local handles</p><h3 id="_10、什么是内存屏障" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#10%E4%BB%80%E4%B9%88%E6%98%AF%E5%86%85%E5%AD%98%E5%B1%8F%E9%9A%9C" target="_blank" rel="noreferrer">10、什么是内存屏障？</a> <a class="header-anchor" href="#_10、什么是内存屏障" aria-label="Permalink to &quot;[10、什么是内存屏障？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Jvm/Jvm最新面试题，2021年面试题及答案汇总.md#10什么是内存屏障)&quot;">​</a></h3><p>内存屏障，也叫内存栅栏，是一种CPU指令，用于控制特定条件下的重排序和内存可见性问题。LoadLoad屏障：对于这样的语句Load1; LoadLoad; Load2，在Load2及后续读取操作要读取的数据被访问前，保证Load1要读取的数据被读取完毕。StoreStore屏障：对于这样的语句Store1; StoreStore; Store2，在Store2及后续写入操作执行前，保证Store1的写入操作对其它处理器可见。LoadStore屏障：对于这样的语句Load1; LoadStore; Store2，在Store2及后续写入操作被刷出前，保证Load1要读取的数据被读取完毕。StoreLoad屏障：对于这样的语句Store1; StoreLoad; Load2，在Load2及后续所有读取操作执行前，保证Store1的写入对所有处理器可见。它的开销是四种屏障中最大的。在大多数处理器的实现中，这个屏障是个万能屏障，兼具其它三种内存屏障的功能。</p><h3 id="_11、栈" tabindex="-1">11、栈 <a class="header-anchor" href="#_11、栈" aria-label="Permalink to &quot;11、栈&quot;">​</a></h3><h3 id="_12、stackoverflow错误-permgen-space错误" tabindex="-1">12、stackoverflow错误，permgen space错误 <a class="header-anchor" href="#_12、stackoverflow错误-permgen-space错误" aria-label="Permalink to &quot;12、stackoverflow错误，permgen space错误&quot;">​</a></h3><h3 id="_13、虚拟机栈-线程私有" tabindex="-1">13、虚拟机栈(线程私有) <a class="header-anchor" href="#_13、虚拟机栈-线程私有" aria-label="Permalink to &quot;13、虚拟机栈(线程私有)&quot;">​</a></h3><h3 id="_14、分代收集算法" tabindex="-1">14、分代收集算法 <a class="header-anchor" href="#_14、分代收集算法" aria-label="Permalink to &quot;14、分代收集算法&quot;">​</a></h3><h3 id="_15、你知道哪些故障处理工具" tabindex="-1">15、你知道哪些故障处理工具？ <a class="header-anchor" href="#_15、你知道哪些故障处理工具" aria-label="Permalink to &quot;15、你知道哪些故障处理工具？&quot;">​</a></h3><h3 id="_16、假如生产环境cpu占用过高-请谈谈你的分析思路和定位。" tabindex="-1">16、假如生产环境CPU占用过高，请谈谈你的分析思路和定位。 <a class="header-anchor" href="#_16、假如生产环境cpu占用过高-请谈谈你的分析思路和定位。" aria-label="Permalink to &quot;16、假如生产环境CPU占用过高，请谈谈你的分析思路和定位。&quot;">​</a></h3><h3 id="_17、32-位和-64-位的-jvm-int-类型变量的长度是多数" tabindex="-1">17、32 位和 64 位的 JVM，int 类型变量的长度是多数？ <a class="header-anchor" href="#_17、32-位和-64-位的-jvm-int-类型变量的长度是多数" aria-label="Permalink to &quot;17、32 位和 64 位的 JVM，int 类型变量的长度是多数？&quot;">​</a></h3><h3 id="_18、什么是方法内联" tabindex="-1">18、什么是方法内联？ <a class="header-anchor" href="#_18、什么是方法内联" aria-label="Permalink to &quot;18、什么是方法内联？&quot;">​</a></h3><h3 id="_19、什么是类加载器-类加载器有哪些" tabindex="-1">19、什么是类加载器，类加载器有哪些？ <a class="header-anchor" href="#_19、什么是类加载器-类加载器有哪些" aria-label="Permalink to &quot;19、什么是类加载器，类加载器有哪些？&quot;">​</a></h3><h3 id="_20、模块化编程与热插拔" tabindex="-1">20、模块化编程与热插拔 <a class="header-anchor" href="#_20、模块化编程与热插拔" aria-label="Permalink to &quot;20、模块化编程与热插拔&quot;">​</a></h3><h3 id="_21、什么时候会触发fullgc" tabindex="-1">21、什么时候会触发FullGC <a class="header-anchor" href="#_21、什么时候会触发fullgc" aria-label="Permalink to &quot;21、什么时候会触发FullGC&quot;">​</a></h3><h3 id="_22、程序计数器有什么作用" tabindex="-1">22、程序计数器有什么作用？ <a class="header-anchor" href="#_22、程序计数器有什么作用" aria-label="Permalink to &quot;22、程序计数器有什么作用？&quot;">​</a></h3><h3 id="_23、运行时数据区是什么" tabindex="-1">23、运行时数据区是什么？ <a class="header-anchor" href="#_23、运行时数据区是什么" aria-label="Permalink to &quot;23、运行时数据区是什么？&quot;">​</a></h3><h3 id="_24、标记清除算法-mark-sweep" tabindex="-1">24、标记清除算法（ Mark-Sweep） <a class="header-anchor" href="#_24、标记清除算法-mark-sweep" aria-label="Permalink to &quot;24、标记清除算法（ Mark-Sweep）&quot;">​</a></h3><h3 id="_25、运行时常量池的作用是什么" tabindex="-1">25、运行时常量池的作用是什么? <a class="header-anchor" href="#_25、运行时常量池的作用是什么" aria-label="Permalink to &quot;25、运行时常量池的作用是什么?&quot;">​</a></h3><h3 id="_26、栈帧里面包含哪些东西" tabindex="-1">26、栈帧里面包含哪些东西？ <a class="header-anchor" href="#_26、栈帧里面包含哪些东西" aria-label="Permalink to &quot;26、栈帧里面包含哪些东西？&quot;">​</a></h3><h3 id="_27、对象分配内存的方式有哪些" tabindex="-1">27、对象分配内存的方式有哪些？ <a class="header-anchor" href="#_27、对象分配内存的方式有哪些" aria-label="Permalink to &quot;27、对象分配内存的方式有哪些？&quot;">​</a></h3><h3 id="_28、什么是方法区" tabindex="-1">28、什么是方法区 <a class="header-anchor" href="#_28、什么是方法区" aria-label="Permalink to &quot;28、什么是方法区&quot;">​</a></h3><h3 id="_29、java-内存分配" tabindex="-1">29、Java 内存分配 <a class="header-anchor" href="#_29、java-内存分配" aria-label="Permalink to &quot;29、Java 内存分配&quot;">​</a></h3><h3 id="_30、堆-heap-线程共享-运行时数据区" tabindex="-1">30、堆（Heap-线程共享） -运行时数据区 <a class="header-anchor" href="#_30、堆-heap-线程共享-运行时数据区" aria-label="Permalink to &quot;30、堆（Heap-线程共享） -运行时数据区&quot;">​</a></h3>',71),n=[s];function E(l,h,d,i,c,m){return e(),o("div",null,n)}const u=a(t,[["render",E]]);export{p as __pageData,u as default};
