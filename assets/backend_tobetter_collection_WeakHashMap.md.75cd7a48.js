import{_ as s,o as a,c as n,V as l}from"./chunks/framework.c6d8cbec.js";const u=JSON.parse('{"title":"Java WeakHashMap详解（附源码分析）","description":"Java程序员进阶之路，小白的零基础Java教程，Java WeakHashMap详解（附源码分析）","frontmatter":{"title":"Java WeakHashMap详解（附源码分析）","shortTitle":"详解WeakHashMap","category":["Java核心"],"tag":["集合框架（容器）"],"description":"Java程序员进阶之路，小白的零基础Java教程，Java WeakHashMap详解（附源码分析）","head":[["meta",{"name":"keywords","content":"Java,Java SE,Java基础,Java教程,Java程序员进阶之路,Java进阶之路,Java入门,教程,WeakHashMap"}]]},"headers":[],"relativePath":"backend/tobetter/collection/WeakHashMap.md","filePath":"backend/tobetter/collection/WeakHashMap.md"}'),p={name:"backend/tobetter/collection/WeakHashMap.md"},o=l(`<p>在Java中，我们一般都会使用到Map，比如<a href="https://tobebetterjavaer.com/collection/hashmap.html" target="_blank" rel="noreferrer">HashMap</a>这样的具体实现。更高级一点，我们可能会使用WeakHashMap。</p><p>WeakHashMap其实和HashMap大多数行为是一样的，只是WeakHashMap不会阻止GC回收key对象（不是value），那么WeakHashMap是怎么做到的呢，这就是我们研究的主要问题。</p><p>在开始WeakHashMap之前，我们先要对弱引用有一定的了解。</p><p>在Java中，有四种引用类型</p><ul><li>强引用(Strong Reference)，我们正常编码时默认的引用类型，强应用之所以为强，是因为如果一个对象到GC Roots强引用可到达，就可以阻止GC回收该对象</li><li>软引用（Soft Reference）阻止GC回收的能力相对弱一些，如果是软引用可以到达，那么这个对象会停留在内存更时间上长一些。当内存不足时垃圾回收器才会回收这些软引用可到达的对象</li><li>弱引用（WeakReference）无法阻止GC回收，如果一个对象时弱引用可到达，那么在下一个GC回收执行时，该对象就会被回收掉。</li><li>虚引用（Phantom Reference）十分脆弱，它的唯一作用就是当其指向的对象被回收之后，自己被加入到引用队列，用作记录该引用指向的对象已被销毁</li></ul><p>这其中还有一个概念叫做引用队列(Reference Queue)</p><ul><li>一般情况下，一个对象标记为垃圾（并不代表回收了）后，会加入到引用队列。</li><li>对于虚引用来说，它指向的对象会只有被回收后才会加入引用队列，所以可以用作记录该引用指向的对象是否回收。</li></ul><h2 id="weakhashmap如何不阻止对象回收呢" tabindex="-1">WeakHashMap如何不阻止对象回收呢 <a class="header-anchor" href="#weakhashmap如何不阻止对象回收呢" aria-label="Permalink to &quot;WeakHashMap如何不阻止对象回收呢&quot;">​</a></h2><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">private</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">static</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">final</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Entry</span><span style="color:#F6F6F4;">&lt;K, V&gt; </span><span style="color:#F286C4;">extends</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">WeakReference</span><span style="color:#F6F6F4;">&lt;K&gt; </span><span style="color:#F286C4;">implements</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#97E1F1;font-style:italic;">Map.Entry</span><span style="color:#F6F6F4;">&lt;K, V&gt; {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> hash;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#97E1F1;font-style:italic;">boolean</span><span style="color:#F6F6F4;"> isNull;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#97E1F1;font-style:italic;">V</span><span style="color:#F6F6F4;"> value;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#97E1F1;font-style:italic;">Entry</span><span style="color:#F6F6F4;">&lt;K, V&gt; next;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">interface</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Type</span><span style="color:#F6F6F4;">&lt;R, K, V&gt; {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#97E1F1;font-style:italic;">R</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">get</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">Map</span><span style="color:#F6F6F4;">.</span><span style="color:#97E1F1;font-style:italic;">Entry</span><span style="color:#F6F6F4;">&lt;K, V&gt; </span><span style="color:#FFB86C;font-style:italic;">entry</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">Entry</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">K</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">key</span><span style="color:#F6F6F4;">, </span><span style="color:#97E1F1;font-style:italic;">V</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">object</span><span style="color:#F6F6F4;">, </span><span style="color:#97E1F1;font-style:italic;">ReferenceQueue</span><span style="color:#F6F6F4;">&lt;K&gt; </span><span style="color:#FFB86C;font-style:italic;">queue</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#BF9EEE;font-style:italic;">super</span><span style="color:#F6F6F4;">(key, queue);</span></span>
<span class="line"><span style="color:#F6F6F4;">  isNull </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> key </span><span style="color:#F286C4;">==</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  hash </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> isNull </span><span style="color:#F286C4;">?</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> key.</span><span style="color:#62E884;">hashCode</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">  value </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> object;</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">final</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Entry</span><span style="color:#24292E;">&lt;</span><span style="color:#D73A49;">K</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">V</span><span style="color:#24292E;">&gt; </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WeakReference</span><span style="color:#24292E;">&lt;</span><span style="color:#D73A49;">K</span><span style="color:#24292E;">&gt; </span><span style="color:#D73A49;">implements</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">Map.Entry</span><span style="color:#24292E;">&lt;</span><span style="color:#D73A49;">K</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">V</span><span style="color:#24292E;">&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> hash;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">boolean</span><span style="color:#24292E;"> isNull;</span></span>
<span class="line"><span style="color:#24292E;">  V value;</span></span>
<span class="line"><span style="color:#24292E;">  Entry&lt;</span><span style="color:#D73A49;">K</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">V</span><span style="color:#24292E;">&gt; next;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Type</span><span style="color:#24292E;">&lt;</span><span style="color:#D73A49;">R</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">K</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">V</span><span style="color:#24292E;">&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  R </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(Map.Entry&lt;</span><span style="color:#D73A49;">K</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">V</span><span style="color:#24292E;">&gt; </span><span style="color:#E36209;">entry</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">Entry</span><span style="color:#24292E;">(K </span><span style="color:#E36209;">key</span><span style="color:#24292E;">, V </span><span style="color:#E36209;">object</span><span style="color:#24292E;">, ReferenceQueue&lt;</span><span style="color:#D73A49;">K</span><span style="color:#24292E;">&gt; </span><span style="color:#E36209;">queue</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">super</span><span style="color:#24292E;">(key, queue);</span></span>
<span class="line"><span style="color:#24292E;">  isNull </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> key </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  hash </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> isNull </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> key.</span><span style="color:#6F42C1;">hashCode</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> object;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span></code></pre></div><p>如源码所示，</p><ul><li>WeakHashMap的Entry继承了WeakReference。</li><li>其中Key作为了WeakReference指向的对象</li><li>因此WeakHashMap利用了WeakReference的机制来实现不阻止GC回收Key</li></ul><h2 id="如何删除被回收的key数据呢" tabindex="-1">如何删除被回收的key数据呢 <a class="header-anchor" href="#如何删除被回收的key数据呢" aria-label="Permalink to &quot;如何删除被回收的key数据呢&quot;">​</a></h2><p>在Javadoc中关于WeakHashMap有这样的描述，当key不再引用时，其对应的key/value也会被移除。</p><p>那么是如何移除的呢，这里我们通常有两种假设策略</p><ul><li>当对象被回收的时候，进行通知</li><li>WeakHashMap轮询处理时效的Entry</li></ul><p>而WeakHashMap采用的是轮询的形式，在其put/get/size等方法调用的时候都会预先调用一个poll的方法，来检查并删除失效的Entry</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">poll</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#97E1F1;font-style:italic;">Entry</span><span style="color:#F6F6F4;">&lt;K, V&gt; toRemove;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">while</span><span style="color:#F6F6F4;"> ((toRemove </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> (</span><span style="color:#97E1F1;font-style:italic;">Entry</span><span style="color:#F286C4;">&lt;</span><span style="color:#F6F6F4;">K, V</span><span style="color:#F286C4;">&gt;</span><span style="color:#F6F6F4;">) referenceQueue.</span><span style="color:#62E884;">poll</span><span style="color:#F6F6F4;">()) </span><span style="color:#F286C4;">!=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">removeEntry</span><span style="color:#F6F6F4;">(toRemove);</span></span>
<span class="line"><span style="color:#F6F6F4;">  Log.</span><span style="color:#62E884;">d</span><span style="color:#F6F6F4;">(LOGTAG, </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">removeEntry=</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> toRemove.value);</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;"> }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">poll</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  Entry&lt;</span><span style="color:#D73A49;">K</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">V</span><span style="color:#24292E;">&gt; toRemove;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> ((toRemove </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (Entry</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">K, V</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">) referenceQueue.</span><span style="color:#6F42C1;">poll</span><span style="color:#24292E;">()) </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">removeEntry</span><span style="color:#24292E;">(toRemove);</span></span>
<span class="line"><span style="color:#24292E;">  Log.</span><span style="color:#6F42C1;">d</span><span style="color:#24292E;">(LOGTAG, </span><span style="color:#032F62;">&quot;removeEntry=&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> toRemove.value);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span></code></pre></div><p>为什么没有使用看似更好的通知呢，我想是因为在Java中没有一个可靠的通知回调，比如大家常说的finalize方法，其实也不是标准的，不同的JVM可以实现不同，甚至是不调用这个方法。</p><p>当然除了单纯的看源码，进行合理的验证是检验分析正确的一个重要方法。</p><p>这里首先，我们定义一个MyObject类，处理一下finalize方法（在我的测试机上可以正常调用，仅仅做为辅助验证手段）</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">MyObject</span><span style="color:#F6F6F4;">(val id: String) : Any() {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">protected</span><span style="color:#F6F6F4;"> fun </span><span style="color:#62E884;">finalize</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">  Log.</span><span style="color:#62E884;">i</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">MainActivity</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">Object($id) finalize method is called</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;"> }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MyObject</span><span style="color:#24292E;">(val id: String) : Any() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> fun </span><span style="color:#6F42C1;">finalize</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  Log.</span><span style="color:#6F42C1;">i</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;MainActivity&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Object($id) finalize method is called&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span></code></pre></div><p>然后是调用者的代码，如下</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">private</span><span style="color:#F6F6F4;"> val weakHashMap </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">WeakHashMap</span><span style="color:#F286C4;">&lt;</span><span style="color:#F6F6F4;">Any, Int</span><span style="color:#F286C4;">&gt;</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">var</span><span style="color:#F6F6F4;"> count </span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> Int </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span></span>
<span class="line"><span style="color:#F6F6F4;"> override fun </span><span style="color:#62E884;">onCreate</span><span style="color:#F6F6F4;">(savedInstanceState</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> Bundle</span><span style="color:#F286C4;">?</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#BF9EEE;font-style:italic;">super</span><span style="color:#F6F6F4;">.</span><span style="color:#62E884;">onCreate</span><span style="color:#F6F6F4;">(savedInstanceState)</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">setContentView</span><span style="color:#F6F6F4;">(R.layout.activity_main)</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">setSupportActionBar</span><span style="color:#F6F6F4;">(toolbar)</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">dumpWeakInfo</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">  fab.setOnClickListener { view </span><span style="color:#97E1F1;font-style:italic;">-&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">//System.gc()// this seldom works use Android studio force gc stop</span></span>
<span class="line"><span style="color:#F6F6F4;">  weakHashMap.</span><span style="color:#62E884;">put</span><span style="color:#F6F6F4;">(</span><span style="color:#62E884;">MyObject</span><span style="color:#F6F6F4;">(count.</span><span style="color:#62E884;">toString</span><span style="color:#F6F6F4;">()), count)</span></span>
<span class="line"><span style="color:#F6F6F4;">  count </span><span style="color:#F286C4;">++</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">dumpWeakInfo</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">  Snackbar.</span><span style="color:#62E884;">make</span><span style="color:#F6F6F4;">(view, </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">Replace with your own action</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, Snackbar.LENGTH_LONG)</span></span>
<span class="line"><span style="color:#F6F6F4;">  .</span><span style="color:#62E884;">setAction</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">Action</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">).</span><span style="color:#62E884;">show</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;"> }</span></span>
<span class="line"><span style="color:#F6F6F4;">  fun </span><span style="color:#62E884;">dumpWeakInfo</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">  Log.</span><span style="color:#62E884;">i</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">MainActivity</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">dumpWeakInfo weakInfo.size=\${weakHashMap.size}</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;"> }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">private</span><span style="color:#24292E;"> val weakHashMap </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> WeakHashMap</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">Any, Int</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> count </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> Int </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;"> override fun </span><span style="color:#6F42C1;">onCreate</span><span style="color:#24292E;">(savedInstanceState</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> Bundle</span><span style="color:#D73A49;">?</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">super</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">onCreate</span><span style="color:#24292E;">(savedInstanceState)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setContentView</span><span style="color:#24292E;">(R.layout.activity_main)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setSupportActionBar</span><span style="color:#24292E;">(toolbar)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">dumpWeakInfo</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  fab.setOnClickListener { view </span><span style="color:#D73A49;">-&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//System.gc()// this seldom works use Android studio force gc stop</span></span>
<span class="line"><span style="color:#24292E;">  weakHashMap.</span><span style="color:#6F42C1;">put</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">MyObject</span><span style="color:#24292E;">(count.</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">()), count)</span></span>
<span class="line"><span style="color:#24292E;">  count </span><span style="color:#D73A49;">++</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">dumpWeakInfo</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  Snackbar.</span><span style="color:#6F42C1;">make</span><span style="color:#24292E;">(view, </span><span style="color:#032F62;">&quot;Replace with your own action&quot;</span><span style="color:#24292E;">, Snackbar.LENGTH_LONG)</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">setAction</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Action&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">show</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">  fun </span><span style="color:#6F42C1;">dumpWeakInfo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  Log.</span><span style="color:#6F42C1;">i</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;MainActivity&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;dumpWeakInfo weakInfo.size=\${weakHashMap.size}&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span></code></pre></div><p>我们按照如下操作</p><ul><li>点击fab控件，每次对WeakhashMap对象增加一个Entry，并打印WeakHashMap的size 执行3此</li><li>在没有强制触发GC时，WeakHashMap对象size一直会增加</li><li>手动出发Force GC，我们会看到MyObject有finalize方法被调用</li><li>再次点击fab空间，然后输出的WeakHashMap size急剧减少。</li><li>同样我们收到在WeakHashMap增加的日志也会输出</li></ul><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">I</span><span style="color:#F286C4;">/</span><span style="color:#62E884;">MainActivity</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">10202</span><span style="color:#F6F6F4;">)</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> dumpWeakInfo weakInfo.size</span><span style="color:#F286C4;">=</span><span style="color:#BF9EEE;">1</span></span>
<span class="line"><span style="color:#F6F6F4;"> I</span><span style="color:#F286C4;">/</span><span style="color:#62E884;">MainActivity</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">10202</span><span style="color:#F6F6F4;">)</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> dumpWeakInfo weakInfo.size</span><span style="color:#F286C4;">=</span><span style="color:#BF9EEE;">2</span></span>
<span class="line"><span style="color:#F6F6F4;"> I</span><span style="color:#F286C4;">/</span><span style="color:#62E884;">MainActivity</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">10202</span><span style="color:#F6F6F4;">)</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> dumpWeakInfo weakInfo.size</span><span style="color:#F286C4;">=</span><span style="color:#BF9EEE;">3</span></span>
<span class="line"><span style="color:#F6F6F4;"> I</span><span style="color:#F286C4;">/</span><span style="color:#62E884;">MainActivity</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">10202</span><span style="color:#F6F6F4;">)</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Object</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">) finalize method is called</span></span>
<span class="line"><span style="color:#F6F6F4;"> I</span><span style="color:#F286C4;">/</span><span style="color:#62E884;">MainActivity</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">10202</span><span style="color:#F6F6F4;">)</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Object</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">) finalize method is called</span></span>
<span class="line"><span style="color:#F6F6F4;"> I</span><span style="color:#F286C4;">/</span><span style="color:#62E884;">MainActivity</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">10202</span><span style="color:#F6F6F4;">)</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Object</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">) finalize method is called</span></span>
<span class="line"><span style="color:#F6F6F4;"> I</span><span style="color:#F286C4;">/</span><span style="color:#62E884;">WeakHashMap</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">10202</span><span style="color:#F6F6F4;">)</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> removeEntry</span><span style="color:#F286C4;">=</span><span style="color:#BF9EEE;">2</span></span>
<span class="line"><span style="color:#F6F6F4;"> I</span><span style="color:#F286C4;">/</span><span style="color:#62E884;">WeakHashMap</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">10202</span><span style="color:#F6F6F4;">)</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> removeEntry</span><span style="color:#F286C4;">=</span><span style="color:#BF9EEE;">0</span></span>
<span class="line"><span style="color:#F6F6F4;"> I</span><span style="color:#F286C4;">/</span><span style="color:#62E884;">WeakHashMap</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">10202</span><span style="color:#F6F6F4;">)</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> removeEntry</span><span style="color:#F286C4;">=</span><span style="color:#BF9EEE;">1</span></span>
<span class="line"><span style="color:#F6F6F4;"> I</span><span style="color:#F286C4;">/</span><span style="color:#62E884;">MainActivity</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">10202</span><span style="color:#F6F6F4;">)</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> dumpWeakInfo weakInfo.size</span><span style="color:#F286C4;">=</span><span style="color:#BF9EEE;">1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">I</span><span style="color:#D73A49;">/</span><span style="color:#6F42C1;">MainActivity</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10202</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> dumpWeakInfo weakInfo.size</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;"> I</span><span style="color:#D73A49;">/</span><span style="color:#6F42C1;">MainActivity</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10202</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> dumpWeakInfo weakInfo.size</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;"> I</span><span style="color:#D73A49;">/</span><span style="color:#6F42C1;">MainActivity</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10202</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> dumpWeakInfo weakInfo.size</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">3</span></span>
<span class="line"><span style="color:#24292E;"> I</span><span style="color:#D73A49;">/</span><span style="color:#6F42C1;">MainActivity</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10202</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Object</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">) finalize method is called</span></span>
<span class="line"><span style="color:#24292E;"> I</span><span style="color:#D73A49;">/</span><span style="color:#6F42C1;">MainActivity</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10202</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Object</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) finalize method is called</span></span>
<span class="line"><span style="color:#24292E;"> I</span><span style="color:#D73A49;">/</span><span style="color:#6F42C1;">MainActivity</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10202</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Object</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) finalize method is called</span></span>
<span class="line"><span style="color:#24292E;"> I</span><span style="color:#D73A49;">/</span><span style="color:#6F42C1;">WeakHashMap</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10202</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> removeEntry</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;"> I</span><span style="color:#D73A49;">/</span><span style="color:#6F42C1;">WeakHashMap</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10202</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> removeEntry</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;"> I</span><span style="color:#D73A49;">/</span><span style="color:#6F42C1;">WeakHashMap</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10202</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> removeEntry</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;"> I</span><span style="color:#D73A49;">/</span><span style="color:#6F42C1;">MainActivity</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10202</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> dumpWeakInfo weakInfo.size</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span></span></code></pre></div><p>注意：System.gc()并不一定可以工作,建议使用Android Studio的Force GC</p><p>完整的测试代码可以访问这里 <a href="https://github.com/androidyue/WeakHashMapSample" target="_blank" rel="noreferrer">https://github.com/androidyue/WeakHashMapSample</a></p><hr>`,29),e=[o];function t(c,r,y,F,i,E){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{u as __pageData,d as default};