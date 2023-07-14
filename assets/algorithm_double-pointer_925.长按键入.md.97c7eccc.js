import{_ as s,o as a,c as n,V as l}from"./chunks/framework.c6d8cbec.js";const C=JSON.parse('{"title":"LeetCode 925. 长按键入","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/double-pointer/925.长按键入.md","filePath":"algorithm/double-pointer/925.长按键入.md"}'),p={name:"algorithm/double-pointer/925.长按键入.md"},o=l(`<h1 id="leetcode-925-长按键入" tabindex="-1">LeetCode 925. 长按键入 <a class="header-anchor" href="#leetcode-925-长按键入" aria-label="Permalink to &quot;LeetCode 925. 长按键入&quot;">​</a></h1><h2 id="题目描述" tabindex="-1">题目描述 <a class="header-anchor" href="#题目描述" aria-label="Permalink to &quot;题目描述&quot;">​</a></h2><p>你的朋友正在使用键盘输入他的名字 <code>name</code>。偶尔，在键入字符 <code>c</code> 时，按键可能会被长按，而字符可能被输入 1 次或多次。</p><p>你将会检查键盘输入的字符 <code>typed</code>。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 <code>True</code>。</p><p>示例 1：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">输入：name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">alex</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, typed </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">aaleex</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">输出：</span><span style="color:#BF9EEE;">true</span></span>
<span class="line"><span style="color:#F6F6F4;">解释：</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">alex</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;"> 中的 </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">a</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;"> 和 </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">e</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;"> 被长按。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">输入：name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;alex&quot;</span><span style="color:#24292E;">, typed </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;aaleex&quot;</span></span>
<span class="line"><span style="color:#24292E;">输出：</span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">解释：</span><span style="color:#032F62;">&#39;alex&#39;</span><span style="color:#24292E;"> 中的 </span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;"> 和 </span><span style="color:#032F62;">&#39;e&#39;</span><span style="color:#24292E;"> 被长按。</span></span></code></pre></div><p>示例 2：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">输入：name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">saeed</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, typed </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">ssaaedd</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">输出：</span><span style="color:#BF9EEE;">false</span></span>
<span class="line"><span style="color:#F6F6F4;">解释：</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">e</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;"> 一定需要被键入两次，但在 typed 的输出中不是这样。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">输入：name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;saeed&quot;</span><span style="color:#24292E;">, typed </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;ssaaedd&quot;</span></span>
<span class="line"><span style="color:#24292E;">输出：</span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">解释：</span><span style="color:#032F62;">&#39;e&#39;</span><span style="color:#24292E;"> 一定需要被键入两次，但在 typed 的输出中不是这样。</span></span></code></pre></div><p>示例 3：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">输入：name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">leelee</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, typed </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">lleeelee</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">输出：</span><span style="color:#BF9EEE;">true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">输入：name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;leelee&quot;</span><span style="color:#24292E;">, typed </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;lleeelee&quot;</span></span>
<span class="line"><span style="color:#24292E;">输出：</span><span style="color:#005CC5;">true</span></span></code></pre></div><p>示例 4：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">输入：name </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">laiden</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, typed </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">laiden</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">输出：</span><span style="color:#BF9EEE;">true</span></span>
<span class="line"><span style="color:#F6F6F4;">解释：长按名字中的字符并不是必要的。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">输入：name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;laiden&quot;</span><span style="color:#24292E;">, typed </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;laiden&quot;</span></span>
<span class="line"><span style="color:#24292E;">输出：</span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">解释：长按名字中的字符并不是必要的。</span></span></code></pre></div><p>提示：</p><ul><li><code>name.length</code> &lt;= 1000</li><li><code>typed.length</code> &lt;= 1000</li><li><code>name</code> 和 <code>typed</code> 的字符都是小写字母。</li></ul><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/long-pressed-name" target="_blank" rel="noreferrer">https://leetcode-cn.com/problems/long-pressed-name</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><p>显而易见，采用双指针做法，通过 <code>cnt</code> 计数统计字符匹配成功个数，然后通过双指针进行比较匹配，其中有几个地方注意一下：</p><ul><li>如果 <code>typed</code> 和 <code>name</code> 的当前索引前一位都不相等的话，那么名字就不对应，直接跳出去，这里算是小小的优化了一下。</li><li>当 <code>typed</code> 走完才能跳出去，如果是 <code>i == n</code> 就跳出去的话，这种情况：name：abc | typed：abcd 就会判断出错</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">/**</span></span>
<span class="line"><span style="color:#7B7F8B;"> * </span><span style="color:#F286C4;">@param</span><span style="color:#7B7F8B;"> </span><span style="color:#97E1F1;font-style:italic;">{string}</span><span style="color:#7B7F8B;"> </span><span style="color:#FFB86C;font-style:italic;">name</span></span>
<span class="line"><span style="color:#7B7F8B;"> * </span><span style="color:#F286C4;">@param</span><span style="color:#7B7F8B;"> </span><span style="color:#97E1F1;font-style:italic;">{string}</span><span style="color:#7B7F8B;"> </span><span style="color:#FFB86C;font-style:italic;">typed</span></span>
<span class="line"><span style="color:#7B7F8B;"> * </span><span style="color:#F286C4;">@return</span><span style="color:#7B7F8B;"> </span><span style="color:#97E1F1;font-style:italic;">{boolean}</span></span>
<span class="line"><span style="color:#7B7F8B;"> */</span></span>
<span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">isLongPressedName</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">typed</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> n </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> name.length; </span><span style="color:#7B7F8B;">// 求出字符串长度</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> m </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> typed.length;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> cnt </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">; </span><span style="color:#7B7F8B;">// 统计匹配成功个数</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> i </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    j </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">; </span><span style="color:#7B7F8B;">// 双指针</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> flag </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">; </span><span style="color:#7B7F8B;">// 判断是否中途遇到不匹配阶段</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">while</span><span style="color:#F6F6F4;"> (</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (name[i] </span><span style="color:#F286C4;">==</span><span style="color:#F6F6F4;"> typed[j]) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">// 匹配成功</span></span>
<span class="line"><span style="color:#F6F6F4;">      i</span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">, cnt</span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">, j</span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    } </span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (typed[j] </span><span style="color:#F286C4;">==</span><span style="color:#F6F6F4;"> name[i </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">]) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        j</span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">      } </span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 如果 typed 和 name 当前索引前一位都不相等的话，那么名字就不对应，直接跳出去</span></span>
<span class="line"><span style="color:#F6F6F4;">        flag </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">      }</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (flag) </span><span style="color:#F286C4;">break</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (j </span><span style="color:#F286C4;">==</span><span style="color:#F6F6F4;"> m) </span><span style="color:#F286C4;">break</span><span style="color:#F6F6F4;">; </span><span style="color:#7B7F8B;">// 当 typed走完才能跳出去，如果是 i == n  就跳出去的话，这种情况：abc | abcd 就会判断出错</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (cnt </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> n </span><span style="color:#F286C4;">&amp;&amp;</span><span style="color:#F6F6F4;"> j </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> m) </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{string}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">name</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{string}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">typed</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{boolean}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isLongPressedName</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">name</span><span style="color:#24292E;">, </span><span style="color:#E36209;">typed</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 求出字符串长度</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> m </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> typed.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> cnt </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 统计匹配成功个数</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 双指针</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> flag </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 判断是否中途遇到不匹配阶段</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (name[i] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> typed[j]) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 匹配成功</span></span>
<span class="line"><span style="color:#24292E;">      i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">, cnt</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">, j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (typed[j] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> name[i </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]) {</span></span>
<span class="line"><span style="color:#24292E;">        j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果 typed 和 name 当前索引前一位都不相等的话，那么名字就不对应，直接跳出去</span></span>
<span class="line"><span style="color:#24292E;">        flag </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (flag) </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (j </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> m) </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 当 typed走完才能跳出去，如果是 i == n  就跳出去的话，这种情况：abc | abcd 就会判断出错</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (cnt </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> m) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">学如逆水行舟，不进则退</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">学如逆水行舟，不进则退</span></span></code></pre></div>`,20),e=[o];function t(c,r,y,F,i,E){return a(),n("div",null,e)}const u=s(p,[["render",t]]);export{C as __pageData,u as default};
