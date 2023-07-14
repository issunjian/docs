import{_ as l,H as p,o,c as e,C as n,a as s,J as t,V as c}from"./chunks/framework.c6d8cbec.js";const B=JSON.parse('{"title":"LeetCode 933. 最近的请求次数","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/queue/933.md","filePath":"algorithm/queue/933.md"}'),r={name:"algorithm/queue/933.md"},y={id:"leetcode-933-最近的请求次数",tabindex:"-1"},F=n("a",{class:"header-anchor",href:"#leetcode-933-最近的请求次数","aria-label":'Permalink to "LeetCode 933. 最近的请求次数 <Badge type="warning" text="中等" />"'},"​",-1),i=c(`<h2 id="题目描述" tabindex="-1">题目描述 <a class="header-anchor" href="#题目描述" aria-label="Permalink to &quot;题目描述&quot;">​</a></h2><p>写一个<code> RecentCounter</code> 类来计算最近的请求。</p><p>它只有一个方法：<code>ping(int t)</code>，其中 t 代表以毫秒为单位的某个时间。</p><p>返回从 <code>3000 </code>毫秒前到现在的 ping 数。</p><p>任何处于<code>[t - 3000, t]</code>时间范围之内的 <code>ping</code> 都将会被计算在内，包括当前（指 t 时刻）的 <code>ping</code>。</p><p>保证每次对 <code>ping</code> 的调用都使用比之前更大的 t 值。</p><p>示例：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">输入：</span></span>
<span class="line"><span style="color:#F6F6F4;">[</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">RecentCounter</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">ping</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">ping</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">ping</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">ping</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">]</span></span>
<span class="line"><span style="color:#F6F6F4;">[[], [</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">], [</span><span style="color:#BF9EEE;">100</span><span style="color:#F6F6F4;">], [</span><span style="color:#BF9EEE;">3001</span><span style="color:#F6F6F4;">], [</span><span style="color:#BF9EEE;">3002</span><span style="color:#F6F6F4;">]]</span></span>
<span class="line"><span style="color:#F6F6F4;">输出：</span></span>
<span class="line"><span style="color:#F6F6F4;">[</span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">3</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">3</span><span style="color:#F6F6F4;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">解释：</span></span>
<span class="line"><span style="color:#F6F6F4;">RecentCounter recentCounter </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">RecentCounter</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">recentCounter.</span><span style="color:#62E884;">ping</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">);     </span><span style="color:#7B7F8B;">// requests = [1]，范围是 [-2999,1]，返回 1</span></span>
<span class="line"><span style="color:#F6F6F4;">recentCounter.</span><span style="color:#62E884;">ping</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">100</span><span style="color:#F6F6F4;">);   </span><span style="color:#7B7F8B;">// requests = [1, 100]，范围是 [-2900,100]，返回 2</span></span>
<span class="line"><span style="color:#F6F6F4;">recentCounter.</span><span style="color:#62E884;">ping</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">3001</span><span style="color:#F6F6F4;">);  </span><span style="color:#7B7F8B;">// requests = [1, 100, 3001]，范围是 [1,3001]，返回 3</span></span>
<span class="line"><span style="color:#F6F6F4;">recentCounter.</span><span style="color:#62E884;">ping</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">3002</span><span style="color:#F6F6F4;">);  </span><span style="color:#7B7F8B;">// requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">输入：</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;">&quot;RecentCounter&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;ping&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;ping&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;ping&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;ping&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">[[], [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">], [</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">], [</span><span style="color:#005CC5;">3001</span><span style="color:#24292E;">], [</span><span style="color:#005CC5;">3002</span><span style="color:#24292E;">]]</span></span>
<span class="line"><span style="color:#24292E;">输出：</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">解释：</span></span>
<span class="line"><span style="color:#24292E;">RecentCounter recentCounter </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RecentCounter</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">recentCounter.</span><span style="color:#6F42C1;">ping</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);     </span><span style="color:#6A737D;">// requests = [1]，范围是 [-2999,1]，返回 1</span></span>
<span class="line"><span style="color:#24292E;">recentCounter.</span><span style="color:#6F42C1;">ping</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">);   </span><span style="color:#6A737D;">// requests = [1, 100]，范围是 [-2900,100]，返回 2</span></span>
<span class="line"><span style="color:#24292E;">recentCounter.</span><span style="color:#6F42C1;">ping</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3001</span><span style="color:#24292E;">);  </span><span style="color:#6A737D;">// requests = [1, 100, 3001]，范围是 [1,3001]，返回 3</span></span>
<span class="line"><span style="color:#24292E;">recentCounter.</span><span style="color:#6F42C1;">ping</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3002</span><span style="color:#24292E;">);  </span><span style="color:#6A737D;">// requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3</span></span></code></pre></div><p>提示：</p><p>每个测试用例最多调用<code>10000</code>次 ping。每个测试用例会使用严格递增的 <code>t </code>值来调用 <code>ping</code>。每次调用 ping 都有<code> 1 &lt;= t &lt;= 10^9</code>。</p><h2 id="题解" tabindex="-1">题解 <a class="header-anchor" href="#题解" aria-label="Permalink to &quot;题解&quot;">​</a></h2><p>根据样例，发现越早发出的请求越早不在 <code>3000ms</code> 内的请求里</p><p>满足<strong>先进先出</strong>，考虑用队列</p><p>那么就将新请求加入队列，<code>3000ms</code>前发出的请求就出队列</p><p>队列的长度即为最近请求次数。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-hv5ni" id="tab-Fuh97ez" checked="checked"><label for="tab-Fuh97ez">javascript</label><input type="radio" name="group-hv5ni" id="tab-mTwS7af"><label for="tab-mTwS7af">cpp</label><input type="radio" name="group-hv5ni" id="tab-jzyCuHx"><label for="tab-jzyCuHx">java</label><input type="radio" name="group-hv5ni" id="tab-C-IqOPe"><label for="tab-C-IqOPe">python</label></div><div class="blocks"><div class="language-javascript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">var</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">RecentCounter</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> () {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.queue </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> [];</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">/**</span></span>
<span class="line"><span style="color:#7B7F8B;"> * </span><span style="color:#F286C4;">@param</span><span style="color:#7B7F8B;"> </span><span style="color:#97E1F1;font-style:italic;">{number}</span><span style="color:#7B7F8B;"> </span><span style="color:#FFB86C;font-style:italic;">t</span></span>
<span class="line"><span style="color:#7B7F8B;"> * </span><span style="color:#F286C4;">@return</span><span style="color:#7B7F8B;"> </span><span style="color:#97E1F1;font-style:italic;">{number}</span></span>
<span class="line"><span style="color:#7B7F8B;"> */</span></span>
<span class="line"><span style="color:#97E1F1;font-style:italic;">RecentCounter</span><span style="color:#F6F6F4;">.prototype.</span><span style="color:#62E884;">ping</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">t</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 将新请求加入队列</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.queue.</span><span style="color:#62E884;">push</span><span style="color:#F6F6F4;">(t);</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 3000ms 前发出的请求就出队列</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">while</span><span style="color:#F6F6F4;"> (</span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.queue[</span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">] </span><span style="color:#F286C4;">&lt;</span><span style="color:#F6F6F4;"> t </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">3000</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.queue.</span><span style="color:#62E884;">shift</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;font-style:italic;">this</span><span style="color:#F6F6F4;">.queue.length;</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">/**</span></span>
<span class="line"><span style="color:#7B7F8B;"> * Your RecentCounter object will be instantiated and called as such:</span></span>
<span class="line"><span style="color:#7B7F8B;"> * var obj = new RecentCounter()</span></span>
<span class="line"><span style="color:#7B7F8B;"> * var param_1 = obj.ping(t)</span></span>
<span class="line"><span style="color:#7B7F8B;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RecentCounter</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.queue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{number}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">t</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{number}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#005CC5;">RecentCounter</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">ping</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">t</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 将新请求加入队列</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.queue.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(t);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 3000ms 前发出的请求就出队列</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.queue[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> t </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.queue.</span><span style="color:#6F42C1;">shift</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.queue.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Your RecentCounter object will be instantiated and called as such:</span></span>
<span class="line"><span style="color:#6A737D;"> * var obj = new RecentCounter()</span></span>
<span class="line"><span style="color:#6A737D;"> * var param_1 = obj.ping(t)</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">RecentCounter</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F286C4;">public:</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">RecentCounter</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">int</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">ping</span><span style="color:#F6F6F4;">(</span><span style="color:#F286C4;">int</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">t</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        q.</span><span style="color:#62E884;">push</span><span style="color:#F6F6F4;">(t);</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">while</span><span style="color:#F6F6F4;">(q.</span><span style="color:#62E884;">front</span><span style="color:#F6F6F4;">() </span><span style="color:#F286C4;">&lt;</span><span style="color:#F6F6F4;"> t </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">3000</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">            q.</span><span style="color:#62E884;">pop</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> q.</span><span style="color:#62E884;">size</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F286C4;">private:</span></span>
<span class="line"><span style="color:#F6F6F4;">    queue</span><span style="color:#F286C4;">&lt;int&gt;</span><span style="color:#F6F6F4;"> q;</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RecentCounter</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">public:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">RecentCounter</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ping</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">t</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        q.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(t);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(q.</span><span style="color:#6F42C1;">front</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> t </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            q.</span><span style="color:#6F42C1;">pop</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> q.</span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#D73A49;">private:</span></span>
<span class="line"><span style="color:#24292E;">    queue</span><span style="color:#D73A49;">&lt;int&gt;</span><span style="color:#24292E;"> q;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">RecentCounter</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E1F1;font-style:italic;">Queue</span><span style="color:#F6F6F4;">&lt;Integer&gt; q;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">RecentCounter</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">        q </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">LinkedList</span><span style="color:#F6F6F4;">&lt;&gt;();</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">ping</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">t</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        q.</span><span style="color:#62E884;">offer</span><span style="color:#F6F6F4;">(t);</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">while</span><span style="color:#F6F6F4;">(q.</span><span style="color:#62E884;">peek</span><span style="color:#F6F6F4;">() </span><span style="color:#F286C4;">&lt;</span><span style="color:#F6F6F4;"> t </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">3000</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">            q.</span><span style="color:#62E884;">poll</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> q.</span><span style="color:#62E884;">size</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RecentCounter</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    Queue&lt;</span><span style="color:#D73A49;">Integer</span><span style="color:#24292E;">&gt; q;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RecentCounter</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        q </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> LinkedList&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ping</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">t</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        q.</span><span style="color:#6F42C1;">offer</span><span style="color:#24292E;">(t);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(q.</span><span style="color:#6F42C1;">peek</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> t </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            q.</span><span style="color:#6F42C1;">poll</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> q.</span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">RecentCounter</span><span style="color:#F6F6F4;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">def</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">__init__</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;font-style:italic;">self</span><span style="color:#F6F6F4;">):</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">self</span><span style="color:#F6F6F4;">.q </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">def</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">ping</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;font-style:italic;">self</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">t</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">-&gt;</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;">:</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#BF9EEE;font-style:italic;">self</span><span style="color:#F6F6F4;">.q.append(t)</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">while</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;font-style:italic;">self</span><span style="color:#F6F6F4;">.q[</span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">] </span><span style="color:#F286C4;">&lt;</span><span style="color:#F6F6F4;"> t </span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">3000</span><span style="color:#F6F6F4;">:</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#BF9EEE;font-style:italic;">self</span><span style="color:#F6F6F4;">.q.pop(</span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">len</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;font-style:italic;">self</span><span style="color:#F6F6F4;">.q)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RecentCounter</span><span style="color:#24292E;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__init__</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.q </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ping</span><span style="color:#24292E;">(self, t: </span><span style="color:#005CC5;">int</span><span style="color:#24292E;">) -&gt; </span><span style="color:#005CC5;">int</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.q.append(t)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.q[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> t </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.q.pop(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.q)</span></span></code></pre></div></div></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">学如逆水行舟，不进则退</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">学如逆水行舟，不进则退</span></span></code></pre></div>`,17);function E(C,u,d,h,g,f){const a=p("Badge");return o(),e("div",null,[n("h1",y,[s("LeetCode 933. 最近的请求次数 "),t(a,{type:"warning",text:"中等"}),s(),F]),i])}const D=l(r,[["render",E]]);export{B as __pageData,D as default};