import{_ as a,o as s,c as e,V as t}from"./chunks/framework.c6d8cbec.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/elasticsearch/elasticsearch-02.md","filePath":"interview/backend/elasticsearch/elasticsearch-02.md"}'),c={name:"interview/backend/elasticsearch/elasticsearch-02.md"},r=t(`<h3 id="_1、elasticsearch-读取数据" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#1elasticsearch-%E8%AF%BB%E5%8F%96%E6%95%B0%E6%8D%AE" target="_blank" rel="noreferrer">1、elasticsearch 读取数据</a> <a class="header-anchor" href="#_1、elasticsearch-读取数据" aria-label="Permalink to &quot;[1、elasticsearch 读取数据](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新2021年面试题大汇总，附答案.md#1elasticsearch-读取数据)&quot;">​</a></h3><p>使用RestFul API向对应的node发送查询请求，根据did来判断在哪个shard上，返回的是primary和replica的node节点集合</p><p>这样会负载均衡地把查询发送到对应节点，之后对应节点接收到请求，将document数据返回协调节点，协调节点把document返回给客户端</p><p><img src="https://image-static.segmentfault.com/277/237/2772379432-5e5b563f9a221_articlex#alt=3cI6RP.png" alt=""></p><h3 id="_2、您能解释一下x-pack-for-elasticsearch的功能和重要性吗" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#2%E6%82%A8%E8%83%BD%E8%A7%A3%E9%87%8A%E4%B8%80%E4%B8%8Bx-pack-for-elasticsearch%E7%9A%84%E5%8A%9F%E8%83%BD%E5%92%8C%E9%87%8D%E8%A6%81%E6%80%A7%E5%90%97" target="_blank" rel="noreferrer">2、您能解释一下X-Pack for Elasticsearch的功能和重要性吗？</a> <a class="header-anchor" href="#_2、您能解释一下x-pack-for-elasticsearch的功能和重要性吗" aria-label="Permalink to &quot;[2、您能解释一下X-Pack for Elasticsearch的功能和重要性吗？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新2021年面试题大汇总，附答案.md#2您能解释一下x-pack-for-elasticsearch的功能和重要性吗)&quot;">​</a></h3><p>X-Pack 是与Elasticsearch一起安装的扩展程序。</p><p>X-Pack的各种功能包括安全性（基于角色的访问，特权/权限，角色和用户安全性），监视，报告，警报等。</p><h3 id="_3、elasticsearch-中的节点-比如共-20-个-其中的-10-个选了一个master-另外-10-个选了另一个-master-怎么办" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#3elasticsearch-%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9%E6%AF%94%E5%A6%82%E5%85%B1-20-%E4%B8%AA%E5%85%B6%E4%B8%AD%E7%9A%84-10-%E4%B8%AA%E9%80%89%E4%BA%86%E4%B8%80%E4%B8%AAmaster%E5%8F%A6%E5%A4%96-10-%E4%B8%AA%E9%80%89%E4%BA%86%E5%8F%A6%E4%B8%80%E4%B8%AA-master%E6%80%8E%E4%B9%88%E5%8A%9E" target="_blank" rel="noreferrer">3、Elasticsearch 中的节点（比如共 20 个），其中的 10 个选了一个master，另外 10 个选了另一个 master，怎么办？</a> <a class="header-anchor" href="#_3、elasticsearch-中的节点-比如共-20-个-其中的-10-个选了一个master-另外-10-个选了另一个-master-怎么办" aria-label="Permalink to &quot;[3、Elasticsearch 中的节点（比如共 20 个），其中的 10 个选了一个master，另外 10 个选了另一个 master，怎么办？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新2021年面试题大汇总，附答案.md#3elasticsearch-中的节点比如共-20-个其中的-10-个选了一个master另外-10-个选了另一个-master怎么办)&quot;">​</a></h3><p><strong>1、</strong> 当集群 master 候选数量不小于 3 个时，可以通过设置最少投票通过数量（discovery.zen.minimum_master_nodes）超过所有候选节点一半以上来解决脑裂问题；</p><p><strong>2、</strong> 当候选数量为两个时，只能修改为唯一的一个 master 候选，其他作为 data节点，避免脑裂问题。</p><h3 id="_4、解释一下-elasticsearch集群中的-索引的概念" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#4%E8%A7%A3%E9%87%8A%E4%B8%80%E4%B8%8B-elasticsearch%E9%9B%86%E7%BE%A4%E4%B8%AD%E7%9A%84-%E7%B4%A2%E5%BC%95%E7%9A%84%E6%A6%82%E5%BF%B5-" target="_blank" rel="noreferrer">4、解释一下 Elasticsearch集群中的 索引的概念 ？</a> <a class="header-anchor" href="#_4、解释一下-elasticsearch集群中的-索引的概念" aria-label="Permalink to &quot;[4、解释一下 Elasticsearch集群中的 索引的概念 ？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新2021年面试题大汇总，附答案.md#4解释一下-elasticsearch集群中的-索引的概念-)&quot;">​</a></h3><p>Elasticsearch 集群可以包含多个索引，与关系数据库相比，它们相当于数据库表</p><h3 id="_5、你可以列出-elasticsearch-各种类型的分析器吗" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#5%E4%BD%A0%E5%8F%AF%E4%BB%A5%E5%88%97%E5%87%BA-elasticsearch-%E5%90%84%E7%A7%8D%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%88%86%E6%9E%90%E5%99%A8%E5%90%97" target="_blank" rel="noreferrer">5、你可以列出 Elasticsearch 各种类型的分析器吗？</a> <a class="header-anchor" href="#_5、你可以列出-elasticsearch-各种类型的分析器吗" aria-label="Permalink to &quot;[5、你可以列出 Elasticsearch 各种类型的分析器吗？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新2021年面试题大汇总，附答案.md#5你可以列出-elasticsearch-各种类型的分析器吗)&quot;">​</a></h3><p>Elasticsearch Analyzer 的类型为内置分析器和自定义分析器。</p><p><strong>Standard Analyzer</strong></p><p>标准分析器是默认分词器，如果未指定，则使用该分词器。</p><p>它基于Unicode文本分割算法，适用于大多数语言。</p><p><strong>Whitespace Analyzer</strong></p><p>基于空格字符切词。</p><p><strong>Stop Analyzer</strong></p><p>在simple Analyzer的基础上，移除停用词。</p><p><strong>Keyword Analyzer</strong></p><p>不切词，将输入的整个串一起返回。</p><p>自定义分词器的模板</p><p>自定义分词器的在Mapping的Setting部分设置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">PUT my_custom_index</span></span>
<span class="line"><span style="color:#f6f6f4;">{</span></span>
<span class="line"><span style="color:#f6f6f4;"> &quot;settings&quot;:{</span></span>
<span class="line"><span style="color:#f6f6f4;">  &quot;analysis&quot;:{</span></span>
<span class="line"><span style="color:#f6f6f4;">  &quot;char_filter&quot;:{},</span></span>
<span class="line"><span style="color:#f6f6f4;">  &quot;tokenizer&quot;:{},</span></span>
<span class="line"><span style="color:#f6f6f4;">  &quot;filter&quot;:{},</span></span>
<span class="line"><span style="color:#f6f6f4;">  &quot;analyzer&quot;:{}</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;"> }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">PUT my_custom_index</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;"> &quot;settings&quot;:{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;analysis&quot;:{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;char_filter&quot;:{},</span></span>
<span class="line"><span style="color:#24292e;">  &quot;tokenizer&quot;:{},</span></span>
<span class="line"><span style="color:#24292e;">  &quot;filter&quot;:{},</span></span>
<span class="line"><span style="color:#24292e;">  &quot;analyzer&quot;:{}</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>脑海中还是上面的三部分组成的图示。其中：</p><p>“char_filter”:{},——对应字符过滤部分；</p><p>“tokenizer”:{},——对应文本切分为分词部分；</p><p>“filter”:{},——对应分词后再过滤部分；</p><p>“analyzer”:{}——对应分词器组成部分，其中会包含：1. 2. 3。</p><h3 id="_6、解释一下-elasticsearch-node" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#6%E8%A7%A3%E9%87%8A%E4%B8%80%E4%B8%8B-elasticsearch-node" target="_blank" rel="noreferrer">6、解释一下 Elasticsearch Node？</a> <a class="header-anchor" href="#_6、解释一下-elasticsearch-node" aria-label="Permalink to &quot;[6、解释一下 Elasticsearch Node？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新2021年面试题大汇总，附答案.md#6解释一下-elasticsearch-node)&quot;">​</a></h3><p>节点是 Elasticsearch 的实例。实际业务中，我们会说：ES集群包含3个节点、7个节点。</p><p>这里节点实际就是：一个独立的 Elasticsearch 进程，一般将一个节点部署到一台独立的服务器或者虚拟机、容器中。</p><p>不同节点根据角色不同，可以划分为：</p><p><strong>主节点</strong></p><p>帮助配置和管理在整个集群中添加和删除节点。</p><p><strong>数据节点</strong></p><p>存储数据并执行诸如CRUD（创建/读取/更新/删除）操作，对数据进行搜索和聚合的操作。</p><p><strong>1、</strong> 客户端节点（或者说：协调节点） 将集群请求转发到主节点，将与数据相关的请求转发到数据节点</p><p><strong>2、</strong> 摄取节点</p><p>用于在索引之前对文档进行预处理。</p><h3 id="_7、在安装elasticsearch时-请说明不同的软件包及其重要性" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#7%E5%9C%A8%E5%AE%89%E8%A3%85elasticsearch%E6%97%B6%E8%AF%B7%E8%AF%B4%E6%98%8E%E4%B8%8D%E5%90%8C%E7%9A%84%E8%BD%AF%E4%BB%B6%E5%8C%85%E5%8F%8A%E5%85%B6%E9%87%8D%E8%A6%81%E6%80%A7" target="_blank" rel="noreferrer">7、在安装Elasticsearch时，请说明不同的软件包及其重要性？</a> <a class="header-anchor" href="#_7、在安装elasticsearch时-请说明不同的软件包及其重要性" aria-label="Permalink to &quot;[7、在安装Elasticsearch时，请说明不同的软件包及其重要性？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新2021年面试题大汇总，附答案.md#7在安装elasticsearch时请说明不同的软件包及其重要性)&quot;">​</a></h3><p>这个貌似没什么好说的，去官方文档下载对应操作系统安装包即可。</p><p>部分功能是收费的，如机器学习、高级别 kerberos 认证安全等选型要知悉。</p><h3 id="_8、elasticsearch在部署时-对linux的设置有哪些优化方法" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#8elasticsearch%E5%9C%A8%E9%83%A8%E7%BD%B2%E6%97%B6%E5%AF%B9linux%E7%9A%84%E8%AE%BE%E7%BD%AE%E6%9C%89%E5%93%AA%E4%BA%9B%E4%BC%98%E5%8C%96%E6%96%B9%E6%B3%95" target="_blank" rel="noreferrer">8、Elasticsearch在部署时，对Linux的设置有哪些优化方法</a> <a class="header-anchor" href="#_8、elasticsearch在部署时-对linux的设置有哪些优化方法" aria-label="Permalink to &quot;[8、Elasticsearch在部署时，对Linux的设置有哪些优化方法](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新2021年面试题大汇总，附答案.md#8elasticsearch在部署时对linux的设置有哪些优化方法)&quot;">​</a></h3><p><code>面试官</code>：想了解对ES集群的运维能力。</p><p><strong>1、</strong> 关闭缓存swap;</p><p><strong>2、</strong> 堆内存设置为：Min（节点内存/2, 32GB）;</p><p><strong>3、</strong> 设置最大文件句柄数；</p><p><strong>4、</strong> 线程池+队列大小根据业务需要做调整；</p><p><strong>5、</strong> 磁盘存储raid方式——存储有条件使用RAID10，增加单节点性能以及避免单节点存储故障。</p><h3 id="_9、请解释有关-elasticsearch的-nrt" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#9%E8%AF%B7%E8%A7%A3%E9%87%8A%E6%9C%89%E5%85%B3-elasticsearch%E7%9A%84-nrt" target="_blank" rel="noreferrer">9、请解释有关 Elasticsearch的 NRT？</a> <a class="header-anchor" href="#_9、请解释有关-elasticsearch的-nrt" aria-label="Permalink to &quot;[9、请解释有关 Elasticsearch的 NRT？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新2021年面试题大汇总，附答案.md#9请解释有关-elasticsearch的-nrt)&quot;">​</a></h3><p>从文档索引（写入）到可搜索到之间的延迟默认一秒钟，因此Elasticsearch是近实时（NRT）搜索平台。</p><p>也就是说：文档写入，最快一秒钟被索引到，不能再快了。</p><p>写入调优的时候，我们通常会动态调整：refresh_interval = 30s 或者更达值，以使得写入数据更晚一点时间被搜索到。</p><h3 id="_10、elasticsearch-的-document设计" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#10elasticsearch-%E7%9A%84-document%E8%AE%BE%E8%AE%A1" target="_blank" rel="noreferrer">10、elasticsearch 的 document设计</a> <a class="header-anchor" href="#_10、elasticsearch-的-document设计" aria-label="Permalink to &quot;[10、elasticsearch 的 document设计](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新2021年面试题大汇总，附答案.md#10elasticsearch-的-document设计)&quot;">​</a></h3><p>在使用es时 避免使用复杂的查询语句（Join 、聚合），就是在建立索引时，</p><p>就根据查询语句建立好对应的元数据。</p><h3 id="_11、能列出-10-个使用-elasticsearch-作为其搜索引擎或数据库的公司吗" tabindex="-1">11、能列出 10 个使用 Elasticsearch 作为其搜索引擎或数据库的公司吗？ <a class="header-anchor" href="#_11、能列出-10-个使用-elasticsearch-作为其搜索引擎或数据库的公司吗" aria-label="Permalink to &quot;11、能列出 10 个使用 Elasticsearch 作为其搜索引擎或数据库的公司吗？&quot;">​</a></h3><h3 id="_12、解释一下elasticsearch-cluster" tabindex="-1">12、解释一下Elasticsearch Cluster？ <a class="header-anchor" href="#_12、解释一下elasticsearch-cluster" aria-label="Permalink to &quot;12、解释一下Elasticsearch Cluster？&quot;">​</a></h3><h3 id="_13、elasticsearch-索引数据多了怎么办-如何调优-部署" tabindex="-1">13、elasticsearch 索引数据多了怎么办，如何调优，部署 <a class="header-anchor" href="#_13、elasticsearch-索引数据多了怎么办-如何调优-部署" aria-label="Permalink to &quot;13、elasticsearch 索引数据多了怎么办，如何调优，部署&quot;">​</a></h3><h3 id="_14、对于gc方面-在使用elasticsearch时要注意什么" tabindex="-1">14、对于GC方面，在使用Elasticsearch时要注意什么？ <a class="header-anchor" href="#_14、对于gc方面-在使用elasticsearch时要注意什么" aria-label="Permalink to &quot;14、对于GC方面，在使用Elasticsearch时要注意什么？&quot;">​</a></h3><h3 id="_15、是否了解字典树" tabindex="-1">15、是否了解字典树？ <a class="header-anchor" href="#_15、是否了解字典树" aria-label="Permalink to &quot;15、是否了解字典树？&quot;">​</a></h3><h3 id="_16、elasticsearch在部署时-对linux的设置有哪些优化方法" tabindex="-1">16、Elasticsearch在部署时，对Linux的设置有哪些优化方法？ <a class="header-anchor" href="#_16、elasticsearch在部署时-对linux的设置有哪些优化方法" aria-label="Permalink to &quot;16、Elasticsearch在部署时，对Linux的设置有哪些优化方法？&quot;">​</a></h3><h3 id="_17、可以列出x-pack-api-吗" tabindex="-1">17、可以列出X-Pack API 吗？ <a class="header-anchor" href="#_17、可以列出x-pack-api-吗" aria-label="Permalink to &quot;17、可以列出X-Pack API 吗？&quot;">​</a></h3><h3 id="_18、elasticsearch-对于大数据量-上亿量级-的聚合如何实现" tabindex="-1">18、Elasticsearch 对于大数据量（上亿量级）的聚合如何实现？ <a class="header-anchor" href="#_18、elasticsearch-对于大数据量-上亿量级-的聚合如何实现" aria-label="Permalink to &quot;18、Elasticsearch 对于大数据量（上亿量级）的聚合如何实现？&quot;">​</a></h3><h3 id="_19、elasticsearch-冷热分离" tabindex="-1">19、elasticsearch 冷热分离 <a class="header-anchor" href="#_19、elasticsearch-冷热分离" aria-label="Permalink to &quot;19、elasticsearch 冷热分离&quot;">​</a></h3><h3 id="_20、介绍下你们电商搜索的整体技术架构" tabindex="-1">20、介绍下你们电商搜索的整体技术架构 <a class="header-anchor" href="#_20、介绍下你们电商搜索的整体技术架构" aria-label="Permalink to &quot;20、介绍下你们电商搜索的整体技术架构&quot;">​</a></h3><h3 id="_21、详细描述一下elasticsearch搜索的过程" tabindex="-1">21、详细描述一下Elasticsearch搜索的过程？ <a class="header-anchor" href="#_21、详细描述一下elasticsearch搜索的过程" aria-label="Permalink to &quot;21、详细描述一下Elasticsearch搜索的过程？&quot;">​</a></h3><h3 id="_22、如何在-elasticsearch中-搜索数据" tabindex="-1">22、如何在 Elasticsearch中 搜索数据？ <a class="header-anchor" href="#_22、如何在-elasticsearch中-搜索数据" aria-label="Permalink to &quot;22、如何在 Elasticsearch中 搜索数据？&quot;">​</a></h3><h3 id="_23、elasticsearch的-文档是什么" tabindex="-1">23、Elasticsearch的 文档是什么？ <a class="header-anchor" href="#_23、elasticsearch的-文档是什么" aria-label="Permalink to &quot;23、Elasticsearch的 文档是什么？&quot;">​</a></h3><h3 id="_24、elasticsearch中的倒排索引是什么" tabindex="-1">24、ElasticSearch中的倒排索引是什么？ <a class="header-anchor" href="#_24、elasticsearch中的倒排索引是什么" aria-label="Permalink to &quot;24、ElasticSearch中的倒排索引是什么？&quot;">​</a></h3><h3 id="_25、介绍一下你们的个性化搜索方案" tabindex="-1">25、介绍一下你们的个性化搜索方案？ <a class="header-anchor" href="#_25、介绍一下你们的个性化搜索方案" aria-label="Permalink to &quot;25、介绍一下你们的个性化搜索方案？&quot;">​</a></h3><h3 id="_26、elasticsearch-在部署时-对-linux-的设置有哪些优化方法" tabindex="-1">26、Elasticsearch 在部署时，对 Linux 的设置有哪些优化方法？ <a class="header-anchor" href="#_26、elasticsearch-在部署时-对-linux-的设置有哪些优化方法" aria-label="Permalink to &quot;26、Elasticsearch 在部署时，对 Linux 的设置有哪些优化方法？&quot;">​</a></h3>`,75),l=[r];function o(i,n,E,h,p,d){return s(),e("div",null,l)}const B=a(c,[["render",o]]);export{A as __pageData,B as default};
