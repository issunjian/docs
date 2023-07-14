import{_ as s,o as n,c as a,V as l}from"./chunks/framework.c6d8cbec.js";const p="/docs/assets/volatile-f4de7989-672e-43d6-906b-feffe4fb0a9c.057f2f0f.jpg",h=JSON.parse('{"title":"Java并发编程volatile关键字解析","description":"Java并发编程volatile关键字解析","frontmatter":{"title":"Java并发编程volatile关键字解析","shortTitle":"volatile关键字解析","description":"Java并发编程volatile关键字解析","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,volatile"}]]},"headers":[],"relativePath":"backend/tobetter/thread/volatile.md","filePath":"backend/tobetter/thread/volatile.md"}'),e={name:"backend/tobetter/thread/volatile.md"},o=l(`<h1 id="java并发编程volatile关键字解析" tabindex="-1">Java并发编程volatile关键字解析 <a class="header-anchor" href="#java并发编程volatile关键字解析" aria-label="Permalink to &quot;Java并发编程volatile关键字解析&quot;">​</a></h1><p>“三妹啊，这节我们来学习 Java 并发编程中的 volatile 关键字，以及容易遇到的坑。”看着三妹好学的样子，我倍感欣慰。</p><p>“好呀，哥。”三妹愉快的答应了。</p><h2 id="volatile-变量的特性" tabindex="-1">volatile 变量的特性 <a class="header-anchor" href="#volatile-变量的特性" aria-label="Permalink to &quot;volatile 变量的特性&quot;">​</a></h2><p>volatile 可以保证可见性，但不保证原子性：</p><ul><li>当写一个 volatile 变量时，JMM 会把该线程本地内存中的变量强制刷新到主内存中去；</li><li>这个写操作会导致其他线程中的 volatile 变量缓存无效。</li></ul><h2 id="volatile-禁止指令重排规则" tabindex="-1">volatile 禁止指令重排规则 <a class="header-anchor" href="#volatile-禁止指令重排规则" aria-label="Permalink to &quot;volatile 禁止指令重排规则&quot;">​</a></h2><p>我们回顾一下，重排序需要遵守一定规则：</p><ul><li>重排序操作不会对存在数据依赖关系的操作进行重排序。比如：a=1;b=a; 这个指令序列，由于第二个操作依赖于第一个操作，所以在编译时和处理器运行时这两个操作不会被重排序。</li><li>重排序是为了优化性能，但是不管怎么重排序，单线程下程序的执行结果不能被改变。比如：a=1;b=2;c=a+b 这三个操作，第一步（a=1)和第二步(b=2)由于不存在数据依赖关系， 所以可能会发生重排序，但是 c=a+b 这个操作是不会被重排序的，因为需要保证最终的结果一定是 c=a+b=3。</li></ul><p>使用 volatile 关键字修饰共享变量可以禁止这种重排序。若用 volatile 修饰共享变量，在编译时，会在指令序列中插入内存屏障来禁止特定类型的处理器重排序，volatile 禁止指令重排序也有一些规则：</p><ul><li>当程序执行到 volatile 变量的读操作或者写操作时，在其前面的操作的更改肯定全部已经进行，且结果已经对后面的操作可见；在其后面的操作肯定还没有进行；</li><li>在进行指令优化时，不能将对 volatile 变量访问的语句放在其后面执行，也不能把 volatile 变量后面的语句放到其前面执行。</li></ul><p>“二哥，能不能通俗地讲讲啊？”</p><p>“也就是说，执行到 volatile 变量时，其前面的所有语句都执行完，后面所有语句都未执行。且前面语句的结果对 volatile 变量及其后面语句可见。”我瞅了了三妹一眼说。</p><h2 id="volatile-禁止指令重排分析" tabindex="-1">volatile 禁止指令重排分析 <a class="header-anchor" href="#volatile-禁止指令重排分析" aria-label="Permalink to &quot;volatile 禁止指令重排分析&quot;">​</a></h2><p>先看下面未使用 volatile 的代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">class ReorderExample {</span></span>
<span class="line"><span style="color:#f6f6f4;">  int a = 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">  boolean flag = false;</span></span>
<span class="line"><span style="color:#f6f6f4;">  public void writer() {</span></span>
<span class="line"><span style="color:#f6f6f4;">      a = 1;                   //1</span></span>
<span class="line"><span style="color:#f6f6f4;">      flag = true;             //2</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">  Public void reader() {</span></span>
<span class="line"><span style="color:#f6f6f4;">      if (flag) {                //3</span></span>
<span class="line"><span style="color:#f6f6f4;">          int i =  a * a;        //4</span></span>
<span class="line"><span style="color:#f6f6f4;">          System.out.println(i);</span></span>
<span class="line"><span style="color:#f6f6f4;">      }</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class ReorderExample {</span></span>
<span class="line"><span style="color:#24292e;">  int a = 0;</span></span>
<span class="line"><span style="color:#24292e;">  boolean flag = false;</span></span>
<span class="line"><span style="color:#24292e;">  public void writer() {</span></span>
<span class="line"><span style="color:#24292e;">      a = 1;                   //1</span></span>
<span class="line"><span style="color:#24292e;">      flag = true;             //2</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  Public void reader() {</span></span>
<span class="line"><span style="color:#24292e;">      if (flag) {                //3</span></span>
<span class="line"><span style="color:#24292e;">          int i =  a * a;        //4</span></span>
<span class="line"><span style="color:#24292e;">          System.out.println(i);</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>因为重排序影响，所以最终的输出可能是 0，具体分析请参考<a href="https://mp.weixin.qq.com/s/s983WflPH7jF0-_SpGRfBg" target="_blank" rel="noreferrer">上一篇</a>，如果引入 volatile，我们再看一下代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">class ReorderExample {</span></span>
<span class="line"><span style="color:#f6f6f4;">  int a = 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">  boolean volatile flag = false;</span></span>
<span class="line"><span style="color:#f6f6f4;">  public void writer() {</span></span>
<span class="line"><span style="color:#f6f6f4;">      a = 1;                   //1</span></span>
<span class="line"><span style="color:#f6f6f4;">      flag = true;             //2</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">  Public void reader() {</span></span>
<span class="line"><span style="color:#f6f6f4;">      if (flag) {                //3</span></span>
<span class="line"><span style="color:#f6f6f4;">          int i =  a * a;        //4</span></span>
<span class="line"><span style="color:#f6f6f4;">          System.out.println(i);</span></span>
<span class="line"><span style="color:#f6f6f4;">      }</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class ReorderExample {</span></span>
<span class="line"><span style="color:#24292e;">  int a = 0;</span></span>
<span class="line"><span style="color:#24292e;">  boolean volatile flag = false;</span></span>
<span class="line"><span style="color:#24292e;">  public void writer() {</span></span>
<span class="line"><span style="color:#24292e;">      a = 1;                   //1</span></span>
<span class="line"><span style="color:#24292e;">      flag = true;             //2</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  Public void reader() {</span></span>
<span class="line"><span style="color:#24292e;">      if (flag) {                //3</span></span>
<span class="line"><span style="color:#24292e;">          int i =  a * a;        //4</span></span>
<span class="line"><span style="color:#24292e;">          System.out.println(i);</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>这个时候，volatile 禁止指令重排序也有一些规则，这个过程建立的 happens before 关系可以分为两类：</p><ol><li>根据程序次序规则，1 happens before 2; 3 happens before 4。</li><li>根据 volatile 规则，2 happens before 3。</li><li>根据 happens before 的传递性规则，1 happens before 4。</li></ol><p>上述 happens before 关系的图形化表现形式如下：</p><img src="`+p+`"><p>在上图中，每一个箭头链接的两个节点，代表了一个 happens before 关系:</p><ul><li>黑色箭头表示程序顺序规则；</li><li>橙色箭头表示 volatile 规则；</li><li>蓝色箭头表示组合这些规则后提供的 happens before 保证。</li></ul><p>这里 A 线程写一个 volatile 变量后，B 线程读同一个 volatile 变量。A 线程在写 volatile 变量之前所有可见的共享变量，在 B 线程读同一个 volatile 变量后，将立即变得对 B 线程可见。</p><h2 id="volatile-不适用场景" tabindex="-1">volatile 不适用场景 <a class="header-anchor" href="#volatile-不适用场景" aria-label="Permalink to &quot;volatile 不适用场景&quot;">​</a></h2><h3 id="volatile-不适合复合操作" tabindex="-1">volatile 不适合复合操作 <a class="header-anchor" href="#volatile-不适合复合操作" aria-label="Permalink to &quot;volatile 不适合复合操作&quot;">​</a></h3><p>下面是变量自加的示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">public class volatileTest {</span></span>
<span class="line"><span style="color:#f6f6f4;">    public volatile int inc = 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">    public void increase() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        inc++;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        final volatileTest test = new volatileTest();</span></span>
<span class="line"><span style="color:#f6f6f4;">        for(int i=0;i&lt;10;i++){</span></span>
<span class="line"><span style="color:#f6f6f4;">            new Thread(){</span></span>
<span class="line"><span style="color:#f6f6f4;">                public void run() {</span></span>
<span class="line"><span style="color:#f6f6f4;">                    for(int j=0;j&lt;1000;j++)</span></span>
<span class="line"><span style="color:#f6f6f4;">                        test.increase();</span></span>
<span class="line"><span style="color:#f6f6f4;">                };</span></span>
<span class="line"><span style="color:#f6f6f4;">            }.start();</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">        while(Thread.activeCount()&gt;1)  //保证前面的线程都执行完</span></span>
<span class="line"><span style="color:#f6f6f4;">            Thread.yield();</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;inc output:&quot; + test.inc);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class volatileTest {</span></span>
<span class="line"><span style="color:#24292e;">    public volatile int inc = 0;</span></span>
<span class="line"><span style="color:#24292e;">    public void increase() {</span></span>
<span class="line"><span style="color:#24292e;">        inc++;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        final volatileTest test = new volatileTest();</span></span>
<span class="line"><span style="color:#24292e;">        for(int i=0;i&lt;10;i++){</span></span>
<span class="line"><span style="color:#24292e;">            new Thread(){</span></span>
<span class="line"><span style="color:#24292e;">                public void run() {</span></span>
<span class="line"><span style="color:#24292e;">                    for(int j=0;j&lt;1000;j++)</span></span>
<span class="line"><span style="color:#24292e;">                        test.increase();</span></span>
<span class="line"><span style="color:#24292e;">                };</span></span>
<span class="line"><span style="color:#24292e;">            }.start();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        while(Thread.activeCount()&gt;1)  //保证前面的线程都执行完</span></span>
<span class="line"><span style="color:#24292e;">            Thread.yield();</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;inc output:&quot; + test.inc);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>测试输出：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">inc output:8182</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">inc output:8182</span></span></code></pre></div><p>“为什么呀？二哥？”三妹疑惑地问。</p><p>“因为 inc++不是一个原子性操作，由读取、加、赋值 3 步组成，所以结果并不能达到 10000。”我耐心地回答。</p><p>“哦，你这样说我就理解了。”三妹点点头。</p><h3 id="解决方法" tabindex="-1">解决方法 <a class="header-anchor" href="#解决方法" aria-label="Permalink to &quot;解决方法&quot;">​</a></h3><p>采用 synchronized：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">public class volatileTest1 {</span></span>
<span class="line"><span style="color:#f6f6f4;">    public int inc = 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">    public synchronized void increase() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        inc++;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        final volatileTest1 test = new volatileTest1();</span></span>
<span class="line"><span style="color:#f6f6f4;">        for(int i=0;i&lt;10;i++){</span></span>
<span class="line"><span style="color:#f6f6f4;">            new Thread(){</span></span>
<span class="line"><span style="color:#f6f6f4;">                public void run() {</span></span>
<span class="line"><span style="color:#f6f6f4;">                    for(int j=0;j&lt;1000;j++)</span></span>
<span class="line"><span style="color:#f6f6f4;">                        test.increase();</span></span>
<span class="line"><span style="color:#f6f6f4;">                };</span></span>
<span class="line"><span style="color:#f6f6f4;">            }.start();</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">        while(Thread.activeCount()&gt;1)  //保证前面的线程都执行完</span></span>
<span class="line"><span style="color:#f6f6f4;">            Thread.yield();</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;add synchronized, inc output:&quot; + test.inc);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class volatileTest1 {</span></span>
<span class="line"><span style="color:#24292e;">    public int inc = 0;</span></span>
<span class="line"><span style="color:#24292e;">    public synchronized void increase() {</span></span>
<span class="line"><span style="color:#24292e;">        inc++;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        final volatileTest1 test = new volatileTest1();</span></span>
<span class="line"><span style="color:#24292e;">        for(int i=0;i&lt;10;i++){</span></span>
<span class="line"><span style="color:#24292e;">            new Thread(){</span></span>
<span class="line"><span style="color:#24292e;">                public void run() {</span></span>
<span class="line"><span style="color:#24292e;">                    for(int j=0;j&lt;1000;j++)</span></span>
<span class="line"><span style="color:#24292e;">                        test.increase();</span></span>
<span class="line"><span style="color:#24292e;">                };</span></span>
<span class="line"><span style="color:#24292e;">            }.start();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        while(Thread.activeCount()&gt;1)  //保证前面的线程都执行完</span></span>
<span class="line"><span style="color:#24292e;">            Thread.yield();</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;add synchronized, inc output:&quot; + test.inc);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>采用 Lock：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">public class volatileTest2 {</span></span>
<span class="line"><span style="color:#f6f6f4;">    public int inc = 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">    Lock lock = new ReentrantLock();</span></span>
<span class="line"><span style="color:#f6f6f4;">    public void increase() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        lock.lock();</span></span>
<span class="line"><span style="color:#f6f6f4;">        inc++;</span></span>
<span class="line"><span style="color:#f6f6f4;">        lock.unlock();</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        final volatileTest2 test = new volatileTest2();</span></span>
<span class="line"><span style="color:#f6f6f4;">        for(int i=0;i&lt;10;i++){</span></span>
<span class="line"><span style="color:#f6f6f4;">            new Thread(){</span></span>
<span class="line"><span style="color:#f6f6f4;">                public void run() {</span></span>
<span class="line"><span style="color:#f6f6f4;">                    for(int j=0;j&lt;1000;j++)</span></span>
<span class="line"><span style="color:#f6f6f4;">                        test.increase();</span></span>
<span class="line"><span style="color:#f6f6f4;">                };</span></span>
<span class="line"><span style="color:#f6f6f4;">            }.start();</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">        while(Thread.activeCount()&gt;1)  //保证前面的线程都执行完</span></span>
<span class="line"><span style="color:#f6f6f4;">            Thread.yield();</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;add lock, inc output:&quot; + test.inc);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class volatileTest2 {</span></span>
<span class="line"><span style="color:#24292e;">    public int inc = 0;</span></span>
<span class="line"><span style="color:#24292e;">    Lock lock = new ReentrantLock();</span></span>
<span class="line"><span style="color:#24292e;">    public void increase() {</span></span>
<span class="line"><span style="color:#24292e;">        lock.lock();</span></span>
<span class="line"><span style="color:#24292e;">        inc++;</span></span>
<span class="line"><span style="color:#24292e;">        lock.unlock();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        final volatileTest2 test = new volatileTest2();</span></span>
<span class="line"><span style="color:#24292e;">        for(int i=0;i&lt;10;i++){</span></span>
<span class="line"><span style="color:#24292e;">            new Thread(){</span></span>
<span class="line"><span style="color:#24292e;">                public void run() {</span></span>
<span class="line"><span style="color:#24292e;">                    for(int j=0;j&lt;1000;j++)</span></span>
<span class="line"><span style="color:#24292e;">                        test.increase();</span></span>
<span class="line"><span style="color:#24292e;">                };</span></span>
<span class="line"><span style="color:#24292e;">            }.start();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        while(Thread.activeCount()&gt;1)  //保证前面的线程都执行完</span></span>
<span class="line"><span style="color:#24292e;">            Thread.yield();</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;add lock, inc output:&quot; + test.inc);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>采用 AtomicInteger：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">public class volatileTest3 {</span></span>
<span class="line"><span style="color:#f6f6f4;">    public AtomicInteger inc = new AtomicInteger();</span></span>
<span class="line"><span style="color:#f6f6f4;">    public void increase() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        inc.getAndIncrement();</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        final volatileTest3 test = new volatileTest3();</span></span>
<span class="line"><span style="color:#f6f6f4;">        for(int i=0;i&lt;10;i++){</span></span>
<span class="line"><span style="color:#f6f6f4;">            new Thread(){</span></span>
<span class="line"><span style="color:#f6f6f4;">                public void run() {</span></span>
<span class="line"><span style="color:#f6f6f4;">                    for(int j=0;j&lt;100;j++)</span></span>
<span class="line"><span style="color:#f6f6f4;">                        test.increase();</span></span>
<span class="line"><span style="color:#f6f6f4;">                };</span></span>
<span class="line"><span style="color:#f6f6f4;">            }.start();</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">        while(Thread.activeCount()&gt;1)  //保证前面的线程都执行完</span></span>
<span class="line"><span style="color:#f6f6f4;">            Thread.yield();</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;add AtomicInteger, inc output:&quot; + test.inc);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class volatileTest3 {</span></span>
<span class="line"><span style="color:#24292e;">    public AtomicInteger inc = new AtomicInteger();</span></span>
<span class="line"><span style="color:#24292e;">    public void increase() {</span></span>
<span class="line"><span style="color:#24292e;">        inc.getAndIncrement();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        final volatileTest3 test = new volatileTest3();</span></span>
<span class="line"><span style="color:#24292e;">        for(int i=0;i&lt;10;i++){</span></span>
<span class="line"><span style="color:#24292e;">            new Thread(){</span></span>
<span class="line"><span style="color:#24292e;">                public void run() {</span></span>
<span class="line"><span style="color:#24292e;">                    for(int j=0;j&lt;100;j++)</span></span>
<span class="line"><span style="color:#24292e;">                        test.increase();</span></span>
<span class="line"><span style="color:#24292e;">                };</span></span>
<span class="line"><span style="color:#24292e;">            }.start();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        while(Thread.activeCount()&gt;1)  //保证前面的线程都执行完</span></span>
<span class="line"><span style="color:#24292e;">            Thread.yield();</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;add AtomicInteger, inc output:&quot; + test.inc);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>三者输出都是 1000，如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">add synchronized, inc output:1000</span></span>
<span class="line"><span style="color:#f6f6f4;">add lock, inc output:1000</span></span>
<span class="line"><span style="color:#f6f6f4;">add AtomicInteger, inc output:1000</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">add synchronized, inc output:1000</span></span>
<span class="line"><span style="color:#24292e;">add lock, inc output:1000</span></span>
<span class="line"><span style="color:#24292e;">add AtomicInteger, inc output:1000</span></span></code></pre></div><h2 id="单例模式的双重锁要加volatile" tabindex="-1">单例模式的双重锁要加volatile <a class="header-anchor" href="#单例模式的双重锁要加volatile" aria-label="Permalink to &quot;单例模式的双重锁要加volatile&quot;">​</a></h2><p>先看一下单例代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">public class penguin {</span></span>
<span class="line"><span style="color:#f6f6f4;">    private static volatile penguin m_penguin = null;</span></span>
<span class="line"><span style="color:#f6f6f4;">    // 避免通过new初始化对象</span></span>
<span class="line"><span style="color:#f6f6f4;">    private void penguin() {}</span></span>
<span class="line"><span style="color:#f6f6f4;">    public void beating() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;打豆豆&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">    };</span></span>
<span class="line"><span style="color:#f6f6f4;">    public static penguin getInstance() {      //1</span></span>
<span class="line"><span style="color:#f6f6f4;">        if (null == m_penguin) {               //2</span></span>
<span class="line"><span style="color:#f6f6f4;">            synchronized(penguin.class) {      //3</span></span>
<span class="line"><span style="color:#f6f6f4;">                if (null == m_penguin) {       //4</span></span>
<span class="line"><span style="color:#f6f6f4;">                    m_penguin = new penguin(); //5</span></span>
<span class="line"><span style="color:#f6f6f4;">                }</span></span>
<span class="line"><span style="color:#f6f6f4;">            }</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">        return m_penguin;                      //6</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class penguin {</span></span>
<span class="line"><span style="color:#24292e;">    private static volatile penguin m_penguin = null;</span></span>
<span class="line"><span style="color:#24292e;">    // 避免通过new初始化对象</span></span>
<span class="line"><span style="color:#24292e;">    private void penguin() {}</span></span>
<span class="line"><span style="color:#24292e;">    public void beating() {</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;打豆豆&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    };</span></span>
<span class="line"><span style="color:#24292e;">    public static penguin getInstance() {      //1</span></span>
<span class="line"><span style="color:#24292e;">        if (null == m_penguin) {               //2</span></span>
<span class="line"><span style="color:#24292e;">            synchronized(penguin.class) {      //3</span></span>
<span class="line"><span style="color:#24292e;">                if (null == m_penguin) {       //4</span></span>
<span class="line"><span style="color:#24292e;">                    m_penguin = new penguin(); //5</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        return m_penguin;                      //6</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>在并发情况下，如果没有 volatile 关键字，在第 5 行会出现问题。instance = new TestInstance();可以分解为 3 行伪代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">a. memory = allocate() //分配内存</span></span>
<span class="line"><span style="color:#f6f6f4;">b. ctorInstanc(memory) //初始化对象</span></span>
<span class="line"><span style="color:#f6f6f4;">c. instance = memory   //设置instance指向刚分配的地址</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">a. memory = allocate() //分配内存</span></span>
<span class="line"><span style="color:#24292e;">b. ctorInstanc(memory) //初始化对象</span></span>
<span class="line"><span style="color:#24292e;">c. instance = memory   //设置instance指向刚分配的地址</span></span></code></pre></div><p>上面的代码在编译运行时，可能会出现重排序从 a-b-c 排序为 a-c-b。在多线程的情况下会出现以下问题。</p><p>当线程 A 在执行第 5 行代码时，B 线程进来执行到第 2 行代码。假设此时 A 执行的过程中发生了指令重排序，即先执行了 a 和 c，没有执行 b。那么由于 A 线程执行了 c 导致 instance 指向了一段地址，所以 B 线程判断 instance 不为 null，会直接跳到第 6 行并返回一个未初始化的对象。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>“好了，三妹，我们来总结一下。”我舒了一口气说。</p><p>volatile 可以保证线程可见性且提供了一定的有序性，但是无法保证原子性。在 JVM 底层 volatile 是采用“内存屏障”来实现的。</p><p>观察加入 volatile 关键字和没有加入 volatile 关键字时所生成的汇编代码发现，加入 volatile 关键字时，会多出一个 lock 前缀指令，lock 前缀指令实际上相当于一个内存屏障（也称内存栅栏），内存屏障会提供 3 个功能：</p><ul><li>它确保指令重排序时不会把其后面的指令排到内存屏障之前的位置，也不会把前面的指令排到内存屏障的后面；即在执行到内存屏障这句指令时，在它前面的操作已经全部完成；</li><li>它会强制将对缓存的修改操作立即写入主存；</li><li>如果是写操作，它会导致其他 CPU 中对应的缓存行无效。</li></ul><p>最后，我们学习了 volatile 不适用的场景，以及解决的方法，并解释了单例模式为何需要使用 volatile。</p><hr>`,57),c=[o];function t(i,r,f,y,d,u){return n(),a("div",null,c)}const g=s(e,[["render",t]]);export{h as __pageData,g as default};
