import{_ as s,o as a,c as n,V as o}from"./chunks/framework.c6d8cbec.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/python/python-06.md","filePath":"interview/backend/python/python-06.md"}'),l={name:"interview/backend/python/python-06.md"},e=o(`<h3 id="_1、使用python将数据库的student表中的数据写入db-txt" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python%E6%9C%80%E6%96%B0%E5%9F%BA%E7%A1%80%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86.md#1%E4%BD%BF%E7%94%A8python%E5%B0%86%E6%95%B0%E6%8D%AE%E5%BA%93%E7%9A%84student%E8%A1%A8%E4%B8%AD%E7%9A%84%E6%95%B0%E6%8D%AE%E5%86%99%E5%85%A5dbtxt" target="_blank" rel="noreferrer">1、使用python将数据库的student表中的数据写入db.txt</a> <a class="header-anchor" href="#_1、使用python将数据库的student表中的数据写入db-txt" aria-label="Permalink to &quot;[1、使用python将数据库的student表中的数据写入db.txt](https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python最新基础面试题及答案整理.md#1使用python将数据库的student表中的数据写入dbtxt)&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> pyMySQL</span></span>
<span class="line"><span style="color:#F6F6F4;">connect</span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;">pyMySQL.Connect(</span></span>
<span class="line"><span style="color:#FFB86C;font-style:italic;">host</span><span style="color:#F286C4;">=</span><span style="color:#DEE492;">&#39;&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#FFB86C;font-style:italic;">port</span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#FFB86C;font-style:italic;">user</span><span style="color:#F286C4;">=</span><span style="color:#DEE492;">&#39;&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#FFB86C;font-style:italic;">passwd</span><span style="color:#F286C4;">=</span><span style="color:#DEE492;">&#39;&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#FFB86C;font-style:italic;">db</span><span style="color:#F286C4;">=</span><span style="color:#DEE492;">&#39;&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#FFB86C;font-style:italic;">charset</span><span style="color:#F286C4;">=</span><span style="color:#DEE492;">&#39;&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">cursor</span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;">connect.cursor()</span></span>
<span class="line"><span style="color:#F6F6F4;">sql</span><span style="color:#F286C4;">=</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">select from student</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F6F6F4;">cursor.execute(sql)</span></span>
<span class="line"><span style="color:#F6F6F4;">students</span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;">cursor.fetchall()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">with</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">open</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">db.txt</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">w</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">as</span><span style="color:#F6F6F4;"> f:</span></span>
<span class="line"><span style="color:#F286C4;">for</span><span style="color:#F6F6F4;"> student </span><span style="color:#F286C4;">in</span><span style="color:#F6F6F4;"> students:</span></span>
<span class="line"><span style="color:#F6F6F4;">f.write(student)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">cursor.close()</span></span>
<span class="line"><span style="color:#F6F6F4;">connect.close()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pyMySQL</span></span>
<span class="line"><span style="color:#24292E;">connect</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">pyMySQL.Connect(</span></span>
<span class="line"><span style="color:#E36209;">host</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#E36209;">port</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#E36209;">user</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#E36209;">passwd</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#E36209;">db</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#E36209;">charset</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">cursor</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">connect.cursor()</span></span>
<span class="line"><span style="color:#24292E;">sql</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;select from student&#39;</span></span>
<span class="line"><span style="color:#24292E;">cursor.execute(sql)</span></span>
<span class="line"><span style="color:#24292E;">students</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">cursor.fetchall()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">with</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">open</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;db.txt&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;w&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> f:</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> student </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> students:</span></span>
<span class="line"><span style="color:#24292E;">f.write(student)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">cursor.close()</span></span>
<span class="line"><span style="color:#24292E;">connect.close()</span></span></code></pre></div><h3 id="_2、了解过hbase-db2-sqlserver-access吗" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python%E6%9C%80%E6%96%B0%E5%9F%BA%E7%A1%80%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86.md#2%E4%BA%86%E8%A7%A3%E8%BF%87hbasedb2sqlserveraccess%E5%90%97" target="_blank" rel="noreferrer">2、了解过Hbase，DB2，SQLServer，Access吗</a> <a class="header-anchor" href="#_2、了解过hbase-db2-sqlserver-access吗" aria-label="Permalink to &quot;[2、了解过Hbase，DB2，SQLServer，Access吗](https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python最新基础面试题及答案整理.md#2了解过hbasedb2sqlserveraccess吗)&quot;">​</a></h3><p><strong>1、</strong> Hbase：HBase是一个分布式的、面向列的开源数据库</p><p><strong>2、</strong> DB2：一套关系型数据库管理系统，</p><p><strong>3、</strong> SQLServer：SQL Server是由Microsoft开发和推广的关系数据库管理系统</p><p><strong>4、</strong> Sccess：Access是由微软发布的关系数据库管理系统。</p><h3 id="_3、解释一下python中的继承" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python%E6%9C%80%E6%96%B0%E5%9F%BA%E7%A1%80%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86.md#3%E8%A7%A3%E9%87%8A%E4%B8%80%E4%B8%8Bpython%E4%B8%AD%E7%9A%84%E7%BB%A7%E6%89%BF" target="_blank" rel="noreferrer">3、解释一下Python中的继承？</a> <a class="header-anchor" href="#_3、解释一下python中的继承" aria-label="Permalink to &quot;[3、解释一下Python中的继承？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python最新基础面试题及答案整理.md#3解释一下python中的继承)&quot;">​</a></h3><p>继承(inheritance)允许一个类获取另一个类的所有成员和属性。继承提供代码可重用性，可以更轻松地创建和维护应用程序。</p><p>被继承的类称为超类，而继承的类称为派生类/子类。</p><h3 id="_4、什么是并发和并行" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python%E6%9C%80%E6%96%B0%E5%9F%BA%E7%A1%80%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86.md#4%E4%BB%80%E4%B9%88%E6%98%AF%E5%B9%B6%E5%8F%91%E5%92%8C%E5%B9%B6%E8%A1%8C" target="_blank" rel="noreferrer">4、什么是并发和并行</a> <a class="header-anchor" href="#_4、什么是并发和并行" aria-label="Permalink to &quot;[4、什么是并发和并行](https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python最新基础面试题及答案整理.md#4什么是并发和并行)&quot;">​</a></h3><p><strong>1、</strong> 并发:指应用能够交替执行不同的任务,其实并发有点类似于多线程的原理,多线程并非是同时执行多个任务,如果你开两个线程执行,就是在你几乎不可能察觉到的速度不断去切换这两个任务,已达到&quot;同时执行效果&quot;,其实并不是的,只是计算机的速度太快,我们无法察觉到而已.</p><p><strong>2、</strong> 并行:指应用能够同时执行不同的任务,</p><p><strong>3、</strong> 并发是多个事件在同一时间段执行，并行是多个事件在统一时间点执行。</p><h3 id="_5、json序列化时可以处理的数据类型有哪些-如何定制支持datetime类型-序列化时-遇到中文转成unicode-如何保持中文形式" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python%E6%9C%80%E6%96%B0%E5%9F%BA%E7%A1%80%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86.md#5json%E5%BA%8F%E5%88%97%E5%8C%96%E6%97%B6%E5%8F%AF%E4%BB%A5%E5%A4%84%E7%90%86%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E6%9C%89%E5%93%AA%E4%BA%9B%E5%A6%82%E4%BD%95%E5%AE%9A%E5%88%B6%E6%94%AF%E6%8C%81datetime%E7%B1%BB%E5%9E%8B%E5%BA%8F%E5%88%97%E5%8C%96%E6%97%B6%E9%81%87%E5%88%B0%E4%B8%AD%E6%96%87%E8%BD%AC%E6%88%90unicode%E5%A6%82%E4%BD%95%E4%BF%9D%E6%8C%81%E4%B8%AD%E6%96%87%E5%BD%A2%E5%BC%8F" target="_blank" rel="noreferrer">5、json序列化时可以处理的数据类型有哪些？如何定制支持datetime类型？序列化时，遇到中文转成unicode，如何保持中文形式？</a> <a class="header-anchor" href="#_5、json序列化时可以处理的数据类型有哪些-如何定制支持datetime类型-序列化时-遇到中文转成unicode-如何保持中文形式" aria-label="Permalink to &quot;[5、json序列化时可以处理的数据类型有哪些？如何定制支持datetime类型？序列化时，遇到中文转成unicode，如何保持中文形式？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python最新基础面试题及答案整理.md#5json序列化时可以处理的数据类型有哪些如何定制支持datetime类型序列化时遇到中文转成unicode如何保持中文形式)&quot;">​</a></h3><p><strong>1、</strong> 可以处理的数据类型是 string、int、list、tuple、dict、bool、null</p><p><strong>2、</strong> 通过自定义时间序列化转换器</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> json</span></span>
<span class="line"><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> json </span><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> JSONEncoder</span></span>
<span class="line"><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> datetime </span><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> datetime</span></span>
<span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">ComplexEncoder</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">JSONEncoder</span><span style="color:#F6F6F4;">):</span></span>
<span class="line"><span style="color:#F286C4;">def</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">default</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;font-style:italic;">self</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">obj</span><span style="color:#F6F6F4;">):</span></span>
<span class="line"><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">isinstance</span><span style="color:#F6F6F4;">(obj, datetime):</span></span>
<span class="line"><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> obj.strftime(‘</span><span style="color:#F286C4;">%</span><span style="color:#F6F6F4;">Y</span><span style="color:#F286C4;">-%</span><span style="color:#F6F6F4;">m</span><span style="color:#F286C4;">-%</span><span style="color:#F6F6F4;">d </span><span style="color:#F286C4;">%</span><span style="color:#F6F6F4;">H:</span><span style="color:#F286C4;">%</span><span style="color:#F6F6F4;">M:</span><span style="color:#F286C4;">%</span><span style="color:#F6F6F4;">S‘)</span></span>
<span class="line"><span style="color:#F286C4;">else</span><span style="color:#F6F6F4;">:</span></span>
<span class="line"><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">super</span><span style="color:#F6F6F4;">(ComplexEncoder,</span><span style="color:#BF9EEE;font-style:italic;">self</span><span style="color:#F6F6F4;">).default(obj)</span></span>
<span class="line"><span style="color:#F6F6F4;">d </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> { ‘name‘:‘alex‘,‘data‘:datetime.now()}</span></span>
<span class="line"><span style="color:#97E1F1;">print</span><span style="color:#F6F6F4;">(json.dumps(d,</span><span style="color:#FFB86C;font-style:italic;">cls</span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;">ComplexEncoder))</span></span>
<span class="line"><span style="color:#7B7F8B;"># {&quot;name&quot;: &quot;alex&quot;, &quot;data&quot;: &quot;2018-05-18 19:52:05&quot;}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> json</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> json </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> JSONEncoder</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> datetime </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> datetime</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ComplexEncoder</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">JSONEncoder</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">(self, obj):</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">isinstance</span><span style="color:#24292E;">(obj, datetime):</span></span>
<span class="line"><span style="color:#D73A49;">return</span><span style="color:#24292E;"> obj.strftime(‘</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">Y</span><span style="color:#D73A49;">-%</span><span style="color:#24292E;">m</span><span style="color:#D73A49;">-%</span><span style="color:#24292E;">d </span><span style="color:#D73A49;">%</span><span style="color:#24292E;">H:</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">M:</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">S‘)</span></span>
<span class="line"><span style="color:#D73A49;">else</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">super</span><span style="color:#24292E;">(ComplexEncoder,</span><span style="color:#005CC5;">self</span><span style="color:#24292E;">).default(obj)</span></span>
<span class="line"><span style="color:#24292E;">d </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { ‘name‘:‘alex‘,‘data‘:datetime.now()}</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(json.dumps(d,</span><span style="color:#E36209;">cls</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">ComplexEncoder))</span></span>
<span class="line"><span style="color:#6A737D;"># {&quot;name&quot;: &quot;alex&quot;, &quot;data&quot;: &quot;2018-05-18 19:52:05&quot;}</span></span></code></pre></div><p><strong>3、</strong> 使用ensure_ascii=False参数</p><h3 id="_6、二叉树是非线性结构-栈和队列以及线性表都是线性结构-对吗" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python%E6%9C%80%E6%96%B0%E5%9F%BA%E7%A1%80%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86.md#6%E4%BA%8C%E5%8F%89%E6%A0%91%E6%98%AF%E9%9D%9E%E7%BA%BF%E6%80%A7%E7%BB%93%E6%9E%84%E6%A0%88%E5%92%8C%E9%98%9F%E5%88%97%E4%BB%A5%E5%8F%8A%E7%BA%BF%E6%80%A7%E8%A1%A8%E9%83%BD%E6%98%AF%E7%BA%BF%E6%80%A7%E7%BB%93%E6%9E%84%E5%AF%B9%E5%90%97" target="_blank" rel="noreferrer">6、二叉树是非线性结构，栈和队列以及线性表都是线性结构，对吗？</a> <a class="header-anchor" href="#_6、二叉树是非线性结构-栈和队列以及线性表都是线性结构-对吗" aria-label="Permalink to &quot;[6、二叉树是非线性结构，栈和队列以及线性表都是线性结构，对吗？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python最新基础面试题及答案整理.md#6二叉树是非线性结构栈和队列以及线性表都是线性结构对吗)&quot;">​</a></h3><p>对的</p><h3 id="_7、如何以就地操作方式打乱一个列表的元素" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python%E6%9C%80%E6%96%B0%E5%9F%BA%E7%A1%80%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86.md#7%E5%A6%82%E4%BD%95%E4%BB%A5%E5%B0%B1%E5%9C%B0%E6%93%8D%E4%BD%9C%E6%96%B9%E5%BC%8F%E6%89%93%E4%B9%B1%E4%B8%80%E4%B8%AA%E5%88%97%E8%A1%A8%E7%9A%84%E5%85%83%E7%B4%A0" target="_blank" rel="noreferrer">7、如何以就地操作方式打乱一个列表的元素？</a> <a class="header-anchor" href="#_7、如何以就地操作方式打乱一个列表的元素" aria-label="Permalink to &quot;[7、如何以就地操作方式打乱一个列表的元素？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python最新基础面试题及答案整理.md#7如何以就地操作方式打乱一个列表的元素)&quot;">​</a></h3><p>为了达到这个目的，我们从random模块中导入shuffle()函数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&gt;&gt;&gt; from random import shuffle</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt;&gt;&gt; shuffle(mylist)</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt;&gt;&gt; mylist</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&gt;&gt;&gt; from random import shuffle</span></span>
<span class="line"><span style="color:#24292e;">&gt;&gt;&gt; shuffle(mylist)</span></span>
<span class="line"><span style="color:#24292e;">&gt;&gt;&gt; mylist</span></span></code></pre></div><p>运行结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">[3, 4, 8, 0, 5, 7, 6, 2, 1]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[3, 4, 8, 0, 5, 7, 6, 2, 1]</span></span></code></pre></div><h3 id="_8、对列表-3-1-4-2-按照绝对值排序" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python%E6%9C%80%E6%96%B0%E5%9F%BA%E7%A1%80%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86.md#8%E5%AF%B9%E5%88%97%E8%A1%A8%5B3,1,-4,-2%5D%E6%8C%89%E7%85%A7%E7%BB%9D%E5%AF%B9%E5%80%BC%E6%8E%92%E5%BA%8F" target="_blank" rel="noreferrer">8、对列表[3,1,-4,-2]按照绝对值排序</a> <a class="header-anchor" href="#_8、对列表-3-1-4-2-按照绝对值排序" aria-label="Permalink to &quot;[8、对列表[3,1,-4,-2]按照绝对值排序](https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python最新基础面试题及答案整理.md#8对列表[3,1,-4,-2]按照绝对值排序)&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">lis</span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;">[</span><span style="color:#BF9EEE;">3</span><span style="color:#F6F6F4;">,</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">,</span><span style="color:#F286C4;">-</span><span style="color:#BF9EEE;">4</span><span style="color:#F6F6F4;">,</span><span style="color:#F286C4;">-</span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">]</span></span>
<span class="line"><span style="color:#F6F6F4;">lis</span><span style="color:#F286C4;">=</span><span style="color:#97E1F1;">sorted</span><span style="color:#F6F6F4;">(lis,</span><span style="color:#FFB86C;font-style:italic;">key</span><span style="color:#F286C4;">=lambda</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">x</span><span style="color:#F6F6F4;">:</span><span style="color:#97E1F1;">abs</span><span style="color:#F6F6F4;">(x))</span></span>
<span class="line"><span style="color:#97E1F1;">print</span><span style="color:#F6F6F4;">(lis)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">lis</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">lis</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">sorted</span><span style="color:#24292E;">(lis,</span><span style="color:#E36209;">key</span><span style="color:#D73A49;">=lambda</span><span style="color:#24292E;"> x:</span><span style="color:#005CC5;">abs</span><span style="color:#24292E;">(x))</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(lis)</span></span></code></pre></div><h3 id="_9、python中的字典是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python%E6%9C%80%E6%96%B0%E5%9F%BA%E7%A1%80%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86.md#9python%E4%B8%AD%E7%9A%84%E5%AD%97%E5%85%B8%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">9、Python中的字典是什么？</a> <a class="header-anchor" href="#_9、python中的字典是什么" aria-label="Permalink to &quot;[9、Python中的字典是什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python最新基础面试题及答案整理.md#9python中的字典是什么)&quot;">​</a></h3><p>字典是C++和Java等编程语言中所没有的东西，它具有键值对。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&gt;&gt;&gt; roots={25:5,16:4,9:3,4:2,1:1}</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt;&gt;&gt; type(roots)</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;class &#39;dict&#39;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt;&gt;&gt; roots[9]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&gt;&gt;&gt; roots={25:5,16:4,9:3,4:2,1:1}</span></span>
<span class="line"><span style="color:#24292e;">&gt;&gt;&gt; type(roots)</span></span>
<span class="line"><span style="color:#24292e;">&lt;class &#39;dict&#39;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&gt;&gt;&gt; roots[9]</span></span></code></pre></div><p>运行结果为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">3</span></span></code></pre></div><p>字典是不可变的，我们也能用一个推导式来创建它。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&gt;&gt;&gt; roots={x**2:x for x in range(5,0,-1)}</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt;&gt;&gt; roots</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&gt;&gt;&gt; roots={x**2:x for x in range(5,0,-1)}</span></span>
<span class="line"><span style="color:#24292e;">&gt;&gt;&gt; roots</span></span></code></pre></div><p>运行结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">{25: 5, 16: 4, 9: 3, 4: 2, 1: 1}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{25: 5, 16: 4, 9: 3, 4: 2, 1: 1}</span></span></code></pre></div><h3 id="_10、类和对象有什么区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python%E6%9C%80%E6%96%B0%E5%9F%BA%E7%A1%80%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86.md#10%E7%B1%BB%E5%92%8C%E5%AF%B9%E8%B1%A1%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">10、类和对象有什么区别？</a> <a class="header-anchor" href="#_10、类和对象有什么区别" aria-label="Permalink to &quot;[10、类和对象有什么区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Python/Python最新基础面试题及答案整理.md#10类和对象有什么区别)&quot;">​</a></h3><p>类(Class)被视为对象的蓝图。类中的第一行字符串称为doc字符串，包含该类的简短描述。</p><p>在Python中，使用class关键字可以创建了一个类。一个类包含变量和成员组合，称为类成员。</p><p>对象(Object)是真实存在的实体。在Python中为类创建一个对象，我们可以使用obj = CLASS_NAME()</p><p>例如：obj = num()</p><p>使用类的对象，我们可以访问类的所有成员，并对其进行操作。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">class Person:</span></span>
<span class="line"><span style="color:#f6f6f4;">    &quot;&quot;&quot; This is a Person Class&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">    # varable</span></span>
<span class="line"><span style="color:#f6f6f4;">    age = 10</span></span>
<span class="line"><span style="color:#f6f6f4;">    def greets(self):</span></span>
<span class="line"><span style="color:#f6f6f4;">        print(&#39;Hello&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># object</span></span>
<span class="line"><span style="color:#f6f6f4;">obj = Person()</span></span>
<span class="line"><span style="color:#f6f6f4;">print(obj.greet)</span></span>
<span class="line"><span style="color:#f6f6f4;">----------------------------------------</span></span>
<span class="line"><span style="color:#f6f6f4;">Hello</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class Person:</span></span>
<span class="line"><span style="color:#24292e;">    &quot;&quot;&quot; This is a Person Class&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292e;">    # varable</span></span>
<span class="line"><span style="color:#24292e;">    age = 10</span></span>
<span class="line"><span style="color:#24292e;">    def greets(self):</span></span>
<span class="line"><span style="color:#24292e;">        print(&#39;Hello&#39;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># object</span></span>
<span class="line"><span style="color:#24292e;">obj = Person()</span></span>
<span class="line"><span style="color:#24292e;">print(obj.greet)</span></span>
<span class="line"><span style="color:#24292e;">----------------------------------------</span></span>
<span class="line"><span style="color:#24292e;">Hello</span></span></code></pre></div><h3 id="_11、如何在函数中设置一个全局变量" tabindex="-1">11、如何在函数中设置一个全局变量？ <a class="header-anchor" href="#_11、如何在函数中设置一个全局变量" aria-label="Permalink to &quot;11、如何在函数中设置一个全局变量？&quot;">​</a></h3><h3 id="_12、解释一下python中的成员运算符" tabindex="-1">12、解释一下Python中的成员运算符 <a class="header-anchor" href="#_12、解释一下python中的成员运算符" aria-label="Permalink to &quot;12、解释一下Python中的成员运算符&quot;">​</a></h3><h3 id="_13、什么是asyncio" tabindex="-1">13、什么是asyncio <a class="header-anchor" href="#_13、什么是asyncio" aria-label="Permalink to &quot;13、什么是asyncio&quot;">​</a></h3><h3 id="_14、简述线程死锁是怎么造成的。如何避免" tabindex="-1">14、简述线程死锁是怎么造成的。如何避免？ <a class="header-anchor" href="#_14、简述线程死锁是怎么造成的。如何避免" aria-label="Permalink to &quot;14、简述线程死锁是怎么造成的。如何避免？&quot;">​</a></h3><h3 id="_15、javascript-或者jquery-如何选择一个id为main的容器" tabindex="-1">15、JavaScript(或者jQuery)如何选择一个id为main的容器 <a class="header-anchor" href="#_15、javascript-或者jquery-如何选择一个id为main的容器" aria-label="Permalink to &quot;15、JavaScript(或者jQuery)如何选择一个id为main的容器&quot;">​</a></h3><h3 id="_16、什么是codis" tabindex="-1">16、什么是codis <a class="header-anchor" href="#_16、什么是codis" aria-label="Permalink to &quot;16、什么是codis&quot;">​</a></h3><h3 id="_17、用尽量简洁的方法将二维数组合并成一维数组" tabindex="-1">17、用尽量简洁的方法将二维数组合并成一维数组 <a class="header-anchor" href="#_17、用尽量简洁的方法将二维数组合并成一维数组" aria-label="Permalink to &quot;17、用尽量简洁的方法将二维数组合并成一维数组&quot;">​</a></h3><h3 id="_18、阅读以下代码-写输出结果" tabindex="-1">18、阅读以下代码，写输出结果 <a class="header-anchor" href="#_18、阅读以下代码-写输出结果" aria-label="Permalink to &quot;18、阅读以下代码，写输出结果&quot;">​</a></h3><h3 id="_19、判断dict中有没有某个key。" tabindex="-1">19、判断dict中有没有某个key。 <a class="header-anchor" href="#_19、判断dict中有没有某个key。" aria-label="Permalink to &quot;19、判断dict中有没有某个key。&quot;">​</a></h3><h3 id="_20、编写程序-检查序列是否为回文" tabindex="-1">20、编写程序，检查序列是否为回文 <a class="header-anchor" href="#_20、编写程序-检查序列是否为回文" aria-label="Permalink to &quot;20、编写程序，检查序列是否为回文&quot;">​</a></h3><h3 id="_21、手写一个队列" tabindex="-1">21、手写一个队列 <a class="header-anchor" href="#_21、手写一个队列" aria-label="Permalink to &quot;21、手写一个队列&quot;">​</a></h3><h3 id="_22、mysql慢日志" tabindex="-1">22、MySQL慢日志 <a class="header-anchor" href="#_22、mysql慢日志" aria-label="Permalink to &quot;22、MySQL慢日志&quot;">​</a></h3><h3 id="_23、列举面向对象中带双下划线的特殊方法" tabindex="-1">23、列举面向对象中带双下划线的特殊方法 <a class="header-anchor" href="#_23、列举面向对象中带双下划线的特殊方法" aria-label="Permalink to &quot;23、列举面向对象中带双下划线的特殊方法&quot;">​</a></h3><h3 id="_24、python和java、php、c、c-、c-等其他语言对比" tabindex="-1">24、python和java、php、c、c#、c++ 等其他语言对比？ <a class="header-anchor" href="#_24、python和java、php、c、c-、c-等其他语言对比" aria-label="Permalink to &quot;24、python和java、php、c、c#、c++ 等其他语言对比？&quot;">​</a></h3><h3 id="_25、描述以下字典的items-方法和iteritems-方法有啥不同" tabindex="-1">25、描述以下字典的items()方法和iteritems()方法有啥不同？ <a class="header-anchor" href="#_25、描述以下字典的items-方法和iteritems-方法有啥不同" aria-label="Permalink to &quot;25、描述以下字典的items()方法和iteritems()方法有啥不同？&quot;">​</a></h3><h3 id="_26、发生粘包现象如何处理" tabindex="-1">26、发生粘包现象如何处理？ <a class="header-anchor" href="#_26、发生粘包现象如何处理" aria-label="Permalink to &quot;26、发生粘包现象如何处理？&quot;">​</a></h3><h3 id="_27、什么是pickling和unpickling" tabindex="-1">27、什么是pickling和unpickling？ <a class="header-anchor" href="#_27、什么是pickling和unpickling" aria-label="Permalink to &quot;27、什么是pickling和unpickling？&quot;">​</a></h3><h3 id="_28、python区分大小写吗" tabindex="-1">28、Python区分大小写吗？ <a class="header-anchor" href="#_28、python区分大小写吗" aria-label="Permalink to &quot;28、Python区分大小写吗？&quot;">​</a></h3><h3 id="_29、python代码是如何执行的" tabindex="-1">29、Python代码是如何执行的？ <a class="header-anchor" href="#_29、python代码是如何执行的" aria-label="Permalink to &quot;29、Python代码是如何执行的？&quot;">​</a></h3>`,63),p=[e];function t(c,r,i,y,E,d){return a(),n("div",null,p)}const u=s(l,[["render",t]]);export{F as __pageData,u as default};
