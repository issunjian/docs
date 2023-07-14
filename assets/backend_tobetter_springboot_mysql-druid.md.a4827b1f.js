import{_ as s,o as a,c as n,V as l}from"./chunks/framework.c6d8cbec.js";const p="/docs/assets/mysql-druid-f75e7dfe-7dc2-43b2-94d1-68ff775cd2ed.d54832f7.png",o="/docs/assets/mysql-druid-89f6d126-b059-4511-b64d-720aa8df354f.4595ccef.png",e="/docs/assets/mysql-druid-86d80ab6-968e-42ec-a532-1eeb341779c1.34632ed7.png",t="/docs/assets/mysql-druid-ab94f6df-2031-42ff-8746-b4ad5a4e3a81.1c2db59e.png",c="/docs/assets/mysql-druid-e7031aec-74c5-4079-a6f3-97368c921620.d0612bfb.png",r="/docs/assets/mysql-druid-d7765111-9dcb-4125-a87a-da1439a0a6cf.34736942.png",i="/docs/assets/mysql-druid-201eb6fa-0a09-46d7-a555-3988bee92a9f.9d974464.png",y="/docs/assets/mysql-druid-be486130-539a-49b5-ac6f-dc1bf7f8cba6.846fa3e3.png",d="/docs/assets/mysql-druid-92a53c8e-e99a-4ca6-8ad1-f5ec4653da3b.9471c709.png",g="/docs/assets/mysql-druid-2daef9fc-4a97-41bb-bd1c-875f468d90bc.935781ff.png",f="/docs/assets/mysql-druid-18d120ea-0f84-4ca0-b0fd-020587e43fc4.ef101a3c.png",F="/docs/assets/mysql-druid-070ab8b8-0629-4238-b35d-438dbcbb130e.2d6a46bb.png",u="/docs/assets/mysql-druid-29ba218a-7528-49bf-b2da-c5fa48b40d2b.7cef6355.png",m="/docs/assets/mysql-druid-1b86d117-412c-47a2-82c8-c22f9bcf6455.dad322fd.png",E="/docs/assets/mysql-druid-8c0288ae-ee22-4983-8d91-7ed7125b17a5.0c826f1a.png",b="/docs/assets/mysql-druid-e1c9e85c-382a-40a8-a4fa-3fe32ee612fb.94ee88db.png",h="/docs/assets/mysql-druid-a1f53d5b-1048-4707-bebc-1a59d7793880.814cde46.png",q="/docs/assets/mysql-druid-0982b47e-b211-41a6-ab88-355e1d2ae7be.04d6e041.png",M=JSON.parse('{"title":"Spring Boot 整合 MySQL 和 Druid","description":"","frontmatter":{"category":["Java企业级开发"],"tag":["Spring Boot"],"title":"Spring Boot 整合 MySQL 和 Druid"},"headers":[],"relativePath":"backend/tobetter/springboot/mysql-druid.md","filePath":"backend/tobetter/springboot/mysql-druid.md"}'),v={name:"backend/tobetter/springboot/mysql-druid.md"},S=l('<h2 id="mysql-简介" tabindex="-1">MySQL 简介 <a class="header-anchor" href="#mysql-简介" aria-label="Permalink to &quot;MySQL 简介&quot;">​</a></h2><p>MySQL 是目前项目中运用最广泛的关系型数据库，无论是互联网大厂，还是中小型公司，几乎都在用。</p><p>MySQL 体积小、速度快、源码开放，所以广受开发者喜爱。</p><p>MySQL 的安装非常简单，针对不同的操作系统，MySQL 都提供了安装包的下载。</p><img src="'+p+'"><p>MySQL 目前主推的版本是 8.0，参考手册的地址如下所示：</p><blockquote><p><a href="https://dev.mysql.com/doc/refman/8.0/en/" target="_blank" rel="noreferrer">https://dev.mysql.com/doc/refman/8.0/en/</a></p></blockquote><h2 id="如何安装-mysql" tabindex="-1">如何安装 MySQL <a class="header-anchor" href="#如何安装-mysql" aria-label="Permalink to &quot;如何安装 MySQL&quot;">​</a></h2><p>如果有云服务器的话，建议安装在云服务器上，这样就可以长时间运行 MySQL 而不用担心服务重启的问题。按照步骤参照下面的文档。</p><blockquote><p><a href="https://dev.mysql.com/doc/refman/8.0/en/linux-installation.html" target="_blank" rel="noreferrer">https://dev.mysql.com/doc/refman/8.0/en/linux-installation.html</a></p></blockquote><p>也可以直接通过宝塔面板的形式来安装，这样更省事省力省心。</p><blockquote><p>宝塔面板安装脚本地址：<a href="https://www.bt.cn/new/download.html" target="_blank" rel="noreferrer">https://www.bt.cn/new/download.html</a></p></blockquote><img src="'+o+'"><p>安装完成后，就可以在数据库管理页面添加数据库并且进行管理了。</p><img src="'+e+'"><p>如果是 Windows 用户的话，安装步骤参照下面的文档。</p><blockquote><p><a href="https://dev.mysql.com/doc/refman/8.0/en/windows-installation.html" target="_blank" rel="noreferrer">https://dev.mysql.com/doc/refman/8.0/en/windows-installation.html</a></p></blockquote><p>如果是 macOS 用户的话，安装步骤参照下面的文档。</p><blockquote><p><a href="https://dev.mysql.com/doc/refman/8.0/en/macos-installation-pkg.html" target="_blank" rel="noreferrer">https://dev.mysql.com/doc/refman/8.0/en/macos-installation-pkg.html</a></p></blockquote><p>Windows 和 macOS 的安装都非常的简单，主要就是下载对应操作系统的 MySQL 包安装管理器。</p><img src="'+t+'"><p>然后按照包安装向导的提示一步步傻瓜式安装即可。</p><img src="'+c+'"><h2 id="spring-boot-整合-mysql-数据库" tabindex="-1">Spring Boot 整合 MySQL 数据库 <a class="header-anchor" href="#spring-boot-整合-mysql-数据库" aria-label="Permalink to &quot;Spring Boot 整合 MySQL 数据库&quot;">​</a></h2><p>Spring Boot 整合 MySQL 数据库非常简单，只需要添加 MySQL 依赖并在配置文件中添加数据库配置即可。我们可以不用编写原始的访问数据库的代码，也不用调用 JDBC 或者连接池就可以访问 MySQL。</p><p>1）使用 Intellij IDEA 新建一个 Spring Boot 项目，使用 Java 8 版本「社区版没有此功能，需要到 (Spring initializr)[<a href="https://start.spring.io/" target="_blank" rel="noreferrer">https://start.spring.io/</a>]）生成项目后导入，推荐使用旗舰版，功能更加强大」。</p><img src="'+r+'"><p>添加 MySQL 的 Java连接驱动依赖和 JDBC Starter。</p><img src="'+i+`"><p>对应pom.xml文件中的代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;groupId&gt;mysql&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;scope&gt;runtime&lt;/scope&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;mysql&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;scope&gt;runtime&lt;/scope&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p><strong>2）通过宝塔面板新建codingmore-mysql数据库并添加数据表</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">CREATE TABLE \`user\` (</span></span>
<span class="line"><span style="color:#f6f6f4;">  \`id\` int NOT NULL,</span></span>
<span class="line"><span style="color:#f6f6f4;">  \`name\` varchar(10) NOT NULL,</span></span>
<span class="line"><span style="color:#f6f6f4;">  \`password\` varchar(10) NOT NULL,</span></span>
<span class="line"><span style="color:#f6f6f4;">  \`age\` int NOT NULL</span></span>
<span class="line"><span style="color:#f6f6f4;">) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">--</span></span>
<span class="line"><span style="color:#f6f6f4;">-- 转储表的索引</span></span>
<span class="line"><span style="color:#f6f6f4;">--</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">--</span></span>
<span class="line"><span style="color:#f6f6f4;">-- 表的索引 \`user\`</span></span>
<span class="line"><span style="color:#f6f6f4;">--</span></span>
<span class="line"><span style="color:#f6f6f4;">ALTER TABLE \`user\`</span></span>
<span class="line"><span style="color:#f6f6f4;">  ADD PRIMARY KEY (\`id\`);</span></span>
<span class="line"><span style="color:#f6f6f4;">COMMIT;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">CREATE TABLE \`user\` (</span></span>
<span class="line"><span style="color:#24292e;">  \`id\` int NOT NULL,</span></span>
<span class="line"><span style="color:#24292e;">  \`name\` varchar(10) NOT NULL,</span></span>
<span class="line"><span style="color:#24292e;">  \`password\` varchar(10) NOT NULL,</span></span>
<span class="line"><span style="color:#24292e;">  \`age\` int NOT NULL</span></span>
<span class="line"><span style="color:#24292e;">) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">--</span></span>
<span class="line"><span style="color:#24292e;">-- 转储表的索引</span></span>
<span class="line"><span style="color:#24292e;">--</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">--</span></span>
<span class="line"><span style="color:#24292e;">-- 表的索引 \`user\`</span></span>
<span class="line"><span style="color:#24292e;">--</span></span>
<span class="line"><span style="color:#24292e;">ALTER TABLE \`user\`</span></span>
<span class="line"><span style="color:#24292e;">  ADD PRIMARY KEY (\`id\`);</span></span>
<span class="line"><span style="color:#24292e;">COMMIT;</span></span></code></pre></div><p>然后插入一条数据：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">INSERT INTO \`user\` (\`id\`, \`name\`, \`password\`, \`age\`) VALUES (&#39;1&#39;, &#39;沉默王二&#39;, &#39; 123456&#39;, &#39;18&#39;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">INSERT INTO \`user\` (\`id\`, \`name\`, \`password\`, \`age\`) VALUES (&#39;1&#39;, &#39;沉默王二&#39;, &#39; 123456&#39;, &#39;18&#39;);</span></span></code></pre></div><p>我把 SQL 语句放在源码的 resouces 目录里了</p><p><strong>3）在 application.yml 文件中添加数据库链接驱动信息</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">spring:</span></span>
<span class="line"><span style="color:#f6f6f4;">  datasource:</span></span>
<span class="line"><span style="color:#f6f6f4;">    username: codingmore-mysql</span></span>
<span class="line"><span style="color:#f6f6f4;">    password: YyfR4TDxCwrjZ2Fs</span></span>
<span class="line"><span style="color:#f6f6f4;">    url:jdbc: mysql://118.190.99.232:3306/codingmore-mysql?useUnicode=true&amp;characterEncoding=utf-8&amp;serverTimezone=Asia/Shanghai&amp;useSSL=false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">spring:</span></span>
<span class="line"><span style="color:#24292e;">  datasource:</span></span>
<span class="line"><span style="color:#24292e;">    username: codingmore-mysql</span></span>
<span class="line"><span style="color:#24292e;">    password: YyfR4TDxCwrjZ2Fs</span></span>
<span class="line"><span style="color:#24292e;">    url:jdbc: mysql://118.190.99.232:3306/codingmore-mysql?useUnicode=true&amp;characterEncoding=utf-8&amp;serverTimezone=Asia/Shanghai&amp;useSSL=false</span></span></code></pre></div><p>推荐安装 Spring Initializr and assistant 插件。可以自动补全配置信息。</p><img src="`+y+`"><p><strong>4）新建实体类 User.java</strong></p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">@</span><span style="color:#97E1F1;font-style:italic;">Data</span></span>
<span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">User</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">private</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Integer</span><span style="color:#F6F6F4;"> id;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">private</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> name;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">private</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> password;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">private</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Integer</span><span style="color:#F6F6F4;"> age;</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Data</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">User</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> Integer id;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> String name;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> String password;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> Integer age;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>建议在 pom.xml 文件中添加 lombok 的依赖。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;artifactId&gt;lombok&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;version&gt;1.18.20&lt;/version&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;lombok&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;version&gt;1.18.20&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p><strong>5）在测试类中添加以下代码</strong></p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">@</span><span style="color:#97E1F1;font-style:italic;">SpringBootTest</span></span>
<span class="line"><span style="color:#F6F6F4;">@</span><span style="color:#97E1F1;font-style:italic;">Slf4j</span></span>
<span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">CodingmoreMysqlApplicationTests</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    @</span><span style="color:#97E1F1;font-style:italic;">Resource</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">private</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">JdbcTemplate</span><span style="color:#F6F6F4;"> jdbcTemplate;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    @</span><span style="color:#97E1F1;font-style:italic;">Test</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">contextLoads</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> sql </span><span style="color:#F286C4;">=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">select * from user</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;font-style:italic;">List</span><span style="color:#F6F6F4;">&lt;User&gt; users </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> jdbcTemplate.</span><span style="color:#62E884;">query</span><span style="color:#F6F6F4;">(sql, </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">RowMapper</span><span style="color:#F6F6F4;">&lt;User&gt;() {</span></span>
<span class="line"><span style="color:#F6F6F4;">            @</span><span style="color:#97E1F1;font-style:italic;">Override</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#F286C4;">public</span><span style="color:#62E884;"> </span><span style="color:#97E1F1;font-style:italic;">User</span><span style="color:#62E884;"> mapRow(</span><span style="color:#97E1F1;font-style:italic;">ResultSet</span><span style="color:#62E884;"> </span><span style="color:#FFB86C;font-style:italic;">rs</span><span style="color:#62E884;">, </span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#62E884;"> </span><span style="color:#FFB86C;font-style:italic;">rowNum</span><span style="color:#62E884;">) </span><span style="color:#F286C4;">throws</span><span style="color:#62E884;"> </span><span style="color:#97E1F1;font-style:italic;">SQLException</span><span style="color:#62E884;"> {</span></span>
<span class="line"><span style="color:#62E884;">                </span><span style="color:#97E1F1;font-style:italic;">User</span><span style="color:#62E884;"> </span><span style="color:#F6F6F4;">user</span><span style="color:#62E884;"> </span><span style="color:#F286C4;">=</span><span style="color:#62E884;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#62E884;"> User</span><span style="color:#F6F6F4;">()</span><span style="color:#62E884;">;</span></span>
<span class="line"><span style="color:#62E884;">                </span><span style="color:#F6F6F4;">user</span><span style="color:#62E884;">.setId(</span><span style="color:#F6F6F4;">rs</span><span style="color:#62E884;">.getInt(</span><span style="color:#BF9EEE;">1</span><span style="color:#62E884;">));</span></span>
<span class="line"><span style="color:#62E884;">                </span><span style="color:#F6F6F4;">user</span><span style="color:#62E884;">.setAge(</span><span style="color:#F6F6F4;">rs</span><span style="color:#62E884;">.getInt(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">age</span><span style="color:#DEE492;">&quot;</span><span style="color:#62E884;">));</span></span>
<span class="line"><span style="color:#62E884;">                </span><span style="color:#F6F6F4;">user</span><span style="color:#62E884;">.setName(</span><span style="color:#F6F6F4;">rs</span><span style="color:#62E884;">.getString(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">name</span><span style="color:#DEE492;">&quot;</span><span style="color:#62E884;">));</span></span>
<span class="line"><span style="color:#62E884;">                </span><span style="color:#F6F6F4;">user</span><span style="color:#62E884;">.setPassword(</span><span style="color:#F6F6F4;">rs</span><span style="color:#62E884;">.getString(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">password</span><span style="color:#DEE492;">&quot;</span><span style="color:#62E884;">));</span></span>
<span class="line"><span style="color:#62E884;">                </span><span style="color:#F286C4;">return</span><span style="color:#62E884;"> user;</span></span>
<span class="line"><span style="color:#62E884;">            }</span></span>
<span class="line"><span style="color:#F6F6F4;">        });</span></span>
<span class="line"><span style="color:#F6F6F4;">        log.</span><span style="color:#62E884;">info</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">查询成功</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">        log.</span><span style="color:#62E884;">info</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">用户{}</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,users);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">SpringBootTest</span></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Slf4j</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CodingmoreMysqlApplicationTests</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Resource</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> JdbcTemplate jdbcTemplate;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Test</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">contextLoads</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        String sql </span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;select * from user&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        List&lt;</span><span style="color:#D73A49;">User</span><span style="color:#24292E;">&gt; users </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> jdbcTemplate.</span><span style="color:#6F42C1;">query</span><span style="color:#24292E;">(sql, </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> RowMapper&lt;</span><span style="color:#D73A49;">User</span><span style="color:#24292E;">&gt;() {</span></span>
<span class="line"><span style="color:#24292E;">            @</span><span style="color:#D73A49;">Override</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> User </span><span style="color:#6F42C1;">mapRow</span><span style="color:#24292E;">(ResultSet </span><span style="color:#E36209;">rs</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">rowNum</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">throws</span><span style="color:#24292E;"> SQLException {</span></span>
<span class="line"><span style="color:#24292E;">                User user </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">User</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">                user.</span><span style="color:#6F42C1;">setId</span><span style="color:#24292E;">(rs.</span><span style="color:#6F42C1;">getInt</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">                user.</span><span style="color:#6F42C1;">setAge</span><span style="color:#24292E;">(rs.</span><span style="color:#6F42C1;">getInt</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;age&quot;</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">                user.</span><span style="color:#6F42C1;">setName</span><span style="color:#24292E;">(rs.</span><span style="color:#6F42C1;">getString</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">                user.</span><span style="color:#6F42C1;">setPassword</span><span style="color:#24292E;">(rs.</span><span style="color:#6F42C1;">getString</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;password&quot;</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> user;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"><span style="color:#24292E;">        log.</span><span style="color:#6F42C1;">info</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;查询成功&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        log.</span><span style="color:#6F42C1;">info</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;用户{}&quot;</span><span style="color:#24292E;">,users);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Spring Boot 的测试类主要放置在 <code>src/test/java</code> 目录下面，项目创建成功后，Spring Boot 会根据项目名称自动为我们生成测试类。</p><p>比如说本次项目名为 codingmore-mysql，那么测试类名为 CodingmoreMysqlApplicationTests。</p><p><code>@SpringBootTest</code> 注解能够测试我们的项目主类，该项目为 CodingmoreMysqlApplication。</p><p><code>@Test</code> 注解是 junit 单元测试的注解，表示该方法为测试方法。</p><p><code>JdbcTemplate</code> 一个通过 JDBC 连接数据库的工具类，spring-boot-starter-jdbc 依赖中包含了该类。</p><p><code>@Resource</code> 注解会帮我们在 Spring Boot 启动的时候注入一个 JdbcTemplate 的对象。</p><p><code>jdbcTemplate.query()</code> 方法通过 SQL 语句和匿名内部类参数的形式，执行 SQL 并查询结果集。</p><p><code>RowMapper</code> 就是查询到的每一行数据对象，我们可以通过重写 mapRow 方法将数据结果集封装到 User 对象上。</p><p>右键菜单运行 testMysql 方法就可以在日志中看到 SQL 执行的结果。</p><img src="`+d+'"><h2 id="如何通过-navicat-连接-mysql" tabindex="-1">如何通过 Navicat 连接 MySQL <a class="header-anchor" href="#如何通过-navicat-连接-mysql" aria-label="Permalink to &quot;如何通过 Navicat 连接 MySQL&quot;">​</a></h2><p>Navicat 是一个从我参加工作到现在一直都在用的 MySQL 客户端工具，通过 Navicat 可以轻松连接数据库，并执行增删改查操作。</p><img src="'+g+'"><p>连接数据库也非常的简单，只需要填写主机 IP 地址、端口、用户名和密码即可。</p><img src="'+f+'"><h2 id="如何通过-intellij-idea-连接-mysql" tabindex="-1">如何通过 Intellij IDEA 连接 MySQL <a class="header-anchor" href="#如何通过-intellij-idea-连接-mysql" aria-label="Permalink to &quot;如何通过 Intellij IDEA 连接 MySQL&quot;">​</a></h2><p>除了 Navicat，还可以使用 Intellij IDEA 直连 MySQL。</p><p>点击「database」面板，在左上角选择 + 号，选择 DataSource，再选择 MySQL。</p><img src="'+F+'"><p>在弹出面板中填写连接信息。</p><img src="'+u+'"><p>如果是第一次连接 MySQL 的话，记得点击「download」下载 MySQL 驱动，之后点击「test connection」测试是否链接成功，如果出现以下界面，则表示 OK。</p><img src="'+m+'"><p>选择右侧的数据库表，双击，就可以查看到数据了。</p><img src="'+E+'"><p>在「console」SQL 查询面板里可以编写 SQL 语句来执行增删改查操作。</p><img src="'+b+'"><h2 id="spring-boot-整合-druid" tabindex="-1">Spring Boot 整合 Druid <a class="header-anchor" href="#spring-boot-整合-druid" aria-label="Permalink to &quot;Spring Boot 整合 Druid&quot;">​</a></h2><p>Druid 是阿里巴巴开源的一款数据库连接池，结合了C3P0、DBCP 等 DB 池的优点，同时还加入了日志监控。</p><p>Druid 在 GitHub 上已经收获了 25.4k 的 star，可以说非常的知名，从简介上也能看得出，Druid 就是为了监控而生的。</p><blockquote><p><a href="https://github.com/alibaba/druid/" target="_blank" rel="noreferrer">https://github.com/alibaba/druid/</a></p></blockquote><img src="'+h+'"><p>Druid 包含了三个重要的组成部分：</p><ul><li>DruidDriver，能够提供基于 Filter-Chain 模式的插件体系；</li><li>DruidDataSource，高效可管理的数据库连接池；</li><li>SQLParser，支持所有 JDBC 兼容的数据库，包括 Oracle、MySQL 等。</li></ul><p>Spring Boot2.0 以上默认使用的是 Hikari 连接池，我们从之前的日志信息里就可以看得到。</p><img src="'+q+`"><p>那如果我们想使用 Druid 的话，该怎么整合呢？</p><p>这次我们直接在编程喵项目后端项目 codingmore-admin 上进行修改。</p><p>第一步，在 pom.xml 文件中添加 Druid 的依赖，官方已经提供了 starter，我们直接使用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;artifactId&gt;druid-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;version&gt;1.1.23&lt;/version&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;druid-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;version&gt;1.1.23&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>第二步，在 application.yml 文件中添加 Druid 配置。</p><hr><p>更多内容，只针对《Java程序员进阶之路》星球用户开放，需要的小伙伴可以<a href="https://tobebetterjavaer.com/zhishixingqiu/" target="_blank" rel="noreferrer">戳链接🔗</a>加入我们的星球，一起学习，一起卷。。<strong>编程喵</strong>🐱是一个 Spring Boot+Vue 的前后端分离项目，融合了市面上绝大多数流行的技术要点。通过学习实战项目，你可以将所学的知识通过实践进行检验、你可以拓宽自己的技术边界，你可以掌握一个真正的实战项目是如何从 0 到 1 的。</p><hr><h2 id="源码地址" tabindex="-1">源码地址 <a class="header-anchor" href="#源码地址" aria-label="Permalink to &quot;源码地址&quot;">​</a></h2><blockquote><ul><li>编程喵 GitHub：<a href="https://github.com/itwanger/coding-more" target="_blank" rel="noreferrer">https://github.com/itwanger/coding-more</a></li><li>codingmore-mysql-druid：<a href="https://github.com/itwanger/codingmore-learning/tree/main/codingmore-mysql" target="_blank" rel="noreferrer">https://github.com/itwanger/codingmore-learning</a></li></ul></blockquote><hr>`,93),D=[S];function C(_,k,L,I,A,T){return a(),n("div",null,D)}const Q=s(v,[["render",C]]);export{M as __pageData,Q as default};
