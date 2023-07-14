import{_ as s,o as n,c as a,V as p}from"./chunks/framework.c6d8cbec.js";const g=JSON.parse('{"title":"Mybatis操作","description":"","frontmatter":{},"headers":[],"relativePath":"backend/db/Mybatis.md","filePath":"backend/db/Mybatis.md"}'),e={name:"backend/db/Mybatis.md"},l=p(`<h1 id="mybatis操作" tabindex="-1">Mybatis操作 <a class="header-anchor" href="#mybatis操作" aria-label="Permalink to &quot;Mybatis操作&quot;">​</a></h1><h2 id="_1-mybatis基础操作" tabindex="-1">1.Mybatis基础操作 <a class="header-anchor" href="#_1-mybatis基础操作" aria-label="Permalink to &quot;1.Mybatis基础操作&quot;">​</a></h2><p>需求说明：</p><ul><li>根据资料中提供的《tlias智能学习辅助系统》页面原型及需求，完成员工管理的需求开发。</li></ul><p><img src="http://www.yangeit.cn:21010/assets/image-20221210180155700-9647870e.png" alt="image-20221210180155700"></p><p>image-20221210180155700</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221210180343288-e69267ca.png" alt="image-20221210180343288"></p><p>image-20221210180343288</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221210180515206-aa9efb8e.png" alt="image-20221210180515206"></p><p>image-20221210180515206</p><p>功能列表</p><ol><li>查询 <ul><li>根据主键ID查询</li><li>条件查询</li></ul></li><li>新增</li><li>更新</li><li>删除 <ul><li>根据主键ID删除</li><li>根据主键ID批量删除</li></ul></li></ol><p>实施前的准备工作</p><ol><li>准备数据库表</li><li>创建一个新的springboot工程，选择引入对应的起步依赖（mybatis、mysql驱动、lombok）</li><li>application.properties中引入数据库连接信息</li><li>创建对应的实体类 Emp（实体类属性采用驼峰命名）</li><li>准备Mapper接口 EmpMapper</li></ol><p>点击查看准备数据库表</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">-- 部门管理</span></span>
<span class="line"><span style="color:#f6f6f4;">create table dept</span></span>
<span class="line"><span style="color:#f6f6f4;">(</span></span>
<span class="line"><span style="color:#f6f6f4;">    id          int unsigned primary key auto_increment comment &#39;主键ID&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    name        varchar(10) not null unique comment &#39;部门名称&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    create_time datetime    not null comment &#39;创建时间&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    update_time datetime    not null comment &#39;修改时间&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">) comment &#39;部门表&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;">-- 部门表测试数据</span></span>
<span class="line"><span style="color:#f6f6f4;">insert into dept (id, name, create_time, update_time)</span></span>
<span class="line"><span style="color:#f6f6f4;">values (1, &#39;学工部&#39;, now(), now()),</span></span>
<span class="line"><span style="color:#f6f6f4;">       (2, &#39;教研部&#39;, now(), now()),</span></span>
<span class="line"><span style="color:#f6f6f4;">       (3, &#39;咨询部&#39;, now(), now()),</span></span>
<span class="line"><span style="color:#f6f6f4;">       (4, &#39;就业部&#39;, now(), now()),</span></span>
<span class="line"><span style="color:#f6f6f4;">       (5, &#39;人事部&#39;, now(), now());</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">-- 员工管理</span></span>
<span class="line"><span style="color:#f6f6f4;">create table emp</span></span>
<span class="line"><span style="color:#f6f6f4;">(</span></span>
<span class="line"><span style="color:#f6f6f4;">    id          int unsigned primary key auto_increment comment &#39;ID&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    username    varchar(20)      not null unique comment &#39;用户名&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    password    varchar(32) default &#39;123456&#39; comment &#39;密码&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    name        varchar(10)      not null comment &#39;姓名&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    gender      tinyint unsigned not null comment &#39;性别, 说明: 1 男, 2 女&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    image       varchar(300) comment &#39;图像&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    job         tinyint unsigned comment &#39;职位, 说明: 1 班主任,2 讲师, 3 学工主管, 4 教研主管, 5 咨询师&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    entrydate   date comment &#39;入职时间&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    dept_id     int unsigned comment &#39;部门ID&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    create_time datetime         not null comment &#39;创建时间&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    update_time datetime         not null comment &#39;修改时间&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">) comment &#39;员工表&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;">-- 员工表测试数据</span></span>
<span class="line"><span style="color:#f6f6f4;">INSERT INTO emp (id, username, password, name, gender, image, job, entrydate, dept_id, create_time, update_time)</span></span>
<span class="line"><span style="color:#f6f6f4;">VALUES </span></span>
<span class="line"><span style="color:#f6f6f4;">(1, &#39;jinyong&#39;, &#39;123456&#39;, &#39;金庸&#39;, 1, &#39;1.jpg&#39;, 4, &#39;2000-01-01&#39;, 2, now(), now()),</span></span>
<span class="line"><span style="color:#f6f6f4;">(2, &#39;zhangwuji&#39;, &#39;123456&#39;, &#39;张无忌&#39;, 1, &#39;2.jpg&#39;, 2, &#39;2015-01-01&#39;, 2, now(), now()),</span></span>
<span class="line"><span style="color:#f6f6f4;">(3, &#39;yangxiao&#39;, &#39;123456&#39;, &#39;杨逍&#39;, 1, &#39;3.jpg&#39;, 2, &#39;2008-05-01&#39;, 2, now(), now()),</span></span>
<span class="line"><span style="color:#f6f6f4;">(4, &#39;weiyixiao&#39;, &#39;123456&#39;, &#39;韦一笑&#39;, 1, &#39;4.jpg&#39;, 2, &#39;2007-01-01&#39;, 2, now(), now()),</span></span>
<span class="line"><span style="color:#f6f6f4;">(5, &#39;changyuchun&#39;, &#39;123456&#39;, &#39;常遇春&#39;, 1, &#39;5.jpg&#39;, 2, &#39;2012-12-05&#39;, 2, now(), now()),</span></span>
<span class="line"><span style="color:#f6f6f4;">(6, &#39;xiaozhao&#39;, &#39;123456&#39;, &#39;小昭&#39;, 2, &#39;6.jpg&#39;, 3, &#39;2013-09-05&#39;, 1, now(), now()),</span></span>
<span class="line"><span style="color:#f6f6f4;">(7, &#39;jixiaofu&#39;, &#39;123456&#39;, &#39;纪晓芙&#39;, 2, &#39;7.jpg&#39;, 1, &#39;2005-08-01&#39;, 1, now(), now()),</span></span>
<span class="line"><span style="color:#f6f6f4;">(8, &#39;zhouzhiruo&#39;, &#39;123456&#39;, &#39;周芷若&#39;, 2, &#39;8.jpg&#39;, 1, &#39;2014-11-09&#39;, 1, now(), now()),</span></span>
<span class="line"><span style="color:#f6f6f4;">(9, &#39;dingminjun&#39;, &#39;123456&#39;, &#39;丁敏君&#39;, 2, &#39;9.jpg&#39;, 1, &#39;2011-03-11&#39;, 1, now(), now()),</span></span>
<span class="line"><span style="color:#f6f6f4;">(10, &#39;zhaomin&#39;, &#39;123456&#39;, &#39;赵敏&#39;, 2, &#39;10.jpg&#39;, 1, &#39;2013-09-05&#39;, 1, now(), now()),</span></span>
<span class="line"><span style="color:#f6f6f4;">(11, &#39;luzhangke&#39;, &#39;123456&#39;, &#39;鹿杖客&#39;, 1, &#39;11.jpg&#39;, 5, &#39;2007-02-01&#39;, 3, now(), now()),</span></span>
<span class="line"><span style="color:#f6f6f4;">(12, &#39;hebiweng&#39;, &#39;123456&#39;, &#39;鹤笔翁&#39;, 1, &#39;12.jpg&#39;, 5, &#39;2008-08-18&#39;, 3, now(), now()),</span></span>
<span class="line"><span style="color:#f6f6f4;">(13, &#39;fangdongbai&#39;, &#39;123456&#39;, &#39;方东白&#39;, 1, &#39;13.jpg&#39;, 5, &#39;2012-11-01&#39;, 3, now(), now()),</span></span>
<span class="line"><span style="color:#f6f6f4;">(14, &#39;zhangsanfeng&#39;, &#39;123456&#39;, &#39;张三丰&#39;, 1, &#39;14.jpg&#39;, 2, &#39;2002-08-01&#39;, 2, now(), now()),</span></span>
<span class="line"><span style="color:#f6f6f4;">(15, &#39;yulianzhou&#39;, &#39;123456&#39;, &#39;俞莲舟&#39;, 1, &#39;15.jpg&#39;, 2, &#39;2011-05-01&#39;, 2, now(), now()),</span></span>
<span class="line"><span style="color:#f6f6f4;">(16, &#39;songyuanqiao&#39;, &#39;123456&#39;, &#39;宋远桥&#39;, 1, &#39;16.jpg&#39;, 2, &#39;2010-01-01&#39;, 2, now(), now()),</span></span>
<span class="line"><span style="color:#f6f6f4;">(17, &#39;chenyouliang&#39;, &#39;123456&#39;, &#39;陈友谅&#39;, 1, &#39;17.jpg&#39;, NULL, &#39;2015-03-21&#39;, NULL, now(), now());</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">-- 部门管理</span></span>
<span class="line"><span style="color:#24292e;">create table dept</span></span>
<span class="line"><span style="color:#24292e;">(</span></span>
<span class="line"><span style="color:#24292e;">    id          int unsigned primary key auto_increment comment &#39;主键ID&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    name        varchar(10) not null unique comment &#39;部门名称&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    create_time datetime    not null comment &#39;创建时间&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    update_time datetime    not null comment &#39;修改时间&#39;</span></span>
<span class="line"><span style="color:#24292e;">) comment &#39;部门表&#39;;</span></span>
<span class="line"><span style="color:#24292e;">-- 部门表测试数据</span></span>
<span class="line"><span style="color:#24292e;">insert into dept (id, name, create_time, update_time)</span></span>
<span class="line"><span style="color:#24292e;">values (1, &#39;学工部&#39;, now(), now()),</span></span>
<span class="line"><span style="color:#24292e;">       (2, &#39;教研部&#39;, now(), now()),</span></span>
<span class="line"><span style="color:#24292e;">       (3, &#39;咨询部&#39;, now(), now()),</span></span>
<span class="line"><span style="color:#24292e;">       (4, &#39;就业部&#39;, now(), now()),</span></span>
<span class="line"><span style="color:#24292e;">       (5, &#39;人事部&#39;, now(), now());</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">-- 员工管理</span></span>
<span class="line"><span style="color:#24292e;">create table emp</span></span>
<span class="line"><span style="color:#24292e;">(</span></span>
<span class="line"><span style="color:#24292e;">    id          int unsigned primary key auto_increment comment &#39;ID&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    username    varchar(20)      not null unique comment &#39;用户名&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    password    varchar(32) default &#39;123456&#39; comment &#39;密码&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    name        varchar(10)      not null comment &#39;姓名&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    gender      tinyint unsigned not null comment &#39;性别, 说明: 1 男, 2 女&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    image       varchar(300) comment &#39;图像&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    job         tinyint unsigned comment &#39;职位, 说明: 1 班主任,2 讲师, 3 学工主管, 4 教研主管, 5 咨询师&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    entrydate   date comment &#39;入职时间&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    dept_id     int unsigned comment &#39;部门ID&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    create_time datetime         not null comment &#39;创建时间&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    update_time datetime         not null comment &#39;修改时间&#39;</span></span>
<span class="line"><span style="color:#24292e;">) comment &#39;员工表&#39;;</span></span>
<span class="line"><span style="color:#24292e;">-- 员工表测试数据</span></span>
<span class="line"><span style="color:#24292e;">INSERT INTO emp (id, username, password, name, gender, image, job, entrydate, dept_id, create_time, update_time)</span></span>
<span class="line"><span style="color:#24292e;">VALUES </span></span>
<span class="line"><span style="color:#24292e;">(1, &#39;jinyong&#39;, &#39;123456&#39;, &#39;金庸&#39;, 1, &#39;1.jpg&#39;, 4, &#39;2000-01-01&#39;, 2, now(), now()),</span></span>
<span class="line"><span style="color:#24292e;">(2, &#39;zhangwuji&#39;, &#39;123456&#39;, &#39;张无忌&#39;, 1, &#39;2.jpg&#39;, 2, &#39;2015-01-01&#39;, 2, now(), now()),</span></span>
<span class="line"><span style="color:#24292e;">(3, &#39;yangxiao&#39;, &#39;123456&#39;, &#39;杨逍&#39;, 1, &#39;3.jpg&#39;, 2, &#39;2008-05-01&#39;, 2, now(), now()),</span></span>
<span class="line"><span style="color:#24292e;">(4, &#39;weiyixiao&#39;, &#39;123456&#39;, &#39;韦一笑&#39;, 1, &#39;4.jpg&#39;, 2, &#39;2007-01-01&#39;, 2, now(), now()),</span></span>
<span class="line"><span style="color:#24292e;">(5, &#39;changyuchun&#39;, &#39;123456&#39;, &#39;常遇春&#39;, 1, &#39;5.jpg&#39;, 2, &#39;2012-12-05&#39;, 2, now(), now()),</span></span>
<span class="line"><span style="color:#24292e;">(6, &#39;xiaozhao&#39;, &#39;123456&#39;, &#39;小昭&#39;, 2, &#39;6.jpg&#39;, 3, &#39;2013-09-05&#39;, 1, now(), now()),</span></span>
<span class="line"><span style="color:#24292e;">(7, &#39;jixiaofu&#39;, &#39;123456&#39;, &#39;纪晓芙&#39;, 2, &#39;7.jpg&#39;, 1, &#39;2005-08-01&#39;, 1, now(), now()),</span></span>
<span class="line"><span style="color:#24292e;">(8, &#39;zhouzhiruo&#39;, &#39;123456&#39;, &#39;周芷若&#39;, 2, &#39;8.jpg&#39;, 1, &#39;2014-11-09&#39;, 1, now(), now()),</span></span>
<span class="line"><span style="color:#24292e;">(9, &#39;dingminjun&#39;, &#39;123456&#39;, &#39;丁敏君&#39;, 2, &#39;9.jpg&#39;, 1, &#39;2011-03-11&#39;, 1, now(), now()),</span></span>
<span class="line"><span style="color:#24292e;">(10, &#39;zhaomin&#39;, &#39;123456&#39;, &#39;赵敏&#39;, 2, &#39;10.jpg&#39;, 1, &#39;2013-09-05&#39;, 1, now(), now()),</span></span>
<span class="line"><span style="color:#24292e;">(11, &#39;luzhangke&#39;, &#39;123456&#39;, &#39;鹿杖客&#39;, 1, &#39;11.jpg&#39;, 5, &#39;2007-02-01&#39;, 3, now(), now()),</span></span>
<span class="line"><span style="color:#24292e;">(12, &#39;hebiweng&#39;, &#39;123456&#39;, &#39;鹤笔翁&#39;, 1, &#39;12.jpg&#39;, 5, &#39;2008-08-18&#39;, 3, now(), now()),</span></span>
<span class="line"><span style="color:#24292e;">(13, &#39;fangdongbai&#39;, &#39;123456&#39;, &#39;方东白&#39;, 1, &#39;13.jpg&#39;, 5, &#39;2012-11-01&#39;, 3, now(), now()),</span></span>
<span class="line"><span style="color:#24292e;">(14, &#39;zhangsanfeng&#39;, &#39;123456&#39;, &#39;张三丰&#39;, 1, &#39;14.jpg&#39;, 2, &#39;2002-08-01&#39;, 2, now(), now()),</span></span>
<span class="line"><span style="color:#24292e;">(15, &#39;yulianzhou&#39;, &#39;123456&#39;, &#39;俞莲舟&#39;, 1, &#39;15.jpg&#39;, 2, &#39;2011-05-01&#39;, 2, now(), now()),</span></span>
<span class="line"><span style="color:#24292e;">(16, &#39;songyuanqiao&#39;, &#39;123456&#39;, &#39;宋远桥&#39;, 1, &#39;16.jpg&#39;, 2, &#39;2010-01-01&#39;, 2, now(), now()),</span></span>
<span class="line"><span style="color:#24292e;">(17, &#39;chenyouliang&#39;, &#39;123456&#39;, &#39;陈友谅&#39;, 1, &#39;17.jpg&#39;, NULL, &#39;2015-03-21&#39;, NULL, now(), now());</span></span></code></pre></div><p>点击查看新的springbootDemo工程</p><p><strong>创建一个新的springboot工程，选择引入对应的起步依赖（mybatis、mysql驱动、lombok）</strong></p><p><img src="http://www.yangeit.cn:21010/assets/image-20221210182008131-a4f67a95.png" alt="image-20221210182008131"></p><p>image-20221210182008131</p><p><strong>application.properties中引入数据库连接信息</strong></p><blockquote><p>提示：可以把之前项目中已有的配置信息复制过来即可</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">#驱动类名称</span></span>
<span class="line"><span style="color:#f6f6f4;">spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span style="color:#f6f6f4;">#数据库连接的url</span></span>
<span class="line"><span style="color:#f6f6f4;">spring.datasource.url=jdbc:mysql://localhost:3306/mybatis</span></span>
<span class="line"><span style="color:#f6f6f4;">#连接数据库的用户名</span></span>
<span class="line"><span style="color:#f6f6f4;">spring.datasource.username=root</span></span>
<span class="line"><span style="color:#f6f6f4;">#连接数据库的密码</span></span>
<span class="line"><span style="color:#f6f6f4;">spring.datasource.password=1234</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#驱动类名称</span></span>
<span class="line"><span style="color:#24292e;">spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span style="color:#24292e;">#数据库连接的url</span></span>
<span class="line"><span style="color:#24292e;">spring.datasource.url=jdbc:mysql://localhost:3306/mybatis</span></span>
<span class="line"><span style="color:#24292e;">#连接数据库的用户名</span></span>
<span class="line"><span style="color:#24292e;">spring.datasource.username=root</span></span>
<span class="line"><span style="color:#24292e;">#连接数据库的密码</span></span>
<span class="line"><span style="color:#24292e;">spring.datasource.password=1234</span></span></code></pre></div><p><strong>创建对应的实体类Emp（实体类属性采用驼峰命名）</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Data</span></span>
<span class="line"><span style="color:#f6f6f4;">@NoArgsConstructor</span></span>
<span class="line"><span style="color:#f6f6f4;">@AllArgsConstructor</span></span>
<span class="line"><span style="color:#f6f6f4;">public class Emp {</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Integer id;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private String username;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private String password;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private String name;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Short gender;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private String image;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Short job;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private LocalDate entrydate;     //LocalDate类型对应数据表中的date类型</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Integer deptId;</span></span>
<span class="line"><span style="color:#f6f6f4;">    private LocalDateTime createTime;//LocalDateTime类型对应数据表中的datetime类型</span></span>
<span class="line"><span style="color:#f6f6f4;">    private LocalDateTime updateTime;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Data</span></span>
<span class="line"><span style="color:#24292e;">@NoArgsConstructor</span></span>
<span class="line"><span style="color:#24292e;">@AllArgsConstructor</span></span>
<span class="line"><span style="color:#24292e;">public class Emp {</span></span>
<span class="line"><span style="color:#24292e;">    private Integer id;</span></span>
<span class="line"><span style="color:#24292e;">    private String username;</span></span>
<span class="line"><span style="color:#24292e;">    private String password;</span></span>
<span class="line"><span style="color:#24292e;">    private String name;</span></span>
<span class="line"><span style="color:#24292e;">    private Short gender;</span></span>
<span class="line"><span style="color:#24292e;">    private String image;</span></span>
<span class="line"><span style="color:#24292e;">    private Short job;</span></span>
<span class="line"><span style="color:#24292e;">    private LocalDate entrydate;     //LocalDate类型对应数据表中的date类型</span></span>
<span class="line"><span style="color:#24292e;">    private Integer deptId;</span></span>
<span class="line"><span style="color:#24292e;">    private LocalDateTime createTime;//LocalDateTime类型对应数据表中的datetime类型</span></span>
<span class="line"><span style="color:#24292e;">    private LocalDateTime updateTime;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>准备Mapper接口：EmpMapper</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/*@Mapper注解：表示当前接口为mybatis中的Mapper接口</span></span>
<span class="line"><span style="color:#f6f6f4;">  程序运行时会自动创建接口的实现类对象(代理对象)，并交给Spring的IOC容器管理</span></span>
<span class="line"><span style="color:#f6f6f4;">*/</span></span>
<span class="line"><span style="color:#f6f6f4;">@Mapper</span></span>
<span class="line"><span style="color:#f6f6f4;">public interface EmpMapper {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/*@Mapper注解：表示当前接口为mybatis中的Mapper接口</span></span>
<span class="line"><span style="color:#24292e;">  程序运行时会自动创建接口的实现类对象(代理对象)，并交给Spring的IOC容器管理</span></span>
<span class="line"><span style="color:#24292e;">*/</span></span>
<span class="line"><span style="color:#24292e;">@Mapper</span></span>
<span class="line"><span style="color:#24292e;">public interface EmpMapper {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>完成以上操作后，项目工程结构目录如下：</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221210182500817-586eb534.png" alt="image-20221210182500817"></p><p>image-20221210182500817</p><p>点击查看开启mybatis日志操作</p><p>在Mybatis当中我们可以借助日志，查看到sql语句的执行、执行传递的参数以及执行结果。具体操作如下：</p><ol><li><p>打开application.properties文件</p></li><li><p>开启mybatis的日志，并指定输出到控制台</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">#指定mybatis输出日志的位置, 输出控制台</span></span>
<span class="line"><span style="color:#f6f6f4;">mybatis.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#指定mybatis输出日志的位置, 输出控制台</span></span>
<span class="line"><span style="color:#24292e;">mybatis.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl</span></span></code></pre></div><p>开启日志之后，我们再次运行单元测试，可以看到在控制台中，输出了以下的SQL语句信息：</p><p><img src="http://www.yangeit.cn:21010/assets/image-20220901164225644-8b4ca328.png" alt="image-20220901164225644"></p><p>image-20220901164225644</p><blockquote><p>但是我们发现输出的SQL语句：delete from emp where id = ?，我们输入的参数16并没有在后面拼接，id的值是使用?进行占位。那这种SQL语句我们称为预编译SQL。</p></blockquote><p>mybatis日志的作用</p><p>在调用方法的时候，很清晰的查看具体执行的sql情况，以及参数情况，方便排错</p><h3 id="_1️⃣1-1-删除" tabindex="-1">1️⃣1.1 删除 <a class="header-anchor" href="#_1️⃣1-1-删除" aria-label="Permalink to &quot;1️⃣1.1 删除&quot;">​</a></h3><p>根据主键删除数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">-- 删除id=17的数据</span></span>
<span class="line"><span style="color:#f6f6f4;">delete from emp where id = 17;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">-- 删除id=17的数据</span></span>
<span class="line"><span style="color:#24292e;">delete from emp where id = 17;</span></span></code></pre></div><p>页面原型：</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221210183336095-65cbd9fb.png" alt="image-20221210183336095"></p><p>image-20221210183336095</p><blockquote><p>当我们点击后面的&quot;删除&quot;按钮时，前端页面会给服务端传递一个参数，也就是该行数据的ID。 我们接收到ID后，根据ID删除数据即可。</p><p>👉如：localhost:8080/emps?id=1 或者使用路径参数：localhost:8080/emps/1 👈</p></blockquote><p>接口方法测试</p><ul><li>接口方法</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Mapper</span></span>
<span class="line"><span style="color:#f6f6f4;">public interface EmpMapper {</span></span>
<span class="line"><span style="color:#f6f6f4;">    </span></span>
<span class="line"><span style="color:#f6f6f4;">    //@Delete(&quot;delete from emp where id = 17&quot;)</span></span>
<span class="line"><span style="color:#f6f6f4;">    //public void delete();</span></span>
<span class="line"><span style="color:#f6f6f4;">    //以上delete操作的SQL语句中的id值写成固定的17，就表示只能删除id=17的用户数据</span></span>
<span class="line"><span style="color:#f6f6f4;">    //SQL语句中的id值不能写成固定数值，需要变为动态的数值</span></span>
<span class="line"><span style="color:#f6f6f4;">    //解决方案：在delete方法中添加一个参数(用户id)，将方法中的参数，传给SQL语句</span></span>
<span class="line"><span style="color:#f6f6f4;">    </span></span>
<span class="line"><span style="color:#f6f6f4;">    /**</span></span>
<span class="line"><span style="color:#f6f6f4;">     * 根据id删除数据</span></span>
<span class="line"><span style="color:#f6f6f4;">     * @param id    用户id</span></span>
<span class="line"><span style="color:#f6f6f4;">     */</span></span>
<span class="line"><span style="color:#f6f6f4;">    @Delete(&quot;delete from emp where id = #{id}&quot;)//使用#{key}方式获取方法中的参数值</span></span>
<span class="line"><span style="color:#f6f6f4;">    public void delete(Integer id);</span></span>
<span class="line"><span style="color:#f6f6f4;">    </span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Mapper</span></span>
<span class="line"><span style="color:#24292e;">public interface EmpMapper {</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">    //@Delete(&quot;delete from emp where id = 17&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    //public void delete();</span></span>
<span class="line"><span style="color:#24292e;">    //以上delete操作的SQL语句中的id值写成固定的17，就表示只能删除id=17的用户数据</span></span>
<span class="line"><span style="color:#24292e;">    //SQL语句中的id值不能写成固定数值，需要变为动态的数值</span></span>
<span class="line"><span style="color:#24292e;">    //解决方案：在delete方法中添加一个参数(用户id)，将方法中的参数，传给SQL语句</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 根据id删除数据</span></span>
<span class="line"><span style="color:#24292e;">     * @param id    用户id</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    @Delete(&quot;delete from emp where id = #{id}&quot;)//使用#{key}方式获取方法中的参数值</span></span>
<span class="line"><span style="color:#24292e;">    public void delete(Integer id);</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><blockquote><p>@Delete注解：用于编写delete操作的SQL语句</p></blockquote><blockquote><p>如果mapper接口方法形参只有一个普通类型的参数，<code>#{…}</code> 里面的属性名可以随便写，如：<code>#{id}</code>、<code>#{value}</code>。但是建议保持名字一致。</p></blockquote><ul><li>测试 <ul><li>在单元测试类中通过@Autowired注解注入EmpMapper类型对象</li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@SpringBootTest</span></span>
<span class="line"><span style="color:#f6f6f4;">class SpringbootMybatisCrudApplicationTests {</span></span>
<span class="line"><span style="color:#f6f6f4;">    @Autowired //从Spring的IOC容器中，获取类型是EmpMapper的对象并注入</span></span>
<span class="line"><span style="color:#f6f6f4;">    private EmpMapper empMapper;</span></span>
<span class="line"><span style="color:#f6f6f4;">    @Test</span></span>
<span class="line"><span style="color:#f6f6f4;">    public void testDel(){</span></span>
<span class="line"><span style="color:#f6f6f4;">        //调用删除方法</span></span>
<span class="line"><span style="color:#f6f6f4;">        empMapper.delete(16);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@SpringBootTest</span></span>
<span class="line"><span style="color:#24292e;">class SpringbootMybatisCrudApplicationTests {</span></span>
<span class="line"><span style="color:#24292e;">    @Autowired //从Spring的IOC容器中，获取类型是EmpMapper的对象并注入</span></span>
<span class="line"><span style="color:#24292e;">    private EmpMapper empMapper;</span></span>
<span class="line"><span style="color:#24292e;">    @Test</span></span>
<span class="line"><span style="color:#24292e;">    public void testDel(){</span></span>
<span class="line"><span style="color:#24292e;">        //调用删除方法</span></span>
<span class="line"><span style="color:#24292e;">        empMapper.delete(16);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>点击查看预编译SQL</p><h4 id="_1-3-3-1-介绍" tabindex="-1">1.3.3.1 介绍 <a class="header-anchor" href="#_1-3-3-1-介绍" aria-label="Permalink to &quot;1.3.3.1 介绍&quot;">​</a></h4><p>预编译SQL有两个优势：</p><ol><li>性能更高</li><li>更安全(防止SQL注入)</li></ol><p><img src="http://www.yangeit.cn:21010/assets/image-20221210202222206-10fd7587.png" alt="image-20221210202222206"></p><p>image-20221210202222206</p><blockquote><p>性能更高：预编译SQL，编译一次之后会将编译后的SQL语句缓存起来，后面再次执行这条语句时，不会再次编译。（只是输入的参数不同）</p><p>更安全(防止SQL注入)：将敏感字进行转义，保障SQL的安全性。</p></blockquote><p>点击查看SQL注入</p><h4 id="_1-3-3-2-sql注入" tabindex="-1">1.3.3.2 SQL注入 <a class="header-anchor" href="#_1-3-3-2-sql注入" aria-label="Permalink to &quot;1.3.3.2 SQL注入&quot;">​</a></h4><p>SQL注入：是通过操作输入的数据来修改事先定义好的SQL语句，以达到执行代码对服务器进行攻击的方法。</p><blockquote><p>由于没有对用户输入进行充分检查，而SQL又是拼接而成，在用户输入参数时，在参数中添加一些SQL关键字，达到改变SQL运行结果的目的，也可以完成恶意攻击。</p></blockquote><p><strong>测试1：使用资料中提供的程序，来验证SQL注入问题</strong></p><p><img src="http://www.yangeit.cn:21010/assets/image-20221210205419634-599563bd.png" alt="image-20221210205419634"></p><p>image-20221210205419634</p><p>第1步：进入到DOS</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221211124744203-8bfb3fd7.png" alt="image-20221211124744203"></p><p>image-20221211124744203</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221211124840720-aaf37319.png" alt="image-20221211124840720"></p><p>image-20221211124840720</p><p>第2步：执行以下命令，启动程序</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">#启动存在SQL注入的程序</span></span>
<span class="line"><span style="color:#f6f6f4;">java -jar sql_Injection_demo-0.0.1-SNAPSHOT.jar</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#启动存在SQL注入的程序</span></span>
<span class="line"><span style="color:#24292e;">java -jar sql_Injection_demo-0.0.1-SNAPSHOT.jar</span></span></code></pre></div><p><img src="http://www.yangeit.cn:21010/assets/image-20221210211605231-35b2fe09.png" alt="image-20221210211605231"></p><p>image-20221210211605231</p><p>第3步：打开浏览器输入<code>http://localhost:9090/login.html</code></p><p><img src="http://www.yangeit.cn:21010/assets/image-20221210212406527-78414f7e.png" alt="image-20221210212406527"></p><p>image-20221210212406527</p><p>发现竟然能够登录成功：</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221210212511915-4e666ba9.png" alt="image-20221210212511915"></p><p>image-20221210212511915</p><p>以上操作为什么能够登录成功呢？</p><ul><li>由于没有对用户输入内容进行充分检查，而SQL又是字符串拼接方式而成，在用户输入参数时，在参数中添加一些SQL关键字，达到改变SQL运行结果的目的，从而完成恶意攻击。</li></ul><p><img src="http://www.yangeit.cn:21010/assets/image-20221210213311518-ca0546cc.png" alt="image-20221210213311518"></p><p>image-20221210213311518</p><blockquote><p><img src="http://www.yangeit.cn:21010/assets/image-20221210214431228-3648ad95.png" alt="image-20221210214431228"></p><p>image-20221210214431228</p><p>用户在页面提交数据的时候人为的添加一些特殊字符，使得sql语句的结构发生了变化，最终可以在没有用户名或者密码的情况下进行登录。</p></blockquote><p><strong>测试2：使用资料中提供的程序，来验证SQL注入问题</strong></p><p>第1步：进入到DOS</p><p>第2步：执行以下命令，启动程序：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">#启动解决了SQL注入的程序</span></span>
<span class="line"><span style="color:#f6f6f4;">java -jar sql_prepared_demo-0.0.1-SNAPSHOT.jar</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#启动解决了SQL注入的程序</span></span>
<span class="line"><span style="color:#24292e;">java -jar sql_prepared_demo-0.0.1-SNAPSHOT.jar</span></span></code></pre></div><p>第3步：打开浏览器输入<code>http://localhost:9090/login.html</code></p><p><img src="http://www.yangeit.cn:21010/assets/image-20221210212406527-78414f7e.png" alt="image-20221210212406527"></p><p>image-20221210212406527</p><p>发现无法登录：</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221211125751981-f4475340.png" alt="image-20221211125751981"></p><p>image-20221211125751981</p><p>以上操作SQL语句的执行：</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221211130011973-c56ab8ea.png" alt="image-20221211130011973"></p><p>image-20221211130011973</p><blockquote><p>把整个<code>&#39; or &#39;1&#39;=&#39;1</code>作为一个完整的参数，赋值给第2个问号（<code>&#39; or &#39;1&#39;=&#39;1</code>进行了转义，只当做字符串使用）</p></blockquote><p>参数占位符</p><h4 id="参数占位符" tabindex="-1">参数占位符 <a class="header-anchor" href="#参数占位符" aria-label="Permalink to &quot;参数占位符&quot;">​</a></h4><p>在Mybatis中提供的参数占位符有两种：<code>\${...}</code> 、<code>#{...}</code></p><ul><li><p><code>#{...}</code> 安全，常用</p><ul><li>执行SQL时，会将<code>#{…}</code>替换为?，生成预编译SQL，会自动设置参数值</li><li>使用时机：参数传递，都使用<code>#{…}</code></li></ul></li><li><p><code>\${...}</code> 有危险，慎用</p><ul><li>拼接SQL。直接将参数拼接在简单实用SQL语句中，存在SQL注入问题</li><li>使用时机：如果对表名、列表进行动态设置时使用</li></ul></li></ul><blockquote><p>注意事项：在项目开发中，建议使用<code>#{...}</code>，生成预编译SQL，防止SQL注入安全。</p></blockquote><h3 id="_2️⃣1-2-新增" tabindex="-1">2️⃣1.2 新增 <a class="header-anchor" href="#_2️⃣1-2-新增" aria-label="Permalink to &quot;2️⃣1.2 新增&quot;">​</a></h3><p>功能：新增员工信息</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221211134239610-6595ee09.png" alt="image-20221211134239610"></p><p>image-20221211134239610</p><p>基本新增主键返回</p><h4 id="基本新增" tabindex="-1">基本新增 <a class="header-anchor" href="#基本新增" aria-label="Permalink to &quot;基本新增&quot;">​</a></h4><p>员工表结构：</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221211134746319-2a0e0b48.png" alt="image-20221211134746319"></p><p>image-20221211134746319</p><p>SQL语句：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">insert into emp(username, name, gender, image, job, entrydate, dept_id, create_time, update_time) values (&#39;songyuanqiao&#39;,&#39;宋远桥&#39;,1,&#39;1.jpg&#39;,2,&#39;2012-10-09&#39;,2,&#39;2022-10-01 10:00:00&#39;,&#39;2022-10-01 10:00:00&#39;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">insert into emp(username, name, gender, image, job, entrydate, dept_id, create_time, update_time) values (&#39;songyuanqiao&#39;,&#39;宋远桥&#39;,1,&#39;1.jpg&#39;,2,&#39;2012-10-09&#39;,2,&#39;2022-10-01 10:00:00&#39;,&#39;2022-10-01 10:00:00&#39;);</span></span></code></pre></div><p>接口方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Mapper</span></span>
<span class="line"><span style="color:#f6f6f4;">public interface EmpMapper {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    @Insert(&quot;insert into emp(username, name, gender, image, job, entrydate, dept_id, create_time, update_time) values (#{username}, #{name}, #{gender}, #{image}, #{job}, #{entrydate}, #{deptId}, #{createTime}, #{updateTime})&quot;)</span></span>
<span class="line"><span style="color:#f6f6f4;">    public void insert(Emp emp);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Mapper</span></span>
<span class="line"><span style="color:#24292e;">public interface EmpMapper {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Insert(&quot;insert into emp(username, name, gender, image, job, entrydate, dept_id, create_time, update_time) values (#{username}, #{name}, #{gender}, #{image}, #{job}, #{entrydate}, #{deptId}, #{createTime}, #{updateTime})&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    public void insert(Emp emp);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><blockquote><p>说明：#{...} 里面写的名称是对象的属性名</p></blockquote><p>测试类：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@SpringBootTest</span></span>
<span class="line"><span style="color:#f6f6f4;">class SpringbootMybatisCrudApplicationTests {</span></span>
<span class="line"><span style="color:#f6f6f4;">    @Autowired</span></span>
<span class="line"><span style="color:#f6f6f4;">    private EmpMapper empMapper;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    @Test</span></span>
<span class="line"><span style="color:#f6f6f4;">    public void testInsert(){</span></span>
<span class="line"><span style="color:#f6f6f4;">        //创建员工对象</span></span>
<span class="line"><span style="color:#f6f6f4;">        Emp emp = new Emp();</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setUsername(&quot;tom&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setName(&quot;汤姆&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setImage(&quot;1.jpg&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setGender((short)1);</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setJob((short)1);</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setEntrydate(LocalDate.of(2000,1,1));</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setCreateTime(LocalDateTime.now());</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setUpdateTime(LocalDateTime.now());</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setDeptId(1);</span></span>
<span class="line"><span style="color:#f6f6f4;">        //调用添加方法</span></span>
<span class="line"><span style="color:#f6f6f4;">        empMapper.insert(emp);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@SpringBootTest</span></span>
<span class="line"><span style="color:#24292e;">class SpringbootMybatisCrudApplicationTests {</span></span>
<span class="line"><span style="color:#24292e;">    @Autowired</span></span>
<span class="line"><span style="color:#24292e;">    private EmpMapper empMapper;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Test</span></span>
<span class="line"><span style="color:#24292e;">    public void testInsert(){</span></span>
<span class="line"><span style="color:#24292e;">        //创建员工对象</span></span>
<span class="line"><span style="color:#24292e;">        Emp emp = new Emp();</span></span>
<span class="line"><span style="color:#24292e;">        emp.setUsername(&quot;tom&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        emp.setName(&quot;汤姆&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        emp.setImage(&quot;1.jpg&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        emp.setGender((short)1);</span></span>
<span class="line"><span style="color:#24292e;">        emp.setJob((short)1);</span></span>
<span class="line"><span style="color:#24292e;">        emp.setEntrydate(LocalDate.of(2000,1,1));</span></span>
<span class="line"><span style="color:#24292e;">        emp.setCreateTime(LocalDateTime.now());</span></span>
<span class="line"><span style="color:#24292e;">        emp.setUpdateTime(LocalDateTime.now());</span></span>
<span class="line"><span style="color:#24292e;">        emp.setDeptId(1);</span></span>
<span class="line"><span style="color:#24292e;">        //调用添加方法</span></span>
<span class="line"><span style="color:#24292e;">        empMapper.insert(emp);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><blockquote><p>日志输出：</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221211140222240-8624916b.png" alt="image-20221211140222240"></p><p>image-20221211140222240</p></blockquote><h4 id="主键返回" tabindex="-1">主键返回 <a class="header-anchor" href="#主键返回" aria-label="Permalink to &quot;主键返回&quot;">​</a></h4><p>概念：在数据添加成功后，需要获取插入数据库数据的主键。</p><blockquote><p>如：添加套餐数据时，还需要维护套餐菜品关系表数据。</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221211150353385-bc74846a.png" alt="image-20221211150353385"></p><p>image-20221211150353385</p><p>业务场景：在前面讲解到的苍穹外卖菜品与套餐模块的表结构，菜品与套餐是多对多的关系，一个套餐对应多个菜品。既然是多对多的关系，是不是有一张套餐菜品中间表来维护它们之间的关系。</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221212093655389-3ec64dd5.png" alt="image-20221212093655389"></p><p>image-20221212093655389</p><p>在添加套餐的时候，我们需要在界面当中来录入套餐的基本信息，还需要来录入套餐与菜品的关联信息。这些信息录入完毕之后，我们一点保存，就需要将套餐的信息以及套餐与菜品的关联信息都需要保存到数据库当中。其实具体的过程包括两步，首先第一步先需要将套餐的基本信息保存了，接下来第二步再来保存套餐与菜品的关联信息。套餐与菜品的关联信息就是往中间表当中来插入数据，来维护它们之间的关系。而中间表当中有两个外键字段，一个是菜品的ID，就是当前菜品的ID，还有一个就是套餐的ID，而这个套餐的 ID 指的就是此次我所添加的套餐的ID，所以我们在第一步保存完套餐的基本信息之后，就需要将套餐的主键值返回来供第二步进行使用。这个时候就需要用到主键返回功能。</p></blockquote><p>那要如何实现在插入数据之后返回所插入行的主键值呢？</p><ul><li>默认情况下，执行插入操作时，是不会主键值返回的。如果我们想要拿到主键值，需要在Mapper接口中的方法上添加一个Options注解，并在注解中指定属性<code>useGeneratedKeys=true和keyProperty=&quot;实体类属性名&quot;</code></li></ul><p>主键返回代码实现：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Mapper</span></span>
<span class="line"><span style="color:#f6f6f4;">public interface EmpMapper {</span></span>
<span class="line"><span style="color:#f6f6f4;">    </span></span>
<span class="line"><span style="color:#f6f6f4;">//会自动将生成的主键值，赋值给emp对象的id属性</span></span>
<span class="line"><span style="color:#f6f6f4;">@Options(useGeneratedKeys = true,keyProperty = &quot;id&quot;)</span></span>
<span class="line"><span style="color:#f6f6f4;">@Insert(&quot;insert into emp(username, name, gender, image, job, entrydate, dept_id, create_time, update_time) values (#{username}, #{name}, #{gender}, #{image}, #{job}, #{entrydate}, #{deptId}, #{createTime}, #{updateTime})&quot;)</span></span>
<span class="line"><span style="color:#f6f6f4;">public void insert(Emp emp);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Mapper</span></span>
<span class="line"><span style="color:#24292e;">public interface EmpMapper {</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">//会自动将生成的主键值，赋值给emp对象的id属性</span></span>
<span class="line"><span style="color:#24292e;">@Options(useGeneratedKeys = true,keyProperty = &quot;id&quot;)</span></span>
<span class="line"><span style="color:#24292e;">@Insert(&quot;insert into emp(username, name, gender, image, job, entrydate, dept_id, create_time, update_time) values (#{username}, #{name}, #{gender}, #{image}, #{job}, #{entrydate}, #{deptId}, #{createTime}, #{updateTime})&quot;)</span></span>
<span class="line"><span style="color:#24292e;">public void insert(Emp emp);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>测试：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@SpringBootTest</span></span>
<span class="line"><span style="color:#f6f6f4;">class SpringbootMybatisCrudApplicationTests {</span></span>
<span class="line"><span style="color:#f6f6f4;">    @Autowired</span></span>
<span class="line"><span style="color:#f6f6f4;">    private EmpMapper empMapper;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    @Test</span></span>
<span class="line"><span style="color:#f6f6f4;">    public void testInsert(){</span></span>
<span class="line"><span style="color:#f6f6f4;">        //创建员工对象</span></span>
<span class="line"><span style="color:#f6f6f4;">        Emp emp = new Emp();</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setUsername(&quot;jack&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setName(&quot;杰克&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setImage(&quot;1.jpg&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setGender((short)1);</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setJob((short)1);</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setEntrydate(LocalDate.of(2000,1,1));</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setCreateTime(LocalDateTime.now());</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setUpdateTime(LocalDateTime.now());</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setDeptId(1);</span></span>
<span class="line"><span style="color:#f6f6f4;">        //调用添加方法</span></span>
<span class="line"><span style="color:#f6f6f4;">        empMapper.insert(emp);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(emp.getDeptId());</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@SpringBootTest</span></span>
<span class="line"><span style="color:#24292e;">class SpringbootMybatisCrudApplicationTests {</span></span>
<span class="line"><span style="color:#24292e;">    @Autowired</span></span>
<span class="line"><span style="color:#24292e;">    private EmpMapper empMapper;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Test</span></span>
<span class="line"><span style="color:#24292e;">    public void testInsert(){</span></span>
<span class="line"><span style="color:#24292e;">        //创建员工对象</span></span>
<span class="line"><span style="color:#24292e;">        Emp emp = new Emp();</span></span>
<span class="line"><span style="color:#24292e;">        emp.setUsername(&quot;jack&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        emp.setName(&quot;杰克&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        emp.setImage(&quot;1.jpg&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        emp.setGender((short)1);</span></span>
<span class="line"><span style="color:#24292e;">        emp.setJob((short)1);</span></span>
<span class="line"><span style="color:#24292e;">        emp.setEntrydate(LocalDate.of(2000,1,1));</span></span>
<span class="line"><span style="color:#24292e;">        emp.setCreateTime(LocalDateTime.now());</span></span>
<span class="line"><span style="color:#24292e;">        emp.setUpdateTime(LocalDateTime.now());</span></span>
<span class="line"><span style="color:#24292e;">        emp.setDeptId(1);</span></span>
<span class="line"><span style="color:#24292e;">        //调用添加方法</span></span>
<span class="line"><span style="color:#24292e;">        empMapper.insert(emp);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(emp.getDeptId());</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="_3️⃣-1-3-更新" tabindex="-1">3️⃣ 1.3 更新 <a class="header-anchor" href="#_3️⃣-1-3-更新" aria-label="Permalink to &quot;3️⃣ 1.3 更新&quot;">​</a></h3><p>功能：修改员工信息</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221212095605863-34736fb2.png" alt="image-20221212095605863"></p><p>image-20221212095605863</p><blockquote><p>点击&quot;编辑&quot;按钮后，会查询所在行记录的员工信息，并把员工信息回显在修改员工的窗体上(下个知识点学习)</p><p>在修改员工的窗体上，可以修改的员工数据：用户名、员工姓名、性别、图像、职位、入职日期、归属部门</p><p>思考：在修改员工数据时，要以什么做为条件呢？</p><p>答案：员工id</p></blockquote><p>SQL语句：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">update emp set </span></span>
<span class="line"><span style="color:#f6f6f4;">    username = &#39;linghushaoxia&#39;, </span></span>
<span class="line"><span style="color:#f6f6f4;">    name = &#39;令狐少侠&#39;, </span></span>
<span class="line"><span style="color:#f6f6f4;">    gender = 1 , </span></span>
<span class="line"><span style="color:#f6f6f4;">    image = &#39;1.jpg&#39; , </span></span>
<span class="line"><span style="color:#f6f6f4;">    job = 2, </span></span>
<span class="line"><span style="color:#f6f6f4;">    entrydate = &#39;2012-01-01&#39;, </span></span>
<span class="line"><span style="color:#f6f6f4;">    dept_id = 2, </span></span>
<span class="line"><span style="color:#f6f6f4;">    update_time = &#39;2022-10-01 12:12:12&#39; </span></span>
<span class="line"><span style="color:#f6f6f4;">  where id = 18;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">update emp set </span></span>
<span class="line"><span style="color:#24292e;">    username = &#39;linghushaoxia&#39;, </span></span>
<span class="line"><span style="color:#24292e;">    name = &#39;令狐少侠&#39;, </span></span>
<span class="line"><span style="color:#24292e;">    gender = 1 , </span></span>
<span class="line"><span style="color:#24292e;">    image = &#39;1.jpg&#39; , </span></span>
<span class="line"><span style="color:#24292e;">    job = 2, </span></span>
<span class="line"><span style="color:#24292e;">    entrydate = &#39;2012-01-01&#39;, </span></span>
<span class="line"><span style="color:#24292e;">    dept_id = 2, </span></span>
<span class="line"><span style="color:#24292e;">    update_time = &#39;2022-10-01 12:12:12&#39; </span></span>
<span class="line"><span style="color:#24292e;">  where id = 18;</span></span></code></pre></div><p>点击查看代码</p><p>接口方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Mapper</span></span>
<span class="line"><span style="color:#f6f6f4;">public interface EmpMapper {</span></span>
<span class="line"><span style="color:#f6f6f4;">/**</span></span>
<span class="line"><span style="color:#f6f6f4;">    * 根据id修改员工信息</span></span>
<span class="line"><span style="color:#f6f6f4;">    * @param emp</span></span>
<span class="line"><span style="color:#f6f6f4;">    */</span></span>
<span class="line"><span style="color:#f6f6f4;">@Update(&quot;update emp set username=#{username}, name=#{name}, gender=#{gender}, image=#{image}, job=#{job}, entrydate=#{entrydate}, dept_id=#{deptId}, update_time=#{updateTime} where id=#{id}&quot;)</span></span>
<span class="line"><span style="color:#f6f6f4;">public void update(Emp emp);</span></span>
<span class="line"><span style="color:#f6f6f4;">    </span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Mapper</span></span>
<span class="line"><span style="color:#24292e;">public interface EmpMapper {</span></span>
<span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;">    * 根据id修改员工信息</span></span>
<span class="line"><span style="color:#24292e;">    * @param emp</span></span>
<span class="line"><span style="color:#24292e;">    */</span></span>
<span class="line"><span style="color:#24292e;">@Update(&quot;update emp set username=#{username}, name=#{name}, gender=#{gender}, image=#{image}, job=#{job}, entrydate=#{entrydate}, dept_id=#{deptId}, update_time=#{updateTime} where id=#{id}&quot;)</span></span>
<span class="line"><span style="color:#24292e;">public void update(Emp emp);</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>测试类：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@SpringBootTest</span></span>
<span class="line"><span style="color:#f6f6f4;">class SpringbootMybatisCrudApplicationTests {</span></span>
<span class="line"><span style="color:#f6f6f4;">    @Autowired</span></span>
<span class="line"><span style="color:#f6f6f4;">    private EmpMapper empMapper;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    @Test</span></span>
<span class="line"><span style="color:#f6f6f4;">    public void testUpdate(){</span></span>
<span class="line"><span style="color:#f6f6f4;">        //要修改的员工信息</span></span>
<span class="line"><span style="color:#f6f6f4;">        Emp emp = new Emp();</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setId(23);</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setUsername(&quot;songdaxia&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setPassword(null);</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setName(&quot;老宋&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setImage(&quot;2.jpg&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setGender((short)1);</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setJob((short)2);</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setEntrydate(LocalDate.of(2012,1,1));</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setCreateTime(null);</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setUpdateTime(LocalDateTime.now());</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setDeptId(2);</span></span>
<span class="line"><span style="color:#f6f6f4;">        //调用方法，修改员工数据</span></span>
<span class="line"><span style="color:#f6f6f4;">        empMapper.update(emp);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@SpringBootTest</span></span>
<span class="line"><span style="color:#24292e;">class SpringbootMybatisCrudApplicationTests {</span></span>
<span class="line"><span style="color:#24292e;">    @Autowired</span></span>
<span class="line"><span style="color:#24292e;">    private EmpMapper empMapper;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Test</span></span>
<span class="line"><span style="color:#24292e;">    public void testUpdate(){</span></span>
<span class="line"><span style="color:#24292e;">        //要修改的员工信息</span></span>
<span class="line"><span style="color:#24292e;">        Emp emp = new Emp();</span></span>
<span class="line"><span style="color:#24292e;">        emp.setId(23);</span></span>
<span class="line"><span style="color:#24292e;">        emp.setUsername(&quot;songdaxia&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        emp.setPassword(null);</span></span>
<span class="line"><span style="color:#24292e;">        emp.setName(&quot;老宋&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        emp.setImage(&quot;2.jpg&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        emp.setGender((short)1);</span></span>
<span class="line"><span style="color:#24292e;">        emp.setJob((short)2);</span></span>
<span class="line"><span style="color:#24292e;">        emp.setEntrydate(LocalDate.of(2012,1,1));</span></span>
<span class="line"><span style="color:#24292e;">        emp.setCreateTime(null);</span></span>
<span class="line"><span style="color:#24292e;">        emp.setUpdateTime(LocalDateTime.now());</span></span>
<span class="line"><span style="color:#24292e;">        emp.setDeptId(2);</span></span>
<span class="line"><span style="color:#24292e;">        //调用方法，修改员工数据</span></span>
<span class="line"><span style="color:#24292e;">        empMapper.update(emp);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="_4️⃣1-4-查询" tabindex="-1">4️⃣1.4 查询 <a class="header-anchor" href="#_4️⃣1-4-查询" aria-label="Permalink to &quot;4️⃣1.4 查询&quot;">​</a></h3><p>查询需求</p><ol><li>根据ID查询 <ul><li>结果封装</li></ul></li><li>条件查询 <ul><li>参数名说明</li></ul></li></ol><p>根据ID查询数据封装条件查询参数名说明</p><p><strong>根据ID查询</strong></p><p>在<a href="http://www.yangeit.cn:21010/shareres/yuanxing/tlias/%E5%91%98%E5%B7%A5%E7%AE%A1%E7%90%86.html" target="_blank" rel="noreferrer">员工管理open in new window</a>点击进入原型图的页面中，当我们进行更新数据时，会点击 “编辑” 按钮，然后此时会发送一个请求到服务端，会根据Id查询该员工信息，并将员工数据回显在页面上。</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221212101331292-2b1ade03.png" alt="image-20221212101331292"></p><p>image-20221212101331292</p><p>SQL语句：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">select id, username, password, name, </span></span>
<span class="line"><span style="color:#f6f6f4;">gender, image, job, entrydate, dept_id, </span></span>
<span class="line"><span style="color:#f6f6f4;">create_time, update_time from emp;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">select id, username, password, name, </span></span>
<span class="line"><span style="color:#24292e;">gender, image, job, entrydate, dept_id, </span></span>
<span class="line"><span style="color:#24292e;">create_time, update_time from emp;</span></span></code></pre></div><p><strong>接口方法：</strong></p><blockquote><p>写在mapper包下</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Mapper</span></span>
<span class="line"><span style="color:#f6f6f4;">public interface EmpMapper {</span></span>
<span class="line"><span style="color:#f6f6f4;">    @Select(&quot;select id, username, password, name, gender, image, job, entrydate, dept_id, create_time, update_time from emp where id=#{id}&quot;)</span></span>
<span class="line"><span style="color:#f6f6f4;">    public Emp getById(Integer id);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Mapper</span></span>
<span class="line"><span style="color:#24292e;">public interface EmpMapper {</span></span>
<span class="line"><span style="color:#24292e;">    @Select(&quot;select id, username, password, name, gender, image, job, entrydate, dept_id, create_time, update_time from emp where id=#{id}&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    public Emp getById(Integer id);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>测试类：</p><blockquote><p>写在test包下</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@SpringBootTest</span></span>
<span class="line"><span style="color:#f6f6f4;">class SpringbootMybatisCrudApplicationTests {</span></span>
<span class="line"><span style="color:#f6f6f4;">    @Autowired</span></span>
<span class="line"><span style="color:#f6f6f4;">    private EmpMapper empMapper;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    @Test</span></span>
<span class="line"><span style="color:#f6f6f4;">    public void testGetById(){</span></span>
<span class="line"><span style="color:#f6f6f4;">        Emp emp = empMapper.getById(1);</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(emp);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@SpringBootTest</span></span>
<span class="line"><span style="color:#24292e;">class SpringbootMybatisCrudApplicationTests {</span></span>
<span class="line"><span style="color:#24292e;">    @Autowired</span></span>
<span class="line"><span style="color:#24292e;">    private EmpMapper empMapper;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Test</span></span>
<span class="line"><span style="color:#24292e;">    public void testGetById(){</span></span>
<span class="line"><span style="color:#24292e;">        Emp emp = empMapper.getById(1);</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(emp);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><blockquote><p>执行结果：</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221212103004961-32b325d4.png" alt="image-20221212103004961"></p><p>image-20221212103004961</p><p>而在测试的过程中，我们会发现有几个字段(deptId、createTime、updateTime)是没有数据值的</p></blockquote><p><strong>数据封装</strong></p><p>我们看到查询返回的结果中大部分字段是有值的，但是deptId，createTime，updateTime 这几个字段是没有值的，而数据库中是有对应的字段值的，这是为什么呢？</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221212103124490-6605ae37.png" alt="image-20221212103124490"></p><p>image-20221212103124490</p><p><strong>原因如下：</strong></p><ul><li>实体类属性名和数据库表查询返回的<strong>字段名一致，mybatis会自动封装</strong>。</li><li>如果实体类属性名和数据库表查询返回的<strong>字段名不一致，不能自动封装</strong>。</li></ul><p><strong>解决方案：</strong></p><ol><li>起别名适用字段较少</li><li>结果映射应用灵活</li><li>开启驼峰命名企业常用</li></ol><p><strong>起别名</strong>：在SQL语句中，对不一样的列名起别名，别名和实体类属性名一样</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Select(&quot;select id, username, password, name, gender, image, job, entrydate, &quot; +</span></span>
<span class="line"><span style="color:#f6f6f4;">        &quot;dept_id AS deptId, create_time AS createTime, update_time AS updateTime &quot; +</span></span>
<span class="line"><span style="color:#f6f6f4;">        &quot;from emp &quot; +</span></span>
<span class="line"><span style="color:#f6f6f4;">        &quot;where id=#{id}&quot;)</span></span>
<span class="line"><span style="color:#f6f6f4;">public Emp getById(Integer id);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Select(&quot;select id, username, password, name, gender, image, job, entrydate, &quot; +</span></span>
<span class="line"><span style="color:#24292e;">        &quot;dept_id AS deptId, create_time AS createTime, update_time AS updateTime &quot; +</span></span>
<span class="line"><span style="color:#24292e;">        &quot;from emp &quot; +</span></span>
<span class="line"><span style="color:#24292e;">        &quot;where id=#{id}&quot;)</span></span>
<span class="line"><span style="color:#24292e;">public Emp getById(Integer id);</span></span></code></pre></div><blockquote><p>再次执行测试类：</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221212111027396-3f54d9f5.png" alt="image-20221212111027396"></p><p>image-20221212111027396</p></blockquote><p><strong>手动结果映射</strong>：通过 @Results及@Result 进行手动结果映射</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Results({@Result(column = &quot;dept_id&quot;, property = &quot;deptId&quot;),</span></span>
<span class="line"><span style="color:#f6f6f4;">          @Result(column = &quot;create_time&quot;, property = &quot;createTime&quot;),</span></span>
<span class="line"><span style="color:#f6f6f4;">          @Result(column = &quot;update_time&quot;, property = &quot;updateTime&quot;)})</span></span>
<span class="line"><span style="color:#f6f6f4;">@Select(&quot;select id, username, password, name, gender, image, job, entrydate, dept_id, create_time, update_time from emp where id=#{id}&quot;)</span></span>
<span class="line"><span style="color:#f6f6f4;">public Emp getById(Integer id);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Results({@Result(column = &quot;dept_id&quot;, property = &quot;deptId&quot;),</span></span>
<span class="line"><span style="color:#24292e;">          @Result(column = &quot;create_time&quot;, property = &quot;createTime&quot;),</span></span>
<span class="line"><span style="color:#24292e;">          @Result(column = &quot;update_time&quot;, property = &quot;updateTime&quot;)})</span></span>
<span class="line"><span style="color:#24292e;">@Select(&quot;select id, username, password, name, gender, image, job, entrydate, dept_id, create_time, update_time from emp where id=#{id}&quot;)</span></span>
<span class="line"><span style="color:#24292e;">public Emp getById(Integer id);</span></span></code></pre></div><blockquote><p>@Results源代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Documented</span></span>
<span class="line"><span style="color:#f6f6f4;">@Retention(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span style="color:#f6f6f4;">@Target({ElementType.METHOD})</span></span>
<span class="line"><span style="color:#f6f6f4;">public @interface Results {</span></span>
<span class="line"><span style="color:#f6f6f4;"> String id() default &quot;&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> Result[] value() default {};  //Result类型的数组</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Documented</span></span>
<span class="line"><span style="color:#24292e;">@Retention(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span style="color:#24292e;">@Target({ElementType.METHOD})</span></span>
<span class="line"><span style="color:#24292e;">public @interface Results {</span></span>
<span class="line"><span style="color:#24292e;"> String id() default &quot;&quot;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> Result[] value() default {};  //Result类型的数组</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>@Result源代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Documented</span></span>
<span class="line"><span style="color:#f6f6f4;">@Retention(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span style="color:#f6f6f4;">@Target({ElementType.METHOD})</span></span>
<span class="line"><span style="color:#f6f6f4;">@Repeatable(Results.class)</span></span>
<span class="line"><span style="color:#f6f6f4;">public @interface Result {</span></span>
<span class="line"><span style="color:#f6f6f4;"> boolean id() default false;//表示当前列是否为主键（true:是主键）</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> String column() default &quot;&quot;;//指定表中字段名</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> String property() default &quot;&quot;;//指定类中属性名</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> Class&lt;?&gt; javaType() default void.class;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> JdbcType jdbcType() default JdbcType.UNDEFINED;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> Class&lt;? extends TypeHandler&gt; typeHandler() default UnknownTypeHandler.class;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> One one() default @One;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"> Many many() default @Many;</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Documented</span></span>
<span class="line"><span style="color:#24292e;">@Retention(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span style="color:#24292e;">@Target({ElementType.METHOD})</span></span>
<span class="line"><span style="color:#24292e;">@Repeatable(Results.class)</span></span>
<span class="line"><span style="color:#24292e;">public @interface Result {</span></span>
<span class="line"><span style="color:#24292e;"> boolean id() default false;//表示当前列是否为主键（true:是主键）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> String column() default &quot;&quot;;//指定表中字段名</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> String property() default &quot;&quot;;//指定类中属性名</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> Class&lt;?&gt; javaType() default void.class;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> JdbcType jdbcType() default JdbcType.UNDEFINED;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> Class&lt;? extends TypeHandler&gt; typeHandler() default UnknownTypeHandler.class;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> One one() default @One;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> Many many() default @Many;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></blockquote><p><strong>开启驼峰命名</strong>推荐：如果字段名与属性名符合驼峰命名规则，mybatis会自动通过驼峰命名规则映射</p><blockquote><p>驼峰命名规则： abc_xyz =&gt; abcXyz</p><ul><li>表中字段名：abc_xyz</li><li>类中属性名：abcXyz</li></ul></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;"># 在application.properties中添加：</span></span>
<span class="line"><span style="color:#f6f6f4;">mybatis.configuration.map-underscore-to-camel-case=true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 在application.properties中添加：</span></span>
<span class="line"><span style="color:#24292e;">mybatis.configuration.map-underscore-to-camel-case=true</span></span></code></pre></div><blockquote><p>要使用驼峰命名前提是 实体类的属性 与 数据库表中的字段名严格遵守驼峰命名。</p></blockquote><p><strong>条件查询</strong></p><p>在员工管理的列表页面中，我们需要根据条件查询员工信息，查询条件包括：<strong>姓名、性别、入职时间</strong>。</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221212113422924-e7fa7843.png" alt="image-20221212113422924"></p><p>image-20221212113422924</p><p>通过页面原型以及需求描述我们要实现的查询：</p><ul><li>姓名：要求支持<strong>模糊匹配</strong></li><li>性别：要求<strong>精确匹配</strong></li><li>入职时间：要求进行<strong>范围查询</strong></li><li>根据最后修改时间进行<strong>降序排序</strong></li></ul><p>SQL语句：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">select id, username, password, name, gender, image, job, entrydate, dept_id, create_time, update_time </span></span>
<span class="line"><span style="color:#f6f6f4;">from emp </span></span>
<span class="line"><span style="color:#f6f6f4;">where name like &#39;%张%&#39; </span></span>
<span class="line"><span style="color:#f6f6f4;">      and gender = 1 </span></span>
<span class="line"><span style="color:#f6f6f4;">      and entrydate between &#39;2010-01-01&#39; and &#39;2020-01-01 &#39; </span></span>
<span class="line"><span style="color:#f6f6f4;">order by update_time desc;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">select id, username, password, name, gender, image, job, entrydate, dept_id, create_time, update_time </span></span>
<span class="line"><span style="color:#24292e;">from emp </span></span>
<span class="line"><span style="color:#24292e;">where name like &#39;%张%&#39; </span></span>
<span class="line"><span style="color:#24292e;">      and gender = 1 </span></span>
<span class="line"><span style="color:#24292e;">      and entrydate between &#39;2010-01-01&#39; and &#39;2020-01-01 &#39; </span></span>
<span class="line"><span style="color:#24292e;">order by update_time desc;</span></span></code></pre></div><p>接口方法：</p><ul><li>**方式一（解决SQL注入风险）**推荐使用 <ul><li>使用MySQL提供的字符串拼接函数：<code>concat(&#39;%&#39; , &#39;关键字&#39; , &#39;%&#39;)</code></li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Mapper</span></span>
<span class="line"><span style="color:#f6f6f4;">public interface EmpMapper {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    @Select(&quot;select * from emp &quot; +</span></span>
<span class="line"><span style="color:#f6f6f4;">            &quot;where name like concat(&#39;%&#39;,#{name},&#39;%&#39;) &quot; +</span></span>
<span class="line"><span style="color:#f6f6f4;">            &quot;and gender = #{gender} &quot; +</span></span>
<span class="line"><span style="color:#f6f6f4;">            &quot;and entrydate between #{begin} and #{end} &quot; +</span></span>
<span class="line"><span style="color:#f6f6f4;">            &quot;order by update_time desc&quot;)</span></span>
<span class="line"><span style="color:#f6f6f4;">    public List&lt;Emp&gt; list(String name, Short gender, LocalDate begin, LocalDate end);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Mapper</span></span>
<span class="line"><span style="color:#24292e;">public interface EmpMapper {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Select(&quot;select * from emp &quot; +</span></span>
<span class="line"><span style="color:#24292e;">            &quot;where name like concat(&#39;%&#39;,#{name},&#39;%&#39;) &quot; +</span></span>
<span class="line"><span style="color:#24292e;">            &quot;and gender = #{gender} &quot; +</span></span>
<span class="line"><span style="color:#24292e;">            &quot;and entrydate between #{begin} and #{end} &quot; +</span></span>
<span class="line"><span style="color:#24292e;">            &quot;order by update_time desc&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    public List&lt;Emp&gt; list(String name, Short gender, LocalDate begin, LocalDate end);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><blockquote><p>执行结果：生成的SQL都是预编译的SQL语句（性能高、安全）</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221212120006242-6ff72a41.png" alt="image-20221212120006242"></p><p>image-20221212120006242</p></blockquote><ul><li><strong>方式二</strong>有风险，慎用</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Mapper</span></span>
<span class="line"><span style="color:#f6f6f4;">public interface EmpMapper {</span></span>
<span class="line"><span style="color:#f6f6f4;">    @Select(&quot;select * from emp &quot; +</span></span>
<span class="line"><span style="color:#f6f6f4;">            &quot;where name like &#39;%\${name}%&#39; &quot; +</span></span>
<span class="line"><span style="color:#f6f6f4;">            &quot;and gender = #{gender} &quot; +</span></span>
<span class="line"><span style="color:#f6f6f4;">            &quot;and entrydate between #{begin} and #{end} &quot; +</span></span>
<span class="line"><span style="color:#f6f6f4;">            &quot;order by update_time desc&quot;)</span></span>
<span class="line"><span style="color:#f6f6f4;">    public List&lt;Emp&gt; list(String name, Short gender, LocalDate begin, LocalDate end);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Mapper</span></span>
<span class="line"><span style="color:#24292e;">public interface EmpMapper {</span></span>
<span class="line"><span style="color:#24292e;">    @Select(&quot;select * from emp &quot; +</span></span>
<span class="line"><span style="color:#24292e;">            &quot;where name like &#39;%\${name}%&#39; &quot; +</span></span>
<span class="line"><span style="color:#24292e;">            &quot;and gender = #{gender} &quot; +</span></span>
<span class="line"><span style="color:#24292e;">            &quot;and entrydate between #{begin} and #{end} &quot; +</span></span>
<span class="line"><span style="color:#24292e;">            &quot;order by update_time desc&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    public List&lt;Emp&gt; list(String name, Short gender, LocalDate begin, LocalDate end);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><blockquote><p><img src="http://www.yangeit.cn:21010/assets/image-20221212115149151-3e078eec.png" alt="image-20221212115149151"></p><p>image-20221212115149151</p><p>以上方式注意事项：</p><ol><li><p>方法中的形参名和SQL语句中的参数占位符名保持一致</p></li><li><p>模糊查询使用<code>\${...}</code>进行字符串拼接，这种方式呢，由于是字符串拼接，并不是预编译的形式，所以效率不高、且存在sql注入风险。</p></li></ol></blockquote><h3 id="_1-5-4-参数名说明" tabindex="-1">1.5.4 参数名说明 <a class="header-anchor" href="#_1-5-4-参数名说明" aria-label="Permalink to &quot;1.5.4 参数名说明&quot;">​</a></h3><p>在上面我们所编写的条件查询功能中，我们需要保证接口中方法的形参名和SQL语句中的参数占位符名相同。</p><blockquote><p>当方法中的形参名和SQL语句中的占位符参数名不相同时，就会出现以下问题：</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221212150611796-ab4efcef.png" alt="image-20221212150611796"></p><p>image-20221212150611796</p></blockquote><p>参数名在不同的SpringBoot版本中，处理方案还不同：</p><ul><li>在springBoot的2.x版本（保证参数名一致）</li></ul><p><img src="http://www.yangeit.cn:21010/assets/image-20221212151156273-86c788b9.png" alt="image-20221212151156273"></p><p>image-20221212151156273</p><blockquote><p>springBoot的父工程对compiler编译插件进行了默认的参数parameters配置，使得在编译时，会在生成的字节码文件中保留原方法形参的名称，所以<code>#{…}</code>里面可以直接通过形参名获取对应的值</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221212151411154-0e8ccfde.png" alt="image-20221212151411154"></p><p>image-20221212151411154</p></blockquote><ul><li>在springBoot的1.x版本/单独使用mybatis（使用@Param注解来指定SQL语句中的参数名）</li></ul><p><img src="http://www.yangeit.cn:21010/assets/image-20221212151628715-1846d89e.png" alt="image-20221212151628715"></p><p>image-20221212151628715</p><blockquote><p>在编译时，生成的字节码文件当中，不会保留Mapper接口中方法的形参名称，而是使用var1、var2、...这样的形参名字，此时要获取参数值时，就要通过@Param注解来指定SQL语句中的参数名</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221212151736274-1ef78074.png" alt="image-20221212151736274"></p><p>image-20221212151736274</p></blockquote><p>课堂作业</p><p>🎻 1.练习上述增删改查案例，并且使用驼峰命名</p><p><strong>思考</strong>：实体类中的字段是否和表中的字段要一模一样？</p><ol start="2"><li>Mybatis的XML配置文件 ❤️ 🍐</li></ol><hr><p><strong>Mybatis的开发有两种方式：</strong></p><ol><li>注解简单场景，复杂sql不适用</li><li>XML 复杂sql适用，灵活实用</li></ol><blockquote><p>使用Mybatis的注解方式，主要是来完成一些简单的增删改查功能。如果需要实现复杂的SQL功能，建议使用XML来配置映射语句，也就是将SQL语句写在XML配置文件中。</p></blockquote><h3 id="_2-1-xml配置文件规范" tabindex="-1">2.1 XML配置文件规范 <a class="header-anchor" href="#_2-1-xml配置文件规范" aria-label="Permalink to &quot;2.1 XML配置文件规范&quot;">​</a></h3><p>在Mybatis中使用XML映射文件方式开发，需要符合一定的规范：</p><ol><li><strong>XML映射文件的名称与Mapper接口名称一致</strong>，并且将XML映射文件和Mapper接口放置在相同包下（同包同名）</li><li>XML映射文件的namespace属性为Mapper接口<strong>全限定名一致</strong></li><li>XML映射文件中sql语句的id与Mapper接口中的<strong>方法名一致</strong>，并保持返回类型一致。</li></ol><p><img src="http://www.yangeit.cn:21010/assets/image-20221212153529732-71f795e1.png" alt="image-20221212153529732"></p><p>image-20221212153529732</p><blockquote><p><code>&lt;select&gt;</code>标签：就是用于编写select查询语句的。</p><ul><li>resultType属性，指的是查询返回的单条记录所封装的类型。</li></ul></blockquote><p><strong>XML配置文件实现</strong></p><p>第一步第二步第三步第四步</p><p>第1步：创建XML映射文件</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221212154908306-b8e6bea6.png" alt="image-20221212154908306"></p><p>image-20221212154908306</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221212155304635-e1e6caaa.png" alt="image-20221212155304635"></p><p>image-20221212155304635</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221212155544404-60a9b16f.png" alt="image-20221212155544404"></p><p>image-20221212155544404</p><p>第2步：编写XML映射文件</p><blockquote><p>xml映射文件中的dtd约束，直接从mybatis官网复制即可</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;!DOCTYPE mapper</span></span>
<span class="line"><span style="color:#f6f6f4;">  PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &quot;https://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;mapper namespace=&quot;&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;"> </span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/mapper&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!DOCTYPE mapper</span></span>
<span class="line"><span style="color:#24292e;">  PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span></span>
<span class="line"><span style="color:#24292e;">  &quot;https://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;mapper namespace=&quot;&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">&lt;/mapper&gt;</span></span></code></pre></div><p>配置：XML映射文件的namespace属性为Mapper接口全限定名</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221212160316644-f94a5b20.png" alt="image-20221212160316644"></p><p>image-20221212160316644</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;!DOCTYPE mapper</span></span>
<span class="line"><span style="color:#f6f6f4;">        PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &quot;https://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;mapper namespace=&quot;com.itheima.mapper.EmpMapper&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/mapper&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!DOCTYPE mapper</span></span>
<span class="line"><span style="color:#24292e;">        PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span></span>
<span class="line"><span style="color:#24292e;">        &quot;https://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;mapper namespace=&quot;com.itheima.mapper.EmpMapper&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;/mapper&gt;</span></span></code></pre></div><p>配置：XML映射文件中sql语句的id与Mapper接口中的方法名一致，并保持返回类型一致</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221212163528787-8ce4b1d6.png" alt="image-20221212163528787"></p><p>image-20221212163528787</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;!DOCTYPE mapper</span></span>
<span class="line"><span style="color:#f6f6f4;">        PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &quot;https://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;mapper namespace=&quot;com.itheima.mapper.EmpMapper&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;!--查询操作--&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;select id=&quot;list&quot; resultType=&quot;com.itheima.pojo.Emp&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        select * from emp</span></span>
<span class="line"><span style="color:#f6f6f4;">        where name like concat(&#39;%&#39;,#{name},&#39;%&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">              and gender = #{gender}</span></span>
<span class="line"><span style="color:#f6f6f4;">              and entrydate between #{begin} and #{end}</span></span>
<span class="line"><span style="color:#f6f6f4;">        order by update_time desc</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;/select&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/mapper&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!DOCTYPE mapper</span></span>
<span class="line"><span style="color:#24292e;">        PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span></span>
<span class="line"><span style="color:#24292e;">        &quot;https://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;mapper namespace=&quot;com.itheima.mapper.EmpMapper&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &lt;!--查询操作--&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;select id=&quot;list&quot; resultType=&quot;com.itheima.pojo.Emp&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        select * from emp</span></span>
<span class="line"><span style="color:#24292e;">        where name like concat(&#39;%&#39;,#{name},&#39;%&#39;)</span></span>
<span class="line"><span style="color:#24292e;">              and gender = #{gender}</span></span>
<span class="line"><span style="color:#24292e;">              and entrydate between #{begin} and #{end}</span></span>
<span class="line"><span style="color:#24292e;">        order by update_time desc</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/select&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/mapper&gt;</span></span></code></pre></div><blockquote><p>运行测试类，执行结果：</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221212163719534-295bb7cd.png" alt="image-20221212163719534"></p><p>image-20221212163719534</p></blockquote><p>MybatisX插件自动检查规则</p><p><strong>MybatisX是一款基于IDEA的快速开发Mybatis的插件，为效率而生。</strong></p><p>MybatisX的安装：</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221213120923252-aed3bc81.png" alt="image-20221213120923252"></p><p>image-20221213120923252</p><p>可以通过MybatisX快速定位：</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221213121521406-cae07457.png" alt="image-20221213121521406"></p><p>image-20221213121521406</p><blockquote><p>MybatisX的使用在后续学习中会继续分享</p></blockquote><p>学习了Mybatis中XML配置文件的开发方式了，大家可能会存在一个疑问：到底是使用注解方式开发还是使用XML方式开发？</p><blockquote><p>官方说明：<a href="https://mybatis.net.cn/getting-started.html" target="_blank" rel="noreferrer">https://mybatis.net.cn/getting-started.htmlopen in new window</a></p><p><img src="http://www.yangeit.cn:21010/assets/image-20220901173948645-dde74202.png" alt="image-20220901173948645"></p><p>image-20220901173948645</p></blockquote><p><strong>结论：</strong> 使用Mybatis的注解，主要是来完成一些简单的增删改查功能。如果需要实现复杂的SQL功能，建议使用XML来配置映射语句。</p><p>课堂作业</p><p>🎻 1.练习MybatisXML配置文件中书写sql语句</p><p>步鄹提示：严格执行xml配置文件规范（建议安装MybatisX插件后练习，借助小鸟插件助力编程)</p><ol start="3"><li>Mybatis动态SQL 🍐 ✏️ ❤️</li></ol><hr><p>动态SQL</p><p>在页面原型中，列表上方的条件是动态的，是可以不传递的，也可以只传递其中的1个或者2个或者全部。</p><p><img src="http://www.yangeit.cn:21010/assets/image-20220901172933012-7ca99989.png" alt=""></p><p><img src="http://www.yangeit.cn:21010/assets/image-20220901173203491-ab57d043.png" alt="image-20220901173203491"></p><p>image-20220901173203491</p><p>而在我们刚才编写的SQL语句中，我们会看到，我们将三个条件直接写死了。 如果页面只传递了参数姓名name 字段，其他两个字段 性别 和 入职时间没有传递，那么这两个参数的值就是null。</p><p>此时，执行的SQL语句为：</p><p><img src="http://www.yangeit.cn:21010/assets/image-20220901173431554-7a630339.png" alt="image-20220901173431554"></p><p>image-20220901173431554</p><p>这个查询结果是不正确的。正确的做法应该是：传递了参数，再组装这个查询条件；如果没有传递参数，就不应该组装这个查询条件。</p><p>比如：如果姓名输入了&quot;张&quot;, 对应的SQL为:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">select *  from emp where name like &#39;%张%&#39; order by update_time desc;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">select *  from emp where name like &#39;%张%&#39; order by update_time desc;</span></span></code></pre></div><p>如果姓名输入了&quot;张&quot;,，性别选择了&quot;男&quot;，则对应的SQL为:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">select *  from emp where name like &#39;%张%&#39; and gender = 1 order by update_time desc;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">select *  from emp where name like &#39;%张%&#39; and gender = 1 order by update_time desc;</span></span></code></pre></div><p>SQL语句会随着用户的输入或外部条件的变化而变化，我们称为：动态SQL。 🎯</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221213122623278-8f6e84c3.png" alt="image-20221213122623278"></p><p>image-20221213122623278</p><p>在Mybatis中提供了很多实现动态SQL的标签，我们学习Mybatis中的动态SQL就是掌握这些动态SQL标签。</p><h3 id="_1️⃣-3-1-动态sql-条件查询" tabindex="-1">1️⃣ 3.1 动态SQL-条件查询 <a class="header-anchor" href="#_1️⃣-3-1-动态sql-条件查询" aria-label="Permalink to &quot;1️⃣ 3.1 动态SQL-条件查询&quot;">​</a></h3><p>条件判断标签if</p><p><code>&lt;if&gt;</code>：用于判断条件是否成立。使用test属性进行条件判断，如果条件为true，则拼接SQL。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;if test=&quot;条件表达式&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">   要拼接的sql语句</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/if&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;if test=&quot;条件表达式&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">   要拼接的sql语句</span></span>
<span class="line"><span style="color:#24292e;">&lt;/if&gt;</span></span></code></pre></div><p><strong>示例：把SQL语句改造为动态SQL方式</strong></p><ul><li>原有的SQL语句</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;select id=&quot;list&quot; resultType=&quot;com.itheima.pojo.Emp&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        select * from emp</span></span>
<span class="line"><span style="color:#f6f6f4;">        where name like concat(&#39;%&#39;,#{name},&#39;%&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">              and gender = #{gender}</span></span>
<span class="line"><span style="color:#f6f6f4;">              and entrydate between #{begin} and #{end}</span></span>
<span class="line"><span style="color:#f6f6f4;">        order by update_time desc</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/select&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;select id=&quot;list&quot; resultType=&quot;com.itheima.pojo.Emp&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        select * from emp</span></span>
<span class="line"><span style="color:#24292e;">        where name like concat(&#39;%&#39;,#{name},&#39;%&#39;)</span></span>
<span class="line"><span style="color:#24292e;">              and gender = #{gender}</span></span>
<span class="line"><span style="color:#24292e;">              and entrydate between #{begin} and #{end}</span></span>
<span class="line"><span style="color:#24292e;">        order by update_time desc</span></span>
<span class="line"><span style="color:#24292e;">&lt;/select&gt;</span></span></code></pre></div><ul><li><strong>动态SQL语句</strong> 🎯</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;select id=&quot;list&quot; resultType=&quot;com.itheima.pojo.Emp&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        select * from emp</span></span>
<span class="line"><span style="color:#f6f6f4;">        where</span></span>
<span class="line"><span style="color:#f6f6f4;">    </span></span>
<span class="line"><span style="color:#f6f6f4;">             &lt;if test=&quot;name != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                 name like concat(&#39;%&#39;,#{name},&#39;%&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">             &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">             &lt;if test=&quot;gender != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                 and gender = #{gender}</span></span>
<span class="line"><span style="color:#f6f6f4;">             &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">             &lt;if test=&quot;begin != null and end != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                 and entrydate between #{begin} and #{end}</span></span>
<span class="line"><span style="color:#f6f6f4;">             &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    </span></span>
<span class="line"><span style="color:#f6f6f4;">        order by update_time desc</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/select&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;select id=&quot;list&quot; resultType=&quot;com.itheima.pojo.Emp&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        select * from emp</span></span>
<span class="line"><span style="color:#24292e;">        where</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">             &lt;if test=&quot;name != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                 name like concat(&#39;%&#39;,#{name},&#39;%&#39;)</span></span>
<span class="line"><span style="color:#24292e;">             &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">             &lt;if test=&quot;gender != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                 and gender = #{gender}</span></span>
<span class="line"><span style="color:#24292e;">             &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">             &lt;if test=&quot;begin != null and end != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                 and entrydate between #{begin} and #{end}</span></span>
<span class="line"><span style="color:#24292e;">             &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">        order by update_time desc</span></span>
<span class="line"><span style="color:#24292e;">&lt;/select&gt;</span></span></code></pre></div><p>测试方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Test</span></span>
<span class="line"><span style="color:#f6f6f4;">public void testList(){</span></span>
<span class="line"><span style="color:#f6f6f4;">    //性别数据为null、开始时间和结束时间也为null</span></span>
<span class="line"><span style="color:#f6f6f4;">    List&lt;Emp&gt; list = empMapper.list(&quot;张&quot;, null, null, null);</span></span>
<span class="line"><span style="color:#f6f6f4;">    for(Emp emp : list){</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(emp);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Test</span></span>
<span class="line"><span style="color:#24292e;">public void testList(){</span></span>
<span class="line"><span style="color:#24292e;">    //性别数据为null、开始时间和结束时间也为null</span></span>
<span class="line"><span style="color:#24292e;">    List&lt;Emp&gt; list = empMapper.list(&quot;张&quot;, null, null, null);</span></span>
<span class="line"><span style="color:#24292e;">    for(Emp emp : list){</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(emp);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><blockquote><p>执行的SQL语句：</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221213140353285-3c1ae645.png" alt="image-20221213140353285"></p><p>image-20221213140353285</p></blockquote><p><strong>下面呢，我们修改传入参数，再次进行测试，观察执行情况：</strong> 👇 👇 👇</p><p>点击查看案例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Test</span></span>
<span class="line"><span style="color:#f6f6f4;">public void testList(){</span></span>
<span class="line"><span style="color:#f6f6f4;">    //姓名为null</span></span>
<span class="line"><span style="color:#f6f6f4;">    List&lt;Emp&gt; list = empMapper.list(null, (short)1, null, null);</span></span>
<span class="line"><span style="color:#f6f6f4;">    for(Emp emp : list){</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(emp);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Test</span></span>
<span class="line"><span style="color:#24292e;">public void testList(){</span></span>
<span class="line"><span style="color:#24292e;">    //姓名为null</span></span>
<span class="line"><span style="color:#24292e;">    List&lt;Emp&gt; list = empMapper.list(null, (short)1, null, null);</span></span>
<span class="line"><span style="color:#24292e;">    for(Emp emp : list){</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(emp);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>执行结果：</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221213141139015-07383142.png" alt="image-20221213141139015"></p><p>image-20221213141139015</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221213141253355-188ee3b5.png" alt="image-20221213141253355"></p><p>image-20221213141253355</p><p>再次修改测试方法中的代码，再次进行测试：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Test</span></span>
<span class="line"><span style="color:#f6f6f4;">public void testList(){</span></span>
<span class="line"><span style="color:#f6f6f4;">    //传递的数据全部为null</span></span>
<span class="line"><span style="color:#f6f6f4;">    List&lt;Emp&gt; list = empMapper.list(null, null, null, null);</span></span>
<span class="line"><span style="color:#f6f6f4;">    for(Emp emp : list){</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(emp);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Test</span></span>
<span class="line"><span style="color:#24292e;">public void testList(){</span></span>
<span class="line"><span style="color:#24292e;">    //传递的数据全部为null</span></span>
<span class="line"><span style="color:#24292e;">    List&lt;Emp&gt; list = empMapper.list(null, null, null, null);</span></span>
<span class="line"><span style="color:#24292e;">    for(Emp emp : list){</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(emp);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>执行的SQL语句：</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221213143854434-703a55ae.png" alt="image-20221213143854434"></p><p>image-20221213143854434</p><p>以上问题的解决方案：使用<code>&lt;where&gt;</code>标签代替SQL语句中的where关键字</p><ul><li><code>&lt;where&gt;</code>只会在子元素有内容的情况下才插入where子句，而且会自动去除子句的开头的AND或OR</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;select id=&quot;list&quot; resultType=&quot;com.itheima.pojo.Emp&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        select * from emp</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;where&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">             &lt;!-- if做为where标签的子元素 --&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">             &lt;if test=&quot;name != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                 and name like concat(&#39;%&#39;,#{name},&#39;%&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">             &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">             &lt;if test=&quot;gender != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                 and gender = #{gender}</span></span>
<span class="line"><span style="color:#f6f6f4;">             &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">             &lt;if test=&quot;begin != null and end != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                 and entrydate between #{begin} and #{end}</span></span>
<span class="line"><span style="color:#f6f6f4;">             &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;/where&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        order by update_time desc</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/select&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;select id=&quot;list&quot; resultType=&quot;com.itheima.pojo.Emp&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        select * from emp</span></span>
<span class="line"><span style="color:#24292e;">        &lt;where&gt;</span></span>
<span class="line"><span style="color:#24292e;">             &lt;!-- if做为where标签的子元素 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">             &lt;if test=&quot;name != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                 and name like concat(&#39;%&#39;,#{name},&#39;%&#39;)</span></span>
<span class="line"><span style="color:#24292e;">             &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">             &lt;if test=&quot;gender != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                 and gender = #{gender}</span></span>
<span class="line"><span style="color:#24292e;">             &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">             &lt;if test=&quot;begin != null and end != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                 and entrydate between #{begin} and #{end}</span></span>
<span class="line"><span style="color:#24292e;">             &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/where&gt;</span></span>
<span class="line"><span style="color:#24292e;">        order by update_time desc</span></span>
<span class="line"><span style="color:#24292e;">&lt;/select&gt;</span></span></code></pre></div><p>测试方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Test</span></span>
<span class="line"><span style="color:#f6f6f4;">public void testList(){</span></span>
<span class="line"><span style="color:#f6f6f4;">    //只有性别</span></span>
<span class="line"><span style="color:#f6f6f4;">    List&lt;Emp&gt; list = empMapper.list(null, (short)1, null, null);</span></span>
<span class="line"><span style="color:#f6f6f4;">    for(Emp emp : list){</span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(emp);</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Test</span></span>
<span class="line"><span style="color:#24292e;">public void testList(){</span></span>
<span class="line"><span style="color:#24292e;">    //只有性别</span></span>
<span class="line"><span style="color:#24292e;">    List&lt;Emp&gt; list = empMapper.list(null, (short)1, null, null);</span></span>
<span class="line"><span style="color:#24292e;">    for(Emp emp : list){</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(emp);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><blockquote><p>执行的SQL语句：</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221213141909455-06336b42.png" alt="image-20221213141909455"></p><p>image-20221213141909455</p></blockquote><p>课堂作业</p><p>🎻 1.将上述的动态查询案例练习一遍，并且使用<code>&lt;if&gt;&lt;/if&gt; &lt;where&gt; &lt;/where&gt;</code> 等标签</p><p>注意：理解if和where2个标签的作用</p><h3 id="_2️⃣3-2-动态sql-更新员工" tabindex="-1">2️⃣3.2 动态SQL-更新员工 <a class="header-anchor" href="#_2️⃣3-2-动态sql-更新员工" aria-label="Permalink to &quot;2️⃣3.2 动态SQL-更新员工&quot;">​</a></h3><p>案例：完善更新员工功能，修改为动态更新员工数据信息</p><ul><li>动态更新员工信息，如果更新时传递有值，则更新；如果更新时没有传递值，则不更新</li><li>解决方案：动态SQL</li></ul><p>第一步第二步第三步</p><p>修改Mapper接口：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Mapper</span></span>
<span class="line"><span style="color:#f6f6f4;">public interface EmpMapper {</span></span>
<span class="line"><span style="color:#f6f6f4;">    //删除@Update注解编写的SQL语句</span></span>
<span class="line"><span style="color:#f6f6f4;">    //update操作的SQL语句编写在Mapper映射文件中</span></span>
<span class="line"><span style="color:#f6f6f4;">    public void update(Emp emp);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Mapper</span></span>
<span class="line"><span style="color:#24292e;">public interface EmpMapper {</span></span>
<span class="line"><span style="color:#24292e;">    //删除@Update注解编写的SQL语句</span></span>
<span class="line"><span style="color:#24292e;">    //update操作的SQL语句编写在Mapper映射文件中</span></span>
<span class="line"><span style="color:#24292e;">    public void update(Emp emp);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>修改Mapper映射文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;!DOCTYPE mapper</span></span>
<span class="line"><span style="color:#f6f6f4;">        PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &quot;https://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;mapper namespace=&quot;com.itheima.mapper.EmpMapper&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;!--更新操作--&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;update id=&quot;update&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        update emp</span></span>
<span class="line"><span style="color:#f6f6f4;">        set</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;if test=&quot;username != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                username=#{username},</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;if test=&quot;name != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                name=#{name},</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;if test=&quot;gender != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                gender=#{gender},</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;if test=&quot;image != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                image=#{image},</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;if test=&quot;job != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                job=#{job},</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;if test=&quot;entrydate != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                entrydate=#{entrydate},</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;if test=&quot;deptId != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                dept_id=#{deptId},</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;if test=&quot;updateTime != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                update_time=#{updateTime}</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        where id=#{id}</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;/update&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/mapper&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!DOCTYPE mapper</span></span>
<span class="line"><span style="color:#24292e;">        PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span></span>
<span class="line"><span style="color:#24292e;">        &quot;https://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;mapper namespace=&quot;com.itheima.mapper.EmpMapper&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &lt;!--更新操作--&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;update id=&quot;update&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        update emp</span></span>
<span class="line"><span style="color:#24292e;">        set</span></span>
<span class="line"><span style="color:#24292e;">            &lt;if test=&quot;username != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                username=#{username},</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;if test=&quot;name != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                name=#{name},</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;if test=&quot;gender != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                gender=#{gender},</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;if test=&quot;image != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                image=#{image},</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;if test=&quot;job != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                job=#{job},</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;if test=&quot;entrydate != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                entrydate=#{entrydate},</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;if test=&quot;deptId != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                dept_id=#{deptId},</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;if test=&quot;updateTime != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                update_time=#{updateTime}</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">        where id=#{id}</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/update&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;/mapper&gt;</span></span></code></pre></div><p>测试方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Test</span></span>
<span class="line"><span style="color:#f6f6f4;">public void testUpdate2(){</span></span>
<span class="line"><span style="color:#f6f6f4;">        //要修改的员工信息</span></span>
<span class="line"><span style="color:#f6f6f4;">        Emp emp = new Emp();</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setId(20);</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setUsername(&quot;Tom111&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setName(&quot;汤姆111&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setUpdateTime(LocalDateTime.now());</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        //调用方法，修改员工数据</span></span>
<span class="line"><span style="color:#f6f6f4;">        empMapper.update(emp);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Test</span></span>
<span class="line"><span style="color:#24292e;">public void testUpdate2(){</span></span>
<span class="line"><span style="color:#24292e;">        //要修改的员工信息</span></span>
<span class="line"><span style="color:#24292e;">        Emp emp = new Emp();</span></span>
<span class="line"><span style="color:#24292e;">        emp.setId(20);</span></span>
<span class="line"><span style="color:#24292e;">        emp.setUsername(&quot;Tom111&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        emp.setName(&quot;汤姆111&quot;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        emp.setUpdateTime(LocalDateTime.now());</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        //调用方法，修改员工数据</span></span>
<span class="line"><span style="color:#24292e;">        empMapper.update(emp);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><blockquote><p>执行的SQL语句：</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221213152533851-76bfb102.png" alt="image-20221213152533851"></p><p>image-20221213152533851</p></blockquote><p>再次修改测试方法，观察SQL语句执行情况：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Test</span></span>
<span class="line"><span style="color:#f6f6f4;">public void testUpdate2(){</span></span>
<span class="line"><span style="color:#f6f6f4;">        //要修改的员工信息</span></span>
<span class="line"><span style="color:#f6f6f4;">        Emp emp = new Emp();</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setId(20);</span></span>
<span class="line"><span style="color:#f6f6f4;">        emp.setUsername(&quot;Tom222&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">      </span></span>
<span class="line"><span style="color:#f6f6f4;">        //调用方法，修改员工数据</span></span>
<span class="line"><span style="color:#f6f6f4;">        empMapper.update(emp);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Test</span></span>
<span class="line"><span style="color:#24292e;">public void testUpdate2(){</span></span>
<span class="line"><span style="color:#24292e;">        //要修改的员工信息</span></span>
<span class="line"><span style="color:#24292e;">        Emp emp = new Emp();</span></span>
<span class="line"><span style="color:#24292e;">        emp.setId(20);</span></span>
<span class="line"><span style="color:#24292e;">        emp.setUsername(&quot;Tom222&quot;);</span></span>
<span class="line"><span style="color:#24292e;">      </span></span>
<span class="line"><span style="color:#24292e;">        //调用方法，修改员工数据</span></span>
<span class="line"><span style="color:#24292e;">        empMapper.update(emp);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><blockquote><p>执行的SQL语句：</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221213152850322-560c3c65.png" alt="image-20221213152850322"></p><p>image-20221213152850322</p></blockquote><p>以上问题的解决方案：使用<code>&lt;set&gt;</code>标签代替SQL语句中的set关键字</p><ul><li><code>&lt;set&gt;</code>：动态的在SQL语句中插入set关键字，并会删掉额外的逗号。（用于update语句中）</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;!DOCTYPE mapper</span></span>
<span class="line"><span style="color:#f6f6f4;">        PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &quot;https://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;mapper namespace=&quot;com.itheima.mapper.EmpMapper&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;!--更新操作--&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;update id=&quot;update&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        update emp</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;!-- 使用set标签，代替update语句中的set关键字 --&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;set&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;if test=&quot;username != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                username=#{username},</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;if test=&quot;name != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                name=#{name},</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;if test=&quot;gender != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                gender=#{gender},</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;if test=&quot;image != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                image=#{image},</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;if test=&quot;job != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                job=#{job},</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;if test=&quot;entrydate != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                entrydate=#{entrydate},</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;if test=&quot;deptId != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                dept_id=#{deptId},</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;if test=&quot;updateTime != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">                update_time=#{updateTime}</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;/set&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        where id=#{id}</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;/update&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/mapper&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!DOCTYPE mapper</span></span>
<span class="line"><span style="color:#24292e;">        PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span></span>
<span class="line"><span style="color:#24292e;">        &quot;https://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;mapper namespace=&quot;com.itheima.mapper.EmpMapper&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &lt;!--更新操作--&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;update id=&quot;update&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        update emp</span></span>
<span class="line"><span style="color:#24292e;">        &lt;!-- 使用set标签，代替update语句中的set关键字 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;set&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;if test=&quot;username != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                username=#{username},</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;if test=&quot;name != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                name=#{name},</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;if test=&quot;gender != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                gender=#{gender},</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;if test=&quot;image != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                image=#{image},</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;if test=&quot;job != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                job=#{job},</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;if test=&quot;entrydate != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                entrydate=#{entrydate},</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;if test=&quot;deptId != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                dept_id=#{deptId},</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;if test=&quot;updateTime != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">                update_time=#{updateTime}</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/set&gt;</span></span>
<span class="line"><span style="color:#24292e;">        where id=#{id}</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/update&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/mapper&gt;</span></span></code></pre></div><blockquote><p>再次执行测试方法，执行的SQL语句：</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221213153329553-25860503.png" alt="image-20221213153329553"></p><p>image-20221213153329553</p></blockquote><p>小结</p><ul><li><p><code>&lt;if&gt;</code></p><ul><li><p>用于判断条件是否成立，<strong>如果条件为true，则拼接SQL</strong></p></li><li><p>形式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;if test=&quot;name != null&quot;&gt; … &lt;/if&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;if test=&quot;name != null&quot;&gt; … &lt;/if&gt;</span></span></code></pre></div></li></ul></li><li><p><code>&lt;where&gt;</code></p><ul><li><p>where元素只会在子元素有内容的情况下才插入where子句，而且<strong>会自动去除子句的开头的AND或OR</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;where&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">         &lt;if test=&quot;name != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">             and name like concat(&#39;%&#39;,#{name},&#39;%&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">         &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">         &lt;if test=&quot;gender != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">             and gender = #{gender}</span></span>
<span class="line"><span style="color:#f6f6f4;">         &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;/where&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;where&gt;</span></span>
<span class="line"><span style="color:#24292e;">         &lt;if test=&quot;name != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">             and name like concat(&#39;%&#39;,#{name},&#39;%&#39;)</span></span>
<span class="line"><span style="color:#24292e;">         &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">         &lt;if test=&quot;gender != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">             and gender = #{gender}</span></span>
<span class="line"><span style="color:#24292e;">         &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/where&gt;</span></span></code></pre></div></li></ul></li><li><p><code>&lt;set&gt;</code></p><ul><li>动态地在行首插入 SET 关键字，<strong>并会删掉额外的逗号</strong>。（用在update语句中）</li></ul></li></ul><p>课堂作业</p><p>🎻 1. 练习下上述的案例，理解<code>&lt;set&gt;&lt;/set&gt;</code>标签的作用</p><h3 id="_3️⃣动态sql-foreach" tabindex="-1">3️⃣动态SQL-foreach <a class="header-anchor" href="#_3️⃣动态sql-foreach" aria-label="Permalink to &quot;3️⃣动态SQL-foreach&quot;">​</a></h3><p>案例：员工删除功能（既支持删除单条记录，又支持批量删除）</p><p><img src="http://www.yangeit.cn:21010/assets/image-20220901181751004-a98d2fa0.png" alt="image-20220901181751004"></p><p>image-20220901181751004</p><p>SQL语句：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">delete from emp where id in (1,2,3);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">delete from emp where id in (1,2,3);</span></span></code></pre></div><p><strong>代码具体实现</strong></p><p>第一步第二步</p><p>Mapper接口：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Mapper</span></span>
<span class="line"><span style="color:#f6f6f4;">public interface EmpMapper {</span></span>
<span class="line"><span style="color:#f6f6f4;">    //批量删除</span></span>
<span class="line"><span style="color:#f6f6f4;">    public void deleteByIds(List&lt;Integer&gt; ids);</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Mapper</span></span>
<span class="line"><span style="color:#24292e;">public interface EmpMapper {</span></span>
<span class="line"><span style="color:#24292e;">    //批量删除</span></span>
<span class="line"><span style="color:#24292e;">    public void deleteByIds(List&lt;Integer&gt; ids);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>XML映射文件：</p><ul><li>使用<code>&lt;foreach&gt;</code>遍历deleteByIds方法中传递的参数ids集合</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;foreach collection=&quot;集合名称&quot; item=&quot;集合遍历出来的元素/项&quot; separator=&quot;每一次遍历使用的分隔符&quot; </span></span>
<span class="line"><span style="color:#f6f6f4;">         open=&quot;遍历开始前拼接的片段&quot; close=&quot;遍历结束后拼接的片段&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/foreach&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;foreach collection=&quot;集合名称&quot; item=&quot;集合遍历出来的元素/项&quot; separator=&quot;每一次遍历使用的分隔符&quot; </span></span>
<span class="line"><span style="color:#24292e;">         open=&quot;遍历开始前拼接的片段&quot; close=&quot;遍历结束后拼接的片段&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/foreach&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;!DOCTYPE mapper</span></span>
<span class="line"><span style="color:#f6f6f4;">        PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &quot;https://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;mapper namespace=&quot;com.itheima.mapper.EmpMapper&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;!--删除操作--&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;delete id=&quot;deleteByIds&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        delete from emp where id in</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;foreach collection=&quot;ids&quot; item=&quot;id&quot; separator=&quot;,&quot; open=&quot;(&quot; close=&quot;)&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            #{id}</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;/foreach&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;/delete&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/mapper&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!DOCTYPE mapper</span></span>
<span class="line"><span style="color:#24292e;">        PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span></span>
<span class="line"><span style="color:#24292e;">        &quot;https://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;mapper namespace=&quot;com.itheima.mapper.EmpMapper&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;!--删除操作--&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;delete id=&quot;deleteByIds&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        delete from emp where id in</span></span>
<span class="line"><span style="color:#24292e;">        &lt;foreach collection=&quot;ids&quot; item=&quot;id&quot; separator=&quot;,&quot; open=&quot;(&quot; close=&quot;)&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">            #{id}</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/foreach&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/delete&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/mapper&gt;</span></span></code></pre></div><blockquote><p><img src="http://www.yangeit.cn:21010/assets/image-20221213165710141-3bd0331a.png" alt="image-20221213165710141"></p><p>image-20221213165710141</p></blockquote><blockquote><p>执行的SQL语句：</p><p><img src="http://www.yangeit.cn:21010/assets/image-20221213164957636-f8df0213.png" alt="image-20221213164957636"></p><p>image-20221213164957636</p></blockquote><p>课堂作业</p><p>🎻 1.将上述案例练习一下，主要理解 foreach标签以及属性的含义，并体会批量删除的业务场景</p><h3 id="_4️⃣动态sql-fsql-include" tabindex="-1">4️⃣动态SQL-fsql&amp;include <a class="header-anchor" href="#_4️⃣动态sql-fsql-include" aria-label="Permalink to &quot;4️⃣动态SQL-fsql&amp;include&quot;">​</a></h3><p>问题分析：在xml映射文件中配置的SQL，有时可能会存在很多重复的片段，此时就会存在很多冗余的代码</p><p><img src="http://www.yangeit.cn:21010/assets/image-20220901182204358-fdfd3a24.png" alt=""></p><p><img src="http://www.yangeit.cn:21010/assets/image-20220901182249421-a7f67ea5.png" alt=""></p><p>解决方案</p><p>我们可以对重复的代码片段进行抽取，将其通过<code>&lt;sql&gt;</code>标签封装到一个SQL片段，然后再通过<code>&lt;include&gt;</code>标签进行引用。</p><ul><li><p><code>&lt;sql&gt;</code>：定义可重用的SQL片段</p></li><li><p><code>&lt;include&gt;</code>：通过属性refid，指定包含的SQL片段</p></li></ul><p><img src="http://www.yangeit.cn:21010/assets/image-20221213171244796-1b0bdc53.png" alt="image-20221213171244796"></p><p>image-20221213171244796</p><p><strong>SQL片段： 抽取重复的代码</strong> 👇</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;sql id=&quot;commonSelect&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  select id, username, password, name, gender, image, job, entrydate, dept_id, create_time, update_time from emp</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/sql&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;sql id=&quot;commonSelect&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  select id, username, password, name, gender, image, job, entrydate, dept_id, create_time, update_time from emp</span></span>
<span class="line"><span style="color:#24292e;">&lt;/sql&gt;</span></span></code></pre></div><p><strong>然后通过<code>&lt;include&gt;</code> 标签在原来抽取的地方进行引用。操作如下：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;select id=&quot;list&quot; resultType=&quot;com.itheima.pojo.Emp&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;include refid=&quot;commonSelect&quot;/&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;where&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;if test=&quot;name != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            name like concat(&#39;%&#39;,#{name},&#39;%&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;if test=&quot;gender != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            and gender = #{gender}</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;if test=&quot;begin != null and end != null&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            and entrydate between #{begin} and #{end}</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;/if&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;/where&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    order by update_time desc</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/select&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;select id=&quot;list&quot; resultType=&quot;com.itheima.pojo.Emp&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;include refid=&quot;commonSelect&quot;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;where&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;if test=&quot;name != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">            name like concat(&#39;%&#39;,#{name},&#39;%&#39;)</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;if test=&quot;gender != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">            and gender = #{gender}</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;if test=&quot;begin != null and end != null&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">            and entrydate between #{begin} and #{end}</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/if&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/where&gt;</span></span>
<span class="line"><span style="color:#24292e;">    order by update_time desc</span></span>
<span class="line"><span style="color:#24292e;">&lt;/select&gt;</span></span></code></pre></div><p>课堂作业</p><p>🎻 1.<a href="http://www.yangeit.cn:21010/javaweb2023/springbootmybatis.html" target="_blank" rel="noreferrer">SpringBoot整合Mybatis入门案例</a></p><p>上次编辑于:</p><p>贡献者: huhu520,itcast</p><p>黑马程序员·长沙校区</p><p>Copyright © 2023 HM</p><p>本文转自 <a href="http://www.yangeit.cn:21010/javaweb2023/day09.html" target="_blank" rel="noreferrer">http://www.yangeit.cn:21010/javaweb2023/day09.html</a>，如有侵权，请联系删除。</p>`,371),t=[l];function o(c,i,r,f,d,y){return n(),a("div",null,t)}const m=s(e,[["render",o]]);export{g as __pageData,m as default};
