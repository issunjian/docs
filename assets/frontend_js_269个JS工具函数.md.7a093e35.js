import{_ as s,o as a,c as n,V as l}from"./chunks/framework.c6d8cbec.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/js/269个JS工具函数.md","filePath":"frontend/js/269个JS工具函数.md"}'),e={name:"frontend/js/269个JS工具函数.md"},p=l(`<h2 id="_1-匹配正整数" tabindex="-1">1.匹配正整数 <a class="header-anchor" href="#_1-匹配正整数" aria-label="Permalink to &quot;1.匹配正整数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 匹配正整数</span></span>
<span class="line"><span style="color:#f6f6f4;">let isPositiveNum = val =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">	return /^[1-9]\\d*$/.test(val);</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(isPositiveNum(9)) //true</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(isPositiveNum(2.2)) //false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 匹配正整数</span></span>
<span class="line"><span style="color:#24292e;">let isPositiveNum = val =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">	return /^[1-9]\\d*$/.test(val);</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;">console.log(isPositiveNum(9)) //true</span></span>
<span class="line"><span style="color:#24292e;">console.log(isPositiveNum(2.2)) //false</span></span></code></pre></div><h2 id="_2-匹配负整数" tabindex="-1">2.匹配负整数 <a class="header-anchor" href="#_2-匹配负整数" aria-label="Permalink to &quot;2.匹配负整数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 匹配负整数</span></span>
<span class="line"><span style="color:#f6f6f4;"> let isNegativeNum = val =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;"> 	return /^-[1-9]\\d*$/.test(val);</span></span>
<span class="line"><span style="color:#f6f6f4;"> };</span></span>
<span class="line"><span style="color:#f6f6f4;"> console.log(isNegativeNum(-9)) //true</span></span>
<span class="line"><span style="color:#f6f6f4;"> console.log(isNegativeNum(2.2)) //false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 匹配负整数</span></span>
<span class="line"><span style="color:#24292e;"> let isNegativeNum = val =&gt; {</span></span>
<span class="line"><span style="color:#24292e;"> 	return /^-[1-9]\\d*$/.test(val);</span></span>
<span class="line"><span style="color:#24292e;"> };</span></span>
<span class="line"><span style="color:#24292e;"> console.log(isNegativeNum(-9)) //true</span></span>
<span class="line"><span style="color:#24292e;"> console.log(isNegativeNum(2.2)) //false</span></span></code></pre></div><h2 id="_3-匹配整数" tabindex="-1">3.匹配整数 <a class="header-anchor" href="#_3-匹配整数" aria-label="Permalink to &quot;3.匹配整数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 匹配整数</span></span>
<span class="line"><span style="color:#f6f6f4;">let isInteger = val =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">	return /^(-|\\+)?\\d+$/.test(val);</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(isInteger(-9)) //true</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(isInteger(2.2)) //false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 匹配整数</span></span>
<span class="line"><span style="color:#24292e;">let isInteger = val =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">	return /^(-|\\+)?\\d+$/.test(val);</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;">console.log(isInteger(-9)) //true</span></span>
<span class="line"><span style="color:#24292e;">console.log(isInteger(2.2)) //false</span></span></code></pre></div><h2 id="_4-匹配非负浮点数" tabindex="-1">4.匹配非负浮点数 <a class="header-anchor" href="#_4-匹配非负浮点数" aria-label="Permalink to &quot;4.匹配非负浮点数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 匹配非负浮点数</span></span>
<span class="line"><span style="color:#f6f6f4;">let isNotNegativeFloatNum = val =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">	return /^\\d+(\\.\\d+)?$/.test(val);</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(isNotNegativeFloatNum(-9)) //false</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(isNotNegativeFloatNum(2.2)) //true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 匹配非负浮点数</span></span>
<span class="line"><span style="color:#24292e;">let isNotNegativeFloatNum = val =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">	return /^\\d+(\\.\\d+)?$/.test(val);</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;">console.log(isNotNegativeFloatNum(-9)) //false</span></span>
<span class="line"><span style="color:#24292e;">console.log(isNotNegativeFloatNum(2.2)) //true</span></span></code></pre></div><h2 id="_5-匹配由-26-个英文字母组成的字符串" tabindex="-1">5.匹配由 26 个英文字母组成的字符串 <a class="header-anchor" href="#_5-匹配由-26-个英文字母组成的字符串" aria-label="Permalink to &quot;5.匹配由 26 个英文字母组成的字符串&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">//匹配由 26 个英文字母组成的字符串</span></span>
<span class="line"><span style="color:#f6f6f4;">let isAZaz = val =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">	return /^[A-Za-z]+$/.test(val);</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(isAZaz(&#39;122a&#39;)) //false</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(isAZaz(&#39;abc&#39;)) //true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//匹配由 26 个英文字母组成的字符串</span></span>
<span class="line"><span style="color:#24292e;">let isAZaz = val =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">	return /^[A-Za-z]+$/.test(val);</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;">console.log(isAZaz(&#39;122a&#39;)) //false</span></span>
<span class="line"><span style="color:#24292e;">console.log(isAZaz(&#39;abc&#39;)) //true</span></span></code></pre></div><h2 id="_6-匹配由-26-个英文字母的大写组成的字符串" tabindex="-1">6.匹配由 26 个英文字母的大写组成的字符串 <a class="header-anchor" href="#_6-匹配由-26-个英文字母的大写组成的字符串" aria-label="Permalink to &quot;6.匹配由 26 个英文字母的大写组成的字符串&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">//匹配由 26 个英文字母的大写组成的字符串</span></span>
<span class="line"><span style="color:#f6f6f4;">let isAZ = val =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">	return /^[A-Z]+$/.test(val);</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(isAZ(&#39;Acs&#39;)) //false</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(isAZ(&#39;ABC&#39;)) //true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//匹配由 26 个英文字母的大写组成的字符串</span></span>
<span class="line"><span style="color:#24292e;">let isAZ = val =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">	return /^[A-Z]+$/.test(val);</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;">console.log(isAZ(&#39;Acs&#39;)) //false</span></span>
<span class="line"><span style="color:#24292e;">console.log(isAZ(&#39;ABC&#39;)) //true</span></span></code></pre></div><h2 id="_7-匹配由-26-个英文字母的小写组成的字符串" tabindex="-1">7.匹配由 26 个英文字母的小写组成的字符串 <a class="header-anchor" href="#_7-匹配由-26-个英文字母的小写组成的字符串" aria-label="Permalink to &quot;7.匹配由 26 个英文字母的小写组成的字符串&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">//匹配由 26 个英文字母的小写组成的字符串</span></span>
<span class="line"><span style="color:#f6f6f4;">let isaz = val =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">	return /^[a-z]+$/.test(val);</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(isaz(&#39;Acs&#39;)) //false</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(isaz(&#39;abc&#39;)) //true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//匹配由 26 个英文字母的小写组成的字符串</span></span>
<span class="line"><span style="color:#24292e;">let isaz = val =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">	return /^[a-z]+$/.test(val);</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;">console.log(isaz(&#39;Acs&#39;)) //false</span></span>
<span class="line"><span style="color:#24292e;">console.log(isaz(&#39;abc&#39;)) //true</span></span></code></pre></div><h2 id="_8-匹配电子邮件地址" tabindex="-1">8.匹配电子邮件地址 <a class="header-anchor" href="#_8-匹配电子邮件地址" aria-label="Permalink to &quot;8.匹配电子邮件地址&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 匹配电子邮件地址</span></span>
<span class="line"><span style="color:#f6f6f4;">let isEmailAddress = val =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">	return /^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)+$/.test(val) || /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(val);</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(isEmailAddress(&#39;Acs&#39;)) //false</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(isEmailAddress(&#39;133@qq.com&#39;)) //true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 匹配电子邮件地址</span></span>
<span class="line"><span style="color:#24292e;">let isEmailAddress = val =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">	return /^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)+$/.test(val) || /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(val);</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;">console.log(isEmailAddress(&#39;Acs&#39;)) //false</span></span>
<span class="line"><span style="color:#24292e;">console.log(isEmailAddress(&#39;133@qq.com&#39;)) //true</span></span></code></pre></div><h2 id="_9-返回数组中的最大值" tabindex="-1">9.返回数组中的最大值 <a class="header-anchor" href="#_9-返回数组中的最大值" aria-label="Permalink to &quot;9.返回数组中的最大值&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// arrayMax: 返回数组中的最大值</span></span>
<span class="line"><span style="color:#f6f6f4;">// 将Math.max()与扩展运算符 (...) 结合使用以获取数组中的最大值。</span></span>
<span class="line"><span style="color:#f6f6f4;">let arrayMax = arr =&gt; Math.max(...arr);</span></span>
<span class="line"><span style="color:#f6f6f4;">let arr = [1,2,3,5];</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(arrayMax(arr)) //5</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// arrayMax: 返回数组中的最大值</span></span>
<span class="line"><span style="color:#24292e;">// 将Math.max()与扩展运算符 (...) 结合使用以获取数组中的最大值。</span></span>
<span class="line"><span style="color:#24292e;">let arrayMax = arr =&gt; Math.max(...arr);</span></span>
<span class="line"><span style="color:#24292e;">let arr = [1,2,3,5];</span></span>
<span class="line"><span style="color:#24292e;">console.log(arrayMax(arr)) //5</span></span></code></pre></div><h2 id="_10-返回数组中的最小值" tabindex="-1">10.返回数组中的最小值 <a class="header-anchor" href="#_10-返回数组中的最小值" aria-label="Permalink to &quot;10.返回数组中的最小值&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// arrayMin: 返回数组中的最小值</span></span>
<span class="line"><span style="color:#f6f6f4;">// 将Math.min()与扩展运算符 (...) 结合使用以获取数组中的最小值。</span></span>
<span class="line"><span style="color:#f6f6f4;">let arrayMin = arr =&gt; Math.min(...arr);</span></span>
<span class="line"><span style="color:#f6f6f4;">let arr = [1, 2, 3, 5];</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(arrayMin(arr)) //1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// arrayMin: 返回数组中的最小值</span></span>
<span class="line"><span style="color:#24292e;">// 将Math.min()与扩展运算符 (...) 结合使用以获取数组中的最小值。</span></span>
<span class="line"><span style="color:#24292e;">let arrayMin = arr =&gt; Math.min(...arr);</span></span>
<span class="line"><span style="color:#24292e;">let arr = [1, 2, 3, 5];</span></span>
<span class="line"><span style="color:#24292e;">console.log(arrayMin(arr)) //1</span></span></code></pre></div><h2 id="_11-将数组块划分为指定大小的较小数组" tabindex="-1">11.将数组块划分为指定大小的较小数组 <a class="header-anchor" href="#_11-将数组块划分为指定大小的较小数组" aria-label="Permalink to &quot;11.将数组块划分为指定大小的较小数组&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// chunk: 将数组块划分为指定大小的较小数组。</span></span>
<span class="line"><span style="color:#f6f6f4;">// 使用Array.from()创建新的数组, 这符合将生成的区块数。使用Array.slice()将新数组的每个元素映射到size长度的区块。如果原始数组不能均匀拆分, 则最终的块将包含剩余的元素。</span></span>
<span class="line"><span style="color:#f6f6f4;">let chunk = (arr, size) =&gt; Array.from({</span></span>
<span class="line"><span style="color:#f6f6f4;">	length: Math.ceil(arr.length / size)</span></span>
<span class="line"><span style="color:#f6f6f4;">}, (v, i) =&gt; arr.slice(i * size, i * size + size));</span></span>
<span class="line"><span style="color:#f6f6f4;">let arr = [1, 2, 3, 5];</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(chunk(arr,2)) //0: Array [ 1, 2 ],1: Array [ 3, 5 ],</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// chunk: 将数组块划分为指定大小的较小数组。</span></span>
<span class="line"><span style="color:#24292e;">// 使用Array.from()创建新的数组, 这符合将生成的区块数。使用Array.slice()将新数组的每个元素映射到size长度的区块。如果原始数组不能均匀拆分, 则最终的块将包含剩余的元素。</span></span>
<span class="line"><span style="color:#24292e;">let chunk = (arr, size) =&gt; Array.from({</span></span>
<span class="line"><span style="color:#24292e;">	length: Math.ceil(arr.length / size)</span></span>
<span class="line"><span style="color:#24292e;">}, (v, i) =&gt; arr.slice(i * size, i * size + size));</span></span>
<span class="line"><span style="color:#24292e;">let arr = [1, 2, 3, 5];</span></span>
<span class="line"><span style="color:#24292e;">console.log(chunk(arr,2)) //0: Array [ 1, 2 ],1: Array [ 3, 5 ],</span></span></code></pre></div><h2 id="_12-从数组中移除-false-值" tabindex="-1">12.从数组中移除 false 值 <a class="header-anchor" href="#_12-从数组中移除-false-值" aria-label="Permalink to &quot;12.从数组中移除 false 值&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// compact: 从数组中移除 false 值。</span></span>
<span class="line"><span style="color:#f6f6f4;">// 使用Array.filter()筛选出 false 值 (false、null、0、&quot;&quot;、undefined和NaN).</span></span>
<span class="line"><span style="color:#f6f6f4;">let compact = arr =&gt; arr.filter(Boolean);</span></span>
<span class="line"><span style="color:#f6f6f4;">let arr = [false,null,0,&quot;&quot;,undefined,NaN,1]</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(compact(arr)) //[ 1 ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// compact: 从数组中移除 false 值。</span></span>
<span class="line"><span style="color:#24292e;">// 使用Array.filter()筛选出 false 值 (false、null、0、&quot;&quot;、undefined和NaN).</span></span>
<span class="line"><span style="color:#24292e;">let compact = arr =&gt; arr.filter(Boolean);</span></span>
<span class="line"><span style="color:#24292e;">let arr = [false,null,0,&quot;&quot;,undefined,NaN,1]</span></span>
<span class="line"><span style="color:#24292e;">console.log(compact(arr)) //[ 1 ]</span></span></code></pre></div><h2 id="_13-计算数组中值的出现次数" tabindex="-1">13.计算数组中值的出现次数 <a class="header-anchor" href="#_13-计算数组中值的出现次数" aria-label="Permalink to &quot;13.计算数组中值的出现次数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// countOccurrences: 计算数组中值的出现次数</span></span>
<span class="line"><span style="color:#f6f6f4;">// 使用Array.reduce()在每次遇到数组中的特定值时递增计数器。</span></span>
<span class="line"><span style="color:#f6f6f4;">let countOccurrences = (arr, value) =&gt; arr.reduce((a, v) =&gt; v === value ? a + 1 : a + 0, 0);</span></span>
<span class="line"><span style="color:#f6f6f4;">let arr = [1,2,1,2,3,3,3,3];</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(countOccurrences(arr,3))//4</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// countOccurrences: 计算数组中值的出现次数</span></span>
<span class="line"><span style="color:#24292e;">// 使用Array.reduce()在每次遇到数组中的特定值时递增计数器。</span></span>
<span class="line"><span style="color:#24292e;">let countOccurrences = (arr, value) =&gt; arr.reduce((a, v) =&gt; v === value ? a + 1 : a + 0, 0);</span></span>
<span class="line"><span style="color:#24292e;">let arr = [1,2,1,2,3,3,3,3];</span></span>
<span class="line"><span style="color:#24292e;">console.log(countOccurrences(arr,3))//4</span></span></code></pre></div><h2 id="_14-深拼合数组" tabindex="-1">14.深拼合数组 <a class="header-anchor" href="#_14-深拼合数组" aria-label="Permalink to &quot;14.深拼合数组&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// deepFlatten: 深拼合数组</span></span>
<span class="line"><span style="color:#f6f6f4;">// 使用递归。使用Array.concat()与空数组 ([]) 和跨页运算符 (...) 来拼合数组。递归拼合作为数组的每个元素。</span></span>
<span class="line"><span style="color:#f6f6f4;">let deepFlatten= arr =&gt; [].concat(...arr.map(v =&gt; Array.isArray(v) ? deepFlatten(v) : v));</span></span>
<span class="line"><span style="color:#f6f6f4;">let arr = [1, 2, [1, 2, [1, 2, [2, 3]]]];</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(deepFlatten(arr)) // [ 1, 2, 1, 2, 1, 2, 2, 3 ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// deepFlatten: 深拼合数组</span></span>
<span class="line"><span style="color:#24292e;">// 使用递归。使用Array.concat()与空数组 ([]) 和跨页运算符 (...) 来拼合数组。递归拼合作为数组的每个元素。</span></span>
<span class="line"><span style="color:#24292e;">let deepFlatten= arr =&gt; [].concat(...arr.map(v =&gt; Array.isArray(v) ? deepFlatten(v) : v));</span></span>
<span class="line"><span style="color:#24292e;">let arr = [1, 2, [1, 2, [1, 2, [2, 3]]]];</span></span>
<span class="line"><span style="color:#24292e;">console.log(deepFlatten(arr)) // [ 1, 2, 1, 2, 1, 2, 2, 3 ]</span></span></code></pre></div><h2 id="_15-返回两个数组之间的差异" tabindex="-1">15.返回两个数组之间的差异 <a class="header-anchor" href="#_15-返回两个数组之间的差异" aria-label="Permalink to &quot;15.返回两个数组之间的差异&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft has-diff vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// difference: 返回两个数组之间的差异</span></span>
<span class="line"><span style="color:#f6f6f4;">// 从b创建Set, 然后使用Array.filter() on 只保留a b中不包含的值.</span></span>
<span class="line"><span style="color:#f6f6f4;">let difference = (a, b) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">	const s = new Set(b);</span></span>
<span class="line"><span style="color:#f6f6f4;">	return a.filter(x =&gt; !s.has(x));</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span>
<span class="line"><span style="color:#f6f6f4;">let arr = [1,2,3];</span></span>
<span class="line"><span style="color:#f6f6f4;">let arr2 = [2,3,4];</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(difference(arr,arr2))//[1]</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(difference(arr2,arr))//[4]</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;">// difference: 返回两个数组之间的差异</span></span>
<span class="line"><span style="color:#24292e;">// 从b创建Set, 然后使用Array.filter() on 只保留a b中不包含的值.</span></span>
<span class="line"><span style="color:#24292e;">let difference = (a, b) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">	const s = new Set(b);</span></span>
<span class="line"><span style="color:#24292e;">	return a.filter(x =&gt; !s.has(x));</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;">let arr = [1,2,3];</span></span>
<span class="line"><span style="color:#24292e;">let arr2 = [2,3,4];</span></span>
<span class="line"><span style="color:#24292e;">console.log(difference(arr,arr2))//[1]</span></span>
<span class="line"><span style="color:#24292e;">console.log(difference(arr2,arr))//[4]</span></span></code></pre></div><h2 id="_16-返回数组的所有不同值" tabindex="-1">16.返回数组的所有不同值 <a class="header-anchor" href="#_16-返回数组的所有不同值" aria-label="Permalink to &quot;16.返回数组的所有不同值&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// distinctValuesOfArray: 返回数组的所有不同值</span></span>
<span class="line"><span style="color:#f6f6f4;">// 使用 ES6 Set和...rest运算符放弃所有重复的值。</span></span>
<span class="line"><span style="color:#f6f6f4;">let distinctValuesOfArray = arr =&gt; [...new Set(arr)];</span></span>
<span class="line"><span style="color:#f6f6f4;">let arr = [1, 2, 3, 1, 2];</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(distinctValuesOfArray(arr)) // [ 1, 2, 3 ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// distinctValuesOfArray: 返回数组的所有不同值</span></span>
<span class="line"><span style="color:#24292e;">// 使用 ES6 Set和...rest运算符放弃所有重复的值。</span></span>
<span class="line"><span style="color:#24292e;">let distinctValuesOfArray = arr =&gt; [...new Set(arr)];</span></span>
<span class="line"><span style="color:#24292e;">let arr = [1, 2, 3, 1, 2];</span></span>
<span class="line"><span style="color:#24292e;">console.log(distinctValuesOfArray(arr)) // [ 1, 2, 3 ]</span></span></code></pre></div><h2 id="_17-返回数组中的每个第-n-个元素" tabindex="-1">17.返回数组中的每个第 n 个元素 <a class="header-anchor" href="#_17-返回数组中的每个第-n-个元素" aria-label="Permalink to &quot;17.返回数组中的每个第 n 个元素&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// everyNth: 返回数组中的每个第 n 个元素</span></span>
<span class="line"><span style="color:#f6f6f4;">// 使用Array.filter()创建一个包含给定数组的每个第 n 个元素的新数组。</span></span>
<span class="line"><span style="color:#f6f6f4;">let everyNth = (arr, nth) =&gt; arr.filter((e, i) =&gt; i % nth === 0);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// everyNth: 返回数组中的每个第 n 个元素</span></span>
<span class="line"><span style="color:#24292e;">// 使用Array.filter()创建一个包含给定数组的每个第 n 个元素的新数组。</span></span>
<span class="line"><span style="color:#24292e;">let everyNth = (arr, nth) =&gt; arr.filter((e, i) =&gt; i % nth === 0);</span></span></code></pre></div><h2 id="_18-筛选出数组中的非唯一值" tabindex="-1">18.筛选出数组中的非唯一值 <a class="header-anchor" href="#_18-筛选出数组中的非唯一值" aria-label="Permalink to &quot;18.筛选出数组中的非唯一值&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// filterNonUnique：筛选出数组中的非唯一值</span></span>
<span class="line"><span style="color:#f6f6f4;">// 对于只包含唯一值的数组, 请使用Array.filter()。</span></span>
<span class="line"><span style="color:#f6f6f4;">let filterNonUnique = arr =&gt; arr.filter(i =&gt; arr.indexOf(i) !== arr.lastIndexOf(i));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// filterNonUnique：筛选出数组中的非唯一值</span></span>
<span class="line"><span style="color:#24292e;">// 对于只包含唯一值的数组, 请使用Array.filter()。</span></span>
<span class="line"><span style="color:#24292e;">let filterNonUnique = arr =&gt; arr.filter(i =&gt; arr.indexOf(i) !== arr.lastIndexOf(i));</span></span></code></pre></div><h2 id="_20-拼合数组" tabindex="-1">20.拼合数组 <a class="header-anchor" href="#_20-拼合数组" aria-label="Permalink to &quot;20.拼合数组&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// flatten: 拼合数组</span></span>
<span class="line"><span style="color:#f6f6f4;">// 使用Array.reduce()获取数组中的所有元素和concat()以拼合它们</span></span>
<span class="line"><span style="color:#f6f6f4;">let flatten = arr =&gt; arr.reduce((a, v) =&gt; a.concat(v), []);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// flatten: 拼合数组</span></span>
<span class="line"><span style="color:#24292e;">// 使用Array.reduce()获取数组中的所有元素和concat()以拼合它们</span></span>
<span class="line"><span style="color:#24292e;">let flatten = arr =&gt; arr.reduce((a, v) =&gt; a.concat(v), []);</span></span></code></pre></div><h2 id="_21-将数组向上拼合到指定深度" tabindex="-1">21.将数组向上拼合到指定深度 <a class="header-anchor" href="#_21-将数组向上拼合到指定深度" aria-label="Permalink to &quot;21.将数组向上拼合到指定深度&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// falttenDepth: 将数组向上拼合到指定深度</span></span>
<span class="line"><span style="color:#f6f6f4;">// 使用递归, 递减depth, 每层深度为1。使用Array.reduce()和Array.concat()来合并元素或数组。基本情况下, 对于等于1的depth停止递归。省略第二个元素,depth仅拼合到1的深度 (单个拼合)。</span></span>
<span class="line"><span style="color:#f6f6f4;">// falttenDepth: (arr, depth = 1) =&gt; depth != 1 ? arr.reduce((a, v) =&gt; a.concat(Array.isArray(v) ? flattenDepth(v, depth - 1) : v), []) : arr.reduce((a, v) =&gt; a.concat(v), []),</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// falttenDepth: 将数组向上拼合到指定深度</span></span>
<span class="line"><span style="color:#24292e;">// 使用递归, 递减depth, 每层深度为1。使用Array.reduce()和Array.concat()来合并元素或数组。基本情况下, 对于等于1的depth停止递归。省略第二个元素,depth仅拼合到1的深度 (单个拼合)。</span></span>
<span class="line"><span style="color:#24292e;">// falttenDepth: (arr, depth = 1) =&gt; depth != 1 ? arr.reduce((a, v) =&gt; a.concat(Array.isArray(v) ? flattenDepth(v, depth - 1) : v), []) : arr.reduce((a, v) =&gt; a.concat(v), []),</span></span></code></pre></div><h2 id="_22-根据给定函数对数组元素进行分组" tabindex="-1">22.根据给定函数对数组元素进行分组 <a class="header-anchor" href="#_22-根据给定函数对数组元素进行分组" aria-label="Permalink to &quot;22.根据给定函数对数组元素进行分组&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// groupby: 根据给定函数对数组元素进行分组</span></span>
<span class="line"><span style="color:#f6f6f4;">// 使用Array.map()将数组的值映射到函数或属性名。使用Array.reduce()创建一个对象, 其中的键是从映射的结果生成的。</span></span>
<span class="line"><span style="color:#f6f6f4;">// groupBy: (arr, func) =&gt; arr.map(typeof func === &#39;function&#39; ? func : val =&gt; val[func]).reduce((acc, val, i) =&gt; { acc[val] = (acc[val] || []).concat(arr[i]); return acc; }, {}),</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// groupby: 根据给定函数对数组元素进行分组</span></span>
<span class="line"><span style="color:#24292e;">// 使用Array.map()将数组的值映射到函数或属性名。使用Array.reduce()创建一个对象, 其中的键是从映射的结果生成的。</span></span>
<span class="line"><span style="color:#24292e;">// groupBy: (arr, func) =&gt; arr.map(typeof func === &#39;function&#39; ? func : val =&gt; val[func]).reduce((acc, val, i) =&gt; { acc[val] = (acc[val] || []).concat(arr[i]); return acc; }, {}),</span></span></code></pre></div><h2 id="_23-返回列表的头" tabindex="-1">23.返回列表的头 <a class="header-anchor" href="#_23-返回列表的头" aria-label="Permalink to &quot;23.返回列表的头&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// head: 返回列表的头</span></span>
<span class="line"><span style="color:#f6f6f4;">// 使用arr[0]可返回传递的数组的第一个元素。</span></span>
<span class="line"><span style="color:#f6f6f4;">let head = arr =&gt; arr[0];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// head: 返回列表的头</span></span>
<span class="line"><span style="color:#24292e;">// 使用arr[0]可返回传递的数组的第一个元素。</span></span>
<span class="line"><span style="color:#24292e;">let head = arr =&gt; arr[0];</span></span></code></pre></div><h2 id="_24-返回除最后一个数组之外的所有元素" tabindex="-1">24.返回除最后一个数组之外的所有元素 <a class="header-anchor" href="#_24-返回除最后一个数组之外的所有元素" aria-label="Permalink to &quot;24.返回除最后一个数组之外的所有元素&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// initial: 返回除最后一个数组之外的所有元素</span></span>
<span class="line"><span style="color:#f6f6f4;">// 使用 &quot;arr.slice(0,-1)&quot; 返回数组的最后一个元素。</span></span>
<span class="line"><span style="color:#f6f6f4;">let initial = arr =&gt; arr.slice(0, -1);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// initial: 返回除最后一个数组之外的所有元素</span></span>
<span class="line"><span style="color:#24292e;">// 使用 &quot;arr.slice(0,-1)&quot; 返回数组的最后一个元素。</span></span>
<span class="line"><span style="color:#24292e;">let initial = arr =&gt; arr.slice(0, -1);</span></span></code></pre></div><h2 id="_25-初始化并填充具有指定值的数组" tabindex="-1">25.初始化并填充具有指定值的数组 <a class="header-anchor" href="#_25-初始化并填充具有指定值的数组" aria-label="Permalink to &quot;25.初始化并填充具有指定值的数组&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// initializeArrayWithRange: 初始化并填充具有指定值的数组</span></span>
<span class="line"><span style="color:#f6f6f4;">// 使用Array(n)创建所需长度的数组,fill(v)以填充所需的值。可以省略value以使用默认值0.</span></span>
<span class="line"><span style="color:#f6f6f4;">let initializeArrayWithRange = (end, start = 0) =&gt; Array.from({</span></span>
<span class="line"><span style="color:#f6f6f4;">	length: end - start</span></span>
<span class="line"><span style="color:#f6f6f4;">}).map((v, i) =&gt; i + start);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// initializeArrayWithRange: 初始化并填充具有指定值的数组</span></span>
<span class="line"><span style="color:#24292e;">// 使用Array(n)创建所需长度的数组,fill(v)以填充所需的值。可以省略value以使用默认值0.</span></span>
<span class="line"><span style="color:#24292e;">let initializeArrayWithRange = (end, start = 0) =&gt; Array.from({</span></span>
<span class="line"><span style="color:#24292e;">	length: end - start</span></span>
<span class="line"><span style="color:#24292e;">}).map((v, i) =&gt; i + start);</span></span></code></pre></div><h2 id="_26-初始化并填充具有指定值的数组" tabindex="-1">26.初始化并填充具有指定值的数组 <a class="header-anchor" href="#_26-初始化并填充具有指定值的数组" aria-label="Permalink to &quot;26.初始化并填充具有指定值的数组&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// initializeArrayWithValues: 初始化并填充具有指定值的数组</span></span>
<span class="line"><span style="color:#f6f6f4;">// 使用Array(n)创建所需长度的数组,fill(v)以填充所需的值。可以省略value以使用默认值0</span></span>
<span class="line"><span style="color:#f6f6f4;">let initializeArrayWithValues = (n, value = 0) =&gt; Array(n).fill(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// initializeArrayWithValues: 初始化并填充具有指定值的数组</span></span>
<span class="line"><span style="color:#24292e;">// 使用Array(n)创建所需长度的数组,fill(v)以填充所需的值。可以省略value以使用默认值0</span></span>
<span class="line"><span style="color:#24292e;">let initializeArrayWithValues = (n, value = 0) =&gt; Array(n).fill(value);</span></span></code></pre></div><h2 id="_27-返回两个数组中存在的元素的列表" tabindex="-1">27.返回两个数组中存在的元素的列表 <a class="header-anchor" href="#_27-返回两个数组中存在的元素的列表" aria-label="Permalink to &quot;27.返回两个数组中存在的元素的列表&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// intersection: 返回两个数组中存在的元素的列表</span></span>
<span class="line"><span style="color:#f6f6f4;">// 从b创建Set, 然后使用Array.filter()on a只保留b中包含的值.</span></span>
<span class="line"><span style="color:#f6f6f4;">let intersection = (a, b) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">	const s = new Set(b);</span></span>
<span class="line"><span style="color:#f6f6f4;">	return a.filter(x =&gt; s.has(x));</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// intersection: 返回两个数组中存在的元素的列表</span></span>
<span class="line"><span style="color:#24292e;">// 从b创建Set, 然后使用Array.filter()on a只保留b中包含的值.</span></span>
<span class="line"><span style="color:#24292e;">let intersection = (a, b) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">	const s = new Set(b);</span></span>
<span class="line"><span style="color:#24292e;">	return a.filter(x =&gt; s.has(x));</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><h2 id="_28-返回数组中的最后一个元素" tabindex="-1">28.返回数组中的最后一个元素 <a class="header-anchor" href="#_28-返回数组中的最后一个元素" aria-label="Permalink to &quot;28.返回数组中的最后一个元素&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// last: 返回数组中的最后一个元素</span></span>
<span class="line"><span style="color:#f6f6f4;">// 使用arr.length - 1可计算给定数组的最后一个元素的索引并返回它</span></span>
<span class="line"><span style="color:#f6f6f4;">let last = arr =&gt; arr[arr.length - 1];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// last: 返回数组中的最后一个元素</span></span>
<span class="line"><span style="color:#24292e;">// 使用arr.length - 1可计算给定数组的最后一个元素的索引并返回它</span></span>
<span class="line"><span style="color:#24292e;">let last = arr =&gt; arr[arr.length - 1];</span></span></code></pre></div><h2 id="_29-使用函数将数组的值映射到对象-其中键值对由原始值作为键和映射值组成" tabindex="-1">29.使用函数将数组的值映射到对象, 其中键值对由原始值作为键和映射值组成 <a class="header-anchor" href="#_29-使用函数将数组的值映射到对象-其中键值对由原始值作为键和映射值组成" aria-label="Permalink to &quot;29.使用函数将数组的值映射到对象, 其中键值对由原始值作为键和映射值组成&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// mapObject: 使用函数将数组的值映射到对象, 其中键值对由原始值作为键和映射值组成</span></span>
<span class="line"><span style="color:#f6f6f4;">// 使用匿名内部函数范围来声明未定义的内存空间, 使用闭包来存储返回值。使用新的Array可将该数组与函数的映射放在其数据集上, 而逗号运算符返回第二个步骤, 而不需要从一个上下文移动到另一个环境 (由于关闭和操作顺序)。</span></span>
<span class="line"><span style="color:#f6f6f4;">let mapObject = (arr, fn) =&gt; (a =&gt; (a = [arr, arr.map(fn)], a[0].reduce((acc, val, ind) =&gt; (acc[val] = a[1][ind], acc), {})))</span></span>
<span class="line"><span style="color:#f6f6f4;">	();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// mapObject: 使用函数将数组的值映射到对象, 其中键值对由原始值作为键和映射值组成</span></span>
<span class="line"><span style="color:#24292e;">// 使用匿名内部函数范围来声明未定义的内存空间, 使用闭包来存储返回值。使用新的Array可将该数组与函数的映射放在其数据集上, 而逗号运算符返回第二个步骤, 而不需要从一个上下文移动到另一个环境 (由于关闭和操作顺序)。</span></span>
<span class="line"><span style="color:#24292e;">let mapObject = (arr, fn) =&gt; (a =&gt; (a = [arr, arr.map(fn)], a[0].reduce((acc, val, ind) =&gt; (acc[val] = a[1][ind], acc), {})))</span></span>
<span class="line"><span style="color:#24292e;">	();</span></span></code></pre></div><h2 id="_30-nthelement-返回数组的第-n-个元素" tabindex="-1">30.nthElement: 返回数组的第 n 个元素 <a class="header-anchor" href="#_30-nthelement-返回数组的第-n-个元素" aria-label="Permalink to &quot;30.nthElement: 返回数组的第 n 个元素&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// nthElement: 返回数组的第 n 个元素</span></span>
<span class="line"><span style="color:#f6f6f4;">// 使用Array.slice()可获取包含第 n 个元素的数组。如果索引超出界限, 则返回[]。省略第二个参数n, 以获取数组的第一个元素</span></span>
<span class="line"><span style="color:#f6f6f4;">let nthElement = (arr, n = 0) =&gt; (n &gt; 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// nthElement: 返回数组的第 n 个元素</span></span>
<span class="line"><span style="color:#24292e;">// 使用Array.slice()可获取包含第 n 个元素的数组。如果索引超出界限, 则返回[]。省略第二个参数n, 以获取数组的第一个元素</span></span>
<span class="line"><span style="color:#24292e;">let nthElement = (arr, n = 0) =&gt; (n &gt; 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];</span></span></code></pre></div><h2 id="_31-从对象中选取对应于给定键的键值对" tabindex="-1">31.从对象中选取对应于给定键的键值对 <a class="header-anchor" href="#_31-从对象中选取对应于给定键的键值对" aria-label="Permalink to &quot;31.从对象中选取对应于给定键的键值对&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// pick: 从对象中选取对应于给定键的键值对</span></span>
<span class="line"><span style="color:#f6f6f4;">// 使用Array.reduce()将筛选/选取的密钥转换回具有相应键值对的对象 (如果在 obj 中存在该键)。</span></span>
<span class="line"><span style="color:#f6f6f4;">let pick = (obj, arr) =&gt; arr.reduce((acc, curr) =&gt; (curr in obj &amp;&amp; (acc[curr] = obj[curr]), acc), {});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// pick: 从对象中选取对应于给定键的键值对</span></span>
<span class="line"><span style="color:#24292e;">// 使用Array.reduce()将筛选/选取的密钥转换回具有相应键值对的对象 (如果在 obj 中存在该键)。</span></span>
<span class="line"><span style="color:#24292e;">let pick = (obj, arr) =&gt; arr.reduce((acc, curr) =&gt; (curr in obj &amp;&amp; (acc[curr] = obj[curr]), acc), {});</span></span></code></pre></div><h2 id="_32-对原始数组进行变异-以筛选出指定的值" tabindex="-1">32.对原始数组进行变异, 以筛选出指定的值 <a class="header-anchor" href="#_32-对原始数组进行变异-以筛选出指定的值" aria-label="Permalink to &quot;32.对原始数组进行变异, 以筛选出指定的值&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// pull: 对原始数组进行变异, 以筛选出指定的值</span></span>
<span class="line"><span style="color:#f6f6f4;">// 使用Array.filter()和Array.includes()来拉出不需要的值。使用Array.length = 0可将传入的数组中的长度重置为零, 并将其设置为Array.push(), 以便仅使用所提取的值填充它。</span></span>
<span class="line"><span style="color:#f6f6f4;">let pull = (arr, ...args) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">	let pulled = arr.filter((v, i) =&gt; !args.includes(v));</span></span>
<span class="line"><span style="color:#f6f6f4;">	arr.length = 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">	pulled.forEach(v =&gt; arr.push(v));</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// pull: 对原始数组进行变异, 以筛选出指定的值</span></span>
<span class="line"><span style="color:#24292e;">// 使用Array.filter()和Array.includes()来拉出不需要的值。使用Array.length = 0可将传入的数组中的长度重置为零, 并将其设置为Array.push(), 以便仅使用所提取的值填充它。</span></span>
<span class="line"><span style="color:#24292e;">let pull = (arr, ...args) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">	let pulled = arr.filter((v, i) =&gt; !args.includes(v));</span></span>
<span class="line"><span style="color:#24292e;">	arr.length = 0;</span></span>
<span class="line"><span style="color:#24292e;">	pulled.forEach(v =&gt; arr.push(v));</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><h2 id="_33-从数组中移除给定函数返回false的元素" tabindex="-1">33.从数组中移除给定函数返回false的元素 <a class="header-anchor" href="#_33-从数组中移除给定函数返回false的元素" aria-label="Permalink to &quot;33.从数组中移除给定函数返回false的元素&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// remove: 从数组中移除给定函数返回false的元素</span></span>
<span class="line"><span style="color:#f6f6f4;">//  使用Array.filter()查找返回 truthy 值的数组元素和Array.reduce()以使用Array.splice()删除元素。使用三参数 (func value, index, array调用函数).</span></span>
<span class="line"><span style="color:#f6f6f4;">let remove = (arr, func) =&gt; Array.isArray(arr) ? arr.filter(func).reduce((acc, val) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">	arr.splice(arr.indexOf(val), 1);</span></span>
<span class="line"><span style="color:#f6f6f4;">	return acc.concat(val);</span></span>
<span class="line"><span style="color:#f6f6f4;">}, []) : [];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// remove: 从数组中移除给定函数返回false的元素</span></span>
<span class="line"><span style="color:#24292e;">//  使用Array.filter()查找返回 truthy 值的数组元素和Array.reduce()以使用Array.splice()删除元素。使用三参数 (func value, index, array调用函数).</span></span>
<span class="line"><span style="color:#24292e;">let remove = (arr, func) =&gt; Array.isArray(arr) ? arr.filter(func).reduce((acc, val) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">	arr.splice(arr.indexOf(val), 1);</span></span>
<span class="line"><span style="color:#24292e;">	return acc.concat(val);</span></span>
<span class="line"><span style="color:#24292e;">}, []) : [];</span></span></code></pre></div><h2 id="_34-返回数组中的随机元素" tabindex="-1">34.返回数组中的随机元素 <a class="header-anchor" href="#_34-返回数组中的随机元素" aria-label="Permalink to &quot;34.返回数组中的随机元素&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// sample: 返回数组中的随机元素</span></span>
<span class="line"><span style="color:#f6f6f4;">// 使用Math.random()生成一个随机数, 将它与length相乘, 并使用数学将其舍入到最接近的整数Math.floor()。此方法也适用于字符串</span></span>
<span class="line"><span style="color:#f6f6f4;">let sample = arr =&gt; arr[Math.floor(Math.random() * arr.length)];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// sample: 返回数组中的随机元素</span></span>
<span class="line"><span style="color:#24292e;">// 使用Math.random()生成一个随机数, 将它与length相乘, 并使用数学将其舍入到最接近的整数Math.floor()。此方法也适用于字符串</span></span>
<span class="line"><span style="color:#24292e;">let sample = arr =&gt; arr[Math.floor(Math.random() * arr.length)];</span></span></code></pre></div><h2 id="_35-随机数组值的顺序" tabindex="-1">35.随机数组值的顺序 <a class="header-anchor" href="#_35-随机数组值的顺序" aria-label="Permalink to &quot;35.随机数组值的顺序&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// shuffle: 随机数组值的顺序</span></span>
<span class="line"><span style="color:#f6f6f4;">// 使用Array.sort()可在比较器中使用Math.random()重新排序元素。</span></span>
<span class="line"><span style="color:#f6f6f4;">let shuffle = arr =&gt; arr.sort(() =&gt; Math.random() - 0.5);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// shuffle: 随机数组值的顺序</span></span>
<span class="line"><span style="color:#24292e;">// 使用Array.sort()可在比较器中使用Math.random()重新排序元素。</span></span>
<span class="line"><span style="color:#24292e;">let shuffle = arr =&gt; arr.sort(() =&gt; Math.random() - 0.5);</span></span></code></pre></div><h2 id="_36-返回两个数组中都显示的元素的数组" tabindex="-1">36.返回两个数组中都显示的元素的数组 <a class="header-anchor" href="#_36-返回两个数组中都显示的元素的数组" aria-label="Permalink to &quot;36.返回两个数组中都显示的元素的数组&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// similarity: 返回两个数组中都显示的元素的数组</span></span>
<span class="line"><span style="color:#f6f6f4;">// 使用filter()可删除不属于values的值, 使用includes()确定.</span></span>
<span class="line"><span style="color:#f6f6f4;">let similarity = (arr, values) =&gt; arr.filter(v =&gt; values.includes(v));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// similarity: 返回两个数组中都显示的元素的数组</span></span>
<span class="line"><span style="color:#24292e;">// 使用filter()可删除不属于values的值, 使用includes()确定.</span></span>
<span class="line"><span style="color:#24292e;">let similarity = (arr, values) =&gt; arr.filter(v =&gt; values.includes(v));</span></span></code></pre></div><h2 id="_37-返回两个数组之间的对称差" tabindex="-1">37.返回两个数组之间的对称差 <a class="header-anchor" href="#_37-返回两个数组之间的对称差" aria-label="Permalink to &quot;37.返回两个数组之间的对称差&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// symmetricDifference: 返回两个数组之间的对称差</span></span>
<span class="line"><span style="color:#f6f6f4;">// 从每个数组创建一个Set, 然后对它们中的每一个都使用Array.filter(), 以便只保留其他值中不包含的数值。</span></span>
<span class="line"><span style="color:#f6f6f4;">let symmetricDifference = (a, b) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">	const sA = new Set(a),</span></span>
<span class="line"><span style="color:#f6f6f4;">		sB = new Set(b);</span></span>
<span class="line"><span style="color:#f6f6f4;">	return [...a.filter(x =&gt; !sB.has(x)), ...b.filter(x =&gt; !sA.has(x))];</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// symmetricDifference: 返回两个数组之间的对称差</span></span>
<span class="line"><span style="color:#24292e;">// 从每个数组创建一个Set, 然后对它们中的每一个都使用Array.filter(), 以便只保留其他值中不包含的数值。</span></span>
<span class="line"><span style="color:#24292e;">let symmetricDifference = (a, b) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">	const sA = new Set(a),</span></span>
<span class="line"><span style="color:#24292e;">		sB = new Set(b);</span></span>
<span class="line"><span style="color:#24292e;">	return [...a.filter(x =&gt; !sB.has(x)), ...b.filter(x =&gt; !sA.has(x))];</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><h2 id="_38-返回数组中的所有元素-除第一个" tabindex="-1">38.返回数组中的所有元素, 除第一个 <a class="header-anchor" href="#_38-返回数组中的所有元素-除第一个" aria-label="Permalink to &quot;38.返回数组中的所有元素, 除第一个&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// tail: 返回数组中的所有元素, 除第一个</span></span>
<span class="line"><span style="color:#f6f6f4;">// 如果数组的length大于1, 则返回arr.slice(1), 否则返回整个数组。</span></span>
<span class="line"><span style="color:#f6f6f4;">let tail = arr =&gt; arr.length &gt; 1 ? arr.slice(1) : arr;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// tail: 返回数组中的所有元素, 除第一个</span></span>
<span class="line"><span style="color:#24292e;">// 如果数组的length大于1, 则返回arr.slice(1), 否则返回整个数组。</span></span>
<span class="line"><span style="color:#24292e;">let tail = arr =&gt; arr.length &gt; 1 ? arr.slice(1) : arr;</span></span></code></pre></div><h2 id="_39-返回一个数组-其中-n-个元素从开始处移除" tabindex="-1">39.返回一个数组, 其中 n 个元素从开始处移除 <a class="header-anchor" href="#_39-返回一个数组-其中-n-个元素从开始处移除" aria-label="Permalink to &quot;39.返回一个数组, 其中 n 个元素从开始处移除&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// take: 返回一个数组, 其中 n 个元素从开始处移除</span></span>
<span class="line"><span style="color:#f6f6f4;">// 使用Array.slice()创建数组的切片, 其中包含从开始处取出的n元素</span></span>
<span class="line"><span style="color:#f6f6f4;">let take = (arr, n = 1) =&gt; arr.slice(0, n);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// take: 返回一个数组, 其中 n 个元素从开始处移除</span></span>
<span class="line"><span style="color:#24292e;">// 使用Array.slice()创建数组的切片, 其中包含从开始处取出的n元素</span></span>
<span class="line"><span style="color:#24292e;">let take = (arr, n = 1) =&gt; arr.slice(0, n);</span></span></code></pre></div><h2 id="_40-返回一个数组-其中-n-个元素从末尾移除" tabindex="-1">40.返回一个数组, 其中 n 个元素从末尾移除 <a class="header-anchor" href="#_40-返回一个数组-其中-n-个元素从末尾移除" aria-label="Permalink to &quot;40.返回一个数组, 其中 n 个元素从末尾移除&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// takeRight: 返回一个数组, 其中 n 个元素从末尾移除</span></span>
<span class="line"><span style="color:#f6f6f4;">// 使用Array.slice()创建数组的切片, 其中包含从末尾取出的n元素</span></span>
<span class="line"><span style="color:#f6f6f4;">let takeRight = (arr, n = 1) =&gt; arr.slice(arr.length - n, arr.length);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// takeRight: 返回一个数组, 其中 n 个元素从末尾移除</span></span>
<span class="line"><span style="color:#24292e;">// 使用Array.slice()创建数组的切片, 其中包含从末尾取出的n元素</span></span>
<span class="line"><span style="color:#24292e;">let takeRight = (arr, n = 1) =&gt; arr.slice(arr.length - n, arr.length);</span></span></code></pre></div><h2 id="_41-返回在两个数组中的任意一个中存在的每个元素" tabindex="-1">41.返回在两个数组中的任意一个中存在的每个元素 <a class="header-anchor" href="#_41-返回在两个数组中的任意一个中存在的每个元素" aria-label="Permalink to &quot;41.返回在两个数组中的任意一个中存在的每个元素&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// union: 返回在两个数组中的任意一个中存在的每个元素</span></span>
<span class="line"><span style="color:#f6f6f4;">// 创建一个Set, 其中包含a和b的所有值, 并将其转换为数组。</span></span>
<span class="line"><span style="color:#f6f6f4;">let union = (a, b) =&gt; Array.from(new Set([...a, ...b]));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// union: 返回在两个数组中的任意一个中存在的每个元素</span></span>
<span class="line"><span style="color:#24292e;">// 创建一个Set, 其中包含a和b的所有值, 并将其转换为数组。</span></span>
<span class="line"><span style="color:#24292e;">let union = (a, b) =&gt; Array.from(new Set([...a, ...b]));</span></span></code></pre></div><h2 id="_42-筛选出数组中具有指定值之一的元素" tabindex="-1">42.筛选出数组中具有指定值之一的元素 <a class="header-anchor" href="#_42-筛选出数组中具有指定值之一的元素" aria-label="Permalink to &quot;42.筛选出数组中具有指定值之一的元素&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// without: 筛选出数组中具有指定值之一的元素</span></span>
<span class="line"><span style="color:#f6f6f4;">// 使用Array.filter()创建不包括的数组 (使用!Array.includes()) 所有给定值。</span></span>
<span class="line"><span style="color:#f6f6f4;">let without = (arr, ...args) =&gt; arr.filter(v =&gt; !args.includes(v));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// without: 筛选出数组中具有指定值之一的元素</span></span>
<span class="line"><span style="color:#24292e;">// 使用Array.filter()创建不包括的数组 (使用!Array.includes()) 所有给定值。</span></span>
<span class="line"><span style="color:#24292e;">let without = (arr, ...args) =&gt; arr.filter(v =&gt; !args.includes(v));</span></span></code></pre></div><h2 id="_43-创建基于原始数组中的位置分组的元素数组" tabindex="-1">43.创建基于原始数组中的位置分组的元素数组 <a class="header-anchor" href="#_43-创建基于原始数组中的位置分组的元素数组" aria-label="Permalink to &quot;43.创建基于原始数组中的位置分组的元素数组&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// zip: 创建基于原始数组中的位置分组的元素数组</span></span>
<span class="line"><span style="color:#f6f6f4;">// 使用Math.max.apply()获取参数中最长的数组。创建一个以该长度为返回值的数组, 并使用 map 函数创建一个分组元素的数组Array.from()如果参数数组的长度不同, 则在未找到任何值的情况下使用undefined。</span></span>
<span class="line"><span style="color:#f6f6f4;">let zip = (...arrays) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">	const maxLength = Math.max(...arrays.map(x =&gt; x.length));</span></span>
<span class="line"><span style="color:#f6f6f4;">	return Array.from({</span></span>
<span class="line"><span style="color:#f6f6f4;">		length: maxLength</span></span>
<span class="line"><span style="color:#f6f6f4;">	}).map((_, i) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">		return Array.from({</span></span>
<span class="line"><span style="color:#f6f6f4;">			length: arrays.length</span></span>
<span class="line"><span style="color:#f6f6f4;">		}, (_, k) =&gt; arrays[k][i]);</span></span>
<span class="line"><span style="color:#f6f6f4;">	})</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// zip: 创建基于原始数组中的位置分组的元素数组</span></span>
<span class="line"><span style="color:#24292e;">// 使用Math.max.apply()获取参数中最长的数组。创建一个以该长度为返回值的数组, 并使用 map 函数创建一个分组元素的数组Array.from()如果参数数组的长度不同, 则在未找到任何值的情况下使用undefined。</span></span>
<span class="line"><span style="color:#24292e;">let zip = (...arrays) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">	const maxLength = Math.max(...arrays.map(x =&gt; x.length));</span></span>
<span class="line"><span style="color:#24292e;">	return Array.from({</span></span>
<span class="line"><span style="color:#24292e;">		length: maxLength</span></span>
<span class="line"><span style="color:#24292e;">	}).map((_, i) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">		return Array.from({</span></span>
<span class="line"><span style="color:#24292e;">			length: arrays.length</span></span>
<span class="line"><span style="color:#24292e;">		}, (_, k) =&gt; arrays[k][i]);</span></span>
<span class="line"><span style="color:#24292e;">	})</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><h2 id="_44-从给定数组中移除一项" tabindex="-1">44.从给定数组中移除一项 <a class="header-anchor" href="#_44-从给定数组中移除一项" aria-label="Permalink to &quot;44.从给定数组中移除一项&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 从给定数组中移除一项</span></span>
<span class="line"><span style="color:#f6f6f4;">let removeArrayItem = function(arr, item) {</span></span>
<span class="line"><span style="color:#f6f6f4;">	var i = 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">	while (i &lt; arr.length) {</span></span>
<span class="line"><span style="color:#f6f6f4;">		if (arr[i] == item) {</span></span>
<span class="line"><span style="color:#f6f6f4;">			arr.splice(i, 1);</span></span>
<span class="line"><span style="color:#f6f6f4;">		} else {</span></span>
<span class="line"><span style="color:#f6f6f4;">			i++;</span></span>
<span class="line"><span style="color:#f6f6f4;">		}</span></span>
<span class="line"><span style="color:#f6f6f4;">	}</span></span>
<span class="line"><span style="color:#f6f6f4;">	return arr;</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 从给定数组中移除一项</span></span>
<span class="line"><span style="color:#24292e;">let removeArrayItem = function(arr, item) {</span></span>
<span class="line"><span style="color:#24292e;">	var i = 0;</span></span>
<span class="line"><span style="color:#24292e;">	while (i &lt; arr.length) {</span></span>
<span class="line"><span style="color:#24292e;">		if (arr[i] == item) {</span></span>
<span class="line"><span style="color:#24292e;">			arr.splice(i, 1);</span></span>
<span class="line"><span style="color:#24292e;">		} else {</span></span>
<span class="line"><span style="color:#24292e;">			i++;</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	return arr;</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><h2 id="_45-检查给定数组中是否包含某项" tabindex="-1">45.检查给定数组中是否包含某项 <a class="header-anchor" href="#_45-检查给定数组中是否包含某项" aria-label="Permalink to &quot;45.检查给定数组中是否包含某项&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 检查给定数组中是否包含某项</span></span>
<span class="line"><span style="color:#f6f6f4;">let contains = function(arr, item) {</span></span>
<span class="line"><span style="color:#f6f6f4;">	var i = arr.length;</span></span>
<span class="line"><span style="color:#f6f6f4;">	while (i--) {</span></span>
<span class="line"><span style="color:#f6f6f4;">		if (arr[i] === item) {</span></span>
<span class="line"><span style="color:#f6f6f4;">			return true;</span></span>
<span class="line"><span style="color:#f6f6f4;">		}</span></span>
<span class="line"><span style="color:#f6f6f4;">	}</span></span>
<span class="line"><span style="color:#f6f6f4;">	return false;</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 检查给定数组中是否包含某项</span></span>
<span class="line"><span style="color:#24292e;">let contains = function(arr, item) {</span></span>
<span class="line"><span style="color:#24292e;">	var i = arr.length;</span></span>
<span class="line"><span style="color:#24292e;">	while (i--) {</span></span>
<span class="line"><span style="color:#24292e;">		if (arr[i] === item) {</span></span>
<span class="line"><span style="color:#24292e;">			return true;</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	return false;</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><h2 id="_46-验证不能包含字母" tabindex="-1">46.验证不能包含字母 <a class="header-anchor" href="#_46-验证不能包含字母" aria-label="Permalink to &quot;46.验证不能包含字母&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"> * @param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">  */</span></span>
<span class="line"><span style="color:#f6f6f4;"> export const isNoWord = value =&gt; /^[^A-Za-z]*$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> * @param { string } value</span></span>
<span class="line"><span style="color:#24292e;">  */</span></span>
<span class="line"><span style="color:#24292e;"> export const isNoWord = value =&gt; /^[^A-Za-z]*$/g.test(value);</span></span></code></pre></div><h2 id="_47-验证中文和数字" tabindex="-1">47.验证中文和数字 <a class="header-anchor" href="#_47-验证中文和数字" aria-label="Permalink to &quot;47.验证中文和数字&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isCHNAndEN = value =&gt; /^((?:[\\u3400-\\u4DB5\\u4E00-\\u9FEA\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29]|[\\uD840-\\uD868\\uD86A-\\uD86C\\uD86F-\\uD872\\uD874-\\uD879][\\uDC00-\\uDFFF]|\\uD869[\\uDC00-\\uDED6\\uDF00-\\uDFFF]|\\uD86D[\\uDC00-\\uDF34\\uDF40-\\uDFFF]|\\uD86E[\\uDC00-\\uDC1D\\uDC20-\\uDFFF]|\\uD873[\\uDC00-\\uDEA1\\uDEB0-\\uDFFF]|\\uD87A[\\uDC00-\\uDFE0])|(\\d))+$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isCHNAndEN = value =&gt; /^((?:[\\u3400-\\u4DB5\\u4E00-\\u9FEA\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29]|[\\uD840-\\uD868\\uD86A-\\uD86C\\uD86F-\\uD872\\uD874-\\uD879][\\uDC00-\\uDFFF]|\\uD869[\\uDC00-\\uDED6\\uDF00-\\uDFFF]|\\uD86D[\\uDC00-\\uDF34\\uDF40-\\uDFFF]|\\uD86E[\\uDC00-\\uDC1D\\uDC20-\\uDFFF]|\\uD873[\\uDC00-\\uDEA1\\uDEB0-\\uDFFF]|\\uD87A[\\uDC00-\\uDFE0])|(\\d))+$/g.test(value);</span></span></code></pre></div><h2 id="_48-验证邮政编码-中国" tabindex="-1">48.验证邮政编码(中国) <a class="header-anchor" href="#_48-验证邮政编码-中国" aria-label="Permalink to &quot;48.验证邮政编码(中国)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isPostcode = value =&gt; /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\\d{4}$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isPostcode = value =&gt; /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\\d{4}$/g.test(value);</span></span></code></pre></div><h2 id="_49-验证微信号-6至20位-以字母开头-字母-数字-减号-下划线" tabindex="-1">49.验证微信号，6至20位，以字母开头，字母，数字，减号，下划线 <a class="header-anchor" href="#_49-验证微信号-6至20位-以字母开头-字母-数字-减号-下划线" aria-label="Permalink to &quot;49.验证微信号，6至20位，以字母开头，字母，数字，减号，下划线&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isWeChatNum = value =&gt; /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isWeChatNum = value =&gt; /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(value);</span></span></code></pre></div><h2 id="_50-验证16进制颜色" tabindex="-1">50.验证16进制颜色 <a class="header-anchor" href="#_50-验证16进制颜色" aria-label="Permalink to &quot;50.验证16进制颜色&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isColor16 = value =&gt; /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isColor16 = value =&gt; /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(value);</span></span></code></pre></div><h2 id="_51-验证火车车次" tabindex="-1">51.验证火车车次 <a class="header-anchor" href="#_51-验证火车车次" aria-label="Permalink to &quot;51.验证火车车次&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isTrainNum = value =&gt; /^[GCDZTSPKXLY1-9]\\d{1,4}$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isTrainNum = value =&gt; /^[GCDZTSPKXLY1-9]\\d{1,4}$/g.test(value);</span></span></code></pre></div><h2 id="_52-验证手机机身码-imei" tabindex="-1">52.验证手机机身码(IMEI) <a class="header-anchor" href="#_52-验证手机机身码-imei" aria-label="Permalink to &quot;52.验证手机机身码(IMEI)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isIMEI = value =&gt; /^\\d{15,17}$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isIMEI = value =&gt; /^\\d{15,17}$/g.test(value);</span></span></code></pre></div><h2 id="_53-验证必须带端口号的网址-或ip" tabindex="-1">53.验证必须带端口号的网址(或ip) <a class="header-anchor" href="#_53-验证必须带端口号的网址-或ip" aria-label="Permalink to &quot;53.验证必须带端口号的网址(或ip)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isHttpAndPort = value =&gt; /^((ht|f)tps?:\\/\\/)?[\\w-]+(\\.[\\w-]+)+:\\d{1,5}\\/?$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isHttpAndPort = value =&gt; /^((ht|f)tps?:\\/\\/)?[\\w-]+(\\.[\\w-]+)+:\\d{1,5}\\/?$/g.test(value);</span></span></code></pre></div><h2 id="_54-验证网址-支持端口和-参数-和-参数" tabindex="-1">54.验证网址(支持端口和&quot;?+参数&quot;和&quot;#+参数) <a class="header-anchor" href="#_54-验证网址-支持端口和-参数-和-参数" aria-label="Permalink to &quot;54.验证网址(支持端口和&quot;?+参数&quot;和&quot;#+参数)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isRightWebsite = value =&gt; /^(((ht|f)tps?):\\/\\/)?[\\w-]+(\\.[\\w-]+)+([\\w.,@?^=%&amp;:/~+#-]*[\\w@?^=%&amp;/~+#-])?$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isRightWebsite = value =&gt; /^(((ht|f)tps?):\\/\\/)?[\\w-]+(\\.[\\w-]+)+([\\w.,@?^=%&amp;:/~+#-]*[\\w@?^=%&amp;/~+#-])?$/g.test(value);</span></span></code></pre></div><h2 id="_55-验证统一社会信用代码" tabindex="-1">55.验证统一社会信用代码 <a class="header-anchor" href="#_55-验证统一社会信用代码" aria-label="Permalink to &quot;55.验证统一社会信用代码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isCreditCode = value =&gt; /^[0-9A-HJ-NPQRTUWXY]{2}\\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isCreditCode = value =&gt; /^[0-9A-HJ-NPQRTUWXY]{2}\\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/g.test(value);</span></span></code></pre></div><h2 id="_56-验证迅雷链接" tabindex="-1">56.验证迅雷链接 <a class="header-anchor" href="#_56-验证迅雷链接" aria-label="Permalink to &quot;56.验证迅雷链接&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isThunderLink = value =&gt; /^thunderx?:\\/\\/[a-zA-Z\\d]+=$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isThunderLink = value =&gt; /^thunderx?:\\/\\/[a-zA-Z\\d]+=$/g.test(value);</span></span></code></pre></div><h2 id="_57-验证ed2k链接-宽松匹配" tabindex="-1">57.验证ed2k链接(宽松匹配) <a class="header-anchor" href="#_57-验证ed2k链接-宽松匹配" aria-label="Permalink to &quot;57.验证ed2k链接(宽松匹配)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const ised2k = value =&gt; /^ed2k:\\/\\/\\|file\\|.+\\|\\/$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const ised2k = value =&gt; /^ed2k:\\/\\/\\|file\\|.+\\|\\/$/g.test(value);</span></span></code></pre></div><h2 id="_58-验证磁力链接-宽松匹配" tabindex="-1">58.验证磁力链接(宽松匹配) <a class="header-anchor" href="#_58-验证磁力链接-宽松匹配" aria-label="Permalink to &quot;58.验证磁力链接(宽松匹配)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isMagnet = value =&gt; /^magnet:\\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isMagnet = value =&gt; /^magnet:\\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/g.test(value);</span></span></code></pre></div><h2 id="_59-验证子网掩码" tabindex="-1">59.验证子网掩码 <a class="header-anchor" href="#_59-验证子网掩码" aria-label="Permalink to &quot;59.验证子网掩码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isSubnetMask = value =&gt; /^(?:\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])(?:\\.(?:\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])){3}$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isSubnetMask = value =&gt; /^(?:\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])(?:\\.(?:\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])){3}$/g.test(value);</span></span></code></pre></div><h2 id="_60-验证linux-文件夹-路径" tabindex="-1">60.验证linux&quot;文件夹&quot;路径 <a class="header-anchor" href="#_60-验证linux-文件夹-路径" aria-label="Permalink to &quot;60.验证linux&quot;文件夹&quot;路径&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isLinuxFolderPath = value =&gt; /^(\\/[^/]+)+\\/?$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isLinuxFolderPath = value =&gt; /^(\\/[^/]+)+\\/?$/g.test(value);</span></span></code></pre></div><h2 id="_61-验证linux-文件-路径" tabindex="-1">61.验证linux&quot;文件&quot;路径 <a class="header-anchor" href="#_61-验证linux-文件-路径" aria-label="Permalink to &quot;61.验证linux&quot;文件&quot;路径&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isLinuxFilePath = value =&gt; /^(\\/[^/]+)+$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isLinuxFilePath = value =&gt; /^(\\/[^/]+)+$/g.test(value);</span></span></code></pre></div><h2 id="_62-验证window-文件夹-路径" tabindex="-1">62.验证window&quot;文件夹&quot;路径 <a class="header-anchor" href="#_62-验证window-文件夹-路径" aria-label="Permalink to &quot;62.验证window&quot;文件夹&quot;路径&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isWindowsFolderPath = value =&gt; /^[a-zA-Z]:\\\\(?:\\w+\\\\?)*$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isWindowsFolderPath = value =&gt; /^[a-zA-Z]:\\\\(?:\\w+\\\\?)*$/g.test(value);</span></span></code></pre></div><h2 id="_63-验证window下-文件-路径" tabindex="-1">63.验证window下&quot;文件&quot;路径 <a class="header-anchor" href="#_63-验证window下-文件-路径" aria-label="Permalink to &quot;63.验证window下&quot;文件&quot;路径&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isWindowsFilePath = value =&gt; /^[a-zA-Z]:\\\\(?:\\w+\\\\)*\\w+\\.\\w+$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isWindowsFilePath = value =&gt; /^[a-zA-Z]:\\\\(?:\\w+\\\\)*\\w+\\.\\w+$/g.test(value);</span></span></code></pre></div><h2 id="_64-验证股票代码-a股" tabindex="-1">64.验证股票代码(A股) <a class="header-anchor" href="#_64-验证股票代码-a股" aria-label="Permalink to &quot;64.验证股票代码(A股)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isAShare = value =&gt; /^(s[hz]|S[HZ])(000[\\d]{3}|002[\\d]{3}|300[\\d]{3}|600[\\d]{3}|60[\\d]{4})$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isAShare = value =&gt; /^(s[hz]|S[HZ])(000[\\d]{3}|002[\\d]{3}|300[\\d]{3}|600[\\d]{3}|60[\\d]{4})$/g.test(value);</span></span></code></pre></div><h2 id="_65-验证版本号格式必须为x-y-z" tabindex="-1">65.验证版本号格式必须为X.Y.Z <a class="header-anchor" href="#_65-验证版本号格式必须为x-y-z" aria-label="Permalink to &quot;65.验证版本号格式必须为X.Y.Z&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isVersion = value =&gt; /^\\d+(?:\\.\\d+){2}$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isVersion = value =&gt; /^\\d+(?:\\.\\d+){2}$/g.test(value);</span></span></code></pre></div><h2 id="_66-验证视频链接地址-视频格式可按需增删" tabindex="-1">66.验证视频链接地址（视频格式可按需增删） <a class="header-anchor" href="#_66-验证视频链接地址-视频格式可按需增删" aria-label="Permalink to &quot;66.验证视频链接地址（视频格式可按需增删）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isVideoUrl = value =&gt; /^https?:\\/\\/(.+\\/)+.+(\\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isVideoUrl = value =&gt; /^https?:\\/\\/(.+\\/)+.+(\\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i.test(value);</span></span></code></pre></div><h2 id="_67-验证图片链接地址-图片格式可按需增删" tabindex="-1">67.验证图片链接地址（图片格式可按需增删） <a class="header-anchor" href="#_67-验证图片链接地址-图片格式可按需增删" aria-label="Permalink to &quot;67.验证图片链接地址（图片格式可按需增删）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isImageUrl = value =&gt; /^https?:\\/\\/(.+\\/)+.+(\\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isImageUrl = value =&gt; /^https?:\\/\\/(.+\\/)+.+(\\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i.test(value);</span></span></code></pre></div><h2 id="_68-验证银行卡号-10到30位-覆盖对公-私账户-参考微信支付" tabindex="-1">68.验证银行卡号（10到30位, 覆盖对公/私账户, 参考微信支付） <a class="header-anchor" href="#_68-验证银行卡号-10到30位-覆盖对公-私账户-参考微信支付" aria-label="Permalink to &quot;68.验证银行卡号（10到30位, 覆盖对公/私账户, 参考微信支付）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isAccountNumber = value =&gt; /^[1-9]\\d{9,29}$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isAccountNumber = value =&gt; /^[1-9]\\d{9,29}$/g.test(value);</span></span></code></pre></div><h2 id="_69-验证中文姓名" tabindex="-1">69.验证中文姓名 <a class="header-anchor" href="#_69-验证中文姓名" aria-label="Permalink to &quot;69.验证中文姓名&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isChineseName = value =&gt; /^(?:[\\u4e00-\\u9fa5·]{2,16})$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isChineseName = value =&gt; /^(?:[\\u4e00-\\u9fa5·]{2,16})$/g.test(value);</span></span></code></pre></div><h2 id="_70-验证英文姓名" tabindex="-1">70.验证英文姓名 <a class="header-anchor" href="#_70-验证英文姓名" aria-label="Permalink to &quot;70.验证英文姓名&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isEnglishName = value =&gt; /(^[a-zA-Z]{1}[a-zA-Z\\s]{0,20}[a-zA-Z]{1}$)/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isEnglishName = value =&gt; /(^[a-zA-Z]{1}[a-zA-Z\\s]{0,20}[a-zA-Z]{1}$)/g.test(value);</span></span></code></pre></div><h2 id="_71-验证车牌号-新能源" tabindex="-1">71.验证车牌号(新能源) <a class="header-anchor" href="#_71-验证车牌号-新能源" aria-label="Permalink to &quot;71.验证车牌号(新能源)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isLicensePlateNumberNER = value =&gt; /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isLicensePlateNumberNER = value =&gt; /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/g.test(value);</span></span></code></pre></div><h2 id="_72-验证车牌号-非新能源" tabindex="-1">72.验证车牌号(非新能源) <a class="header-anchor" href="#_72-验证车牌号-非新能源" aria-label="Permalink to &quot;72.验证车牌号(非新能源)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isLicensePlateNumberNNER = value =&gt; /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isLicensePlateNumberNNER = value =&gt; /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/g.test(value);</span></span></code></pre></div><h2 id="_73-验证车牌号-新能源-非新能源" tabindex="-1">73.验证车牌号(新能源+非新能源) <a class="header-anchor" href="#_73-验证车牌号-新能源-非新能源" aria-label="Permalink to &quot;73.验证车牌号(新能源+非新能源)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isLicensePlateNumber = value =&gt; /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isLicensePlateNumber = value =&gt; /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/g.test(value);</span></span></code></pre></div><h2 id="_74-验证手机号中国-严谨-根据工信部2019年最新公布的手机号段" tabindex="-1">74.验证手机号中国(严谨), 根据工信部2019年最新公布的手机号段 <a class="header-anchor" href="#_74-验证手机号中国-严谨-根据工信部2019年最新公布的手机号段" aria-label="Permalink to &quot;74.验证手机号中国(严谨), 根据工信部2019年最新公布的手机号段&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isMPStrict = value =&gt; /^(?:(?:\\+|00)86)?1(?:(?:3[\\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\\d])|(?:9[1|8|9]))\\d{8}$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isMPStrict = value =&gt; /^(?:(?:\\+|00)86)?1(?:(?:3[\\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\\d])|(?:9[1|8|9]))\\d{8}$/g.test(value);</span></span></code></pre></div><h2 id="_75-验证手机号中国-宽松-只要是13-14-15-16-17-18-19开头即可" tabindex="-1">75.验证手机号中国(宽松), 只要是13,14,15,16,17,18,19开头即可 <a class="header-anchor" href="#_75-验证手机号中国-宽松-只要是13-14-15-16-17-18-19开头即可" aria-label="Permalink to &quot;75.验证手机号中国(宽松), 只要是13,14,15,16,17,18,19开头即可&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isMPRelaxed = value =&gt; /^(?:(?:\\+|00)86)?1[3-9]\\d{9}$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isMPRelaxed = value =&gt; /^(?:(?:\\+|00)86)?1[3-9]\\d{9}$/g.test(value);</span></span></code></pre></div><h2 id="_76-验证email-邮箱" tabindex="-1">76.验证email(邮箱) <a class="header-anchor" href="#_76-验证email-邮箱" aria-label="Permalink to &quot;76.验证email(邮箱)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isEmail = value =&gt; /^[a-zA-Z0-9.!#$%&amp;&#39;*+/=?^_\`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isEmail = value =&gt; /^[a-zA-Z0-9.!#$%&amp;&#39;*+/=?^_\`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(value);</span></span></code></pre></div><h2 id="_77-验证座机电话-国内-如-0341-86091234" tabindex="-1">77.验证座机电话(国内),如: 0341-86091234 <a class="header-anchor" href="#_77-验证座机电话-国内-如-0341-86091234" aria-label="Permalink to &quot;77.验证座机电话(国内),如: 0341-86091234&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isLandlineTelephone = value =&gt; /\\d{3}-\\d{8}|\\d{4}-\\d{7}/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isLandlineTelephone = value =&gt; /\\d{3}-\\d{8}|\\d{4}-\\d{7}/g.test(value);</span></span></code></pre></div><h2 id="_78-验证身份证号-1代-15位数字" tabindex="-1">78.验证身份证号(1代,15位数字) <a class="header-anchor" href="#_78-验证身份证号-1代-15位数字" aria-label="Permalink to &quot;78.验证身份证号(1代,15位数字)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isIDCardOld = value =&gt; /^\\d{8}(0\\d|10|11|12)([0-2]\\d|30|31)\\d{3}$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isIDCardOld = value =&gt; /^\\d{8}(0\\d|10|11|12)([0-2]\\d|30|31)\\d{3}$/g.test(value);</span></span></code></pre></div><h2 id="_79-验证身份证号-2代-18位数字-最后一位是校验位-可能为数字或字符x" tabindex="-1">79.验证身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X <a class="header-anchor" href="#_79-验证身份证号-2代-18位数字-最后一位是校验位-可能为数字或字符x" aria-label="Permalink to &quot;79.验证身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isIDCardNew = value =&gt; /^\\d{6}(18|19|20)\\d{2}(0\\d|10|11|12)([0-2]\\d|30|31)\\d{3}[\\dXx]$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isIDCardNew = value =&gt; /^\\d{6}(18|19|20)\\d{2}(0\\d|10|11|12)([0-2]\\d|30|31)\\d{3}[\\dXx]$/g.test(value);</span></span></code></pre></div><h2 id="_80-验证身份证号-支持1-2代-15位-18位数字" tabindex="-1">80.验证身份证号, 支持1/2代(15位/18位数字) <a class="header-anchor" href="#_80-验证身份证号-支持1-2代-15位-18位数字" aria-label="Permalink to &quot;80.验证身份证号, 支持1/2代(15位/18位数字)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isIDCard = value =&gt; /(^\\d{8}(0\\d|10|11|12)([0-2]\\d|30|31)\\d{3}$)|(^\\d{6}(18|19|20)\\d{2}(0\\d|10|11|12)([0-2]\\d|30|31)\\d{3}(\\d|X|x)$)/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isIDCard = value =&gt; /(^\\d{8}(0\\d|10|11|12)([0-2]\\d|30|31)\\d{3}$)|(^\\d{6}(18|19|20)\\d{2}(0\\d|10|11|12)([0-2]\\d|30|31)\\d{3}(\\d|X|x)$)/g.test(value);</span></span></code></pre></div><h2 id="_81-验证护照-包含香港、澳门" tabindex="-1">81.验证护照（包含香港、澳门） <a class="header-anchor" href="#_81-验证护照-包含香港、澳门" aria-label="Permalink to &quot;81.验证护照（包含香港、澳门）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isPassport = value =&gt; /(^[EeKkGgDdSsPpHh]\\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\\d{7}$)/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isPassport = value =&gt; /(^[EeKkGgDdSsPpHh]\\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\\d{7}$)/g.test(value);</span></span></code></pre></div><h2 id="_82-验证帐号是否合法-字母开头-允许5-16字节-允许字母数字下划线组合" tabindex="-1">82.验证帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合 <a class="header-anchor" href="#_82-验证帐号是否合法-字母开头-允许5-16字节-允许字母数字下划线组合" aria-label="Permalink to &quot;82.验证帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isWebAccount = value =&gt; /^[a-zA-Z]\\w{4,15}$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isWebAccount = value =&gt; /^[a-zA-Z]\\w{4,15}$/g.test(value);</span></span></code></pre></div><h2 id="_83-验证中文-汉字" tabindex="-1">83.验证中文/汉字 <a class="header-anchor" href="#_83-验证中文-汉字" aria-label="Permalink to &quot;83.验证中文/汉字&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isChineseCharacter = value =&gt; /^(?:[\\u3400-\\u4DB5\\u4E00-\\u9FEA\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29]|[\\uD840-\\uD868\\uD86A-\\uD86C\\uD86F-\\uD872\\uD874-\\uD879][\\uDC00-\\uDFFF]|\\uD869[\\uDC00-\\uDED6\\uDF00-\\uDFFF]|\\uD86D[\\uDC00-\\uDF34\\uDF40-\\uDFFF]|\\uD86E[\\uDC00-\\uDC1D\\uDC20-\\uDFFF]|\\uD873[\\uDC00-\\uDEA1\\uDEB0-\\uDFFF]|\\uD87A[\\uDC00-\\uDFE0])+$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isChineseCharacter = value =&gt; /^(?:[\\u3400-\\u4DB5\\u4E00-\\u9FEA\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29]|[\\uD840-\\uD868\\uD86A-\\uD86C\\uD86F-\\uD872\\uD874-\\uD879][\\uDC00-\\uDFFF]|\\uD869[\\uDC00-\\uDED6\\uDF00-\\uDFFF]|\\uD86D[\\uDC00-\\uDF34\\uDF40-\\uDFFF]|\\uD86E[\\uDC00-\\uDC1D\\uDC20-\\uDFFF]|\\uD873[\\uDC00-\\uDEA1\\uDEB0-\\uDFFF]|\\uD87A[\\uDC00-\\uDFE0])+$/g.test(value);</span></span></code></pre></div><h2 id="_84-验证小数" tabindex="-1">84.验证小数 <a class="header-anchor" href="#_84-验证小数" aria-label="Permalink to &quot;84.验证小数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isDecimal = value =&gt; /^\\d+\\.\\d+$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isDecimal = value =&gt; /^\\d+\\.\\d+$/g.test(value);</span></span></code></pre></div><h2 id="_85-验证数字" tabindex="-1">85.验证数字 <a class="header-anchor" href="#_85-验证数字" aria-label="Permalink to &quot;85.验证数字&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isNumber = value =&gt; /^\\d{1,}$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isNumber = value =&gt; /^\\d{1,}$/g.test(value);</span></span></code></pre></div><h2 id="_86-验证qq号格式" tabindex="-1">86.验证qq号格式 <a class="header-anchor" href="#_86-验证qq号格式" aria-label="Permalink to &quot;86.验证qq号格式&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isQQNum = value =&gt; /^[1-9][0-9]{4,10}$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isQQNum = value =&gt; /^[1-9][0-9]{4,10}$/g.test(value);</span></span></code></pre></div><h2 id="_87-验证数字和字母组成" tabindex="-1">87.验证数字和字母组成 <a class="header-anchor" href="#_87-验证数字和字母组成" aria-label="Permalink to &quot;87.验证数字和字母组成&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isNumAndStr = value =&gt; /^[A-Za-z0-9]+$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isNumAndStr = value =&gt; /^[A-Za-z0-9]+$/g.test(value);</span></span></code></pre></div><h2 id="_88-验证英文字母" tabindex="-1">88.验证英文字母 <a class="header-anchor" href="#_88-验证英文字母" aria-label="Permalink to &quot;88.验证英文字母&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isEnglish = value =&gt; /^[a-zA-Z]+$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isEnglish = value =&gt; /^[a-zA-Z]+$/g.test(value);</span></span></code></pre></div><h2 id="_89-验证大写英文字母" tabindex="-1">89.验证大写英文字母 <a class="header-anchor" href="#_89-验证大写英文字母" aria-label="Permalink to &quot;89.验证大写英文字母&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isCapital = value =&gt; /^[A-Z]+$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isCapital = value =&gt; /^[A-Z]+$/g.test(value);</span></span></code></pre></div><h2 id="_90-验证小写英文字母" tabindex="-1">90.验证小写英文字母 <a class="header-anchor" href="#_90-验证小写英文字母" aria-label="Permalink to &quot;90.验证小写英文字母&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">@param { string } value</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">export const isLowercase = value =&gt; /^[a-z]+$/g.test(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">@param { string } value</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">export const isLowercase = value =&gt; /^[a-z]+$/g.test(value);</span></span></code></pre></div><h2 id="浏览器操作相关browser工具函数" tabindex="-1">浏览器操作相关browser工具函数 <a class="header-anchor" href="#浏览器操作相关browser工具函数" aria-label="Permalink to &quot;浏览器操作相关browser工具函数&quot;">​</a></h2><h2 id="_91-返回当前url" tabindex="-1">91.返回当前url <a class="header-anchor" href="#_91-返回当前url" aria-label="Permalink to &quot;91.返回当前url&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">export const currentURL = () =&gt; window.location.href;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export const currentURL = () =&gt; window.location.href;</span></span></code></pre></div><h2 id="_92-获取url参数-第一种" tabindex="-1">92.获取url参数（第一种） <a class="header-anchor" href="#_92-获取url参数-第一种" aria-label="Permalink to &quot;92.获取url参数（第一种）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> * @param {*} name</span></span>
<span class="line"><span style="color:#f6f6f4;"> * @param {*} origin</span></span>
<span class="line"><span style="color:#f6f6f4;">   */</span></span>
<span class="line"><span style="color:#f6f6f4;">export function getUrlParam(name, origin = null) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    let reg = new RegExp(&quot;(^|&amp;)&quot; + name + &quot;=([^&amp;]*)(&amp;|$)&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">    let r = null;</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (origin == null) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        r = window.location.search.substr(1).match(reg);</span></span>
<span class="line"><span style="color:#f6f6f4;">    } else {</span></span>
<span class="line"><span style="color:#f6f6f4;">        r = origin.substr(1).match(reg);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (r != null) return decodeURIComponent(r[2]);</span></span>
<span class="line"><span style="color:#f6f6f4;">    return null;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> * @param {*} name</span></span>
<span class="line"><span style="color:#24292e;"> * @param {*} origin</span></span>
<span class="line"><span style="color:#24292e;">   */</span></span>
<span class="line"><span style="color:#24292e;">export function getUrlParam(name, origin = null) {</span></span>
<span class="line"><span style="color:#24292e;">    let reg = new RegExp(&quot;(^|&amp;)&quot; + name + &quot;=([^&amp;]*)(&amp;|$)&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    let r = null;</span></span>
<span class="line"><span style="color:#24292e;">    if (origin == null) {</span></span>
<span class="line"><span style="color:#24292e;">        r = window.location.search.substr(1).match(reg);</span></span>
<span class="line"><span style="color:#24292e;">    } else {</span></span>
<span class="line"><span style="color:#24292e;">        r = origin.substr(1).match(reg);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    if (r != null) return decodeURIComponent(r[2]);</span></span>
<span class="line"><span style="color:#24292e;">    return null;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_93-获取url参数-第二种" tabindex="-1">93.获取url参数（第二种） <a class="header-anchor" href="#_93-获取url参数-第二种" aria-label="Permalink to &quot;93.获取url参数（第二种）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param {*} name</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param {*} origin</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export function getUrlParams(name, origin = null) {</span></span>
<span class="line"><span style="color:#f6f6f4;">       let url = location.href;</span></span>
<span class="line"><span style="color:#f6f6f4;">       let temp1 = url.split(&#39;?&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">       let pram = temp1[1];</span></span>
<span class="line"><span style="color:#f6f6f4;">       let keyValue = pram.split(&#39;&amp;&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">       let obj = {};</span></span>
<span class="line"><span style="color:#f6f6f4;">       for (let i = 0; i &lt; keyValue.length; i++) {</span></span>
<span class="line"><span style="color:#f6f6f4;">           let item = keyValue[i].split(&#39;=&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">       let key = item[0];</span></span>
<span class="line"><span style="color:#f6f6f4;">        let value = item[1];</span></span>
<span class="line"><span style="color:#f6f6f4;">        obj[key] = value;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    return obj[name];</span></span>
<span class="line"><span style="color:#f6f6f4;"> </span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param {*} name</span></span>
<span class="line"><span style="color:#24292e;">     * @param {*} origin</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export function getUrlParams(name, origin = null) {</span></span>
<span class="line"><span style="color:#24292e;">       let url = location.href;</span></span>
<span class="line"><span style="color:#24292e;">       let temp1 = url.split(&#39;?&#39;);</span></span>
<span class="line"><span style="color:#24292e;">       let pram = temp1[1];</span></span>
<span class="line"><span style="color:#24292e;">       let keyValue = pram.split(&#39;&amp;&#39;);</span></span>
<span class="line"><span style="color:#24292e;">       let obj = {};</span></span>
<span class="line"><span style="color:#24292e;">       for (let i = 0; i &lt; keyValue.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">           let item = keyValue[i].split(&#39;=&#39;);</span></span>
<span class="line"><span style="color:#24292e;">       let key = item[0];</span></span>
<span class="line"><span style="color:#24292e;">        let value = item[1];</span></span>
<span class="line"><span style="color:#24292e;">        obj[key] = value;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    return obj[name];</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_94-修改url中的参数" tabindex="-1">94.修改url中的参数 <a class="header-anchor" href="#_94-修改url中的参数" aria-label="Permalink to &quot;94.修改url中的参数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { string } paramName</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { string } replaceWith</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export function replaceParamVal(paramName,replaceWith) {</span></span>
<span class="line"><span style="color:#f6f6f4;">   var oUrl = location.href.toString();</span></span>
<span class="line"><span style="color:#f6f6f4;">    var re=eval(&#39;/(&#39;+ paramName+&#39;=)([^&amp;]*)/gi&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">    location.href = oUrl.replace(re,paramName+&#39;=&#39;+replaceWith);</span></span>
<span class="line"><span style="color:#f6f6f4;">    return location.href;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param { string } paramName</span></span>
<span class="line"><span style="color:#24292e;">     * @param { string } replaceWith</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export function replaceParamVal(paramName,replaceWith) {</span></span>
<span class="line"><span style="color:#24292e;">   var oUrl = location.href.toString();</span></span>
<span class="line"><span style="color:#24292e;">    var re=eval(&#39;/(&#39;+ paramName+&#39;=)([^&amp;]*)/gi&#39;);</span></span>
<span class="line"><span style="color:#24292e;">    location.href = oUrl.replace(re,paramName+&#39;=&#39;+replaceWith);</span></span>
<span class="line"><span style="color:#24292e;">    return location.href;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_95-删除url中指定的参数" tabindex="-1">95.删除url中指定的参数 <a class="header-anchor" href="#_95-删除url中指定的参数" aria-label="Permalink to &quot;95.删除url中指定的参数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { string } name</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export function funcUrlDel(name){</span></span>
<span class="line"><span style="color:#f6f6f4;">       var loca =location;</span></span>
<span class="line"><span style="color:#f6f6f4;">       var baseUrl = loca.origin + loca.pathname + &quot;?&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">       var query = loca.search.substr(1);</span></span>
<span class="line"><span style="color:#f6f6f4;">       if (query.indexOf(name)&gt;-1) {</span></span>
<span class="line"><span style="color:#f6f6f4;">           var obj = {};</span></span>
<span class="line"><span style="color:#f6f6f4;">           var arr = query.split(&quot;&amp;&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">           for (var i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span style="color:#f6f6f4;">               arr[i] = arr[i].split(&quot;=&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">               obj[arr[i][0]] = arr[i][1];</span></span>
<span class="line"><span style="color:#f6f6f4;">           }</span></span>
<span class="line"><span style="color:#f6f6f4;">           delete obj[name];</span></span>
<span class="line"><span style="color:#f6f6f4;">       var url = baseUrl + JSON.stringify(obj).replace(/[\\&quot;\\{\\}]/g,&quot;&quot;).replace(/\\:/g,&quot;=&quot;).replace(/\\,/g,&quot;&amp;&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        return url</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param { string } name</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export function funcUrlDel(name){</span></span>
<span class="line"><span style="color:#24292e;">       var loca =location;</span></span>
<span class="line"><span style="color:#24292e;">       var baseUrl = loca.origin + loca.pathname + &quot;?&quot;;</span></span>
<span class="line"><span style="color:#24292e;">       var query = loca.search.substr(1);</span></span>
<span class="line"><span style="color:#24292e;">       if (query.indexOf(name)&gt;-1) {</span></span>
<span class="line"><span style="color:#24292e;">           var obj = {};</span></span>
<span class="line"><span style="color:#24292e;">           var arr = query.split(&quot;&amp;&quot;);</span></span>
<span class="line"><span style="color:#24292e;">           for (var i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">               arr[i] = arr[i].split(&quot;=&quot;);</span></span>
<span class="line"><span style="color:#24292e;">               obj[arr[i][0]] = arr[i][1];</span></span>
<span class="line"><span style="color:#24292e;">           }</span></span>
<span class="line"><span style="color:#24292e;">           delete obj[name];</span></span>
<span class="line"><span style="color:#24292e;">       var url = baseUrl + JSON.stringify(obj).replace(/[\\&quot;\\{\\}]/g,&quot;&quot;).replace(/\\:/g,&quot;=&quot;).replace(/\\,/g,&quot;&amp;&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        return url</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_96-获取窗口可视范围的高度" tabindex="-1">96.获取窗口可视范围的高度 <a class="header-anchor" href="#_96-获取窗口可视范围的高度" aria-label="Permalink to &quot;96.获取窗口可视范围的高度&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">export function getClientHeight() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    let clientHeight = 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (document.body.clientHeight &amp;&amp; document.documentElement.clientHeight) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        clientHeight = (document.body.clientHeight &lt; document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    else {</span></span>
<span class="line"><span style="color:#f6f6f4;">        clientHeight = (document.body.clientHeight &gt; document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    return clientHeight;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export function getClientHeight() {</span></span>
<span class="line"><span style="color:#24292e;">    let clientHeight = 0;</span></span>
<span class="line"><span style="color:#24292e;">    if (document.body.clientHeight &amp;&amp; document.documentElement.clientHeight) {</span></span>
<span class="line"><span style="color:#24292e;">        clientHeight = (document.body.clientHeight &lt; document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    else {</span></span>
<span class="line"><span style="color:#24292e;">        clientHeight = (document.body.clientHeight &gt; document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    return clientHeight;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_97-获取窗口可视范围宽度" tabindex="-1">97.获取窗口可视范围宽度 <a class="header-anchor" href="#_97-获取窗口可视范围宽度" aria-label="Permalink to &quot;97.获取窗口可视范围宽度&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">export function getPageViewWidth() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    let d = document,</span></span>
<span class="line"><span style="color:#f6f6f4;">        a = d.compatMode == &quot;BackCompat&quot; ? d.body : d.documentElement;</span></span>
<span class="line"><span style="color:#f6f6f4;">    return a.clientWidth;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export function getPageViewWidth() {</span></span>
<span class="line"><span style="color:#24292e;">    let d = document,</span></span>
<span class="line"><span style="color:#24292e;">        a = d.compatMode == &quot;BackCompat&quot; ? d.body : d.documentElement;</span></span>
<span class="line"><span style="color:#24292e;">    return a.clientWidth;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_98-获取窗口宽度" tabindex="-1">98.获取窗口宽度 <a class="header-anchor" href="#_98-获取窗口宽度" aria-label="Permalink to &quot;98.获取窗口宽度&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">export function getPageWidth() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    let g = document,</span></span>
<span class="line"><span style="color:#f6f6f4;">        a = g.body,</span></span>
<span class="line"><span style="color:#f6f6f4;">        f = g.documentElement,</span></span>
<span class="line"><span style="color:#f6f6f4;">        d = g.compatMode == &quot;BackCompat&quot; ? a : g.documentElement;</span></span>
<span class="line"><span style="color:#f6f6f4;">    return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export function getPageWidth() {</span></span>
<span class="line"><span style="color:#24292e;">    let g = document,</span></span>
<span class="line"><span style="color:#24292e;">        a = g.body,</span></span>
<span class="line"><span style="color:#24292e;">        f = g.documentElement,</span></span>
<span class="line"><span style="color:#24292e;">        d = g.compatMode == &quot;BackCompat&quot; ? a : g.documentElement;</span></span>
<span class="line"><span style="color:#24292e;">    return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_99-获取窗口尺寸" tabindex="-1">99.获取窗口尺寸 <a class="header-anchor" href="#_99-获取窗口尺寸" aria-label="Permalink to &quot;99.获取窗口尺寸&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">export function getViewportOffset() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (window.innerWidth) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return {</span></span>
<span class="line"><span style="color:#f6f6f4;">            w: window.innerWidth,</span></span>
<span class="line"><span style="color:#f6f6f4;">            h: window.innerHeight</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">    } else {</span></span>
<span class="line"><span style="color:#f6f6f4;">        // ie8及其以下</span></span>
<span class="line"><span style="color:#f6f6f4;">        if (document.compatMode === &quot;BackCompat&quot;) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            // 怪异模式</span></span>
<span class="line"><span style="color:#f6f6f4;">            return {</span></span>
<span class="line"><span style="color:#f6f6f4;">                w: document.body.clientWidth,</span></span>
<span class="line"><span style="color:#f6f6f4;">                h: document.body.clientHeight</span></span>
<span class="line"><span style="color:#f6f6f4;">            }</span></span>
<span class="line"><span style="color:#f6f6f4;">        } else {</span></span>
<span class="line"><span style="color:#f6f6f4;">            // 标准模式</span></span>
<span class="line"><span style="color:#f6f6f4;">            return {</span></span>
<span class="line"><span style="color:#f6f6f4;">                w: document.documentElement.clientWidth,</span></span>
<span class="line"><span style="color:#f6f6f4;">                h: document.documentElement.clientHeight</span></span>
<span class="line"><span style="color:#f6f6f4;">            }</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export function getViewportOffset() {</span></span>
<span class="line"><span style="color:#24292e;">    if (window.innerWidth) {</span></span>
<span class="line"><span style="color:#24292e;">        return {</span></span>
<span class="line"><span style="color:#24292e;">            w: window.innerWidth,</span></span>
<span class="line"><span style="color:#24292e;">            h: window.innerHeight</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    } else {</span></span>
<span class="line"><span style="color:#24292e;">        // ie8及其以下</span></span>
<span class="line"><span style="color:#24292e;">        if (document.compatMode === &quot;BackCompat&quot;) {</span></span>
<span class="line"><span style="color:#24292e;">            // 怪异模式</span></span>
<span class="line"><span style="color:#24292e;">            return {</span></span>
<span class="line"><span style="color:#24292e;">                w: document.body.clientWidth,</span></span>
<span class="line"><span style="color:#24292e;">                h: document.body.clientHeight</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        } else {</span></span>
<span class="line"><span style="color:#24292e;">            // 标准模式</span></span>
<span class="line"><span style="color:#24292e;">            return {</span></span>
<span class="line"><span style="color:#24292e;">                w: document.documentElement.clientWidth,</span></span>
<span class="line"><span style="color:#24292e;">                h: document.documentElement.clientHeight</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_100-获取滚动条距顶部高度" tabindex="-1">100.获取滚动条距顶部高度 <a class="header-anchor" href="#_100-获取滚动条距顶部高度" aria-label="Permalink to &quot;100.获取滚动条距顶部高度&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">export function getPageScrollTop() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    let a = document;</span></span>
<span class="line"><span style="color:#f6f6f4;">    return a.documentElement.scrollTop || a.body.scrollTop;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export function getPageScrollTop() {</span></span>
<span class="line"><span style="color:#24292e;">    let a = document;</span></span>
<span class="line"><span style="color:#24292e;">    return a.documentElement.scrollTop || a.body.scrollTop;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_101-获取滚动条距左边的高度" tabindex="-1">101.获取滚动条距左边的高度 <a class="header-anchor" href="#_101-获取滚动条距左边的高度" aria-label="Permalink to &quot;101.获取滚动条距左边的高度&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">export function getPageScrollLeft() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    let a = document;</span></span>
<span class="line"><span style="color:#f6f6f4;">    return a.documentElement.scrollLeft || a.body.scrollLeft;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export function getPageScrollLeft() {</span></span>
<span class="line"><span style="color:#24292e;">    let a = document;</span></span>
<span class="line"><span style="color:#24292e;">    return a.documentElement.scrollLeft || a.body.scrollLeft;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_102-开启全屏" tabindex="-1">102.开启全屏 <a class="header-anchor" href="#_102-开启全屏" aria-label="Permalink to &quot;102.开启全屏&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param {*} element</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export function launchFullscreen(element) {</span></span>
<span class="line"><span style="color:#f6f6f4;">       if (element.requestFullscreen) {</span></span>
<span class="line"><span style="color:#f6f6f4;">           element.requestFullscreen()</span></span>
<span class="line"><span style="color:#f6f6f4;">       } else if (element.mozRequestFullScreen) {</span></span>
<span class="line"><span style="color:#f6f6f4;">           element.mozRequestFullScreen()</span></span>
<span class="line"><span style="color:#f6f6f4;">       } else if (element.msRequestFullscreen) {</span></span>
<span class="line"><span style="color:#f6f6f4;">           element.msRequestFullscreen()</span></span>
<span class="line"><span style="color:#f6f6f4;">   } else if (element.webkitRequestFullscreen) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        element.webkitRequestFullScreen()</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param {*} element</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export function launchFullscreen(element) {</span></span>
<span class="line"><span style="color:#24292e;">       if (element.requestFullscreen) {</span></span>
<span class="line"><span style="color:#24292e;">           element.requestFullscreen()</span></span>
<span class="line"><span style="color:#24292e;">       } else if (element.mozRequestFullScreen) {</span></span>
<span class="line"><span style="color:#24292e;">           element.mozRequestFullScreen()</span></span>
<span class="line"><span style="color:#24292e;">       } else if (element.msRequestFullscreen) {</span></span>
<span class="line"><span style="color:#24292e;">           element.msRequestFullscreen()</span></span>
<span class="line"><span style="color:#24292e;">   } else if (element.webkitRequestFullscreen) {</span></span>
<span class="line"><span style="color:#24292e;">        element.webkitRequestFullScreen()</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_103-关闭全屏" tabindex="-1">103.关闭全屏 <a class="header-anchor" href="#_103-关闭全屏" aria-label="Permalink to &quot;103.关闭全屏&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">export function exitFullscreen() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (document.exitFullscreen) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        document.exitFullscreen()</span></span>
<span class="line"><span style="color:#f6f6f4;">    } else if (document.msExitFullscreen) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        document.msExitFullscreen()</span></span>
<span class="line"><span style="color:#f6f6f4;">    } else if (document.mozCancelFullScreen) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        document.mozCancelFullScreen()</span></span>
<span class="line"><span style="color:#f6f6f4;">    } else if (document.webkitExitFullscreen) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        document.webkitExitFullscreen()</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export function exitFullscreen() {</span></span>
<span class="line"><span style="color:#24292e;">    if (document.exitFullscreen) {</span></span>
<span class="line"><span style="color:#24292e;">        document.exitFullscreen()</span></span>
<span class="line"><span style="color:#24292e;">    } else if (document.msExitFullscreen) {</span></span>
<span class="line"><span style="color:#24292e;">        document.msExitFullscreen()</span></span>
<span class="line"><span style="color:#24292e;">    } else if (document.mozCancelFullScreen) {</span></span>
<span class="line"><span style="color:#24292e;">        document.mozCancelFullScreen()</span></span>
<span class="line"><span style="color:#24292e;">    } else if (document.webkitExitFullscreen) {</span></span>
<span class="line"><span style="color:#24292e;">        document.webkitExitFullscreen()</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_104-返回当前滚动条位置" tabindex="-1">104.返回当前滚动条位置 <a class="header-anchor" href="#_104-返回当前滚动条位置" aria-label="Permalink to &quot;104.返回当前滚动条位置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">export const getScrollPosition = (el = window) =&gt; ({</span></span>
<span class="line"><span style="color:#f6f6f4;">    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,</span></span>
<span class="line"><span style="color:#f6f6f4;">    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop</span></span>
<span class="line"><span style="color:#f6f6f4;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export const getScrollPosition = (el = window) =&gt; ({</span></span>
<span class="line"><span style="color:#24292e;">    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,</span></span>
<span class="line"><span style="color:#24292e;">    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><h2 id="_105-滚动到指定元素区域" tabindex="-1">105.滚动到指定元素区域 <a class="header-anchor" href="#_105-滚动到指定元素区域" aria-label="Permalink to &quot;105.滚动到指定元素区域&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">export const smoothScroll = element =&gt;{</span></span>
<span class="line"><span style="color:#f6f6f4;">    document.querySelector(element).scrollIntoView({</span></span>
<span class="line"><span style="color:#f6f6f4;">        behavior: &#39;smooth&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">    });</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export const smoothScroll = element =&gt;{</span></span>
<span class="line"><span style="color:#24292e;">    document.querySelector(element).scrollIntoView({</span></span>
<span class="line"><span style="color:#24292e;">        behavior: &#39;smooth&#39;</span></span>
<span class="line"><span style="color:#24292e;">    });</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><h2 id="_106-平滑滚动到页面顶部" tabindex="-1">106.平滑滚动到页面顶部 <a class="header-anchor" href="#_106-平滑滚动到页面顶部" aria-label="Permalink to &quot;106.平滑滚动到页面顶部&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">export const scrollToTop = () =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">    const c = document.documentElement.scrollTop || document.body.scrollTop;</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (c &gt; 0) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        window.requestAnimationFrame(scrollToTop);</span></span>
<span class="line"><span style="color:#f6f6f4;">        window.scrollTo(0, c - c / 8);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export const scrollToTop = () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    const c = document.documentElement.scrollTop || document.body.scrollTop;</span></span>
<span class="line"><span style="color:#24292e;">    if (c &gt; 0) {</span></span>
<span class="line"><span style="color:#24292e;">        window.requestAnimationFrame(scrollToTop);</span></span>
<span class="line"><span style="color:#24292e;">        window.scrollTo(0, c - c / 8);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><h2 id="_107-http跳转https" tabindex="-1">107.http跳转https <a class="header-anchor" href="#_107-http跳转https" aria-label="Permalink to &quot;107.http跳转https&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">export const httpsRedirect = () =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (location.protocol !== &#39;https:&#39;) location.replace(&#39;https://&#39; + location.href.split(&#39;//&#39;)[1]);</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export const httpsRedirect = () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    if (location.protocol !== &#39;https:&#39;) location.replace(&#39;https://&#39; + location.href.split(&#39;//&#39;)[1]);</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><h2 id="_108-检查页面底部是否可见" tabindex="-1">108.检查页面底部是否可见 <a class="header-anchor" href="#_108-检查页面底部是否可见" aria-label="Permalink to &quot;108.检查页面底部是否可见&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">export const bottomVisible = () =&gt;{</span></span>
<span class="line"><span style="color:#f6f6f4;">    return document.documentElement.clientHeight + window.scrollY &gt;=</span></span>
<span class="line"><span style="color:#f6f6f4;">        (document.documentElement.scrollHeight || document.documentElement.clientHeight);</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export const bottomVisible = () =&gt;{</span></span>
<span class="line"><span style="color:#24292e;">    return document.documentElement.clientHeight + window.scrollY &gt;=</span></span>
<span class="line"><span style="color:#24292e;">        (document.documentElement.scrollHeight || document.documentElement.clientHeight);</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><h2 id="_109-打开一个窗口" tabindex="-1">109.打开一个窗口 <a class="header-anchor" href="#_109-打开一个窗口" aria-label="Permalink to &quot;109.打开一个窗口&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { string } url</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { string } windowName</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { number } width</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { number } height</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export function openWindow(url, windowName, width, height) {</span></span>
<span class="line"><span style="color:#f6f6f4;">       var x = parseInt(screen.width / 2.0) - width / 2.0;</span></span>
<span class="line"><span style="color:#f6f6f4;">       var y = parseInt(screen.height / 2.0) - height / 2.0;</span></span>
<span class="line"><span style="color:#f6f6f4;">       var isMSIE = navigator.appName == &quot;Microsoft Internet Explorer&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">       if (isMSIE) {</span></span>
<span class="line"><span style="color:#f6f6f4;">           var p = &quot;resizable=1,location=no,scrollbars=no,width=&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">           p = p + width;</span></span>
<span class="line"><span style="color:#f6f6f4;">           p = p + &quot;,height=&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">           p = p + height;</span></span>
<span class="line"><span style="color:#f6f6f4;">           p = p + &quot;,left=&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">           p = p + x;</span></span>
<span class="line"><span style="color:#f6f6f4;">           p = p + &quot;,top=&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">           p = p + y;</span></span>
<span class="line"><span style="color:#f6f6f4;">           window.open(url, windowName, p);</span></span>
<span class="line"><span style="color:#f6f6f4;">       } else {</span></span>
<span class="line"><span style="color:#f6f6f4;">           var win = window.open(</span></span>
<span class="line"><span style="color:#f6f6f4;">               url,</span></span>
<span class="line"><span style="color:#f6f6f4;">               &quot;ZyiisPopup&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">               &quot;top=&quot; +</span></span>
<span class="line"><span style="color:#f6f6f4;">               y +</span></span>
<span class="line"><span style="color:#f6f6f4;">               &quot;,left=&quot; +</span></span>
<span class="line"><span style="color:#f6f6f4;">               x +</span></span>
<span class="line"><span style="color:#f6f6f4;">               &quot;,scrollbars=&quot; +</span></span>
<span class="line"><span style="color:#f6f6f4;">               scrollbars +</span></span>
<span class="line"><span style="color:#f6f6f4;">               &quot;,dialog=yes,modal=yes,width=&quot; +</span></span>
<span class="line"><span style="color:#f6f6f4;">               width +</span></span>
<span class="line"><span style="color:#f6f6f4;">               &quot;,height=&quot; +</span></span>
<span class="line"><span style="color:#f6f6f4;">           height +</span></span>
<span class="line"><span style="color:#f6f6f4;">            &quot;,resizable=no&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">        );</span></span>
<span class="line"><span style="color:#f6f6f4;">        eval(&quot;try { win.resizeTo(width, height); } catch(e) { }&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        win.focus();</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param { string } url</span></span>
<span class="line"><span style="color:#24292e;">     * @param { string } windowName</span></span>
<span class="line"><span style="color:#24292e;">     * @param { number } width</span></span>
<span class="line"><span style="color:#24292e;">     * @param { number } height</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export function openWindow(url, windowName, width, height) {</span></span>
<span class="line"><span style="color:#24292e;">       var x = parseInt(screen.width / 2.0) - width / 2.0;</span></span>
<span class="line"><span style="color:#24292e;">       var y = parseInt(screen.height / 2.0) - height / 2.0;</span></span>
<span class="line"><span style="color:#24292e;">       var isMSIE = navigator.appName == &quot;Microsoft Internet Explorer&quot;;</span></span>
<span class="line"><span style="color:#24292e;">       if (isMSIE) {</span></span>
<span class="line"><span style="color:#24292e;">           var p = &quot;resizable=1,location=no,scrollbars=no,width=&quot;;</span></span>
<span class="line"><span style="color:#24292e;">           p = p + width;</span></span>
<span class="line"><span style="color:#24292e;">           p = p + &quot;,height=&quot;;</span></span>
<span class="line"><span style="color:#24292e;">           p = p + height;</span></span>
<span class="line"><span style="color:#24292e;">           p = p + &quot;,left=&quot;;</span></span>
<span class="line"><span style="color:#24292e;">           p = p + x;</span></span>
<span class="line"><span style="color:#24292e;">           p = p + &quot;,top=&quot;;</span></span>
<span class="line"><span style="color:#24292e;">           p = p + y;</span></span>
<span class="line"><span style="color:#24292e;">           window.open(url, windowName, p);</span></span>
<span class="line"><span style="color:#24292e;">       } else {</span></span>
<span class="line"><span style="color:#24292e;">           var win = window.open(</span></span>
<span class="line"><span style="color:#24292e;">               url,</span></span>
<span class="line"><span style="color:#24292e;">               &quot;ZyiisPopup&quot;,</span></span>
<span class="line"><span style="color:#24292e;">               &quot;top=&quot; +</span></span>
<span class="line"><span style="color:#24292e;">               y +</span></span>
<span class="line"><span style="color:#24292e;">               &quot;,left=&quot; +</span></span>
<span class="line"><span style="color:#24292e;">               x +</span></span>
<span class="line"><span style="color:#24292e;">               &quot;,scrollbars=&quot; +</span></span>
<span class="line"><span style="color:#24292e;">               scrollbars +</span></span>
<span class="line"><span style="color:#24292e;">               &quot;,dialog=yes,modal=yes,width=&quot; +</span></span>
<span class="line"><span style="color:#24292e;">               width +</span></span>
<span class="line"><span style="color:#24292e;">               &quot;,height=&quot; +</span></span>
<span class="line"><span style="color:#24292e;">           height +</span></span>
<span class="line"><span style="color:#24292e;">            &quot;,resizable=no&quot;</span></span>
<span class="line"><span style="color:#24292e;">        );</span></span>
<span class="line"><span style="color:#24292e;">        eval(&quot;try { win.resizeTo(width, height); } catch(e) { }&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        win.focus();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_110-自适应页面-rem" tabindex="-1">110.自适应页面（rem） <a class="header-anchor" href="#_110-自适应页面-rem" aria-label="Permalink to &quot;110.自适应页面（rem）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { number } width</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export function AutoResponse(width = 750) {</span></span>
<span class="line"><span style="color:#f6f6f4;">       const target = document.documentElement;</span></span>
<span class="line"><span style="color:#f6f6f4;">   target.clientWidth &gt;= 600</span></span>
<span class="line"><span style="color:#f6f6f4;">        ? (target.style.fontSize = &quot;80px&quot;)</span></span>
<span class="line"><span style="color:#f6f6f4;">        : (target.style.fontSize = target.clientWidth / width * 100 + &quot;px&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param { number } width</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export function AutoResponse(width = 750) {</span></span>
<span class="line"><span style="color:#24292e;">       const target = document.documentElement;</span></span>
<span class="line"><span style="color:#24292e;">   target.clientWidth &gt;= 600</span></span>
<span class="line"><span style="color:#24292e;">        ? (target.style.fontSize = &quot;80px&quot;)</span></span>
<span class="line"><span style="color:#24292e;">        : (target.style.fontSize = target.clientWidth / width * 100 + &quot;px&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="日期工具date工具函数" tabindex="-1">日期工具date工具函数 <a class="header-anchor" href="#日期工具date工具函数" aria-label="Permalink to &quot;日期工具date工具函数&quot;">​</a></h2><h2 id="_111-浏览器存储相关storage工具函数" tabindex="-1">111.浏览器存储相关storage工具函数 <a class="header-anchor" href="#_111-浏览器存储相关storage工具函数" aria-label="Permalink to &quot;111.浏览器存储相关storage工具函数&quot;">​</a></h2><p>主要为浏览器存储方面的工具函数，大部分搬运自大神火狼1</p><h2 id="_112-localstorage-存贮" tabindex="-1">112.localStorage 存贮 <a class="header-anchor" href="#_112-localstorage-存贮" aria-label="Permalink to &quot;112.localStorage 存贮&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * 目前对象值如果是函数 、RegExp等特殊对象存贮会被忽略</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { String } key  属性</span></span>
<span class="line"><span style="color:#f6f6f4;"> * @param { string } value 值</span></span>
<span class="line"><span style="color:#f6f6f4;">    */</span></span>
<span class="line"><span style="color:#f6f6f4;">    export const localStorageSet = (key, value) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (typeof (value) === &#39;object&#39;) value = JSON.stringify(value);</span></span>
<span class="line"><span style="color:#f6f6f4;">    localStorage.setItem(key, value)</span></span>
<span class="line"><span style="color:#f6f6f4;">    };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * 目前对象值如果是函数 、RegExp等特殊对象存贮会被忽略</span></span>
<span class="line"><span style="color:#24292e;">     * @param { String } key  属性</span></span>
<span class="line"><span style="color:#24292e;"> * @param { string } value 值</span></span>
<span class="line"><span style="color:#24292e;">    */</span></span>
<span class="line"><span style="color:#24292e;">    export const localStorageSet = (key, value) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    if (typeof (value) === &#39;object&#39;) value = JSON.stringify(value);</span></span>
<span class="line"><span style="color:#24292e;">    localStorage.setItem(key, value)</span></span>
<span class="line"><span style="color:#24292e;">    };</span></span></code></pre></div><h2 id="_113-localstorage-获取" tabindex="-1">113.localStorage 获取 <a class="header-anchor" href="#_113-localstorage-获取" aria-label="Permalink to &quot;113.localStorage 获取&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param {String} key  属性</span></span>
<span class="line"><span style="color:#f6f6f4;">   */</span></span>
<span class="line"><span style="color:#f6f6f4;">    export const localStorageGet = (key) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">    return localStorage.getItem(key)</span></span>
<span class="line"><span style="color:#f6f6f4;">    };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param {String} key  属性</span></span>
<span class="line"><span style="color:#24292e;">   */</span></span>
<span class="line"><span style="color:#24292e;">    export const localStorageGet = (key) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    return localStorage.getItem(key)</span></span>
<span class="line"><span style="color:#24292e;">    };</span></span></code></pre></div><h2 id="_114-localstorage-移除" tabindex="-1">114.localStorage 移除 <a class="header-anchor" href="#_114-localstorage-移除" aria-label="Permalink to &quot;114.localStorage 移除&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param {String} key  属性</span></span>
<span class="line"><span style="color:#f6f6f4;">   */</span></span>
<span class="line"><span style="color:#f6f6f4;">    export const localStorageRemove = (key) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">    localStorage.removeItem(key)</span></span>
<span class="line"><span style="color:#f6f6f4;">    };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param {String} key  属性</span></span>
<span class="line"><span style="color:#24292e;">   */</span></span>
<span class="line"><span style="color:#24292e;">    export const localStorageRemove = (key) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    localStorage.removeItem(key)</span></span>
<span class="line"><span style="color:#24292e;">    };</span></span></code></pre></div><h2 id="_115-localstorage-存贮某一段时间失效" tabindex="-1">115.localStorage 存贮某一段时间失效 <a class="header-anchor" href="#_115-localstorage-存贮某一段时间失效" aria-label="Permalink to &quot;115.localStorage 存贮某一段时间失效&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param {String} key  属性</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param {*} value 存贮值</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { number } expire 过期时间,毫秒数</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export const localStorageSetExpire = (key, value, expire) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">   if (typeof (value) === &#39;object&#39;) value = JSON.stringify(value);</span></span>
<span class="line"><span style="color:#f6f6f4;">    localStorage.setItem(key, value);</span></span>
<span class="line"><span style="color:#f6f6f4;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">        localStorage.removeItem(key)</span></span>
<span class="line"><span style="color:#f6f6f4;">    }, expire)</span></span>
<span class="line"><span style="color:#f6f6f4;">    };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param {String} key  属性</span></span>
<span class="line"><span style="color:#24292e;">     * @param {*} value 存贮值</span></span>
<span class="line"><span style="color:#24292e;">     * @param { number } expire 过期时间,毫秒数</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export const localStorageSetExpire = (key, value, expire) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">   if (typeof (value) === &#39;object&#39;) value = JSON.stringify(value);</span></span>
<span class="line"><span style="color:#24292e;">    localStorage.setItem(key, value);</span></span>
<span class="line"><span style="color:#24292e;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        localStorage.removeItem(key)</span></span>
<span class="line"><span style="color:#24292e;">    }, expire)</span></span>
<span class="line"><span style="color:#24292e;">    };</span></span></code></pre></div><h2 id="_116-sessionstorage-存贮" tabindex="-1">116.sessionStorage 存贮 <a class="header-anchor" href="#_116-sessionstorage-存贮" aria-label="Permalink to &quot;116.sessionStorage 存贮&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param {String} key  属性</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param {*} value 值</span></span>
<span class="line"><span style="color:#f6f6f4;">   */</span></span>
<span class="line"><span style="color:#f6f6f4;">    export const sessionStorageSet = (key, value) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (typeof (value) === &#39;object&#39;) value = JSON.stringify(value);</span></span>
<span class="line"><span style="color:#f6f6f4;">    sessionStorage.setItem(key, value)</span></span>
<span class="line"><span style="color:#f6f6f4;">    };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param {String} key  属性</span></span>
<span class="line"><span style="color:#24292e;">     * @param {*} value 值</span></span>
<span class="line"><span style="color:#24292e;">   */</span></span>
<span class="line"><span style="color:#24292e;">    export const sessionStorageSet = (key, value) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    if (typeof (value) === &#39;object&#39;) value = JSON.stringify(value);</span></span>
<span class="line"><span style="color:#24292e;">    sessionStorage.setItem(key, value)</span></span>
<span class="line"><span style="color:#24292e;">    };</span></span></code></pre></div><h2 id="_117-sessionstorage-获取" tabindex="-1">117.sessionStorage 获取 <a class="header-anchor" href="#_117-sessionstorage-获取" aria-label="Permalink to &quot;117.sessionStorage 获取&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param {String} key  属性</span></span>
<span class="line"><span style="color:#f6f6f4;">   */</span></span>
<span class="line"><span style="color:#f6f6f4;">    export const sessionStorageGet = (key) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">    return sessionStorage.getItem(key)</span></span>
<span class="line"><span style="color:#f6f6f4;">    };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param {String} key  属性</span></span>
<span class="line"><span style="color:#24292e;">   */</span></span>
<span class="line"><span style="color:#24292e;">    export const sessionStorageGet = (key) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    return sessionStorage.getItem(key)</span></span>
<span class="line"><span style="color:#24292e;">    };</span></span></code></pre></div><h2 id="_118-sessionstorage-删除" tabindex="-1">118.sessionStorage 删除 <a class="header-anchor" href="#_118-sessionstorage-删除" aria-label="Permalink to &quot;118.sessionStorage 删除&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param {String} key  属性</span></span>
<span class="line"><span style="color:#f6f6f4;">   */</span></span>
<span class="line"><span style="color:#f6f6f4;">    export const sessionStorageRemove = (key) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">    sessionStorage.removeItem(key)</span></span>
<span class="line"><span style="color:#f6f6f4;">    };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param {String} key  属性</span></span>
<span class="line"><span style="color:#24292e;">   */</span></span>
<span class="line"><span style="color:#24292e;">    export const sessionStorageRemove = (key) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    sessionStorage.removeItem(key)</span></span>
<span class="line"><span style="color:#24292e;">    };</span></span></code></pre></div><h2 id="_119-sessionstorage-存贮某一段时间失效" tabindex="-1">119.sessionStorage 存贮某一段时间失效 <a class="header-anchor" href="#_119-sessionstorage-存贮某一段时间失效" aria-label="Permalink to &quot;119.sessionStorage 存贮某一段时间失效&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param {String} key  属性</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param {*} value 存贮值</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param {String} expire 过期时间,毫秒数</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export const sessionStorageSetExpire = (key, value, expire) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">   if (typeof (value) === &#39;object&#39;) value = JSON.stringify(value);</span></span>
<span class="line"><span style="color:#f6f6f4;">    sessionStorage.setItem(key, value);</span></span>
<span class="line"><span style="color:#f6f6f4;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">        sessionStorage.removeItem(key)</span></span>
<span class="line"><span style="color:#f6f6f4;">    }, expire)</span></span>
<span class="line"><span style="color:#f6f6f4;">    };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param {String} key  属性</span></span>
<span class="line"><span style="color:#24292e;">     * @param {*} value 存贮值</span></span>
<span class="line"><span style="color:#24292e;">     * @param {String} expire 过期时间,毫秒数</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export const sessionStorageSetExpire = (key, value, expire) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">   if (typeof (value) === &#39;object&#39;) value = JSON.stringify(value);</span></span>
<span class="line"><span style="color:#24292e;">    sessionStorage.setItem(key, value);</span></span>
<span class="line"><span style="color:#24292e;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        sessionStorage.removeItem(key)</span></span>
<span class="line"><span style="color:#24292e;">    }, expire)</span></span>
<span class="line"><span style="color:#24292e;">    };</span></span></code></pre></div><h2 id="_120-cookie-存贮" tabindex="-1">120.cookie 存贮 <a class="header-anchor" href="#_120-cookie-存贮" aria-label="Permalink to &quot;120.cookie 存贮&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param {String} key  属性</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param {*} value  值</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { String } expire  过期时间,单位天</span></span>
<span class="line"><span style="color:#f6f6f4;">   */</span></span>
<span class="line"><span style="color:#f6f6f4;">    export const cookieSet = (key, value, expire) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">    const d = new Date();</span></span>
<span class="line"><span style="color:#f6f6f4;">    d.setDate(d.getDate() + expire);</span></span>
<span class="line"><span style="color:#f6f6f4;">    document.cookie = \`\${key}=\${value};expires=\${d.toUTCString()}\`</span></span>
<span class="line"><span style="color:#f6f6f4;">    };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param {String} key  属性</span></span>
<span class="line"><span style="color:#24292e;">     * @param {*} value  值</span></span>
<span class="line"><span style="color:#24292e;">     * @param { String } expire  过期时间,单位天</span></span>
<span class="line"><span style="color:#24292e;">   */</span></span>
<span class="line"><span style="color:#24292e;">    export const cookieSet = (key, value, expire) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    const d = new Date();</span></span>
<span class="line"><span style="color:#24292e;">    d.setDate(d.getDate() + expire);</span></span>
<span class="line"><span style="color:#24292e;">    document.cookie = \`\${key}=\${value};expires=\${d.toUTCString()}\`</span></span>
<span class="line"><span style="color:#24292e;">    };</span></span></code></pre></div><h2 id="_121-cookie-获取" tabindex="-1">121.cookie 获取 <a class="header-anchor" href="#_121-cookie-获取" aria-label="Permalink to &quot;121.cookie 获取&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param {String} key  属性</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export const cookieGet = (key) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">       const cookieStr = unescape(document.cookie);</span></span>
<span class="line"><span style="color:#f6f6f4;">       const arr = cookieStr.split(&#39;; &#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">       let cookieValue = &#39;&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;">       for (let i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span style="color:#f6f6f4;">           const temp = arr[i].split(&#39;=&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">           if (temp[0] === key) {</span></span>
<span class="line"><span style="color:#f6f6f4;">               cookieValue = temp[1];</span></span>
<span class="line"><span style="color:#f6f6f4;">               break</span></span>
<span class="line"><span style="color:#f6f6f4;">       }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    return cookieValue</span></span>
<span class="line"><span style="color:#f6f6f4;">    };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param {String} key  属性</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export const cookieGet = (key) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">       const cookieStr = unescape(document.cookie);</span></span>
<span class="line"><span style="color:#24292e;">       const arr = cookieStr.split(&#39;; &#39;);</span></span>
<span class="line"><span style="color:#24292e;">       let cookieValue = &#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">       for (let i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">           const temp = arr[i].split(&#39;=&#39;);</span></span>
<span class="line"><span style="color:#24292e;">           if (temp[0] === key) {</span></span>
<span class="line"><span style="color:#24292e;">               cookieValue = temp[1];</span></span>
<span class="line"><span style="color:#24292e;">               break</span></span>
<span class="line"><span style="color:#24292e;">       }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    return cookieValue</span></span>
<span class="line"><span style="color:#24292e;">    };</span></span></code></pre></div><h2 id="_122-cookie-删除" tabindex="-1">122.cookie 删除 <a class="header-anchor" href="#_122-cookie-删除" aria-label="Permalink to &quot;122.cookie 删除&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param {String} key  属性</span></span>
<span class="line"><span style="color:#f6f6f4;">   */</span></span>
<span class="line"><span style="color:#f6f6f4;">    export const cookieRemove = (key) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">    document.cookie = \`\${encodeURIComponent(key)}=;expires=\${new Date()}\`</span></span>
<span class="line"><span style="color:#f6f6f4;">    };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param {String} key  属性</span></span>
<span class="line"><span style="color:#24292e;">   */</span></span>
<span class="line"><span style="color:#24292e;">    export const cookieRemove = (key) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    document.cookie = \`\${encodeURIComponent(key)}=;expires=\${new Date()}\`</span></span>
<span class="line"><span style="color:#24292e;">    };</span></span></code></pre></div><h2 id="_123-更多的工具函数" tabindex="-1">123.更多的工具函数 <a class="header-anchor" href="#_123-更多的工具函数" aria-label="Permalink to &quot;123.更多的工具函数&quot;">​</a></h2><p>这里包含了平时可能常用的工具函数，包含数字，字符串，数组和对象等等操作。</p><h2 id="_124-金钱格式化-三位加逗号" tabindex="-1">124.金钱格式化，三位加逗号 <a class="header-anchor" href="#_124-金钱格式化-三位加逗号" aria-label="Permalink to &quot;124.金钱格式化，三位加逗号&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"> *  @param { number } num</span></span>
<span class="line"><span style="color:#f6f6f4;">    */</span></span>
<span class="line"><span style="color:#f6f6f4;">    export const formatMoney = num =&gt; num.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, &quot;,&quot;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> *  @param { number } num</span></span>
<span class="line"><span style="color:#24292e;">    */</span></span>
<span class="line"><span style="color:#24292e;">    export const formatMoney = num =&gt; num.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, &quot;,&quot;);</span></span></code></pre></div><h2 id="_125-截取字符串并加身略号" tabindex="-1">125.截取字符串并加身略号 <a class="header-anchor" href="#_125-截取字符串并加身略号" aria-label="Permalink to &quot;125.截取字符串并加身略号&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">export function subText(str, length) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (str.length === 0) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return &#39;&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (str.length &gt; length) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return str.substr(0, length) + &quot;...&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">    } else {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return str;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export function subText(str, length) {</span></span>
<span class="line"><span style="color:#24292e;">    if (str.length === 0) {</span></span>
<span class="line"><span style="color:#24292e;">        return &#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    if (str.length &gt; length) {</span></span>
<span class="line"><span style="color:#24292e;">        return str.substr(0, length) + &quot;...&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    } else {</span></span>
<span class="line"><span style="color:#24292e;">        return str;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_126-获取文件base64编码" tabindex="-1">126.获取文件base64编码 <a class="header-anchor" href="#_126-获取文件base64编码" aria-label="Permalink to &quot;126.获取文件base64编码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param file</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param format  指定文件格式</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param size  指定文件大小(字节)</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param formatMsg 格式错误提示</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param sizeMsg   大小超出限制提示</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @returns {Promise&lt;any&gt;}</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export function fileToBase64String(file, format = [&#39;jpg&#39;, &#39;jpeg&#39;, &#39;png&#39;, &#39;gif&#39;], size = 20 * 1024 * 1024, formatMsg = &#39;文件格式不正确&#39;, sizeMsg = &#39;文件大小超出限制&#39;) {</span></span>
<span class="line"><span style="color:#f6f6f4;">       return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">           // 格式过滤</span></span>
<span class="line"><span style="color:#f6f6f4;">           let suffix = file.type.split(&#39;/&#39;)[1].toLowerCase();</span></span>
<span class="line"><span style="color:#f6f6f4;">           let inFormat = false;</span></span>
<span class="line"><span style="color:#f6f6f4;">           for (let i = 0; i &lt; format.length; i++) {</span></span>
<span class="line"><span style="color:#f6f6f4;">               if (suffix === format[i]) {</span></span>
<span class="line"><span style="color:#f6f6f4;">                   inFormat = true;</span></span>
<span class="line"><span style="color:#f6f6f4;">                   break;</span></span>
<span class="line"><span style="color:#f6f6f4;">               }</span></span>
<span class="line"><span style="color:#f6f6f4;">           }</span></span>
<span class="line"><span style="color:#f6f6f4;">           if (!inFormat) {</span></span>
<span class="line"><span style="color:#f6f6f4;">               reject(formatMsg);</span></span>
<span class="line"><span style="color:#f6f6f4;">           }</span></span>
<span class="line"><span style="color:#f6f6f4;">           // 大小过滤</span></span>
<span class="line"><span style="color:#f6f6f4;">           if (file.size &gt; size) {</span></span>
<span class="line"><span style="color:#f6f6f4;">               reject(sizeMsg);</span></span>
<span class="line"><span style="color:#f6f6f4;">           }</span></span>
<span class="line"><span style="color:#f6f6f4;">           // 转base64字符串</span></span>
<span class="line"><span style="color:#f6f6f4;">       let fileReader = new FileReader();</span></span>
<span class="line"><span style="color:#f6f6f4;">        fileReader.readAsDataURL(file);</span></span>
<span class="line"><span style="color:#f6f6f4;">        fileReader.onload = () =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">            let res = fileReader.result;</span></span>
<span class="line"><span style="color:#f6f6f4;">            resolve({base64String: res, suffix: suffix});</span></span>
<span class="line"><span style="color:#f6f6f4;">            reject(&#39;异常文件，请重新选择&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">    })</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param file</span></span>
<span class="line"><span style="color:#24292e;">     * @param format  指定文件格式</span></span>
<span class="line"><span style="color:#24292e;">     * @param size  指定文件大小(字节)</span></span>
<span class="line"><span style="color:#24292e;">     * @param formatMsg 格式错误提示</span></span>
<span class="line"><span style="color:#24292e;">     * @param sizeMsg   大小超出限制提示</span></span>
<span class="line"><span style="color:#24292e;">     * @returns {Promise&lt;any&gt;}</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export function fileToBase64String(file, format = [&#39;jpg&#39;, &#39;jpeg&#39;, &#39;png&#39;, &#39;gif&#39;], size = 20 * 1024 * 1024, formatMsg = &#39;文件格式不正确&#39;, sizeMsg = &#39;文件大小超出限制&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">       return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">           // 格式过滤</span></span>
<span class="line"><span style="color:#24292e;">           let suffix = file.type.split(&#39;/&#39;)[1].toLowerCase();</span></span>
<span class="line"><span style="color:#24292e;">           let inFormat = false;</span></span>
<span class="line"><span style="color:#24292e;">           for (let i = 0; i &lt; format.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">               if (suffix === format[i]) {</span></span>
<span class="line"><span style="color:#24292e;">                   inFormat = true;</span></span>
<span class="line"><span style="color:#24292e;">                   break;</span></span>
<span class="line"><span style="color:#24292e;">               }</span></span>
<span class="line"><span style="color:#24292e;">           }</span></span>
<span class="line"><span style="color:#24292e;">           if (!inFormat) {</span></span>
<span class="line"><span style="color:#24292e;">               reject(formatMsg);</span></span>
<span class="line"><span style="color:#24292e;">           }</span></span>
<span class="line"><span style="color:#24292e;">           // 大小过滤</span></span>
<span class="line"><span style="color:#24292e;">           if (file.size &gt; size) {</span></span>
<span class="line"><span style="color:#24292e;">               reject(sizeMsg);</span></span>
<span class="line"><span style="color:#24292e;">           }</span></span>
<span class="line"><span style="color:#24292e;">           // 转base64字符串</span></span>
<span class="line"><span style="color:#24292e;">       let fileReader = new FileReader();</span></span>
<span class="line"><span style="color:#24292e;">        fileReader.readAsDataURL(file);</span></span>
<span class="line"><span style="color:#24292e;">        fileReader.onload = () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">            let res = fileReader.result;</span></span>
<span class="line"><span style="color:#24292e;">            resolve({base64String: res, suffix: suffix});</span></span>
<span class="line"><span style="color:#24292e;">            reject(&#39;异常文件，请重新选择&#39;);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_127-b转换到kb-mb-gb并保留两位小数" tabindex="-1">127.B转换到KB,MB,GB并保留两位小数 <a class="header-anchor" href="#_127-b转换到kb-mb-gb并保留两位小数" aria-label="Permalink to &quot;127.B转换到KB,MB,GB并保留两位小数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { number } fileSize</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export function formatFileSize(fileSize) {</span></span>
<span class="line"><span style="color:#f6f6f4;">       let temp;</span></span>
<span class="line"><span style="color:#f6f6f4;">       if (fileSize &lt; 1024) {</span></span>
<span class="line"><span style="color:#f6f6f4;">           return fileSize + &#39;B&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;">       } else if (fileSize &lt; (1024 * 1024)) {</span></span>
<span class="line"><span style="color:#f6f6f4;">           temp = fileSize / 1024;</span></span>
<span class="line"><span style="color:#f6f6f4;">           temp = temp.toFixed(2);</span></span>
<span class="line"><span style="color:#f6f6f4;">           return temp + &#39;KB&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;">       } else if (fileSize &lt; (1024 * 1024 * 1024)) {</span></span>
<span class="line"><span style="color:#f6f6f4;">           temp = fileSize / (1024 * 1024);</span></span>
<span class="line"><span style="color:#f6f6f4;">           temp = temp.toFixed(2);</span></span>
<span class="line"><span style="color:#f6f6f4;">           return temp + &#39;MB&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;">       } else {</span></span>
<span class="line"><span style="color:#f6f6f4;">           temp = fileSize / (1024 * 1024 * 1024);</span></span>
<span class="line"><span style="color:#f6f6f4;">       temp = temp.toFixed(2);</span></span>
<span class="line"><span style="color:#f6f6f4;">        return temp + &#39;GB&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param { number } fileSize</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export function formatFileSize(fileSize) {</span></span>
<span class="line"><span style="color:#24292e;">       let temp;</span></span>
<span class="line"><span style="color:#24292e;">       if (fileSize &lt; 1024) {</span></span>
<span class="line"><span style="color:#24292e;">           return fileSize + &#39;B&#39;;</span></span>
<span class="line"><span style="color:#24292e;">       } else if (fileSize &lt; (1024 * 1024)) {</span></span>
<span class="line"><span style="color:#24292e;">           temp = fileSize / 1024;</span></span>
<span class="line"><span style="color:#24292e;">           temp = temp.toFixed(2);</span></span>
<span class="line"><span style="color:#24292e;">           return temp + &#39;KB&#39;;</span></span>
<span class="line"><span style="color:#24292e;">       } else if (fileSize &lt; (1024 * 1024 * 1024)) {</span></span>
<span class="line"><span style="color:#24292e;">           temp = fileSize / (1024 * 1024);</span></span>
<span class="line"><span style="color:#24292e;">           temp = temp.toFixed(2);</span></span>
<span class="line"><span style="color:#24292e;">           return temp + &#39;MB&#39;;</span></span>
<span class="line"><span style="color:#24292e;">       } else {</span></span>
<span class="line"><span style="color:#24292e;">           temp = fileSize / (1024 * 1024 * 1024);</span></span>
<span class="line"><span style="color:#24292e;">       temp = temp.toFixed(2);</span></span>
<span class="line"><span style="color:#24292e;">        return temp + &#39;GB&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_128-base64转file" tabindex="-1">128.base64转file <a class="header-anchor" href="#_128-base64转file" aria-label="Permalink to &quot;128.base64转file&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     *  @param { base64 } base64</span></span>
<span class="line"><span style="color:#f6f6f4;">     *  @param { string } filename 转换后的文件名</span></span>
<span class="line"><span style="color:#f6f6f4;">        */</span></span>
<span class="line"><span style="color:#f6f6f4;">        export const base64ToFile = (base64, filename )=&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">        let arr = base64.split(&#39;,&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        let mime = arr[0].match(/:(.*?);/)[1];</span></span>
<span class="line"><span style="color:#f6f6f4;">        let suffix = mime.split(&#39;/&#39;)[1] ;// 图片后缀</span></span>
<span class="line"><span style="color:#f6f6f4;">        let bstr = atob(arr[1]);</span></span>
<span class="line"><span style="color:#f6f6f4;">        let n = bstr.length;</span></span>
<span class="line"><span style="color:#f6f6f4;">        let u8arr = new Uint8Array(n);</span></span>
<span class="line"><span style="color:#f6f6f4;">    while (n--) {</span></span>
<span class="line"><span style="color:#f6f6f4;">         u8arr[n] = bstr.charCodeAt(n)</span></span>
<span class="line"><span style="color:#f6f6f4;">     }</span></span>
<span class="line"><span style="color:#f6f6f4;">     return new File([u8arr], \`\${filename}.\${suffix}\`, { type: mime })</span></span>
<span class="line"><span style="color:#f6f6f4;">     };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     *  @param { base64 } base64</span></span>
<span class="line"><span style="color:#24292e;">     *  @param { string } filename 转换后的文件名</span></span>
<span class="line"><span style="color:#24292e;">        */</span></span>
<span class="line"><span style="color:#24292e;">        export const base64ToFile = (base64, filename )=&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        let arr = base64.split(&#39;,&#39;);</span></span>
<span class="line"><span style="color:#24292e;">        let mime = arr[0].match(/:(.*?);/)[1];</span></span>
<span class="line"><span style="color:#24292e;">        let suffix = mime.split(&#39;/&#39;)[1] ;// 图片后缀</span></span>
<span class="line"><span style="color:#24292e;">        let bstr = atob(arr[1]);</span></span>
<span class="line"><span style="color:#24292e;">        let n = bstr.length;</span></span>
<span class="line"><span style="color:#24292e;">        let u8arr = new Uint8Array(n);</span></span>
<span class="line"><span style="color:#24292e;">    while (n--) {</span></span>
<span class="line"><span style="color:#24292e;">         u8arr[n] = bstr.charCodeAt(n)</span></span>
<span class="line"><span style="color:#24292e;">     }</span></span>
<span class="line"><span style="color:#24292e;">     return new File([u8arr], \`\${filename}.\${suffix}\`, { type: mime })</span></span>
<span class="line"><span style="color:#24292e;">     };</span></span></code></pre></div><h2 id="_129-base64转blob" tabindex="-1">129.base64转blob <a class="header-anchor" href="#_129-base64转blob" aria-label="Permalink to &quot;129.base64转blob&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">    *  @param { base64 } base64</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export const base64ToBlob = base64 =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">       let arr = base64.split(&#39;,&#39;),</span></span>
<span class="line"><span style="color:#f6f6f4;">           mime = arr[0].match(/:(.*?);/)[1],</span></span>
<span class="line"><span style="color:#f6f6f4;">           bstr = atob(arr[1]),</span></span>
<span class="line"><span style="color:#f6f6f4;">           n = bstr.length,</span></span>
<span class="line"><span style="color:#f6f6f4;">           u8arr = new Uint8Array(n);</span></span>
<span class="line"><span style="color:#f6f6f4;">       while (n--) {</span></span>
<span class="line"><span style="color:#f6f6f4;">       u8arr[n] = bstr.charCodeAt(n);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    return new Blob([u8arr], { type: mime });</span></span>
<span class="line"><span style="color:#f6f6f4;">    };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">    *  @param { base64 } base64</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export const base64ToBlob = base64 =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">       let arr = base64.split(&#39;,&#39;),</span></span>
<span class="line"><span style="color:#24292e;">           mime = arr[0].match(/:(.*?);/)[1],</span></span>
<span class="line"><span style="color:#24292e;">           bstr = atob(arr[1]),</span></span>
<span class="line"><span style="color:#24292e;">           n = bstr.length,</span></span>
<span class="line"><span style="color:#24292e;">           u8arr = new Uint8Array(n);</span></span>
<span class="line"><span style="color:#24292e;">       while (n--) {</span></span>
<span class="line"><span style="color:#24292e;">       u8arr[n] = bstr.charCodeAt(n);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    return new Blob([u8arr], { type: mime });</span></span>
<span class="line"><span style="color:#24292e;">    };</span></span></code></pre></div><h2 id="_130-blob转file" tabindex="-1">130.blob转file <a class="header-anchor" href="#_130-blob转file" aria-label="Permalink to &quot;130.blob转file&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">    *  @param { blob } blob</span></span>
<span class="line"><span style="color:#f6f6f4;">    *  @param { string } fileName</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">   export const blobToFile = (blob, fileName) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">    blob.lastModifiedDate = new Date();</span></span>
<span class="line"><span style="color:#f6f6f4;">    blob.name = fileName;</span></span>
<span class="line"><span style="color:#f6f6f4;">    return blob;</span></span>
<span class="line"><span style="color:#f6f6f4;">    };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">    *  @param { blob } blob</span></span>
<span class="line"><span style="color:#24292e;">    *  @param { string } fileName</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">   export const blobToFile = (blob, fileName) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    blob.lastModifiedDate = new Date();</span></span>
<span class="line"><span style="color:#24292e;">    blob.name = fileName;</span></span>
<span class="line"><span style="color:#24292e;">    return blob;</span></span>
<span class="line"><span style="color:#24292e;">    };</span></span></code></pre></div><h2 id="_131-file转base64" tabindex="-1">131.file转base64 <a class="header-anchor" href="#_131-file转base64" aria-label="Permalink to &quot;131.file转base64&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { * } file 图片文件</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export const fileToBase64 = file =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">       let reader = new FileReader();</span></span>
<span class="line"><span style="color:#f6f6f4;">       reader.readAsDataURL(file);</span></span>
<span class="line"><span style="color:#f6f6f4;">   reader.onload = function (e) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return e.target.result</span></span>
<span class="line"><span style="color:#f6f6f4;">    };</span></span>
<span class="line"><span style="color:#f6f6f4;">    };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param { * } file 图片文件</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export const fileToBase64 = file =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">       let reader = new FileReader();</span></span>
<span class="line"><span style="color:#24292e;">       reader.readAsDataURL(file);</span></span>
<span class="line"><span style="color:#24292e;">   reader.onload = function (e) {</span></span>
<span class="line"><span style="color:#24292e;">        return e.target.result</span></span>
<span class="line"><span style="color:#24292e;">    };</span></span>
<span class="line"><span style="color:#24292e;">    };</span></span></code></pre></div><h2 id="_132-递归生成树形结构" tabindex="-1">132.递归生成树形结构 <a class="header-anchor" href="#_132-递归生成树形结构" aria-label="Permalink to &quot;132.递归生成树形结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">export function getTreeData(data, pid, pidName = &#39;parentId&#39;, idName = &#39;id&#39;, childrenName = &#39;children&#39;, key) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    let arr = [];</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    for (let i = 0; i &lt; data.length; i++) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        if (data[i][pidName] == pid) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            data[i].key = data[i][idName];</span></span>
<span class="line"><span style="color:#f6f6f4;">            data[i][childrenName] = getTreeData(data, data[i][idName], pidName, idName, childrenName);</span></span>
<span class="line"><span style="color:#f6f6f4;">            arr.push(data[i]);</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    </span></span>
<span class="line"><span style="color:#f6f6f4;">    return arr;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export function getTreeData(data, pid, pidName = &#39;parentId&#39;, idName = &#39;id&#39;, childrenName = &#39;children&#39;, key) {</span></span>
<span class="line"><span style="color:#24292e;">    let arr = [];</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    for (let i = 0; i &lt; data.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">        if (data[i][pidName] == pid) {</span></span>
<span class="line"><span style="color:#24292e;">            data[i].key = data[i][idName];</span></span>
<span class="line"><span style="color:#24292e;">            data[i][childrenName] = getTreeData(data, data[i][idName], pidName, idName, childrenName);</span></span>
<span class="line"><span style="color:#24292e;">            arr.push(data[i]);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">    return arr;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_133-遍历树节点" tabindex="-1">133.遍历树节点 <a class="header-anchor" href="#_133-遍历树节点" aria-label="Permalink to &quot;133.遍历树节点&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">export function foreachTree(data, childrenName = &#39;children&#39;, callback) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    for (let i = 0; i &lt; data.length; i++) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        callback(data[i]);</span></span>
<span class="line"><span style="color:#f6f6f4;">        if (data[i][childrenName] &amp;&amp; data[i][childrenName].length &gt; 0) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            foreachTree(data[i][childrenName], childrenName, callback);</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export function foreachTree(data, childrenName = &#39;children&#39;, callback) {</span></span>
<span class="line"><span style="color:#24292e;">    for (let i = 0; i &lt; data.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">        callback(data[i]);</span></span>
<span class="line"><span style="color:#24292e;">        if (data[i][childrenName] &amp;&amp; data[i][childrenName].length &gt; 0) {</span></span>
<span class="line"><span style="color:#24292e;">            foreachTree(data[i][childrenName], childrenName, callback);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_134-追溯父节点" tabindex="-1">134.追溯父节点 <a class="header-anchor" href="#_134-追溯父节点" aria-label="Permalink to &quot;134.追溯父节点&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">export function traceParentNode(pid, data, rootPid, pidName = &#39;parentId&#39;, idName = &#39;id&#39;, childrenName = &#39;children&#39;) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    let arr = [];</span></span>
<span class="line"><span style="color:#f6f6f4;">    foreachTree(data, childrenName, (node) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">        if (node[idName] == pid) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            arr.push(node);</span></span>
<span class="line"><span style="color:#f6f6f4;">            if (node[pidName] != rootPid) {</span></span>
<span class="line"><span style="color:#f6f6f4;">                arr = arr.concat(traceParentNode(node[pidName], data, rootPid, pidName, idName));</span></span>
<span class="line"><span style="color:#f6f6f4;">            }</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">    });</span></span>
<span class="line"><span style="color:#f6f6f4;">    return arr; </span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export function traceParentNode(pid, data, rootPid, pidName = &#39;parentId&#39;, idName = &#39;id&#39;, childrenName = &#39;children&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">    let arr = [];</span></span>
<span class="line"><span style="color:#24292e;">    foreachTree(data, childrenName, (node) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        if (node[idName] == pid) {</span></span>
<span class="line"><span style="color:#24292e;">            arr.push(node);</span></span>
<span class="line"><span style="color:#24292e;">            if (node[pidName] != rootPid) {</span></span>
<span class="line"><span style="color:#24292e;">                arr = arr.concat(traceParentNode(node[pidName], data, rootPid, pidName, idName));</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    });</span></span>
<span class="line"><span style="color:#24292e;">    return arr; </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_135-寻找所有子节点" tabindex="-1">135.寻找所有子节点 <a class="header-anchor" href="#_135-寻找所有子节点" aria-label="Permalink to &quot;135.寻找所有子节点&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">export function traceChildNode(id, data, pidName = &#39;parentId&#39;, idName = &#39;id&#39;, childrenName = &#39;children&#39;) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    let arr = [];</span></span>
<span class="line"><span style="color:#f6f6f4;">    foreachTree(data, childrenName, (node) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">        if (node[pidName] == id) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            arr.push(node);</span></span>
<span class="line"><span style="color:#f6f6f4;">            arr = arr.concat(traceChildNode(node[idName], data, pidName, idName, childrenName));</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">    });</span></span>
<span class="line"><span style="color:#f6f6f4;">    return arr;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export function traceChildNode(id, data, pidName = &#39;parentId&#39;, idName = &#39;id&#39;, childrenName = &#39;children&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">    let arr = [];</span></span>
<span class="line"><span style="color:#24292e;">    foreachTree(data, childrenName, (node) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        if (node[pidName] == id) {</span></span>
<span class="line"><span style="color:#24292e;">            arr.push(node);</span></span>
<span class="line"><span style="color:#24292e;">            arr = arr.concat(traceChildNode(node[idName], data, pidName, idName, childrenName));</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    });</span></span>
<span class="line"><span style="color:#24292e;">    return arr;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_136-根据pid生成树形结构" tabindex="-1">136.根据pid生成树形结构 <a class="header-anchor" href="#_136-根据pid生成树形结构" aria-label="Permalink to &quot;136.根据pid生成树形结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">    *  @param { object } items 后台获取的数据</span></span>
<span class="line"><span style="color:#f6f6f4;">*  @param { * } id 数据中的id</span></span>
<span class="line"><span style="color:#f6f6f4;"> *  @param { * } link 生成树形结构的依据</span></span>
<span class="line"><span style="color:#f6f6f4;">    */</span></span>
<span class="line"><span style="color:#f6f6f4;">    export const createTree = (items, id = null, link = &#39;pid&#39;) =&gt;{</span></span>
<span class="line"><span style="color:#f6f6f4;">    items.filter(item =&gt; item[link] === id).map(item =&gt; ({ ...item, children: createTree(items, item.id) }));</span></span>
<span class="line"><span style="color:#f6f6f4;">    };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">    *  @param { object } items 后台获取的数据</span></span>
<span class="line"><span style="color:#24292e;">*  @param { * } id 数据中的id</span></span>
<span class="line"><span style="color:#24292e;"> *  @param { * } link 生成树形结构的依据</span></span>
<span class="line"><span style="color:#24292e;">    */</span></span>
<span class="line"><span style="color:#24292e;">    export const createTree = (items, id = null, link = &#39;pid&#39;) =&gt;{</span></span>
<span class="line"><span style="color:#24292e;">    items.filter(item =&gt; item[link] === id).map(item =&gt; ({ ...item, children: createTree(items, item.id) }));</span></span>
<span class="line"><span style="color:#24292e;">    };</span></span></code></pre></div><h2 id="_137-查询数组中是否存在某个元素并返回元素第一次出现的下标" tabindex="-1">137.查询数组中是否存在某个元素并返回元素第一次出现的下标 <a class="header-anchor" href="#_137-查询数组中是否存在某个元素并返回元素第一次出现的下标" aria-label="Permalink to &quot;137.查询数组中是否存在某个元素并返回元素第一次出现的下标&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/** </span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param {*} item </span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { array } data</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export function inArray(item, data) {</span></span>
<span class="line"><span style="color:#f6f6f4;">       for (let i = 0; i &lt; data.length; i++) {</span></span>
<span class="line"><span style="color:#f6f6f4;">           if (item === data[i]) {</span></span>
<span class="line"><span style="color:#f6f6f4;">           return i;</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    return -1;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/** </span></span>
<span class="line"><span style="color:#24292e;">     * @param {*} item </span></span>
<span class="line"><span style="color:#24292e;">     * @param { array } data</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export function inArray(item, data) {</span></span>
<span class="line"><span style="color:#24292e;">       for (let i = 0; i &lt; data.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">           if (item === data[i]) {</span></span>
<span class="line"><span style="color:#24292e;">           return i;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    return -1;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_138-windows根据详细版本号判断当前系统名称" tabindex="-1">138.Windows根据详细版本号判断当前系统名称 <a class="header-anchor" href="#_138-windows根据详细版本号判断当前系统名称" aria-label="Permalink to &quot;138.Windows根据详细版本号判断当前系统名称&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { string } osVersion </span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export function OutOsName(osVersion) {</span></span>
<span class="line"><span style="color:#f6f6f4;">       if(!osVersion){</span></span>
<span class="line"><span style="color:#f6f6f4;">           return</span></span>
<span class="line"><span style="color:#f6f6f4;">       }</span></span>
<span class="line"><span style="color:#f6f6f4;">       let str = osVersion.substr(0, 3);</span></span>
<span class="line"><span style="color:#f6f6f4;">       if (str === &quot;5.0&quot;) {</span></span>
<span class="line"><span style="color:#f6f6f4;">           return &quot;Win 2000&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">       } else if (str === &quot;5.1&quot;) {</span></span>
<span class="line"><span style="color:#f6f6f4;">           return &quot;Win XP&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">       } else if (str === &quot;5.2&quot;) {</span></span>
<span class="line"><span style="color:#f6f6f4;">           return &quot;Win XP64&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">       } else if (str === &quot;6.0&quot;) {</span></span>
<span class="line"><span style="color:#f6f6f4;">           return &quot;Win Vista&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">       } else if (str === &quot;6.1&quot;) {</span></span>
<span class="line"><span style="color:#f6f6f4;">           return &quot;Win 7&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">       } else if (str === &quot;6.2&quot;) {</span></span>
<span class="line"><span style="color:#f6f6f4;">           return &quot;Win 8&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">       } else if (str === &quot;6.3&quot;) {</span></span>
<span class="line"><span style="color:#f6f6f4;">           return &quot;Win 8.1&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">       } else if (str === &quot;10.&quot;) {</span></span>
<span class="line"><span style="color:#f6f6f4;">           return &quot;Win 10&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">   } else {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return &quot;Win&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param { string } osVersion </span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export function OutOsName(osVersion) {</span></span>
<span class="line"><span style="color:#24292e;">       if(!osVersion){</span></span>
<span class="line"><span style="color:#24292e;">           return</span></span>
<span class="line"><span style="color:#24292e;">       }</span></span>
<span class="line"><span style="color:#24292e;">       let str = osVersion.substr(0, 3);</span></span>
<span class="line"><span style="color:#24292e;">       if (str === &quot;5.0&quot;) {</span></span>
<span class="line"><span style="color:#24292e;">           return &quot;Win 2000&quot;</span></span>
<span class="line"><span style="color:#24292e;">       } else if (str === &quot;5.1&quot;) {</span></span>
<span class="line"><span style="color:#24292e;">           return &quot;Win XP&quot;</span></span>
<span class="line"><span style="color:#24292e;">       } else if (str === &quot;5.2&quot;) {</span></span>
<span class="line"><span style="color:#24292e;">           return &quot;Win XP64&quot;</span></span>
<span class="line"><span style="color:#24292e;">       } else if (str === &quot;6.0&quot;) {</span></span>
<span class="line"><span style="color:#24292e;">           return &quot;Win Vista&quot;</span></span>
<span class="line"><span style="color:#24292e;">       } else if (str === &quot;6.1&quot;) {</span></span>
<span class="line"><span style="color:#24292e;">           return &quot;Win 7&quot;</span></span>
<span class="line"><span style="color:#24292e;">       } else if (str === &quot;6.2&quot;) {</span></span>
<span class="line"><span style="color:#24292e;">           return &quot;Win 8&quot;</span></span>
<span class="line"><span style="color:#24292e;">       } else if (str === &quot;6.3&quot;) {</span></span>
<span class="line"><span style="color:#24292e;">           return &quot;Win 8.1&quot;</span></span>
<span class="line"><span style="color:#24292e;">       } else if (str === &quot;10.&quot;) {</span></span>
<span class="line"><span style="color:#24292e;">           return &quot;Win 10&quot;</span></span>
<span class="line"><span style="color:#24292e;">   } else {</span></span>
<span class="line"><span style="color:#24292e;">        return &quot;Win&quot;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_139-判断手机是andoird还是ios" tabindex="-1">139.判断手机是Andoird还是IOS <a class="header-anchor" href="#_139-判断手机是andoird还是ios" aria-label="Permalink to &quot;139.判断手机是Andoird还是IOS&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">    *  0: ios</span></span>
<span class="line"><span style="color:#f6f6f4;">    *  1: android</span></span>
<span class="line"><span style="color:#f6f6f4;">    *  2: 其它</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export function getOSType() {</span></span>
<span class="line"><span style="color:#f6f6f4;">       let u = navigator.userAgent, app = navigator.appVersion;</span></span>
<span class="line"><span style="color:#f6f6f4;">       let isAndroid = u.indexOf(&#39;Android&#39;) &gt; -1 || u.indexOf(&#39;Linux&#39;) &gt; -1;</span></span>
<span class="line"><span style="color:#f6f6f4;">       let isIOS = !!u.match(/\\(i[^;]+;( U;)? CPU.+Mac OS X/);</span></span>
<span class="line"><span style="color:#f6f6f4;">       if (isIOS) {</span></span>
<span class="line"><span style="color:#f6f6f4;">           return 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">   }</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (isAndroid) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return 1;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    return 2;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">    *  0: ios</span></span>
<span class="line"><span style="color:#24292e;">    *  1: android</span></span>
<span class="line"><span style="color:#24292e;">    *  2: 其它</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export function getOSType() {</span></span>
<span class="line"><span style="color:#24292e;">       let u = navigator.userAgent, app = navigator.appVersion;</span></span>
<span class="line"><span style="color:#24292e;">       let isAndroid = u.indexOf(&#39;Android&#39;) &gt; -1 || u.indexOf(&#39;Linux&#39;) &gt; -1;</span></span>
<span class="line"><span style="color:#24292e;">       let isIOS = !!u.match(/\\(i[^;]+;( U;)? CPU.+Mac OS X/);</span></span>
<span class="line"><span style="color:#24292e;">       if (isIOS) {</span></span>
<span class="line"><span style="color:#24292e;">           return 0;</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">    if (isAndroid) {</span></span>
<span class="line"><span style="color:#24292e;">        return 1;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    return 2;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_140-函数防抖" tabindex="-1">140.函数防抖 <a class="header-anchor" href="#_140-函数防抖" aria-label="Permalink to &quot;140.函数防抖&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { function } func</span></span>
<span class="line"><span style="color:#f6f6f4;">    </span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { number } wait 延迟执行毫秒数</span></span>
<span class="line"><span style="color:#f6f6f4;">    </span></span>
<span class="line"><span style="color:#f6f6f4;"> * @param { boolean } immediate  true 表立即执行，false 表非立即执行</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export function debounce(func,wait,immediate) {</span></span>
<span class="line"><span style="color:#f6f6f4;">       let timeout;</span></span>
<span class="line"><span style="color:#f6f6f4;">       return function () {</span></span>
<span class="line"><span style="color:#f6f6f4;">           let context = this;</span></span>
<span class="line"><span style="color:#f6f6f4;">           let args = arguments;</span></span>
<span class="line"><span style="color:#f6f6f4;">    </span></span>
<span class="line"><span style="color:#f6f6f4;">           if (timeout) clearTimeout(timeout);</span></span>
<span class="line"><span style="color:#f6f6f4;">           if (immediate) {</span></span>
<span class="line"><span style="color:#f6f6f4;">               let callNow = !timeout;</span></span>
<span class="line"><span style="color:#f6f6f4;">               timeout = setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">                   timeout = null;</span></span>
<span class="line"><span style="color:#f6f6f4;">               }, wait);</span></span>
<span class="line"><span style="color:#f6f6f4;">               if (callNow) func.apply(context, args)</span></span>
<span class="line"><span style="color:#f6f6f4;">       }</span></span>
<span class="line"><span style="color:#f6f6f4;">        else {</span></span>
<span class="line"><span style="color:#f6f6f4;">            timeout = setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">                func.apply(context, args)</span></span>
<span class="line"><span style="color:#f6f6f4;">            }, wait);</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;"> </span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param { function } func</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">     * @param { number } wait 延迟执行毫秒数</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;"> * @param { boolean } immediate  true 表立即执行，false 表非立即执行</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export function debounce(func,wait,immediate) {</span></span>
<span class="line"><span style="color:#24292e;">       let timeout;</span></span>
<span class="line"><span style="color:#24292e;">       return function () {</span></span>
<span class="line"><span style="color:#24292e;">           let context = this;</span></span>
<span class="line"><span style="color:#24292e;">           let args = arguments;</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">           if (timeout) clearTimeout(timeout);</span></span>
<span class="line"><span style="color:#24292e;">           if (immediate) {</span></span>
<span class="line"><span style="color:#24292e;">               let callNow = !timeout;</span></span>
<span class="line"><span style="color:#24292e;">               timeout = setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                   timeout = null;</span></span>
<span class="line"><span style="color:#24292e;">               }, wait);</span></span>
<span class="line"><span style="color:#24292e;">               if (callNow) func.apply(context, args)</span></span>
<span class="line"><span style="color:#24292e;">       }</span></span>
<span class="line"><span style="color:#24292e;">        else {</span></span>
<span class="line"><span style="color:#24292e;">            timeout = setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                func.apply(context, args)</span></span>
<span class="line"><span style="color:#24292e;">            }, wait);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_145-函数节流" tabindex="-1">145.函数节流 <a class="header-anchor" href="#_145-函数节流" aria-label="Permalink to &quot;145.函数节流&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { function } func 函数</span></span>
<span class="line"><span style="color:#f6f6f4;">    </span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { number } wait 延迟执行毫秒数</span></span>
<span class="line"><span style="color:#f6f6f4;">    </span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { number } type 1 表时间戳版，2 表定时器版</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export function throttle(func, wait ,type) {</span></span>
<span class="line"><span style="color:#f6f6f4;">       let previous, timeout;</span></span>
<span class="line"><span style="color:#f6f6f4;">       if(type===1){</span></span>
<span class="line"><span style="color:#f6f6f4;">           previous = 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">       }else if(type===2){</span></span>
<span class="line"><span style="color:#f6f6f4;">       timeout = null;</span></span>
<span class="line"><span style="color:#f6f6f4;">       }</span></span>
<span class="line"><span style="color:#f6f6f4;">       return function() {</span></span>
<span class="line"><span style="color:#f6f6f4;">           let context = this;</span></span>
<span class="line"><span style="color:#f6f6f4;">           let args = arguments;</span></span>
<span class="line"><span style="color:#f6f6f4;">           if(type===1){</span></span>
<span class="line"><span style="color:#f6f6f4;">               let now = Date.now();</span></span>
<span class="line"><span style="color:#f6f6f4;">    </span></span>
<span class="line"><span style="color:#f6f6f4;">               if (now - previous &gt; wait) {</span></span>
<span class="line"><span style="color:#f6f6f4;">                   func.apply(context, args);</span></span>
<span class="line"><span style="color:#f6f6f4;">                   previous = now;</span></span>
<span class="line"><span style="color:#f6f6f4;">               }</span></span>
<span class="line"><span style="color:#f6f6f4;">           }else if(type===2){</span></span>
<span class="line"><span style="color:#f6f6f4;">           if (!timeout) {</span></span>
<span class="line"><span style="color:#f6f6f4;">                   timeout = setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">                   timeout = null;</span></span>
<span class="line"><span style="color:#f6f6f4;">                    func.apply(context, args)</span></span>
<span class="line"><span style="color:#f6f6f4;">                }, wait)</span></span>
<span class="line"><span style="color:#f6f6f4;">            }</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;"> </span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param { function } func 函数</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">     * @param { number } wait 延迟执行毫秒数</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">     * @param { number } type 1 表时间戳版，2 表定时器版</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export function throttle(func, wait ,type) {</span></span>
<span class="line"><span style="color:#24292e;">       let previous, timeout;</span></span>
<span class="line"><span style="color:#24292e;">       if(type===1){</span></span>
<span class="line"><span style="color:#24292e;">           previous = 0;</span></span>
<span class="line"><span style="color:#24292e;">       }else if(type===2){</span></span>
<span class="line"><span style="color:#24292e;">       timeout = null;</span></span>
<span class="line"><span style="color:#24292e;">       }</span></span>
<span class="line"><span style="color:#24292e;">       return function() {</span></span>
<span class="line"><span style="color:#24292e;">           let context = this;</span></span>
<span class="line"><span style="color:#24292e;">           let args = arguments;</span></span>
<span class="line"><span style="color:#24292e;">           if(type===1){</span></span>
<span class="line"><span style="color:#24292e;">               let now = Date.now();</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">               if (now - previous &gt; wait) {</span></span>
<span class="line"><span style="color:#24292e;">                   func.apply(context, args);</span></span>
<span class="line"><span style="color:#24292e;">                   previous = now;</span></span>
<span class="line"><span style="color:#24292e;">               }</span></span>
<span class="line"><span style="color:#24292e;">           }else if(type===2){</span></span>
<span class="line"><span style="color:#24292e;">           if (!timeout) {</span></span>
<span class="line"><span style="color:#24292e;">                   timeout = setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                   timeout = null;</span></span>
<span class="line"><span style="color:#24292e;">                    func.apply(context, args)</span></span>
<span class="line"><span style="color:#24292e;">                }, wait)</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_146-判断数据类型" tabindex="-1">146.判断数据类型 <a class="header-anchor" href="#_146-判断数据类型" aria-label="Permalink to &quot;146.判断数据类型&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param {*} target </span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export function type(target) {</span></span>
<span class="line"><span style="color:#f6f6f4;">       let ret = typeof(target);</span></span>
<span class="line"><span style="color:#f6f6f4;">       let template = {</span></span>
<span class="line"><span style="color:#f6f6f4;">           &quot;[object Array]&quot;: &quot;array&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">           &quot;[object Object]&quot;:&quot;object&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">           &quot;[object Number]&quot;:&quot;number - object&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">       &quot;[object Boolean]&quot;:&quot;boolean - object&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">           &quot;[object String]&quot;:&#39;string-object&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">       };</span></span>
<span class="line"><span style="color:#f6f6f4;">    </span></span>
<span class="line"><span style="color:#f6f6f4;">       if(target === null) {</span></span>
<span class="line"><span style="color:#f6f6f4;">           return &#39;null&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;">       }else if(ret == &quot;object&quot;){</span></span>
<span class="line"><span style="color:#f6f6f4;">           let str = Object.prototype.toString.call(target);</span></span>
<span class="line"><span style="color:#f6f6f4;">           return template[str];</span></span>
<span class="line"><span style="color:#f6f6f4;">   }else{</span></span>
<span class="line"><span style="color:#f6f6f4;">        return ret;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param {*} target </span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export function type(target) {</span></span>
<span class="line"><span style="color:#24292e;">       let ret = typeof(target);</span></span>
<span class="line"><span style="color:#24292e;">       let template = {</span></span>
<span class="line"><span style="color:#24292e;">           &quot;[object Array]&quot;: &quot;array&quot;,</span></span>
<span class="line"><span style="color:#24292e;">           &quot;[object Object]&quot;:&quot;object&quot;,</span></span>
<span class="line"><span style="color:#24292e;">           &quot;[object Number]&quot;:&quot;number - object&quot;,</span></span>
<span class="line"><span style="color:#24292e;">       &quot;[object Boolean]&quot;:&quot;boolean - object&quot;,</span></span>
<span class="line"><span style="color:#24292e;">           &quot;[object String]&quot;:&#39;string-object&#39;</span></span>
<span class="line"><span style="color:#24292e;">       };</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">       if(target === null) {</span></span>
<span class="line"><span style="color:#24292e;">           return &#39;null&#39;;</span></span>
<span class="line"><span style="color:#24292e;">       }else if(ret == &quot;object&quot;){</span></span>
<span class="line"><span style="color:#24292e;">           let str = Object.prototype.toString.call(target);</span></span>
<span class="line"><span style="color:#24292e;">           return template[str];</span></span>
<span class="line"><span style="color:#24292e;">   }else{</span></span>
<span class="line"><span style="color:#24292e;">        return ret;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_147-生成指定范围随机数" tabindex="-1">147.生成指定范围随机数 <a class="header-anchor" href="#_147-生成指定范围随机数" aria-label="Permalink to &quot;147.生成指定范围随机数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">  * @param { number } min </span></span>
<span class="line"><span style="color:#f6f6f4;">  * @param { number } max </span></span>
<span class="line"><span style="color:#f6f6f4;">    */</span></span>
<span class="line"><span style="color:#f6f6f4;">    export const RandomNum = (min, max) =&gt; Math.floor(Math.random() * (max - min + 1)) + min;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">  * @param { number } min </span></span>
<span class="line"><span style="color:#24292e;">  * @param { number } max </span></span>
<span class="line"><span style="color:#24292e;">    */</span></span>
<span class="line"><span style="color:#24292e;">    export const RandomNum = (min, max) =&gt; Math.floor(Math.random() * (max - min + 1)) + min;</span></span></code></pre></div><h2 id="_148-数组乱序" tabindex="-1">148.数组乱序 <a class="header-anchor" href="#_148-数组乱序" aria-label="Permalink to &quot;148.数组乱序&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param {array} arr</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export function arrScrambling(arr) {</span></span>
<span class="line"><span style="color:#f6f6f4;">       let array = arr;</span></span>
<span class="line"><span style="color:#f6f6f4;">       let index = array.length;</span></span>
<span class="line"><span style="color:#f6f6f4;">       while (index) {</span></span>
<span class="line"><span style="color:#f6f6f4;">           index -= 1;</span></span>
<span class="line"><span style="color:#f6f6f4;">           let randomIndex = Math.floor(Math.random() * index);</span></span>
<span class="line"><span style="color:#f6f6f4;">           let middleware = array[index];</span></span>
<span class="line"><span style="color:#f6f6f4;">           array[index] = array[randomIndex];</span></span>
<span class="line"><span style="color:#f6f6f4;">       array[randomIndex] = middleware</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    return array</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param {array} arr</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export function arrScrambling(arr) {</span></span>
<span class="line"><span style="color:#24292e;">       let array = arr;</span></span>
<span class="line"><span style="color:#24292e;">       let index = array.length;</span></span>
<span class="line"><span style="color:#24292e;">       while (index) {</span></span>
<span class="line"><span style="color:#24292e;">           index -= 1;</span></span>
<span class="line"><span style="color:#24292e;">           let randomIndex = Math.floor(Math.random() * index);</span></span>
<span class="line"><span style="color:#24292e;">           let middleware = array[index];</span></span>
<span class="line"><span style="color:#24292e;">           array[index] = array[randomIndex];</span></span>
<span class="line"><span style="color:#24292e;">       array[randomIndex] = middleware</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    return array</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_150-数组交集" tabindex="-1">150.数组交集 <a class="header-anchor" href="#_150-数组交集" aria-label="Permalink to &quot;150.数组交集&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">  * @param { array} arr1</span></span>
<span class="line"><span style="color:#f6f6f4;">  * @param { array } arr2</span></span>
<span class="line"><span style="color:#f6f6f4;">    */</span></span>
<span class="line"><span style="color:#f6f6f4;">    export const similarity = (arr1, arr2) =&gt; arr1.filter(v =&gt; arr2.includes(v));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">  * @param { array} arr1</span></span>
<span class="line"><span style="color:#24292e;">  * @param { array } arr2</span></span>
<span class="line"><span style="color:#24292e;">    */</span></span>
<span class="line"><span style="color:#24292e;">    export const similarity = (arr1, arr2) =&gt; arr1.filter(v =&gt; arr2.includes(v));</span></span></code></pre></div><h2 id="_151-数组中某元素出现的次数" tabindex="-1">151.数组中某元素出现的次数 <a class="header-anchor" href="#_151-数组中某元素出现的次数" aria-label="Permalink to &quot;151.数组中某元素出现的次数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { array } arr</span></span>
<span class="line"><span style="color:#f6f6f4;"> * @param {*} value</span></span>
<span class="line"><span style="color:#f6f6f4;">    */</span></span>
<span class="line"><span style="color:#f6f6f4;">    export function countOccurrences(arr, value) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    return arr.reduce((a, v) =&gt; v === value ? a + 1 : a + 0, 0);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">     * @param { array } arr</span></span>
<span class="line"><span style="color:#24292e;"> * @param {*} value</span></span>
<span class="line"><span style="color:#24292e;">    */</span></span>
<span class="line"><span style="color:#24292e;">    export function countOccurrences(arr, value) {</span></span>
<span class="line"><span style="color:#24292e;">    return arr.reduce((a, v) =&gt; v === value ? a + 1 : a + 0, 0);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_152-加法函数-精度丢失问题" tabindex="-1">152.加法函数（精度丢失问题） <a class="header-anchor" href="#_152-加法函数-精度丢失问题" aria-label="Permalink to &quot;152.加法函数（精度丢失问题）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { number } arg1</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { number } arg2</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export function add(arg1, arg2) {</span></span>
<span class="line"><span style="color:#f6f6f4;">       let r1, r2, m;</span></span>
<span class="line"><span style="color:#f6f6f4;">   try { r1 = arg1.toString().split(&quot;.&quot;)[1].length } catch (e) { r1 = 0 }</span></span>
<span class="line"><span style="color:#f6f6f4;">    try { r2 = arg2.toString().split(&quot;.&quot;)[1].length } catch (e) { r2 = 0 }</span></span>
<span class="line"><span style="color:#f6f6f4;">    m = Math.pow(10, Math.max(r1, r2));</span></span>
<span class="line"><span style="color:#f6f6f4;">    return (arg1 * m + arg2 * m) / m</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param { number } arg1</span></span>
<span class="line"><span style="color:#24292e;">     * @param { number } arg2</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export function add(arg1, arg2) {</span></span>
<span class="line"><span style="color:#24292e;">       let r1, r2, m;</span></span>
<span class="line"><span style="color:#24292e;">   try { r1 = arg1.toString().split(&quot;.&quot;)[1].length } catch (e) { r1 = 0 }</span></span>
<span class="line"><span style="color:#24292e;">    try { r2 = arg2.toString().split(&quot;.&quot;)[1].length } catch (e) { r2 = 0 }</span></span>
<span class="line"><span style="color:#24292e;">    m = Math.pow(10, Math.max(r1, r2));</span></span>
<span class="line"><span style="color:#24292e;">    return (arg1 * m + arg2 * m) / m</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_153-减法函数-精度丢失问题" tabindex="-1">153.减法函数（精度丢失问题） <a class="header-anchor" href="#_153-减法函数-精度丢失问题" aria-label="Permalink to &quot;153.减法函数（精度丢失问题）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { number } arg1</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { number } arg2</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export function sub(arg1, arg2) {</span></span>
<span class="line"><span style="color:#f6f6f4;">       let r1, r2, m, n;</span></span>
<span class="line"><span style="color:#f6f6f4;">       try { r1 = arg1.toString().split(&quot;.&quot;)[1].length } catch (e) { r1 = 0 }</span></span>
<span class="line"><span style="color:#f6f6f4;">   try { r2 = arg2.toString().split(&quot;.&quot;)[1].length } catch (e) { r2 = 0 }</span></span>
<span class="line"><span style="color:#f6f6f4;">    m = Math.pow(10, Math.max(r1, r2));</span></span>
<span class="line"><span style="color:#f6f6f4;">    n = (r1 &gt;= r2) ? r1 : r2;</span></span>
<span class="line"><span style="color:#f6f6f4;">    return Number(((arg1 * m - arg2 * m) / m).toFixed(n));</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param { number } arg1</span></span>
<span class="line"><span style="color:#24292e;">     * @param { number } arg2</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export function sub(arg1, arg2) {</span></span>
<span class="line"><span style="color:#24292e;">       let r1, r2, m, n;</span></span>
<span class="line"><span style="color:#24292e;">       try { r1 = arg1.toString().split(&quot;.&quot;)[1].length } catch (e) { r1 = 0 }</span></span>
<span class="line"><span style="color:#24292e;">   try { r2 = arg2.toString().split(&quot;.&quot;)[1].length } catch (e) { r2 = 0 }</span></span>
<span class="line"><span style="color:#24292e;">    m = Math.pow(10, Math.max(r1, r2));</span></span>
<span class="line"><span style="color:#24292e;">    n = (r1 &gt;= r2) ? r1 : r2;</span></span>
<span class="line"><span style="color:#24292e;">    return Number(((arg1 * m - arg2 * m) / m).toFixed(n));</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_154-除法函数-精度丢失问题" tabindex="-1">154.除法函数（精度丢失问题） <a class="header-anchor" href="#_154-除法函数-精度丢失问题" aria-label="Permalink to &quot;154.除法函数（精度丢失问题）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { number } num1</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { number } num2</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export function division(num1,num2){</span></span>
<span class="line"><span style="color:#f6f6f4;">       let t1,t2,r1,r2;</span></span>
<span class="line"><span style="color:#f6f6f4;">       try{</span></span>
<span class="line"><span style="color:#f6f6f4;">           t1 = num1.toString().split(&#39;.&#39;)[1].length;</span></span>
<span class="line"><span style="color:#f6f6f4;">       }catch(e){</span></span>
<span class="line"><span style="color:#f6f6f4;">           t1 = 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">       }</span></span>
<span class="line"><span style="color:#f6f6f4;">       try{</span></span>
<span class="line"><span style="color:#f6f6f4;">           t2=num2.toString().split(&quot;.&quot;)[1].length;</span></span>
<span class="line"><span style="color:#f6f6f4;">       }catch(e){</span></span>
<span class="line"><span style="color:#f6f6f4;">           t2=0;</span></span>
<span class="line"><span style="color:#f6f6f4;">   }</span></span>
<span class="line"><span style="color:#f6f6f4;">    r1=Number(num1.toString().replace(&quot;.&quot;,&quot;&quot;));</span></span>
<span class="line"><span style="color:#f6f6f4;">    r2=Number(num2.toString().replace(&quot;.&quot;,&quot;&quot;));</span></span>
<span class="line"><span style="color:#f6f6f4;">    return (r1/r2)*Math.pow(10,t2-t1);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param { number } num1</span></span>
<span class="line"><span style="color:#24292e;">     * @param { number } num2</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export function division(num1,num2){</span></span>
<span class="line"><span style="color:#24292e;">       let t1,t2,r1,r2;</span></span>
<span class="line"><span style="color:#24292e;">       try{</span></span>
<span class="line"><span style="color:#24292e;">           t1 = num1.toString().split(&#39;.&#39;)[1].length;</span></span>
<span class="line"><span style="color:#24292e;">       }catch(e){</span></span>
<span class="line"><span style="color:#24292e;">           t1 = 0;</span></span>
<span class="line"><span style="color:#24292e;">       }</span></span>
<span class="line"><span style="color:#24292e;">       try{</span></span>
<span class="line"><span style="color:#24292e;">           t2=num2.toString().split(&quot;.&quot;)[1].length;</span></span>
<span class="line"><span style="color:#24292e;">       }catch(e){</span></span>
<span class="line"><span style="color:#24292e;">           t2=0;</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">    r1=Number(num1.toString().replace(&quot;.&quot;,&quot;&quot;));</span></span>
<span class="line"><span style="color:#24292e;">    r2=Number(num2.toString().replace(&quot;.&quot;,&quot;&quot;));</span></span>
<span class="line"><span style="color:#24292e;">    return (r1/r2)*Math.pow(10,t2-t1);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_155-乘法函数-精度丢失问题" tabindex="-1">155.乘法函数（精度丢失问题） <a class="header-anchor" href="#_155-乘法函数-精度丢失问题" aria-label="Permalink to &quot;155.乘法函数（精度丢失问题）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { number } num1</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { number } num2</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export function mcl(num1,num2){</span></span>
<span class="line"><span style="color:#f6f6f4;">   let m=0,s1=num1.toString(),s2=num2.toString();</span></span>
<span class="line"><span style="color:#f6f6f4;">    try{m+=s1.split(&quot;.&quot;)[1].length}catch(e){}</span></span>
<span class="line"><span style="color:#f6f6f4;">    try{m+=s2.split(&quot;.&quot;)[1].length}catch(e){}</span></span>
<span class="line"><span style="color:#f6f6f4;">    return Number(s1.replace(&quot;.&quot;,&quot;&quot;))*Number(s2.replace(&quot;.&quot;,&quot;&quot;))/Math.pow(10,m);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param { number } num1</span></span>
<span class="line"><span style="color:#24292e;">     * @param { number } num2</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export function mcl(num1,num2){</span></span>
<span class="line"><span style="color:#24292e;">   let m=0,s1=num1.toString(),s2=num2.toString();</span></span>
<span class="line"><span style="color:#24292e;">    try{m+=s1.split(&quot;.&quot;)[1].length}catch(e){}</span></span>
<span class="line"><span style="color:#24292e;">    try{m+=s2.split(&quot;.&quot;)[1].length}catch(e){}</span></span>
<span class="line"><span style="color:#24292e;">    return Number(s1.replace(&quot;.&quot;,&quot;&quot;))*Number(s2.replace(&quot;.&quot;,&quot;&quot;))/Math.pow(10,m);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_156-递归优化-尾递归" tabindex="-1">156.递归优化（尾递归） <a class="header-anchor" href="#_156-递归优化-尾递归" aria-label="Permalink to &quot;156.递归优化（尾递归）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { function } f</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export function tco(f) {</span></span>
<span class="line"><span style="color:#f6f6f4;">   let value;</span></span>
<span class="line"><span style="color:#f6f6f4;">       let active = false;</span></span>
<span class="line"><span style="color:#f6f6f4;">       let accumulated = [];</span></span>
<span class="line"><span style="color:#f6f6f4;">    </span></span>
<span class="line"><span style="color:#f6f6f4;">       return function accumulator() {</span></span>
<span class="line"><span style="color:#f6f6f4;">           accumulated.push(arguments);</span></span>
<span class="line"><span style="color:#f6f6f4;">           if (!active) {</span></span>
<span class="line"><span style="color:#f6f6f4;">               active = true;</span></span>
<span class="line"><span style="color:#f6f6f4;">               while (accumulated.length) {</span></span>
<span class="line"><span style="color:#f6f6f4;">                   value = f.apply(this, accumulated.shift());</span></span>
<span class="line"><span style="color:#f6f6f4;">               }</span></span>
<span class="line"><span style="color:#f6f6f4;">               active = false;</span></span>
<span class="line"><span style="color:#f6f6f4;">           return value;</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">    };</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param { function } f</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export function tco(f) {</span></span>
<span class="line"><span style="color:#24292e;">   let value;</span></span>
<span class="line"><span style="color:#24292e;">       let active = false;</span></span>
<span class="line"><span style="color:#24292e;">       let accumulated = [];</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">       return function accumulator() {</span></span>
<span class="line"><span style="color:#24292e;">           accumulated.push(arguments);</span></span>
<span class="line"><span style="color:#24292e;">           if (!active) {</span></span>
<span class="line"><span style="color:#24292e;">               active = true;</span></span>
<span class="line"><span style="color:#24292e;">               while (accumulated.length) {</span></span>
<span class="line"><span style="color:#24292e;">                   value = f.apply(this, accumulated.shift());</span></span>
<span class="line"><span style="color:#24292e;">               }</span></span>
<span class="line"><span style="color:#24292e;">               active = false;</span></span>
<span class="line"><span style="color:#24292e;">           return value;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    };</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_157-生成随机整数" tabindex="-1">157.生成随机整数 <a class="header-anchor" href="#_157-生成随机整数" aria-label="Permalink to &quot;157.生成随机整数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">export function randomNumInteger(min, max) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    switch (arguments.length) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        case 1:</span></span>
<span class="line"><span style="color:#f6f6f4;">            return parseInt(Math.random() * min + 1, 10);</span></span>
<span class="line"><span style="color:#f6f6f4;">        case 2:</span></span>
<span class="line"><span style="color:#f6f6f4;">            return parseInt(Math.random() * (max - min + 1) + min, 10);</span></span>
<span class="line"><span style="color:#f6f6f4;">        default:</span></span>
<span class="line"><span style="color:#f6f6f4;">            return 0</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export function randomNumInteger(min, max) {</span></span>
<span class="line"><span style="color:#24292e;">    switch (arguments.length) {</span></span>
<span class="line"><span style="color:#24292e;">        case 1:</span></span>
<span class="line"><span style="color:#24292e;">            return parseInt(Math.random() * min + 1, 10);</span></span>
<span class="line"><span style="color:#24292e;">        case 2:</span></span>
<span class="line"><span style="color:#24292e;">            return parseInt(Math.random() * (max - min + 1) + min, 10);</span></span>
<span class="line"><span style="color:#24292e;">        default:</span></span>
<span class="line"><span style="color:#24292e;">            return 0</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_158-去除空格" tabindex="-1">158.去除空格 <a class="header-anchor" href="#_158-去除空格" aria-label="Permalink to &quot;158.去除空格&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { string } str 待处理字符串</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param  { number } type 去除空格类型 1-所有空格  2-前后空格  3-前空格 4-后空格 默认为1</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export function trim(str, type = 1) {</span></span>
<span class="line"><span style="color:#f6f6f4;">       if (type &amp;&amp; type !== 1 &amp;&amp; type !== 2 &amp;&amp; type !== 3 &amp;&amp; type !== 4) return;</span></span>
<span class="line"><span style="color:#f6f6f4;">       switch (type) {</span></span>
<span class="line"><span style="color:#f6f6f4;">           case 1:</span></span>
<span class="line"><span style="color:#f6f6f4;">               return str.replace(/\\s/g, &quot;&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">           case 2:</span></span>
<span class="line"><span style="color:#f6f6f4;">               return str.replace(/(^\\s)|(\\s*$)/g, &quot;&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">           case 3:</span></span>
<span class="line"><span style="color:#f6f6f4;">               return str.replace(/(^\\s)/g, &quot;&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">           case 4:</span></span>
<span class="line"><span style="color:#f6f6f4;">           return str.replace(/(\\s$)/g, &quot;&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        default:</span></span>
<span class="line"><span style="color:#f6f6f4;">            return str;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param { string } str 待处理字符串</span></span>
<span class="line"><span style="color:#24292e;">     * @param  { number } type 去除空格类型 1-所有空格  2-前后空格  3-前空格 4-后空格 默认为1</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export function trim(str, type = 1) {</span></span>
<span class="line"><span style="color:#24292e;">       if (type &amp;&amp; type !== 1 &amp;&amp; type !== 2 &amp;&amp; type !== 3 &amp;&amp; type !== 4) return;</span></span>
<span class="line"><span style="color:#24292e;">       switch (type) {</span></span>
<span class="line"><span style="color:#24292e;">           case 1:</span></span>
<span class="line"><span style="color:#24292e;">               return str.replace(/\\s/g, &quot;&quot;);</span></span>
<span class="line"><span style="color:#24292e;">           case 2:</span></span>
<span class="line"><span style="color:#24292e;">               return str.replace(/(^\\s)|(\\s*$)/g, &quot;&quot;);</span></span>
<span class="line"><span style="color:#24292e;">           case 3:</span></span>
<span class="line"><span style="color:#24292e;">               return str.replace(/(^\\s)/g, &quot;&quot;);</span></span>
<span class="line"><span style="color:#24292e;">           case 4:</span></span>
<span class="line"><span style="color:#24292e;">           return str.replace(/(\\s$)/g, &quot;&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        default:</span></span>
<span class="line"><span style="color:#24292e;">            return str;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_159-大小写转换" tabindex="-1">159.大小写转换 <a class="header-anchor" href="#_159-大小写转换" aria-label="Permalink to &quot;159.大小写转换&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"> * @param { string } str 待转换的字符串</span></span>
<span class="line"><span style="color:#f6f6f4;"> * @param { number } type 1-全大写 2-全小写 3-首字母大写 其他-不转换</span></span>
<span class="line"><span style="color:#f6f6f4;">   */</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">export function turnCase(str, type) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    switch (type) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        case 1:</span></span>
<span class="line"><span style="color:#f6f6f4;">            return str.toUpperCase();</span></span>
<span class="line"><span style="color:#f6f6f4;">        case 2:</span></span>
<span class="line"><span style="color:#f6f6f4;">            return str.toLowerCase();</span></span>
<span class="line"><span style="color:#f6f6f4;">        case 3:</span></span>
<span class="line"><span style="color:#f6f6f4;">            return str[0].toUpperCase() + str.substr(1).toLowerCase();</span></span>
<span class="line"><span style="color:#f6f6f4;">        default:</span></span>
<span class="line"><span style="color:#f6f6f4;">            return str;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> * @param { string } str 待转换的字符串</span></span>
<span class="line"><span style="color:#24292e;"> * @param { number } type 1-全大写 2-全小写 3-首字母大写 其他-不转换</span></span>
<span class="line"><span style="color:#24292e;">   */</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export function turnCase(str, type) {</span></span>
<span class="line"><span style="color:#24292e;">    switch (type) {</span></span>
<span class="line"><span style="color:#24292e;">        case 1:</span></span>
<span class="line"><span style="color:#24292e;">            return str.toUpperCase();</span></span>
<span class="line"><span style="color:#24292e;">        case 2:</span></span>
<span class="line"><span style="color:#24292e;">            return str.toLowerCase();</span></span>
<span class="line"><span style="color:#24292e;">        case 3:</span></span>
<span class="line"><span style="color:#24292e;">            return str[0].toUpperCase() + str.substr(1).toLowerCase();</span></span>
<span class="line"><span style="color:#24292e;">        default:</span></span>
<span class="line"><span style="color:#24292e;">            return str;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_160-随机16进制颜色-hexcolor" tabindex="-1">160.随机16进制颜色 hexColor <a class="header-anchor" href="#_160-随机16进制颜色-hexcolor" aria-label="Permalink to &quot;160.随机16进制颜色 hexColor&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"> * 方法一</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export function hexColor() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    </span></span>
<span class="line"><span style="color:#f6f6f4;">       let str = &#39;#&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;">       let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, &#39;A&#39;, &#39;B&#39;, &#39;C&#39;, &#39;D&#39;, &#39;E&#39;, &#39;F&#39;];</span></span>
<span class="line"><span style="color:#f6f6f4;">       for (let i = 0; i &lt; 6; i++) {</span></span>
<span class="line"><span style="color:#f6f6f4;">           let index = Number.parseInt((Math.random() * 16).toString());</span></span>
<span class="line"><span style="color:#f6f6f4;">       str += arr[index]</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    return str;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> * 方法一</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export function hexColor() {</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">       let str = &#39;#&#39;;</span></span>
<span class="line"><span style="color:#24292e;">       let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, &#39;A&#39;, &#39;B&#39;, &#39;C&#39;, &#39;D&#39;, &#39;E&#39;, &#39;F&#39;];</span></span>
<span class="line"><span style="color:#24292e;">       for (let i = 0; i &lt; 6; i++) {</span></span>
<span class="line"><span style="color:#24292e;">           let index = Number.parseInt((Math.random() * 16).toString());</span></span>
<span class="line"><span style="color:#24292e;">       str += arr[index]</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    return str;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_161-随机16进制颜色-randomhexcolorcode" tabindex="-1">161.随机16进制颜色 randomHexColorCode <a class="header-anchor" href="#_161-随机16进制颜色-randomhexcolorcode" aria-label="Permalink to &quot;161.随机16进制颜色 randomHexColorCode&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * 方法二</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">   export const randomHexColorCode = () =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">    let n = (Math.random() * 0xfffff * 1000000).toString(16);</span></span>
<span class="line"><span style="color:#f6f6f4;">    return &#39;#&#39; + n.slice(0, 6);</span></span>
<span class="line"><span style="color:#f6f6f4;">    };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * 方法二</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">   export const randomHexColorCode = () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    let n = (Math.random() * 0xfffff * 1000000).toString(16);</span></span>
<span class="line"><span style="color:#24292e;">    return &#39;#&#39; + n.slice(0, 6);</span></span>
<span class="line"><span style="color:#24292e;">    };</span></span></code></pre></div><h2 id="_162-转义html-防xss攻击" tabindex="-1">162.转义html(防XSS攻击) <a class="header-anchor" href="#_162-转义html-防xss攻击" aria-label="Permalink to &quot;162.转义html(防XSS攻击)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">export const escapeHTML = str =&gt;{</span></span>
<span class="line"><span style="color:#f6f6f4;">    str.replace(</span></span>
<span class="line"><span style="color:#f6f6f4;">        /[&amp;&lt;&gt;&#39;&quot;]/g,</span></span>
<span class="line"><span style="color:#f6f6f4;">        tag =&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            ({</span></span>
<span class="line"><span style="color:#f6f6f4;">                &#39;&amp;&#39;: &#39;&amp;amp;&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">                &#39;&lt;&#39;: &#39;&amp;lt;&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">                &#39;&gt;&#39;: &#39;&amp;gt;&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">                &quot;&#39;&quot;: &#39;&amp;#39;&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">                &#39;&quot;&#39;: &#39;&amp;quot;&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">            }[tag] || tag)</span></span>
<span class="line"><span style="color:#f6f6f4;">    );</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export const escapeHTML = str =&gt;{</span></span>
<span class="line"><span style="color:#24292e;">    str.replace(</span></span>
<span class="line"><span style="color:#24292e;">        /[&amp;&lt;&gt;&#39;&quot;]/g,</span></span>
<span class="line"><span style="color:#24292e;">        tag =&gt;</span></span>
<span class="line"><span style="color:#24292e;">            ({</span></span>
<span class="line"><span style="color:#24292e;">                &#39;&amp;&#39;: &#39;&amp;amp;&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                &#39;&lt;&#39;: &#39;&amp;lt;&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                &#39;&gt;&#39;: &#39;&amp;gt;&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                &quot;&#39;&quot;: &#39;&amp;#39;&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                &#39;&quot;&#39;: &#39;&amp;quot;&#39;</span></span>
<span class="line"><span style="color:#24292e;">            }[tag] || tag)</span></span>
<span class="line"><span style="color:#24292e;">    );</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><h2 id="_163-检测移动-pc设备" tabindex="-1">163.检测移动/PC设备 <a class="header-anchor" href="#_163-检测移动-pc设备" aria-label="Permalink to &quot;163.检测移动/PC设备&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">export const detectDeviceType = () =&gt; { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? &#39;Mobile&#39; : &#39;Desktop&#39;; };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export const detectDeviceType = () =&gt; { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? &#39;Mobile&#39; : &#39;Desktop&#39;; };</span></span></code></pre></div><h2 id="_164-隐藏所有指定标签" tabindex="-1">164.隐藏所有指定标签 <a class="header-anchor" href="#_164-隐藏所有指定标签" aria-label="Permalink to &quot;164.隐藏所有指定标签&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">  * 例: hide(document.querySelectorAll(&#39;img&#39;))</span></span>
<span class="line"><span style="color:#f6f6f4;">    */</span></span>
<span class="line"><span style="color:#f6f6f4;">    export const hideTag = (...el) =&gt; [...el].forEach(e =&gt; (e.style.display = &#39;none&#39;));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">  * 例: hide(document.querySelectorAll(&#39;img&#39;))</span></span>
<span class="line"><span style="color:#24292e;">    */</span></span>
<span class="line"><span style="color:#24292e;">    export const hideTag = (...el) =&gt; [...el].forEach(e =&gt; (e.style.display = &#39;none&#39;));</span></span></code></pre></div><h2 id="_165-返回指定元素的生效样式" tabindex="-1">165.返回指定元素的生效样式 <a class="header-anchor" href="#_165-返回指定元素的生效样式" aria-label="Permalink to &quot;165.返回指定元素的生效样式&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">  * @param { element} el  元素节点</span></span>
<span class="line"><span style="color:#f6f6f4;">  * @param { string } ruleName  指定元素的名称</span></span>
<span class="line"><span style="color:#f6f6f4;">    */</span></span>
<span class="line"><span style="color:#f6f6f4;">    export const getStyle = (el, ruleName) =&gt; getComputedStyle(el)[ruleName];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">  * @param { element} el  元素节点</span></span>
<span class="line"><span style="color:#24292e;">  * @param { string } ruleName  指定元素的名称</span></span>
<span class="line"><span style="color:#24292e;">    */</span></span>
<span class="line"><span style="color:#24292e;">    export const getStyle = (el, ruleName) =&gt; getComputedStyle(el)[ruleName];</span></span></code></pre></div><h2 id="_166-检查是否包含子元素" tabindex="-1">166.检查是否包含子元素 <a class="header-anchor" href="#_166-检查是否包含子元素" aria-label="Permalink to &quot;166.检查是否包含子元素&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">  * @param { element } parent</span></span>
<span class="line"><span style="color:#f6f6f4;">  * @param { element } child</span></span>
<span class="line"><span style="color:#f6f6f4;">  * 例：elementContains(document.querySelector(&#39;head&#39;), document.querySelector(&#39;title&#39;)); // true</span></span>
<span class="line"><span style="color:#f6f6f4;">    */</span></span>
<span class="line"><span style="color:#f6f6f4;">    export const elementContains = (parent, child) =&gt; parent !== child &amp;&amp; parent.contains(child);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">  * @param { element } parent</span></span>
<span class="line"><span style="color:#24292e;">  * @param { element } child</span></span>
<span class="line"><span style="color:#24292e;">  * 例：elementContains(document.querySelector(&#39;head&#39;), document.querySelector(&#39;title&#39;)); // true</span></span>
<span class="line"><span style="color:#24292e;">    */</span></span>
<span class="line"><span style="color:#24292e;">    export const elementContains = (parent, child) =&gt; parent !== child &amp;&amp; parent.contains(child);</span></span></code></pre></div><h2 id="_167-数字超过规定大小加上加号-如数字超过99显示99" tabindex="-1">167.数字超过规定大小加上加号“+”，如数字超过99显示99+ <a class="header-anchor" href="#_167-数字超过规定大小加上加号-如数字超过99显示99" aria-label="Permalink to &quot;167.数字超过规定大小加上加号“+”，如数字超过99显示99+&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { number } val 输入的数字</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param { number } maxNum 数字规定界限</span></span>
<span class="line"><span style="color:#f6f6f4;">       */</span></span>
<span class="line"><span style="color:#f6f6f4;">       export const outOfNum = (val, maxNum) =&gt;{</span></span>
<span class="line"><span style="color:#f6f6f4;">       val = val ? val-0 :0;</span></span>
<span class="line"><span style="color:#f6f6f4;">       if (val &gt; maxNum ) {</span></span>
<span class="line"><span style="color:#f6f6f4;">       return \`\${maxNum}+\`</span></span>
<span class="line"><span style="color:#f6f6f4;">    }else{</span></span>
<span class="line"><span style="color:#f6f6f4;">        return val;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * @param { number } val 输入的数字</span></span>
<span class="line"><span style="color:#24292e;">     * @param { number } maxNum 数字规定界限</span></span>
<span class="line"><span style="color:#24292e;">       */</span></span>
<span class="line"><span style="color:#24292e;">       export const outOfNum = (val, maxNum) =&gt;{</span></span>
<span class="line"><span style="color:#24292e;">       val = val ? val-0 :0;</span></span>
<span class="line"><span style="color:#24292e;">       if (val &gt; maxNum ) {</span></span>
<span class="line"><span style="color:#24292e;">       return \`\${maxNum}+\`</span></span>
<span class="line"><span style="color:#24292e;">    }else{</span></span>
<span class="line"><span style="color:#24292e;">        return val;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    };</span></span></code></pre></div><h2 id="_168-如何隐藏所有指定的元素" tabindex="-1">168.如何隐藏所有指定的元素 <a class="header-anchor" href="#_168-如何隐藏所有指定的元素" aria-label="Permalink to &quot;168.如何隐藏所有指定的元素&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const hide = (el) =&gt; Array.from(el).forEach(e =&gt; (e.style.display = &#39;none&#39;));</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // 事例:隐藏页面上所有\`&lt;img&gt;\`元素?</span></span>
<span class="line"><span style="color:#f6f6f4;"> hide(document.querySelectorAll(&#39;img&#39;))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const hide = (el) =&gt; Array.from(el).forEach(e =&gt; (e.style.display = &#39;none&#39;));</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // 事例:隐藏页面上所有\`&lt;img&gt;\`元素?</span></span>
<span class="line"><span style="color:#24292e;"> hide(document.querySelectorAll(&#39;img&#39;))</span></span></code></pre></div><h2 id="_169-如何检查元素是否具有指定的类" tabindex="-1">169.如何检查元素是否具有指定的类？ <a class="header-anchor" href="#_169-如何检查元素是否具有指定的类" aria-label="Permalink to &quot;169.如何检查元素是否具有指定的类？&quot;">​</a></h2><p>页面DOM里的每个节点上都有一个classList对象，程序员可以使用里面的方法新增、删除、修改节点上的CSS类。使用classList，程序员还可以用它来判断某个节点是否被赋予了某个CSS类。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const hasClass = (el, className) =&gt; el.classList.contains(className)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // 事例</span></span>
<span class="line"><span style="color:#f6f6f4;"> hasClass(document.querySelector(&#39;p.special&#39;), &#39;special&#39;) // true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const hasClass = (el, className) =&gt; el.classList.contains(className)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // 事例</span></span>
<span class="line"><span style="color:#24292e;"> hasClass(document.querySelector(&#39;p.special&#39;), &#39;special&#39;) // true</span></span></code></pre></div><h2 id="_170-如何切换一个元素的类" tabindex="-1">170.如何切换一个元素的类? <a class="header-anchor" href="#_170-如何切换一个元素的类" aria-label="Permalink to &quot;170.如何切换一个元素的类?&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const toggleClass = (el, className) =&gt; el.classList.toggle(className)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // 事例 移除 p 具有类\`special\`的 special 类</span></span>
<span class="line"><span style="color:#f6f6f4;"> toggleClass(document.querySelector(&#39;p.special&#39;), &#39;special&#39;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const toggleClass = (el, className) =&gt; el.classList.toggle(className)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // 事例 移除 p 具有类\`special\`的 special 类</span></span>
<span class="line"><span style="color:#24292e;"> toggleClass(document.querySelector(&#39;p.special&#39;), &#39;special&#39;)</span></span></code></pre></div><h2 id="_171-如何获取当前页面的滚动位置" tabindex="-1">171.如何获取当前页面的滚动位置？ <a class="header-anchor" href="#_171-如何获取当前页面的滚动位置" aria-label="Permalink to &quot;171.如何获取当前页面的滚动位置？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const getScrollPosition = (el = window) =&gt; ({</span></span>
<span class="line"><span style="color:#f6f6f4;">   x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,</span></span>
<span class="line"><span style="color:#f6f6f4;">   y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop</span></span>
<span class="line"><span style="color:#f6f6f4;"> });</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // 事例</span></span>
<span class="line"><span style="color:#f6f6f4;"> getScrollPosition(); // {x: 0, y: 200}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const getScrollPosition = (el = window) =&gt; ({</span></span>
<span class="line"><span style="color:#24292e;">   x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,</span></span>
<span class="line"><span style="color:#24292e;">   y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop</span></span>
<span class="line"><span style="color:#24292e;"> });</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // 事例</span></span>
<span class="line"><span style="color:#24292e;"> getScrollPosition(); // {x: 0, y: 200}</span></span></code></pre></div><h2 id="_172-如何平滑滚动到页面顶部" tabindex="-1">172.如何平滑滚动到页面顶部 <a class="header-anchor" href="#_172-如何平滑滚动到页面顶部" aria-label="Permalink to &quot;172.如何平滑滚动到页面顶部&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const scrollToTop = () =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">   const c = document.documentElement.scrollTop || document.body.scrollTop;</span></span>
<span class="line"><span style="color:#f6f6f4;">   if (c &gt; 0) {</span></span>
<span class="line"><span style="color:#f6f6f4;">     window.requestAnimationFrame(scrollToTop);</span></span>
<span class="line"><span style="color:#f6f6f4;">     window.scrollTo(0, c - c / 8);</span></span>
<span class="line"><span style="color:#f6f6f4;">   }</span></span>
<span class="line"><span style="color:#f6f6f4;"> }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // 事例</span></span>
<span class="line"><span style="color:#f6f6f4;"> scrollToTop()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const scrollToTop = () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">   const c = document.documentElement.scrollTop || document.body.scrollTop;</span></span>
<span class="line"><span style="color:#24292e;">   if (c &gt; 0) {</span></span>
<span class="line"><span style="color:#24292e;">     window.requestAnimationFrame(scrollToTop);</span></span>
<span class="line"><span style="color:#24292e;">     window.scrollTo(0, c - c / 8);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // 事例</span></span>
<span class="line"><span style="color:#24292e;"> scrollToTop()</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。</span></span>
<span class="line"><span style="color:#f6f6f4;"> requestAnimationFrame：优势：由系统决定回调函数的执行时机。60Hz的刷新频率，那么每次刷新的间隔中会执行一次回调函数，不会引起丢帧，不会卡顿。</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。</span></span>
<span class="line"><span style="color:#f6f6f4;"> requestAnimationFrame：优势：由系统决定回调函数的执行时机。60Hz的刷新频率，那么每次刷新的间隔中会执行一次回调函数，不会引起丢帧，不会卡顿。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。</span></span>
<span class="line"><span style="color:#24292e;"> requestAnimationFrame：优势：由系统决定回调函数的执行时机。60Hz的刷新频率，那么每次刷新的间隔中会执行一次回调函数，不会引起丢帧，不会卡顿。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。</span></span>
<span class="line"><span style="color:#24292e;"> requestAnimationFrame：优势：由系统决定回调函数的执行时机。60Hz的刷新频率，那么每次刷新的间隔中会执行一次回调函数，不会引起丢帧，不会卡顿。</span></span></code></pre></div><h2 id="_173-如何检查父元素是否包含子元素" tabindex="-1">173.如何检查父元素是否包含子元素？ <a class="header-anchor" href="#_173-如何检查父元素是否包含子元素" aria-label="Permalink to &quot;173.如何检查父元素是否包含子元素？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const elementContains = (parent, child) =&gt; parent !== child &amp;&amp; parent.contains(child);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // 事例</span></span>
<span class="line"><span style="color:#f6f6f4;"> elementContains(document.querySelector(&#39;head&#39;), document.querySelector(&#39;title&#39;)); </span></span>
<span class="line"><span style="color:#f6f6f4;"> // true</span></span>
<span class="line"><span style="color:#f6f6f4;"> elementContains(document.querySelector(&#39;body&#39;), document.querySelector(&#39;body&#39;)); </span></span>
<span class="line"><span style="color:#f6f6f4;"> // false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const elementContains = (parent, child) =&gt; parent !== child &amp;&amp; parent.contains(child);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // 事例</span></span>
<span class="line"><span style="color:#24292e;"> elementContains(document.querySelector(&#39;head&#39;), document.querySelector(&#39;title&#39;)); </span></span>
<span class="line"><span style="color:#24292e;"> // true</span></span>
<span class="line"><span style="color:#24292e;"> elementContains(document.querySelector(&#39;body&#39;), document.querySelector(&#39;body&#39;)); </span></span>
<span class="line"><span style="color:#24292e;"> // false</span></span></code></pre></div><h2 id="_174-如何检查指定的元素在视口中是否可见" tabindex="-1">174.如何检查指定的元素在视口中是否可见？ <a class="header-anchor" href="#_174-如何检查指定的元素在视口中是否可见" aria-label="Permalink to &quot;174.如何检查指定的元素在视口中是否可见？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const elementIsVisibleInViewport = (el, partiallyVisible = false) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">   const { top, left, bottom, right } = el.getBoundingClientRect();</span></span>
<span class="line"><span style="color:#f6f6f4;">   const { innerHeight, innerWidth } = window;</span></span>
<span class="line"><span style="color:#f6f6f4;">   return partiallyVisible</span></span>
<span class="line"><span style="color:#f6f6f4;">     ? ((top &gt; 0 &amp;&amp; top &lt; innerHeight) || (bottom &gt; 0 &amp;&amp; bottom &lt; innerHeight)) &amp;&amp;</span></span>
<span class="line"><span style="color:#f6f6f4;">         ((left &gt; 0 &amp;&amp; left &lt; innerWidth) || (right &gt; 0 &amp;&amp; right &lt; innerWidth))</span></span>
<span class="line"><span style="color:#f6f6f4;">     : top &gt;= 0 &amp;&amp; left &gt;= 0 &amp;&amp; bottom &lt;= innerHeight &amp;&amp; right &lt;= innerWidth;</span></span>
<span class="line"><span style="color:#f6f6f4;"> };</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // 事例</span></span>
<span class="line"><span style="color:#f6f6f4;"> elementIsVisibleInViewport(el); // 需要左右可见</span></span>
<span class="line"><span style="color:#f6f6f4;"> elementIsVisibleInViewport(el, true); // 需要全屏(上下左右)可以见</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const elementIsVisibleInViewport = (el, partiallyVisible = false) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">   const { top, left, bottom, right } = el.getBoundingClientRect();</span></span>
<span class="line"><span style="color:#24292e;">   const { innerHeight, innerWidth } = window;</span></span>
<span class="line"><span style="color:#24292e;">   return partiallyVisible</span></span>
<span class="line"><span style="color:#24292e;">     ? ((top &gt; 0 &amp;&amp; top &lt; innerHeight) || (bottom &gt; 0 &amp;&amp; bottom &lt; innerHeight)) &amp;&amp;</span></span>
<span class="line"><span style="color:#24292e;">         ((left &gt; 0 &amp;&amp; left &lt; innerWidth) || (right &gt; 0 &amp;&amp; right &lt; innerWidth))</span></span>
<span class="line"><span style="color:#24292e;">     : top &gt;= 0 &amp;&amp; left &gt;= 0 &amp;&amp; bottom &lt;= innerHeight &amp;&amp; right &lt;= innerWidth;</span></span>
<span class="line"><span style="color:#24292e;"> };</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // 事例</span></span>
<span class="line"><span style="color:#24292e;"> elementIsVisibleInViewport(el); // 需要左右可见</span></span>
<span class="line"><span style="color:#24292e;"> elementIsVisibleInViewport(el, true); // 需要全屏(上下左右)可以见</span></span></code></pre></div><h2 id="_175-如何获取元素中的所有图像" tabindex="-1">175.如何获取元素中的所有图像？ <a class="header-anchor" href="#_175-如何获取元素中的所有图像" aria-label="Permalink to &quot;175.如何获取元素中的所有图像？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const getImages = (el, includeDuplicates = false) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">   const images = [...el.getElementsByTagName(&#39;img&#39;)].map(img =&gt; img.getAttribute(&#39;src&#39;));</span></span>
<span class="line"><span style="color:#f6f6f4;">   return includeDuplicates ? images : [...new Set(images)];</span></span>
<span class="line"><span style="color:#f6f6f4;"> };</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // 事例：includeDuplicates 为 true 表示需要排除重复元素</span></span>
<span class="line"><span style="color:#f6f6f4;"> getImages(document, true); // [&#39;image1.jpg&#39;, &#39;image2.png&#39;, &#39;image1.png&#39;, &#39;...&#39;]</span></span>
<span class="line"><span style="color:#f6f6f4;"> getImages(document, false); // [&#39;image1.jpg&#39;, &#39;image2.png&#39;, &#39;...&#39;]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const getImages = (el, includeDuplicates = false) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">   const images = [...el.getElementsByTagName(&#39;img&#39;)].map(img =&gt; img.getAttribute(&#39;src&#39;));</span></span>
<span class="line"><span style="color:#24292e;">   return includeDuplicates ? images : [...new Set(images)];</span></span>
<span class="line"><span style="color:#24292e;"> };</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // 事例：includeDuplicates 为 true 表示需要排除重复元素</span></span>
<span class="line"><span style="color:#24292e;"> getImages(document, true); // [&#39;image1.jpg&#39;, &#39;image2.png&#39;, &#39;image1.png&#39;, &#39;...&#39;]</span></span>
<span class="line"><span style="color:#24292e;"> getImages(document, false); // [&#39;image1.jpg&#39;, &#39;image2.png&#39;, &#39;...&#39;]</span></span></code></pre></div><h2 id="_176-如何确定设备是移动设备还是台式机-笔记本电脑" tabindex="-1">176.如何确定设备是移动设备还是台式机/笔记本电脑？ <a class="header-anchor" href="#_176-如何确定设备是移动设备还是台式机-笔记本电脑" aria-label="Permalink to &quot;176.如何确定设备是移动设备还是台式机/笔记本电脑？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const detectDeviceType = () =&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)</span></span>
<span class="line"><span style="color:#f6f6f4;">     ? &#39;Mobile&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">     : &#39;Desktop&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // 事例</span></span>
<span class="line"><span style="color:#f6f6f4;"> detectDeviceType(); // &quot;Mobile&quot; or &quot;Desktop&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const detectDeviceType = () =&gt;</span></span>
<span class="line"><span style="color:#24292e;">   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)</span></span>
<span class="line"><span style="color:#24292e;">     ? &#39;Mobile&#39;</span></span>
<span class="line"><span style="color:#24292e;">     : &#39;Desktop&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // 事例</span></span>
<span class="line"><span style="color:#24292e;"> detectDeviceType(); // &quot;Mobile&quot; or &quot;Desktop&quot;</span></span></code></pre></div><h2 id="_177-how-to-get-the-current-url" tabindex="-1">177.How to get the current URL? <a class="header-anchor" href="#_177-how-to-get-the-current-url" aria-label="Permalink to &quot;177.How to get the current URL?&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const currentURL = () =&gt; window.location.href</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // 事例</span></span>
<span class="line"><span style="color:#f6f6f4;"> currentURL() // &#39;https://google.com&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const currentURL = () =&gt; window.location.href</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // 事例</span></span>
<span class="line"><span style="color:#24292e;"> currentURL() // &#39;https://google.com&#39;</span></span></code></pre></div><h2 id="_178-如何创建一个包含当前url参数的对象" tabindex="-1">178.如何创建一个包含当前URL参数的对象？ <a class="header-anchor" href="#_178-如何创建一个包含当前url参数的对象" aria-label="Permalink to &quot;178.如何创建一个包含当前URL参数的对象？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const getURLParameters = url =&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">   (url.match(/([^?=&amp;]+)(=([^&amp;]*))/g) || []).reduce(</span></span>
<span class="line"><span style="color:#f6f6f4;">     (a, v) =&gt; ((a[v.slice(0, v.indexOf(&#39;=&#39;))] = v.slice(v.indexOf(&#39;=&#39;) + 1)), a),</span></span>
<span class="line"><span style="color:#f6f6f4;">     {}</span></span>
<span class="line"><span style="color:#f6f6f4;">   );</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // 事例</span></span>
<span class="line"><span style="color:#f6f6f4;"> getURLParameters(&#39;http://url.com/page?n=Adam&amp;s=Smith&#39;); // {n: &#39;Adam&#39;, s: &#39;Smith&#39;}</span></span>
<span class="line"><span style="color:#f6f6f4;"> getURLParameters(&#39;google.com&#39;); // {}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const getURLParameters = url =&gt;</span></span>
<span class="line"><span style="color:#24292e;">   (url.match(/([^?=&amp;]+)(=([^&amp;]*))/g) || []).reduce(</span></span>
<span class="line"><span style="color:#24292e;">     (a, v) =&gt; ((a[v.slice(0, v.indexOf(&#39;=&#39;))] = v.slice(v.indexOf(&#39;=&#39;) + 1)), a),</span></span>
<span class="line"><span style="color:#24292e;">     {}</span></span>
<span class="line"><span style="color:#24292e;">   );</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // 事例</span></span>
<span class="line"><span style="color:#24292e;"> getURLParameters(&#39;http://url.com/page?n=Adam&amp;s=Smith&#39;); // {n: &#39;Adam&#39;, s: &#39;Smith&#39;}</span></span>
<span class="line"><span style="color:#24292e;"> getURLParameters(&#39;google.com&#39;); // {}</span></span></code></pre></div><h2 id="_179-如何将一组表单元素转化为对象" tabindex="-1">179.如何将一组表单元素转化为对象？ <a class="header-anchor" href="#_179-如何将一组表单元素转化为对象" aria-label="Permalink to &quot;179.如何将一组表单元素转化为对象？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const formToObject = form =&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">   Array.from(new FormData(form)).reduce(</span></span>
<span class="line"><span style="color:#f6f6f4;">     (acc, [key, value]) =&gt; ({</span></span>
<span class="line"><span style="color:#f6f6f4;">       ...acc,</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">[key]: value</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">​     }),</span></span>
<span class="line"><span style="color:#f6f6f4;">​     {}</span></span>
<span class="line"><span style="color:#f6f6f4;">   );</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // 事例</span></span>
<span class="line"><span style="color:#f6f6f4;"> formToObject(document.querySelector(&#39;#form&#39;)); </span></span>
<span class="line"><span style="color:#f6f6f4;"> // { email: &#39;test@email.com&#39;, name: &#39;Test Name&#39; }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const formToObject = form =&gt;</span></span>
<span class="line"><span style="color:#24292e;">   Array.from(new FormData(form)).reduce(</span></span>
<span class="line"><span style="color:#24292e;">     (acc, [key, value]) =&gt; ({</span></span>
<span class="line"><span style="color:#24292e;">       ...acc,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">[key]: value</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​     }),</span></span>
<span class="line"><span style="color:#24292e;">​     {}</span></span>
<span class="line"><span style="color:#24292e;">   );</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // 事例</span></span>
<span class="line"><span style="color:#24292e;"> formToObject(document.querySelector(&#39;#form&#39;)); </span></span>
<span class="line"><span style="color:#24292e;"> // { email: &#39;test@email.com&#39;, name: &#39;Test Name&#39; }</span></span></code></pre></div><h2 id="_180-如何从对象检索给定选择器指示的一组属性" tabindex="-1">180.如何从对象检索给定选择器指示的一组属性？ <a class="header-anchor" href="#_180-如何从对象检索给定选择器指示的一组属性" aria-label="Permalink to &quot;180.如何从对象检索给定选择器指示的一组属性？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const get = (from, ...selectors) =&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">   [...selectors].map(s =&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">     s</span></span>
<span class="line"><span style="color:#f6f6f4;">       .replace(/\\[([^\\[\\]]*)\\]/g, &#39;.$1.&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">       .split(&#39;.&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">       .filter(t =&gt; t !== &#39;&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">       .reduce((prev, cur) =&gt; prev &amp;&amp; prev[cur], from)</span></span>
<span class="line"><span style="color:#f6f6f4;">   );</span></span>
<span class="line"><span style="color:#f6f6f4;"> const obj = { selector: { to: { val: &#39;val to select&#39; } }, target: [1, 2, { a: &#39;test&#39; }] };</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // Example</span></span>
<span class="line"><span style="color:#f6f6f4;"> get(obj, &#39;selector.to.val&#39;, &#39;target[0]&#39;, &#39;target[2].a&#39;); </span></span>
<span class="line"><span style="color:#f6f6f4;"> // [&#39;val to select&#39;, 1, &#39;test&#39;]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const get = (from, ...selectors) =&gt;</span></span>
<span class="line"><span style="color:#24292e;">   [...selectors].map(s =&gt;</span></span>
<span class="line"><span style="color:#24292e;">     s</span></span>
<span class="line"><span style="color:#24292e;">       .replace(/\\[([^\\[\\]]*)\\]/g, &#39;.$1.&#39;)</span></span>
<span class="line"><span style="color:#24292e;">       .split(&#39;.&#39;)</span></span>
<span class="line"><span style="color:#24292e;">       .filter(t =&gt; t !== &#39;&#39;)</span></span>
<span class="line"><span style="color:#24292e;">       .reduce((prev, cur) =&gt; prev &amp;&amp; prev[cur], from)</span></span>
<span class="line"><span style="color:#24292e;">   );</span></span>
<span class="line"><span style="color:#24292e;"> const obj = { selector: { to: { val: &#39;val to select&#39; } }, target: [1, 2, { a: &#39;test&#39; }] };</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // Example</span></span>
<span class="line"><span style="color:#24292e;"> get(obj, &#39;selector.to.val&#39;, &#39;target[0]&#39;, &#39;target[2].a&#39;); </span></span>
<span class="line"><span style="color:#24292e;"> // [&#39;val to select&#39;, 1, &#39;test&#39;]</span></span></code></pre></div><h2 id="_181-如何在等待指定时间后调用提供的函数" tabindex="-1">181.如何在等待指定时间后调用提供的函数？ <a class="header-anchor" href="#_181-如何在等待指定时间后调用提供的函数" aria-label="Permalink to &quot;181.如何在等待指定时间后调用提供的函数？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const delay = (fn, wait, ...args) =&gt; setTimeout(fn, wait, ...args);</span></span>
<span class="line"><span style="color:#f6f6f4;"> delay(</span></span>
<span class="line"><span style="color:#f6f6f4;">   function(text) {</span></span>
<span class="line"><span style="color:#f6f6f4;">     console.log(text);</span></span>
<span class="line"><span style="color:#f6f6f4;">   },</span></span>
<span class="line"><span style="color:#f6f6f4;">   1000,</span></span>
<span class="line"><span style="color:#f6f6f4;">   &#39;later&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;"> ); </span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // 1秒后打印 &#39;later&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const delay = (fn, wait, ...args) =&gt; setTimeout(fn, wait, ...args);</span></span>
<span class="line"><span style="color:#24292e;"> delay(</span></span>
<span class="line"><span style="color:#24292e;">   function(text) {</span></span>
<span class="line"><span style="color:#24292e;">     console.log(text);</span></span>
<span class="line"><span style="color:#24292e;">   },</span></span>
<span class="line"><span style="color:#24292e;">   1000,</span></span>
<span class="line"><span style="color:#24292e;">   &#39;later&#39;</span></span>
<span class="line"><span style="color:#24292e;"> ); </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // 1秒后打印 &#39;later&#39;</span></span></code></pre></div><h2 id="_182-如何在给定元素上触发特定事件且能选择地传递自定义数据" tabindex="-1">182.如何在给定元素上触发特定事件且能选择地传递自定义数据？ <a class="header-anchor" href="#_182-如何在给定元素上触发特定事件且能选择地传递自定义数据" aria-label="Permalink to &quot;182.如何在给定元素上触发特定事件且能选择地传递自定义数据？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const triggerEvent = (el, eventType, detail) =&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">   el.dispatchEvent(new CustomEvent(eventType, { detail }));</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // 事例</span></span>
<span class="line"><span style="color:#f6f6f4;"> triggerEvent(document.getElementById(&#39;myId&#39;), &#39;click&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;"> triggerEvent(document.getElementById(&#39;myId&#39;), &#39;click&#39;, { username: &#39;bob&#39; });</span></span>
<span class="line"><span style="color:#f6f6f4;">自定义事件的函数有 Event、CustomEvent 和 dispatchEvent</span></span>
<span class="line"><span style="color:#f6f6f4;"> // 向 window派发一个resize内置事件</span></span>
<span class="line"><span style="color:#f6f6f4;"> window.dispatchEvent(new Event(&#39;resize&#39;))</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // 直接自定义事件，使用 Event 构造函数：</span></span>
<span class="line"><span style="color:#f6f6f4;"> var event = new Event(&#39;build&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;"> var elem = document.querySelector(&#39;#id&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;"> // 监听事件</span></span>
<span class="line"><span style="color:#f6f6f4;"> elem.addEventListener(&#39;build&#39;, function (e) { ... }, false);</span></span>
<span class="line"><span style="color:#f6f6f4;"> // 触发事件.</span></span>
<span class="line"><span style="color:#f6f6f4;"> elem.dispatchEvent(event);</span></span>
<span class="line"><span style="color:#f6f6f4;">CustomEvent 可以创建一个更高度自定义事件，还可以附带一些数据，具体用法如下：</span></span>
<span class="line"><span style="color:#f6f6f4;"> var myEvent = new CustomEvent(eventname, options);</span></span>
<span class="line"><span style="color:#f6f6f4;"> 其中 options 可以是：</span></span>
<span class="line"><span style="color:#f6f6f4;"> {</span></span>
<span class="line"><span style="color:#f6f6f4;">   detail: {</span></span>
<span class="line"><span style="color:#f6f6f4;">     ...</span></span>
<span class="line"><span style="color:#f6f6f4;">   },</span></span>
<span class="line"><span style="color:#f6f6f4;">   bubbles: true,    //是否冒泡</span></span>
<span class="line"><span style="color:#f6f6f4;">   cancelable: false //是否取消默认事件</span></span>
<span class="line"><span style="color:#f6f6f4;"> }</span></span>
<span class="line"><span style="color:#f6f6f4;">其中 detail 可以存放一些初始化的信息，可以在触发的时候调用。其他属性就是定义该事件是否具有冒泡等等功能。</span></span>
<span class="line"><span style="color:#f6f6f4;"> 内置的事件会由浏览器根据某些操作进行触发，自定义的事件就需要人工触发。</span></span>
<span class="line"><span style="color:#f6f6f4;"> dispatchEvent 函数就是用来触发某个事件：</span></span>
<span class="line"><span style="color:#f6f6f4;"> element.dispatchEvent(customEvent);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> 上面代码表示，在 element 上面触发 customEvent 这个事件。</span></span>
<span class="line"><span style="color:#f6f6f4;"> // add an appropriate event listener</span></span>
<span class="line"><span style="color:#f6f6f4;"> obj.addEventListener(&quot;cat&quot;, function(e) { process(e.detail) });</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // create and dispatch the event</span></span>
<span class="line"><span style="color:#f6f6f4;"> var event = new CustomEvent(&quot;cat&quot;, {&quot;detail&quot;:{&quot;hazcheeseburger&quot;:true}});</span></span>
<span class="line"><span style="color:#f6f6f4;"> obj.dispatchEvent(event);</span></span>
<span class="line"><span style="color:#f6f6f4;"> 使用自定义事件需要注意兼容性问题，而使用 jQuery 就简单多了：</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // 绑定自定义事件</span></span>
<span class="line"><span style="color:#f6f6f4;"> $(element).on(&#39;myCustomEvent&#39;, function(){});</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // 触发事件</span></span>
<span class="line"><span style="color:#f6f6f4;"> $(element).trigger(&#39;myCustomEvent&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;"> // 此外，你还可以在触发自定义事件时传递更多参数信息：</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> $( &quot;p&quot; ).on( &quot;myCustomEvent&quot;, function( event, myName ) {</span></span>
<span class="line"><span style="color:#f6f6f4;">   $( this ).text( myName + &quot;, hi there!&quot; );</span></span>
<span class="line"><span style="color:#f6f6f4;"> });</span></span>
<span class="line"><span style="color:#f6f6f4;"> $( &quot;button&quot; ).click(function () {</span></span>
<span class="line"><span style="color:#f6f6f4;">   $( &quot;p&quot; ).trigger( &quot;myCustomEvent&quot;, [ &quot;John&quot; ] );</span></span>
<span class="line"><span style="color:#f6f6f4;"> });</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const triggerEvent = (el, eventType, detail) =&gt;</span></span>
<span class="line"><span style="color:#24292e;">   el.dispatchEvent(new CustomEvent(eventType, { detail }));</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // 事例</span></span>
<span class="line"><span style="color:#24292e;"> triggerEvent(document.getElementById(&#39;myId&#39;), &#39;click&#39;);</span></span>
<span class="line"><span style="color:#24292e;"> triggerEvent(document.getElementById(&#39;myId&#39;), &#39;click&#39;, { username: &#39;bob&#39; });</span></span>
<span class="line"><span style="color:#24292e;">自定义事件的函数有 Event、CustomEvent 和 dispatchEvent</span></span>
<span class="line"><span style="color:#24292e;"> // 向 window派发一个resize内置事件</span></span>
<span class="line"><span style="color:#24292e;"> window.dispatchEvent(new Event(&#39;resize&#39;))</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // 直接自定义事件，使用 Event 构造函数：</span></span>
<span class="line"><span style="color:#24292e;"> var event = new Event(&#39;build&#39;);</span></span>
<span class="line"><span style="color:#24292e;"> var elem = document.querySelector(&#39;#id&#39;)</span></span>
<span class="line"><span style="color:#24292e;"> // 监听事件</span></span>
<span class="line"><span style="color:#24292e;"> elem.addEventListener(&#39;build&#39;, function (e) { ... }, false);</span></span>
<span class="line"><span style="color:#24292e;"> // 触发事件.</span></span>
<span class="line"><span style="color:#24292e;"> elem.dispatchEvent(event);</span></span>
<span class="line"><span style="color:#24292e;">CustomEvent 可以创建一个更高度自定义事件，还可以附带一些数据，具体用法如下：</span></span>
<span class="line"><span style="color:#24292e;"> var myEvent = new CustomEvent(eventname, options);</span></span>
<span class="line"><span style="color:#24292e;"> 其中 options 可以是：</span></span>
<span class="line"><span style="color:#24292e;"> {</span></span>
<span class="line"><span style="color:#24292e;">   detail: {</span></span>
<span class="line"><span style="color:#24292e;">     ...</span></span>
<span class="line"><span style="color:#24292e;">   },</span></span>
<span class="line"><span style="color:#24292e;">   bubbles: true,    //是否冒泡</span></span>
<span class="line"><span style="color:#24292e;">   cancelable: false //是否取消默认事件</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;">其中 detail 可以存放一些初始化的信息，可以在触发的时候调用。其他属性就是定义该事件是否具有冒泡等等功能。</span></span>
<span class="line"><span style="color:#24292e;"> 内置的事件会由浏览器根据某些操作进行触发，自定义的事件就需要人工触发。</span></span>
<span class="line"><span style="color:#24292e;"> dispatchEvent 函数就是用来触发某个事件：</span></span>
<span class="line"><span style="color:#24292e;"> element.dispatchEvent(customEvent);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> 上面代码表示，在 element 上面触发 customEvent 这个事件。</span></span>
<span class="line"><span style="color:#24292e;"> // add an appropriate event listener</span></span>
<span class="line"><span style="color:#24292e;"> obj.addEventListener(&quot;cat&quot;, function(e) { process(e.detail) });</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // create and dispatch the event</span></span>
<span class="line"><span style="color:#24292e;"> var event = new CustomEvent(&quot;cat&quot;, {&quot;detail&quot;:{&quot;hazcheeseburger&quot;:true}});</span></span>
<span class="line"><span style="color:#24292e;"> obj.dispatchEvent(event);</span></span>
<span class="line"><span style="color:#24292e;"> 使用自定义事件需要注意兼容性问题，而使用 jQuery 就简单多了：</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // 绑定自定义事件</span></span>
<span class="line"><span style="color:#24292e;"> $(element).on(&#39;myCustomEvent&#39;, function(){});</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // 触发事件</span></span>
<span class="line"><span style="color:#24292e;"> $(element).trigger(&#39;myCustomEvent&#39;);</span></span>
<span class="line"><span style="color:#24292e;"> // 此外，你还可以在触发自定义事件时传递更多参数信息：</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> $( &quot;p&quot; ).on( &quot;myCustomEvent&quot;, function( event, myName ) {</span></span>
<span class="line"><span style="color:#24292e;">   $( this ).text( myName + &quot;, hi there!&quot; );</span></span>
<span class="line"><span style="color:#24292e;"> });</span></span>
<span class="line"><span style="color:#24292e;"> $( &quot;button&quot; ).click(function () {</span></span>
<span class="line"><span style="color:#24292e;">   $( &quot;p&quot; ).trigger( &quot;myCustomEvent&quot;, [ &quot;John&quot; ] );</span></span>
<span class="line"><span style="color:#24292e;"> });</span></span></code></pre></div><h2 id="_183-如何从元素中移除事件监听器" tabindex="-1">183.如何从元素中移除事件监听器? <a class="header-anchor" href="#_183-如何从元素中移除事件监听器" aria-label="Permalink to &quot;183.如何从元素中移除事件监听器?&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const off = (el, evt, fn, opts = false) =&gt; el.removeEventListener(evt, fn, opts);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> const fn = () =&gt; console.log(&#39;!&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;"> document.body.addEventListener(&#39;click&#39;, fn);</span></span>
<span class="line"><span style="color:#f6f6f4;"> off(document.body, &#39;click&#39;, fn);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const off = (el, evt, fn, opts = false) =&gt; el.removeEventListener(evt, fn, opts);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> const fn = () =&gt; console.log(&#39;!&#39;);</span></span>
<span class="line"><span style="color:#24292e;"> document.body.addEventListener(&#39;click&#39;, fn);</span></span>
<span class="line"><span style="color:#24292e;"> off(document.body, &#39;click&#39;, fn);</span></span></code></pre></div><h2 id="_184-如何获得给定毫秒数的可读格式" tabindex="-1">184.如何获得给定毫秒数的可读格式？ <a class="header-anchor" href="#_184-如何获得给定毫秒数的可读格式" aria-label="Permalink to &quot;184.如何获得给定毫秒数的可读格式？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const formatDuration = ms =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">   if (ms &lt; 0) ms = -ms;</span></span>
<span class="line"><span style="color:#f6f6f4;">   const time = {</span></span>
<span class="line"><span style="color:#f6f6f4;">     day: Math.floor(ms / 86400000),</span></span>
<span class="line"><span style="color:#f6f6f4;">     hour: Math.floor(ms / 3600000) % 24,</span></span>
<span class="line"><span style="color:#f6f6f4;">     minute: Math.floor(ms / 60000) % 60,</span></span>
<span class="line"><span style="color:#f6f6f4;">     second: Math.floor(ms / 1000) % 60,</span></span>
<span class="line"><span style="color:#f6f6f4;">     millisecond: Math.floor(ms) % 1000</span></span>
<span class="line"><span style="color:#f6f6f4;">   };</span></span>
<span class="line"><span style="color:#f6f6f4;">   return Object.entries(time)</span></span>
<span class="line"><span style="color:#f6f6f4;">     .filter(val =&gt; val[1] !== 0)</span></span>
<span class="line"><span style="color:#f6f6f4;">     .map(([key, val]) =&gt; \`\${val} \${key}\${val !== 1 ? &#39;s&#39; : &#39;&#39;}\`)</span></span>
<span class="line"><span style="color:#f6f6f4;">     .join(&#39;, &#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;"> };</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // 事例</span></span>
<span class="line"><span style="color:#f6f6f4;"> formatDuration(1001); // &#39;1 second, 1 millisecond&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;"> formatDuration(34325055574); </span></span>
<span class="line"><span style="color:#f6f6f4;"> // &#39;397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const formatDuration = ms =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">   if (ms &lt; 0) ms = -ms;</span></span>
<span class="line"><span style="color:#24292e;">   const time = {</span></span>
<span class="line"><span style="color:#24292e;">     day: Math.floor(ms / 86400000),</span></span>
<span class="line"><span style="color:#24292e;">     hour: Math.floor(ms / 3600000) % 24,</span></span>
<span class="line"><span style="color:#24292e;">     minute: Math.floor(ms / 60000) % 60,</span></span>
<span class="line"><span style="color:#24292e;">     second: Math.floor(ms / 1000) % 60,</span></span>
<span class="line"><span style="color:#24292e;">     millisecond: Math.floor(ms) % 1000</span></span>
<span class="line"><span style="color:#24292e;">   };</span></span>
<span class="line"><span style="color:#24292e;">   return Object.entries(time)</span></span>
<span class="line"><span style="color:#24292e;">     .filter(val =&gt; val[1] !== 0)</span></span>
<span class="line"><span style="color:#24292e;">     .map(([key, val]) =&gt; \`\${val} \${key}\${val !== 1 ? &#39;s&#39; : &#39;&#39;}\`)</span></span>
<span class="line"><span style="color:#24292e;">     .join(&#39;, &#39;);</span></span>
<span class="line"><span style="color:#24292e;"> };</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // 事例</span></span>
<span class="line"><span style="color:#24292e;"> formatDuration(1001); // &#39;1 second, 1 millisecond&#39;</span></span>
<span class="line"><span style="color:#24292e;"> formatDuration(34325055574); </span></span>
<span class="line"><span style="color:#24292e;"> // &#39;397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds&#39;</span></span></code></pre></div><h2 id="_185-如何获得两个日期之间的差异-以天为单位" tabindex="-1">185.如何获得两个日期之间的差异（以天为单位）？ <a class="header-anchor" href="#_185-如何获得两个日期之间的差异-以天为单位" aria-label="Permalink to &quot;185.如何获得两个日期之间的差异（以天为单位）？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const getDaysDiffBetweenDates = (dateInitial, dateFinal) =&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">   (dateFinal - dateInitial) / (1000 * 3600 * 24);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // 事例</span></span>
<span class="line"><span style="color:#f6f6f4;"> getDaysDiffBetweenDates(new Date(&#39;2017-12-13&#39;), new Date(&#39;2017-12-22&#39;)); // 9</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const getDaysDiffBetweenDates = (dateInitial, dateFinal) =&gt;</span></span>
<span class="line"><span style="color:#24292e;">   (dateFinal - dateInitial) / (1000 * 3600 * 24);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // 事例</span></span>
<span class="line"><span style="color:#24292e;"> getDaysDiffBetweenDates(new Date(&#39;2017-12-13&#39;), new Date(&#39;2017-12-22&#39;)); // 9</span></span></code></pre></div><h2 id="_186-如何向传递的url发出get请求" tabindex="-1">186.如何向传递的URL发出GET请求？ <a class="header-anchor" href="#_186-如何向传递的url发出get请求" aria-label="Permalink to &quot;186.如何向传递的URL发出GET请求？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const httpGet = (url, callback, err = console.error) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">   const request = new XMLHttpRequest();</span></span>
<span class="line"><span style="color:#f6f6f4;">   request.open(&#39;GET&#39;, url, true);</span></span>
<span class="line"><span style="color:#f6f6f4;">   request.onload = () =&gt; callback(request.responseText);</span></span>
<span class="line"><span style="color:#f6f6f4;">   request.onerror = () =&gt; err(request);</span></span>
<span class="line"><span style="color:#f6f6f4;">   request.send();</span></span>
<span class="line"><span style="color:#f6f6f4;"> };</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> httpGet(</span></span>
<span class="line"><span style="color:#f6f6f4;">   &#39;https://jsonplaceholder.typicode.com/posts/1&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">   console.log</span></span>
<span class="line"><span style="color:#f6f6f4;"> ); </span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // {&quot;userId&quot;: 1, &quot;id&quot;: 1, &quot;title&quot;: &quot;sample title&quot;, &quot;body&quot;: &quot;my text&quot;}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const httpGet = (url, callback, err = console.error) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">   const request = new XMLHttpRequest();</span></span>
<span class="line"><span style="color:#24292e;">   request.open(&#39;GET&#39;, url, true);</span></span>
<span class="line"><span style="color:#24292e;">   request.onload = () =&gt; callback(request.responseText);</span></span>
<span class="line"><span style="color:#24292e;">   request.onerror = () =&gt; err(request);</span></span>
<span class="line"><span style="color:#24292e;">   request.send();</span></span>
<span class="line"><span style="color:#24292e;"> };</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> httpGet(</span></span>
<span class="line"><span style="color:#24292e;">   &#39;https://jsonplaceholder.typicode.com/posts/1&#39;,</span></span>
<span class="line"><span style="color:#24292e;">   console.log</span></span>
<span class="line"><span style="color:#24292e;"> ); </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // {&quot;userId&quot;: 1, &quot;id&quot;: 1, &quot;title&quot;: &quot;sample title&quot;, &quot;body&quot;: &quot;my text&quot;}</span></span></code></pre></div><h2 id="_187-如何对传递的url发出post请求" tabindex="-1">187.如何对传递的URL发出POST请求？ <a class="header-anchor" href="#_187-如何对传递的url发出post请求" aria-label="Permalink to &quot;187.如何对传递的URL发出POST请求？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const httpPost = (url, data, callback, err = console.error) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">   const request = new XMLHttpRequest();</span></span>
<span class="line"><span style="color:#f6f6f4;">   request.open(&#39;POST&#39;, url, true);</span></span>
<span class="line"><span style="color:#f6f6f4;">   request.setRequestHeader(&#39;Content-type&#39;, &#39;application/json; charset=utf-8&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">   request.onload = () =&gt; callback(request.responseText);</span></span>
<span class="line"><span style="color:#f6f6f4;">   request.onerror = () =&gt; err(request);</span></span>
<span class="line"><span style="color:#f6f6f4;">   request.send(data);</span></span>
<span class="line"><span style="color:#f6f6f4;"> };</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> const newPost = {</span></span>
<span class="line"><span style="color:#f6f6f4;">   userId: 1,</span></span>
<span class="line"><span style="color:#f6f6f4;">   id: 1337,</span></span>
<span class="line"><span style="color:#f6f6f4;">   title: &#39;Foo&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">   body: &#39;bar bar bar&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;"> };</span></span>
<span class="line"><span style="color:#f6f6f4;"> const data = JSON.stringify(newPost);</span></span>
<span class="line"><span style="color:#f6f6f4;"> httpPost(</span></span>
<span class="line"><span style="color:#f6f6f4;">   &#39;https://jsonplaceholder.typicode.com/posts&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">   data,</span></span>
<span class="line"><span style="color:#f6f6f4;">   console.log</span></span>
<span class="line"><span style="color:#f6f6f4;"> ); </span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // {&quot;userId&quot;: 1, &quot;id&quot;: 1337, &quot;title&quot;: &quot;Foo&quot;, &quot;body&quot;: &quot;bar bar bar&quot;}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const httpPost = (url, data, callback, err = console.error) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">   const request = new XMLHttpRequest();</span></span>
<span class="line"><span style="color:#24292e;">   request.open(&#39;POST&#39;, url, true);</span></span>
<span class="line"><span style="color:#24292e;">   request.setRequestHeader(&#39;Content-type&#39;, &#39;application/json; charset=utf-8&#39;);</span></span>
<span class="line"><span style="color:#24292e;">   request.onload = () =&gt; callback(request.responseText);</span></span>
<span class="line"><span style="color:#24292e;">   request.onerror = () =&gt; err(request);</span></span>
<span class="line"><span style="color:#24292e;">   request.send(data);</span></span>
<span class="line"><span style="color:#24292e;"> };</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> const newPost = {</span></span>
<span class="line"><span style="color:#24292e;">   userId: 1,</span></span>
<span class="line"><span style="color:#24292e;">   id: 1337,</span></span>
<span class="line"><span style="color:#24292e;">   title: &#39;Foo&#39;,</span></span>
<span class="line"><span style="color:#24292e;">   body: &#39;bar bar bar&#39;</span></span>
<span class="line"><span style="color:#24292e;"> };</span></span>
<span class="line"><span style="color:#24292e;"> const data = JSON.stringify(newPost);</span></span>
<span class="line"><span style="color:#24292e;"> httpPost(</span></span>
<span class="line"><span style="color:#24292e;">   &#39;https://jsonplaceholder.typicode.com/posts&#39;,</span></span>
<span class="line"><span style="color:#24292e;">   data,</span></span>
<span class="line"><span style="color:#24292e;">   console.log</span></span>
<span class="line"><span style="color:#24292e;"> ); </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // {&quot;userId&quot;: 1, &quot;id&quot;: 1337, &quot;title&quot;: &quot;Foo&quot;, &quot;body&quot;: &quot;bar bar bar&quot;}</span></span></code></pre></div><h2 id="_188-如何为指定选择器创建具有指定范围-步长和持续时间的计数器" tabindex="-1">188.如何为指定选择器创建具有指定范围，步长和持续时间的计数器？ <a class="header-anchor" href="#_188-如何为指定选择器创建具有指定范围-步长和持续时间的计数器" aria-label="Permalink to &quot;188.如何为指定选择器创建具有指定范围，步长和持续时间的计数器？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const counter = (selector, start, end, step = 1, duration = 2000) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">   let current = start,</span></span>
<span class="line"><span style="color:#f6f6f4;">     _step = (end - start) * step &lt; 0 ? -step : step,</span></span>
<span class="line"><span style="color:#f6f6f4;">     timer = setInterval(() =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">       current += _step;</span></span>
<span class="line"><span style="color:#f6f6f4;">       document.querySelector(selector).innerHTML = current;</span></span>
<span class="line"><span style="color:#f6f6f4;">       if (current &gt;= end) document.querySelector(selector).innerHTML = end;</span></span>
<span class="line"><span style="color:#f6f6f4;">       if (current &gt;= end) clearInterval(timer);</span></span>
<span class="line"><span style="color:#f6f6f4;">     }, Math.abs(Math.floor(duration / (end - start))));</span></span>
<span class="line"><span style="color:#f6f6f4;">   return timer;</span></span>
<span class="line"><span style="color:#f6f6f4;"> };</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // 事例</span></span>
<span class="line"><span style="color:#f6f6f4;"> counter(&#39;#my-id&#39;, 1, 1000, 5, 2000); </span></span>
<span class="line"><span style="color:#f6f6f4;"> // 让 \`id=“my-id”\`的元素创建一个2秒计时器</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const counter = (selector, start, end, step = 1, duration = 2000) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">   let current = start,</span></span>
<span class="line"><span style="color:#24292e;">     _step = (end - start) * step &lt; 0 ? -step : step,</span></span>
<span class="line"><span style="color:#24292e;">     timer = setInterval(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">       current += _step;</span></span>
<span class="line"><span style="color:#24292e;">       document.querySelector(selector).innerHTML = current;</span></span>
<span class="line"><span style="color:#24292e;">       if (current &gt;= end) document.querySelector(selector).innerHTML = end;</span></span>
<span class="line"><span style="color:#24292e;">       if (current &gt;= end) clearInterval(timer);</span></span>
<span class="line"><span style="color:#24292e;">     }, Math.abs(Math.floor(duration / (end - start))));</span></span>
<span class="line"><span style="color:#24292e;">   return timer;</span></span>
<span class="line"><span style="color:#24292e;"> };</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // 事例</span></span>
<span class="line"><span style="color:#24292e;"> counter(&#39;#my-id&#39;, 1, 1000, 5, 2000); </span></span>
<span class="line"><span style="color:#24292e;"> // 让 \`id=“my-id”\`的元素创建一个2秒计时器</span></span></code></pre></div><h2 id="_189-如何将字符串复制到剪贴板" tabindex="-1">189.如何将字符串复制到剪贴板？ <a class="header-anchor" href="#_189-如何将字符串复制到剪贴板" aria-label="Permalink to &quot;189.如何将字符串复制到剪贴板？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const el = document.createElement(&#39;textarea&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">   el.value = str;</span></span>
<span class="line"><span style="color:#f6f6f4;">   el.setAttribute(&#39;readonly&#39;, &#39;&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">   el.style.position = &#39;absolute&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;">   el.style.left = &#39;-9999px&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;">   document.body.appendChild(el);</span></span>
<span class="line"><span style="color:#f6f6f4;">   const selected =</span></span>
<span class="line"><span style="color:#f6f6f4;">     document.getSelection().rangeCount &gt; 0 ? document.getSelection().getRangeAt(0) : false;</span></span>
<span class="line"><span style="color:#f6f6f4;">   el.select();</span></span>
<span class="line"><span style="color:#f6f6f4;">   document.execCommand(&#39;copy&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">   document.body.removeChild(el);</span></span>
<span class="line"><span style="color:#f6f6f4;">   if (selected) {</span></span>
<span class="line"><span style="color:#f6f6f4;">     document.getSelection().removeAllRanges();</span></span>
<span class="line"><span style="color:#f6f6f4;">     document.getSelection().addRange(selected);</span></span>
<span class="line"><span style="color:#f6f6f4;">   }</span></span>
<span class="line"><span style="color:#f6f6f4;"> };</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // 事例</span></span>
<span class="line"><span style="color:#f6f6f4;"> copyToClipboard(&#39;Lorem ipsum&#39;); </span></span>
<span class="line"><span style="color:#f6f6f4;"> // &#39;Lorem ipsum&#39; copied to clipboard</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const el = document.createElement(&#39;textarea&#39;);</span></span>
<span class="line"><span style="color:#24292e;">   el.value = str;</span></span>
<span class="line"><span style="color:#24292e;">   el.setAttribute(&#39;readonly&#39;, &#39;&#39;);</span></span>
<span class="line"><span style="color:#24292e;">   el.style.position = &#39;absolute&#39;;</span></span>
<span class="line"><span style="color:#24292e;">   el.style.left = &#39;-9999px&#39;;</span></span>
<span class="line"><span style="color:#24292e;">   document.body.appendChild(el);</span></span>
<span class="line"><span style="color:#24292e;">   const selected =</span></span>
<span class="line"><span style="color:#24292e;">     document.getSelection().rangeCount &gt; 0 ? document.getSelection().getRangeAt(0) : false;</span></span>
<span class="line"><span style="color:#24292e;">   el.select();</span></span>
<span class="line"><span style="color:#24292e;">   document.execCommand(&#39;copy&#39;);</span></span>
<span class="line"><span style="color:#24292e;">   document.body.removeChild(el);</span></span>
<span class="line"><span style="color:#24292e;">   if (selected) {</span></span>
<span class="line"><span style="color:#24292e;">     document.getSelection().removeAllRanges();</span></span>
<span class="line"><span style="color:#24292e;">     document.getSelection().addRange(selected);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;"> };</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // 事例</span></span>
<span class="line"><span style="color:#24292e;"> copyToClipboard(&#39;Lorem ipsum&#39;); </span></span>
<span class="line"><span style="color:#24292e;"> // &#39;Lorem ipsum&#39; copied to clipboard</span></span></code></pre></div><h2 id="_190-如何确定页面的浏览器选项卡是否聚焦" tabindex="-1">190.如何确定页面的浏览器选项卡是否聚焦？ <a class="header-anchor" href="#_190-如何确定页面的浏览器选项卡是否聚焦" aria-label="Permalink to &quot;190.如何确定页面的浏览器选项卡是否聚焦？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const isBrowserTabFocused = () =&gt; !document.hidden;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // 事例</span></span>
<span class="line"><span style="color:#f6f6f4;"> isBrowserTabFocused(); // true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const isBrowserTabFocused = () =&gt; !document.hidden;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // 事例</span></span>
<span class="line"><span style="color:#24292e;"> isBrowserTabFocused(); // true</span></span></code></pre></div><h2 id="_191-如何创建目录-如果不存在" tabindex="-1">191.如何创建目录（如果不存在）？ <a class="header-anchor" href="#_191-如何创建目录-如果不存在" aria-label="Permalink to &quot;191.如何创建目录（如果不存在）？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;"> const createDirIfNotExists = dir =&gt; (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> // 事例</span></span>
<span class="line"><span style="color:#f6f6f4;"> createDirIfNotExists(&#39;test&#39;); </span></span>
<span class="line"><span style="color:#f6f6f4;">这里面的方法大都挺实用，可以解决很多开发过程问题，大家就好好利用起来吧。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span style="color:#24292e;"> const createDirIfNotExists = dir =&gt; (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> // 事例</span></span>
<span class="line"><span style="color:#24292e;"> createDirIfNotExists(&#39;test&#39;); </span></span>
<span class="line"><span style="color:#24292e;">这里面的方法大都挺实用，可以解决很多开发过程问题，大家就好好利用起来吧。</span></span></code></pre></div><h2 id="_192-日期型函数封装" tabindex="-1">192.日期型函数封装 <a class="header-anchor" href="#_192-日期型函数封装" aria-label="Permalink to &quot;192.日期型函数封装&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function formatTime(date) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  if(!!date){</span></span>
<span class="line"><span style="color:#f6f6f4;">    if(!(date instanceof Date))</span></span>
<span class="line"><span style="color:#f6f6f4;">    date = new Date(date);</span></span>
<span class="line"><span style="color:#f6f6f4;">    var month = date.getMonth() + 1</span></span>
<span class="line"><span style="color:#f6f6f4;">    var day = date.getDate()</span></span>
<span class="line"><span style="color:#f6f6f4;">    return \`\${month}月\${day}日\`;</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">function formatDay(date) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  if(!!date){</span></span>
<span class="line"><span style="color:#f6f6f4;">    var year = date.getFullYear()</span></span>
<span class="line"><span style="color:#f6f6f4;">    var month = date.getMonth() + 1</span></span>
<span class="line"><span style="color:#f6f6f4;">    var day = date.getDate()</span></span>
<span class="line"><span style="color:#f6f6f4;">    return [year, month, day].map(formatNumber).join(&#39;-&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">function formatDay2(date) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  if(!!date){</span></span>
<span class="line"><span style="color:#f6f6f4;">    var year = date.getFullYear()</span></span>
<span class="line"><span style="color:#f6f6f4;">    var month = date.getMonth() + 1</span></span>
<span class="line"><span style="color:#f6f6f4;">    var day = date.getDate()</span></span>
<span class="line"><span style="color:#f6f6f4;">    return [year, month, day].map(formatNumber).join(&#39;/&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">function formatWeek(date){</span></span>
<span class="line"><span style="color:#f6f6f4;">  if(!!date){</span></span>
<span class="line"><span style="color:#f6f6f4;">    var day = date.getDay();</span></span>
<span class="line"><span style="color:#f6f6f4;">    switch (day) {</span></span>
<span class="line"><span style="color:#f6f6f4;">      case 0:</span></span>
<span class="line"><span style="color:#f6f6f4;">        return &#39;周日&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">        break;</span></span>
<span class="line"><span style="color:#f6f6f4;">      case 1:</span></span>
<span class="line"><span style="color:#f6f6f4;">        return &#39;周一&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">        break;</span></span>
<span class="line"><span style="color:#f6f6f4;">      case 2:</span></span>
<span class="line"><span style="color:#f6f6f4;">        return &#39;周二&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">        break;</span></span>
<span class="line"><span style="color:#f6f6f4;">      case 3:</span></span>
<span class="line"><span style="color:#f6f6f4;">        return &#39;周三&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">        break;</span></span>
<span class="line"><span style="color:#f6f6f4;">      case 4:</span></span>
<span class="line"><span style="color:#f6f6f4;">        return &#39;周四&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">        break;</span></span>
<span class="line"><span style="color:#f6f6f4;">      case 5:</span></span>
<span class="line"><span style="color:#f6f6f4;">        return &#39;周五&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">        break;</span></span>
<span class="line"><span style="color:#f6f6f4;">      case 6:</span></span>
<span class="line"><span style="color:#f6f6f4;">        return &#39;周六&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">        break;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">function formatHour(date){</span></span>
<span class="line"><span style="color:#f6f6f4;">  if(!!date){</span></span>
<span class="line"><span style="color:#f6f6f4;">    var hour = new Date(date).getHours();</span></span>
<span class="line"><span style="color:#f6f6f4;">    var minute = new Date(date).getMinutes();</span></span>
<span class="line"><span style="color:#f6f6f4;">    return [hour, minute].map(formatNumber).join(&#39;:&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">function timestamp(date, divisor=1000){</span></span>
<span class="line"><span style="color:#f6f6f4;">  if(date == undefined){</span></span>
<span class="line"><span style="color:#f6f6f4;">    return;</span></span>
<span class="line"><span style="color:#f6f6f4;">  }else if(typeof date == &#39;number&#39;){</span></span>
<span class="line"><span style="color:#f6f6f4;">    return Math.floor(date/divisor);</span></span>
<span class="line"><span style="color:#f6f6f4;">  }else if(typeof date == &#39;string&#39;){</span></span>
<span class="line"><span style="color:#f6f6f4;">    var strs = date.split(/[^0-9]/);</span></span>
<span class="line"><span style="color:#f6f6f4;">    return Math.floor(+new Date(strs[0] || 0,(strs[1] || 0)-1,strs[2] || 0,strs[3] || 0,strs[4] || 0,strs[5] || 0)/divisor);</span></span>
<span class="line"><span style="color:#f6f6f4;">  }else if(Date.prototype.isPrototypeOf(date)){</span></span>
<span class="line"><span style="color:#f6f6f4;">    return Math.floor(+date/divisor);</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">function detimestamp(date){</span></span>
<span class="line"><span style="color:#f6f6f4;">  if(!!date){</span></span>
<span class="line"><span style="color:#f6f6f4;">    return new Date(date*1000);</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">function formatNumber(n) {//给在0-9的日期加上0</span></span>
<span class="line"><span style="color:#f6f6f4;">  n = n.toString()</span></span>
<span class="line"><span style="color:#f6f6f4;">  return n[1] ? n : &#39;0&#39; + n</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">module.exports = {</span></span>
<span class="line"><span style="color:#f6f6f4;">  formatTime: formatTime,</span></span>
<span class="line"><span style="color:#f6f6f4;">  formatDay: formatDay,</span></span>
<span class="line"><span style="color:#f6f6f4;">  formatDay2: formatDay2,</span></span>
<span class="line"><span style="color:#f6f6f4;">  formatHour: formatHour,</span></span>
<span class="line"><span style="color:#f6f6f4;">  formatWeek: formatWeek,</span></span>
<span class="line"><span style="color:#f6f6f4;">  timestamp: timestamp,</span></span>
<span class="line"><span style="color:#f6f6f4;">  detimestamp: detimestamp</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function formatTime(date) {</span></span>
<span class="line"><span style="color:#24292e;">  if(!!date){</span></span>
<span class="line"><span style="color:#24292e;">    if(!(date instanceof Date))</span></span>
<span class="line"><span style="color:#24292e;">    date = new Date(date);</span></span>
<span class="line"><span style="color:#24292e;">    var month = date.getMonth() + 1</span></span>
<span class="line"><span style="color:#24292e;">    var day = date.getDate()</span></span>
<span class="line"><span style="color:#24292e;">    return \`\${month}月\${day}日\`;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function formatDay(date) {</span></span>
<span class="line"><span style="color:#24292e;">  if(!!date){</span></span>
<span class="line"><span style="color:#24292e;">    var year = date.getFullYear()</span></span>
<span class="line"><span style="color:#24292e;">    var month = date.getMonth() + 1</span></span>
<span class="line"><span style="color:#24292e;">    var day = date.getDate()</span></span>
<span class="line"><span style="color:#24292e;">    return [year, month, day].map(formatNumber).join(&#39;-&#39;);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function formatDay2(date) {</span></span>
<span class="line"><span style="color:#24292e;">  if(!!date){</span></span>
<span class="line"><span style="color:#24292e;">    var year = date.getFullYear()</span></span>
<span class="line"><span style="color:#24292e;">    var month = date.getMonth() + 1</span></span>
<span class="line"><span style="color:#24292e;">    var day = date.getDate()</span></span>
<span class="line"><span style="color:#24292e;">    return [year, month, day].map(formatNumber).join(&#39;/&#39;);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function formatWeek(date){</span></span>
<span class="line"><span style="color:#24292e;">  if(!!date){</span></span>
<span class="line"><span style="color:#24292e;">    var day = date.getDay();</span></span>
<span class="line"><span style="color:#24292e;">    switch (day) {</span></span>
<span class="line"><span style="color:#24292e;">      case 0:</span></span>
<span class="line"><span style="color:#24292e;">        return &#39;周日&#39;</span></span>
<span class="line"><span style="color:#24292e;">        break;</span></span>
<span class="line"><span style="color:#24292e;">      case 1:</span></span>
<span class="line"><span style="color:#24292e;">        return &#39;周一&#39;</span></span>
<span class="line"><span style="color:#24292e;">        break;</span></span>
<span class="line"><span style="color:#24292e;">      case 2:</span></span>
<span class="line"><span style="color:#24292e;">        return &#39;周二&#39;</span></span>
<span class="line"><span style="color:#24292e;">        break;</span></span>
<span class="line"><span style="color:#24292e;">      case 3:</span></span>
<span class="line"><span style="color:#24292e;">        return &#39;周三&#39;</span></span>
<span class="line"><span style="color:#24292e;">        break;</span></span>
<span class="line"><span style="color:#24292e;">      case 4:</span></span>
<span class="line"><span style="color:#24292e;">        return &#39;周四&#39;</span></span>
<span class="line"><span style="color:#24292e;">        break;</span></span>
<span class="line"><span style="color:#24292e;">      case 5:</span></span>
<span class="line"><span style="color:#24292e;">        return &#39;周五&#39;</span></span>
<span class="line"><span style="color:#24292e;">        break;</span></span>
<span class="line"><span style="color:#24292e;">      case 6:</span></span>
<span class="line"><span style="color:#24292e;">        return &#39;周六&#39;</span></span>
<span class="line"><span style="color:#24292e;">        break;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function formatHour(date){</span></span>
<span class="line"><span style="color:#24292e;">  if(!!date){</span></span>
<span class="line"><span style="color:#24292e;">    var hour = new Date(date).getHours();</span></span>
<span class="line"><span style="color:#24292e;">    var minute = new Date(date).getMinutes();</span></span>
<span class="line"><span style="color:#24292e;">    return [hour, minute].map(formatNumber).join(&#39;:&#39;);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function timestamp(date, divisor=1000){</span></span>
<span class="line"><span style="color:#24292e;">  if(date == undefined){</span></span>
<span class="line"><span style="color:#24292e;">    return;</span></span>
<span class="line"><span style="color:#24292e;">  }else if(typeof date == &#39;number&#39;){</span></span>
<span class="line"><span style="color:#24292e;">    return Math.floor(date/divisor);</span></span>
<span class="line"><span style="color:#24292e;">  }else if(typeof date == &#39;string&#39;){</span></span>
<span class="line"><span style="color:#24292e;">    var strs = date.split(/[^0-9]/);</span></span>
<span class="line"><span style="color:#24292e;">    return Math.floor(+new Date(strs[0] || 0,(strs[1] || 0)-1,strs[2] || 0,strs[3] || 0,strs[4] || 0,strs[5] || 0)/divisor);</span></span>
<span class="line"><span style="color:#24292e;">  }else if(Date.prototype.isPrototypeOf(date)){</span></span>
<span class="line"><span style="color:#24292e;">    return Math.floor(+date/divisor);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function detimestamp(date){</span></span>
<span class="line"><span style="color:#24292e;">  if(!!date){</span></span>
<span class="line"><span style="color:#24292e;">    return new Date(date*1000);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function formatNumber(n) {//给在0-9的日期加上0</span></span>
<span class="line"><span style="color:#24292e;">  n = n.toString()</span></span>
<span class="line"><span style="color:#24292e;">  return n[1] ? n : &#39;0&#39; + n</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  formatTime: formatTime,</span></span>
<span class="line"><span style="color:#24292e;">  formatDay: formatDay,</span></span>
<span class="line"><span style="color:#24292e;">  formatDay2: formatDay2,</span></span>
<span class="line"><span style="color:#24292e;">  formatHour: formatHour,</span></span>
<span class="line"><span style="color:#24292e;">  formatWeek: formatWeek,</span></span>
<span class="line"><span style="color:#24292e;">  timestamp: timestamp,</span></span>
<span class="line"><span style="color:#24292e;">  detimestamp: detimestamp</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_193-时间戳转时间" tabindex="-1">193.时间戳转时间 <a class="header-anchor" href="#_193-时间戳转时间" aria-label="Permalink to &quot;193.时间戳转时间&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/** </span></span>
<span class="line"><span style="color:#f6f6f4;"> * 时间戳转化为年 月 日 时 分 秒 </span></span>
<span class="line"><span style="color:#f6f6f4;"> * number: 传入时间戳 </span></span>
<span class="line"><span style="color:#f6f6f4;"> * format：返回格式，支持自定义，但参数必须与formateArr里保持一致 </span></span>
<span class="line"><span style="color:#f6f6f4;">*/  </span></span>
<span class="line"><span style="color:#f6f6f4;">function formatTime(number,format) {  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">  var formateArr  = [&#39;Y&#39;,&#39;M&#39;,&#39;D&#39;,&#39;h&#39;,&#39;m&#39;,&#39;s&#39;];  </span></span>
<span class="line"><span style="color:#f6f6f4;">  var returnArr   = [];  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">  var date = new Date(number * 1000);  </span></span>
<span class="line"><span style="color:#f6f6f4;">  returnArr.push(date.getFullYear());  </span></span>
<span class="line"><span style="color:#f6f6f4;">  returnArr.push(formatNumber(date.getMonth() + 1));  </span></span>
<span class="line"><span style="color:#f6f6f4;">  returnArr.push(formatNumber(date.getDate()));  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">  returnArr.push(formatNumber(date.getHours()));  </span></span>
<span class="line"><span style="color:#f6f6f4;">  returnArr.push(formatNumber(date.getMinutes()));  </span></span>
<span class="line"><span style="color:#f6f6f4;">  returnArr.push(formatNumber(date.getSeconds()));  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">  for (var i in returnArr)  </span></span>
<span class="line"><span style="color:#f6f6f4;">  {  </span></span>
<span class="line"><span style="color:#f6f6f4;">    format = format.replace(formateArr[i], returnArr[i]);  </span></span>
<span class="line"><span style="color:#f6f6f4;">  }  </span></span>
<span class="line"><span style="color:#f6f6f4;">  return format;  </span></span>
<span class="line"><span style="color:#f6f6f4;">} </span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">//数据转化  </span></span>
<span class="line"><span style="color:#f6f6f4;">function formatNumber(n) {  </span></span>
<span class="line"><span style="color:#f6f6f4;">  n = n.toString()  </span></span>
<span class="line"><span style="color:#f6f6f4;">  return n[1] ? n : &#39;0&#39; + n  </span></span>
<span class="line"><span style="color:#f6f6f4;">}  </span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">调用示例：</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">var sjc = 1488481383;//时间戳</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(time.formatTime(sjc,&#39;Y/M/D h:m:s&#39;));//转换为日期：2017/03/03 03:03:03</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(time.formatTime(sjc, &#39;h:m&#39;));//转换为日期：03:03</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/** </span></span>
<span class="line"><span style="color:#24292e;"> * 时间戳转化为年 月 日 时 分 秒 </span></span>
<span class="line"><span style="color:#24292e;"> * number: 传入时间戳 </span></span>
<span class="line"><span style="color:#24292e;"> * format：返回格式，支持自定义，但参数必须与formateArr里保持一致 </span></span>
<span class="line"><span style="color:#24292e;">*/  </span></span>
<span class="line"><span style="color:#24292e;">function formatTime(number,format) {  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  var formateArr  = [&#39;Y&#39;,&#39;M&#39;,&#39;D&#39;,&#39;h&#39;,&#39;m&#39;,&#39;s&#39;];  </span></span>
<span class="line"><span style="color:#24292e;">  var returnArr   = [];  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  var date = new Date(number * 1000);  </span></span>
<span class="line"><span style="color:#24292e;">  returnArr.push(date.getFullYear());  </span></span>
<span class="line"><span style="color:#24292e;">  returnArr.push(formatNumber(date.getMonth() + 1));  </span></span>
<span class="line"><span style="color:#24292e;">  returnArr.push(formatNumber(date.getDate()));  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  returnArr.push(formatNumber(date.getHours()));  </span></span>
<span class="line"><span style="color:#24292e;">  returnArr.push(formatNumber(date.getMinutes()));  </span></span>
<span class="line"><span style="color:#24292e;">  returnArr.push(formatNumber(date.getSeconds()));  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  for (var i in returnArr)  </span></span>
<span class="line"><span style="color:#24292e;">  {  </span></span>
<span class="line"><span style="color:#24292e;">    format = format.replace(formateArr[i], returnArr[i]);  </span></span>
<span class="line"><span style="color:#24292e;">  }  </span></span>
<span class="line"><span style="color:#24292e;">  return format;  </span></span>
<span class="line"><span style="color:#24292e;">} </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//数据转化  </span></span>
<span class="line"><span style="color:#24292e;">function formatNumber(n) {  </span></span>
<span class="line"><span style="color:#24292e;">  n = n.toString()  </span></span>
<span class="line"><span style="color:#24292e;">  return n[1] ? n : &#39;0&#39; + n  </span></span>
<span class="line"><span style="color:#24292e;">}  </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">调用示例：</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">var sjc = 1488481383;//时间戳</span></span>
<span class="line"><span style="color:#24292e;">console.log(time.formatTime(sjc,&#39;Y/M/D h:m:s&#39;));//转换为日期：2017/03/03 03:03:03</span></span>
<span class="line"><span style="color:#24292e;">console.log(time.formatTime(sjc, &#39;h:m&#39;));//转换为日期：03:03</span></span></code></pre></div><h2 id="_194-js中获取上下文路径" tabindex="-1">194.js中获取上下文路径 <a class="header-anchor" href="#_194-js中获取上下文路径" aria-label="Permalink to &quot;194.js中获取上下文路径&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">js中获取上下文路径</span></span>
<span class="line"><span style="color:#f6f6f4;">    //js获取项目根路径，如： http://localhost:8083/uimcardprj</span></span>
<span class="line"><span style="color:#f6f6f4;">    function getRootPath(){</span></span>
<span class="line"><span style="color:#f6f6f4;">        //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp</span></span>
<span class="line"><span style="color:#f6f6f4;">        var curWwwPath=window.document.location.href;</span></span>
<span class="line"><span style="color:#f6f6f4;">        //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp</span></span>
<span class="line"><span style="color:#f6f6f4;">        var pathName=window.document.location.pathname;</span></span>
<span class="line"><span style="color:#f6f6f4;">        var pos=curWwwPath.indexOf(pathName);</span></span>
<span class="line"><span style="color:#f6f6f4;">        //获取主机地址，如： http://localhost:8083</span></span>
<span class="line"><span style="color:#f6f6f4;">        var localhostPaht=curWwwPath.substring(0,pos);</span></span>
<span class="line"><span style="color:#f6f6f4;">        //获取带&quot;/&quot;的项目名，如：/uimcardprj</span></span>
<span class="line"><span style="color:#f6f6f4;">        var projectName=pathName.substring(0,pathName.substr(1).indexOf(&#39;/&#39;)+1);</span></span>
<span class="line"><span style="color:#f6f6f4;">        return(localhostPaht+projectName);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">js中获取上下文路径</span></span>
<span class="line"><span style="color:#24292e;">    //js获取项目根路径，如： http://localhost:8083/uimcardprj</span></span>
<span class="line"><span style="color:#24292e;">    function getRootPath(){</span></span>
<span class="line"><span style="color:#24292e;">        //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp</span></span>
<span class="line"><span style="color:#24292e;">        var curWwwPath=window.document.location.href;</span></span>
<span class="line"><span style="color:#24292e;">        //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp</span></span>
<span class="line"><span style="color:#24292e;">        var pathName=window.document.location.pathname;</span></span>
<span class="line"><span style="color:#24292e;">        var pos=curWwwPath.indexOf(pathName);</span></span>
<span class="line"><span style="color:#24292e;">        //获取主机地址，如： http://localhost:8083</span></span>
<span class="line"><span style="color:#24292e;">        var localhostPaht=curWwwPath.substring(0,pos);</span></span>
<span class="line"><span style="color:#24292e;">        //获取带&quot;/&quot;的项目名，如：/uimcardprj</span></span>
<span class="line"><span style="color:#24292e;">        var projectName=pathName.substring(0,pathName.substr(1).indexOf(&#39;/&#39;)+1);</span></span>
<span class="line"><span style="color:#24292e;">        return(localhostPaht+projectName);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_195-js大小转化b-kb-mb-gb的转化方法" tabindex="-1">195.JS大小转化B KB MB GB的转化方法 <a class="header-anchor" href="#_195-js大小转化b-kb-mb-gb的转化方法" aria-label="Permalink to &quot;195.JS大小转化B KB MB GB的转化方法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function conver(limit){  </span></span>
<span class="line"><span style="color:#f6f6f4;">            var size = &quot;&quot;;  </span></span>
<span class="line"><span style="color:#f6f6f4;">            if( limit &lt; 0.1 * 1024 ){ //如果小于0.1KB转化成B  </span></span>
<span class="line"><span style="color:#f6f6f4;">                size = limit.toFixed(2) + &quot;B&quot;;    </span></span>
<span class="line"><span style="color:#f6f6f4;">            }else if(limit &lt; 0.1 * 1024 * 1024 ){//如果小于0.1MB转化成KB  </span></span>
<span class="line"><span style="color:#f6f6f4;">                size = (limit / 1024).toFixed(2) + &quot;KB&quot;;              </span></span>
<span class="line"><span style="color:#f6f6f4;">            }else if(limit &lt; 0.1 * 1024 * 1024 * 1024){ //如果小于0.1GB转化成MB  </span></span>
<span class="line"><span style="color:#f6f6f4;">                size = (limit / (1024 * 1024)).toFixed(2) + &quot;MB&quot;;  </span></span>
<span class="line"><span style="color:#f6f6f4;">            }else{ //其他转化成GB  </span></span>
<span class="line"><span style="color:#f6f6f4;">                size = (limit / (1024 * 1024 * 1024)).toFixed(2) + &quot;GB&quot;;  </span></span>
<span class="line"><span style="color:#f6f6f4;">            }  </span></span>
<span class="line"><span style="color:#f6f6f4;">              </span></span>
<span class="line"><span style="color:#f6f6f4;">            var sizestr = size + &quot;&quot;;   </span></span>
<span class="line"><span style="color:#f6f6f4;">            var len = sizestr.indexOf(&quot;\\.&quot;);  </span></span>
<span class="line"><span style="color:#f6f6f4;">            var dec = sizestr.substr(len + 1, 2);  </span></span>
<span class="line"><span style="color:#f6f6f4;">            if(dec == &quot;00&quot;){//当小数点后为00时 去掉小数部分  </span></span>
<span class="line"><span style="color:#f6f6f4;">                return sizestr.substring(0,len) + sizestr.substr(len + 3,2);  </span></span>
<span class="line"><span style="color:#f6f6f4;">            }  </span></span>
<span class="line"><span style="color:#f6f6f4;">            return sizestr;  </span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function conver(limit){  </span></span>
<span class="line"><span style="color:#24292e;">            var size = &quot;&quot;;  </span></span>
<span class="line"><span style="color:#24292e;">            if( limit &lt; 0.1 * 1024 ){ //如果小于0.1KB转化成B  </span></span>
<span class="line"><span style="color:#24292e;">                size = limit.toFixed(2) + &quot;B&quot;;    </span></span>
<span class="line"><span style="color:#24292e;">            }else if(limit &lt; 0.1 * 1024 * 1024 ){//如果小于0.1MB转化成KB  </span></span>
<span class="line"><span style="color:#24292e;">                size = (limit / 1024).toFixed(2) + &quot;KB&quot;;              </span></span>
<span class="line"><span style="color:#24292e;">            }else if(limit &lt; 0.1 * 1024 * 1024 * 1024){ //如果小于0.1GB转化成MB  </span></span>
<span class="line"><span style="color:#24292e;">                size = (limit / (1024 * 1024)).toFixed(2) + &quot;MB&quot;;  </span></span>
<span class="line"><span style="color:#24292e;">            }else{ //其他转化成GB  </span></span>
<span class="line"><span style="color:#24292e;">                size = (limit / (1024 * 1024 * 1024)).toFixed(2) + &quot;GB&quot;;  </span></span>
<span class="line"><span style="color:#24292e;">            }  </span></span>
<span class="line"><span style="color:#24292e;">              </span></span>
<span class="line"><span style="color:#24292e;">            var sizestr = size + &quot;&quot;;   </span></span>
<span class="line"><span style="color:#24292e;">            var len = sizestr.indexOf(&quot;\\.&quot;);  </span></span>
<span class="line"><span style="color:#24292e;">            var dec = sizestr.substr(len + 1, 2);  </span></span>
<span class="line"><span style="color:#24292e;">            if(dec == &quot;00&quot;){//当小数点后为00时 去掉小数部分  </span></span>
<span class="line"><span style="color:#24292e;">                return sizestr.substring(0,len) + sizestr.substr(len + 3,2);  </span></span>
<span class="line"><span style="color:#24292e;">            }  </span></span>
<span class="line"><span style="color:#24292e;">            return sizestr;  </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_196-js全屏和退出全屏" tabindex="-1">196.js全屏和退出全屏 <a class="header-anchor" href="#_196-js全屏和退出全屏" aria-label="Permalink to &quot;196.js全屏和退出全屏&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function fullScreen() {</span></span>
<span class="line"><span style="color:#f6f6f4;">      var el = document.documentElement;</span></span>
<span class="line"><span style="color:#f6f6f4;">      var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">​      //typeof rfs != &quot;undefined&quot; &amp;&amp; rfs</span></span>
<span class="line"><span style="color:#f6f6f4;">​      if (rfs) {</span></span>
<span class="line"><span style="color:#f6f6f4;">​        rfs.call(el);</span></span>
<span class="line"><span style="color:#f6f6f4;">​      } else if (typeof window.ActiveXObject !== &quot;undefined&quot;) {</span></span>
<span class="line"><span style="color:#f6f6f4;">​        //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏</span></span>
<span class="line"><span style="color:#f6f6f4;">​        var wscript = new ActiveXObject(&quot;WScript.Shell&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">​        if (wscript != null) {</span></span>
<span class="line"><span style="color:#f6f6f4;">​          wscript.SendKeys(&quot;{F11}&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">​        }</span></span>
<span class="line"><span style="color:#f6f6f4;">​      }</span></span>
<span class="line"><span style="color:#f6f6f4;">​    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">​    //退出全屏</span></span>
<span class="line"><span style="color:#f6f6f4;">​    function exitScreen() {</span></span>
<span class="line"><span style="color:#f6f6f4;">​      var el = document;</span></span>
<span class="line"><span style="color:#f6f6f4;">​      var cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">​      //typeof cfs != &quot;undefined&quot; &amp;&amp; cfs</span></span>
<span class="line"><span style="color:#f6f6f4;">​      if (cfs) {</span></span>
<span class="line"><span style="color:#f6f6f4;">​        cfs.call(el);</span></span>
<span class="line"><span style="color:#f6f6f4;">​      } else if (typeof window.ActiveXObject !== &quot;undefined&quot;) {</span></span>
<span class="line"><span style="color:#f6f6f4;">​        //for IE，这里和fullScreen相同，模拟按下F11键退出全屏</span></span>
<span class="line"><span style="color:#f6f6f4;">​        var wscript = new ActiveXObject(&quot;WScript.Shell&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">​        if (wscript != null) {</span></span>
<span class="line"><span style="color:#f6f6f4;">​          wscript.SendKeys(&quot;{F11}&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">​        }</span></span>
<span class="line"><span style="color:#f6f6f4;">​      }</span></span>
<span class="line"><span style="color:#f6f6f4;">​    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function fullScreen() {</span></span>
<span class="line"><span style="color:#24292e;">      var el = document.documentElement;</span></span>
<span class="line"><span style="color:#24292e;">      var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​      //typeof rfs != &quot;undefined&quot; &amp;&amp; rfs</span></span>
<span class="line"><span style="color:#24292e;">​      if (rfs) {</span></span>
<span class="line"><span style="color:#24292e;">​        rfs.call(el);</span></span>
<span class="line"><span style="color:#24292e;">​      } else if (typeof window.ActiveXObject !== &quot;undefined&quot;) {</span></span>
<span class="line"><span style="color:#24292e;">​        //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏</span></span>
<span class="line"><span style="color:#24292e;">​        var wscript = new ActiveXObject(&quot;WScript.Shell&quot;);</span></span>
<span class="line"><span style="color:#24292e;">​        if (wscript != null) {</span></span>
<span class="line"><span style="color:#24292e;">​          wscript.SendKeys(&quot;{F11}&quot;);</span></span>
<span class="line"><span style="color:#24292e;">​        }</span></span>
<span class="line"><span style="color:#24292e;">​      }</span></span>
<span class="line"><span style="color:#24292e;">​    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    //退出全屏</span></span>
<span class="line"><span style="color:#24292e;">​    function exitScreen() {</span></span>
<span class="line"><span style="color:#24292e;">​      var el = document;</span></span>
<span class="line"><span style="color:#24292e;">​      var cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​      //typeof cfs != &quot;undefined&quot; &amp;&amp; cfs</span></span>
<span class="line"><span style="color:#24292e;">​      if (cfs) {</span></span>
<span class="line"><span style="color:#24292e;">​        cfs.call(el);</span></span>
<span class="line"><span style="color:#24292e;">​      } else if (typeof window.ActiveXObject !== &quot;undefined&quot;) {</span></span>
<span class="line"><span style="color:#24292e;">​        //for IE，这里和fullScreen相同，模拟按下F11键退出全屏</span></span>
<span class="line"><span style="color:#24292e;">​        var wscript = new ActiveXObject(&quot;WScript.Shell&quot;);</span></span>
<span class="line"><span style="color:#24292e;">​        if (wscript != null) {</span></span>
<span class="line"><span style="color:#24292e;">​          wscript.SendKeys(&quot;{F11}&quot;);</span></span>
<span class="line"><span style="color:#24292e;">​        }</span></span>
<span class="line"><span style="color:#24292e;">​      }</span></span>
<span class="line"><span style="color:#24292e;">​    }</span></span></code></pre></div><h2 id="_197-格式化时间-转化为几分钟前-几秒钟前" tabindex="-1">197.格式化时间，转化为几分钟前，几秒钟前 <a class="header-anchor" href="#_197-格式化时间-转化为几分钟前-几秒钟前" aria-label="Permalink to &quot;197.格式化时间，转化为几分钟前，几秒钟前&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * 格式化时间，转化为几分钟前，几秒钟前</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param timestamp 时间戳，单位是毫秒</span></span>
<span class="line"><span style="color:#f6f6f4;">     */</span></span>
<span class="line"><span style="color:#f6f6f4;">    function timeFormat(timestamp) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        var mistiming = Math.round((Date.now() - timestamp) / 1000);</span></span>
<span class="line"><span style="color:#f6f6f4;">        var arrr = [&#39;年&#39;, &#39;个月&#39;, &#39;星期&#39;, &#39;天&#39;, &#39;小时&#39;, &#39;分钟&#39;, &#39;秒&#39;];</span></span>
<span class="line"><span style="color:#f6f6f4;">        var arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1];</span></span>
<span class="line"><span style="color:#f6f6f4;">        for (var i = 0; i &lt; arrn.length; i++) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            var inm = Math.floor(mistiming / arrn[i]);</span></span>
<span class="line"><span style="color:#f6f6f4;">            if (inm != 0) {</span></span>
<span class="line"><span style="color:#f6f6f4;">                return inm + arrr[i] + &#39;前&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;">            }</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * 格式化时间，转化为几分钟前，几秒钟前</span></span>
<span class="line"><span style="color:#24292e;">     * @param timestamp 时间戳，单位是毫秒</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    function timeFormat(timestamp) {</span></span>
<span class="line"><span style="color:#24292e;">        var mistiming = Math.round((Date.now() - timestamp) / 1000);</span></span>
<span class="line"><span style="color:#24292e;">        var arrr = [&#39;年&#39;, &#39;个月&#39;, &#39;星期&#39;, &#39;天&#39;, &#39;小时&#39;, &#39;分钟&#39;, &#39;秒&#39;];</span></span>
<span class="line"><span style="color:#24292e;">        var arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1];</span></span>
<span class="line"><span style="color:#24292e;">        for (var i = 0; i &lt; arrn.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">            var inm = Math.floor(mistiming / arrn[i]);</span></span>
<span class="line"><span style="color:#24292e;">            if (inm != 0) {</span></span>
<span class="line"><span style="color:#24292e;">                return inm + arrr[i] + &#39;前&#39;;</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_198-获取n天之前的日期-getdaysbeforedate-10-10天前" tabindex="-1">198 获取n天之前的日期 getDaysBeforeDate(10) 10天前 <a class="header-anchor" href="#_198-获取n天之前的日期-getdaysbeforedate-10-10天前" aria-label="Permalink to &quot;198 获取n天之前的日期 getDaysBeforeDate(10) 10天前&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * 获取n天之前的日期 getDaysBeforeDate(10) 10天前</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param day 天数</span></span>
<span class="line"><span style="color:#f6f6f4;">     */</span></span>
<span class="line"><span style="color:#f6f6f4;">    function getDaysBeforeDate(day) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        var date = new Date(),</span></span>
<span class="line"><span style="color:#f6f6f4;">            timestamp, newDate;</span></span>
<span class="line"><span style="color:#f6f6f4;">        timestamp = date.getTime();</span></span>
<span class="line"><span style="color:#f6f6f4;">        // 获取三天前的日期</span></span>
<span class="line"><span style="color:#f6f6f4;">        newDate = new Date(timestamp - day * 24 * 3600 * 1000);</span></span>
<span class="line"><span style="color:#f6f6f4;">        var year = newDate.getFullYear();</span></span>
<span class="line"><span style="color:#f6f6f4;">        // 月+1是因为js中月份是按0开始的</span></span>
<span class="line"><span style="color:#f6f6f4;">        var month = newDate.getMonth() + 1;</span></span>
<span class="line"><span style="color:#f6f6f4;">        var day = newDate.getDate();</span></span>
<span class="line"><span style="color:#f6f6f4;">        if (day &lt; 10) { // 如果日小于10，前面拼接0</span></span>
<span class="line"><span style="color:#f6f6f4;">            day = &#39;0&#39; + day;</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">        if (month &lt; 10) { // 如果月小于10，前面拼接0</span></span>
<span class="line"><span style="color:#f6f6f4;">            month = &#39;0&#39; + month;</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">        return [year, month, day].join(&#39;/&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * 获取n天之前的日期 getDaysBeforeDate(10) 10天前</span></span>
<span class="line"><span style="color:#24292e;">     * @param day 天数</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    function getDaysBeforeDate(day) {</span></span>
<span class="line"><span style="color:#24292e;">        var date = new Date(),</span></span>
<span class="line"><span style="color:#24292e;">            timestamp, newDate;</span></span>
<span class="line"><span style="color:#24292e;">        timestamp = date.getTime();</span></span>
<span class="line"><span style="color:#24292e;">        // 获取三天前的日期</span></span>
<span class="line"><span style="color:#24292e;">        newDate = new Date(timestamp - day * 24 * 3600 * 1000);</span></span>
<span class="line"><span style="color:#24292e;">        var year = newDate.getFullYear();</span></span>
<span class="line"><span style="color:#24292e;">        // 月+1是因为js中月份是按0开始的</span></span>
<span class="line"><span style="color:#24292e;">        var month = newDate.getMonth() + 1;</span></span>
<span class="line"><span style="color:#24292e;">        var day = newDate.getDate();</span></span>
<span class="line"><span style="color:#24292e;">        if (day &lt; 10) { // 如果日小于10，前面拼接0</span></span>
<span class="line"><span style="color:#24292e;">            day = &#39;0&#39; + day;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        if (month &lt; 10) { // 如果月小于10，前面拼接0</span></span>
<span class="line"><span style="color:#24292e;">            month = &#39;0&#39; + month;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        return [year, month, day].join(&#39;/&#39;);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_199-获取跳转的classid-通过hash方式获取" tabindex="-1">199.获取跳转的classId,通过hash方式获取 <a class="header-anchor" href="#_199-获取跳转的classid-通过hash方式获取" aria-label="Permalink to &quot;199.获取跳转的classId,通过hash方式获取&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * 获取跳转的classId,通过hash方式获取</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @return 返回值</span></span>
<span class="line"><span style="color:#f6f6f4;">     */</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    $scope.getQueryString = function() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        var url= {},</span></span>
<span class="line"><span style="color:#f6f6f4;">            a = &#39;&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;">        (a = window.location.search.substr(1)) || (a = window.location.hash.split(&#39;?&#39;)[1])</span></span>
<span class="line"><span style="color:#f6f6f4;">        a.split(/&amp;/g).forEach(function(item) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            url[(item = item.split(&#39;=&#39;))[0]] = item[1];</span></span>
<span class="line"><span style="color:#f6f6f4;">        })</span></span>
<span class="line"><span style="color:#f6f6f4;">        return url</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * 获取跳转的classId,通过hash方式获取</span></span>
<span class="line"><span style="color:#24292e;">     * @return 返回值</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    $scope.getQueryString = function() {</span></span>
<span class="line"><span style="color:#24292e;">        var url= {},</span></span>
<span class="line"><span style="color:#24292e;">            a = &#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">        (a = window.location.search.substr(1)) || (a = window.location.hash.split(&#39;?&#39;)[1])</span></span>
<span class="line"><span style="color:#24292e;">        a.split(/&amp;/g).forEach(function(item) {</span></span>
<span class="line"><span style="color:#24292e;">            url[(item = item.split(&#39;=&#39;))[0]] = item[1];</span></span>
<span class="line"><span style="color:#24292e;">        })</span></span>
<span class="line"><span style="color:#24292e;">        return url</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_200-过滤器指定字段" tabindex="-1">200.过滤器指定字段 <a class="header-anchor" href="#_200-过滤器指定字段" aria-label="Permalink to &quot;200.过滤器指定字段&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function filterArrBySex(data, name) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        if (!name) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            console.log(name)</span></span>
<span class="line"><span style="color:#f6f6f4;">            return data;</span></span>
<span class="line"><span style="color:#f6f6f4;">        } else {</span></span>
<span class="line"><span style="color:#f6f6f4;">            return data.filter(function(ele, index, self) {</span></span>
<span class="line"><span style="color:#f6f6f4;">                if (ele.name.includes(name)) {</span></span>
<span class="line"><span style="color:#f6f6f4;">                    return ele</span></span>
<span class="line"><span style="color:#f6f6f4;">                }</span></span>
<span class="line"><span style="color:#f6f6f4;">            })</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function filterArrBySex(data, name) {</span></span>
<span class="line"><span style="color:#24292e;">        if (!name) {</span></span>
<span class="line"><span style="color:#24292e;">            console.log(name)</span></span>
<span class="line"><span style="color:#24292e;">            return data;</span></span>
<span class="line"><span style="color:#24292e;">        } else {</span></span>
<span class="line"><span style="color:#24292e;">            return data.filter(function(ele, index, self) {</span></span>
<span class="line"><span style="color:#24292e;">                if (ele.name.includes(name)) {</span></span>
<span class="line"><span style="color:#24292e;">                    return ele</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            })</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_201-根据身份证获取出生年月" tabindex="-1">201.根据身份证获取出生年月 <a class="header-anchor" href="#_201-根据身份证获取出生年月" aria-label="Permalink to &quot;201.根据身份证获取出生年月&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * 根据身份证获取出生年月</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param idCard</span></span>
<span class="line"><span style="color:#f6f6f4;">     */</span></span>
<span class="line"><span style="color:#f6f6f4;">    function getBirthdayFromIdCard(idCard) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        var birthday = &quot;&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">        if (idCard != null &amp;&amp; idCard != &quot;&quot;) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            if (idCard.length == 15) {</span></span>
<span class="line"><span style="color:#f6f6f4;">                birthday = &quot;19&quot; + idCard.substr(6, 6);</span></span>
<span class="line"><span style="color:#f6f6f4;">            } else if (idCard.length == 18) {</span></span>
<span class="line"><span style="color:#f6f6f4;">                birthday = idCard.substr(6, 8);</span></span>
<span class="line"><span style="color:#f6f6f4;">            }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">            birthday = birthday.replace(/(.{4})(.{2})/, &quot;$1-$2-&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        return birthday;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * 根据身份证获取出生年月</span></span>
<span class="line"><span style="color:#24292e;">     * @param idCard</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    function getBirthdayFromIdCard(idCard) {</span></span>
<span class="line"><span style="color:#24292e;">        var birthday = &quot;&quot;;</span></span>
<span class="line"><span style="color:#24292e;">        if (idCard != null &amp;&amp; idCard != &quot;&quot;) {</span></span>
<span class="line"><span style="color:#24292e;">            if (idCard.length == 15) {</span></span>
<span class="line"><span style="color:#24292e;">                birthday = &quot;19&quot; + idCard.substr(6, 6);</span></span>
<span class="line"><span style="color:#24292e;">            } else if (idCard.length == 18) {</span></span>
<span class="line"><span style="color:#24292e;">                birthday = idCard.substr(6, 8);</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            birthday = birthday.replace(/(.{4})(.{2})/, &quot;$1-$2-&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        return birthday;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_202-根据身份证获取年龄" tabindex="-1">202.根据身份证获取年龄 <a class="header-anchor" href="#_202-根据身份证获取年龄" aria-label="Permalink to &quot;202.根据身份证获取年龄&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * 根据身份证获取年龄</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param UUserCard</span></span>
<span class="line"><span style="color:#f6f6f4;">     */</span></span>
<span class="line"><span style="color:#f6f6f4;">    function IdCard(UUserCard) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        //获取年龄</span></span>
<span class="line"><span style="color:#f6f6f4;">        var myDate = new Date();</span></span>
<span class="line"><span style="color:#f6f6f4;">        var month = myDate.getMonth() + 1;</span></span>
<span class="line"><span style="color:#f6f6f4;">        var day = myDate.getDate();</span></span>
<span class="line"><span style="color:#f6f6f4;">        var age = myDate.getFullYear() - UUserCard.substring(6, 10) - 1;</span></span>
<span class="line"><span style="color:#f6f6f4;">        if (UUserCard.substring(10, 12) &lt; month || UUserCard.substring(10, 12) == month &amp;&amp; UUserCard.substring(12, 14) &lt;= day) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            age++;</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">        return age</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">     * 根据身份证获取年龄</span></span>
<span class="line"><span style="color:#24292e;">     * @param UUserCard</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    function IdCard(UUserCard) {</span></span>
<span class="line"><span style="color:#24292e;">        //获取年龄</span></span>
<span class="line"><span style="color:#24292e;">        var myDate = new Date();</span></span>
<span class="line"><span style="color:#24292e;">        var month = myDate.getMonth() + 1;</span></span>
<span class="line"><span style="color:#24292e;">        var day = myDate.getDate();</span></span>
<span class="line"><span style="color:#24292e;">        var age = myDate.getFullYear() - UUserCard.substring(6, 10) - 1;</span></span>
<span class="line"><span style="color:#24292e;">        if (UUserCard.substring(10, 12) &lt; month || UUserCard.substring(10, 12) == month &amp;&amp; UUserCard.substring(12, 14) &lt;= day) {</span></span>
<span class="line"><span style="color:#24292e;">            age++;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        return age</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">//vue购物车金额结算</span></span>
<span class="line"><span style="color:#f6f6f4;">window.onload = function() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    var vm = new Vue({</span></span>
<span class="line"><span style="color:#f6f6f4;">        el: &#39;#app&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">        data: {</span></span>
<span class="line"><span style="color:#f6f6f4;">            items: [{</span></span>
<span class="line"><span style="color:#f6f6f4;">                    id: 1,</span></span>
<span class="line"><span style="color:#f6f6f4;">                    name: &quot;苹果&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">                    price: 10,</span></span>
<span class="line"><span style="color:#f6f6f4;">                    count: 1,</span></span>
<span class="line"><span style="color:#f6f6f4;">                    url: &quot;http://www.jq22.com/img/cs/500x500-1.png&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">                },</span></span>
<span class="line"><span style="color:#f6f6f4;">                {</span></span>
<span class="line"><span style="color:#f6f6f4;">                    id: 2,</span></span>
<span class="line"><span style="color:#f6f6f4;">                    name: &quot;蝴蝶&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">                    price: 8,</span></span>
<span class="line"><span style="color:#f6f6f4;">                    count: 5,</span></span>
<span class="line"><span style="color:#f6f6f4;">                    url: &quot;http://www.jq22.com/img/cs/500x500-2.png&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">                },</span></span>
<span class="line"><span style="color:#f6f6f4;">                {</span></span>
<span class="line"><span style="color:#f6f6f4;">                    id: 3,</span></span>
<span class="line"><span style="color:#f6f6f4;">                    name: &quot;小狗&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">                    price: 100,</span></span>
<span class="line"><span style="color:#f6f6f4;">                    count: 1,</span></span>
<span class="line"><span style="color:#f6f6f4;">                    url: &quot;http://www.jq22.com/img/cs/500x500-3.png&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">                },</span></span>
<span class="line"><span style="color:#f6f6f4;">                {</span></span>
<span class="line"><span style="color:#f6f6f4;">                    id: 4,</span></span>
<span class="line"><span style="color:#f6f6f4;">                    name: &quot;鲜花&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">                    price: 10,</span></span>
<span class="line"><span style="color:#f6f6f4;">                    count: 1,</span></span>
<span class="line"><span style="color:#f6f6f4;">                    url: &quot;http://www.jq22.com/img/cs/500x500-4.png&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">                }</span></span>
<span class="line"><span style="color:#f6f6f4;">            ],</span></span>
<span class="line"><span style="color:#f6f6f4;">            search: &quot;&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">        },</span></span>
<span class="line"><span style="color:#f6f6f4;">        methods: {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        },</span></span>
<span class="line"><span style="color:#f6f6f4;">        filters: { //过滤器</span></span>
<span class="line"><span style="color:#f6f6f4;">            numFilter: function(data, n) { //data==item.price 当前过滤的数据 n==2</span></span>
<span class="line"><span style="color:#f6f6f4;">                return &quot;￥&quot; + data.toFixed(n)</span></span>
<span class="line"><span style="color:#f6f6f4;">            }</span></span>
<span class="line"><span style="color:#f6f6f4;">        },</span></span>
<span class="line"><span style="color:#f6f6f4;">        computed: { //计算属性</span></span>
<span class="line"><span style="color:#f6f6f4;">            totalCount: function() {</span></span>
<span class="line"><span style="color:#f6f6f4;">                var n = 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">                this.items.forEach((v, i) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">                    n += v.count</span></span>
<span class="line"><span style="color:#f6f6f4;">                });</span></span>
<span class="line"><span style="color:#f6f6f4;">                return n;</span></span>
<span class="line"><span style="color:#f6f6f4;">            },</span></span>
<span class="line"><span style="color:#f6f6f4;">            totalPrice: function() {</span></span>
<span class="line"><span style="color:#f6f6f4;">                var money = 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">                this.items.forEach((v, i) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">                    money += v.count * v.price</span></span>
<span class="line"><span style="color:#f6f6f4;">                });</span></span>
<span class="line"><span style="color:#f6f6f4;">                return money;</span></span>
<span class="line"><span style="color:#f6f6f4;">            },</span></span>
<span class="line"><span style="color:#f6f6f4;">            searchFor: function() {</span></span>
<span class="line"><span style="color:#f6f6f4;">                if (!this.search) {</span></span>
<span class="line"><span style="color:#f6f6f4;">                    return this.items</span></span>
<span class="line"><span style="color:#f6f6f4;">                }</span></span>
<span class="line"><span style="color:#f6f6f4;">                return this.items.filter((v, i) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">                    if (v.name.indexOf(this.search) !== -1) { //匹配成功</span></span>
<span class="line"><span style="color:#f6f6f4;">                        return v</span></span>
<span class="line"><span style="color:#f6f6f4;">                    }</span></span>
<span class="line"><span style="color:#f6f6f4;">                })</span></span>
<span class="line"><span style="color:#f6f6f4;">            }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">    })</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">//设置iframe高度</span></span>
<span class="line"><span style="color:#f6f6f4;">function setIframeHeight(sonH) { //debugger;            </span></span>
<span class="line"><span style="color:#f6f6f4;">    var height = 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">    //比较父子页面高度，以高度更大的为准</span></span>
<span class="line"><span style="color:#f6f6f4;">    var parentH = $(window).height(); //iframe最小高度应为浏览器视口高度，否则门户管理页面弹窗大小会受限制</span></span>
<span class="line"><span style="color:#f6f6f4;">    height = parentH &gt; sonH ? parentH : sonH;</span></span>
<span class="line"><span style="color:#f6f6f4;">    $(&#39;#mainIframe&#39;).height(height);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    //子页面有传值过来，覆盖iframe的最小高度-2000px</span></span>
<span class="line"><span style="color:#f6f6f4;">    $(&quot;#mainIframe&quot;).css(&quot;min-height&quot;, &#39;auto&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">    $(&quot;.body-bg&quot;).css(&quot;height&quot;, height + 200);</span></span>
<span class="line"><span style="color:#f6f6f4;">    try {</span></span>
<span class="line"><span style="color:#f6f6f4;">        var childBody = $(&quot;#mainIframe&quot;)[0].contentWindow.document.getElementsByTagName(&quot;body&quot;)[0];</span></span>
<span class="line"><span style="color:#f6f6f4;">        //childBody.style.minHeight = height + &quot;px&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">    } catch (error) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        if (error.message.indexOf(&quot;Blocked from frame&quot;) &gt; -1) console.warn(&quot;当前页面存在跨域！&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">(function($) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    $(&quot;#username&quot;).keyup(function(event) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        if (event.keyCode == 13) $(&quot;#password&quot;).focus().select();</span></span>
<span class="line"><span style="color:#f6f6f4;">    });</span></span>
<span class="line"><span style="color:#f6f6f4;">    $(&quot;#password&quot;).keyup(function(event) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        if (event.keyCode == 13) $(&quot;#login-button&quot;).click();</span></span>
<span class="line"><span style="color:#f6f6f4;">    });</span></span>
<span class="line"><span style="color:#f6f6f4;">})(jQuery);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">//回到顶部</span></span>
<span class="line"><span style="color:#f6f6f4;">function goTop() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    window.scrollTo({</span></span>
<span class="line"><span style="color:#f6f6f4;">        top: 0,</span></span>
<span class="line"><span style="color:#f6f6f4;">        behavior: &#39;smooth&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    });</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">window.onscroll = function() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    var t = document.documentElement.scrollTop;</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (t &gt; 50) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        $(&quot;.toTop&quot;).fadeIn();</span></span>
<span class="line"><span style="color:#f6f6f4;">    } else {</span></span>
<span class="line"><span style="color:#f6f6f4;">        $(&quot;.toTop&quot;).fadeOut();</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">function urlAnalysis() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    var url = window.location.href;</span></span>
<span class="line"><span style="color:#f6f6f4;">    var paraString = url.substring(url.indexOf(&quot;?&quot;) + 1, url.length);</span></span>
<span class="line"><span style="color:#f6f6f4;">    var indexFirst = paraString.indexOf(&quot;&amp;&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">    var paraStringTitle = paraString.slice(0, indexFirst);</span></span>
<span class="line"><span style="color:#f6f6f4;">    paraStringElse = paraString.slice(indexFirst + 1, paraString.length);</span></span>
<span class="line"><span style="color:#f6f6f4;">    var paraStringUrl = paraStringElse;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    //区分是否传参：functionId</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (paraString.indexOf(&quot;functionId&quot;) &gt; -1) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        var indexSecond = paraStringElse.indexOf(&quot;&amp;&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        var paraStringFId = paraStringElse.slice(0, indexSecond);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        var functionId = paraStringFId.split(&quot;=&quot;)[1];</span></span>
<span class="line"><span style="color:#f6f6f4;">        var $body = angular.element(document.body);</span></span>
<span class="line"><span style="color:#f6f6f4;">        var $rootScope = $body.scope().$root;</span></span>
<span class="line"><span style="color:#f6f6f4;">        $rootScope.navFunctionId = functionId;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        paraStringUrl = paraStringElse.slice(indexSecond + 1, paraStringElse.length);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    var title = paraStringTitle.split(&quot;=&quot;)[1] === &quot;undefined&quot; ? &quot;&quot; : decodeURI(paraStringTitle.split(&quot;=&quot;)[1]);</span></span>
<span class="line"><span style="color:#f6f6f4;">    var indexUrl = paraStringUrl.indexOf(&quot;=&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">    var iframeUrl = paraStringUrl.slice(indexUrl + 1, paraStringUrl.length);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    document.title = title;</span></span>
<span class="line"><span style="color:#f6f6f4;">    $(&quot;#mainIframe&quot;).attr(&quot;src&quot;, iframeUrl);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">// 监听enter按下事件，页面跳转</span></span>
<span class="line"><span style="color:#f6f6f4;">$scope.enterEvent = function(e) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    var keycode = window.event ? e.keyCode : e.which;</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (keycode == 13) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        console.log($scope.searchVal)</span></span>
<span class="line"><span style="color:#f6f6f4;">        console.log(&#39;监听成功&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">        var baseUrl = &#39;#/pages/knowlege/knowlegeSeach.html&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">        window.open(baseUrl)</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">};</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">function showDate() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    var myDate = new Date();</span></span>
<span class="line"><span style="color:#f6f6f4;">    var year = myDate.getFullYear();</span></span>
<span class="line"><span style="color:#f6f6f4;">    var month = myDate.getMonth() + 1;</span></span>
<span class="line"><span style="color:#f6f6f4;">    month = month &lt; 10 ? &#39;0&#39; + month : month;</span></span>
<span class="line"><span style="color:#f6f6f4;">    var date = myDate.getDate();</span></span>
<span class="line"><span style="color:#f6f6f4;">    date = date &lt; 10 ? &#39;0&#39; + date : date;</span></span>
<span class="line"><span style="color:#f6f6f4;">    var weekDay = myDate.getDay();</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    switch (weekDay) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        case 0:</span></span>
<span class="line"><span style="color:#f6f6f4;">            weekDay = &quot;天&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">            break;</span></span>
<span class="line"><span style="color:#f6f6f4;">        case 1:</span></span>
<span class="line"><span style="color:#f6f6f4;">            weekDay = &quot;一&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">            break;</span></span>
<span class="line"><span style="color:#f6f6f4;">        case 2:</span></span>
<span class="line"><span style="color:#f6f6f4;">            weekDay = &quot;二&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">            break;</span></span>
<span class="line"><span style="color:#f6f6f4;">        case 3:</span></span>
<span class="line"><span style="color:#f6f6f4;">            weekDay = &quot;三&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">            break;</span></span>
<span class="line"><span style="color:#f6f6f4;">        case 4:</span></span>
<span class="line"><span style="color:#f6f6f4;">            weekDay = &quot;四&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">            break;</span></span>
<span class="line"><span style="color:#f6f6f4;">        case 5:</span></span>
<span class="line"><span style="color:#f6f6f4;">            weekDay = &quot;五&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">            break;</span></span>
<span class="line"><span style="color:#f6f6f4;">        case 6:</span></span>
<span class="line"><span style="color:#f6f6f4;">            weekDay = &quot;六&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">            break;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &quot;name&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    $scope.year = year;</span></span>
<span class="line"><span style="color:#f6f6f4;">    $scope.month = month;</span></span>
<span class="line"><span style="color:#f6f6f4;">    $scope.date = date;</span></span>
<span class="line"><span style="color:#f6f6f4;">    $scope.weekDay = weekDay;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">//获取跳转的classId,通过hash方式获取</span></span>
<span class="line"><span style="color:#f6f6f4;">$scope.getQueryString = function() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    var obg = {},</span></span>
<span class="line"><span style="color:#f6f6f4;">        a = &#39;&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;">    (a = window.location.search.substr(1)) || (a = window.location.hash.split(&#39;?&#39;)[1])</span></span>
<span class="line"><span style="color:#f6f6f4;">    a.split(/&amp;/g).forEach(function(item) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        obg[(item = item.split(&#39;=&#39;))[0]] = item[1];</span></span>
<span class="line"><span style="color:#f6f6f4;">    })</span></span>
<span class="line"><span style="color:#f6f6f4;">    return obg</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">var classId = $scope.getQueryString();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//vue购物车金额结算</span></span>
<span class="line"><span style="color:#24292e;">window.onload = function() {</span></span>
<span class="line"><span style="color:#24292e;">    var vm = new Vue({</span></span>
<span class="line"><span style="color:#24292e;">        el: &#39;#app&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        data: {</span></span>
<span class="line"><span style="color:#24292e;">            items: [{</span></span>
<span class="line"><span style="color:#24292e;">                    id: 1,</span></span>
<span class="line"><span style="color:#24292e;">                    name: &quot;苹果&quot;,</span></span>
<span class="line"><span style="color:#24292e;">                    price: 10,</span></span>
<span class="line"><span style="color:#24292e;">                    count: 1,</span></span>
<span class="line"><span style="color:#24292e;">                    url: &quot;http://www.jq22.com/img/cs/500x500-1.png&quot;</span></span>
<span class="line"><span style="color:#24292e;">                },</span></span>
<span class="line"><span style="color:#24292e;">                {</span></span>
<span class="line"><span style="color:#24292e;">                    id: 2,</span></span>
<span class="line"><span style="color:#24292e;">                    name: &quot;蝴蝶&quot;,</span></span>
<span class="line"><span style="color:#24292e;">                    price: 8,</span></span>
<span class="line"><span style="color:#24292e;">                    count: 5,</span></span>
<span class="line"><span style="color:#24292e;">                    url: &quot;http://www.jq22.com/img/cs/500x500-2.png&quot;</span></span>
<span class="line"><span style="color:#24292e;">                },</span></span>
<span class="line"><span style="color:#24292e;">                {</span></span>
<span class="line"><span style="color:#24292e;">                    id: 3,</span></span>
<span class="line"><span style="color:#24292e;">                    name: &quot;小狗&quot;,</span></span>
<span class="line"><span style="color:#24292e;">                    price: 100,</span></span>
<span class="line"><span style="color:#24292e;">                    count: 1,</span></span>
<span class="line"><span style="color:#24292e;">                    url: &quot;http://www.jq22.com/img/cs/500x500-3.png&quot;</span></span>
<span class="line"><span style="color:#24292e;">                },</span></span>
<span class="line"><span style="color:#24292e;">                {</span></span>
<span class="line"><span style="color:#24292e;">                    id: 4,</span></span>
<span class="line"><span style="color:#24292e;">                    name: &quot;鲜花&quot;,</span></span>
<span class="line"><span style="color:#24292e;">                    price: 10,</span></span>
<span class="line"><span style="color:#24292e;">                    count: 1,</span></span>
<span class="line"><span style="color:#24292e;">                    url: &quot;http://www.jq22.com/img/cs/500x500-4.png&quot;</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            ],</span></span>
<span class="line"><span style="color:#24292e;">            search: &quot;&quot;</span></span>
<span class="line"><span style="color:#24292e;">        },</span></span>
<span class="line"><span style="color:#24292e;">        methods: {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        },</span></span>
<span class="line"><span style="color:#24292e;">        filters: { //过滤器</span></span>
<span class="line"><span style="color:#24292e;">            numFilter: function(data, n) { //data==item.price 当前过滤的数据 n==2</span></span>
<span class="line"><span style="color:#24292e;">                return &quot;￥&quot; + data.toFixed(n)</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        },</span></span>
<span class="line"><span style="color:#24292e;">        computed: { //计算属性</span></span>
<span class="line"><span style="color:#24292e;">            totalCount: function() {</span></span>
<span class="line"><span style="color:#24292e;">                var n = 0;</span></span>
<span class="line"><span style="color:#24292e;">                this.items.forEach((v, i) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                    n += v.count</span></span>
<span class="line"><span style="color:#24292e;">                });</span></span>
<span class="line"><span style="color:#24292e;">                return n;</span></span>
<span class="line"><span style="color:#24292e;">            },</span></span>
<span class="line"><span style="color:#24292e;">            totalPrice: function() {</span></span>
<span class="line"><span style="color:#24292e;">                var money = 0;</span></span>
<span class="line"><span style="color:#24292e;">                this.items.forEach((v, i) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                    money += v.count * v.price</span></span>
<span class="line"><span style="color:#24292e;">                });</span></span>
<span class="line"><span style="color:#24292e;">                return money;</span></span>
<span class="line"><span style="color:#24292e;">            },</span></span>
<span class="line"><span style="color:#24292e;">            searchFor: function() {</span></span>
<span class="line"><span style="color:#24292e;">                if (!this.search) {</span></span>
<span class="line"><span style="color:#24292e;">                    return this.items</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">                return this.items.filter((v, i) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                    if (v.name.indexOf(this.search) !== -1) { //匹配成功</span></span>
<span class="line"><span style="color:#24292e;">                        return v</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                })</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//设置iframe高度</span></span>
<span class="line"><span style="color:#24292e;">function setIframeHeight(sonH) { //debugger;            </span></span>
<span class="line"><span style="color:#24292e;">    var height = 0;</span></span>
<span class="line"><span style="color:#24292e;">    //比较父子页面高度，以高度更大的为准</span></span>
<span class="line"><span style="color:#24292e;">    var parentH = $(window).height(); //iframe最小高度应为浏览器视口高度，否则门户管理页面弹窗大小会受限制</span></span>
<span class="line"><span style="color:#24292e;">    height = parentH &gt; sonH ? parentH : sonH;</span></span>
<span class="line"><span style="color:#24292e;">    $(&#39;#mainIframe&#39;).height(height);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    //子页面有传值过来，覆盖iframe的最小高度-2000px</span></span>
<span class="line"><span style="color:#24292e;">    $(&quot;#mainIframe&quot;).css(&quot;min-height&quot;, &#39;auto&#39;);</span></span>
<span class="line"><span style="color:#24292e;">    $(&quot;.body-bg&quot;).css(&quot;height&quot;, height + 200);</span></span>
<span class="line"><span style="color:#24292e;">    try {</span></span>
<span class="line"><span style="color:#24292e;">        var childBody = $(&quot;#mainIframe&quot;)[0].contentWindow.document.getElementsByTagName(&quot;body&quot;)[0];</span></span>
<span class="line"><span style="color:#24292e;">        //childBody.style.minHeight = height + &quot;px&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    } catch (error) {</span></span>
<span class="line"><span style="color:#24292e;">        if (error.message.indexOf(&quot;Blocked from frame&quot;) &gt; -1) console.warn(&quot;当前页面存在跨域！&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">(function($) {</span></span>
<span class="line"><span style="color:#24292e;">    $(&quot;#username&quot;).keyup(function(event) {</span></span>
<span class="line"><span style="color:#24292e;">        if (event.keyCode == 13) $(&quot;#password&quot;).focus().select();</span></span>
<span class="line"><span style="color:#24292e;">    });</span></span>
<span class="line"><span style="color:#24292e;">    $(&quot;#password&quot;).keyup(function(event) {</span></span>
<span class="line"><span style="color:#24292e;">        if (event.keyCode == 13) $(&quot;#login-button&quot;).click();</span></span>
<span class="line"><span style="color:#24292e;">    });</span></span>
<span class="line"><span style="color:#24292e;">})(jQuery);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//回到顶部</span></span>
<span class="line"><span style="color:#24292e;">function goTop() {</span></span>
<span class="line"><span style="color:#24292e;">    window.scrollTo({</span></span>
<span class="line"><span style="color:#24292e;">        top: 0,</span></span>
<span class="line"><span style="color:#24292e;">        behavior: &#39;smooth&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    });</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">window.onscroll = function() {</span></span>
<span class="line"><span style="color:#24292e;">    var t = document.documentElement.scrollTop;</span></span>
<span class="line"><span style="color:#24292e;">    if (t &gt; 50) {</span></span>
<span class="line"><span style="color:#24292e;">        $(&quot;.toTop&quot;).fadeIn();</span></span>
<span class="line"><span style="color:#24292e;">    } else {</span></span>
<span class="line"><span style="color:#24292e;">        $(&quot;.toTop&quot;).fadeOut();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function urlAnalysis() {</span></span>
<span class="line"><span style="color:#24292e;">    var url = window.location.href;</span></span>
<span class="line"><span style="color:#24292e;">    var paraString = url.substring(url.indexOf(&quot;?&quot;) + 1, url.length);</span></span>
<span class="line"><span style="color:#24292e;">    var indexFirst = paraString.indexOf(&quot;&amp;&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    var paraStringTitle = paraString.slice(0, indexFirst);</span></span>
<span class="line"><span style="color:#24292e;">    paraStringElse = paraString.slice(indexFirst + 1, paraString.length);</span></span>
<span class="line"><span style="color:#24292e;">    var paraStringUrl = paraStringElse;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    //区分是否传参：functionId</span></span>
<span class="line"><span style="color:#24292e;">    if (paraString.indexOf(&quot;functionId&quot;) &gt; -1) {</span></span>
<span class="line"><span style="color:#24292e;">        var indexSecond = paraStringElse.indexOf(&quot;&amp;&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        var paraStringFId = paraStringElse.slice(0, indexSecond);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        var functionId = paraStringFId.split(&quot;=&quot;)[1];</span></span>
<span class="line"><span style="color:#24292e;">        var $body = angular.element(document.body);</span></span>
<span class="line"><span style="color:#24292e;">        var $rootScope = $body.scope().$root;</span></span>
<span class="line"><span style="color:#24292e;">        $rootScope.navFunctionId = functionId;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        paraStringUrl = paraStringElse.slice(indexSecond + 1, paraStringElse.length);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    var title = paraStringTitle.split(&quot;=&quot;)[1] === &quot;undefined&quot; ? &quot;&quot; : decodeURI(paraStringTitle.split(&quot;=&quot;)[1]);</span></span>
<span class="line"><span style="color:#24292e;">    var indexUrl = paraStringUrl.indexOf(&quot;=&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    var iframeUrl = paraStringUrl.slice(indexUrl + 1, paraStringUrl.length);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    document.title = title;</span></span>
<span class="line"><span style="color:#24292e;">    $(&quot;#mainIframe&quot;).attr(&quot;src&quot;, iframeUrl);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 监听enter按下事件，页面跳转</span></span>
<span class="line"><span style="color:#24292e;">$scope.enterEvent = function(e) {</span></span>
<span class="line"><span style="color:#24292e;">    var keycode = window.event ? e.keyCode : e.which;</span></span>
<span class="line"><span style="color:#24292e;">    if (keycode == 13) {</span></span>
<span class="line"><span style="color:#24292e;">        console.log($scope.searchVal)</span></span>
<span class="line"><span style="color:#24292e;">        console.log(&#39;监听成功&#39;)</span></span>
<span class="line"><span style="color:#24292e;">        var baseUrl = &#39;#/pages/knowlege/knowlegeSeach.html&#39;</span></span>
<span class="line"><span style="color:#24292e;">        window.open(baseUrl)</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function showDate() {</span></span>
<span class="line"><span style="color:#24292e;">    var myDate = new Date();</span></span>
<span class="line"><span style="color:#24292e;">    var year = myDate.getFullYear();</span></span>
<span class="line"><span style="color:#24292e;">    var month = myDate.getMonth() + 1;</span></span>
<span class="line"><span style="color:#24292e;">    month = month &lt; 10 ? &#39;0&#39; + month : month;</span></span>
<span class="line"><span style="color:#24292e;">    var date = myDate.getDate();</span></span>
<span class="line"><span style="color:#24292e;">    date = date &lt; 10 ? &#39;0&#39; + date : date;</span></span>
<span class="line"><span style="color:#24292e;">    var weekDay = myDate.getDay();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    switch (weekDay) {</span></span>
<span class="line"><span style="color:#24292e;">        case 0:</span></span>
<span class="line"><span style="color:#24292e;">            weekDay = &quot;天&quot;;</span></span>
<span class="line"><span style="color:#24292e;">            break;</span></span>
<span class="line"><span style="color:#24292e;">        case 1:</span></span>
<span class="line"><span style="color:#24292e;">            weekDay = &quot;一&quot;;</span></span>
<span class="line"><span style="color:#24292e;">            break;</span></span>
<span class="line"><span style="color:#24292e;">        case 2:</span></span>
<span class="line"><span style="color:#24292e;">            weekDay = &quot;二&quot;;</span></span>
<span class="line"><span style="color:#24292e;">            break;</span></span>
<span class="line"><span style="color:#24292e;">        case 3:</span></span>
<span class="line"><span style="color:#24292e;">            weekDay = &quot;三&quot;;</span></span>
<span class="line"><span style="color:#24292e;">            break;</span></span>
<span class="line"><span style="color:#24292e;">        case 4:</span></span>
<span class="line"><span style="color:#24292e;">            weekDay = &quot;四&quot;;</span></span>
<span class="line"><span style="color:#24292e;">            break;</span></span>
<span class="line"><span style="color:#24292e;">        case 5:</span></span>
<span class="line"><span style="color:#24292e;">            weekDay = &quot;五&quot;;</span></span>
<span class="line"><span style="color:#24292e;">            break;</span></span>
<span class="line"><span style="color:#24292e;">        case 6:</span></span>
<span class="line"><span style="color:#24292e;">            weekDay = &quot;六&quot;;</span></span>
<span class="line"><span style="color:#24292e;">            break;</span></span>
<span class="line"><span style="color:#24292e;">            &quot;name&quot;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    $scope.year = year;</span></span>
<span class="line"><span style="color:#24292e;">    $scope.month = month;</span></span>
<span class="line"><span style="color:#24292e;">    $scope.date = date;</span></span>
<span class="line"><span style="color:#24292e;">    $scope.weekDay = weekDay;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//获取跳转的classId,通过hash方式获取</span></span>
<span class="line"><span style="color:#24292e;">$scope.getQueryString = function() {</span></span>
<span class="line"><span style="color:#24292e;">    var obg = {},</span></span>
<span class="line"><span style="color:#24292e;">        a = &#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    (a = window.location.search.substr(1)) || (a = window.location.hash.split(&#39;?&#39;)[1])</span></span>
<span class="line"><span style="color:#24292e;">    a.split(/&amp;/g).forEach(function(item) {</span></span>
<span class="line"><span style="color:#24292e;">        obg[(item = item.split(&#39;=&#39;))[0]] = item[1];</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">    return obg</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var classId = $scope.getQueryString();</span></span></code></pre></div><h2 id="_203-原生js滑块验证" tabindex="-1">203.原生js滑块验证 <a class="header-anchor" href="#_203-原生js滑块验证" aria-label="Permalink to &quot;203.原生js滑块验证&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">//event.clientX:鼠标点下的点到左侧x轴的距离</span></span>
<span class="line"><span style="color:#f6f6f4;">window.onload = function() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    //事件处理  onmousedown  onmousemove  onmouseup</span></span>
<span class="line"><span style="color:#f6f6f4;">    var box = document.querySelector(&quot;.box&quot;)</span></span>
<span class="line"><span style="color:#f6f6f4;">    var btn = document.querySelector(&quot;.btn&quot;)</span></span>
<span class="line"><span style="color:#f6f6f4;">    var bg = document.querySelector(&quot;.bg&quot;)</span></span>
<span class="line"><span style="color:#f6f6f4;">    var text1 = document.querySelector(&quot;.text&quot;)</span></span>
<span class="line"><span style="color:#f6f6f4;">    //封装的选择器 声明式函数可以提升</span></span>
<span class="line"><span style="color:#f6f6f4;">    //			function fun(){</span></span>
<span class="line"><span style="color:#f6f6f4;">    //				</span></span>
<span class="line"><span style="color:#f6f6f4;">    //			}</span></span>
<span class="line"><span style="color:#f6f6f4;">    var flag = false; //标记</span></span>
<span class="line"><span style="color:#f6f6f4;">    btn.onmousedown = function(event) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        var downx = event.clientX; //按下后获取的与x轴的距离</span></span>
<span class="line"><span style="color:#f6f6f4;">        btn.onmousemove = function(e) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            var movex = e.clientX - downx; //滑块滑动的距离</span></span>
<span class="line"><span style="color:#f6f6f4;">            //移动的范围</span></span>
<span class="line"><span style="color:#f6f6f4;">            if (movex &gt; 0) {</span></span>
<span class="line"><span style="color:#f6f6f4;">                this.style.left = movex + &quot;px&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">                bg.style.width = movex + &quot;px&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">                if (movex &gt;= box.offsetWidth - 40) {</span></span>
<span class="line"><span style="color:#f6f6f4;">                    //验证成功</span></span>
<span class="line"><span style="color:#f6f6f4;">                    flag = true</span></span>
<span class="line"><span style="color:#f6f6f4;">                    text1.innerHTML = &quot;验证成功&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">                    text1.style.color = &quot;#fff&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">                    //清除事件</span></span>
<span class="line"><span style="color:#f6f6f4;">                    btn.onmousedown = null;</span></span>
<span class="line"><span style="color:#f6f6f4;">                    btn.onmousemove = null;</span></span>
<span class="line"><span style="color:#f6f6f4;">                }</span></span>
<span class="line"><span style="color:#f6f6f4;">            }</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    //松开事件</span></span>
<span class="line"><span style="color:#f6f6f4;">    btn.onmouseup = function() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        //清除事件</span></span>
<span class="line"><span style="color:#f6f6f4;">        btn.onmousemove = null;</span></span>
<span class="line"><span style="color:#f6f6f4;">        if (flag) return;</span></span>
<span class="line"><span style="color:#f6f6f4;">        this.style.left = 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">        bg.style.width = 0 + &quot;px&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//event.clientX:鼠标点下的点到左侧x轴的距离</span></span>
<span class="line"><span style="color:#24292e;">window.onload = function() {</span></span>
<span class="line"><span style="color:#24292e;">    //事件处理  onmousedown  onmousemove  onmouseup</span></span>
<span class="line"><span style="color:#24292e;">    var box = document.querySelector(&quot;.box&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    var btn = document.querySelector(&quot;.btn&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    var bg = document.querySelector(&quot;.bg&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    var text1 = document.querySelector(&quot;.text&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    //封装的选择器 声明式函数可以提升</span></span>
<span class="line"><span style="color:#24292e;">    //			function fun(){</span></span>
<span class="line"><span style="color:#24292e;">    //				</span></span>
<span class="line"><span style="color:#24292e;">    //			}</span></span>
<span class="line"><span style="color:#24292e;">    var flag = false; //标记</span></span>
<span class="line"><span style="color:#24292e;">    btn.onmousedown = function(event) {</span></span>
<span class="line"><span style="color:#24292e;">        var downx = event.clientX; //按下后获取的与x轴的距离</span></span>
<span class="line"><span style="color:#24292e;">        btn.onmousemove = function(e) {</span></span>
<span class="line"><span style="color:#24292e;">            var movex = e.clientX - downx; //滑块滑动的距离</span></span>
<span class="line"><span style="color:#24292e;">            //移动的范围</span></span>
<span class="line"><span style="color:#24292e;">            if (movex &gt; 0) {</span></span>
<span class="line"><span style="color:#24292e;">                this.style.left = movex + &quot;px&quot;;</span></span>
<span class="line"><span style="color:#24292e;">                bg.style.width = movex + &quot;px&quot;;</span></span>
<span class="line"><span style="color:#24292e;">                if (movex &gt;= box.offsetWidth - 40) {</span></span>
<span class="line"><span style="color:#24292e;">                    //验证成功</span></span>
<span class="line"><span style="color:#24292e;">                    flag = true</span></span>
<span class="line"><span style="color:#24292e;">                    text1.innerHTML = &quot;验证成功&quot;</span></span>
<span class="line"><span style="color:#24292e;">                    text1.style.color = &quot;#fff&quot;</span></span>
<span class="line"><span style="color:#24292e;">                    //清除事件</span></span>
<span class="line"><span style="color:#24292e;">                    btn.onmousedown = null;</span></span>
<span class="line"><span style="color:#24292e;">                    btn.onmousemove = null;</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    //松开事件</span></span>
<span class="line"><span style="color:#24292e;">    btn.onmouseup = function() {</span></span>
<span class="line"><span style="color:#24292e;">        //清除事件</span></span>
<span class="line"><span style="color:#24292e;">        btn.onmousemove = null;</span></span>
<span class="line"><span style="color:#24292e;">        if (flag) return;</span></span>
<span class="line"><span style="color:#24292e;">        this.style.left = 0;</span></span>
<span class="line"><span style="color:#24292e;">        bg.style.width = 0 + &quot;px&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_204-纯-js无限加载瀑布-原创" tabindex="-1">204.纯 js无限加载瀑布（原创） <a class="header-anchor" href="#_204-纯-js无限加载瀑布-原创" aria-label="Permalink to &quot;204.纯 js无限加载瀑布（原创）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">//随机[m,n]之间的整数 封装</span></span>
<span class="line"><span style="color:#f6f6f4;">function randomNumber(m, n) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    return Math.floor(Math.random() * (n - m + 1) + m);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">//随机颜色 封装</span></span>
<span class="line"><span style="color:#f6f6f4;">function randomColor() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    return &quot;rgb(&quot; + randomNumber(0, 255) + &quot;,&quot; + randomNumber(0, 255) + &quot;,&quot; + randomNumber(0, 255) + &quot;)&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">//获取当前的scrollTop </span></span>
<span class="line"><span style="color:#f6f6f4;">var scrollTopDistance;</span></span>
<span class="line"><span style="color:#f6f6f4;">//获取所有的ul </span></span>
<span class="line"><span style="color:#f6f6f4;">var uls = document.querySelectorAll(&quot;ul&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">var i = 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">var k = i;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">function waterFall() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    for (i = k; i &lt; k + 4; i++) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        //创建li </span></span>
<span class="line"><span style="color:#f6f6f4;">        var li = document.createElement(&quot;li&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        //随机颜色 </span></span>
<span class="line"><span style="color:#f6f6f4;">        li.style.backgroundColor = randomColor();</span></span>
<span class="line"><span style="color:#f6f6f4;">        //随机高度 </span></span>
<span class="line"><span style="color:#f6f6f4;">        li.style.height = randomNumber(120, 400) + &quot;px&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">        //手动转换为字符串 </span></span>
<span class="line"><span style="color:#f6f6f4;">        li.innerHTML = i + 1 + &quot;&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">        //插入到对应的ul中 </span></span>
<span class="line"><span style="color:#f6f6f4;">        //判断哪个ul的高度低，该次创建的li就插入到此ul中 </span></span>
<span class="line"><span style="color:#f6f6f4;">        var index = 0; //记录下标 </span></span>
<span class="line"><span style="color:#f6f6f4;">        for (var j = 0; j &lt; uls.length; j++) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            if (uls[j].offsetHeight &lt; uls[index].offsetHeight) {</span></span>
<span class="line"><span style="color:#f6f6f4;">                index = j;</span></span>
<span class="line"><span style="color:#f6f6f4;">            }</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">        //将元素节点插入文档中 </span></span>
<span class="line"><span style="color:#f6f6f4;">        uls[index].appendChild(li);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    k = i;</span></span>
<span class="line"><span style="color:#f6f6f4;">    return uls[index].offsetHeight;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">waterFall();</span></span>
<span class="line"><span style="color:#f6f6f4;">//鼠标滚轮事件,由于右侧没有滚轮，所以使用onmousewheel事件</span></span>
<span class="line"><span style="color:#f6f6f4;">window.onmousewheel = function() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    //获取窗口的高度，要兼容浏览器</span></span>
<span class="line"><span style="color:#f6f6f4;">    var windowH = document.documentElement.clientHeight;</span></span>
<span class="line"><span style="color:#f6f6f4;">    //滚轮于top的距离，要兼容浏览器</span></span>
<span class="line"><span style="color:#f6f6f4;">    var scrollH = document.documentElement.scrollTop ||</span></span>
<span class="line"><span style="color:#f6f6f4;">        document.body.scrollTop;</span></span>
<span class="line"><span style="color:#f6f6f4;">    //获取窗口的可见高度</span></span>
<span class="line"><span style="color:#f6f6f4;">    var documentH = document.documentElement.scrollHeight ||</span></span>
<span class="line"><span style="color:#f6f6f4;">        document.body.scrollHeight;</span></span>
<span class="line"><span style="color:#f6f6f4;">    //窗口的高度 + 滚轮与顶部的距离 &gt; 窗口的可见高度-200</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (windowH + scrollH &gt; documentH - 200) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        //执行此函数 </span></span>
<span class="line"><span style="color:#f6f6f4;">        waterFall()</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//随机[m,n]之间的整数 封装</span></span>
<span class="line"><span style="color:#24292e;">function randomNumber(m, n) {</span></span>
<span class="line"><span style="color:#24292e;">    return Math.floor(Math.random() * (n - m + 1) + m);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">//随机颜色 封装</span></span>
<span class="line"><span style="color:#24292e;">function randomColor() {</span></span>
<span class="line"><span style="color:#24292e;">    return &quot;rgb(&quot; + randomNumber(0, 255) + &quot;,&quot; + randomNumber(0, 255) + &quot;,&quot; + randomNumber(0, 255) + &quot;)&quot;;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//获取当前的scrollTop </span></span>
<span class="line"><span style="color:#24292e;">var scrollTopDistance;</span></span>
<span class="line"><span style="color:#24292e;">//获取所有的ul </span></span>
<span class="line"><span style="color:#24292e;">var uls = document.querySelectorAll(&quot;ul&quot;);</span></span>
<span class="line"><span style="color:#24292e;">var i = 0;</span></span>
<span class="line"><span style="color:#24292e;">var k = i;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function waterFall() {</span></span>
<span class="line"><span style="color:#24292e;">    for (i = k; i &lt; k + 4; i++) {</span></span>
<span class="line"><span style="color:#24292e;">        //创建li </span></span>
<span class="line"><span style="color:#24292e;">        var li = document.createElement(&quot;li&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        //随机颜色 </span></span>
<span class="line"><span style="color:#24292e;">        li.style.backgroundColor = randomColor();</span></span>
<span class="line"><span style="color:#24292e;">        //随机高度 </span></span>
<span class="line"><span style="color:#24292e;">        li.style.height = randomNumber(120, 400) + &quot;px&quot;;</span></span>
<span class="line"><span style="color:#24292e;">        //手动转换为字符串 </span></span>
<span class="line"><span style="color:#24292e;">        li.innerHTML = i + 1 + &quot;&quot;;</span></span>
<span class="line"><span style="color:#24292e;">        //插入到对应的ul中 </span></span>
<span class="line"><span style="color:#24292e;">        //判断哪个ul的高度低，该次创建的li就插入到此ul中 </span></span>
<span class="line"><span style="color:#24292e;">        var index = 0; //记录下标 </span></span>
<span class="line"><span style="color:#24292e;">        for (var j = 0; j &lt; uls.length; j++) {</span></span>
<span class="line"><span style="color:#24292e;">            if (uls[j].offsetHeight &lt; uls[index].offsetHeight) {</span></span>
<span class="line"><span style="color:#24292e;">                index = j;</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        //将元素节点插入文档中 </span></span>
<span class="line"><span style="color:#24292e;">        uls[index].appendChild(li);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    k = i;</span></span>
<span class="line"><span style="color:#24292e;">    return uls[index].offsetHeight;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">waterFall();</span></span>
<span class="line"><span style="color:#24292e;">//鼠标滚轮事件,由于右侧没有滚轮，所以使用onmousewheel事件</span></span>
<span class="line"><span style="color:#24292e;">window.onmousewheel = function() {</span></span>
<span class="line"><span style="color:#24292e;">    //获取窗口的高度，要兼容浏览器</span></span>
<span class="line"><span style="color:#24292e;">    var windowH = document.documentElement.clientHeight;</span></span>
<span class="line"><span style="color:#24292e;">    //滚轮于top的距离，要兼容浏览器</span></span>
<span class="line"><span style="color:#24292e;">    var scrollH = document.documentElement.scrollTop ||</span></span>
<span class="line"><span style="color:#24292e;">        document.body.scrollTop;</span></span>
<span class="line"><span style="color:#24292e;">    //获取窗口的可见高度</span></span>
<span class="line"><span style="color:#24292e;">    var documentH = document.documentElement.scrollHeight ||</span></span>
<span class="line"><span style="color:#24292e;">        document.body.scrollHeight;</span></span>
<span class="line"><span style="color:#24292e;">    //窗口的高度 + 滚轮与顶部的距离 &gt; 窗口的可见高度-200</span></span>
<span class="line"><span style="color:#24292e;">    if (windowH + scrollH &gt; documentH - 200) {</span></span>
<span class="line"><span style="color:#24292e;">        //执行此函数 </span></span>
<span class="line"><span style="color:#24292e;">        waterFall()</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_205-jquery两个元素比较高度" tabindex="-1">205.jQuery两个元素比较高度 <a class="header-anchor" href="#_205-jquery两个元素比较高度" aria-label="Permalink to &quot;205.jQuery两个元素比较高度&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">$(*function* () {</span></span>
<span class="line"><span style="color:#f6f6f4;">  *var* w_max = 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">  *//求最大高度*</span></span>
<span class="line"><span style="color:#f6f6f4;">  $(&quot;#MenuNavigation li&quot;).each(*function* () {</span></span>
<span class="line"><span style="color:#f6f6f4;">​    *var* w = $(*this*).innerWidth();</span></span>
<span class="line"><span style="color:#f6f6f4;">​    w_max = w &gt; w_max ? w : w_max;</span></span>
<span class="line"><span style="color:#f6f6f4;">  })</span></span>
<span class="line"><span style="color:#f6f6f4;">  $(&quot;#MenuNavigation li&quot;).width(w_max)</span></span>
<span class="line"><span style="color:#f6f6f4;">  *//将最大高度赋值给所有元素，*</span></span>
<span class="line"><span style="color:#f6f6f4;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$(*function* () {</span></span>
<span class="line"><span style="color:#24292e;">  *var* w_max = 0;</span></span>
<span class="line"><span style="color:#24292e;">  *//求最大高度*</span></span>
<span class="line"><span style="color:#24292e;">  $(&quot;#MenuNavigation li&quot;).each(*function* () {</span></span>
<span class="line"><span style="color:#24292e;">​    *var* w = $(*this*).innerWidth();</span></span>
<span class="line"><span style="color:#24292e;">​    w_max = w &gt; w_max ? w : w_max;</span></span>
<span class="line"><span style="color:#24292e;">  })</span></span>
<span class="line"><span style="color:#24292e;">  $(&quot;#MenuNavigation li&quot;).width(w_max)</span></span>
<span class="line"><span style="color:#24292e;">  *//将最大高度赋值给所有元素，*</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><h2 id="_206-js定时清除缓存-存储缓存-获取缓存" tabindex="-1">206.js定时清除缓存，存储缓存，获取缓存 <a class="header-anchor" href="#_206-js定时清除缓存-存储缓存-获取缓存" aria-label="Permalink to &quot;206.js定时清除缓存，存储缓存，获取缓存&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 封装本地存储的方法</span></span>
<span class="line"><span style="color:#f6f6f4;">export const storage = {</span></span>
<span class="line"><span style="color:#f6f6f4;">  set: function(variable, value, ttl_ms) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    var data = { value: value, expires_at: new Date(ttl_ms).getTime() };</span></span>
<span class="line"><span style="color:#f6f6f4;">    localStorage.setItem(variable.toString(), JSON.stringify(data));</span></span>
<span class="line"><span style="color:#f6f6f4;">  },</span></span>
<span class="line"><span style="color:#f6f6f4;">  get: function(variable) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    var data = JSON.parse(localStorage.getItem(variable.toString()));</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (data !== null) {</span></span>
<span class="line"><span style="color:#f6f6f4;">      debugger</span></span>
<span class="line"><span style="color:#f6f6f4;">      if (data.expires_at !== null &amp;&amp; data.expires_at &lt; new Date().getTime()) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        localStorage.removeItem(variable.toString());</span></span>
<span class="line"><span style="color:#f6f6f4;">      } else {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return data.value;</span></span>
<span class="line"><span style="color:#f6f6f4;">      }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    return null;</span></span>
<span class="line"><span style="color:#f6f6f4;">  },</span></span>
<span class="line"><span style="color:#f6f6f4;">  remove(key) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    localStorage.removeItem(key);</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 封装本地存储的方法</span></span>
<span class="line"><span style="color:#24292e;">export const storage = {</span></span>
<span class="line"><span style="color:#24292e;">  set: function(variable, value, ttl_ms) {</span></span>
<span class="line"><span style="color:#24292e;">    var data = { value: value, expires_at: new Date(ttl_ms).getTime() };</span></span>
<span class="line"><span style="color:#24292e;">    localStorage.setItem(variable.toString(), JSON.stringify(data));</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  get: function(variable) {</span></span>
<span class="line"><span style="color:#24292e;">    var data = JSON.parse(localStorage.getItem(variable.toString()));</span></span>
<span class="line"><span style="color:#24292e;">    if (data !== null) {</span></span>
<span class="line"><span style="color:#24292e;">      debugger</span></span>
<span class="line"><span style="color:#24292e;">      if (data.expires_at !== null &amp;&amp; data.expires_at &lt; new Date().getTime()) {</span></span>
<span class="line"><span style="color:#24292e;">        localStorage.removeItem(variable.toString());</span></span>
<span class="line"><span style="color:#24292e;">      } else {</span></span>
<span class="line"><span style="color:#24292e;">        return data.value;</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    return null;</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  remove(key) {</span></span>
<span class="line"><span style="color:#24292e;">    localStorage.removeItem(key);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_207-数组降维" tabindex="-1">207.数组降维 <a class="header-anchor" href="#_207-数组降维" aria-label="Permalink to &quot;207.数组降维&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">//数组降维</span></span>
<span class="line"><span style="color:#f6f6f4;">reduceDimension(arr) {</span></span>
<span class="line"><span style="color:#f6f6f4;">      var reduced = [];</span></span>
<span class="line"><span style="color:#f6f6f4;">      for (var i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        reduced = reduced.concat(arr[i]);</span></span>
<span class="line"><span style="color:#f6f6f4;">      }</span></span>
<span class="line"><span style="color:#f6f6f4;">      return reduced;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//数组降维</span></span>
<span class="line"><span style="color:#24292e;">reduceDimension(arr) {</span></span>
<span class="line"><span style="color:#24292e;">      var reduced = [];</span></span>
<span class="line"><span style="color:#24292e;">      for (var i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">        reduced = reduced.concat(arr[i]);</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">      return reduced;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_208-设置cookie-获取cookie-删除cookie" tabindex="-1">208.设置cookie,获取cookie,删除cookie <a class="header-anchor" href="#_208-设置cookie-获取cookie-删除cookie" aria-label="Permalink to &quot;208.设置cookie,获取cookie,删除cookie&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">var cookieUtil = {</span></span>
<span class="line"><span style="color:#f6f6f4;">  getCookie: function (name) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    var arrCookie = document.cookie.split(&quot;; &quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">    for (var i = 0; i &lt; arrCookie.length; i++) {</span></span>
<span class="line"><span style="color:#f6f6f4;">      var cookieItem = arrCookie[i].split(&#39;=&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">      if (cookieItem[0] == name) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return cookieItem[1];</span></span>
<span class="line"><span style="color:#f6f6f4;">      }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    return undefined;</span></span>
<span class="line"><span style="color:#f6f6f4;">  },</span></span>
<span class="line"><span style="color:#f6f6f4;">  setCookie: function (name, value, expires, path, domain, secure) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    var cookieText = encodeURIComponent(name) + &quot;=&quot; +</span></span>
<span class="line"><span style="color:#f6f6f4;">      encodeURIComponent(value);</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (expires instanceof Date) {</span></span>
<span class="line"><span style="color:#f6f6f4;">      cookieText += &quot;; expires=&quot; + expires.toGMTString();</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (path) {</span></span>
<span class="line"><span style="color:#f6f6f4;">      cookieText += &quot;; path=&quot; + path;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (domain) {</span></span>
<span class="line"><span style="color:#f6f6f4;">      cookieText += &quot;; domain=&quot; + domain;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (secure) {</span></span>
<span class="line"><span style="color:#f6f6f4;">      cookieText += &quot;; secure&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    document.cookie = cookieText;</span></span>
<span class="line"><span style="color:#f6f6f4;">  },</span></span>
<span class="line"><span style="color:#f6f6f4;">  removeCookie: function (name, path, domain, secure) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    this.set(name, &quot;&quot;, new Date(0), path, domain, secure);</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var cookieUtil = {</span></span>
<span class="line"><span style="color:#24292e;">  getCookie: function (name) {</span></span>
<span class="line"><span style="color:#24292e;">    var arrCookie = document.cookie.split(&quot;; &quot;);</span></span>
<span class="line"><span style="color:#24292e;">    for (var i = 0; i &lt; arrCookie.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">      var cookieItem = arrCookie[i].split(&#39;=&#39;);</span></span>
<span class="line"><span style="color:#24292e;">      if (cookieItem[0] == name) {</span></span>
<span class="line"><span style="color:#24292e;">        return cookieItem[1];</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    return undefined;</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  setCookie: function (name, value, expires, path, domain, secure) {</span></span>
<span class="line"><span style="color:#24292e;">    var cookieText = encodeURIComponent(name) + &quot;=&quot; +</span></span>
<span class="line"><span style="color:#24292e;">      encodeURIComponent(value);</span></span>
<span class="line"><span style="color:#24292e;">    if (expires instanceof Date) {</span></span>
<span class="line"><span style="color:#24292e;">      cookieText += &quot;; expires=&quot; + expires.toGMTString();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    if (path) {</span></span>
<span class="line"><span style="color:#24292e;">      cookieText += &quot;; path=&quot; + path;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    if (domain) {</span></span>
<span class="line"><span style="color:#24292e;">      cookieText += &quot;; domain=&quot; + domain;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    if (secure) {</span></span>
<span class="line"><span style="color:#24292e;">      cookieText += &quot;; secure&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    document.cookie = cookieText;</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  removeCookie: function (name, path, domain, secure) {</span></span>
<span class="line"><span style="color:#24292e;">    this.set(name, &quot;&quot;, new Date(0), path, domain, secure);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_209-判读是否为外链" tabindex="-1">209.判读是否为外链 <a class="header-anchor" href="#_209-判读是否为外链" aria-label="Permalink to &quot;209.判读是否为外链&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> * @description 判读是否为外链</span></span>
<span class="line"><span style="color:#f6f6f4;"> * @param path</span></span>
<span class="line"><span style="color:#f6f6f4;"> * @returns {boolean}</span></span>
<span class="line"><span style="color:#f6f6f4;">   */</span></span>
<span class="line"><span style="color:#f6f6f4;">   export function isExternal(path) {</span></span>
<span class="line"><span style="color:#f6f6f4;">     return /^(https?:|mailto:|tel:)/.test(path);</span></span>
<span class="line"><span style="color:#f6f6f4;">   }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> * @description 判读是否为外链</span></span>
<span class="line"><span style="color:#24292e;"> * @param path</span></span>
<span class="line"><span style="color:#24292e;"> * @returns {boolean}</span></span>
<span class="line"><span style="color:#24292e;">   */</span></span>
<span class="line"><span style="color:#24292e;">   export function isExternal(path) {</span></span>
<span class="line"><span style="color:#24292e;">     return /^(https?:|mailto:|tel:)/.test(path);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span></code></pre></div><h2 id="_210-校验密码是否小于6位" tabindex="-1">210.校验密码是否小于6位 <a class="header-anchor" href="#_210-校验密码是否小于6位" aria-label="Permalink to &quot;210.校验密码是否小于6位&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">    * @description 校验密码是否小于6位</span></span>
<span class="line"><span style="color:#f6f6f4;">    * @param str</span></span>
<span class="line"><span style="color:#f6f6f4;">    * @returns {boolean}</span></span>
<span class="line"><span style="color:#f6f6f4;">      */</span></span>
<span class="line"><span style="color:#f6f6f4;">      export function isPassword(str) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return str.length &gt;= 6;</span></span>
<span class="line"><span style="color:#f6f6f4;">      }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">    * @description 校验密码是否小于6位</span></span>
<span class="line"><span style="color:#24292e;">    * @param str</span></span>
<span class="line"><span style="color:#24292e;">    * @returns {boolean}</span></span>
<span class="line"><span style="color:#24292e;">      */</span></span>
<span class="line"><span style="color:#24292e;">      export function isPassword(str) {</span></span>
<span class="line"><span style="color:#24292e;">        return str.length &gt;= 6;</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span></code></pre></div><h2 id="_211-判断是否为数字" tabindex="-1">211.判断是否为数字 <a class="header-anchor" href="#_211-判断是否为数字" aria-label="Permalink to &quot;211.判断是否为数字&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  * @description 判断是否为数字</span></span>
<span class="line"><span style="color:#f6f6f4;">  * @param value</span></span>
<span class="line"><span style="color:#f6f6f4;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#f6f6f4;">   */</span></span>
<span class="line"><span style="color:#f6f6f4;">   export function isNumber(value) {</span></span>
<span class="line"><span style="color:#f6f6f4;">     const reg = /^[0-9]*$/;</span></span>
<span class="line"><span style="color:#f6f6f4;">     return reg.test(value);</span></span>
<span class="line"><span style="color:#f6f6f4;">   }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  * @description 判断是否为数字</span></span>
<span class="line"><span style="color:#24292e;">  * @param value</span></span>
<span class="line"><span style="color:#24292e;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#24292e;">   */</span></span>
<span class="line"><span style="color:#24292e;">   export function isNumber(value) {</span></span>
<span class="line"><span style="color:#24292e;">     const reg = /^[0-9]*$/;</span></span>
<span class="line"><span style="color:#24292e;">     return reg.test(value);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span></code></pre></div><h2 id="_212-判断是否是名称" tabindex="-1">212.判断是否是名称 <a class="header-anchor" href="#_212-判断是否是名称" aria-label="Permalink to &quot;212.判断是否是名称&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">   * @description 判断是否是名称</span></span>
<span class="line"><span style="color:#f6f6f4;">   * @param value</span></span>
<span class="line"><span style="color:#f6f6f4;"> * @returns {boolean}</span></span>
<span class="line"><span style="color:#f6f6f4;">    */</span></span>
<span class="line"><span style="color:#f6f6f4;">    export function isName(value) {</span></span>
<span class="line"><span style="color:#f6f6f4;">      const reg = /^[\\u4e00-\\u9fa5a-zA-Z0-9]+$/;</span></span>
<span class="line"><span style="color:#f6f6f4;">      return reg.test(value);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">   * @description 判断是否是名称</span></span>
<span class="line"><span style="color:#24292e;">   * @param value</span></span>
<span class="line"><span style="color:#24292e;"> * @returns {boolean}</span></span>
<span class="line"><span style="color:#24292e;">    */</span></span>
<span class="line"><span style="color:#24292e;">    export function isName(value) {</span></span>
<span class="line"><span style="color:#24292e;">      const reg = /^[\\u4e00-\\u9fa5a-zA-Z0-9]+$/;</span></span>
<span class="line"><span style="color:#24292e;">      return reg.test(value);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h2 id="_213-判断是否为ip" tabindex="-1">213.判断是否为IP <a class="header-anchor" href="#_213-判断是否为ip" aria-label="Permalink to &quot;213.判断是否为IP&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  * @description 判断是否为IP</span></span>
<span class="line"><span style="color:#f6f6f4;">  * @param ip</span></span>
<span class="line"><span style="color:#f6f6f4;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#f6f6f4;">   */</span></span>
<span class="line"><span style="color:#f6f6f4;">   export function isIP(ip) {</span></span>
<span class="line"><span style="color:#f6f6f4;">     const reg = /^(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])$/;</span></span>
<span class="line"><span style="color:#f6f6f4;">     return reg.test(ip);</span></span>
<span class="line"><span style="color:#f6f6f4;">   }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  * @description 判断是否为IP</span></span>
<span class="line"><span style="color:#24292e;">  * @param ip</span></span>
<span class="line"><span style="color:#24292e;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#24292e;">   */</span></span>
<span class="line"><span style="color:#24292e;">   export function isIP(ip) {</span></span>
<span class="line"><span style="color:#24292e;">     const reg = /^(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])$/;</span></span>
<span class="line"><span style="color:#24292e;">     return reg.test(ip);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span></code></pre></div><h2 id="_214-判断是否是传统网站" tabindex="-1">214.判断是否是传统网站 <a class="header-anchor" href="#_214-判断是否是传统网站" aria-label="Permalink to &quot;214.判断是否是传统网站&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  * @description 判断是否是传统网站</span></span>
<span class="line"><span style="color:#f6f6f4;">  * @param url</span></span>
<span class="line"><span style="color:#f6f6f4;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#f6f6f4;">   */</span></span>
<span class="line"><span style="color:#f6f6f4;">   export function isUrl(url) {</span></span>
<span class="line"><span style="color:#f6f6f4;">     const reg = /^(https?|ftp):\\/\\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&amp;%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\\.)*[a-zA-Z0-9-]+\\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\\/($|[a-zA-Z0-9.,?&#39;\\\\+&amp;%$#=~_-]+))*$/;</span></span>
<span class="line"><span style="color:#f6f6f4;">     return reg.test(url);</span></span>
<span class="line"><span style="color:#f6f6f4;">   }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  * @description 判断是否是传统网站</span></span>
<span class="line"><span style="color:#24292e;">  * @param url</span></span>
<span class="line"><span style="color:#24292e;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#24292e;">   */</span></span>
<span class="line"><span style="color:#24292e;">   export function isUrl(url) {</span></span>
<span class="line"><span style="color:#24292e;">     const reg = /^(https?|ftp):\\/\\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&amp;%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\\.)*[a-zA-Z0-9-]+\\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\\/($|[a-zA-Z0-9.,?&#39;\\\\+&amp;%$#=~_-]+))*$/;</span></span>
<span class="line"><span style="color:#24292e;">     return reg.test(url);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span></code></pre></div><h2 id="_215-判断是否是小写字母" tabindex="-1">215.判断是否是小写字母 <a class="header-anchor" href="#_215-判断是否是小写字母" aria-label="Permalink to &quot;215.判断是否是小写字母&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  * @description 判断是否是小写字母</span></span>
<span class="line"><span style="color:#f6f6f4;">  * @param str</span></span>
<span class="line"><span style="color:#f6f6f4;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#f6f6f4;">   */</span></span>
<span class="line"><span style="color:#f6f6f4;">   export function isLowerCase(str) {</span></span>
<span class="line"><span style="color:#f6f6f4;">     const reg = /^[a-z]+$/;</span></span>
<span class="line"><span style="color:#f6f6f4;">     return reg.test(str);</span></span>
<span class="line"><span style="color:#f6f6f4;">   }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  * @description 判断是否是小写字母</span></span>
<span class="line"><span style="color:#24292e;">  * @param str</span></span>
<span class="line"><span style="color:#24292e;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#24292e;">   */</span></span>
<span class="line"><span style="color:#24292e;">   export function isLowerCase(str) {</span></span>
<span class="line"><span style="color:#24292e;">     const reg = /^[a-z]+$/;</span></span>
<span class="line"><span style="color:#24292e;">     return reg.test(str);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span></code></pre></div><h2 id="_216-判断是否是大写字母" tabindex="-1">216.判断是否是大写字母 <a class="header-anchor" href="#_216-判断是否是大写字母" aria-label="Permalink to &quot;216.判断是否是大写字母&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  * @description 判断是否是大写字母</span></span>
<span class="line"><span style="color:#f6f6f4;">  * @param str</span></span>
<span class="line"><span style="color:#f6f6f4;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#f6f6f4;">   */</span></span>
<span class="line"><span style="color:#f6f6f4;">   export function isUpperCase(str) {</span></span>
<span class="line"><span style="color:#f6f6f4;">     const reg = /^[A-Z]+$/;</span></span>
<span class="line"><span style="color:#f6f6f4;">     return reg.test(str);</span></span>
<span class="line"><span style="color:#f6f6f4;">   }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  * @description 判断是否是大写字母</span></span>
<span class="line"><span style="color:#24292e;">  * @param str</span></span>
<span class="line"><span style="color:#24292e;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#24292e;">   */</span></span>
<span class="line"><span style="color:#24292e;">   export function isUpperCase(str) {</span></span>
<span class="line"><span style="color:#24292e;">     const reg = /^[A-Z]+$/;</span></span>
<span class="line"><span style="color:#24292e;">     return reg.test(str);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span></code></pre></div><h2 id="_217-判断是否是大写字母开头" tabindex="-1">217.判断是否是大写字母开头 <a class="header-anchor" href="#_217-判断是否是大写字母开头" aria-label="Permalink to &quot;217.判断是否是大写字母开头&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  * @description 判断是否是大写字母开头</span></span>
<span class="line"><span style="color:#f6f6f4;">  * @param str</span></span>
<span class="line"><span style="color:#f6f6f4;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#f6f6f4;">   */</span></span>
<span class="line"><span style="color:#f6f6f4;">   export function isAlphabets(str) {</span></span>
<span class="line"><span style="color:#f6f6f4;">     const reg = /^[A-Za-z]+$/;</span></span>
<span class="line"><span style="color:#f6f6f4;">     return reg.test(str);</span></span>
<span class="line"><span style="color:#f6f6f4;">   }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  * @description 判断是否是大写字母开头</span></span>
<span class="line"><span style="color:#24292e;">  * @param str</span></span>
<span class="line"><span style="color:#24292e;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#24292e;">   */</span></span>
<span class="line"><span style="color:#24292e;">   export function isAlphabets(str) {</span></span>
<span class="line"><span style="color:#24292e;">     const reg = /^[A-Za-z]+$/;</span></span>
<span class="line"><span style="color:#24292e;">     return reg.test(str);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span></code></pre></div><h2 id="_218-判断是否是字符串" tabindex="-1">218.判断是否是字符串 <a class="header-anchor" href="#_218-判断是否是字符串" aria-label="Permalink to &quot;218.判断是否是字符串&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  * @description 判断是否是字符串</span></span>
<span class="line"><span style="color:#f6f6f4;">* @param str</span></span>
<span class="line"><span style="color:#f6f6f4;"> * @returns {boolean}</span></span>
<span class="line"><span style="color:#f6f6f4;">   */</span></span>
<span class="line"><span style="color:#f6f6f4;">   export function isString(str) {</span></span>
<span class="line"><span style="color:#f6f6f4;">     return typeof str === &quot;string&quot; || str instanceof String;</span></span>
<span class="line"><span style="color:#f6f6f4;">   }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  * @description 判断是否是字符串</span></span>
<span class="line"><span style="color:#24292e;">* @param str</span></span>
<span class="line"><span style="color:#24292e;"> * @returns {boolean}</span></span>
<span class="line"><span style="color:#24292e;">   */</span></span>
<span class="line"><span style="color:#24292e;">   export function isString(str) {</span></span>
<span class="line"><span style="color:#24292e;">     return typeof str === &quot;string&quot; || str instanceof String;</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span></code></pre></div><h2 id="_219-判断是否是数组" tabindex="-1">219.判断是否是数组 <a class="header-anchor" href="#_219-判断是否是数组" aria-label="Permalink to &quot;219.判断是否是数组&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  * @description 判断是否是数组</span></span>
<span class="line"><span style="color:#f6f6f4;">    * @param arg</span></span>
<span class="line"><span style="color:#f6f6f4;">  * @returns {arg is any[]|boolean}</span></span>
<span class="line"><span style="color:#f6f6f4;">    */</span></span>
<span class="line"><span style="color:#f6f6f4;">  export function isArray(arg) {</span></span>
<span class="line"><span style="color:#f6f6f4;">     if (typeof Array.isArray === &quot;undefined&quot;) {</span></span>
<span class="line"><span style="color:#f6f6f4;">   return Object.prototype.toString.call(arg) === &quot;[object Array]&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">     }</span></span>
<span class="line"><span style="color:#f6f6f4;">     return Array.isArray(arg);</span></span>
<span class="line"><span style="color:#f6f6f4;">   }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  * @description 判断是否是数组</span></span>
<span class="line"><span style="color:#24292e;">    * @param arg</span></span>
<span class="line"><span style="color:#24292e;">  * @returns {arg is any[]|boolean}</span></span>
<span class="line"><span style="color:#24292e;">    */</span></span>
<span class="line"><span style="color:#24292e;">  export function isArray(arg) {</span></span>
<span class="line"><span style="color:#24292e;">     if (typeof Array.isArray === &quot;undefined&quot;) {</span></span>
<span class="line"><span style="color:#24292e;">   return Object.prototype.toString.call(arg) === &quot;[object Array]&quot;;</span></span>
<span class="line"><span style="color:#24292e;">     }</span></span>
<span class="line"><span style="color:#24292e;">     return Array.isArray(arg);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span></code></pre></div><h2 id="_220-判断是否是端口号" tabindex="-1">220.判断是否是端口号 <a class="header-anchor" href="#_220-判断是否是端口号" aria-label="Permalink to &quot;220.判断是否是端口号&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  * @description 判断是否是端口号</span></span>
<span class="line"><span style="color:#f6f6f4;">  * @param str</span></span>
<span class="line"><span style="color:#f6f6f4;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#f6f6f4;">   */</span></span>
<span class="line"><span style="color:#f6f6f4;">   export function isPort(str) {</span></span>
<span class="line"><span style="color:#f6f6f4;">     const reg = /^([0-9]|[1-9]\\d|[1-9]\\d{2}|[1-9]\\d{3}|[1-5]\\d{4}|6[0-4]\\d{3}|65[0-4]\\d{2}|655[0-2]\\d|6553[0-5])$/;</span></span>
<span class="line"><span style="color:#f6f6f4;">     return reg.test(str);</span></span>
<span class="line"><span style="color:#f6f6f4;">   }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  * @description 判断是否是端口号</span></span>
<span class="line"><span style="color:#24292e;">  * @param str</span></span>
<span class="line"><span style="color:#24292e;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#24292e;">   */</span></span>
<span class="line"><span style="color:#24292e;">   export function isPort(str) {</span></span>
<span class="line"><span style="color:#24292e;">     const reg = /^([0-9]|[1-9]\\d|[1-9]\\d{2}|[1-9]\\d{3}|[1-5]\\d{4}|6[0-4]\\d{3}|65[0-4]\\d{2}|655[0-2]\\d|6553[0-5])$/;</span></span>
<span class="line"><span style="color:#24292e;">     return reg.test(str);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span></code></pre></div><h2 id="_221-判断是否是手机号" tabindex="-1">221.判断是否是手机号 <a class="header-anchor" href="#_221-判断是否是手机号" aria-label="Permalink to &quot;221.判断是否是手机号&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  * @description 判断是否是手机号</span></span>
<span class="line"><span style="color:#f6f6f4;">  * @param str</span></span>
<span class="line"><span style="color:#f6f6f4;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#f6f6f4;">   */</span></span>
<span class="line"><span style="color:#f6f6f4;">   export function isPhone(str) {</span></span>
<span class="line"><span style="color:#f6f6f4;">     const reg = /^1\\d{10}$/;</span></span>
<span class="line"><span style="color:#f6f6f4;">     return reg.test(str);</span></span>
<span class="line"><span style="color:#f6f6f4;">   }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  * @description 判断是否是手机号</span></span>
<span class="line"><span style="color:#24292e;">  * @param str</span></span>
<span class="line"><span style="color:#24292e;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#24292e;">   */</span></span>
<span class="line"><span style="color:#24292e;">   export function isPhone(str) {</span></span>
<span class="line"><span style="color:#24292e;">     const reg = /^1\\d{10}$/;</span></span>
<span class="line"><span style="color:#24292e;">     return reg.test(str);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span></code></pre></div><h2 id="_222-判断是否是身份证号-第二代" tabindex="-1">222.判断是否是身份证号(第二代) <a class="header-anchor" href="#_222-判断是否是身份证号-第二代" aria-label="Permalink to &quot;222.判断是否是身份证号(第二代)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  * @description 判断是否是身份证号(第二代)</span></span>
<span class="line"><span style="color:#f6f6f4;">  * @param str</span></span>
<span class="line"><span style="color:#f6f6f4;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#f6f6f4;">   */</span></span>
<span class="line"><span style="color:#f6f6f4;">   export function isIdCard(str) {</span></span>
<span class="line"><span style="color:#f6f6f4;">     const reg = /^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$/;</span></span>
<span class="line"><span style="color:#f6f6f4;">     return reg.test(str);</span></span>
<span class="line"><span style="color:#f6f6f4;">   }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  * @description 判断是否是身份证号(第二代)</span></span>
<span class="line"><span style="color:#24292e;">  * @param str</span></span>
<span class="line"><span style="color:#24292e;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#24292e;">   */</span></span>
<span class="line"><span style="color:#24292e;">   export function isIdCard(str) {</span></span>
<span class="line"><span style="color:#24292e;">     const reg = /^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$/;</span></span>
<span class="line"><span style="color:#24292e;">     return reg.test(str);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span></code></pre></div><h2 id="_223-判断是否是邮箱" tabindex="-1">223.判断是否是邮箱 <a class="header-anchor" href="#_223-判断是否是邮箱" aria-label="Permalink to &quot;223.判断是否是邮箱&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  * @description 判断是否是邮箱</span></span>
<span class="line"><span style="color:#f6f6f4;">  * @param str</span></span>
<span class="line"><span style="color:#f6f6f4;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#f6f6f4;">   */</span></span>
<span class="line"><span style="color:#f6f6f4;">   export function isEmail(str) {</span></span>
<span class="line"><span style="color:#f6f6f4;">     const reg = /^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/;</span></span>
<span class="line"><span style="color:#f6f6f4;">     return reg.test(str);</span></span>
<span class="line"><span style="color:#f6f6f4;">   }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  * @description 判断是否是邮箱</span></span>
<span class="line"><span style="color:#24292e;">  * @param str</span></span>
<span class="line"><span style="color:#24292e;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#24292e;">   */</span></span>
<span class="line"><span style="color:#24292e;">   export function isEmail(str) {</span></span>
<span class="line"><span style="color:#24292e;">     const reg = /^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/;</span></span>
<span class="line"><span style="color:#24292e;">     return reg.test(str);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span></code></pre></div><h2 id="_224-判断是否中文" tabindex="-1">224.判断是否中文 <a class="header-anchor" href="#_224-判断是否中文" aria-label="Permalink to &quot;224.判断是否中文&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  * @description 判断是否中文</span></span>
<span class="line"><span style="color:#f6f6f4;">  * @param str</span></span>
<span class="line"><span style="color:#f6f6f4;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#f6f6f4;">   */</span></span>
<span class="line"><span style="color:#f6f6f4;">   export function isChina(str) {</span></span>
<span class="line"><span style="color:#f6f6f4;">     const reg = /^[\\u4E00-\\u9FA5]{2,4}$/;</span></span>
<span class="line"><span style="color:#f6f6f4;">     return reg.test(str);</span></span>
<span class="line"><span style="color:#f6f6f4;">   }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  * @description 判断是否中文</span></span>
<span class="line"><span style="color:#24292e;">  * @param str</span></span>
<span class="line"><span style="color:#24292e;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#24292e;">   */</span></span>
<span class="line"><span style="color:#24292e;">   export function isChina(str) {</span></span>
<span class="line"><span style="color:#24292e;">     const reg = /^[\\u4E00-\\u9FA5]{2,4}$/;</span></span>
<span class="line"><span style="color:#24292e;">     return reg.test(str);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span></code></pre></div><h2 id="_225-判断是否为空" tabindex="-1">225.判断是否为空 <a class="header-anchor" href="#_225-判断是否为空" aria-label="Permalink to &quot;225.判断是否为空&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  * @description 判断是否为空</span></span>
<span class="line"><span style="color:#f6f6f4;">    * @param str</span></span>
<span class="line"><span style="color:#f6f6f4;">    * @returns {boolean}</span></span>
<span class="line"><span style="color:#f6f6f4;">      */</span></span>
<span class="line"><span style="color:#f6f6f4;">      export function isBlank(str) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return (</span></span>
<span class="line"><span style="color:#f6f6f4;">    str == null ||</span></span>
<span class="line"><span style="color:#f6f6f4;">  false ||</span></span>
<span class="line"><span style="color:#f6f6f4;">   str === &quot;&quot; ||</span></span>
<span class="line"><span style="color:#f6f6f4;">   str.trim() === &quot;&quot; ||</span></span>
<span class="line"><span style="color:#f6f6f4;">   str.toLocaleLowerCase().trim() === &quot;null&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">     );</span></span>
<span class="line"><span style="color:#f6f6f4;">   }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  * @description 判断是否为空</span></span>
<span class="line"><span style="color:#24292e;">    * @param str</span></span>
<span class="line"><span style="color:#24292e;">    * @returns {boolean}</span></span>
<span class="line"><span style="color:#24292e;">      */</span></span>
<span class="line"><span style="color:#24292e;">      export function isBlank(str) {</span></span>
<span class="line"><span style="color:#24292e;">        return (</span></span>
<span class="line"><span style="color:#24292e;">    str == null ||</span></span>
<span class="line"><span style="color:#24292e;">  false ||</span></span>
<span class="line"><span style="color:#24292e;">   str === &quot;&quot; ||</span></span>
<span class="line"><span style="color:#24292e;">   str.trim() === &quot;&quot; ||</span></span>
<span class="line"><span style="color:#24292e;">   str.toLocaleLowerCase().trim() === &quot;null&quot;</span></span>
<span class="line"><span style="color:#24292e;">     );</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span></code></pre></div><h2 id="_226-判断是否为固话" tabindex="-1">226.判断是否为固话 <a class="header-anchor" href="#_226-判断是否为固话" aria-label="Permalink to &quot;226.判断是否为固话&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  * @description 判断是否为固话</span></span>
<span class="line"><span style="color:#f6f6f4;">  * @param str</span></span>
<span class="line"><span style="color:#f6f6f4;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#f6f6f4;">   */</span></span>
<span class="line"><span style="color:#f6f6f4;">   export function isTel(str) {</span></span>
<span class="line"><span style="color:#f6f6f4;">     const reg = /^(400|800)([0-9\\\\-]{7,10})|(([0-9]{4}|[0-9]{3})(-| )?)?([0-9]{7,8})((-| |转)*([0-9]{1,4}))?$/;</span></span>
<span class="line"><span style="color:#f6f6f4;">     return reg.test(str);</span></span>
<span class="line"><span style="color:#f6f6f4;">   }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  * @description 判断是否为固话</span></span>
<span class="line"><span style="color:#24292e;">  * @param str</span></span>
<span class="line"><span style="color:#24292e;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#24292e;">   */</span></span>
<span class="line"><span style="color:#24292e;">   export function isTel(str) {</span></span>
<span class="line"><span style="color:#24292e;">     const reg = /^(400|800)([0-9\\\\-]{7,10})|(([0-9]{4}|[0-9]{3})(-| )?)?([0-9]{7,8})((-| |转)*([0-9]{1,4}))?$/;</span></span>
<span class="line"><span style="color:#24292e;">     return reg.test(str);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span></code></pre></div><h2 id="_227-判断是否为数字且最多两位小数" tabindex="-1">227.判断是否为数字且最多两位小数 <a class="header-anchor" href="#_227-判断是否为数字且最多两位小数" aria-label="Permalink to &quot;227.判断是否为数字且最多两位小数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  * @description 判断是否为数字且最多两位小数</span></span>
<span class="line"><span style="color:#f6f6f4;">  * @param str</span></span>
<span class="line"><span style="color:#f6f6f4;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#f6f6f4;">   */</span></span>
<span class="line"><span style="color:#f6f6f4;">   export function isNum(str) {</span></span>
<span class="line"><span style="color:#f6f6f4;">     const reg = /^\\d+(\\.\\d{1,2})?$/;</span></span>
<span class="line"><span style="color:#f6f6f4;">     return reg.test(str);</span></span>
<span class="line"><span style="color:#f6f6f4;">   }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  * @description 判断是否为数字且最多两位小数</span></span>
<span class="line"><span style="color:#24292e;">  * @param str</span></span>
<span class="line"><span style="color:#24292e;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#24292e;">   */</span></span>
<span class="line"><span style="color:#24292e;">   export function isNum(str) {</span></span>
<span class="line"><span style="color:#24292e;">     const reg = /^\\d+(\\.\\d{1,2})?$/;</span></span>
<span class="line"><span style="color:#24292e;">     return reg.test(str);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span></code></pre></div><h2 id="_228-判断经度-180-0-180-0-整数部分为0-180-必须输入1到5位小数" tabindex="-1">228.判断经度 -180.0～+180.0（整数部分为0～180，必须输入1到5位小数） <a class="header-anchor" href="#_228-判断经度-180-0-180-0-整数部分为0-180-必须输入1到5位小数" aria-label="Permalink to &quot;228.判断经度 -180.0～+180.0（整数部分为0～180，必须输入1到5位小数）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  * @description 判断经度 -180.0～+180.0（整数部分为0～180，必须输入1到5位小数）</span></span>
<span class="line"><span style="color:#f6f6f4;">  * @param str</span></span>
<span class="line"><span style="color:#f6f6f4;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#f6f6f4;">   */</span></span>
<span class="line"><span style="color:#f6f6f4;">   export function isLongitude(str) {</span></span>
<span class="line"><span style="color:#f6f6f4;">     const reg = /^[-|+]?(0?\\d{1,2}\\.\\d{1,5}|1[0-7]?\\d{1}\\.\\d{1,5}|180\\.0{1,5})$/;</span></span>
<span class="line"><span style="color:#f6f6f4;">     return reg.test(str);</span></span>
<span class="line"><span style="color:#f6f6f4;">   }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  * @description 判断经度 -180.0～+180.0（整数部分为0～180，必须输入1到5位小数）</span></span>
<span class="line"><span style="color:#24292e;">  * @param str</span></span>
<span class="line"><span style="color:#24292e;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#24292e;">   */</span></span>
<span class="line"><span style="color:#24292e;">   export function isLongitude(str) {</span></span>
<span class="line"><span style="color:#24292e;">     const reg = /^[-|+]?(0?\\d{1,2}\\.\\d{1,5}|1[0-7]?\\d{1}\\.\\d{1,5}|180\\.0{1,5})$/;</span></span>
<span class="line"><span style="color:#24292e;">     return reg.test(str);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span></code></pre></div><h2 id="_229-判断纬度-90-0-90-0-整数部分为0-90-必须输入1到5位小数" tabindex="-1">229.判断纬度 -90.0～+90.0（整数部分为0～90，必须输入1到5位小数） <a class="header-anchor" href="#_229-判断纬度-90-0-90-0-整数部分为0-90-必须输入1到5位小数" aria-label="Permalink to &quot;229.判断纬度 -90.0～+90.0（整数部分为0～90，必须输入1到5位小数）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  * @description 判断纬度 -90.0～+90.0（整数部分为0～90，必须输入1到5位小数）</span></span>
<span class="line"><span style="color:#f6f6f4;">  * @param str</span></span>
<span class="line"><span style="color:#f6f6f4;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#f6f6f4;">   */</span></span>
<span class="line"><span style="color:#f6f6f4;">   export function isLatitude(str) {</span></span>
<span class="line"><span style="color:#f6f6f4;">     const reg = /^[-|+]?([0-8]?\\d{1}\\.\\d{1,5}|90\\.0{1,5})$/;</span></span>
<span class="line"><span style="color:#f6f6f4;">     return reg.test(str);</span></span>
<span class="line"><span style="color:#f6f6f4;">   }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  * @description 判断纬度 -90.0～+90.0（整数部分为0～90，必须输入1到5位小数）</span></span>
<span class="line"><span style="color:#24292e;">  * @param str</span></span>
<span class="line"><span style="color:#24292e;">* @returns {boolean}</span></span>
<span class="line"><span style="color:#24292e;">   */</span></span>
<span class="line"><span style="color:#24292e;">   export function isLatitude(str) {</span></span>
<span class="line"><span style="color:#24292e;">     const reg = /^[-|+]?([0-8]?\\d{1}\\.\\d{1,5}|90\\.0{1,5})$/;</span></span>
<span class="line"><span style="color:#24292e;">     return reg.test(str);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span></code></pre></div><h2 id="_230-rtsp校验只要有rtsp" tabindex="-1">230.rtsp校验只要有rtsp:// <a class="header-anchor" href="#_230-rtsp校验只要有rtsp" aria-label="Permalink to &quot;230.rtsp校验只要有rtsp://&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  * @description rtsp校验，只要有rtsp://</span></span>
<span class="line"><span style="color:#f6f6f4;">  * @param str</span></span>
<span class="line"><span style="color:#f6f6f4;">  * @returns {boolean}</span></span>
<span class="line"><span style="color:#f6f6f4;">    */</span></span>
<span class="line"><span style="color:#f6f6f4;">  export function isRTSP(str) {</span></span>
<span class="line"><span style="color:#f6f6f4;">     const reg = /^rtsp:\\/\\/([a-z]{0,10}:.{0,10}@)?(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])$/;</span></span>
<span class="line"><span style="color:#f6f6f4;">     const reg1 = /^rtsp:\\/\\/([a-z]{0,10}:.{0,10}@)?(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5]):[0-9]{1,5}/;</span></span>
<span class="line"><span style="color:#f6f6f4;">     const reg2 = /^rtsp:\\/\\/([a-z]{0,10}:.{0,10}@)?(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\//;</span></span>
<span class="line"><span style="color:#f6f6f4;">     return reg.test(str) || reg1.test(str) || reg2.test(str);</span></span>
<span class="line"><span style="color:#f6f6f4;">   }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  * @description rtsp校验，只要有rtsp://</span></span>
<span class="line"><span style="color:#24292e;">  * @param str</span></span>
<span class="line"><span style="color:#24292e;">  * @returns {boolean}</span></span>
<span class="line"><span style="color:#24292e;">    */</span></span>
<span class="line"><span style="color:#24292e;">  export function isRTSP(str) {</span></span>
<span class="line"><span style="color:#24292e;">     const reg = /^rtsp:\\/\\/([a-z]{0,10}:.{0,10}@)?(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])$/;</span></span>
<span class="line"><span style="color:#24292e;">     const reg1 = /^rtsp:\\/\\/([a-z]{0,10}:.{0,10}@)?(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5]):[0-9]{1,5}/;</span></span>
<span class="line"><span style="color:#24292e;">     const reg2 = /^rtsp:\\/\\/([a-z]{0,10}:.{0,10}@)?(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\//;</span></span>
<span class="line"><span style="color:#24292e;">     return reg.test(str) || reg1.test(str) || reg2.test(str);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span></code></pre></div><h2 id="_231-判断ie浏览器版本和检测是否为非ie浏览器" tabindex="-1">231.判断IE浏览器版本和检测是否为非IE浏览器 <a class="header-anchor" href="#_231-判断ie浏览器版本和检测是否为非ie浏览器" aria-label="Permalink to &quot;231.判断IE浏览器版本和检测是否为非IE浏览器&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function IEVersion() {</span></span>
<span class="line"><span style="color:#f6f6f4;">	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  </span></span>
<span class="line"><span style="color:#f6f6f4;">	var isIE = userAgent.indexOf(&quot;compatible&quot;) &gt; -1 &amp;&amp; userAgent.indexOf(&quot;MSIE&quot;) &gt; -1; //判断是否IE&lt;11浏览器  </span></span>
<span class="line"><span style="color:#f6f6f4;">	var isEdge = userAgent.indexOf(&quot;Edge&quot;) &gt; -1 &amp;&amp; !isIE; //判断是否IE的Edge浏览器  </span></span>
<span class="line"><span style="color:#f6f6f4;">	var isIE11 = userAgent.indexOf(&#39;Trident&#39;) &gt; -1 &amp;&amp; userAgent.indexOf(&quot;rv:11.0&quot;) &gt; -1;</span></span>
<span class="line"><span style="color:#f6f6f4;">	if (isIE) {</span></span>
<span class="line"><span style="color:#f6f6f4;">		var reIE = new RegExp(&quot;MSIE (\\\\d+\\\\.\\\\d+);&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">		reIE.test(userAgent);</span></span>
<span class="line"><span style="color:#f6f6f4;">		var fIEVersion = parseFloat(RegExp[&quot;$1&quot;]);</span></span>
<span class="line"><span style="color:#f6f6f4;">		if (fIEVersion == 7) {</span></span>
<span class="line"><span style="color:#f6f6f4;">			return 7;</span></span>
<span class="line"><span style="color:#f6f6f4;">		} else if (fIEVersion == 8) {</span></span>
<span class="line"><span style="color:#f6f6f4;">			return 8;</span></span>
<span class="line"><span style="color:#f6f6f4;">		} else if (fIEVersion == 9) {</span></span>
<span class="line"><span style="color:#f6f6f4;">			return 9;</span></span>
<span class="line"><span style="color:#f6f6f4;">		} else if (fIEVersion == 10) {</span></span>
<span class="line"><span style="color:#f6f6f4;">			return 10;</span></span>
<span class="line"><span style="color:#f6f6f4;">		} else {</span></span>
<span class="line"><span style="color:#f6f6f4;">			return 6; //IE版本&lt;=7</span></span>
<span class="line"><span style="color:#f6f6f4;">		}</span></span>
<span class="line"><span style="color:#f6f6f4;">	} else if (isEdge) {</span></span>
<span class="line"><span style="color:#f6f6f4;">		return &#39;edge&#39;; //edge</span></span>
<span class="line"><span style="color:#f6f6f4;">	} else if (isIE11) {</span></span>
<span class="line"><span style="color:#f6f6f4;">		return 11; //IE11  </span></span>
<span class="line"><span style="color:#f6f6f4;">	} else {</span></span>
<span class="line"><span style="color:#f6f6f4;">		return -1; //不是ie浏览器</span></span>
<span class="line"><span style="color:#f6f6f4;">	}</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function IEVersion() {</span></span>
<span class="line"><span style="color:#24292e;">	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  </span></span>
<span class="line"><span style="color:#24292e;">	var isIE = userAgent.indexOf(&quot;compatible&quot;) &gt; -1 &amp;&amp; userAgent.indexOf(&quot;MSIE&quot;) &gt; -1; //判断是否IE&lt;11浏览器  </span></span>
<span class="line"><span style="color:#24292e;">	var isEdge = userAgent.indexOf(&quot;Edge&quot;) &gt; -1 &amp;&amp; !isIE; //判断是否IE的Edge浏览器  </span></span>
<span class="line"><span style="color:#24292e;">	var isIE11 = userAgent.indexOf(&#39;Trident&#39;) &gt; -1 &amp;&amp; userAgent.indexOf(&quot;rv:11.0&quot;) &gt; -1;</span></span>
<span class="line"><span style="color:#24292e;">	if (isIE) {</span></span>
<span class="line"><span style="color:#24292e;">		var reIE = new RegExp(&quot;MSIE (\\\\d+\\\\.\\\\d+);&quot;);</span></span>
<span class="line"><span style="color:#24292e;">		reIE.test(userAgent);</span></span>
<span class="line"><span style="color:#24292e;">		var fIEVersion = parseFloat(RegExp[&quot;$1&quot;]);</span></span>
<span class="line"><span style="color:#24292e;">		if (fIEVersion == 7) {</span></span>
<span class="line"><span style="color:#24292e;">			return 7;</span></span>
<span class="line"><span style="color:#24292e;">		} else if (fIEVersion == 8) {</span></span>
<span class="line"><span style="color:#24292e;">			return 8;</span></span>
<span class="line"><span style="color:#24292e;">		} else if (fIEVersion == 9) {</span></span>
<span class="line"><span style="color:#24292e;">			return 9;</span></span>
<span class="line"><span style="color:#24292e;">		} else if (fIEVersion == 10) {</span></span>
<span class="line"><span style="color:#24292e;">			return 10;</span></span>
<span class="line"><span style="color:#24292e;">		} else {</span></span>
<span class="line"><span style="color:#24292e;">			return 6; //IE版本&lt;=7</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">	} else if (isEdge) {</span></span>
<span class="line"><span style="color:#24292e;">		return &#39;edge&#39;; //edge</span></span>
<span class="line"><span style="color:#24292e;">	} else if (isIE11) {</span></span>
<span class="line"><span style="color:#24292e;">		return 11; //IE11  </span></span>
<span class="line"><span style="color:#24292e;">	} else {</span></span>
<span class="line"><span style="color:#24292e;">		return -1; //不是ie浏览器</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_232-数组去重" tabindex="-1">232.数组去重 <a class="header-anchor" href="#_232-数组去重" aria-label="Permalink to &quot;232.数组去重&quot;">​</a></h2><h4 id="方案一-set" tabindex="-1">方案一：<code>Set + ...</code> <a class="header-anchor" href="#方案一-set" aria-label="Permalink to &quot;方案一：\`Set + ...\`&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function noRepeat(arr) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return [...new Set(arr)];</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">noRepeat([1,2,3,1,2,3])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function noRepeat(arr) {</span></span>
<span class="line"><span style="color:#24292e;">  return [...new Set(arr)];</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">noRepeat([1,2,3,1,2,3])</span></span></code></pre></div><h4 id="方案二-set-array-from" tabindex="-1">方案二：<code>Set + Array.from</code> <a class="header-anchor" href="#方案二-set-array-from" aria-label="Permalink to &quot;方案二：\`Set + Array.from\`&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function noRepeat(arr) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return Array.from(new Set(arr));</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">noRepeat([1,2,3,1,2,3])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function noRepeat(arr) {</span></span>
<span class="line"><span style="color:#24292e;">  return Array.from(new Set(arr));</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">noRepeat([1,2,3,1,2,3])</span></span></code></pre></div><h4 id="方案三-双重遍历比对下标" tabindex="-1">方案三：双重遍历比对下标 <a class="header-anchor" href="#方案三-双重遍历比对下标" aria-label="Permalink to &quot;方案三：双重遍历比对下标&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function noRepeat(arr) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return arr.filter((v, idx)=&gt;idx == arr.lastIndexOf(v))</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">noRepeat([1,2,3,1,2,3])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function noRepeat(arr) {</span></span>
<span class="line"><span style="color:#24292e;">  return arr.filter((v, idx)=&gt;idx == arr.lastIndexOf(v))</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">noRepeat([1,2,3,1,2,3])</span></span></code></pre></div><h4 id="方案四-单遍历-object-特性" tabindex="-1">方案四：单遍历 + Object 特性 <a class="header-anchor" href="#方案四-单遍历-object-特性" aria-label="Permalink to &quot;方案四：单遍历 + Object 特性&quot;">​</a></h4><p>Object 的特性是 Key 不会重复。 这里使用 values 是因为可以保留类型，keys 会变成字符串。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function noRepeat(arr) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return Object.values(arr.reduce((s,n)=&gt;{</span></span>
<span class="line"><span style="color:#f6f6f4;">    s[n] = n;</span></span>
<span class="line"><span style="color:#f6f6f4;">    return s</span></span>
<span class="line"><span style="color:#f6f6f4;">  },{}))</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">noRepeat([1,2,3,1,2,3])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function noRepeat(arr) {</span></span>
<span class="line"><span style="color:#24292e;">  return Object.values(arr.reduce((s,n)=&gt;{</span></span>
<span class="line"><span style="color:#24292e;">    s[n] = n;</span></span>
<span class="line"><span style="color:#24292e;">    return s</span></span>
<span class="line"><span style="color:#24292e;">  },{}))</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">noRepeat([1,2,3,1,2,3])</span></span></code></pre></div><h4 id="后记" tabindex="-1">后记 <a class="header-anchor" href="#后记" aria-label="Permalink to &quot;后记&quot;">​</a></h4><p>针对于上述的方案，还有其他变种实现。</p><h2 id="_233-查找数组最大" tabindex="-1">233.查找数组最大 <a class="header-anchor" href="#_233-查找数组最大" aria-label="Permalink to &quot;233.查找数组最大&quot;">​</a></h2><h4 id="方案一-math-max" tabindex="-1">方案一：<code>Math.max + ...</code> <a class="header-anchor" href="#方案一-math-max" aria-label="Permalink to &quot;方案一：\`Math.max + ...\`&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function arrayMax(arr) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return Math.max(...arr);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">arrayMax([-1,-4,5,2,0])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function arrayMax(arr) {</span></span>
<span class="line"><span style="color:#24292e;">  return Math.max(...arr);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">arrayMax([-1,-4,5,2,0])</span></span></code></pre></div><h4 id="方案二-math-max-apply" tabindex="-1">方案二：<code>Math.max + apply</code> <a class="header-anchor" href="#方案二-math-max-apply" aria-label="Permalink to &quot;方案二：\`Math.max + apply\`&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function arrayMax(arr) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return Math.max.apply(Math, arr)</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">arrayMax([-1,-4,5,2,0])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function arrayMax(arr) {</span></span>
<span class="line"><span style="color:#24292e;">  return Math.max.apply(Math, arr)</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">arrayMax([-1,-4,5,2,0])</span></span></code></pre></div><h4 id="方案三-math-max-遍历" tabindex="-1">方案三：<code>Math.max</code> + 遍历 <a class="header-anchor" href="#方案三-math-max-遍历" aria-label="Permalink to &quot;方案三：\`Math.max\` + 遍历&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function arrayMax(arr) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return arr.reduce((s,n)=&gt;Math.max(s, n))</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">arrayMax([-1,-4,5,2,0])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function arrayMax(arr) {</span></span>
<span class="line"><span style="color:#24292e;">  return arr.reduce((s,n)=&gt;Math.max(s, n))</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">arrayMax([-1,-4,5,2,0])</span></span></code></pre></div><h4 id="方案四-比较、条件运算法-遍历" tabindex="-1">方案四：比较、条件运算法 + 遍历 <a class="header-anchor" href="#方案四-比较、条件运算法-遍历" aria-label="Permalink to &quot;方案四：比较、条件运算法 + 遍历&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function arrayMax(arr) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return arr.reduce((s,n)=&gt;s&gt;n?s:n)</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">arrayMax([-1,-4,5,2,0])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function arrayMax(arr) {</span></span>
<span class="line"><span style="color:#24292e;">  return arr.reduce((s,n)=&gt;s&gt;n?s:n)</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">arrayMax([-1,-4,5,2,0])</span></span></code></pre></div><h4 id="方案五-排序" tabindex="-1">方案五：排序 <a class="header-anchor" href="#方案五-排序" aria-label="Permalink to &quot;方案五：排序&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function arrayMax(arr) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return arr.sort((n,m)=&gt;m-n)[0]</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">arrayMax([-1,-4,5,2,0])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function arrayMax(arr) {</span></span>
<span class="line"><span style="color:#24292e;">  return arr.sort((n,m)=&gt;m-n)[0]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">arrayMax([-1,-4,5,2,0])</span></span></code></pre></div><h2 id="_234-查找数组最小" tabindex="-1">234.查找数组最小 <a class="header-anchor" href="#_234-查找数组最小" aria-label="Permalink to &quot;234.查找数组最小&quot;">​</a></h2><p>同上，<em>不明白为什么要分成两个题目</em>。</p><ol><li><code>Math.max</code> 换成 <code>Math.min</code></li><li><code>s&gt;n?s:n</code> 换成 \`s</li><li><code>(n,m)=&gt;m-n</code> 换成 <code>(n,m)=&gt;n-m</code>，或者直接取最后一个元素</li></ol><h2 id="_235-返回已-size-为长度的数组分割的原数组" tabindex="-1">235.返回已 size 为长度的数组分割的原数组 <a class="header-anchor" href="#_235-返回已-size-为长度的数组分割的原数组" aria-label="Permalink to &quot;235.返回已 size 为长度的数组分割的原数组&quot;">​</a></h2><h4 id="方案一-array-from-slice" tabindex="-1">方案一：Array.from + slice <a class="header-anchor" href="#方案一-array-from-slice" aria-label="Permalink to &quot;方案一：Array.from + slice&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function chunk(arr, size = 1) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return Array.from(</span></span>
<span class="line"><span style="color:#f6f6f4;">    {</span></span>
<span class="line"><span style="color:#f6f6f4;">      length: Math.ceil(arr.length / size),</span></span>
<span class="line"><span style="color:#f6f6f4;">    },</span></span>
<span class="line"><span style="color:#f6f6f4;">    (v, i) =&gt; arr.slice(i * size, i * size + size)</span></span>
<span class="line"><span style="color:#f6f6f4;">  );</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">chunk([1,2,3,4,5,6,7,8],3)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function chunk(arr, size = 1) {</span></span>
<span class="line"><span style="color:#24292e;">  return Array.from(</span></span>
<span class="line"><span style="color:#24292e;">    {</span></span>
<span class="line"><span style="color:#24292e;">      length: Math.ceil(arr.length / size),</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    (v, i) =&gt; arr.slice(i * size, i * size + size)</span></span>
<span class="line"><span style="color:#24292e;">  );</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">chunk([1,2,3,4,5,6,7,8],3)</span></span></code></pre></div><h4 id="方案二-array-from-splice" tabindex="-1">方案二：Array.from + splice <a class="header-anchor" href="#方案二-array-from-splice" aria-label="Permalink to &quot;方案二：Array.from + splice&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function chunk(arr, size = 1) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return Array.from(</span></span>
<span class="line"><span style="color:#f6f6f4;">    {</span></span>
<span class="line"><span style="color:#f6f6f4;">      length: Math.ceil(arr.length / size),</span></span>
<span class="line"><span style="color:#f6f6f4;">    },</span></span>
<span class="line"><span style="color:#f6f6f4;">    (v, i) =&gt; arr.splice(0, size)</span></span>
<span class="line"><span style="color:#f6f6f4;">  );</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">chunk([1,2,3,4,5,6,7,8],3)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function chunk(arr, size = 1) {</span></span>
<span class="line"><span style="color:#24292e;">  return Array.from(</span></span>
<span class="line"><span style="color:#24292e;">    {</span></span>
<span class="line"><span style="color:#24292e;">      length: Math.ceil(arr.length / size),</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    (v, i) =&gt; arr.splice(0, size)</span></span>
<span class="line"><span style="color:#24292e;">  );</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">chunk([1,2,3,4,5,6,7,8],3)</span></span></code></pre></div><h4 id="方案三-遍历-splice" tabindex="-1">方案三：遍历 + splice <a class="header-anchor" href="#方案三-遍历-splice" aria-label="Permalink to &quot;方案三：遍历 + splice&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function chunk(arr, size = 1) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    var _returnArr = [];</span></span>
<span class="line"><span style="color:#f6f6f4;">    while(arr.length){</span></span>
<span class="line"><span style="color:#f6f6f4;">        _returnArr.push(arr.splice(0, size))</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    return _returnArr</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">chunk([1,2,3,4,5,6,7,8],3)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function chunk(arr, size = 1) {</span></span>
<span class="line"><span style="color:#24292e;">    var _returnArr = [];</span></span>
<span class="line"><span style="color:#24292e;">    while(arr.length){</span></span>
<span class="line"><span style="color:#24292e;">        _returnArr.push(arr.splice(0, size))</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    return _returnArr</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">chunk([1,2,3,4,5,6,7,8],3)</span></span></code></pre></div><h3 id="检查数组中某元素出现的次数" tabindex="-1">检查数组中某元素出现的次数 <a class="header-anchor" href="#检查数组中某元素出现的次数" aria-label="Permalink to &quot;检查数组中某元素出现的次数&quot;">​</a></h3><h4 id="方案一-reduce" tabindex="-1">方案一：reduce <a class="header-anchor" href="#方案一-reduce" aria-label="Permalink to &quot;方案一：reduce&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function countOccurrences(arr, value) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return arr.reduce((a, v) =&gt; (v === value ? a + 1 : a + 0), 0);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">countOccurrences([1,2,3,4,5,1,2,1,2,3], 1)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function countOccurrences(arr, value) {</span></span>
<span class="line"><span style="color:#24292e;">  return arr.reduce((a, v) =&gt; (v === value ? a + 1 : a + 0), 0);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">countOccurrences([1,2,3,4,5,1,2,1,2,3], 1)</span></span></code></pre></div><h4 id="方案二-filter" tabindex="-1">方案二：filter <a class="header-anchor" href="#方案二-filter" aria-label="Permalink to &quot;方案二：filter&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function countOccurrences(arr, value) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return arr.filter(v=&gt;v===value).length</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">countOccurrences([1,2,3,4,5,1,2,1,2,3], 1)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function countOccurrences(arr, value) {</span></span>
<span class="line"><span style="color:#24292e;">  return arr.filter(v=&gt;v===value).length</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">countOccurrences([1,2,3,4,5,1,2,1,2,3], 1)</span></span></code></pre></div><h2 id="_236-扁平化数组" tabindex="-1">236.扁平化数组 <a class="header-anchor" href="#_236-扁平化数组" aria-label="Permalink to &quot;236.扁平化数组&quot;">​</a></h2><h4 id="方案一-递归" tabindex="-1">方案一：递归 + ... <a class="header-anchor" href="#方案一-递归" aria-label="Permalink to &quot;方案一：递归 + ...&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function flatten(arr, depth = -1) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  if (depth === -1) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    return [].concat(</span></span>
<span class="line"><span style="color:#f6f6f4;">      ...arr.map((v) =&gt; (Array.isArray(v) ? this.flatten(v) : v))</span></span>
<span class="line"><span style="color:#f6f6f4;">    );</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">  if (depth === 1) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    return arr.reduce((a, v) =&gt; a.concat(v), []);</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">  return arr.reduce(</span></span>
<span class="line"><span style="color:#f6f6f4;">    (a, v) =&gt; a.concat(Array.isArray(v) ? this.flatten(v, depth - 1) : v),</span></span>
<span class="line"><span style="color:#f6f6f4;">    []</span></span>
<span class="line"><span style="color:#f6f6f4;">  );</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">flatten([1,[2,[3]]])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function flatten(arr, depth = -1) {</span></span>
<span class="line"><span style="color:#24292e;">  if (depth === -1) {</span></span>
<span class="line"><span style="color:#24292e;">    return [].concat(</span></span>
<span class="line"><span style="color:#24292e;">      ...arr.map((v) =&gt; (Array.isArray(v) ? this.flatten(v) : v))</span></span>
<span class="line"><span style="color:#24292e;">    );</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  if (depth === 1) {</span></span>
<span class="line"><span style="color:#24292e;">    return arr.reduce((a, v) =&gt; a.concat(v), []);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  return arr.reduce(</span></span>
<span class="line"><span style="color:#24292e;">    (a, v) =&gt; a.concat(Array.isArray(v) ? this.flatten(v, depth - 1) : v),</span></span>
<span class="line"><span style="color:#24292e;">    []</span></span>
<span class="line"><span style="color:#24292e;">  );</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">flatten([1,[2,[3]]])</span></span></code></pre></div><h4 id="方案二-es6-原生-flat" tabindex="-1">方案二：es6 原生 flat <a class="header-anchor" href="#方案二-es6-原生-flat" aria-label="Permalink to &quot;方案二：es6 原生 flat&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function flatten(arr, depth = Infinity) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return arr.flat(depth)</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">flatten([1,[2,[3]]])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function flatten(arr, depth = Infinity) {</span></span>
<span class="line"><span style="color:#24292e;">  return arr.flat(depth)</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">flatten([1,[2,[3]]])</span></span></code></pre></div><h3 id="对比两个数组并且返回其中不同的元素" tabindex="-1">对比两个数组并且返回其中不同的元素 <a class="header-anchor" href="#对比两个数组并且返回其中不同的元素" aria-label="Permalink to &quot;对比两个数组并且返回其中不同的元素&quot;">​</a></h3><h4 id="方案一-filter-includes" tabindex="-1">方案一：filter + includes <a class="header-anchor" href="#方案一-filter-includes" aria-label="Permalink to &quot;方案一：filter + includes&quot;">​</a></h4><p>他原文有问题，以下方法的 <code>4,5</code> 没有返回</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft has-diff vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function diffrence(arrA, arrB) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return arrA.filter((v) =&gt; !arrB.includes(v));</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">diffrence([1,2,3], [3,4,5,2])</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;">function diffrence(arrA, arrB) {</span></span>
<span class="line"><span style="color:#24292e;">  return arrA.filter((v) =&gt; !arrB.includes(v));</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">diffrence([1,2,3], [3,4,5,2])</span></span></code></pre></div><p>需要再操作一遍</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft has-diff vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function diffrence(arrA, arrB) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return arrA.filter((v) =&gt; !arrB.includes(v))</span></span>
<span class="line"><span style="color:#f6f6f4;">    .concat(arrB.filter((v) =&gt; !arrA.includes(v)));</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">diffrence([1,2,3], [3,4,5,2])</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;">function diffrence(arrA, arrB) {</span></span>
<span class="line"><span style="color:#24292e;">  return arrA.filter((v) =&gt; !arrB.includes(v))</span></span>
<span class="line"><span style="color:#24292e;">    .concat(arrB.filter((v) =&gt; !arrA.includes(v)));</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">diffrence([1,2,3], [3,4,5,2])</span></span></code></pre></div><h4 id="方案二-hash-遍历" tabindex="-1">方案二：hash + 遍历 <a class="header-anchor" href="#方案二-hash-遍历" aria-label="Permalink to &quot;方案二：hash + 遍历&quot;">​</a></h4><p>算是方案1的变种吧，优化了 <code>includes</code> 的性能。</p><h2 id="_237-返回两个数组中相同的元素" tabindex="-1">237.返回两个数组中相同的元素 <a class="header-anchor" href="#_237-返回两个数组中相同的元素" aria-label="Permalink to &quot;237.返回两个数组中相同的元素&quot;">​</a></h2><h4 id="方案一-filter-includes-1" tabindex="-1">方案一：filter + includes <a class="header-anchor" href="#方案一-filter-includes-1" aria-label="Permalink to &quot;方案一：filter + includes&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function intersection(arr1, arr2) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return arr2.filter((v) =&gt; arr1.includes(v));</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">intersection([1,2,3], [3,4,5,2])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function intersection(arr1, arr2) {</span></span>
<span class="line"><span style="color:#24292e;">  return arr2.filter((v) =&gt; arr1.includes(v));</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">intersection([1,2,3], [3,4,5,2])</span></span></code></pre></div><h4 id="方案二-同理变种用-hash" tabindex="-1">方案二：同理变种用 hash <a class="header-anchor" href="#方案二-同理变种用-hash" aria-label="Permalink to &quot;方案二：同理变种用 hash&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function intersection(arr1, arr2) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    var set = new Set(arr2)</span></span>
<span class="line"><span style="color:#f6f6f4;">  return arr1.filter((v) =&gt; set.has(v));</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">intersection([1,2,3], [3,4,5,2])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function intersection(arr1, arr2) {</span></span>
<span class="line"><span style="color:#24292e;">    var set = new Set(arr2)</span></span>
<span class="line"><span style="color:#24292e;">  return arr1.filter((v) =&gt; set.has(v));</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">intersection([1,2,3], [3,4,5,2])</span></span></code></pre></div><h2 id="_238-从右删除-n-个元素" tabindex="-1">238.从右删除 n 个元素 <a class="header-anchor" href="#_238-从右删除-n-个元素" aria-label="Permalink to &quot;238.从右删除 n 个元素&quot;">​</a></h2><h4 id="方案一-slice" tabindex="-1">方案一：slice <a class="header-anchor" href="#方案一-slice" aria-label="Permalink to &quot;方案一：slice&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function dropRight(arr, n = 0) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return n &lt; arr.length ? arr.slice(0, arr.length - n) : [];</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">dropRight([1,2,3,4,5], 2)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function dropRight(arr, n = 0) {</span></span>
<span class="line"><span style="color:#24292e;">  return n &lt; arr.length ? arr.slice(0, arr.length - n) : [];</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">dropRight([1,2,3,4,5], 2)</span></span></code></pre></div><h4 id="方案二-splice" tabindex="-1">方案二: splice <a class="header-anchor" href="#方案二-splice" aria-label="Permalink to &quot;方案二: splice&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function dropRight(arr, n = 0) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return arr.splice(0, arr.length - n)</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">dropRight([1,2,3,4,5], 2)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function dropRight(arr, n = 0) {</span></span>
<span class="line"><span style="color:#24292e;">  return arr.splice(0, arr.length - n)</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">dropRight([1,2,3,4,5], 2)</span></span></code></pre></div><h4 id="方案三-slice-另一种" tabindex="-1">方案三: slice 另一种 <a class="header-anchor" href="#方案三-slice-另一种" aria-label="Permalink to &quot;方案三: slice 另一种&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function dropRight(arr, n = 0) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return arr.slice(0, -n)</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">dropRight([1,2,3,4,5], 2)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function dropRight(arr, n = 0) {</span></span>
<span class="line"><span style="color:#24292e;">  return arr.slice(0, -n)</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">dropRight([1,2,3,4,5], 2)</span></span></code></pre></div><h4 id="方案四-修改-length" tabindex="-1">方案四: 修改 length <a class="header-anchor" href="#方案四-修改-length" aria-label="Permalink to &quot;方案四: 修改 length&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function dropRight(arr, n = 0) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    arr.length = Math.max(arr.length - n, 0)</span></span>
<span class="line"><span style="color:#f6f6f4;">    return arr</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">dropRight([1,2,3,4,5], 2)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function dropRight(arr, n = 0) {</span></span>
<span class="line"><span style="color:#24292e;">    arr.length = Math.max(arr.length - n, 0)</span></span>
<span class="line"><span style="color:#24292e;">    return arr</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">dropRight([1,2,3,4,5], 2)</span></span></code></pre></div><h2 id="_239-截取第一个符合条件的元素及其以后的元素" tabindex="-1">239.截取第一个符合条件的元素及其以后的元素 <a class="header-anchor" href="#_239-截取第一个符合条件的元素及其以后的元素" aria-label="Permalink to &quot;239.截取第一个符合条件的元素及其以后的元素&quot;">​</a></h2><h4 id="方案一-slice-循环" tabindex="-1">方案一：slice + 循环 <a class="header-anchor" href="#方案一-slice-循环" aria-label="Permalink to &quot;方案一：slice + 循环&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function dropElements(arr, fn) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  while (arr.length &amp;&amp; !fn(arr[0])) arr = arr.slice(1);</span></span>
<span class="line"><span style="color:#f6f6f4;">  return arr;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">dropElements([1,2,3,4,5,1,2,3], (v) =&gt; v == 2)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function dropElements(arr, fn) {</span></span>
<span class="line"><span style="color:#24292e;">  while (arr.length &amp;&amp; !fn(arr[0])) arr = arr.slice(1);</span></span>
<span class="line"><span style="color:#24292e;">  return arr;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">dropElements([1,2,3,4,5,1,2,3], (v) =&gt; v == 2)</span></span></code></pre></div><h4 id="方案二-findindex-slice" tabindex="-1">方案二：findIndex + slice <a class="header-anchor" href="#方案二-findindex-slice" aria-label="Permalink to &quot;方案二：findIndex + slice&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function dropElements(arr, fn) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return arr.slice(Math.max(arr.findIndex(fn), 0));</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">dropElements([1,2,3,4,5,1,2,3], (v) =&gt; v === 3)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function dropElements(arr, fn) {</span></span>
<span class="line"><span style="color:#24292e;">  return arr.slice(Math.max(arr.findIndex(fn), 0));</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">dropElements([1,2,3,4,5,1,2,3], (v) =&gt; v === 3)</span></span></code></pre></div><h4 id="方案三-splice-循环" tabindex="-1">方案三：splice + 循环 <a class="header-anchor" href="#方案三-splice-循环" aria-label="Permalink to &quot;方案三：splice + 循环&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function dropElements(arr, fn) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  while (arr.length &amp;&amp; !fn(arr[0])) arr.splice(0,1);</span></span>
<span class="line"><span style="color:#f6f6f4;">  return arr;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">dropElements([1,2,3,4,5,1,2,3], (v) =&gt; v == 2)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function dropElements(arr, fn) {</span></span>
<span class="line"><span style="color:#24292e;">  while (arr.length &amp;&amp; !fn(arr[0])) arr.splice(0,1);</span></span>
<span class="line"><span style="color:#24292e;">  return arr;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">dropElements([1,2,3,4,5,1,2,3], (v) =&gt; v == 2)</span></span></code></pre></div><h2 id="_240-返回数组中下标间隔-nth-的元素" tabindex="-1">240.返回数组中下标间隔 nth 的元素 <a class="header-anchor" href="#_240-返回数组中下标间隔-nth-的元素" aria-label="Permalink to &quot;240.返回数组中下标间隔 nth 的元素&quot;">​</a></h2><h4 id="方案一-filter" tabindex="-1">方案一：filter <a class="header-anchor" href="#方案一-filter" aria-label="Permalink to &quot;方案一：filter&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function everyNth(arr, nth) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return arr.filter((v, i) =&gt; i % nth === nth - 1);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">everyNth([1,2,3,4,5,6,7,8], 2)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function everyNth(arr, nth) {</span></span>
<span class="line"><span style="color:#24292e;">  return arr.filter((v, i) =&gt; i % nth === nth - 1);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">everyNth([1,2,3,4,5,6,7,8], 2)</span></span></code></pre></div><h4 id="方案二-方案一修改判断条件" tabindex="-1">方案二：方案一修改判断条件 <a class="header-anchor" href="#方案二-方案一修改判断条件" aria-label="Permalink to &quot;方案二：方案一修改判断条件&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function everyNth(arr, nth) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return arr.filter((v, i) =&gt; (i+1) % nth === 0);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">everyNth([1,2,3,4,5,6,7,8], 2)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function everyNth(arr, nth) {</span></span>
<span class="line"><span style="color:#24292e;">  return arr.filter((v, i) =&gt; (i+1) % nth === 0);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">everyNth([1,2,3,4,5,6,7,8], 2)</span></span></code></pre></div><h2 id="_241-返回数组中第-n-个元素-支持负数" tabindex="-1">241.返回数组中第 n 个元素（支持负数） <a class="header-anchor" href="#_241-返回数组中第-n-个元素-支持负数" aria-label="Permalink to &quot;241.返回数组中第 n 个元素（支持负数）&quot;">​</a></h2><h4 id="方案一-slice-1" tabindex="-1">方案一：slice <a class="header-anchor" href="#方案一-slice-1" aria-label="Permalink to &quot;方案一：slice&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function nthElement(arr, n = 0) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return (n &gt;= 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">nthElement([1,2,3,4,5], 0)</span></span>
<span class="line"><span style="color:#f6f6f4;">nthElement([1,2,3,4,5], -1)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function nthElement(arr, n = 0) {</span></span>
<span class="line"><span style="color:#24292e;">  return (n &gt;= 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">nthElement([1,2,3,4,5], 0)</span></span>
<span class="line"><span style="color:#24292e;">nthElement([1,2,3,4,5], -1)</span></span></code></pre></div><h4 id="方案二-三目运算符" tabindex="-1">方案二：三目运算符 <a class="header-anchor" href="#方案二-三目运算符" aria-label="Permalink to &quot;方案二：三目运算符&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function nthElement(arr, n = 0) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return (n &gt;= 0 ? arr[0] : arr[arr.length + n])</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">nthElement([1,2,3,4,5], 0)</span></span>
<span class="line"><span style="color:#f6f6f4;">nthElement([1,2,3,4,5], -1)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function nthElement(arr, n = 0) {</span></span>
<span class="line"><span style="color:#24292e;">  return (n &gt;= 0 ? arr[0] : arr[arr.length + n])</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">nthElement([1,2,3,4,5], 0)</span></span>
<span class="line"><span style="color:#24292e;">nthElement([1,2,3,4,5], -1)</span></span></code></pre></div><h2 id="_242-返回数组头元素" tabindex="-1">242.返回数组头元素 <a class="header-anchor" href="#_242-返回数组头元素" aria-label="Permalink to &quot;242.返回数组头元素&quot;">​</a></h2><h4 id="方案一" tabindex="-1">方案一： <a class="header-anchor" href="#方案一" aria-label="Permalink to &quot;方案一：&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function head(arr) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return arr[0];</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">head([1,2,3,4])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function head(arr) {</span></span>
<span class="line"><span style="color:#24292e;">  return arr[0];</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">head([1,2,3,4])</span></span></code></pre></div><h4 id="方案二" tabindex="-1">方案二： <a class="header-anchor" href="#方案二" aria-label="Permalink to &quot;方案二：&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function head(arr) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return arr.slice(0,1)[0];</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">head([1,2,3,4])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function head(arr) {</span></span>
<span class="line"><span style="color:#24292e;">  return arr.slice(0,1)[0];</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">head([1,2,3,4])</span></span></code></pre></div><h2 id="_243-返回数组末尾元素" tabindex="-1">243.返回数组末尾元素 <a class="header-anchor" href="#_243-返回数组末尾元素" aria-label="Permalink to &quot;243.返回数组末尾元素&quot;">​</a></h2><h4 id="方案一-1" tabindex="-1">方案一： <a class="header-anchor" href="#方案一-1" aria-label="Permalink to &quot;方案一：&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function last(arr) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return arr[arr.length - 1];</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function last(arr) {</span></span>
<span class="line"><span style="color:#24292e;">  return arr[arr.length - 1];</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h4 id="方案二-1" tabindex="-1">方案二： <a class="header-anchor" href="#方案二-1" aria-label="Permalink to &quot;方案二：&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function last(arr) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return arr.slice(-1)[0];</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">last([1,2,3,4,5])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function last(arr) {</span></span>
<span class="line"><span style="color:#24292e;">  return arr.slice(-1)[0];</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">last([1,2,3,4,5])</span></span></code></pre></div><h2 id="_245-数组乱排" tabindex="-1">245.数组乱排 <a class="header-anchor" href="#_245-数组乱排" aria-label="Permalink to &quot;245.数组乱排&quot;">​</a></h2><h4 id="方案一-洗牌算法" tabindex="-1">方案一：洗牌算法 <a class="header-anchor" href="#方案一-洗牌算法" aria-label="Permalink to &quot;方案一：洗牌算法&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function shuffle(arr) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  let array = arr;</span></span>
<span class="line"><span style="color:#f6f6f4;">  let index = array.length;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  while (index) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    index -= 1;</span></span>
<span class="line"><span style="color:#f6f6f4;">    let randomInedx = Math.floor(Math.random() * index);</span></span>
<span class="line"><span style="color:#f6f6f4;">    let middleware = array[index];</span></span>
<span class="line"><span style="color:#f6f6f4;">    array[index] = array[randomInedx];</span></span>
<span class="line"><span style="color:#f6f6f4;">    array[randomInedx] = middleware;</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  return array;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">shuffle([1,2,3,4,5])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function shuffle(arr) {</span></span>
<span class="line"><span style="color:#24292e;">  let array = arr;</span></span>
<span class="line"><span style="color:#24292e;">  let index = array.length;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  while (index) {</span></span>
<span class="line"><span style="color:#24292e;">    index -= 1;</span></span>
<span class="line"><span style="color:#24292e;">    let randomInedx = Math.floor(Math.random() * index);</span></span>
<span class="line"><span style="color:#24292e;">    let middleware = array[index];</span></span>
<span class="line"><span style="color:#24292e;">    array[index] = array[randomInedx];</span></span>
<span class="line"><span style="color:#24292e;">    array[randomInedx] = middleware;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  return array;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">shuffle([1,2,3,4,5])</span></span></code></pre></div><h4 id="方案二-sort-random" tabindex="-1">方案二：sort + random <a class="header-anchor" href="#方案二-sort-random" aria-label="Permalink to &quot;方案二：sort + random&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function shuffle(arr) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return arr.sort((n,m)=&gt;Math.random() - .5)</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">shuffle([1,2,3,4,5])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function shuffle(arr) {</span></span>
<span class="line"><span style="color:#24292e;">  return arr.sort((n,m)=&gt;Math.random() - .5)</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">shuffle([1,2,3,4,5])</span></span></code></pre></div><h2 id="_246-伪数组转换为数组" tabindex="-1">246.伪数组转换为数组 <a class="header-anchor" href="#_246-伪数组转换为数组" aria-label="Permalink to &quot;246.伪数组转换为数组&quot;">​</a></h2><h4 id="方案一-array-from" tabindex="-1">方案一：Array.from <a class="header-anchor" href="#方案一-array-from" aria-label="Permalink to &quot;方案一：Array.from&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">Array.from({length: 2})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Array.from({length: 2})</span></span></code></pre></div><h4 id="方案二-prototype-slice" tabindex="-1">方案二：prototype.slice <a class="header-anchor" href="#方案二-prototype-slice" aria-label="Permalink to &quot;方案二：prototype.slice&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">Array.prototype.slice.call({length: 2,1:1})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Array.prototype.slice.call({length: 2,1:1})</span></span></code></pre></div><h4 id="方案三-prototype-splice" tabindex="-1">方案三：prototype.splice <a class="header-anchor" href="#方案三-prototype-splice" aria-label="Permalink to &quot;方案三：prototype.splice&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">Array.prototype.splice.call({length: 2,1:1},0)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Array.prototype.splice.call({length: 2,1:1},0)</span></span></code></pre></div><h2 id="浏览器对象-bom" tabindex="-1">浏览器对象 BOM <a class="header-anchor" href="#浏览器对象-bom" aria-label="Permalink to &quot;浏览器对象 BOM&quot;">​</a></h2><h2 id="_195-判读浏览器是否支持-css-属性" tabindex="-1">195.判读浏览器是否支持 CSS 属性 <a class="header-anchor" href="#_195-判读浏览器是否支持-css-属性" aria-label="Permalink to &quot;195.判读浏览器是否支持 CSS 属性&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"> * 告知浏览器支持的指定css属性情况</span></span>
<span class="line"><span style="color:#f6f6f4;"> * @param {String} key - css属性，是属性的名字，不需要加前缀</span></span>
<span class="line"><span style="color:#f6f6f4;"> * @returns {String} - 支持的属性情况</span></span>
<span class="line"><span style="color:#f6f6f4;"> */</span></span>
<span class="line"><span style="color:#f6f6f4;">function validateCssKey(key) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  const jsKey = toCamelCase(key); // 有些css属性是连字符号形成</span></span>
<span class="line"><span style="color:#f6f6f4;">  if (jsKey in document.documentElement.style) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    return key;</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">  let validKey = &quot;&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">  // 属性名为前缀在js中的形式，属性值是前缀在css中的形式</span></span>
<span class="line"><span style="color:#f6f6f4;">  // 经尝试，Webkit 也可是首字母小写 webkit</span></span>
<span class="line"><span style="color:#f6f6f4;">  const prefixMap = {</span></span>
<span class="line"><span style="color:#f6f6f4;">    Webkit: &quot;-webkit-&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    Moz: &quot;-moz-&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    ms: &quot;-ms-&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    O: &quot;-o-&quot;,</span></span>
<span class="line"><span style="color:#f6f6f4;">  };</span></span>
<span class="line"><span style="color:#f6f6f4;">  for (const jsPrefix in prefixMap) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    const styleKey = toCamelCase(\`\${jsPrefix}-\${jsKey}\`);</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (styleKey in document.documentElement.style) {</span></span>
<span class="line"><span style="color:#f6f6f4;">      validKey = prefixMap[jsPrefix] + key;</span></span>
<span class="line"><span style="color:#f6f6f4;">      break;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">  return validKey;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"> * 把有连字符号的字符串转化为驼峰命名法的字符串</span></span>
<span class="line"><span style="color:#f6f6f4;"> */</span></span>
<span class="line"><span style="color:#f6f6f4;">function toCamelCase(value) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return value.replace(/-(\\w)/g, (matched, letter) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">    return letter.toUpperCase();</span></span>
<span class="line"><span style="color:#f6f6f4;">  });</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"> * 检查浏览器是否支持某个css属性值（es6版）</span></span>
<span class="line"><span style="color:#f6f6f4;"> * @param {String} key - 检查的属性值所属的css属性名</span></span>
<span class="line"><span style="color:#f6f6f4;"> * @param {String} value - 要检查的css属性值（不要带前缀）</span></span>
<span class="line"><span style="color:#f6f6f4;"> * @returns {String} - 返回浏览器支持的属性值</span></span>
<span class="line"><span style="color:#f6f6f4;"> */</span></span>
<span class="line"><span style="color:#f6f6f4;">function valiateCssValue(key, value) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  const prefix = [&quot;-o-&quot;, &quot;-ms-&quot;, &quot;-moz-&quot;, &quot;-webkit-&quot;, &quot;&quot;];</span></span>
<span class="line"><span style="color:#f6f6f4;">  const prefixValue = prefix.map((item) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">    return item + value;</span></span>
<span class="line"><span style="color:#f6f6f4;">  });</span></span>
<span class="line"><span style="color:#f6f6f4;">  const element = document.createElement(&quot;div&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">  const eleStyle = element.style;</span></span>
<span class="line"><span style="color:#f6f6f4;">  // 应用每个前缀的情况，且最后也要应用上没有前缀的情况，看最后浏览器起效的何种情况</span></span>
<span class="line"><span style="color:#f6f6f4;">  // 这就是最好在prefix里的最后一个元素是&#39;&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">  prefixValue.forEach((item) =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">    eleStyle[key] = item;</span></span>
<span class="line"><span style="color:#f6f6f4;">  });</span></span>
<span class="line"><span style="color:#f6f6f4;">  return eleStyle[key];</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"> * 检查浏览器是否支持某个css属性值</span></span>
<span class="line"><span style="color:#f6f6f4;"> * @param {String} key - 检查的属性值所属的css属性名</span></span>
<span class="line"><span style="color:#f6f6f4;"> * @param {String} value - 要检查的css属性值（不要带前缀）</span></span>
<span class="line"><span style="color:#f6f6f4;"> * @returns {String} - 返回浏览器支持的属性值</span></span>
<span class="line"><span style="color:#f6f6f4;"> */</span></span>
<span class="line"><span style="color:#f6f6f4;">function valiateCssValue(key, value) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  var prefix = [&quot;-o-&quot;, &quot;-ms-&quot;, &quot;-moz-&quot;, &quot;-webkit-&quot;, &quot;&quot;];</span></span>
<span class="line"><span style="color:#f6f6f4;">  var prefixValue = [];</span></span>
<span class="line"><span style="color:#f6f6f4;">  for (var i = 0; i &lt; prefix.length; i++) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    prefixValue.push(prefix[i] + value);</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">  var element = document.createElement(&quot;div&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">  var eleStyle = element.style;</span></span>
<span class="line"><span style="color:#f6f6f4;">  for (var j = 0; j &lt; prefixValue.length; j++) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    eleStyle[key] = prefixValue[j];</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">  return eleStyle[key];</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">function validCss(key, value) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  const validCss = validateCssKey(key);</span></span>
<span class="line"><span style="color:#f6f6f4;">  if (validCss) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    return validCss;</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">  return valiateCssValue(key, value);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> * 告知浏览器支持的指定css属性情况</span></span>
<span class="line"><span style="color:#24292e;"> * @param {String} key - css属性，是属性的名字，不需要加前缀</span></span>
<span class="line"><span style="color:#24292e;"> * @returns {String} - 支持的属性情况</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">function validateCssKey(key) {</span></span>
<span class="line"><span style="color:#24292e;">  const jsKey = toCamelCase(key); // 有些css属性是连字符号形成</span></span>
<span class="line"><span style="color:#24292e;">  if (jsKey in document.documentElement.style) {</span></span>
<span class="line"><span style="color:#24292e;">    return key;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  let validKey = &quot;&quot;;</span></span>
<span class="line"><span style="color:#24292e;">  // 属性名为前缀在js中的形式，属性值是前缀在css中的形式</span></span>
<span class="line"><span style="color:#24292e;">  // 经尝试，Webkit 也可是首字母小写 webkit</span></span>
<span class="line"><span style="color:#24292e;">  const prefixMap = {</span></span>
<span class="line"><span style="color:#24292e;">    Webkit: &quot;-webkit-&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    Moz: &quot;-moz-&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    ms: &quot;-ms-&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    O: &quot;-o-&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  };</span></span>
<span class="line"><span style="color:#24292e;">  for (const jsPrefix in prefixMap) {</span></span>
<span class="line"><span style="color:#24292e;">    const styleKey = toCamelCase(\`\${jsPrefix}-\${jsKey}\`);</span></span>
<span class="line"><span style="color:#24292e;">    if (styleKey in document.documentElement.style) {</span></span>
<span class="line"><span style="color:#24292e;">      validKey = prefixMap[jsPrefix] + key;</span></span>
<span class="line"><span style="color:#24292e;">      break;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  return validKey;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> * 把有连字符号的字符串转化为驼峰命名法的字符串</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">function toCamelCase(value) {</span></span>
<span class="line"><span style="color:#24292e;">  return value.replace(/-(\\w)/g, (matched, letter) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    return letter.toUpperCase();</span></span>
<span class="line"><span style="color:#24292e;">  });</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> * 检查浏览器是否支持某个css属性值（es6版）</span></span>
<span class="line"><span style="color:#24292e;"> * @param {String} key - 检查的属性值所属的css属性名</span></span>
<span class="line"><span style="color:#24292e;"> * @param {String} value - 要检查的css属性值（不要带前缀）</span></span>
<span class="line"><span style="color:#24292e;"> * @returns {String} - 返回浏览器支持的属性值</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">function valiateCssValue(key, value) {</span></span>
<span class="line"><span style="color:#24292e;">  const prefix = [&quot;-o-&quot;, &quot;-ms-&quot;, &quot;-moz-&quot;, &quot;-webkit-&quot;, &quot;&quot;];</span></span>
<span class="line"><span style="color:#24292e;">  const prefixValue = prefix.map((item) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    return item + value;</span></span>
<span class="line"><span style="color:#24292e;">  });</span></span>
<span class="line"><span style="color:#24292e;">  const element = document.createElement(&quot;div&quot;);</span></span>
<span class="line"><span style="color:#24292e;">  const eleStyle = element.style;</span></span>
<span class="line"><span style="color:#24292e;">  // 应用每个前缀的情况，且最后也要应用上没有前缀的情况，看最后浏览器起效的何种情况</span></span>
<span class="line"><span style="color:#24292e;">  // 这就是最好在prefix里的最后一个元素是&#39;&#39;</span></span>
<span class="line"><span style="color:#24292e;">  prefixValue.forEach((item) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    eleStyle[key] = item;</span></span>
<span class="line"><span style="color:#24292e;">  });</span></span>
<span class="line"><span style="color:#24292e;">  return eleStyle[key];</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> * 检查浏览器是否支持某个css属性值</span></span>
<span class="line"><span style="color:#24292e;"> * @param {String} key - 检查的属性值所属的css属性名</span></span>
<span class="line"><span style="color:#24292e;"> * @param {String} value - 要检查的css属性值（不要带前缀）</span></span>
<span class="line"><span style="color:#24292e;"> * @returns {String} - 返回浏览器支持的属性值</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">function valiateCssValue(key, value) {</span></span>
<span class="line"><span style="color:#24292e;">  var prefix = [&quot;-o-&quot;, &quot;-ms-&quot;, &quot;-moz-&quot;, &quot;-webkit-&quot;, &quot;&quot;];</span></span>
<span class="line"><span style="color:#24292e;">  var prefixValue = [];</span></span>
<span class="line"><span style="color:#24292e;">  for (var i = 0; i &lt; prefix.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">    prefixValue.push(prefix[i] + value);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  var element = document.createElement(&quot;div&quot;);</span></span>
<span class="line"><span style="color:#24292e;">  var eleStyle = element.style;</span></span>
<span class="line"><span style="color:#24292e;">  for (var j = 0; j &lt; prefixValue.length; j++) {</span></span>
<span class="line"><span style="color:#24292e;">    eleStyle[key] = prefixValue[j];</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  return eleStyle[key];</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function validCss(key, value) {</span></span>
<span class="line"><span style="color:#24292e;">  const validCss = validateCssKey(key);</span></span>
<span class="line"><span style="color:#24292e;">  if (validCss) {</span></span>
<span class="line"><span style="color:#24292e;">    return validCss;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  return valiateCssValue(key, value);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000022623676%23item-2-16" title="https://segmentfault.com/a/1190000022623676#item-2-16" target="_blank" rel="noreferrer">segmentfault.com/a/11...</a> <em>它里面有 forEach。</em></p><h2 id="_247-返回当前网页地址" tabindex="-1">247.返回当前网页地址 <a class="header-anchor" href="#_247-返回当前网页地址" aria-label="Permalink to &quot;247.返回当前网页地址&quot;">​</a></h2><h4 id="方案一-location" tabindex="-1">方案一：location <a class="header-anchor" href="#方案一-location" aria-label="Permalink to &quot;方案一：location&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function currentURL() {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return window.location.href;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">currentURL()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function currentURL() {</span></span>
<span class="line"><span style="color:#24292e;">  return window.location.href;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">currentURL()</span></span></code></pre></div><h4 id="方案二-a-标签" tabindex="-1">方案二：a 标签 <a class="header-anchor" href="#方案二-a-标签" aria-label="Permalink to &quot;方案二：a 标签&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function currentURL() {</span></span>
<span class="line"><span style="color:#f6f6f4;">  var el = document.createElement(&#39;a&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">  el.href = &#39;&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">  return el.href</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">currentURL()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function currentURL() {</span></span>
<span class="line"><span style="color:#24292e;">  var el = document.createElement(&#39;a&#39;)</span></span>
<span class="line"><span style="color:#24292e;">  el.href = &#39;&#39;</span></span>
<span class="line"><span style="color:#24292e;">  return el.href</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">currentURL()</span></span></code></pre></div><h3 id="获取滚动条位置" tabindex="-1">获取滚动条位置 <a class="header-anchor" href="#获取滚动条位置" aria-label="Permalink to &quot;获取滚动条位置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function getScrollPosition(el = window) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return {</span></span>
<span class="line"><span style="color:#f6f6f4;">    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,</span></span>
<span class="line"><span style="color:#f6f6f4;">    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,</span></span>
<span class="line"><span style="color:#f6f6f4;">  };</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function getScrollPosition(el = window) {</span></span>
<span class="line"><span style="color:#24292e;">  return {</span></span>
<span class="line"><span style="color:#24292e;">    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,</span></span>
<span class="line"><span style="color:#24292e;">    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,</span></span>
<span class="line"><span style="color:#24292e;">  };</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_248-获取-url-中的参数" tabindex="-1">248.获取 url 中的参数 <a class="header-anchor" href="#_248-获取-url-中的参数" aria-label="Permalink to &quot;248.获取 url 中的参数&quot;">​</a></h2><h4 id="方案一-正则-reduce" tabindex="-1">方案一：正则 + reduce <a class="header-anchor" href="#方案一-正则-reduce" aria-label="Permalink to &quot;方案一：正则 + reduce&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function getURLParameters(url) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return url</span></span>
<span class="line"><span style="color:#f6f6f4;">    .match(/([^?=&amp;]+)(=([^&amp;]*))/g)</span></span>
<span class="line"><span style="color:#f6f6f4;">    .reduce(</span></span>
<span class="line"><span style="color:#f6f6f4;">      (a, v) =&gt; (</span></span>
<span class="line"><span style="color:#f6f6f4;">        (a[v.slice(0, v.indexOf(&quot;=&quot;))] = v.slice(v.indexOf(&quot;=&quot;) + 1)), a</span></span>
<span class="line"><span style="color:#f6f6f4;">      ),</span></span>
<span class="line"><span style="color:#f6f6f4;">      {}</span></span>
<span class="line"><span style="color:#f6f6f4;">    );</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">getURLParameters(location.href)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function getURLParameters(url) {</span></span>
<span class="line"><span style="color:#24292e;">  return url</span></span>
<span class="line"><span style="color:#24292e;">    .match(/([^?=&amp;]+)(=([^&amp;]*))/g)</span></span>
<span class="line"><span style="color:#24292e;">    .reduce(</span></span>
<span class="line"><span style="color:#24292e;">      (a, v) =&gt; (</span></span>
<span class="line"><span style="color:#24292e;">        (a[v.slice(0, v.indexOf(&quot;=&quot;))] = v.slice(v.indexOf(&quot;=&quot;) + 1)), a</span></span>
<span class="line"><span style="color:#24292e;">      ),</span></span>
<span class="line"><span style="color:#24292e;">      {}</span></span>
<span class="line"><span style="color:#24292e;">    );</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">getURLParameters(location.href)</span></span></code></pre></div><h4 id="方案二-split-reduce" tabindex="-1">方案二：split + reduce <a class="header-anchor" href="#方案二-split-reduce" aria-label="Permalink to &quot;方案二：split + reduce&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function getURLParameters(url) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return url</span></span>
<span class="line"><span style="color:#f6f6f4;">    .split(&#39;?&#39;) //取？分割</span></span>
<span class="line"><span style="color:#f6f6f4;">    .slice(1) //不要第一部分</span></span>
<span class="line"><span style="color:#f6f6f4;">    .join() //拼接</span></span>
<span class="line"><span style="color:#f6f6f4;">    .split(&#39;&amp;&#39;)//&amp;分割</span></span>
<span class="line"><span style="color:#f6f6f4;">    .map(v=&gt;v.split(&#39;=&#39;)) //=分割</span></span>
<span class="line"><span style="color:#f6f6f4;">    .reduce((s,n)=&gt;{s[n[0]] = n[1];return s},{})</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">getURLParameters(location.href)</span></span>
<span class="line"><span style="color:#f6f6f4;">// getURLParameters(&#39;&#39;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function getURLParameters(url) {</span></span>
<span class="line"><span style="color:#24292e;">  return url</span></span>
<span class="line"><span style="color:#24292e;">    .split(&#39;?&#39;) //取？分割</span></span>
<span class="line"><span style="color:#24292e;">    .slice(1) //不要第一部分</span></span>
<span class="line"><span style="color:#24292e;">    .join() //拼接</span></span>
<span class="line"><span style="color:#24292e;">    .split(&#39;&amp;&#39;)//&amp;分割</span></span>
<span class="line"><span style="color:#24292e;">    .map(v=&gt;v.split(&#39;=&#39;)) //=分割</span></span>
<span class="line"><span style="color:#24292e;">    .reduce((s,n)=&gt;{s[n[0]] = n[1];return s},{})</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">getURLParameters(location.href)</span></span>
<span class="line"><span style="color:#24292e;">// getURLParameters(&#39;&#39;)</span></span></code></pre></div><h4 id="方案三-urlsearchparams" tabindex="-1">方案三: URLSearchParams <a class="header-anchor" href="#方案三-urlsearchparams" aria-label="Permalink to &quot;方案三: URLSearchParams&quot;">​</a></h4><h2 id="_249-页面跳转-是否记录在-history-中" tabindex="-1">249.页面跳转，是否记录在 history 中 <a class="header-anchor" href="#_249-页面跳转-是否记录在-history-中" aria-label="Permalink to &quot;249.页面跳转，是否记录在 history 中&quot;">​</a></h2><h4 id="方案一-2" tabindex="-1">方案一： <a class="header-anchor" href="#方案一-2" aria-label="Permalink to &quot;方案一：&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function redirect(url, asLink = true) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  asLink ? (window.location.href = url) : window.location.replace(url);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function redirect(url, asLink = true) {</span></span>
<span class="line"><span style="color:#24292e;">  asLink ? (window.location.href = url) : window.location.replace(url);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h4 id="方案二-2" tabindex="-1">方案二： <a class="header-anchor" href="#方案二-2" aria-label="Permalink to &quot;方案二：&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function redirect(url, asLink = true) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  asLink ? window.location.assign(url) : window.location.replace(url);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function redirect(url, asLink = true) {</span></span>
<span class="line"><span style="color:#24292e;">  asLink ? window.location.assign(url) : window.location.replace(url);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_250-滚动条回到顶部动画" tabindex="-1">250.滚动条回到顶部动画 <a class="header-anchor" href="#_250-滚动条回到顶部动画" aria-label="Permalink to &quot;250.滚动条回到顶部动画&quot;">​</a></h2><h4 id="方案一-c-c-8" tabindex="-1">方案一： c - c / 8 <a class="header-anchor" href="#方案一-c-c-8" aria-label="Permalink to &quot;方案一： c - c / 8&quot;">​</a></h4><p><em>c 没有定义</em></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function scrollToTop() {</span></span>
<span class="line"><span style="color:#f6f6f4;">  const scrollTop =</span></span>
<span class="line"><span style="color:#f6f6f4;">    document.documentElement.scrollTop || document.body.scrollTop;</span></span>
<span class="line"><span style="color:#f6f6f4;">  if (scrollTop &gt; 0) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    window.requestAnimationFrame(scrollToTop);</span></span>
<span class="line"><span style="color:#f6f6f4;">    window.scrollTo(0, c - c / 8);</span></span>
<span class="line"><span style="color:#f6f6f4;">  } else {</span></span>
<span class="line"><span style="color:#f6f6f4;">    window.cancelAnimationFrame(scrollToTop);</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">scrollToTop()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function scrollToTop() {</span></span>
<span class="line"><span style="color:#24292e;">  const scrollTop =</span></span>
<span class="line"><span style="color:#24292e;">    document.documentElement.scrollTop || document.body.scrollTop;</span></span>
<span class="line"><span style="color:#24292e;">  if (scrollTop &gt; 0) {</span></span>
<span class="line"><span style="color:#24292e;">    window.requestAnimationFrame(scrollToTop);</span></span>
<span class="line"><span style="color:#24292e;">    window.scrollTo(0, c - c / 8);</span></span>
<span class="line"><span style="color:#24292e;">  } else {</span></span>
<span class="line"><span style="color:#24292e;">    window.cancelAnimationFrame(scrollToTop);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">scrollToTop()</span></span></code></pre></div><p>修正之后</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function scrollToTop() {</span></span>
<span class="line"><span style="color:#f6f6f4;">  const scrollTop =</span></span>
<span class="line"><span style="color:#f6f6f4;">    document.documentElement.scrollTop || document.body.scrollTop;</span></span>
<span class="line"><span style="color:#f6f6f4;">  if (scrollTop &gt; 0) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    window.requestAnimationFrame(scrollToTop);</span></span>
<span class="line"><span style="color:#f6f6f4;">    window.scrollTo(0, scrollTop - scrollTop / 8);</span></span>
<span class="line"><span style="color:#f6f6f4;">  } else {</span></span>
<span class="line"><span style="color:#f6f6f4;">    window.cancelAnimationFrame(scrollToTop);</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">scrollToTop()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function scrollToTop() {</span></span>
<span class="line"><span style="color:#24292e;">  const scrollTop =</span></span>
<span class="line"><span style="color:#24292e;">    document.documentElement.scrollTop || document.body.scrollTop;</span></span>
<span class="line"><span style="color:#24292e;">  if (scrollTop &gt; 0) {</span></span>
<span class="line"><span style="color:#24292e;">    window.requestAnimationFrame(scrollToTop);</span></span>
<span class="line"><span style="color:#24292e;">    window.scrollTo(0, scrollTop - scrollTop / 8);</span></span>
<span class="line"><span style="color:#24292e;">  } else {</span></span>
<span class="line"><span style="color:#24292e;">    window.cancelAnimationFrame(scrollToTop);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">scrollToTop()</span></span></code></pre></div><h2 id="_251-复制文本" tabindex="-1">251.复制文本 <a class="header-anchor" href="#_251-复制文本" aria-label="Permalink to &quot;251.复制文本&quot;">​</a></h2><h4 id="方案一-3" tabindex="-1">方案一： <a class="header-anchor" href="#方案一-3" aria-label="Permalink to &quot;方案一：&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function copy(str) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  const el = document.createElement(&quot;textarea&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">  el.value = str;</span></span>
<span class="line"><span style="color:#f6f6f4;">  el.setAttribute(&quot;readonly&quot;, &quot;&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">  el.style.position = &quot;absolute&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">  el.style.left = &quot;-9999px&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">  el.style.top = &quot;-9999px&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">  document.body.appendChild(el);</span></span>
<span class="line"><span style="color:#f6f6f4;">  const selected =</span></span>
<span class="line"><span style="color:#f6f6f4;">    document.getSelection().rangeCount &gt; 0</span></span>
<span class="line"><span style="color:#f6f6f4;">      ? document.getSelection().getRangeAt(0)</span></span>
<span class="line"><span style="color:#f6f6f4;">      : false;</span></span>
<span class="line"><span style="color:#f6f6f4;">  el.select();</span></span>
<span class="line"><span style="color:#f6f6f4;">  document.execCommand(&quot;copy&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">  document.body.removeChild(el);</span></span>
<span class="line"><span style="color:#f6f6f4;">  if (selected) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    document.getSelection().removeAllRanges();</span></span>
<span class="line"><span style="color:#f6f6f4;">    document.getSelection().addRange(selected);</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function copy(str) {</span></span>
<span class="line"><span style="color:#24292e;">  const el = document.createElement(&quot;textarea&quot;);</span></span>
<span class="line"><span style="color:#24292e;">  el.value = str;</span></span>
<span class="line"><span style="color:#24292e;">  el.setAttribute(&quot;readonly&quot;, &quot;&quot;);</span></span>
<span class="line"><span style="color:#24292e;">  el.style.position = &quot;absolute&quot;;</span></span>
<span class="line"><span style="color:#24292e;">  el.style.left = &quot;-9999px&quot;;</span></span>
<span class="line"><span style="color:#24292e;">  el.style.top = &quot;-9999px&quot;;</span></span>
<span class="line"><span style="color:#24292e;">  document.body.appendChild(el);</span></span>
<span class="line"><span style="color:#24292e;">  const selected =</span></span>
<span class="line"><span style="color:#24292e;">    document.getSelection().rangeCount &gt; 0</span></span>
<span class="line"><span style="color:#24292e;">      ? document.getSelection().getRangeAt(0)</span></span>
<span class="line"><span style="color:#24292e;">      : false;</span></span>
<span class="line"><span style="color:#24292e;">  el.select();</span></span>
<span class="line"><span style="color:#24292e;">  document.execCommand(&quot;copy&quot;);</span></span>
<span class="line"><span style="color:#24292e;">  document.body.removeChild(el);</span></span>
<span class="line"><span style="color:#24292e;">  if (selected) {</span></span>
<span class="line"><span style="color:#24292e;">    document.getSelection().removeAllRanges();</span></span>
<span class="line"><span style="color:#24292e;">    document.getSelection().addRange(selected);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h4 id="方案二-cliboard-js" tabindex="-1">方案二：cliboard.js <a class="header-anchor" href="#方案二-cliboard-js" aria-label="Permalink to &quot;方案二：cliboard.js&quot;">​</a></h4><h2 id="_252-检测设备类型" tabindex="-1">252.检测设备类型 <a class="header-anchor" href="#_252-检测设备类型" aria-label="Permalink to &quot;252.检测设备类型&quot;">​</a></h2><h4 id="方案一-ua" tabindex="-1">方案一： ua <a class="header-anchor" href="#方案一-ua" aria-label="Permalink to &quot;方案一： ua&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function detectDeviceType() {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(</span></span>
<span class="line"><span style="color:#f6f6f4;">    navigator.userAgent</span></span>
<span class="line"><span style="color:#f6f6f4;">  )</span></span>
<span class="line"><span style="color:#f6f6f4;">    ? &quot;Mobile&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">    : &quot;Desktop&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">detectDeviceType()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function detectDeviceType() {</span></span>
<span class="line"><span style="color:#24292e;">  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(</span></span>
<span class="line"><span style="color:#24292e;">    navigator.userAgent</span></span>
<span class="line"><span style="color:#24292e;">  )</span></span>
<span class="line"><span style="color:#24292e;">    ? &quot;Mobile&quot;</span></span>
<span class="line"><span style="color:#24292e;">    : &quot;Desktop&quot;;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">detectDeviceType()</span></span></code></pre></div><h4 id="方案二-事件属性" tabindex="-1">方案二：事件属性 <a class="header-anchor" href="#方案二-事件属性" aria-label="Permalink to &quot;方案二：事件属性&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function detectDeviceType() {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return (&quot;ontouchstart&quot; in window || navigator.msMaxTouchPoints)</span></span>
<span class="line"><span style="color:#f6f6f4;">    ? &quot;Mobile&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">    : &quot;Desktop&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">detectDeviceType()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function detectDeviceType() {</span></span>
<span class="line"><span style="color:#24292e;">  return (&quot;ontouchstart&quot; in window || navigator.msMaxTouchPoints)</span></span>
<span class="line"><span style="color:#24292e;">    ? &quot;Mobile&quot;</span></span>
<span class="line"><span style="color:#24292e;">    : &quot;Desktop&quot;;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">detectDeviceType()</span></span></code></pre></div><h2 id="_253-cookie" tabindex="-1">253.Cookie <a class="header-anchor" href="#_253-cookie" aria-label="Permalink to &quot;253.Cookie&quot;">​</a></h2><h3 id="增" tabindex="-1">增 <a class="header-anchor" href="#增" aria-label="Permalink to &quot;增&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function setCookie(key, value, expiredays) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  var exdate = new Date();</span></span>
<span class="line"><span style="color:#f6f6f4;">  exdate.setDate(exdate.getDate() + expiredays);</span></span>
<span class="line"><span style="color:#f6f6f4;">  document.cookie =</span></span>
<span class="line"><span style="color:#f6f6f4;">    key +</span></span>
<span class="line"><span style="color:#f6f6f4;">    &quot;=&quot; +</span></span>
<span class="line"><span style="color:#f6f6f4;">    escape(value) +</span></span>
<span class="line"><span style="color:#f6f6f4;">    (expiredays == null ? &quot;&quot; : &quot;;expires=&quot; + exdate.toGMTString());</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function setCookie(key, value, expiredays) {</span></span>
<span class="line"><span style="color:#24292e;">  var exdate = new Date();</span></span>
<span class="line"><span style="color:#24292e;">  exdate.setDate(exdate.getDate() + expiredays);</span></span>
<span class="line"><span style="color:#24292e;">  document.cookie =</span></span>
<span class="line"><span style="color:#24292e;">    key +</span></span>
<span class="line"><span style="color:#24292e;">    &quot;=&quot; +</span></span>
<span class="line"><span style="color:#24292e;">    escape(value) +</span></span>
<span class="line"><span style="color:#24292e;">    (expiredays == null ? &quot;&quot; : &quot;;expires=&quot; + exdate.toGMTString());</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="删" tabindex="-1">删 <a class="header-anchor" href="#删" aria-label="Permalink to &quot;删&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function delCookie(name) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  var exp = new Date();</span></span>
<span class="line"><span style="color:#f6f6f4;">  exp.setTime(exp.getTime() - 1);</span></span>
<span class="line"><span style="color:#f6f6f4;">  var cval = getCookie(name);</span></span>
<span class="line"><span style="color:#f6f6f4;">  if (cval != null) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    document.cookie = name + &quot;=&quot; + cval + &quot;;expires=&quot; + exp.toGMTString();</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function delCookie(name) {</span></span>
<span class="line"><span style="color:#24292e;">  var exp = new Date();</span></span>
<span class="line"><span style="color:#24292e;">  exp.setTime(exp.getTime() - 1);</span></span>
<span class="line"><span style="color:#24292e;">  var cval = getCookie(name);</span></span>
<span class="line"><span style="color:#24292e;">  if (cval != null) {</span></span>
<span class="line"><span style="color:#24292e;">    document.cookie = name + &quot;=&quot; + cval + &quot;;expires=&quot; + exp.toGMTString();</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="查" tabindex="-1">查 <a class="header-anchor" href="#查" aria-label="Permalink to &quot;查&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function getCookie(name) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  var arr,</span></span>
<span class="line"><span style="color:#f6f6f4;">    reg = new RegExp(&quot;(^| )&quot; + name + &quot;=([^;]*)(;|$)&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">  if ((arr = document.cookie.match(reg))) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    return arr[2];</span></span>
<span class="line"><span style="color:#f6f6f4;">  } else {</span></span>
<span class="line"><span style="color:#f6f6f4;">    return null;</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function getCookie(name) {</span></span>
<span class="line"><span style="color:#24292e;">  var arr,</span></span>
<span class="line"><span style="color:#24292e;">    reg = new RegExp(&quot;(^| )&quot; + name + &quot;=([^;]*)(;|$)&quot;);</span></span>
<span class="line"><span style="color:#24292e;">  if ((arr = document.cookie.match(reg))) {</span></span>
<span class="line"><span style="color:#24292e;">    return arr[2];</span></span>
<span class="line"><span style="color:#24292e;">  } else {</span></span>
<span class="line"><span style="color:#24292e;">    return null;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="清空" tabindex="-1">清空 <a class="header-anchor" href="#清空" aria-label="Permalink to &quot;清空&quot;">​</a></h3><p>有时候我们想清空，但是又无法获取到所有的cookie。 这个时候我们可以了利用写满，然后再清空的办法。</p><h2 id="日期-date" tabindex="-1">日期 Date <a class="header-anchor" href="#日期-date" aria-label="Permalink to &quot;日期 Date&quot;">​</a></h2><h2 id="_254-时间戳转换为时间" tabindex="-1">254.时间戳转换为时间 <a class="header-anchor" href="#_254-时间戳转换为时间" aria-label="Permalink to &quot;254.时间戳转换为时间&quot;">​</a></h2><ul><li>默认为当前时间转换结果</li><li>isMs 为时间戳是否为毫秒</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function timestampToTime(timestamp = Date.parse(new Date()), isMs = true) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  const date = new Date(timestamp * (isMs ? 1 : 1000));</span></span>
<span class="line"><span style="color:#f6f6f4;">  return \`\${date.getFullYear()}-\${</span></span>
<span class="line"><span style="color:#f6f6f4;">    date.getMonth() + 1 &lt; 10 ? &quot;0&quot; + (date.getMonth() + 1) : date.getMonth() + 1</span></span>
<span class="line"><span style="color:#f6f6f4;">  }-\${date.getDate()} \${date.getHours()}:\${date.getMinutes()}:\${date.getSeconds()}\`;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function timestampToTime(timestamp = Date.parse(new Date()), isMs = true) {</span></span>
<span class="line"><span style="color:#24292e;">  const date = new Date(timestamp * (isMs ? 1 : 1000));</span></span>
<span class="line"><span style="color:#24292e;">  return \`\${date.getFullYear()}-\${</span></span>
<span class="line"><span style="color:#24292e;">    date.getMonth() + 1 &lt; 10 ? &quot;0&quot; + (date.getMonth() + 1) : date.getMonth() + 1</span></span>
<span class="line"><span style="color:#24292e;">  }-\${date.getDate()} \${date.getHours()}:\${date.getMinutes()}:\${date.getSeconds()}\`;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><ol><li>补位可以改成 padStart</li><li>补位还可以改成 slice</li></ol><p>如果做海外的话，还会有时区问题，一般我用moment解决。如果想看<a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.lilnong.top%2Fstatic%2Fhtml%2Fdate-zone-test.html" title="https://www.lilnong.top/static/html/date-zone-test.html" target="_blank" rel="noreferrer">原生的</a></p><h3 id="获取当前时间戳" tabindex="-1">获取当前时间戳 <a class="header-anchor" href="#获取当前时间戳" aria-label="Permalink to &quot;获取当前时间戳&quot;">​</a></h3><p>基于上一个想到的问题</p><h4 id="方案一-date-parse-new-date" tabindex="-1">方案一：Date.parse(new Date()) <a class="header-anchor" href="#方案一-date-parse-new-date" aria-label="Permalink to &quot;方案一：Date.parse(new Date())&quot;">​</a></h4><h4 id="方案二-date-now" tabindex="-1">方案二：Date.now() <a class="header-anchor" href="#方案二-date-now" aria-label="Permalink to &quot;方案二：Date.now()&quot;">​</a></h4><h4 id="方案三-new-date" tabindex="-1">方案三：+new Date() <a class="header-anchor" href="#方案三-new-date" aria-label="Permalink to &quot;方案三：+new Date()&quot;">​</a></h4><h3 id="文档对象-dom" tabindex="-1">文档对象 DOM <a class="header-anchor" href="#文档对象-dom" aria-label="Permalink to &quot;文档对象 DOM&quot;">​</a></h3><h2 id="_255固定滚动条" tabindex="-1">255固定滚动条 <a class="header-anchor" href="#_255固定滚动条" aria-label="Permalink to &quot;255固定滚动条&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;"> * 功能描述：一些业务场景，如弹框出现时，需要禁止页面滚动，这是兼容安卓和 iOS 禁止页面滚动的解决方案</span></span>
<span class="line"><span style="color:#f6f6f4;"> */</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">let scrollTop = 0;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">function preventScroll() {</span></span>
<span class="line"><span style="color:#f6f6f4;">  // 存储当前滚动位置</span></span>
<span class="line"><span style="color:#f6f6f4;">  scrollTop = window.scrollY;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  // 将可滚动区域固定定位，可滚动区域高度为 0 后就不能滚动了</span></span>
<span class="line"><span style="color:#f6f6f4;">  document.body.style[&quot;overflow-y&quot;] = &quot;hidden&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">  document.body.style.position = &quot;fixed&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">  document.body.style.width = &quot;100%&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">  document.body.style.top = -scrollTop + &quot;px&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">  // document.body.style[&#39;overscroll-behavior&#39;] = &#39;none&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">function recoverScroll() {</span></span>
<span class="line"><span style="color:#f6f6f4;">  document.body.style[&quot;overflow-y&quot;] = &quot;auto&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">  document.body.style.position = &quot;static&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">  // document.querySelector(&#39;body&#39;).style[&#39;overscroll-behavior&#39;] = &#39;none&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  window.scrollTo(0, scrollTop);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> * 功能描述：一些业务场景，如弹框出现时，需要禁止页面滚动，这是兼容安卓和 iOS 禁止页面滚动的解决方案</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">let scrollTop = 0;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function preventScroll() {</span></span>
<span class="line"><span style="color:#24292e;">  // 存储当前滚动位置</span></span>
<span class="line"><span style="color:#24292e;">  scrollTop = window.scrollY;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  // 将可滚动区域固定定位，可滚动区域高度为 0 后就不能滚动了</span></span>
<span class="line"><span style="color:#24292e;">  document.body.style[&quot;overflow-y&quot;] = &quot;hidden&quot;;</span></span>
<span class="line"><span style="color:#24292e;">  document.body.style.position = &quot;fixed&quot;;</span></span>
<span class="line"><span style="color:#24292e;">  document.body.style.width = &quot;100%&quot;;</span></span>
<span class="line"><span style="color:#24292e;">  document.body.style.top = -scrollTop + &quot;px&quot;;</span></span>
<span class="line"><span style="color:#24292e;">  // document.body.style[&#39;overscroll-behavior&#39;] = &#39;none&#39;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function recoverScroll() {</span></span>
<span class="line"><span style="color:#24292e;">  document.body.style[&quot;overflow-y&quot;] = &quot;auto&quot;;</span></span>
<span class="line"><span style="color:#24292e;">  document.body.style.position = &quot;static&quot;;</span></span>
<span class="line"><span style="color:#24292e;">  // document.querySelector(&#39;body&#39;).style[&#39;overscroll-behavior&#39;] = &#39;none&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  window.scrollTo(0, scrollTop);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_256-判断当前位置是否为页面底部" tabindex="-1">256 判断当前位置是否为页面底部 <a class="header-anchor" href="#_256-判断当前位置是否为页面底部" aria-label="Permalink to &quot;256 判断当前位置是否为页面底部&quot;">​</a></h2><ul><li>返回值为 true/false</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function bottomVisible() {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return (</span></span>
<span class="line"><span style="color:#f6f6f4;">    document.documentElement.clientHeight + window.scrollY &gt;=</span></span>
<span class="line"><span style="color:#f6f6f4;">    (document.documentElement.scrollHeight ||</span></span>
<span class="line"><span style="color:#f6f6f4;">      document.documentElement.clientHeight)</span></span>
<span class="line"><span style="color:#f6f6f4;">  );</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function bottomVisible() {</span></span>
<span class="line"><span style="color:#24292e;">  return (</span></span>
<span class="line"><span style="color:#24292e;">    document.documentElement.clientHeight + window.scrollY &gt;=</span></span>
<span class="line"><span style="color:#24292e;">    (document.documentElement.scrollHeight ||</span></span>
<span class="line"><span style="color:#24292e;">      document.documentElement.clientHeight)</span></span>
<span class="line"><span style="color:#24292e;">  );</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_257判断元素是否在可视范围内" tabindex="-1">257判断元素是否在可视范围内 <a class="header-anchor" href="#_257判断元素是否在可视范围内" aria-label="Permalink to &quot;257判断元素是否在可视范围内&quot;">​</a></h2><ul><li>partiallyVisible 为是否为完全可见</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function elementIsVisibleInViewport(el, partiallyVisible = false) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  const { top, left, bottom, right } = el.getBoundingClientRect();</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  return partiallyVisible</span></span>
<span class="line"><span style="color:#f6f6f4;">    ? ((top &gt; 0 &amp;&amp; top &lt; innerHeight) ||</span></span>
<span class="line"><span style="color:#f6f6f4;">        (bottom &gt; 0 &amp;&amp; bottom &lt; innerHeight)) &amp;&amp;</span></span>
<span class="line"><span style="color:#f6f6f4;">        ((left &gt; 0 &amp;&amp; left &lt; innerWidth) || (right &gt; 0 &amp;&amp; right &lt; innerWidth))</span></span>
<span class="line"><span style="color:#f6f6f4;">    : top &gt;= 0 &amp;&amp; left &gt;= 0 &amp;&amp; bottom &lt;= innerHeight &amp;&amp; right &lt;= innerWidth;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function elementIsVisibleInViewport(el, partiallyVisible = false) {</span></span>
<span class="line"><span style="color:#24292e;">  const { top, left, bottom, right } = el.getBoundingClientRect();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  return partiallyVisible</span></span>
<span class="line"><span style="color:#24292e;">    ? ((top &gt; 0 &amp;&amp; top &lt; innerHeight) ||</span></span>
<span class="line"><span style="color:#24292e;">        (bottom &gt; 0 &amp;&amp; bottom &lt; innerHeight)) &amp;&amp;</span></span>
<span class="line"><span style="color:#24292e;">        ((left &gt; 0 &amp;&amp; left &lt; innerWidth) || (right &gt; 0 &amp;&amp; right &lt; innerWidth))</span></span>
<span class="line"><span style="color:#24292e;">    : top &gt;= 0 &amp;&amp; left &gt;= 0 &amp;&amp; bottom &lt;= innerHeight &amp;&amp; right &lt;= innerWidth;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_258-获取元素-css-样式" tabindex="-1">258.获取元素 css 样式 <a class="header-anchor" href="#_258-获取元素-css-样式" aria-label="Permalink to &quot;258.获取元素 css 样式&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function getStyle(el, ruleName) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return getComputedStyle(el, null).getPropertyValue(ruleName);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function getStyle(el, ruleName) {</span></span>
<span class="line"><span style="color:#24292e;">  return getComputedStyle(el, null).getPropertyValue(ruleName);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_259-进入全屏" tabindex="-1">259.进入全屏 <a class="header-anchor" href="#_259-进入全屏" aria-label="Permalink to &quot;259.进入全屏&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function launchFullscreen(element) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  if (element.requestFullscreen) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    element.requestFullscreen();</span></span>
<span class="line"><span style="color:#f6f6f4;">  } else if (element.mozRequestFullScreen) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    element.mozRequestFullScreen();</span></span>
<span class="line"><span style="color:#f6f6f4;">  } else if (element.msRequestFullscreen) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    element.msRequestFullscreen();</span></span>
<span class="line"><span style="color:#f6f6f4;">  } else if (element.webkitRequestFullscreen) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    element.webkitRequestFullScreen();</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">launchFullscreen(document.documentElement);</span></span>
<span class="line"><span style="color:#f6f6f4;">launchFullscreen(document.getElementById(&quot;id&quot;)); //某个元素进入全屏</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function launchFullscreen(element) {</span></span>
<span class="line"><span style="color:#24292e;">  if (element.requestFullscreen) {</span></span>
<span class="line"><span style="color:#24292e;">    element.requestFullscreen();</span></span>
<span class="line"><span style="color:#24292e;">  } else if (element.mozRequestFullScreen) {</span></span>
<span class="line"><span style="color:#24292e;">    element.mozRequestFullScreen();</span></span>
<span class="line"><span style="color:#24292e;">  } else if (element.msRequestFullscreen) {</span></span>
<span class="line"><span style="color:#24292e;">    element.msRequestFullscreen();</span></span>
<span class="line"><span style="color:#24292e;">  } else if (element.webkitRequestFullscreen) {</span></span>
<span class="line"><span style="color:#24292e;">    element.webkitRequestFullScreen();</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">launchFullscreen(document.documentElement);</span></span>
<span class="line"><span style="color:#24292e;">launchFullscreen(document.getElementById(&quot;id&quot;)); //某个元素进入全屏</span></span></code></pre></div><h2 id="_260退出全屏" tabindex="-1">260退出全屏 <a class="header-anchor" href="#_260退出全屏" aria-label="Permalink to &quot;260退出全屏&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function exitFullscreen() {</span></span>
<span class="line"><span style="color:#f6f6f4;">  if (document.exitFullscreen) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    document.exitFullscreen();</span></span>
<span class="line"><span style="color:#f6f6f4;">  } else if (document.msExitFullscreen) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    document.msExitFullscreen();</span></span>
<span class="line"><span style="color:#f6f6f4;">  } else if (document.mozCancelFullScreen) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    document.mozCancelFullScreen();</span></span>
<span class="line"><span style="color:#f6f6f4;">  } else if (document.webkitExitFullscreen) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    document.webkitExitFullscreen();</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">exitFullscreen();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function exitFullscreen() {</span></span>
<span class="line"><span style="color:#24292e;">  if (document.exitFullscreen) {</span></span>
<span class="line"><span style="color:#24292e;">    document.exitFullscreen();</span></span>
<span class="line"><span style="color:#24292e;">  } else if (document.msExitFullscreen) {</span></span>
<span class="line"><span style="color:#24292e;">    document.msExitFullscreen();</span></span>
<span class="line"><span style="color:#24292e;">  } else if (document.mozCancelFullScreen) {</span></span>
<span class="line"><span style="color:#24292e;">    document.mozCancelFullScreen();</span></span>
<span class="line"><span style="color:#24292e;">  } else if (document.webkitExitFullscreen) {</span></span>
<span class="line"><span style="color:#24292e;">    document.webkitExitFullscreen();</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">exitFullscreen();</span></span></code></pre></div><h2 id="_261全屏事件" tabindex="-1">261全屏事件 <a class="header-anchor" href="#_261全屏事件" aria-label="Permalink to &quot;261全屏事件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">document.addEventListener(&quot;fullscreenchange&quot;, function (e) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  if (document.fullscreenElement) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    console.log(&quot;进入全屏&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">  } else {</span></span>
<span class="line"><span style="color:#f6f6f4;">    console.log(&quot;退出全屏&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">document.addEventListener(&quot;fullscreenchange&quot;, function (e) {</span></span>
<span class="line"><span style="color:#24292e;">  if (document.fullscreenElement) {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&quot;进入全屏&quot;);</span></span>
<span class="line"><span style="color:#24292e;">  } else {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&quot;退出全屏&quot;);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><h2 id="数字-number" tabindex="-1">数字 Number <a class="header-anchor" href="#数字-number" aria-label="Permalink to &quot;数字 Number&quot;">​</a></h2><h2 id="_262-数字千分位分割" tabindex="-1">262.数字千分位分割 <a class="header-anchor" href="#_262-数字千分位分割" aria-label="Permalink to &quot;262.数字千分位分割&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function commafy(num) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  return num.toString().indexOf(&quot;.&quot;) !== -1</span></span>
<span class="line"><span style="color:#f6f6f4;">    ? num.toLocaleString()</span></span>
<span class="line"><span style="color:#f6f6f4;">    : num.toString().replace(/(\\d)(?=(?:\\d{3})+$)/g, &quot;$1,&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">commafy(1000)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function commafy(num) {</span></span>
<span class="line"><span style="color:#24292e;">  return num.toString().indexOf(&quot;.&quot;) !== -1</span></span>
<span class="line"><span style="color:#24292e;">    ? num.toLocaleString()</span></span>
<span class="line"><span style="color:#24292e;">    : num.toString().replace(/(\\d)(?=(?:\\d{3})+$)/g, &quot;$1,&quot;);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">commafy(1000)</span></span></code></pre></div><h2 id="_263-生成随机数" tabindex="-1">263.生成随机数 <a class="header-anchor" href="#_263-生成随机数" aria-label="Permalink to &quot;263.生成随机数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">function randomNum(min, max) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  switch (arguments.length) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    case 1:</span></span>
<span class="line"><span style="color:#f6f6f4;">      return parseInt(Math.random() * min + 1, 10);</span></span>
<span class="line"><span style="color:#f6f6f4;">    case 2:</span></span>
<span class="line"><span style="color:#f6f6f4;">      return parseInt(Math.random() * (max - min + 1) + min, 10);</span></span>
<span class="line"><span style="color:#f6f6f4;">    default:</span></span>
<span class="line"><span style="color:#f6f6f4;">      return 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">randomNum(1,10)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function randomNum(min, max) {</span></span>
<span class="line"><span style="color:#24292e;">  switch (arguments.length) {</span></span>
<span class="line"><span style="color:#24292e;">    case 1:</span></span>
<span class="line"><span style="color:#24292e;">      return parseInt(Math.random() * min + 1, 10);</span></span>
<span class="line"><span style="color:#24292e;">    case 2:</span></span>
<span class="line"><span style="color:#24292e;">      return parseInt(Math.random() * (max - min + 1) + min, 10);</span></span>
<span class="line"><span style="color:#24292e;">    default:</span></span>
<span class="line"><span style="color:#24292e;">      return 0;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">randomNum(1,10)</span></span></code></pre></div><h2 id="_264-时间戳转时间" tabindex="-1">264 时间戳转时间 <a class="header-anchor" href="#_264-时间戳转时间" aria-label="Permalink to &quot;264 时间戳转时间&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/* 时间戳转时间 */</span></span>
<span class="line"><span style="color:#f6f6f4;">function timestampToTime(cjsj) {</span></span>
<span class="line"><span style="color:#f6f6f4;">	var date = new Date(cjsj); //时间戳为10位需*1000，时间戳为13位的话不需乘1000</span></span>
<span class="line"><span style="color:#f6f6f4;">	var Y = date.getFullYear() + &#39;-&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;">	var M = (date.getMonth() + 1 &lt; 10 ? &#39;0&#39; + (date.getMonth() + 1) : date.getMonth() + 1) + &#39;-&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;">	var D = (date.getDate() + 1 &lt; 10 ? &#39;0&#39; + (date.getDate()) : date.getDate()) + &#39; &#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;">	return Y + M + D</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/* 时间戳转时间 */</span></span>
<span class="line"><span style="color:#24292e;">function timestampToTime(cjsj) {</span></span>
<span class="line"><span style="color:#24292e;">	var date = new Date(cjsj); //时间戳为10位需*1000，时间戳为13位的话不需乘1000</span></span>
<span class="line"><span style="color:#24292e;">	var Y = date.getFullYear() + &#39;-&#39;;</span></span>
<span class="line"><span style="color:#24292e;">	var M = (date.getMonth() + 1 &lt; 10 ? &#39;0&#39; + (date.getMonth() + 1) : date.getMonth() + 1) + &#39;-&#39;;</span></span>
<span class="line"><span style="color:#24292e;">	var D = (date.getDate() + 1 &lt; 10 ? &#39;0&#39; + (date.getDate()) : date.getDate()) + &#39; &#39;;</span></span>
<span class="line"><span style="color:#24292e;">	return Y + M + D</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_265-过滤富文本和空格为纯文本" tabindex="-1">265 过滤富文本和空格为纯文本 <a class="header-anchor" href="#_265-过滤富文本和空格为纯文本" aria-label="Permalink to &quot;265 过滤富文本和空格为纯文本&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/* 过滤富文本和空格为纯文本 */</span></span>
<span class="line"><span style="color:#f6f6f4;">function filterHtml(str) {</span></span>
<span class="line"><span style="color:#f6f6f4;">	return str.replace(/&lt;[^&lt;&gt;]+&gt;/g, &#39;&#39;).replace(/&amp;nbsp;/ig, &#39;&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/* 过滤富文本和空格为纯文本 */</span></span>
<span class="line"><span style="color:#24292e;">function filterHtml(str) {</span></span>
<span class="line"><span style="color:#24292e;">	return str.replace(/&lt;[^&lt;&gt;]+&gt;/g, &#39;&#39;).replace(/&amp;nbsp;/ig, &#39;&#39;);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_266-指定显示的文字数量多余的使用省略号代替" tabindex="-1">266 指定显示的文字数量多余的使用省略号代替 <a class="header-anchor" href="#_266-指定显示的文字数量多余的使用省略号代替" aria-label="Permalink to &quot;266 指定显示的文字数量多余的使用省略号代替&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/*指定显示的文字数量多余的使用省略号代替*/</span></span>
<span class="line"><span style="color:#f6f6f4;">function strEllp(str, num = str.length) {</span></span>
<span class="line"><span style="color:#f6f6f4;">	var subStr = str.substring(0, num);</span></span>
<span class="line"><span style="color:#f6f6f4;">	return subStr + (str.length &gt; num ? &#39;...&#39; : &#39;&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/*指定显示的文字数量多余的使用省略号代替*/</span></span>
<span class="line"><span style="color:#24292e;">function strEllp(str, num = str.length) {</span></span>
<span class="line"><span style="color:#24292e;">	var subStr = str.substring(0, num);</span></span>
<span class="line"><span style="color:#24292e;">	return subStr + (str.length &gt; num ? &#39;...&#39; : &#39;&#39;);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_267-获取滚动条当前的位置" tabindex="-1">267 获取滚动条当前的位置 <a class="header-anchor" href="#_267-获取滚动条当前的位置" aria-label="Permalink to &quot;267 获取滚动条当前的位置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 获取滚动条当前的位置</span></span>
<span class="line"><span style="color:#f6f6f4;">function getScrollTop() {</span></span>
<span class="line"><span style="color:#f6f6f4;">	var scrollTop = 0</span></span>
<span class="line"><span style="color:#f6f6f4;">	if (document.documentElement &amp;&amp; document.documentElement.scrollTop) {</span></span>
<span class="line"><span style="color:#f6f6f4;">		scrollTop = document.documentElement.scrollTop;</span></span>
<span class="line"><span style="color:#f6f6f4;">	} else if (document.body) {</span></span>
<span class="line"><span style="color:#f6f6f4;">		scrollTop = document.body.scrollTop;</span></span>
<span class="line"><span style="color:#f6f6f4;">	}</span></span>
<span class="line"><span style="color:#f6f6f4;">	return scrollTop</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 获取滚动条当前的位置</span></span>
<span class="line"><span style="color:#24292e;">function getScrollTop() {</span></span>
<span class="line"><span style="color:#24292e;">	var scrollTop = 0</span></span>
<span class="line"><span style="color:#24292e;">	if (document.documentElement &amp;&amp; document.documentElement.scrollTop) {</span></span>
<span class="line"><span style="color:#24292e;">		scrollTop = document.documentElement.scrollTop;</span></span>
<span class="line"><span style="color:#24292e;">	} else if (document.body) {</span></span>
<span class="line"><span style="color:#24292e;">		scrollTop = document.body.scrollTop;</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	return scrollTop</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_268-获取当前可视范围的高度" tabindex="-1">268 获取当前可视范围的高度 <a class="header-anchor" href="#_268-获取当前可视范围的高度" aria-label="Permalink to &quot;268 获取当前可视范围的高度&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 获取当前可视范围的高度</span></span>
<span class="line"><span style="color:#f6f6f4;">function getClientHeight() {</span></span>
<span class="line"><span style="color:#f6f6f4;">	var clientHeight = 0</span></span>
<span class="line"><span style="color:#f6f6f4;">	if (document.body.clientHeight &amp;&amp; document.documentElement.clientHeight) {</span></span>
<span class="line"><span style="color:#f6f6f4;">		clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)</span></span>
<span class="line"><span style="color:#f6f6f4;">	} else {</span></span>
<span class="line"><span style="color:#f6f6f4;">		clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)</span></span>
<span class="line"><span style="color:#f6f6f4;">	}</span></span>
<span class="line"><span style="color:#f6f6f4;">	return clientHeight</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 获取当前可视范围的高度</span></span>
<span class="line"><span style="color:#24292e;">function getClientHeight() {</span></span>
<span class="line"><span style="color:#24292e;">	var clientHeight = 0</span></span>
<span class="line"><span style="color:#24292e;">	if (document.body.clientHeight &amp;&amp; document.documentElement.clientHeight) {</span></span>
<span class="line"><span style="color:#24292e;">		clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)</span></span>
<span class="line"><span style="color:#24292e;">	} else {</span></span>
<span class="line"><span style="color:#24292e;">		clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	return clientHeight</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_269-获取文档完整的高度" tabindex="-1">269 获取文档完整的高度 <a class="header-anchor" href="#_269-获取文档完整的高度" aria-label="Permalink to &quot;269 获取文档完整的高度&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 获取文档完整的高度</span></span>
<span class="line"><span style="color:#f6f6f4;">function getScrollHeight() {</span></span>
<span class="line"><span style="color:#f6f6f4;">	return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 获取文档完整的高度</span></span>
<span class="line"><span style="color:#24292e;">function getScrollHeight() {</span></span>
<span class="line"><span style="color:#24292e;">	return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>如果这篇文章帮助到了你，欢迎点赞和关注，搜索《叫我詹躲躲》加入我们的技术群一起学习讨论，共同探索前端的边界。</p><p>本文转自 <a href="https://juejin.cn/post/6844904181761835016" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904181761835016</a>，如有侵权，请联系删除。</p>`,652),o=[p];function t(c,r,i,f,y,d){return a(),n("div",null,o)}const g=s(e,[["render",t]]);export{h as __pageData,g as default};
