import{_ as s,o as a,c as n,V as o}from"./chunks/framework.c6d8cbec.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/python/python-10.md","filePath":"interview/backend/python/python-10.md"}'),e={name:"interview/backend/python/python-10.md"},t=o(`<h3 id="_1、解释re模块的split-、sub-、subn-方法" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#1%E8%A7%A3%E9%87%8Are%E6%A8%A1%E5%9D%97%E7%9A%84splitsubsubn%E6%96%B9%E6%B3%95" target="_blank" rel="noreferrer">1、解释re模块的split()、sub()、subn()方法？</a> <a class="header-anchor" href="#_1、解释re模块的split-、sub-、subn-方法" aria-label="Permalink to &quot;[1、解释re模块的split()、sub()、subn()方法？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python最新面试题及答案附答案汇总.md#1解释re模块的splitsubsubn方法)&quot;">​</a></h3><p>split()：只要模式匹配，此方法就会拆分字符串。</p><p>sub()：此方法用于将字符串中的某些模式替换为其他字符串或序列。</p><p>subn()：和sub()很相似，不同之处在于它返回一个元组，将总替换计数和新字符串作为输出。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">import re</span></span>
<span class="line"><span style="color:#f6f6f4;">string = &quot;There are two ball in the basket 101&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">re.split(&quot;\\W+&quot;,string)</span></span>
<span class="line"><span style="color:#f6f6f4;">---------------------------------------</span></span>
<span class="line"><span style="color:#f6f6f4;">[&#39;There&#39;, &#39;are&#39;, &#39;two&#39;, &#39;ball&#39;, &#39;in&#39;, &#39;the&#39;, &#39;basket&#39;, &#39;101&#39;]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">re.sub(&quot;[^A-Za-z]&quot;,&quot; &quot;,string)</span></span>
<span class="line"><span style="color:#f6f6f4;">----------------------------------------</span></span>
<span class="line"><span style="color:#f6f6f4;">&#39;There are two ball in the basket&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">re.subn(&quot;[^A-Za-z]&quot;,&quot; &quot;,string)</span></span>
<span class="line"><span style="color:#f6f6f4;">-----------------------------------------</span></span>
<span class="line"><span style="color:#f6f6f4;">(&#39;There are two ball in the basket&#39;, 10)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import re</span></span>
<span class="line"><span style="color:#24292e;">string = &quot;There are two ball in the basket 101&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">re.split(&quot;\\W+&quot;,string)</span></span>
<span class="line"><span style="color:#24292e;">---------------------------------------</span></span>
<span class="line"><span style="color:#24292e;">[&#39;There&#39;, &#39;are&#39;, &#39;two&#39;, &#39;ball&#39;, &#39;in&#39;, &#39;the&#39;, &#39;basket&#39;, &#39;101&#39;]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">re.sub(&quot;[^A-Za-z]&quot;,&quot; &quot;,string)</span></span>
<span class="line"><span style="color:#24292e;">----------------------------------------</span></span>
<span class="line"><span style="color:#24292e;">&#39;There are two ball in the basket&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">re.subn(&quot;[^A-Za-z]&quot;,&quot; &quot;,string)</span></span>
<span class="line"><span style="color:#24292e;">-----------------------------------------</span></span>
<span class="line"><span style="color:#24292e;">(&#39;There are two ball in the basket&#39;, 10)</span></span></code></pre></div><h3 id="_2、简述面向对象的三大特性" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#2%E7%AE%80%E8%BF%B0%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%9A%84%E4%B8%89%E5%A4%A7%E7%89%B9%E6%80%A7" target="_blank" rel="noreferrer">2、简述面向对象的三大特性？</a> <a class="header-anchor" href="#_2、简述面向对象的三大特性" aria-label="Permalink to &quot;[2、简述面向对象的三大特性？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python最新面试题及答案附答案汇总.md#2简述面向对象的三大特性)&quot;">​</a></h3><p>继承，封装和多态</p><p><strong>继承：</strong></p><p>继承就是继承的类直接拥有被继承类的属性而不需要在自己的类体中重新再写一遍，其中被继承的类叫做父类、基类，继承的类叫做派生类、子类。</p><p><strong>封装：</strong></p><p>封装就是把类中的属性和方法定义为私有的，方法就是在属性名或方法名前加双下划线，而一旦这样定义了属性或方法名后，python会自动将其转换为_类名<strong>属性名（方法名）的格式，在类的内部调用还是用双下划线加属性名或方法名，在类的外部调用就要用</strong>类名_属性名（方法名）。父类的私有属性和方法，子类无法对其进行修改。</p><p><strong>多态：</strong></p><p>多态就是不同的对象可以调用相同的方法然后得到不同的结果，有点类似接口类的感觉，在python中处处体现着多态，比如不管你是列表还是字符串还是数字都可以使用+和*。</p><h3 id="_3、是否使用过functools中的函数-他的作用是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#3%E6%98%AF%E5%90%A6%E4%BD%BF%E7%94%A8%E8%BF%87functools%E4%B8%AD%E7%9A%84%E5%87%BD%E6%95%B0%E4%BB%96%E7%9A%84%E4%BD%9C%E7%94%A8%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">3、是否使用过functools中的函数？他的作用是什么？</a> <a class="header-anchor" href="#_3、是否使用过functools中的函数-他的作用是什么" aria-label="Permalink to &quot;[3、是否使用过functools中的函数？他的作用是什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python最新面试题及答案附答案汇总.md#3是否使用过functools中的函数他的作用是什么)&quot;">​</a></h3><p><strong>1、</strong> functools.wraps()</p><p>在装饰器中用过，如果不使用wraps，则原始函数的<strong>name</strong>和<strong>doc</strong>的值就会丢失</p><p><strong>2、</strong> functools.reduce()</p><p>第一个参数是一个函数，第二个参数是一个可迭代对象，代码如下：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;"># 下面代码相当于从1加到9</span></span>
<span class="line"><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> functools </span><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> reduce</span></span>
<span class="line"><span style="color:#F6F6F4;">a</span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;">reduce(</span><span style="color:#F286C4;">lambda</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">x</span><span style="color:#F6F6F4;">,</span><span style="color:#FFB86C;font-style:italic;">y</span><span style="color:#F6F6F4;">:x</span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;">y,</span><span style="color:#97E1F1;">range</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">10</span><span style="color:#F6F6F4;">))</span></span>
<span class="line"><span style="color:#97E1F1;">print</span><span style="color:#F6F6F4;">(a)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 下面代码相当于从1加到9</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> functools </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#E36209;">reduce</span></span>
<span class="line"><span style="color:#24292E;">a</span><span style="color:#D73A49;">=</span><span style="color:#E36209;">reduce</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">lambda</span><span style="color:#24292E;"> x,y:x</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">y,</span><span style="color:#005CC5;">range</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(a)</span></span></code></pre></div><h3 id="_4、redis和memcached的区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#4redis%E5%92%8Cmemcached%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">4、Redis和Memcached的区别</a> <a class="header-anchor" href="#_4、redis和memcached的区别" aria-label="Permalink to &quot;[4、Redis和Memcached的区别](https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python最新面试题及答案附答案汇总.md#4redis和memcached的区别)&quot;">​</a></h3><p><strong>1、</strong> 存储方式：</p><p>Memecache把数据全部存在内存之中，断电后会挂掉，数据不能超过内存大小。Redis有部份存在硬盘上，这样能保证数据的持久性。</p><p><strong>2、</strong> 数据支持类型</p><p>Memcache对数据类型支持相对简单。Redis有复杂的数据类型。</p><p><strong>3、</strong> 使用底层模型不同</p><p>它们之间底层实现方式 以及与客户端之间通信的应用协议不一样。Redis直接自己构建了VM 机制 ，因为一般的系统调用系统函数的话，会浪费一定的时间去移动和请求。</p><p><strong>4、</strong> value大小</p><p>Redis最大可以达到1GB，而memcache只有1MB</p><h3 id="_5、简述进程-线程-协程的区别以及应用场景" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#5%E7%AE%80%E8%BF%B0%E8%BF%9B%E7%A8%8B%E7%BA%BF%E7%A8%8B%E5%8D%8F%E7%A8%8B%E7%9A%84%E5%8C%BA%E5%88%AB%E4%BB%A5%E5%8F%8A%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF" target="_blank" rel="noreferrer">5、简述进程，线程，协程的区别以及应用场景？</a> <a class="header-anchor" href="#_5、简述进程-线程-协程的区别以及应用场景" aria-label="Permalink to &quot;[5、简述进程，线程，协程的区别以及应用场景？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python最新面试题及答案附答案汇总.md#5简述进程线程协程的区别以及应用场景)&quot;">​</a></h3><p><strong>区别：</strong></p><p><strong>1、</strong> 线程是资源分配的单位</p><p><strong>2、</strong> 线程是操作系统调度的单位</p><p><strong>3、</strong> 进程切换需要的资源很大，效率很低</p><p><strong>4、</strong> 线程切换需要的资源一般，效率一般(在不考虑GIL的情况下</p><p><strong>5、</strong> 协程切换任务资源很小，效率高</p><p><strong>6、</strong> 多进程，多线程根据cpu核数不一样可能是并行的，但是协程是在一个线程中，所以是并发。)</p><p><strong>应用场景</strong></p><p><strong>1、</strong> 协程：当程序中存在大量不需要cpu的操作时，适用协程</p><p><strong>2、</strong> 计算密集型，用进程。IO密集型，用线程。</p><h3 id="_6、-init-在python中有什么用" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#6_init_%E5%9C%A8python%E4%B8%AD%E6%9C%89%E4%BB%80%E4%B9%88%E7%94%A8" target="_blank" rel="noreferrer">6、_init_在Python中有什么用？</a> <a class="header-anchor" href="#_6、-init-在python中有什么用" aria-label="Permalink to &quot;[6、_init_在Python中有什么用？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python最新面试题及答案附答案汇总.md#6_init_在python中有什么用)&quot;">​</a></h3><p>“<strong>init</strong>”是Python类中的保留方法。</p><p>它被称为构造函数，每当执行代码时都会自动调用它，它主要用于初始化类的所有变量。</p><h3 id="_7、什么是正向代理和反向代理" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#7%E4%BB%80%E4%B9%88%E6%98%AF%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E5%92%8C%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86" target="_blank" rel="noreferrer">7、什么是正向代理和反向代理？</a> <a class="header-anchor" href="#_7、什么是正向代理和反向代理" aria-label="Permalink to &quot;[7、什么是正向代理和反向代理？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python最新面试题及答案附答案汇总.md#7什么是正向代理和反向代理)&quot;">​</a></h3><p><strong>正向代理</strong></p><p><strong>1、</strong> 正向代理类似一个跳板机，代理访问外部资源。</p><p><strong>2、</strong> 正向代理 是一个位于客户端和原始服务器(origin server)之间的服务器，为了从原始服务器取得内容，客户端向代理发送一个请求并指定目标(原始服务器)，然后代理向原始服务器转交请求并将获得的内容返回给客户端。客户端必须要进行一些特别的设置才能使用正向代理。</p><p><strong>正向代理作用：</strong></p><p><strong>1、</strong> 访问原来无法访问的资源，如google</p><p><strong>2、</strong> 可以做缓存，加速访问资源</p><p><strong>3、</strong> 对客户端访问授权，上网进行认证</p><p><strong>4、</strong> 代理可以记录用户访问记录（上网行为管理），对外隐藏用户信息</p><p><strong>反向代理</strong></p><p><strong>1、</strong> 反向代理（Reverse Proxy）实际运行方式是指以代理服务器来接受internet上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给internet上请求连接的客户端，此时代理服务器对外就表现为一个服务器</p><p><strong>反向代理的作用：</strong></p><p><strong>1、</strong> 保证内网的安全，可以使用反向代理提供WAF功能，阻止web攻击</p><p><strong>2、</strong> 负载均衡，通过反向代理服务器来优化网站的负载</p><h3 id="_8、怎样声明多个变量并赋值" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#8%E6%80%8E%E6%A0%B7%E5%A3%B0%E6%98%8E%E5%A4%9A%E4%B8%AA%E5%8F%98%E9%87%8F%E5%B9%B6%E8%B5%8B%E5%80%BC" target="_blank" rel="noreferrer">8、怎样声明多个变量并赋值？</a> <a class="header-anchor" href="#_8、怎样声明多个变量并赋值" aria-label="Permalink to &quot;[8、怎样声明多个变量并赋值？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python最新面试题及答案附答案汇总.md#8怎样声明多个变量并赋值)&quot;">​</a></h3><p>一共有两种方式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&gt;&gt;&gt; a,b,c=3,4,5 #This assigns 3, 4, and 5 to a, b, and c respectively</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt;&gt;&gt; a=b=c=3 #This assigns 3 to a, b, and c</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&gt;&gt;&gt; a,b,c=3,4,5 #This assigns 3, 4, and 5 to a, b, and c respectively</span></span>
<span class="line"><span style="color:#24292e;">&gt;&gt;&gt; a=b=c=3 #This assigns 3 to a, b, and c</span></span></code></pre></div><h3 id="_9、请列举你所知道的python代码检测工具以及他们之间的区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#9%E8%AF%B7%E5%88%97%E4%B8%BE%E4%BD%A0%E6%89%80%E7%9F%A5%E9%81%93%E7%9A%84python%E4%BB%A3%E7%A0%81%E6%A3%80%E6%B5%8B%E5%B7%A5%E5%85%B7%E4%BB%A5%E5%8F%8A%E4%BB%96%E4%BB%AC%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">9、请列举你所知道的python代码检测工具以及他们之间的区别</a> <a class="header-anchor" href="#_9、请列举你所知道的python代码检测工具以及他们之间的区别" aria-label="Permalink to &quot;[9、请列举你所知道的python代码检测工具以及他们之间的区别](https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python最新面试题及答案附答案汇总.md#9请列举你所知道的python代码检测工具以及他们之间的区别)&quot;">​</a></h3><p><strong>1、</strong> pylint --- 源代码分析器，可以分析python代码中的错误</p><p><strong>2、</strong> pyflakes --- 检查源文件错误的简单程序，不会检查代码风格。</p><p><strong>3、</strong> pep8 --- 检查代码规范的工具</p><h3 id="_10、简述redis的有几种持久化策略以及比较" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#10%E7%AE%80%E8%BF%B0redis%E7%9A%84%E6%9C%89%E5%87%A0%E7%A7%8D%E6%8C%81%E4%B9%85%E5%8C%96%E7%AD%96%E7%95%A5%E4%BB%A5%E5%8F%8A%E6%AF%94%E8%BE%83" target="_blank" rel="noreferrer">10、简述Redis的有几种持久化策略以及比较？</a> <a class="header-anchor" href="#_10、简述redis的有几种持久化策略以及比较" aria-label="Permalink to &quot;[10、简述Redis的有几种持久化策略以及比较？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python最新面试题及答案附答案汇总.md#10简述redis的有几种持久化策略以及比较)&quot;">​</a></h3><p><strong>1、</strong> RDB 持久化可以在指定的时间间隔内生成数据集的时间点快照。</p><p><strong>2、</strong> AOF 持久化记录服务器执行的所有写操作命令，并在服务器启动时，通过重新执行这些命令来还原数据集。 AOF 文件中的命令全部以 Redis 协议的格式来保存，新命令会被追加到文件的末尾。 Redis 还可以在后台对 AOF 文件进行重写(rewrite)，使得 AOF 文件的体积不会超出保存数据集状态所需的实际大小。</p><p><strong>区别：</strong></p><p><strong>1、</strong> RDB持久化是指在指定的时间间隔内将内存中的数据集快照写入磁盘，实际操作过程是fork一个子进程，先将数据集写入临时文件，写入成功后，再替换之前的文件，用二进制压缩存储。</p><p><strong>2、</strong> AOF持久化以日志的形式记录服务器所处理的每一个写、删除操作，查询操作不会记录，以文本的方式记录，可以打开文件看到详细的操作记录。</p><h3 id="_11、使用两个队列实现一个栈" tabindex="-1">11、使用两个队列实现一个栈 <a class="header-anchor" href="#_11、使用两个队列实现一个栈" aria-label="Permalink to &quot;11、使用两个队列实现一个栈&quot;">​</a></h3><h3 id="_12、用一行python代码-从给定列表中取出所有的偶数和奇数" tabindex="-1">12、用一行Python代码，从给定列表中取出所有的偶数和奇数 <a class="header-anchor" href="#_12、用一行python代码-从给定列表中取出所有的偶数和奇数" aria-label="Permalink to &quot;12、用一行Python代码，从给定列表中取出所有的偶数和奇数&quot;">​</a></h3><h3 id="_13、python中的标识符长度能有多长" tabindex="-1">13、Python中的标识符长度能有多长？ <a class="header-anchor" href="#_13、python中的标识符长度能有多长" aria-label="Permalink to &quot;13、Python中的标识符长度能有多长？&quot;">​</a></h3><h3 id="_14、mysql的半同步复制原理" tabindex="-1">14、MySQL的半同步复制原理 <a class="header-anchor" href="#_14、mysql的半同步复制原理" aria-label="Permalink to &quot;14、MySQL的半同步复制原理&quot;">​</a></h3><h3 id="_15、python中注释代码的方法有哪些" tabindex="-1">15、Python中注释代码的方法有哪些？ <a class="header-anchor" href="#_15、python中注释代码的方法有哪些" aria-label="Permalink to &quot;15、Python中注释代码的方法有哪些？&quot;">​</a></h3><h3 id="_16、使用async语法实现一个协程" tabindex="-1">16、使用async语法实现一个协程 <a class="header-anchor" href="#_16、使用async语法实现一个协程" aria-label="Permalink to &quot;16、使用async语法实现一个协程&quot;">​</a></h3><h3 id="_17、请解释使用-args和-kwargs的含义" tabindex="-1">17、请解释使用*args和**kwargs的含义 <a class="header-anchor" href="#_17、请解释使用-args和-kwargs的含义" aria-label="Permalink to &quot;17、请解释使用*args和**kwargs的含义&quot;">​</a></h3><h3 id="_18、写一个的支持with语句的类" tabindex="-1">18、写一个的支持with语句的类 <a class="header-anchor" href="#_18、写一个的支持with语句的类" aria-label="Permalink to &quot;18、写一个的支持with语句的类&quot;">​</a></h3><h3 id="_19、编写一个函数-找出数组中没有重复的值的和" tabindex="-1">19、编写一个函数，找出数组中没有重复的值的和 <a class="header-anchor" href="#_19、编写一个函数-找出数组中没有重复的值的和" aria-label="Permalink to &quot;19、编写一个函数，找出数组中没有重复的值的和&quot;">​</a></h3><h3 id="_20、简述解释型和编译型编程语言" tabindex="-1">20、简述解释型和编译型编程语言 <a class="header-anchor" href="#_20、简述解释型和编译型编程语言" aria-label="Permalink to &quot;20、简述解释型和编译型编程语言&quot;">​</a></h3><h3 id="_21、位和字节的关系" tabindex="-1">21、位和字节的关系 <a class="header-anchor" href="#_21、位和字节的关系" aria-label="Permalink to &quot;21、位和字节的关系&quot;">​</a></h3><h3 id="_22、下面代码的执行结果是" tabindex="-1">22、下面代码的执行结果是 <a class="header-anchor" href="#_22、下面代码的执行结果是" aria-label="Permalink to &quot;22、下面代码的执行结果是&quot;">​</a></h3><h3 id="_23、有一个列表lis-this-is-a-man-b-对它进行大小写无关的排序" tabindex="-1">23、有一个列表lis=[&#39;This&#39;,&#39;is&#39;,&#39;a&#39;,&#39;Man&#39;,&#39;B&#39;,&#39;!&#39;]，对它进行大小写无关的排序 <a class="header-anchor" href="#_23、有一个列表lis-this-is-a-man-b-对它进行大小写无关的排序" aria-label="Permalink to &quot;23、有一个列表lis=[&#39;This&#39;,&#39;is&#39;,&#39;a&#39;,&#39;Man&#39;,&#39;B&#39;,&#39;!&#39;]，对它进行大小写无关的排序&quot;">​</a></h3><h3 id="_24、python支持多重继承吗" tabindex="-1">24、Python支持多重继承吗？ <a class="header-anchor" href="#_24、python支持多重继承吗" aria-label="Permalink to &quot;24、Python支持多重继承吗？&quot;">​</a></h3><h3 id="_25、如何查找一个字符串中特定的字符-find和index的差异" tabindex="-1">25、如何查找一个字符串中特定的字符？find和index的差异？ <a class="header-anchor" href="#_25、如何查找一个字符串中特定的字符-find和index的差异" aria-label="Permalink to &quot;25、如何查找一个字符串中特定的字符？find和index的差异？&quot;">​</a></h3><h3 id="_26、简述tcp三次握手-四次挥手的流程。" tabindex="-1">26、简述TCP三次握手，四次挥手的流程。 <a class="header-anchor" href="#_26、简述tcp三次握手-四次挥手的流程。" aria-label="Permalink to &quot;26、简述TCP三次握手，四次挥手的流程。&quot;">​</a></h3><h3 id="_27、python中的装饰器是什么" tabindex="-1">27、Python中的装饰器是什么？ <a class="header-anchor" href="#_27、python中的装饰器是什么" aria-label="Permalink to &quot;27、Python中的装饰器是什么？&quot;">​</a></h3><h3 id="_28、xrange和range的区别" tabindex="-1">28、xrange和range的区别 <a class="header-anchor" href="#_28、xrange和range的区别" aria-label="Permalink to &quot;28、xrange和range的区别&quot;">​</a></h3><h3 id="_29、python的可变类型和不可变类型的区别" tabindex="-1">29、python的可变类型和不可变类型的区别 <a class="header-anchor" href="#_29、python的可变类型和不可变类型的区别" aria-label="Permalink to &quot;29、python的可变类型和不可变类型的区别&quot;">​</a></h3><h3 id="_30、什么是粘包-出现粘包的原因" tabindex="-1">30、什么是粘包？出现粘包的原因？ <a class="header-anchor" href="#_30、什么是粘包-出现粘包的原因" aria-label="Permalink to &quot;30、什么是粘包？出现粘包的原因？&quot;">​</a></h3>`,89),r=[t];function l(p,i,c,h,E,d){return a(),n("div",null,r)}const g=s(e,[["render",l]]);export{u as __pageData,g as default};