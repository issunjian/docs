import{_ as a,o as s,c as e,V as t}from"./chunks/framework.c6d8cbec.js";const B=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/elasticsearch/elasticsearch-05.md","filePath":"interview/backend/elasticsearch/elasticsearch-05.md"}'),r={name:"interview/backend/elasticsearch/elasticsearch-05.md"},c=t(`<h3 id="_1、我们可以在-elasticsearch-中执行搜索的各种可能方式有哪些" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#1%E6%88%91%E4%BB%AC%E5%8F%AF%E4%BB%A5%E5%9C%A8-elasticsearch-%E4%B8%AD%E6%89%A7%E8%A1%8C%E6%90%9C%E7%B4%A2%E7%9A%84%E5%90%84%E7%A7%8D%E5%8F%AF%E8%83%BD%E6%96%B9%E5%BC%8F%E6%9C%89%E5%93%AA%E4%BA%9B" target="_blank" rel="noreferrer">1、我们可以在 Elasticsearch 中执行搜索的各种可能方式有哪些？</a> <a class="header-anchor" href="#_1、我们可以在-elasticsearch-中执行搜索的各种可能方式有哪些" aria-label="Permalink to &quot;[1、我们可以在 Elasticsearch 中执行搜索的各种可能方式有哪些？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新面试题2021年，常见面试题及答案汇总.md#1我们可以在-elasticsearch-中执行搜索的各种可能方式有哪些)&quot;">​</a></h3><p>核心方式如下：</p><p>方式一：基于 DSL 检索（最常用） Elasticsearch提供基于JSON的完整查询DSL来定义查询。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">GET /shirts/_search</span></span>
<span class="line"><span style="color:#f6f6f4;">{</span></span>
<span class="line"><span style="color:#f6f6f4;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#f6f6f4;">    &quot;bool&quot;: {</span></span>
<span class="line"><span style="color:#f6f6f4;">      &quot;filter&quot;: [</span></span>
<span class="line"><span style="color:#f6f6f4;">        { &quot;term&quot;: { &quot;color&quot;: &quot;red&quot;   }},</span></span>
<span class="line"><span style="color:#f6f6f4;">        { &quot;term&quot;: { &quot;brand&quot;: &quot;gucci&quot; }}</span></span>
<span class="line"><span style="color:#f6f6f4;">      ]</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">GET /shirts/_search</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;query&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;bool&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;filter&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">        { &quot;term&quot;: { &quot;color&quot;: &quot;red&quot;   }},</span></span>
<span class="line"><span style="color:#24292e;">        { &quot;term&quot;: { &quot;brand&quot;: &quot;gucci&quot; }}</span></span>
<span class="line"><span style="color:#24292e;">      ]</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>方式二：基于 URL 检索</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">GET /my_index/_search?q=user:seina</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">GET /my_index/_search?q=user:seina</span></span></code></pre></div><p>方式三：类SQL 检索</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">POST /_sql?format=txt</span></span>
<span class="line"><span style="color:#f6f6f4;">{</span></span>
<span class="line"><span style="color:#f6f6f4;">  &quot;query&quot;: &quot;SELECT * FROM uint-2020-08-17 ORDER BY itemid DESC LIMIT 5&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">POST /_sql?format=txt</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;query&quot;: &quot;SELECT * FROM uint-2020-08-17 ORDER BY itemid DESC LIMIT 5&quot;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>功能还不完备，不推荐使用。</p><h3 id="_2、elasticsearch对于大数据量-上亿量级-的聚合如何实现" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#2elasticsearch%E5%AF%B9%E4%BA%8E%E5%A4%A7%E6%95%B0%E6%8D%AE%E9%87%8F%E4%B8%8A%E4%BA%BF%E9%87%8F%E7%BA%A7%E7%9A%84%E8%81%9A%E5%90%88%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0" target="_blank" rel="noreferrer">2、ElasticSearch对于大数据量（上亿量级）的聚合如何实现？</a> <a class="header-anchor" href="#_2、elasticsearch对于大数据量-上亿量级-的聚合如何实现" aria-label="Permalink to &quot;[2、ElasticSearch对于大数据量（上亿量级）的聚合如何实现？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新面试题2021年，常见面试题及答案汇总.md#2elasticsearch对于大数据量上亿量级的聚合如何实现)&quot;">​</a></h3><p>ElasticSearch提供的首个近似聚合是cardinality度量。它提供一个字段的基数，即该字段的distinct或者unique值的数目。它是基于HLL算法的。HLL会先对我们的输入做哈希运算，然后根据哈希运算结果中的bits做概率估算从而得到基数。其特点是：</p><p>可配置的精度，用来控制内存的使用（更精确＝更多内存），小的数据集精度是非常高的；我们可以通过配置参数来设置去重需要的固定内存使用量，无论数千还是数十亿的唯一值，内存使用量只与你配置的精确度相关 。</p><p>图片</p><h3 id="_3、详细描述一下-elasticsearch-索引文档的过程" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#3%E8%AF%A6%E7%BB%86%E6%8F%8F%E8%BF%B0%E4%B8%80%E4%B8%8B-elasticsearch-%E7%B4%A2%E5%BC%95%E6%96%87%E6%A1%A3%E7%9A%84%E8%BF%87%E7%A8%8B" target="_blank" rel="noreferrer">3、详细描述一下 Elasticsearch 索引文档的过程</a> <a class="header-anchor" href="#_3、详细描述一下-elasticsearch-索引文档的过程" aria-label="Permalink to &quot;[3、详细描述一下 Elasticsearch 索引文档的过程](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新面试题2021年，常见面试题及答案汇总.md#3详细描述一下-elasticsearch-索引文档的过程)&quot;">​</a></h3><p>面试官：想了解 ES 的底层原理，不再只关注业务层面了。</p><p>解</p><p>这里的索引文档应该理解为文档写入 ES，创建索引的过程。文档写入包含：单文档写入和批量 bulk 写入，这里只解释一下：单文档写入流程。</p><p>**第一步：**客户写集群某节点写入数据，发送请求。（如果没有指定路由/协调节点，请求的节点扮演路由节点的角色。）</p><p>**第二步：**节点 1 接受到请求后，使用文档_id 来确定文档属于分片 0。请求会被转到另外的节点，假定节点 3。因此分片 0 的主分片分配到节点 3 上。</p><p>**第三步：**节点 3 在主分片上执行写操作，如果成功，则将请求并行转发到节点 1和节点 2 的副本分片上，等待结果返回。所有的副本分片都报告成功，节点 3 将向协调节点（节点 1）报告成功，节点 1 向请求客户端报告写入成功。</p><p>**如果面试官再问：**第二步中的文档获取分片的过程？</p><p>回借助路由算法获取，路由算法就是根据路由和文档 id 计算目标的分片 id 的</p><p>过程。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">1shard = hash(_routing) % (num_of_primary_shards)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1shard = hash(_routing) % (num_of_primary_shards)</span></span></code></pre></div><h3 id="_4、elasticsearch-数据预热" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#4elasticsearch-%E6%95%B0%E6%8D%AE%E9%A2%84%E7%83%AD" target="_blank" rel="noreferrer">4、elasticsearch 数据预热</a> <a class="header-anchor" href="#_4、elasticsearch-数据预热" aria-label="Permalink to &quot;[4、elasticsearch 数据预热](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新面试题2021年，常见面试题及答案汇总.md#4elasticsearch-数据预热)&quot;">​</a></h3><p>数据预热是指，每隔一段时间，将热数据</p><p>手动在后台查询一遍，将热数据刷新到fileSystem cache上</p><h3 id="_5、如何使用-elasticsearch-tokenizer" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#5%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-elasticsearch-tokenizer" target="_blank" rel="noreferrer">5、如何使用 Elasticsearch Tokenizer？</a> <a class="header-anchor" href="#_5、如何使用-elasticsearch-tokenizer" aria-label="Permalink to &quot;[5、如何使用 Elasticsearch Tokenizer？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新面试题2021年，常见面试题及答案汇总.md#5如何使用-elasticsearch-tokenizer)&quot;">​</a></h3><p>Tokenizer 接收字符流（如果包含了字符过滤，则接收过滤后的字符流；否则，接收原始字符流），将其分词。同时记录分词后的顺序或位置(position)，以及开始值（start_offset）和偏移值(end_offset-start_offset)。</p><h3 id="_6、elasticsearch-数据的写入原理" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#6elasticsearch-%E6%95%B0%E6%8D%AE%E7%9A%84%E5%86%99%E5%85%A5%E5%8E%9F%E7%90%86" target="_blank" rel="noreferrer">6、elasticsearch 数据的写入原理</a> <a class="header-anchor" href="#_6、elasticsearch-数据的写入原理" aria-label="Permalink to &quot;[6、elasticsearch 数据的写入原理](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新面试题2021年，常见面试题及答案汇总.md#6elasticsearch-数据的写入原理)&quot;">​</a></h3><p>es数据写入原理主要可以分为4个操作：</p><p><strong>1、</strong> refresh</p><p><strong>2、</strong> commit</p><p><strong>3、</strong> flush</p><p><strong>4、</strong> merge</p><table><thead><tr><th>操作触发条件</th><th>操作过程</th></tr></thead><tbody><tr><td><strong>refresh</strong></td><td>1\\、每隔1s进行一次refresh操作</td></tr><tr><td>2\\、buffer已满，则进行一次refresh操作</td><td></td></tr><tr><td>2\\、清空buffer</td><td></td></tr><tr><td><strong>commit</strong></td><td>1\\、每隔30分钟执行一次translog</td></tr><tr><td>2\\、translog日志已满</td><td></td></tr><tr><td>2\\、生成一个 commit point 文件标识此次操作一件把buffer数据执行到了哪一个segment文件</td><td></td></tr><tr><td>3\\、执行flush操作</td><td></td></tr><tr><td><strong>flush</strong></td><td>commit操作中</td></tr><tr><td><strong>merge</strong></td><td>后台检查</td></tr></tbody></table><p><img src="https://image-static.segmentfault.com/284/854/2848546943-5e5b563ad0f06_articlex#alt=3chLse.png" alt=""></p><h3 id="_7、你是如何做-elasticsearch-写入调优的" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#7%E4%BD%A0%E6%98%AF%E5%A6%82%E4%BD%95%E5%81%9A-elasticsearch-%E5%86%99%E5%85%A5%E8%B0%83%E4%BC%98%E7%9A%84" target="_blank" rel="noreferrer">7、你是如何做 ElasticSearch 写入调优的？</a> <a class="header-anchor" href="#_7、你是如何做-elasticsearch-写入调优的" aria-label="Permalink to &quot;[7、你是如何做 ElasticSearch 写入调优的？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新面试题2021年，常见面试题及答案汇总.md#7你是如何做-elasticsearch-写入调优的)&quot;">​</a></h3><p>1）写入前副本数设置为0；</p><p>2）写入前关闭refresh_interval设置为-1，禁用刷新机制；</p><p>3）写入过程中：采取bulk批量写入；</p><p>4） 写入后恢复副本数和刷新间隔；</p><p>5） 尽量使用自动生成的id。</p><h3 id="_8、elasticsearch是如何实现master选举的" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#8elasticsearch%E6%98%AF%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0master%E9%80%89%E4%B8%BE%E7%9A%84" target="_blank" rel="noreferrer">8、Elasticsearch是如何实现Master选举的？</a> <a class="header-anchor" href="#_8、elasticsearch是如何实现master选举的" aria-label="Permalink to &quot;[8、Elasticsearch是如何实现Master选举的？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新面试题2021年，常见面试题及答案汇总.md#8elasticsearch是如何实现master选举的)&quot;">​</a></h3><p><strong>1、</strong> Elasticsearch的选主是ZenDiscovery模块负责的，主要包含Ping（节点之间通过这个RPC来发现彼此）和Unicast（单播模块包含一个主机列表以控制哪些节点需要ping通）这两部分；</p><p><strong>2、</strong> 对所有可以成为master的节点（<strong>node.master: true</strong>）根据nodeId字典排序，每次选举每个节点都把自己所知道节点排一次序，然后选出第一个（第0位）节点，暂且认为它是master节点。</p><p><strong>3、</strong> 如果对某个节点的投票数达到一定的值（可以成为master节点数n/2+1）并且该节点自己也选举自己，那这个节点就是master。否则重新选举一直到满足上述条件。</p><p><strong>4、</strong> 补充：master节点的职责主要包括集群、节点和索引的管理，不负责文档级别的管理；data节点可以关闭http功能*。</p><h3 id="_9、elasticsearch主分片数量可以在后期更改吗-为什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#9elasticsearch%E4%B8%BB%E5%88%86%E7%89%87%E6%95%B0%E9%87%8F%E5%8F%AF%E4%BB%A5%E5%9C%A8%E5%90%8E%E6%9C%9F%E6%9B%B4%E6%94%B9%E5%90%97%E4%B8%BA%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">9、ElasticSearch主分片数量可以在后期更改吗？为什么？</a> <a class="header-anchor" href="#_9、elasticsearch主分片数量可以在后期更改吗-为什么" aria-label="Permalink to &quot;[9、ElasticSearch主分片数量可以在后期更改吗？为什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新面试题2021年，常见面试题及答案汇总.md#9elasticsearch主分片数量可以在后期更改吗为什么)&quot;">​</a></h3><p>不可以，因为根据路由算法shard = hash(document_id) % (num_of_primary_shards)，当主分片数量变化时会影响数据被路由到哪个分片上。</p><h3 id="_10、如何监控-elasticsearch-集群状态" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#10%E5%A6%82%E4%BD%95%E7%9B%91%E6%8E%A7-elasticsearch-%E9%9B%86%E7%BE%A4%E7%8A%B6%E6%80%81" target="_blank" rel="noreferrer">10、如何监控 Elasticsearch 集群状态？</a> <a class="header-anchor" href="#_10、如何监控-elasticsearch-集群状态" aria-label="Permalink to &quot;[10、如何监控 Elasticsearch 集群状态？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新面试题2021年，常见面试题及答案汇总.md#10如何监控-elasticsearch-集群状态)&quot;">​</a></h3><p>Marvel 让你可以很简单的通过 Kibana 监控 Elasticsearch。你可以实时查看你的集群健康状态和性能，也可以分析过去的集群、索引和节点指标。</p><h3 id="_11、你能否在-elasticsearch-中定义映射" tabindex="-1">11、你能否在 Elasticsearch 中定义映射？ <a class="header-anchor" href="#_11、你能否在-elasticsearch-中定义映射" aria-label="Permalink to &quot;11、你能否在 Elasticsearch 中定义映射？&quot;">​</a></h3><h3 id="_12、elasticsearch-的倒排索引是什么" tabindex="-1">12、elasticsearch 的倒排索引是什么 <a class="header-anchor" href="#_12、elasticsearch-的倒排索引是什么" aria-label="Permalink to &quot;12、elasticsearch 的倒排索引是什么&quot;">​</a></h3><h3 id="_13、lucence内部结构是什么" tabindex="-1">13、lucence内部结构是什么？ <a class="header-anchor" href="#_13、lucence内部结构是什么" aria-label="Permalink to &quot;13、lucence内部结构是什么？&quot;">​</a></h3><h3 id="_14、详细描述一下elasticsearch更新和删除文档的过程" tabindex="-1">14、详细描述一下ElasticSearch更新和删除文档的过程 <a class="header-anchor" href="#_14、详细描述一下elasticsearch更新和删除文档的过程" aria-label="Permalink to &quot;14、详细描述一下ElasticSearch更新和删除文档的过程&quot;">​</a></h3><h3 id="_15、在-elasticsearch-中列出集群的所有索引的语法是什么" tabindex="-1">15、在 Elasticsearch 中列出集群的所有索引的语法是什么？ <a class="header-anchor" href="#_15、在-elasticsearch-中列出集群的所有索引的语法是什么" aria-label="Permalink to &quot;15、在 Elasticsearch 中列出集群的所有索引的语法是什么？&quot;">​</a></h3><h3 id="_16、elasticsearch-的-filesystem" tabindex="-1">16、elasticsearch 的 filesystem <a class="header-anchor" href="#_16、elasticsearch-的-filesystem" aria-label="Permalink to &quot;16、elasticsearch 的 filesystem&quot;">​</a></h3><h3 id="_17、elasticsearch-analyzer-中的字符过滤器如何利用" tabindex="-1">17、Elasticsearch Analyzer 中的字符过滤器如何利用？ <a class="header-anchor" href="#_17、elasticsearch-analyzer-中的字符过滤器如何利用" aria-label="Permalink to &quot;17、Elasticsearch Analyzer 中的字符过滤器如何利用？&quot;">​</a></h3><h3 id="_18、详细描述一下elasticsearch搜索的过程。" tabindex="-1">18、详细描述一下Elasticsearch搜索的过程。 <a class="header-anchor" href="#_18、详细描述一下elasticsearch搜索的过程。" aria-label="Permalink to &quot;18、详细描述一下Elasticsearch搜索的过程。&quot;">​</a></h3><h3 id="_19、什么是elasticsearch-analyzer" tabindex="-1">19、什么是Elasticsearch Analyzer？ <a class="header-anchor" href="#_19、什么是elasticsearch-analyzer" aria-label="Permalink to &quot;19、什么是Elasticsearch Analyzer？&quot;">​</a></h3><h3 id="_20、token-filter-过滤器-在-elasticsearch-中如何工作" tabindex="-1">20、token filter 过滤器 在 Elasticsearch 中如何工作？ <a class="header-anchor" href="#_20、token-filter-过滤器-在-elasticsearch-中如何工作" aria-label="Permalink to &quot;20、token filter 过滤器 在 Elasticsearch 中如何工作？&quot;">​</a></h3><h3 id="_21、elasticsearch-数据的写入过程" tabindex="-1">21、elasticsearch 数据的写入过程 <a class="header-anchor" href="#_21、elasticsearch-数据的写入过程" aria-label="Permalink to &quot;21、elasticsearch 数据的写入过程&quot;">​</a></h3><h3 id="_22、迁移-migration-api-如何用作-elasticsearch" tabindex="-1">22、迁移 Migration API 如何用作 Elasticsearch？ <a class="header-anchor" href="#_22、迁移-migration-api-如何用作-elasticsearch" aria-label="Permalink to &quot;22、迁移 Migration API 如何用作 Elasticsearch？&quot;">​</a></h3><h3 id="_23、是否了解字典树" tabindex="-1">23、是否了解字典树？ <a class="header-anchor" href="#_23、是否了解字典树" aria-label="Permalink to &quot;23、是否了解字典树？&quot;">​</a></h3><h3 id="_24、详细说明elk-stack及其内容" tabindex="-1">24、详细说明ELK Stack及其内容？ <a class="header-anchor" href="#_24、详细说明elk-stack及其内容" aria-label="Permalink to &quot;24、详细说明ELK Stack及其内容？&quot;">​</a></h3><h3 id="_25、elasticsearch中的分析器是什么" tabindex="-1">25、ElasticSearch中的分析器是什么？ <a class="header-anchor" href="#_25、elasticsearch中的分析器是什么" aria-label="Permalink to &quot;25、ElasticSearch中的分析器是什么？&quot;">​</a></h3>`,67),l=[c];function o(i,n,E,h,p,d){return s(),e("div",null,l)}const A=a(r,[["render",o]]);export{B as __pageData,A as default};
