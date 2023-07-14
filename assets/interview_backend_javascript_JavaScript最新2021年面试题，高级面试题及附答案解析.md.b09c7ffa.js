import{_ as s,o as a,c as n,V as e}from"./chunks/framework.c6d8cbec.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/javascript/JavaScript最新2021年面试题，高级面试题及附答案解析.md","filePath":"interview/backend/javascript/JavaScript最新2021年面试题，高级面试题及附答案解析.md"}'),l={name:"interview/backend/javascript/JavaScript最新2021年面试题，高级面试题及附答案解析.md"},p=e(`<h3 id="_1、强制转换-显式转换-隐式转换" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#1%E5%BC%BA%E5%88%B6%E8%BD%AC%E6%8D%A2-%E6%98%BE%E5%BC%8F%E8%BD%AC%E6%8D%A2-%E9%9A%90%E5%BC%8F%E8%BD%AC%E6%8D%A2" target="_blank" rel="noreferrer">1、强制转换 显式转换 隐式转换?</a> <a class="header-anchor" href="#_1、强制转换-显式转换-隐式转换" aria-label="Permalink to &quot;[1、强制转换 显式转换 隐式转换?](https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript最新2021年面试题，高级面试题及附答案解析.md#1强制转换-显式转换-隐式转换)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">//强制类型转换：</span></span>
<span class="line"><span style="color:#f6f6f4;">Boolean(0)   // =false - 零</span></span>
<span class="line"><span style="color:#f6f6f4;">Boolean(new object())   // =true - 对象</span></span>
<span class="line"><span style="color:#f6f6f4;">Number(undefined)       // =  NaN</span></span>
<span class="line"><span style="color:#f6f6f4;">Number(null)              // =0</span></span>
<span class="line"><span style="color:#f6f6f4;">String(null)              // =&quot;null&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">parseInt( )</span></span>
<span class="line"><span style="color:#f6f6f4;">parseFloat( )</span></span>
<span class="line"><span style="color:#f6f6f4;">JSON.parse( )</span></span>
<span class="line"><span style="color:#f6f6f4;">JSON.stringify ( )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//强制类型转换：</span></span>
<span class="line"><span style="color:#24292e;">Boolean(0)   // =false - 零</span></span>
<span class="line"><span style="color:#24292e;">Boolean(new object())   // =true - 对象</span></span>
<span class="line"><span style="color:#24292e;">Number(undefined)       // =  NaN</span></span>
<span class="line"><span style="color:#24292e;">Number(null)              // =0</span></span>
<span class="line"><span style="color:#24292e;">String(null)              // =&quot;null&quot;</span></span>
<span class="line"><span style="color:#24292e;">parseInt( )</span></span>
<span class="line"><span style="color:#24292e;">parseFloat( )</span></span>
<span class="line"><span style="color:#24292e;">JSON.parse( )</span></span>
<span class="line"><span style="color:#24292e;">JSON.stringify ( )</span></span></code></pre></div><p>隐式类型转换：</p><p>在使用算术运算符时，运算符两边的数据类型可以是任意的，比如，一个字符串可以和数字相加。之所以不同的数据类型之间可以做运算，是因为JavaScript引擎在运算之前会悄悄的把他们进行了隐式类型转换的</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">（例如：x+&quot;&quot; //等价于String(x)  </span></span>
<span class="line"><span style="color:#f6f6f4;">\\+x //等价于Number(x)  </span></span>
<span class="line"><span style="color:#f6f6f4;">x-0 //同上  </span></span>
<span class="line"><span style="color:#f6f6f4;">!!x //等价于Boolean(x),是双叹号）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">（例如：x+&quot;&quot; //等价于String(x)  </span></span>
<span class="line"><span style="color:#24292e;">\\+x //等价于Number(x)  </span></span>
<span class="line"><span style="color:#24292e;">x-0 //同上  </span></span>
<span class="line"><span style="color:#24292e;">!!x //等价于Boolean(x),是双叹号）</span></span></code></pre></div><p><strong>显式转换：</strong></p><p>如果程序要求一定要将某一类型的数据转换为另一种类型，则可以利用强制类型转换运算符进行转换，这种强制转换过程称为显示转换。</p><p>显示转换是你定义让这个值类型转换成你要用的值类型，是底到高的转换。例 int 到float就可以直接转，int i=5,想把他转换成char类型，就用显式转换（char）i</p><h3 id="_2、javascript-中的虚值是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#2javascript-%E4%B8%AD%E7%9A%84%E8%99%9A%E5%80%BC%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">2、JavaScript 中的虚值是什么？</a> <a class="header-anchor" href="#_2、javascript-中的虚值是什么" aria-label="Permalink to &quot;[2、JavaScript 中的虚值是什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript最新2021年面试题，高级面试题及附答案解析.md#2javascript-中的虚值是什么)&quot;">​</a></h3><p><code>const falsyValues = [&#39;&#39;, 0, null, undefined, NaN, false];</code></p><p>简单的来说虚值就是是在转换为布尔值时变为 <code>false</code> 的值。</p><h3 id="_3、简述ajax执行流程" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#3%E7%AE%80%E8%BF%B0ajax%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B" target="_blank" rel="noreferrer">3、简述ajax执行流程</a> <a class="header-anchor" href="#_3、简述ajax执行流程" aria-label="Permalink to &quot;[3、简述ajax执行流程](https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript最新2021年面试题，高级面试题及附答案解析.md#3简述ajax执行流程)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">基本步骤：</span></span>
<span class="line"><span style="color:#f6f6f4;">var xhr =null;//创建对象 </span></span>
<span class="line"><span style="color:#f6f6f4;">if(window.XMLHttpRequest){</span></span>
<span class="line"><span style="color:#f6f6f4;">       xhr = new XMLHttpRequest();</span></span>
<span class="line"><span style="color:#f6f6f4;">}else{</span></span>
<span class="line"><span style="color:#f6f6f4;">       xhr = new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">xhr.open(“方式”,”地址”,”标志位”);//初始化请求 </span></span>
<span class="line"><span style="color:#f6f6f4;">   xhr.setRequestHeader(“”,””);//设置http头信息 </span></span>
<span class="line"><span style="color:#f6f6f4;">xhr.onreadystatechange =function(){}//指定回调函数 </span></span>
<span class="line"><span style="color:#f6f6f4;">xhr.send();//发送请求</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">基本步骤：</span></span>
<span class="line"><span style="color:#24292e;">var xhr =null;//创建对象 </span></span>
<span class="line"><span style="color:#24292e;">if(window.XMLHttpRequest){</span></span>
<span class="line"><span style="color:#24292e;">       xhr = new XMLHttpRequest();</span></span>
<span class="line"><span style="color:#24292e;">}else{</span></span>
<span class="line"><span style="color:#24292e;">       xhr = new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">xhr.open(“方式”,”地址”,”标志位”);//初始化请求 </span></span>
<span class="line"><span style="color:#24292e;">   xhr.setRequestHeader(“”,””);//设置http头信息 </span></span>
<span class="line"><span style="color:#24292e;">xhr.onreadystatechange =function(){}//指定回调函数 </span></span>
<span class="line"><span style="color:#24292e;">xhr.send();//发送请求</span></span></code></pre></div><h3 id="_4、null-undefined-的区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#4nullundefined-%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">4、null，undefined 的区别？</a> <a class="header-anchor" href="#_4、null-undefined-的区别" aria-label="Permalink to &quot;[4、null，undefined 的区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript最新2021年面试题，高级面试题及附答案解析.md#4nullundefined-的区别)&quot;">​</a></h3><p>undefined表示变量声明但未初始化的值，null表示准备用来保存对象，还没有真正保存对象的值。从逻辑角度看，null表示一个空对象指针。</p><h3 id="_5、attribute和property的区别是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#5attribute%E5%92%8Cproperty%E7%9A%84%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">5、attribute和property的区别是什么？</a> <a class="header-anchor" href="#_5、attribute和property的区别是什么" aria-label="Permalink to &quot;[5、attribute和property的区别是什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript最新2021年面试题，高级面试题及附答案解析.md#5attribute和property的区别是什么)&quot;">​</a></h3><p><strong>1、</strong> <code>attribute</code>是<code>dom</code>元素在文档中作为<code>html</code>标签拥有的属性；</p><p><strong>2、</strong> <code>property</code>就是<code>dom</code>元素在<code>js</code>中作为对象拥有的属性。</p><p><strong>3、</strong> 对于<code>html</code>的标准属性来说，<code>attribute</code>和<code>property</code>是同步的，是会自动更新的</p><p><strong>4、</strong> 但是对于自定义的属性来说，他们是不同步的</p><h3 id="_6、什么是set对象-它是如何工作的" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#6%E4%BB%80%E4%B9%88%E6%98%AFset%E5%AF%B9%E8%B1%A1%E5%AE%83%E6%98%AF%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C%E7%9A%84" target="_blank" rel="noreferrer">6、什么是<code>Set</code>对象，它是如何工作的？</a> <a class="header-anchor" href="#_6、什么是set对象-它是如何工作的" aria-label="Permalink to &quot;[6、什么是\`Set\`对象，它是如何工作的？](https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript最新2021年面试题，高级面试题及附答案解析.md#6什么是set对象它是如何工作的)&quot;">​</a></h3><p><strong>Set</strong> 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。</p><p>我们可以使用<code>Set</code>构造函数创建<code>Set</code>实例。</p><p><code>const set1 = new Set(); const set2 = new Set([&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot;,&quot;d&quot;,&quot;e&quot;]);</code></p><p>我们可以使用<code>add</code>方法向<code>Set</code>实例中添加一个新值，因为<code>add</code>方法返回<code>Set</code>对象，所以我们可以以链式的方式再次使用<code>add</code>。如果一个值已经存在于<code>Set</code>对象中，那么它将不再被添加。</p><p><code>set2.add(&quot;f&quot;); set2.add(&quot;g&quot;).add(&quot;h&quot;).add(&quot;i&quot;).add(&quot;j&quot;).add(&quot;k&quot;).add(&quot;k&quot;); // 后一个『k』不会被添加到set对象中，因为它已经存在了</code></p><p>我们可以使用<code>has</code>方法检查<code>Set</code>实例中是否存在特定的值。</p><p><code>set2.has(&quot;a&quot;) // true set2.has(&quot;z&quot;) // true</code></p><p>我们可以使用<code>size</code>属性获得<code>Set</code>实例的长度。</p><p><code>set2.size // returns 10</code></p><p>可以使用<code>clear</code>方法删除 <code>Set</code> 中的数据。</p><p><code>set2.clear();</code></p><p>我们可以使用<code>Set</code>对象来删除数组中重复的元素。</p><p><code>const numbers = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 5]; const uniqueNums = [...new Set(numbers)]; // [1,2,3,4,5,6,7,8]</code></p><h3 id="_7、javascript-中-this-值是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#7javascript-%E4%B8%AD-this-%E5%80%BC%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">7、JavaScript 中 <code>this</code> 值是什么？</a> <a class="header-anchor" href="#_7、javascript-中-this-值是什么" aria-label="Permalink to &quot;[7、JavaScript 中 \`this\` 值是什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript最新2021年面试题，高级面试题及附答案解析.md#7javascript-中-this-值是什么)&quot;">​</a></h3><p>基本上，<code>this</code>指的是当前正在执行或调用该函数的对象的值。<code>this</code>值的变化取决于我们使用它的上下文和我们在哪里使用它。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const carDetails = {</span></span>
<span class="line"><span style="color:#f6f6f4;">  name: &quot;Ford Mustang&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">  yearBought: 2005,</span></span>
<span class="line"><span style="color:#f6f6f4;">  getName(){</span></span>
<span class="line"><span style="color:#f6f6f4;">    return this.name;</span></span>
<span class="line"><span style="color:#f6f6f4;">  },</span></span>
<span class="line"><span style="color:#f6f6f4;">  isRegistered: true</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(carDetails.getName()); // Ford Mustang</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const carDetails = {</span></span>
<span class="line"><span style="color:#24292e;">  name: &quot;Ford Mustang&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  yearBought: 2005,</span></span>
<span class="line"><span style="color:#24292e;">  getName(){</span></span>
<span class="line"><span style="color:#24292e;">    return this.name;</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  isRegistered: true</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">console.log(carDetails.getName()); // Ford Mustang</span></span></code></pre></div><p>这通常是我们期望结果的，因为在<code>getName</code>方法中我们返回<code>this.name</code>，在此上下文中，<code>this</code>指向的是<code>carDetails</code>对象，该对象当前是执行函数的“所有者”对象。</p><p>接下我们做些奇怪的事情：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">var name = &quot;Ford Ranger&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">var getCarName = carDetails.getName;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(getCarName()); // Ford Ranger</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var name = &quot;Ford Ranger&quot;;</span></span>
<span class="line"><span style="color:#24292e;">var getCarName = carDetails.getName;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">console.log(getCarName()); // Ford Ranger</span></span></code></pre></div><p>上面打印<code>Ford Ranger</code>，这很奇怪，因为在第一个<code>console.log</code>语句中打印的是<code>Ford Mustang</code>。这样做的原因是<code>getCarName</code>方法有一个不同的“所有者”对象，即<code>window</code>对象。在全局作用域中使用<code>var</code>关键字声明变量会在<code>window</code>对象中附加与变量名称相同的属性。请记住，当没有使用<code>“use strict”</code>时，在全局作用域中<code>this</code>指的是<code>window</code>对象。</p><p><code>console.log(getCarName === window.getCarName); // true console.log(getCarName === this.getCarName); // true</code></p><p>本例中的<code>this</code>和<code>window</code>引用同一个对象。</p><p>解决这个问题的一种方法是在函数中使用<code>apply</code>和<code>call</code>方法。</p><p><code>console.log(getCarName.apply(carDetails)); // Ford Mustang console.log(getCarName.call(carDetails)); // Ford Mustang</code></p><p><code>apply</code>和<code>call</code>方法期望第一个参数是一个对象，该对象是函数内部<code>this</code>的值。</p><p><code>IIFE</code>或<strong>立即执行的函数表达式</strong>，在全局作用域内声明的函数，对象内部方法中的匿名函数和内部函数的<code>this</code>具有默认值，该值指向<code>window</code>对象。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">(function (){</span></span>
<span class="line"><span style="color:#f6f6f4;"> console.log(this);</span></span>
<span class="line"><span style="color:#f6f6f4;">})(); // 打印 &quot;window&quot; 对象</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">function iHateThis(){</span></span>
<span class="line"><span style="color:#f6f6f4;">  console.log(this);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">iHateThis(); // 打印 &quot;window&quot; 对象</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">const myFavoriteObj = {</span></span>
<span class="line"><span style="color:#f6f6f4;"> guessThis(){</span></span>
<span class="line"><span style="color:#f6f6f4;">    function getName(){</span></span>
<span class="line"><span style="color:#f6f6f4;">      console.log(this.name);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    getName();</span></span>
<span class="line"><span style="color:#f6f6f4;"> },</span></span>
<span class="line"><span style="color:#f6f6f4;"> name: &#39;Marko Polo&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;"> thisIsAnnoying(callback){</span></span>
<span class="line"><span style="color:#f6f6f4;">   callback();</span></span>
<span class="line"><span style="color:#f6f6f4;"> }</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">myFavoriteObj.guessThis(); // 打印 &quot;window&quot; 对象</span></span>
<span class="line"><span style="color:#f6f6f4;">myFavoriteObj.thisIsAnnoying(function (){</span></span>
<span class="line"><span style="color:#f6f6f4;"> console.log(this); // 打印 &quot;window&quot; 对象</span></span>
<span class="line"><span style="color:#f6f6f4;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">(function (){</span></span>
<span class="line"><span style="color:#24292e;"> console.log(this);</span></span>
<span class="line"><span style="color:#24292e;">})(); // 打印 &quot;window&quot; 对象</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function iHateThis(){</span></span>
<span class="line"><span style="color:#24292e;">  console.log(this);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">iHateThis(); // 打印 &quot;window&quot; 对象</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const myFavoriteObj = {</span></span>
<span class="line"><span style="color:#24292e;"> guessThis(){</span></span>
<span class="line"><span style="color:#24292e;">    function getName(){</span></span>
<span class="line"><span style="color:#24292e;">      console.log(this.name);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    getName();</span></span>
<span class="line"><span style="color:#24292e;"> },</span></span>
<span class="line"><span style="color:#24292e;"> name: &#39;Marko Polo&#39;,</span></span>
<span class="line"><span style="color:#24292e;"> thisIsAnnoying(callback){</span></span>
<span class="line"><span style="color:#24292e;">   callback();</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">myFavoriteObj.guessThis(); // 打印 &quot;window&quot; 对象</span></span>
<span class="line"><span style="color:#24292e;">myFavoriteObj.thisIsAnnoying(function (){</span></span>
<span class="line"><span style="color:#24292e;"> console.log(this); // 打印 &quot;window&quot; 对象</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><p>如果我们要获取<code>myFavoriteObj</code>对象中的<code>name</code>属性（即<strong>Marko Polo</strong>）的值，则有两种方法可以解决此问题。</p><p>一种是将 <code>this</code> 值保存在变量中。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const myFavoriteObj = {</span></span>
<span class="line"><span style="color:#f6f6f4;"> guessThis(){</span></span>
<span class="line"><span style="color:#f6f6f4;">  const self = this; // 把 this 值保存在 self 变量中</span></span>
<span class="line"><span style="color:#f6f6f4;">  function getName(){</span></span>
<span class="line"><span style="color:#f6f6f4;">    console.log(self.name);</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">  getName();</span></span>
<span class="line"><span style="color:#f6f6f4;"> },</span></span>
<span class="line"><span style="color:#f6f6f4;"> name: &#39;Marko Polo&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;"> thisIsAnnoying(callback){</span></span>
<span class="line"><span style="color:#f6f6f4;">   callback();</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const myFavoriteObj = {</span></span>
<span class="line"><span style="color:#24292e;"> guessThis(){</span></span>
<span class="line"><span style="color:#24292e;">  const self = this; // 把 this 值保存在 self 变量中</span></span>
<span class="line"><span style="color:#24292e;">  function getName(){</span></span>
<span class="line"><span style="color:#24292e;">    console.log(self.name);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  getName();</span></span>
<span class="line"><span style="color:#24292e;"> },</span></span>
<span class="line"><span style="color:#24292e;"> name: &#39;Marko Polo&#39;,</span></span>
<span class="line"><span style="color:#24292e;"> thisIsAnnoying(callback){</span></span>
<span class="line"><span style="color:#24292e;">   callback();</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><p>第二种方式是使用箭头函数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const myFavoriteObj = {</span></span>
<span class="line"><span style="color:#f6f6f4;">  guessThis(){</span></span>
<span class="line"><span style="color:#f6f6f4;">     const getName = () =&gt; { </span></span>
<span class="line"><span style="color:#f6f6f4;">       console.log(this.name);</span></span>
<span class="line"><span style="color:#f6f6f4;">     }</span></span>
<span class="line"><span style="color:#f6f6f4;">     getName();</span></span>
<span class="line"><span style="color:#f6f6f4;">  },</span></span>
<span class="line"><span style="color:#f6f6f4;">  name: &#39;Marko Polo&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">  thisIsAnnoying(callback){</span></span>
<span class="line"><span style="color:#f6f6f4;">   callback();</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const myFavoriteObj = {</span></span>
<span class="line"><span style="color:#24292e;">  guessThis(){</span></span>
<span class="line"><span style="color:#24292e;">     const getName = () =&gt; { </span></span>
<span class="line"><span style="color:#24292e;">       console.log(this.name);</span></span>
<span class="line"><span style="color:#24292e;">     }</span></span>
<span class="line"><span style="color:#24292e;">     getName();</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  name: &#39;Marko Polo&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  thisIsAnnoying(callback){</span></span>
<span class="line"><span style="color:#24292e;">   callback();</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><p>箭头函数没有自己的 <code>this</code>。它复制了这个封闭的词法作用域中<code>this</code>值，在这个例子中，<code>this</code>值在<code>getName</code>内部函数之外，也就是<code>myFavoriteObj</code>对象。</p><h3 id="_8、-div-ab-和-ab-div-哪个效率高" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#8$$&#39;div+ab&#39;%E5%92%8C$$&#39;ab+div&#39;-%E5%93%AA%E4%B8%AA%E6%95%88%E7%8E%87%E9%AB%98" target="_blank" rel="noreferrer">8、$$(&#39;div+.ab&#39;)和$$(&#39;.ab+div&#39;) 哪个效率高？</a> <a class="header-anchor" href="#_8、-div-ab-和-ab-div-哪个效率高" aria-label="Permalink to &quot;[8、$$(&#39;div+.ab&#39;)和$$(&#39;.ab+div&#39;) 哪个效率高？](https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript最新2021年面试题，高级面试题及附答案解析.md#8$$&#39;div+ab&#39;和$$&#39;ab+div&#39;-哪个效率高)&quot;">​</a></h3><p>$(&#39;div+.ab&#39;)效率高</p><h3 id="_9、什么是类" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#9%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB" target="_blank" rel="noreferrer">9、什么是类？</a> <a class="header-anchor" href="#_9、什么是类" aria-label="Permalink to &quot;[9、什么是类？](https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript最新2021年面试题，高级面试题及附答案解析.md#9什么是类)&quot;">​</a></h3><p><code>类(class)</code>是在 JS 中编写构造函数的新方法。它是使用构造函数的语法糖，在底层中使用仍然是原型和基于原型的继承。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">//ES5 Version</span></span>
<span class="line"><span style="color:#f6f6f4;"> function Person(firstName, lastName, age, address){</span></span>
<span class="line"><span style="color:#f6f6f4;">    this.firstName = firstName;</span></span>
<span class="line"><span style="color:#f6f6f4;">    this.lastName = lastName;</span></span>
<span class="line"><span style="color:#f6f6f4;">    this.age = age;</span></span>
<span class="line"><span style="color:#f6f6f4;">    this.address = address;</span></span>
<span class="line"><span style="color:#f6f6f4;"> }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> Person.self = function(){</span></span>
<span class="line"><span style="color:#f6f6f4;">   return this;</span></span>
<span class="line"><span style="color:#f6f6f4;"> }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> Person.prototype.toString = function(){</span></span>
<span class="line"><span style="color:#f6f6f4;">   return &quot;[object Person]&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;"> }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> Person.prototype.getFullName = function (){</span></span>
<span class="line"><span style="color:#f6f6f4;">   return this.firstName + &quot; &quot; + this.lastName;</span></span>
<span class="line"><span style="color:#f6f6f4;"> }  </span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> //ES6 Version</span></span>
<span class="line"><span style="color:#f6f6f4;"> class Person {</span></span>
<span class="line"><span style="color:#f6f6f4;">    constructor(firstName, lastName, age, address){</span></span>
<span class="line"><span style="color:#f6f6f4;">        this.lastName = lastName;</span></span>
<span class="line"><span style="color:#f6f6f4;">        this.firstName = firstName;</span></span>
<span class="line"><span style="color:#f6f6f4;">        this.age = age;</span></span>
<span class="line"><span style="color:#f6f6f4;">        this.address = address;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    static self() {</span></span>
<span class="line"><span style="color:#f6f6f4;">       return this;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    toString(){</span></span>
<span class="line"><span style="color:#f6f6f4;">       return &quot;[object Person]&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    getFullName(){</span></span>
<span class="line"><span style="color:#f6f6f4;">       return \`\${this.firstName} \${this.lastName}\`;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"> }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//ES5 Version</span></span>
<span class="line"><span style="color:#24292e;"> function Person(firstName, lastName, age, address){</span></span>
<span class="line"><span style="color:#24292e;">    this.firstName = firstName;</span></span>
<span class="line"><span style="color:#24292e;">    this.lastName = lastName;</span></span>
<span class="line"><span style="color:#24292e;">    this.age = age;</span></span>
<span class="line"><span style="color:#24292e;">    this.address = address;</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> Person.self = function(){</span></span>
<span class="line"><span style="color:#24292e;">   return this;</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> Person.prototype.toString = function(){</span></span>
<span class="line"><span style="color:#24292e;">   return &quot;[object Person]&quot;;</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> Person.prototype.getFullName = function (){</span></span>
<span class="line"><span style="color:#24292e;">   return this.firstName + &quot; &quot; + this.lastName;</span></span>
<span class="line"><span style="color:#24292e;"> }  </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> //ES6 Version</span></span>
<span class="line"><span style="color:#24292e;"> class Person {</span></span>
<span class="line"><span style="color:#24292e;">    constructor(firstName, lastName, age, address){</span></span>
<span class="line"><span style="color:#24292e;">        this.lastName = lastName;</span></span>
<span class="line"><span style="color:#24292e;">        this.firstName = firstName;</span></span>
<span class="line"><span style="color:#24292e;">        this.age = age;</span></span>
<span class="line"><span style="color:#24292e;">        this.address = address;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    static self() {</span></span>
<span class="line"><span style="color:#24292e;">       return this;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    toString(){</span></span>
<span class="line"><span style="color:#24292e;">       return &quot;[object Person]&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    getFullName(){</span></span>
<span class="line"><span style="color:#24292e;">       return \`\${this.firstName} \${this.lastName}\`;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span></code></pre></div><p>重写方法并从另一个类继承。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">//ES5 Version</span></span>
<span class="line"><span style="color:#f6f6f4;">Employee.prototype = Object.create(Person.prototype);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">function Employee(firstName, lastName, age, address, jobTitle, yearStarted) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  Person.call(this, firstName, lastName, age, address);</span></span>
<span class="line"><span style="color:#f6f6f4;">  this.jobTitle = jobTitle;</span></span>
<span class="line"><span style="color:#f6f6f4;">  this.yearStarted = yearStarted;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">Employee.prototype.describe = function () {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return \`I am \${this.getFullName()} and I have a position of \${this.jobTitle} and I started at \${this.yearStarted}\`;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">Employee.prototype.toString = function () {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return &quot;[object Employee]&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">//ES6 Version</span></span>
<span class="line"><span style="color:#f6f6f4;">class Employee extends Person { //Inherits from &quot;Person&quot; class</span></span>
<span class="line"><span style="color:#f6f6f4;">  constructor(firstName, lastName, age, address, jobTitle, yearStarted) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    super(firstName, lastName, age, address);</span></span>
<span class="line"><span style="color:#f6f6f4;">    this.jobTitle = jobTitle;</span></span>
<span class="line"><span style="color:#f6f6f4;">    this.yearStarted = yearStarted;</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  describe() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    return \`I am \${this.getFullName()} and I have a position of \${this.jobTitle} and I started at \${this.yearStarted}\`;</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  toString() { // Overriding the &quot;toString&quot; method of &quot;Person&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">    return &quot;[object Employee]&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//ES5 Version</span></span>
<span class="line"><span style="color:#24292e;">Employee.prototype = Object.create(Person.prototype);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function Employee(firstName, lastName, age, address, jobTitle, yearStarted) {</span></span>
<span class="line"><span style="color:#24292e;">  Person.call(this, firstName, lastName, age, address);</span></span>
<span class="line"><span style="color:#24292e;">  this.jobTitle = jobTitle;</span></span>
<span class="line"><span style="color:#24292e;">  this.yearStarted = yearStarted;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Employee.prototype.describe = function () {</span></span>
<span class="line"><span style="color:#24292e;">  return \`I am \${this.getFullName()} and I have a position of \${this.jobTitle} and I started at \${this.yearStarted}\`;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Employee.prototype.toString = function () {</span></span>
<span class="line"><span style="color:#24292e;">  return &quot;[object Employee]&quot;;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//ES6 Version</span></span>
<span class="line"><span style="color:#24292e;">class Employee extends Person { //Inherits from &quot;Person&quot; class</span></span>
<span class="line"><span style="color:#24292e;">  constructor(firstName, lastName, age, address, jobTitle, yearStarted) {</span></span>
<span class="line"><span style="color:#24292e;">    super(firstName, lastName, age, address);</span></span>
<span class="line"><span style="color:#24292e;">    this.jobTitle = jobTitle;</span></span>
<span class="line"><span style="color:#24292e;">    this.yearStarted = yearStarted;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  describe() {</span></span>
<span class="line"><span style="color:#24292e;">    return \`I am \${this.getFullName()} and I have a position of \${this.jobTitle} and I started at \${this.yearStarted}\`;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  toString() { // Overriding the &quot;toString&quot; method of &quot;Person&quot;</span></span>
<span class="line"><span style="color:#24292e;">    return &quot;[object Employee]&quot;;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>所以我们要怎么知道它在内部使用原型？</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">class Something {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">function AnotherSomething(){</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">const as = new AnotherSomething();</span></span>
<span class="line"><span style="color:#f6f6f4;">const s = new Something();</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(typeof Something); // &quot;function&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(typeof AnotherSomething); // &quot;function&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(as.toString()); // &quot;[object Object]&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(as.toString()); // &quot;[object Object]&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(as.toString === Object.prototype.toString); // true</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(s.toString === Object.prototype.toString); // true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class Something {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function AnotherSomething(){</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">const as = new AnotherSomething();</span></span>
<span class="line"><span style="color:#24292e;">const s = new Something();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">console.log(typeof Something); // &quot;function&quot;</span></span>
<span class="line"><span style="color:#24292e;">console.log(typeof AnotherSomething); // &quot;function&quot;</span></span>
<span class="line"><span style="color:#24292e;">console.log(as.toString()); // &quot;[object Object]&quot;</span></span>
<span class="line"><span style="color:#24292e;">console.log(as.toString()); // &quot;[object Object]&quot;</span></span>
<span class="line"><span style="color:#24292e;">console.log(as.toString === Object.prototype.toString); // true</span></span>
<span class="line"><span style="color:#24292e;">console.log(s.toString === Object.prototype.toString); // true</span></span></code></pre></div><h3 id="_10、如何判断值是否为数组" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#10%E5%A6%82%E4%BD%95%E5%88%A4%E6%96%AD%E5%80%BC%E6%98%AF%E5%90%A6%E4%B8%BA%E6%95%B0%E7%BB%84" target="_blank" rel="noreferrer">10、如何判断值是否为数组？</a> <a class="header-anchor" href="#_10、如何判断值是否为数组" aria-label="Permalink to &quot;[10、如何判断值是否为数组？](https://gitee.com/souyunku/DevBooks/blob/master/docs/JavaScript/JavaScript最新2021年面试题，高级面试题及附答案解析.md#10如何判断值是否为数组)&quot;">​</a></h3><p>我们可以使用<code>Array.isArray</code>方法来检查值是否为<strong>数组</strong>。当传递给它的参数是数组时，它返回<code>true</code>，否则返回<code>false</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">console.log(Array.isArray(5));  // false</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(Array.isArray(&quot;&quot;)); // false</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(Array.isArray()); // false</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(Array.isArray(null)); // false</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(Array.isArray({ length: 5 })); // false</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(Array.isArray([])); // true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">console.log(Array.isArray(5));  // false</span></span>
<span class="line"><span style="color:#24292e;">console.log(Array.isArray(&quot;&quot;)); // false</span></span>
<span class="line"><span style="color:#24292e;">console.log(Array.isArray()); // false</span></span>
<span class="line"><span style="color:#24292e;">console.log(Array.isArray(null)); // false</span></span>
<span class="line"><span style="color:#24292e;">console.log(Array.isArray({ length: 5 })); // false</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">console.log(Array.isArray([])); // true</span></span></code></pre></div><p>如果环境不支持此方法，则可以使用<code>polyfill</code>实现。</p><p><code>function isArray(value){ return Object.prototype.toString.call(value) === &quot;[object Array]&quot; }</code></p><p>当然还可以使用传统的方法：</p><p><code>let a = [] if (a instanceof Array) { console.log(&#39;是数组&#39;) } else { console.log(&#39;非数组&#39;) }</code></p><h3 id="_11、调用函数-可以使用哪些方法" tabindex="-1">11、调用函数，可以使用哪些方法？ <a class="header-anchor" href="#_11、调用函数-可以使用哪些方法" aria-label="Permalink to &quot;11、调用函数，可以使用哪些方法？&quot;">​</a></h3><h3 id="_12、javascript原型-原型链-有什么特点" tabindex="-1">12、JavaScript原型，原型链 ? 有什么特点？ <a class="header-anchor" href="#_12、javascript原型-原型链-有什么特点" aria-label="Permalink to &quot;12、JavaScript原型，原型链 ? 有什么特点？&quot;">​</a></h3><h3 id="_13、谈谈你对amd、cmd的理解" tabindex="-1">13、谈谈你对AMD、CMD的理解 <a class="header-anchor" href="#_13、谈谈你对amd、cmd的理解" aria-label="Permalink to &quot;13、谈谈你对AMD、CMD的理解&quot;">​</a></h3><h3 id="_14、开发时如何对项目进行管理-gulp" tabindex="-1">14、开发时如何对项目进行管理?gulp? <a class="header-anchor" href="#_14、开发时如何对项目进行管理-gulp" aria-label="Permalink to &quot;14、开发时如何对项目进行管理?gulp?&quot;">​</a></h3><h3 id="_15、一般使用什么版本控制工具-svn如何对文件加锁" tabindex="-1">15、一般使用什么版本控制工具?svn如何对文件加锁### <a class="header-anchor" href="#_15、一般使用什么版本控制工具-svn如何对文件加锁" aria-label="Permalink to &quot;15、一般使用什么版本控制工具?svn如何对文件加锁###&quot;">​</a></h3><h3 id="_16、ajax中-get-和-post-有什么区别" tabindex="-1">16、ajax中 get 和 post 有什么区别? <a class="header-anchor" href="#_16、ajax中-get-和-post-有什么区别" aria-label="Permalink to &quot;16、ajax中 get 和 post 有什么区别?&quot;">​</a></h3><h3 id="_17、判断数据类型" tabindex="-1">17、判断数据类型 <a class="header-anchor" href="#_17、判断数据类型" aria-label="Permalink to &quot;17、判断数据类型&quot;">​</a></h3><h3 id="_18、readystate-0-4" tabindex="-1">18、readystate 0~4 <a class="header-anchor" href="#_18、readystate-0-4" aria-label="Permalink to &quot;18、readystate 0~4&quot;">​</a></h3><h3 id="_19、一个页面从输入-url-到页面加载显示完成-这个过程中都发生了什么-流程说的越详细越好" tabindex="-1">19、一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？（流程说的越详细越好） <a class="header-anchor" href="#_19、一个页面从输入-url-到页面加载显示完成-这个过程中都发生了什么-流程说的越详细越好" aria-label="Permalink to &quot;19、一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？（流程说的越详细越好）&quot;">​</a></h3><h3 id="_20、回调函数" tabindex="-1">20、回调函数? <a class="header-anchor" href="#_20、回调函数" aria-label="Permalink to &quot;20、回调函数?&quot;">​</a></h3><h3 id="_21、说说你对作用域链的理解" tabindex="-1">21、说说你对作用域链的理解 <a class="header-anchor" href="#_21、说说你对作用域链的理解" aria-label="Permalink to &quot;21、说说你对作用域链的理解&quot;">​</a></h3><h3 id="_22、如何对登录的账号密码进行加密" tabindex="-1">22、如何对登录的账号密码进行加密? <a class="header-anchor" href="#_22、如何对登录的账号密码进行加密" aria-label="Permalink to &quot;22、如何对登录的账号密码进行加密?&quot;">​</a></h3><h3 id="_23、ecmascript-是什么" tabindex="-1">23、ECMAScript 是什么？ <a class="header-anchor" href="#_23、ecmascript-是什么" aria-label="Permalink to &quot;23、ECMAScript 是什么？&quot;">​</a></h3><h3 id="_24、什么是-iife-它的用途是什么" tabindex="-1">24、什么是 IIFE，它的用途是什么？ <a class="header-anchor" href="#_24、什么是-iife-它的用途是什么" aria-label="Permalink to &quot;24、什么是 IIFE，它的用途是什么？&quot;">​</a></h3><h3 id="_25、什么是函数式编程-javascript-的哪些特性使其成为函数式语言的候选语言" tabindex="-1">25、什么是函数式编程? JavaScript 的哪些特性使其成为函数式语言的候选语言？ <a class="header-anchor" href="#_25、什么是函数式编程-javascript-的哪些特性使其成为函数式语言的候选语言" aria-label="Permalink to &quot;25、什么是函数式编程? JavaScript 的哪些特性使其成为函数式语言的候选语言？&quot;">​</a></h3><h3 id="_26、jquery与jquery-ui-有啥区别" tabindex="-1">26、jQuery与jQuery UI 有啥区别？ <a class="header-anchor" href="#_26、jquery与jquery-ui-有啥区别" aria-label="Permalink to &quot;26、jQuery与jQuery UI 有啥区别？&quot;">​</a></h3><h3 id="_27、30-jq中怎么样编写插件" tabindex="-1">27、30.Jq中怎么样编写插件? <a class="header-anchor" href="#_27、30-jq中怎么样编写插件" aria-label="Permalink to &quot;27、30.Jq中怎么样编写插件?&quot;">​</a></h3><h3 id="_28、隐式和显式转换有什么区别" tabindex="-1">28、隐式和显式转换有什么区别）？ <a class="header-anchor" href="#_28、隐式和显式转换有什么区别" aria-label="Permalink to &quot;28、隐式和显式转换有什么区别）？&quot;">​</a></h3><h3 id="_29、什么是缓存及它有什么作用" tabindex="-1">29、什么是缓存及它有什么作用？ <a class="header-anchor" href="#_29、什么是缓存及它有什么作用" aria-label="Permalink to &quot;29、什么是缓存及它有什么作用？&quot;">​</a></h3><h3 id="_30、如何解决跨域问题" tabindex="-1">30、如何解决跨域问题? <a class="header-anchor" href="#_30、如何解决跨域问题" aria-label="Permalink to &quot;30、如何解决跨域问题?&quot;">​</a></h3>`,90),o=[p];function t(c,r,i,f,d,y){return a(),n("div",null,o)}const g=s(l,[["render",t]]);export{h as __pageData,g as default};
