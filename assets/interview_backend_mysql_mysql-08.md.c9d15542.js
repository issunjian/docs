import{_ as a,o as e,c as o,V as r}from"./chunks/framework.c6d8cbec.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/mysql/mysql-08.md","filePath":"interview/backend/mysql/mysql-08.md"}'),t={name:"interview/backend/mysql/mysql-08.md"},s=r('<h3 id="_1、在高并发情况下-如何做到安全的修改同一行数据" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#1%E5%9C%A8%E9%AB%98%E5%B9%B6%E5%8F%91%E6%83%85%E5%86%B5%E4%B8%8B%E5%A6%82%E4%BD%95%E5%81%9A%E5%88%B0%E5%AE%89%E5%85%A8%E7%9A%84%E4%BF%AE%E6%94%B9%E5%90%8C%E4%B8%80%E8%A1%8C%E6%95%B0%E6%8D%AE" target="_blank" rel="noreferrer">1、在高并发情况下，如何做到安全的修改同一行数据？</a> <a class="header-anchor" href="#_1、在高并发情况下-如何做到安全的修改同一行数据" aria-label="Permalink to &quot;[1、在高并发情况下，如何做到安全的修改同一行数据？](https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL最新面试题及答案附答案汇总.md#1在高并发情况下如何做到安全的修改同一行数据)&quot;">​</a></h3><p>要安全的修改同一行数据，就要保证一个线程在修改时其它线程无法更新这行记录。一般有悲观锁和乐观锁两种方案~</p><h3 id="_2、索引有哪些优缺点" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#2%E7%B4%A2%E5%BC%95%E6%9C%89%E5%93%AA%E4%BA%9B%E4%BC%98%E7%BC%BA%E7%82%B9" target="_blank" rel="noreferrer">2、索引有哪些优缺点？</a> <a class="header-anchor" href="#_2、索引有哪些优缺点" aria-label="Permalink to &quot;[2、索引有哪些优缺点？](https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL最新面试题及答案附答案汇总.md#2索引有哪些优缺点)&quot;">​</a></h3><p><strong>索引的优点</strong></p><p><strong>1、</strong> 可以大大加快数据的检索速度，这也是创建索引的最主要的原因。</p><p><strong>2、</strong> 通过使用索引，可以在查询的过程中，使用优化隐藏器，提高系统的性能。</p><p><strong>索引的缺点</strong></p><p><strong>1、</strong> 时间方面：创建索引和维护索引要耗费时间，具体地，当对表中的数据进行增加、删除和修改的时候，索引也要动态的维护，会降低增/改/删的执行效率；</p><p><strong>2、</strong> 空间方面：索引需要占物理空间。</p><h3 id="_3、非聚簇索引一定会回表查询吗" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#3%E9%9D%9E%E8%81%9A%E7%B0%87%E7%B4%A2%E5%BC%95%E4%B8%80%E5%AE%9A%E4%BC%9A%E5%9B%9E%E8%A1%A8%E6%9F%A5%E8%AF%A2%E5%90%97" target="_blank" rel="noreferrer">3、非聚簇索引一定会回表查询吗？</a> <a class="header-anchor" href="#_3、非聚簇索引一定会回表查询吗" aria-label="Permalink to &quot;[3、非聚簇索引一定会回表查询吗？](https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL最新面试题及答案附答案汇总.md#3非聚簇索引一定会回表查询吗)&quot;">​</a></h3><p>不一定，这涉及到查询语句所要求的字段是否全部命中了索引，如果全部命中了索引，那么就不必再进行回表查询。</p><p><strong>举个简单的例子</strong></p><p>假设我们在员工表的年龄上建立了索引，那么当进行<code>select age from employee where age &lt; 20</code>的查询时，在索引的叶子节点上，已经包含了age信息，不会再次进行回表查询。</p><h3 id="_4、mysql数据库cpu飙升的话-要怎么处理呢" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#4mysql%E6%95%B0%E6%8D%AE%E5%BA%93cpu%E9%A3%99%E5%8D%87%E7%9A%84%E8%AF%9D%E8%A6%81%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E5%91%A2" target="_blank" rel="noreferrer">4、MySQL数据库cpu飙升的话，要怎么处理呢？</a> <a class="header-anchor" href="#_4、mysql数据库cpu飙升的话-要怎么处理呢" aria-label="Permalink to &quot;[4、MySQL数据库cpu飙升的话，要怎么处理呢？](https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL最新面试题及答案附答案汇总.md#4mysql数据库cpu飙升的话要怎么处理呢)&quot;">​</a></h3><p><strong>「排查过程：」</strong></p><p>使用top 命令观察，确定是MySQLd导致还是其他原因。</p><p>如果是MySQLd导致的，show processlist，查看session情况，确定是不是有消耗资源的sql在运行。</p><p>找出消耗高的 sql，看看执行计划是否准确， 索引是否缺失，数据量是否太大。</p><p><strong>「处理：」</strong></p><p>kill 掉这些线程(同时观察 cpu 使用率是否下降)，</p><p>进行相应的调整(比如说加索引、改 sql、改内存参数)</p><p>重新跑这些 SQL。</p><p><strong>「其他情况：」</strong></p><p>也有可能是每个 sql 消耗资源并不多，但是突然之间，有大量的 session 连进来导致 cpu 飙升，这种情况就需要跟应用一起来分析为何连接数会激增，再做出相应的调整，比如说限制连接数等</p><h3 id="_5、hash索引和b-树区别是什么-你在设计索引是怎么抉择的" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#5hash%E7%B4%A2%E5%BC%95%E5%92%8Cb+%E6%A0%91%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88%E4%BD%A0%E5%9C%A8%E8%AE%BE%E8%AE%A1%E7%B4%A2%E5%BC%95%E6%98%AF%E6%80%8E%E4%B9%88%E6%8A%89%E6%8B%A9%E7%9A%84" target="_blank" rel="noreferrer">5、Hash索引和B+树区别是什么？你在设计索引是怎么抉择的？</a> <a class="header-anchor" href="#_5、hash索引和b-树区别是什么-你在设计索引是怎么抉择的" aria-label="Permalink to &quot;[5、Hash索引和B+树区别是什么？你在设计索引是怎么抉择的？](https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL最新面试题及答案附答案汇总.md#5hash索引和b+树区别是什么你在设计索引是怎么抉择的)&quot;">​</a></h3><p><strong>1、</strong> B+树可以进行范围查询，Hash索引不能。</p><p><strong>2、</strong> B+树支持联合索引的最左侧原则，Hash索引不支持。</p><p><strong>3、</strong> B+树支持order by排序，Hash索引不支持。</p><p><strong>4、</strong> Hash索引在等值查询上比B+树效率更高。</p><p><strong>5、</strong> B+树使用like 进行模糊查询的时候，like后面（比如%开头）的话可以起到优化的作用，Hash索引根本无法进行模糊查询。</p><h3 id="_6、数据库自增主键可能遇到什么问题。" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#6%E6%95%B0%E6%8D%AE%E5%BA%93%E8%87%AA%E5%A2%9E%E4%B8%BB%E9%94%AE%E5%8F%AF%E8%83%BD%E9%81%87%E5%88%B0%E4%BB%80%E4%B9%88%E9%97%AE%E9%A2%98%E3%80%82" target="_blank" rel="noreferrer">6、数据库自增主键可能遇到什么问题。</a> <a class="header-anchor" href="#_6、数据库自增主键可能遇到什么问题。" aria-label="Permalink to &quot;[6、数据库自增主键可能遇到什么问题。](https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL最新面试题及答案附答案汇总.md#6数据库自增主键可能遇到什么问题。)&quot;">​</a></h3><p><strong>1、</strong> 使用自增主键对数据库做分库分表，可能出现诸如主键重复等的问题。解决方案的话，简单点的话可以考虑使用UUID哈</p><p><strong>2、</strong> 自增主键会产生表锁，从而引发问题</p><p><strong>3、</strong> 自增主键可能用完问题。</p><h3 id="_7、事务特性" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#7%E4%BA%8B%E5%8A%A1%E7%89%B9%E6%80%A7%EF%BC%9A" target="_blank" rel="noreferrer">7、事务特性：</a> <a class="header-anchor" href="#_7、事务特性" aria-label="Permalink to &quot;[7、事务特性：](https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL最新面试题及答案附答案汇总.md#7事务特性：)&quot;">​</a></h3><p>（1）原子性：即不可分割性，事务要么全部被执行，要么就全部不被执行。</p><p>（2）一致性或可串性。事务的执行使得数据库从一种正确状态转换成另一种正确状态</p><p>（3）隔离性。在事务正确提交之前，不允许把该事务对数据的任何改变提供给任何其他事务，</p><p>（4） 持久性。事务正确提交后，其结果将永久保存在数据库中，即使在事务提交后有了其他故障，事务的处理结果也会得到保存。</p><p>或者这样理解：</p><p>事务就是被绑定在一起作为一个逻辑工作单元的SQL语句分组，如果任何一个语句操作失败那么整个操作就被失败，以后操作就会回滚到操作前状态，或者是上有个节点。为了确保要么执行，要么不执行，就可以使用事务。要将有组语句作为事务考虑，就需要通过ACID测试，即原子性，一致性，隔离性和持久性。</p><h3 id="_8、优化数据库的方法" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#8%E4%BC%98%E5%8C%96%E6%95%B0%E6%8D%AE%E5%BA%93%E7%9A%84%E6%96%B9%E6%B3%95" target="_blank" rel="noreferrer">8、优化数据库的方法</a> <a class="header-anchor" href="#_8、优化数据库的方法" aria-label="Permalink to &quot;[8、优化数据库的方法](https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL最新面试题及答案附答案汇总.md#8优化数据库的方法)&quot;">​</a></h3><p><strong>1、</strong> 选取最适用的字段属性，尽可能减少定义字段宽度，尽量把字段设置NOTNULL，例如’省份’、’性别’最好适用ENUM</p><p><strong>2、</strong> 使用连接(JOIN)来代替子查询</p><p><strong>3、</strong> 适用联合(UNION)来代替手动创建的临时表</p><p><strong>4、</strong> 事务处理</p><p><strong>5、</strong> 锁定表、优化事务处理</p><p><strong>6、</strong> 适用外键，优化锁定表</p><p><strong>7、</strong> 建立索引</p><p><strong>8、</strong> 优化查询语句</p><h3 id="_9、mysql中int-10-和char-10-以及varchar-10-的区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#9mysql%E4%B8%ADint10%E5%92%8Cchar10%E4%BB%A5%E5%8F%8Avarchar10%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">9、MySQL中int(10)和char(10)以及varchar(10)的区别</a> <a class="header-anchor" href="#_9、mysql中int-10-和char-10-以及varchar-10-的区别" aria-label="Permalink to &quot;[9、MySQL中int(10)和char(10)以及varchar(10)的区别](https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL最新面试题及答案附答案汇总.md#9mysql中int10和char10以及varchar10的区别)&quot;">​</a></h3><p><strong>1、</strong> int(10)的10表示显示的数据的长度，不是存储数据的大小；chart(10)和varchar(10)的10表示存储数据的大小，即表示存储多少个字符。</p><p><strong>2、</strong> char(10)表示存储定长的10个字符，不足10个就用空格补齐，占用更多的存储空间</p><p><strong>3、</strong> varchar(10)表示存储10个变长的字符，存储多少个就是多少个，空格也按一个字符存储，这一点是和char(10)的空格不同的，char(10)的空格表示占位不算一个字符</p><h3 id="_10、简述在mysql数据库中myisam和innodb的区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E9%99%84%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#10%E7%AE%80%E8%BF%B0%E5%9C%A8mysql%E6%95%B0%E6%8D%AE%E5%BA%93%E4%B8%ADmyisam%E5%92%8Cinnodb%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">10、简述在MySQL数据库中MyISAM和InnoDB的区别</a> <a class="header-anchor" href="#_10、简述在mysql数据库中myisam和innodb的区别" aria-label="Permalink to &quot;[10、简述在MySQL数据库中MyISAM和InnoDB的区别](https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL最新面试题及答案附答案汇总.md#10简述在mysql数据库中myisam和innodb的区别)&quot;">​</a></h3><p><strong>MyISAM：</strong></p><p>不支持事务，但是每次查询都是原子的；</p><p>支持表级锁，即每次操作是对整个表加锁；</p><p><strong>存储表的总行数；</strong></p><p>一个MYISAM表有三个文件：索引文件、表结构文件、数据文件；</p><p>采用菲聚集索引，索引文件的数据域存储指向数据文件的指针。辅索引与主索引基本一致，但是辅索引不用保证唯一性。</p><p><strong>InnoDb：</strong></p><p>支持ACID的事务，支持事务的四种隔离级别；</p><p>支持行级锁及外键约束：因此可以支持写并发；</p><p><strong>不存储总行数：</strong></p><p>一个InnoDb引擎存储在一个文件空间（共享表空间，表大小不受操作系统控制，一个表可能分布在多个文件里），也有可能为多个（设置为独立表空，表大小受操作系统文件大小限制，一般为2G），受操作系统文件大小的限制；</p><p>主键索引采用聚集索引（索引的数据域存储数据文件本身），辅索引的数据域存储主键的值；因此从辅索引查找数据，需要先通过辅索引找到主键值，再访问辅索引；最好使用自增主键，防止插入数据时，为维持B+树结构，文件的大调整。</p><h3 id="_11、数据库经常使用的函数" tabindex="-1">11、数据库经常使用的函数 <a class="header-anchor" href="#_11、数据库经常使用的函数" aria-label="Permalink to &quot;11、数据库经常使用的函数&quot;">​</a></h3><h3 id="_12、创建索引的三种方式" tabindex="-1">12、创建索引的三种方式 <a class="header-anchor" href="#_12、创建索引的三种方式" aria-label="Permalink to &quot;12、创建索引的三种方式&quot;">​</a></h3><h3 id="_13、优化union查询" tabindex="-1">13、优化UNION查询 <a class="header-anchor" href="#_13、优化union查询" aria-label="Permalink to &quot;13、优化UNION查询&quot;">​</a></h3><h3 id="_14、innodb引擎中的索引策略-了解过吗" tabindex="-1">14、InnoDB引擎中的索引策略，了解过吗？ <a class="header-anchor" href="#_14、innodb引擎中的索引策略-了解过吗" aria-label="Permalink to &quot;14、InnoDB引擎中的索引策略，了解过吗？&quot;">​</a></h3><h3 id="_15、mysql-索引使用有哪些注意事项呢" tabindex="-1">15、MySQL 索引使用有哪些注意事项呢？ <a class="header-anchor" href="#_15、mysql-索引使用有哪些注意事项呢" aria-label="Permalink to &quot;15、MySQL 索引使用有哪些注意事项呢？&quot;">​</a></h3><h3 id="_16、一条sql语句在mysql中如何执行的" tabindex="-1">16、一条SQL语句在MySQL中如何执行的？ <a class="header-anchor" href="#_16、一条sql语句在mysql中如何执行的" aria-label="Permalink to &quot;16、一条SQL语句在MySQL中如何执行的？&quot;">​</a></h3><h3 id="_17、覆盖索引是什么" tabindex="-1">17、覆盖索引是什么？ <a class="header-anchor" href="#_17、覆盖索引是什么" aria-label="Permalink to &quot;17、覆盖索引是什么？&quot;">​</a></h3><h3 id="_18、怎样才能找出最后一次插入时分配了哪个自动增量" tabindex="-1">18、怎样才能找出最后一次插入时分配了哪个自动增量？ <a class="header-anchor" href="#_18、怎样才能找出最后一次插入时分配了哪个自动增量" aria-label="Permalink to &quot;18、怎样才能找出最后一次插入时分配了哪个自动增量？&quot;">​</a></h3><h3 id="_19、按照锁的粒度分数据库锁有哪些-锁机制与innodb锁算法" tabindex="-1">19、按照锁的粒度分数据库锁有哪些？锁机制与InnoDB锁算法 <a class="header-anchor" href="#_19、按照锁的粒度分数据库锁有哪些-锁机制与innodb锁算法" aria-label="Permalink to &quot;19、按照锁的粒度分数据库锁有哪些？锁机制与InnoDB锁算法&quot;">​</a></h3><h3 id="_20、为表中得字段选择合适得数据类型" tabindex="-1">20、为表中得字段选择合适得数据类型 <a class="header-anchor" href="#_20、为表中得字段选择合适得数据类型" aria-label="Permalink to &quot;20、为表中得字段选择合适得数据类型&quot;">​</a></h3><h3 id="_21、如何通俗地理解三个范式" tabindex="-1">21、如何通俗地理解三个范式？ <a class="header-anchor" href="#_21、如何通俗地理解三个范式" aria-label="Permalink to &quot;21、如何通俗地理解三个范式？&quot;">​</a></h3><h3 id="_22、什么叫视图-游标是什么" tabindex="-1">22、什么叫视图？游标是什么？ <a class="header-anchor" href="#_22、什么叫视图-游标是什么" aria-label="Permalink to &quot;22、什么叫视图？游标是什么？&quot;">​</a></h3><h3 id="_23、数据库中的事务是什么" tabindex="-1">23、数据库中的事务是什么? <a class="header-anchor" href="#_23、数据库中的事务是什么" aria-label="Permalink to &quot;23、数据库中的事务是什么?&quot;">​</a></h3><h3 id="_24、视图的优点" tabindex="-1">24、视图的优点 <a class="header-anchor" href="#_24、视图的优点" aria-label="Permalink to &quot;24、视图的优点&quot;">​</a></h3><h3 id="_25、mysql中innodb支持的四种事务隔离级别名称-以及逐级之间的区别" tabindex="-1">25、MySQL中InnoDB支持的四种事务隔离级别名称，以及逐级之间的区别？ <a class="header-anchor" href="#_25、mysql中innodb支持的四种事务隔离级别名称-以及逐级之间的区别" aria-label="Permalink to &quot;25、MySQL中InnoDB支持的四种事务隔离级别名称，以及逐级之间的区别？&quot;">​</a></h3><h3 id="_26、mysql驱动程序是什么" tabindex="-1">26、MySQL驱动程序是什么？ <a class="header-anchor" href="#_26、mysql驱动程序是什么" aria-label="Permalink to &quot;26、MySQL驱动程序是什么？&quot;">​</a></h3><h3 id="_27、mysql事务得四大特性以及实现原理" tabindex="-1">27、MySQL事务得四大特性以及实现原理 <a class="header-anchor" href="#_27、mysql事务得四大特性以及实现原理" aria-label="Permalink to &quot;27、MySQL事务得四大特性以及实现原理&quot;">​</a></h3><h3 id="_28、什么是触发器-触发器的使用场景有哪些" tabindex="-1">28、什么是触发器？触发器的使用场景有哪些？ <a class="header-anchor" href="#_28、什么是触发器-触发器的使用场景有哪些" aria-label="Permalink to &quot;28、什么是触发器？触发器的使用场景有哪些？&quot;">​</a></h3><h3 id="_29、innodb与myisam的区别" tabindex="-1">29、InnoDB与MyISAM的区别 <a class="header-anchor" href="#_29、innodb与myisam的区别" aria-label="Permalink to &quot;29、InnoDB与MyISAM的区别&quot;">​</a></h3><h3 id="_30、一条sql语句在mysql中如何执行的" tabindex="-1">30、一条SQL语句在MySQL中如何执行的？ <a class="header-anchor" href="#_30、一条sql语句在mysql中如何执行的" aria-label="Permalink to &quot;30、一条SQL语句在MySQL中如何执行的？&quot;">​</a></h3>',87),n=[s];function E(h,l,i,A,d,p){return e(),o("div",null,n)}const m=a(t,[["render",E]]);export{c as __pageData,m as default};
