import{_ as s,o as a,c as n,V as e}from"./chunks/framework.c6d8cbec.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/java/java-18.md","filePath":"interview/backend/java/java-18.md"}'),l={name:"interview/backend/java/java-18.md"},p=e(`<h3 id="_1、讲讲什么情况下会出现内存溢出-内存泄漏" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#1%E8%AE%B2%E8%AE%B2%E4%BB%80%E4%B9%88%E6%83%85%E5%86%B5%E4%B8%8B%E4%BC%9A%E5%87%BA%E7%8E%B0%E5%86%85%E5%AD%98%E6%BA%A2%E5%87%BA%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F" target="_blank" rel="noreferrer">1、讲讲什么情况下会出现内存溢出，内存泄漏？</a> <a class="header-anchor" href="#_1、讲讲什么情况下会出现内存溢出-内存泄漏" aria-label="Permalink to &quot;[1、讲讲什么情况下会出现内存溢出，内存泄漏？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新2021年面试题附答案解析，大汇总.md#1讲讲什么情况下会出现内存溢出内存泄漏)&quot;">​</a></h3><p>内存泄漏的原因很简单：</p><p><strong>1、</strong> 对象是可达的(一直被引用)</p><p><strong>2、</strong> 但是对象不会被使用</p><p>常见的内存泄漏例子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        Set&lt;Object&gt; set = new HashSet&lt;&gt;();</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        for (int i = 0; i &lt; 10; i++) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            Object object = new Object();</span></span>
<span class="line"><span style="color:#f6f6f4;">            set.add(object);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">            // 设置为空，该对象不再使用</span></span>
<span class="line"><span style="color:#f6f6f4;">            object = null;</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        // 但是set集合中还维护object的引用，gc不会回收object对象</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(set);</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(set.size());</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        Set&lt;Object&gt; set = new HashSet&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        for (int i = 0; i &lt; 10; i++) {</span></span>
<span class="line"><span style="color:#24292e;">            Object object = new Object();</span></span>
<span class="line"><span style="color:#24292e;">            set.add(object);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            // 设置为空，该对象不再使用</span></span>
<span class="line"><span style="color:#24292e;">            object = null;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        // 但是set集合中还维护object的引用，gc不会回收object对象</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(set);</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(set.size());</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>输出结果</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">[java.lang.Object@74a14482, </span></span>
<span class="line"><span style="color:#f6f6f4;">java.lang.Object@677327b6, </span></span>
<span class="line"><span style="color:#f6f6f4;">java.lang.Object@6d6f6e28, </span></span>
<span class="line"><span style="color:#f6f6f4;">java.lang.Object@4554617c, </span></span>
<span class="line"><span style="color:#f6f6f4;">java.lang.Object@45ee12a7, </span></span>
<span class="line"><span style="color:#f6f6f4;">java.lang.Object@1b6d3586, </span></span>
<span class="line"><span style="color:#f6f6f4;">java.lang.Object@7f31245a,</span></span>
<span class="line"><span style="color:#f6f6f4;">java.lang.Object@135fbaa4,</span></span>
<span class="line"><span style="color:#f6f6f4;">java.lang.Object@1540e19d, </span></span>
<span class="line"><span style="color:#f6f6f4;">java.lang.Object@14ae5a5]</span></span>
<span class="line"><span style="color:#f6f6f4;">10</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">Process finished with exit code 0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[java.lang.Object@74a14482, </span></span>
<span class="line"><span style="color:#24292e;">java.lang.Object@677327b6, </span></span>
<span class="line"><span style="color:#24292e;">java.lang.Object@6d6f6e28, </span></span>
<span class="line"><span style="color:#24292e;">java.lang.Object@4554617c, </span></span>
<span class="line"><span style="color:#24292e;">java.lang.Object@45ee12a7, </span></span>
<span class="line"><span style="color:#24292e;">java.lang.Object@1b6d3586, </span></span>
<span class="line"><span style="color:#24292e;">java.lang.Object@7f31245a,</span></span>
<span class="line"><span style="color:#24292e;">java.lang.Object@135fbaa4,</span></span>
<span class="line"><span style="color:#24292e;">java.lang.Object@1540e19d, </span></span>
<span class="line"><span style="color:#24292e;">java.lang.Object@14ae5a5]</span></span>
<span class="line"><span style="color:#24292e;">10</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Process finished with exit code 0</span></span></code></pre></div><p>解决这个内存泄漏问题也很简单，将set设置为null，那就可以避免上述内存泄漏问题了。其他内存泄漏得一步一步分析了。</p><p><strong>内存溢出的原因：</strong></p><p><strong>1、</strong> 内存泄露导致堆栈内存不断增大，从而引发内存溢出。</p><p><strong>2、</strong> 大量的jar，class文件加载，装载类的空间不够，溢出</p><p><strong>3、</strong> 操作大量的对象导致堆内存空间已经用满了，溢出</p><p><strong>4、</strong> nio直接操作内存，内存过大导致溢出</p><p><strong>解决：</strong></p><p><strong>1、</strong> 查看程序是否存在内存泄漏的问题</p><p><strong>2、</strong> 设置参数加大空间</p><p><strong>3、</strong> 代码中是否存在死循环或循环产生过多重复的对象实体、</p><p><strong>4、</strong> 查看是否使用了nio直接操作内存。</p><h3 id="_2、乐观锁和悲观锁的理解及如何实现-有哪些实现方式" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#2%E4%B9%90%E8%A7%82%E9%94%81%E5%92%8C%E6%82%B2%E8%A7%82%E9%94%81%E7%9A%84%E7%90%86%E8%A7%A3%E5%8F%8A%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E6%9C%89%E5%93%AA%E4%BA%9B%E5%AE%9E%E7%8E%B0%E6%96%B9%E5%BC%8F" target="_blank" rel="noreferrer">2、乐观锁和悲观锁的理解及如何实现，有哪些实现方式？</a> <a class="header-anchor" href="#_2、乐观锁和悲观锁的理解及如何实现-有哪些实现方式" aria-label="Permalink to &quot;[2、乐观锁和悲观锁的理解及如何实现，有哪些实现方式？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新2021年面试题附答案解析，大汇总.md#2乐观锁和悲观锁的理解及如何实现有哪些实现方式)&quot;">​</a></h3><p><strong>悲观锁：</strong></p><p>总是假设最坏的情况，每次去拿数据的时候都认为别人会修改，所以每次在拿数据的时候都会上锁，这样别人想拿这个数据就会阻塞直到它拿到锁。传统的关系型数据库里边就用到了很多这种锁机制，比如行锁，表锁等，读锁，写锁等，都是在做操作之前先上锁。再比如 Java 里面的同步原语 synchronized 关键字的实现也是悲观锁。</p><p><strong>乐观锁：</strong></p><p>顾名思义，就是很乐观，每次去拿数据的时候都认为别人不会修改，所以不会上锁，但是在更新的时候会判断一下在此期间别人有没有去更新这个数据，可以使用版本号等机制。乐观锁适用于多读的应用类型，这样可以提高吞吐量，像数据库提供的类似于 write_condition 机制，其实都是提供的乐观锁。在 Java中 java.util.concurrent.atomic 包下面的原子变量类就是使用了乐观锁的一种实现方式 CAS 实现的。</p><h3 id="_3、线程与进程的区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#3%E7%BA%BF%E7%A8%8B%E4%B8%8E%E8%BF%9B%E7%A8%8B%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">3、线程与进程的区别？</a> <a class="header-anchor" href="#_3、线程与进程的区别" aria-label="Permalink to &quot;[3、线程与进程的区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新2021年面试题附答案解析，大汇总.md#3线程与进程的区别)&quot;">​</a></h3><p>进程是操作系统分配资源的最小单元，线程是操作系统调度的最小单元。</p><p>一个程序至少有一个进程,一个进程至少有一个线程。</p><h3 id="_4、session的save-、update-、merge-、lock-、saveorupdate-和persist-方法分别是做什么的-有什么区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#4session%E7%9A%84saveupdatemergelocksaveorupdate%E5%92%8Cpersist%E6%96%B9%E6%B3%95%E5%88%86%E5%88%AB%E6%98%AF%E5%81%9A%E4%BB%80%E4%B9%88%E7%9A%84%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">4、Session的save()、update()、merge()、lock()、saveOrUpdate()和persist()方法分别是做什么的？有什么区别？</a> <a class="header-anchor" href="#_4、session的save-、update-、merge-、lock-、saveorupdate-和persist-方法分别是做什么的-有什么区别" aria-label="Permalink to &quot;[4、Session的save()、update()、merge()、lock()、saveOrUpdate()和persist()方法分别是做什么的？有什么区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新2021年面试题附答案解析，大汇总.md#4session的saveupdatemergelocksaveorupdate和persist方法分别是做什么的有什么区别)&quot;">​</a></h3><p>瞬时态的实例可以通过调用save()、persist()或者saveOrUpdate()方法变成持久态；游离态的实例可以通过调用 update()、saveOrUpdate()、lock()或者replicate()变成持久态。save()和persist()将会引发SQL的INSERT语句，而update()或merge()会引发UPDATE语句。save()和update()的区别在于一个是将瞬时态对象变成持久态，一个是将游离态对象变为持久态。merge()方法可以完成save()和update()方法的功能，它的意图是将新的状态合并到已有的持久化对象上或创建新的持久化对象。</p><p>对于persist()方法，</p><p>persist()方法把一个瞬时态的实例持久化，但是并不保证标识符被立刻填入到持久化实例中，标识符的填入可能被推迟到flush的时间；</p><p>persist()方法保证当它在一个事务外部被调用的时候并不触发一个INSERT语句，当需要封装一个长会话流程的时候，persist()方法是很有必要的；</p><p>save()方法不保证第②条，它要返回标识符，所以它会立即执行INSERT语句，不管是在事务内部还是外部。至于lock()方法和update()方法的区别，update()方法是把一个已经更改过的脱管状态的对象变成持久状态；lock()方法是把一个没有更改过的脱管状态的对象变成持久状态。</p><h3 id="_5、用代码演示三种代理" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#5%E7%94%A8%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA%E4%B8%89%E7%A7%8D%E4%BB%A3%E7%90%86" target="_blank" rel="noreferrer">5、用代码演示三种代理</a> <a class="header-anchor" href="#_5、用代码演示三种代理" aria-label="Permalink to &quot;[5、用代码演示三种代理](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新2021年面试题附答案解析，大汇总.md#5用代码演示三种代理)&quot;">​</a></h3><ul><li>静态代理</li></ul><p><strong>什么是静态代理</strong></p><p>由程序员创建或工具生成代理类的源码，再编译代理类。所谓静态也就是在程序运行前就已经存在代理类的字节码文件，代理类和委托类的关系在运行前就确定了。</p><ul><li>代码演示</li></ul><p>我有一段这样的代码：（如何能在不修改UserDao接口类的情况下开事务和关闭事务呢）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">package com.lijie;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">//接口类</span></span>
<span class="line"><span style="color:#f6f6f4;">public class UserDao{</span></span>
<span class="line"><span style="color:#f6f6f4;">    public void save() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;保存数据方法&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package com.lijie;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//接口类</span></span>
<span class="line"><span style="color:#24292e;">public class UserDao{</span></span>
<span class="line"><span style="color:#24292e;">    public void save() {</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;保存数据方法&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">package com.lijie;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">//运行测试类</span></span>
<span class="line"><span style="color:#f6f6f4;">public  class Test{</span></span>
<span class="line"><span style="color:#f6f6f4;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        UserDao userDao = new UserDao();</span></span>
<span class="line"><span style="color:#f6f6f4;">        userDao.save();</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package com.lijie;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//运行测试类</span></span>
<span class="line"><span style="color:#24292e;">public  class Test{</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        UserDao userDao = new UserDao();</span></span>
<span class="line"><span style="color:#24292e;">        userDao.save();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>修改代码，添加代理类</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">package com.lijie;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">//代理类</span></span>
<span class="line"><span style="color:#f6f6f4;">public class UserDaoProxy extends UserDao {</span></span>
<span class="line"><span style="color:#f6f6f4;">    private UserDao userDao;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public UserDaoProxy(UserDao userDao) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        this.userDao = userDao;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public void save() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;开启事物...&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        userDao.save();</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;关闭事物...&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package com.lijie;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//代理类</span></span>
<span class="line"><span style="color:#24292e;">public class UserDaoProxy extends UserDao {</span></span>
<span class="line"><span style="color:#24292e;">    private UserDao userDao;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public UserDaoProxy(UserDao userDao) {</span></span>
<span class="line"><span style="color:#24292e;">        this.userDao = userDao;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public void save() {</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;开启事物...&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        userDao.save();</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;关闭事物...&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">//添加完静态代理的测试类</span></span>
<span class="line"><span style="color:#f6f6f4;">public class Test{</span></span>
<span class="line"><span style="color:#f6f6f4;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        UserDao userDao = new UserDao();</span></span>
<span class="line"><span style="color:#f6f6f4;">        UserDaoProxy userDaoProxy = new UserDaoProxy(userDao);</span></span>
<span class="line"><span style="color:#f6f6f4;">        userDaoProxy.save();</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//添加完静态代理的测试类</span></span>
<span class="line"><span style="color:#24292e;">public class Test{</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        UserDao userDao = new UserDao();</span></span>
<span class="line"><span style="color:#24292e;">        UserDaoProxy userDaoProxy = new UserDaoProxy(userDao);</span></span>
<span class="line"><span style="color:#24292e;">        userDaoProxy.save();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>缺点：</strong></p><p>每个需要代理的对象都需要自己重复编写代理，很不舒服，</p><p><strong>优点：</strong></p><p>但是可以面相实际对象或者是接口的方式实现代理</p><ul><li>动态代理</li></ul><p><strong>什么是动态代理</strong></p><p>动态代理也叫做，JDK代理、接口代理。</p><p>动态代理的对象，是利用JDK的API，动态的在内存中构建代理对象（是根据被代理的接口来动态生成代理类的class文件，并加载运行的过程），这就叫动态代理</p><ul><li>代码演示</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">package com.lijie;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">//接口</span></span>
<span class="line"><span style="color:#f6f6f4;">public interface UserDao {</span></span>
<span class="line"><span style="color:#f6f6f4;">    void save();</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package com.lijie;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//接口</span></span>
<span class="line"><span style="color:#24292e;">public interface UserDao {</span></span>
<span class="line"><span style="color:#24292e;">    void save();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">package com.lijie;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">//接口实现类</span></span>
<span class="line"><span style="color:#f6f6f4;">public class UserDaoImpl implements UserDao {</span></span>
<span class="line"><span style="color:#f6f6f4;">    public void save() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;保存数据方法&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package com.lijie;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//接口实现类</span></span>
<span class="line"><span style="color:#24292e;">public class UserDaoImpl implements UserDao {</span></span>
<span class="line"><span style="color:#24292e;">    public void save() {</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;保存数据方法&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>下面是代理类，可重复使用，不像静态代理那样要自己重复编写代理</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">package com.lijie;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">import java.lang.reflect.InvocationHandler;</span></span>
<span class="line"><span style="color:#f6f6f4;">import java.lang.reflect.Method;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">// 每次生成动态代理类对象时,实现了InvocationHandler接口的调用处理器对象</span></span>
<span class="line"><span style="color:#f6f6f4;">public class InvocationHandlerImpl implements InvocationHandler {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    // 这其实业务实现类对象，用来调用具体的业务方法</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Object target;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    // 通过构造函数传入目标对象</span></span>
<span class="line"><span style="color:#f6f6f4;">    public InvocationHandlerImpl(Object target) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        this.target = target;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    //动态代理实际运行的代理方法</span></span>
<span class="line"><span style="color:#f6f6f4;">    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;调用开始处理&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        //下面invoke()方法是以反射的方式来创建对象，第一个参数是要创建的对象，第二个是构成方法的参数，由第二个参数来决定创建对象使用哪个构造方法</span></span>
<span class="line"><span style="color:#f6f6f4;">        Object result = method.invoke(target, args);</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;调用结束处理&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        return result;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package com.lijie;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">import java.lang.reflect.InvocationHandler;</span></span>
<span class="line"><span style="color:#24292e;">import java.lang.reflect.Method;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 每次生成动态代理类对象时,实现了InvocationHandler接口的调用处理器对象</span></span>
<span class="line"><span style="color:#24292e;">public class InvocationHandlerImpl implements InvocationHandler {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 这其实业务实现类对象，用来调用具体的业务方法</span></span>
<span class="line"><span style="color:#24292e;">    private Object target;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 通过构造函数传入目标对象</span></span>
<span class="line"><span style="color:#24292e;">    public InvocationHandlerImpl(Object target) {</span></span>
<span class="line"><span style="color:#24292e;">        this.target = target;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    //动态代理实际运行的代理方法</span></span>
<span class="line"><span style="color:#24292e;">    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;调用开始处理&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        //下面invoke()方法是以反射的方式来创建对象，第一个参数是要创建的对象，第二个是构成方法的参数，由第二个参数来决定创建对象使用哪个构造方法</span></span>
<span class="line"><span style="color:#24292e;">        Object result = method.invoke(target, args);</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;调用结束处理&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        return result;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>利用动态代理使用代理方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">package com.lijie;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">import java.lang.reflect.Proxy;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">public class Test {</span></span>
<span class="line"><span style="color:#f6f6f4;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        // 被代理对象</span></span>
<span class="line"><span style="color:#f6f6f4;">        UserDao userDaoImpl = new UserDaoImpl();</span></span>
<span class="line"><span style="color:#f6f6f4;">        InvocationHandlerImpl invocationHandlerImpl = new InvocationHandlerImpl(userDaoImpl);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        //类加载器</span></span>
<span class="line"><span style="color:#f6f6f4;">        ClassLoader loader = userDaoImpl.getClass().getClassLoader();</span></span>
<span class="line"><span style="color:#f6f6f4;">        Class&lt;?&gt;[] interfaces = userDaoImpl.getClass().getInterfaces();</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        // 主要装载器、一组接口及调用处理动态代理实例</span></span>
<span class="line"><span style="color:#f6f6f4;">        UserDao newProxyInstance = (UserDao) Proxy.newProxyInstance(loader, interfaces, invocationHandlerImpl);</span></span>
<span class="line"><span style="color:#f6f6f4;">        newProxyInstance.save();</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package com.lijie;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">import java.lang.reflect.Proxy;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public class Test {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        // 被代理对象</span></span>
<span class="line"><span style="color:#24292e;">        UserDao userDaoImpl = new UserDaoImpl();</span></span>
<span class="line"><span style="color:#24292e;">        InvocationHandlerImpl invocationHandlerImpl = new InvocationHandlerImpl(userDaoImpl);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        //类加载器</span></span>
<span class="line"><span style="color:#24292e;">        ClassLoader loader = userDaoImpl.getClass().getClassLoader();</span></span>
<span class="line"><span style="color:#24292e;">        Class&lt;?&gt;[] interfaces = userDaoImpl.getClass().getInterfaces();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        // 主要装载器、一组接口及调用处理动态代理实例</span></span>
<span class="line"><span style="color:#24292e;">        UserDao newProxyInstance = (UserDao) Proxy.newProxyInstance(loader, interfaces, invocationHandlerImpl);</span></span>
<span class="line"><span style="color:#24292e;">        newProxyInstance.save();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>缺点：</strong></p><p>必须是面向接口，目标业务类必须实现接口</p><p><strong>优点：</strong></p><p>不用关心代理类，只需要在运行阶段才指定代理哪一个对象</p><ul><li>CGLIB动态代理</li></ul><p><strong>CGLIB动态代理原理：</strong></p><p>利用asm开源包，对代理对象类的class文件加载进来，通过修改其字节码生成子类来处理。</p><p><strong>什么是CGLIB动态代理</strong></p><p>CGLIB动态代理和jdk代理一样，使用反射完成代理，不同的是他可以直接代理类（jdk动态代理不行，他必须目标业务类必须实现接口），CGLIB动态代理底层使用字节码技术，CGLIB动态代理不能对 final类进行继承。（CGLIB动态代理需要导入jar包）</p><ul><li>代码演示</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">package com.lijie;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">//接口</span></span>
<span class="line"><span style="color:#f6f6f4;">public interface UserDao {</span></span>
<span class="line"><span style="color:#f6f6f4;">    void save();</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package com.lijie;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//接口</span></span>
<span class="line"><span style="color:#24292e;">public interface UserDao {</span></span>
<span class="line"><span style="color:#24292e;">    void save();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">package com.lijie;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">//接口实现类</span></span>
<span class="line"><span style="color:#f6f6f4;">public class UserDaoImpl implements UserDao {</span></span>
<span class="line"><span style="color:#f6f6f4;">    public void save() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;保存数据方法&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package com.lijie;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//接口实现类</span></span>
<span class="line"><span style="color:#24292e;">public class UserDaoImpl implements UserDao {</span></span>
<span class="line"><span style="color:#24292e;">    public void save() {</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;保存数据方法&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">package com.lijie;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">import org.springframework.cglib.proxy.Enhancer;</span></span>
<span class="line"><span style="color:#f6f6f4;">import org.springframework.cglib.proxy.MethodInterceptor;</span></span>
<span class="line"><span style="color:#f6f6f4;">import org.springframework.cglib.proxy.MethodProxy;</span></span>
<span class="line"><span style="color:#f6f6f4;">import java.lang.reflect.Method;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">//代理主要类</span></span>
<span class="line"><span style="color:#f6f6f4;">public class CglibProxy implements MethodInterceptor {</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Object targetObject;</span></span>
<span class="line"><span style="color:#f6f6f4;">    // 这里的目标类型为Object，则可以接受任意一种参数作为被代理类，实现了动态代理</span></span>
<span class="line"><span style="color:#f6f6f4;">    public Object getInstance(Object target) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        // 设置需要创建子类的类</span></span>
<span class="line"><span style="color:#f6f6f4;">        this.targetObject = target;</span></span>
<span class="line"><span style="color:#f6f6f4;">        Enhancer enhancer = new Enhancer();</span></span>
<span class="line"><span style="color:#f6f6f4;">        enhancer.setSuperclass(target.getClass());</span></span>
<span class="line"><span style="color:#f6f6f4;">        enhancer.setCallback(this);</span></span>
<span class="line"><span style="color:#f6f6f4;">        return enhancer.create();</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    //代理实际方法</span></span>
<span class="line"><span style="color:#f6f6f4;">    public Object intercept(Object obj, Method method, Object[] args, MethodProxy proxy) throws Throwable {</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;开启事物&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        Object result = proxy.invoke(targetObject, args);</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;关闭事物&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        // 返回代理对象</span></span>
<span class="line"><span style="color:#f6f6f4;">        return result;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package com.lijie;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">import org.springframework.cglib.proxy.Enhancer;</span></span>
<span class="line"><span style="color:#24292e;">import org.springframework.cglib.proxy.MethodInterceptor;</span></span>
<span class="line"><span style="color:#24292e;">import org.springframework.cglib.proxy.MethodProxy;</span></span>
<span class="line"><span style="color:#24292e;">import java.lang.reflect.Method;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//代理主要类</span></span>
<span class="line"><span style="color:#24292e;">public class CglibProxy implements MethodInterceptor {</span></span>
<span class="line"><span style="color:#24292e;">    private Object targetObject;</span></span>
<span class="line"><span style="color:#24292e;">    // 这里的目标类型为Object，则可以接受任意一种参数作为被代理类，实现了动态代理</span></span>
<span class="line"><span style="color:#24292e;">    public Object getInstance(Object target) {</span></span>
<span class="line"><span style="color:#24292e;">        // 设置需要创建子类的类</span></span>
<span class="line"><span style="color:#24292e;">        this.targetObject = target;</span></span>
<span class="line"><span style="color:#24292e;">        Enhancer enhancer = new Enhancer();</span></span>
<span class="line"><span style="color:#24292e;">        enhancer.setSuperclass(target.getClass());</span></span>
<span class="line"><span style="color:#24292e;">        enhancer.setCallback(this);</span></span>
<span class="line"><span style="color:#24292e;">        return enhancer.create();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    //代理实际方法</span></span>
<span class="line"><span style="color:#24292e;">    public Object intercept(Object obj, Method method, Object[] args, MethodProxy proxy) throws Throwable {</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;开启事物&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        Object result = proxy.invoke(targetObject, args);</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;关闭事物&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        // 返回代理对象</span></span>
<span class="line"><span style="color:#24292e;">        return result;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">package com.lijie;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">//测试CGLIB动态代理</span></span>
<span class="line"><span style="color:#f6f6f4;">public class Test {</span></span>
<span class="line"><span style="color:#f6f6f4;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        CglibProxy cglibProxy = new CglibProxy();</span></span>
<span class="line"><span style="color:#f6f6f4;">        UserDao userDao = (UserDao) cglibProxy.getInstance(new UserDaoImpl());</span></span>
<span class="line"><span style="color:#f6f6f4;">        userDao.save();</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package com.lijie;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//测试CGLIB动态代理</span></span>
<span class="line"><span style="color:#24292e;">public class Test {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        CglibProxy cglibProxy = new CglibProxy();</span></span>
<span class="line"><span style="color:#24292e;">        UserDao userDao = (UserDao) cglibProxy.getInstance(new UserDaoImpl());</span></span>
<span class="line"><span style="color:#24292e;">        userDao.save();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="_6、stackoverflow错误-permgen-space错误" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#6stackoverflow%E9%94%99%E8%AF%AFpermgen-space%E9%94%99%E8%AF%AF" target="_blank" rel="noreferrer">6、stackoverflow错误，permgen space错误</a> <a class="header-anchor" href="#_6、stackoverflow错误-permgen-space错误" aria-label="Permalink to &quot;[6、stackoverflow错误，permgen space错误](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新2021年面试题附答案解析，大汇总.md#6stackoverflow错误permgen-space错误)&quot;">​</a></h3><p>stackoverflow错误主要出现：</p><p>在虚拟机栈中(线程请求的栈深度大于虚拟机栈锁允许的最大深度)</p><p>permgen space错误(针对jdk之前1.7版本)：</p><p><strong>1、</strong> 大量加载class文件</p><p><strong>2、</strong> 常量池内存溢出</p><h3 id="_7、分代收集算法" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#7%E5%88%86%E4%BB%A3%E6%94%B6%E9%9B%86%E7%AE%97%E6%B3%95" target="_blank" rel="noreferrer">7、分代收集算法</a> <a class="header-anchor" href="#_7、分代收集算法" aria-label="Permalink to &quot;[7、分代收集算法](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新2021年面试题附答案解析，大汇总.md#7分代收集算法)&quot;">​</a></h3><p>当前主流 VM 垃圾收集都采用”分代收集” (Generational Collection)算法, 这种算法会根据对象存活周期的不同将内存划分为几块, 如 JVM 中的新生代、老年代、永久代， 这样就可以根据各年代特点分别采用最适当的 GC 算法</p><h3 id="_8、同步方法和同步块-哪个是更好的选择" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#8%E5%90%8C%E6%AD%A5%E6%96%B9%E6%B3%95%E5%92%8C%E5%90%8C%E6%AD%A5%E5%9D%97%E5%93%AA%E4%B8%AA%E6%98%AF%E6%9B%B4%E5%A5%BD%E7%9A%84%E9%80%89%E6%8B%A9" target="_blank" rel="noreferrer">8、同步方法和同步块，哪个是更好的选择？</a> <a class="header-anchor" href="#_8、同步方法和同步块-哪个是更好的选择" aria-label="Permalink to &quot;[8、同步方法和同步块，哪个是更好的选择？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新2021年面试题附答案解析，大汇总.md#8同步方法和同步块哪个是更好的选择)&quot;">​</a></h3><p>同步块是更好的选择，因为它不会锁住整个对象（当然你也可以让它锁住整个对象）。同步方法会锁住整个对象，哪怕这个类中有多个不相关联的同步块，这通常会导致他们停止执行并需要等待获得这个对象上的锁。</p><p>同步块更要符合开放调用的原则，只在需要锁住的代码块锁住相应的对象，这样从侧面来说也可以避免死锁。</p><p><code>请知道一条原则：同步的范围越小越好。</code></p><h3 id="_9、java-中的编译期常量是什么-使用它又什么风险" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#9java-%E4%B8%AD%E7%9A%84%E7%BC%96%E8%AF%91%E6%9C%9F%E5%B8%B8%E9%87%8F%E6%98%AF%E4%BB%80%E4%B9%88%E4%BD%BF%E7%94%A8%E5%AE%83%E5%8F%88%E4%BB%80%E4%B9%88%E9%A3%8E%E9%99%A9" target="_blank" rel="noreferrer">9、Java 中的编译期常量是什么？使用它又什么风险？</a> <a class="header-anchor" href="#_9、java-中的编译期常量是什么-使用它又什么风险" aria-label="Permalink to &quot;[9、Java 中的编译期常量是什么？使用它又什么风险？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新2021年面试题附答案解析，大汇总.md#9java-中的编译期常量是什么使用它又什么风险)&quot;">​</a></h3><p>公共静态不可变（public static final ）变量也就是我们所说的编译期常量，这里的 public 可选的。实际上这些变量在编译时会被替换掉，因为编译器知道这些变量的值，并且知道这些变量在运行时不能改变。这种方式存在的一个问题是你使用了一个内部的或第三方库中的公有编译时常量，但是这个值后面被其他人改变了，但是你的客户端仍然在使用老的值，甚至你已经部署了一个新的jar。为了避免这种情况，当你在更新依赖 JAR 文件时，确保重新编译你的程序。</p><h3 id="_10、java死锁以及如何避免" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#10java%E6%AD%BB%E9%94%81%E4%BB%A5%E5%8F%8A%E5%A6%82%E4%BD%95%E9%81%BF%E5%85%8D" target="_blank" rel="noreferrer">10、Java死锁以及如何避免？</a> <a class="header-anchor" href="#_10、java死锁以及如何避免" aria-label="Permalink to &quot;[10、Java死锁以及如何避免？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新2021年面试题附答案解析，大汇总.md#10java死锁以及如何避免)&quot;">​</a></h3><p>Java中的死锁是一种编程情况，其中两个或多个线程被永久阻塞，Java死锁情况出现至少两个线程和两个或更多资源。</p><p>Java发生死锁的根本原因是：在申请锁时发生了交叉闭环申请。</p><h3 id="_11、为什么-thread-类的-sleep-和-yield-方法是静态的" tabindex="-1">11、为什么 Thread 类的 sleep()和 yield ()方法是静态的？ <a class="header-anchor" href="#_11、为什么-thread-类的-sleep-和-yield-方法是静态的" aria-label="Permalink to &quot;11、为什么 Thread 类的 sleep()和 yield ()方法是静态的？&quot;">​</a></h3><h3 id="_12、java都有那些开发平台" tabindex="-1">12、Java都有那些开发平台？ <a class="header-anchor" href="#_12、java都有那些开发平台" aria-label="Permalink to &quot;12、Java都有那些开发平台？&quot;">​</a></h3><h3 id="_13、java-中能创建-volatile-数组吗" tabindex="-1">13、Java 中能创建 volatile 数组吗？ <a class="header-anchor" href="#_13、java-中能创建-volatile-数组吗" aria-label="Permalink to &quot;13、Java 中能创建 volatile 数组吗？&quot;">​</a></h3><h3 id="_14、线程-b-怎么知道线程-a-修改了变量" tabindex="-1">14、线程 B 怎么知道线程 A 修改了变量 <a class="header-anchor" href="#_14、线程-b-怎么知道线程-a-修改了变量" aria-label="Permalink to &quot;14、线程 B 怎么知道线程 A 修改了变量&quot;">​</a></h3><h3 id="_15、gc日志的real、user、sys是什么意思" tabindex="-1">15、GC日志的real、user、sys是什么意思？ <a class="header-anchor" href="#_15、gc日志的real、user、sys是什么意思" aria-label="Permalink to &quot;15、GC日志的real、user、sys是什么意思？&quot;">​</a></h3><h3 id="_16、你说你做过jvm参数调优和参数配置-请问如何查看jvm系统默认值" tabindex="-1">16、你说你做过JVM参数调优和参数配置，请问如何查看JVM系统默认值 <a class="header-anchor" href="#_16、你说你做过jvm参数调优和参数配置-请问如何查看jvm系统默认值" aria-label="Permalink to &quot;16、你说你做过JVM参数调优和参数配置，请问如何查看JVM系统默认值&quot;">​</a></h3><h3 id="_17、什么是orm" tabindex="-1">17、什么是ORM？ <a class="header-anchor" href="#_17、什么是orm" aria-label="Permalink to &quot;17、什么是ORM？&quot;">​</a></h3><h3 id="_18、串行-serial-收集器和吞吐量-throughput-收集器的区别是什么" tabindex="-1">18、串行（serial）收集器和吞吐量（throughput）收集器的区别是什么？ <a class="header-anchor" href="#_18、串行-serial-收集器和吞吐量-throughput-收集器的区别是什么" aria-label="Permalink to &quot;18、串行（serial）收集器和吞吐量（throughput）收集器的区别是什么？&quot;">​</a></h3><h3 id="_19、为什么wait-方法和notify-notifyall-方法要在同步块中被调用" tabindex="-1">19、为什么wait()方法和notify()/notifyAll()方法要在同步块中被调用 <a class="header-anchor" href="#_19、为什么wait-方法和notify-notifyall-方法要在同步块中被调用" aria-label="Permalink to &quot;19、为什么wait()方法和notify()/notifyAll()方法要在同步块中被调用&quot;">​</a></h3><h3 id="_20、java对象创建过程" tabindex="-1">20、Java对象创建过程 <a class="header-anchor" href="#_20、java对象创建过程" aria-label="Permalink to &quot;20、Java对象创建过程&quot;">​</a></h3><h3 id="_21、java-中-io-流分为几种" tabindex="-1">21、java 中 IO 流分为几种？ <a class="header-anchor" href="#_21、java-中-io-流分为几种" aria-label="Permalink to &quot;21、java 中 IO 流分为几种？&quot;">​</a></h3><h3 id="_22、在java中executor和executors的区别" tabindex="-1">22、在Java中Executor和Executors的区别？ <a class="header-anchor" href="#_22、在java中executor和executors的区别" aria-label="Permalink to &quot;22、在Java中Executor和Executors的区别？&quot;">​</a></h3><h3 id="_23、说说-jvm-如何执行-class-中的字节码。" tabindex="-1">23、说说 JVM 如何执行 class 中的字节码。 <a class="header-anchor" href="#_23、说说-jvm-如何执行-class-中的字节码。" aria-label="Permalink to &quot;23、说说 JVM 如何执行 class 中的字节码。&quot;">​</a></h3><h3 id="_24、构造方法有哪些特性" tabindex="-1">24、构造方法有哪些特性？ <a class="header-anchor" href="#_24、构造方法有哪些特性" aria-label="Permalink to &quot;24、构造方法有哪些特性？&quot;">​</a></h3><h3 id="_25、final不可变对象-它对写并发应用有什么帮助" tabindex="-1">25、final不可变对象，它对写并发应用有什么帮助？ <a class="header-anchor" href="#_25、final不可变对象-它对写并发应用有什么帮助" aria-label="Permalink to &quot;25、final不可变对象，它对写并发应用有什么帮助？&quot;">​</a></h3><h3 id="_26、java中操作字符串使用哪个类" tabindex="-1">26、Java中操作字符串使用哪个类？ <a class="header-anchor" href="#_26、java中操作字符串使用哪个类" aria-label="Permalink to &quot;26、Java中操作字符串使用哪个类？&quot;">​</a></h3><h3 id="_27、在-java-程序中怎么保证多线程的运行安全" tabindex="-1">27、在 Java 程序中怎么保证多线程的运行安全？ <a class="header-anchor" href="#_27、在-java-程序中怎么保证多线程的运行安全" aria-label="Permalink to &quot;27、在 Java 程序中怎么保证多线程的运行安全？&quot;">​</a></h3><h3 id="_28、jit是什么" tabindex="-1">28、JIT是什么？ <a class="header-anchor" href="#_28、jit是什么" aria-label="Permalink to &quot;28、JIT是什么？&quot;">​</a></h3><h3 id="_29、类加载有几个过程" tabindex="-1">29、类加载有几个过程？ <a class="header-anchor" href="#_29、类加载有几个过程" aria-label="Permalink to &quot;29、类加载有几个过程？&quot;">​</a></h3><h3 id="_30、jsp中的静态包含和动态包含有什么区别" tabindex="-1">30、JSP中的静态包含和动态包含有什么区别？ <a class="header-anchor" href="#_30、jsp中的静态包含和动态包含有什么区别" aria-label="Permalink to &quot;30、JSP中的静态包含和动态包含有什么区别？&quot;">​</a></h3><h3 id="_31、线程池的优点" tabindex="-1">31、线程池的优点？ <a class="header-anchor" href="#_31、线程池的优点" aria-label="Permalink to &quot;31、线程池的优点？&quot;">​</a></h3><h3 id="_32、java-中-怎么在格式化的日期中显示时区" tabindex="-1">32、Java 中，怎么在格式化的日期中显示时区？ <a class="header-anchor" href="#_32、java-中-怎么在格式化的日期中显示时区" aria-label="Permalink to &quot;32、Java 中，怎么在格式化的日期中显示时区？&quot;">​</a></h3><h3 id="_33、什么是原型模式" tabindex="-1">33、什么是原型模式 <a class="header-anchor" href="#_33、什么是原型模式" aria-label="Permalink to &quot;33、什么是原型模式&quot;">​</a></h3><h3 id="_34、javascript中常用的事件有哪些" tabindex="-1">34、Javascript中常用的事件有哪些？ <a class="header-anchor" href="#_34、javascript中常用的事件有哪些" aria-label="Permalink to &quot;34、Javascript中常用的事件有哪些？&quot;">​</a></h3><h3 id="_35、32-位和-64-位的-jvm-int-类型变量的长度是多数" tabindex="-1">35、32 位和 64 位的 JVM，int 类型变量的长度是多数？ <a class="header-anchor" href="#_35、32-位和-64-位的-jvm-int-类型变量的长度是多数" aria-label="Permalink to &quot;35、32 位和 64 位的 JVM，int 类型变量的长度是多数？&quot;">​</a></h3><h3 id="_36、常用的并发工具类有哪些" tabindex="-1">36、常用的并发工具类有哪些？ <a class="header-anchor" href="#_36、常用的并发工具类有哪些" aria-label="Permalink to &quot;36、常用的并发工具类有哪些？&quot;">​</a></h3><h3 id="_37、什么是不可变对象-它对写并发应用有什么帮助" tabindex="-1">37、什么是不可变对象，它对写并发应用有什么帮助？ <a class="header-anchor" href="#_37、什么是不可变对象-它对写并发应用有什么帮助" aria-label="Permalink to &quot;37、什么是不可变对象，它对写并发应用有什么帮助？&quot;">​</a></h3><h3 id="_38、单例模式的线程安全性" tabindex="-1">38、单例模式的线程安全性 <a class="header-anchor" href="#_38、单例模式的线程安全性" aria-label="Permalink to &quot;38、单例模式的线程安全性&quot;">​</a></h3><h3 id="_39、什么是阻塞式方法" tabindex="-1">39、什么是阻塞式方法？ <a class="header-anchor" href="#_39、什么是阻塞式方法" aria-label="Permalink to &quot;39、什么是阻塞式方法？&quot;">​</a></h3><h3 id="_40、调优工具" tabindex="-1">40、调优工具 <a class="header-anchor" href="#_40、调优工具" aria-label="Permalink to &quot;40、调优工具&quot;">​</a></h3><h3 id="_41、创建线程的三种方式的对比" tabindex="-1">41、创建线程的三种方式的对比？ <a class="header-anchor" href="#_41、创建线程的三种方式的对比" aria-label="Permalink to &quot;41、创建线程的三种方式的对比？&quot;">​</a></h3>`,121),o=[p];function t(c,r,i,f,y,d){return a(),n("div",null,o)}const v=s(l,[["render",t]]);export{h as __pageData,v as default};
