import{_ as s,o as a,c as n,V as l}from"./chunks/framework.c6d8cbec.js";const d=JSON.parse('{"title":"LeetCode 100. 相同的树","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/binary-tree/100.相同的树.md","filePath":"algorithm/binary-tree/100.相同的树.md"}'),p={name:"algorithm/binary-tree/100.相同的树.md"},o=l(`<h1 id="leetcode-100-相同的树" tabindex="-1">LeetCode 100. 相同的树 <a class="header-anchor" href="#leetcode-100-相同的树" aria-label="Permalink to &quot;LeetCode 100. 相同的树&quot;">​</a></h1><h2 id="题目描述" tabindex="-1">题目描述 <a class="header-anchor" href="#题目描述" aria-label="Permalink to &quot;题目描述&quot;">​</a></h2><p>给定两个二叉树，编写一个函数来检验它们是否相同。</p><p>如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。</p><p>示例 1:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">输入:       </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">         </span><span style="color:#BF9EEE;">1</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;"> \\       </span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;"> \\</span></span>
<span class="line"><span style="color:#F6F6F4;">         </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">   </span><span style="color:#BF9EEE;">3</span><span style="color:#F6F6F4;">     </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">   </span><span style="color:#BF9EEE;">3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        [</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">3</span><span style="color:#F6F6F4;">],   [</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">3</span><span style="color:#F6F6F4;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">输出: </span><span style="color:#BF9EEE;">true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">输入</span><span style="color:#24292E;">:       </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">         </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">/ </span><span style="color:#22863A;font-weight:bold;">\\ </span><span style="color:#032F62;">      /</span><span style="color:#24292E;"> \\</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">   </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">     </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">   </span><span style="color:#005CC5;">3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">],   [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">输出</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span></code></pre></div><p>示例 2:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">输入:      </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">          </span><span style="color:#BF9EEE;">1</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#F286C4;">/</span><span style="color:#F6F6F4;">           \\</span></span>
<span class="line"><span style="color:#F6F6F4;">         </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">             </span><span style="color:#BF9EEE;">2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        [</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">],     [</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">输出: </span><span style="color:#BF9EEE;">false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">输入</span><span style="color:#24292E;">:      </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">          </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">           \\</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">             </span><span style="color:#005CC5;">2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">],     [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">输出</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span></code></pre></div><p>示例 3:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">输入:       </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">         </span><span style="color:#BF9EEE;">1</span></span>
<span class="line"><span style="color:#F6F6F4;">          </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;"> \\       </span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;"> \\</span></span>
<span class="line"><span style="color:#F6F6F4;">         </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">   </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">     </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">   </span><span style="color:#BF9EEE;">2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        [</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">],   [</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">输出: </span><span style="color:#BF9EEE;">false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">输入</span><span style="color:#24292E;">:       </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">         </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">/ </span><span style="color:#22863A;font-weight:bold;">\\ </span><span style="color:#032F62;">      /</span><span style="color:#24292E;"> \\</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">   </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">     </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">   </span><span style="color:#005CC5;">2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">],   [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">输出</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span></code></pre></div><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/same-tree" target="_blank" rel="noreferrer">https://leetcode-cn.com/problems/same-tree</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><p>两颗树一起深搜</p><ul><li>如果两颗树对应的两个节点都为空，也是相同的。</li><li>如果两颗树比较时其中一个节点为空，则不相同。</li><li>如果两颗树比较时两个值都不相同，则不相同。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">/**</span></span>
<span class="line"><span style="color:#7B7F8B;"> * Definition for a binary tree node.</span></span>
<span class="line"><span style="color:#7B7F8B;"> * function TreeNode(val, left, right) {</span></span>
<span class="line"><span style="color:#7B7F8B;"> *     this.val = (val===undefined ? 0 : val)</span></span>
<span class="line"><span style="color:#7B7F8B;"> *     this.left = (left===undefined ? null : left)</span></span>
<span class="line"><span style="color:#7B7F8B;"> *     this.right = (right===undefined ? null : right)</span></span>
<span class="line"><span style="color:#7B7F8B;"> * }</span></span>
<span class="line"><span style="color:#7B7F8B;"> */</span></span>
<span class="line"><span style="color:#7B7F8B;">/**</span></span>
<span class="line"><span style="color:#7B7F8B;"> * </span><span style="color:#F286C4;">@param</span><span style="color:#7B7F8B;"> </span><span style="color:#97E1F1;font-style:italic;">{TreeNode}</span><span style="color:#7B7F8B;"> </span><span style="color:#FFB86C;font-style:italic;">p</span></span>
<span class="line"><span style="color:#7B7F8B;"> * </span><span style="color:#F286C4;">@param</span><span style="color:#7B7F8B;"> </span><span style="color:#97E1F1;font-style:italic;">{TreeNode}</span><span style="color:#7B7F8B;"> </span><span style="color:#FFB86C;font-style:italic;">q</span></span>
<span class="line"><span style="color:#7B7F8B;"> * </span><span style="color:#F286C4;">@return</span><span style="color:#7B7F8B;"> </span><span style="color:#97E1F1;font-style:italic;">{boolean}</span></span>
<span class="line"><span style="color:#7B7F8B;"> */</span></span>
<span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">isSameTree</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">p</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">q</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> flag </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">dfs</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">p</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">q</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 当前节点都是空节点，也代表相同</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (p </span><span style="color:#F286C4;">==</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">&amp;&amp;</span><span style="color:#F6F6F4;"> q </span><span style="color:#F286C4;">==</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 两颗树其中一个节点为空</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (p </span><span style="color:#F286C4;">==</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">||</span><span style="color:#F6F6F4;"> q </span><span style="color:#F286C4;">==</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 值不相同</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (p.val </span><span style="color:#F286C4;">!==</span><span style="color:#F6F6F4;"> q.val) </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">dfs</span><span style="color:#F6F6F4;">(p.left, q.left) </span><span style="color:#F286C4;">&amp;&amp;</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">dfs</span><span style="color:#F6F6F4;">(p.right, q.right);</span></span>
<span class="line"><span style="color:#F6F6F4;">  };</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">dfs</span><span style="color:#F6F6F4;">(p, q);</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Definition for a binary tree node.</span></span>
<span class="line"><span style="color:#6A737D;"> * function TreeNode(val, left, right) {</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.val = (val===undefined ? 0 : val)</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.left = (left===undefined ? null : left)</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.right = (right===undefined ? null : right)</span></span>
<span class="line"><span style="color:#6A737D;"> * }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{TreeNode}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">p</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{TreeNode}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">q</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{boolean}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isSameTree</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">p</span><span style="color:#24292E;">, </span><span style="color:#E36209;">q</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> flag </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dfs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">p</span><span style="color:#24292E;">, </span><span style="color:#E36209;">q</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 当前节点都是空节点，也代表相同</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (p </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> q </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 两颗树其中一个节点为空</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (p </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> q </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 值不相同</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (p.val </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> q.val) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dfs</span><span style="color:#24292E;">(p.left, q.left) </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dfs</span><span style="color:#24292E;">(p.right, q.right);</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dfs</span><span style="color:#24292E;">(p, q);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">学如逆水行舟，不进则退</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">学如逆水行舟，不进则退</span></span></code></pre></div>`,16),e=[o];function t(c,r,y,F,E,i){return a(),n("div",null,e)}const B=s(p,[["render",t]]);export{d as __pageData,B as default};
