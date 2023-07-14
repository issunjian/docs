import{_ as s,o as n,c as a,V as l}from"./chunks/framework.c6d8cbec.js";const p="/docs/algorithm/symmetric-tree.png",u=JSON.parse('{"title":"LeetCode 101. 对称二叉树","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/binary-tree/101.对称二叉树.md","filePath":"algorithm/binary-tree/101.对称二叉树.md"}'),o={name:"algorithm/binary-tree/101.对称二叉树.md"},e=l(`<h1 id="leetcode-101-对称二叉树" tabindex="-1">LeetCode 101. 对称二叉树 <a class="header-anchor" href="#leetcode-101-对称二叉树" aria-label="Permalink to &quot;LeetCode 101. 对称二叉树&quot;">​</a></h1><h2 id="题目描述" tabindex="-1">题目描述 <a class="header-anchor" href="#题目描述" aria-label="Permalink to &quot;题目描述&quot;">​</a></h2><p>给定一个二叉树，检查它是否是镜像对称的。</p><p>例如，二叉树 [1,2,2,3,4,4,3] 是对称的。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#BF9EEE;">1</span></span>
<span class="line"><span style="color:#F6F6F4;">   </span><span style="color:#F286C4;">/</span><span style="color:#F6F6F4;"> \\</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">   </span><span style="color:#BF9EEE;">2</span></span>
<span class="line"><span style="color:#F6F6F4;"> </span><span style="color:#EE6666;">/</span><span style="color:#E7EE98;"> \\ </span><span style="color:#EE6666;">/</span><span style="color:#F6F6F4;"> \\</span></span>
<span class="line"><span style="color:#BF9EEE;">3</span><span style="color:#F6F6F4;">  </span><span style="color:#BF9EEE;">4</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">4</span><span style="color:#F6F6F4;">  </span><span style="color:#BF9EEE;">3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> \\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">   </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#032F62;">/ </span><span style="color:#22863A;font-weight:bold;">\\ </span><span style="color:#032F62;">/</span><span style="color:#24292E;"> \\</span></span>
<span class="line"><span style="color:#005CC5;">3</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">4</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">3</span></span></code></pre></div><p>但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#BF9EEE;">1</span></span>
<span class="line"><span style="color:#F6F6F4;">   </span><span style="color:#F286C4;">/</span><span style="color:#F6F6F4;"> \\</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">   </span><span style="color:#BF9EEE;">2</span></span>
<span class="line"><span style="color:#F6F6F4;">   \\   \\</span></span>
<span class="line"><span style="color:#F6F6F4;">   </span><span style="color:#BF9EEE;">3</span><span style="color:#F6F6F4;">    </span><span style="color:#BF9EEE;">3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> \\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">   </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">   \\   \\</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">    </span><span style="color:#005CC5;">3</span></span></code></pre></div><p>进阶：</p><p>你可以运用递归和迭代两种方法解决这个问题吗？</p><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/symmetric-tree" target="_blank" rel="noreferrer">https://leetcode-cn.com/problems/symmetric-tree</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><p><code>dfs</code>，逐层进行比较，即自顶向底找，注意判断几个条件：</p><ul><li>如果左右节点都为空，可以</li><li>如果左右节点一个为空，不可以</li><li>如果左右节点值不相等，不可以</li><li>最后递归左右子树镜像</li></ul><p><img src="`+p+`" alt=""></p><p>参考 <a href="https://leetcode-cn.com/problems/symmetric-tree/solution/dong-hua-yan-shi-101-dui-cheng-er-cha-shu-by-user7/">王尼玛</a> 大佬图解</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">/**</span></span>
<span class="line"><span style="color:#7B7F8B;"> * Definition for a binary tree node.</span></span>
<span class="line"><span style="color:#7B7F8B;"> * function TreeNode(val) {</span></span>
<span class="line"><span style="color:#7B7F8B;"> *     this.val = val;</span></span>
<span class="line"><span style="color:#7B7F8B;"> *     this.left = this.right = null;</span></span>
<span class="line"><span style="color:#7B7F8B;"> * }</span></span>
<span class="line"><span style="color:#7B7F8B;"> */</span></span>
<span class="line"><span style="color:#7B7F8B;">/**</span></span>
<span class="line"><span style="color:#7B7F8B;"> * </span><span style="color:#F286C4;">@param</span><span style="color:#7B7F8B;"> </span><span style="color:#97E1F1;font-style:italic;">{TreeNode}</span><span style="color:#7B7F8B;"> </span><span style="color:#FFB86C;font-style:italic;">root</span></span>
<span class="line"><span style="color:#7B7F8B;"> * </span><span style="color:#F286C4;">@return</span><span style="color:#7B7F8B;"> </span><span style="color:#97E1F1;font-style:italic;">{boolean}</span></span>
<span class="line"><span style="color:#7B7F8B;"> */</span></span>
<span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">isSymmetric</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">root</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">!</span><span style="color:#F6F6F4;">root) </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">dfs</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">left</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">right</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 如果左右节点都为空，可以</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (left </span><span style="color:#F286C4;">==</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">&amp;&amp;</span><span style="color:#F6F6F4;"> right </span><span style="color:#F286C4;">==</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 如果左右节点一个为空，不可以</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (left </span><span style="color:#F286C4;">==</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">||</span><span style="color:#F6F6F4;"> right </span><span style="color:#F286C4;">==</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 如果左右节点值不相等，不可以</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (left.val </span><span style="color:#F286C4;">!==</span><span style="color:#F6F6F4;"> right.val) </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 递归左右子树镜像</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">dfs</span><span style="color:#F6F6F4;">(left.left, right.right) </span><span style="color:#F286C4;">&amp;&amp;</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">dfs</span><span style="color:#F6F6F4;">(left.right, right.left);</span></span>
<span class="line"><span style="color:#F6F6F4;">  };</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">dfs</span><span style="color:#F6F6F4;">(root.left, root.right);</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Definition for a binary tree node.</span></span>
<span class="line"><span style="color:#6A737D;"> * function TreeNode(val) {</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.val = val;</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.left = this.right = null;</span></span>
<span class="line"><span style="color:#6A737D;"> * }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{TreeNode}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">root</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{boolean}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isSymmetric</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">root</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">root) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dfs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">left</span><span style="color:#24292E;">, </span><span style="color:#E36209;">right</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果左右节点都为空，可以</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (left </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> right </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果左右节点一个为空，不可以</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (left </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> right </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果左右节点值不相等，不可以</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (left.val </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> right.val) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 递归左右子树镜像</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dfs</span><span style="color:#24292E;">(left.left, right.right) </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dfs</span><span style="color:#24292E;">(left.right, right.left);</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dfs</span><span style="color:#24292E;">(root.left, root.right);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><p><strong>解法二</strong></p><p>通过队列逐步一层一层来比较，只要出现不对称的情况，直接返回 <code>false</code>。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">/**</span></span>
<span class="line"><span style="color:#7B7F8B;"> * Definition for a binary tree node.</span></span>
<span class="line"><span style="color:#7B7F8B;"> * function TreeNode(val) {</span></span>
<span class="line"><span style="color:#7B7F8B;"> *     this.val = val;</span></span>
<span class="line"><span style="color:#7B7F8B;"> *     this.left = this.right = null;</span></span>
<span class="line"><span style="color:#7B7F8B;"> * }</span></span>
<span class="line"><span style="color:#7B7F8B;"> */</span></span>
<span class="line"><span style="color:#7B7F8B;">/**</span></span>
<span class="line"><span style="color:#7B7F8B;"> * </span><span style="color:#F286C4;">@param</span><span style="color:#7B7F8B;"> </span><span style="color:#97E1F1;font-style:italic;">{TreeNode}</span><span style="color:#7B7F8B;"> </span><span style="color:#FFB86C;font-style:italic;">root</span></span>
<span class="line"><span style="color:#7B7F8B;"> * </span><span style="color:#F286C4;">@return</span><span style="color:#7B7F8B;"> </span><span style="color:#97E1F1;font-style:italic;">{boolean}</span></span>
<span class="line"><span style="color:#7B7F8B;"> */</span></span>
<span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">isSymmetric</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">root</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">!</span><span style="color:#F6F6F4;">root) </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> queue </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [root.left, root.right];</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">while</span><span style="color:#F6F6F4;"> (queue.length) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> node1 </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> queue.</span><span style="color:#62E884;">shift</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> node2 </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> queue.</span><span style="color:#62E884;">shift</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">!</span><span style="color:#F6F6F4;">node1 </span><span style="color:#F286C4;">&amp;&amp;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">!</span><span style="color:#F6F6F4;">node2) </span><span style="color:#F286C4;">continue</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">!</span><span style="color:#F6F6F4;">node1 </span><span style="color:#F286C4;">||</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">!</span><span style="color:#F6F6F4;">node2 </span><span style="color:#F286C4;">||</span><span style="color:#F6F6F4;"> node1.val </span><span style="color:#F286C4;">!==</span><span style="color:#F6F6F4;"> node2.val) </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">false</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    queue.</span><span style="color:#62E884;">push</span><span style="color:#F6F6F4;">(node1.left);</span></span>
<span class="line"><span style="color:#F6F6F4;">    queue.</span><span style="color:#62E884;">push</span><span style="color:#F6F6F4;">(node2.right);</span></span>
<span class="line"><span style="color:#F6F6F4;">    queue.</span><span style="color:#62E884;">push</span><span style="color:#F6F6F4;">(node1.right);</span></span>
<span class="line"><span style="color:#F6F6F4;">    queue.</span><span style="color:#62E884;">push</span><span style="color:#F6F6F4;">(node2.left);</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Definition for a binary tree node.</span></span>
<span class="line"><span style="color:#6A737D;"> * function TreeNode(val) {</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.val = val;</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.left = this.right = null;</span></span>
<span class="line"><span style="color:#6A737D;"> * }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{TreeNode}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">root</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{boolean}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isSymmetric</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">root</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">root) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> queue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [root.left, root.right];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (queue.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> node1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> queue.</span><span style="color:#6F42C1;">shift</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> node2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> queue.</span><span style="color:#6F42C1;">shift</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">node1 </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;">node2) </span><span style="color:#D73A49;">continue</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">node1 </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;">node2 </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> node1.val </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> node2.val) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    queue.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(node1.left);</span></span>
<span class="line"><span style="color:#24292E;">    queue.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(node2.right);</span></span>
<span class="line"><span style="color:#24292E;">    queue.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(node1.right);</span></span>
<span class="line"><span style="color:#24292E;">    queue.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(node2.left);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">学如逆水行舟，不进则退</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">学如逆水行舟，不进则退</span></span></code></pre></div>`,20),t=[e];function c(r,y,F,i,E,d){return n(),a("div",null,t)}const h=s(o,[["render",c]]);export{u as __pageData,h as default};
