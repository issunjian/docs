import{_ as s,o as n,c as a,V as l}from"./chunks/framework.c6d8cbec.js";const u=JSON.parse('{"title":"LeetCode 144. 二叉树的前序遍历","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/binary-tree/144.二叉树的前序遍历.md","filePath":"algorithm/binary-tree/144.二叉树的前序遍历.md"}'),p={name:"algorithm/binary-tree/144.二叉树的前序遍历.md"},o=l(`<h1 id="leetcode-144-二叉树的前序遍历" tabindex="-1">LeetCode 144. 二叉树的前序遍历 <a class="header-anchor" href="#leetcode-144-二叉树的前序遍历" aria-label="Permalink to &quot;LeetCode 144. 二叉树的前序遍历&quot;">​</a></h1><h2 id="题目描述" tabindex="-1">题目描述 <a class="header-anchor" href="#题目描述" aria-label="Permalink to &quot;题目描述&quot;">​</a></h2><p>给定一个二叉树，返回它的 前序 遍历。</p><p>示例:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">输入: [</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">3</span><span style="color:#F6F6F4;">]</span></span>
<span class="line"><span style="color:#F6F6F4;">   </span><span style="color:#BF9EEE;">1</span></span>
<span class="line"><span style="color:#F6F6F4;">    \\</span></span>
<span class="line"><span style="color:#F6F6F4;">     </span><span style="color:#BF9EEE;">2</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">/</span></span>
<span class="line"><span style="color:#F6F6F4;">   </span><span style="color:#BF9EEE;">3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">输出: [</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">3</span><span style="color:#F6F6F4;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">输入</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">    \\</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">/</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">输出</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">]</span></span></code></pre></div><p>进阶: 递归算法很简单，你可以通过迭代算法完成吗？</p><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/binary-tree-preorder-traversal" target="_blank" rel="noreferrer">https://leetcode-cn.com/problems/binary-tree-preorder-traversal</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><p><strong>递归解法</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">/**</span></span>
<span class="line"><span style="color:#7B7F8B;"> * Definition for a binary tree node.</span></span>
<span class="line"><span style="color:#7B7F8B;"> * function TreeNode(val) {</span></span>
<span class="line"><span style="color:#7B7F8B;"> *     this.val = val;</span></span>
<span class="line"><span style="color:#7B7F8B;"> *     this.left = this.right = null;</span></span>
<span class="line"><span style="color:#7B7F8B;"> * }</span></span>
<span class="line"><span style="color:#7B7F8B;"> */</span></span>
<span class="line"><span style="color:#7B7F8B;">/**</span></span>
<span class="line"><span style="color:#7B7F8B;"> * </span><span style="color:#F286C4;">@param</span><span style="color:#7B7F8B;"> </span><span style="color:#97E1F1;font-style:italic;">{TreeNode}</span><span style="color:#7B7F8B;"> </span><span style="color:#FFB86C;font-style:italic;">root</span></span>
<span class="line"><span style="color:#7B7F8B;"> * </span><span style="color:#F286C4;">@return</span><span style="color:#7B7F8B;"> </span><span style="color:#97E1F1;font-style:italic;">{number[]}</span></span>
<span class="line"><span style="color:#7B7F8B;"> */</span></span>
<span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">preorderTraversal</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">root</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">!</span><span style="color:#F6F6F4;">root) </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> [];</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> res </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [];</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">fun</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">root</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (root) res.</span><span style="color:#62E884;">push</span><span style="color:#F6F6F4;">(root.val);</span></span>
<span class="line"><span style="color:#F6F6F4;">    root.left </span><span style="color:#F286C4;">&amp;&amp;</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">fun</span><span style="color:#F6F6F4;">(root.left);</span></span>
<span class="line"><span style="color:#F6F6F4;">    root.right </span><span style="color:#F286C4;">&amp;&amp;</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">fun</span><span style="color:#F6F6F4;">(root.right);</span></span>
<span class="line"><span style="color:#F6F6F4;">  };</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">fun</span><span style="color:#F6F6F4;">(root);</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> res;</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Definition for a binary tree node.</span></span>
<span class="line"><span style="color:#6A737D;"> * function TreeNode(val) {</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.val = val;</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.left = this.right = null;</span></span>
<span class="line"><span style="color:#6A737D;"> * }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{TreeNode}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">root</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{number[]}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">preorderTraversal</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">root</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">root) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fun</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">root</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (root) res.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(root.val);</span></span>
<span class="line"><span style="color:#24292E;">    root.left </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fun</span><span style="color:#24292E;">(root.left);</span></span>
<span class="line"><span style="color:#24292E;">    root.right </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fun</span><span style="color:#24292E;">(root.right);</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fun</span><span style="color:#24292E;">(root);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> res;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><p><strong>迭代做法</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">/**</span></span>
<span class="line"><span style="color:#7B7F8B;"> * Definition for a binary tree node.</span></span>
<span class="line"><span style="color:#7B7F8B;"> * function TreeNode(val) {</span></span>
<span class="line"><span style="color:#7B7F8B;"> *     this.val = val;</span></span>
<span class="line"><span style="color:#7B7F8B;"> *     this.left = this.right = null;</span></span>
<span class="line"><span style="color:#7B7F8B;"> * }</span></span>
<span class="line"><span style="color:#7B7F8B;"> */</span></span>
<span class="line"><span style="color:#7B7F8B;">/**</span></span>
<span class="line"><span style="color:#7B7F8B;"> * </span><span style="color:#F286C4;">@param</span><span style="color:#7B7F8B;"> </span><span style="color:#97E1F1;font-style:italic;">{TreeNode}</span><span style="color:#7B7F8B;"> </span><span style="color:#FFB86C;font-style:italic;">root</span></span>
<span class="line"><span style="color:#7B7F8B;"> * </span><span style="color:#F286C4;">@return</span><span style="color:#7B7F8B;"> </span><span style="color:#97E1F1;font-style:italic;">{number[]}</span></span>
<span class="line"><span style="color:#7B7F8B;"> */</span></span>
<span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">preorderTraversal</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">root</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">!</span><span style="color:#F6F6F4;">root) </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> [];</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> res </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [];</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> queue </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [root];</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">while</span><span style="color:#F6F6F4;"> (queue.length) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> size </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> queue.length;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">while</span><span style="color:#F6F6F4;"> (size</span><span style="color:#F286C4;">--</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">// 取左孩子</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> node </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> queue.</span><span style="color:#62E884;">pop</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">      res.</span><span style="color:#62E884;">push</span><span style="color:#F6F6F4;">(node.val);</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">// 优先放右孩子</span></span>
<span class="line"><span style="color:#F6F6F4;">      node.right </span><span style="color:#F286C4;">&amp;&amp;</span><span style="color:#F6F6F4;"> queue.</span><span style="color:#62E884;">push</span><span style="color:#F6F6F4;">(node.right);</span></span>
<span class="line"><span style="color:#F6F6F4;">      node.left </span><span style="color:#F286C4;">&amp;&amp;</span><span style="color:#F6F6F4;"> queue.</span><span style="color:#62E884;">push</span><span style="color:#F6F6F4;">(node.left);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> res;</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Definition for a binary tree node.</span></span>
<span class="line"><span style="color:#6A737D;"> * function TreeNode(val) {</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.val = val;</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.left = this.right = null;</span></span>
<span class="line"><span style="color:#6A737D;"> * }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{TreeNode}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">root</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{number[]}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">preorderTraversal</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">root</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">root) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> queue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [root];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (queue.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> size </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> queue.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (size</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 取左孩子</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> node </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> queue.</span><span style="color:#6F42C1;">pop</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">      res.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(node.val);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 优先放右孩子</span></span>
<span class="line"><span style="color:#24292E;">      node.right </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> queue.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(node.right);</span></span>
<span class="line"><span style="color:#24292E;">      node.left </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> queue.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(node.left);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> res;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">学如逆水行舟，不进则退</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">学如逆水行舟，不进则退</span></span></code></pre></div>`,13),e=[o];function t(r,c,y,F,i,E){return n(),a("div",null,e)}const C=s(p,[["render",t]]);export{u as __pageData,C as default};
