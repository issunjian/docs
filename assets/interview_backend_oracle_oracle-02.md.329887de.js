import{_ as e,o as a,c as r,V as t}from"./chunks/framework.c6d8cbec.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/oracle/oracle-02.md","filePath":"interview/backend/oracle/oracle-02.md"}'),o={name:"interview/backend/oracle/oracle-02.md"},l=t('<h3 id="_1、fact-table上需要建立何种索引" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#1fact-table%E4%B8%8A%E9%9C%80%E8%A6%81%E5%BB%BA%E7%AB%8B%E4%BD%95%E7%A7%8D%E7%B4%A2%E5%BC%95" target="_blank" rel="noreferrer">1、FACT Table上需要建立何种索引?</a> <a class="header-anchor" href="#_1、fact-table上需要建立何种索引" aria-label="Permalink to &quot;[1、FACT Table上需要建立何种索引?](https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle最新2021年面试题大汇总，附答案.md#1fact-table上需要建立何种索引)&quot;">​</a></h3><p>位图索引 (bitmap index)</p><h3 id="_2、给出两种相关约束" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#2%E7%BB%99%E5%87%BA%E4%B8%A4%E7%A7%8D%E7%9B%B8%E5%85%B3%E7%BA%A6%E6%9D%9F" target="_blank" rel="noreferrer">2、给出两种相关约束?</a> <a class="header-anchor" href="#_2、给出两种相关约束" aria-label="Permalink to &quot;[2、给出两种相关约束?](https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle最新2021年面试题大汇总，附答案.md#2给出两种相关约束)&quot;">​</a></h3><p>主键和外键</p><h3 id="_3、解释归档和非归档模式之间的不同和它们各自的优缺点" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#3%E8%A7%A3%E9%87%8A%E5%BD%92%E6%A1%A3%E5%92%8C%E9%9D%9E%E5%BD%92%E6%A1%A3%E6%A8%A1%E5%BC%8F%E4%B9%8B%E9%97%B4%E7%9A%84%E4%B8%8D%E5%90%8C%E5%92%8C%E5%AE%83%E4%BB%AC%E5%90%84%E8%87%AA%E7%9A%84%E4%BC%98%E7%BC%BA%E7%82%B9" target="_blank" rel="noreferrer">3、解释归档和非归档模式之间的不同和它们各自的优缺点</a> <a class="header-anchor" href="#_3、解释归档和非归档模式之间的不同和它们各自的优缺点" aria-label="Permalink to &quot;[3、解释归档和非归档模式之间的不同和它们各自的优缺点](https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle最新2021年面试题大汇总，附答案.md#3解释归档和非归档模式之间的不同和它们各自的优缺点)&quot;">​</a></h3><p>归档模式是指你可以备份所有的数据库 transactions并恢复到任意一个时间点。非归档模式则相反，不能恢复到任意一个时间点。</p><p>但是非归档模式可以带来数据库性能上的少许提高</p><h3 id="_4、delete-与truncate区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#4delete-%E4%B8%8Etruncate%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">4、delete 与Truncate区别？</a> <a class="header-anchor" href="#_4、delete-与truncate区别" aria-label="Permalink to &quot;[4、delete 与Truncate区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle最新2021年面试题大汇总，附答案.md#4delete-与truncate区别)&quot;">​</a></h3><p><strong>1、</strong> Truncate 是DDL 语句，DELETE 是DML语句。</p><p><strong>2、</strong> Truncate 的速度远快于DELETE；</p><p>原因是： 当执行DELETE操作时所有表数据先被COPY到回滚表空间，数据量不同花费时间长短不一。而TRUNCATE 是直接删除数据不进回滚表空间。</p><p><strong>1、</strong> delete 数据可以运行Rollback 进行数据回滚。而Truncate 则是永久删除不能回滚。</p><p><strong>2、</strong> Truncate 操作不会触发表上的delete触发器，而delete 会正常触发。</p><p><strong>3、</strong> Truncate 语句不能带where 条件意味着只能全部数据删除，而DELETE可带where 条件进行删除数据。</p><p><strong>4、</strong> Truncate 操作会重置表的高水位线（High Water Mark）,而delete 不会。</p><h3 id="_5、哪个后台进程刷新materialized-views" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#5%E5%93%AA%E4%B8%AA%E5%90%8E%E5%8F%B0%E8%BF%9B%E7%A8%8B%E5%88%B7%E6%96%B0materialized-views" target="_blank" rel="noreferrer">5、哪个后台进程刷新materialized views?</a> <a class="header-anchor" href="#_5、哪个后台进程刷新materialized-views" aria-label="Permalink to &quot;[5、哪个后台进程刷新materialized views?](https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle最新2021年面试题大汇总，附答案.md#5哪个后台进程刷新materialized-views)&quot;">​</a></h3><p>The Job Queue Processes.</p><h3 id="_6、mysql数据库与oracle-数据库有什么区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#6mysql%E6%95%B0%E6%8D%AE%E5%BA%93%E4%B8%8Eoracle-%E6%95%B0%E6%8D%AE%E5%BA%93%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">6、MySQL数据库与Oracle 数据库有什么区别？</a> <a class="header-anchor" href="#_6、mysql数据库与oracle-数据库有什么区别" aria-label="Permalink to &quot;[6、MySQL数据库与Oracle 数据库有什么区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle最新2021年面试题大汇总，附答案.md#6mysql数据库与oracle-数据库有什么区别)&quot;">​</a></h3><p><strong>1、</strong> 应用方面，MySQL 是中小型应用的数据库。一般用于个人和中小型企业。Oracle 属于大型数据库，一般用于具有相当规模的企业应用。</p><p><strong>2、</strong> 自动增长的数据类型方面： MySQL有自动增长的数据类型。Oracle 没有自动增长的数据类型。需要建立一个自增序列。</p><p><strong>3、</strong> group by 用法： MySQL 中group by 在SELECT 语句中可以随意使用，但在ORACLE 中如果查询语句中有组函数，那么其他列必须是组函数处理过的或者是group by子句中的列，否则会报错。</p><p><strong>4、</strong> 引导方面： MySQL中可以用单引号、双引号包起字符串，Oracle 中只可以用单引号包起字符串</p><h3 id="_7、oracle-分区在什么情况下使用" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#7oracle-%E5%88%86%E5%8C%BA%E5%9C%A8%E4%BB%80%E4%B9%88%E6%83%85%E5%86%B5%E4%B8%8B%E4%BD%BF%E7%94%A8" target="_blank" rel="noreferrer">7、Oracle 分区在什么情况下使用</a> <a class="header-anchor" href="#_7、oracle-分区在什么情况下使用" aria-label="Permalink to &quot;[7、Oracle 分区在什么情况下使用](https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle最新2021年面试题大汇总，附答案.md#7oracle-分区在什么情况下使用)&quot;">​</a></h3><p>当一张表的数据量到达上亿行的时候，表的性能会严重降低，这个时候就需要用到分区了，通过划分成多个小表，并在每个小表上建立本地索引可以大大缩小索引数据文件的大小，从而更快的定位到目标数据来提升访问性能。</p><p>分区除了可以用来提升访问性能外，还因为可以指定分区所使用的表空间，因此也用来做数据的生命周期管理。当前需要频繁使用的活跃数据可以放到访问速度更快但价格也更贵的存储设备上，而2、3年前的历史数据，或者叫冷数据可以放到更廉价、速度更低的设备上。从而降低存储费用。</p><h3 id="_8、oracle中存储过程-游标和函数的区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#8oracle%E4%B8%AD%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B%E6%B8%B8%E6%A0%87%E5%92%8C%E5%87%BD%E6%95%B0%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">8、oracle中存储过程，游标和函数的区别</a> <a class="header-anchor" href="#_8、oracle中存储过程-游标和函数的区别" aria-label="Permalink to &quot;[8、oracle中存储过程，游标和函数的区别](https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle最新2021年面试题大汇总，附答案.md#8oracle中存储过程游标和函数的区别)&quot;">​</a></h3><p><strong>1、</strong> 游标类似指针，游标可以执行多个不相关的操作.如果希望当产生了结果集后,对结果集中的数据进行多 种不相关的数据操作</p><p><strong>2、</strong> 函数可以理解函数是存储过程的一种； 函数可以没有参数,但是一定需要一个返回值，存储过程可以没有参数,不需要返回值；两者都可以通过out参数返回值, 如果需要返回多个</p><p><strong>3、</strong> 参数则建议使用存储过程；在sql数据操纵语句中只能调用函数而不能调用存储过程</p><h3 id="_9、如何增加buffer-cache的命中率" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#9%E5%A6%82%E4%BD%95%E5%A2%9E%E5%8A%A0buffer-cache%E7%9A%84%E5%91%BD%E4%B8%AD%E7%8E%87" target="_blank" rel="noreferrer">9、如何增加buffer cache的命中率？</a> <a class="header-anchor" href="#_9、如何增加buffer-cache的命中率" aria-label="Permalink to &quot;[9、如何增加buffer cache的命中率？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle最新2021年面试题大汇总，附答案.md#9如何增加buffer-cache的命中率)&quot;">​</a></h3><p>在数据库较繁忙时，适用buffer cache advisory 工具，查询v$db_cache_advice . 如果有必要更改，可以使用 alter system set</p><p>db_cache_size 命令</p><h3 id="_10、使用索引的理由" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#10%E4%BD%BF%E7%94%A8%E7%B4%A2%E5%BC%95%E7%9A%84%E7%90%86%E7%94%B1" target="_blank" rel="noreferrer">10、使用索引的理由</a> <a class="header-anchor" href="#_10、使用索引的理由" aria-label="Permalink to &quot;[10、使用索引的理由](https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle最新2021年面试题大汇总，附答案.md#10使用索引的理由)&quot;">​</a></h3><p>快速访问表中的data block</p><h3 id="_11、如何搜集表的各种状态数据" tabindex="-1">11、如何搜集表的各种状态数据？ <a class="header-anchor" href="#_11、如何搜集表的各种状态数据" aria-label="Permalink to &quot;11、如何搜集表的各种状态数据？&quot;">​</a></h3><h3 id="_12、fact-table上需要建立何种索引" tabindex="-1">12、FACT Table上需要建立何种索引？ <a class="header-anchor" href="#_12、fact-table上需要建立何种索引" aria-label="Permalink to &quot;12、FACT Table上需要建立何种索引？&quot;">​</a></h3><h3 id="_13、提及11g版本2中oracle-forms-services中引入的新功能是什么" tabindex="-1">13、提及11g版本2中Oracle Forms Services中引入的新功能是什么? <a class="header-anchor" href="#_13、提及11g版本2中oracle-forms-services中引入的新功能是什么" aria-label="Permalink to &quot;13、提及11g版本2中Oracle Forms Services中引入的新功能是什么?&quot;">​</a></h3><h3 id="_14、说下如何使用oracle的游标" tabindex="-1">14、说下如何使用Oracle的游标？ <a class="header-anchor" href="#_14、说下如何使用oracle的游标" aria-label="Permalink to &quot;14、说下如何使用Oracle的游标？&quot;">​</a></h3><h3 id="_15、比较truncate和delete-命令" tabindex="-1">15、比较truncate和delete 命令 <a class="header-anchor" href="#_15、比较truncate和delete-命令" aria-label="Permalink to &quot;15、比较truncate和delete 命令&quot;">​</a></h3><h3 id="_16、如何判断谁往表里增加了一条纪录" tabindex="-1">16、如何判断谁往表里增加了一条纪录？ <a class="header-anchor" href="#_16、如何判断谁往表里增加了一条纪录" aria-label="Permalink to &quot;16、如何判断谁往表里增加了一条纪录？&quot;">​</a></h3><h3 id="_17、说一下-oracle的分区有几种" tabindex="-1">17、说一下，Oracle的分区有几种 <a class="header-anchor" href="#_17、说一下-oracle的分区有几种" aria-label="Permalink to &quot;17、说一下，Oracle的分区有几种&quot;">​</a></h3><h3 id="_18、可以从表单执行动态sql吗" tabindex="-1">18、可以从表单执行动态SQL吗? <a class="header-anchor" href="#_18、可以从表单执行动态sql吗" aria-label="Permalink to &quot;18、可以从表单执行动态SQL吗?&quot;">​</a></h3><h3 id="_19、解释冷备份和热备份的不同点以及各自的优点" tabindex="-1">19、解释冷备份和热备份的不同点以及各自的优点 <a class="header-anchor" href="#_19、解释冷备份和热备份的不同点以及各自的优点" aria-label="Permalink to &quot;19、解释冷备份和热备份的不同点以及各自的优点&quot;">​</a></h3><h3 id="_20、日志的作用是什么" tabindex="-1">20、日志的作用是什么 <a class="header-anchor" href="#_20、日志的作用是什么" aria-label="Permalink to &quot;20、日志的作用是什么&quot;">​</a></h3><h3 id="_21、说明如何在指定的块中迭代项目和记录" tabindex="-1">21、说明如何在指定的块中迭代项目和记录? <a class="header-anchor" href="#_21、说明如何在指定的块中迭代项目和记录" aria-label="Permalink to &quot;21、说明如何在指定的块中迭代项目和记录?&quot;">​</a></h3><h3 id="_22、描述什么是-redo-logs" tabindex="-1">22、描述什么是 redo logs <a class="header-anchor" href="#_22、描述什么是-redo-logs" aria-label="Permalink to &quot;22、描述什么是 redo logs&quot;">​</a></h3><h3 id="_23、如何定位重要-消耗资源多-的sql" tabindex="-1">23、如何定位重要(消耗资源多)的SQL <a class="header-anchor" href="#_23、如何定位重要-消耗资源多-的sql" aria-label="Permalink to &quot;23、如何定位重要(消耗资源多)的SQL&quot;">​</a></h3><h3 id="_24、给出两个检查表结构的方法" tabindex="-1">24、给出两个检查表结构的方法 <a class="header-anchor" href="#_24、给出两个检查表结构的方法" aria-label="Permalink to &quot;24、给出两个检查表结构的方法&quot;">​</a></h3><h3 id="_25、如何加密pl-sql程序" tabindex="-1">25、如何加密PL/SQL程序？ <a class="header-anchor" href="#_25、如何加密pl-sql程序" aria-label="Permalink to &quot;25、如何加密PL/SQL程序？&quot;">​</a></h3><h3 id="_26、本地管理表空间和字典管理表空间的特点-assm有什么特点" tabindex="-1">26、本地管理表空间和字典管理表空间的特点，ASSM有什么特点？ <a class="header-anchor" href="#_26、本地管理表空间和字典管理表空间的特点-assm有什么特点" aria-label="Permalink to &quot;26、本地管理表空间和字典管理表空间的特点，ASSM有什么特点？&quot;">​</a></h3><h3 id="_27、audit-trace-存放在哪个oracle目录结构中" tabindex="-1">27、Audit trace 存放在哪个oracle目录结构中? <a class="header-anchor" href="#_27、audit-trace-存放在哪个oracle目录结构中" aria-label="Permalink to &quot;27、Audit trace 存放在哪个oracle目录结构中?&quot;">​</a></h3>',51),E=[l];function c(s,n,h,i,d,B){return a(),r("div",null,E)}const b=e(o,[["render",c]]);export{A as __pageData,b as default};
