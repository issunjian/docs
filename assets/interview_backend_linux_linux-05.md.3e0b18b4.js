import{_ as s,o as a,c as n,V as o}from"./chunks/framework.c6d8cbec.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/linux/linux-05.md","filePath":"interview/backend/linux/linux-05.md"}'),e={name:"interview/backend/linux/linux-05.md"},l=o(`<h3 id="_1、ls-ls-list的缩写-查看列表-查看当前目录下的所有文件夹-ls-只列出文件名或目录名" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#1ls-ls%EF%BC%9Alist%E7%9A%84%E7%BC%A9%E5%86%99%E6%9F%A5%E7%9C%8B%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E5%BD%93%E5%89%8D%E7%9B%AE%E5%BD%95%E4%B8%8B%E7%9A%84%E6%89%80%E6%9C%89%E6%96%87%E4%BB%B6%E5%A4%B9ls-%E5%8F%AA%E5%88%97%E5%87%BA%E6%96%87%E4%BB%B6%E5%90%8D%E6%88%96%E7%9B%AE%E5%BD%95%E5%90%8D" target="_blank" rel="noreferrer">1、ls （ls：list的缩写，查看列表）查看当前目录下的所有文件夹（ls 只列出文件名或目录名）</a> <a class="header-anchor" href="#_1、ls-ls-list的缩写-查看列表-查看当前目录下的所有文件夹-ls-只列出文件名或目录名" aria-label="Permalink to &quot;[1、ls （ls：list的缩写，查看列表）查看当前目录下的所有文件夹（ls 只列出文件名或目录名）](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新面试题，2021年面试题及答案汇总.md#1ls-ls：list的缩写查看列表查看当前目录下的所有文件夹ls-只列出文件名或目录名)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">ls -a ;显示所有文件夹,隐藏文件也显示出来</span></span>
<span class="line"><span style="color:#f6f6f4;">ls -R ;连同子目录一起列出来</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">ls -a ;显示所有文件夹,隐藏文件也显示出来</span></span>
<span class="line"><span style="color:#24292e;">ls -R ;连同子目录一起列出来</span></span></code></pre></div><h3 id="_2、awk-详解。" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#2awk-%E8%AF%A6%E8%A7%A3%E3%80%82" target="_blank" rel="noreferrer">2、awk 详解。</a> <a class="header-anchor" href="#_2、awk-详解。" aria-label="Permalink to &quot;[2、awk 详解。](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新面试题，2021年面试题及答案汇总.md#2awk-详解。)&quot;">​</a></h3><p><strong>答案：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">awk &#39;{pattern + action}&#39; {filenames}</span></span>
<span class="line"><span style="color:#f6f6f4;">#cat /etc/passwd |awk -F &#39;:&#39; &#39;{print 1&quot;\\t&quot;7}&#39; //-F 的意思是以&#39;:&#39;分隔 root /bin/bash</span></span>
<span class="line"><span style="color:#f6f6f4;">daemon /bin/sh 搜索/etc/passwd 有 root 关键字的所有行</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">#awk -F: &#39;/root/&#39; /etc/passwd root:x:0:0:root:/root:/bin/bash</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">awk &#39;{pattern + action}&#39; {filenames}</span></span>
<span class="line"><span style="color:#24292e;">#cat /etc/passwd |awk -F &#39;:&#39; &#39;{print 1&quot;\\t&quot;7}&#39; //-F 的意思是以&#39;:&#39;分隔 root /bin/bash</span></span>
<span class="line"><span style="color:#24292e;">daemon /bin/sh 搜索/etc/passwd 有 root 关键字的所有行</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">#awk -F: &#39;/root/&#39; /etc/passwd root:x:0:0:root:/root:/bin/bash</span></span></code></pre></div><h3 id="_3、已知-apache-服务的访问日志按天记录在服务器本地目录-app-logs-下-由于磁盘空间紧张现在要求只能保留最近-7-天的访问日志-请问如何解决-请给出解决办法或配置或处理命令" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#3%E5%B7%B2%E7%9F%A5-apache-%E6%9C%8D%E5%8A%A1%E7%9A%84%E8%AE%BF%E9%97%AE%E6%97%A5%E5%BF%97%E6%8C%89%E5%A4%A9%E8%AE%B0%E5%BD%95%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%9C%AC%E5%9C%B0%E7%9B%AE%E5%BD%95/app/logs-%E4%B8%8B%E7%94%B1%E4%BA%8E%E7%A3%81%E7%9B%98%E7%A9%BA%E9%97%B4%E7%B4%A7%E5%BC%A0%E7%8E%B0%E5%9C%A8%E8%A6%81%E6%B1%82%E5%8F%AA%E8%83%BD%E4%BF%9D%E7%95%99%E6%9C%80%E8%BF%91-7-%E5%A4%A9%E7%9A%84%E8%AE%BF%E9%97%AE%E6%97%A5%E5%BF%97%E8%AF%B7%E9%97%AE%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3%E8%AF%B7%E7%BB%99%E5%87%BA%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95%E6%88%96%E9%85%8D%E7%BD%AE%E6%88%96%E5%A4%84%E7%90%86%E5%91%BD%E4%BB%A4" target="_blank" rel="noreferrer">3、已知 apache 服务的访问日志按天记录在服务器本地目录/app/logs 下，由于磁盘空间紧张现在要求只能保留最近 7 天的访问日志！请问如何解决？请给出解决办法或配置或处理命令</a> <a class="header-anchor" href="#_3、已知-apache-服务的访问日志按天记录在服务器本地目录-app-logs-下-由于磁盘空间紧张现在要求只能保留最近-7-天的访问日志-请问如何解决-请给出解决办法或配置或处理命令" aria-label="Permalink to &quot;[3、已知 apache 服务的访问日志按天记录在服务器本地目录/app/logs 下，由于磁盘空间紧张现在要求只能保留最近 7 天的访问日志！请问如何解决？请给出解决办法或配置或处理命令](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新面试题，2021年面试题及答案汇总.md#3已知-apache-服务的访问日志按天记录在服务器本地目录/app/logs-下由于磁盘空间紧张现在要求只能保留最近-7-天的访问日志请问如何解决请给出解决办法或配置或处理命令)&quot;">​</a></h3><p>创建文件脚本：</p><p>#!/bin/bash</p><p>for n in <code>seq 14</code></p><p>do</p><p>date -s &quot;11/0$n/14&quot;</p><p>touch access_www_<code>(date +%F)</code>.log</p><p>done</p><p>解决方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;"># pwd/application/logs</span></span>
<span class="line"><span style="color:#f6f6f4;"># ll</span></span>
<span class="line"><span style="color:#f6f6f4;">-rw-r--r--、1 root root 0 Jan  1 00:00 access_www_2015-01-01.log</span></span>
<span class="line"><span style="color:#f6f6f4;">-rw-r--r--、1 root root 0 Jan  2 00:00 access_www_2015-01-02.log</span></span>
<span class="line"><span style="color:#f6f6f4;">-rw-r--r--、1 root root 0 Jan  3 00:00 access_www_2015-01-03.log</span></span>
<span class="line"><span style="color:#f6f6f4;">-rw-r--r--、1 root root 0 Jan  4 00:00 access_www_2015-01-04.log</span></span>
<span class="line"><span style="color:#f6f6f4;">-rw-r--r--、1 root root 0 Jan  5 00:00 access_www_2015-01-05.log</span></span>
<span class="line"><span style="color:#f6f6f4;">-rw-r--r--、1 root root 0 Jan  6 00:00 access_www_2015-01-06.log</span></span>
<span class="line"><span style="color:#f6f6f4;">-rw-r--r--、1 root root 0 Jan  7 00:00 access_www_2015-01-07.log</span></span>
<span class="line"><span style="color:#f6f6f4;">-rw-r--r--、1 root root 0 Jan  8 00:00 access_www_2015-01-08.log</span></span>
<span class="line"><span style="color:#f6f6f4;">-rw-r--r--、1 root root 0 Jan  9 00:00 access_www_2015-01-09.log</span></span>
<span class="line"><span style="color:#f6f6f4;">-rw-r--r--、1 root root 0 Jan 10 00:00 access_www_2015-01-10.log</span></span>
<span class="line"><span style="color:#f6f6f4;">-rw-r--r--、1 root root 0 Jan 11 00:00 access_www_2015-01-11.log</span></span>
<span class="line"><span style="color:#f6f6f4;">-rw-r--r--、1 root root 0 Jan 12 00:00 access_www_2015-01-12.log</span></span>
<span class="line"><span style="color:#f6f6f4;">-rw-r--r--、1 root root 0 Jan 13 00:00 access_www_2015-01-13.log</span></span>
<span class="line"><span style="color:#f6f6f4;">-rw-r--r--、1 root root 0 Jan 14 00:00 access_www_2015-01-14.log</span></span>
<span class="line"><span style="color:#f6f6f4;"># find /application/logs/ -type f -mtime +7 -name &quot;*.log&quot;|xargs rm –f  </span></span>
<span class="line"><span style="color:#f6f6f4;">##也可以使用-exec rm -f {} ;进行删除</span></span>
<span class="line"><span style="color:#f6f6f4;"># ll</span></span>
<span class="line"><span style="color:#f6f6f4;">-rw-r--r--、1 root root 0 Jan  7 00:00 access_www_2015-01-07.log</span></span>
<span class="line"><span style="color:#f6f6f4;">-rw-r--r--、1 root root 0 Jan  8 00:00 access_www_2015-01-08.log</span></span>
<span class="line"><span style="color:#f6f6f4;">-rw-r--r--、1 root root 0 Jan  9 00:00 access_www_2015-01-09.log</span></span>
<span class="line"><span style="color:#f6f6f4;">-rw-r--r--、1 root root 0 Jan 10 00:00 access_www_2015-01-10.log</span></span>
<span class="line"><span style="color:#f6f6f4;">-rw-r--r--、1 root root 0 Jan 11 00:00 access_www_2015-01-11.log</span></span>
<span class="line"><span style="color:#f6f6f4;">-rw-r--r--、1 root root 0 Jan 12 00:00 access_www_2015-01-12.log</span></span>
<span class="line"><span style="color:#f6f6f4;">-rw-r--r--、1 root root 0 Jan 13 00:00 access_www_2015-01-13.log</span></span>
<span class="line"><span style="color:#f6f6f4;">-rw-r--r--、1 root root 0 Jan 14 00:00 access_www_2015-01-14.log</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># pwd/application/logs</span></span>
<span class="line"><span style="color:#24292e;"># ll</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--、1 root root 0 Jan  1 00:00 access_www_2015-01-01.log</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--、1 root root 0 Jan  2 00:00 access_www_2015-01-02.log</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--、1 root root 0 Jan  3 00:00 access_www_2015-01-03.log</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--、1 root root 0 Jan  4 00:00 access_www_2015-01-04.log</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--、1 root root 0 Jan  5 00:00 access_www_2015-01-05.log</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--、1 root root 0 Jan  6 00:00 access_www_2015-01-06.log</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--、1 root root 0 Jan  7 00:00 access_www_2015-01-07.log</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--、1 root root 0 Jan  8 00:00 access_www_2015-01-08.log</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--、1 root root 0 Jan  9 00:00 access_www_2015-01-09.log</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--、1 root root 0 Jan 10 00:00 access_www_2015-01-10.log</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--、1 root root 0 Jan 11 00:00 access_www_2015-01-11.log</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--、1 root root 0 Jan 12 00:00 access_www_2015-01-12.log</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--、1 root root 0 Jan 13 00:00 access_www_2015-01-13.log</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--、1 root root 0 Jan 14 00:00 access_www_2015-01-14.log</span></span>
<span class="line"><span style="color:#24292e;"># find /application/logs/ -type f -mtime +7 -name &quot;*.log&quot;|xargs rm –f  </span></span>
<span class="line"><span style="color:#24292e;">##也可以使用-exec rm -f {} ;进行删除</span></span>
<span class="line"><span style="color:#24292e;"># ll</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--、1 root root 0 Jan  7 00:00 access_www_2015-01-07.log</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--、1 root root 0 Jan  8 00:00 access_www_2015-01-08.log</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--、1 root root 0 Jan  9 00:00 access_www_2015-01-09.log</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--、1 root root 0 Jan 10 00:00 access_www_2015-01-10.log</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--、1 root root 0 Jan 11 00:00 access_www_2015-01-11.log</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--、1 root root 0 Jan 12 00:00 access_www_2015-01-12.log</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--、1 root root 0 Jan 13 00:00 access_www_2015-01-13.log</span></span>
<span class="line"><span style="color:#24292e;">-rw-r--r--、1 root root 0 Jan 14 00:00 access_www_2015-01-14.log</span></span></code></pre></div><h3 id="_4、如果一个linux新手想要知道当前系统支持的所有命令的列表-他需要怎么做" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#4%E5%A6%82%E6%9E%9C%E4%B8%80%E4%B8%AAlinux%E6%96%B0%E6%89%8B%E6%83%B3%E8%A6%81%E7%9F%A5%E9%81%93%E5%BD%93%E5%89%8D%E7%B3%BB%E7%BB%9F%E6%94%AF%E6%8C%81%E7%9A%84%E6%89%80%E6%9C%89%E5%91%BD%E4%BB%A4%E7%9A%84%E5%88%97%E8%A1%A8%E4%BB%96%E9%9C%80%E8%A6%81%E6%80%8E%E4%B9%88%E5%81%9A" target="_blank" rel="noreferrer">4、如果一个linux新手想要知道当前系统支持的所有命令的列表，他需要怎么做？</a> <a class="header-anchor" href="#_4、如果一个linux新手想要知道当前系统支持的所有命令的列表-他需要怎么做" aria-label="Permalink to &quot;[4、如果一个linux新手想要知道当前系统支持的所有命令的列表，他需要怎么做？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新面试题，2021年面试题及答案汇总.md#4如果一个linux新手想要知道当前系统支持的所有命令的列表他需要怎么做)&quot;">​</a></h3><p><strong>答案：</strong></p><p>使用命令compgen --c，可以打印出所有支持的命令列表。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">[root@localhost ~]$ compgen -c</span></span>
<span class="line"><span style="color:#f6f6f4;">l.</span></span>
<span class="line"><span style="color:#f6f6f4;">ll</span></span>
<span class="line"><span style="color:#f6f6f4;">ls</span></span>
<span class="line"><span style="color:#f6f6f4;">which</span></span>
<span class="line"><span style="color:#f6f6f4;">if</span></span>
<span class="line"><span style="color:#f6f6f4;">then</span></span>
<span class="line"><span style="color:#f6f6f4;">else</span></span>
<span class="line"><span style="color:#f6f6f4;">elif</span></span>
<span class="line"><span style="color:#f6f6f4;">fi</span></span>
<span class="line"><span style="color:#f6f6f4;">case</span></span>
<span class="line"><span style="color:#f6f6f4;">esac</span></span>
<span class="line"><span style="color:#f6f6f4;">for</span></span>
<span class="line"><span style="color:#f6f6f4;">select</span></span>
<span class="line"><span style="color:#f6f6f4;">while</span></span>
<span class="line"><span style="color:#f6f6f4;">until</span></span>
<span class="line"><span style="color:#f6f6f4;">do</span></span>
<span class="line"><span style="color:#f6f6f4;">done</span></span>
<span class="line"><span style="color:#f6f6f4;">…</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@localhost ~]$ compgen -c</span></span>
<span class="line"><span style="color:#24292e;">l.</span></span>
<span class="line"><span style="color:#24292e;">ll</span></span>
<span class="line"><span style="color:#24292e;">ls</span></span>
<span class="line"><span style="color:#24292e;">which</span></span>
<span class="line"><span style="color:#24292e;">if</span></span>
<span class="line"><span style="color:#24292e;">then</span></span>
<span class="line"><span style="color:#24292e;">else</span></span>
<span class="line"><span style="color:#24292e;">elif</span></span>
<span class="line"><span style="color:#24292e;">fi</span></span>
<span class="line"><span style="color:#24292e;">case</span></span>
<span class="line"><span style="color:#24292e;">esac</span></span>
<span class="line"><span style="color:#24292e;">for</span></span>
<span class="line"><span style="color:#24292e;">select</span></span>
<span class="line"><span style="color:#24292e;">while</span></span>
<span class="line"><span style="color:#24292e;">until</span></span>
<span class="line"><span style="color:#24292e;">do</span></span>
<span class="line"><span style="color:#24292e;">done</span></span>
<span class="line"><span style="color:#24292e;">…</span></span></code></pre></div><h3 id="_5、du-和-df-的定义-以及区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#5du-%E5%92%8C-df-%E7%9A%84%E5%AE%9A%E4%B9%89%E4%BB%A5%E5%8F%8A%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">5、du 和 df 的定义，以及区别？</a> <a class="header-anchor" href="#_5、du-和-df-的定义-以及区别" aria-label="Permalink to &quot;[5、du 和 df 的定义，以及区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新面试题，2021年面试题及答案汇总.md#5du-和-df-的定义以及区别)&quot;">​</a></h3><p><strong>答案：</strong></p><p>du 显示目录或文件的大小</p><p><strong>1、</strong> df 显示每个&lt;文件&gt;所在的文件系统的信息，默认是显示所有文件系统。</p><p><strong>2、</strong> （文件系统分配其中的一些磁盘块用来记录它自身的一些数据，如 i 节点，磁盘分布图，间接块，超级块等。这些数据对大多数用户级的程序来说是不可见的，通常称为 Meta Data。） du 命令是用户级的程序，它不考虑 Meta Data，而 df 命令则查看文件系统的磁盘分配图并考虑 Meta Data。</p><p><strong>3、</strong> df 命令获得真正的文件系统数据，而 du 命令只查看文件系统的部分情况。</p><h3 id="_6、什么叫网站灰度发布" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#6%E4%BB%80%E4%B9%88%E5%8F%AB%E7%BD%91%E7%AB%99%E7%81%B0%E5%BA%A6%E5%8F%91%E5%B8%83" target="_blank" rel="noreferrer">6、什么叫网站灰度发布？</a> <a class="header-anchor" href="#_6、什么叫网站灰度发布" aria-label="Permalink to &quot;[6、什么叫网站灰度发布？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新面试题，2021年面试题及答案汇总.md#6什么叫网站灰度发布)&quot;">​</a></h3><p>灰度发布是指在黑与白之间，能够平滑过渡的一种发布方式</p><p>AB test就是一种灰度发布方式，让一部用户继续用A，一部分用户开始用B</p><p>如果用户对B没有什么反对意见，那么逐步扩大范围，把所有用户都迁移到B上面 来</p><p>灰度发布可以保证整体系统的稳定，在初始灰度的时候就可以发现、调整问题，以保证其影响度</p><h3 id="_7、raid-是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#7raid-%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">7、RAID 是什么?</a> <a class="header-anchor" href="#_7、raid-是什么" aria-label="Permalink to &quot;[7、RAID 是什么?](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新面试题，2021年面试题及答案汇总.md#7raid-是什么)&quot;">​</a></h3><p>RAID 全称为独立磁盘冗余阵列(Redundant Array of Independent Disks)，基本思想就是把多个相对便宜的硬盘组合起来，成为一个硬盘阵列组，使性能达到甚至超过一个价格昂贵、 容量巨大的硬盘。RAID 通常被用在服务器电脑上，使用完全相同的硬盘组成一个逻辑扇区，因此操作系统只会把它当做一个硬盘。</p><p>RAID 分为不同的等级，各个不同的等级均在数据可靠性及读写性能上做了不同的权衡。在实际应用中，可以依据自己的实际需求选择不同的 RAID 方案。</p><p>当然，因为很多公司都使用云服务，大家很难接触到 RAID 这个概念，更多的可能是普通云盘、SSD 云盘酱紫的概念。</p><h3 id="_8、clear-清屏命令。-强迫症患者使用" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#8clear-%E6%B8%85%E5%B1%8F%E5%91%BD%E4%BB%A4%E3%80%82%E5%BC%BA%E8%BF%AB%E7%97%87%E6%82%A3%E8%80%85%E4%BD%BF%E7%94%A8" target="_blank" rel="noreferrer">8、clear 清屏命令。（强迫症患者使用）</a> <a class="header-anchor" href="#_8、clear-清屏命令。-强迫症患者使用" aria-label="Permalink to &quot;[8、clear 清屏命令。（强迫症患者使用）](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新面试题，2021年面试题及答案汇总.md#8clear-清屏命令。强迫症患者使用)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">kill 命令用来中止一个进程。（要配合ps命令使用，配合pid关闭进程）</span></span>
<span class="line"><span style="color:#f6f6f4;">（ps类似于打开任务管理器，kill类似于关闭进程）</span></span>
<span class="line"><span style="color:#f6f6f4;">kill -5 进程的PID ;推荐,和平关闭进程</span></span>
<span class="line"><span style="color:#f6f6f4;">kill -9 PID ;不推荐,强制杀死进程</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">kill 命令用来中止一个进程。（要配合ps命令使用，配合pid关闭进程）</span></span>
<span class="line"><span style="color:#24292e;">（ps类似于打开任务管理器，kill类似于关闭进程）</span></span>
<span class="line"><span style="color:#24292e;">kill -5 进程的PID ;推荐,和平关闭进程</span></span>
<span class="line"><span style="color:#24292e;">kill -9 PID ;不推荐,强制杀死进程</span></span></code></pre></div><h3 id="_9、用tcpdump嗅探80端口的访问看看谁最高" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#9%E7%94%A8tcpdump%E5%97%85%E6%8E%A280%E7%AB%AF%E5%8F%A3%E7%9A%84%E8%AE%BF%E9%97%AE%E7%9C%8B%E7%9C%8B%E8%B0%81%E6%9C%80%E9%AB%98" target="_blank" rel="noreferrer">9、用tcpdump嗅探80端口的访问看看谁最高</a> <a class="header-anchor" href="#_9、用tcpdump嗅探80端口的访问看看谁最高" aria-label="Permalink to &quot;[9、用tcpdump嗅探80端口的访问看看谁最高](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新面试题，2021年面试题及答案汇总.md#9用tcpdump嗅探80端口的访问看看谁最高)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">tcpdump -i eth0 -tnn dst port 80 -c 1000 | awk -F&quot;.&quot; &#39;{print $1&quot;.&quot;$2&quot;.&quot;$3&quot;.&quot;$4}&#39;| sort | uniq -c | sort -nr |head -20</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">tcpdump -i eth0 -tnn dst port 80 -c 1000 | awk -F&quot;.&quot; &#39;{print $1&quot;.&quot;$2&quot;.&quot;$3&quot;.&quot;$4}&#39;| sort | uniq -c | sort -nr |head -20</span></span></code></pre></div><h3 id="_10、移动文件用哪个命令-改名用哪个命令" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C2021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#10%E7%A7%BB%E5%8A%A8%E6%96%87%E4%BB%B6%E7%94%A8%E5%93%AA%E4%B8%AA%E5%91%BD%E4%BB%A4%E6%94%B9%E5%90%8D%E7%94%A8%E5%93%AA%E4%B8%AA%E5%91%BD%E4%BB%A4" target="_blank" rel="noreferrer">10、移动文件用哪个命令？改名用哪个命令？</a> <a class="header-anchor" href="#_10、移动文件用哪个命令-改名用哪个命令" aria-label="Permalink to &quot;[10、移动文件用哪个命令？改名用哪个命令？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新面试题，2021年面试题及答案汇总.md#10移动文件用哪个命令改名用哪个命令)&quot;">​</a></h3><p><strong>答案：</strong></p><p>mv mv</p><h3 id="_11、linux内核主要负责哪些功能" tabindex="-1">11、Linux内核主要负责哪些功能 <a class="header-anchor" href="#_11、linux内核主要负责哪些功能" aria-label="Permalink to &quot;11、Linux内核主要负责哪些功能&quot;">​</a></h3><h3 id="_12、目录创建用什么命令-创建文件用什么命令-复制文件用什么命令" tabindex="-1">12、目录创建用什么命令？创建文件用什么命令？复制文件用什么命令？ <a class="header-anchor" href="#_12、目录创建用什么命令-创建文件用什么命令-复制文件用什么命令" aria-label="Permalink to &quot;12、目录创建用什么命令？创建文件用什么命令？复制文件用什么命令？&quot;">​</a></h3><h3 id="_13、储存用户的文件是-包括哪些信息" tabindex="-1">13、储存用户的文件是?包括哪些信息？ <a class="header-anchor" href="#_13、储存用户的文件是-包括哪些信息" aria-label="Permalink to &quot;13、储存用户的文件是?包括哪些信息？&quot;">​</a></h3><h3 id="_14、数据排序-对数字进行排序-对月份排序" tabindex="-1">14、数据排序?对数字进行排序？对月份排序？ <a class="header-anchor" href="#_14、数据排序-对数字进行排序-对月份排序" aria-label="Permalink to &quot;14、数据排序?对数字进行排序？对月份排序？&quot;">​</a></h3><h3 id="_15、查看组信息-如何创建组-删除组" tabindex="-1">15、查看组信息？如何创建组？删除组？ <a class="header-anchor" href="#_15、查看组信息-如何创建组-删除组" aria-label="Permalink to &quot;15、查看组信息？如何创建组？删除组？&quot;">​</a></h3><h3 id="_16、搜索文件用什么命令-格式是怎么样的" tabindex="-1">16、搜索文件用什么命令? 格式是怎么样的? <a class="header-anchor" href="#_16、搜索文件用什么命令-格式是怎么样的" aria-label="Permalink to &quot;16、搜索文件用什么命令? 格式是怎么样的?&quot;">​</a></h3><h3 id="_17、gnu项目的重要性是什么" tabindex="-1">17、GNU项目的重要性是什么？ <a class="header-anchor" href="#_17、gnu项目的重要性是什么" aria-label="Permalink to &quot;17、GNU项目的重要性是什么？&quot;">​</a></h3><h3 id="_18、什么是交换空间" tabindex="-1">18、什么是交换空间？ <a class="header-anchor" href="#_18、什么是交换空间" aria-label="Permalink to &quot;18、什么是交换空间？&quot;">​</a></h3><h3 id="_19、请写出下面-linux-securecrt-命令行快捷键命令的功能" tabindex="-1">19、请写出下面 linux SecureCRT 命令行快捷键命令的功能？ <a class="header-anchor" href="#_19、请写出下面-linux-securecrt-命令行快捷键命令的功能" aria-label="Permalink to &quot;19、请写出下面 linux SecureCRT 命令行快捷键命令的功能？&quot;">​</a></h3><h3 id="_20、查看http的并发请求数与其tcp连接状态" tabindex="-1">20、查看http的并发请求数与其TCP连接状态 <a class="header-anchor" href="#_20、查看http的并发请求数与其tcp连接状态" aria-label="Permalink to &quot;20、查看http的并发请求数与其TCP连接状态&quot;">​</a></h3><h3 id="_21、ifconfig命令" tabindex="-1">21、ifconfig命令 <a class="header-anchor" href="#_21、ifconfig命令" aria-label="Permalink to &quot;21、ifconfig命令&quot;">​</a></h3><h3 id="_22、bash-shell-中的hash-命令有什么作用" tabindex="-1">22、bash shell 中的hash 命令有什么作用？ <a class="header-anchor" href="#_22、bash-shell-中的hash-命令有什么作用" aria-label="Permalink to &quot;22、bash shell 中的hash 命令有什么作用？&quot;">​</a></h3><h3 id="_23、重启linux" tabindex="-1">23、重启linux <a class="header-anchor" href="#_23、重启linux" aria-label="Permalink to &quot;23、重启linux&quot;">​</a></h3><h3 id="_24、列出已经安装的包-安装软件-更新软件-卸载" tabindex="-1">24、列出已经安装的包？安装软件？更新软件？卸载? <a class="header-anchor" href="#_24、列出已经安装的包-安装软件-更新软件-卸载" aria-label="Permalink to &quot;24、列出已经安装的包？安装软件？更新软件？卸载?&quot;">​</a></h3><h3 id="_25、绝对文件路径-相对文件路径-快捷方式" tabindex="-1">25、绝对文件路径?相对文件路径？快捷方式？ <a class="header-anchor" href="#_25、绝对文件路径-相对文件路径-快捷方式" aria-label="Permalink to &quot;25、绝对文件路径?相对文件路径？快捷方式？&quot;">​</a></h3><h3 id="_26、什么是cli" tabindex="-1">26、什么是CLI？ <a class="header-anchor" href="#_26、什么是cli" aria-label="Permalink to &quot;26、什么是CLI？&quot;">​</a></h3><h3 id="_27、什么是root帐户" tabindex="-1">27、什么是root帐户 <a class="header-anchor" href="#_27、什么是root帐户" aria-label="Permalink to &quot;27、什么是root帐户&quot;">​</a></h3><h3 id="_28、什么叫cdn" tabindex="-1">28、什么叫CDN？ <a class="header-anchor" href="#_28、什么叫cdn" aria-label="Permalink to &quot;28、什么叫CDN？&quot;">​</a></h3><h3 id="_29、rm-remove-移除的意思-删除文件-或文件夹" tabindex="-1">29、rm（remove：移除的意思）删除文件，或文件夹 <a class="header-anchor" href="#_29、rm-remove-移除的意思-删除文件-或文件夹" aria-label="Permalink to &quot;29、rm（remove：移除的意思）删除文件，或文件夹&quot;">​</a></h3>`,60),r=[l];function p(t,c,i,E,d,f){return a(),n("div",null,r)}const A=s(e,[["render",p]]);export{h as __pageData,A as default};