import{_ as a,o as s,c as n,V as e}from"./chunks/framework.c6d8cbec.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/java/java-20.md","filePath":"interview/backend/java/java-20.md"}'),l={name:"interview/backend/java/java-20.md"},p=e(`<h3 id="_1、如何判断一个对象是否存活" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#1%E5%A6%82%E4%BD%95%E5%88%A4%E6%96%AD%E4%B8%80%E4%B8%AA%E5%AF%B9%E8%B1%A1%E6%98%AF%E5%90%A6%E5%AD%98%E6%B4%BB" target="_blank" rel="noreferrer">1、如何判断一个对象是否存活</a> <a class="header-anchor" href="#_1、如何判断一个对象是否存活" aria-label="Permalink to &quot;[1、如何判断一个对象是否存活](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新2021年面试题及答案，汇总版.md#1如何判断一个对象是否存活)&quot;">​</a></h3><p><strong>判断一个对象是否存活有两种方法：</strong></p><p><strong>1、</strong> 引用计数法</p><p>所谓引用计数法就是给每一个对象设置一个引用计数器，每当有一个地方引用这个对象时，就将计数器加一，引用失效时，计数器就减一。当一个对象的引用计数器为零时，说明此对象没有被引用，也就是“死对象”,将会被垃圾回收、</p><p>引用计数法有一个缺陷就是无法解决循环引用问题，也就是说当对象 A 引用对象 B，对象 B 又引用者对象 A，那么此时 A、B 对象的引用计数器都不为零，也就造成无法完成垃圾回收，所以主流的虚拟机都没有采用这种算法。</p><p><strong>2、</strong> 可达性算法（引用链法）</p><p>该算法的思想是：从一个被称为 GC Roots 的对象开始向下搜索，如果一个对象到 GC Roots 没有任何引用链相连时，则说明此对象不可用。</p><p><strong>在 Java 中可以作为 GC Roots 的对象有以下几种：</strong></p><p><strong>1、</strong> 虚拟机栈中引用的对象</p><p><strong>2、</strong> 方法区类静态属性引用的对象</p><p><strong>3、</strong> 方法区常量池引用的对象</p><p><strong>4、</strong> 本地方法栈JNI引用的对象</p><p>虽然这些算法可以判定一个对象是否能被回收，但是当满足上述条件时，一个对象比不一定会被回收。当一个对象不可达 GC Root 时，这个对象并不会立马被回收，而是出于一个死缓的阶段，若要被真正的回收需要经历两次标记、</p><p>如果对象在可达性分析中没有与 GC Root 的引用链，那么此时就会被第一次标记并且进行一次筛选，筛选的条件是是否有必要执行 finalize() 方法。当对象没有覆盖 finalize() 方法或者已被虚拟机调用过，那么就认为是没必要的。 如果该对象有必要执行 finalize() 方法，那么这个对象将会放在一个称为 F-Queue 的对队列中，虚拟机会触发一个 Finalize() 线程去执行，此线程是低优先级的，并且虚拟机不会承诺一直等待它运行完，这是因为如果 finalize() 执行缓慢或者发生了死锁，那么就会造成 F-Queue 队列一直等待，造成了内存回收系统的崩溃。GC 对处于 F-Queue 中的对象进行第二次被标记，这时，该对象将被移除” 即将回收” 集合，等待回收。</p><h3 id="_2、int与integer的区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#2int%E4%B8%8Einteger%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">2、Int与integer的区别</a> <a class="header-anchor" href="#_2、int与integer的区别" aria-label="Permalink to &quot;[2、Int与integer的区别](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新2021年面试题及答案，汇总版.md#2int与integer的区别)&quot;">​</a></h3><p>Integer是int的包装类型。</p><p>Int的默认值是0，integer的默认值是null</p><h3 id="_3、servlet的生命周期" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#3servlet%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F" target="_blank" rel="noreferrer">3、Servlet的生命周期？</a> <a class="header-anchor" href="#_3、servlet的生命周期" aria-label="Permalink to &quot;[3、Servlet的生命周期？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新2021年面试题及答案，汇总版.md#3servlet的生命周期)&quot;">​</a></h3><p><strong>1、</strong> 加载：判断servlet实例是否存在，如果不存在，就加载serlvet</p><p><strong>2、</strong> 实例化：</p><p><strong>3、</strong> 初始化</p><p>4、服务</p><p>5、销毁</p><h3 id="_4、怎么唤醒一个阻塞的线程" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#4%E6%80%8E%E4%B9%88%E5%94%A4%E9%86%92%E4%B8%80%E4%B8%AA%E9%98%BB%E5%A1%9E%E7%9A%84%E7%BA%BF%E7%A8%8B" target="_blank" rel="noreferrer">4、怎么唤醒一个阻塞的线程</a> <a class="header-anchor" href="#_4、怎么唤醒一个阻塞的线程" aria-label="Permalink to &quot;[4、怎么唤醒一个阻塞的线程](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新2021年面试题及答案，汇总版.md#4怎么唤醒一个阻塞的线程)&quot;">​</a></h3><p>如果线程是因为调用了wait()、sleep()或者join()方法而导致的阻塞，可以中断线程，并且通过抛出InterruptedException来唤醒它；如果线程遇到了IO阻塞，无能为力，因为IO是操作系统实现的，Java代码并没有办法直接接触到操作系统。</p><h3 id="_5、虚拟dom的优劣如何" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#5%E8%99%9A%E6%8B%9Fdom%E7%9A%84%E4%BC%98%E5%8A%A3%E5%A6%82%E4%BD%95" target="_blank" rel="noreferrer">5、虚拟DOM的优劣如何?</a> <a class="header-anchor" href="#_5、虚拟dom的优劣如何" aria-label="Permalink to &quot;[5、虚拟DOM的优劣如何?](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新2021年面试题及答案，汇总版.md#5虚拟dom的优劣如何)&quot;">​</a></h3><p><strong>优点:</strong></p><p><strong>1、</strong> 保证性能下限: 虚拟DOM可以经过diff找出最小差异,然后批量进行patch,这种操作虽然比不上手动优化,但是比起粗暴的DOM操作性能要好很多,因此虚拟DOM可以保证性能下限</p><p><strong>2、</strong> 无需手动操作DOM: 虚拟DOM的diff和patch都是在一次更新中自动进行的,我们无需手动操作DOM,极大提高开发效率</p><p><strong>3、</strong> 跨平台: 虚拟DOM本质上是JavaScript对象,而DOM与平台强相关,相比之下虚拟DOM可以进行更方便地跨平台操作,例如服务器渲染、移动端开发等等</p><p><strong>缺点:</strong></p><p>无法进行极致优化: 在一些性能要求极高的应用中虚拟DOM无法进行针对性的极致优化,比如VScode采用直接手动操作DOM的方式进行极端的性能优化</p><h3 id="_6、双亲委派模型是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#6%E5%8F%8C%E4%BA%B2%E5%A7%94%E6%B4%BE%E6%A8%A1%E5%9E%8B%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">6、双亲委派模型是什么？</a> <a class="header-anchor" href="#_6、双亲委派模型是什么" aria-label="Permalink to &quot;[6、双亲委派模型是什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新2021年面试题及答案，汇总版.md#6双亲委派模型是什么)&quot;">​</a></h3><p>类加载器具有等级制度但非继承关系，以组合的方式复用父加载器的功能。双亲委派模型要求除了顶层的启动类加载器外，其余类加载器都应该有自己的父加载器。</p><p>一个类加载器收到了类加载请求，它不会自己去尝试加载，而将该请求委派给父加载器，每层的类加载器都是如此，因此所有加载请求最终都应该传送到启动类加载器，只有当父加载器反馈无法完成请求时，子加载器才会尝试。</p><p>类跟随它的加载器一起具备了有优先级的层次关系，确保某个类在各个类加载器环境中都是同一个，保证程序的稳定性。</p><h3 id="_7、静态嵌套类-static-nested-class-和内部类-inner-class-的不同" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#7%E9%9D%99%E6%80%81%E5%B5%8C%E5%A5%97%E7%B1%BBstatic-nested-class%E5%92%8C%E5%86%85%E9%83%A8%E7%B1%BBinner-class%E7%9A%84%E4%B8%8D%E5%90%8C" target="_blank" rel="noreferrer">7、静态嵌套类(Static Nested Class)和内部类（Inner Class）的不同？</a> <a class="header-anchor" href="#_7、静态嵌套类-static-nested-class-和内部类-inner-class-的不同" aria-label="Permalink to &quot;[7、静态嵌套类(Static Nested Class)和内部类（Inner Class）的不同？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新2021年面试题及答案，汇总版.md#7静态嵌套类static-nested-class和内部类inner-class的不同)&quot;">​</a></h3><p>Static Nested Class是被声明为静态（static）的内部类，它可以不依赖于外部类实例被实例化。而通常的内部类需要在外部类实例化后才能实例化，其语法看起来挺诡异的，如下所示。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/</span></span>
<span class="line"><span style="color:#f6f6f4;"> * 扑克类（一副扑克）</span></span>
<span class="line"><span style="color:#f6f6f4;"> * @author 骆昊</span></span>
<span class="line"><span style="color:#f6f6f4;"> *</span></span>
<span class="line"><span style="color:#f6f6f4;"> */</span></span>
<span class="line"><span style="color:#f6f6f4;">public class Poker {</span></span>
<span class="line"><span style="color:#f6f6f4;">    private static String[] suites = {&quot;黑桃&quot;, &quot;红桃&quot;, &quot;草花&quot;, &quot;方块&quot;};</span></span>
<span class="line"><span style="color:#f6f6f4;">    private static int[] faces = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13};</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    private Card[] cards;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    /</span></span>
<span class="line"><span style="color:#f6f6f4;">     * 构造器</span></span>
<span class="line"><span style="color:#f6f6f4;">     * </span></span>
<span class="line"><span style="color:#f6f6f4;">     */</span></span>
<span class="line"><span style="color:#f6f6f4;">    public Poker() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        cards = new Card[52];</span></span>
<span class="line"><span style="color:#f6f6f4;">        for(int i = 0; i &lt; suites.length; i++) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            for(int j = 0; j &lt; faces.length; j++) {</span></span>
<span class="line"><span style="color:#f6f6f4;">                cards[i * 13 + j] = new Card(suites[i], faces[j]);</span></span>
<span class="line"><span style="color:#f6f6f4;">            }</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    /</span></span>
<span class="line"><span style="color:#f6f6f4;">     * 洗牌 （随机乱序）</span></span>
<span class="line"><span style="color:#f6f6f4;">     * </span></span>
<span class="line"><span style="color:#f6f6f4;">     */</span></span>
<span class="line"><span style="color:#f6f6f4;">    public void shuffle() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        for(int i = 0, len = cards.length; i &lt; len; i++) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            int index = (int) (Math.random() * len);</span></span>
<span class="line"><span style="color:#f6f6f4;">            Card temp = cards[index];</span></span>
<span class="line"><span style="color:#f6f6f4;">            cards[index] = cards[i];</span></span>
<span class="line"><span style="color:#f6f6f4;">            cards[i] = temp;</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    /</span></span>
<span class="line"><span style="color:#f6f6f4;">     * 发牌</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param index 发牌的位置</span></span>
<span class="line"><span style="color:#f6f6f4;">     * </span></span>
<span class="line"><span style="color:#f6f6f4;">     */</span></span>
<span class="line"><span style="color:#f6f6f4;">    public Card deal(int index) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return cards[index];</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    /</span></span>
<span class="line"><span style="color:#f6f6f4;">     * 卡片类（一张扑克）</span></span>
<span class="line"><span style="color:#f6f6f4;">     * [内部类]</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @author 骆昊</span></span>
<span class="line"><span style="color:#f6f6f4;">     *</span></span>
<span class="line"><span style="color:#f6f6f4;">     */</span></span>
<span class="line"><span style="color:#f6f6f4;">    public class Card {</span></span>
<span class="line"><span style="color:#f6f6f4;">        private String suite;   // 花色</span></span>
<span class="line"><span style="color:#f6f6f4;">        private int face;       // 点数</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        public Card(String suite, int face) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            this.suite = suite;</span></span>
<span class="line"><span style="color:#f6f6f4;">            this.face = face;</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        @Override</span></span>
<span class="line"><span style="color:#f6f6f4;">        public String toString() {</span></span>
<span class="line"><span style="color:#f6f6f4;">            String faceStr = &quot;&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">            switch(face) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            case 1: faceStr = &quot;A&quot;; break;</span></span>
<span class="line"><span style="color:#f6f6f4;">            case 11: faceStr = &quot;J&quot;; break;</span></span>
<span class="line"><span style="color:#f6f6f4;">            case 12: faceStr = &quot;Q&quot;; break;</span></span>
<span class="line"><span style="color:#f6f6f4;">            case 13: faceStr = &quot;K&quot;; break;</span></span>
<span class="line"><span style="color:#f6f6f4;">            default: faceStr = String.valueOf(face);</span></span>
<span class="line"><span style="color:#f6f6f4;">            }</span></span>
<span class="line"><span style="color:#f6f6f4;">            return suite + faceStr;</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/</span></span>
<span class="line"><span style="color:#24292e;"> * 扑克类（一副扑克）</span></span>
<span class="line"><span style="color:#24292e;"> * @author 骆昊</span></span>
<span class="line"><span style="color:#24292e;"> *</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">public class Poker {</span></span>
<span class="line"><span style="color:#24292e;">    private static String[] suites = {&quot;黑桃&quot;, &quot;红桃&quot;, &quot;草花&quot;, &quot;方块&quot;};</span></span>
<span class="line"><span style="color:#24292e;">    private static int[] faces = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13};</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private Card[] cards;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /</span></span>
<span class="line"><span style="color:#24292e;">     * 构造器</span></span>
<span class="line"><span style="color:#24292e;">     * </span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public Poker() {</span></span>
<span class="line"><span style="color:#24292e;">        cards = new Card[52];</span></span>
<span class="line"><span style="color:#24292e;">        for(int i = 0; i &lt; suites.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">            for(int j = 0; j &lt; faces.length; j++) {</span></span>
<span class="line"><span style="color:#24292e;">                cards[i * 13 + j] = new Card(suites[i], faces[j]);</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /</span></span>
<span class="line"><span style="color:#24292e;">     * 洗牌 （随机乱序）</span></span>
<span class="line"><span style="color:#24292e;">     * </span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public void shuffle() {</span></span>
<span class="line"><span style="color:#24292e;">        for(int i = 0, len = cards.length; i &lt; len; i++) {</span></span>
<span class="line"><span style="color:#24292e;">            int index = (int) (Math.random() * len);</span></span>
<span class="line"><span style="color:#24292e;">            Card temp = cards[index];</span></span>
<span class="line"><span style="color:#24292e;">            cards[index] = cards[i];</span></span>
<span class="line"><span style="color:#24292e;">            cards[i] = temp;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /</span></span>
<span class="line"><span style="color:#24292e;">     * 发牌</span></span>
<span class="line"><span style="color:#24292e;">     * @param index 发牌的位置</span></span>
<span class="line"><span style="color:#24292e;">     * </span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public Card deal(int index) {</span></span>
<span class="line"><span style="color:#24292e;">        return cards[index];</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /</span></span>
<span class="line"><span style="color:#24292e;">     * 卡片类（一张扑克）</span></span>
<span class="line"><span style="color:#24292e;">     * [内部类]</span></span>
<span class="line"><span style="color:#24292e;">     * @author 骆昊</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public class Card {</span></span>
<span class="line"><span style="color:#24292e;">        private String suite;   // 花色</span></span>
<span class="line"><span style="color:#24292e;">        private int face;       // 点数</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        public Card(String suite, int face) {</span></span>
<span class="line"><span style="color:#24292e;">            this.suite = suite;</span></span>
<span class="line"><span style="color:#24292e;">            this.face = face;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        @Override</span></span>
<span class="line"><span style="color:#24292e;">        public String toString() {</span></span>
<span class="line"><span style="color:#24292e;">            String faceStr = &quot;&quot;;</span></span>
<span class="line"><span style="color:#24292e;">            switch(face) {</span></span>
<span class="line"><span style="color:#24292e;">            case 1: faceStr = &quot;A&quot;; break;</span></span>
<span class="line"><span style="color:#24292e;">            case 11: faceStr = &quot;J&quot;; break;</span></span>
<span class="line"><span style="color:#24292e;">            case 12: faceStr = &quot;Q&quot;; break;</span></span>
<span class="line"><span style="color:#24292e;">            case 13: faceStr = &quot;K&quot;; break;</span></span>
<span class="line"><span style="color:#24292e;">            default: faceStr = String.valueOf(face);</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            return suite + faceStr;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>测试代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">class PokerTest {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        Poker poker = new Poker();</span></span>
<span class="line"><span style="color:#f6f6f4;">        poker.shuffle();                // 洗牌</span></span>
<span class="line"><span style="color:#f6f6f4;">        Poker.Card c1 = poker.deal(0);  // 发第一张牌</span></span>
<span class="line"><span style="color:#f6f6f4;">        // 对于非静态内部类Card</span></span>
<span class="line"><span style="color:#f6f6f4;">        // 只有通过其外部类Poker对象才能创建Card对象</span></span>
<span class="line"><span style="color:#f6f6f4;">        Poker.Card c2 = poker.new Card(&quot;红心&quot;, 1);    // 自己创建一张牌</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(c1);     // 洗牌后的第一张</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(c2);     // 打印: 红心A</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class PokerTest {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        Poker poker = new Poker();</span></span>
<span class="line"><span style="color:#24292e;">        poker.shuffle();                // 洗牌</span></span>
<span class="line"><span style="color:#24292e;">        Poker.Card c1 = poker.deal(0);  // 发第一张牌</span></span>
<span class="line"><span style="color:#24292e;">        // 对于非静态内部类Card</span></span>
<span class="line"><span style="color:#24292e;">        // 只有通过其外部类Poker对象才能创建Card对象</span></span>
<span class="line"><span style="color:#24292e;">        Poker.Card c2 = poker.new Card(&quot;红心&quot;, 1);    // 自己创建一张牌</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(c1);     // 洗牌后的第一张</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(c2);     // 打印: 红心A</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><blockquote><p>面试题 - 下面的代码哪些地方会产生编译错误？</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">class Outer {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    class Inner {}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public static void foo() { new Inner(); }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public void bar() { new Inner(); }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        new Inner();</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class Outer {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    class Inner {}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static void foo() { new Inner(); }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public void bar() { new Inner(); }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        new Inner();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><blockquote><p>注意：Java中非静态内部类对象的创建要依赖其外部类对象，上面的面试题中foo和main方法都是静态方法，静态方法中没有this，也就是说没有所谓的外部类对象，因此无法创建内部类对象，如果要在静态方法中创建内部类对象，可以这样做：</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">new Outer().new Inner();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">new Outer().new Inner();</span></span></code></pre></div><h3 id="_8、如果对象的引用被置为null-垃圾收集器是否会立即释放对象占用的内存" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#8%E5%A6%82%E6%9E%9C%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%BC%95%E7%94%A8%E8%A2%AB%E7%BD%AE%E4%B8%BAnull%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8%E6%98%AF%E5%90%A6%E4%BC%9A%E7%AB%8B%E5%8D%B3%E9%87%8A%E6%94%BE%E5%AF%B9%E8%B1%A1%E5%8D%A0%E7%94%A8%E7%9A%84%E5%86%85%E5%AD%98" target="_blank" rel="noreferrer">8、如果对象的引用被置为null，垃圾收集器是否会立即释放对象占用的内存？</a> <a class="header-anchor" href="#_8、如果对象的引用被置为null-垃圾收集器是否会立即释放对象占用的内存" aria-label="Permalink to &quot;[8、如果对象的引用被置为null，垃圾收集器是否会立即释放对象占用的内存？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新2021年面试题及答案，汇总版.md#8如果对象的引用被置为null垃圾收集器是否会立即释放对象占用的内存)&quot;">​</a></h3><p><strong>1、</strong> 不会，在下一个垃圾回调周期中，这个对象将是被可回收的。</p><p><strong>2、</strong> 也就是说并不会立即被垃圾收集器立刻回收，而是在下一次垃圾回收时才会释放其占用的内存。</p><h3 id="_9、jvm-出现-fullgc-很频繁-怎么去线上排查问题" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#9jvm-%E5%87%BA%E7%8E%B0-fullgc-%E5%BE%88%E9%A2%91%E7%B9%81%E6%80%8E%E4%B9%88%E5%8E%BB%E7%BA%BF%E4%B8%8A%E6%8E%92%E6%9F%A5%E9%97%AE%E9%A2%98" target="_blank" rel="noreferrer">9、JVM 出现 fullGC 很频繁，怎么去线上排查问题</a> <a class="header-anchor" href="#_9、jvm-出现-fullgc-很频繁-怎么去线上排查问题" aria-label="Permalink to &quot;[9、JVM 出现 fullGC 很频繁，怎么去线上排查问题](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新2021年面试题及答案，汇总版.md#9jvm-出现-fullgc-很频繁怎么去线上排查问题)&quot;">​</a></h3><p><strong>这题就依据full GC的触发条件来做：</strong></p><p><strong>1、</strong> 如果有perm gen的话(jdk1.8就没了)，要给perm gen分配空间，但没有足够的空间时，会触发full gc。</p><p><strong>2、</strong> 所以看看是不是perm gen区的值设置得太小了。</p><p><strong>3、</strong> <code>System.gc()</code>方法的调用</p><p><strong>4、</strong> 这个一般没人去调用吧~~~</p><p><strong>5、</strong> 当统计得到的Minor GC晋升到旧生代的平均大小大于老年代的剩余空间，则会触发full gc(这就可以从多个角度上看了)</p><p><strong>6、</strong> 是不是频繁创建了大对象(也有可能eden区设置过小)(大对象直接分配在老年代中，导致老年代空间不足---&gt;从而频繁gc)</p><p><strong>7、</strong> 是不是老年代的空间设置过小了(Minor GC几个对象就大于老年代的剩余空间了)</p><h3 id="_10、jvm-内存区域" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#10jvm-%E5%86%85%E5%AD%98%E5%8C%BA%E5%9F%9F" target="_blank" rel="noreferrer">10、JVM 内存区域</a> <a class="header-anchor" href="#_10、jvm-内存区域" aria-label="Permalink to &quot;[10、JVM 内存区域](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新2021年面试题及答案，汇总版.md#10jvm-内存区域)&quot;">​</a></h3><p>JVM 内存区域主要分为线程私有区域【程序计数器、虚拟机栈、本地方法区】、线程共享区域【JAVA 堆、方法区】、直接内存。</p><p>线程私有数据区域生命周期与线程相同, 依赖用户线程的启动/结束 而 创建/销毁(在 Hotspot VM 内, 每个线程都与操作系统的本地线程直接映射, 因此这部分内存区域的存/否跟随本地线程的生/死对应)。</p><p>线程共享区域随虚拟机的启动/关闭而创建/销毁。</p><p>直接内存并不是 JVM 运行时数据区的一部分, 但也会被频繁的使用: 在 JDK 1.4 引入的 NIO 提供了基于Channel与 Buffer的IO方式, 它可以使用Native函数库直接分配堆外内存, 然后使用DirectByteBuffer 对象作为这块内存的引用进行操作(详见: Java I/O 扩展), 这样就避免了在 Java堆和 Native 堆中来回复制数据, 因此在一些场景中可以显著提高性能。</p><h3 id="_11、原型模式的使用方式" tabindex="-1">11、原型模式的使用方式 <a class="header-anchor" href="#_11、原型模式的使用方式" aria-label="Permalink to &quot;11、原型模式的使用方式&quot;">​</a></h3><h3 id="_12、简述一下你了解的设计模式。" tabindex="-1">12、简述一下你了解的设计模式。 <a class="header-anchor" href="#_12、简述一下你了解的设计模式。" aria-label="Permalink to &quot;12、简述一下你了解的设计模式。&quot;">​</a></h3><h3 id="_13、java中有几种类型的流" tabindex="-1">13、Java中有几种类型的流？ <a class="header-anchor" href="#_13、java中有几种类型的流" aria-label="Permalink to &quot;13、Java中有几种类型的流？&quot;">​</a></h3><h3 id="_14、try-catch-finally是必须要存在的吗" tabindex="-1">14、Try.catch.finally是必须要存在的吗？ <a class="header-anchor" href="#_14、try-catch-finally是必须要存在的吗" aria-label="Permalink to &quot;14、Try.catch.finally是必须要存在的吗？&quot;">​</a></h3><h3 id="_15、你熟悉哪些垃圾收集算法" tabindex="-1">15、你熟悉哪些垃圾收集算法？ <a class="header-anchor" href="#_15、你熟悉哪些垃圾收集算法" aria-label="Permalink to &quot;15、你熟悉哪些垃圾收集算法？&quot;">​</a></h3><h3 id="_16、为什么hashtable是线程安全的" tabindex="-1">16、为什么HashTable是线程安全的？ <a class="header-anchor" href="#_16、为什么hashtable是线程安全的" aria-label="Permalink to &quot;16、为什么HashTable是线程安全的？&quot;">​</a></h3><h3 id="_17、finalize-方法什么时候被调用-析构函数-finalization-的目的是什么" tabindex="-1">17、finalize()方法什么时候被调用？析构函数(finalization)的目的是什么？ <a class="header-anchor" href="#_17、finalize-方法什么时候被调用-析构函数-finalization-的目的是什么" aria-label="Permalink to &quot;17、finalize()方法什么时候被调用？析构函数(finalization)的目的是什么？&quot;">​</a></h3><h3 id="_18、用最有效率的方法计算2乘以8" tabindex="-1">18、用最有效率的方法计算2乘以8？ <a class="header-anchor" href="#_18、用最有效率的方法计算2乘以8" aria-label="Permalink to &quot;18、用最有效率的方法计算2乘以8？&quot;">​</a></h3><h3 id="_19、多线程应用场景" tabindex="-1">19、多线程应用场景 <a class="header-anchor" href="#_19、多线程应用场景" aria-label="Permalink to &quot;19、多线程应用场景&quot;">​</a></h3><h3 id="_20、list-和-set-的区别" tabindex="-1">20、List 和 Set 的区别 <a class="header-anchor" href="#_20、list-和-set-的区别" aria-label="Permalink to &quot;20、List 和 Set 的区别&quot;">​</a></h3><h3 id="_21、实现可见性的方法有哪些" tabindex="-1">21、实现可见性的方法有哪些？ <a class="header-anchor" href="#_21、实现可见性的方法有哪些" aria-label="Permalink to &quot;21、实现可见性的方法有哪些？&quot;">​</a></h3><h3 id="_22、堆" tabindex="-1">22、堆 <a class="header-anchor" href="#_22、堆" aria-label="Permalink to &quot;22、堆&quot;">​</a></h3><h3 id="_23、什么是jdk-什么是jre" tabindex="-1">23、什么是JDK?什么是JRE？ <a class="header-anchor" href="#_23、什么是jdk-什么是jre" aria-label="Permalink to &quot;23、什么是JDK?什么是JRE？&quot;">​</a></h3><h3 id="_24、在-java-中-对象什么时候可以被垃圾回收" tabindex="-1">24、在 Java 中，对象什么时候可以被垃圾回收？ <a class="header-anchor" href="#_24、在-java-中-对象什么时候可以被垃圾回收" aria-label="Permalink to &quot;24、在 Java 中，对象什么时候可以被垃圾回收？&quot;">​</a></h3><h3 id="_25、thread类的sleep-方法和对象的wait-方法都可以让线程暂停执行-它们有什么区别" tabindex="-1">25、Thread类的sleep()方法和对象的wait()方法都可以让线程暂停执行，它们有什么区别? <a class="header-anchor" href="#_25、thread类的sleep-方法和对象的wait-方法都可以让线程暂停执行-它们有什么区别" aria-label="Permalink to &quot;25、Thread类的sleep()方法和对象的wait()方法都可以让线程暂停执行，它们有什么区别?&quot;">​</a></h3><h3 id="_26、如何将字符串反转" tabindex="-1">26、如何将字符串反转？ <a class="header-anchor" href="#_26、如何将字符串反转" aria-label="Permalink to &quot;26、如何将字符串反转？&quot;">​</a></h3><h3 id="_27、如何通过反射获取和设置对象私有字段的值" tabindex="-1">27、如何通过反射获取和设置对象私有字段的值？ <a class="header-anchor" href="#_27、如何通过反射获取和设置对象私有字段的值" aria-label="Permalink to &quot;27、如何通过反射获取和设置对象私有字段的值？&quot;">​</a></h3><h3 id="_28、并发队列的常用方法" tabindex="-1">28、并发队列的常用方法 <a class="header-anchor" href="#_28、并发队列的常用方法" aria-label="Permalink to &quot;28、并发队列的常用方法&quot;">​</a></h3><h3 id="_29、set接口有什么特点" tabindex="-1">29、Set接口有什么特点 <a class="header-anchor" href="#_29、set接口有什么特点" aria-label="Permalink to &quot;29、Set接口有什么特点&quot;">​</a></h3><h3 id="_30、说说你知道的几种主要的jvm参数" tabindex="-1">30、说说你知道的几种主要的JVM参数 <a class="header-anchor" href="#_30、说说你知道的几种主要的jvm参数" aria-label="Permalink to &quot;30、说说你知道的几种主要的JVM参数&quot;">​</a></h3><h3 id="_31、-a-b-和-a-equals-b-有什么区别" tabindex="-1">31、“a==b”和”a.equals(b)”有什么区别？ <a class="header-anchor" href="#_31、-a-b-和-a-equals-b-有什么区别" aria-label="Permalink to &quot;31、“a==b”和”a.equals(b)”有什么区别？&quot;">​</a></h3><h3 id="_32、什么是并发队列" tabindex="-1">32、什么是并发队列： <a class="header-anchor" href="#_32、什么是并发队列" aria-label="Permalink to &quot;32、什么是并发队列：&quot;">​</a></h3><h3 id="_33、java-中怎么获取一份线程-dump-文件-你如何在-java-中获取线程堆栈" tabindex="-1">33、Java 中怎么获取一份线程 dump 文件？你如何在 Java 中获取线程堆栈？ <a class="header-anchor" href="#_33、java-中怎么获取一份线程-dump-文件-你如何在-java-中获取线程堆栈" aria-label="Permalink to &quot;33、Java 中怎么获取一份线程 dump 文件？你如何在 Java 中获取线程堆栈？&quot;">​</a></h3><h3 id="_34、linux环境下如何查找哪个线程使用cpu最长" tabindex="-1">34、Linux环境下如何查找哪个线程使用CPU最长 <a class="header-anchor" href="#_34、linux环境下如何查找哪个线程使用cpu最长" aria-label="Permalink to &quot;34、Linux环境下如何查找哪个线程使用CPU最长&quot;">​</a></h3><h3 id="_35、并发编程三要素" tabindex="-1">35、并发编程三要素？ <a class="header-anchor" href="#_35、并发编程三要素" aria-label="Permalink to &quot;35、并发编程三要素？&quot;">​</a></h3><h3 id="_36、四种线程池的创建" tabindex="-1">36、四种线程池的创建： <a class="header-anchor" href="#_36、四种线程池的创建" aria-label="Permalink to &quot;36、四种线程池的创建：&quot;">​</a></h3><h3 id="_37、说说cms垃圾收集器的工作原理" tabindex="-1">37、说说CMS垃圾收集器的工作原理 <a class="header-anchor" href="#_37、说说cms垃圾收集器的工作原理" aria-label="Permalink to &quot;37、说说CMS垃圾收集器的工作原理&quot;">​</a></h3><h3 id="_38、请解释如何配置tomcat来使用iis和ntlm" tabindex="-1">38、请解释如何配置Tomcat来使用IIS和NTLM ? <a class="header-anchor" href="#_38、请解释如何配置tomcat来使用iis和ntlm" aria-label="Permalink to &quot;38、请解释如何配置Tomcat来使用IIS和NTLM ?&quot;">​</a></h3><h3 id="_39、线程的sleep-方法和yield-方法有什么区别" tabindex="-1">39、线程的sleep()方法和yield()方法有什么区别？ <a class="header-anchor" href="#_39、线程的sleep-方法和yield-方法有什么区别" aria-label="Permalink to &quot;39、线程的sleep()方法和yield()方法有什么区别？&quot;">​</a></h3><h3 id="_40、java弱引用" tabindex="-1">40、JAVA弱引用 <a class="header-anchor" href="#_40、java弱引用" aria-label="Permalink to &quot;40、JAVA弱引用&quot;">​</a></h3><h3 id="_41、方法区" tabindex="-1">41、方法区 <a class="header-anchor" href="#_41、方法区" aria-label="Permalink to &quot;41、方法区&quot;">​</a></h3>`,93),o=[p];function t(r,c,i,f,d,u){return s(),n("div",null,o)}const y=a(l,[["render",t]]);export{E as __pageData,y as default};
