import{_ as a,o as e,c as t,V as r}from"./chunks/framework.c6d8cbec.js";const B=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/java/java-23.md","filePath":"interview/backend/java/java-23.md"}'),o={name:"interview/backend/java/java-23.md"},s=r(`<h3 id="_1、你了解过哪些垃圾收集器" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#1%E4%BD%A0%E4%BA%86%E8%A7%A3%E8%BF%87%E5%93%AA%E4%BA%9B%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8" target="_blank" rel="noreferrer">1、你了解过哪些垃圾收集器？</a> <a class="header-anchor" href="#_1、你了解过哪些垃圾收集器" aria-label="Permalink to &quot;[1、你了解过哪些垃圾收集器？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题，2021年面试题及答案汇总.md#1你了解过哪些垃圾收集器)&quot;">​</a></h3><p>年轻代 Serial 垃圾收集器（单线程，通常用在客户端应用上。因为客户端应用不会频繁创建很多对象，用户也不会感觉出明显的卡顿。相反，它使用的资源更少，也更轻量级。） ParNew 垃圾收集器（多线程，追求降低用户停顿时间，适合交互式应用。） Parallel Scavenge 垃圾收集器（追求 CPU 吞吐量，能够在较短时间内完成指定任务，适合没有交互的后台计算。）</p><p>老年代 Serial Old 垃圾收集器 Parallel Old垃圾收集器 CMS 垃圾收集器（以获取最短 GC 停顿时间为目标的收集器，它在垃圾收集时使得用户线程和 GC 线程能够并发执行，因此在垃圾收集过程中用户也不会感到明显的卡顿。）</p><h3 id="_2、你是如何调用-wait-方法的-使用-if-块还是循环-为什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#2%E4%BD%A0%E6%98%AF%E5%A6%82%E4%BD%95%E8%B0%83%E7%94%A8-wait-%E6%96%B9%E6%B3%95%E7%9A%84%E4%BD%BF%E7%94%A8-if-%E5%9D%97%E8%BF%98%E6%98%AF%E5%BE%AA%E7%8E%AF%E4%B8%BA%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">2、你是如何调用 wait() 方法的？使用 if 块还是循环？为什么？</a> <a class="header-anchor" href="#_2、你是如何调用-wait-方法的-使用-if-块还是循环-为什么" aria-label="Permalink to &quot;[2、你是如何调用 wait() 方法的？使用 if 块还是循环？为什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题，2021年面试题及答案汇总.md#2你是如何调用-wait-方法的使用-if-块还是循环为什么)&quot;">​</a></h3><p>处于等待状态的线程可能会收到错误警报和伪唤醒，如果不在循环中检查等待条件，程序就会在没有满足结束条件的情况下退出。</p><p>wait() 方法应该在循环调用，因为当线程获取到 CPU 开始执行的时候，其他条件可能还没有满足，所以在处理前，循环检测条件是否满足会更好。下面是一段标准的使用 wait 和 notify 方法的代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">synchronized (monitor) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    //  判断条件谓词是否得到满足</span></span>
<span class="line"><span style="color:#f6f6f4;">    while(!locked) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    //  等待唤醒</span></span>
<span class="line"><span style="color:#f6f6f4;">    monitor.wait();</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    //  处理其他的业务逻辑</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">synchronized (monitor) {</span></span>
<span class="line"><span style="color:#24292e;">    //  判断条件谓词是否得到满足</span></span>
<span class="line"><span style="color:#24292e;">    while(!locked) {</span></span>
<span class="line"><span style="color:#24292e;">    //  等待唤醒</span></span>
<span class="line"><span style="color:#24292e;">    monitor.wait();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    //  处理其他的业务逻辑</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="_3、java-中-如何计算两个日期之间的差距" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#3java-%E4%B8%AD%E5%A6%82%E4%BD%95%E8%AE%A1%E7%AE%97%E4%B8%A4%E4%B8%AA%E6%97%A5%E6%9C%9F%E4%B9%8B%E9%97%B4%E7%9A%84%E5%B7%AE%E8%B7%9D" target="_blank" rel="noreferrer">3、Java 中，如何计算两个日期之间的差距？</a> <a class="header-anchor" href="#_3、java-中-如何计算两个日期之间的差距" aria-label="Permalink to &quot;[3、Java 中，如何计算两个日期之间的差距？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题，2021年面试题及答案汇总.md#3java-中如何计算两个日期之间的差距)&quot;">​</a></h3><p>程序</p><p><a href="http://javarevisited.blogspot.sg/2015/07/how-to-find-number-of-days-between-two-dates-in-java.html" target="_blank" rel="noreferrer">http://javarevisited.blogspot.sg/2015/07/how-to-find-number-of-days-between-two-dates-in-java.html</a></p><h3 id="_4、jvm-类加载机制" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#4jvm-%E7%B1%BB%E5%8A%A0%E8%BD%BD%E6%9C%BA%E5%88%B6" target="_blank" rel="noreferrer">4、JVM 类加载机制</a> <a class="header-anchor" href="#_4、jvm-类加载机制" aria-label="Permalink to &quot;[4、JVM 类加载机制](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题，2021年面试题及答案汇总.md#4jvm-类加载机制)&quot;">​</a></h3><p>JVM 类加载机制分为五个部分：加载，验证，准备，解析，初始化。</p><p><strong>加载</strong></p><p>加载是类加载过程中的一个阶段， 这个阶段会在内存中生成一个代表这个类的 java.lang.Class 对象， 作为方法区这个类的各种数据的入口。注意这里不一定非得要从一个 Class 文件获取，这里既可以从 ZIP 包中读取（比如从 jar 包和 war 包中读取），也可以在运行时计算生成（动态代理），也可以由其它文件生成（比如将 JSP 文件转换成对应的 Class 类）。</p><p><strong>验证</strong></p><p>这一阶段的主要目的是为了确保 Class 文件的字节流中包含的信息是否符合当前虚拟机的要求，并且不会危害虚拟机自身的安全。</p><p><strong>准备</strong></p><p>准备阶段是正式为类变量分配内存并设置类变量的初始值阶段，即在方法区中分配这些变量所使用的内存空间。注意这里所说的初始值概念，比如一个类变量定义为：</p><p>实际上变量 v 在准备阶段过后的初始值为 0 而不是 8080， 将 v 赋值为 8080 的 put static 指令是程序被编译后， 存放于类构造器方法之中。</p><p><strong>但是注意如果声明为：</strong></p><p>public static final int v = 8080;</p><p>在编译阶段会为 v 生成 ConstantValue 属性，在准备阶段虚拟机会根据 ConstantValue 属性将 v赋值为 8080。</p><p><strong>解析</strong></p><p>解析阶段是指虚拟机将常量池中的符号引用替换为直接引用的过程。符号引用就是 class 文件中的</p><p>public static int v = 8080;</p><p>实际上变量 v 在准备阶段过后的初始值为 0 而不是 8080， 将 v 赋值为 8080 的 put static 指令是程序被编译后， 存放于类构造器方法之中。但是注意如果声明为：</p><p>在编译阶段会为 v 生成 ConstantValue 属性，在准备阶段虚拟机会根据 ConstantValue 属性将 v赋值为 8080。</p><p><strong>解析</strong></p><p>解析阶段是指虚拟机将常量池中的符号引用替换为直接引用的过程。符号引用就是 class 文件中的</p><p>public static final int v = 8080;</p><p>在编译阶段会为 v 生成 ConstantValue 属性，在准备阶段虚拟机会根据 ConstantValue 属性将 v赋值为 8080。</p><p><strong>解析</strong></p><p>解析阶段是指虚拟机将常量池中的符号引用替换为直接引用的过程。符号引用就是 class 文件中的：</p><p><strong>1、</strong> CONSTANT_Class_info</p><p><strong>2、</strong> CONSTANT_Field_info</p><p><strong>3、</strong> CONSTANT_Method_info</p><p>等类型的常量。</p><p><strong>符号引用</strong></p><p>符号引用与虚拟机实现的布局无关， 引用的目标并不一定要已经加载到内存中。各种虚拟机实现的内存布局可以各不相同，但是它们能接受的符号引用必须是一致的，因为符号引用的字面量形式明确定义在 Java 虚拟机规范的 Class 文件格式中。</p><p><strong>直接引用</strong></p><p>直接引用可以是指向目标的指针，相对偏移量或是一个能间接定位到目标的句柄。如果有了直接引用，那引用的目标必定已经在内存中存在。</p><p><strong>初始化</strong></p><p>初始化阶段是类加载最后一个阶段，前面的类加载阶段之后，除了在加载阶段可以自定义类加载器以外，其它操作都由 JVM 主导。到了初始阶段，才开始真正执行类中定义的 Java 程序代码。</p><p><strong>类构造器</strong></p><p>初始化阶段是执行类构造器方法的过程。方法是由编译器自动收集类中的类变量的赋值操作和静态语句块中的语句合并而成的。虚拟机会保证子方法执行之前，父类的方法已经执行完毕， 如果一个类中没有对静态变量赋值也没有静态语句块，那么编译器可以不为这个类生成()方法。</p><p><strong>注意以下几种情况不会执行类初始化：</strong></p><p><strong>1、</strong> 通过子类引用父类的静态字段，只会触发父类的初始化，而不会触发子类的初始化。</p><p><strong>2、</strong> 定义对象数组，不会触发该类的初始化。</p><p><strong>3、</strong> 常量在编译期间会存入调用类的常量池中，本质上并没有直接引用定义常量的类，不会触发定义常量所在的类。</p><p><strong>4、</strong> 通过类名获取 Class 对象，不会触发类的初始化。</p><p><strong>5、</strong> 通过 Class.forName 加载指定类时，如果指定参数 initialize 为 false 时，也不会触发类初始化，其实这个参数是告诉虚拟机，是否要对类进行初始化。</p><p><strong>6、</strong> 通过 ClassLoader 默认的 loadClass 方法，也不会触发初始化动作。</p><h3 id="_5、sql中delete与truncate的区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#5sql%E4%B8%ADdelete%E4%B8%8Etruncate%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">5、Sql中delete与truncate的区别</a> <a class="header-anchor" href="#_5、sql中delete与truncate的区别" aria-label="Permalink to &quot;[5、Sql中delete与truncate的区别](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题，2021年面试题及答案汇总.md#5sql中delete与truncate的区别)&quot;">​</a></h3><p><strong>DELETE：</strong></p><p>选择性地删除数据，当删除整张表的数据时效率较低；只能删除整张表的数据，但是效率高于使用DELETE语句；不能选择性地删除。当truncate执行删除之后，自动生成的主键值重新从默认值开始。</p><h3 id="_6、poll-方法和-remove-方法的区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#6poll-%E6%96%B9%E6%B3%95%E5%92%8C-remove-%E6%96%B9%E6%B3%95%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">6、poll() 方法和 remove() 方法的区别？</a> <a class="header-anchor" href="#_6、poll-方法和-remove-方法的区别" aria-label="Permalink to &quot;[6、poll() 方法和 remove() 方法的区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题，2021年面试题及答案汇总.md#6poll-方法和-remove-方法的区别)&quot;">​</a></h3><p>poll() 和 remove() 都是从队列中取出一个元素，但是 poll() 在获取元素失败的时候会返回空，但是 remove() 失败的时候会抛出异常。</p><h3 id="_7、一个线程运行时发生异常会怎样" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#7%E4%B8%80%E4%B8%AA%E7%BA%BF%E7%A8%8B%E8%BF%90%E8%A1%8C%E6%97%B6%E5%8F%91%E7%94%9F%E5%BC%82%E5%B8%B8%E4%BC%9A%E6%80%8E%E6%A0%B7" target="_blank" rel="noreferrer">7、一个线程运行时发生异常会怎样？</a> <a class="header-anchor" href="#_7、一个线程运行时发生异常会怎样" aria-label="Permalink to &quot;[7、一个线程运行时发生异常会怎样？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题，2021年面试题及答案汇总.md#7一个线程运行时发生异常会怎样)&quot;">​</a></h3><p>如果异常没有被捕获该线程将会停止执行。Thread.UncaughtExceptionHandler是用于处理未捕获异常造成线程突然中断情况的一个内嵌接口。当一个未捕获异常将造成线程中断的时候，JVM 会使用 Thread.getUncaughtExceptionHandler()来查询线程的 UncaughtExceptionHandler 并将线程和异常作为参数传递给 handler 的 uncaughtException()方法进行处理。</p><h3 id="_8、游标的创建步骤" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#8%E6%B8%B8%E6%A0%87%E7%9A%84%E5%88%9B%E5%BB%BA%E6%AD%A5%E9%AA%A4" target="_blank" rel="noreferrer">8、游标的创建步骤？</a> <a class="header-anchor" href="#_8、游标的创建步骤" aria-label="Permalink to &quot;[8、游标的创建步骤？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题，2021年面试题及答案汇总.md#8游标的创建步骤)&quot;">​</a></h3><p><strong>1、</strong> 定义游标</p><p><strong>2、</strong> 打开游标</p><p><strong>3、</strong> 操作游标数据</p><p><strong>4、</strong> 关闭游标</p><h3 id="_9、mybatis中使用-和-书写占位符有什么区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#9mybatis%E4%B8%AD%E4%BD%BF%E7%94%A8#%E5%92%8C$%E4%B9%A6%E5%86%99%E5%8D%A0%E4%BD%8D%E7%AC%A6%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">9、MyBatis中使用#和$书写占位符有什么区别？</a> <a class="header-anchor" href="#_9、mybatis中使用-和-书写占位符有什么区别" aria-label="Permalink to &quot;[9、MyBatis中使用#和$书写占位符有什么区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题，2021年面试题及答案汇总.md#9mybatis中使用#和$书写占位符有什么区别)&quot;">​</a></h3><p>#将传入的数据都当成一个字符串，会对传入的数据自动加上引号；$$将传入的数据直接显示生成在SQL中。注意：使用$$占位符可能会导致SQL注射攻击，能用#的地方就不要使用$$，写order by子句的时候应该用$$而不是#。、</p><h3 id="_10、一个类文件中能否有多个类-有什么要求" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#10%E4%B8%80%E4%B8%AA%E7%B1%BB%E6%96%87%E4%BB%B6%E4%B8%AD%E8%83%BD%E5%90%A6%E6%9C%89%E5%A4%9A%E4%B8%AA%E7%B1%BB%E6%9C%89%E4%BB%80%E4%B9%88%E8%A6%81%E6%B1%82" target="_blank" rel="noreferrer">10、一个类文件中能否有多个类？有什么要求？</a> <a class="header-anchor" href="#_10、一个类文件中能否有多个类-有什么要求" aria-label="Permalink to &quot;[10、一个类文件中能否有多个类？有什么要求？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题，2021年面试题及答案汇总.md#10一个类文件中能否有多个类有什么要求)&quot;">​</a></h3><p>可以。但是只能有一个public类，而且public修饰的类名与文件名必须一致</p><h3 id="_11、如何判断一个类是无用的类" tabindex="-1">11、如何判断一个类是无用的类? <a class="header-anchor" href="#_11、如何判断一个类是无用的类" aria-label="Permalink to &quot;11、如何判断一个类是无用的类?&quot;">​</a></h3><h3 id="_12、java语言如何进行异常处理-关键字-throws、throw、try、catch、finally分别如何使用" tabindex="-1">12、Java语言如何进行异常处理，关键字：throws、throw、try、catch、finally分别如何使用？ <a class="header-anchor" href="#_12、java语言如何进行异常处理-关键字-throws、throw、try、catch、finally分别如何使用" aria-label="Permalink to &quot;12、Java语言如何进行异常处理，关键字：throws、throw、try、catch、finally分别如何使用？&quot;">​</a></h3><h3 id="_13、在多线程环境下-simpledateformat-是线程安全的吗" tabindex="-1">13、在多线程环境下，SimpleDateFormat 是线程安全的吗？ <a class="header-anchor" href="#_13、在多线程环境下-simpledateformat-是线程安全的吗" aria-label="Permalink to &quot;13、在多线程环境下，SimpleDateFormat 是线程安全的吗？&quot;">​</a></h3><h3 id="_14、string和stringbuffer、stringbuilder的区别是什么-string为什么是不可变的" tabindex="-1">14、String和StringBuffer、StringBuilder的区别是什么？String为什么是不可变的？ <a class="header-anchor" href="#_14、string和stringbuffer、stringbuilder的区别是什么-string为什么是不可变的" aria-label="Permalink to &quot;14、String和StringBuffer、StringBuilder的区别是什么？String为什么是不可变的？&quot;">​</a></h3><h3 id="_15、详细介绍一下jvm内存模型" tabindex="-1">15、详细介绍一下JVM内存模型 <a class="header-anchor" href="#_15、详细介绍一下jvm内存模型" aria-label="Permalink to &quot;15、详细介绍一下JVM内存模型&quot;">​</a></h3><h3 id="_16、i与i的区别" tabindex="-1">16、i与i的区别 <a class="header-anchor" href="#_16、i与i的区别" aria-label="Permalink to &quot;16、i与i的区别&quot;">​</a></h3><h3 id="_17、try-里有一个return语句-那么紧跟在这个try后的finally-里的代码会不会被执行-什么时候被执行-在return前还是后" tabindex="-1">17、try{}里有一个return语句，那么紧跟在这个try后的finally{}里的代码会不会被执行，什么时候被执行，在return前还是后? <a class="header-anchor" href="#_17、try-里有一个return语句-那么紧跟在这个try后的finally-里的代码会不会被执行-什么时候被执行-在return前还是后" aria-label="Permalink to &quot;17、try{}里有一个return语句，那么紧跟在这个try后的finally{}里的代码会不会被执行，什么时候被执行，在return前还是后?&quot;">​</a></h3><h3 id="_18、使用集合框架的好处" tabindex="-1">18、使用集合框架的好处 <a class="header-anchor" href="#_18、使用集合框架的好处" aria-label="Permalink to &quot;18、使用集合框架的好处&quot;">​</a></h3><h3 id="_19、hibernate的对象有几种状态" tabindex="-1">19、Hibernate的对象有几种状态 <a class="header-anchor" href="#_19、hibernate的对象有几种状态" aria-label="Permalink to &quot;19、Hibernate的对象有几种状态&quot;">​</a></h3><h3 id="_20、hashmap是怎么解决哈希冲突的" tabindex="-1">20、HashMap是怎么解决哈希冲突的？ <a class="header-anchor" href="#_20、hashmap是怎么解决哈希冲突的" aria-label="Permalink to &quot;20、HashMap是怎么解决哈希冲突的？&quot;">​</a></h3><h3 id="_21、thread类中的yield方法有什么作用" tabindex="-1">21、Thread类中的yield方法有什么作用？ <a class="header-anchor" href="#_21、thread类中的yield方法有什么作用" aria-label="Permalink to &quot;21、Thread类中的yield方法有什么作用？&quot;">​</a></h3><h3 id="_22、说一下-atomic的原理" tabindex="-1">22、说一下 Atomic的原理？ <a class="header-anchor" href="#_22、说一下-atomic的原理" aria-label="Permalink to &quot;22、说一下 Atomic的原理？&quot;">​</a></h3><h3 id="_23、原子类的常用类" tabindex="-1">23、原子类的常用类 <a class="header-anchor" href="#_23、原子类的常用类" aria-label="Permalink to &quot;23、原子类的常用类&quot;">​</a></h3><h3 id="_24、关于-oop-和设计模式的面试题" tabindex="-1">24、关于 OOP 和设计模式的面试题 <a class="header-anchor" href="#_24、关于-oop-和设计模式的面试题" aria-label="Permalink to &quot;24、关于 OOP 和设计模式的面试题&quot;">​</a></h3><h3 id="_25、jvm-监控与分析工具你用过哪些-介绍一下。" tabindex="-1">25、JVM 监控与分析工具你用过哪些？介绍一下。 <a class="header-anchor" href="#_25、jvm-监控与分析工具你用过哪些-介绍一下。" aria-label="Permalink to &quot;25、JVM 监控与分析工具你用过哪些？介绍一下。&quot;">​</a></h3><h3 id="_26、arraylist与linkedlist有什么区别" tabindex="-1">26、ArrayList与LinkedList有什么区别？ <a class="header-anchor" href="#_26、arraylist与linkedlist有什么区别" aria-label="Permalink to &quot;26、ArrayList与LinkedList有什么区别？&quot;">​</a></h3><h3 id="_27、什么时候会造成堆外内存溢出" tabindex="-1">27、什么时候会造成堆外内存溢出？ <a class="header-anchor" href="#_27、什么时候会造成堆外内存溢出" aria-label="Permalink to &quot;27、什么时候会造成堆外内存溢出？&quot;">​</a></h3><h3 id="_28、什么是指令重排序" tabindex="-1">28、什么是指令重排序？ <a class="header-anchor" href="#_28、什么是指令重排序" aria-label="Permalink to &quot;28、什么是指令重排序？&quot;">​</a></h3><h3 id="_29、final、finalize-、finally-性质不同" tabindex="-1">29、final、finalize()、finally，性质不同 <a class="header-anchor" href="#_29、final、finalize-、finally-性质不同" aria-label="Permalink to &quot;29、final、finalize()、finally，性质不同&quot;">​</a></h3><h3 id="_30、请说出与线程同步以及线程调度相关的方法。" tabindex="-1">30、请说出与线程同步以及线程调度相关的方法。 <a class="header-anchor" href="#_30、请说出与线程同步以及线程调度相关的方法。" aria-label="Permalink to &quot;30、请说出与线程同步以及线程调度相关的方法。&quot;">​</a></h3><h3 id="_31、线程之间是如何通信的" tabindex="-1">31、线程之间是如何通信的？ <a class="header-anchor" href="#_31、线程之间是如何通信的" aria-label="Permalink to &quot;31、线程之间是如何通信的？&quot;">​</a></h3><h3 id="_32、hashmap的put方法的具体流程" tabindex="-1">32、HashMap的put方法的具体流程？ <a class="header-anchor" href="#_32、hashmap的put方法的具体流程" aria-label="Permalink to &quot;32、HashMap的put方法的具体流程？&quot;">​</a></h3><h3 id="_33、什么是策略模式" tabindex="-1">33、什么是策略模式 <a class="header-anchor" href="#_33、什么是策略模式" aria-label="Permalink to &quot;33、什么是策略模式&quot;">​</a></h3><h3 id="_34、java中interrupted-和-isinterrupted方法的区别" tabindex="-1">34、Java中interrupted 和 isInterrupted方法的区别？ <a class="header-anchor" href="#_34、java中interrupted-和-isinterrupted方法的区别" aria-label="Permalink to &quot;34、Java中interrupted 和 isInterrupted方法的区别？&quot;">​</a></h3><h3 id="_35、嵌套静态类与顶级类有什么区别" tabindex="-1">35、嵌套静态类与顶级类有什么区别？ <a class="header-anchor" href="#_35、嵌套静态类与顶级类有什么区别" aria-label="Permalink to &quot;35、嵌套静态类与顶级类有什么区别？&quot;">​</a></h3><h3 id="_36、list、set、map是否继承自collection接口" tabindex="-1">36、List、Set、Map是否继承自Collection接口？ <a class="header-anchor" href="#_36、list、set、map是否继承自collection接口" aria-label="Permalink to &quot;36、List、Set、Map是否继承自Collection接口？&quot;">​</a></h3><h3 id="_37、如何测试静态方法" tabindex="-1">37、如何测试静态方法？() <a class="header-anchor" href="#_37、如何测试静态方法" aria-label="Permalink to &quot;37、如何测试静态方法？()&quot;">​</a></h3><h3 id="_38、假设把实例化的数组的变量当成方法参数-当方法执行的时候改变了数组内的元素-那么在方法外-数组元素有发生改变吗" tabindex="-1">38、假设把实例化的数组的变量当成方法参数，当方法执行的时候改变了数组内的元素，那么在方法外，数组元素有发生改变吗？ <a class="header-anchor" href="#_38、假设把实例化的数组的变量当成方法参数-当方法执行的时候改变了数组内的元素-那么在方法外-数组元素有发生改变吗" aria-label="Permalink to &quot;38、假设把实例化的数组的变量当成方法参数，当方法执行的时候改变了数组内的元素，那么在方法外，数组元素有发生改变吗？&quot;">​</a></h3><h3 id="_39、java中的readwritelock是什么" tabindex="-1">39、Java中的ReadWriteLock是什么？ <a class="header-anchor" href="#_39、java中的readwritelock是什么" aria-label="Permalink to &quot;39、Java中的ReadWriteLock是什么？&quot;">​</a></h3><h3 id="_40、什么是建造者模式" tabindex="-1">40、什么是建造者模式 <a class="header-anchor" href="#_40、什么是建造者模式" aria-label="Permalink to &quot;40、什么是建造者模式&quot;">​</a></h3><h3 id="_41、java-中如何格式化一个日期-如格式化为-ddmmyyyy-的形式" tabindex="-1">41、Java 中如何格式化一个日期？如格式化为 ddMMyyyy 的形式？ <a class="header-anchor" href="#_41、java-中如何格式化一个日期-如格式化为-ddmmyyyy-的形式" aria-label="Permalink to &quot;41、Java 中如何格式化一个日期？如格式化为 ddMMyyyy 的形式？&quot;">​</a></h3>`,99),n=[s];function l(i,h,E,p,d,c){return e(),t("div",null,n)}const A=a(o,[["render",l]]);export{B as __pageData,A as default};
