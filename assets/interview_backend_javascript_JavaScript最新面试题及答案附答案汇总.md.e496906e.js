import{_ as s,o as a,c as n,V as e}from"./chunks/framework.c6d8cbec.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/javascript/JavaScript最新面试题及答案附答案汇总.md","filePath":"interview/backend/javascript/JavaScript最新面试题及答案附答案汇总.md"}'),o={name:"interview/backend/javascript/JavaScript最新面试题及答案附答案汇总.md"},l=e(`<h3 id="_1、模块化开发怎么做" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#1%E6%A8%A1%E5%9D%97%E5%8C%96%E5%BC%80%E5%8F%91%E6%80%8E%E4%B9%88%E5%81%9A" target="_blank" rel="noreferrer">1、模块化开发怎么做？</a> <a class="header-anchor" href="#_1、模块化开发怎么做" aria-label="Permalink to &quot;[1、模块化开发怎么做？](https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript最新面试题及答案附答案汇总.md#1模块化开发怎么做)&quot;">​</a></h3><p>立即执行函数,不暴露私有成员</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">var module1 = (function(){</span></span>
<span class="line"><span style="color:#f6f6f4;">　　　　var _count = 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">　　　　var m1 = function(){</span></span>
<span class="line"><span style="color:#f6f6f4;">　　　　　　//...</span></span>
<span class="line"><span style="color:#f6f6f4;">　　　　};</span></span>
<span class="line"><span style="color:#f6f6f4;">　　　　var m2 = function(){</span></span>
<span class="line"><span style="color:#f6f6f4;">　　　　　　//...</span></span>
<span class="line"><span style="color:#f6f6f4;">　　　　};</span></span>
<span class="line"><span style="color:#f6f6f4;">　　　　return {</span></span>
<span class="line"><span style="color:#f6f6f4;">　　　　　　m1 : m1,</span></span>
<span class="line"><span style="color:#f6f6f4;">　　　　　　m2 : m2</span></span>
<span class="line"><span style="color:#f6f6f4;">　　　　};</span></span>
<span class="line"><span style="color:#f6f6f4;">　　})();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var module1 = (function(){</span></span>
<span class="line"><span style="color:#24292e;">　　　　var _count = 0;</span></span>
<span class="line"><span style="color:#24292e;">　　　　var m1 = function(){</span></span>
<span class="line"><span style="color:#24292e;">　　　　　　//...</span></span>
<span class="line"><span style="color:#24292e;">　　　　};</span></span>
<span class="line"><span style="color:#24292e;">　　　　var m2 = function(){</span></span>
<span class="line"><span style="color:#24292e;">　　　　　　//...</span></span>
<span class="line"><span style="color:#24292e;">　　　　};</span></span>
<span class="line"><span style="color:#24292e;">　　　　return {</span></span>
<span class="line"><span style="color:#24292e;">　　　　　　m1 : m1,</span></span>
<span class="line"><span style="color:#24292e;">　　　　　　m2 : m2</span></span>
<span class="line"><span style="color:#24292e;">　　　　};</span></span>
<span class="line"><span style="color:#24292e;">　　})();</span></span></code></pre></div><h3 id="_2、vue、react、angular" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#2vuereactangular" target="_blank" rel="noreferrer">2、vue、react、angular</a> <a class="header-anchor" href="#_2、vue、react、angular" aria-label="Permalink to &quot;[2、vue、react、angular](https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript最新面试题及答案附答案汇总.md#2vuereactangular)&quot;">​</a></h3><p><strong><code>Vue.js</code></strong></p><p>一个用于创建 <code>web</code> 交互界面的库，是一个精简的 <code>MVVM</code>。它通过双向数据绑定把 <code>View</code> 层和 <code>Model</code> 层连接了起来。实际的 <code>DOM</code> 封装和输出格式都被抽象为了<code>Directives</code> 和 <code>Filters</code></p><p><strong><code>AngularJS</code></strong></p><p>是一个比较完善的前端<code>MVVM</code>框架，包含模板，数据双向绑定，路由，模块化，服务，依赖注入等所有功能，模板功能强大丰富，自带了丰富的 <code>Angular</code>指令</p><p><strong><code>react</code></strong></p><p><code>React</code> 仅仅是 <code>VIEW</code> 层是<code>facebook</code>公司。推出的一个用于构建<code>UI</code>的一个库，能够实现服务器端的渲染。用了<code>virtual dom</code>，所以性能很好。</p><h3 id="_3、什么是-async-await-及其如何工作" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#3%E4%BB%80%E4%B9%88%E6%98%AF-async/await-%E5%8F%8A%E5%85%B6%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C" target="_blank" rel="noreferrer">3、什么是 <code>async/await</code> 及其如何工作？</a> <a class="header-anchor" href="#_3、什么是-async-await-及其如何工作" aria-label="Permalink to &quot;[3、什么是 \`async/await\` 及其如何工作？](https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript最新面试题及答案附答案汇总.md#3什么是-async/await-及其如何工作)&quot;">​</a></h3><p><code>async/await</code>是 JS 中编写异步或非阻塞代码的新方法。它建立在<strong>Promises</strong>之上，让异步代码的可读性和简洁度都更高。</p><p><code>async/await</code>是 JS 中编写异步或非阻塞代码的新方法。它建立在<code>Promises</code>之上，相对于 Promise 和回调，它的可读性和简洁度都更高。但是，在使用此功能之前，我们必须先学习<code>Promises</code>的基础知识，因为正如我之前所说，它是基于<code>Promise</code>构建的，这意味着幕后使用仍然是<strong>Promise</strong>。</p><p><strong>使用 Promise</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function callApi() {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return fetch(&quot;url/to/api/endpoint&quot;)</span></span>
<span class="line"><span style="color:#f6f6f4;">    .then(resp =&gt; resp.json())</span></span>
<span class="line"><span style="color:#f6f6f4;">    .then(data =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">      //do something with &quot;data&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }).catch(err =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">      //do something with &quot;err&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">    });</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function callApi() {</span></span>
<span class="line"><span style="color:#24292e;">  return fetch(&quot;url/to/api/endpoint&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    .then(resp =&gt; resp.json())</span></span>
<span class="line"><span style="color:#24292e;">    .then(data =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">      //do something with &quot;data&quot;</span></span>
<span class="line"><span style="color:#24292e;">    }).catch(err =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">      //do something with &quot;err&quot;</span></span>
<span class="line"><span style="color:#24292e;">    });</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>使用async/await</strong></p><p>在<code>async/await</code>，我们使用 tru/catch 语法来捕获异常。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">async function callApi() {</span></span>
<span class="line"><span style="color:#f6f6f4;"> try {</span></span>
<span class="line"><span style="color:#f6f6f4;">   const resp = await fetch(&quot;url/to/api/endpoint&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">   const data = await resp.json();</span></span>
<span class="line"><span style="color:#f6f6f4;">   //do something with &quot;data&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;"> } catch (e) {</span></span>
<span class="line"><span style="color:#f6f6f4;">   //do something with &quot;err&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;"> }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">async function callApi() {</span></span>
<span class="line"><span style="color:#24292e;"> try {</span></span>
<span class="line"><span style="color:#24292e;">   const resp = await fetch(&quot;url/to/api/endpoint&quot;);</span></span>
<span class="line"><span style="color:#24292e;">   const data = await resp.json();</span></span>
<span class="line"><span style="color:#24292e;">   //do something with &quot;data&quot;</span></span>
<span class="line"><span style="color:#24292e;"> } catch (e) {</span></span>
<span class="line"><span style="color:#24292e;">   //do something with &quot;err&quot;</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>注意</strong>:使用 <code>async</code>关键声明函数会隐式返回一个<strong>Promise</strong>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const giveMeOne = async () =&gt; 1;</span></span>
<span class="line"><span style="color:#f6f6f4;">giveMeOne()</span></span>
<span class="line"><span style="color:#f6f6f4;">  .then((num) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">    console.log(num); // logs 1</span></span>
<span class="line"><span style="color:#f6f6f4;">  });</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const giveMeOne = async () =&gt; 1;</span></span>
<span class="line"><span style="color:#24292e;">giveMeOne()</span></span>
<span class="line"><span style="color:#24292e;">  .then((num) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(num); // logs 1</span></span>
<span class="line"><span style="color:#24292e;">  });</span></span></code></pre></div><p><strong>注意:</strong><code>await</code>关键字只能在<code>async function</code>中使用。在任何非<strong>async function</strong>的函数中使用<code>await</code>关键字都会抛出错误。<code>await</code>关键字在执行下一行代码之前等待右侧表达式(可能是一个<strong>Promise</strong>)返回。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const giveMeOne = async () =&gt; 1;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">function getOne() {</span></span>
<span class="line"><span style="color:#f6f6f4;">  try {</span></span>
<span class="line"><span style="color:#f6f6f4;">    const num = await giveMeOne();</span></span>
<span class="line"><span style="color:#f6f6f4;">    console.log(num);</span></span>
<span class="line"><span style="color:#f6f6f4;">  } catch (e) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    console.log(e);</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">// Uncaught SyntaxError: await is only valid in async function</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">async function getTwo() {</span></span>
<span class="line"><span style="color:#f6f6f4;">  try {</span></span>
<span class="line"><span style="color:#f6f6f4;">    const num1 = await giveMeOne(); // 这行会等待右侧表达式执行完成</span></span>
<span class="line"><span style="color:#f6f6f4;">    const num2 = await giveMeOne(); </span></span>
<span class="line"><span style="color:#f6f6f4;">    return num1 + num2;</span></span>
<span class="line"><span style="color:#f6f6f4;">  } catch (e) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    console.log(e);</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">await getTwo(); // 2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const giveMeOne = async () =&gt; 1;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function getOne() {</span></span>
<span class="line"><span style="color:#24292e;">  try {</span></span>
<span class="line"><span style="color:#24292e;">    const num = await giveMeOne();</span></span>
<span class="line"><span style="color:#24292e;">    console.log(num);</span></span>
<span class="line"><span style="color:#24292e;">  } catch (e) {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(e);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// Uncaught SyntaxError: await is only valid in async function</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">async function getTwo() {</span></span>
<span class="line"><span style="color:#24292e;">  try {</span></span>
<span class="line"><span style="color:#24292e;">    const num1 = await giveMeOne(); // 这行会等待右侧表达式执行完成</span></span>
<span class="line"><span style="color:#24292e;">    const num2 = await giveMeOne(); </span></span>
<span class="line"><span style="color:#24292e;">    return num1 + num2;</span></span>
<span class="line"><span style="color:#24292e;">  } catch (e) {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(e);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">await getTwo(); // 2</span></span></code></pre></div><h3 id="_4、实现异步的方式有哪些" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#4%E5%AE%9E%E7%8E%B0%E5%BC%82%E6%AD%A5%E7%9A%84%E6%96%B9%E5%BC%8F%E6%9C%89%E5%93%AA%E4%BA%9B" target="_blank" rel="noreferrer">4、实现异步的方式有哪些？</a> <a class="header-anchor" href="#_4、实现异步的方式有哪些" aria-label="Permalink to &quot;[4、实现异步的方式有哪些？](https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript最新面试题及答案附答案汇总.md#4实现异步的方式有哪些)&quot;">​</a></h3><p><strong>1、</strong> 回调函数模式：将需要异步执行的函数作为回调函数执行，其缺点在于处理复杂逻辑异步逻辑时，会造成回调地狱(回调嵌套层数太多，代码结构混乱)；</p><p><strong>2、</strong> 事件监听模式：采用事件驱动的思想，当某一事件发生时触发执行异步函数，其缺点在于整个代码全部得变为事件驱动模式，难以分辨主流程；</p><p><strong>3、</strong> 发布订阅模式：当异步任务执行完成时发布消息给信号中心，其他任务通过在信号中心中订阅消息来确定自己是否开始执行；</p><p><strong>4、</strong> Promise(ES6)：<code>Promise</code>对象共有三种状态<code>pending</code>(初始化状态)、<code>fulfilled</code>(成功状态)、<code>rejected</code>(失败状态)。</p><p><strong>5、</strong> async/await(ES7)：基于<code>Promise</code>实现的异步函数； （6）利用生成器实现。</p><h3 id="_5、javascript有几种类型的值-你能画一下他们的内存图吗" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#5javascript%E6%9C%89%E5%87%A0%E7%A7%8D%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%80%BC%E4%BD%A0%E8%83%BD%E7%94%BB%E4%B8%80%E4%B8%8B%E4%BB%96%E4%BB%AC%E7%9A%84%E5%86%85%E5%AD%98%E5%9B%BE%E5%90%97" target="_blank" rel="noreferrer">5、JavaScript有几种类型的值？，你能画一下他们的内存图吗？</a> <a class="header-anchor" href="#_5、javascript有几种类型的值-你能画一下他们的内存图吗" aria-label="Permalink to &quot;[5、JavaScript有几种类型的值？，你能画一下他们的内存图吗？](https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript最新面试题及答案附答案汇总.md#5javascript有几种类型的值你能画一下他们的内存图吗)&quot;">​</a></h3><p><strong>1、</strong> 栈：原始数据类型（<code>Undefined</code>，<code>Null</code>，<code>Boolean</code>，<code>Numbe</code>r、<code>String</code>）</p><p><strong>2、</strong> 堆：引用数据类型（对象、数组和函数）</p><p><strong>3、</strong> 两种类型的区别是：存储位置不同；</p><p><strong>4、</strong> 原始数据类型直接存储在栈(<code>stack</code>)中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；</p><p><strong>5、</strong> 引用数据类型存储在堆(<code>heap</code>)中的对象,占据空间大、大小不固定,如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其</p><p><strong>6、</strong> 在栈中的地址，取得地址后从堆中获得实体</p><p>![33_1.png][33_1.png]</p><h3 id="_6、介绍js的基本数据类型" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#6%E4%BB%8B%E7%BB%8Djs%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B" target="_blank" rel="noreferrer">6、介绍js的基本数据类型</a> <a class="header-anchor" href="#_6、介绍js的基本数据类型" aria-label="Permalink to &quot;[6、介绍js的基本数据类型](https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript最新面试题及答案附答案汇总.md#6介绍js的基本数据类型)&quot;">​</a></h3><p><code>Undefined</code>、<code>Null</code>、<code>Boolean</code>、<code>Number</code>、<code>String</code></p><h3 id="_7、eval是做什么的" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#7eval%E6%98%AF%E5%81%9A%E4%BB%80%E4%B9%88%E7%9A%84" target="_blank" rel="noreferrer">7、eval是做什么的？</a> <a class="header-anchor" href="#_7、eval是做什么的" aria-label="Permalink to &quot;[7、eval是做什么的？](https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript最新面试题及答案附答案汇总.md#7eval是做什么的)&quot;">​</a></h3><p><strong>1、</strong> 它的功能是把对应的字符串解析成<code>JS</code>代码并运行</p><p><strong>2、</strong> 应该避免使用<code>eval</code>，不安全，非常耗性能（<code>2</code>次，一次解析成<code>js</code>语句，一次执行）</p><p><strong>3、</strong> 由<code>JSON</code>字符串转换为JSON对象的时候可以用<code>eval，var obj =eval(&#39;(&#39;+ str +&#39;)&#39;)</code></p><h3 id="_8、undefined-和-null-有什么区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#8undefined-%E5%92%8C-null-%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">8、undefined 和 null 有什么区别？</a> <a class="header-anchor" href="#_8、undefined-和-null-有什么区别" aria-label="Permalink to &quot;[8、undefined 和 null 有什么区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript最新面试题及答案附答案汇总.md#8undefined-和-null-有什么区别)&quot;">​</a></h3><p>在理解 <code>undefined</code> 和 <code>null</code> 的差异之前，我们先来看看它们的相似点。</p><p><strong>它们都属于 JavaScript 的 7 种基本类型。</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">let primitiveTypes = [&#39;string&#39;,&#39;number&#39;,&#39;null&#39;,&#39;undefined&#39;,&#39;boolean&#39;,&#39;symbol&#39;, &#39;bigint&#39;];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">let primitiveTypes = [&#39;string&#39;,&#39;number&#39;,&#39;null&#39;,&#39;undefined&#39;,&#39;boolean&#39;,&#39;symbol&#39;, &#39;bigint&#39;];</span></span></code></pre></div><p>它们是属于 falsy 值类型，可以使用 <code>Boolean(value)</code> 或 <code>!!value</code> 将其转换为布尔值时，值为<code>false</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">console.log(!!null); // false</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(!!undefined); // false</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(Boolean(null)); // false</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(Boolean(undefined)); // false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">console.log(!!null); // false</span></span>
<span class="line"><span style="color:#24292e;">console.log(!!undefined); // false</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">console.log(Boolean(null)); // false</span></span>
<span class="line"><span style="color:#24292e;">console.log(Boolean(undefined)); // false</span></span></code></pre></div><p>接着来看看它们的区别。</p><p><code>undefined</code> 是未指定特定值的变量的默认值，或者没有显式返回值的函数，如：<code>console.log(1)</code>，还包括对象中不存在的属性，这些 JS 引擎都会为其分配 <code>undefined</code> 值。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">let _thisIsUndefined;</span></span>
<span class="line"><span style="color:#f6f6f4;">const doNothing = () =&gt; {};</span></span>
<span class="line"><span style="color:#f6f6f4;">const someObj = {</span></span>
<span class="line"><span style="color:#f6f6f4;">  a : &quot;ay&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">  b : &quot;bee&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">  c : &quot;si&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(_thisIsUndefined); // undefined</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(doNothing()); // undefined</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(someObj[&quot;d&quot;]); // undefined</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">let _thisIsUndefined;</span></span>
<span class="line"><span style="color:#24292e;">const doNothing = () =&gt; {};</span></span>
<span class="line"><span style="color:#24292e;">const someObj = {</span></span>
<span class="line"><span style="color:#24292e;">  a : &quot;ay&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  b : &quot;bee&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  c : &quot;si&quot;</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">console.log(_thisIsUndefined); // undefined</span></span>
<span class="line"><span style="color:#24292e;">console.log(doNothing()); // undefined</span></span>
<span class="line"><span style="color:#24292e;">console.log(someObj[&quot;d&quot;]); // undefined</span></span></code></pre></div><p><code>null</code> 是『不代表任何值的值』。<code>null</code>是已明确定义给变量的值。在此示例中，当<code>fs.readFile</code>方法未引发错误时，我们将获得<code>null</code>值。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">fs.readFile(&#39;path/to/file&#39;, (e,data) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">   console.log(e); // 当没有错误发生时，打印 null</span></span>
<span class="line"><span style="color:#f6f6f4;">   if(e){</span></span>
<span class="line"><span style="color:#f6f6f4;">     console.log(e);</span></span>
<span class="line"><span style="color:#f6f6f4;">   }</span></span>
<span class="line"><span style="color:#f6f6f4;">   console.log(data);</span></span>
<span class="line"><span style="color:#f6f6f4;"> });</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">fs.readFile(&#39;path/to/file&#39;, (e,data) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">   console.log(e); // 当没有错误发生时，打印 null</span></span>
<span class="line"><span style="color:#24292e;">   if(e){</span></span>
<span class="line"><span style="color:#24292e;">     console.log(e);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">   console.log(data);</span></span>
<span class="line"><span style="color:#24292e;"> });</span></span></code></pre></div><p>在比较<code>null</code>和<code>undefined</code>时，我们使用<code>==</code>时得到<code>true</code>，使用<code>===</code>时得到<code>false</code>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">console.log(null == undefined); // true</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(null === undefined); // false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">console.log(null == undefined); // true</span></span>
<span class="line"><span style="color:#24292e;">console.log(null === undefined); // false</span></span></code></pre></div><h3 id="_9、事件委托-有什么好处" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#9%E4%BA%8B%E4%BB%B6%E5%A7%94%E6%89%98%E6%9C%89%E4%BB%80%E4%B9%88%E5%A5%BD%E5%A4%84" target="_blank" rel="noreferrer">9、事件委托？有什么好处?</a> <a class="header-anchor" href="#_9、事件委托-有什么好处" aria-label="Permalink to &quot;[9、事件委托？有什么好处?](https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript最新面试题及答案附答案汇总.md#9事件委托有什么好处)&quot;">​</a></h3><p>利用冒泡的原理，把事件加到父级上，触发执行效果</p><p>好处：新添加的元素还会有之前的事件；提高性能。</p><h3 id="_10、什么是ajax-如何实现" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#10%E4%BB%80%E4%B9%88%E6%98%AFajax%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0" target="_blank" rel="noreferrer">10、什么是AJAX？如何实现？</a> <a class="header-anchor" href="#_10、什么是ajax-如何实现" aria-label="Permalink to &quot;[10、什么是AJAX？如何实现？](https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript最新面试题及答案附答案汇总.md#10什么是ajax如何实现)&quot;">​</a></h3><p><code>ajax</code>是一种能够实现局部网页刷新的技术，可以使网页异步刷新。</p><p><code>ajax</code>的实现主要包括四个步骤：</p><p><strong>1、</strong> 创建核心对象<code>XMLhttpRequest</code>；</p><p><strong>2、</strong> 利用<code>open</code>方法打开与服务器的连接；</p><p><strong>3、</strong> 利用<code>send</code>方法发送请求；（&quot;POST&quot;请求时，还需额外设置请求头）</p><p><strong>4、</strong> 监听服务器响应，接收返回值。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">//1-创建核心对象</span></span>
<span class="line"><span style="color:#f6f6f4;">//该对象有兼容问题，低版本浏览器应使用ActiveXObject</span></span>
<span class="line"><span style="color:#f6f6f4;">const xthhp = new XMLHttpRequest();</span></span>
<span class="line"><span style="color:#f6f6f4;">//2-连接服务器</span></span>
<span class="line"><span style="color:#f6f6f4;">//open(method,url,async)</span></span>
<span class="line"><span style="color:#f6f6f4;">xhttp.open(&quot;POST&quot;, &quot;http://localhost:3000&quot;, true)</span></span>
<span class="line"><span style="color:#f6f6f4;">//设置请求头</span></span>
<span class="line"><span style="color:#f6f6f4;">xmlHttp.setRequestHeader(&quot;Content-Type&quot;, &quot;application/x-www-form-urlencoded&quot;)；</span></span>
<span class="line"><span style="color:#f6f6f4;">//3-发送请求</span></span>
<span class="line"><span style="color:#f6f6f4;">//send方法发送请求参数，如为GET方法，则在open中url后拼接</span></span>
<span class="line"><span style="color:#f6f6f4;">xhttp.send({</span></span>
<span class="line"><span style="color:#f6f6f4;">    _id: 123</span></span>
<span class="line"><span style="color:#f6f6f4;">})</span></span>
<span class="line"><span style="color:#f6f6f4;">//4-接收服务器响应</span></span>
<span class="line"><span style="color:#f6f6f4;">//onreadystatechange事件，会在xhttp的状态发生变化时自动调用</span></span>
<span class="line"><span style="color:#f6f6f4;">xhttp.onreadystatechange = function() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    //状态码共5种：0-未open  1-已open  2-已send  3-读取响应  4-响应读取结束</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (xhttp.readyState == 4 &amp;&amp; xhttp.status == 200) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        alert(&quot;ajax请求已完成&quot;)</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//1-创建核心对象</span></span>
<span class="line"><span style="color:#24292e;">//该对象有兼容问题，低版本浏览器应使用ActiveXObject</span></span>
<span class="line"><span style="color:#24292e;">const xthhp = new XMLHttpRequest();</span></span>
<span class="line"><span style="color:#24292e;">//2-连接服务器</span></span>
<span class="line"><span style="color:#24292e;">//open(method,url,async)</span></span>
<span class="line"><span style="color:#24292e;">xhttp.open(&quot;POST&quot;, &quot;http://localhost:3000&quot;, true)</span></span>
<span class="line"><span style="color:#24292e;">//设置请求头</span></span>
<span class="line"><span style="color:#24292e;">xmlHttp.setRequestHeader(&quot;Content-Type&quot;, &quot;application/x-www-form-urlencoded&quot;)；</span></span>
<span class="line"><span style="color:#24292e;">//3-发送请求</span></span>
<span class="line"><span style="color:#24292e;">//send方法发送请求参数，如为GET方法，则在open中url后拼接</span></span>
<span class="line"><span style="color:#24292e;">xhttp.send({</span></span>
<span class="line"><span style="color:#24292e;">    _id: 123</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">//4-接收服务器响应</span></span>
<span class="line"><span style="color:#24292e;">//onreadystatechange事件，会在xhttp的状态发生变化时自动调用</span></span>
<span class="line"><span style="color:#24292e;">xhttp.onreadystatechange = function() {</span></span>
<span class="line"><span style="color:#24292e;">    //状态码共5种：0-未open  1-已open  2-已send  3-读取响应  4-响应读取结束</span></span>
<span class="line"><span style="color:#24292e;">    if (xhttp.readyState == 4 &amp;&amp; xhttp.status == 200) {</span></span>
<span class="line"><span style="color:#24292e;">        alert(&quot;ajax请求已完成&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="_11、什么是执行上下文和执行栈" tabindex="-1">11、什么是执行上下文和执行栈？ <a class="header-anchor" href="#_11、什么是执行上下文和执行栈" aria-label="Permalink to &quot;11、什么是执行上下文和执行栈？&quot;">​</a></h3><h3 id="_12、如何检查对象中是否存在某个属性" tabindex="-1">12、如何检查对象中是否存在某个属性？ <a class="header-anchor" href="#_12、如何检查对象中是否存在某个属性" aria-label="Permalink to &quot;12、如何检查对象中是否存在某个属性？&quot;">​</a></h3><h3 id="_13、-map和-each有什么区别" tabindex="-1">13、$$.map和$$.each有什么区别### <a class="header-anchor" href="#_13、-map和-each有什么区别" aria-label="Permalink to &quot;13、$$.map和$$.each有什么区别###&quot;">​</a></h3><h3 id="_14、简述下工作流程" tabindex="-1">14、简述下工作流程### <a class="header-anchor" href="#_14、简述下工作流程" aria-label="Permalink to &quot;14、简述下工作流程###&quot;">​</a></h3><h3 id="_15、defer和async" tabindex="-1">15、defer和async <a class="header-anchor" href="#_15、defer和async" aria-label="Permalink to &quot;15、defer和async&quot;">​</a></h3><h3 id="_16、-use-strict-是干嘛用的" tabindex="-1">16、&#39;use strict&#39; 是干嘛用的？ <a class="header-anchor" href="#_16、-use-strict-是干嘛用的" aria-label="Permalink to &quot;16、&#39;use strict&#39; 是干嘛用的？&quot;">​</a></h3><h3 id="_17、split-join" tabindex="-1">17、split() join()? <a class="header-anchor" href="#_17、split-join" aria-label="Permalink to &quot;17、split() join()?&quot;">​</a></h3><h3 id="_18、介绍js有哪些内置对象" tabindex="-1">18、介绍js有哪些内置对象？ <a class="header-anchor" href="#_18、介绍js有哪些内置对象" aria-label="Permalink to &quot;18、介绍js有哪些内置对象？&quot;">​</a></h3><h3 id="_19、什么是构造函数-与普通函数有什么区别" tabindex="-1">19、什么是构造函数？与普通函数有什么区别? <a class="header-anchor" href="#_19、什么是构造函数-与普通函数有什么区别" aria-label="Permalink to &quot;19、什么是构造函数？与普通函数有什么区别?&quot;">​</a></h3><h3 id="_20、什么是移动端的300ms延迟-什么是点击穿透-解决方案" tabindex="-1">20、什么是移动端的300ms延迟？什么是点击穿透？解决方案? <a class="header-anchor" href="#_20、什么是移动端的300ms延迟-什么是点击穿透-解决方案" aria-label="Permalink to &quot;20、什么是移动端的300ms延迟？什么是点击穿透？解决方案?&quot;">​</a></h3><h3 id="_21、上一个项目是什么-主要负责哪些-购物车流程-支付功能" tabindex="-1">21、上一个项目是什么？主要负责哪些？购物车流程?支付功能? <a class="header-anchor" href="#_21、上一个项目是什么-主要负责哪些-购物车流程-支付功能" aria-label="Permalink to &quot;21、上一个项目是什么？主要负责哪些？购物车流程?支付功能?&quot;">​</a></h3><h3 id="_22、如何在不使用-模运算符的情况下检查一个数字是否是偶数" tabindex="-1">22、如何在不使用<code>%</code>模运算符的情况下检查一个数字是否是偶数？ <a class="header-anchor" href="#_22、如何在不使用-模运算符的情况下检查一个数字是否是偶数" aria-label="Permalink to &quot;22、如何在不使用\`%\`模运算符的情况下检查一个数字是否是偶数？&quot;">​</a></h3><h3 id="_23、jq中-attr-和-prop-有什么区别" tabindex="-1">23、Jq中 attr 和 prop 有什么区别### <a class="header-anchor" href="#_23、jq中-attr-和-prop-有什么区别" aria-label="Permalink to &quot;23、Jq中 attr 和 prop 有什么区别###&quot;">​</a></h3><h3 id="_24、那些操作会造成内存泄漏" tabindex="-1">24、那些操作会造成内存泄漏？ <a class="header-anchor" href="#_24、那些操作会造成内存泄漏" aria-label="Permalink to &quot;24、那些操作会造成内存泄漏？&quot;">​</a></h3><h3 id="_25、如何理解同步和异步" tabindex="-1">25、如何理解同步和异步？ <a class="header-anchor" href="#_25、如何理解同步和异步" aria-label="Permalink to &quot;25、如何理解同步和异步？&quot;">​</a></h3><h3 id="_26、js是如何实现异步的" tabindex="-1">26、JS是如何实现异步的？ <a class="header-anchor" href="#_26、js是如何实现异步的" aria-label="Permalink to &quot;26、JS是如何实现异步的？&quot;">​</a></h3><h3 id="_27、call和apply-有什么好处" tabindex="-1">27、call和apply 有什么好处？ <a class="header-anchor" href="#_27、call和apply-有什么好处" aria-label="Permalink to &quot;27、call和apply 有什么好处？&quot;">​</a></h3><h3 id="_28、ajax-是什么" tabindex="-1">28、AJAX 是什么？ <a class="header-anchor" href="#_28、ajax-是什么" aria-label="Permalink to &quot;28、AJAX 是什么？&quot;">​</a></h3><h3 id="_29、什么是箭头函数" tabindex="-1">29、什么是箭头函数？ <a class="header-anchor" href="#_29、什么是箭头函数" aria-label="Permalink to &quot;29、什么是箭头函数？&quot;">​</a></h3>`,85),p=[l];function t(c,r,i,d,f,u){return a(),n("div",null,p)}const g=s(o,[["render",t]]);export{y as __pageData,g as default};
