import{_ as s,o as a,c as n,V as l}from"./chunks/framework.c6d8cbec.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/java/java-04.md","filePath":"interview/backend/java/java-04.md"}'),e={name:"interview/backend/java/java-04.md"},p=l(`<h3 id="_1、说明tomcat配置了多少个valve" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%90%88%E9%9B%86%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#1%E8%AF%B4%E6%98%8Etomcat%E9%85%8D%E7%BD%AE%E4%BA%86%E5%A4%9A%E5%B0%91%E4%B8%AAvalve" target="_blank" rel="noreferrer">1、说明Tomcat配置了多少个Valve?</a> <a class="header-anchor" href="#_1、说明tomcat配置了多少个valve" aria-label="Permalink to &quot;[1、说明Tomcat配置了多少个Valve?](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java高级面试题合集，附答案解析.md#1说明tomcat配置了多少个valve)&quot;">​</a></h3><p>Tomcat配置了四种类型的Valve：</p><p><strong>1、</strong> 访问日志</p><p><strong>2、</strong> 远程地址过滤</p><p><strong>3、</strong> 远程主机过滤器</p><p><strong>4、</strong> 客户请求记录器</p><h3 id="_2、java中semaphore是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%90%88%E9%9B%86%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#2java%E4%B8%ADsemaphore%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">2、Java中Semaphore是什么？</a> <a class="header-anchor" href="#_2、java中semaphore是什么" aria-label="Permalink to &quot;[2、Java中Semaphore是什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java高级面试题合集，附答案解析.md#2java中semaphore是什么)&quot;">​</a></h3><p>Java中的Semaphore是一种新的同步类，它是一个计数信号。从概念上讲，从概念上讲，信号量维护了一个许可集合。如有必要，在许可可用前会阻塞每一个 acquire()，然后再获取该许可。每个 release()添加一个许可，从而可能释放一个正在阻塞的获取者。但是，不使用实际的许可对象，Semaphore只对可用许可的号码进行计数，并采取相应的行动。信号量常常用于多线程的代码中，比如数据库连接池。</p><h3 id="_3、一个类的构造方法的作用是什么-若一个类没有声明构造方法-改程序能正确执行吗-为什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%90%88%E9%9B%86%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#3%E4%B8%80%E4%B8%AA%E7%B1%BB%E7%9A%84%E6%9E%84%E9%80%A0%E6%96%B9%E6%B3%95%E7%9A%84%E4%BD%9C%E7%94%A8%E6%98%AF%E4%BB%80%E4%B9%88%E8%8B%A5%E4%B8%80%E4%B8%AA%E7%B1%BB%E6%B2%A1%E6%9C%89%E5%A3%B0%E6%98%8E%E6%9E%84%E9%80%A0%E6%96%B9%E6%B3%95%E6%94%B9%E7%A8%8B%E5%BA%8F%E8%83%BD%E6%AD%A3%E7%A1%AE%E6%89%A7%E8%A1%8C%E5%90%97%E4%B8%BA%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">3、一个类的构造方法的作用是什么？若一个类没有声明构造方法，改程序能正确执行吗？为什么？</a> <a class="header-anchor" href="#_3、一个类的构造方法的作用是什么-若一个类没有声明构造方法-改程序能正确执行吗-为什么" aria-label="Permalink to &quot;[3、一个类的构造方法的作用是什么？若一个类没有声明构造方法，改程序能正确执行吗？为什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java高级面试题合集，附答案解析.md#3一个类的构造方法的作用是什么若一个类没有声明构造方法改程序能正确执行吗为什么)&quot;">​</a></h3><p>主要作用是完成对类对象的初始化工作。可以执行。因为一个类即使没有声明构造方法也会有默认的不带参数的构造方法。</p><h3 id="_4、请说出与线程同步以及线程调度相关的方法。" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%90%88%E9%9B%86%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#4%E8%AF%B7%E8%AF%B4%E5%87%BA%E4%B8%8E%E7%BA%BF%E7%A8%8B%E5%90%8C%E6%AD%A5%E4%BB%A5%E5%8F%8A%E7%BA%BF%E7%A8%8B%E8%B0%83%E5%BA%A6%E7%9B%B8%E5%85%B3%E7%9A%84%E6%96%B9%E6%B3%95%E3%80%82" target="_blank" rel="noreferrer">4、请说出与线程同步以及线程调度相关的方法。</a> <a class="header-anchor" href="#_4、请说出与线程同步以及线程调度相关的方法。" aria-label="Permalink to &quot;[4、请说出与线程同步以及线程调度相关的方法。](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java高级面试题合集，附答案解析.md#4请说出与线程同步以及线程调度相关的方法。)&quot;">​</a></h3><p><strong>1、</strong> wait()：使一个线程处于等待（阻塞）状态，并且释放所持有的对象的锁；</p><p><strong>2、</strong> sleep()：使一个正在运行的线程处于睡眠状态，是一个静态方法，调用此方法要处理InterruptedException异常；</p><p><strong>3、</strong> notify()：唤醒一个处于等待状态的线程，当然在调用此方法的时候，并不能确切的唤醒某一个等待状态的线程，而是由JVM确定唤醒哪个线程，而且与优先级无关；</p><p><strong>4、</strong> notityAll()：唤醒所有处于等待状态的线程，该方法并不是将对象的锁给所有线程，而是让它们竞争，只有获得锁的线程才能进入就绪状态；</p><blockquote><p>提示：关于Java多线程和并发编程的问题，建议大家看我的另一篇文章<a href="http://blog.csdn.net/jackfrued/article/details/44499227" target="_blank" rel="noreferrer">《关于Java并发编程的总结和思考》</a>。</p></blockquote><blockquote><p>补充：Java 5通过Lock接口提供了显式的锁机制（explicit lock），增强了灵活性以及对线程的协调。Lock接口中定义了加锁（lock()）和解锁（unlock()）的方法，同时还提供了newCondition()方法来产生用于线程之间通信的Condition对象；此外，Java 5还提供了信号量机制（semaphore），信号量可以用来限制对某个共享资源进行访问的线程的数量。在对资源进行访问之前，线程必须得到信号量的许可（调用Semaphore对象的acquire()方法）；在完成对资源的访问后，线程必须向信号量归还许可（调用Semaphore对象的release()方法）。</p></blockquote><p>下面的例子演示了100个线程同时向一个银行账户中存入1元钱，在没有使用同步机制和使用同步机制情况下的执行情况。</p><p><strong>银行账户类：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/</span></span>
<span class="line"><span style="color:#f6f6f4;"> * 银行账户</span></span>
<span class="line"><span style="color:#f6f6f4;"> * @author 骆昊</span></span>
<span class="line"><span style="color:#f6f6f4;"> *</span></span>
<span class="line"><span style="color:#f6f6f4;"> */</span></span>
<span class="line"><span style="color:#f6f6f4;">public class Account {</span></span>
<span class="line"><span style="color:#f6f6f4;">    private double balance;     // 账户余额</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    /</span></span>
<span class="line"><span style="color:#f6f6f4;">     * 存款</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param money 存入金额</span></span>
<span class="line"><span style="color:#f6f6f4;">     */</span></span>
<span class="line"><span style="color:#f6f6f4;">    public void deposit(double money) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        double newBalance = balance + money;</span></span>
<span class="line"><span style="color:#f6f6f4;">        try {</span></span>
<span class="line"><span style="color:#f6f6f4;">            Thread.sleep(10);   // 模拟此业务需要一段处理时间</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">        catch(InterruptedException ex) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            ex.printStackTrace();</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">        balance = newBalance;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    /</span></span>
<span class="line"><span style="color:#f6f6f4;">     * 获得账户余额</span></span>
<span class="line"><span style="color:#f6f6f4;">     */</span></span>
<span class="line"><span style="color:#f6f6f4;">    public double getBalance() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return balance;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/</span></span>
<span class="line"><span style="color:#24292e;"> * 银行账户</span></span>
<span class="line"><span style="color:#24292e;"> * @author 骆昊</span></span>
<span class="line"><span style="color:#24292e;"> *</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">public class Account {</span></span>
<span class="line"><span style="color:#24292e;">    private double balance;     // 账户余额</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /</span></span>
<span class="line"><span style="color:#24292e;">     * 存款</span></span>
<span class="line"><span style="color:#24292e;">     * @param money 存入金额</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public void deposit(double money) {</span></span>
<span class="line"><span style="color:#24292e;">        double newBalance = balance + money;</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            Thread.sleep(10);   // 模拟此业务需要一段处理时间</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        catch(InterruptedException ex) {</span></span>
<span class="line"><span style="color:#24292e;">            ex.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        balance = newBalance;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /</span></span>
<span class="line"><span style="color:#24292e;">     * 获得账户余额</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public double getBalance() {</span></span>
<span class="line"><span style="color:#24292e;">        return balance;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>存钱线程类：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/</span></span>
<span class="line"><span style="color:#f6f6f4;"> * 存钱线程</span></span>
<span class="line"><span style="color:#f6f6f4;"> * @author 骆昊</span></span>
<span class="line"><span style="color:#f6f6f4;"> *</span></span>
<span class="line"><span style="color:#f6f6f4;"> */</span></span>
<span class="line"><span style="color:#f6f6f4;">public class AddMoneyThread implements Runnable {</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Account account;    // 存入账户</span></span>
<span class="line"><span style="color:#f6f6f4;">    private double money;       // 存入金额</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public AddMoneyThread(Account account, double money) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        this.account = account;</span></span>
<span class="line"><span style="color:#f6f6f4;">        this.money = money;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    @Override</span></span>
<span class="line"><span style="color:#f6f6f4;">    public void run() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        account.deposit(money);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/</span></span>
<span class="line"><span style="color:#24292e;"> * 存钱线程</span></span>
<span class="line"><span style="color:#24292e;"> * @author 骆昊</span></span>
<span class="line"><span style="color:#24292e;"> *</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">public class AddMoneyThread implements Runnable {</span></span>
<span class="line"><span style="color:#24292e;">    private Account account;    // 存入账户</span></span>
<span class="line"><span style="color:#24292e;">    private double money;       // 存入金额</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public AddMoneyThread(Account account, double money) {</span></span>
<span class="line"><span style="color:#24292e;">        this.account = account;</span></span>
<span class="line"><span style="color:#24292e;">        this.money = money;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Override</span></span>
<span class="line"><span style="color:#24292e;">    public void run() {</span></span>
<span class="line"><span style="color:#24292e;">        account.deposit(money);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>测试类：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">import java.util.concurrent.ExecutorService;</span></span>
<span class="line"><span style="color:#f6f6f4;">import java.util.concurrent.Executors;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">public class Test01 {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        Account account = new Account();</span></span>
<span class="line"><span style="color:#f6f6f4;">        ExecutorService service = Executors.newFixedThreadPool(100);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        for(int i = 1; i &lt;= 100; i++) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            service.execute(new AddMoneyThread(account, 1));</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        service.shutdown();</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        while(!service.isTerminated()) {}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;账户余额: &quot; + account.getBalance());</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import java.util.concurrent.ExecutorService;</span></span>
<span class="line"><span style="color:#24292e;">import java.util.concurrent.Executors;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public class Test01 {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        Account account = new Account();</span></span>
<span class="line"><span style="color:#24292e;">        ExecutorService service = Executors.newFixedThreadPool(100);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        for(int i = 1; i &lt;= 100; i++) {</span></span>
<span class="line"><span style="color:#24292e;">            service.execute(new AddMoneyThread(account, 1));</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        service.shutdown();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        while(!service.isTerminated()) {}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;账户余额: &quot; + account.getBalance());</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>在没有同步的情况下，执行结果通常是显示账户余额在10元以下，出现这种状况的原因是，当一个线程A试图存入1元的时候，另外一个线程B也能够进入存款的方法中，线程B读取到的账户余额仍然是线程A存入1元钱之前的账户余额，因此也是在原来的余额0上面做了加1元的操作，同理线程C也会做类似的事情，所以最后100个线程执行结束时，本来期望账户余额为100元，但实际得到的通常在10元以下（很可能是1元哦）。解决这个问题的办法就是同步，当一个线程对银行账户存钱时，需要将此账户锁定，待其操作完成后才允许其他的线程进行操作，代码有如下几种调整方案：</p><p><strong>在银行账户的存款（deposit）方法上同步（synchronized）关键字</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/</span></span>
<span class="line"><span style="color:#f6f6f4;"> * 银行账户</span></span>
<span class="line"><span style="color:#f6f6f4;"> * @author 骆昊</span></span>
<span class="line"><span style="color:#f6f6f4;"> *</span></span>
<span class="line"><span style="color:#f6f6f4;"> */</span></span>
<span class="line"><span style="color:#f6f6f4;">public class Account {</span></span>
<span class="line"><span style="color:#f6f6f4;">    private double balance;     // 账户余额</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    /</span></span>
<span class="line"><span style="color:#f6f6f4;">     * 存款</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param money 存入金额</span></span>
<span class="line"><span style="color:#f6f6f4;">     */</span></span>
<span class="line"><span style="color:#f6f6f4;">    public synchronized void deposit(double money) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        double newBalance = balance + money;</span></span>
<span class="line"><span style="color:#f6f6f4;">        try {</span></span>
<span class="line"><span style="color:#f6f6f4;">            Thread.sleep(10);   // 模拟此业务需要一段处理时间</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">        catch(InterruptedException ex) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            ex.printStackTrace();</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">        balance = newBalance;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    /</span></span>
<span class="line"><span style="color:#f6f6f4;">     * 获得账户余额</span></span>
<span class="line"><span style="color:#f6f6f4;">     */</span></span>
<span class="line"><span style="color:#f6f6f4;">    public double getBalance() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return balance;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/</span></span>
<span class="line"><span style="color:#24292e;"> * 银行账户</span></span>
<span class="line"><span style="color:#24292e;"> * @author 骆昊</span></span>
<span class="line"><span style="color:#24292e;"> *</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">public class Account {</span></span>
<span class="line"><span style="color:#24292e;">    private double balance;     // 账户余额</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /</span></span>
<span class="line"><span style="color:#24292e;">     * 存款</span></span>
<span class="line"><span style="color:#24292e;">     * @param money 存入金额</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public synchronized void deposit(double money) {</span></span>
<span class="line"><span style="color:#24292e;">        double newBalance = balance + money;</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            Thread.sleep(10);   // 模拟此业务需要一段处理时间</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        catch(InterruptedException ex) {</span></span>
<span class="line"><span style="color:#24292e;">            ex.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        balance = newBalance;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /</span></span>
<span class="line"><span style="color:#24292e;">     * 获得账户余额</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public double getBalance() {</span></span>
<span class="line"><span style="color:#24292e;">        return balance;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>在线程调用存款方法时对银行账户进行同步</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/</span></span>
<span class="line"><span style="color:#f6f6f4;"> * 存钱线程</span></span>
<span class="line"><span style="color:#f6f6f4;"> * @author 骆昊</span></span>
<span class="line"><span style="color:#f6f6f4;"> *</span></span>
<span class="line"><span style="color:#f6f6f4;"> */</span></span>
<span class="line"><span style="color:#f6f6f4;">public class AddMoneyThread implements Runnable {</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Account account;    // 存入账户</span></span>
<span class="line"><span style="color:#f6f6f4;">    private double money;       // 存入金额</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public AddMoneyThread(Account account, double money) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        this.account = account;</span></span>
<span class="line"><span style="color:#f6f6f4;">        this.money = money;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    @Override</span></span>
<span class="line"><span style="color:#f6f6f4;">    public void run() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        synchronized (account) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            account.deposit(money); </span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/</span></span>
<span class="line"><span style="color:#24292e;"> * 存钱线程</span></span>
<span class="line"><span style="color:#24292e;"> * @author 骆昊</span></span>
<span class="line"><span style="color:#24292e;"> *</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">public class AddMoneyThread implements Runnable {</span></span>
<span class="line"><span style="color:#24292e;">    private Account account;    // 存入账户</span></span>
<span class="line"><span style="color:#24292e;">    private double money;       // 存入金额</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public AddMoneyThread(Account account, double money) {</span></span>
<span class="line"><span style="color:#24292e;">        this.account = account;</span></span>
<span class="line"><span style="color:#24292e;">        this.money = money;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Override</span></span>
<span class="line"><span style="color:#24292e;">    public void run() {</span></span>
<span class="line"><span style="color:#24292e;">        synchronized (account) {</span></span>
<span class="line"><span style="color:#24292e;">            account.deposit(money); </span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>通过Java 5显示的锁机制，为每个银行账户创建一个锁对象，在存款操作进行加锁和解锁的操作</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">import java.util.concurrent.locks.Lock;</span></span>
<span class="line"><span style="color:#f6f6f4;">import java.util.concurrent.locks.ReentrantLock;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">/</span></span>
<span class="line"><span style="color:#f6f6f4;"> * 银行账户</span></span>
<span class="line"><span style="color:#f6f6f4;"> * </span></span>
<span class="line"><span style="color:#f6f6f4;"> * @author 骆昊</span></span>
<span class="line"><span style="color:#f6f6f4;"> *</span></span>
<span class="line"><span style="color:#f6f6f4;"> */</span></span>
<span class="line"><span style="color:#f6f6f4;">public class Account {</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Lock accountLock = new ReentrantLock();</span></span>
<span class="line"><span style="color:#f6f6f4;">    private double balance; // 账户余额</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    /</span></span>
<span class="line"><span style="color:#f6f6f4;">     * 存款</span></span>
<span class="line"><span style="color:#f6f6f4;">     * </span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param money</span></span>
<span class="line"><span style="color:#f6f6f4;">     *            存入金额</span></span>
<span class="line"><span style="color:#f6f6f4;">     */</span></span>
<span class="line"><span style="color:#f6f6f4;">    public void deposit(double money) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        accountLock.lock();</span></span>
<span class="line"><span style="color:#f6f6f4;">        try {</span></span>
<span class="line"><span style="color:#f6f6f4;">            double newBalance = balance + money;</span></span>
<span class="line"><span style="color:#f6f6f4;">            try {</span></span>
<span class="line"><span style="color:#f6f6f4;">                Thread.sleep(10); // 模拟此业务需要一段处理时间</span></span>
<span class="line"><span style="color:#f6f6f4;">            }</span></span>
<span class="line"><span style="color:#f6f6f4;">            catch (InterruptedException ex) {</span></span>
<span class="line"><span style="color:#f6f6f4;">                ex.printStackTrace();</span></span>
<span class="line"><span style="color:#f6f6f4;">            }</span></span>
<span class="line"><span style="color:#f6f6f4;">            balance = newBalance;</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">        finally {</span></span>
<span class="line"><span style="color:#f6f6f4;">            accountLock.unlock();</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    /</span></span>
<span class="line"><span style="color:#f6f6f4;">     * 获得账户余额</span></span>
<span class="line"><span style="color:#f6f6f4;">     */</span></span>
<span class="line"><span style="color:#f6f6f4;">    public double getBalance() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return balance;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import java.util.concurrent.locks.Lock;</span></span>
<span class="line"><span style="color:#24292e;">import java.util.concurrent.locks.ReentrantLock;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">/</span></span>
<span class="line"><span style="color:#24292e;"> * 银行账户</span></span>
<span class="line"><span style="color:#24292e;"> * </span></span>
<span class="line"><span style="color:#24292e;"> * @author 骆昊</span></span>
<span class="line"><span style="color:#24292e;"> *</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">public class Account {</span></span>
<span class="line"><span style="color:#24292e;">    private Lock accountLock = new ReentrantLock();</span></span>
<span class="line"><span style="color:#24292e;">    private double balance; // 账户余额</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /</span></span>
<span class="line"><span style="color:#24292e;">     * 存款</span></span>
<span class="line"><span style="color:#24292e;">     * </span></span>
<span class="line"><span style="color:#24292e;">     * @param money</span></span>
<span class="line"><span style="color:#24292e;">     *            存入金额</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public void deposit(double money) {</span></span>
<span class="line"><span style="color:#24292e;">        accountLock.lock();</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            double newBalance = balance + money;</span></span>
<span class="line"><span style="color:#24292e;">            try {</span></span>
<span class="line"><span style="color:#24292e;">                Thread.sleep(10); // 模拟此业务需要一段处理时间</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            catch (InterruptedException ex) {</span></span>
<span class="line"><span style="color:#24292e;">                ex.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            balance = newBalance;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        finally {</span></span>
<span class="line"><span style="color:#24292e;">            accountLock.unlock();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /</span></span>
<span class="line"><span style="color:#24292e;">     * 获得账户余额</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public double getBalance() {</span></span>
<span class="line"><span style="color:#24292e;">        return balance;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>按照上述三种方式对代码进行修改后，重写执行测试代码Test01，将看到最终的账户余额为100元。当然也可以使用Semaphore或CountdownLatch来实现同步。</p><h3 id="_5、正则表达式有那些符号" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%90%88%E9%9B%86%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#5%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E6%9C%89%E9%82%A3%E4%BA%9B%E7%AC%A6%E5%8F%B7" target="_blank" rel="noreferrer">5、正则表达式有那些符号？</a> <a class="header-anchor" href="#_5、正则表达式有那些符号" aria-label="Permalink to &quot;[5、正则表达式有那些符号？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java高级面试题合集，附答案解析.md#5正则表达式有那些符号)&quot;">​</a></h3><p><strong>1、</strong> $：匹配字符串结束的位置</p><p><strong>2、</strong> ^：匹配字符串开始的位置</p><p><strong>3、</strong> *：匹配零次或者多次</p><p><strong>4、</strong> +：匹配至少一次</p><p><strong>5、</strong> ?：匹配零次或者一次</p><p><strong>6、</strong> .：匹配除换行符 \\n之外的任何单字符</p><p><strong>7、</strong> {n}：n 是一个非负整数，匹配确定的 n 次</p><p><strong>8、</strong> {n,m}：m 和 n 均为非负整数，表示最多和最少匹配次数，其中n &lt;= m</p><p><strong>9、</strong> \\w：匹配单个字符(a-z,0-9,_)</p><p><strong>10、</strong> \\W：与\\w相反</p><p><strong>11、</strong> \\d：匹配数字</p><p><strong>12、</strong> \\D：与\\d相反</p><h3 id="_6、介绍一下-jvm-中垃圾收集器有哪些-他们特点分别是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%90%88%E9%9B%86%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#6%E4%BB%8B%E7%BB%8D%E4%B8%80%E4%B8%8B-jvm-%E4%B8%AD%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8%E6%9C%89%E5%93%AA%E4%BA%9B-%E4%BB%96%E4%BB%AC%E7%89%B9%E7%82%B9%E5%88%86%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">6、介绍一下 JVM 中垃圾收集器有哪些？ 他们特点分别是什么？</a> <a class="header-anchor" href="#_6、介绍一下-jvm-中垃圾收集器有哪些-他们特点分别是什么" aria-label="Permalink to &quot;[6、介绍一下 JVM 中垃圾收集器有哪些？ 他们特点分别是什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java高级面试题合集，附答案解析.md#6介绍一下-jvm-中垃圾收集器有哪些-他们特点分别是什么)&quot;">​</a></h3><p><strong>新生代垃圾收集器</strong></p><p><strong>Serial 收集器</strong></p><p>特点： Serial 收集器只能使用一条线程进行垃圾收集工作，并且在进行垃圾收集的时候，所有的工作线程都需要停止工作，等待垃圾收集线程完成以后，其他线程才可以继续工作。</p><p><strong>使用算法：复制算法</strong></p><p><strong>ParNew 收集器</strong></p><p>特点： ParNew 垃圾收集器是Serial收集器的多线程版本。为了利用 CPU 多核多线程的优势，ParNew 收集器可以运行多个收集线程来进行垃圾收集工作。这样可以提高垃圾收集过程的效率。</p><p><strong>使用算法：复制算法</strong></p><p><strong>Parallel Scavenge 收集器</strong></p><p>特点： Parallel Scavenge 收集器是一款多线程的垃圾收集器，但是它又和 ParNew 有很大的不同点。</p><p>Parallel Scavenge 收集器和其他收集器的关注点不同。其他收集器，比如 ParNew 和 CMS 这些收集器，它们主要关注的是如何缩短垃圾收集的时间。而 Parallel Scavenge 收集器关注的是如何控制系统运行的吞吐量。这里说的吞吐量，指的是 CPU 用于运行应用程序的时间和 CPU 总时间的占比，吞吐量 = 代码运行时间 / （代码运行时间 + 垃圾收集时间）。如果虚拟机运行的总的 CPU 时间是 100 分钟，而用于执行垃圾收集的时间为 1 分钟，那么吞吐量就是 99%。</p><p><strong>使用算法：复制算法</strong></p><p><strong>老年代垃圾收集器</strong></p><p><strong>Serial Old 收集器</strong></p><p>特点： Serial Old 收集器是 Serial 收集器的老年代版本。这款收集器主要用于客户端应用程序中作为老年代的垃圾收集器，也可以作为服务端应用程序的垃圾收集器。</p><p><strong>使用算法：标记-整理</strong></p><p><strong>Parallel Old 收集器</strong></p><p>特点： Parallel Old 收集器是 Parallel Scavenge 收集器的老年代版本这个收集器是在 JDK1.6 版本中出现的，所以在 JDK1.6 之前，新生代的 Parallel Scavenge 只能和 Serial Old 这款单线程的老年代收集器配合使用。Parallel Old 垃圾收集器和 Parallel Scavenge 收集器一样，也是一款关注吞吐量的垃圾收集器，和 Parallel Scavenge 收集器一起配合，可以实现对 Java 堆内存的吞吐量优先的垃圾收集策略。</p><p><strong>使用算法：标记-整理</strong></p><p><strong>CMS 收集器</strong></p><p>特点： CMS 收集器是目前老年代收集器中比较优秀的垃圾收集器。CMS 是 Concurrent Mark Sweep，从名字可以看出，这是一款使用&quot;标记-清除&quot;算法的并发收集器。</p><p>CMS 垃圾收集器是一款以获取最短停顿时间为目标的收集器。如下图所示：</p><p><img src="https://gitee.com/souyunkutech/souyunku-home/raw/master/images/souyunku-web/2020/5/2/05/34/39_3.png#alt=39%5C_3.png" alt=""></p><p><strong>从图中可以看出，CMS 收集器的工作过程可以分为 4 个阶段：</strong></p><p><strong>1、</strong> 初始标记（CMS initial mark）阶段</p><p><strong>2、</strong> 并发标记（CMS concurrent mark）阶段</p><p><strong>3、</strong> 重新标记（CMS remark）阶段</p><p><strong>4、</strong> 并发清除(（CMS concurrent sweep）阶段</p><p>使用算法：复制+标记清除</p><p><strong>其他</strong></p><p><strong>G1 垃圾收集器</strong></p><p>特点： 主要步骤：<code>初始标记，并发标记，重新标记，复制清除。</code></p><p><strong>使用算法：复制 + 标记整理</strong></p><h3 id="_7、log4j日志有几个级别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%90%88%E9%9B%86%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#7log4j%E6%97%A5%E5%BF%97%E6%9C%89%E5%87%A0%E4%B8%AA%E7%BA%A7%E5%88%AB" target="_blank" rel="noreferrer">7、Log4j日志有几个级别？</a> <a class="header-anchor" href="#_7、log4j日志有几个级别" aria-label="Permalink to &quot;[7、Log4j日志有几个级别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java高级面试题合集，附答案解析.md#7log4j日志有几个级别)&quot;">​</a></h3><p>由低到高：debug、info、wran、error</p><h3 id="_8、有哪些类加载器" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%90%88%E9%9B%86%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#8%E6%9C%89%E5%93%AA%E4%BA%9B%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8" target="_blank" rel="noreferrer">8、有哪些类加载器？</a> <a class="header-anchor" href="#_8、有哪些类加载器" aria-label="Permalink to &quot;[8、有哪些类加载器？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java高级面试题合集，附答案解析.md#8有哪些类加载器)&quot;">​</a></h3><p>自 JDK1.2 起 Java 一直保持三层类加载器：</p><p><strong>启动类加载器</strong></p><p>在 JVM 启动时创建，负责加载最核心的类，例如 Object、System 等。无法被程序直接引用，如果需要把加载委派给启动类加载器，直接使用 null 代替即可，因为启动类加载器通常由操作系统实现，并不存在于 JVM 体系。</p><p><strong>平台类加载器</strong></p><p>从 JDK9 开始从扩展类加载器更换为平台类加载器，负载加载一些扩展的系统类，比如 XML、加密、压缩相关的功能类等。</p><p><strong>应用类加载器</strong></p><p>也称系统类加载器，负责加载用户类路径上的类库，可以直接在代码中使用。如果没有自定义类加载器，一般情况下应用类加载器就是默认的类加载器。自定义类加载器通过继承 ClassLoader 并重写 <code>findClass</code> 方法实现。</p><h3 id="_9、描述一下-jvm-加载-class-文件的原理机制" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%90%88%E9%9B%86%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#9%E6%8F%8F%E8%BF%B0%E4%B8%80%E4%B8%8B-jvm-%E5%8A%A0%E8%BD%BD-class-%E6%96%87%E4%BB%B6%E7%9A%84%E5%8E%9F%E7%90%86%E6%9C%BA%E5%88%B6" target="_blank" rel="noreferrer">9、描述一下 JVM 加载 class 文件的原理机制</a> <a class="header-anchor" href="#_9、描述一下-jvm-加载-class-文件的原理机制" aria-label="Permalink to &quot;[9、描述一下 JVM 加载 class 文件的原理机制](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java高级面试题合集，附答案解析.md#9描述一下-jvm-加载-class-文件的原理机制)&quot;">​</a></h3><p><strong>1、</strong> JVM 中类的装载是由类加载器（ClassLoader）和它的子类来实现的，Java 中各类加载器是一个重要的 Java 运行时系统组件，它负责在运行时查找和装入类文件中的类。</p><p><strong>2、</strong> 由于 Java 的跨平台性，经过编译的 Java 源程序并不是一个可执行程序，而是一个或多个类文件。当 Java 程序需要使用某个类时，JVM 会确保这个类已经被加载、连接（验证、准备和解析）和初始化。类的加载是指把类的.class 文件中的数据读入到内存中，通常是创建一个字节数组读入.class 文件，然后产生与所加载类对应的 Class 对象。</p><p><strong>3、</strong> 加载完成后，Class 对象还不完整，所以此时的类还不可用。当类被加载后就进入连接阶段，这一阶段包括验证、准备（为静态变量分配内存并设置默认的初始值）和解析（将符号引用替换为直接引用）三个步骤。最后 JVM 对类进行初始化，包括：1)如果类存在直接的父类并且这个类还没有被初始化，那么就先初始化父类；2)如果类中存在初始化语句，就依次执行这些初始化语句。</p><p><strong>4、</strong> 类的加载是由类加载器完成的，类加载器包括：根加载器（BootStrap）、扩展加载器（Extension）、系统加载器（System）和用户自定义类加载器（java.lang.ClassLoader 的子类）。</p><p><strong>5、</strong> 从 Java 2（JDK 1.2）开始，类加载过程采取了父亲委托机制（PDM）。PDM 更好的保证了 Java 平台的安全性，在该机制中，JVM 自带的Bootstrap 是根加载器，其他的加载器都有且仅有一个父类加载器。类的加载首先请求父类加载器加载，父类加载器无能为力时才由其子类加载器自行加载。JVM 不会向 Java 程序提供对 Bootstrap 的引用。下面是关于几个类</p><p><strong>加载器的说明：</strong></p><p><strong>1、</strong> Bootstrap：一般用本地代码实现，负责加载 JVM 基础核心类库（rt.jar）；</p><p><strong>2、</strong> Extension：从 java.ext.dirs 系统属性所指定的目录中加载类库，它的父加载器是 Bootstrap；</p><p><strong>3、</strong> System：又叫应用类加载器，其父类是 Extension。它是应用最广泛的类加载器。它从环境变量 classpath 或者系统属性</p><p>java.class.path 所指定的目录中记载类，是用户自定义加载器的默认父加载器。</p><h3 id="_10、jsp指令有那些" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%90%88%E9%9B%86%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#10jsp%E6%8C%87%E4%BB%A4%E6%9C%89%E9%82%A3%E4%BA%9B" target="_blank" rel="noreferrer">10、Jsp指令有那些？</a> <a class="header-anchor" href="#_10、jsp指令有那些" aria-label="Permalink to &quot;[10、Jsp指令有那些？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java高级面试题合集，附答案解析.md#10jsp指令有那些)&quot;">​</a></h3><p>Include</p><p>Taglib</p><p>Page</p><h3 id="_11、用java实现阻塞队列" tabindex="-1">11、用Java实现阻塞队列 <a class="header-anchor" href="#_11、用java实现阻塞队列" aria-label="Permalink to &quot;11、用Java实现阻塞队列&quot;">​</a></h3><h3 id="_12、你对-time-slice的理解" tabindex="-1">12、你对 Time Slice的理解? <a class="header-anchor" href="#_12、你对-time-slice的理解" aria-label="Permalink to &quot;12、你对 Time Slice的理解?&quot;">​</a></h3><h3 id="_13、描述一下jvm加载class文件的原理机制" tabindex="-1">13、描述一下JVM加载class文件的原理机制？ <a class="header-anchor" href="#_13、描述一下jvm加载class文件的原理机制" aria-label="Permalink to &quot;13、描述一下JVM加载class文件的原理机制？&quot;">​</a></h3><h3 id="_14、java-中的同步集合与并发集合有什么区别" tabindex="-1">14、Java 中的同步集合与并发集合有什么区别？ <a class="header-anchor" href="#_14、java-中的同步集合与并发集合有什么区别" aria-label="Permalink to &quot;14、Java 中的同步集合与并发集合有什么区别？&quot;">​</a></h3><h3 id="_15、jvm垃圾回收机制-何时触发minorgc等操作" tabindex="-1">15、JVM垃圾回收机制，何时触发MinorGC等操作 <a class="header-anchor" href="#_15、jvm垃圾回收机制-何时触发minorgc等操作" aria-label="Permalink to &quot;15、JVM垃圾回收机制，何时触发MinorGC等操作&quot;">​</a></h3><h3 id="_16、对象分配内存的方式有哪些" tabindex="-1">16、对象分配内存的方式有哪些？ <a class="header-anchor" href="#_16、对象分配内存的方式有哪些" aria-label="Permalink to &quot;16、对象分配内存的方式有哪些？&quot;">​</a></h3><h3 id="_17、java中用到的线程调度算法是什么" tabindex="-1">17、Java中用到的线程调度算法是什么 <a class="header-anchor" href="#_17、java中用到的线程调度算法是什么" aria-label="Permalink to &quot;17、Java中用到的线程调度算法是什么&quot;">​</a></h3><h3 id="_18、什么是futuretask-使用executorservice启动任务。" tabindex="-1">18、什么是FutureTask?使用ExecutorService启动任务。 <a class="header-anchor" href="#_18、什么是futuretask-使用executorservice启动任务。" aria-label="Permalink to &quot;18、什么是FutureTask?使用ExecutorService启动任务。&quot;">​</a></h3><h3 id="_19、对于jdk自带的监控和性能分析工具用过哪些" tabindex="-1">19、对于JDK自带的监控和性能分析工具用过哪些？ <a class="header-anchor" href="#_19、对于jdk自带的监控和性能分析工具用过哪些" aria-label="Permalink to &quot;19、对于JDK自带的监控和性能分析工具用过哪些？&quot;">​</a></h3><h3 id="_20、什么是类加载器-类加载器有哪些" tabindex="-1">20、什么是类加载器，类加载器有哪些？ <a class="header-anchor" href="#_20、什么是类加载器-类加载器有哪些" aria-label="Permalink to &quot;20、什么是类加载器，类加载器有哪些？&quot;">​</a></h3><h3 id="_21、各种回收算法" tabindex="-1">21、各种回收算法 <a class="header-anchor" href="#_21、各种回收算法" aria-label="Permalink to &quot;21、各种回收算法&quot;">​</a></h3><h3 id="_22、请解释什么是tomcat-coyote" tabindex="-1">22、请解释什么是Tomcat Coyote ? <a class="header-anchor" href="#_22、请解释什么是tomcat-coyote" aria-label="Permalink to &quot;22、请解释什么是Tomcat Coyote ?&quot;">​</a></h3><h3 id="_23、方法区溢出的原因" tabindex="-1">23、方法区溢出的原因？ <a class="header-anchor" href="#_23、方法区溢出的原因" aria-label="Permalink to &quot;23、方法区溢出的原因？&quot;">​</a></h3><h3 id="_24、如何在jsp页面上显示一些特定格式的数字或者日期" tabindex="-1">24、如何在jsp页面上显示一些特定格式的数字或者日期 <a class="header-anchor" href="#_24、如何在jsp页面上显示一些特定格式的数字或者日期" aria-label="Permalink to &quot;24、如何在jsp页面上显示一些特定格式的数字或者日期&quot;">​</a></h3><h3 id="_25、zgc-了解吗" tabindex="-1">25、ZGC 了解吗？ <a class="header-anchor" href="#_25、zgc-了解吗" aria-label="Permalink to &quot;25、ZGC 了解吗？&quot;">​</a></h3><h3 id="_26、你平时工作中用过的jvm常用基本配置参数有哪些" tabindex="-1">26、你平时工作中用过的JVM常用基本配置参数有哪些？ <a class="header-anchor" href="#_26、你平时工作中用过的jvm常用基本配置参数有哪些" aria-label="Permalink to &quot;26、你平时工作中用过的JVM常用基本配置参数有哪些？&quot;">​</a></h3><h3 id="_27、怎么看死锁的线程" tabindex="-1">27、怎么看死锁的线程？ <a class="header-anchor" href="#_27、怎么看死锁的线程" aria-label="Permalink to &quot;27、怎么看死锁的线程？&quot;">​</a></h3><h3 id="_28、类的实例化顺序" tabindex="-1">28、类的实例化顺序 <a class="header-anchor" href="#_28、类的实例化顺序" aria-label="Permalink to &quot;28、类的实例化顺序&quot;">​</a></h3><h3 id="_29、比较一下java和javasciprt。" tabindex="-1">29、比较一下Java和JavaSciprt。 <a class="header-anchor" href="#_29、比较一下java和javasciprt。" aria-label="Permalink to &quot;29、比较一下Java和JavaSciprt。&quot;">​</a></h3><h3 id="_30、hashmap中的key-可以是普通对象么-需要什么注意的地方" tabindex="-1">30、HashMap中的key，可以是普通对象么？需要什么注意的地方？ <a class="header-anchor" href="#_30、hashmap中的key-可以是普通对象么-需要什么注意的地方" aria-label="Permalink to &quot;30、HashMap中的key，可以是普通对象么？需要什么注意的地方？&quot;">​</a></h3><h3 id="_31、如何判断一个常量是废弃常量" tabindex="-1">31、如何判断一个常量是废弃常量 ？ <a class="header-anchor" href="#_31、如何判断一个常量是废弃常量" aria-label="Permalink to &quot;31、如何判断一个常量是废弃常量 ？&quot;">​</a></h3><h3 id="_32、synchronized关键字的用法" tabindex="-1">32、synchronized关键字的用法？ <a class="header-anchor" href="#_32、synchronized关键字的用法" aria-label="Permalink to &quot;32、synchronized关键字的用法？&quot;">​</a></h3><h3 id="_33、面向对象和面向过程的区别" tabindex="-1">33、面向对象和面向过程的区别 <a class="header-anchor" href="#_33、面向对象和面向过程的区别" aria-label="Permalink to &quot;33、面向对象和面向过程的区别&quot;">​</a></h3><h3 id="_34、在使用jdbc的时候-如何防止出现sql注入的问题。" tabindex="-1">34、在使用jdbc的时候，如何防止出现sql注入的问题。 <a class="header-anchor" href="#_34、在使用jdbc的时候-如何防止出现sql注入的问题。" aria-label="Permalink to &quot;34、在使用jdbc的时候，如何防止出现sql注入的问题。&quot;">​</a></h3><h3 id="_35、介绍一下类文件结构吧" tabindex="-1">35、介绍一下类文件结构吧！ <a class="header-anchor" href="#_35、介绍一下类文件结构吧" aria-label="Permalink to &quot;35、介绍一下类文件结构吧！&quot;">​</a></h3><h3 id="_36、字符串常量存放在哪个区域" tabindex="-1">36、字符串常量存放在哪个区域？ <a class="header-anchor" href="#_36、字符串常量存放在哪个区域" aria-label="Permalink to &quot;36、字符串常量存放在哪个区域？&quot;">​</a></h3><h3 id="_37、什么是多线程环境下的伪共享-false-sharing" tabindex="-1">37、什么是多线程环境下的伪共享（false sharing）？ <a class="header-anchor" href="#_37、什么是多线程环境下的伪共享-false-sharing" aria-label="Permalink to &quot;37、什么是多线程环境下的伪共享（false sharing）？&quot;">​</a></h3><h3 id="_38、编写多线程程序有几种实现方式" tabindex="-1">38、编写多线程程序有几种实现方式？ <a class="header-anchor" href="#_38、编写多线程程序有几种实现方式" aria-label="Permalink to &quot;38、编写多线程程序有几种实现方式？&quot;">​</a></h3><h3 id="_39、例如-if-a-1-0-4-0-这样做好吗" tabindex="-1">39、例如： if(a+1.0=4.0)，这样做好吗？ <a class="header-anchor" href="#_39、例如-if-a-1-0-4-0-这样做好吗" aria-label="Permalink to &quot;39、例如： if(a+1.0=4.0)，这样做好吗？&quot;">​</a></h3><h3 id="_40、get请求与post有什么区别" tabindex="-1">40、Get请求与post有什么区别？ <a class="header-anchor" href="#_40、get请求与post有什么区别" aria-label="Permalink to &quot;40、Get请求与post有什么区别？&quot;">​</a></h3>`,133),o=[p];function c(t,r,i,f,y,d){return a(),n("div",null,o)}const E=s(e,[["render",c]]);export{h as __pageData,E as default};
