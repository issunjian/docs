import{_ as s,o as n,c as a,V as l}from"./chunks/framework.c6d8cbec.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/js/操作数组.md","filePath":"frontend/js/操作数组.md"}'),e={name:"frontend/js/操作数组.md"},p=l(`<h2 id="基础用法-只写参数必选值的用法" tabindex="-1">基础用法 只写参数必选值的用法 <a class="header-anchor" href="#基础用法-只写参数必选值的用法" aria-label="Permalink to &quot;基础用法 只写参数必选值的用法&quot;">​</a></h2><h2 id="数组去重方法" tabindex="-1">数组去重方法： <a class="header-anchor" href="#数组去重方法" aria-label="Permalink to &quot;数组去重方法：&quot;">​</a></h2><p><strong>sort 排序</strong></p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const arr = [1, 2, 3, 4, 5, 6, 4, 3, 7, 1]</span></span>
<span class="line"><span style="color:#f6f6f4;">// 数组去重：</span></span>
<span class="line"><span style="color:#f6f6f4;">// 方法3： for + sort</span></span>
<span class="line"><span style="color:#f6f6f4;">const newArrFn = (arr) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">  arr = arr.sort()</span></span>
<span class="line"><span style="color:#f6f6f4;">  let newArr = []</span></span>
<span class="line"><span style="color:#f6f6f4;">  for (let i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    arr[i] === arr[i - 1] ? newArr : newArr.push(arr[i])</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">  return newArr</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(newArrFn(arr)) /// [1, 2, 3, 4, 5, 6, 7]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const arr = [1, 2, 3, 4, 5, 6, 4, 3, 7, 1]</span></span>
<span class="line"><span style="color:#24292e;">// 数组去重：</span></span>
<span class="line"><span style="color:#24292e;">// 方法3： for + sort</span></span>
<span class="line"><span style="color:#24292e;">const newArrFn = (arr) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  arr = arr.sort()</span></span>
<span class="line"><span style="color:#24292e;">  let newArr = []</span></span>
<span class="line"><span style="color:#24292e;">  for (let i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">    arr[i] === arr[i - 1] ? newArr : newArr.push(arr[i])</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  return newArr</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">console.log(newArrFn(arr)) /// [1, 2, 3, 4, 5, 6, 7]</span></span></code></pre></div><p><strong>Set</strong>:Set 函数可以接受一个数组（或类数组对象）作为参数来初始化，利用该特性也能做到给数组去重</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const arr = [1, 2, 3, 4, 5, 6, 4, 3, 7, 1]</span></span>
<span class="line"><span style="color:#f6f6f4;">// 数组去重：</span></span>
<span class="line"><span style="color:#f6f6f4;">// 方法4： set</span></span>
<span class="line"><span style="color:#f6f6f4;">// .new Set方法，返回是一个类数组，需要结合 ...运算符，转成真实数组</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">const setNewArr = (arr) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return [...new Set(arr)]</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(setNewArr(arr))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const arr = [1, 2, 3, 4, 5, 6, 4, 3, 7, 1]</span></span>
<span class="line"><span style="color:#24292e;">// 数组去重：</span></span>
<span class="line"><span style="color:#24292e;">// 方法4： set</span></span>
<span class="line"><span style="color:#24292e;">// .new Set方法，返回是一个类数组，需要结合 ...运算符，转成真实数组</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const setNewArr = (arr) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  return [...new Set(arr)]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">console.log(setNewArr(arr))</span></span></code></pre></div><p><strong>filter + indexOf</strong> indexOf，可以检测某一个元素在数组中出现的位置，找到返回该元素的下标，没找到返回 -1</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const arr = [1, 2, 3, 4, 5, 6, 4, 3, 7, 1]</span></span>
<span class="line"><span style="color:#f6f6f4;">// 数组去重：</span></span>
<span class="line"><span style="color:#f6f6f4;">// 方法6 ：filter + findIndex</span></span>
<span class="line"><span style="color:#f6f6f4;">const newArrFn = (arr) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">  // 利用indexOf检测元素在数组中第一次出现的位置是否和元素现在的位置相等，</span></span>
<span class="line"><span style="color:#f6f6f4;">  // 如果相等，说明数组中没有重复的</span></span>
<span class="line"><span style="color:#f6f6f4;">  return Array.prototype.filter.call(arr, (item, index) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">    return arr.indexOf(item) === index</span></span>
<span class="line"><span style="color:#f6f6f4;">  })</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(newArrFn(arr))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const arr = [1, 2, 3, 4, 5, 6, 4, 3, 7, 1]</span></span>
<span class="line"><span style="color:#24292e;">// 数组去重：</span></span>
<span class="line"><span style="color:#24292e;">// 方法6 ：filter + findIndex</span></span>
<span class="line"><span style="color:#24292e;">const newArrFn = (arr) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  // 利用indexOf检测元素在数组中第一次出现的位置是否和元素现在的位置相等，</span></span>
<span class="line"><span style="color:#24292e;">  // 如果相等，说明数组中没有重复的</span></span>
<span class="line"><span style="color:#24292e;">  return Array.prototype.filter.call(arr, (item, index) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    return arr.indexOf(item) === index</span></span>
<span class="line"><span style="color:#24292e;">  })</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">console.log(newArrFn(arr))</span></span></code></pre></div><p><strong>includes</strong> :利用 includes 检查新数组是否包含原数组的每一项。 如果不包含，就 push 进去</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const arr = [1, 2, 3, 4, 5, 6, 4, 3, 7, 1]</span></span>
<span class="line"><span style="color:#f6f6f4;">// 数组去重：</span></span>
<span class="line"><span style="color:#f6f6f4;">// 方法7 ：for + includes</span></span>
<span class="line"><span style="color:#f6f6f4;">const newArrFn = (arr) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">  // 利用includes 检查新数组是否包含原数组的每一项</span></span>
<span class="line"><span style="color:#f6f6f4;">  // 如果不包含，就push进去</span></span>
<span class="line"><span style="color:#f6f6f4;">  let newArr = []</span></span>
<span class="line"><span style="color:#f6f6f4;">  for (let i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    newArr.includes(arr[i]) ? newArr : newArr.push(arr[i])</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">  return newArr</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(newArrFn(arr))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const arr = [1, 2, 3, 4, 5, 6, 4, 3, 7, 1]</span></span>
<span class="line"><span style="color:#24292e;">// 数组去重：</span></span>
<span class="line"><span style="color:#24292e;">// 方法7 ：for + includes</span></span>
<span class="line"><span style="color:#24292e;">const newArrFn = (arr) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  // 利用includes 检查新数组是否包含原数组的每一项</span></span>
<span class="line"><span style="color:#24292e;">  // 如果不包含，就push进去</span></span>
<span class="line"><span style="color:#24292e;">  let newArr = []</span></span>
<span class="line"><span style="color:#24292e;">  for (let i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">    newArr.includes(arr[i]) ? newArr : newArr.push(arr[i])</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  return newArr</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">console.log(newArrFn(arr))</span></span></code></pre></div><h2 id="reduce-方法" tabindex="-1">reduce 方法 <a class="header-anchor" href="#reduce-方法" aria-label="Permalink to &quot;reduce 方法&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 基本使用</span></span>
<span class="line"><span style="color:#f6f6f4;">const arr = [</span></span>
<span class="line"><span style="color:#f6f6f4;">  { price: 10, num: 1 },</span></span>
<span class="line"><span style="color:#f6f6f4;">  { price: 20, num: 5 },</span></span>
<span class="line"><span style="color:#f6f6f4;">  { price: 30, num: 10 },</span></span>
<span class="line"><span style="color:#f6f6f4;">  { price: 40, num: 15 },</span></span>
<span class="line"><span style="color:#f6f6f4;">]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">const newArr = arr.reduce((total, item) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return (total += item.price * item.num)</span></span>
<span class="line"><span style="color:#f6f6f4;">})</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(newArr) //结果1010</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 基本使用</span></span>
<span class="line"><span style="color:#24292e;">const arr = [</span></span>
<span class="line"><span style="color:#24292e;">  { price: 10, num: 1 },</span></span>
<span class="line"><span style="color:#24292e;">  { price: 20, num: 5 },</span></span>
<span class="line"><span style="color:#24292e;">  { price: 30, num: 10 },</span></span>
<span class="line"><span style="color:#24292e;">  { price: 40, num: 15 },</span></span>
<span class="line"><span style="color:#24292e;">]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const newArr = arr.reduce((total, item) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  return (total += item.price * item.num)</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">console.log(newArr) //结果1010</span></span></code></pre></div><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">//将二维数组转化为一维</span></span>
<span class="line"><span style="color:#f6f6f4;">let arr = [</span></span>
<span class="line"><span style="color:#f6f6f4;">  [1, 2],</span></span>
<span class="line"><span style="color:#f6f6f4;">  [3, 4],</span></span>
<span class="line"><span style="color:#f6f6f4;">  [5, 6],</span></span>
<span class="line"><span style="color:#f6f6f4;">].reduce((total, item) =&gt; total.concat(), [])</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(arr) //结果就是[1,2,3,4,5,6]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//将二维数组转化为一维</span></span>
<span class="line"><span style="color:#24292e;">let arr = [</span></span>
<span class="line"><span style="color:#24292e;">  [1, 2],</span></span>
<span class="line"><span style="color:#24292e;">  [3, 4],</span></span>
<span class="line"><span style="color:#24292e;">  [5, 6],</span></span>
<span class="line"><span style="color:#24292e;">].reduce((total, item) =&gt; total.concat(), [])</span></span>
<span class="line"><span style="color:#24292e;">console.log(arr) //结果就是[1,2,3,4,5,6]</span></span></code></pre></div><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 将多维数组转化为一维</span></span>
<span class="line"><span style="color:#f6f6f4;">const reduceSion = (arr) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">  let newArr = arr.reduce(</span></span>
<span class="line"><span style="color:#f6f6f4;">    (total, item) =&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">      total.concat(Array.isArray(item) ? reduceSion(item) : item),</span></span>
<span class="line"><span style="color:#f6f6f4;">    []</span></span>
<span class="line"><span style="color:#f6f6f4;">  )</span></span>
<span class="line"><span style="color:#f6f6f4;">  console.log(newArr)</span></span>
<span class="line"><span style="color:#f6f6f4;">  return newArr</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">let arr = [</span></span>
<span class="line"><span style="color:#f6f6f4;">  [0, 1],</span></span>
<span class="line"><span style="color:#f6f6f4;">  [2, 3, [4, 5]],</span></span>
<span class="line"><span style="color:#f6f6f4;">  [6, [7, 8, 9, [10, 10]]],</span></span>
<span class="line"><span style="color:#f6f6f4;">]</span></span>
<span class="line"><span style="color:#f6f6f4;">reduceSion(arr) //结果:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 将多维数组转化为一维</span></span>
<span class="line"><span style="color:#24292e;">const reduceSion = (arr) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  let newArr = arr.reduce(</span></span>
<span class="line"><span style="color:#24292e;">    (total, item) =&gt;</span></span>
<span class="line"><span style="color:#24292e;">      total.concat(Array.isArray(item) ? reduceSion(item) : item),</span></span>
<span class="line"><span style="color:#24292e;">    []</span></span>
<span class="line"><span style="color:#24292e;">  )</span></span>
<span class="line"><span style="color:#24292e;">  console.log(newArr)</span></span>
<span class="line"><span style="color:#24292e;">  return newArr</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">let arr = [</span></span>
<span class="line"><span style="color:#24292e;">  [0, 1],</span></span>
<span class="line"><span style="color:#24292e;">  [2, 3, [4, 5]],</span></span>
<span class="line"><span style="color:#24292e;">  [6, [7, 8, 9, [10, 10]]],</span></span>
<span class="line"><span style="color:#24292e;">]</span></span>
<span class="line"><span style="color:#24292e;">reduceSion(arr) //结果:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]</span></span></code></pre></div><h2 id="map" tabindex="-1">map <a class="header-anchor" href="#map" aria-label="Permalink to &quot;map&quot;">​</a></h2><ol><li>map()不会对空数组进行检测</li><li>map()不会改变原始数组</li></ol><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const arr = [1, 2, 3, 4, 5]</span></span>
<span class="line"><span style="color:#f6f6f4;">const newArr = arr.map((item) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return item * 2</span></span>
<span class="line"><span style="color:#f6f6f4;">})</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(newArr) //结果:[ 2, 4, 6, 8, 10 ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const arr = [1, 2, 3, 4, 5]</span></span>
<span class="line"><span style="color:#24292e;">const newArr = arr.map((item) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  return item * 2</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">console.log(newArr) //结果:[ 2, 4, 6, 8, 10 ]</span></span></code></pre></div><h2 id="some-和-every" tabindex="-1">some 和 every <a class="header-anchor" href="#some-和-every" aria-label="Permalink to &quot;some 和 every&quot;">​</a></h2><ol><li>some 翻译为一些,every 翻译为每个，所以 some 方法 只要其中一个为 true 就会返回 true ，every 方法必须所有都返回 true 才会返回 true，哪怕有一个 false，就会返回 false</li></ol><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const arr = [1, 2, 3, 4, 5, 6, 4, 3, 7, 1]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">// somes</span></span>
<span class="line"><span style="color:#f6f6f4;">const snewArr = arr.some((item) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return item &gt; 6</span></span>
<span class="line"><span style="color:#f6f6f4;">})</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(snewArr) //遍历每一项 有一项满足条件就返回true，都不满足返回false</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">//every</span></span>
<span class="line"><span style="color:#f6f6f4;">const enewArr = arr.every((item) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return item &gt; 6</span></span>
<span class="line"><span style="color:#f6f6f4;">})</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(enewArr) //发现有不满足这个条件的就返回false，都满足才返回true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const arr = [1, 2, 3, 4, 5, 6, 4, 3, 7, 1]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// somes</span></span>
<span class="line"><span style="color:#24292e;">const snewArr = arr.some((item) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  return item &gt; 6</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">console.log(snewArr) //遍历每一项 有一项满足条件就返回true，都不满足返回false</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//every</span></span>
<span class="line"><span style="color:#24292e;">const enewArr = arr.every((item) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  return item &gt; 6</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">console.log(enewArr) //发现有不满足这个条件的就返回false，都满足才返回true</span></span></code></pre></div><h2 id="splice" tabindex="-1">splice <a class="header-anchor" href="#splice" aria-label="Permalink to &quot;splice&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const arr = [&#39;尖椒&#39;, &#39;炒蛋&#39;, &#39;番茄&#39;, &#39;炒蛋&#39;]</span></span>
<span class="line"><span style="color:#f6f6f4;">arr.splice(0, 1, &#39;葱花&#39;) //从索引0开始。删除一个元素，插入葱花</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(arr) //[&#39;葱花&#39;, &#39;炒蛋&#39;, &#39;番茄&#39;, &#39;炒蛋&#39;]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const arr = [&#39;尖椒&#39;, &#39;炒蛋&#39;, &#39;番茄&#39;, &#39;炒蛋&#39;]</span></span>
<span class="line"><span style="color:#24292e;">arr.splice(0, 1, &#39;葱花&#39;) //从索引0开始。删除一个元素，插入葱花</span></span>
<span class="line"><span style="color:#24292e;">console.log(arr) //[&#39;葱花&#39;, &#39;炒蛋&#39;, &#39;番茄&#39;, &#39;炒蛋&#39;]</span></span></code></pre></div><h2 id="find-和-findindex" tabindex="-1">find 和 findIndex <a class="header-anchor" href="#find-和-findindex" aria-label="Permalink to &quot;find 和 findIndex&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const arr = [&#39;尖椒&#39;, &#39;炒蛋&#39;, &#39;番茄&#39;, &#39;炒蛋&#39;]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">// find 找第一个满足条件的数组成员 返回该元素 没有找到返回undefind</span></span>
<span class="line"><span style="color:#f6f6f4;">const newArr = arr.find((item) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return item.indexOf(&#39;番茄&#39;) === 0</span></span>
<span class="line"><span style="color:#f6f6f4;">})</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(newArr) //结果：番茄</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">//findIndex 找第一个满足条件的数组成员的位置(索引) 返回该索引 没有找到返回-1</span></span>
<span class="line"><span style="color:#f6f6f4;">const newArrs = arr.findIndex((item) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return item === &#39;番茄&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">})</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(newArrs) //结果；返回索引 索引为2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const arr = [&#39;尖椒&#39;, &#39;炒蛋&#39;, &#39;番茄&#39;, &#39;炒蛋&#39;]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// find 找第一个满足条件的数组成员 返回该元素 没有找到返回undefind</span></span>
<span class="line"><span style="color:#24292e;">const newArr = arr.find((item) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  return item.indexOf(&#39;番茄&#39;) === 0</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">console.log(newArr) //结果：番茄</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//findIndex 找第一个满足条件的数组成员的位置(索引) 返回该索引 没有找到返回-1</span></span>
<span class="line"><span style="color:#24292e;">const newArrs = arr.findIndex((item) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  return item === &#39;番茄&#39;</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">console.log(newArrs) //结果；返回索引 索引为2</span></span></code></pre></div><h2 id="filter" tabindex="-1">filter <a class="header-anchor" href="#filter" aria-label="Permalink to &quot;filter&quot;">​</a></h2><ol><li>过滤数组单元值，生成新数组</li></ol><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const arr = [1, 2, 3, 4, 5]</span></span>
<span class="line"><span style="color:#f6f6f4;">const newArr = arr.filter((item) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return item &gt; 3</span></span>
<span class="line"><span style="color:#f6f6f4;">})</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(newArr) //结果[4,5]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const arr = [1, 2, 3, 4, 5]</span></span>
<span class="line"><span style="color:#24292e;">const newArr = arr.filter((item) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  return item &gt; 3</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">console.log(newArr) //结果[4,5]</span></span></code></pre></div><h2 id="封装-map" tabindex="-1">封装 map <a class="header-anchor" href="#封装-map" aria-label="Permalink to &quot;封装 map&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">let arr = [1, 2, 3, 4, 5, 6]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">Array.prototype.myMap = function (fn) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  const arr = []</span></span>
<span class="line"><span style="color:#f6f6f4;">  for (let i = 0; i &lt; this.length; i++) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    arr.push(fn(this[i], i, this))</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">  return arr</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">const newArr = arr.myMap((item) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return item &gt; 2</span></span>
<span class="line"><span style="color:#f6f6f4;">})</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(newArr) //结果：[ false, false, true, true, true, true ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">let arr = [1, 2, 3, 4, 5, 6]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Array.prototype.myMap = function (fn) {</span></span>
<span class="line"><span style="color:#24292e;">  const arr = []</span></span>
<span class="line"><span style="color:#24292e;">  for (let i = 0; i &lt; this.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">    arr.push(fn(this[i], i, this))</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  return arr</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const newArr = arr.myMap((item) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  return item &gt; 2</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">console.log(newArr) //结果：[ false, false, true, true, true, true ]</span></span></code></pre></div><h2 id="封装-reduce" tabindex="-1">封装 reduce <a class="header-anchor" href="#封装-reduce" aria-label="Permalink to &quot;封装 reduce&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">Array.prototype.myReduce = function (fn, ...item) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  let total = item.length &gt; 0 ? item[0] : this[0]</span></span>
<span class="line"><span style="color:#f6f6f4;">  let index = item.length &gt; 0 ? 0 : 1</span></span>
<span class="line"><span style="color:#f6f6f4;">  for (let i = index; i &lt; this.length; i++) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    total = fn(total, this[i], i, this)</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">  return total</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">const arr = [1, 2, 3, 4, 5, 6]</span></span>
<span class="line"><span style="color:#f6f6f4;">const newArr = arr.reduce((total, itam) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return total + itam</span></span>
<span class="line"><span style="color:#f6f6f4;">})</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(newArr) //结果：21</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Array.prototype.myReduce = function (fn, ...item) {</span></span>
<span class="line"><span style="color:#24292e;">  let total = item.length &gt; 0 ? item[0] : this[0]</span></span>
<span class="line"><span style="color:#24292e;">  let index = item.length &gt; 0 ? 0 : 1</span></span>
<span class="line"><span style="color:#24292e;">  for (let i = index; i &lt; this.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">    total = fn(total, this[i], i, this)</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  return total</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const arr = [1, 2, 3, 4, 5, 6]</span></span>
<span class="line"><span style="color:#24292e;">const newArr = arr.reduce((total, itam) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  return total + itam</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">console.log(newArr) //结果：21</span></span></code></pre></div><h2 id="封装-filter" tabindex="-1">封装 filter <a class="header-anchor" href="#封装-filter" aria-label="Permalink to &quot;封装 filter&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">Array.prototype.myFilter = function (fn) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  let arr = []</span></span>
<span class="line"><span style="color:#f6f6f4;">  for (let i = 0; i &lt; this.length; i++) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (fn(this[i], i, this)) {</span></span>
<span class="line"><span style="color:#f6f6f4;">      arr.push(this[i])</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">  return arr</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">let arr1 = [&#39;西兰花&#39;, &#39;西瓜&#39;, &#39;花椒&#39;, &#39;剁椒&#39;]</span></span>
<span class="line"><span style="color:#f6f6f4;">let res = arr1.myFilter((item, index, arr) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return item.indexOf(&#39;西&#39;) === 0</span></span>
<span class="line"><span style="color:#f6f6f4;">})</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(res)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Array.prototype.myFilter = function (fn) {</span></span>
<span class="line"><span style="color:#24292e;">  let arr = []</span></span>
<span class="line"><span style="color:#24292e;">  for (let i = 0; i &lt; this.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">    if (fn(this[i], i, this)) {</span></span>
<span class="line"><span style="color:#24292e;">      arr.push(this[i])</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  return arr</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">let arr1 = [&#39;西兰花&#39;, &#39;西瓜&#39;, &#39;花椒&#39;, &#39;剁椒&#39;]</span></span>
<span class="line"><span style="color:#24292e;">let res = arr1.myFilter((item, index, arr) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  return item.indexOf(&#39;西&#39;) === 0</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">console.log(res)</span></span></code></pre></div>`,33),o=[p];function r(t,c,i,f,y,d){return n(),a("div",null,o)}const g=s(e,[["render",r]]);export{h as __pageData,g as default};
