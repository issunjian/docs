import{_ as s,o as a,c as e,V as n}from"./chunks/framework.c6d8cbec.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/mybatis/mybatis-02.md","filePath":"interview/backend/mybatis/mybatis-02.md"}'),p={name:"interview/backend/mybatis/mybatis-02.md"},t=n(`<h3 id="_1、hibernate-和-mybatis-的区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MyBatis/MyBatis%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#1hibernate-%E5%92%8C-mybatis-%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">1、Hibernate 和 MyBatis 的区别</a> <a class="header-anchor" href="#_1、hibernate-和-mybatis-的区别" aria-label="Permalink to &quot;[1、Hibernate 和 MyBatis 的区别](https://gitee.com/souyunku/DevBooks/blob/master/docs/MyBatis/MyBatis最新2021年面试题大汇总，附答案.md#1hibernate-和-mybatis-的区别)&quot;">​</a></h3><p><strong>相同点</strong></p><p>都是对jdbc的封装，都是持久层的框架，都用于dao层的开发。</p><p><strong>不同点</strong></p><p>映射关系</p><p>MyBatis 是一个半自动映射的框架，配置Java对象与sql语句执行结果的对应关系，多表关联关系配置简单</p><p>Hibernate 是一个全表映射的框架，配置Java对象与数据库表的对应关系，多表关联关系配置复杂</p><p><strong>SQL优化和移植性</strong></p><p>Hibernate 对SQL语句封装，提供了日志、缓存、级联（级联比 MyBatis 强大）等特性，此外还提供 HQL（Hibernate Query Language）操作数据库，数据库无关性支持好，但会多消耗性能。如果项目需要支持多种数据库，代码开发量少，但SQL语句优化困难。</p><p>MyBatis 需要手动编写 SQL，支持动态 SQL、处理列表、动态生成表名、支持存储过程。开发工作量相对大些。直接使用SQL语句操作数据库，不支持数据库无关性，但sql语句优化容易。</p><h3 id="_2、mybatis-是如何将-sql-执行结果封装为目标对象并返回的-都有哪些映射形式" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MyBatis/MyBatis%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#2mybatis-%E6%98%AF%E5%A6%82%E4%BD%95%E5%B0%86-sql-%E6%89%A7%E8%A1%8C%E7%BB%93%E6%9E%9C%E5%B0%81%E8%A3%85%E4%B8%BA%E7%9B%AE%E6%A0%87%E5%AF%B9%E8%B1%A1%E5%B9%B6%E8%BF%94%E5%9B%9E%E7%9A%84%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E6%98%A0%E5%B0%84%E5%BD%A2%E5%BC%8F" target="_blank" rel="noreferrer">2、Mybatis 是如何将 sql 执行结果封装为目标对象并返回的？都有哪些映射形式？</a> <a class="header-anchor" href="#_2、mybatis-是如何将-sql-执行结果封装为目标对象并返回的-都有哪些映射形式" aria-label="Permalink to &quot;[2、Mybatis 是如何将 sql 执行结果封装为目标对象并返回的？都有哪些映射形式？](https://gitee.com/souyunku/DevBooks/blob/master/docs/MyBatis/MyBatis最新2021年面试题大汇总，附答案.md#2mybatis-是如何将-sql-执行结果封装为目标对象并返回的都有哪些映射形式)&quot;">​</a></h3><p>第一种是使用标签，逐一定义列名和对象属性名之间的映射关系。</p><p>第二种是使用 sql 列的别名功能，将列别名书写为对象属性名，比如 T_NAME AS NAME，对</p><p>象属性名一般是 name，小写，但是列名不区分大小写，Mybatis 会忽略列名大小写，智能</p><p>找到与之对应对象属性名，你甚至可以写成 T_NAME AS NaMe，Mybatis 一样可以正常工</p><p>作。</p><p>有了列名与属性名的映射关系后，Mybatis 通过反射创建对象，同时使用反射给对象的属性</p><p>逐一赋值并返回，那些找不到映射关系的属性，是无法完成赋值的。</p><h3 id="_3、mybatis编程步骤" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MyBatis/MyBatis%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#3mybatis%E7%BC%96%E7%A8%8B%E6%AD%A5%E9%AA%A4-" target="_blank" rel="noreferrer">3、Mybatis编程步骤 ？</a> <a class="header-anchor" href="#_3、mybatis编程步骤" aria-label="Permalink to &quot;[3、Mybatis编程步骤 ？](https://gitee.com/souyunku/DevBooks/blob/master/docs/MyBatis/MyBatis最新2021年面试题大汇总，附答案.md#3mybatis编程步骤-)&quot;">​</a></h3><p><strong>1、</strong> 创建SQLSessionFactory</p><p><strong>2、</strong> 通过SQLSessionFactory创建SQLSession</p><p><strong>3、</strong> 通过SQLSession执行数据库操作</p><p><strong>4、</strong> 调用session.commit()提交事物 Step5：调用session.close()关闭会话</p><h3 id="_4、mapper-编写有哪几种方式" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MyBatis/MyBatis%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#4mapper-%E7%BC%96%E5%86%99%E6%9C%89%E5%93%AA%E5%87%A0%E7%A7%8D%E6%96%B9%E5%BC%8F" target="_blank" rel="noreferrer">4、Mapper 编写有哪几种方式？</a> <a class="header-anchor" href="#_4、mapper-编写有哪几种方式" aria-label="Permalink to &quot;[4、Mapper 编写有哪几种方式？](https://gitee.com/souyunku/DevBooks/blob/master/docs/MyBatis/MyBatis最新2021年面试题大汇总，附答案.md#4mapper-编写有哪几种方式)&quot;">​</a></h3><p><strong>第一种：接口实现类继承 SqlSessionDaoSupport：使用此种方法需要编写mapper 接口，mapper 接口实现类、mapper.xml 文件</strong></p><p><strong>1、</strong> 在 sqlMapConfig.xml 中配置 mapper.xml 的位置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;mappers&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;mapper resource=&quot;mapper.xml 文件的地址&quot; /&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;mapper resource=&quot;mapper.xml 文件的地址&quot; /&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/mappers&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;mappers&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;mapper resource=&quot;mapper.xml 文件的地址&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;mapper resource=&quot;mapper.xml 文件的地址&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/mappers&gt;</span></span></code></pre></div><p><strong>2、</strong> 定义 mapper 接口</p><p><strong>3、</strong> 实现类集成 SqlSessionDaoSupport</p><p>mapper 方法中可以 this.getSqlSession()进行数据增删改查。</p><p><strong>4、</strong> spring 配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;bean id=&quot; &quot; class=&quot;mapper 接口的实现&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;property name=&quot;sqlSessionFactory&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">    ref=&quot;sqlSessionFactory&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/bean&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;bean id=&quot; &quot; class=&quot;mapper 接口的实现&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;property name=&quot;sqlSessionFactory&quot;</span></span>
<span class="line"><span style="color:#24292e;">    ref=&quot;sqlSessionFactory&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/bean&gt;</span></span></code></pre></div><p><strong>第二种：使用 org.mybatis.spring.mapper.MapperFactoryBean：</strong></p><p><strong>1、</strong> 在 sqlMapConfig.xml 中配置 mapper.xml 的位置，如果 mapper.xml 和mappre 接口的名称相同且在同一个目录，这里可以不用配置</p><p><strong>2、</strong> 定义 mapper 接口：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;mappers&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;mapper resource=&quot;mapper.xml 文件的地址&quot; /&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;mapper resource=&quot;mapper.xml 文件的地址&quot; /&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/mappers&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;mappers&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;mapper resource=&quot;mapper.xml 文件的地址&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;mapper resource=&quot;mapper.xml 文件的地址&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/mappers&gt;</span></span></code></pre></div><p><strong>3、</strong> mapper.xml 中的 namespace 为 mapper 接口的地址</p><p><strong>4、</strong> mapper 接口中的方法名和 mapper.xml 中的定义的 statement 的 id 保持一致</p><p><strong>5、</strong> Spring 中定义</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;bean id=&quot;&quot; class=&quot;org.mybatis.spring.mapper.MapperFactoryBean&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;property name=&quot;mapperInterface&quot; value=&quot;mapper 接口地址&quot; /&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;property name=&quot;sqlSessionFactory&quot; ref=&quot;sqlSessionFactory&quot; /&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/bean&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;bean id=&quot;&quot; class=&quot;org.mybatis.spring.mapper.MapperFactoryBean&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;property name=&quot;mapperInterface&quot; value=&quot;mapper 接口地址&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;property name=&quot;sqlSessionFactory&quot; ref=&quot;sqlSessionFactory&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/bean&gt;</span></span></code></pre></div><p><strong>第三种：使用 mapper 扫描器：</strong></p><p><strong>1、</strong> mapper.xml 文件编写：</p><p>mapper.xml 中的 namespace 为 mapper 接口的地址；</p><p>mapper 接口中的方法名和 mapper.xml 中的定义的 statement 的 id 保持一致；</p><p>如果将 mapper.xml 和 mapper 接口的名称保持一致则不用在 sqlMapConfig.xml中进行配置。</p><p><strong>2、</strong> 定义 mapper 接口：</p><p>注意 mapper.xml 的文件名和 mapper 的接口名称保持一致，且放在同一个目录</p><p><strong>3、</strong> 配置 mapper 扫描器：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;bean class=&quot;org.mybatis.spring.mapper.MapperScannerConfigurer&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;property name=&quot;basePackage&quot; value=&quot;mapper 接口包地址</span></span>
<span class="line"><span style="color:#f6f6f4;">    &quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;property name=&quot;sqlSessionFactoryBeanName&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">    value=&quot;sqlSessionFactory&quot;/&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/bean&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;bean class=&quot;org.mybatis.spring.mapper.MapperScannerConfigurer&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;property name=&quot;basePackage&quot; value=&quot;mapper 接口包地址</span></span>
<span class="line"><span style="color:#24292e;">    &quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;property name=&quot;sqlSessionFactoryBeanName&quot;</span></span>
<span class="line"><span style="color:#24292e;">    value=&quot;sqlSessionFactory&quot;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/bean&gt;</span></span></code></pre></div><p><strong>4、</strong> 使用扫描器后从 spring 容器中获取 mapper 的实现对象。</p><h3 id="_5、mybatis-是否可以映射-enum-枚举类" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MyBatis/MyBatis%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#5mybatis-%E6%98%AF%E5%90%A6%E5%8F%AF%E4%BB%A5%E6%98%A0%E5%B0%84-enum-%E6%9E%9A%E4%B8%BE%E7%B1%BB" target="_blank" rel="noreferrer">5、Mybatis 是否可以映射 Enum 枚举类？</a> <a class="header-anchor" href="#_5、mybatis-是否可以映射-enum-枚举类" aria-label="Permalink to &quot;[5、Mybatis 是否可以映射 Enum 枚举类？](https://gitee.com/souyunku/DevBooks/blob/master/docs/MyBatis/MyBatis最新2021年面试题大汇总，附答案.md#5mybatis-是否可以映射-enum-枚举类)&quot;">​</a></h3><p>Mybatis 可以映射枚举类，不单可以映射枚举类，Mybatis 可以映射任何对象到表的一</p><p>列上。映射方式为自定义一个 TypeHandler，实现 TypeHandler 的 setParameter()和</p><p>getResult()接口方法。TypeHandler 有两个作用，一是完成从 javaType 至 jdbcType 的转换，</p><p>二是完成 jdbcType 至 javaType 的转换，体现为 setParameter()和 getResult()两个方法，分别</p><p>代表设置 sql 问号占位符参数和获取列查询结果。</p><h3 id="_6、mybatis是如何进行分页的-分页插件的原理是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MyBatis/MyBatis%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#6mybatis%E6%98%AF%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8C%E5%88%86%E9%A1%B5%E7%9A%84%E5%88%86%E9%A1%B5%E6%8F%92%E4%BB%B6%E7%9A%84%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">6、Mybatis是如何进行分页的？分页插件的原理是什么？</a> <a class="header-anchor" href="#_6、mybatis是如何进行分页的-分页插件的原理是什么" aria-label="Permalink to &quot;[6、Mybatis是如何进行分页的？分页插件的原理是什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/MyBatis/MyBatis最新2021年面试题大汇总，附答案.md#6mybatis是如何进行分页的分页插件的原理是什么)&quot;">​</a></h3><p>Mybatis使用RowBounds对象进行分页，它是针对ResultSet结果集执行的内存分页，而非物理分页，可以在sql内直接书写带有物理分页的参数来完成物理分页功能，也可以使用分页插件来完成物理分页。</p><p>分页插件的基本原理是使用Mybatis提供的插件接口，实现自定义插件，在插件的拦截方法内拦截待执行的sql，然后重写sql，根据dialect方言，添加对应的物理分页语句和物理分页参数。</p><p><strong>举例：</strong></p><p>select * from student，拦截sql后重写为：select t.* from (select * from student) t limit 0, 10</p><h3 id="_7、mybatis-是否支持延迟加载-如果支持-它的实现原理是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MyBatis/MyBatis%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#7mybatis-%E6%98%AF%E5%90%A6%E6%94%AF%E6%8C%81%E5%BB%B6%E8%BF%9F%E5%8A%A0%E8%BD%BD%E5%A6%82%E6%9E%9C%E6%94%AF%E6%8C%81%E5%AE%83%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">7、Mybatis 是否支持延迟加载？如果支持，它的实现原理是什么？</a> <a class="header-anchor" href="#_7、mybatis-是否支持延迟加载-如果支持-它的实现原理是什么" aria-label="Permalink to &quot;[7、Mybatis 是否支持延迟加载？如果支持，它的实现原理是什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/MyBatis/MyBatis最新2021年面试题大汇总，附答案.md#7mybatis-是否支持延迟加载如果支持它的实现原理是什么)&quot;">​</a></h3><p><strong>1、</strong> Mybatis 仅支持 association 关联对象和 collection 关联集合对象的延迟加载，association</p><p>指的就是一对一，collection 指的就是一对多查询。在 Mybatis 配置文件中，可以配置是否</p><p>启用延迟加载 lazyLoadingEnabled=true|false。</p><p><strong>2、</strong> 它的原理是，使用 CGLIB 创建目标对象的代理对象，当调用目标方法时，进入拦截器方</p><p>法，比如调用 a.getB().getName()，拦截器 invoke()方法发现 a.getB()是 null 值，那么就会单</p><p>独发送事先保存好的查询关联 B 对象的 sql，把 B 查询上来，然后调用 a.setB(b)，于是 a 的</p><p>对象 b 属性就有值了，接着完成 a.getB().getName()方法的调用。这就是延迟加载的基本原</p><p>理。</p><h3 id="_8、什么是-mybatis-的接口绑定-有什么好处" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MyBatis/MyBatis%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#8%E4%BB%80%E4%B9%88%E6%98%AF-mybatis-%E7%9A%84%E6%8E%A5%E5%8F%A3%E7%BB%91%E5%AE%9A,%E6%9C%89%E4%BB%80%E4%B9%88%E5%A5%BD%E5%A4%84" target="_blank" rel="noreferrer">8、什么是 MyBatis 的接口绑定,有什么好处？</a> <a class="header-anchor" href="#_8、什么是-mybatis-的接口绑定-有什么好处" aria-label="Permalink to &quot;[8、什么是 MyBatis 的接口绑定,有什么好处？](https://gitee.com/souyunku/DevBooks/blob/master/docs/MyBatis/MyBatis最新2021年面试题大汇总，附答案.md#8什么是-mybatis-的接口绑定,有什么好处)&quot;">​</a></h3><p>接口映射就是在 MyBatis 中任意定义接口,然后把接口里面的方法和 SQL 语句绑定,我们</p><p>直接调用接口方法就可以,这样比起原来了 SqlSession 提供的方法我们可以有更加灵活的选</p><p>择和设置.</p><h3 id="_9、mybatis中如何指定使用哪一种executor执行器" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MyBatis/MyBatis%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#9mybatis%E4%B8%AD%E5%A6%82%E4%BD%95%E6%8C%87%E5%AE%9A%E4%BD%BF%E7%94%A8%E5%93%AA%E4%B8%80%E7%A7%8Dexecutor%E6%89%A7%E8%A1%8C%E5%99%A8" target="_blank" rel="noreferrer">9、Mybatis中如何指定使用哪一种Executor执行器？</a> <a class="header-anchor" href="#_9、mybatis中如何指定使用哪一种executor执行器" aria-label="Permalink to &quot;[9、Mybatis中如何指定使用哪一种Executor执行器？](https://gitee.com/souyunku/DevBooks/blob/master/docs/MyBatis/MyBatis最新2021年面试题大汇总，附答案.md#9mybatis中如何指定使用哪一种executor执行器)&quot;">​</a></h3><p>在Mybatis配置文件中，在设置（settings）可以指定默认的ExecutorType执行器类型，也可以手动给DefaultSqlSessionFactory的创建SqlSession的方法传递ExecutorType类型参数，如SqlSession openSession(ExecutorType execType)。</p><p>配置默认的执行器。SIMPLE 就是普通的执行器；REUSE 执行器会重用预处理语句（prepared statements）； BATCH 执行器将重用语句并执行批量更新。</p><h3 id="_10、在mapper中如何传递多个参数" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/MyBatis/MyBatis%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E6%B1%87%E6%80%BB%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88.md#10%E5%9C%A8mapper%E4%B8%AD%E5%A6%82%E4%BD%95%E4%BC%A0%E9%80%92%E5%A4%9A%E4%B8%AA%E5%8F%82%E6%95%B0" target="_blank" rel="noreferrer">10、在mapper中如何传递多个参数?</a> <a class="header-anchor" href="#_10、在mapper中如何传递多个参数" aria-label="Permalink to &quot;[10、在mapper中如何传递多个参数?](https://gitee.com/souyunku/DevBooks/blob/master/docs/MyBatis/MyBatis最新2021年面试题大汇总，附答案.md#10在mapper中如何传递多个参数)&quot;">​</a></h3><p><strong>1、</strong> 第一种：</p><p><strong>DAO层的函数</strong></p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">UserselectUser</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> name,</span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> area);</span></span>
<span class="line"><span style="color:#F6F6F4;">        对应的xml,#{</span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">}代表接收的是dao层中的第一个参数，#{</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">}代表dao层中第二参数，更多参数一致往后加即可。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UserselectUser</span><span style="color:#24292E;">(String name,String area);</span></span>
<span class="line"><span style="color:#24292E;">        对应的xml,#{</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">}代表接收的是dao层中的第一个参数，#{</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">}代表dao层中第二参数，更多参数一致往后加即可。</span></span></code></pre></div><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">&lt;</span><span style="color:#F286C4;">select</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;font-style:italic;">id</span><span style="color:#F6F6F4;">=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">selectUser</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">resultMap=</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">BaseResultMap</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">    select *  fromuser_user_t   whereuser_name = #{0} anduser_area=#{1}</span></span>
<span class="line"><span style="color:#F6F6F4;">&lt;/</span><span style="color:#F286C4;">select</span><span style="color:#F6F6F4;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">select</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;selectUser&quot;</span><span style="color:#24292E;">resultMap=</span><span style="color:#032F62;">&quot;BaseResultMap&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    select *  fromuser_user_t   whereuser_name = #{0} anduser_area=#{1}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">select</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p><strong>2、</strong> 第二种： 使用 <a href="/docs/param.html">@param </a> 注解:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">interface</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">usermapper</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    user </span><span style="color:#62E884;">selectuser</span><span style="color:#F6F6F4;">(@</span><span style="color:#97E1F1;font-style:italic;">param</span><span style="color:#F6F6F4;">(“username”) </span><span style="color:#FFB86C;font-style:italic;">string</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">username</span><span style="color:#F6F6F4;">,@</span><span style="color:#97E1F1;font-style:italic;">param</span><span style="color:#F6F6F4;">(“hashedpassword”) </span><span style="color:#FFB86C;font-style:italic;">string</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">hashedpassword</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">usermapper</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    user </span><span style="color:#6F42C1;">selectuser</span><span style="color:#24292E;">(@</span><span style="color:#D73A49;">param</span><span style="color:#24292E;">(“username”) </span><span style="color:#E36209;">string</span><span style="color:#24292E;"> </span><span style="color:#E36209;">username</span><span style="color:#24292E;">,@</span><span style="color:#D73A49;">param</span><span style="color:#24292E;">(“hashedpassword”) </span><span style="color:#E36209;">string</span><span style="color:#24292E;"> </span><span style="color:#E36209;">hashedpassword</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>然后,就可以在xml像下面这样使用(推荐封装为一个map,作为单个参数传递给mapper):</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">&lt;</span><span style="color:#F286C4;">select</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;font-style:italic;">id</span><span style="color:#F6F6F4;">=”selectuser” </span><span style="color:#62E884;font-style:italic;">resulttype</span><span style="color:#F6F6F4;">=”user”&gt;</span></span>
<span class="line"><span style="color:#F6F6F4;">        select id, username, hashedpassword</span></span>
<span class="line"><span style="color:#F6F6F4;">        from some_table</span></span>
<span class="line"><span style="color:#F6F6F4;">        where username = #{username}</span></span>
<span class="line"><span style="color:#F6F6F4;">        and hashedpassword = #{hashedpassword}</span></span>
<span class="line"><span style="color:#F6F6F4;">        &lt;/</span><span style="color:#F286C4;">select</span><span style="color:#F6F6F4;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">select</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=”selectuser” </span><span style="color:#6F42C1;">resulttype</span><span style="color:#24292E;">=”user”&gt;</span></span>
<span class="line"><span style="color:#24292E;">        select id, username, hashedpassword</span></span>
<span class="line"><span style="color:#24292E;">        from some_table</span></span>
<span class="line"><span style="color:#24292E;">        where username = #{username}</span></span>
<span class="line"><span style="color:#24292E;">        and hashedpassword = #{hashedpassword}</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">select</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p><strong>3、</strong> 第三种：多个参数封装成map</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">try</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">//映射文件的命名空间.SQL片段的ID，就可以调用对应的映射文件中的SQL</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">//由于我们的参数超过了两个，而方法中只有一个Object参数收集，因此我们使用Map集合来装载我们的参数</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;font-style:italic;">Map</span><span style="color:#F6F6F4;"> &lt; String, Object &gt; map </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">HashMap</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">        map.</span><span style="color:#62E884;">put</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">start</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, start);</span></span>
<span class="line"><span style="color:#F6F6F4;">        map.</span><span style="color:#62E884;">put</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">end</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, end);</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> sqlSession.</span><span style="color:#62E884;">selectList</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">StudentID.pagination</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, map);</span></span>
<span class="line"><span style="color:#F6F6F4;">        } </span><span style="color:#F286C4;">catch</span><span style="color:#F6F6F4;"> (</span><span style="color:#97E1F1;font-style:italic;">Exception</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">e</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        e.</span><span style="color:#62E884;">printStackTrace</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">        sqlSession.</span><span style="color:#62E884;">rollback</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">throw</span><span style="color:#F6F6F4;"> e;</span></span>
<span class="line"><span style="color:#F6F6F4;">        } </span><span style="color:#F286C4;">finally</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">        MybatisUtil.</span><span style="color:#62E884;">closeSqlSession</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//映射文件的命名空间.SQL片段的ID，就可以调用对应的映射文件中的SQL</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//由于我们的参数超过了两个，而方法中只有一个Object参数收集，因此我们使用Map集合来装载我们的参数</span></span>
<span class="line"><span style="color:#24292E;">        Map &lt; </span><span style="color:#D73A49;">String</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">Object</span><span style="color:#24292E;"> &gt; map </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HashMap</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        map.</span><span style="color:#6F42C1;">put</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;start&quot;</span><span style="color:#24292E;">, start);</span></span>
<span class="line"><span style="color:#24292E;">        map.</span><span style="color:#6F42C1;">put</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;end&quot;</span><span style="color:#24292E;">, end);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> sqlSession.</span><span style="color:#6F42C1;">selectList</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;StudentID.pagination&quot;</span><span style="color:#24292E;">, map);</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (Exception </span><span style="color:#E36209;">e</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        e.</span><span style="color:#6F42C1;">printStackTrace</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        sqlSession.</span><span style="color:#6F42C1;">rollback</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> e;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">finally</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        MybatisUtil.</span><span style="color:#6F42C1;">closeSqlSession</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span></code></pre></div><h3 id="_11、传统jdbc开发存在什么问题" tabindex="-1">11、传统JDBC开发存在什么问题？ <a class="header-anchor" href="#_11、传统jdbc开发存在什么问题" aria-label="Permalink to &quot;11、传统JDBC开发存在什么问题？&quot;">​</a></h3><h3 id="_12、mybatis-实现一对一有几种方式-具体怎么操作的" tabindex="-1">12、MyBatis 实现一对一有几种方式?具体怎么操作的？ <a class="header-anchor" href="#_12、mybatis-实现一对一有几种方式-具体怎么操作的" aria-label="Permalink to &quot;12、MyBatis 实现一对一有几种方式?具体怎么操作的？&quot;">​</a></h3><h3 id="_13、mybatis的功能架构是怎样的" tabindex="-1">13、MyBatis的功能架构是怎样的 <a class="header-anchor" href="#_13、mybatis的功能架构是怎样的" aria-label="Permalink to &quot;13、MyBatis的功能架构是怎样的&quot;">​</a></h3><h3 id="_14、-和-的区别" tabindex="-1">14、#{}和\${}的区别 <a class="header-anchor" href="#_14、-和-的区别" aria-label="Permalink to &quot;14、#{}和\${}的区别&quot;">​</a></h3><h3 id="_15、ibatis-和-mybatis-在核心处理类分别叫什么" tabindex="-1">15、IBatis 和 MyBatis 在核心处理类分别叫什么？ <a class="header-anchor" href="#_15、ibatis-和-mybatis-在核心处理类分别叫什么" aria-label="Permalink to &quot;15、IBatis 和 MyBatis 在核心处理类分别叫什么？&quot;">​</a></h3><h3 id="_16、mybatis-动态-sql-是做什么的-都有哪些动态-sql-能简述一下动态-sql-的执行原理不" tabindex="-1">16、Mybatis 动态 sql 是做什么的？都有哪些动态 sql？能简述一下动态 sql 的执行原理不？ <a class="header-anchor" href="#_16、mybatis-动态-sql-是做什么的-都有哪些动态-sql-能简述一下动态-sql-的执行原理不" aria-label="Permalink to &quot;16、Mybatis 动态 sql 是做什么的？都有哪些动态 sql？能简述一下动态 sql 的执行原理不？&quot;">​</a></h3><h3 id="_17、mybatis的编程步骤是什么样的" tabindex="-1">17、Mybatis的编程步骤是什么样的？ <a class="header-anchor" href="#_17、mybatis的编程步骤是什么样的" aria-label="Permalink to &quot;17、Mybatis的编程步骤是什么样的？&quot;">​</a></h3><h3 id="_18、mybatis框架适用场合" tabindex="-1">18、MyBatis框架适用场合： <a class="header-anchor" href="#_18、mybatis框架适用场合" aria-label="Permalink to &quot;18、MyBatis框架适用场合：&quot;">​</a></h3><h3 id="_19、mybatis映射文件中-如果a标签通过include引用了b标签的内容" tabindex="-1">19、Mybatis映射文件中，如果A标签通过include引用了B标签的内容 <a class="header-anchor" href="#_19、mybatis映射文件中-如果a标签通过include引用了b标签的内容" aria-label="Permalink to &quot;19、Mybatis映射文件中，如果A标签通过include引用了B标签的内容&quot;">​</a></h3><h3 id="_20、mybatis-的-xml-映射文件中-不同的-xml-映射文件-id-是否可以重复" tabindex="-1">20、Mybatis 的 Xml 映射文件中，不同的 Xml 映射文件，id 是否可以重复？ <a class="header-anchor" href="#_20、mybatis-的-xml-映射文件中-不同的-xml-映射文件-id-是否可以重复" aria-label="Permalink to &quot;20、Mybatis 的 Xml 映射文件中，不同的 Xml 映射文件，id 是否可以重复？&quot;">​</a></h3><h3 id="_21、mybatis-的好处是什么" tabindex="-1">21、MyBatis 的好处是什么？ <a class="header-anchor" href="#_21、mybatis-的好处是什么" aria-label="Permalink to &quot;21、MyBatis 的好处是什么？&quot;">​</a></h3><h3 id="_22、使用mybatis的mapper接口调用时有哪些要求" tabindex="-1">22、使用MyBatis的mapper接口调用时有哪些要求？ <a class="header-anchor" href="#_22、使用mybatis的mapper接口调用时有哪些要求" aria-label="Permalink to &quot;22、使用MyBatis的mapper接口调用时有哪些要求？&quot;">​</a></h3><h3 id="_23、-和-的区别是什么" tabindex="-1">23、#{}和\${}的区别是什么？ <a class="header-anchor" href="#_23、-和-的区别是什么" aria-label="Permalink to &quot;23、#{}和\${}的区别是什么？&quot;">​</a></h3><h3 id="_24、xml映射文件中-除了常见的select-insert-updae-delete标签之外-还有哪些标签" tabindex="-1">24、Xml映射文件中，除了常见的select|insert|updae|delete标签之外，还有哪些标签？ <a class="header-anchor" href="#_24、xml映射文件中-除了常见的select-insert-updae-delete标签之外-还有哪些标签" aria-label="Permalink to &quot;24、Xml映射文件中，除了常见的select|insert|updae|delete标签之外，还有哪些标签？&quot;">​</a></h3><h3 id="_25、jdbc编程有哪些不足之处-mybatis是如何解决这些问题的" tabindex="-1">25、JDBC编程有哪些不足之处，MyBatis是如何解决这些问题的？ <a class="header-anchor" href="#_25、jdbc编程有哪些不足之处-mybatis是如何解决这些问题的" aria-label="Permalink to &quot;25、JDBC编程有哪些不足之处，MyBatis是如何解决这些问题的？&quot;">​</a></h3>`,103),l=[t];function o(r,c,i,y,E,m){return a(),e("div",null,l)}const F=s(p,[["render",o]]);export{d as __pageData,F as default};