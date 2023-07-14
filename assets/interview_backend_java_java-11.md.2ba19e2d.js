import{_ as a,o as s,c as n,V as e}from"./chunks/framework.c6d8cbec.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/java/java-11.md","filePath":"interview/backend/java/java-11.md"}'),l={name:"interview/backend/java/java-11.md"},t=e(`<h3 id="_1、什么是-依赖注入-和-控制反转-为什么有人使用" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C2021%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#1%E4%BB%80%E4%B9%88%E6%98%AF%E2%80%9C%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5%E5%92%8C%E2%80%9C%E6%8E%A7%E5%88%B6%E5%8F%8D%E8%BD%AC%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%89%E4%BA%BA%E4%BD%BF%E7%94%A8" target="_blank" rel="noreferrer">1、什么是“依赖注入”和“控制反转”？为什么有人使用？</a> <a class="header-anchor" href="#_1、什么是-依赖注入-和-控制反转-为什么有人使用" aria-label="Permalink to &quot;[1、什么是“依赖注入”和“控制反转”？为什么有人使用？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java面试题大汇总，2021面试题及答案汇总.md#1什么是“依赖注入和“控制反转为什么有人使用)&quot;">​</a></h3><p>控制反转（IOC）是Spring框架的核心思想，用我自己的话说，就是你要做一件事，别自己可劲new了，你就说你要干啥，然后外包出去就好~</p><p>依赖注入（DI） 在我浅薄的想法中，就是通过接口的引用和构造方法的表达，将一些事情整好了反过来传给需要用到的地方~</p><h3 id="_2、arraylist-和-linkedlist-的区别是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C2021%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#2arraylist-%E5%92%8C-linkedlist-%E7%9A%84%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">2、ArrayList 和 LinkedList 的区别是什么？</a> <a class="header-anchor" href="#_2、arraylist-和-linkedlist-的区别是什么" aria-label="Permalink to &quot;[2、ArrayList 和 LinkedList 的区别是什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java面试题大汇总，2021面试题及答案汇总.md#2arraylist-和-linkedlist-的区别是什么)&quot;">​</a></h3><p><strong>1、</strong> 数据结构实现：ArrayList 是动态数组的数据结构实现，而 LinkedList 是双向链表的数据结构实现。</p><p><strong>2、</strong> 随机访问效率：ArrayList 比 LinkedList 在随机访问的时候效率要高，因为 LinkedList 是线性的数据存储方式，所以需要移动指针从前往后依次查找。</p><p><strong>3、</strong> 增加和删除效率：在非首尾的增加和删除操作，LinkedList 要比 ArrayList 效率要高，因为 ArrayList 增删操作要影响数组内的其他数据的下标。</p><p><strong>4、</strong> 内存空间占用：LinkedList 比 ArrayList 更占内存，因为 LinkedList 的节点除了存储数据，还存储了两个引用，一个指向前一个元素，一个指向后一个元素。</p><p><strong>5、</strong> 线程安全：ArrayList 和 LinkedList 都是不同步的，也就是不保证线程安全；</p><p><strong>6、</strong> 综合来说，在需要频繁读取集合中的元素时，更推荐使用 ArrayList，而在插入和删除操作较多时，更推荐使用 LinkedList。</p><p><strong>7、</strong> LinkedList 的双向链表也叫双链表，是链表的一种，它的每个数据结点中都有两个指针，分别指向直接后继和直接前驱。所以，从双向链表中的任意一个结点开始，都可以很方便地访问它的前驱结点和后继结点。</p><h3 id="_3、观察者模式应用场景" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C2021%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#3%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF" target="_blank" rel="noreferrer">3、观察者模式应用场景</a> <a class="header-anchor" href="#_3、观察者模式应用场景" aria-label="Permalink to &quot;[3、观察者模式应用场景](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java面试题大汇总，2021面试题及答案汇总.md#3观察者模式应用场景)&quot;">​</a></h3><p><strong>1、</strong> 关联行为场景，需要注意的是，关联行为是可拆分的，而不是“组合”关系。事件多级触发场景。</p><p><strong>2、</strong> 跨系统的消息交换场景，如消息队列、事件总线的处理机制。</p><ul><li>代码演示</li></ul><p><strong>1、</strong> 定义抽象观察者，每一个实现该接口的实现类都是具体观察者。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">package com.lijie;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">//观察者的接口，用来存放观察者共有方法</span></span>
<span class="line"><span style="color:#f6f6f4;">public interface Observer {</span></span>
<span class="line"><span style="color:#f6f6f4;">    // 观察者方法</span></span>
<span class="line"><span style="color:#f6f6f4;">    void update(int state);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package com.lijie;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//观察者的接口，用来存放观察者共有方法</span></span>
<span class="line"><span style="color:#24292e;">public interface Observer {</span></span>
<span class="line"><span style="color:#24292e;">    // 观察者方法</span></span>
<span class="line"><span style="color:#24292e;">    void update(int state);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>2、</strong> 定义具体观察者</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">package com.lijie;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">// 具体观察者</span></span>
<span class="line"><span style="color:#f6f6f4;">public class ObserverImpl implements Observer {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    // 具体观察者的属性</span></span>
<span class="line"><span style="color:#f6f6f4;">    private int myState;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public void update(int state) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        myState=state;</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;收到消息,myState值改为：&quot;+state);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public int getMyState() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return myState;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package com.lijie;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 具体观察者</span></span>
<span class="line"><span style="color:#24292e;">public class ObserverImpl implements Observer {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 具体观察者的属性</span></span>
<span class="line"><span style="color:#24292e;">    private int myState;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public void update(int state) {</span></span>
<span class="line"><span style="color:#24292e;">        myState=state;</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;收到消息,myState值改为：&quot;+state);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public int getMyState() {</span></span>
<span class="line"><span style="color:#24292e;">        return myState;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>3、</strong> 定义主题。主题定义观察者数组，并实现增、删及通知操作。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">package com.lijie;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">import java.util.Vector;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">//定义主题，以及定义观察者数组，并实现增、删及通知操作。</span></span>
<span class="line"><span style="color:#f6f6f4;">public class Subjecct {</span></span>
<span class="line"><span style="color:#f6f6f4;">    //观察者的存储集合，不推荐ArrayList，线程不安全，</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Vector&lt;Observer&gt; list = new Vector&lt;&gt;();</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    // 注册观察者方法</span></span>
<span class="line"><span style="color:#f6f6f4;">    public void registerObserver(Observer obs) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        list.add(obs);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    // 删除观察者方法</span></span>
<span class="line"><span style="color:#f6f6f4;">    public void removeObserver(Observer obs) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        list.remove(obs);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    // 通知所有的观察者更新</span></span>
<span class="line"><span style="color:#f6f6f4;">    public void notifyAllObserver(int state) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        for (Observer observer : list) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            observer.update(state);</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package com.lijie;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">import java.util.Vector;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//定义主题，以及定义观察者数组，并实现增、删及通知操作。</span></span>
<span class="line"><span style="color:#24292e;">public class Subjecct {</span></span>
<span class="line"><span style="color:#24292e;">    //观察者的存储集合，不推荐ArrayList，线程不安全，</span></span>
<span class="line"><span style="color:#24292e;">    private Vector&lt;Observer&gt; list = new Vector&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 注册观察者方法</span></span>
<span class="line"><span style="color:#24292e;">    public void registerObserver(Observer obs) {</span></span>
<span class="line"><span style="color:#24292e;">        list.add(obs);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    // 删除观察者方法</span></span>
<span class="line"><span style="color:#24292e;">    public void removeObserver(Observer obs) {</span></span>
<span class="line"><span style="color:#24292e;">        list.remove(obs);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 通知所有的观察者更新</span></span>
<span class="line"><span style="color:#24292e;">    public void notifyAllObserver(int state) {</span></span>
<span class="line"><span style="color:#24292e;">        for (Observer observer : list) {</span></span>
<span class="line"><span style="color:#24292e;">            observer.update(state);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>4、</strong> 定义具体的，他继承继承Subject类，在这里实现具体业务，在具体项目中，该类会有很多。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">package com.lijie;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">//具体主题</span></span>
<span class="line"><span style="color:#f6f6f4;">public class RealObserver extends Subjecct {</span></span>
<span class="line"><span style="color:#f6f6f4;">    //被观察对象的属性</span></span>
<span class="line"><span style="color:#f6f6f4;">     private int state;</span></span>
<span class="line"><span style="color:#f6f6f4;">     public int getState(){</span></span>
<span class="line"><span style="color:#f6f6f4;">         return state;</span></span>
<span class="line"><span style="color:#f6f6f4;">     }</span></span>
<span class="line"><span style="color:#f6f6f4;">     public void  setState(int state){</span></span>
<span class="line"><span style="color:#f6f6f4;">         this.state=state;</span></span>
<span class="line"><span style="color:#f6f6f4;">         //主题对象(目标对象)值发生改变</span></span>
<span class="line"><span style="color:#f6f6f4;">         this.notifyAllObserver(state);</span></span>
<span class="line"><span style="color:#f6f6f4;">     }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package com.lijie;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//具体主题</span></span>
<span class="line"><span style="color:#24292e;">public class RealObserver extends Subjecct {</span></span>
<span class="line"><span style="color:#24292e;">    //被观察对象的属性</span></span>
<span class="line"><span style="color:#24292e;">     private int state;</span></span>
<span class="line"><span style="color:#24292e;">     public int getState(){</span></span>
<span class="line"><span style="color:#24292e;">         return state;</span></span>
<span class="line"><span style="color:#24292e;">     }</span></span>
<span class="line"><span style="color:#24292e;">     public void  setState(int state){</span></span>
<span class="line"><span style="color:#24292e;">         this.state=state;</span></span>
<span class="line"><span style="color:#24292e;">         //主题对象(目标对象)值发生改变</span></span>
<span class="line"><span style="color:#24292e;">         this.notifyAllObserver(state);</span></span>
<span class="line"><span style="color:#24292e;">     }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>5、</strong> 运行测试</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">package com.lijie;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">public class Client {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        // 目标对象</span></span>
<span class="line"><span style="color:#f6f6f4;">        RealObserver subject = new RealObserver();</span></span>
<span class="line"><span style="color:#f6f6f4;">        // 创建多个观察者</span></span>
<span class="line"><span style="color:#f6f6f4;">        ObserverImpl obs1 = new ObserverImpl();</span></span>
<span class="line"><span style="color:#f6f6f4;">        ObserverImpl obs2 = new ObserverImpl();</span></span>
<span class="line"><span style="color:#f6f6f4;">        ObserverImpl obs3 = new ObserverImpl();</span></span>
<span class="line"><span style="color:#f6f6f4;">        // 注册到观察队列中</span></span>
<span class="line"><span style="color:#f6f6f4;">        subject.registerObserver(obs1);</span></span>
<span class="line"><span style="color:#f6f6f4;">        subject.registerObserver(obs2);</span></span>
<span class="line"><span style="color:#f6f6f4;">        subject.registerObserver(obs3);</span></span>
<span class="line"><span style="color:#f6f6f4;">        // 改变State状态</span></span>
<span class="line"><span style="color:#f6f6f4;">        subject.setState(300);</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;obs1观察者的MyState状态值为：&quot;+obs1.getMyState());</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;obs2观察者的MyState状态值为：&quot;+obs2.getMyState());</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;obs3观察者的MyState状态值为：&quot;+obs3.getMyState());</span></span>
<span class="line"><span style="color:#f6f6f4;">        // 改变State状态</span></span>
<span class="line"><span style="color:#f6f6f4;">        subject.setState(400);</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;obs1观察者的MyState状态值为：&quot;+obs1.getMyState());</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;obs2观察者的MyState状态值为：&quot;+obs2.getMyState());</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;obs3观察者的MyState状态值为：&quot;+obs3.getMyState());</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package com.lijie;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public class Client {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        // 目标对象</span></span>
<span class="line"><span style="color:#24292e;">        RealObserver subject = new RealObserver();</span></span>
<span class="line"><span style="color:#24292e;">        // 创建多个观察者</span></span>
<span class="line"><span style="color:#24292e;">        ObserverImpl obs1 = new ObserverImpl();</span></span>
<span class="line"><span style="color:#24292e;">        ObserverImpl obs2 = new ObserverImpl();</span></span>
<span class="line"><span style="color:#24292e;">        ObserverImpl obs3 = new ObserverImpl();</span></span>
<span class="line"><span style="color:#24292e;">        // 注册到观察队列中</span></span>
<span class="line"><span style="color:#24292e;">        subject.registerObserver(obs1);</span></span>
<span class="line"><span style="color:#24292e;">        subject.registerObserver(obs2);</span></span>
<span class="line"><span style="color:#24292e;">        subject.registerObserver(obs3);</span></span>
<span class="line"><span style="color:#24292e;">        // 改变State状态</span></span>
<span class="line"><span style="color:#24292e;">        subject.setState(300);</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;obs1观察者的MyState状态值为：&quot;+obs1.getMyState());</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;obs2观察者的MyState状态值为：&quot;+obs2.getMyState());</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;obs3观察者的MyState状态值为：&quot;+obs3.getMyState());</span></span>
<span class="line"><span style="color:#24292e;">        // 改变State状态</span></span>
<span class="line"><span style="color:#24292e;">        subject.setState(400);</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;obs1观察者的MyState状态值为：&quot;+obs1.getMyState());</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;obs2观察者的MyState状态值为：&quot;+obs2.getMyState());</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;obs3观察者的MyState状态值为：&quot;+obs3.getMyState());</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="_4、array与arraylist有什么不一样" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C2021%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#4array%E4%B8%8Earraylist%E6%9C%89%E4%BB%80%E4%B9%88%E4%B8%8D%E4%B8%80%E6%A0%B7" target="_blank" rel="noreferrer">4、Array与ArrayList有什么不一样？</a> <a class="header-anchor" href="#_4、array与arraylist有什么不一样" aria-label="Permalink to &quot;[4、Array与ArrayList有什么不一样？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java面试题大汇总，2021面试题及答案汇总.md#4array与arraylist有什么不一样)&quot;">​</a></h3><p>Array与ArrayList都是用来存储数据的集合。ArrayList底层是使用数组实现的，但是arrayList对数组进行了封装和功能扩展，拥有许多原生数组没有的一些功能。我们可以理解成ArrayList是Array的一个升级版。</p><h3 id="_5、实例化数组后-能不能改变数组长度呢" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C2021%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#5%E5%AE%9E%E4%BE%8B%E5%8C%96%E6%95%B0%E7%BB%84%E5%90%8E%E8%83%BD%E4%B8%8D%E8%83%BD%E6%94%B9%E5%8F%98%E6%95%B0%E7%BB%84%E9%95%BF%E5%BA%A6%E5%91%A2" target="_blank" rel="noreferrer">5、实例化数组后，能不能改变数组长度呢？</a> <a class="header-anchor" href="#_5、实例化数组后-能不能改变数组长度呢" aria-label="Permalink to &quot;[5、实例化数组后，能不能改变数组长度呢？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java面试题大汇总，2021面试题及答案汇总.md#5实例化数组后能不能改变数组长度呢)&quot;">​</a></h3><p>不能，数组一旦实例化，它的长度就是固定的</p><h3 id="_6、java-中-maven-和-ant-有什么区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C2021%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#6java-%E4%B8%ADmaven-%E5%92%8C-ant-%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">6、Java 中，Maven 和 ANT 有什么区别？</a> <a class="header-anchor" href="#_6、java-中-maven-和-ant-有什么区别" aria-label="Permalink to &quot;[6、Java 中，Maven 和 ANT 有什么区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java面试题大汇总，2021面试题及答案汇总.md#6java-中maven-和-ant-有什么区别)&quot;">​</a></h3><p>虽然两者都是构建工具，都用于创建 Java 应用，但是 Maven 做的事情更多，在基于“约定优于配置”的概念下，提供标准的Java 项目结构，同时能为应用自动管理依赖（应用中所依赖的 JAR 文件），Maven 与 ANT 工具更多的不同之处请参见。</p><p><strong>1、</strong> 这就是所有的面试题，如此之多，是不是？我可以保证，如果你能回答列表中的所有问题，你就可以很轻松的应付任何核心 Java 或者高级 Java 面试。虽然，这里没有涵盖 Servlet、JSP、JSF、JPA，JMS，EJB 及其它 Java EE 技术，也没有包含主流的框架如 Spring MVC，Struts 2.0，Hibernate，也没有包含 SOAP 和 RESTful web service，但是这份列表对做 Java 开发的、准备应聘 Java web 开发职位的人还是同样有用的，因为所有的 Java 面试，开始的问题都是 Java 基础和 JDK API 相关的。如果你认为我这里有任何应该在这份列表中而被我遗漏了的 Java 流行的问题，你可以自由的给我建议。我的目的是从最近的面试中创建一份最新的、最优的 Java 面试问题列表。</p><h3 id="_7、方法区的作用是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C2021%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#7%E6%96%B9%E6%B3%95%E5%8C%BA%E7%9A%84%E4%BD%9C%E7%94%A8%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">7、方法区的作用是什么？</a> <a class="header-anchor" href="#_7、方法区的作用是什么" aria-label="Permalink to &quot;[7、方法区的作用是什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java面试题大汇总，2021面试题及答案汇总.md#7方法区的作用是什么)&quot;">​</a></h3><p><strong>方法区</strong>用于存储被虚拟机加载的类型信息、常量、静态变量、即时编译器编译后的代码缓存等数据。</p><p>JDK8 之前使用永久代实现方法区，容易内存溢出，因为永久代有 <code>-XX:MaxPermSize</code> 上限，即使不设置也有默认大小。JDK7 把放在永久代的字符串常量池、静态变量等移出，JDK8 中永久代完全废弃，改用在本地内存中实现的元空间代替，把 JDK 7 中永久代剩余内容（主要是类型信息）全部移到元空间。</p><p>虚拟机规范对方法区的约束宽松，除和堆一样不需要连续内存和可选择固定大小/可扩展外，还可以不实现垃圾回收。垃圾回收在方法区出现较少，主要目标针对常量池和类型卸载。如果方法区无法满足新的内存分配需求，将抛出 OutOfMemoryError。</p><h3 id="_8、接口和抽象类有什么区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C2021%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#8%E6%8E%A5%E5%8F%A3%E5%92%8C%E6%8A%BD%E8%B1%A1%E7%B1%BB%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">8、接口和抽象类有什么区别？</a> <a class="header-anchor" href="#_8、接口和抽象类有什么区别" aria-label="Permalink to &quot;[8、接口和抽象类有什么区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java面试题大汇总，2021面试题及答案汇总.md#8接口和抽象类有什么区别)&quot;">​</a></h3><p>实现：抽象类的子类使用 extends 来继承；接口必须使用 implements 来实现接口。 构造函数：抽象类可以有构造函数；接口不能有。 main 方法：抽象类可以有 main 方法，并且我们能运行它；接口不能有 main 方法。 实现数量：类可以实现很多个接口；但是只能继承一个抽象类。 访问修饰符：接口中的方法默认使用 public 修饰；抽象类中的方法可以是任意访问修饰符。</p><h3 id="_9、原型模式的应用场景" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C2021%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#9%E5%8E%9F%E5%9E%8B%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF" target="_blank" rel="noreferrer">9、原型模式的应用场景</a> <a class="header-anchor" href="#_9、原型模式的应用场景" aria-label="Permalink to &quot;[9、原型模式的应用场景](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java面试题大汇总，2021面试题及答案汇总.md#9原型模式的应用场景)&quot;">​</a></h3><p><strong>1、</strong> 类初始化需要消化非常多的资源，这个资源包括数据、硬件资源等。这时我们就可以通过原型拷贝避免这些消耗。</p><p><strong>2、</strong> 通过new产生的一个对象需要非常繁琐的数据准备或者权限，这时可以使用原型模式。</p><p><strong>3、</strong> 一个对象需要提供给其他对象访问，而且各个调用者可能都需要修改其值时，可以考虑使用原型模式拷贝多个对象供调用者使用，即保护性拷贝。</p><p>我们Spring框架中的多例就是使用原型</p><h3 id="_10、concurrenthashmap-和-hashtable-的区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C2021%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#10concurrenthashmap-%E5%92%8C-hashtable-%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">10、ConcurrentHashMap 和 Hashtable 的区别？</a> <a class="header-anchor" href="#_10、concurrenthashmap-和-hashtable-的区别" aria-label="Permalink to &quot;[10、ConcurrentHashMap 和 Hashtable 的区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java面试题大汇总，2021面试题及答案汇总.md#10concurrenthashmap-和-hashtable-的区别)&quot;">​</a></h3><p>ConcurrentHashMap 和 Hashtable 的区别主要体现在实现线程安全的方式上不同。</p><p><strong>底层数据结构</strong>：</p><p>JDK1.7的 ConcurrentHashMap 底层采用 <strong>分段的数组+链表</strong> 实现，JDK1.8 采用的数据结构跟HashMap1.8的结构一样，数组+链表/红黑二叉树。Hashtable 和 JDK1.8 之前的 HashMap 的底层数据结构类似都是采用 <strong>数组+链表</strong>的形式，数组是 HashMap 的主体，链表则是主要为了解决哈希冲突而存在的；</p><p><strong>实现线程安全的方式</strong>：</p><p><strong>1、</strong> 在JDK1.7的时候，ConcurrentHashMap（分段锁对整个桶数组进行了分割分段(Segment)，每一把锁只锁容器其中一部分数据，多线程访问容器里不同数据段的数据，就不会存在锁竞争，提高并发访问率。（默认分配16个Segment，比Hashtable效率提高16倍。） <strong>到了 JDK1.8 的时候已经摒弃了Segment的概念，而是直接用 Node 数组+链表+红黑树的数据结构来实现，并发控制使用 synchronized 和 CAS 来操作。（JDK1.6以后 对 synchronized锁做了很多优化）</strong> 整个看起来就像是优化过且线程安全的 HashMap，虽然在JDK1.8中还能看到 Segment 的数据结构，但是已经简化了属性，只是为了兼容旧版本；</p><p><strong>2、</strong> <strong>Hashtable(同一把锁)</strong> :使用 synchronized 来保证线程安全，效率非常低下。当一个线程访问同步方法时，其他线程也访问同步方法，可能会进入阻塞或轮询状态，如使用 put 添加元素，另一个线程不能使用 put 添加元素，也不能使用 get，竞争会越来越激烈效率越低。</p><p><strong>两者的对比图</strong>：</p><p><strong>1、</strong> HashTable</p><p><img src="https://gitee.com/souyunkutech/souyunku-home/raw/master/images/souyunku-web/2020/5/2/056/58/114_10.png#alt=114%5C_10.png" alt=""></p><p><strong>2、</strong> JDK1.7的ConcurrentHashMap</p><p><img src="https://gitee.com/souyunkutech/souyunku-home/raw/master/images/souyunku-web/2020/5/2/056/58/114_11.png#alt=114%5C_11.png" alt=""></p><p><strong>3、</strong> JDK1.8的ConcurrentHashMap（TreeBin: 红黑二叉树节点 Node: 链表节点）</p><p><img src="https://gitee.com/souyunkutech/souyunku-home/raw/master/images/souyunku-web/2020/5/2/056/58/114_12.png#alt=114%5C_12.png" alt=""></p><p>ConcurrentHashMap 结合了 HashMap 和 HashTable 二者的优势。HashMap 没有考虑同步，HashTable 考虑了同步的问题使用了synchronized 关键字，所以 HashTable 在每次同步执行时都要锁住整个结构。 ConcurrentHashMap 锁的方式是稍微细粒度的。</p><h3 id="_11、线上常用的-jvm-参数有哪些" tabindex="-1">11、线上常用的 JVM 参数有哪些？ <a class="header-anchor" href="#_11、线上常用的-jvm-参数有哪些" aria-label="Permalink to &quot;11、线上常用的 JVM 参数有哪些？&quot;">​</a></h3><h3 id="_12、什么是并发容器的实现" tabindex="-1">12、什么是并发容器的实现？ <a class="header-anchor" href="#_12、什么是并发容器的实现" aria-label="Permalink to &quot;12、什么是并发容器的实现？&quot;">​</a></h3><h3 id="_13、在java中wait和sleep方法的不同" tabindex="-1">13、在java中wait和sleep方法的不同？ <a class="header-anchor" href="#_13、在java中wait和sleep方法的不同" aria-label="Permalink to &quot;13、在java中wait和sleep方法的不同？&quot;">​</a></h3><h3 id="_14、当一个线程进入一个对象的synchronized方法a之后-其它线程是否可进入此对象的synchronized方法b" tabindex="-1">14、当一个线程进入一个对象的synchronized方法A之后，其它线程是否可进入此对象的synchronized方法B？ <a class="header-anchor" href="#_14、当一个线程进入一个对象的synchronized方法a之后-其它线程是否可进入此对象的synchronized方法b" aria-label="Permalink to &quot;14、当一个线程进入一个对象的synchronized方法A之后，其它线程是否可进入此对象的synchronized方法B？&quot;">​</a></h3><h3 id="_15、谈谈动态年龄判断" tabindex="-1">15、谈谈动态年龄判断 <a class="header-anchor" href="#_15、谈谈动态年龄判断" aria-label="Permalink to &quot;15、谈谈动态年龄判断&quot;">​</a></h3><h3 id="_16、什么是-callable-和-future" tabindex="-1">16、什么是 Callable 和 Future? <a class="header-anchor" href="#_16、什么是-callable-和-future" aria-label="Permalink to &quot;16、什么是 Callable 和 Future?&quot;">​</a></h3><h3 id="_17、jsp包含那些隐藏对象或者内建对象" tabindex="-1">17、Jsp包含那些隐藏对象或者内建对象 <a class="header-anchor" href="#_17、jsp包含那些隐藏对象或者内建对象" aria-label="Permalink to &quot;17、Jsp包含那些隐藏对象或者内建对象&quot;">​</a></h3><h3 id="_18、什么是集合" tabindex="-1">18、什么是集合 <a class="header-anchor" href="#_18、什么是集合" aria-label="Permalink to &quot;18、什么是集合&quot;">​</a></h3><h3 id="_19、常见的计算机网络协议有那些" tabindex="-1">19、常见的计算机网络协议有那些？ <a class="header-anchor" href="#_19、常见的计算机网络协议有那些" aria-label="Permalink to &quot;19、常见的计算机网络协议有那些？&quot;">​</a></h3><h3 id="_20、两个对象的-hashcode-相同-则-equals-也一定为-true-对吗" tabindex="-1">20、两个对象的 hashCode()相同，则 equals()也一定为 true，对吗？ <a class="header-anchor" href="#_20、两个对象的-hashcode-相同-则-equals-也一定为-true-对吗" aria-label="Permalink to &quot;20、两个对象的 hashCode()相同，则 equals()也一定为 true，对吗？&quot;">​</a></h3><h3 id="_21、为什么要使用并发编程" tabindex="-1">21、为什么要使用并发编程 <a class="header-anchor" href="#_21、为什么要使用并发编程" aria-label="Permalink to &quot;21、为什么要使用并发编程&quot;">​</a></h3><h3 id="_22、什么是线程调度器-thread-scheduler-和时间分片-time-slicing" tabindex="-1">22、什么是线程调度器(Thread Scheduler)和时间分片(Time Slicing )？ <a class="header-anchor" href="#_22、什么是线程调度器-thread-scheduler-和时间分片-time-slicing" aria-label="Permalink to &quot;22、什么是线程调度器(Thread Scheduler)和时间分片(Time Slicing )？&quot;">​</a></h3><h3 id="_23、怎么检查一个字符串只包含数字-解决方案" tabindex="-1">23、怎么检查一个字符串只包含数字？解决方案 <a class="header-anchor" href="#_23、怎么检查一个字符串只包含数字-解决方案" aria-label="Permalink to &quot;23、怎么检查一个字符串只包含数字？解决方案&quot;">​</a></h3><h3 id="_24、java-中怎么打印数组" tabindex="-1">24、Java 中怎么打印数组？ <a class="header-anchor" href="#_24、java-中怎么打印数组" aria-label="Permalink to &quot;24、Java 中怎么打印数组？&quot;">​</a></h3><h3 id="_25、java-强引用" tabindex="-1">25、JAVA 强引用 <a class="header-anchor" href="#_25、java-强引用" aria-label="Permalink to &quot;25、JAVA 强引用&quot;">​</a></h3><h3 id="_26、请解释将tomcat作为一个windows-服务运行会带来哪些好处" tabindex="-1">26、请解释将Tomcat作为一个Windows 服务运行会带来哪些好处? <a class="header-anchor" href="#_26、请解释将tomcat作为一个windows-服务运行会带来哪些好处" aria-label="Permalink to &quot;26、请解释将Tomcat作为一个Windows 服务运行会带来哪些好处?&quot;">​</a></h3><h3 id="_27、synchronized-和-volatile-的区别是什么" tabindex="-1">27、synchronized 和 volatile 的区别是什么？ <a class="header-anchor" href="#_27、synchronized-和-volatile-的区别是什么" aria-label="Permalink to &quot;27、synchronized 和 volatile 的区别是什么？&quot;">​</a></h3><h3 id="_28、上传文件是如何做的" tabindex="-1">28、上传文件是如何做的？ <a class="header-anchor" href="#_28、上传文件是如何做的" aria-label="Permalink to &quot;28、上传文件是如何做的？&quot;">​</a></h3><h3 id="_29、页面前进或者后退" tabindex="-1">29、页面前进或者后退 <a class="header-anchor" href="#_29、页面前进或者后退" aria-label="Permalink to &quot;29、页面前进或者后退&quot;">​</a></h3><h3 id="_30、多线程的好处" tabindex="-1">30、多线程的好处 <a class="header-anchor" href="#_30、多线程的好处" aria-label="Permalink to &quot;30、多线程的好处&quot;">​</a></h3><h3 id="_31、你知道哪些内存分配与回收策略" tabindex="-1">31、你知道哪些内存分配与回收策略？ <a class="header-anchor" href="#_31、你知道哪些内存分配与回收策略" aria-label="Permalink to &quot;31、你知道哪些内存分配与回收策略？&quot;">​</a></h3><h3 id="_32、常用io类有那些" tabindex="-1">32、常用io类有那些？ <a class="header-anchor" href="#_32、常用io类有那些" aria-label="Permalink to &quot;32、常用io类有那些？&quot;">​</a></h3><h3 id="_33、43-将下java中的math类有那些常用方法" tabindex="-1">33、43.将下java中的math类有那些常用方法？ <a class="header-anchor" href="#_33、43-将下java中的math类有那些常用方法" aria-label="Permalink to &quot;33、43.将下java中的math类有那些常用方法？&quot;">​</a></h3><h3 id="_34、描述一下什么情况下-对象会从年轻代进入老年代" tabindex="-1">34、描述一下什么情况下，对象会从年轻代进入老年代 <a class="header-anchor" href="#_34、描述一下什么情况下-对象会从年轻代进入老年代" aria-label="Permalink to &quot;34、描述一下什么情况下，对象会从年轻代进入老年代&quot;">​</a></h3><h3 id="_35、jvm-的内存模型是什么" tabindex="-1">35、JVM 的内存模型是什么？ <a class="header-anchor" href="#_35、jvm-的内存模型是什么" aria-label="Permalink to &quot;35、JVM 的内存模型是什么？&quot;">​</a></h3><h3 id="_36、query接口的list方法和iterate方法有什么区别" tabindex="-1">36、Query接口的list方法和iterate方法有什么区别？ <a class="header-anchor" href="#_36、query接口的list方法和iterate方法有什么区别" aria-label="Permalink to &quot;36、Query接口的list方法和iterate方法有什么区别？&quot;">​</a></h3><h3 id="_37、什么是方法内联" tabindex="-1">37、什么是方法内联？ <a class="header-anchor" href="#_37、什么是方法内联" aria-label="Permalink to &quot;37、什么是方法内联？&quot;">​</a></h3><h3 id="_38、线程类的构造方法、静态块是被哪个线程调用的" tabindex="-1">38、线程类的构造方法、静态块是被哪个线程调用的 <a class="header-anchor" href="#_38、线程类的构造方法、静态块是被哪个线程调用的" aria-label="Permalink to &quot;38、线程类的构造方法、静态块是被哪个线程调用的&quot;">​</a></h3><h3 id="_39、你将如何使用thread-dump-你将如何分析thread-dump" tabindex="-1">39、你将如何使用thread dump？你将如何分析Thread dump？ <a class="header-anchor" href="#_39、你将如何使用thread-dump-你将如何分析thread-dump" aria-label="Permalink to &quot;39、你将如何使用thread dump？你将如何分析Thread dump？&quot;">​</a></h3><h3 id="_40、线程池作用" tabindex="-1">40、线程池作用？ <a class="header-anchor" href="#_40、线程池作用" aria-label="Permalink to &quot;40、线程池作用？&quot;">​</a></h3>`,88),p=[t];function o(r,c,i,h,f,u){return s(),n("div",null,p)}const b=a(l,[["render",o]]);export{y as __pageData,b as default};
