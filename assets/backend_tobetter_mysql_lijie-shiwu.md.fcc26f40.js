import{_ as s,o as a,c as n,V as l}from"./chunks/framework.c6d8cbec.js";const e="/docs/assets/lijie-shiwu-1689cc94-9c1b-45a2-a132-0815dcc8e3d4.82346740.png",b=JSON.parse('{"title":"从根上理解 MySQL 的事务 | MySQL 技术论坛","description":"事务的概念 MySQL事务是一个或者多个的数据库操作，要么全部执行成功，要么全部失败回滚。 事务是通过事务日志来实现的，事务日志包括：redo log和undo log。 事务的状态 活动的（active） 事务对应的数据库操作正在...","frontmatter":{"title":"从根上理解 MySQL 的事务 | MySQL 技术论坛","shortTitle":"从根上理解 MySQL 事务","description":"事务的概念 MySQL事务是一个或者多个的数据库操作，要么全部执行成功，要么全部失败回滚。 事务是通过事务日志来实现的，事务日志包括：redo log和undo log。 事务的状态 活动的（active） 事务对应的数据库操作正在...","category":["MySQL"],"tag":["MySQL"],"head":[["meta",{"name":"keywords","content":"mysql,MySQL,MySQL论坛,MySQL社区,MySQL开发者,MySQL教程,MySQL入门,MySQL职位,MySQL工作,MySQL视频,MySQL开源,MySQL新手"}]]},"headers":[],"relativePath":"backend/tobetter/mysql/lijie-shiwu.md","filePath":"backend/tobetter/mysql/lijie-shiwu.md"}'),p={name:"backend/tobetter/mysql/lijie-shiwu.md"},o=l('<h2 id="事务的概念" tabindex="-1">事务的概念 <a class="header-anchor" href="#事务的概念" aria-label="Permalink to &quot;事务的概念&quot;">​</a></h2><blockquote><p>MySQL事务是一个或者多个的数据库操作，要么全部执行成功，要么全部失败回滚。</p><p>事务是通过事务日志来实现的，事务日志包括：redo log和undo log。</p></blockquote><h2 id="事务的状态" tabindex="-1">事务的状态 <a class="header-anchor" href="#事务的状态" aria-label="Permalink to &quot;事务的状态&quot;">​</a></h2><h4 id="活动的-active" tabindex="-1">活动的（active） <a class="header-anchor" href="#活动的-active" aria-label="Permalink to &quot;活动的（active）&quot;">​</a></h4><blockquote><p>事务对应的数据库操作正在执行过程中时，我们就说该事务处在活动的状态。</p></blockquote><h4 id="部分提交的-partially-committed" tabindex="-1">部分提交的（partially committed） <a class="header-anchor" href="#部分提交的-partially-committed" aria-label="Permalink to &quot;部分提交的（partially committed）&quot;">​</a></h4><blockquote><p>当事务中的最后一个操作执行完成，但由于操作都在内存中执行，所造成的影响并没有刷新到磁盘时，我们就说该事务处在部分提交的状态。</p></blockquote><h4 id="失败的-failed" tabindex="-1">失败的（failed） <a class="header-anchor" href="#失败的-failed" aria-label="Permalink to &quot;失败的（failed）&quot;">​</a></h4><blockquote><p>当事务处在活动的或者部分提交的状态时，可能遇到了某些错误（数据库自身的错误、操作系统错误或者直接断电等）而无法继续执行，或者人为的停止当前事务的执行，我们就说该事务处在失败的状态。</p></blockquote><h4 id="中止的-aborted" tabindex="-1">中止的（aborted） <a class="header-anchor" href="#中止的-aborted" aria-label="Permalink to &quot;中止的（aborted）&quot;">​</a></h4><blockquote><p>如果事务执行了半截而变为失败的状态，撤销失败事务对当前数据库造成的影响，我们把这个撤销的过程称之为回滚。</p><p>当回滚操作执行完毕时，也就是数据库恢复到了执行事务之前的状态，我们就说该事务处在了中止的状态。</p></blockquote><h4 id="提交的-committed" tabindex="-1">提交的（committed） <a class="header-anchor" href="#提交的-committed" aria-label="Permalink to &quot;提交的（committed）&quot;">​</a></h4><blockquote><p>当一个处在部分提交的状态的事务将修改过的数据都同步到磁盘上之后，我们就可以说该事务处在了提交的状态。</p></blockquote><img src="'+e+`"><blockquote><p>从图中大家也可以看出了，只有当事务处于提交的或者中止的状态时，一个事务的生命周期才算是结束了。对于已经提交的事务来说，该事务对数据库所做的修改将永久生效，对于处于中止状态的事务，该事务对数据库所做的所有修改都会被回滚到没执行该事务之前的状态。</p></blockquote><h2 id="事务的作用" tabindex="-1">事务的作用 <a class="header-anchor" href="#事务的作用" aria-label="Permalink to &quot;事务的作用&quot;">​</a></h2><blockquote><p>事务主要是为了保证复杂数据库操作数据的一致性，尤其是在并发访问数据时。</p><p>MySQL 事务主要用于处理操作量大，复杂度高的数据。</p></blockquote><h2 id="事务的特点" tabindex="-1">事务的特点 <a class="header-anchor" href="#事务的特点" aria-label="Permalink to &quot;事务的特点&quot;">​</a></h2><h4 id="原子性-atomicity-又称不可分割性" tabindex="-1">原子性（Atomicity，又称不可分割性） <a class="header-anchor" href="#原子性-atomicity-又称不可分割性" aria-label="Permalink to &quot;原子性（Atomicity，又称不可分割性）&quot;">​</a></h4><blockquote><p>事务的数据操作，要么全部执行成功，要么全部失败回滚到执行之前的状态，就像这个事务从来没有执行过一样。</p></blockquote><h4 id="隔离性-isolation-又称独立性" tabindex="-1">隔离性（Isolation，又称独立性） <a class="header-anchor" href="#隔离性-isolation-又称独立性" aria-label="Permalink to &quot;隔离性（Isolation，又称独立性）&quot;">​</a></h4><blockquote><p>多个事务之间是相互隔离，互不影响的。数据库允许多个并发事务同时对其数据进行读写和修改的能力，隔离性可以防止多个事务并发执行时由于交叉执行而导致数据的不一致。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">四种隔离状态：</span></span>
<span class="line"><span style="color:#f6f6f4;">1. 读未提交（Read uncommitted）</span></span>
<span class="line"><span style="color:#f6f6f4;">2. 读提交（Read committed）</span></span>
<span class="line"><span style="color:#f6f6f4;">3. 可重复读（Repeatable read）</span></span>
<span class="line"><span style="color:#f6f6f4;">4. 串行化（Serializable）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">四种隔离状态：</span></span>
<span class="line"><span style="color:#24292e;">1. 读未提交（Read uncommitted）</span></span>
<span class="line"><span style="color:#24292e;">2. 读提交（Read committed）</span></span>
<span class="line"><span style="color:#24292e;">3. 可重复读（Repeatable read）</span></span>
<span class="line"><span style="color:#24292e;">4. 串行化（Serializable）</span></span></code></pre></div><h4 id="一致性-consistency" tabindex="-1">一致性（Consistency） <a class="header-anchor" href="#一致性-consistency" aria-label="Permalink to &quot;一致性（Consistency）&quot;">​</a></h4><blockquote><p>在事务操作之前和之后，数据都是保持一个相同的状态，数据库的完整性没有被破坏。</p><p>原子性和隔离性，对一致性有着至关重要的影响。</p></blockquote><h4 id="持久性-durability" tabindex="-1">持久性（Durability） <a class="header-anchor" href="#持久性-durability" aria-label="Permalink to &quot;持久性（Durability）&quot;">​</a></h4><blockquote><p>当事务操作完成后，数据会被刷新到磁盘永久保存，即便是系统故障也不会丢失。</p></blockquote><h2 id="事务的语法" tabindex="-1">事务的语法 <a class="header-anchor" href="#事务的语法" aria-label="Permalink to &quot;事务的语法&quot;">​</a></h2><h4 id="数据" tabindex="-1">数据 <a class="header-anchor" href="#数据" aria-label="Permalink to &quot;数据&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">创建数据表：</span></span>
<span class="line"><span style="color:#f6f6f4;">create table account(</span></span>
<span class="line"><span style="color:#f6f6f4;">    -&gt; id int(10) auto_increment,</span></span>
<span class="line"><span style="color:#f6f6f4;">    -&gt; name varchar(30),</span></span>
<span class="line"><span style="color:#f6f6f4;">    -&gt; balance int(10),</span></span>
<span class="line"><span style="color:#f6f6f4;">    -&gt; primary key (id));</span></span>
<span class="line"><span style="color:#f6f6f4;">插入数据：</span></span>
<span class="line"><span style="color:#f6f6f4;">insert into account(name,balance) values(&#39;老王媳妇&#39;,100),(&#39;老王&#39;,10);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">创建数据表：</span></span>
<span class="line"><span style="color:#24292e;">create table account(</span></span>
<span class="line"><span style="color:#24292e;">    -&gt; id int(10) auto_increment,</span></span>
<span class="line"><span style="color:#24292e;">    -&gt; name varchar(30),</span></span>
<span class="line"><span style="color:#24292e;">    -&gt; balance int(10),</span></span>
<span class="line"><span style="color:#24292e;">    -&gt; primary key (id));</span></span>
<span class="line"><span style="color:#24292e;">插入数据：</span></span>
<span class="line"><span style="color:#24292e;">insert into account(name,balance) values(&#39;老王媳妇&#39;,100),(&#39;老王&#39;,10);</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">mysql&gt; select * from account;</span></span>
<span class="line"><span style="color:#f6f6f4;">+----+--------------+---------+</span></span>
<span class="line"><span style="color:#f6f6f4;">| id | name         | balance |</span></span>
<span class="line"><span style="color:#f6f6f4;">+----+--------------+---------+</span></span>
<span class="line"><span style="color:#f6f6f4;">|  1 | 老王媳妇 |     100    |</span></span>
<span class="line"><span style="color:#f6f6f4;">|  2 | 老王        |      10 |</span></span>
<span class="line"><span style="color:#f6f6f4;">+----+--------------+---------+</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mysql&gt; select * from account;</span></span>
<span class="line"><span style="color:#24292e;">+----+--------------+---------+</span></span>
<span class="line"><span style="color:#24292e;">| id | name         | balance |</span></span>
<span class="line"><span style="color:#24292e;">+----+--------------+---------+</span></span>
<span class="line"><span style="color:#24292e;">|  1 | 老王媳妇 |     100    |</span></span>
<span class="line"><span style="color:#24292e;">|  2 | 老王        |      10 |</span></span>
<span class="line"><span style="color:#24292e;">+----+--------------+---------+</span></span></code></pre></div><blockquote><p>老王媳妇有100元存在自己的微信账户上了，专门给老王每个月发零花钱用的，表现好给的多，老王也有自己的小金库，目前已经攒到了10元零花钱了，哈哈哈。</p></blockquote><h4 id="begin" tabindex="-1">begin <a class="header-anchor" href="#begin" aria-label="Permalink to &quot;begin&quot;">​</a></h4><blockquote><p>事务启动方式1</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">mysql&gt; begin;</span></span>
<span class="line"><span style="color:#f6f6f4;">Query OK, 0 rows affected (0.00 sec)</span></span>
<span class="line"><span style="color:#f6f6f4;">mysql&gt; 事务操作SQL......</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mysql&gt; begin;</span></span>
<span class="line"><span style="color:#24292e;">Query OK, 0 rows affected (0.00 sec)</span></span>
<span class="line"><span style="color:#24292e;">mysql&gt; 事务操作SQL......</span></span></code></pre></div><h4 id="start-transaction-修饰符" tabindex="-1">start transaction [修饰符] <a class="header-anchor" href="#start-transaction-修饰符" aria-label="Permalink to &quot;start transaction \\[修饰符\\]&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">修饰符：</span></span>
<span class="line"><span style="color:#f6f6f4;">1. read only //只读</span></span>
<span class="line"><span style="color:#f6f6f4;">2. read write //读写 默认</span></span>
<span class="line"><span style="color:#f6f6f4;">3. WITH CONSISTENT SNAPSHOT //一致性读</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">修饰符：</span></span>
<span class="line"><span style="color:#24292e;">1. read only //只读</span></span>
<span class="line"><span style="color:#24292e;">2. read write //读写 默认</span></span>
<span class="line"><span style="color:#24292e;">3. WITH CONSISTENT SNAPSHOT //一致性读</span></span></code></pre></div><blockquote><p>事务启动方式2</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">mysql&gt; start transaction read only;</span></span>
<span class="line"><span style="color:#f6f6f4;">Query OK, 0 rows affected (0.00 sec)</span></span>
<span class="line"><span style="color:#f6f6f4;">mysql&gt; 事务操作SQL......</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mysql&gt; start transaction read only;</span></span>
<span class="line"><span style="color:#24292e;">Query OK, 0 rows affected (0.00 sec)</span></span>
<span class="line"><span style="color:#24292e;">mysql&gt; 事务操作SQL......</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">如设置read only后，对数据进行修改会报错：</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">mysql&gt; start transaction read only;</span></span>
<span class="line"><span style="color:#f6f6f4;">Query OK, 0 rows affected (0.00 sec)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">mysql&gt; update account set balance=banlance+30 where id = 2;</span></span>
<span class="line"><span style="color:#f6f6f4;">ERROR 1792 (25006): Cannot execute statement in a READ ONLY transaction.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">如设置read only后，对数据进行修改会报错：</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">mysql&gt; start transaction read only;</span></span>
<span class="line"><span style="color:#24292e;">Query OK, 0 rows affected (0.00 sec)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">mysql&gt; update account set balance=banlance+30 where id = 2;</span></span>
<span class="line"><span style="color:#24292e;">ERROR 1792 (25006): Cannot execute statement in a READ ONLY transaction.</span></span></code></pre></div><h4 id="commit" tabindex="-1">commit <a class="header-anchor" href="#commit" aria-label="Permalink to &quot;commit&quot;">​</a></h4><blockquote><p>事务执行提交，提交成功则刷新到磁盘</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">mysql&gt; commit;</span></span>
<span class="line"><span style="color:#f6f6f4;">Query OK, 0 rows affected (0.00 sec)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mysql&gt; commit;</span></span>
<span class="line"><span style="color:#24292e;">Query OK, 0 rows affected (0.00 sec)</span></span></code></pre></div><h4 id="rollback" tabindex="-1">rollback <a class="header-anchor" href="#rollback" aria-label="Permalink to &quot;rollback&quot;">​</a></h4><blockquote><p>事务执行回滚，回到事务操作之前的状态。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">mysql&gt; rollback;</span></span>
<span class="line"><span style="color:#f6f6f4;">Query OK, 0 rows affected (0.00 sec)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mysql&gt; rollback;</span></span>
<span class="line"><span style="color:#24292e;">Query OK, 0 rows affected (0.00 sec)</span></span></code></pre></div><blockquote><p>这里需要强调一下，ROLLBACK语句是我们程序员手动的去回滚事务时才去使用的，如果事务在执行过程中遇到了某些错误而无法继续执行的话，事务自身会自动的回滚。</p></blockquote><h4 id="完整的提交例子" tabindex="-1">完整的提交例子 <a class="header-anchor" href="#完整的提交例子" aria-label="Permalink to &quot;完整的提交例子&quot;">​</a></h4><blockquote><p>1月份，老王的表现很不错，老王媳妇给他奖励20元零花钱。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">执行步骤：</span></span>
<span class="line"><span style="color:#f6f6f4;">1. 从老王媳妇账户读取数据</span></span>
<span class="line"><span style="color:#f6f6f4;">2. 从老王媳妇账户上减掉20元</span></span>
<span class="line"><span style="color:#f6f6f4;">3. 从老王账户读取数据</span></span>
<span class="line"><span style="color:#f6f6f4;">4. 给老王账户增加20元</span></span>
<span class="line"><span style="color:#f6f6f4;">5. 执行提交成功</span></span>
<span class="line"><span style="color:#f6f6f4;">6. 此时老王媳妇账户只有80元啦，而老王账户有30元啦，老王高兴不得了咯</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">执行步骤：</span></span>
<span class="line"><span style="color:#24292e;">1. 从老王媳妇账户读取数据</span></span>
<span class="line"><span style="color:#24292e;">2. 从老王媳妇账户上减掉20元</span></span>
<span class="line"><span style="color:#24292e;">3. 从老王账户读取数据</span></span>
<span class="line"><span style="color:#24292e;">4. 给老王账户增加20元</span></span>
<span class="line"><span style="color:#24292e;">5. 执行提交成功</span></span>
<span class="line"><span style="color:#24292e;">6. 此时老王媳妇账户只有80元啦，而老王账户有30元啦，老王高兴不得了咯</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">mysql&gt; begin;</span></span>
<span class="line"><span style="color:#f6f6f4;">Query OK, 0 rows affected (0.01 sec)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">mysql&gt; update account set balance=balance-20 where id = 1;</span></span>
<span class="line"><span style="color:#f6f6f4;">Query OK, 1 row affected (0.00 sec)</span></span>
<span class="line"><span style="color:#f6f6f4;">Rows matched: 1  Changed: 1  Warnings: 0</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">mysql&gt; update account set balance=balance+20 where id = 2;</span></span>
<span class="line"><span style="color:#f6f6f4;">Query OK, 1 row affected (0.00 sec)</span></span>
<span class="line"><span style="color:#f6f6f4;">Rows matched: 1  Changed: 1  Warnings: 0</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">mysql&gt; commit;</span></span>
<span class="line"><span style="color:#f6f6f4;">Query OK, 0 rows affected (0.01 sec)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mysql&gt; begin;</span></span>
<span class="line"><span style="color:#24292e;">Query OK, 0 rows affected (0.01 sec)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">mysql&gt; update account set balance=balance-20 where id = 1;</span></span>
<span class="line"><span style="color:#24292e;">Query OK, 1 row affected (0.00 sec)</span></span>
<span class="line"><span style="color:#24292e;">Rows matched: 1  Changed: 1  Warnings: 0</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">mysql&gt; update account set balance=balance+20 where id = 2;</span></span>
<span class="line"><span style="color:#24292e;">Query OK, 1 row affected (0.00 sec)</span></span>
<span class="line"><span style="color:#24292e;">Rows matched: 1  Changed: 1  Warnings: 0</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">mysql&gt; commit;</span></span>
<span class="line"><span style="color:#24292e;">Query OK, 0 rows affected (0.01 sec)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">账户余额：</span></span>
<span class="line"><span style="color:#f6f6f4;">mysql&gt; select * from account;</span></span>
<span class="line"><span style="color:#f6f6f4;">+----+--------------+---------+</span></span>
<span class="line"><span style="color:#f6f6f4;">| id | name  | balance |</span></span>
<span class="line"><span style="color:#f6f6f4;">+----+--------------+---------+</span></span>
<span class="line"><span style="color:#f6f6f4;">| 1 | 老王媳妇 | 80 |</span></span>
<span class="line"><span style="color:#f6f6f4;">| 2 | 老王  | 30 |</span></span>
<span class="line"><span style="color:#f6f6f4;">+----+--------------+---------+</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">账户余额：</span></span>
<span class="line"><span style="color:#24292e;">mysql&gt; select * from account;</span></span>
<span class="line"><span style="color:#24292e;">+----+--------------+---------+</span></span>
<span class="line"><span style="color:#24292e;">| id | name  | balance |</span></span>
<span class="line"><span style="color:#24292e;">+----+--------------+---------+</span></span>
<span class="line"><span style="color:#24292e;">| 1 | 老王媳妇 | 80 |</span></span>
<span class="line"><span style="color:#24292e;">| 2 | 老王  | 30 |</span></span>
<span class="line"><span style="color:#24292e;">+----+--------------+---------+</span></span></code></pre></div><h4 id="完整的回滚例子" tabindex="-1">完整的回滚例子 <a class="header-anchor" href="#完整的回滚例子" aria-label="Permalink to &quot;完整的回滚例子&quot;">​</a></h4><blockquote><p>2月份，老王本来表现得很棒，坚持干家务活和遛狗，老王媳妇要给他25元的零花钱，可老王不经夸啊，老王媳妇正在给老王转零花钱时，突然看到桌子上老王手机收到一条小女生发来的微信：亲爱的王哥....，老王媳妇特别生气，一怒之下撤回了转账，取消这个月的零花钱。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">执行步骤：</span></span>
<span class="line"><span style="color:#f6f6f4;">1. 从老王媳妇账户读取数据</span></span>
<span class="line"><span style="color:#f6f6f4;">2. 从老王媳妇账户上减掉25元</span></span>
<span class="line"><span style="color:#f6f6f4;">3. 从老王账户读取数据</span></span>
<span class="line"><span style="color:#f6f6f4;">4. 给老王账户增加25元</span></span>
<span class="line"><span style="color:#f6f6f4;">5. 此时老王媳妇撤回之前的操作</span></span>
<span class="line"><span style="color:#f6f6f4;">6. 此时，老王和老王媳妇的账户余额还是保持操作之前的数目</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">执行步骤：</span></span>
<span class="line"><span style="color:#24292e;">1. 从老王媳妇账户读取数据</span></span>
<span class="line"><span style="color:#24292e;">2. 从老王媳妇账户上减掉25元</span></span>
<span class="line"><span style="color:#24292e;">3. 从老王账户读取数据</span></span>
<span class="line"><span style="color:#24292e;">4. 给老王账户增加25元</span></span>
<span class="line"><span style="color:#24292e;">5. 此时老王媳妇撤回之前的操作</span></span>
<span class="line"><span style="color:#24292e;">6. 此时，老王和老王媳妇的账户余额还是保持操作之前的数目</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">mysql&gt; begin;</span></span>
<span class="line"><span style="color:#f6f6f4;">Query OK, 0 rows affected (0.00 sec)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">mysql&gt; update account set balance=balance-25 where id = 1;</span></span>
<span class="line"><span style="color:#f6f6f4;">Query OK, 1 row affected (0.00 sec)</span></span>
<span class="line"><span style="color:#f6f6f4;">Rows matched: 1  Changed: 1  Warnings: 0</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">mysql&gt; update account set balance=balance+25 where id = 2;</span></span>
<span class="line"><span style="color:#f6f6f4;">Query OK, 1 row affected (0.00 sec)</span></span>
<span class="line"><span style="color:#f6f6f4;">Rows matched: 1  Changed: 1  Warnings: 0</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">mysql&gt; rollback;</span></span>
<span class="line"><span style="color:#f6f6f4;">Query OK, 0 rows affected (0.00 sec)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mysql&gt; begin;</span></span>
<span class="line"><span style="color:#24292e;">Query OK, 0 rows affected (0.00 sec)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">mysql&gt; update account set balance=balance-25 where id = 1;</span></span>
<span class="line"><span style="color:#24292e;">Query OK, 1 row affected (0.00 sec)</span></span>
<span class="line"><span style="color:#24292e;">Rows matched: 1  Changed: 1  Warnings: 0</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">mysql&gt; update account set balance=balance+25 where id = 2;</span></span>
<span class="line"><span style="color:#24292e;">Query OK, 1 row affected (0.00 sec)</span></span>
<span class="line"><span style="color:#24292e;">Rows matched: 1  Changed: 1  Warnings: 0</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">mysql&gt; rollback;</span></span>
<span class="line"><span style="color:#24292e;">Query OK, 0 rows affected (0.00 sec)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">账户余额：</span></span>
<span class="line"><span style="color:#f6f6f4;">mysql&gt; select * from account;</span></span>
<span class="line"><span style="color:#f6f6f4;">+----+--------------+---------+</span></span>
<span class="line"><span style="color:#f6f6f4;">| id | name         | balance |</span></span>
<span class="line"><span style="color:#f6f6f4;">+----+--------------+---------+</span></span>
<span class="line"><span style="color:#f6f6f4;">|  1 | 老王媳妇 |      80 |</span></span>
<span class="line"><span style="color:#f6f6f4;">|  2 | 老王       |      30 |</span></span>
<span class="line"><span style="color:#f6f6f4;">+----+--------------+---------+</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">账户余额：</span></span>
<span class="line"><span style="color:#24292e;">mysql&gt; select * from account;</span></span>
<span class="line"><span style="color:#24292e;">+----+--------------+---------+</span></span>
<span class="line"><span style="color:#24292e;">| id | name         | balance |</span></span>
<span class="line"><span style="color:#24292e;">+----+--------------+---------+</span></span>
<span class="line"><span style="color:#24292e;">|  1 | 老王媳妇 |      80 |</span></span>
<span class="line"><span style="color:#24292e;">|  2 | 老王       |      30 |</span></span>
<span class="line"><span style="color:#24292e;">+----+--------------+---------+</span></span></code></pre></div><h2 id="事务支持的存储引擎" tabindex="-1">事务支持的存储引擎 <a class="header-anchor" href="#事务支持的存储引擎" aria-label="Permalink to &quot;事务支持的存储引擎&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">1. InnoDB</span></span>
<span class="line"><span style="color:#f6f6f4;">2. NDB</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1. InnoDB</span></span>
<span class="line"><span style="color:#24292e;">2. NDB</span></span></code></pre></div><blockquote><p>不支持的存储引擎，比如在MyISAM上操作事务，事务不会生效，SQL语句直接自动执行提交，所以回滚对于不支持事务的存储引擎是无效的。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">create table tb1(</span></span>
<span class="line"><span style="color:#f6f6f4;">    -&gt; id int(10) auto_increment,</span></span>
<span class="line"><span style="color:#f6f6f4;">    -&gt; name varchar(30),</span></span>
<span class="line"><span style="color:#f6f6f4;">    -&gt; primary key (id)</span></span>
<span class="line"><span style="color:#f6f6f4;">    -&gt; )engine=myisam charset=utf8mb4;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">mysql&gt; begin;</span></span>
<span class="line"><span style="color:#f6f6f4;">Query OK, 0 rows affected (0.00 sec)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">mysql&gt; insert into tb1(name) values(&#39;Tom&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">Query OK, 1 row affected (0.01 sec)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">mysql&gt; select * from tb1;</span></span>
<span class="line"><span style="color:#f6f6f4;">+----+------+</span></span>
<span class="line"><span style="color:#f6f6f4;">| id | name |</span></span>
<span class="line"><span style="color:#f6f6f4;">+----+------+</span></span>
<span class="line"><span style="color:#f6f6f4;">| 1 | Tom |</span></span>
<span class="line"><span style="color:#f6f6f4;">+----+------+</span></span>
<span class="line"><span style="color:#f6f6f4;">1 row in set (0.00 sec)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">mysql&gt; rollback;//回滚无效</span></span>
<span class="line"><span style="color:#f6f6f4;">Query OK, 0 rows affected, 1 warning (0.00 sec)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">mysql&gt; select * from tb1;</span></span>
<span class="line"><span style="color:#f6f6f4;">+----+------+</span></span>
<span class="line"><span style="color:#f6f6f4;">| id | name |</span></span>
<span class="line"><span style="color:#f6f6f4;">+----+------+</span></span>
<span class="line"><span style="color:#f6f6f4;">| 1 | Tom |</span></span>
<span class="line"><span style="color:#f6f6f4;">+----+------+</span></span>
<span class="line"><span style="color:#f6f6f4;">1 row in set (0.00 sec)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">create table tb1(</span></span>
<span class="line"><span style="color:#24292e;">    -&gt; id int(10) auto_increment,</span></span>
<span class="line"><span style="color:#24292e;">    -&gt; name varchar(30),</span></span>
<span class="line"><span style="color:#24292e;">    -&gt; primary key (id)</span></span>
<span class="line"><span style="color:#24292e;">    -&gt; )engine=myisam charset=utf8mb4;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">mysql&gt; begin;</span></span>
<span class="line"><span style="color:#24292e;">Query OK, 0 rows affected (0.00 sec)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">mysql&gt; insert into tb1(name) values(&#39;Tom&#39;);</span></span>
<span class="line"><span style="color:#24292e;">Query OK, 1 row affected (0.01 sec)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">mysql&gt; select * from tb1;</span></span>
<span class="line"><span style="color:#24292e;">+----+------+</span></span>
<span class="line"><span style="color:#24292e;">| id | name |</span></span>
<span class="line"><span style="color:#24292e;">+----+------+</span></span>
<span class="line"><span style="color:#24292e;">| 1 | Tom |</span></span>
<span class="line"><span style="color:#24292e;">+----+------+</span></span>
<span class="line"><span style="color:#24292e;">1 row in set (0.00 sec)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">mysql&gt; rollback;//回滚无效</span></span>
<span class="line"><span style="color:#24292e;">Query OK, 0 rows affected, 1 warning (0.00 sec)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">mysql&gt; select * from tb1;</span></span>
<span class="line"><span style="color:#24292e;">+----+------+</span></span>
<span class="line"><span style="color:#24292e;">| id | name |</span></span>
<span class="line"><span style="color:#24292e;">+----+------+</span></span>
<span class="line"><span style="color:#24292e;">| 1 | Tom |</span></span>
<span class="line"><span style="color:#24292e;">+----+------+</span></span>
<span class="line"><span style="color:#24292e;">1 row in set (0.00 sec)</span></span></code></pre></div><h2 id="事务的设置与查看" tabindex="-1">事务的设置与查看 <a class="header-anchor" href="#事务的设置与查看" aria-label="Permalink to &quot;事务的设置与查看&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">查看事务开启情况：</span></span>
<span class="line"><span style="color:#f6f6f4;">mysql&gt; SHOW VARIABLES LIKE &#39;autocommit&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;">+---------------+-------+</span></span>
<span class="line"><span style="color:#f6f6f4;">| Variable_name | Value |</span></span>
<span class="line"><span style="color:#f6f6f4;">+---------------+-------+</span></span>
<span class="line"><span style="color:#f6f6f4;">| autocommit | ON |</span></span>
<span class="line"><span style="color:#f6f6f4;">+---------------+-------+</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">查看事务开启情况：</span></span>
<span class="line"><span style="color:#24292e;">mysql&gt; SHOW VARIABLES LIKE &#39;autocommit&#39;;</span></span>
<span class="line"><span style="color:#24292e;">+---------------+-------+</span></span>
<span class="line"><span style="color:#24292e;">| Variable_name | Value |</span></span>
<span class="line"><span style="color:#24292e;">+---------------+-------+</span></span>
<span class="line"><span style="color:#24292e;">| autocommit | ON |</span></span>
<span class="line"><span style="color:#24292e;">+---------------+-------+</span></span></code></pre></div><blockquote><p>默认是事务自动提交的，每执行一条SQL就自动提交。</p><p>此时需要操作事务，则需要显式开启（begin or start transaction）和提交（commit）或回滚（rollback）。</p><p>如设置成OFF，则需要执行提交（commit）或回滚（rollback）操作时才会真正执行事务。</p></blockquote><h4 id="关闭自动提交方式" tabindex="-1">关闭自动提交方式 <a class="header-anchor" href="#关闭自动提交方式" aria-label="Permalink to &quot;关闭自动提交方式&quot;">​</a></h4><h5 id="第一种" tabindex="-1">第一种 <a class="header-anchor" href="#第一种" aria-label="Permalink to &quot;第一种&quot;">​</a></h5><blockquote><p>显式的的使用START TRANSACTION或者BEGIN语句开启一个事务。</p></blockquote><h5 id="第二种" tabindex="-1">第二种 <a class="header-anchor" href="#第二种" aria-label="Permalink to &quot;第二种&quot;">​</a></h5><blockquote><p>把系统变量autocommit的值设置为OFF。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">SET autocommit = OFF;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">SET autocommit = OFF;</span></span></code></pre></div><h4 id="隐式提交情况" tabindex="-1">隐式提交情况 <a class="header-anchor" href="#隐式提交情况" aria-label="Permalink to &quot;隐式提交情况&quot;">​</a></h4><blockquote><p>当我们使用START TRANSACTION或者BEGIN语句开启了一个事务，或者把系统变量autocommit的值设置为OFF时，事务就不会进行自动提交，但是如果我们输入了某些语句之后就会悄悄的提交掉，就像我们输入了COMMIT语句了一样，这种因为某些特殊的语句而导致事务提交的情况称为隐式提交</p></blockquote><h5 id="定义或修改数据库对象的数据定义语言-data-definition-language-缩写为-ddl" tabindex="-1">定义或修改数据库对象的数据定义语言（Data definition language，缩写为：DDL） <a class="header-anchor" href="#定义或修改数据库对象的数据定义语言-data-definition-language-缩写为-ddl" aria-label="Permalink to &quot;定义或修改数据库对象的数据定义语言（Data definition language，缩写为：DDL）&quot;">​</a></h5><blockquote><p>所谓的数据库对象，指的就是数据库、表、视图、存储过程等等这些东西。当我们使用CREATE、ALTER、DROP等语句去修改这些所谓的数据库对象时，就会隐式的提交前边语句所属于的事务。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">BEGIN;</span></span>
<span class="line"><span style="color:#f6f6f4;">SELECT ... # 事务中的一条语句</span></span>
<span class="line"><span style="color:#f6f6f4;">UPDATE ... # 事务中的一条语句</span></span>
<span class="line"><span style="color:#f6f6f4;">... # 事务中的其它语句</span></span>
<span class="line"><span style="color:#f6f6f4;">CREATE TABLE ... # 此语句会隐式的提交前边语句所属于的事务</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">BEGIN;</span></span>
<span class="line"><span style="color:#24292e;">SELECT ... # 事务中的一条语句</span></span>
<span class="line"><span style="color:#24292e;">UPDATE ... # 事务中的一条语句</span></span>
<span class="line"><span style="color:#24292e;">... # 事务中的其它语句</span></span>
<span class="line"><span style="color:#24292e;">CREATE TABLE ... # 此语句会隐式的提交前边语句所属于的事务</span></span></code></pre></div><h5 id="隐式使用或修改mysql数据库中的表" tabindex="-1">隐式使用或修改mysql数据库中的表 <a class="header-anchor" href="#隐式使用或修改mysql数据库中的表" aria-label="Permalink to &quot;隐式使用或修改mysql数据库中的表&quot;">​</a></h5><blockquote><p>隐式使用或修改mysql数据库中的表。</p><p>当我们使用ALTER USER、CREATE USER、DROP USER、GRANT、RENAME USER、REVOKE、SET PASSWORD等语句时也会隐式的提交前边语句所属于的事务。</p></blockquote><h5 id="事务控制或关于锁定的语句" tabindex="-1">事务控制或关于锁定的语句 <a class="header-anchor" href="#事务控制或关于锁定的语句" aria-label="Permalink to &quot;事务控制或关于锁定的语句&quot;">​</a></h5><blockquote><p>事务控制或关于锁定的语句。</p><p>当我们在一个事务还没提交或者回滚时就又使用START TRANSACTION或者BEGIN语句开启了另一个事务时，会隐式的提交上一个事务。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">BEGIN;</span></span>
<span class="line"><span style="color:#f6f6f4;">SELECT ... # 事务中的一条语句</span></span>
<span class="line"><span style="color:#f6f6f4;">UPDATE ... # 事务中的一条语句</span></span>
<span class="line"><span style="color:#f6f6f4;">... # 事务中的其它语句</span></span>
<span class="line"><span style="color:#f6f6f4;">BEGIN; # 此语句会隐式的提交前边语句所属于的事务</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">BEGIN;</span></span>
<span class="line"><span style="color:#24292e;">SELECT ... # 事务中的一条语句</span></span>
<span class="line"><span style="color:#24292e;">UPDATE ... # 事务中的一条语句</span></span>
<span class="line"><span style="color:#24292e;">... # 事务中的其它语句</span></span>
<span class="line"><span style="color:#24292e;">BEGIN; # 此语句会隐式的提交前边语句所属于的事务</span></span></code></pre></div><blockquote><p>或者当前的autocommit系统变量的值为OFF，我们手动把它调为ON时，也会隐式的提交前边语句所属的事务。</p><p>或者使用LOCK TABLES、UNLOCK TABLES等关于锁定的语句也会隐式的提交前边语句所属的事务。</p></blockquote><h5 id="加载数据的语句" tabindex="-1">加载数据的语句 <a class="header-anchor" href="#加载数据的语句" aria-label="Permalink to &quot;加载数据的语句&quot;">​</a></h5><blockquote><p>比如我们使用LOAD DATA语句来批量往数据库中导入数据时，也会隐式的提交前边语句所属的事务。</p></blockquote><h5 id="关于mysql复制的一些语句" tabindex="-1">关于MySQL复制的一些语句 <a class="header-anchor" href="#关于mysql复制的一些语句" aria-label="Permalink to &quot;关于MySQL复制的一些语句&quot;">​</a></h5><blockquote><p>使用START SLAVE、STOP SLAVE、RESET SLAVE、CHANGE MASTER TO等语句时也会隐式的提交前边语句所属的事务。</p></blockquote><h5 id="其它的一些语句" tabindex="-1">其它的一些语句 <a class="header-anchor" href="#其它的一些语句" aria-label="Permalink to &quot;其它的一些语句&quot;">​</a></h5><blockquote><p>使用ANALYZE TABLE、CACHE INDEX、CHECK TABLE、FLUSH、 LOAD INDEX INTO CACHE、OPTIMIZE TABLE、REPAIR TABLE、RESET等语句也会隐式的提交前边语句所属的事务。</p></blockquote><h2 id="事务的保存点" tabindex="-1">事务的保存点 <a class="header-anchor" href="#事务的保存点" aria-label="Permalink to &quot;事务的保存点&quot;">​</a></h2><h4 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h4><blockquote><p>在事务对应的数据库语句中打几个点，我们在调用ROLLBACK语句时可以指定会滚到哪个点，而不是回到最初的原点。</p><p>有了事务的保存点，我们在进行复杂的事务操作时，我们不用担心一出错直接回滚到最初状态，就如一夜回到解放前。</p></blockquote><h4 id="使用语法" tabindex="-1">使用语法 <a class="header-anchor" href="#使用语法" aria-label="Permalink to &quot;使用语法&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">1. SAVEPOINT 保存点名称;//标记保存点</span></span>
<span class="line"><span style="color:#f6f6f4;">2. ROLLBACK TO [SAVEPOINT] 保存点名称;//回滚到某一个保存点</span></span>
<span class="line"><span style="color:#f6f6f4;">3. RELEASE SAVEPOINT 保存点名称;//删除</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1. SAVEPOINT 保存点名称;//标记保存点</span></span>
<span class="line"><span style="color:#24292e;">2. ROLLBACK TO [SAVEPOINT] 保存点名称;//回滚到某一个保存点</span></span>
<span class="line"><span style="color:#24292e;">3. RELEASE SAVEPOINT 保存点名称;//删除</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">mysql&gt; begin;</span></span>
<span class="line"><span style="color:#f6f6f4;">Query OK, 0 rows affected (0.00 sec)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">mysql&gt; update account set balance=balance-20 where id = 1;</span></span>
<span class="line"><span style="color:#f6f6f4;">Query OK, 1 row affected (0.00 sec)</span></span>
<span class="line"><span style="color:#f6f6f4;">Rows matched: 1  Changed: 1  Warnings: 0</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">mysql&gt; savepoint action1;</span></span>
<span class="line"><span style="color:#f6f6f4;">Query OK, 0 rows affected (0.02 sec)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">mysql&gt; select * from account;</span></span>
<span class="line"><span style="color:#f6f6f4;">+----+--------------+---------+</span></span>
<span class="line"><span style="color:#f6f6f4;">| id | name         | balance |</span></span>
<span class="line"><span style="color:#f6f6f4;">+----+--------------+---------+</span></span>
<span class="line"><span style="color:#f6f6f4;">|  1 | 老王媳妇 |      60 |</span></span>
<span class="line"><span style="color:#f6f6f4;">|  2 | 老王       |      30 |</span></span>
<span class="line"><span style="color:#f6f6f4;">+----+--------------+---------+</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">mysql&gt; update account set balance=balance+30 where id = 2;</span></span>
<span class="line"><span style="color:#f6f6f4;">Query OK, 1 row affected (0.01 sec)</span></span>
<span class="line"><span style="color:#f6f6f4;">Rows matched: 1  Changed: 1  Warnings: 0</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">mysql&gt; rollback to action1;//回滚到action1保存点</span></span>
<span class="line"><span style="color:#f6f6f4;">Query OK, 0 rows affected (0.00 sec)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">mysql&gt; select * from account;</span></span>
<span class="line"><span style="color:#f6f6f4;">+----+--------------+---------+</span></span>
<span class="line"><span style="color:#f6f6f4;">| id | name         | balance |</span></span>
<span class="line"><span style="color:#f6f6f4;">+----+--------------+---------+</span></span>
<span class="line"><span style="color:#f6f6f4;">|  1 | 老王媳妇 |      60 |</span></span>
<span class="line"><span style="color:#f6f6f4;">|  2 | 老王       |      30 |</span></span>
<span class="line"><span style="color:#f6f6f4;">+----+--------------+---------+</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mysql&gt; begin;</span></span>
<span class="line"><span style="color:#24292e;">Query OK, 0 rows affected (0.00 sec)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">mysql&gt; update account set balance=balance-20 where id = 1;</span></span>
<span class="line"><span style="color:#24292e;">Query OK, 1 row affected (0.00 sec)</span></span>
<span class="line"><span style="color:#24292e;">Rows matched: 1  Changed: 1  Warnings: 0</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">mysql&gt; savepoint action1;</span></span>
<span class="line"><span style="color:#24292e;">Query OK, 0 rows affected (0.02 sec)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">mysql&gt; select * from account;</span></span>
<span class="line"><span style="color:#24292e;">+----+--------------+---------+</span></span>
<span class="line"><span style="color:#24292e;">| id | name         | balance |</span></span>
<span class="line"><span style="color:#24292e;">+----+--------------+---------+</span></span>
<span class="line"><span style="color:#24292e;">|  1 | 老王媳妇 |      60 |</span></span>
<span class="line"><span style="color:#24292e;">|  2 | 老王       |      30 |</span></span>
<span class="line"><span style="color:#24292e;">+----+--------------+---------+</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">mysql&gt; update account set balance=balance+30 where id = 2;</span></span>
<span class="line"><span style="color:#24292e;">Query OK, 1 row affected (0.01 sec)</span></span>
<span class="line"><span style="color:#24292e;">Rows matched: 1  Changed: 1  Warnings: 0</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">mysql&gt; rollback to action1;//回滚到action1保存点</span></span>
<span class="line"><span style="color:#24292e;">Query OK, 0 rows affected (0.00 sec)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">mysql&gt; select * from account;</span></span>
<span class="line"><span style="color:#24292e;">+----+--------------+---------+</span></span>
<span class="line"><span style="color:#24292e;">| id | name         | balance |</span></span>
<span class="line"><span style="color:#24292e;">+----+--------------+---------+</span></span>
<span class="line"><span style="color:#24292e;">|  1 | 老王媳妇 |      60 |</span></span>
<span class="line"><span style="color:#24292e;">|  2 | 老王       |      30 |</span></span>
<span class="line"><span style="color:#24292e;">+----+--------------+---------+</span></span></code></pre></div><blockquote><p>参考：<a href="https://juejin.im/book/5bffcbc9f265da614b11b731" target="_blank" rel="noreferrer">掘金小册《MySQL 是怎样运行的：从根儿上理解 MySQL》</a></p><p>书籍《MySQL高性能》</p></blockquote>`,94),c=[o];function t(i,r,f,y,d,u){return a(),n("div",null,c)}const m=s(p,[["render",t]]);export{b as __pageData,m as default};
