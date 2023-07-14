import{_ as a,o as s,c as n,V as e}from"./chunks/framework.c6d8cbec.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/大数据/大数据-04.md","filePath":"interview/backend/大数据/大数据-04.md"}'),l={name:"interview/backend/大数据/大数据-04.md"},o=e(`<h3 id="_1、请用java实现非递归二分查询" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%A4%A7%E6%95%B0%E6%8D%AE/%E5%A4%A7%E6%95%B0%E6%8D%AE%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#1%E8%AF%B7%E7%94%A8java%E5%AE%9E%E7%8E%B0%E9%9D%9E%E9%80%92%E5%BD%92%E4%BA%8C%E5%88%86%E6%9F%A5%E8%AF%A2" target="_blank" rel="noreferrer">1、请用java实现非递归二分查询</a> <a class="header-anchor" href="#_1、请用java实现非递归二分查询" aria-label="Permalink to &quot;[1、请用java实现非递归二分查询](https://gitee.com/souyunku/DevBooks/blob/master/docs/大数据/大数据最新2021年面试题及答案，汇总版.md#1请用java实现非递归二分查询)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">public class BinarySearchClass</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">{</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">public static int binary_search(int[] array, int value)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">{</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> int beginIndex = 0;// 低位下标</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> int endIndex = array.length - 1;// 高位下标</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> int midIndex = -1;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> while (beginIndex &lt;= endIndex) {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">     midIndex = beginIndex + (endIndex - beginIndex) / 2;//防止溢出</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">     if (value == array[midIndex]) {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">         return midIndex;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">     } else if (value &lt; array[midIndex]) {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">         endIndex = midIndex - 1;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">     } else {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">         beginIndex = midIndex + 1;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">     }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> return -1;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> //找到了，返回找到的数值的下标，没找到，返回-1</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">//start 提示：自动阅卷起始唯一标识，请勿删除或增加。</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">public static void main(String[] args)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">{</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> System.out.println(&quot;Start...&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> int[] myArray = new int[] { 1, 2, 3, 5, 6, 7, 8, 9 };</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> System.out.println(&quot;查找数字8的下标：&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> System.out.println(binary_search(myArray, 8));</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">//end //提示：自动阅卷结束唯一标识，请勿删除或增加。</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class BinarySearchClass</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public static int binary_search(int[] array, int value)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> int beginIndex = 0;// 低位下标</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> int endIndex = array.length - 1;// 高位下标</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> int midIndex = -1;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> while (beginIndex &lt;= endIndex) {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">     midIndex = beginIndex + (endIndex - beginIndex) / 2;//防止溢出</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">     if (value == array[midIndex]) {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">         return midIndex;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">     } else if (value &lt; array[midIndex]) {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">         endIndex = midIndex - 1;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">     } else {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">         beginIndex = midIndex + 1;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">     }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> return -1;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> //找到了，返回找到的数值的下标，没找到，返回-1</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//start 提示：自动阅卷起始唯一标识，请勿删除或增加。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public static void main(String[] args)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> System.out.println(&quot;Start...&quot;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> int[] myArray = new int[] { 1, 2, 3, 5, 6, 7, 8, 9 };</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> System.out.println(&quot;查找数字8的下标：&quot;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> System.out.println(binary_search(myArray, 8));</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//end //提示：自动阅卷结束唯一标识，请勿删除或增加。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="_2、是客户端还是namenode决定输入的分片" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%A4%A7%E6%95%B0%E6%8D%AE/%E5%A4%A7%E6%95%B0%E6%8D%AE%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#2%E6%98%AF%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%BF%98%E6%98%AFnamenode%E5%86%B3%E5%AE%9A%E8%BE%93%E5%85%A5%E7%9A%84%E5%88%86%E7%89%87" target="_blank" rel="noreferrer">2、是客户端还是Namenode决定输入的分片？</a> <a class="header-anchor" href="#_2、是客户端还是namenode决定输入的分片" aria-label="Permalink to &quot;[2、是客户端还是Namenode决定输入的分片？](https://gitee.com/souyunku/DevBooks/blob/master/docs/大数据/大数据最新2021年面试题及答案，汇总版.md#2是客户端还是namenode决定输入的分片)&quot;">​</a></h3><p>这并不是客户端决定的，在配置文件中以及决定分片细则。</p><h3 id="_3、mapred-job-tracker命令的作用" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%A4%A7%E6%95%B0%E6%8D%AE/%E5%A4%A7%E6%95%B0%E6%8D%AE%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#3mapredjobtracker%E5%91%BD%E4%BB%A4%E7%9A%84%E4%BD%9C%E7%94%A8" target="_blank" rel="noreferrer">3、mapred.job.tracker命令的作用？</a> <a class="header-anchor" href="#_3、mapred-job-tracker命令的作用" aria-label="Permalink to &quot;[3、mapred.job.tracker命令的作用？](https://gitee.com/souyunku/DevBooks/blob/master/docs/大数据/大数据最新2021年面试题及答案，汇总版.md#3mapredjobtracker命令的作用)&quot;">​</a></h3><p>可以让你知道哪个节点是Job Tracker。</p><h3 id="_4、全分布模式又有什么注意点" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%A4%A7%E6%95%B0%E6%8D%AE/%E5%A4%A7%E6%95%B0%E6%8D%AE%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#4%E5%85%A8%E5%88%86%E5%B8%83%E6%A8%A1%E5%BC%8F%E5%8F%88%E6%9C%89%E4%BB%80%E4%B9%88%E6%B3%A8%E6%84%8F%E7%82%B9" target="_blank" rel="noreferrer">4、全分布模式又有什么注意点？</a> <a class="header-anchor" href="#_4、全分布模式又有什么注意点" aria-label="Permalink to &quot;[4、全分布模式又有什么注意点？](https://gitee.com/souyunku/DevBooks/blob/master/docs/大数据/大数据最新2021年面试题及答案，汇总版.md#4全分布模式又有什么注意点)&quot;">​</a></h3><p>全分布模式通常被用于生产环境，这里我们使用N台主机组成一个Hadoop集群，Hadoop守护进程运行在每台主机之上。这里会存在Namenode运行的主机，Datanode运行的主机，以及task tracker运行的主机。在分布式环境下，主节点和从节点会分开。</p><h3 id="_5、hive-跟hbase的区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%A4%A7%E6%95%B0%E6%8D%AE/%E5%A4%A7%E6%95%B0%E6%8D%AE%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#5hive-%E8%B7%9Fhbase%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">5、hive 跟hbase的区别</a> <a class="header-anchor" href="#_5、hive-跟hbase的区别" aria-label="Permalink to &quot;[5、hive 跟hbase的区别](https://gitee.com/souyunku/DevBooks/blob/master/docs/大数据/大数据最新2021年面试题及答案，汇总版.md#5hive-跟hbase的区别)&quot;">​</a></h3><p>共同点都是用hadoop作为底层存储</p><p>区别：hive是为了减少mrjobs编写工作的批处理系统，处理速度慢。hive本身不存储数据和计算数据，依赖于hadoop，纯逻辑表</p><p>hbase是为了hadoop对实时操作的缺陷的项目，处理速度快，是物理表，提供一个超大的内存hash表，方便查询操作</p><p>如果全表扫描用 hive+hadoop</p><p>如果用索引查询与hbase+hadoop</p><p>是处理数据库文件还是读取文本文件</p><p>先读取文本文件进行清洗，然后放入hdfs，进行处理</p><p>或者直接读取MySQL中格式化数据</p><h3 id="_6、请列出正常工作的hadoop集群中hadoop都需要启动哪些进程-他们的作用分别是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%A4%A7%E6%95%B0%E6%8D%AE/%E5%A4%A7%E6%95%B0%E6%8D%AE%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#6%E8%AF%B7%E5%88%97%E5%87%BA%E6%AD%A3%E5%B8%B8%E5%B7%A5%E4%BD%9C%E7%9A%84hadoop%E9%9B%86%E7%BE%A4%E4%B8%ADhadoop%E9%83%BD%E9%9C%80%E8%A6%81%E5%90%AF%E5%8A%A8%E5%93%AA%E4%BA%9B%E8%BF%9B%E7%A8%8B%E4%BB%96%E4%BB%AC%E7%9A%84%E4%BD%9C%E7%94%A8%E5%88%86%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">6、请列出正常工作的hadoop集群中hadoop都需要启动哪些进程，他们的作用分别是什么？</a> <a class="header-anchor" href="#_6、请列出正常工作的hadoop集群中hadoop都需要启动哪些进程-他们的作用分别是什么" aria-label="Permalink to &quot;[6、请列出正常工作的hadoop集群中hadoop都需要启动哪些进程，他们的作用分别是什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/大数据/大数据最新2021年面试题及答案，汇总版.md#6请列出正常工作的hadoop集群中hadoop都需要启动哪些进程他们的作用分别是什么)&quot;">​</a></h3><p>NameNode: HDFS的守护进程，负责记录文件是如何分割成数据块，以及这些数据块分别被存储到那些数据节点上，它的主要功能是对内存及IO进行集中管理</p><p>Secondary NameNode：辅助后台程序，与NameNode进行通信，以便定期保存HDFS元数据的快照。</p><p>DataNode：负责把HDFS数据块读写到本地的文件系统。</p><p>JobTracker：负责分配task，并监控所有运行的task。</p><p>TaskTracker：负责执行具体的task，并与JobTracker进行交互。</p><h3 id="_7、kafkautils-createdstream-和-kafkautils-createdirectstream-区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%A4%A7%E6%95%B0%E6%8D%AE/%E5%A4%A7%E6%95%B0%E6%8D%AE%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#7kafkautilscreatedstream-%E5%92%8C-kafkautilscreatedirectstream-%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">7、KafkaUtils.createDstream 和 KafkaUtils.createDirectstream 区别</a> <a class="header-anchor" href="#_7、kafkautils-createdstream-和-kafkautils-createdirectstream-区别" aria-label="Permalink to &quot;[7、KafkaUtils.createDstream 和 KafkaUtils.createDirectstream 区别](https://gitee.com/souyunku/DevBooks/blob/master/docs/大数据/大数据最新2021年面试题及答案，汇总版.md#7kafkautilscreatedstream-和-kafkautilscreatedirectstream-区别)&quot;">​</a></h3><p>使用一个 receiver 接收器接收数据，接收到的数据将会保存到executor中，然后通过sparkStreaming 启动job来处理数据，默认不会丢失，可启动WAL日志，保存到hdfs上</p><p>spark.streaming.recever.writeAheadLog.enable=true 同时开启 StorageLevel.MeMORY_AND_DISK_SER_2</p><p>KafkaUtils.createDirectstream方式，他定期从Kafka的分区中查询偏移量，再根据偏移量范围在每个batch里面处理数据</p><p>优点：简化并行 高效 恰好一次被消费</p><p>hbase</p><h3 id="_8、kafka与传统消息队列的区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%A4%A7%E6%95%B0%E6%8D%AE/%E5%A4%A7%E6%95%B0%E6%8D%AE%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#8kafka%E4%B8%8E%E4%BC%A0%E7%BB%9F%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">8、Kafka与传统消息队列的区别</a> <a class="header-anchor" href="#_8、kafka与传统消息队列的区别" aria-label="Permalink to &quot;[8、Kafka与传统消息队列的区别](https://gitee.com/souyunku/DevBooks/blob/master/docs/大数据/大数据最新2021年面试题及答案，汇总版.md#8kafka与传统消息队列的区别)&quot;">​</a></h3><p>RabbitMQ吞吐量稍差Kafka，支持对消息可靠的传递，支持事务，不支持批量的操作，存储于内存或者磁盘</p><p>Kafka遵从一般的MQ结构，producer，broker，consumer，以consumer为中心，消费的消费信息保存在客户端consumer上，consumer根据消费的点，从broker批量pull数据；无消息确认机制</p><p>Kafka具有搞得吞吐量，内部采用消息的批量处理，数据的存储和获取是本地磁盘顺序批量操作，消息处理的效率高</p><p>Kafka 的broker支持主备模式</p><p>Kafka 负载均衡 Zookeeper方向</p><p>Kafka采用Zookeeper进行管理，可以注册topic到Zookeeper上，通过zoo的协调机制，生产者保存对应topic的broker消息，可以随机或者轮询发送到broker上；并且生产者可以基于予以定义指定分片，消息发送到broker的某分片上</p><h3 id="_9、master文件是否提供了多个入口" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%A4%A7%E6%95%B0%E6%8D%AE/%E5%A4%A7%E6%95%B0%E6%8D%AE%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#9master%E6%96%87%E4%BB%B6%E6%98%AF%E5%90%A6%E6%8F%90%E4%BE%9B%E4%BA%86%E5%A4%9A%E4%B8%AA%E5%85%A5%E5%8F%A3" target="_blank" rel="noreferrer">9、Master文件是否提供了多个入口？</a> <a class="header-anchor" href="#_9、master文件是否提供了多个入口" aria-label="Permalink to &quot;[9、Master文件是否提供了多个入口？](https://gitee.com/souyunku/DevBooks/blob/master/docs/大数据/大数据最新2021年面试题及答案，汇总版.md#9master文件是否提供了多个入口)&quot;">​</a></h3><p>是的你可以拥有多个Master文件接口。</p><h3 id="_10、spark的数据本地性有哪几种" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/%E5%A4%A7%E6%95%B0%E6%8D%AE/%E5%A4%A7%E6%95%B0%E6%8D%AE%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E6%B1%87%E6%80%BB%E7%89%88.md#10spark%E7%9A%84%E6%95%B0%E6%8D%AE%E6%9C%AC%E5%9C%B0%E6%80%A7%E6%9C%89%E5%93%AA%E5%87%A0%E7%A7%8D" target="_blank" rel="noreferrer">10、Spark的数据本地性有哪几种？</a> <a class="header-anchor" href="#_10、spark的数据本地性有哪几种" aria-label="Permalink to &quot;[10、Spark的数据本地性有哪几种？](https://gitee.com/souyunku/DevBooks/blob/master/docs/大数据/大数据最新2021年面试题及答案，汇总版.md#10spark的数据本地性有哪几种)&quot;">​</a></h3><p>Spark中的数据本地性有三种：</p><p><strong>1、</strong> PROCESS_LOCAL是指读取缓存在本地节点的数据</p><p><strong>2、</strong> NODE_LOCAL是指读取本地节点硬盘数据</p><p><strong>3、</strong> ANY是指读取非本地节点数据</p><p>通常读取数据PROCESS_LOCAL&gt;NODE_LOCAL&gt;ANY，尽量使数据以PROCESS_LOCAL或NODE_LOCAL方式读取。其中PROCESS_LOCAL还和cache有关，如果RDD经常用的话将该RDD cache到内存中，注意，由于cache是lazy的，所以必须通过一个action的触发，才能真正的将该RDD cache到内存中。</p><h3 id="_11、spark的shuffle过程" tabindex="-1">11、Spark的shuffle过程？ <a class="header-anchor" href="#_11、spark的shuffle过程" aria-label="Permalink to &quot;11、Spark的shuffle过程？&quot;">​</a></h3><h3 id="_12、fsimage和edit的区别" tabindex="-1">12、fsimage和edit的区别？ <a class="header-anchor" href="#_12、fsimage和edit的区别" aria-label="Permalink to &quot;12、fsimage和edit的区别？&quot;">​</a></h3><h3 id="_13、list与set的区别" tabindex="-1">13、List与set的区别 <a class="header-anchor" href="#_13、list与set的区别" aria-label="Permalink to &quot;13、List与set的区别&quot;">​</a></h3><h3 id="_14、海量日志数据-提取出某日访问百度次数最多的那个ip。" tabindex="-1">14、海量日志数据，提取出某日访问百度次数最多的那个IP。 <a class="header-anchor" href="#_14、海量日志数据-提取出某日访问百度次数最多的那个ip。" aria-label="Permalink to &quot;14、海量日志数据，提取出某日访问百度次数最多的那个IP。&quot;">​</a></h3><h3 id="_15、storm特点" tabindex="-1">15、storm特点 <a class="header-anchor" href="#_15、storm特点" aria-label="Permalink to &quot;15、storm特点&quot;">​</a></h3><h3 id="_16、hbase宕机如何处理" tabindex="-1">16、Hbase宕机如何处理 <a class="header-anchor" href="#_16、hbase宕机如何处理" aria-label="Permalink to &quot;16、Hbase宕机如何处理&quot;">​</a></h3><h3 id="_17、hbase行键列族的概念-物理模型-表的设计原则" tabindex="-1">17、Hbase行键列族的概念，物理模型，表的设计原则？ <a class="header-anchor" href="#_17、hbase行键列族的概念-物理模型-表的设计原则" aria-label="Permalink to &quot;17、Hbase行键列族的概念，物理模型，表的设计原则？&quot;">​</a></h3><h3 id="_18、spark为什么要持久化-一般什么场景下要进行persist操作" tabindex="-1">18、Spark为什么要持久化，一般什么场景下要进行persist操作？ <a class="header-anchor" href="#_18、spark为什么要持久化-一般什么场景下要进行persist操作" aria-label="Permalink to &quot;18、Spark为什么要持久化，一般什么场景下要进行persist操作？&quot;">​</a></h3><h3 id="_19、有一个1g大小的一个文件-里面每一行是一个词-词的大小不超过16字节-内存限制大小是1m。返回频数最高的100个词。" tabindex="-1">19、有一个1G大小的一个文件，里面每一行是一个词，词的大小不超过16字节，内存限制大小是1M。返回频数最高的100个词。 <a class="header-anchor" href="#_19、有一个1g大小的一个文件-里面每一行是一个词-词的大小不超过16字节-内存限制大小是1m。返回频数最高的100个词。" aria-label="Permalink to &quot;19、有一个1G大小的一个文件，里面每一行是一个词，词的大小不超过16字节，内存限制大小是1M。返回频数最高的100个词。&quot;">​</a></h3><h3 id="_20、ssh中的注意点还包括" tabindex="-1">20、SSH中的注意点还包括？ <a class="header-anchor" href="#_20、ssh中的注意点还包括" aria-label="Permalink to &quot;20、SSH中的注意点还包括？&quot;">​</a></h3><h3 id="_21、存储特点" tabindex="-1">21、存储特点 <a class="header-anchor" href="#_21、存储特点" aria-label="Permalink to &quot;21、存储特点&quot;">​</a></h3><h3 id="_22、请简述hadoop怎样实现二级排序-就是对key和value双排序" tabindex="-1">22、请简述hadoop怎样实现二级排序（就是对key和value双排序） <a class="header-anchor" href="#_22、请简述hadoop怎样实现二级排序-就是对key和value双排序" aria-label="Permalink to &quot;22、请简述hadoop怎样实现二级排序（就是对key和value双排序）&quot;">​</a></h3><h3 id="_23、现场出问题测试mapreduce掌握情况和hive的ql语言掌握情况" tabindex="-1">23、现场出问题测试mapreduce掌握情况和hive的ql语言掌握情况 <a class="header-anchor" href="#_23、现场出问题测试mapreduce掌握情况和hive的ql语言掌握情况" aria-label="Permalink to &quot;23、现场出问题测试mapreduce掌握情况和hive的ql语言掌握情况&quot;">​</a></h3><h3 id="_24、hadoop数据倾斜及解决办法" tabindex="-1">24、hadoop数据倾斜及解决办法 <a class="header-anchor" href="#_24、hadoop数据倾斜及解决办法" aria-label="Permalink to &quot;24、hadoop数据倾斜及解决办法&quot;">​</a></h3><h3 id="_25、hdfs读取文件的步骤" tabindex="-1">25、HDFS读取文件的步骤 <a class="header-anchor" href="#_25、hdfs读取文件的步骤" aria-label="Permalink to &quot;25、HDFS读取文件的步骤&quot;">​</a></h3><h3 id="_26、sqoop在导入到mysql中-如果不重复导入数据-如果数据存在问题-sqoop如何处理" tabindex="-1">26、sqoop在导入到MySQL中，如果不重复导入数据，如果数据存在问题，sqoop如何处理？ <a class="header-anchor" href="#_26、sqoop在导入到mysql中-如果不重复导入数据-如果数据存在问题-sqoop如何处理" aria-label="Permalink to &quot;26、sqoop在导入到MySQL中，如果不重复导入数据，如果数据存在问题，sqoop如何处理？&quot;">​</a></h3><h3 id="_27、什么是udf" tabindex="-1">27、什么是udf <a class="header-anchor" href="#_27、什么是udf" aria-label="Permalink to &quot;27、什么是udf&quot;">​</a></h3><h3 id="_28、hadoop的textinputformat作用是什么-如何自定义实现" tabindex="-1">28、hadoop的TextInputFormat作用是什么，如何自定义实现？ <a class="header-anchor" href="#_28、hadoop的textinputformat作用是什么-如何自定义实现" aria-label="Permalink to &quot;28、hadoop的TextInputFormat作用是什么，如何自定义实现？&quot;">​</a></h3><h3 id="_29、hbase内部机制是什么" tabindex="-1">29、hbase内部机制是什么 <a class="header-anchor" href="#_29、hbase内部机制是什么" aria-label="Permalink to &quot;29、hbase内部机制是什么&quot;">​</a></h3><h3 id="_30、如何退出输入模式" tabindex="-1">30、如何退出输入模式？ <a class="header-anchor" href="#_30、如何退出输入模式" aria-label="Permalink to &quot;30、如何退出输入模式？&quot;">​</a></h3><h3 id="_31、简述hadoop-spark-storm-hive的特点及使用场景" tabindex="-1">31、简述hadoop spark storm hive的特点及使用场景 <a class="header-anchor" href="#_31、简述hadoop-spark-storm-hive的特点及使用场景" aria-label="Permalink to &quot;31、简述hadoop spark storm hive的特点及使用场景&quot;">​</a></h3><h3 id="_32、combine出现在哪个过程" tabindex="-1">32、combine出现在哪个过程 <a class="header-anchor" href="#_32、combine出现在哪个过程" aria-label="Permalink to &quot;32、combine出现在哪个过程&quot;">​</a></h3>`,66),p=[o];function r(t,c,i,E,d,h){return s(),n("div",null,p)}const u=a(l,[["render",r]]);export{A as __pageData,u as default};
