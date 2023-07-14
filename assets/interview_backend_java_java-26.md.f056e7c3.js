import{_ as s,o as a,c as n,V as e}from"./chunks/framework.c6d8cbec.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/java/java-26.md","filePath":"interview/backend/java/java-26.md"}'),l={name:"interview/backend/java/java-26.md"},p=e(`<h3 id="_1、什么是web-service-web服务" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#1%E4%BB%80%E4%B9%88%E6%98%AFweb-serviceweb%E6%9C%8D%E5%8A%A1" target="_blank" rel="noreferrer">1、什么是Web Service（Web服务）</a> <a class="header-anchor" href="#_1、什么是web-service-web服务" aria-label="Permalink to &quot;[1、什么是Web Service（Web服务）](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题及答案整理，汇总版.md#1什么是web-serviceweb服务)&quot;">​</a></h3><p>从表面上看，Web Service就是一个应用程序，它向外界暴露出一个能够通过Web进行调用的API。这就是说，你能够用编程的方法透明的调用这个应用程序，不需要了解它的任何细节，跟你使用的编程语言也没有关系。例如可以创建一个提供天气预报的Web Service，那么无论你用哪种编程语言开发的应用都可以通过调用它的API并传入城市信息来获得该城市的天气预报。之所以称之为Web Service，是因为它基于HTTP协议传输数据，这使得运行在不同机器上的不同应用无须借助附加的、专门的第三方软件或硬件，就可相互交换数据或集成。</p><h3 id="_2、内部类与静态内部类的区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#2%E5%86%85%E9%83%A8%E7%B1%BB%E4%B8%8E%E9%9D%99%E6%80%81%E5%86%85%E9%83%A8%E7%B1%BB%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">2、内部类与静态内部类的区别？</a> <a class="header-anchor" href="#_2、内部类与静态内部类的区别" aria-label="Permalink to &quot;[2、内部类与静态内部类的区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题及答案整理，汇总版.md#2内部类与静态内部类的区别)&quot;">​</a></h3><p>静态内部类相对与外部类是独立存在的，在静态内部类中无法直接访问外部类中变量、方法。如果要访问的话，必须要new一个外部类的对象，使用new出来的对象来访问。但是可以直接访问静态的变量、调用静态的方法；</p><p>普通内部类作为外部类一个成员而存在，在普通内部类中可以直接访问外部类属性，调用外部类的方法。</p><p>如果外部类要访问内部类的属性或者调用内部类的方法，必须要创建一个内部类的对象，使用该对象访问属性或者调用方法。</p><p>如果其他的类要访问普通内部类的属性或者调用普通内部类的方法，必须要在外部类中创建一个普通内部类的对象作为一个属性，外同类可以通过该属性调用普通内部类的方法或者访问普通内部类的属性</p><p>如果其他的类要访问静态内部类的属性或者调用静态内部类的方法，直接创建一个静态内部类对象即可。</p><h3 id="_3、什么是代理模式" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#3%E4%BB%80%E4%B9%88%E6%98%AF%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F" target="_blank" rel="noreferrer">3、什么是代理模式</a> <a class="header-anchor" href="#_3、什么是代理模式" aria-label="Permalink to &quot;[3、什么是代理模式](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题及答案整理，汇总版.md#3什么是代理模式)&quot;">​</a></h3><p>通过代理控制对象的访问，可以在这个对象调用方法之前、调用方法之后去处理/添加新的功能。(也就是AO的P微实现)</p><p>代理在原有代码乃至原业务流程都不修改的情况下，直接在业务流程中切入新代码，增加新功能，这也和Spring的（面向切面编程）很相似</p><h3 id="_4、32-位-jvm-和-64-位-jvm-的最大堆内存分别是多数" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#432-%E4%BD%8D-jvm-%E5%92%8C-64-%E4%BD%8D-jvm-%E7%9A%84%E6%9C%80%E5%A4%A7%E5%A0%86%E5%86%85%E5%AD%98%E5%88%86%E5%88%AB%E6%98%AF%E5%A4%9A%E6%95%B0" target="_blank" rel="noreferrer">4、32 位 JVM 和 64 位 JVM 的最大堆内存分别是多数？</a> <a class="header-anchor" href="#_4、32-位-jvm-和-64-位-jvm-的最大堆内存分别是多数" aria-label="Permalink to &quot;[4、32 位 JVM 和 64 位 JVM 的最大堆内存分别是多数？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题及答案整理，汇总版.md#432-位-jvm-和-64-位-jvm-的最大堆内存分别是多数)&quot;">​</a></h3><p>理论上说上 32 位的 JVM 堆内存可以到达 2^32，即 4GB，但实际上会比这个小很多。不同操作系统之间不同，如 Windows 系统大约 1.5 GB，Solaris 大约 3GB。64 位 JVM允许指定最大的堆内存，理论上可以达到 2^64，这是一个非常大的数字，实际上你可以指定堆内存大小到 100GB。甚至有的 JVM，如 Azul，堆内存到 1000G 都是可能的。</p><h3 id="_5、重排序实际执行的指令步骤" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#5%E9%87%8D%E6%8E%92%E5%BA%8F%E5%AE%9E%E9%99%85%E6%89%A7%E8%A1%8C%E7%9A%84%E6%8C%87%E4%BB%A4%E6%AD%A5%E9%AA%A4" target="_blank" rel="noreferrer">5、重排序实际执行的指令步骤</a> <a class="header-anchor" href="#_5、重排序实际执行的指令步骤" aria-label="Permalink to &quot;[5、重排序实际执行的指令步骤](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题及答案整理，汇总版.md#5重排序实际执行的指令步骤)&quot;">​</a></h3><p>![87_5.png][87_5.png]</p><p><strong>1、</strong> 编译器优化的重排序。编译器在不改变单线程程序语义的前提下，可以重新安排语句的执行顺序。</p><p><strong>2、</strong> 指令级并行的重排序。现代处理器采用了指令级并行技术（ILP）来将多条指令重叠执行。如果不存在数据依赖性，处理器可以改变语句对应机器指令的执行顺序。</p><p><strong>3、</strong> 内存系统的重排序。由于处理器使用缓存和读/写缓冲区，这使得加载和存储操作看上去可能是在乱序执行。</p><p>这些重排序对于单线程没问题，但是多线程都可能会导致多线程程序出现内存可见性问题。</p><h3 id="_6、invokedynamic指令是干什么的" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#6invokedynamic%E6%8C%87%E4%BB%A4%E6%98%AF%E5%B9%B2%E4%BB%80%E4%B9%88%E7%9A%84" target="_blank" rel="noreferrer">6、invokedynamic指令是干什么的？</a> <a class="header-anchor" href="#_6、invokedynamic指令是干什么的" aria-label="Permalink to &quot;[6、invokedynamic指令是干什么的？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题及答案整理，汇总版.md#6invokedynamic指令是干什么的)&quot;">​</a></h3><p>属于比较高级的题目。没看过虚拟机的一般是不知道的。所以如果你不太熟悉，不要气馁，加油！（小拳拳锤你胸口）。</p><p><code>invokedynamic</code>是<code>Java7</code>之后新加入的字节码指令，使用它可以实现一些动态类型语言的功能。我们使用的Lambda表达式，在字节码上就是invokedynamic指令实现的。它的功能有点类似反射，但它是使用方法句柄实现的，执行效率更高。</p><h3 id="_7、如何选择单例创建方式" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#7%E5%A6%82%E4%BD%95%E9%80%89%E6%8B%A9%E5%8D%95%E4%BE%8B%E5%88%9B%E5%BB%BA%E6%96%B9%E5%BC%8F" target="_blank" rel="noreferrer">7、如何选择单例创建方式</a> <a class="header-anchor" href="#_7、如何选择单例创建方式" aria-label="Permalink to &quot;[7、如何选择单例创建方式](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题及答案整理，汇总版.md#7如何选择单例创建方式)&quot;">​</a></h3><p>如果不需要延迟加载单例，可以使用枚举或者饿汉式，相对来说枚举性好于饿汉式。 如果需要延迟加载，可以使用静态内部类或者懒汉式，相对来说静态内部类好于懒韩式。 最好使用饿汉式</p><ul><li>代码演示</li></ul><p><strong>主要使用懒汉和懒汉式</strong></p><p><strong>1、</strong> 饿汉式:类初始化时,会立即加载该对象，线程天生安全,调用效率高。</p><p><strong>2、</strong> 懒汉式: 类初始化时,不会初始化该对象,真正需要使用的时候才会创建该对象,具备懒加载功能。</p><p><strong>3、</strong> 静态内部方式:结合了懒汉式和饿汉式各自的优点，真正需要对象的时候才会加载，加载类是线程安全的。</p><p><strong>4、</strong> 枚举单例: 使用枚举实现单例模式 优点:实现简单、调用效率高，枚举本身就是单例，由jvm从根本上提供保障!避免通过反射和反序列化的漏洞， 缺点没有延迟加载。</p><p><strong>5、</strong> 双重检测锁方式 (因为JVM本质重排序的原因，可能会初始化多次，不推荐使用)</p><ul><li>饿汉式</li></ul><p><strong>饿汉式：</strong></p><p>类初始化时,会立即加载该对象，线程天生安全,调用效率高。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">package com.lijie;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">//饿汉式</span></span>
<span class="line"><span style="color:#f6f6f4;">public class Demo1 {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    // 类初始化时,会立即加载该对象，线程安全,调用效率高</span></span>
<span class="line"><span style="color:#f6f6f4;">    private static Demo1 demo1 = new Demo1();</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    private Demo1() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;私有Demo1构造参数初始化&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public static Demo1 getInstance() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return demo1;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        Demo1 s1 = Demo1.getInstance();</span></span>
<span class="line"><span style="color:#f6f6f4;">        Demo1 s2 = Demo1.getInstance();</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(s1 == s2);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package com.lijie;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//饿汉式</span></span>
<span class="line"><span style="color:#24292e;">public class Demo1 {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 类初始化时,会立即加载该对象，线程安全,调用效率高</span></span>
<span class="line"><span style="color:#24292e;">    private static Demo1 demo1 = new Demo1();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private Demo1() {</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;私有Demo1构造参数初始化&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static Demo1 getInstance() {</span></span>
<span class="line"><span style="color:#24292e;">        return demo1;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        Demo1 s1 = Demo1.getInstance();</span></span>
<span class="line"><span style="color:#24292e;">        Demo1 s2 = Demo1.getInstance();</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(s1 == s2);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><ul><li>懒汉式</li></ul><p><strong>懒汉式：</strong></p><p>类初始化时,不会初始化该对象,真正需要使用的时候才会创建该对象,具备懒加载功能。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">package com.lijie;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">//懒汉式</span></span>
<span class="line"><span style="color:#f6f6f4;">public class Demo2 {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    //类初始化时，不会初始化该对象，真正需要使用的时候才会创建该对象。</span></span>
<span class="line"><span style="color:#f6f6f4;">    private static Demo2 demo2;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    private Demo2() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;私有Demo2构造参数初始化&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public synchronized static Demo2 getInstance() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        if (demo2 == null) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            demo2 = new Demo2();</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">        return demo2;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        Demo2 s1 = Demo2.getInstance();</span></span>
<span class="line"><span style="color:#f6f6f4;">        Demo2 s2 = Demo2.getInstance();</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(s1 == s2);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package com.lijie;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//懒汉式</span></span>
<span class="line"><span style="color:#24292e;">public class Demo2 {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    //类初始化时，不会初始化该对象，真正需要使用的时候才会创建该对象。</span></span>
<span class="line"><span style="color:#24292e;">    private static Demo2 demo2;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private Demo2() {</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;私有Demo2构造参数初始化&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public synchronized static Demo2 getInstance() {</span></span>
<span class="line"><span style="color:#24292e;">        if (demo2 == null) {</span></span>
<span class="line"><span style="color:#24292e;">            demo2 = new Demo2();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        return demo2;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        Demo2 s1 = Demo2.getInstance();</span></span>
<span class="line"><span style="color:#24292e;">        Demo2 s2 = Demo2.getInstance();</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(s1 == s2);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><ul><li>静态内部类</li></ul><p><strong>静态内部方式：</strong></p><p>结合了懒汉式和饿汉式各自的优点，真正需要对象的时候才会加载，加载类是线程安全的。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">package com.lijie;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">// 静态内部类方式</span></span>
<span class="line"><span style="color:#f6f6f4;">public class Demo3 {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    private Demo3() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;私有Demo3构造参数初始化&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public static class SingletonClassInstance {</span></span>
<span class="line"><span style="color:#f6f6f4;">        private static final Demo3 DEMO_3 = new Demo3();</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    // 方法没有同步</span></span>
<span class="line"><span style="color:#f6f6f4;">    public static Demo3 getInstance() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return SingletonClassInstance.DEMO_3;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        Demo3 s1 = Demo3.getInstance();</span></span>
<span class="line"><span style="color:#f6f6f4;">        Demo3 s2 = Demo3.getInstance();</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(s1 == s2);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package com.lijie;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 静态内部类方式</span></span>
<span class="line"><span style="color:#24292e;">public class Demo3 {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private Demo3() {</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;私有Demo3构造参数初始化&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static class SingletonClassInstance {</span></span>
<span class="line"><span style="color:#24292e;">        private static final Demo3 DEMO_3 = new Demo3();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 方法没有同步</span></span>
<span class="line"><span style="color:#24292e;">    public static Demo3 getInstance() {</span></span>
<span class="line"><span style="color:#24292e;">        return SingletonClassInstance.DEMO_3;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        Demo3 s1 = Demo3.getInstance();</span></span>
<span class="line"><span style="color:#24292e;">        Demo3 s2 = Demo3.getInstance();</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(s1 == s2);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><ul><li>枚举单例式</li></ul><p><strong>枚举单例：</strong></p><p>使用枚举实现单例模式 优点:实现简单、调用效率高，枚举本身就是单例，由jvm从根本上提供保障!避免通过反射和反序列化的漏洞， 缺点没有延迟加载。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">package com.lijie;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">//使用枚举实现单例模式 优点:实现简单、枚举本身就是单例，由jvm从根本上提供保障!避免通过反射和反序列化的漏洞 缺点没有延迟加载</span></span>
<span class="line"><span style="color:#f6f6f4;">public class Demo4 {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public static Demo4 getInstance() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return Demo.INSTANCE.getInstance();</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        Demo4 s1 = Demo4.getInstance();</span></span>
<span class="line"><span style="color:#f6f6f4;">        Demo4 s2 = Demo4.getInstance();</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(s1 == s2);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    //定义枚举</span></span>
<span class="line"><span style="color:#f6f6f4;">    private static enum Demo {</span></span>
<span class="line"><span style="color:#f6f6f4;">        INSTANCE;</span></span>
<span class="line"><span style="color:#f6f6f4;">        // 枚举元素为单例</span></span>
<span class="line"><span style="color:#f6f6f4;">        private Demo4 demo4;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        private Demo() {</span></span>
<span class="line"><span style="color:#f6f6f4;">            System.out.println(&quot;枚举Demo私有构造参数&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">            demo4 = new Demo4();</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        public Demo4 getInstance() {</span></span>
<span class="line"><span style="color:#f6f6f4;">            return demo4;</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package com.lijie;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//使用枚举实现单例模式 优点:实现简单、枚举本身就是单例，由jvm从根本上提供保障!避免通过反射和反序列化的漏洞 缺点没有延迟加载</span></span>
<span class="line"><span style="color:#24292e;">public class Demo4 {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static Demo4 getInstance() {</span></span>
<span class="line"><span style="color:#24292e;">        return Demo.INSTANCE.getInstance();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        Demo4 s1 = Demo4.getInstance();</span></span>
<span class="line"><span style="color:#24292e;">        Demo4 s2 = Demo4.getInstance();</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(s1 == s2);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    //定义枚举</span></span>
<span class="line"><span style="color:#24292e;">    private static enum Demo {</span></span>
<span class="line"><span style="color:#24292e;">        INSTANCE;</span></span>
<span class="line"><span style="color:#24292e;">        // 枚举元素为单例</span></span>
<span class="line"><span style="color:#24292e;">        private Demo4 demo4;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        private Demo() {</span></span>
<span class="line"><span style="color:#24292e;">            System.out.println(&quot;枚举Demo私有构造参数&quot;);</span></span>
<span class="line"><span style="color:#24292e;">            demo4 = new Demo4();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        public Demo4 getInstance() {</span></span>
<span class="line"><span style="color:#24292e;">            return demo4;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><ul><li>双重检测锁方式</li></ul><p><strong>双重检测锁方式</strong></p><p>因为JVM本质重排序的原因，可能会初始化多次，不推荐使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">package com.lijie;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">//双重检测锁方式</span></span>
<span class="line"><span style="color:#f6f6f4;">public class Demo5 {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    private static Demo5 demo5;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    private Demo5() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;私有Demo4构造参数初始化&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public static Demo5 getInstance() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        if (demo5 == null) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            synchronized (Demo5.class) {</span></span>
<span class="line"><span style="color:#f6f6f4;">                if (demo5 == null) {</span></span>
<span class="line"><span style="color:#f6f6f4;">                    demo5 = new Demo5();</span></span>
<span class="line"><span style="color:#f6f6f4;">                }</span></span>
<span class="line"><span style="color:#f6f6f4;">            }</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">        return demo5;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        Demo5 s1 = Demo5.getInstance();</span></span>
<span class="line"><span style="color:#f6f6f4;">        Demo5 s2 = Demo5.getInstance();</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(s1 == s2);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package com.lijie;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//双重检测锁方式</span></span>
<span class="line"><span style="color:#24292e;">public class Demo5 {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private static Demo5 demo5;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private Demo5() {</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;私有Demo4构造参数初始化&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static Demo5 getInstance() {</span></span>
<span class="line"><span style="color:#24292e;">        if (demo5 == null) {</span></span>
<span class="line"><span style="color:#24292e;">            synchronized (Demo5.class) {</span></span>
<span class="line"><span style="color:#24292e;">                if (demo5 == null) {</span></span>
<span class="line"><span style="color:#24292e;">                    demo5 = new Demo5();</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        return demo5;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        Demo5 s1 = Demo5.getInstance();</span></span>
<span class="line"><span style="color:#24292e;">        Demo5 s2 = Demo5.getInstance();</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(s1 == s2);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="_8、java集合的快速失败机制-fail-fast" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#8java%E9%9B%86%E5%90%88%E7%9A%84%E5%BF%AB%E9%80%9F%E5%A4%B1%E8%B4%A5%E6%9C%BA%E5%88%B6-%E2%80%9Cfail-fast" target="_blank" rel="noreferrer">8、Java集合的快速失败机制 “fail-fast”？</a> <a class="header-anchor" href="#_8、java集合的快速失败机制-fail-fast" aria-label="Permalink to &quot;[8、Java集合的快速失败机制 “fail-fast”？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题及答案整理，汇总版.md#8java集合的快速失败机制-“fail-fast)&quot;">​</a></h3><p>是java集合的一种错误检测机制，当多个线程对集合进行结构上的改变的操作时，有可能会产生 fail-fast 机制。</p><p><strong>例如：<strong>假设存在两个线程（线程</strong>1、</strong> 线程2），线程1通过Iterator在遍历集合A中的元素，在某个时候线程2修改了集合A的结构（是结构上面的修改，而不是简单的修改集合元素的内容），那么这个时候程序就会抛出 ConcurrentModificationException 异常，从而产生fail-fast机制。</p><p>**原因：**迭代器在遍历时直接访问集合中的内容，并且在遍历过程中使用一个 modCount 变量。集合在被遍历期间如果内容发生变化，就会改变modCount的值。每当迭代器使用hashNext()/next()遍历下一个元素之前，都会检测modCount变量是否为expectedmodCount值，是的话就返回遍历；否则抛出异常，终止遍历。</p><p><strong>解决办法：</strong></p><p><strong>1、</strong> 在遍历过程中，所有涉及到改变modCount值得地方全部加上synchronized。</p><p><strong>2、</strong> 使用CopyOnWriteArrayList来替换ArrayList</p><h3 id="_9、如何实现字符串的反转及替换" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#9%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E5%8F%8D%E8%BD%AC%E5%8F%8A%E6%9B%BF%E6%8D%A2" target="_blank" rel="noreferrer">9、如何实现字符串的反转及替换？</a> <a class="header-anchor" href="#_9、如何实现字符串的反转及替换" aria-label="Permalink to &quot;[9、如何实现字符串的反转及替换？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题及答案整理，汇总版.md#9如何实现字符串的反转及替换)&quot;">​</a></h3><p>方法很多，可以自己写实现也可以使用String或StringBuffer/StringBuilder中的方法。有一道很常见的面试题是用递归实现字符串反转，代码如下所示：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">public static String reverse(String originStr) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        if(originStr == null || originStr.length() &lt;= 1) </span></span>
<span class="line"><span style="color:#f6f6f4;">            return originStr;</span></span>
<span class="line"><span style="color:#f6f6f4;">        return reverse(originStr.substring(1)) + originStr.charAt(0);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public static String reverse(String originStr) {</span></span>
<span class="line"><span style="color:#24292e;">        if(originStr == null || originStr.length() &lt;= 1) </span></span>
<span class="line"><span style="color:#24292e;">            return originStr;</span></span>
<span class="line"><span style="color:#24292e;">        return reverse(originStr.substring(1)) + originStr.charAt(0);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h3 id="_10、spring开发中的工厂设计模式" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#10spring%E5%BC%80%E5%8F%91%E4%B8%AD%E7%9A%84%E5%B7%A5%E5%8E%82%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F" target="_blank" rel="noreferrer">10、Spring开发中的工厂设计模式</a> <a class="header-anchor" href="#_10、spring开发中的工厂设计模式" aria-label="Permalink to &quot;[10、Spring开发中的工厂设计模式](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新面试题及答案整理，汇总版.md#10spring开发中的工厂设计模式)&quot;">​</a></h3><p><strong>Spring IOC</strong></p><p><strong>1、</strong> 看过Spring源码就知道，在Spring IOC容器创建bean的过程是使用了工厂设计模式</p><p><strong>2、</strong> Spring中无论是通过xml配置还是通过配置类还是注解进行创建bean，大部分都是通过简单工厂来进行创建的。</p><p><strong>3、</strong> 当容器拿到了beanName和class类型后，动态的通过反射创建具体的某个对象，最后将创建的对象放到Map中。</p><p><strong>为什么Spring IOC要使用工厂设计模式创建Bean呢</strong></p><p><strong>1、</strong> 在实际开发中，如果我们A对象调用B，B调用C，C调用D的话我们程序的耦合性就会变高。（耦合大致分为类与类之间的依赖，方法与方法之间的依赖。）</p><p><strong>2、</strong> 在很久以前的三层架构编程时，都是控制层调用业务层，业务层调用数据访问层时，都是是直接new对象，耦合性大大提升，代码重复量很高，对象满天飞</p><p><strong>3、</strong> 为了避免这种情况，Spring使用工厂模式编程，写一个工厂，由工厂创建Bean，以后我们如果要对象就直接管工厂要就可以，剩下的事情不归我们管了。Spring IOC容器的工厂中有个静态的Map集合，是为了让工厂符合单例设计模式，即每个对象只生产一次，生产出对象后就存入到Map集合中，保证了实例不会重复影响程序效率。</p><h3 id="_11、jre、jdk、jvm-及-jit-之间有什么不同" tabindex="-1">11、JRE、JDK、JVM 及 JIT 之间有什么不同？ <a class="header-anchor" href="#_11、jre、jdk、jvm-及-jit-之间有什么不同" aria-label="Permalink to &quot;11、JRE、JDK、JVM 及 JIT 之间有什么不同？&quot;">​</a></h3><h3 id="_12、http的状态码" tabindex="-1">12、HTTP的状态码 <a class="header-anchor" href="#_12、http的状态码" aria-label="Permalink to &quot;12、HTTP的状态码&quot;">​</a></h3><h3 id="_13、线程同步的方法" tabindex="-1">13、线程同步的方法 <a class="header-anchor" href="#_13、线程同步的方法" aria-label="Permalink to &quot;13、线程同步的方法&quot;">​</a></h3><h3 id="_14、类examplea继承exception-类exampleb继承examplea。" tabindex="-1">14、类ExampleA继承Exception，类ExampleB继承ExampleA。 <a class="header-anchor" href="#_14、类examplea继承exception-类exampleb继承examplea。" aria-label="Permalink to &quot;14、类ExampleA继承Exception，类ExampleB继承ExampleA。&quot;">​</a></h3><h3 id="_15、hashmap为什么不直接使用hashcode-处理后的哈希值直接作为table的下标" tabindex="-1">15、HashMap为什么不直接使用hashCode()处理后的哈希值直接作为table的下标？ <a class="header-anchor" href="#_15、hashmap为什么不直接使用hashcode-处理后的哈希值直接作为table的下标" aria-label="Permalink to &quot;15、HashMap为什么不直接使用hashCode()处理后的哈希值直接作为table的下标？&quot;">​</a></h3><h3 id="_16、volatile关键字的原理是什么-干什么用的" tabindex="-1">16、volatile关键字的原理是什么？干什么用的？ <a class="header-anchor" href="#_16、volatile关键字的原理是什么-干什么用的" aria-label="Permalink to &quot;16、volatile关键字的原理是什么？干什么用的？&quot;">​</a></h3><h3 id="_17、写一个方法-输入一个文件名和一个字符串-统计这个字符串在这个文件中出现的次数。" tabindex="-1">17、写一个方法，输入一个文件名和一个字符串，统计这个字符串在这个文件中出现的次数。 <a class="header-anchor" href="#_17、写一个方法-输入一个文件名和一个字符串-统计这个字符串在这个文件中出现的次数。" aria-label="Permalink to &quot;17、写一个方法，输入一个文件名和一个字符串，统计这个字符串在这个文件中出现的次数。&quot;">​</a></h3><h3 id="_18、线程的状态流转图" tabindex="-1">18、线程的状态流转图 <a class="header-anchor" href="#_18、线程的状态流转图" aria-label="Permalink to &quot;18、线程的状态流转图&quot;">​</a></h3><h3 id="_19、treemap-和-treeset-在排序时如何比较元素-collections-工具类中的-sort-方法如何比较元素" tabindex="-1">19、TreeMap 和 TreeSet 在排序时如何比较元素？Collections 工具类中的 sort()方法如何比较元素？ <a class="header-anchor" href="#_19、treemap-和-treeset-在排序时如何比较元素-collections-工具类中的-sort-方法如何比较元素" aria-label="Permalink to &quot;19、TreeMap 和 TreeSet 在排序时如何比较元素？Collections 工具类中的 sort()方法如何比较元素？&quot;">​</a></h3><h3 id="_20、java的io流分为哪两种" tabindex="-1">20、Java的io流分为哪两种？ <a class="header-anchor" href="#_20、java的io流分为哪两种" aria-label="Permalink to &quot;20、Java的io流分为哪两种？&quot;">​</a></h3><h3 id="_21、如何解析json对象" tabindex="-1">21、如何解析json对象？ <a class="header-anchor" href="#_21、如何解析json对象" aria-label="Permalink to &quot;21、如何解析json对象？&quot;">​</a></h3><h3 id="_22、synchronized-和-reentrantlock-区别是什么" tabindex="-1">22、synchronized 和 ReentrantLock 区别是什么？ <a class="header-anchor" href="#_22、synchronized-和-reentrantlock-区别是什么" aria-label="Permalink to &quot;22、synchronized 和 ReentrantLock 区别是什么？&quot;">​</a></h3><h3 id="_23、使用log4j对程序有影响吗" tabindex="-1">23、使用Log4j对程序有影响吗？ <a class="header-anchor" href="#_23、使用log4j对程序有影响吗" aria-label="Permalink to &quot;23、使用Log4j对程序有影响吗？&quot;">​</a></h3><h3 id="_24、在新生代-复制算法" tabindex="-1">24、在新生代-复制算法 <a class="header-anchor" href="#_24、在新生代-复制算法" aria-label="Permalink to &quot;24、在新生代-复制算法&quot;">​</a></h3><h3 id="_25、对象是怎么从年轻代进入老年代的" tabindex="-1">25、对象是怎么从年轻代进入老年代的？ <a class="header-anchor" href="#_25、对象是怎么从年轻代进入老年代的" aria-label="Permalink to &quot;25、对象是怎么从年轻代进入老年代的？&quot;">​</a></h3><h3 id="_26、int和integer有什么区别" tabindex="-1">26、int和Integer有什么区别？ <a class="header-anchor" href="#_26、int和integer有什么区别" aria-label="Permalink to &quot;26、int和Integer有什么区别？&quot;">​</a></h3><h3 id="_27、java-中的内存映射缓存区是什么" tabindex="-1">27、Java 中的内存映射缓存区是什么？ <a class="header-anchor" href="#_27、java-中的内存映射缓存区是什么" aria-label="Permalink to &quot;27、Java 中的内存映射缓存区是什么？&quot;">​</a></h3><h3 id="_28、你能解释一下里氏替换原则吗" tabindex="-1">28、你能解释一下里氏替换原则吗? <a class="header-anchor" href="#_28、你能解释一下里氏替换原则吗" aria-label="Permalink to &quot;28、你能解释一下里氏替换原则吗?&quot;">​</a></h3><h3 id="_29、类加载的过程是什么" tabindex="-1">29、类加载的过程是什么？ <a class="header-anchor" href="#_29、类加载的过程是什么" aria-label="Permalink to &quot;29、类加载的过程是什么？&quot;">​</a></h3><h3 id="_30、说出几点-java-中使用-collections-的最佳实践" tabindex="-1">30、说出几点 Java 中使用 Collections 的最佳实践 <a class="header-anchor" href="#_30、说出几点-java-中使用-collections-的最佳实践" aria-label="Permalink to &quot;30、说出几点 Java 中使用 Collections 的最佳实践&quot;">​</a></h3><h3 id="_31、程序计数器为什么是私有的" tabindex="-1">31、程序计数器为什么是私有的? <a class="header-anchor" href="#_31、程序计数器为什么是私有的" aria-label="Permalink to &quot;31、程序计数器为什么是私有的?&quot;">​</a></h3><h3 id="_32、为什么需要双亲委派模式" tabindex="-1">32、为什么需要双亲委派模式？ <a class="header-anchor" href="#_32、为什么需要双亲委派模式" aria-label="Permalink to &quot;32、为什么需要双亲委派模式？&quot;">​</a></h3><h3 id="_33、hashset与hashmap的区别" tabindex="-1">33、HashSet与HashMap的区别 <a class="header-anchor" href="#_33、hashset与hashmap的区别" aria-label="Permalink to &quot;33、HashSet与HashMap的区别&quot;">​</a></h3><h3 id="_34、用-wait-notify-写一段代码来解决生产者-消费者问题" tabindex="-1">34、用 wait-notify 写一段代码来解决生产者-消费者问题？ <a class="header-anchor" href="#_34、用-wait-notify-写一段代码来解决生产者-消费者问题" aria-label="Permalink to &quot;34、用 wait-notify 写一段代码来解决生产者-消费者问题？&quot;">​</a></h3><h3 id="_35、谈谈你知道的垃圾收集器" tabindex="-1">35、谈谈你知道的垃圾收集器 <a class="header-anchor" href="#_35、谈谈你知道的垃圾收集器" aria-label="Permalink to &quot;35、谈谈你知道的垃圾收集器&quot;">​</a></h3><h3 id="_36、gc垃圾回收算法与垃圾收集器的关系" tabindex="-1">36、GC垃圾回收算法与垃圾收集器的关系？ <a class="header-anchor" href="#_36、gc垃圾回收算法与垃圾收集器的关系" aria-label="Permalink to &quot;36、GC垃圾回收算法与垃圾收集器的关系？&quot;">​</a></h3><h3 id="_37、什么是b-s架构-什么是c-s架构" tabindex="-1">37、什么是B/S架构？什么是C/S架构 <a class="header-anchor" href="#_37、什么是b-s架构-什么是c-s架构" aria-label="Permalink to &quot;37、什么是B/S架构？什么是C/S架构&quot;">​</a></h3><h3 id="_38、什么是事务-事务有那些特点" tabindex="-1">38、什么是事务？事务有那些特点？ <a class="header-anchor" href="#_38、什么是事务-事务有那些特点" aria-label="Permalink to &quot;38、什么是事务？事务有那些特点？&quot;">​</a></h3><h3 id="_39、math-round-11-5-等于多少-math-round-11-5-等于多少" tabindex="-1">39、Math.round(11.5) 等于多少？Math.round(-11.5)等于多少？ <a class="header-anchor" href="#_39、math-round-11-5-等于多少-math-round-11-5-等于多少" aria-label="Permalink to &quot;39、Math.round(11.5) 等于多少？Math.round(-11.5)等于多少？&quot;">​</a></h3><h3 id="_40、什么是happen-before原则" tabindex="-1">40、什么是happen-before原则？ <a class="header-anchor" href="#_40、什么是happen-before原则" aria-label="Permalink to &quot;40、什么是happen-before原则？&quot;">​</a></h3>`,100),o=[p];function t(c,r,i,f,y,m){return a(),n("div",null,o)}const u=s(l,[["render",t]]);export{h as __pageData,u as default};
