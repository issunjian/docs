import{_ as e,o as a,c as s,V as r}from"./chunks/framework.c6d8cbec.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/redis/redis-01.md","filePath":"interview/backend/redis/redis-01.md"}'),i={name:"interview/backend/redis/redis-01.md"},d=r('<h3 id="_1、redis集群方案应该怎么做-都有哪些方案" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Redis/Redis%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#1redis%E9%9B%86%E7%BE%A4%E6%96%B9%E6%A1%88%E5%BA%94%E8%AF%A5%E6%80%8E%E4%B9%88%E5%81%9A%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E6%96%B9%E6%A1%88" target="_blank" rel="noreferrer">1、Redis集群方案应该怎么做？都有哪些方案？</a> <a class="header-anchor" href="#_1、redis集群方案应该怎么做-都有哪些方案" aria-label="Permalink to &quot;[1、Redis集群方案应该怎么做？都有哪些方案？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Redis/Redis最新2021年面试题，高级面试题及附答案解析.md#1redis集群方案应该怎么做都有哪些方案)&quot;">​</a></h3><p><strong>1、</strong> codis。</p><p>目前用的最多的集群方案，基本和twemproxy一致的效果，但它支持在 节点数量改变情况下，旧节点数据可恢复到新hash节点。</p><p><strong>2、</strong> Redis cluster3.0自带的集群，特点在于他的分布式算法不是一致性hash，而是hash槽的概念，以及自身支持节点设置从节点。具体看官方文档介绍。</p><p><strong>3、</strong> 在业务代码层实现，起几个毫无关联的Redis实例，在代码层，对key 进行hash计算，然后去对应的Redis实例操作数据。 这种方式对hash层代码要求比较高，考虑部分包</p><h3 id="_2、reids支持的语言" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Redis/Redis%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#2reids%E6%94%AF%E6%8C%81%E7%9A%84%E8%AF%AD%E8%A8%80%EF%BC%9A" target="_blank" rel="noreferrer">2、Reids支持的语言：</a> <a class="header-anchor" href="#_2、reids支持的语言" aria-label="Permalink to &quot;[2、Reids支持的语言：](https://gitee.com/souyunku/DevBooks/blob/master/docs/Redis/Redis最新2021年面试题，高级面试题及附答案解析.md#2reids支持的语言：)&quot;">​</a></h3><p>java、C、C#、C++、php、Node.js、Go等。</p><h3 id="_3、怎么测试redis的连通性" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Redis/Redis%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#3%E6%80%8E%E4%B9%88%E6%B5%8B%E8%AF%95redis%E7%9A%84%E8%BF%9E%E9%80%9A%E6%80%A7" target="_blank" rel="noreferrer">3、怎么测试Redis的连通性？</a> <a class="header-anchor" href="#_3、怎么测试redis的连通性" aria-label="Permalink to &quot;[3、怎么测试Redis的连通性？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Redis/Redis最新2021年面试题，高级面试题及附答案解析.md#3怎么测试redis的连通性)&quot;">​</a></h3><p>ping</p><h3 id="_4、redis-集群会有写操作丢失吗-为什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Redis/Redis%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#4redis-%E9%9B%86%E7%BE%A4%E4%BC%9A%E6%9C%89%E5%86%99%E6%93%8D%E4%BD%9C%E4%B8%A2%E5%A4%B1%E5%90%97%E4%B8%BA%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">4、Redis 集群会有写操作丢失吗？为什么？</a> <a class="header-anchor" href="#_4、redis-集群会有写操作丢失吗-为什么" aria-label="Permalink to &quot;[4、Redis 集群会有写操作丢失吗？为什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Redis/Redis最新2021年面试题，高级面试题及附答案解析.md#4redis-集群会有写操作丢失吗为什么)&quot;">​</a></h3><p>Redis 并不能保证数据的强一致性，这意味这在实际中集群在特定的条件下可能会丢失写操作。</p><h3 id="_5、redis回收使用的是什么算法" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Redis/Redis%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#5redis%E5%9B%9E%E6%94%B6%E4%BD%BF%E7%94%A8%E7%9A%84%E6%98%AF%E4%BB%80%E4%B9%88%E7%AE%97%E6%B3%95" target="_blank" rel="noreferrer">5、Redis回收使用的是什么算法？</a> <a class="header-anchor" href="#_5、redis回收使用的是什么算法" aria-label="Permalink to &quot;[5、Redis回收使用的是什么算法？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Redis/Redis最新2021年面试题，高级面试题及附答案解析.md#5redis回收使用的是什么算法)&quot;">​</a></h3><p>LRU算法</p><h3 id="_6、redis的并发竞争问题如何解决" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Redis/Redis%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#6redis%E7%9A%84%E5%B9%B6%E5%8F%91%E7%AB%9E%E4%BA%89%E9%97%AE%E9%A2%98%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3" target="_blank" rel="noreferrer">6、Redis的并发竞争问题如何解决?</a> <a class="header-anchor" href="#_6、redis的并发竞争问题如何解决" aria-label="Permalink to &quot;[6、Redis的并发竞争问题如何解决?](https://gitee.com/souyunku/DevBooks/blob/master/docs/Redis/Redis最新2021年面试题，高级面试题及附答案解析.md#6redis的并发竞争问题如何解决)&quot;">​</a></h3><p>单进程单线程模式，采用队列模式将并发访问变为串行访问。Redis本身没有锁的概念，Redis对于多个客户端连接并不存在竞争，利用setnx实现锁。</p><h3 id="_7、aof常用配置总结" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Redis/Redis%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#7aof%E5%B8%B8%E7%94%A8%E9%85%8D%E7%BD%AE%E6%80%BB%E7%BB%93" target="_blank" rel="noreferrer">7、AOF常用配置总结</a> <a class="header-anchor" href="#_7、aof常用配置总结" aria-label="Permalink to &quot;[7、AOF常用配置总结](https://gitee.com/souyunku/DevBooks/blob/master/docs/Redis/Redis最新2021年面试题，高级面试题及附答案解析.md#7aof常用配置总结)&quot;">​</a></h3><p>下面是AOF常用的配置项，以及默认值；前面介绍过的这里不再详细介绍。</p><p><strong>1、</strong> appendonly no：是否开启AOF</p><p><strong>2、</strong> appendfilename &quot;appendonly.aof&quot;：AOF文件名</p><p><strong>3、</strong> dir ./：RDB文件和AOF文件所在目录</p><p><strong>4、</strong> appendfsync everysec：fsync持久化策略</p><p><strong>5、</strong> no-appendfsync-on-rewrite no：AOF重写期间是否禁止fsync；如果开启该选项，可以减轻文件重写时CPU和硬盘的负载（尤其是硬盘），但是可能会丢失AOF重写期间的数据；需要在负载和安全性之间进行平衡</p><p><strong>6、</strong> auto-aof-rewrite-percentage 100：文件重写触发条件之一</p><p><strong>7、</strong> auto-aof-rewrite-min-size 64mb：文件重写触发提交之一</p><p><strong>8、</strong> aof-load-truncated yes：如果AOF文件结尾损坏，Redis启动时是否仍载入AOF文件</p><h3 id="_8、redis-管道-pipeline" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Redis/Redis%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#8redis-%E7%AE%A1%E9%81%93-pipeline" target="_blank" rel="noreferrer">8、Redis 管道 Pipeline</a> <a class="header-anchor" href="#_8、redis-管道-pipeline" aria-label="Permalink to &quot;[8、Redis 管道 Pipeline](https://gitee.com/souyunku/DevBooks/blob/master/docs/Redis/Redis最新2021年面试题，高级面试题及附答案解析.md#8redis-管道-pipeline)&quot;">​</a></h3><p>在某些场景下我们在<strong>一次操作中可能需要执行多个命令</strong>，而如果我们只是一个命令一个命令去执行则会浪费很多网络消耗时间，如果将命令一次性传输到 <code>Redis</code>中去再执行，则会减少很多开销时间。但是需要注意的是 <code>pipeline</code>中的命令并不是原子性执行的，也就是说管道中的命令到达 <code>Redis</code>服务器的时候可能会被其他的命令穿插</p><h3 id="_9、微信公众号-java资讯库-回复-架构" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Redis/Redis%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#9%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7%EF%BC%9Ajava%E8%B5%84%E8%AE%AF%E5%BA%93%E5%9B%9E%E5%A4%8D%E2%80%9C%E6%9E%B6%E6%9E%84" target="_blank" rel="noreferrer">9、微信公众号：Java资讯库，回复“架构”</a> <a class="header-anchor" href="#_9、微信公众号-java资讯库-回复-架构" aria-label="Permalink to &quot;[9、微信公众号：Java资讯库，回复“架构”](https://gitee.com/souyunku/DevBooks/blob/master/docs/Redis/Redis最新2021年面试题，高级面试题及附答案解析.md#9微信公众号：java资讯库回复“架构)&quot;">​</a></h3><h3 id="_10、redis集群方案什么情况下会导致整个集群不可用" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Redis/Redis%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#10redis%E9%9B%86%E7%BE%A4%E6%96%B9%E6%A1%88%E4%BB%80%E4%B9%88%E6%83%85%E5%86%B5%E4%B8%8B%E4%BC%9A%E5%AF%BC%E8%87%B4%E6%95%B4%E4%B8%AA%E9%9B%86%E7%BE%A4%E4%B8%8D%E5%8F%AF%E7%94%A8" target="_blank" rel="noreferrer">10、Redis集群方案什么情况下会导致整个集群不可用？</a> <a class="header-anchor" href="#_10、redis集群方案什么情况下会导致整个集群不可用" aria-label="Permalink to &quot;[10、Redis集群方案什么情况下会导致整个集群不可用？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Redis/Redis最新2021年面试题，高级面试题及附答案解析.md#10redis集群方案什么情况下会导致整个集群不可用)&quot;">​</a></h3><p>有A，B，C三个节点的集群,在没有复制模型的情况下,如果节点B失败了，那么整个集群就会以为缺少5501-11000这个范围的槽而不可用。</p><h3 id="_11、reids三种不同删除策略" tabindex="-1">11、Reids三种不同删除策略 <a class="header-anchor" href="#_11、reids三种不同删除策略" aria-label="Permalink to &quot;11、Reids三种不同删除策略&quot;">​</a></h3><h3 id="_12、redis集群的主从复制模型是怎样的" tabindex="-1">12、Redis集群的主从复制模型是怎样的？ <a class="header-anchor" href="#_12、redis集群的主从复制模型是怎样的" aria-label="Permalink to &quot;12、Redis集群的主从复制模型是怎样的？&quot;">​</a></h3><h3 id="_13、redis如何做大量数据插入" tabindex="-1">13、Redis如何做大量数据插入？ <a class="header-anchor" href="#_13、redis如何做大量数据插入" aria-label="Permalink to &quot;13、Redis如何做大量数据插入？&quot;">​</a></h3><h3 id="_14、都有哪些办法可以降低-redis-的内存使用情况呢" tabindex="-1">14、都有哪些办法可以降低 Redis 的内存使用情况呢? <a class="header-anchor" href="#_14、都有哪些办法可以降低-redis-的内存使用情况呢" aria-label="Permalink to &quot;14、都有哪些办法可以降低 Redis 的内存使用情况呢?&quot;">​</a></h3><h3 id="_15、redis常见性能问题和解决方案" tabindex="-1">15、Redis常见性能问题和解决方案： <a class="header-anchor" href="#_15、redis常见性能问题和解决方案" aria-label="Permalink to &quot;15、Redis常见性能问题和解决方案：&quot;">​</a></h3><h3 id="_16、为什么redis需要把所有数据放到内存中" tabindex="-1">16、为什么Redis需要把所有数据放到内存中？ <a class="header-anchor" href="#_16、为什么redis需要把所有数据放到内存中" aria-label="Permalink to &quot;16、为什么Redis需要把所有数据放到内存中？&quot;">​</a></h3><h3 id="_17、分布式redis是前期做还是后期规模上来了再做好-为什么" tabindex="-1">17、分布式Redis是前期做还是后期规模上来了再做好？为什么？ <a class="header-anchor" href="#_17、分布式redis是前期做还是后期规模上来了再做好-为什么" aria-label="Permalink to &quot;17、分布式Redis是前期做还是后期规模上来了再做好？为什么？&quot;">​</a></h3><h3 id="_18、redis-的持久化机制是什么-各自的优缺点" tabindex="-1">18、Redis 的持久化机制是什么？各自的优缺点？ <a class="header-anchor" href="#_18、redis-的持久化机制是什么-各自的优缺点" aria-label="Permalink to &quot;18、Redis 的持久化机制是什么？各自的优缺点？&quot;">​</a></h3><h3 id="_19、如果有大量的key需要设置同一时间过期-一般需要注意什么" tabindex="-1">19、如果有大量的key需要设置同一时间过期，一般需要注意什么？ <a class="header-anchor" href="#_19、如果有大量的key需要设置同一时间过期-一般需要注意什么" aria-label="Permalink to &quot;19、如果有大量的key需要设置同一时间过期，一般需要注意什么？&quot;">​</a></h3><h3 id="_20、缓冲内存" tabindex="-1">20、缓冲内存 <a class="header-anchor" href="#_20、缓冲内存" aria-label="Permalink to &quot;20、缓冲内存&quot;">​</a></h3><h3 id="_21、说说redis哈希槽的概念" tabindex="-1">21、说说Redis哈希槽的概念？ <a class="header-anchor" href="#_21、说说redis哈希槽的概念" aria-label="Permalink to &quot;21、说说Redis哈希槽的概念？&quot;">​</a></h3><h3 id="_22、redis有哪几种数据淘汰策略" tabindex="-1">22、Redis有哪几种数据淘汰策略？ <a class="header-anchor" href="#_22、redis有哪几种数据淘汰策略" aria-label="Permalink to &quot;22、Redis有哪几种数据淘汰策略？&quot;">​</a></h3><h3 id="_23、redis支持哪几种数据类型" tabindex="-1">23、Redis支持哪几种数据类型？ <a class="header-anchor" href="#_23、redis支持哪几种数据类型" aria-label="Permalink to &quot;23、Redis支持哪几种数据类型？&quot;">​</a></h3><h3 id="_24、为什么redis是单线程的" tabindex="-1">24、为什么Redis是单线程的？ <a class="header-anchor" href="#_24、为什么redis是单线程的" aria-label="Permalink to &quot;24、为什么Redis是单线程的？&quot;">​</a></h3><h3 id="_25、redis相比memcached有哪些优势" tabindex="-1">25、Redis相比Memcached有哪些优势： <a class="header-anchor" href="#_25、redis相比memcached有哪些优势" aria-label="Permalink to &quot;25、Redis相比Memcached有哪些优势：&quot;">​</a></h3><h3 id="_26、redis-如何设置密码及验证密码" tabindex="-1">26、Redis 如何设置密码及验证密码？ <a class="header-anchor" href="#_26、redis-如何设置密码及验证密码" aria-label="Permalink to &quot;26、Redis 如何设置密码及验证密码？&quot;">​</a></h3><h3 id="_27、-免费领取架构资料。" tabindex="-1">27、，免费领取架构资料。 <a class="header-anchor" href="#_27、-免费领取架构资料。" aria-label="Permalink to &quot;27、，免费领取架构资料。&quot;">​</a></h3><h3 id="_28、redis-提供-6种数据淘汰策略" tabindex="-1">28、Redis 提供 6种数据淘汰策略： <a class="header-anchor" href="#_28、redis-提供-6种数据淘汰策略" aria-label="Permalink to &quot;28、Redis 提供 6种数据淘汰策略：&quot;">​</a></h3><h3 id="_29、redis-module-实现布隆过滤器" tabindex="-1">29、Redis Module 实现布隆过滤器 <a class="header-anchor" href="#_29、redis-module-实现布隆过滤器" aria-label="Permalink to &quot;29、Redis Module 实现布隆过滤器&quot;">​</a></h3><h3 id="_30、redis集群会有写操作丢失吗-为什么" tabindex="-1">30、Redis集群会有写操作丢失吗？为什么？ <a class="header-anchor" href="#_30、redis集群会有写操作丢失吗-为什么" aria-label="Permalink to &quot;30、Redis集群会有写操作丢失吗？为什么？&quot;">​</a></h3>',50),o=[d];function E(t,A,n,h,l,B){return a(),s("div",null,o)}const b=e(i,[["render",E]]);export{u as __pageData,b as default};