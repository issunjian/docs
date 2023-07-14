import{_ as s,o as n,c as a,V as l}from"./chunks/framework.c6d8cbec.js";const d=JSON.parse('{"title":"深入理解Java并发重入锁ReentrantLock","description":"深入理解Java并发重入锁ReentrantLock","frontmatter":{"title":"深入理解Java并发重入锁ReentrantLock","shortTitle":"重入锁ReentrantLock","description":"深入理解Java并发重入锁ReentrantLock","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,锁,ReentrantLock"}]]},"headers":[],"relativePath":"backend/tobetter/thread/reentrantLock.md","filePath":"backend/tobetter/thread/reentrantLock.md"}'),p={name:"backend/tobetter/thread/reentrantLock.md"},o=l(`<h1 id="深入理解java并发重入锁reentrantlock" tabindex="-1">深入理解Java并发重入锁ReentrantLock <a class="header-anchor" href="#深入理解java并发重入锁reentrantlock" aria-label="Permalink to &quot;深入理解Java并发重入锁ReentrantLock&quot;">​</a></h1><p>ReentrantLock重入锁，是实现Lock接口的一个类，也是在实际编程中使用频率很高的一个锁，<strong>支持重入性，表示能够对共享资源能够重复加锁，即当前线程获取该锁再次获取不会被阻塞</strong>。</p><p>要想支持重入性，就要解决两个问题：</p><ol><li><p>在线程获取锁的时候，如果已经获取锁的线程是当前线程的话则直接再次获取成功；</p></li><li><p>由于锁会被获取n次，那么只有锁在被释放同样的n次之后，该锁才算是完全释放成功。</p></li></ol><p>我们知道，同步组件主要是通过重写AQS的几个protected方法来表达自己的同步语义。针对第一个问题，我们来看看ReentrantLock是怎样实现的，以非公平锁为例，判断当前线程能否获得锁为例，核心方法为nonfairTryAcquire：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">final</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">boolean</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">nonfairTryAcquire</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> acquires) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">final</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Thread</span><span style="color:#F6F6F4;"> current </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> Thread.</span><span style="color:#62E884;">currentThread</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> c </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">getState</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//1. 如果该锁未被任何线程占有，该锁能被当前线程获取</span></span>
<span class="line"><span style="color:#F6F6F4;">	</span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (c </span><span style="color:#F286C4;">==</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#62E884;">compareAndSetState</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">, acquires)) {</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#62E884;">setExclusiveOwnerThread</span><span style="color:#F6F6F4;">(current);</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">	</span><span style="color:#7B7F8B;">//2.若被占有，检查占有线程是否是当前线程</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (current </span><span style="color:#F286C4;">==</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">getExclusiveOwnerThread</span><span style="color:#F6F6F4;">()) {</span></span>
<span class="line"><span style="color:#F6F6F4;">		</span><span style="color:#7B7F8B;">// 3. 再次获取，计数加一</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> nextc </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> c </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> acquires;</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (nextc </span><span style="color:#F286C4;">&lt;</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">) </span><span style="color:#7B7F8B;">// overflow</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#F286C4;">throw</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Error</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">Maximum lock count exceeded</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#62E884;">setState</span><span style="color:#F6F6F4;">(nextc);</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">final</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">boolean</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">nonfairTryAcquire</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> acquires) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">final</span><span style="color:#24292E;"> Thread current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Thread.</span><span style="color:#6F42C1;">currentThread</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> c </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getState</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//1. 如果该锁未被任何线程占有，该锁能被当前线程获取</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (c </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#6F42C1;">compareAndSetState</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, acquires)) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">setExclusiveOwnerThread</span><span style="color:#24292E;">(current);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">//2.若被占有，检查占有线程是否是当前线程</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (current </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getExclusiveOwnerThread</span><span style="color:#24292E;">()) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// 3. 再次获取，计数加一</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> nextc </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> c </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> acquires;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (nextc </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// overflow</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Maximum lock count exceeded&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">setState</span><span style="color:#24292E;">(nextc);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>这段代码的逻辑也很简单，具体请看注释。为了支持重入性，在第二步增加了处理逻辑，如果该锁已经被线程所占有了，会继续检查占有线程是否为当前线程，如果是的话，同步状态加1返回true，表示可以再次获取成功。每次重新获取都会对同步状态进行加一的操作，那么释放的时候处理思路是怎样的了？（依然还是以非公平锁为例）核心方法为tryRelease：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">protected</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">final</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">boolean</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">tryRelease</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> releases) {</span></span>
<span class="line"><span style="color:#F6F6F4;">	</span><span style="color:#7B7F8B;">//1. 同步状态减1</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> c </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">getState</span><span style="color:#F6F6F4;">() </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> releases;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (Thread.</span><span style="color:#62E884;">currentThread</span><span style="color:#F6F6F4;">() </span><span style="color:#F286C4;">!=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">getExclusiveOwnerThread</span><span style="color:#F6F6F4;">())</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">throw</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">IllegalMonitorStateException</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E1F1;font-style:italic;">boolean</span><span style="color:#F6F6F4;"> free </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (c </span><span style="color:#F286C4;">==</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">		</span><span style="color:#7B7F8B;">//2. 只有当同步状态为0时，锁成功被释放，返回true</span></span>
<span class="line"><span style="color:#F6F6F4;">        free </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#62E884;">setExclusiveOwnerThread</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">	</span><span style="color:#7B7F8B;">// 3. 锁未被完全释放，返回false</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">setState</span><span style="color:#F6F6F4;">(c);</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> free;</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">final</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">boolean</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">tryRelease</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> releases) {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">//1. 同步状态减1</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> c </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getState</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> releases;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (Thread.</span><span style="color:#6F42C1;">currentThread</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getExclusiveOwnerThread</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">IllegalMonitorStateException</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">boolean</span><span style="color:#24292E;"> free </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (c </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">//2. 只有当同步状态为0时，锁成功被释放，返回true</span></span>
<span class="line"><span style="color:#24292E;">        free </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">setExclusiveOwnerThread</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// 3. 锁未被完全释放，返回false</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setState</span><span style="color:#24292E;">(c);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> free;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>代码的逻辑请看注释，需要注意的是，重入锁的释放必须得等到同步状态为0时锁才算成功释放，否则锁仍未释放。如果锁被获取n次，释放了n-1次，该锁未完全释放返回false，只有被释放n次才算成功释放，返回true。到现在我们可以理清ReentrantLock重入性的实现了，也就是理解了同步语义的第一条。</p><p>ReentrantLock支持两种锁：<strong>公平锁</strong>和<strong>非公平锁</strong>。<strong>何谓公平性，是针对获取锁而言的，如果一个锁是公平的，那么锁的获取顺序就应该符合请求上的绝对时间顺序，满足FIFO</strong>。ReentrantLock的构造方法无参时是构造非公平锁，源码为：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">ReentrantLock</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">    sync </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">NonfairSync</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ReentrantLock</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    sync </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">NonfairSync</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>另外还提供了另外一种方式，可传入一个boolean值，true时为公平锁，false时为非公平锁，源码为：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">ReentrantLock</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">boolean</span><span style="color:#F6F6F4;"> fair) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    sync </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> fair </span><span style="color:#F286C4;">?</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">FairSync</span><span style="color:#F6F6F4;">() </span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">NonfairSync</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ReentrantLock</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">boolean</span><span style="color:#24292E;"> fair) {</span></span>
<span class="line"><span style="color:#24292E;">    sync </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fair </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FairSync</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">NonfairSync</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>在上面非公平锁获取时（nonfairTryAcquire方法）只是简单的获取了一下当前状态做了一些逻辑处理，并没有考虑到当前同步队列中线程等待的情况。我们来看看公平锁的处理逻辑是怎样的，核心方法为：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">protected</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">final</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">boolean</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">tryAcquire</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> acquires) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">final</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Thread</span><span style="color:#F6F6F4;"> current </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> Thread.</span><span style="color:#62E884;">currentThread</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> c </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">getState</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (c </span><span style="color:#F286C4;">==</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">!</span><span style="color:#62E884;">hasQueuedPredecessors</span><span style="color:#F6F6F4;">() </span><span style="color:#F286C4;">&amp;&amp;</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#62E884;">compareAndSetState</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">, acquires)) {</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#62E884;">setExclusiveOwnerThread</span><span style="color:#F6F6F4;">(current);</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (current </span><span style="color:#F286C4;">==</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">getExclusiveOwnerThread</span><span style="color:#F6F6F4;">()) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> nextc </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> c </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> acquires;</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (nextc </span><span style="color:#F286C4;">&lt;</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#F286C4;">throw</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Error</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">Maximum lock count exceeded</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#62E884;">setState</span><span style="color:#F6F6F4;">(nextc);</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">final</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">boolean</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">tryAcquire</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> acquires) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">final</span><span style="color:#24292E;"> Thread current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Thread.</span><span style="color:#6F42C1;">currentThread</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> c </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getState</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (c </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">hasQueuedPredecessors</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">compareAndSetState</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, acquires)) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">setExclusiveOwnerThread</span><span style="color:#24292E;">(current);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (current </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getExclusiveOwnerThread</span><span style="color:#24292E;">()) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> nextc </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> c </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> acquires;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (nextc </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Maximum lock count exceeded&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">setState</span><span style="color:#24292E;">(nextc);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>这段代码的逻辑与nonfairTryAcquire基本上一直，唯一的不同在于增加了hasQueuedPredecessors的逻辑判断，方法名就可知道该方法用来判断当前节点在同步队列中是否有前驱节点的判断，如果有前驱节点说明有线程比当前线程更早的请求资源，根据公平性，当前线程请求资源失败。如果当前节点没有前驱节点的话，再才有做后面的逻辑判断的必要性。</p><p><strong>公平锁每次都是从同步队列中的第一个节点获取到锁，而非公平性锁则不一定，有可能刚释放锁的线程能再次获取到锁</strong>。</p><hr><blockquote><p>内容大部分来源以下三个开源仓库：</p><ul><li><a href="http://concurrent.redspider.group/" target="_blank" rel="noreferrer">深入浅出 Java 多线程</a></li><li><a href="https://github.com/CL0610/Java-concurrency" target="_blank" rel="noreferrer">并发编程知识总结</a></li><li><a href="https://github.com/CoderLeixiaoshuai/java-eight-part" target="_blank" rel="noreferrer">Java八股文</a></li></ul></blockquote><hr>`,20),e=[o];function t(c,r,F,y,i,E){return n(),a("div",null,e)}const C=s(p,[["render",t]]);export{d as __pageData,C as default};