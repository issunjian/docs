import{_ as a,o as s,c as e,V as t}from"./chunks/framework.c6d8cbec.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/mysql/mysql-11.md","filePath":"interview/backend/mysql/mysql-11.md"}'),n={name:"interview/backend/mysql/mysql-11.md"},o=t(`<h3 id="_1、什么是最左前缀原则-什么是最左匹配原则" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E4%BC%81%E4%B8%9A%E7%9C%9F%E9%9D%A2%E8%AF%95%E9%A2%98.md#1%E4%BB%80%E4%B9%88%E6%98%AF%E6%9C%80%E5%B7%A6%E5%89%8D%E7%BC%80%E5%8E%9F%E5%88%99%E4%BB%80%E4%B9%88%E6%98%AF%E6%9C%80%E5%B7%A6%E5%8C%B9%E9%85%8D%E5%8E%9F%E5%88%99" target="_blank" rel="noreferrer">1、什么是最左前缀原则？什么是最左匹配原则？</a> <a class="header-anchor" href="#_1、什么是最左前缀原则-什么是最左匹配原则" aria-label="Permalink to &quot;[1、什么是最左前缀原则？什么是最左匹配原则？](https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL高级面试题及答案，企业真面试题.md#1什么是最左前缀原则什么是最左匹配原则)&quot;">​</a></h3><p>最左前缀原则，就是最左优先，在创建多列索引时，要根据业务需求，where子句中使用最频繁的一列放在最左边。</p><p>当我们创建一个组合索引的时候，如(k1,k2,k3)，相当于创建了（k1）、(k1,k2)和(k1,k2,k3)三个索引，这就是最左匹配原则。。</p><h3 id="_2、myisamchk是用来做什么的" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E4%BC%81%E4%B8%9A%E7%9C%9F%E9%9D%A2%E8%AF%95%E9%A2%98.md#2myisamchk%E6%98%AF%E7%94%A8%E6%9D%A5%E5%81%9A%E4%BB%80%E4%B9%88%E7%9A%84" target="_blank" rel="noreferrer">2、myisamchk是用来做什么的？</a> <a class="header-anchor" href="#_2、myisamchk是用来做什么的" aria-label="Permalink to &quot;[2、myisamchk是用来做什么的？](https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL高级面试题及答案，企业真面试题.md#2myisamchk是用来做什么的)&quot;">​</a></h3><p>它用来压缩MyISAM表，这减少了磁盘或内存使用。</p><h3 id="_3、4-说说分库与分表的设计" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E4%BC%81%E4%B8%9A%E7%9C%9F%E9%9D%A2%E8%AF%95%E9%A2%98.md#34%E8%AF%B4%E8%AF%B4%E5%88%86%E5%BA%93%E4%B8%8E%E5%88%86%E8%A1%A8%E7%9A%84%E8%AE%BE%E8%AE%A1" target="_blank" rel="noreferrer">3、4.说说分库与分表的设计</a> <a class="header-anchor" href="#_3、4-说说分库与分表的设计" aria-label="Permalink to &quot;[3、4.说说分库与分表的设计](https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL高级面试题及答案，企业真面试题.md#34说说分库与分表的设计)&quot;">​</a></h3><p>分库分表方案，分库分表中间件，分库分表可能遇到的问题</p><p><strong>「分库分表方案:」</strong></p><p><strong>1、</strong> 水平分库：以字段为依据，按照一定策略（hash、range等），将一个库中的数据拆分到多个库中。</p><p><strong>2、</strong> 水平分表：以字段为依据，按照一定策略（hash、range等），将一个表中的数据拆分到多个表中。</p><p><strong>3、</strong> 垂直分库：以表为依据，按照业务归属不同，将不同的表拆分到不同的库中。</p><p><strong>4、</strong> 垂直分表：以字段为依据，按照字段的活跃性，将表中字段拆到不同的表（主表和扩展表）中。</p><p><strong>「常用的分库分表中间件：」</strong></p><p><strong>1、</strong> sharding-jdbc（当当）</p><p><strong>2、</strong> Mycat</p><p><strong>3、</strong> TDDL（淘宝）</p><p><strong>4、</strong> Oceanus(58同城数据库中间件)</p><p><strong>5、</strong> vitess（谷歌开发的数据库中间件）</p><p><strong>6、</strong> Atlas(Qihoo 360)</p><p><strong>「分库分表可能遇到的问题」</strong></p><p><strong>1、</strong> 事务问题：需要用分布式事务啦</p><p><strong>2、</strong> 跨节点Join的问题：解决这一问题可以分两次查询实现</p><p><strong>3、</strong> 跨节点的count,order by,group by以及聚合函数问题：分别在各个节点上得到结果后在应用程序端进行合并。</p><p><strong>4、</strong> 数据迁移，容量规划，扩容等问题</p><p><strong>5、</strong> ID问题：数据库被切分后，不能再依赖数据库自身的主键生成机制啦，最简单可以考虑UUID</p><p><strong>6、</strong> 跨分片的排序分页问题（后台加大pagesize处理？）</p><h3 id="_4、什么情况下设置了索引但无法使用" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E4%BC%81%E4%B8%9A%E7%9C%9F%E9%9D%A2%E8%AF%95%E9%A2%98.md#4%E4%BB%80%E4%B9%88%E6%83%85%E5%86%B5%E4%B8%8B%E8%AE%BE%E7%BD%AE%E4%BA%86%E7%B4%A2%E5%BC%95%E4%BD%86%E6%97%A0%E6%B3%95%E4%BD%BF%E7%94%A8" target="_blank" rel="noreferrer">4、什么情况下设置了索引但无法使用</a> <a class="header-anchor" href="#_4、什么情况下设置了索引但无法使用" aria-label="Permalink to &quot;[4、什么情况下设置了索引但无法使用](https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL高级面试题及答案，企业真面试题.md#4什么情况下设置了索引但无法使用)&quot;">​</a></h3><p>1.以“%”开头的LIKE语句，模糊匹配</p><p>2\\、OR语句前后没有同时使用索引</p><p>3\\、数据类型出现隐式转化（如varchar不加单引号的话可能会自动转换为int型）</p><h3 id="_5、如何删除索引" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E4%BC%81%E4%B8%9A%E7%9C%9F%E9%9D%A2%E8%AF%95%E9%A2%98.md#5%E5%A6%82%E4%BD%95%E5%88%A0%E9%99%A4%E7%B4%A2%E5%BC%95" target="_blank" rel="noreferrer">5、如何删除索引</a> <a class="header-anchor" href="#_5、如何删除索引" aria-label="Permalink to &quot;[5、如何删除索引](https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL高级面试题及答案，企业真面试题.md#5如何删除索引)&quot;">​</a></h3><p>根据索引名删除普通索引、唯一索引、全文索引：<code>alter table 表名 drop KEY 索引名</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">alter table user_index drop KEY name;</span></span>
<span class="line"><span style="color:#f6f6f4;">alter table user_index drop KEY id_card;</span></span>
<span class="line"><span style="color:#f6f6f4;">alter table user_index drop KEY information;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">alter table user_index drop KEY name;</span></span>
<span class="line"><span style="color:#24292e;">alter table user_index drop KEY id_card;</span></span>
<span class="line"><span style="color:#24292e;">alter table user_index drop KEY information;</span></span></code></pre></div><p><strong>删除主键索引：</strong><code>alter table 表名 drop primary key</code>（因为主键只有一个）。这里值得注意的是，如果主键自增长，那么不能直接执行此操作（自增长依赖于主键索引）：</p><p>![99_3.png][99_3.png]</p><p><strong>需要取消自增长再行删除：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">alter table user_index</span></span>
<span class="line"><span style="color:#f6f6f4;">-- 重新定义字段</span></span>
<span class="line"><span style="color:#f6f6f4;">MODIFY id int,</span></span>
<span class="line"><span style="color:#f6f6f4;">drop PRIMARY KEY</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">alter table user_index</span></span>
<span class="line"><span style="color:#24292e;">-- 重新定义字段</span></span>
<span class="line"><span style="color:#24292e;">MODIFY id int,</span></span>
<span class="line"><span style="color:#24292e;">drop PRIMARY KEY</span></span></code></pre></div><p>但通常不会删除主键，因为设计主键一定与业务逻辑无关。</p><h3 id="_6、什么是数据库连接池-为什么需要数据库连接池呢" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E4%BC%81%E4%B8%9A%E7%9C%9F%E9%9D%A2%E8%AF%95%E9%A2%98.md#6%E4%BB%80%E4%B9%88%E6%98%AF%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E6%8E%A5%E6%B1%A0%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E6%8E%A5%E6%B1%A0%E5%91%A2" target="_blank" rel="noreferrer">6、什么是数据库连接池?为什么需要数据库连接池呢?</a> <a class="header-anchor" href="#_6、什么是数据库连接池-为什么需要数据库连接池呢" aria-label="Permalink to &quot;[6、什么是数据库连接池?为什么需要数据库连接池呢?](https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL高级面试题及答案，企业真面试题.md#6什么是数据库连接池为什么需要数据库连接池呢)&quot;">​</a></h3><p><strong>连接池基本原理：</strong></p><p>数据库连接池原理：在内部对象池中，维护一定数量的数据库连接，并对外暴露数据库连接的获取和返回方法。</p><p><strong>应用程序和数据库建立连接的过程：</strong></p><p><strong>1、</strong> 通过TCP协议的三次握手和数据库服务器建立连接</p><p><strong>2、</strong> 发送数据库用户账号密码，等待数据库验证用户身份</p><p><strong>3、</strong> 完成身份验证后，系统可以提交SQL语句到数据库执行</p><p><strong>4、</strong> 把连接关闭，TCP四次挥手告别。</p><p><strong>数据库连接池好处：</strong></p><p><strong>1、</strong> 资源重用 (连接复用)</p><p><strong>2、</strong> 更快的系统响应速度</p><p><strong>3、</strong> 新的资源分配手段</p><p><strong>4、</strong> 统一的连接管理，避免数据库连接泄漏</p><h3 id="_7、列对比运算符是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E4%BC%81%E4%B8%9A%E7%9C%9F%E9%9D%A2%E8%AF%95%E9%A2%98.md#7%E5%88%97%E5%AF%B9%E6%AF%94%E8%BF%90%E7%AE%97%E7%AC%A6%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">7、列对比运算符是什么？</a> <a class="header-anchor" href="#_7、列对比运算符是什么" aria-label="Permalink to &quot;[7、列对比运算符是什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL高级面试题及答案，企业真面试题.md#7列对比运算符是什么)&quot;">​</a></h3><p>在SELECT语句的列比较中使用=，&lt;&gt;，&lt;=，&lt;，&gt; =，&gt;，&lt;&lt;，&gt;&gt;，&lt;=&gt;，AND，OR或LIKE运算符。</p><h3 id="_8、按照锁的粒度分-数据库锁有哪些呢-锁机制与innodb锁算法" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E4%BC%81%E4%B8%9A%E7%9C%9F%E9%9D%A2%E8%AF%95%E9%A2%98.md#8%E6%8C%89%E7%85%A7%E9%94%81%E7%9A%84%E7%B2%92%E5%BA%A6%E5%88%86%E6%95%B0%E6%8D%AE%E5%BA%93%E9%94%81%E6%9C%89%E5%93%AA%E4%BA%9B%E5%91%A2%E9%94%81%E6%9C%BA%E5%88%B6%E4%B8%8Einnodb%E9%94%81%E7%AE%97%E6%B3%95" target="_blank" rel="noreferrer">8、按照锁的粒度分，数据库锁有哪些呢？锁机制与InnoDB锁算法</a> <a class="header-anchor" href="#_8、按照锁的粒度分-数据库锁有哪些呢-锁机制与innodb锁算法" aria-label="Permalink to &quot;[8、按照锁的粒度分，数据库锁有哪些呢？锁机制与InnoDB锁算法](https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL高级面试题及答案，企业真面试题.md#8按照锁的粒度分数据库锁有哪些呢锁机制与innodb锁算法)&quot;">​</a></h3><p>按锁粒度分有：表锁，页锁，行锁</p><p>按锁机制分有：乐观锁，悲观锁</p><h3 id="_9、like声明中的-和-是什么意思" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E4%BC%81%E4%B8%9A%E7%9C%9F%E9%9D%A2%E8%AF%95%E9%A2%98.md#9like%E5%A3%B0%E6%98%8E%E4%B8%AD%E7%9A%84%EF%BC%85%E5%92%8C_%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D" target="_blank" rel="noreferrer">9、LIKE声明中的％和_是什么意思？</a> <a class="header-anchor" href="#_9、like声明中的-和-是什么意思" aria-label="Permalink to &quot;[9、LIKE声明中的％和_是什么意思？](https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL高级面试题及答案，企业真面试题.md#9like声明中的％和_是什么意思)&quot;">​</a></h3><p>％对应于0个或更多字符，_只是LIKE语句中的一个字符。</p><p><strong>如何在Unix和MySQL时间戳之间进行转换？</strong></p><p>UNIX_TIMESTAMP是从MySQL时间戳转换为Unix时间戳的命令</p><p>FROM_UNIXTIME是从Unix时间戳转换为MySQL时间戳的命令</p><h3 id="_10、如何定位及优化sql语句的性能问题-创建的索引有没有被使用到-或者说怎么才可以知道这条语句运行很慢的原因" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%EF%BC%8C%E4%BC%81%E4%B8%9A%E7%9C%9F%E9%9D%A2%E8%AF%95%E9%A2%98.md#10%E5%A6%82%E4%BD%95%E5%AE%9A%E4%BD%8D%E5%8F%8A%E4%BC%98%E5%8C%96sql%E8%AF%AD%E5%8F%A5%E7%9A%84%E6%80%A7%E8%83%BD%E9%97%AE%E9%A2%98%E5%88%9B%E5%BB%BA%E7%9A%84%E7%B4%A2%E5%BC%95%E6%9C%89%E6%B2%A1%E6%9C%89%E8%A2%AB%E4%BD%BF%E7%94%A8%E5%88%B0%E6%88%96%E8%80%85%E8%AF%B4%E6%80%8E%E4%B9%88%E6%89%8D%E5%8F%AF%E4%BB%A5%E7%9F%A5%E9%81%93%E8%BF%99%E6%9D%A1%E8%AF%AD%E5%8F%A5%E8%BF%90%E8%A1%8C%E5%BE%88%E6%85%A2%E7%9A%84%E5%8E%9F%E5%9B%A0" target="_blank" rel="noreferrer">10、如何定位及优化SQL语句的性能问题？创建的索引有没有被使用到?或者说怎么才可以知道这条语句运行很慢的原因？</a> <a class="header-anchor" href="#_10、如何定位及优化sql语句的性能问题-创建的索引有没有被使用到-或者说怎么才可以知道这条语句运行很慢的原因" aria-label="Permalink to &quot;[10、如何定位及优化SQL语句的性能问题？创建的索引有没有被使用到?或者说怎么才可以知道这条语句运行很慢的原因？](https://gitee.com/souyunku/DevBooks/blob/master/docs/MySQL/MySQL高级面试题及答案，企业真面试题.md#10如何定位及优化sql语句的性能问题创建的索引有没有被使用到或者说怎么才可以知道这条语句运行很慢的原因)&quot;">​</a></h3><p>对于低性能的SQL语句的定位，最重要也是最有效的方法就是使用执行计划，MySQL提供了explain命令来查看语句的执行计划。 我们知道，不管是哪种数据库，或者是哪种数据库引擎，在对一条SQL语句进行执行的过程中都会做很多相关的优化，<strong>对于查询语句，最重要的优化方式就是使用索引</strong>。 而<strong>执行计划，就是显示数据库引擎对于SQL语句的执行的详细情况，其中包含了是否使用索引，使用什么索引，使用的索引的相关信息等</strong>。</p><p><img src="https://gitee.com/souyunkutech/souyunku-home/raw/master/images/souyunku-web/2020/5/2/049/50/99_7.png#alt=99%5C_7.png" alt=""></p><p>执行计划包含的信息 <strong>id</strong> 有一组数字组成。表示一个查询中各个子查询的执行顺序;</p><p><strong>1、</strong> id相同执行顺序由上至下。</p><p><strong>2、</strong> id不同，id值越大优先级越高，越先被执行。</p><p><strong>3、</strong> id为null时表示一个结果集，不需要使用它查询，常出现在包含union等查询语句中。</p><p><strong>select_type</strong> 每个子查询的查询类型，一些常见的查询类型。</p><table><thead><tr><th>id</th><th>select_type</th><th>description</th></tr></thead><tbody><tr><td>1</td><td>SIMPLE</td><td>不包含任何子查询或union等查询</td></tr><tr><td>2</td><td>PRIMARY</td><td>包含子查询最外层查询就显示为 PRIMARY</td></tr><tr><td>3</td><td>SUBQUERY</td><td>在select或 where字句中包含的查询</td></tr><tr><td>4</td><td>DERIVED</td><td>from字句中包含的查询</td></tr><tr><td>5</td><td>UNION</td><td>出现在union后的查询语句中</td></tr><tr><td>6</td><td>UNION RESULT</td><td>从UNION中获取结果集，例如上文的第三个例子</td></tr></tbody></table><p><strong>table</strong> 查询的数据表，当从衍生表中查数据时会显示 x 表示对应的执行计划id <strong>partitions</strong> 表分区、表创建的时候可以指定通过那个列进行表分区。 举个例子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">create table tmp (</span></span>
<span class="line"><span style="color:#f6f6f4;">id int unsigned not null AUTO_INCREMENT,</span></span>
<span class="line"><span style="color:#f6f6f4;">name varchar(255),</span></span>
<span class="line"><span style="color:#f6f6f4;">PRIMARY KEY (id)</span></span>
<span class="line"><span style="color:#f6f6f4;">) engine = innodb</span></span>
<span class="line"><span style="color:#f6f6f4;">partition by key (id) partitions 5;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">create table tmp (</span></span>
<span class="line"><span style="color:#24292e;">id int unsigned not null AUTO_INCREMENT,</span></span>
<span class="line"><span style="color:#24292e;">name varchar(255),</span></span>
<span class="line"><span style="color:#24292e;">PRIMARY KEY (id)</span></span>
<span class="line"><span style="color:#24292e;">) engine = innodb</span></span>
<span class="line"><span style="color:#24292e;">partition by key (id) partitions 5;</span></span></code></pre></div><p><strong>type</strong>(非常重要，可以看到有没有走索引) 访问类型</p><p><strong>1、</strong> ALL 扫描全表数据</p><p><strong>2、</strong> index 遍历索引</p><p><strong>3、</strong> range 索引范围查找</p><p><strong>4、</strong> index_subquery 在子查询中使用 ref</p><p><strong>5、</strong> unique_subquery 在子查询中使用 eq_ref</p><p><strong>6、</strong> ref_or_null 对Null进行索引的优化的 ref</p><p><strong>7、</strong> fulltext 使用全文索引</p><p><strong>8、</strong> ref 使用非唯一索引查找数据</p><p><strong>9、</strong> eq_ref 在join查询中使用PRIMARY KEYorUNIQUE NOT NULL索引关联。</p><p><strong>10、</strong> <strong>possible_keys</strong> 可能使用的索引，注意不一定会使用。查询涉及到的字段上若存在索引，则该索引将被列出来。当该列为 NULL时就要考虑当前的SQL是否需要优化了。</p><p><strong>11、</strong> <strong>key</strong> 显示MySQL在查询中实际使用的索引，若没有使用索引，显示为NULL。</p><p><strong>12、</strong> <strong>TIPS</strong>:查询中若使用了覆盖索引(覆盖索引：索引的数据覆盖了需要查询的所有数据)，则该索引仅出现在key列表中</p><p><strong>13、</strong> <strong>key_length</strong> 索引长度</p><p><strong>14、</strong> <strong>ref</strong> 表示上述表的连接匹配条件，即哪些列或常量被用于查找索引列上的值</p><p><strong>15、</strong> <strong>rows</strong> 返回估算的结果集数目，并不是一个准确的值。</p><p><strong>16、</strong> <strong>extra</strong> 的信息非常丰富，常见的有：</p><p><strong>17、</strong> Using index 使用覆盖索引</p><p><strong>18、</strong> Using where 使用了用where子句来过滤结果集</p><p><strong>19、</strong> Using filesort 使用文件排序，使用非索引列进行排序时出现，非常消耗性能，尽量优化。</p><p><strong>20、</strong> Using temporary 使用了临时表 sql优化的目标可以参考阿里开发手册</p><p><strong>推荐</strong></p><p>SQL性能优化的目标：至少要达到 range 级别，要求是ref级别，如果可以是consts最好</p><p><strong>说明：</strong></p><p><strong>1、</strong> consts 单表中最多只有一个匹配行（主键或者唯一索引），在优化阶段即可读取到数据。</p><p><strong>2、</strong> ref 指的是使用普通的索引（normal index）。</p><p><strong>3、</strong> range 对索引进行范围检索。</p><p><strong>反例：</strong></p><p>explain表的结果，type=index，索引物理文件全扫描，速度非常慢，这个index级别比较range还低，与全表扫描是小巫见大巫。</p><h3 id="_11、mysql-的内连接、左连接、右连接有什么区别" tabindex="-1">11、MySQL 的内连接、左连接、右连接有什么区别？ <a class="header-anchor" href="#_11、mysql-的内连接、左连接、右连接有什么区别" aria-label="Permalink to &quot;11、MySQL 的内连接、左连接、右连接有什么区别？&quot;">​</a></h3><h3 id="_12、索引的基本原理" tabindex="-1">12、索引的基本原理 <a class="header-anchor" href="#_12、索引的基本原理" aria-label="Permalink to &quot;12、索引的基本原理&quot;">​</a></h3><h3 id="_13、varchar-50-中50的涵义" tabindex="-1">13、varchar(50)中50的涵义 <a class="header-anchor" href="#_13、varchar-50-中50的涵义" aria-label="Permalink to &quot;13、varchar(50)中50的涵义&quot;">​</a></h3><h3 id="_14、mysql-oracle-sql-service的区别" tabindex="-1">14、MySql, Oracle，Sql Service的区别 <a class="header-anchor" href="#_14、mysql-oracle-sql-service的区别" aria-label="Permalink to &quot;14、MySql, Oracle，Sql Service的区别&quot;">​</a></h3><h3 id="_15、什么是通用sql函数" tabindex="-1">15、什么是通用SQL函数？ <a class="header-anchor" href="#_15、什么是通用sql函数" aria-label="Permalink to &quot;15、什么是通用SQL函数？&quot;">​</a></h3><h3 id="_16、创建索引有什么原则呢" tabindex="-1">16、创建索引有什么原则呢？ <a class="header-anchor" href="#_16、创建索引有什么原则呢" aria-label="Permalink to &quot;16、创建索引有什么原则呢？&quot;">​</a></h3><h3 id="_17、mysql的复制原理以及流程" tabindex="-1">17、MySQL的复制原理以及流程 <a class="header-anchor" href="#_17、mysql的复制原理以及流程" aria-label="Permalink to &quot;17、MySQL的复制原理以及流程&quot;">​</a></h3><h3 id="_18、你是如何监控你们的数据库的-你们的慢日志都是怎么查询的" tabindex="-1">18、你是如何监控你们的数据库的？你们的慢日志都是怎么查询的？ <a class="header-anchor" href="#_18、你是如何监控你们的数据库的-你们的慢日志都是怎么查询的" aria-label="Permalink to &quot;18、你是如何监控你们的数据库的？你们的慢日志都是怎么查询的？&quot;">​</a></h3><h3 id="_19、简述在mysql数据库中myisam和innodb的区别" tabindex="-1">19、简述在MySQL数据库中MyISAM和InnoDB的区别 <a class="header-anchor" href="#_19、简述在mysql数据库中myisam和innodb的区别" aria-label="Permalink to &quot;19、简述在MySQL数据库中MyISAM和InnoDB的区别&quot;">​</a></h3><h3 id="_20、日志的存放形式" tabindex="-1">20、日志的存放形式 <a class="header-anchor" href="#_20、日志的存放形式" aria-label="Permalink to &quot;20、日志的存放形式&quot;">​</a></h3><h3 id="_21、创建索引的原则" tabindex="-1">21、创建索引的原则？ <a class="header-anchor" href="#_21、创建索引的原则" aria-label="Permalink to &quot;21、创建索引的原则？&quot;">​</a></h3><h3 id="_22、blob和text有什么区别" tabindex="-1">22、Blob和text有什么区别？ <a class="header-anchor" href="#_22、blob和text有什么区别" aria-label="Permalink to &quot;22、Blob和text有什么区别？&quot;">​</a></h3><h3 id="_23、主从同步延迟的原因" tabindex="-1">23、主从同步延迟的原因 <a class="header-anchor" href="#_23、主从同步延迟的原因" aria-label="Permalink to &quot;23、主从同步延迟的原因&quot;">​</a></h3><h3 id="_24、说说分库与分表的设计" tabindex="-1">24、说说分库与分表的设计 <a class="header-anchor" href="#_24、说说分库与分表的设计" aria-label="Permalink to &quot;24、说说分库与分表的设计&quot;">​</a></h3><h3 id="_25、mysql支持事务吗" tabindex="-1">25、MYSQL支持事务吗？ <a class="header-anchor" href="#_25、mysql支持事务吗" aria-label="Permalink to &quot;25、MYSQL支持事务吗？&quot;">​</a></h3><h3 id="_26、mysql有关权限的表都有哪几个" tabindex="-1">26、MySQL有关权限的表都有哪几个 <a class="header-anchor" href="#_26、mysql有关权限的表都有哪几个" aria-label="Permalink to &quot;26、MySQL有关权限的表都有哪几个&quot;">​</a></h3><h3 id="_27、什么是触发器-触发器的使用场景有哪些" tabindex="-1">27、什么是触发器？触发器的使用场景有哪些？ <a class="header-anchor" href="#_27、什么是触发器-触发器的使用场景有哪些" aria-label="Permalink to &quot;27、什么是触发器？触发器的使用场景有哪些？&quot;">​</a></h3><h3 id="_28、简述有哪些索引和作用" tabindex="-1">28、简述有哪些索引和作用 <a class="header-anchor" href="#_28、简述有哪些索引和作用" aria-label="Permalink to &quot;28、简述有哪些索引和作用&quot;">​</a></h3><h3 id="_29、数据库中的事务是什么" tabindex="-1">29、数据库中的事务是什么? <a class="header-anchor" href="#_29、数据库中的事务是什么" aria-label="Permalink to &quot;29、数据库中的事务是什么?&quot;">​</a></h3>`,120),r=[o];function l(p,E,i,d,c,A){return s(),e("div",null,r)}const u=a(n,[["render",l]]);export{g as __pageData,u as default};
