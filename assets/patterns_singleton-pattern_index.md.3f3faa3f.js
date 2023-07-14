import{d as _,o as E,c as h,a as e,t as u,b as p,F as m,C as n,h as f,H as g,J as o,E as r,V as C}from"./chunks/framework.c6d8cbec.js";const D=n("br",null,null,-1),A=_({__name:"demo1",setup(c){let a=0;class t{getInstance(){return this}getCount(){return a}increment(){return++a}decrement(){return--a}}const s=new t,l=new t;return(b,z)=>(E(),h(m,null,[e(" 我们来比对一下结果："),D,e(" counter1.getInstance() === counter2.getInstance() 的结果是："+u(p(s).getInstance()===p(l).getInstance()),1)],64))}});let d,F=0;class v{constructor(){if(d)throw new Error("You can only create one instance!");d=this}getInstance(){return this}getCount(){return F}increment(){return++F}decrement(){return--F}}const y=Object.freeze(new v),i=Object.freeze(d),k=n("br",null,null,-1),x=n("br",null,null,-1),w=n("br",null,null,-1),q=n("br",null,null,-1),j=_({__name:"demo2",setup(c){const a=f(0);return(t,s)=>(E(),h(m,null,[e(" 点击如下按钮："),k,e(" 按钮 1 和按钮 2 点击事件使用的实例"+u(p(y).getInstance()===p(i).getInstance()?"相同":"不同")+" ",1),x,n("button",{onClick:s[0]||(s[0]=l=>a.value=p(y).increment())}," 按钮 1 点击增加 "),n("button",{onClick:s[1]||(s[1]=l=>a.value=p(y).decrement())}," 按钮 1 点击减少 "),n("button",{onClick:s[2]||(s[2]=l=>a.value=p(i).increment())}," 按钮 2 点击增加 "),n("button",{onClick:s[3]||(s[3]=l=>a.value=p(i).decrement())}," 按钮 2 点击减少 "),w,q,e(" count 结果："+u(a.value),1)],64))}}),I=n("h1",{id:"单例模式",tabindex:"-1"},[e("单例模式 "),n("a",{class:"header-anchor",href:"#单例模式","aria-label":'Permalink to "单例模式"'},"​")],-1),P=C(`<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>还记得当年校招的时候，我鼓起勇气吹了自己懂一点设计模式，本来以为会是面试利器，可以和面试官交流一波。</p><p>没想到第一个问的就是单例模式，而我当时就大概学了一手 vue 源码中的代理模式和装饰者模式。</p><p>我当时的回答是，单例模式就是只能实例化一次，单个实例...</p><p>现如今当我真正了解了单例模式之后，越发觉得当时知识点是多么的浅陋。</p><h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><p>单例模式中的单例就是指实例化一次，就可以在全局访问了，也就是在整个应用程序中均可以共享。</p><p>直接看下面这个例子：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> counter </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Counter</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">getInstance</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;font-style:italic;">this</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">getCount</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> counter</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">increment</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">counter</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">decrement</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">--</span><span style="color:#F6F6F4;">counter</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> counter </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Counter</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">getInstance</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">getCount</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> counter</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">increment</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">counter</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">decrement</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">counter</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>上述代码，还会有问题，单例模式只能实例化一次，如下所示，我们可以多次实例化，实例化出来的对象也是可以修改的。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft has-diff vp-code-dark"><code><span class="line diff add"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> counter1 </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Counter</span><span style="color:#F6F6F4;">() </span></span>
<span class="line diff add"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> counter2 </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Counter</span><span style="color:#F6F6F4;">() </span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line diff add"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">counter1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Counter</span><span style="color:#24292E;">() </span></span>
<span class="line diff add"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">counter2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Counter</span><span style="color:#24292E;">() </span></span></code></pre></div><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo&quot;">​</a></h2>`,12),T=C(`<h2 id="解决多次实例化以及可修改问题" tabindex="-1">解决多次实例化以及可修改问题 <a class="header-anchor" href="#解决多次实例化以及可修改问题" aria-label="Permalink to &quot;解决多次实例化以及可修改问题&quot;">​</a></h2><p>对于多实例化问题，我们可以通过变量来保存一下实例，如果实例化过了，那么就会有报错提示，如下创建了一个 instance 变量。</p><p>对于可修改问题，我们可以将实例化出来的对象用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze" target="_blank" rel="noreferrer">Object.freeze()</a> 方法<code>冻结</code>一下。</p><blockquote><p>一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> instance</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> counter </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Counter</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">constructor</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (instance)</span></span>
<span class="line highlighted"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">throw</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Error</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">You can only create one instance!</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">) </span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#F6F6F4;">    instance </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;"> </span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">getInstance</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;font-style:italic;">this</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">getCount</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> counter</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">increment</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">counter</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">decrement</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">--</span><span style="color:#F6F6F4;">counter</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> singletonCounter </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> Object.</span><span style="color:#62E884;">freeze</span><span style="color:#F6F6F4;">(</span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Counter</span><span style="color:#F6F6F4;">()) </span></span>
<span class="line highlighted"><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">default</span><span style="color:#F6F6F4;"> singletonCounter </span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> instance</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> counter </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Counter</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (instance)</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;You can only create one instance!&#39;</span><span style="color:#24292E;">) </span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#24292E;">    instance </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">getInstance</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">getCount</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> counter</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">increment</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">counter</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">decrement</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">counter</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">singletonCounter</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Object.</span><span style="color:#6F42C1;">freeze</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Counter</span><span style="color:#24292E;">()) </span></span>
<span class="line highlighted"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> singletonCounter </span></span></code></pre></div><p>基于以上代码，我们在不同文件引入，当我们调用增加或者减少的时候，会发现 count 值都会变化。</p><h2 id="demo-1" tabindex="-1">Demo <a class="header-anchor" href="#demo-1" aria-label="Permalink to &quot;Demo&quot;">​</a></h2>`,7),S=C(`<h2 id="优缺点" tabindex="-1">优缺点 <a class="header-anchor" href="#优缺点" aria-label="Permalink to &quot;优缺点&quot;">​</a></h2><h3 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h3><p>通过限制仅仅实例化一次，即只有单个实例，可以节省大量内存空间，我们不必每次都 new 一下，开新的空间了。</p><p>不过由于 JavaScript 特殊性，我们其实可以直接创建对象，根本不需要 new，其它面向对象的编程语言（比如 Java、C++），需要创建类 class，然后再 new 一个对象，也就是我们常常说的，没对象咋办，自己 new 一个呗~</p><p>如下，我们不需要像上文那样利用 class 然后再 new 一个对象，而可以直接创建一个对象：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> count </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> counter </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">increment</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">count</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">decrement</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">--</span><span style="color:#F6F6F4;">count</span></span>
<span class="line"><span style="color:#F6F6F4;">  },</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">Object.</span><span style="color:#62E884;">freeze</span><span style="color:#F6F6F4;">(counter)</span></span>
<span class="line"><span style="color:#F286C4;">export</span><span style="color:#F6F6F4;"> { counter }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">counter</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">increment</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">count</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">decrement</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">count</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Object.</span><span style="color:#6F42C1;">freeze</span><span style="color:#24292E;">(counter)</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> { counter }</span></span></code></pre></div><h3 id="不足" tabindex="-1">不足 <a class="header-anchor" href="#不足" aria-label="Permalink to &quot;不足&quot;">​</a></h3><ul><li>测试</li></ul><p>对于自动化测试来说的话，因为不能新创建实例，这就会导致之后的测试用例会依赖于之前的测试，那么在测试的过程中顺序很重要。</p><ul><li>全局问题</li></ul><p>单例模式共享很好，但是把一个变量放在全局多多少少会出现一些意外的问题。还有一种是组件之前相互依赖，那么对于数据流的理解也会变得复杂，在不同的组件调用来调用去，代码逻辑也会显得很混乱。</p><h2 id="react-当中的状态管理" tabindex="-1">React 当中的状态管理 <a class="header-anchor" href="#react-当中的状态管理" aria-label="Permalink to &quot;React 当中的状态管理&quot;">​</a></h2><p>在 React 中，想必大家也比较熟悉了，常用的 Redux 以及相关的拓展工具，还有 React 的一个 Hook，React Context，以及我平常也会用的 <a href="https://recoiljs.org/zh-hans/" target="_blank" rel="noreferrer">Recoil</a>。</p><p>这些只能说是与单例模式相似，但从概念和定义来看，其实是对于单例模式进行了修改与优化。</p><p>这些工具提供了仅读取状态，而上文所表述的单例模式状态其实是可变的。</p><p>在使用 Redux 时，我们不会直接去操作数据，而是在组件中通过 action 来 dispatch 一下，通知 reducer 帮我们更新数据。</p><p>可能一开始会觉得这样做是不是多此一举了，但其实这样可以避免我们直接操作数据，对于全局共享的值我们又可以进行改变，数据更新就交给 reducer 去做就好了，在组件使用角度，我们依旧还是在读取数据。</p><blockquote><p>文章内容并不代表权威，如若有任何表述问题，欢迎大家提出以及共建文档。</p></blockquote>`,18),B=JSON.parse('{"title":"单例模式","description":"","frontmatter":{"author":"Choi Yang","contributors":["HearLing"]},"headers":[],"relativePath":"patterns/singleton-pattern/index.md","filePath":"patterns/singleton-pattern/index.md"}'),V={name:"patterns/singleton-pattern/index.md"},O=Object.assign(V,{setup(c){return(a,t)=>{const s=g("VideoLink"),l=g("DemoContainer");return E(),h("div",null,[I,o(s,{bvId:"BV1FA411o7Vm"},{default:r(()=>[e("【编程】单例模式是啥，面试居然也会问？ | Singleton Pattern B 站视频传送门")]),_:1}),P,o(l,{pkg:"patterns/singleton-pattern",path:"demo1.vue"},{default:r(()=>[o(A)]),_:1}),T,o(l,{pkg:"patterns/singleton-pattern",path:"demo2.vue"},{default:r(()=>[o(j)]),_:1}),S])}}});export{B as __pageData,O as default};
