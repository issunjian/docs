import{_ as s,o as a,c as n,V as l}from"./chunks/framework.c6d8cbec.js";const C=JSON.parse('{"title":"LeetCode 剑指 Offer 18. 删除链表的节点","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/linked-list/18.删除链表的节点.md","filePath":"algorithm/linked-list/18.删除链表的节点.md"}'),p={name:"algorithm/linked-list/18.删除链表的节点.md"},o=l(`<h1 id="leetcode-剑指-offer-18-删除链表的节点" tabindex="-1">LeetCode 剑指 Offer 18. 删除链表的节点 <a class="header-anchor" href="#leetcode-剑指-offer-18-删除链表的节点" aria-label="Permalink to &quot;LeetCode 剑指 Offer 18. 删除链表的节点&quot;">​</a></h1><h2 id="题目描述" tabindex="-1">题目描述 <a class="header-anchor" href="#题目描述" aria-label="Permalink to &quot;题目描述&quot;">​</a></h2><p>给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。</p><p>返回删除后的链表的头节点。</p><p>注意：此题对比原题有改动</p><p>示例 1:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">输入: head </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [</span><span style="color:#BF9EEE;">4</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">9</span><span style="color:#F6F6F4;">], val </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">5</span></span>
<span class="line"><span style="color:#F6F6F4;">输出: [</span><span style="color:#BF9EEE;">4</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">9</span><span style="color:#F6F6F4;">]</span></span>
<span class="line"><span style="color:#F6F6F4;">解释: 给定你链表中值为 </span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;"> 的第二个节点，那么在调用了你的函数之后，该链表应变为 </span><span style="color:#BF9EEE;">4</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">-&gt;</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">-&gt;</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">9.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">输入</span><span style="color:#24292E;">: head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">9</span><span style="color:#24292E;">], val </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#6F42C1;">输出</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">9</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#6F42C1;">解释</span><span style="color:#24292E;">: 给定你链表中值为 </span><span style="color:#005CC5;">5</span><span style="color:#24292E;"> 的第二个节点，那么在调用了你的函数之后，该链表应变为 </span><span style="color:#005CC5;">4</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">9.</span></span></code></pre></div><p>示例 2:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">输入: head </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [</span><span style="color:#BF9EEE;">4</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">9</span><span style="color:#F6F6F4;">], val </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span></span>
<span class="line"><span style="color:#F6F6F4;">输出: [</span><span style="color:#BF9EEE;">4</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">9</span><span style="color:#F6F6F4;">]</span></span>
<span class="line"><span style="color:#F6F6F4;">解释: 给定你链表中值为 </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;"> 的第三个节点，那么在调用了你的函数之后，该链表应变为 </span><span style="color:#BF9EEE;">4</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">-&gt;</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">5</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">-&gt;</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">9.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">输入</span><span style="color:#24292E;">: head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">9</span><span style="color:#24292E;">], val </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#6F42C1;">输出</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">9</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#6F42C1;">解释</span><span style="color:#24292E;">: 给定你链表中值为 </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> 的第三个节点，那么在调用了你的函数之后，该链表应变为 </span><span style="color:#005CC5;">4</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">9.</span></span></code></pre></div><p>说明：</p><p>题目保证链表中节点的值互不相同 若使用 C 或 C++ 语言，你不需要 free 或 delete 被删除的节点</p><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof" target="_blank" rel="noreferrer">https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><p>创建一个新链表，遇到相同值的情况，将当前节点的 next 指向下一个节点的 next，否则继续遍历。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">/**</span></span>
<span class="line"><span style="color:#7B7F8B;"> * Definition for singly-linked list.</span></span>
<span class="line"><span style="color:#7B7F8B;"> * function ListNode(val) {</span></span>
<span class="line"><span style="color:#7B7F8B;"> *     this.val = val;</span></span>
<span class="line"><span style="color:#7B7F8B;"> *     this.next = null;</span></span>
<span class="line"><span style="color:#7B7F8B;"> * }</span></span>
<span class="line"><span style="color:#7B7F8B;"> */</span></span>
<span class="line"><span style="color:#7B7F8B;">/**</span></span>
<span class="line"><span style="color:#7B7F8B;"> * </span><span style="color:#F286C4;">@param</span><span style="color:#7B7F8B;"> </span><span style="color:#97E1F1;font-style:italic;">{ListNode}</span><span style="color:#7B7F8B;"> </span><span style="color:#FFB86C;font-style:italic;">head</span></span>
<span class="line"><span style="color:#7B7F8B;"> * </span><span style="color:#F286C4;">@param</span><span style="color:#7B7F8B;"> </span><span style="color:#97E1F1;font-style:italic;">{number}</span><span style="color:#7B7F8B;"> </span><span style="color:#FFB86C;font-style:italic;">val</span></span>
<span class="line"><span style="color:#7B7F8B;"> * </span><span style="color:#F286C4;">@return</span><span style="color:#7B7F8B;"> </span><span style="color:#97E1F1;font-style:italic;">{ListNode}</span></span>
<span class="line"><span style="color:#7B7F8B;"> */</span></span>
<span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">deleteNode</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">head</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">val</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> dummyHead </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">ListNode</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">  dummyHead.next </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> head;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> p </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> dummyHead;</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">while</span><span style="color:#F6F6F4;"> (p.next) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (p.next.val </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> val) {</span></span>
<span class="line"><span style="color:#F6F6F4;">      p.next </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> p.next.next;</span></span>
<span class="line"><span style="color:#F6F6F4;">    } </span><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">      p </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> p.next;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> dummyHead.next;</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Definition for singly-linked list.</span></span>
<span class="line"><span style="color:#6A737D;"> * function ListNode(val) {</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.val = val;</span></span>
<span class="line"><span style="color:#6A737D;"> *     this.next = null;</span></span>
<span class="line"><span style="color:#6A737D;"> * }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{ListNode}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">head</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{number}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">val</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{ListNode}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">deleteNode</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">head</span><span style="color:#24292E;">, </span><span style="color:#E36209;">val</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> dummyHead </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ListNode</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  dummyHead.next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> head;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> dummyHead;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (p.next) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (p.next.val </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> val) {</span></span>
<span class="line"><span style="color:#24292E;">      p.next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p.next.next;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p.next;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> dummyHead.next;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">学如逆水行舟，不进则退</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">学如逆水行舟，不进则退</span></span></code></pre></div>`,16),e=[o];function t(c,r,y,F,i,E){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{C as __pageData,h as default};
