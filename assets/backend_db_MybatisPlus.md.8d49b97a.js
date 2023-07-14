import{_ as n,o as a,c as l,V as e}from"./chunks/framework.c6d8cbec.js";const p="/docs/assets/mybatis-plus-framework.32be84ad.jpg",o="/docs/assets/image-20210801175555953.8ecfcc29.png",t="/docs/assets/image-20210801175658648.14d94988.png",s="/docs/assets/ktlxicon.25b3f8b1.jpg",c="/docs/assets/image-20210815150629727.118ca9dc.png",r="/docs/assets/image-20220611112238421.d1c0344e.png",i="/docs/assets/image-20210801181232962.0d3ba2f1.png",f="/docs/assets/image-20210801182004226.866a3551.png",y="/docs/assets/2022-09-05-23-42-42.b494921e.png",d="/docs/assets/image-20210801182722773.b2330131.png",u="/docs/assets/image-20210801182809131.472928ed.png",g="/docs/assets/image-20210801220534494.7d5cdf57.png",b="/docs/assets/image-20210801220807882.365c6da6.png",m="/docs/assets/image-20210801192449901.bd965601.png",h="/docs/assets/image-20210801183128266.262246b7.png",v="/docs/assets/image-20210801183157694.3bd38bf3.png",q="/docs/assets/image-20210801183459750.2e29bfda.png",w="/docs/assets/image-20210801183545635.c797d1ff.png",L="/docs/assets/image-20210801223228871.7ba35a99.png",k="/docs/assets/image-20210801183851887.80df96c7.png",U="/docs/assets/image-20210801183929041.5a939d4a.png",I="/docs/assets/image-20210801223855681.ecec41cd.png",_="/docs/assets/image-20210801224114650.99f90bb9.png",S="/docs/assets/image-20210801184632944.f8545313.png",j=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"backend/db/MybatisPlus.md","filePath":"backend/db/MybatisPlus.md"}'),C={name:"backend/db/MybatisPlus.md"},D=e('<h2 id="day08" tabindex="-1">Day08 <a class="header-anchor" href="#day08" aria-label="Permalink to &quot;Day08&quot;">​</a></h2><h2 id="今日目标" tabindex="-1">今日目标 <a class="header-anchor" href="#今日目标" aria-label="Permalink to &quot;今日目标&quot;">​</a></h2><p>目标</p><ul><li>能够基于 MyBatisPlus 完成标准 Dao 开发 ❤️</li><li>能够掌握 MyBatisPlus 的条件查询 ❤️</li><li>能够掌握 MyBatisPlus 的字段映射与表名映射 ❤️</li><li>能够掌握 id 生成策略控制</li><li>能够理解代码生成器的相关配置</li></ul><h2 id="_1-mpopen-in-new-window-简介以及入门案例" tabindex="-1"><a href="http://1.mp/" target="_blank" rel="noreferrer">1.MPopen in new window</a> 简介以及入门案例 <a class="header-anchor" href="#_1-mpopen-in-new-window-简介以及入门案例" aria-label="Permalink to &quot;[1.MPopen in new window](http://1.mp/) 简介以及入门案例&quot;">​</a></h2><p>MyBatisPlus 简介以及入门案例</p><p><strong>MyBatisPlus</strong> 特性 👇</p><ul><li><strong>无侵入</strong>：只做增强不做改变，引入它不会对现有工程产生影响，如丝般顺滑 👈</li><li><strong>损耗小</strong>：启动即会自动注入基本 CURD，性能基本无损耗，直接面向对象操作 👍</li><li><strong>强大的 CRUD 操作</strong>：内置通用 Mapper、通用 Service，仅仅通过少量配置即可实现单表大部分 CRUD 操作，更有强大的条件构造器，满足各类使用需求</li><li><strong>支持 Lambda 形式调用</strong>：通过 Lambda 表达式，方便的编写各类查询条件，无需再担心字段写错</li><li><strong>支持主键自动生成</strong>：支持多达 4 种主键策略（内含分布式唯一 ID 生成器 - Sequence），可自由配置，完美解决主键问题</li><li><strong>支持 ActiveRecord 模式</strong>：支持 ActiveRecord 形式调用，实体类只需继承 Model 类即可进行强大的 CRUD 操作</li><li><strong>支持自定义全局通用操作</strong>：支持全局通用方法注入（ Write once, use anywhere ）</li><li><strong>内置代码生成器</strong>：采用代码或者 Maven 插件可快速生成 Mapper 、 Model 、 Service 、 Controller 层代码，支持模板引擎，更有超多自定义配置等您来使用</li><li><strong>内置分页插件</strong>：基于 MyBatis 物理分页，开发者无需关心具体操作，配置好插件之后，写分页等同于普通 List 查询</li><li><strong>分页插件支持多种数据库</strong>：支持 MySQL、MariaDB、Oracle、DB2、H2、HSQL、SQLite、Postgre、SQLServer 等多种数据库</li><li><strong>内置性能分析插件</strong>：可输出 Sql 语句以及其执行时间，建议开发测试时启用该功能，能快速揪出慢查询</li><li><strong>内置全局拦截插件</strong>：提供全表 delete 、 update 操作智能分析阻断，也可自定义拦截规则，预防误操作</li></ul><p><strong>支持数据库</strong></p><ul><li><p>mysql 、mariadb 、oracle 、db2 、h2 、hsql 、sqlite 、postgresql 、sqlserver 、presto 、Gauss 、Firebird</p></li><li><p>Phoenix 、clickhouse 、Sybase ASE 、 OceanBase 、达梦数据库 、虚谷数据库 、人大金仓数据库 、南大通用数据库</p></li></ul><p>框架结构了解</p><img src="'+p+'"><p><strong>代码实现</strong> 👇</p><h5 id="_1️⃣-创建新模块-选择-spring-初始化-并配置模块相关基础信息" tabindex="-1">1️⃣ 创建新模块，选择 Spring 初始化，并配置模块相关基础信息 <a class="header-anchor" href="#_1️⃣-创建新模块-选择-spring-初始化-并配置模块相关基础信息" aria-label="Permalink to &quot;1️⃣ 创建新模块，选择 Spring 初始化，并配置模块相关基础信息&quot;">​</a></h5><img src="'+o+'"><h5 id="_2️⃣-选择当前模块需要使用的技术集-仅保留-jdbc" tabindex="-1">2️⃣ 选择当前模块需要使用的技术集（仅保留 JDBC） <a class="header-anchor" href="#_2️⃣-选择当前模块需要使用的技术集-仅保留-jdbc" aria-label="Permalink to &quot;2️⃣ 选择当前模块需要使用的技术集（仅保留 JDBC）&quot;">​</a></h5><img src="'+t+`"><h5 id="_3️⃣-手动添加-mybatisplus-起步依赖" tabindex="-1">3️⃣ 手动添加 MyBatisPlus 起步依赖 <a class="header-anchor" href="#_3️⃣-手动添加-mybatisplus-起步依赖" aria-label="Permalink to &quot;3️⃣ 手动添加 MyBatisPlus 起步依赖&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;groupId&gt;com.baomidou&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;artifactId&gt;mybatis-plus-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;version&gt;3.4.1&lt;/version&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;artifactId&gt;druid&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;version&gt;1.1.16&lt;/version&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;com.baomidou&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;mybatis-plus-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;version&gt;3.4.1&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;druid&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;version&gt;1.1.16&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p><strong>注意事项 1：由于 mp 并未被收录到 idea 的系统内置配置，无法直接选择加入</strong></p><p><strong>注意事项 2：如果使用 Druid 数据源，需要导入对应坐标</strong></p><h5 id="_4️⃣-制作实体类与表结构" tabindex="-1">4️⃣ 制作实体类与表结构 <a class="header-anchor" href="#_4️⃣-制作实体类与表结构" aria-label="Permalink to &quot;4️⃣ 制作实体类与表结构&quot;">​</a></h5><p>（<strong>类名与表名对应，属性名与字段名对应</strong>）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">create database if not exists mybatisplus_db character set utf8;</span></span>
<span class="line"><span style="color:#f6f6f4;">use mybatisplus_db;</span></span>
<span class="line"><span style="color:#f6f6f4;">CREATE TABLE user (</span></span>
<span class="line"><span style="color:#f6f6f4;">            id bigint(20) primary key auto_increment,</span></span>
<span class="line"><span style="color:#f6f6f4;">            name varchar(32) not null,</span></span>
<span class="line"><span style="color:#f6f6f4;">            password  varchar(32) not null,</span></span>
<span class="line"><span style="color:#f6f6f4;">            age int(3) not null ,</span></span>
<span class="line"><span style="color:#f6f6f4;">            tel varchar(32) not null</span></span>
<span class="line"><span style="color:#f6f6f4;">);</span></span>
<span class="line"><span style="color:#f6f6f4;">insert into user values(null,&#39;tom&#39;,&#39;123456&#39;,12,&#39;12345678910&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">insert into user values(null,&#39;jack&#39;,&#39;123456&#39;,8,&#39;12345678910&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">insert into user values(null,&#39;jerry&#39;,&#39;123456&#39;,15,&#39;12345678910&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">insert into user values(null,&#39;tom&#39;,&#39;123456&#39;,9,&#39;12345678910&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">insert into user values(null,&#39;snake&#39;,&#39;123456&#39;,28,&#39;12345678910&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">insert into user values(null,&#39;张益达&#39;,&#39;123456&#39;,22,&#39;12345678910&#39;);</span></span>
<span class="line"><span style="color:#f6f6f4;">insert into user values(null,&#39;张大炮&#39;,&#39;123456&#39;,16,&#39;12345678910&#39;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">create database if not exists mybatisplus_db character set utf8;</span></span>
<span class="line"><span style="color:#24292e;">use mybatisplus_db;</span></span>
<span class="line"><span style="color:#24292e;">CREATE TABLE user (</span></span>
<span class="line"><span style="color:#24292e;">            id bigint(20) primary key auto_increment,</span></span>
<span class="line"><span style="color:#24292e;">            name varchar(32) not null,</span></span>
<span class="line"><span style="color:#24292e;">            password  varchar(32) not null,</span></span>
<span class="line"><span style="color:#24292e;">            age int(3) not null ,</span></span>
<span class="line"><span style="color:#24292e;">            tel varchar(32) not null</span></span>
<span class="line"><span style="color:#24292e;">);</span></span>
<span class="line"><span style="color:#24292e;">insert into user values(null,&#39;tom&#39;,&#39;123456&#39;,12,&#39;12345678910&#39;);</span></span>
<span class="line"><span style="color:#24292e;">insert into user values(null,&#39;jack&#39;,&#39;123456&#39;,8,&#39;12345678910&#39;);</span></span>
<span class="line"><span style="color:#24292e;">insert into user values(null,&#39;jerry&#39;,&#39;123456&#39;,15,&#39;12345678910&#39;);</span></span>
<span class="line"><span style="color:#24292e;">insert into user values(null,&#39;tom&#39;,&#39;123456&#39;,9,&#39;12345678910&#39;);</span></span>
<span class="line"><span style="color:#24292e;">insert into user values(null,&#39;snake&#39;,&#39;123456&#39;,28,&#39;12345678910&#39;);</span></span>
<span class="line"><span style="color:#24292e;">insert into user values(null,&#39;张益达&#39;,&#39;123456&#39;,22,&#39;12345678910&#39;);</span></span>
<span class="line"><span style="color:#24292e;">insert into user values(null,&#39;张大炮&#39;,&#39;123456&#39;,16,&#39;12345678910&#39;);</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">public class User {</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Long id;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private String name;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private String password;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Integer age;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private String tel;</span></span>
<span class="line"><span style="color:#f6f6f4;">    //自行添加getter、setter、toString()等方法</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class User {</span></span>
<span class="line"><span style="color:#24292e;">    private Long id;</span></span>
<span class="line"><span style="color:#24292e;">    private String name;</span></span>
<span class="line"><span style="color:#24292e;">    private String password;</span></span>
<span class="line"><span style="color:#24292e;">    private Integer age;</span></span>
<span class="line"><span style="color:#24292e;">    private String tel;</span></span>
<span class="line"><span style="color:#24292e;">    //自行添加getter、setter、toString()等方法</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><blockquote><p>也可以使用DML语句进行转化：<a href="https://www.json.cn/json/sql2java.html" target="_blank" rel="noreferrer">JSON网址open in new window</a></p></blockquote><h5 id="_5️⃣-设置-jdbc-参数-application-yml" tabindex="-1">5️⃣ 设置 Jdbc 参数（<strong>application.yml</strong>） <a class="header-anchor" href="#_5️⃣-设置-jdbc-参数-application-yml" aria-label="Permalink to &quot;5️⃣ 设置 Jdbc 参数（**application.yml**）&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">spring:</span></span>
<span class="line"><span style="color:#f6f6f4;">  datasource:</span></span>
<span class="line"><span style="color:#f6f6f4;">    type: com.alibaba.druid.pool.DruidDataSource</span></span>
<span class="line"><span style="color:#f6f6f4;">    driver-class-name: com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span style="color:#f6f6f4;">    url: jdbc:mysql://localhost:3306/mybatisplus_db?serverTimezone=UTC</span></span>
<span class="line"><span style="color:#f6f6f4;">    username: root</span></span>
<span class="line"><span style="color:#f6f6f4;">    password: root</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">spring:</span></span>
<span class="line"><span style="color:#24292e;">  datasource:</span></span>
<span class="line"><span style="color:#24292e;">    type: com.alibaba.druid.pool.DruidDataSource</span></span>
<span class="line"><span style="color:#24292e;">    driver-class-name: com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span style="color:#24292e;">    url: jdbc:mysql://localhost:3306/mybatisplus_db?serverTimezone=UTC</span></span>
<span class="line"><span style="color:#24292e;">    username: root</span></span>
<span class="line"><span style="color:#24292e;">    password: root</span></span></code></pre></div><h5 id="_6️⃣-定义数据接口-继承basemapper-最关键" tabindex="-1">6️⃣ 定义数据接口，继承<strong>BaseMapper</strong> 最关键 <a class="header-anchor" href="#_6️⃣-定义数据接口-继承basemapper-最关键" aria-label="Permalink to &quot;6️⃣ 定义数据接口，继承**BaseMapper** 最关键&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Mapper</span></span>
<span class="line"><span style="color:#f6f6f4;">public interface UserDao extends BaseMapper&lt;User&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Mapper</span></span>
<span class="line"><span style="color:#24292e;">public interface UserDao extends BaseMapper&lt;User&gt; {</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h5 id="_7️⃣-测试类中注入-dao-接口-测试功能" tabindex="-1">7️⃣ 测试类中注入 dao 接口，测试功能 <a class="header-anchor" href="#_7️⃣-测试类中注入-dao-接口-测试功能" aria-label="Permalink to &quot;7️⃣ 测试类中注入 dao 接口，测试功能&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">package com.itheima;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">@SpringBootTest</span></span>
<span class="line"><span style="color:#f6f6f4;">public class Mybatisplus01QuickstartApplicationTests {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    @Autowired</span></span>
<span class="line"><span style="color:#f6f6f4;">    private UserDao userDao;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    @Test</span></span>
<span class="line"><span style="color:#f6f6f4;">    void testGetAll() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        List&lt;User&gt; userList = userDao.selectList(null);</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(userList);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package com.itheima;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">@SpringBootTest</span></span>
<span class="line"><span style="color:#24292e;">public class Mybatisplus01QuickstartApplicationTests {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Autowired</span></span>
<span class="line"><span style="color:#24292e;">    private UserDao userDao;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Test</span></span>
<span class="line"><span style="color:#24292e;">    void testGetAll() {</span></span>
<span class="line"><span style="color:#24292e;">        List&lt;User&gt; userList = userDao.selectList(null);</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(userList);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>课堂作业</p><p>🎻 1.能流利说出MP的特点和应用场景，并且参考上述的步鄹，完成入门案例</p><img src="`+s+'"><h2 id="_2-mpopen-in-new-window-的-crud-操作" tabindex="-1"><a href="http://2.mp/" target="_blank" rel="noreferrer">2.MPopen in new window</a> 的 CRUD 操作 <a class="header-anchor" href="#_2-mpopen-in-new-window-的-crud-操作" aria-label="Permalink to &quot;[2.MPopen in new window](http://2.mp/) 的 CRUD 操作&quot;">​</a></h2><p>POI入门案例</p><img src="'+c+`"><p><strong>代码实现</strong> 👇</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@SpringBootTest</span></span>
<span class="line"><span style="color:#f6f6f4;">class Mybatisplus01QuickstartApplicationTests {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    @Autowired</span></span>
<span class="line"><span style="color:#f6f6f4;">    private UserDao userDao;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    @Test</span></span>
<span class="line"><span style="color:#f6f6f4;">    void testSave() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        User user = new User();</span></span>
<span class="line"><span style="color:#f6f6f4;">        user.setName(&quot;黑马程序员&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        user.setPassword(&quot;itheima&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        user.setAge(12);</span></span>
<span class="line"><span style="color:#f6f6f4;">        user.setTel(&quot;4006184000&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        userDao.insert(user);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    @Test</span></span>
<span class="line"><span style="color:#f6f6f4;">    void testDelete() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        userDao.deleteById(1401856123725713409L);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    //按照主键删除多条记录</span></span>
<span class="line"><span style="color:#f6f6f4;">    @Test</span></span>
<span class="line"><span style="color:#f6f6f4;">    void testDeleteBatch() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        //删除指定多条数据</span></span>
<span class="line"><span style="color:#f6f6f4;">        List&lt;Long&gt; list = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="color:#f6f6f4;">        list.add(1402551342481838081L);</span></span>
<span class="line"><span style="color:#f6f6f4;">        list.add(1402553134049501186L);</span></span>
<span class="line"><span style="color:#f6f6f4;">        list.add(1402553619611430913L);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        userDao.deleteBatchIds(list);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">    </span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    @Test</span></span>
<span class="line"><span style="color:#f6f6f4;">    void testUpdate() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        User user = new User();</span></span>
<span class="line"><span style="color:#f6f6f4;">        user.setId(1L);</span></span>
<span class="line"><span style="color:#f6f6f4;">        user.setName(&quot;Tom888&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        user.setPassword(&quot;tom888&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        userDao.updateById(user);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    @Test</span></span>
<span class="line"><span style="color:#f6f6f4;">    void testGetById() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        User user = userDao.selectById(2L);</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(user);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    @Test</span></span>
<span class="line"><span style="color:#f6f6f4;">    void testGetAll() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        List&lt;User&gt; userList = userDao.selectList(null);</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(userList);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    @Test</span></span>
<span class="line"><span style="color:#f6f6f4;">    void testGetSome() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        //查询指定多条数据</span></span>
<span class="line"><span style="color:#f6f6f4;">        List&lt;Long&gt; list = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="color:#f6f6f4;">        list.add(1L);</span></span>
<span class="line"><span style="color:#f6f6f4;">        list.add(3L);</span></span>
<span class="line"><span style="color:#f6f6f4;">        list.add(4L);</span></span>
<span class="line"><span style="color:#f6f6f4;">        userDao.selectBatchIds(list);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@SpringBootTest</span></span>
<span class="line"><span style="color:#24292e;">class Mybatisplus01QuickstartApplicationTests {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Autowired</span></span>
<span class="line"><span style="color:#24292e;">    private UserDao userDao;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Test</span></span>
<span class="line"><span style="color:#24292e;">    void testSave() {</span></span>
<span class="line"><span style="color:#24292e;">        User user = new User();</span></span>
<span class="line"><span style="color:#24292e;">        user.setName(&quot;黑马程序员&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        user.setPassword(&quot;itheima&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        user.setAge(12);</span></span>
<span class="line"><span style="color:#24292e;">        user.setTel(&quot;4006184000&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        userDao.insert(user);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Test</span></span>
<span class="line"><span style="color:#24292e;">    void testDelete() {</span></span>
<span class="line"><span style="color:#24292e;">        userDao.deleteById(1401856123725713409L);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    //按照主键删除多条记录</span></span>
<span class="line"><span style="color:#24292e;">    @Test</span></span>
<span class="line"><span style="color:#24292e;">    void testDeleteBatch() {</span></span>
<span class="line"><span style="color:#24292e;">        //删除指定多条数据</span></span>
<span class="line"><span style="color:#24292e;">        List&lt;Long&gt; list = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292e;">        list.add(1402551342481838081L);</span></span>
<span class="line"><span style="color:#24292e;">        list.add(1402553134049501186L);</span></span>
<span class="line"><span style="color:#24292e;">        list.add(1402553619611430913L);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        userDao.deleteBatchIds(list);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Test</span></span>
<span class="line"><span style="color:#24292e;">    void testUpdate() {</span></span>
<span class="line"><span style="color:#24292e;">        User user = new User();</span></span>
<span class="line"><span style="color:#24292e;">        user.setId(1L);</span></span>
<span class="line"><span style="color:#24292e;">        user.setName(&quot;Tom888&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        user.setPassword(&quot;tom888&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        userDao.updateById(user);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Test</span></span>
<span class="line"><span style="color:#24292e;">    void testGetById() {</span></span>
<span class="line"><span style="color:#24292e;">        User user = userDao.selectById(2L);</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(user);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Test</span></span>
<span class="line"><span style="color:#24292e;">    void testGetAll() {</span></span>
<span class="line"><span style="color:#24292e;">        List&lt;User&gt; userList = userDao.selectList(null);</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(userList);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Test</span></span>
<span class="line"><span style="color:#24292e;">    void testGetSome() {</span></span>
<span class="line"><span style="color:#24292e;">        //查询指定多条数据</span></span>
<span class="line"><span style="color:#24292e;">        List&lt;Long&gt; list = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292e;">        list.add(1L);</span></span>
<span class="line"><span style="color:#24292e;">        list.add(3L);</span></span>
<span class="line"><span style="color:#24292e;">        list.add(4L);</span></span>
<span class="line"><span style="color:#24292e;">        userDao.selectBatchIds(list);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><ul><li>Lombok，一个 Java 类库，提供了一组注解，简化 POJO 实体类开发。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;artifactId&gt;lombok&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;version&gt;1.18.12&lt;/version&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;lombok&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;version&gt;1.18.12&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><ul><li>常用注解：@Data ，为当前实体类在编译期设置对应的 get/set 方法，无参/无参构造方法，toString 方法，hashCode 方法，equals 方法等</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">package com.itheima.domain;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">import lombok.*;</span></span>
<span class="line"><span style="color:#f6f6f4;">/*</span></span>
<span class="line"><span style="color:#f6f6f4;">    1 生成getter和setter方法：@Getter、@Setter</span></span>
<span class="line"><span style="color:#f6f6f4;">      生成toString方法：@ToString</span></span>
<span class="line"><span style="color:#f6f6f4;">      生成equals和hashcode方法：@EqualsAndHashCode</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    2 统一成以上所有：@Data</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    3 生成空参构造： @NoArgsConstructor</span></span>
<span class="line"><span style="color:#f6f6f4;">      生成全参构造： @AllArgsConstructor</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    4 lombok还给我们提供了builder的方式创建对象,好处就是可以链式编程。 @Builder【扩展】</span></span>
<span class="line"><span style="color:#f6f6f4;"> */</span></span>
<span class="line"><span style="color:#f6f6f4;">@Data</span></span>
<span class="line"><span style="color:#f6f6f4;">public class User {</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Long id;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private String name;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private String password;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Integer age;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private String tel;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package com.itheima.domain;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">import lombok.*;</span></span>
<span class="line"><span style="color:#24292e;">/*</span></span>
<span class="line"><span style="color:#24292e;">    1 生成getter和setter方法：@Getter、@Setter</span></span>
<span class="line"><span style="color:#24292e;">      生成toString方法：@ToString</span></span>
<span class="line"><span style="color:#24292e;">      生成equals和hashcode方法：@EqualsAndHashCode</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    2 统一成以上所有：@Data</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    3 生成空参构造： @NoArgsConstructor</span></span>
<span class="line"><span style="color:#24292e;">      生成全参构造： @AllArgsConstructor</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    4 lombok还给我们提供了builder的方式创建对象,好处就是可以链式编程。 @Builder【扩展】</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">@Data</span></span>
<span class="line"><span style="color:#24292e;">public class User {</span></span>
<span class="line"><span style="color:#24292e;">    private Long id;</span></span>
<span class="line"><span style="color:#24292e;">    private String name;</span></span>
<span class="line"><span style="color:#24292e;">    private String password;</span></span>
<span class="line"><span style="color:#24292e;">    private Integer age;</span></span>
<span class="line"><span style="color:#24292e;">    private String tel;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><ul><li>不单单要写依赖，还需要安装插件<a href="http://www.yangeit.cn:21010/expand/ideaplugins.html" target="_blank" rel="noreferrer">插件帮助</a></li></ul><img src="`+r+`"><h5 id="_1️⃣-设置分页拦截器作为-spring-管理的-bean" tabindex="-1">1️⃣ <strong>设置分页拦截器作为 Spring 管理的 bean</strong> <a class="header-anchor" href="#_1️⃣-设置分页拦截器作为-spring-管理的-bean" aria-label="Permalink to &quot;1️⃣ **设置分页拦截器作为 Spring 管理的 bean**&quot;">​</a></h5><blockquote><p>config包下</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Configuration</span></span>
<span class="line"><span style="color:#f6f6f4;">public class MybatisPlusConfig {</span></span>
<span class="line"><span style="color:#f6f6f4;">    @Bean</span></span>
<span class="line"><span style="color:#f6f6f4;">    public MybatisPlusInterceptor mybatisPlusInterceptor(){</span></span>
<span class="line"><span style="color:#f6f6f4;">        //1 创建MybatisPlusInterceptor拦截器对象</span></span>
<span class="line"><span style="color:#f6f6f4;">        MybatisPlusInterceptor mpInterceptor=new MybatisPlusInterceptor();</span></span>
<span class="line"><span style="color:#f6f6f4;">        //2 添加分页拦截器</span></span>
<span class="line"><span style="color:#f6f6f4;">        mpInterceptor.addInnerInterceptor(new PaginationInnerInterceptor());</span></span>
<span class="line"><span style="color:#f6f6f4;">        return mpInterceptor;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Configuration</span></span>
<span class="line"><span style="color:#24292e;">public class MybatisPlusConfig {</span></span>
<span class="line"><span style="color:#24292e;">    @Bean</span></span>
<span class="line"><span style="color:#24292e;">    public MybatisPlusInterceptor mybatisPlusInterceptor(){</span></span>
<span class="line"><span style="color:#24292e;">        //1 创建MybatisPlusInterceptor拦截器对象</span></span>
<span class="line"><span style="color:#24292e;">        MybatisPlusInterceptor mpInterceptor=new MybatisPlusInterceptor();</span></span>
<span class="line"><span style="color:#24292e;">        //2 添加分页拦截器</span></span>
<span class="line"><span style="color:#24292e;">        mpInterceptor.addInnerInterceptor(new PaginationInnerInterceptor());</span></span>
<span class="line"><span style="color:#24292e;">        return mpInterceptor;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h5 id="_2️⃣-执行分页查询" tabindex="-1">2️⃣ <strong>执行分页查询</strong> <a class="header-anchor" href="#_2️⃣-执行分页查询" aria-label="Permalink to &quot;2️⃣ **执行分页查询**&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">//分页查询</span></span>
<span class="line"><span style="color:#f6f6f4;">@Test</span></span>
<span class="line"><span style="color:#f6f6f4;">void testSelectPage(){</span></span>
<span class="line"><span style="color:#f6f6f4;">    //1 创建IPage分页对象,设置分页参数</span></span>
<span class="line"><span style="color:#f6f6f4;">    IPage&lt;User&gt; page=new Page&lt;&gt;(1,3);</span></span>
<span class="line"><span style="color:#f6f6f4;">    //2 执行分页查询</span></span>
<span class="line"><span style="color:#f6f6f4;">    userDao.selectPage(page,null);</span></span>
<span class="line"><span style="color:#f6f6f4;">    //3 获取分页结果</span></span>
<span class="line"><span style="color:#f6f6f4;">    System.out.println(&quot;当前页码值：&quot;+page.getCurrent());</span></span>
<span class="line"><span style="color:#f6f6f4;">    System.out.println(&quot;每页显示数：&quot;+page.getSize());</span></span>
<span class="line"><span style="color:#f6f6f4;">    System.out.println(&quot;总页数：&quot;+page.getPages());</span></span>
<span class="line"><span style="color:#f6f6f4;">    System.out.println(&quot;总条数：&quot;+page.getTotal());</span></span>
<span class="line"><span style="color:#f6f6f4;">    System.out.println(&quot;当前页数据：&quot;+page.getRecords());</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//分页查询</span></span>
<span class="line"><span style="color:#24292e;">@Test</span></span>
<span class="line"><span style="color:#24292e;">void testSelectPage(){</span></span>
<span class="line"><span style="color:#24292e;">    //1 创建IPage分页对象,设置分页参数</span></span>
<span class="line"><span style="color:#24292e;">    IPage&lt;User&gt; page=new Page&lt;&gt;(1,3);</span></span>
<span class="line"><span style="color:#24292e;">    //2 执行分页查询</span></span>
<span class="line"><span style="color:#24292e;">    userDao.selectPage(page,null);</span></span>
<span class="line"><span style="color:#24292e;">    //3 获取分页结果</span></span>
<span class="line"><span style="color:#24292e;">    System.out.println(&quot;当前页码值：&quot;+page.getCurrent());</span></span>
<span class="line"><span style="color:#24292e;">    System.out.println(&quot;每页显示数：&quot;+page.getSize());</span></span>
<span class="line"><span style="color:#24292e;">    System.out.println(&quot;总页数：&quot;+page.getPages());</span></span>
<span class="line"><span style="color:#24292e;">    System.out.println(&quot;总条数：&quot;+page.getTotal());</span></span>
<span class="line"><span style="color:#24292e;">    System.out.println(&quot;当前页数据：&quot;+page.getRecords());</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h5 id="_3️⃣-开启mybatisplus日志" tabindex="-1">3️⃣ 开启MyBatisPlus日志 <a class="header-anchor" href="#_3️⃣-开启mybatisplus日志" aria-label="Permalink to &quot;3️⃣ 开启MyBatisPlus日志&quot;">​</a></h5><p>在yml文件中修改 ✏️ ✏️</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">spring:</span></span>
<span class="line"><span style="color:#f6f6f4;">  main:</span></span>
<span class="line"><span style="color:#f6f6f4;">    banner-mode: off # 关闭SpringBoot启动图标(banner)</span></span>
<span class="line"><span style="color:#f6f6f4;">  datasource:</span></span>
<span class="line"><span style="color:#f6f6f4;">    type: com.alibaba.druid.pool.DruidDataSource</span></span>
<span class="line"><span style="color:#f6f6f4;">    driver-class-name: com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span style="color:#f6f6f4;">    url: jdbc:mysql://localhost:3306/mybatisplus_db?serverTimezone=UTC</span></span>
<span class="line"><span style="color:#f6f6f4;">    username: root</span></span>
<span class="line"><span style="color:#f6f6f4;">    password: root</span></span>
<span class="line"><span style="color:#f6f6f4;"># 开启mp的日志（输出到控制台）</span></span>
<span class="line"><span style="color:#f6f6f4;">mybatis-plus:</span></span>
<span class="line"><span style="color:#f6f6f4;">  configuration:</span></span>
<span class="line"><span style="color:#f6f6f4;">    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl</span></span>
<span class="line"><span style="color:#f6f6f4;">  global-config:</span></span>
<span class="line"><span style="color:#f6f6f4;">    banner: off # 关闭mybatisplus启动图标</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">spring:</span></span>
<span class="line"><span style="color:#24292e;">  main:</span></span>
<span class="line"><span style="color:#24292e;">    banner-mode: off # 关闭SpringBoot启动图标(banner)</span></span>
<span class="line"><span style="color:#24292e;">  datasource:</span></span>
<span class="line"><span style="color:#24292e;">    type: com.alibaba.druid.pool.DruidDataSource</span></span>
<span class="line"><span style="color:#24292e;">    driver-class-name: com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span style="color:#24292e;">    url: jdbc:mysql://localhost:3306/mybatisplus_db?serverTimezone=UTC</span></span>
<span class="line"><span style="color:#24292e;">    username: root</span></span>
<span class="line"><span style="color:#24292e;">    password: root</span></span>
<span class="line"><span style="color:#24292e;"># 开启mp的日志（输出到控制台）</span></span>
<span class="line"><span style="color:#24292e;">mybatis-plus:</span></span>
<span class="line"><span style="color:#24292e;">  configuration:</span></span>
<span class="line"><span style="color:#24292e;">    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl</span></span>
<span class="line"><span style="color:#24292e;">  global-config:</span></span>
<span class="line"><span style="color:#24292e;">    banner: off # 关闭mybatisplus启动图标</span></span></code></pre></div><p>课堂作业</p><p>🎻</p><img src="`+s+`"><p>点击查看练习任务</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@SpringBootTest</span></span>
<span class="line"><span style="color:#f6f6f4;">@Slf4j</span></span>
<span class="line"><span style="color:#f6f6f4;">class MpdemoApplicationTests {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    @Autowired</span></span>
<span class="line"><span style="color:#f6f6f4;">    UserMapper userMapper;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    @Test</span></span>
<span class="line"><span style="color:#f6f6f4;">    void contextLoads() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        log.info(&quot;测试&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        List&lt;User&gt; users = userMapper.selectList(null);</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(users);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    /**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * todo 根据id查询用户</span></span>
<span class="line"><span style="color:#f6f6f4;">     */</span></span>
<span class="line"><span style="color:#f6f6f4;">    @Test</span></span>
<span class="line"><span style="color:#f6f6f4;">    void testGetById() {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    /**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * todo 根据若干id查询数据</span></span>
<span class="line"><span style="color:#f6f6f4;">     */</span></span>
<span class="line"><span style="color:#f6f6f4;">    @Test</span></span>
<span class="line"><span style="color:#f6f6f4;">    void testGetSome() {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    /**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * todo 新增用户</span></span>
<span class="line"><span style="color:#f6f6f4;">     */</span></span>
<span class="line"><span style="color:#f6f6f4;">    @Test</span></span>
<span class="line"><span style="color:#f6f6f4;">    void testSave() {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    /**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * todo 根据id删除用户</span></span>
<span class="line"><span style="color:#f6f6f4;">     */</span></span>
<span class="line"><span style="color:#f6f6f4;">    @Test</span></span>
<span class="line"><span style="color:#f6f6f4;">    void testDelete() {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    /**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * todo 按照主键删除多条记录</span></span>
<span class="line"><span style="color:#f6f6f4;">     */</span></span>
<span class="line"><span style="color:#f6f6f4;">    @Test</span></span>
<span class="line"><span style="color:#f6f6f4;">    void testDeleteBatch() {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    /**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * todo 根据id修改用户</span></span>
<span class="line"><span style="color:#f6f6f4;">     */</span></span>
<span class="line"><span style="color:#f6f6f4;">    @Test</span></span>
<span class="line"><span style="color:#f6f6f4;">    void testUpdate() {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@SpringBootTest</span></span>
<span class="line"><span style="color:#24292e;">@Slf4j</span></span>
<span class="line"><span style="color:#24292e;">class MpdemoApplicationTests {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Autowired</span></span>
<span class="line"><span style="color:#24292e;">    UserMapper userMapper;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Test</span></span>
<span class="line"><span style="color:#24292e;">    void contextLoads() {</span></span>
<span class="line"><span style="color:#24292e;">        log.info(&quot;测试&quot;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        List&lt;User&gt; users = userMapper.selectList(null);</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(users);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * todo 根据id查询用户</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    @Test</span></span>
<span class="line"><span style="color:#24292e;">    void testGetById() {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * todo 根据若干id查询数据</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    @Test</span></span>
<span class="line"><span style="color:#24292e;">    void testGetSome() {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * todo 新增用户</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    @Test</span></span>
<span class="line"><span style="color:#24292e;">    void testSave() {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * todo 根据id删除用户</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    @Test</span></span>
<span class="line"><span style="color:#24292e;">    void testDelete() {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * todo 按照主键删除多条记录</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    @Test</span></span>
<span class="line"><span style="color:#24292e;">    void testDeleteBatch() {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * todo 根据id修改用户</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    @Test</span></span>
<span class="line"><span style="color:#24292e;">    void testUpdate() {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_3-mpopen-in-new-window-的dql-编程控制" tabindex="-1"><a href="http://3.mp/" target="_blank" rel="noreferrer">3.MPopen in new window</a> 的DQL 编程控制 <a class="header-anchor" href="#_3-mpopen-in-new-window-的dql-编程控制" aria-label="Permalink to &quot;[3.MPopen in new window](http://3.mp/) 的DQL 编程控制&quot;">​</a></h2><p>MP 的DQL 编程控制</p><ul><li>MyBatisPlus 将书写复杂的 SQL 查询条件进行了封装，使用编程的形式完成查询条件的组合</li></ul><img src="`+i+`"><p><strong>代码实现</strong> 👇</p><h5 id="方式一-按条件查询-便于理解" tabindex="-1">方式一：按条件查询 便于理解 <a class="header-anchor" href="#方式一-按条件查询-便于理解" aria-label="Permalink to &quot;方式一：按条件查询 便于理解&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">//方式一：按条件查询</span></span>
<span class="line"><span style="color:#f6f6f4;">QueryWrapper&lt;User&gt; qw=new QueryWrapper&lt;&gt;();</span></span>
<span class="line"><span style="color:#f6f6f4;">qw.lt(&quot;age&quot;, 18);</span></span>
<span class="line"><span style="color:#f6f6f4;">List&lt;User&gt; userList = userDao.selectList(qw);</span></span>
<span class="line"><span style="color:#f6f6f4;">System.out.println(userList);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//方式一：按条件查询</span></span>
<span class="line"><span style="color:#24292e;">QueryWrapper&lt;User&gt; qw=new QueryWrapper&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292e;">qw.lt(&quot;age&quot;, 18);</span></span>
<span class="line"><span style="color:#24292e;">List&lt;User&gt; userList = userDao.selectList(qw);</span></span>
<span class="line"><span style="color:#24292e;">System.out.println(userList);</span></span></code></pre></div><h5 id="方式二-lambda-格式按条件查询" tabindex="-1">方式二：lambda 格式按条件查询 <a class="header-anchor" href="#方式二-lambda-格式按条件查询" aria-label="Permalink to &quot;方式二：lambda 格式按条件查询&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">//方式二：lambda格式按条件查询</span></span>
<span class="line"><span style="color:#f6f6f4;">QueryWrapper&lt;User&gt; qw = new QueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#f6f6f4;">qw.lambda().lt(User::getAge, 10);</span></span>
<span class="line"><span style="color:#f6f6f4;">List&lt;User&gt; userList = userDao.selectList(qw);</span></span>
<span class="line"><span style="color:#f6f6f4;">System.out.println(userList);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//方式二：lambda格式按条件查询</span></span>
<span class="line"><span style="color:#24292e;">QueryWrapper&lt;User&gt; qw = new QueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#24292e;">qw.lambda().lt(User::getAge, 10);</span></span>
<span class="line"><span style="color:#24292e;">List&lt;User&gt; userList = userDao.selectList(qw);</span></span>
<span class="line"><span style="color:#24292e;">System.out.println(userList);</span></span></code></pre></div><h5 id="方式三-lambda-格式按条件查询-推荐-简单实用" tabindex="-1">方式三：lambda 格式按条件查询（推荐） 简单实用 <a class="header-anchor" href="#方式三-lambda-格式按条件查询-推荐-简单实用" aria-label="Permalink to &quot;方式三：lambda 格式按条件查询（推荐） 简单实用&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">//方式三：lambda格式按条件查询</span></span>
<span class="line"><span style="color:#f6f6f4;">LambdaQueryWrapper&lt;User&gt; lqw = new LambdaQueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#f6f6f4;">lqw.lt(User::getAge, 10);</span></span>
<span class="line"><span style="color:#f6f6f4;">List&lt;User&gt; userList = userDao.selectList(lqw);</span></span>
<span class="line"><span style="color:#f6f6f4;">System.out.println(userList);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//方式三：lambda格式按条件查询</span></span>
<span class="line"><span style="color:#24292e;">LambdaQueryWrapper&lt;User&gt; lqw = new LambdaQueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#24292e;">lqw.lt(User::getAge, 10);</span></span>
<span class="line"><span style="color:#24292e;">List&lt;User&gt; userList = userDao.selectList(lqw);</span></span>
<span class="line"><span style="color:#24292e;">System.out.println(userList);</span></span></code></pre></div><h5 id="_1️⃣-并且关系-and" tabindex="-1">1️⃣ 并且关系（and） <a class="header-anchor" href="#_1️⃣-并且关系-and" aria-label="Permalink to &quot;1️⃣ 并且关系（and）&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">//并且关系</span></span>
<span class="line"><span style="color:#f6f6f4;">LambdaQueryWrapper&lt;User&gt; lqw = new LambdaQueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#f6f6f4;">//并且关系：10到30岁之间</span></span>
<span class="line"><span style="color:#f6f6f4;">lqw.lt(User::getAge, 30).gt(User::getAge, 10);</span></span>
<span class="line"><span style="color:#f6f6f4;">List&lt;User&gt; userList = userDao.selectList(lqw);</span></span>
<span class="line"><span style="color:#f6f6f4;">System.out.println(userList);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//并且关系</span></span>
<span class="line"><span style="color:#24292e;">LambdaQueryWrapper&lt;User&gt; lqw = new LambdaQueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#24292e;">//并且关系：10到30岁之间</span></span>
<span class="line"><span style="color:#24292e;">lqw.lt(User::getAge, 30).gt(User::getAge, 10);</span></span>
<span class="line"><span style="color:#24292e;">List&lt;User&gt; userList = userDao.selectList(lqw);</span></span>
<span class="line"><span style="color:#24292e;">System.out.println(userList);</span></span></code></pre></div><h5 id="_2️⃣-或者关系-or" tabindex="-1">2️⃣ 或者关系（or） <a class="header-anchor" href="#_2️⃣-或者关系-or" aria-label="Permalink to &quot;2️⃣ 或者关系（or）&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">//或者关系</span></span>
<span class="line"><span style="color:#f6f6f4;">LambdaQueryWrapper&lt;User&gt; lqw = new LambdaQueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#f6f6f4;">//或者关系：小于10岁或者大于30岁</span></span>
<span class="line"><span style="color:#f6f6f4;">lqw.lt(User::getAge, 10).or().gt(User::getAge, 30);</span></span>
<span class="line"><span style="color:#f6f6f4;">List&lt;User&gt; userList = userDao.selectList(lqw);</span></span>
<span class="line"><span style="color:#f6f6f4;">System.out.println(userList);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//或者关系</span></span>
<span class="line"><span style="color:#24292e;">LambdaQueryWrapper&lt;User&gt; lqw = new LambdaQueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#24292e;">//或者关系：小于10岁或者大于30岁</span></span>
<span class="line"><span style="color:#24292e;">lqw.lt(User::getAge, 10).or().gt(User::getAge, 30);</span></span>
<span class="line"><span style="color:#24292e;">List&lt;User&gt; userList = userDao.selectList(lqw);</span></span>
<span class="line"><span style="color:#24292e;">System.out.println(userList);</span></span></code></pre></div><h5 id="_3️⃣-null-值处理" tabindex="-1">3️⃣ NULL 值处理 <a class="header-anchor" href="#_3️⃣-null-值处理" aria-label="Permalink to &quot;3️⃣ NULL 值处理&quot;">​</a></h5><blockquote><p>如下搜索场景，在多条件查询中，有条件的值为空应该怎么解决？</p></blockquote><img src="`+f+`"><ul><li><strong>if 语句控制条件追加</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">Integer minAge=10;  //将来有用户传递进来,此处简化成直接定义变量了</span></span>
<span class="line"><span style="color:#f6f6f4;">Integer maxAge=null;  //将来有用户传递进来,此处简化成直接定义变量了</span></span>
<span class="line"><span style="color:#f6f6f4;">LambdaQueryWrapper&lt;User&gt; lqw = new LambdaQueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#f6f6f4;">if(minAge!=null){</span></span>
<span class="line"><span style="color:#f6f6f4;">    lqw.gt(User::getAge, minAge);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">if(maxAge!=null){</span></span>
<span class="line"><span style="color:#f6f6f4;">    lqw.lt(User::getAge, maxAge);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">List&lt;User&gt; userList = userDao.selectList(lqw);</span></span>
<span class="line"><span style="color:#f6f6f4;">userList.forEach(System.out::println);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Integer minAge=10;  //将来有用户传递进来,此处简化成直接定义变量了</span></span>
<span class="line"><span style="color:#24292e;">Integer maxAge=null;  //将来有用户传递进来,此处简化成直接定义变量了</span></span>
<span class="line"><span style="color:#24292e;">LambdaQueryWrapper&lt;User&gt; lqw = new LambdaQueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#24292e;">if(minAge!=null){</span></span>
<span class="line"><span style="color:#24292e;">    lqw.gt(User::getAge, minAge);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">if(maxAge!=null){</span></span>
<span class="line"><span style="color:#24292e;">    lqw.lt(User::getAge, maxAge);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">List&lt;User&gt; userList = userDao.selectList(lqw);</span></span>
<span class="line"><span style="color:#24292e;">userList.forEach(System.out::println);</span></span></code></pre></div><ul><li><strong>条件参数控制(大于小于)</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">Integer minAge=10;  //将来有用户传递进来,此处简化成直接定义变量了</span></span>
<span class="line"><span style="color:#f6f6f4;">Integer maxAge=null;  //将来有用户传递进来,此处简化成直接定义变量了</span></span>
<span class="line"><span style="color:#f6f6f4;">LambdaQueryWrapper&lt;User&gt; lqw = new LambdaQueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#f6f6f4;">//参数1：如果表达式为true，那么查询才使用该条件</span></span>
<span class="line"><span style="color:#f6f6f4;">lqw.gt(minAge!=null,User::getAge, minAge);</span></span>
<span class="line"><span style="color:#f6f6f4;">lqw.lt(maxAge!=null,User::getAge, maxAge);</span></span>
<span class="line"><span style="color:#f6f6f4;">List&lt;User&gt; userList = userDao.selectList(lqw);</span></span>
<span class="line"><span style="color:#f6f6f4;">userList.forEach(System.out::println);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Integer minAge=10;  //将来有用户传递进来,此处简化成直接定义变量了</span></span>
<span class="line"><span style="color:#24292e;">Integer maxAge=null;  //将来有用户传递进来,此处简化成直接定义变量了</span></span>
<span class="line"><span style="color:#24292e;">LambdaQueryWrapper&lt;User&gt; lqw = new LambdaQueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#24292e;">//参数1：如果表达式为true，那么查询才使用该条件</span></span>
<span class="line"><span style="color:#24292e;">lqw.gt(minAge!=null,User::getAge, minAge);</span></span>
<span class="line"><span style="color:#24292e;">lqw.lt(maxAge!=null,User::getAge, maxAge);</span></span>
<span class="line"><span style="color:#24292e;">List&lt;User&gt; userList = userDao.selectList(lqw);</span></span>
<span class="line"><span style="color:#24292e;">userList.forEach(System.out::println);</span></span></code></pre></div><ul><li><strong>条件参数控制（大于小于链式编程）</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">Integer minAge=10;  //将来有用户传递进来,此处简化成直接定义变量了</span></span>
<span class="line"><span style="color:#f6f6f4;">Integer maxAge=null;  //将来有用户传递进来,此处简化成直接定义变量了</span></span>
<span class="line"><span style="color:#f6f6f4;">LambdaQueryWrapper&lt;User&gt; lqw = new LambdaQueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#f6f6f4;">//参数1：如果表达式为true，那么查询才使用该条件</span></span>
<span class="line"><span style="color:#f6f6f4;">lqw.gt(minAge!=null,User::getAge, minAge)</span></span>
<span class="line"><span style="color:#f6f6f4;">   .lt(maxAge!=null,User::getAge, maxAge);</span></span>
<span class="line"><span style="color:#f6f6f4;">List&lt;User&gt; userList = userDao.selectList(lqw);</span></span>
<span class="line"><span style="color:#f6f6f4;">userList.forEach(System.out::println);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Integer minAge=10;  //将来有用户传递进来,此处简化成直接定义变量了</span></span>
<span class="line"><span style="color:#24292e;">Integer maxAge=null;  //将来有用户传递进来,此处简化成直接定义变量了</span></span>
<span class="line"><span style="color:#24292e;">LambdaQueryWrapper&lt;User&gt; lqw = new LambdaQueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#24292e;">//参数1：如果表达式为true，那么查询才使用该条件</span></span>
<span class="line"><span style="color:#24292e;">lqw.gt(minAge!=null,User::getAge, minAge)</span></span>
<span class="line"><span style="color:#24292e;">   .lt(maxAge!=null,User::getAge, maxAge);</span></span>
<span class="line"><span style="color:#24292e;">List&lt;User&gt; userList = userDao.selectList(lqw);</span></span>
<span class="line"><span style="color:#24292e;">userList.forEach(System.out::println);</span></span></code></pre></div><h5 id="_1️⃣-查询结果包含模型类中部分属性" tabindex="-1">1️⃣ 查询结果包含模型类中部分属性 <a class="header-anchor" href="#_1️⃣-查询结果包含模型类中部分属性" aria-label="Permalink to &quot;1️⃣ 查询结果包含模型类中部分属性&quot;">​</a></h5><blockquote><p>只查询部分信息，不需要所有，如 select id,name,age 等</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/*LambdaQueryWrapper&lt;User&gt; lqw = new LambdaQueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#f6f6f4;">lqw.select(User::getId, User::getName, User::getAge);*/</span></span>
<span class="line"><span style="color:#f6f6f4;">//或者</span></span>
<span class="line"><span style="color:#f6f6f4;">QueryWrapper&lt;User&gt; lqw = new QueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#f6f6f4;">lqw.select(&quot;id&quot;, &quot;name&quot;, &quot;age&quot;, &quot;tel&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">List&lt;User&gt; userList = userDao.selectList(lqw);</span></span>
<span class="line"><span style="color:#f6f6f4;">System.out.println(userList);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/*LambdaQueryWrapper&lt;User&gt; lqw = new LambdaQueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#24292e;">lqw.select(User::getId, User::getName, User::getAge);*/</span></span>
<span class="line"><span style="color:#24292e;">//或者</span></span>
<span class="line"><span style="color:#24292e;">QueryWrapper&lt;User&gt; lqw = new QueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#24292e;">lqw.select(&quot;id&quot;, &quot;name&quot;, &quot;age&quot;, &quot;tel&quot;);</span></span>
<span class="line"><span style="color:#24292e;">List&lt;User&gt; userList = userDao.selectList(lqw);</span></span>
<span class="line"><span style="color:#24292e;">System.out.println(userList);</span></span></code></pre></div><h5 id="_2️⃣-查询结果包含模型类中未定义的属性" tabindex="-1">2️⃣ 查询结果包含模型类中未定义的属性 <a class="header-anchor" href="#_2️⃣-查询结果包含模型类中未定义的属性" aria-label="Permalink to &quot;2️⃣ 查询结果包含模型类中未定义的属性&quot;">​</a></h5><blockquote><p>如聚合参数 <code>count(*) as count</code> 取了别名，但是没有实体接受数据，使用 Map接收</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">QueryWrapper&lt;User&gt; lqw = new QueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#f6f6f4;">lqw.select(&quot;count(*) as count, tel&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">lqw.groupBy(&quot;tel&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">List&lt;Map&lt;String, Object&gt;&gt; userList = userDao.selectMaps(lqw);</span></span>
<span class="line"><span style="color:#f6f6f4;">System.out.println(userList);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">QueryWrapper&lt;User&gt; lqw = new QueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#24292e;">lqw.select(&quot;count(*) as count, tel&quot;);</span></span>
<span class="line"><span style="color:#24292e;">lqw.groupBy(&quot;tel&quot;);</span></span>
<span class="line"><span style="color:#24292e;">List&lt;Map&lt;String, Object&gt;&gt; userList = userDao.selectMaps(lqw);</span></span>
<span class="line"><span style="color:#24292e;">System.out.println(userList);</span></span></code></pre></div><p><strong>多条件查询组合</strong> 👇</p><ul><li><p>范围匹配（&gt; 、 = 、between）</p></li><li><p>模糊匹配（like）</p></li><li><p>空判定（null）</p></li><li><p>包含性匹配（in）</p></li><li><p>分组（group）</p></li><li><p>排序（order）</p></li><li><p><strong>用户登录（eq 匹配）</strong></p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">LambdaQueryWrapper&lt;User&gt; lqw = new LambdaQueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#f6f6f4;">//等同于=</span></span>
<span class="line"><span style="color:#f6f6f4;">lqw.eq(User::getName, &quot;Jerry&quot;).eq(User::getPassword, &quot;jerry&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">User loginUser = userDao.selectOne(lqw);</span></span>
<span class="line"><span style="color:#f6f6f4;">System.out.println(loginUser);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">LambdaQueryWrapper&lt;User&gt; lqw = new LambdaQueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#24292e;">//等同于=</span></span>
<span class="line"><span style="color:#24292e;">lqw.eq(User::getName, &quot;Jerry&quot;).eq(User::getPassword, &quot;jerry&quot;);</span></span>
<span class="line"><span style="color:#24292e;">User loginUser = userDao.selectOne(lqw);</span></span>
<span class="line"><span style="color:#24292e;">System.out.println(loginUser);</span></span></code></pre></div><ul><li><strong>购物设定价格区间、户籍设定年龄区间（le ge 匹配 或 between 匹配）</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">LambdaQueryWrapper&lt;User&gt; lqw = new LambdaQueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#f6f6f4;">//范围查询 lt le gt ge eq between</span></span>
<span class="line"><span style="color:#f6f6f4;">lqw.between(User::getAge, 10, 30);</span></span>
<span class="line"><span style="color:#f6f6f4;">List&lt;User&gt; userList = userDao.selectList(lqw);</span></span>
<span class="line"><span style="color:#f6f6f4;">System.out.println(userList);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">LambdaQueryWrapper&lt;User&gt; lqw = new LambdaQueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#24292e;">//范围查询 lt le gt ge eq between</span></span>
<span class="line"><span style="color:#24292e;">lqw.between(User::getAge, 10, 30);</span></span>
<span class="line"><span style="color:#24292e;">List&lt;User&gt; userList = userDao.selectList(lqw);</span></span>
<span class="line"><span style="color:#24292e;">System.out.println(userList);</span></span></code></pre></div><ul><li><strong>查信息，搜索新闻（非全文检索版：like 匹配）</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">LambdaQueryWrapper&lt;User&gt; lqw = new LambdaQueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#f6f6f4;">//模糊匹配 like</span></span>
<span class="line"><span style="color:#f6f6f4;">lqw.likeLeft(User::getName, &quot;J&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">List&lt;User&gt; userList = userDao.selectList(lqw);</span></span>
<span class="line"><span style="color:#f6f6f4;">System.out.println(userList);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">LambdaQueryWrapper&lt;User&gt; lqw = new LambdaQueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#24292e;">//模糊匹配 like</span></span>
<span class="line"><span style="color:#24292e;">lqw.likeLeft(User::getName, &quot;J&quot;);</span></span>
<span class="line"><span style="color:#24292e;">List&lt;User&gt; userList = userDao.selectList(lqw);</span></span>
<span class="line"><span style="color:#24292e;">System.out.println(userList);</span></span></code></pre></div><ul><li><strong>统计报表（分组查询聚合函数）</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">QueryWrapper&lt;User&gt; qw = new QueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#f6f6f4;">qw.select(&quot;gender&quot;,&quot;count(*) as nums&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">qw.groupBy(&quot;gender&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">List&lt;Map&lt;String, Object&gt;&gt; maps = userDao.selectMaps(qw);</span></span>
<span class="line"><span style="color:#f6f6f4;">System.out.println(maps);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">QueryWrapper&lt;User&gt; qw = new QueryWrapper&lt;User&gt;();</span></span>
<span class="line"><span style="color:#24292e;">qw.select(&quot;gender&quot;,&quot;count(*) as nums&quot;);</span></span>
<span class="line"><span style="color:#24292e;">qw.groupBy(&quot;gender&quot;);</span></span>
<span class="line"><span style="color:#24292e;">List&lt;Map&lt;String, Object&gt;&gt; maps = userDao.selectMaps(qw);</span></span>
<span class="line"><span style="color:#24292e;">System.out.println(maps);</span></span></code></pre></div><p>课堂作业</p><img src="`+s+'"><ul><li>更多查询条件设置参看 <a href="https://baomidou.com/pages/10c804/" target="_blank" rel="noreferrer">https://baomidou.com/pages/10c804/open in new window</a></li></ul><p>基于 mybatisplus_02_dqltest 模块，完成下述需求：</p><ol><li>查询所有书籍 打印在控制台</li><li>查询第 5 页，每页 5 本数据的数据</li><li>查询出 name 等于 剑刃苍穹的 书籍</li><li>查询出 name 中包含 都市，并且 id 在 150 到 300 之间的书籍 4</li><li>查询出 createtime 时间在 在 2019-09-06 到 2022-09-06 之间的书籍</li><li>查询出类型 type 为都市的小说， 如果 type 等于 null 就查询所有的小说</li><li>按照 type 统计出各个类型的小说分别为多少本</li></ol><p><strong>步鄹</strong> 👇</p><ul><li>下载 <a href="http://124.232.194.163:40121/down/VSiAjneeHptA.zip" target="_blank" rel="noreferrer">mybatisplus_02_dqltest 压缩包open in new window</a>点击下载，放到你的工程中</li><li>导入到项目中</li><li>完成 test 包下的 Mybatisplus02DqlApplicationTests 中的需求</li><li>注意：导工程后，一定要做的三个步鄹 <ol><li>检查 Maven 仓库</li><li>检查 jdk-1.8</li><li>检查编译器版本-1.8</li></ol></li></ul><img src="'+y+'"><p>字段映射与表名映射</p><ol><li><p>思考表的字段和实体类的属性不对应，查询会怎么样？</p><ul><li>问题一：表字段与编码属性设计不同步@TableField value属性</li><li>问题二：编码中添加了数据库中未定义的属性@TableField exist属性</li><li>问题三：采用默认查询开放了更多的字段查看权限@TableField select属性</li><li>问题四：表名与编码开发设计不同步@TableName</li></ul></li></ol><h4 id="问题一-表字段与编码属性设计不同步" tabindex="-1">问题一：表字段与编码属性设计不同步 <a class="header-anchor" href="#问题一-表字段与编码属性设计不同步" aria-label="Permalink to &quot;问题一：表字段与编码属性设计不同步&quot;">​</a></h4><ul><li>在模型类属性上方，使用@TableField 属性注解，通过<strong>value</strong>属性，设置当前属性对应的数据库表中的字段关系。</li></ul><img src="'+d+`"><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Data</span></span>
<span class="line"><span style="color:#f6f6f4;">@TableName(&quot;tbl_user&quot;)</span></span>
<span class="line"><span style="color:#f6f6f4;">public class User {</span></span>
<span class="line"><span style="color:#f6f6f4;">    /*</span></span>
<span class="line"><span style="color:#f6f6f4;">        id为Long类型，因为数据库中id为bigint类型，</span></span>
<span class="line"><span style="color:#f6f6f4;">        并且mybatis有自己的一套id生成方案，生成出来的id必须是Long类型</span></span>
<span class="line"><span style="color:#f6f6f4;">     */</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Long id;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private String name;</span></span>
<span class="line"><span style="color:#f6f6f4;">    @TableField(value = &quot;pwd&quot;,select = false)</span></span>
<span class="line"><span style="color:#f6f6f4;">    private String password;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Integer age;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private String tel;</span></span>
<span class="line"><span style="color:#f6f6f4;">    @TableField(exist = false) //表示online字段不参与CRUD操作</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Boolean online;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Data</span></span>
<span class="line"><span style="color:#24292e;">@TableName(&quot;tbl_user&quot;)</span></span>
<span class="line"><span style="color:#24292e;">public class User {</span></span>
<span class="line"><span style="color:#24292e;">    /*</span></span>
<span class="line"><span style="color:#24292e;">        id为Long类型，因为数据库中id为bigint类型，</span></span>
<span class="line"><span style="color:#24292e;">        并且mybatis有自己的一套id生成方案，生成出来的id必须是Long类型</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    private Long id;</span></span>
<span class="line"><span style="color:#24292e;">    private String name;</span></span>
<span class="line"><span style="color:#24292e;">    @TableField(value = &quot;pwd&quot;,select = false)</span></span>
<span class="line"><span style="color:#24292e;">    private String password;</span></span>
<span class="line"><span style="color:#24292e;">    private Integer age;</span></span>
<span class="line"><span style="color:#24292e;">    private String tel;</span></span>
<span class="line"><span style="color:#24292e;">    @TableField(exist = false) //表示online字段不参与CRUD操作</span></span>
<span class="line"><span style="color:#24292e;">    private Boolean online;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h4 id="问题二-编码中添加了数据库中未定义的属性" tabindex="-1">问题二：编码中添加了数据库中未定义的属性 <a class="header-anchor" href="#问题二-编码中添加了数据库中未定义的属性" aria-label="Permalink to &quot;问题二：编码中添加了数据库中未定义的属性&quot;">​</a></h4><ul><li>在模型类属性上方，使用@TableField 注解，通过<strong>exist</strong>属性，设置属性在数据库表字段中是否存在，默认为 true。此属性无法与 value 合并使用。</li></ul><img src="`+u+`"><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Data</span></span>
<span class="line"><span style="color:#f6f6f4;">@TableName(&quot;tbl_user&quot;)</span></span>
<span class="line"><span style="color:#f6f6f4;">public class User {</span></span>
<span class="line"><span style="color:#f6f6f4;">    /*</span></span>
<span class="line"><span style="color:#f6f6f4;">        id为Long类型，因为数据库中id为bigint类型，</span></span>
<span class="line"><span style="color:#f6f6f4;">        并且mybatis有自己的一套id生成方案，生成出来的id必须是Long类型</span></span>
<span class="line"><span style="color:#f6f6f4;">     */</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Long id;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private String name;</span></span>
<span class="line"><span style="color:#f6f6f4;">    @TableField(value = &quot;pwd&quot;,select = false)</span></span>
<span class="line"><span style="color:#f6f6f4;">    private String password;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Integer age;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private String tel;</span></span>
<span class="line"><span style="color:#f6f6f4;">    @TableField(exist = false) //表示online字段不参与CRUD操作</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Boolean online;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Data</span></span>
<span class="line"><span style="color:#24292e;">@TableName(&quot;tbl_user&quot;)</span></span>
<span class="line"><span style="color:#24292e;">public class User {</span></span>
<span class="line"><span style="color:#24292e;">    /*</span></span>
<span class="line"><span style="color:#24292e;">        id为Long类型，因为数据库中id为bigint类型，</span></span>
<span class="line"><span style="color:#24292e;">        并且mybatis有自己的一套id生成方案，生成出来的id必须是Long类型</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    private Long id;</span></span>
<span class="line"><span style="color:#24292e;">    private String name;</span></span>
<span class="line"><span style="color:#24292e;">    @TableField(value = &quot;pwd&quot;,select = false)</span></span>
<span class="line"><span style="color:#24292e;">    private String password;</span></span>
<span class="line"><span style="color:#24292e;">    private Integer age;</span></span>
<span class="line"><span style="color:#24292e;">    private String tel;</span></span>
<span class="line"><span style="color:#24292e;">    @TableField(exist = false) //表示online字段不参与CRUD操作</span></span>
<span class="line"><span style="color:#24292e;">    private Boolean online;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h4 id="问题三-采用默认查询开放了更多的字段查看权限" tabindex="-1">问题三：采用默认查询开放了更多的字段查看权限 <a class="header-anchor" href="#问题三-采用默认查询开放了更多的字段查看权限" aria-label="Permalink to &quot;问题三：采用默认查询开放了更多的字段查看权限&quot;">​</a></h4><ul><li>在模型类属性上方，使用@TableField 注解，通过<strong>select</strong>属性：设置该属性是否参与查询。此属性与 select()映射配置不冲突。</li></ul><img src="`+g+`"><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Data</span></span>
<span class="line"><span style="color:#f6f6f4;">@TableName(&quot;tbl_user&quot;)</span></span>
<span class="line"><span style="color:#f6f6f4;">public class User {</span></span>
<span class="line"><span style="color:#f6f6f4;">    /*</span></span>
<span class="line"><span style="color:#f6f6f4;">        id为Long类型，因为数据库中id为bigint类型，</span></span>
<span class="line"><span style="color:#f6f6f4;">        并且mybatis有自己的一套id生成方案，生成出来的id必须是Long类型</span></span>
<span class="line"><span style="color:#f6f6f4;">     */</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Long id;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private String name;</span></span>
<span class="line"><span style="color:#f6f6f4;">    @TableField(value = &quot;pwd&quot;,select = false)</span></span>
<span class="line"><span style="color:#f6f6f4;">    private String password;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Integer age;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private String tel;</span></span>
<span class="line"><span style="color:#f6f6f4;">    @TableField(exist = false) //表示online字段不参与CRUD操作</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Boolean online;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Data</span></span>
<span class="line"><span style="color:#24292e;">@TableName(&quot;tbl_user&quot;)</span></span>
<span class="line"><span style="color:#24292e;">public class User {</span></span>
<span class="line"><span style="color:#24292e;">    /*</span></span>
<span class="line"><span style="color:#24292e;">        id为Long类型，因为数据库中id为bigint类型，</span></span>
<span class="line"><span style="color:#24292e;">        并且mybatis有自己的一套id生成方案，生成出来的id必须是Long类型</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    private Long id;</span></span>
<span class="line"><span style="color:#24292e;">    private String name;</span></span>
<span class="line"><span style="color:#24292e;">    @TableField(value = &quot;pwd&quot;,select = false)</span></span>
<span class="line"><span style="color:#24292e;">    private String password;</span></span>
<span class="line"><span style="color:#24292e;">    private Integer age;</span></span>
<span class="line"><span style="color:#24292e;">    private String tel;</span></span>
<span class="line"><span style="color:#24292e;">    @TableField(exist = false) //表示online字段不参与CRUD操作</span></span>
<span class="line"><span style="color:#24292e;">    private Boolean online;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h4 id="问题四-表名与编码开发设计不同步" tabindex="-1">问题四：表名与编码开发设计不同步 <a class="header-anchor" href="#问题四-表名与编码开发设计不同步" aria-label="Permalink to &quot;问题四：表名与编码开发设计不同步&quot;">​</a></h4><ul><li>在&lt;<strong>模型类</strong>上方，使用@TableName 注解，通过<strong>value</strong>属性，设置当前类对应的数据库表名称。</li></ul><img src="`+b+`"><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Data</span></span>
<span class="line"><span style="color:#f6f6f4;">@TableName(&quot;tbl_user&quot;)</span></span>
<span class="line"><span style="color:#f6f6f4;">public class User {</span></span>
<span class="line"><span style="color:#f6f6f4;">    /*</span></span>
<span class="line"><span style="color:#f6f6f4;">        id为Long类型，因为数据库中id为bigint类型，</span></span>
<span class="line"><span style="color:#f6f6f4;">        并且mybatis有自己的一套id生成方案，生成出来的id必须是Long类型</span></span>
<span class="line"><span style="color:#f6f6f4;">     */</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Long id;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private String name;</span></span>
<span class="line"><span style="color:#f6f6f4;">    @TableField(value = &quot;pwd&quot;,select = false)</span></span>
<span class="line"><span style="color:#f6f6f4;">    private String password;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Integer age;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private String tel;</span></span>
<span class="line"><span style="color:#f6f6f4;">    @TableField(exist = false) //表示online字段不参与CRUD操作</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Boolean online;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Data</span></span>
<span class="line"><span style="color:#24292e;">@TableName(&quot;tbl_user&quot;)</span></span>
<span class="line"><span style="color:#24292e;">public class User {</span></span>
<span class="line"><span style="color:#24292e;">    /*</span></span>
<span class="line"><span style="color:#24292e;">        id为Long类型，因为数据库中id为bigint类型，</span></span>
<span class="line"><span style="color:#24292e;">        并且mybatis有自己的一套id生成方案，生成出来的id必须是Long类型</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    private Long id;</span></span>
<span class="line"><span style="color:#24292e;">    private String name;</span></span>
<span class="line"><span style="color:#24292e;">    @TableField(value = &quot;pwd&quot;,select = false)</span></span>
<span class="line"><span style="color:#24292e;">    private String password;</span></span>
<span class="line"><span style="color:#24292e;">    private Integer age;</span></span>
<span class="line"><span style="color:#24292e;">    private String tel;</span></span>
<span class="line"><span style="color:#24292e;">    @TableField(exist = false) //表示online字段不参与CRUD操作</span></span>
<span class="line"><span style="color:#24292e;">    private Boolean online;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_4-mpopen-in-new-window-的dml-编程控制" tabindex="-1"><a href="http://4.mp/" target="_blank" rel="noreferrer">4.MPopen in new window</a> 的DML 编程控制 <a class="header-anchor" href="#_4-mpopen-in-new-window-的dml-编程控制" aria-label="Permalink to &quot;[4.MPopen in new window](http://4.mp/) 的DML 编程控制&quot;">​</a></h2><h3 id="_4-1-id-生成策略控制-insert" tabindex="-1">4.1 id 生成策略控制（Insert） <a class="header-anchor" href="#_4-1-id-生成策略控制-insert" aria-label="Permalink to &quot;4.1 id 生成策略控制（Insert）&quot;">​</a></h3><p>生成策略控制（Insert）</p><img src="`+m+`"><ul><li><p>不同的表应用不同的 id 生成策略，<a href="https://www.baomidou.com/pages/e131bd/#spring-boot" target="_blank" rel="noreferrer">官网教程open in new window</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">- 日志：自增（1,2,3,4，……）</span></span>
<span class="line"><span style="color:#f6f6f4;">- 购物订单：特殊规则（FQ23948AK3843）</span></span>
<span class="line"><span style="color:#f6f6f4;">- 外卖单：关联地区日期等信息（10 04 20200314 34 91）</span></span>
<span class="line"><span style="color:#f6f6f4;">- 关系表：可省略 id</span></span>
<span class="line"><span style="color:#f6f6f4;">- ……</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">- 日志：自增（1,2,3,4，……）</span></span>
<span class="line"><span style="color:#24292e;">- 购物订单：特殊规则（FQ23948AK3843）</span></span>
<span class="line"><span style="color:#24292e;">- 外卖单：关联地区日期等信息（10 04 20200314 34 91）</span></span>
<span class="line"><span style="color:#24292e;">- 关系表：可省略 id</span></span>
<span class="line"><span style="color:#24292e;">- ……</span></span></code></pre></div></li></ul><p>id 生成策略控制（@TableId 注解）</p><ul><li>名称：@TableId</li><li>类型：<strong>属性注解</strong></li><li>位置：模型类中用于表示主键的属性定义上方</li><li>作用：设置当前类中主键属性的生成策略</li><li>相关属性 <strong>type</strong>：设置主键属性的生成策略，值参照 IdType 枚举值 ![image-20210801192449901](<a href="http://image.yangeit.cn/i/2023/06/15/image-20210801192449901.png" target="_blank" rel="noreferrer">http://image.yangeit.cn/i/2023/06/15/image-20210801192449901.png</a>&quot;&gt;</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">mybatis-plus:</span></span>
<span class="line"><span style="color:#f6f6f4;">  global-config:</span></span>
<span class="line"><span style="color:#f6f6f4;">    db-config:</span></span>
<span class="line"><span style="color:#f6f6f4;">      id-type: assign_id</span></span>
<span class="line"><span style="color:#f6f6f4;">      table-prefix: tbl_</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mybatis-plus:</span></span>
<span class="line"><span style="color:#24292e;">  global-config:</span></span>
<span class="line"><span style="color:#24292e;">    db-config:</span></span>
<span class="line"><span style="color:#24292e;">      id-type: assign_id</span></span>
<span class="line"><span style="color:#24292e;">      table-prefix: tbl_</span></span></code></pre></div><h5 id="id-生成策略全局配置" tabindex="-1">id 生成策略全局配置 <a class="header-anchor" href="#id-生成策略全局配置" aria-label="Permalink to &quot;id 生成策略全局配置&quot;">​</a></h5><img src="`+h+'"><h5 id="表名前缀全局配置" tabindex="-1">表名前缀全局配置 <a class="header-anchor" href="#表名前缀全局配置" aria-label="Permalink to &quot;表名前缀全局配置&quot;">​</a></h5><img src="'+v+'"><h3 id="_4-2-逻辑删除-🍐-🍐" tabindex="-1">4.2 逻辑删除 🍐 🍐 <a class="header-anchor" href="#_4-2-逻辑删除-🍐-🍐" aria-label="Permalink to &quot;4.2 逻辑删除 🍐 🍐&quot;">​</a></h3><p>逻辑删除</p><ol><li>在实际环境中，如果想删除一条数据，是否会真的从数据库中删除该条数据？</li></ol><ul><li><p>删除操作业务问题：业务数据从数据库中丢弃</p></li><li><p>逻辑删除：为数据设置是否可用状态字段，删除时设置状态字段为不可用状态，数据保留在数据库中</p></li></ul><img src="'+q+'"><p><strong>代码实现</strong> 👇</p><h5 id="_1️⃣-数据库表中添加逻辑删除标记字段" tabindex="-1">1️⃣ 数据库表中添加逻辑删除标记字段 <a class="header-anchor" href="#_1️⃣-数据库表中添加逻辑删除标记字段" aria-label="Permalink to &quot;1️⃣ 数据库表中添加逻辑删除标记字段&quot;">​</a></h5><img src="'+w+`"><h5 id="_2️⃣-实体类中添加对应字段-并设定当前字段为逻辑删除标记字段" tabindex="-1">2️⃣ 实体类中添加对应字段，并设定当前字段为逻辑删除标记字段 <a class="header-anchor" href="#_2️⃣-实体类中添加对应字段-并设定当前字段为逻辑删除标记字段" aria-label="Permalink to &quot;2️⃣ 实体类中添加对应字段，并设定当前字段为逻辑删除标记字段&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Data</span></span>
<span class="line"><span style="color:#f6f6f4;">public class User {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    private Long id;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    //逻辑删除字段，标记当前记录是否被删除</span></span>
<span class="line"><span style="color:#f6f6f4;">    @TableLogic</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Integer deleted;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Data</span></span>
<span class="line"><span style="color:#24292e;">public class User {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private Long id;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    //逻辑删除字段，标记当前记录是否被删除</span></span>
<span class="line"><span style="color:#24292e;">    @TableLogic</span></span>
<span class="line"><span style="color:#24292e;">    private Integer deleted;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h5 id="_3️⃣-配置逻辑删除字面值" tabindex="-1">3️⃣ 配置逻辑删除字面值 <a class="header-anchor" href="#_3️⃣-配置逻辑删除字面值" aria-label="Permalink to &quot;3️⃣ 配置逻辑删除字面值&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">mybatis-plus:</span></span>
<span class="line"><span style="color:#f6f6f4;">  global-config:</span></span>
<span class="line"><span style="color:#f6f6f4;">    db-config:</span></span>
<span class="line"><span style="color:#f6f6f4;">      table-prefix: tbl_</span></span>
<span class="line"><span style="color:#f6f6f4;">      # 逻辑删除字段名</span></span>
<span class="line"><span style="color:#f6f6f4;">      logic-delete-field: deleted</span></span>
<span class="line"><span style="color:#f6f6f4;">      # 逻辑删除字面值：未删除为0</span></span>
<span class="line"><span style="color:#f6f6f4;">      logic-not-delete-value: 0</span></span>
<span class="line"><span style="color:#f6f6f4;">      # 逻辑删除字面值：删除为1</span></span>
<span class="line"><span style="color:#f6f6f4;">      logic-delete-value: 1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mybatis-plus:</span></span>
<span class="line"><span style="color:#24292e;">  global-config:</span></span>
<span class="line"><span style="color:#24292e;">    db-config:</span></span>
<span class="line"><span style="color:#24292e;">      table-prefix: tbl_</span></span>
<span class="line"><span style="color:#24292e;">      # 逻辑删除字段名</span></span>
<span class="line"><span style="color:#24292e;">      logic-delete-field: deleted</span></span>
<span class="line"><span style="color:#24292e;">      # 逻辑删除字面值：未删除为0</span></span>
<span class="line"><span style="color:#24292e;">      logic-not-delete-value: 0</span></span>
<span class="line"><span style="color:#24292e;">      # 逻辑删除字面值：删除为1</span></span>
<span class="line"><span style="color:#24292e;">      logic-delete-value: 1</span></span></code></pre></div><p><strong>逻辑删除本质：逻辑删除的本质其实是修改操作。如果加了逻辑删除字段，查询数据时也会自动带上逻辑删除字段。</strong></p><img src="`+L+'"><h3 id="_4-3-乐观锁-update-🍐-pear" tabindex="-1">4.3 乐观锁（Update） 🍐 :pear <a class="header-anchor" href="#_4-3-乐观锁-update-🍐-pear" aria-label="Permalink to &quot;4.3 乐观锁（Update） 🍐 :pear&quot;">​</a></h3><p>乐观锁（Update）</p><ul><li><p>乐观锁其实用一句话来形容其作用就是：当要更新一条记录的时候，希望这条记录没有被别人更新，从而实现线程安全的数据更新。</p></li><li><p>业务并发现象带来的问题：秒杀</p></li></ul><img src="'+k+'"><p><strong>代码实现</strong> 👇</p><h5 id="_1️⃣-数据库表中添加锁标记字段" tabindex="-1">1️⃣ 数据库表中添加锁标记字段 <a class="header-anchor" href="#_1️⃣-数据库表中添加锁标记字段" aria-label="Permalink to &quot;1️⃣ 数据库表中添加锁标记字段&quot;">​</a></h5><img src="'+U+`"><h5 id="_2️⃣-实体类中添加对应字段-并设定当前字段为逻辑删除标记字段-1" tabindex="-1">2️⃣ 实体类中添加对应字段，并设定当前字段为逻辑删除标记字段 <a class="header-anchor" href="#_2️⃣-实体类中添加对应字段-并设定当前字段为逻辑删除标记字段-1" aria-label="Permalink to &quot;2️⃣ 实体类中添加对应字段，并设定当前字段为逻辑删除标记字段&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Data</span></span>
<span class="line"><span style="color:#f6f6f4;">public class User {</span></span>
<span class="line"><span style="color:#f6f6f4;"> private Long id;</span></span>
<span class="line"><span style="color:#f6f6f4;">    @Version</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Integer version;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Data</span></span>
<span class="line"><span style="color:#24292e;">public class User {</span></span>
<span class="line"><span style="color:#24292e;"> private Long id;</span></span>
<span class="line"><span style="color:#24292e;">    @Version</span></span>
<span class="line"><span style="color:#24292e;">    private Integer version;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h5 id="_3️⃣-配置乐观锁拦截器实现锁机制对应的动态-sql-语句拼装" tabindex="-1">3️⃣ 配置乐观锁拦截器实现锁机制对应的动态 SQL 语句拼装 <a class="header-anchor" href="#_3️⃣-配置乐观锁拦截器实现锁机制对应的动态-sql-语句拼装" aria-label="Permalink to &quot;3️⃣ 配置乐观锁拦截器实现锁机制对应的动态 SQL 语句拼装&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Configuration</span></span>
<span class="line"><span style="color:#f6f6f4;">public class MpConfig {</span></span>
<span class="line"><span style="color:#f6f6f4;">    @Bean</span></span>
<span class="line"><span style="color:#f6f6f4;">    public MybatisPlusInterceptor mpInterceptor() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        //1.定义Mp拦截器</span></span>
<span class="line"><span style="color:#f6f6f4;">        MybatisPlusInterceptor mpInterceptor = new MybatisPlusInterceptor();</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        //2.添加乐观锁拦截器</span></span>
<span class="line"><span style="color:#f6f6f4;">        mpInterceptor.addInnerInterceptor(new OptimisticLockerInnerInterceptor());</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        return mpInterceptor;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Configuration</span></span>
<span class="line"><span style="color:#24292e;">public class MpConfig {</span></span>
<span class="line"><span style="color:#24292e;">    @Bean</span></span>
<span class="line"><span style="color:#24292e;">    public MybatisPlusInterceptor mpInterceptor() {</span></span>
<span class="line"><span style="color:#24292e;">        //1.定义Mp拦截器</span></span>
<span class="line"><span style="color:#24292e;">        MybatisPlusInterceptor mpInterceptor = new MybatisPlusInterceptor();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        //2.添加乐观锁拦截器</span></span>
<span class="line"><span style="color:#24292e;">        mpInterceptor.addInnerInterceptor(new OptimisticLockerInnerInterceptor());</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        return mpInterceptor;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h5 id="_4️⃣-使用乐观锁机制在修改前必须先获取到对应数据的-verion-方可正常进行" tabindex="-1">4️⃣ 使用乐观锁机制在修改前必须先获取到对应数据的 verion 方可正常进行 <a class="header-anchor" href="#_4️⃣-使用乐观锁机制在修改前必须先获取到对应数据的-verion-方可正常进行" aria-label="Permalink to &quot;4️⃣ 使用乐观锁机制在修改前必须先获取到对应数据的 verion 方可正常进行&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Test</span></span>
<span class="line"><span style="color:#f6f6f4;">public void testUpdate() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    /*User user = new User();</span></span>
<span class="line"><span style="color:#f6f6f4;">    user.setId(3L);</span></span>
<span class="line"><span style="color:#f6f6f4;">    user.setName(&quot;Jock666&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">    user.setVersion(1);</span></span>
<span class="line"><span style="color:#f6f6f4;">    userDao.updateById(user);*/</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    //1.先通过要修改的数据id将当前数据查询出来</span></span>
<span class="line"><span style="color:#f6f6f4;">    //User user = userDao.selectById(3L);</span></span>
<span class="line"><span style="color:#f6f6f4;">    //2.将要修改的属性逐一设置进去</span></span>
<span class="line"><span style="color:#f6f6f4;">    //user.setName(&quot;Jock888&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">    //userDao.updateById(user);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    //1.先通过要修改的数据id将当前数据查询出来</span></span>
<span class="line"><span style="color:#f6f6f4;">    User user = userDao.selectById(3L);     //version=3</span></span>
<span class="line"><span style="color:#f6f6f4;">    User user2 = userDao.selectById(3L);    //version=3</span></span>
<span class="line"><span style="color:#f6f6f4;">    user2.setName(&quot;Jock aaa&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">    userDao.updateById(user2);              //version=&gt;4</span></span>
<span class="line"><span style="color:#f6f6f4;">    user.setName(&quot;Jock bbb&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">    userDao.updateById(user);               //verion=3?条件还成立吗？</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Test</span></span>
<span class="line"><span style="color:#24292e;">public void testUpdate() {</span></span>
<span class="line"><span style="color:#24292e;">    /*User user = new User();</span></span>
<span class="line"><span style="color:#24292e;">    user.setId(3L);</span></span>
<span class="line"><span style="color:#24292e;">    user.setName(&quot;Jock666&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    user.setVersion(1);</span></span>
<span class="line"><span style="color:#24292e;">    userDao.updateById(user);*/</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    //1.先通过要修改的数据id将当前数据查询出来</span></span>
<span class="line"><span style="color:#24292e;">    //User user = userDao.selectById(3L);</span></span>
<span class="line"><span style="color:#24292e;">    //2.将要修改的属性逐一设置进去</span></span>
<span class="line"><span style="color:#24292e;">    //user.setName(&quot;Jock888&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    //userDao.updateById(user);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    //1.先通过要修改的数据id将当前数据查询出来</span></span>
<span class="line"><span style="color:#24292e;">    User user = userDao.selectById(3L);     //version=3</span></span>
<span class="line"><span style="color:#24292e;">    User user2 = userDao.selectById(3L);    //version=3</span></span>
<span class="line"><span style="color:#24292e;">    user2.setName(&quot;Jock aaa&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    userDao.updateById(user2);              //version=&gt;4</span></span>
<span class="line"><span style="color:#24292e;">    user.setName(&quot;Jock bbb&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    userDao.updateById(user);               //verion=3?条件还成立吗？</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><img src="`+I+'"><h3 id="_4-4-自动填充功能" tabindex="-1">4.4 自动填充功能 <a class="header-anchor" href="#_4-4-自动填充功能" aria-label="Permalink to &quot;4.4 自动填充功能&quot;">​</a></h3><p><a href="https://www.baomidou.com/pages/4c6bcf/" target="_blank" rel="noreferrer">自动填充功能教程open in new window</a></p><h2 id="_5-快速开发-代码生成器-🚀-🚀" tabindex="-1">5.快速开发-代码生成器 🚀 🚀 <a class="header-anchor" href="#_5-快速开发-代码生成器-🚀-🚀" aria-label="Permalink to &quot;5.快速开发-代码生成器 🚀 🚀&quot;">​</a></h2><p>代码生成器</p><p><strong>1. 如果只给一张表的字段信息，能够推演出 Domain、Dao 层的代码？</strong></p><blockquote><p>可以</p></blockquote><ul><li>Mapper 接口模板</li></ul><img src="'+_+'"><ul><li>实体对象类模板</li></ul><img src="'+S+`"><p><strong>代码实现</strong> 👇</p><h5 id="_1️⃣-第一步-创建-springboot-工程-添加代码生成器相关依赖-其他依赖自行添加" tabindex="-1">1️⃣ 第一步：创建 SpringBoot 工程，添加代码生成器相关依赖，其他依赖自行添加 <a class="header-anchor" href="#_1️⃣-第一步-创建-springboot-工程-添加代码生成器相关依赖-其他依赖自行添加" aria-label="Permalink to &quot;1️⃣ 第一步：创建 SpringBoot 工程，添加代码生成器相关依赖，其他依赖自行添加&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;groupId&gt;com.baomidou&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;artifactId&gt;mybatis-plus-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;version&gt;3.4.1&lt;/version&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;artifactId&gt;druid&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;version&gt;1.1.16&lt;/version&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;!--代码生成器--&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;groupId&gt;com.baomidou&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;artifactId&gt;mybatis-plus-generator&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;version&gt;3.4.1&lt;/version&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;!--velocity模板引擎--&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;groupId&gt;org.apache.velocity&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;artifactId&gt;velocity-engine-core&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;version&gt;2.3&lt;/version&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;com.baomidou&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;mybatis-plus-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;version&gt;3.4.1&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;druid&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;version&gt;1.1.16&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;!--代码生成器--&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;com.baomidou&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;mybatis-plus-generator&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;version&gt;3.4.1&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;!--velocity模板引擎--&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.apache.velocity&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;velocity-engine-core&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;version&gt;2.3&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><h5 id="_2️⃣-第二步-编写代码生成器类" tabindex="-1">2️⃣ 第二步：编写代码生成器类 <a class="header-anchor" href="#_2️⃣-第二步-编写代码生成器类" aria-label="Permalink to &quot;2️⃣ 第二步：编写代码生成器类&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">public class Generator {</span></span>
<span class="line"><span style="color:#f6f6f4;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        //1. 创建代码生成器对象，执行生成代码操作</span></span>
<span class="line"><span style="color:#f6f6f4;">        AutoGenerator autoGenerator = new AutoGenerator();</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        //2. 数据源相关配置：读取数据库中的信息，根据数据库表结构生成代码</span></span>
<span class="line"><span style="color:#f6f6f4;">        DataSourceConfig dataSource = new DataSourceConfig();</span></span>
<span class="line"><span style="color:#f6f6f4;">        dataSource.setDriverName(&quot;com.mysql.cj.jdbc.Driver&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        dataSource.setUrl(&quot;jdbc:mysql://localhost:3306/mybatisplus_db?serverTimezone=UTC&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        dataSource.setUsername(&quot;root&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        dataSource.setPassword(&quot;root&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        autoGenerator.setDataSource(dataSource);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        GlobalConfig globalConfig = new GlobalConfig();</span></span>
<span class="line"><span style="color:#f6f6f4;">        globalConfig.setOutputDir(&quot;填写路径&quot;);    //设置代码生成位置</span></span>
<span class="line"><span style="color:#f6f6f4;">        globalConfig.setOpen(false);    //设置生成完毕后是否打开生成代码所在的目录</span></span>
<span class="line"><span style="color:#f6f6f4;">        globalConfig.setAuthor(&quot;焱哥&quot;);    //设置作者</span></span>
<span class="line"><span style="color:#f6f6f4;">        globalConfig.setFileOverride(true);     //设置是否覆盖原始生成的文件</span></span>
<span class="line"><span style="color:#f6f6f4;">        globalConfig.setMapperName(&quot;%sDao&quot;);    //设置数据层接口名，%s为占位符，指代模块名称</span></span>
<span class="line"><span style="color:#f6f6f4;">        globalConfig.setIdType(IdType.ASSIGN_ID);   //设置Id生成策略</span></span>
<span class="line"><span style="color:#f6f6f4;">        autoGenerator.setGlobalConfig(globalConfig);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        //设置包名相关配置</span></span>
<span class="line"><span style="color:#f6f6f4;">        PackageConfig packageInfo = new PackageConfig();</span></span>
<span class="line"><span style="color:#f6f6f4;">        packageInfo.setParent(&quot;com.aaa&quot;);   //设置生成的包名，与代码所在位置不冲突，二者叠加组成完整路径</span></span>
<span class="line"><span style="color:#f6f6f4;">        packageInfo.setEntity(&quot;domain&quot;);    //设置实体类包名</span></span>
<span class="line"><span style="color:#f6f6f4;">        packageInfo.setMapper(&quot;dao&quot;);   //设置数据层包名</span></span>
<span class="line"><span style="color:#f6f6f4;">        autoGenerator.setPackageInfo(packageInfo);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        //策略设置</span></span>
<span class="line"><span style="color:#f6f6f4;">        StrategyConfig strategyConfig = new StrategyConfig();</span></span>
<span class="line"><span style="color:#f6f6f4;">        strategyConfig.setInclude(&quot;tbl_user&quot;);  //设置当前参与生成的表名，参数为可变参数</span></span>
<span class="line"><span style="color:#f6f6f4;">        strategyConfig.setTablePrefix(&quot;tbl_&quot;);  //设置数据库表的前缀名称，模块名 = 数据库表名 - 前缀名  例如： User = tbl_user - tbl_</span></span>
<span class="line"><span style="color:#f6f6f4;">        strategyConfig.setRestControllerStyle(true);    //设置是否启用Rest风格</span></span>
<span class="line"><span style="color:#f6f6f4;">        strategyConfig.setVersionFieldName(&quot;version&quot;);  //设置乐观锁字段名</span></span>
<span class="line"><span style="color:#f6f6f4;">        strategyConfig.setLogicDeleteFieldName(&quot;deleted&quot;);  //设置逻辑删除字段名</span></span>
<span class="line"><span style="color:#f6f6f4;">        strategyConfig.setEntityLombokModel(true);  //设置是否启用lombok</span></span>
<span class="line"><span style="color:#f6f6f4;">        autoGenerator.setStrategy(strategyConfig);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">         //执行生成操作</span></span>
<span class="line"><span style="color:#f6f6f4;">        autoGenerator.execute();</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class Generator {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        //1. 创建代码生成器对象，执行生成代码操作</span></span>
<span class="line"><span style="color:#24292e;">        AutoGenerator autoGenerator = new AutoGenerator();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        //2. 数据源相关配置：读取数据库中的信息，根据数据库表结构生成代码</span></span>
<span class="line"><span style="color:#24292e;">        DataSourceConfig dataSource = new DataSourceConfig();</span></span>
<span class="line"><span style="color:#24292e;">        dataSource.setDriverName(&quot;com.mysql.cj.jdbc.Driver&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        dataSource.setUrl(&quot;jdbc:mysql://localhost:3306/mybatisplus_db?serverTimezone=UTC&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        dataSource.setUsername(&quot;root&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        dataSource.setPassword(&quot;root&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        autoGenerator.setDataSource(dataSource);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        GlobalConfig globalConfig = new GlobalConfig();</span></span>
<span class="line"><span style="color:#24292e;">        globalConfig.setOutputDir(&quot;填写路径&quot;);    //设置代码生成位置</span></span>
<span class="line"><span style="color:#24292e;">        globalConfig.setOpen(false);    //设置生成完毕后是否打开生成代码所在的目录</span></span>
<span class="line"><span style="color:#24292e;">        globalConfig.setAuthor(&quot;焱哥&quot;);    //设置作者</span></span>
<span class="line"><span style="color:#24292e;">        globalConfig.setFileOverride(true);     //设置是否覆盖原始生成的文件</span></span>
<span class="line"><span style="color:#24292e;">        globalConfig.setMapperName(&quot;%sDao&quot;);    //设置数据层接口名，%s为占位符，指代模块名称</span></span>
<span class="line"><span style="color:#24292e;">        globalConfig.setIdType(IdType.ASSIGN_ID);   //设置Id生成策略</span></span>
<span class="line"><span style="color:#24292e;">        autoGenerator.setGlobalConfig(globalConfig);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        //设置包名相关配置</span></span>
<span class="line"><span style="color:#24292e;">        PackageConfig packageInfo = new PackageConfig();</span></span>
<span class="line"><span style="color:#24292e;">        packageInfo.setParent(&quot;com.aaa&quot;);   //设置生成的包名，与代码所在位置不冲突，二者叠加组成完整路径</span></span>
<span class="line"><span style="color:#24292e;">        packageInfo.setEntity(&quot;domain&quot;);    //设置实体类包名</span></span>
<span class="line"><span style="color:#24292e;">        packageInfo.setMapper(&quot;dao&quot;);   //设置数据层包名</span></span>
<span class="line"><span style="color:#24292e;">        autoGenerator.setPackageInfo(packageInfo);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        //策略设置</span></span>
<span class="line"><span style="color:#24292e;">        StrategyConfig strategyConfig = new StrategyConfig();</span></span>
<span class="line"><span style="color:#24292e;">        strategyConfig.setInclude(&quot;tbl_user&quot;);  //设置当前参与生成的表名，参数为可变参数</span></span>
<span class="line"><span style="color:#24292e;">        strategyConfig.setTablePrefix(&quot;tbl_&quot;);  //设置数据库表的前缀名称，模块名 = 数据库表名 - 前缀名  例如： User = tbl_user - tbl_</span></span>
<span class="line"><span style="color:#24292e;">        strategyConfig.setRestControllerStyle(true);    //设置是否启用Rest风格</span></span>
<span class="line"><span style="color:#24292e;">        strategyConfig.setVersionFieldName(&quot;version&quot;);  //设置乐观锁字段名</span></span>
<span class="line"><span style="color:#24292e;">        strategyConfig.setLogicDeleteFieldName(&quot;deleted&quot;);  //设置逻辑删除字段名</span></span>
<span class="line"><span style="color:#24292e;">        strategyConfig.setEntityLombokModel(true);  //设置是否启用lombok</span></span>
<span class="line"><span style="color:#24292e;">        autoGenerator.setStrategy(strategyConfig);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">         //执行生成操作</span></span>
<span class="line"><span style="color:#24292e;">        autoGenerator.execute();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,179),P=[D];function T(A,x,M,B,Q,W){return a(),l("div",null,P)}const G=n(C,[["render",T]]);export{j as __pageData,G as default};
