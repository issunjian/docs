import{_ as a,o as s,c as e,V as n}from"./chunks/framework.c6d8cbec.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/linux/linux-06.md","filePath":"interview/backend/linux/linux-06.md"}'),o={name:"interview/backend/linux/linux-06.md"},t=n(`<h3 id="_1、vi-visual-视觉-文本编辑器-类似win的记事本-操作类似于地下的vim命令-看底下vim-的操作" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#1vi-visual%EF%BC%9A%E8%A7%86%E8%A7%89%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91%E5%99%A8-%E7%B1%BB%E4%BC%BCwin%E7%9A%84%E8%AE%B0%E4%BA%8B%E6%9C%AC-%E6%93%8D%E4%BD%9C%E7%B1%BB%E4%BC%BC%E4%BA%8E%E5%9C%B0%E4%B8%8B%E7%9A%84vim%E5%91%BD%E4%BB%A4%E7%9C%8B%E5%BA%95%E4%B8%8Bvim-%E7%9A%84%E6%93%8D%E4%BD%9C" target="_blank" rel="noreferrer">1、vi （VIsual：视觉）文本编辑器 类似win的记事本 （操作类似于地下的vim命令，看底下vim 的操作）</a> <a class="header-anchor" href="#_1、vi-visual-视觉-文本编辑器-类似win的记事本-操作类似于地下的vim命令-看底下vim-的操作" aria-label="Permalink to &quot;[1、vi （VIsual：视觉）文本编辑器 类似win的记事本 （操作类似于地下的vim命令，看底下vim 的操作）](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新面试题2021年，常见面试题及答案汇总.md#1vi-visual：视觉文本编辑器-类似win的记事本-操作类似于地下的vim命令看底下vim-的操作)&quot;">​</a></h3><h3 id="_2、什么是中间件-什么是jdk" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#2%E4%BB%80%E4%B9%88%E6%98%AF%E4%B8%AD%E9%97%B4%E4%BB%B6%E4%BB%80%E4%B9%88%E6%98%AFjdk" target="_blank" rel="noreferrer">2、什么是中间件？什么是jdk？</a> <a class="header-anchor" href="#_2、什么是中间件-什么是jdk" aria-label="Permalink to &quot;[2、什么是中间件？什么是jdk？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新面试题2021年，常见面试题及答案汇总.md#2什么是中间件什么是jdk)&quot;">​</a></h3><p>中间件介绍：</p><p>中间件是一种独立的系统软件或服务程序，分布式应用软件借助这种软件在不同的技术之间共享资源</p><p>中间件位于客户机/ 服务器的操作系统之上，管理计算机资源和网络通讯</p><p>是连接两个独立应用程序或独立系统的软件。相连接的系统，即使它们具有不同的接口</p><p>但通过中间件相互之间仍能交换信息。执行中间件的一个关键途径是信息传递</p><p>通过中间件，应用程序可以工作于多平台或OS环境。</p><p>jdk：jdk是Java的开发工具包</p><p>它是一种用于构建在 Java 平台上发布的应用程序、applet 和组件的开发环境</p><h3 id="_3、linux-使用的进程间通信方式" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#3linux-%E4%BD%BF%E7%94%A8%E7%9A%84%E8%BF%9B%E7%A8%8B%E9%97%B4%E9%80%9A%E4%BF%A1%E6%96%B9%E5%BC%8F" target="_blank" rel="noreferrer">3、Linux 使用的进程间通信方式？</a> <a class="header-anchor" href="#_3、linux-使用的进程间通信方式" aria-label="Permalink to &quot;[3、Linux 使用的进程间通信方式？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新面试题2021年，常见面试题及答案汇总.md#3linux-使用的进程间通信方式)&quot;">​</a></h3><blockquote><p>了解即可，不需要太深入。</p></blockquote><p><strong>1、</strong> 管道(pipe)、流管道(s_pipe)、有名管道(FIFO)。</p><p><strong>2、</strong> 信号(signal) 。</p><p><strong>3、</strong> 消息队列。</p><p><strong>4、</strong> 共享内存。</p><p><strong>5、</strong> 信号量。</p><p><strong>6、</strong> 套接字(socket) 。</p><h3 id="_4、使用什么命令查看-ip-地址及接口信息" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#4%E4%BD%BF%E7%94%A8%E4%BB%80%E4%B9%88%E5%91%BD%E4%BB%A4%E6%9F%A5%E7%9C%8B-ip-%E5%9C%B0%E5%9D%80%E5%8F%8A%E6%8E%A5%E5%8F%A3%E4%BF%A1%E6%81%AF" target="_blank" rel="noreferrer">4、使用什么命令查看 ip 地址及接口信息？</a> <a class="header-anchor" href="#_4、使用什么命令查看-ip-地址及接口信息" aria-label="Permalink to &quot;[4、使用什么命令查看 ip 地址及接口信息？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新面试题2021年，常见面试题及答案汇总.md#4使用什么命令查看-ip-地址及接口信息)&quot;">​</a></h3><p><strong>答案：</strong></p><p>ifconfig</p><h3 id="_5、你常用的nginx模块-用来做什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#5%E4%BD%A0%E5%B8%B8%E7%94%A8%E7%9A%84nginx%E6%A8%A1%E5%9D%97%E7%94%A8%E6%9D%A5%E5%81%9A%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">5、你常用的Nginx模块，用来做什么</a> <a class="header-anchor" href="#_5、你常用的nginx模块-用来做什么" aria-label="Permalink to &quot;[5、你常用的Nginx模块，用来做什么](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新面试题2021年，常见面试题及答案汇总.md#5你常用的nginx模块用来做什么)&quot;">​</a></h3><p><strong>1、</strong> rewrite模块，实现重写功能</p><p><strong>2、</strong> access模块：来源控制</p><p><strong>3、</strong> ssl模块：安全加密</p><p><strong>4、</strong> ngx_http_gzip_module：网络传输压缩模块</p><p><strong>5、</strong> ngx_http_proxy_module 模块实现代理</p><p><strong>6、</strong> ngx_http_upstream_module模块实现定义后端服务器列表</p><p><strong>7、</strong> ngx_cache_purge实现缓存清除功能</p><h3 id="_6、free-命令-显示系统内存" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#6free-%E5%91%BD%E4%BB%A4-%E6%98%BE%E7%A4%BA%E7%B3%BB%E7%BB%9F%E5%86%85%E5%AD%98" target="_blank" rel="noreferrer">6、free 命令 （显示系统内存）</a> <a class="header-anchor" href="#_6、free-命令-显示系统内存" aria-label="Permalink to &quot;[6、free 命令 （显示系统内存）](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新面试题2021年，常见面试题及答案汇总.md#6free-命令-显示系统内存)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">#显示系统内存使用情况，包括物理内存、交互区内存(swap)和内核缓冲区内存。</span></span>
<span class="line"><span style="color:#f6f6f4;">-b 以Byte显示内存使用情况</span></span>
<span class="line"><span style="color:#f6f6f4;">-k 以kb为单位显示内存使用情况</span></span>
<span class="line"><span style="color:#f6f6f4;">-m 以mb为单位显示内存使用情况</span></span>
<span class="line"><span style="color:#f6f6f4;">-g 以gb为单位显示内存使用情况</span></span>
<span class="line"><span style="color:#f6f6f4;">-s&lt;间隔秒数&gt; 持续显示内存</span></span>
<span class="line"><span style="color:#f6f6f4;">-t 显示内存使用总合</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#显示系统内存使用情况，包括物理内存、交互区内存(swap)和内核缓冲区内存。</span></span>
<span class="line"><span style="color:#24292e;">-b 以Byte显示内存使用情况</span></span>
<span class="line"><span style="color:#24292e;">-k 以kb为单位显示内存使用情况</span></span>
<span class="line"><span style="color:#24292e;">-m 以mb为单位显示内存使用情况</span></span>
<span class="line"><span style="color:#24292e;">-g 以gb为单位显示内存使用情况</span></span>
<span class="line"><span style="color:#24292e;">-s&lt;间隔秒数&gt; 持续显示内存</span></span>
<span class="line"><span style="color:#24292e;">-t 显示内存使用总合</span></span></code></pre></div><h3 id="_7、用什么命令对一个文件的内容进行统计-行号、单词数、字节数" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#7%E7%94%A8%E4%BB%80%E4%B9%88%E5%91%BD%E4%BB%A4%E5%AF%B9%E4%B8%80%E4%B8%AA%E6%96%87%E4%BB%B6%E7%9A%84%E5%86%85%E5%AE%B9%E8%BF%9B%E8%A1%8C%E7%BB%9F%E8%AE%A1%E8%A1%8C%E5%8F%B7%E5%8D%95%E8%AF%8D%E6%95%B0%E5%AD%97%E8%8A%82%E6%95%B0" target="_blank" rel="noreferrer">7、用什么命令对一个文件的内容进行统计？(行号、单词数、字节数)</a> <a class="header-anchor" href="#_7、用什么命令对一个文件的内容进行统计-行号、单词数、字节数" aria-label="Permalink to &quot;[7、用什么命令对一个文件的内容进行统计？(行号、单词数、字节数)](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新面试题2021年，常见面试题及答案汇总.md#7用什么命令对一个文件的内容进行统计行号单词数字节数)&quot;">​</a></h3><p><strong>答案：</strong></p><p>wc 命令 - c 统计字节数 - l 统计行数 - w 统计字数。</p><h3 id="_8、打印文件第一行到第三行" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#8%E6%89%93%E5%8D%B0%E6%96%87%E4%BB%B6%E7%AC%AC%E4%B8%80%E8%A1%8C%E5%88%B0%E7%AC%AC%E4%B8%89%E8%A1%8C" target="_blank" rel="noreferrer">8、打印文件第一行到第三行?</a> <a class="header-anchor" href="#_8、打印文件第一行到第三行" aria-label="Permalink to &quot;[8、打印文件第一行到第三行?](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新面试题2021年，常见面试题及答案汇总.md#8打印文件第一行到第三行)&quot;">​</a></h3><p>文件tomcat中内容:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">?  apache cat tomcat</span></span>
<span class="line"><span style="color:#f6f6f4;">text21</span></span>
<span class="line"><span style="color:#f6f6f4;">text22</span></span>
<span class="line"><span style="color:#f6f6f4;">text23</span></span>
<span class="line"><span style="color:#f6f6f4;">start</span></span>
<span class="line"><span style="color:#f6f6f4;">stop</span></span>
<span class="line"><span style="color:#f6f6f4;">restart</span></span>
<span class="line"><span style="color:#f6f6f4;">end</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">?  apache cat tomcat</span></span>
<span class="line"><span style="color:#24292e;">text21</span></span>
<span class="line"><span style="color:#24292e;">text22</span></span>
<span class="line"><span style="color:#24292e;">text23</span></span>
<span class="line"><span style="color:#24292e;">start</span></span>
<span class="line"><span style="color:#24292e;">stop</span></span>
<span class="line"><span style="color:#24292e;">restart</span></span>
<span class="line"><span style="color:#24292e;">end</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">? apache head -3 tomcat</span></span>
<span class="line"><span style="color:#f6f6f4;">text21</span></span>
<span class="line"><span style="color:#f6f6f4;">text22</span></span>
<span class="line"><span style="color:#f6f6f4;">text23</span></span>
<span class="line"><span style="color:#f6f6f4;">? apache sed -n &#39;1,3p&#39; tomcat</span></span>
<span class="line"><span style="color:#f6f6f4;">text21</span></span>
<span class="line"><span style="color:#f6f6f4;">text22</span></span>
<span class="line"><span style="color:#f6f6f4;">text23</span></span>
<span class="line"><span style="color:#f6f6f4;">? apache awk &#39;NR&gt;=1&amp;&amp;NR&lt;=3&#39; tomcat</span></span>
<span class="line"><span style="color:#f6f6f4;">text21</span></span>
<span class="line"><span style="color:#f6f6f4;">text22</span></span>
<span class="line"><span style="color:#f6f6f4;">text23</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">? apache head -3 tomcat</span></span>
<span class="line"><span style="color:#24292e;">text21</span></span>
<span class="line"><span style="color:#24292e;">text22</span></span>
<span class="line"><span style="color:#24292e;">text23</span></span>
<span class="line"><span style="color:#24292e;">? apache sed -n &#39;1,3p&#39; tomcat</span></span>
<span class="line"><span style="color:#24292e;">text21</span></span>
<span class="line"><span style="color:#24292e;">text22</span></span>
<span class="line"><span style="color:#24292e;">text23</span></span>
<span class="line"><span style="color:#24292e;">? apache awk &#39;NR&gt;=1&amp;&amp;NR&lt;=3&#39; tomcat</span></span>
<span class="line"><span style="color:#24292e;">text21</span></span>
<span class="line"><span style="color:#24292e;">text22</span></span>
<span class="line"><span style="color:#24292e;">text23</span></span></code></pre></div><h3 id="_9、bash和dos之间的基本区别是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#9bash%E5%92%8Cdos%E4%B9%8B%E9%97%B4%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">9、BASH和DOS之间的基本区别是什么？</a> <a class="header-anchor" href="#_9、bash和dos之间的基本区别是什么" aria-label="Permalink to &quot;[9、BASH和DOS之间的基本区别是什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新面试题2021年，常见面试题及答案汇总.md#9bash和dos之间的基本区别是什么)&quot;">​</a></h3><p><strong>BASH和DOS控制台之间的主要区别在于3个方面：</strong></p><p><strong>1、</strong> BASH命令区分大小写，而DOS命令则不区分;</p><p><strong>2、</strong> 在BASH下，/ character是目录分隔符，\\作为转义字符。在DOS下，/用作命令参数分隔符，\\是目录分隔符</p><p><strong>3、</strong> DOS遵循命名文件中的约定，即8个字符的文件名后跟一个点，扩展名为3个字符。BASH没有遵循这样的惯例。</p><h3 id="_10、如果你的助手想要打印出当前的目录栈-你会建议他怎么做" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#10%E5%A6%82%E6%9E%9C%E4%BD%A0%E7%9A%84%E5%8A%A9%E6%89%8B%E6%83%B3%E8%A6%81%E6%89%93%E5%8D%B0%E5%87%BA%E5%BD%93%E5%89%8D%E7%9A%84%E7%9B%AE%E5%BD%95%E6%A0%88%E4%BD%A0%E4%BC%9A%E5%BB%BA%E8%AE%AE%E4%BB%96%E6%80%8E%E4%B9%88%E5%81%9A" target="_blank" rel="noreferrer">10、如果你的助手想要打印出当前的目录栈，你会建议他怎么做？</a> <a class="header-anchor" href="#_10、如果你的助手想要打印出当前的目录栈-你会建议他怎么做" aria-label="Permalink to &quot;[10、如果你的助手想要打印出当前的目录栈，你会建议他怎么做？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新面试题2021年，常见面试题及答案汇总.md#10如果你的助手想要打印出当前的目录栈你会建议他怎么做)&quot;">​</a></h3><p><strong>答案：</strong></p><p>使用Linux 命令dirs可以将当前的目录栈打印出来。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">[root@localhost ~]# dirs</span></span>
<span class="line"><span style="color:#f6f6f4;">/usr/share/X11</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@localhost ~]# dirs</span></span>
<span class="line"><span style="color:#24292e;">/usr/share/X11</span></span></code></pre></div><p>【附】：目录栈通过pushd popd 来操作。</p><h3 id="_11、使用什么命令查看用过的命令列表" tabindex="-1">11、使用什么命令查看用过的命令列表? <a class="header-anchor" href="#_11、使用什么命令查看用过的命令列表" aria-label="Permalink to &quot;11、使用什么命令查看用过的命令列表?&quot;">​</a></h3><h3 id="_12、使用什么命令查看网络是否连通" tabindex="-1">12、使用什么命令查看网络是否连通? <a class="header-anchor" href="#_12、使用什么命令查看网络是否连通" aria-label="Permalink to &quot;12、使用什么命令查看网络是否连通?&quot;">​</a></h3><h3 id="_13、快速判断某个特定目录是否有超大文件" tabindex="-1">13、快速判断某个特定目录是否有超大文件？ <a class="header-anchor" href="#_13、快速判断某个特定目录是否有超大文件" aria-label="Permalink to &quot;13、快速判断某个特定目录是否有超大文件？&quot;">​</a></h3><h3 id="_14、-管道命令-把多个命令组合起来使用" tabindex="-1">14、| 管道命令（把多个命令组合起来使用） <a class="header-anchor" href="#_14、-管道命令-把多个命令组合起来使用" aria-label="Permalink to &quot;14、| 管道命令（把多个命令组合起来使用）&quot;">​</a></h3><h3 id="_15、数据字典属于哪一个用户的" tabindex="-1">15、数据字典属于哪一个用户的？ <a class="header-anchor" href="#_15、数据字典属于哪一个用户的" aria-label="Permalink to &quot;15、数据字典属于哪一个用户的？&quot;">​</a></h3><h3 id="_16、如何写一条规则-拒绝某个ip访问本机8080端口" tabindex="-1">16、如何写一条规则，拒绝某个ip访问本机8080端口? <a class="header-anchor" href="#_16、如何写一条规则-拒绝某个ip访问本机8080端口" aria-label="Permalink to &quot;16、如何写一条规则，拒绝某个ip访问本机8080端口?&quot;">​</a></h3><h3 id="_17、keepalive的工作原理和如何做到健康检查" tabindex="-1">17、keepalive的工作原理和如何做到健康检查 <a class="header-anchor" href="#_17、keepalive的工作原理和如何做到健康检查" aria-label="Permalink to &quot;17、keepalive的工作原理和如何做到健康检查&quot;">​</a></h3><h3 id="_18、什么是运维-什么是游戏运维" tabindex="-1">18、什么是运维？什么是游戏运维？ <a class="header-anchor" href="#_18、什么是运维-什么是游戏运维" aria-label="Permalink to &quot;18、什么是运维？什么是游戏运维？&quot;">​</a></h3><h3 id="_19、删除文件用哪个命令-如果需要连目录及目录下文件一块删除呢-删除空文件夹用什么命令" tabindex="-1">19、删除文件用哪个命令？如果需要连目录及目录下文件一块删除呢？删除空文件夹用什么命令？ <a class="header-anchor" href="#_19、删除文件用哪个命令-如果需要连目录及目录下文件一块删除呢-删除空文件夹用什么命令" aria-label="Permalink to &quot;19、删除文件用哪个命令？如果需要连目录及目录下文件一块删除呢？删除空文件夹用什么命令？&quot;">​</a></h3><h3 id="_20、同步时间命令" tabindex="-1">20、同步时间命令 <a class="header-anchor" href="#_20、同步时间命令" aria-label="Permalink to &quot;20、同步时间命令&quot;">​</a></h3><h3 id="_21、如何执行可以执行文件" tabindex="-1">21、如何执行可以执行文件? <a class="header-anchor" href="#_21、如何执行可以执行文件" aria-label="Permalink to &quot;21、如何执行可以执行文件?&quot;">​</a></h3><h3 id="_22、bash手册" tabindex="-1">22、bash手册 <a class="header-anchor" href="#_22、bash手册" aria-label="Permalink to &quot;22、bash手册&quot;">​</a></h3><h3 id="_23、什么叫-cc-攻击-什么叫-ddos-攻击" tabindex="-1">23、什么叫 CC 攻击？什么叫 DDOS 攻击？ <a class="header-anchor" href="#_23、什么叫-cc-攻击-什么叫-ddos-攻击" aria-label="Permalink to &quot;23、什么叫 CC 攻击？什么叫 DDOS 攻击？&quot;">​</a></h3><h3 id="_24、源码安装通常的路子" tabindex="-1">24、源码安装通常的路子? <a class="header-anchor" href="#_24、源码安装通常的路子" aria-label="Permalink to &quot;24、源码安装通常的路子?&quot;">​</a></h3><h3 id="_25、查看当前谁在使用该主机用什么命令-查找自己所在的终端信息用什么命令" tabindex="-1">25、查看当前谁在使用该主机用什么命令? 查找自己所在的终端信息用什么命令? <a class="header-anchor" href="#_25、查看当前谁在使用该主机用什么命令-查找自己所在的终端信息用什么命令" aria-label="Permalink to &quot;25、查看当前谁在使用该主机用什么命令? 查找自己所在的终端信息用什么命令?&quot;">​</a></h3><h3 id="_26、删除文件-强制删除-递归删除" tabindex="-1">26、删除文件?强制删除？递归删除? <a class="header-anchor" href="#_26、删除文件-强制删除-递归删除" aria-label="Permalink to &quot;26、删除文件?强制删除？递归删除?&quot;">​</a></h3><h3 id="_27、如何查看目录中的文件-区分哪些是文件哪些是目录-递归查" tabindex="-1">27、如何查看目录中的文件？区分哪些是文件哪些是目录?递归查? <a class="header-anchor" href="#_27、如何查看目录中的文件-区分哪些是文件哪些是目录-递归查" aria-label="Permalink to &quot;27、如何查看目录中的文件？区分哪些是文件哪些是目录?递归查?&quot;">​</a></h3><h3 id="_28、查看文件内容有哪些命令可以使用" tabindex="-1">28、查看文件内容有哪些命令可以使用？ <a class="header-anchor" href="#_28、查看文件内容有哪些命令可以使用" aria-label="Permalink to &quot;28、查看文件内容有哪些命令可以使用？&quot;">​</a></h3><h3 id="_29、cd-change-directory-英文释义是改变目录-切换目录" tabindex="-1">29、cd （change directory：英文释义是改变目录）切换目录 <a class="header-anchor" href="#_29、cd-change-directory-英文释义是改变目录-切换目录" aria-label="Permalink to &quot;29、cd （change directory：英文释义是改变目录）切换目录&quot;">​</a></h3>`,67),l=[t];function p(r,i,E,c,B,h){return s(),e("div",null,l)}const A=a(o,[["render",p]]);export{u as __pageData,A as default};
