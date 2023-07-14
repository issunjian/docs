import{_ as e,o as a,c as r,V as o}from"./chunks/framework.c6d8cbec.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/oracle/oracle-04.md","filePath":"interview/backend/oracle/oracle-04.md"}'),t={name:"interview/backend/oracle/oracle-04.md"},l=o('<h3 id="_1、说下-内连接-左连接-右连接的区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#1%E8%AF%B4%E4%B8%8B%E5%86%85%E8%BF%9E%E6%8E%A5%E5%B7%A6%E8%BF%9E%E6%8E%A5%E5%8F%B3%E8%BF%9E%E6%8E%A5%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">1、说下，内连接，左连接，右连接的区别</a> <a class="header-anchor" href="#_1、说下-内连接-左连接-右连接的区别" aria-label="Permalink to &quot;[1、说下，内连接，左连接，右连接的区别](https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle最新面试题，2021年面试题及答案汇总.md#1说下内连接左连接右连接的区别)&quot;">​</a></h3><p><strong>内连接：</strong></p><p>指主表，从表中符合连接条件的记录全部显示</p><p><strong>左连接：</strong></p><p>外连接方式，主要是显示主表，从表中符合连接条件的记录，并且主表中所有不符合连接条件的记录也要显示。</p><p><strong>右连接：</strong></p><p>外连接方式，主要是显示主表，从表中所有符合连接条件的记录，并且从表中不符合的记录也要显示。</p><h3 id="_2、你必须利用备份恢复数据库-但是你没有控制文件-该如何解决问题呢" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#2%E4%BD%A0%E5%BF%85%E9%A1%BB%E5%88%A9%E7%94%A8%E5%A4%87%E4%BB%BD%E6%81%A2%E5%A4%8D%E6%95%B0%E6%8D%AE%E5%BA%93%E4%BD%86%E6%98%AF%E4%BD%A0%E6%B2%A1%E6%9C%89%E6%8E%A7%E5%88%B6%E6%96%87%E4%BB%B6%E8%AF%A5%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3%E9%97%AE%E9%A2%98%E5%91%A2" target="_blank" rel="noreferrer">2、你必须利用备份恢复数据库，但是你没有控制文件，该如何解决问题呢?</a> <a class="header-anchor" href="#_2、你必须利用备份恢复数据库-但是你没有控制文件-该如何解决问题呢" aria-label="Permalink to &quot;[2、你必须利用备份恢复数据库，但是你没有控制文件，该如何解决问题呢?](https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle最新面试题，2021年面试题及答案汇总.md#2你必须利用备份恢复数据库但是你没有控制文件该如何解决问题呢)&quot;">​</a></h3><p>重建控制文件，用带backup control file 子句的recover 命令恢复数据库。</p><h3 id="_3、解释-oracle-home和-oracle-base的区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#3%E8%A7%A3%E9%87%8A$$oracle_home%E5%92%8C$$oracle_base%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">3、解释$$ORACLE_HOME和$$ORACLE_BASE的区别？</a> <a class="header-anchor" href="#_3、解释-oracle-home和-oracle-base的区别" aria-label="Permalink to &quot;[3、解释$$ORACLE_HOME和$$ORACLE_BASE的区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle最新面试题，2021年面试题及答案汇总.md#3解释$$oracle_home和$$oracle_base的区别)&quot;">​</a></h3><p>ORACLE_BASE是oracle的根目录，ORACLE_HOME是oracle产品的目录。</p><h3 id="_4、说下-oracle-中-dml、ddl、dcl-的使用有哪些" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#4%E8%AF%B4%E4%B8%8B-oracle-%E4%B8%AD-dmlddldcl-%E7%9A%84%E4%BD%BF%E7%94%A8%E6%9C%89%E5%93%AA%E4%BA%9B" target="_blank" rel="noreferrer">4、说下 oracle 中 dml、ddl、dcl 的使用有哪些</a> <a class="header-anchor" href="#_4、说下-oracle-中-dml、ddl、dcl-的使用有哪些" aria-label="Permalink to &quot;[4、说下 oracle 中 dml、ddl、dcl 的使用有哪些](https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle最新面试题，2021年面试题及答案汇总.md#4说下-oracle-中-dmlddldcl-的使用有哪些)&quot;">​</a></h3><p><strong>1、</strong> Dml 数据操纵语言，如select、update、delete，insert</p><p><strong>2、</strong> Ddl 数据定义语言，如create table 、drop table 等等</p><p><strong>3、</strong> Dcl 数据控制语言， 如 commit、 rollback、grant、 invoke等</p><h3 id="_5、比较truncate和delete-命令" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#5%E6%AF%94%E8%BE%83truncate%E5%92%8Cdelete-%E5%91%BD%E4%BB%A4" target="_blank" rel="noreferrer">5、比较truncate和delete 命令</a> <a class="header-anchor" href="#_5、比较truncate和delete-命令" aria-label="Permalink to &quot;[5、比较truncate和delete 命令](https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle最新面试题，2021年面试题及答案汇总.md#5比较truncate和delete-命令)&quot;">​</a></h3><p>两者都可以用来删除表中所有的记录。区别在于：truncate是DDL操作，它移动HWK，不需要rollback segment .而Delete是DML操作, 需要rollback segment 且花费较长时间.</p><h3 id="_6、如何增加buffer-cache的命中率" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#6%E5%A6%82%E4%BD%95%E5%A2%9E%E5%8A%A0buffer-cache%E7%9A%84%E5%91%BD%E4%B8%AD%E7%8E%87" target="_blank" rel="noreferrer">6、如何增加buffer cache的命中率?</a> <a class="header-anchor" href="#_6、如何增加buffer-cache的命中率" aria-label="Permalink to &quot;[6、如何增加buffer cache的命中率?](https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle最新面试题，2021年面试题及答案汇总.md#6如何增加buffer-cache的命中率)&quot;">​</a></h3><p>在数据库较繁忙时，适用buffer cache advisory 工具，查询v$db_cache_advice.如果有必要更改，可以使用 alter system set db_cache_size 命令</p><h3 id="_7、oracle跟sql-server-2005的区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#7oracle%E8%B7%9Fsql-server-2005%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">7、Oracle跟SQL Server 2005的区别？</a> <a class="header-anchor" href="#_7、oracle跟sql-server-2005的区别" aria-label="Permalink to &quot;[7、Oracle跟SQL Server 2005的区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle最新面试题，2021年面试题及答案汇总.md#7oracle跟sql-server-2005的区别)&quot;">​</a></h3><p><strong>宏观上：</strong></p><p><strong>1、</strong> 最大的区别在于平台，oracle可以运行在不同的平台上，sql server只能运行在windows平台上，由于windows平台的稳定性和安全性影响了sql server的稳定性和安全性</p><p><strong>2、</strong> oracle使用的脚本语言为PL-SQL，而sql server使用的脚本为T-SQL</p><p><strong>微观上：</strong></p><p><strong>1、</strong> 从数据类型,数据库的结构等等回答</p><h3 id="_8、给出两个检查表结构的方法" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#8%E7%BB%99%E5%87%BA%E4%B8%A4%E4%B8%AA%E6%A3%80%E6%9F%A5%E8%A1%A8%E7%BB%93%E6%9E%84%E7%9A%84%E6%96%B9%E6%B3%95" target="_blank" rel="noreferrer">8、给出两个检查表结构的方法</a> <a class="header-anchor" href="#_8、给出两个检查表结构的方法" aria-label="Permalink to &quot;[8、给出两个检查表结构的方法](https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle最新面试题，2021年面试题及答案汇总.md#8给出两个检查表结构的方法)&quot;">​</a></h3><p>1.DESCRIBE命令</p><p><strong>2、</strong> DBMS_METADATA.GET_DDL 包</p><h3 id="_9、什么是绑定变量" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#9%E4%BB%80%E4%B9%88%E6%98%AF%E7%BB%91%E5%AE%9A%E5%8F%98%E9%87%8F" target="_blank" rel="noreferrer">9、什么是绑定变量?</a> <a class="header-anchor" href="#_9、什么是绑定变量" aria-label="Permalink to &quot;[9、什么是绑定变量?](https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle最新面试题，2021年面试题及答案汇总.md#9什么是绑定变量)&quot;">​</a></h3><p>报表6i中使用了绑定变量来替换select语句中的单个参数。</p><h3 id="_10、如何在tablespace里增加数据文件" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#10%E5%A6%82%E4%BD%95%E5%9C%A8tablespace%E9%87%8C%E5%A2%9E%E5%8A%A0%E6%95%B0%E6%8D%AE%E6%96%87%E4%BB%B6" target="_blank" rel="noreferrer">10、如何在tablespace里增加数据文件？</a> <a class="header-anchor" href="#_10、如何在tablespace里增加数据文件" aria-label="Permalink to &quot;[10、如何在tablespace里增加数据文件？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Oracle/Oracle最新面试题，2021年面试题及答案汇总.md#10如何在tablespace里增加数据文件)&quot;">​</a></h3><p>ALTER TABLESPACE &lt;tablespace_name&gt; ADD DATAFILE &lt;datafile_name&gt; SIZE</p><h3 id="_11、truncate和delete区别" tabindex="-1">11、truncate和delete区别： <a class="header-anchor" href="#_11、truncate和delete区别" aria-label="Permalink to &quot;11、truncate和delete区别：&quot;">​</a></h3><h3 id="_12、解释-oracle-home和-oracle-base的区别" tabindex="-1">12、解释$$ORACLE_HOME和$$ORACLE_BASE的区别? <a class="header-anchor" href="#_12、解释-oracle-home和-oracle-base的区别" aria-label="Permalink to &quot;12、解释$$ORACLE\\_HOME和$$ORACLE_BASE的区别?&quot;">​</a></h3><h3 id="_13、说明你可以将fmx转换或反向回到fmb文件吗" tabindex="-1">13、说明你可以将FMX转换或反向回到FMB文件吗? <a class="header-anchor" href="#_13、说明你可以将fmx转换或反向回到fmb文件吗" aria-label="Permalink to &quot;13、说明你可以将FMX转换或反向回到FMB文件吗?&quot;">​</a></h3><h3 id="_14、简单描述table-segment-extent-block之间的关系" tabindex="-1">14、简单描述table / segment / extent / block之间的关系？ <a class="header-anchor" href="#_14、简单描述table-segment-extent-block之间的关系" aria-label="Permalink to &quot;14、简单描述table / segment / extent / block之间的关系？&quot;">​</a></h3><h3 id="_15、创建数据库时自动建立的tablespace名称" tabindex="-1">15、创建数据库时自动建立的tablespace名称？ <a class="header-anchor" href="#_15、创建数据库时自动建立的tablespace名称" aria-label="Permalink to &quot;15、创建数据库时自动建立的tablespace名称？&quot;">​</a></h3><h3 id="_16、说下-oracle中function和procedure的区别" tabindex="-1">16、说下 Oracle中function和procedure的区别？ <a class="header-anchor" href="#_16、说下-oracle中function和procedure的区别" aria-label="Permalink to &quot;16、说下 Oracle中function和procedure的区别？&quot;">​</a></h3><h3 id="_17、解释-冷备份-和-热备份-的不同点-以及各自的优点" tabindex="-1">17、解释 冷备份 和 热备份 的不同点，以及各自的优点？ <a class="header-anchor" href="#_17、解释-冷备份-和-热备份-的不同点-以及各自的优点" aria-label="Permalink to &quot;17、解释 冷备份 和 热备份 的不同点，以及各自的优点？&quot;">​</a></h3><h3 id="_18、解释data-block-extent-和-segment的区别" tabindex="-1">18、解释data block , extent 和 segment的区别？ <a class="header-anchor" href="#_18、解释data-block-extent-和-segment的区别" aria-label="Permalink to &quot;18、解释data block , extent 和 segment的区别？&quot;">​</a></h3><h3 id="_19、给出数据库正常启动所经历的几种状态" tabindex="-1">19、给出数据库正常启动所经历的几种状态 ? <a class="header-anchor" href="#_19、给出数据库正常启动所经历的几种状态" aria-label="Permalink to &quot;19、给出数据库正常启动所经历的几种状态 ?&quot;">​</a></h3><h3 id="_20、解释function-procedure和package区别" tabindex="-1">20、解释FUNCTION,PROCEDURE和PACKAGE区别 <a class="header-anchor" href="#_20、解释function-procedure和package区别" aria-label="Permalink to &quot;20、解释FUNCTION,PROCEDURE和PACKAGE区别&quot;">​</a></h3><h3 id="_21、oralce怎样存储文件-能够存储哪些文件" tabindex="-1">21、Oralce怎样存储文件，能够存储哪些文件？ <a class="header-anchor" href="#_21、oralce怎样存储文件-能够存储哪些文件" aria-label="Permalink to &quot;21、Oralce怎样存储文件，能够存储哪些文件？&quot;">​</a></h3><h3 id="_22、解释call-form-new-form和open-form之间有什么区别" tabindex="-1">22、解释CALL_FORM，NEW_FORM和OPEN_FORM之间有什么区别? <a class="header-anchor" href="#_22、解释call-form-new-form和open-form之间有什么区别" aria-label="Permalink to &quot;22、解释CALL_FORM，NEW_FORM和OPEN_FORM之间有什么区别?&quot;">​</a></h3><h3 id="_23、存储过程的操作-当它抛出异常的时候-你是如何解决的用了什么技术" tabindex="-1">23、存储过程的操作 当它抛出异常的时候 你是如何解决的用了什么技术 <a class="header-anchor" href="#_23、存储过程的操作-当它抛出异常的时候-你是如何解决的用了什么技术" aria-label="Permalink to &quot;23、存储过程的操作 当它抛出异常的时候 你是如何解决的用了什么技术&quot;">​</a></h3><h3 id="_24、解释什么是死锁-如何解决oracle中的死锁" tabindex="-1">24、解释什么是死锁，如何解决Oracle中的死锁？ <a class="header-anchor" href="#_24、解释什么是死锁-如何解决oracle中的死锁" aria-label="Permalink to &quot;24、解释什么是死锁，如何解决Oracle中的死锁？&quot;">​</a></h3><h3 id="_25、在oracle-forms-report中-record组列的最大长度是多少-什么是不同类型的记录组" tabindex="-1">25、在Oracle Forms Report中，Record组列的最大长度是多少?什么是不同类型的记录组? <a class="header-anchor" href="#_25、在oracle-forms-report中-record组列的最大长度是多少-什么是不同类型的记录组" aria-label="Permalink to &quot;25、在Oracle Forms Report中，Record组列的最大长度是多少?什么是不同类型的记录组?&quot;">​</a></h3><h3 id="_26、ora-01555的应对方法" tabindex="-1">26、ORA-01555的应对方法？ <a class="header-anchor" href="#_26、ora-01555的应对方法" aria-label="Permalink to &quot;26、ORA-01555的应对方法？&quot;">​</a></h3>',48),E=[l];function c(s,n,A,d,h,B){return a(),r("div",null,E)}const u=e(t,[["render",c]]);export{b as __pageData,u as default};
