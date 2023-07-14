import{_ as s,o as n,c as a,V as l}from"./chunks/framework.c6d8cbec.js";const p="/docs/algorithm/binary-tree-right-side-view.png",h=JSON.parse('{"title":"LeetCode 199. 二叉树的右视图","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/binary-tree/199.二叉树的右视图.md","filePath":"algorithm/binary-tree/199.二叉树的右视图.md"}'),o={name:"algorithm/binary-tree/199.二叉树的右视图.md"},e=l(`<h1 id="leetcode-199-二叉树的右视图" tabindex="-1">LeetCode 199. 二叉树的右视图 <a class="header-anchor" href="#leetcode-199-二叉树的右视图" aria-label="Permalink to &quot;LeetCode 199. 二叉树的右视图&quot;">​</a></h1><h2 id="题目描述" tabindex="-1">题目描述 <a class="header-anchor" href="#题目描述" aria-label="Permalink to &quot;题目描述&quot;">​</a></h2><p>给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。</p><p>示例:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">输入: [</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">3</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">4</span><span style="color:#F6F6F4;">]</span></span>
<span class="line"><span style="color:#F6F6F4;">输出: [</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">3</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">4</span><span style="color:#F6F6F4;">]</span></span>
<span class="line"><span style="color:#F6F6F4;">解释:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">   </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">            </span><span style="color:#F286C4;">&lt;---</span></span>
<span class="line"><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">/</span><span style="color:#F6F6F4;">   \\</span></span>
<span class="line"><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">     </span><span style="color:#BF9EEE;">3</span><span style="color:#F6F6F4;">         </span><span style="color:#F286C4;">&lt;---</span></span>
<span class="line"><span style="color:#F6F6F4;"> \\     \\</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;">     </span><span style="color:#BF9EEE;">4</span><span style="color:#F6F6F4;">       </span><span style="color:#F286C4;">&lt;---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">输入</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#6F42C1;">输出</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#6F42C1;">解释</span><span style="color:#24292E;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">            </span><span style="color:#D73A49;">&lt;---</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">   \\</span></span>
<span class="line"><span style="color:#005CC5;">2</span><span style="color:#24292E;">     </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">         </span><span style="color:#D73A49;">&lt;---</span></span>
<span class="line"><span style="color:#24292E;"> \\     \\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">     </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">       </span><span style="color:#D73A49;">&lt;---</span></span></code></pre></div><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/binary-tree-right-side-view" target="_blank" rel="noreferrer">https://leetcode-cn.com/problems/binary-tree-right-side-view</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><p><code>DFS</code>，每一层只能取一个元素，那么我们搜的时候优先考虑右孩子即可。</p><p><img src="`+p+`" alt=""></p><p>参考 <a href="https://leetcode-cn.com/problems/binary-tree-right-side-view/solution/shen-du-you-xian-sou-suo-by-shetia-2/">shetia</a> 大佬图解</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">/**</span></span>
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
<span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">rightSideView</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">root</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">!</span><span style="color:#F6F6F4;">root) </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> [];</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> res </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [];</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">dfs</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">step</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">root</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (res.length </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> step) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      res.</span><span style="color:#62E884;">push</span><span style="color:#F6F6F4;">(root.val);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 优先遍历右孩子，再遍历左孩子</span></span>
<span class="line"><span style="color:#F6F6F4;">    root.right </span><span style="color:#F286C4;">&amp;&amp;</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">dfs</span><span style="color:#F6F6F4;">(step </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">, root.right);</span></span>
<span class="line"><span style="color:#F6F6F4;">    root.left </span><span style="color:#F286C4;">&amp;&amp;</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">dfs</span><span style="color:#F6F6F4;">(step </span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">, root.left);</span></span>
<span class="line"><span style="color:#F6F6F4;">  };</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">dfs</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">, root);</span></span>
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
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">rightSideView</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">root</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">root) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dfs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">step</span><span style="color:#24292E;">, </span><span style="color:#E36209;">root</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (res.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> step) {</span></span>
<span class="line"><span style="color:#24292E;">      res.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(root.val);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 优先遍历右孩子，再遍历左孩子</span></span>
<span class="line"><span style="color:#24292E;">    root.right </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dfs</span><span style="color:#24292E;">(step </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, root.right);</span></span>
<span class="line"><span style="color:#24292E;">    root.left </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dfs</span><span style="color:#24292E;">(step </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, root.left);</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">dfs</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, root);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> res;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><p><strong>解法二</strong></p><p><code>BFS</code>，对于每一层取队列中对首元素，然后放入队列的时候，如果有对应左右孩子的话，优先放右孩子，再放左孩子。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">/**</span></span>
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
<span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">rightSideView</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">root</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">!</span><span style="color:#F6F6F4;">root) </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> [];</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> queue </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [root];</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> res </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [];</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">while</span><span style="color:#F6F6F4;"> (queue.length) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> size </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> queue.length;</span></span>
<span class="line"><span style="color:#F6F6F4;">    res.</span><span style="color:#62E884;">push</span><span style="color:#F6F6F4;">(queue[</span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">].val);</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">while</span><span style="color:#F6F6F4;"> (size</span><span style="color:#F286C4;">--</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> node </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> queue.</span><span style="color:#62E884;">shift</span><span style="color:#F6F6F4;">();</span></span>
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
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">rightSideView</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">root</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">root) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> queue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [root];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (queue.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> size </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> queue.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    res.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(queue[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].val);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (size</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> node </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> queue.</span><span style="color:#6F42C1;">shift</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 优先放右孩子</span></span>
<span class="line"><span style="color:#24292E;">      node.right </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> queue.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(node.right);</span></span>
<span class="line"><span style="color:#24292E;">      node.left </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> queue.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(node.left);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> res;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">学如逆水行舟，不进则退</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">学如逆水行舟，不进则退</span></span></code></pre></div>`,15),t=[e];function c(r,y,F,i,E,C){return n(),a("div",null,t)}const u=s(o,[["render",c]]);export{h as __pageData,u as default};
