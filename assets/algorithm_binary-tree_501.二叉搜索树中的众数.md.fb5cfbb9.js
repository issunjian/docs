import{_ as s,o as n,c as a,V as l}from"./chunks/framework.c6d8cbec.js";const d=JSON.parse('{"title":"LeetCode 501. 二叉搜索树中的众数","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/binary-tree/501.二叉搜索树中的众数.md","filePath":"algorithm/binary-tree/501.二叉搜索树中的众数.md"}'),p={name:"algorithm/binary-tree/501.二叉搜索树中的众数.md"},o=l(`<h1 id="leetcode-501-二叉搜索树中的众数" tabindex="-1">LeetCode 501. 二叉搜索树中的众数 <a class="header-anchor" href="#leetcode-501-二叉搜索树中的众数" aria-label="Permalink to &quot;LeetCode 501. 二叉搜索树中的众数&quot;">​</a></h1><h2 id="题目描述" tabindex="-1">题目描述 <a class="header-anchor" href="#题目描述" aria-label="Permalink to &quot;题目描述&quot;">​</a></h2><p>给定一个有相同值的二叉搜索树（<strong>BST</strong>），找出 <strong>BST</strong> 中的所有众数（出现频率最高的元素）。</p><p>假定 BST 有如下定义：</p><ul><li>结点左子树中所含结点的值小于等于当前结点的值</li><li>结点右子树中所含结点的值大于等于当前结点的值</li><li>左子树和右子树都是二叉搜索树</li></ul><p>例如：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">给定 BST [</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">   </span><span style="color:#BF9EEE;">1</span></span>
<span class="line"><span style="color:#F6F6F4;">    \\</span></span>
<span class="line"><span style="color:#F6F6F4;">     </span><span style="color:#BF9EEE;">2</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">/</span></span>
<span class="line"><span style="color:#F6F6F4;">   </span><span style="color:#BF9EEE;">2</span></span>
<span class="line"><span style="color:#F6F6F4;">返回[</span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">].</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">给定 </span><span style="color:#005CC5;">BST</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">    \\</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">/</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">返回[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">].</span></span></code></pre></div><p>提示：如果众数超过 1 个，不需考虑输出顺序</p><p>进阶：你可以不使用额外的空间吗？（假设由递归产生的隐式调用栈的开销不被计算在内）</p><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/find-mode-in-binary-search-tree" target="_blank" rel="noreferrer">https://leetcode-cn.com/problems/find-mode-in-binary-search-tree</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><p>由于 <code>BST</code>（二叉搜索树）的特殊性，我们采用递归来中序遍历，访问的节点值是有序的。然后重复节点，用计数器进行累加即可，如果有新值出现，则更新新值，然后计数器重置为 1。然后对于当前次数超过了最大值，则更新当前最大值，如果等于最大值，则代表出现了相同频率的数字，加入即可。</p><p>如果次数小于最大值，不需要什么操作。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">/**</span></span>
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
<span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">findMode</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">root</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> cnt </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> pre </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> res </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [];</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> maxCnt </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">handle</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">cur</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 相同的数，累加</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (cur </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> pre) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      cnt</span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    } </span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">// 有新数出现，重新置计数器为1，更新新数</span></span>
<span class="line"><span style="color:#F6F6F4;">      pre </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> cur;</span></span>
<span class="line"><span style="color:#F6F6F4;">      cnt </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 如果次数超过了最大值，更新当前最大值</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (cnt </span><span style="color:#F286C4;">&gt;</span><span style="color:#F6F6F4;"> maxCnt) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      maxCnt </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> cnt;</span></span>
<span class="line"><span style="color:#F6F6F4;">      res </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [cur];</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">// 如果有相同频率的数字出现，直接加入</span></span>
<span class="line"><span style="color:#F6F6F4;">    } </span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (cnt </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> maxCnt) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      res.</span><span style="color:#62E884;">push</span><span style="color:#F6F6F4;">(cur);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">  };</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 二叉搜索树，递归中序遍历方式</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">inOrder</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">root</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">!</span><span style="color:#F6F6F4;">root) </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">inOrder</span><span style="color:#F6F6F4;">(root.left);</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">handle</span><span style="color:#F6F6F4;">(root.val);</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">inOrder</span><span style="color:#F6F6F4;">(root.right);</span></span>
<span class="line"><span style="color:#F6F6F4;">  };</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">inOrder</span><span style="color:#F6F6F4;">(root);</span></span>
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
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">findMode</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">root</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> cnt </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> maxCnt </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handle</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">cur</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 相同的数，累加</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (cur </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> pre) {</span></span>
<span class="line"><span style="color:#24292E;">      cnt</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 有新数出现，重新置计数器为1，更新新数</span></span>
<span class="line"><span style="color:#24292E;">      pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cur;</span></span>
<span class="line"><span style="color:#24292E;">      cnt </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果次数超过了最大值，更新当前最大值</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (cnt </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> maxCnt) {</span></span>
<span class="line"><span style="color:#24292E;">      maxCnt </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cnt;</span></span>
<span class="line"><span style="color:#24292E;">      res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [cur];</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 如果有相同频率的数字出现，直接加入</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (cnt </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> maxCnt) {</span></span>
<span class="line"><span style="color:#24292E;">      res.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(cur);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 二叉搜索树，递归中序遍历方式</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">inOrder</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">root</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">root) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">inOrder</span><span style="color:#24292E;">(root.left);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">handle</span><span style="color:#24292E;">(root.val);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">inOrder</span><span style="color:#24292E;">(root.right);</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">inOrder</span><span style="color:#24292E;">(root);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> res;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">学如逆水行舟，不进则退</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">学如逆水行舟，不进则退</span></span></code></pre></div>`,15),e=[o];function c(t,r,y,F,i,E){return n(),a("div",null,e)}const h=s(p,[["render",c]]);export{d as __pageData,h as default};
