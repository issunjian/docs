import{_ as a,o as e,c as s,V as r}from"./chunks/framework.c6d8cbec.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/elasticsearch/elasticsearch-03.md","filePath":"interview/backend/elasticsearch/elasticsearch-03.md"}'),t={name:"interview/backend/elasticsearch/elasticsearch-03.md"},c=r('<h3 id="_1、详细描述一下elasticsearch搜索的过程" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#1%E8%AF%A6%E7%BB%86%E6%8F%8F%E8%BF%B0%E4%B8%80%E4%B8%8Belasticsearch%E6%90%9C%E7%B4%A2%E7%9A%84%E8%BF%87%E7%A8%8B" target="_blank" rel="noreferrer">1、详细描述一下Elasticsearch搜索的过程？</a> <a class="header-anchor" href="#_1、详细描述一下elasticsearch搜索的过程" aria-label="Permalink to &quot;[1、详细描述一下Elasticsearch搜索的过程？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新2021年面试题附答案解析，大汇总.md#1详细描述一下elasticsearch搜索的过程)&quot;">​</a></h3><p><code>面试官</code>：想了解ES搜索的底层原理，不再只关注业务层面了。</p><p>搜索拆解为“query then fetch” 两个阶段。</p><p><strong>query阶段的目的</strong>：定位到位置，但不取。</p><p>步骤拆解如下：</p><p><strong>1、</strong> 假设一个索引数据有5主+1副本 共10分片，一次请求会命中（主或者副本分片中）的一个。</p><p><strong>2、</strong> 每个分片在本地进行查询，结果返回到本地有序的优先队列中。</p><p><strong>3、</strong> 第2）步骤的结果发送到协调节点，协调节点产生一个全局的排序列表。</p><p><strong>fetch阶段的目的</strong>：取数据。</p><p>路由节点获取所有文档，返回给客户端。</p><h3 id="_2、beats-如何与-elasticsearch-结合使用" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#2beats-%E5%A6%82%E4%BD%95%E4%B8%8E-elasticsearch-%E7%BB%93%E5%90%88%E4%BD%BF%E7%94%A8" target="_blank" rel="noreferrer">2、Beats 如何与 Elasticsearch 结合使用？</a> <a class="header-anchor" href="#_2、beats-如何与-elasticsearch-结合使用" aria-label="Permalink to &quot;[2、Beats 如何与 Elasticsearch 结合使用？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新2021年面试题附答案解析，大汇总.md#2beats-如何与-elasticsearch-结合使用)&quot;">​</a></h3><p>Beats是一种开源工具，可以将数据直接传输到 Elasticsearch 或通过 logstash，在使用Kibana进行查看之前，可以对数据进行处理或过滤。</p><p>传输的数据类型包含：审核数据，日志文件，云数据，网络流量和窗口事件日志等。</p><h3 id="_3、解释一下-elasticsearch-的-分片" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#3%E8%A7%A3%E9%87%8A%E4%B8%80%E4%B8%8B-elasticsearch-%E7%9A%84-%E5%88%86%E7%89%87" target="_blank" rel="noreferrer">3、解释一下 Elasticsearch 的 分片？</a> <a class="header-anchor" href="#_3、解释一下-elasticsearch-的-分片" aria-label="Permalink to &quot;[3、解释一下 Elasticsearch 的 分片？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新2021年面试题附答案解析，大汇总.md#3解释一下-elasticsearch-的-分片)&quot;">​</a></h3><p>当文档数量增加，硬盘容量和处理能力不足时，对客户端请求的响应将延迟。</p><p>在这种情况下，将索引数据分成小块的过程称为分片，可改善数据搜索结果的获取。</p><h3 id="_4、精准匹配检索和全文检索匹配检索的不同" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#4%E7%B2%BE%E5%87%86%E5%8C%B9%E9%85%8D%E6%A3%80%E7%B4%A2%E5%92%8C%E5%85%A8%E6%96%87%E6%A3%80%E7%B4%A2%E5%8C%B9%E9%85%8D%E6%A3%80%E7%B4%A2%E7%9A%84%E4%B8%8D%E5%90%8C" target="_blank" rel="noreferrer">4、精准匹配检索和全文检索匹配检索的不同？</a> <a class="header-anchor" href="#_4、精准匹配检索和全文检索匹配检索的不同" aria-label="Permalink to &quot;[4、精准匹配检索和全文检索匹配检索的不同？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新2021年面试题附答案解析，大汇总.md#4精准匹配检索和全文检索匹配检索的不同)&quot;">​</a></h3><p><strong>两者的本质区别：</strong></p><p>精确匹配用于：是否完全一致？</p><p><strong>举例：邮编、身份证号的匹配往往是精准匹配。</strong></p><p>全文检索用于：是否相关？</p><p>举例：类似B站搜索特定关键词如“马保国 视频”往往是模糊匹配，相关的都返回就可以。</p><h3 id="_5、您能否说明当前可下载的稳定elasticsearch版本" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#5%E6%82%A8%E8%83%BD%E5%90%A6%E8%AF%B4%E6%98%8E%E5%BD%93%E5%89%8D%E5%8F%AF%E4%B8%8B%E8%BD%BD%E7%9A%84%E7%A8%B3%E5%AE%9Aelasticsearch%E7%89%88%E6%9C%AC" target="_blank" rel="noreferrer">5、您能否说明当前可下载的稳定Elasticsearch版本？</a> <a class="header-anchor" href="#_5、您能否说明当前可下载的稳定elasticsearch版本" aria-label="Permalink to &quot;[5、您能否说明当前可下载的稳定Elasticsearch版本？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新2021年面试题附答案解析，大汇总.md#5您能否说明当前可下载的稳定elasticsearch版本)&quot;">​</a></h3><p>Elasticsearch 当前最新版本是7.10（2020年11月21日）。</p><p>为什么问这个问题？ES 更新太快了，应聘者如果了解并使用最新版本，基本能说明他关注 ES 更新。甚至从更广维度讲，他关注技术的迭代和更新。</p><p>但，不信你可以问问，很多求职者只知道用了 ES，什么版本一概不知。</p><h3 id="_6、您能解释一下-elasticsearch-中的-explore-api-吗" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#6%E6%82%A8%E8%83%BD%E8%A7%A3%E9%87%8A%E4%B8%80%E4%B8%8B-elasticsearch-%E4%B8%AD%E7%9A%84-explore-api-%E5%90%97" target="_blank" rel="noreferrer">6、您能解释一下 Elasticsearch 中的 Explore API 吗？</a> <a class="header-anchor" href="#_6、您能解释一下-elasticsearch-中的-explore-api-吗" aria-label="Permalink to &quot;[6、您能解释一下 Elasticsearch 中的 Explore API 吗？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新2021年面试题附答案解析，大汇总.md#6您能解释一下-elasticsearch-中的-explore-api-吗)&quot;">​</a></h3><p>没有用过，这是 Graph （收费功能）相关的API。</p><p>点到为止即可，类似问题实际开发现用现查，类似问题没有什么意义。</p><p><a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/graph-explore-api.html" target="_blank" rel="noreferrer">https://www.elastic.co/guide/en/elasticsearch/reference/current/graph-explore-api.html</a></p><h3 id="_7、elasticsearch了解多少-说说你们公司es的集群架构-索引数据大小-分片有多少-以及一些调优手段-。" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#7elasticsearch%E4%BA%86%E8%A7%A3%E5%A4%9A%E5%B0%91%E8%AF%B4%E8%AF%B4%E4%BD%A0%E4%BB%AC%E5%85%AC%E5%8F%B8es%E7%9A%84%E9%9B%86%E7%BE%A4%E6%9E%B6%E6%9E%84%E7%B4%A2%E5%BC%95%E6%95%B0%E6%8D%AE%E5%A4%A7%E5%B0%8F%E5%88%86%E7%89%87%E6%9C%89%E5%A4%9A%E5%B0%91%E4%BB%A5%E5%8F%8A%E4%B8%80%E4%BA%9B%E8%B0%83%E4%BC%98%E6%89%8B%E6%AE%B5-%E3%80%82" target="_blank" rel="noreferrer">7、elasticsearch了解多少，说说你们公司es的集群架构，索引数据大小，分片有多少，以及一些调优手段 。</a> <a class="header-anchor" href="#_7、elasticsearch了解多少-说说你们公司es的集群架构-索引数据大小-分片有多少-以及一些调优手段-。" aria-label="Permalink to &quot;[7、elasticsearch了解多少，说说你们公司es的集群架构，索引数据大小，分片有多少，以及一些调优手段 。](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新2021年面试题附答案解析，大汇总.md#7elasticsearch了解多少说说你们公司es的集群架构索引数据大小分片有多少以及一些调优手段-。)&quot;">​</a></h3><p><code>面试官</code>：想了解应聘者之前公司接触的ES使用场景、规模，有没有做过比较大规模的索引设计、规划、调优。</p><p>如实结合自己的实践场景回答即可。</p><p>比如：ES集群架构13个节点，索引根据通道不同共20+索引，根据日期，每日递增20+，索引：10分片，每日递增1亿+数据，</p><p>每个通道每天索引大小控制：150GB之内。</p><p>仅索引层面调优手段：</p><p><strong>设计阶段调优</strong></p><p><strong>1、</strong> 根据业务增量需求，采取基于日期模板创建索引，通过roll over API滚动索引；</p><p><strong>2、</strong> 使用别名进行索引管理；</p><p><strong>3、</strong> 每天凌晨定时对索引做force_merge操作，以释放空间；</p><p><strong>4、</strong> 采取冷热分离机制，热数据存储到SSD，提高检索效率；冷数据定期进行shrink操作，以缩减存储；</p><p><strong>5、</strong> 采取curator进行索引的生命周期管理；</p><p><strong>6、</strong> 仅针对需要分词的字段，合理的设置分词器；</p><p><strong>7、</strong> Mapping阶段充分结合各个字段的属性，是否需要检索、是否需要存储等。……..</p><p><strong>写入调优</strong></p><p><strong>1、</strong> 写入前副本数设置为0；</p><p><strong>2、</strong> 写入前关闭refresh_interval设置为-1，禁用刷新机制；</p><p><strong>3、</strong> 写入过程中：采取bulk批量写入；</p><p><strong>4、</strong> 写入后恢复副本数和刷新间隔；</p><p><strong>5、</strong> 尽量使用自动生成的id。</p><p><strong>查询调优</strong></p><p><strong>1、</strong> 禁用wildcard；</p><p><strong>2、</strong> 禁用批量terms（成百上千的场景）；</p><p><strong>3、</strong> 充分利用倒排索引机制，能keyword类型尽量keyword；</p><p><strong>4、</strong> 数据量大时候，可以先基于时间敲定索引再检索；</p><p><strong>5、</strong> 设置合理的路由机制。</p><p><strong>1.4、其他调优</strong></p><p>部署调优，业务调优等。</p><p>上面的提及一部分，面试者就基本对你之前的实践或者运维经验有所评估了。</p><h3 id="_8、能列举过你使用的-x-pack-命令吗" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#8%E8%83%BD%E5%88%97%E4%B8%BE%E8%BF%87%E4%BD%A0%E4%BD%BF%E7%94%A8%E7%9A%84-x-pack-%E5%91%BD%E4%BB%A4%E5%90%97" target="_blank" rel="noreferrer">8、能列举过你使用的 X-Pack 命令吗?</a> <a class="header-anchor" href="#_8、能列举过你使用的-x-pack-命令吗" aria-label="Permalink to &quot;[8、能列举过你使用的 X-Pack 命令吗?](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新2021年面试题附答案解析，大汇总.md#8能列举过你使用的-x-pack-命令吗)&quot;">​</a></h3><p>7.1 安全功能免费后，使用了：setup-passwords 为账号设置密码，确保集群安全。</p><h3 id="_9、elasticsearch-全文检索" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#9elasticsearch-%E5%85%A8%E6%96%87%E6%A3%80%E7%B4%A2" target="_blank" rel="noreferrer">9、elasticsearch 全文检索</a> <a class="header-anchor" href="#_9、elasticsearch-全文检索" aria-label="Permalink to &quot;[9、elasticsearch 全文检索](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新2021年面试题附答案解析，大汇总.md#9elasticsearch-全文检索)&quot;">​</a></h3><p>(1) 客户端使用RestFul API向对应的node发送查询请求</p><p>(2)协调节点将请求转发到所有节点（primary或者replica）所有节点将对应的数据查询之后返回对应的doc id 返回给协调节点</p><p>(3)协调节点将doc进行排序聚合</p><p>(4) 协调节点再根据doc id 把查询请求发送到对应shard的node，返回document</p><h3 id="_10、你之前公司的elasticsearch集群-一个node一般会分配几个分片" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#10%E4%BD%A0%E4%B9%8B%E5%89%8D%E5%85%AC%E5%8F%B8%E7%9A%84elasticsearch%E9%9B%86%E7%BE%A4%E4%B8%80%E4%B8%AAnode%E4%B8%80%E8%88%AC%E4%BC%9A%E5%88%86%E9%85%8D%E5%87%A0%E4%B8%AA%E5%88%86%E7%89%87" target="_blank" rel="noreferrer">10、你之前公司的ElasticSearch集群，一个Node一般会分配几个分片？</a> <a class="header-anchor" href="#_10、你之前公司的elasticsearch集群-一个node一般会分配几个分片" aria-label="Permalink to &quot;[10、你之前公司的ElasticSearch集群，一个Node一般会分配几个分片？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Elasticsearch/Elasticsearch最新2021年面试题附答案解析，大汇总.md#10你之前公司的elasticsearch集群一个node一般会分配几个分片)&quot;">​</a></h3><p>我们遵循官方建议，一个Node最好不要多于三个shards.</p><h3 id="_11、什么是elasticsearch脑裂" tabindex="-1">11、什么是ElasticSearch脑裂？ <a class="header-anchor" href="#_11、什么是elasticsearch脑裂" aria-label="Permalink to &quot;11、什么是ElasticSearch脑裂？&quot;">​</a></h3><h3 id="_12、你能否列出与-elasticsearch-有关的主要可用字段数据类型" tabindex="-1">12、你能否列出与 Elasticsearch 有关的主要可用字段数据类型？ <a class="header-anchor" href="#_12、你能否列出与-elasticsearch-有关的主要可用字段数据类型" aria-label="Permalink to &quot;12、你能否列出与 Elasticsearch 有关的主要可用字段数据类型？&quot;">​</a></h3><h3 id="_13、详细描述一下-elasticsearch-索引文档的过程。" tabindex="-1">13、详细描述一下 Elasticsearch 索引文档的过程。 <a class="header-anchor" href="#_13、详细描述一下-elasticsearch-索引文档的过程。" aria-label="Permalink to &quot;13、详细描述一下 Elasticsearch 索引文档的过程。&quot;">​</a></h3><h3 id="_14、elasticsearch-分布式架构原理" tabindex="-1">14、elasticsearch 分布式架构原理 <a class="header-anchor" href="#_14、elasticsearch-分布式架构原理" aria-label="Permalink to &quot;14、elasticsearch 分布式架构原理&quot;">​</a></h3><h3 id="_15、logstash-如何与-elasticsearch-结合使用" tabindex="-1">15、logstash 如何与 Elasticsearch 结合使用？ <a class="header-anchor" href="#_15、logstash-如何与-elasticsearch-结合使用" aria-label="Permalink to &quot;15、logstash 如何与 Elasticsearch 结合使用？&quot;">​</a></h3><h3 id="_16、介绍一下你们的个性化搜索方案" tabindex="-1">16、介绍一下你们的个性化搜索方案？ <a class="header-anchor" href="#_16、介绍一下你们的个性化搜索方案" aria-label="Permalink to &quot;16、介绍一下你们的个性化搜索方案？&quot;">​</a></h3><h3 id="_17、您能否列出-与-elk日志分析相关的应用场景" tabindex="-1">17、您能否列出 与 ELK日志分析相关的应用场景？ <a class="header-anchor" href="#_17、您能否列出-与-elk日志分析相关的应用场景" aria-label="Permalink to &quot;17、您能否列出 与 ELK日志分析相关的应用场景？&quot;">​</a></h3><h3 id="_18、简要介绍一下elasticsearch" tabindex="-1">18、简要介绍一下Elasticsearch？ <a class="header-anchor" href="#_18、简要介绍一下elasticsearch" aria-label="Permalink to &quot;18、简要介绍一下Elasticsearch？&quot;">​</a></h3><h3 id="_19、elasticsearch-支持哪些类型的查询" tabindex="-1">19、Elasticsearch 支持哪些类型的查询？ <a class="header-anchor" href="#_19、elasticsearch-支持哪些类型的查询" aria-label="Permalink to &quot;19、Elasticsearch 支持哪些类型的查询？&quot;">​</a></h3><h3 id="_20、elasticsearch-实际设计" tabindex="-1">20、elasticsearch 实际设计 <a class="header-anchor" href="#_20、elasticsearch-实际设计" aria-label="Permalink to &quot;20、elasticsearch 实际设计&quot;">​</a></h3><h3 id="_21、拼写纠错是如何实现的" tabindex="-1">21、拼写纠错是如何实现的？ <a class="header-anchor" href="#_21、拼写纠错是如何实现的" aria-label="Permalink to &quot;21、拼写纠错是如何实现的？&quot;">​</a></h3><h3 id="_22、elasticsearch是如何实现master选举的" tabindex="-1">22、Elasticsearch是如何实现master选举的？ <a class="header-anchor" href="#_22、elasticsearch是如何实现master选举的" aria-label="Permalink to &quot;22、Elasticsearch是如何实现master选举的？&quot;">​</a></h3><h3 id="_23、lucence-内部结构是什么" tabindex="-1">23、lucence 内部结构是什么？ <a class="header-anchor" href="#_23、lucence-内部结构是什么" aria-label="Permalink to &quot;23、lucence 内部结构是什么？&quot;">​</a></h3><h3 id="_24、elasticsearch中的副本是什么" tabindex="-1">24、ElasticSearch中的副本是什么？ <a class="header-anchor" href="#_24、elasticsearch中的副本是什么" aria-label="Permalink to &quot;24、ElasticSearch中的副本是什么？&quot;">​</a></h3><h3 id="_25、elasticsearch-是如何实现-master-选举的" tabindex="-1">25、Elasticsearch 是如何实现 Master 选举的？ <a class="header-anchor" href="#_25、elasticsearch-是如何实现-master-选举的" aria-label="Permalink to &quot;25、Elasticsearch 是如何实现 Master 选举的？&quot;">​</a></h3><h3 id="_26、解释一下-elasticsearch-集群中的-type-的概念" tabindex="-1">26、解释一下 Elasticsearch 集群中的 Type 的概念 ？ <a class="header-anchor" href="#_26、解释一下-elasticsearch-集群中的-type-的概念" aria-label="Permalink to &quot;26、解释一下 Elasticsearch 集群中的 Type 的概念 ？&quot;">​</a></h3>',84),E=[c];function o(h,l,i,n,B,p){return e(),s("div",null,E)}const u=a(t,[["render",o]]);export{d as __pageData,u as default};