import{_ as s,o as n,c as a,V as l}from"./chunks/framework.c6d8cbec.js";const u=JSON.parse('{"title":"LeetCode 75. 颜色分类","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/double-pointer/75.颜色分类.md","filePath":"algorithm/double-pointer/75.颜色分类.md"}'),p={name:"algorithm/double-pointer/75.颜色分类.md"},o=l(`<h1 id="leetcode-75-颜色分类" tabindex="-1">LeetCode 75. 颜色分类 <a class="header-anchor" href="#leetcode-75-颜色分类" aria-label="Permalink to &quot;LeetCode 75. 颜色分类&quot;">​</a></h1><h2 id="题目描述" tabindex="-1">题目描述 <a class="header-anchor" href="#题目描述" aria-label="Permalink to &quot;题目描述&quot;">​</a></h2><p>给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。</p><p>此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。</p><p>注意: 不能使用代码库中的排序函数来解决这道题。</p><p>示例:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">输入: [</span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">];</span></span>
<span class="line"><span style="color:#F6F6F4;">输出: [</span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">输入</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#6F42C1;">输出</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">];</span></span></code></pre></div><p>进阶：</p><p>一个直观的解决方案是使用计数排序的两趟扫描算法。 首先，迭代计算出 0、1 和 2 元素的个数，然后按照 0、1、2 的排序，重写当前数组。 你能想出一个仅使用常数空间的一趟扫描算法吗？</p><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/sort-colors" target="_blank" rel="noreferrer">https://leetcode-cn.com/problems/sort-colors</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><p>双指针，当前值为 2，那么就和右边指针进行交换，反之当前值为 0，那么就和左边指针进行交换，为 1 就不动。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">/**</span></span>
<span class="line"><span style="color:#7B7F8B;"> * </span><span style="color:#F286C4;">@param</span><span style="color:#7B7F8B;"> </span><span style="color:#97E1F1;font-style:italic;">{number[]}</span><span style="color:#7B7F8B;"> </span><span style="color:#FFB86C;font-style:italic;">nums</span></span>
<span class="line"><span style="color:#7B7F8B;"> * </span><span style="color:#F286C4;">@return</span><span style="color:#7B7F8B;"> </span><span style="color:#97E1F1;font-style:italic;">{void}</span><span style="color:#7B7F8B;"> Do not return anything, modify nums in-place instead.</span></span>
<span class="line"><span style="color:#7B7F8B;"> */</span></span>
<span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">sortColors</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">nums</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> len </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> nums.length;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> L </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> R </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> len </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> i </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">while</span><span style="color:#F6F6F4;"> (i </span><span style="color:#F286C4;">&lt;=</span><span style="color:#F6F6F4;"> R) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">while</span><span style="color:#F6F6F4;"> (nums[i] </span><span style="color:#F286C4;">==</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">&amp;&amp;</span><span style="color:#F6F6F4;"> i </span><span style="color:#F286C4;">&lt;</span><span style="color:#F6F6F4;"> R) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">// 当前值为2，那么就和右边指针进行交换</span></span>
<span class="line"><span style="color:#F6F6F4;">      [nums[i], nums[R]] </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [nums[R], nums[i]];</span></span>
<span class="line"><span style="color:#F6F6F4;">      R</span><span style="color:#F286C4;">--</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">while</span><span style="color:#F6F6F4;"> (nums[i] </span><span style="color:#F286C4;">==</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">&amp;&amp;</span><span style="color:#F6F6F4;"> i </span><span style="color:#F286C4;">&gt;</span><span style="color:#F6F6F4;"> L) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">// 当前值为0，那么就和左边指针进行交换</span></span>
<span class="line"><span style="color:#F6F6F4;">      [nums[i], nums[L]] </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [nums[L], nums[i]];</span></span>
<span class="line"><span style="color:#F6F6F4;">      L</span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">    i</span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> nums;</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{number[]}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">nums</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{void}</span><span style="color:#6A737D;"> Do not return anything, modify nums in-place instead.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sortColors</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">nums</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> nums.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">L</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">R</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">R</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (nums[i] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">R</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 当前值为2，那么就和右边指针进行交换</span></span>
<span class="line"><span style="color:#24292E;">      [nums[i], nums[</span><span style="color:#005CC5;">R</span><span style="color:#24292E;">]] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [nums[</span><span style="color:#005CC5;">R</span><span style="color:#24292E;">], nums[i]];</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">R</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (nums[i] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">L</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 当前值为0，那么就和左边指针进行交换</span></span>
<span class="line"><span style="color:#24292E;">      [nums[i], nums[</span><span style="color:#005CC5;">L</span><span style="color:#24292E;">]] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [nums[</span><span style="color:#005CC5;">L</span><span style="color:#24292E;">], nums[i]];</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">L</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> nums;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><p>我想下面这份代码应该会更好理解一点：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">/**</span></span>
<span class="line"><span style="color:#7B7F8B;"> * </span><span style="color:#F286C4;">@param</span><span style="color:#7B7F8B;"> </span><span style="color:#97E1F1;font-style:italic;">{number[]}</span><span style="color:#7B7F8B;"> </span><span style="color:#FFB86C;font-style:italic;">nums</span></span>
<span class="line"><span style="color:#7B7F8B;"> * </span><span style="color:#F286C4;">@return</span><span style="color:#7B7F8B;"> </span><span style="color:#97E1F1;font-style:italic;">{void}</span><span style="color:#7B7F8B;"> Do not return anything, modify nums in-place instead.</span></span>
<span class="line"><span style="color:#7B7F8B;"> */</span></span>
<span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">sortColors</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">nums</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> len </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> nums.length;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> L </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> R </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> len </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> i </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">while</span><span style="color:#F6F6F4;"> (i </span><span style="color:#F286C4;">&lt;=</span><span style="color:#F6F6F4;"> R) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (nums[i] </span><span style="color:#F286C4;">==</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">// 当前值为0，那么就和左边指针进行交换</span></span>
<span class="line"><span style="color:#F6F6F4;">      [nums[i], nums[L]] </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [nums[L], nums[i]];</span></span>
<span class="line"><span style="color:#F6F6F4;">      L</span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">      i</span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    } </span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (nums[i] </span><span style="color:#F286C4;">==</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">// 当前值为2，那么就和右边指针进行交换</span></span>
<span class="line"><span style="color:#F6F6F4;">      [nums[i], nums[R]] </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [nums[R], nums[i]];</span></span>
<span class="line"><span style="color:#F6F6F4;">      R</span><span style="color:#F286C4;">--</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    } </span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">      i</span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> nums;</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{number[]}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">nums</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{void}</span><span style="color:#6A737D;"> Do not return anything, modify nums in-place instead.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sortColors</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">nums</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> nums.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">L</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">R</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">R</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (nums[i] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 当前值为0，那么就和左边指针进行交换</span></span>
<span class="line"><span style="color:#24292E;">      [nums[i], nums[</span><span style="color:#005CC5;">L</span><span style="color:#24292E;">]] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [nums[</span><span style="color:#005CC5;">L</span><span style="color:#24292E;">], nums[i]];</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">L</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (nums[i] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 当前值为2，那么就和右边指针进行交换</span></span>
<span class="line"><span style="color:#24292E;">      [nums[i], nums[</span><span style="color:#005CC5;">R</span><span style="color:#24292E;">]] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [nums[</span><span style="color:#005CC5;">R</span><span style="color:#24292E;">], nums[i]];</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">R</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> nums;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">学如逆水行舟，不进则退</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">学如逆水行舟，不进则退</span></span></code></pre></div>`,16),e=[o];function c(t,r,y,F,i,E){return n(),a("div",null,e)}const m=s(p,[["render",c]]);export{u as __pageData,m as default};
