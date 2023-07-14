import{_ as a,o as e,c as s,V as n}from"./chunks/framework.c6d8cbec.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/linux/linux-03.md","filePath":"interview/backend/linux/linux-03.md"}'),o={name:"interview/backend/linux/linux-03.md"},t=n(`<h3 id="_1、touch-touch-创建文件-创建文件" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#1touch-touch%EF%BC%9A%E5%88%9B%E5%BB%BA%E6%96%87%E4%BB%B6%E5%88%9B%E5%BB%BA%E6%96%87%E4%BB%B6" target="_blank" rel="noreferrer">1、touch （touch：创建文件）创建文件</a> <a class="header-anchor" href="#_1、touch-touch-创建文件-创建文件" aria-label="Permalink to &quot;[1、touch （touch：创建文件）创建文件](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新2021年面试题附答案解析，大汇总.md#1touch-touch：创建文件创建文件)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">touch test.txt  ;创建test.txt文件</span></span>
<span class="line"><span style="color:#f6f6f4;">touch /opt/java/test.java ;在指定目录创建test.java文件</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">touch test.txt  ;创建test.txt文件</span></span>
<span class="line"><span style="color:#24292e;">touch /opt/java/test.java ;在指定目录创建test.java文件</span></span></code></pre></div><h3 id="_2、当你需要给命令绑定一个宏或者按键的时候-应该怎么做呢" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#2%E5%BD%93%E4%BD%A0%E9%9C%80%E8%A6%81%E7%BB%99%E5%91%BD%E4%BB%A4%E7%BB%91%E5%AE%9A%E4%B8%80%E4%B8%AA%E5%AE%8F%E6%88%96%E8%80%85%E6%8C%89%E9%94%AE%E7%9A%84%E6%97%B6%E5%80%99%E5%BA%94%E8%AF%A5%E6%80%8E%E4%B9%88%E5%81%9A%E5%91%A2" target="_blank" rel="noreferrer">2、当你需要给命令绑定一个宏或者按键的时候，应该怎么做呢？</a> <a class="header-anchor" href="#_2、当你需要给命令绑定一个宏或者按键的时候-应该怎么做呢" aria-label="Permalink to &quot;[2、当你需要给命令绑定一个宏或者按键的时候，应该怎么做呢？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新2021年面试题附答案解析，大汇总.md#2当你需要给命令绑定一个宏或者按键的时候应该怎么做呢)&quot;">​</a></h3><p><strong>答案：</strong></p><p><strong>1、</strong> 可以使用bind命令，bind可以很方便地在shell中实现宏或按键的绑定。</p><p><strong>2、</strong> 在进行按键绑定的时候，我们需要先获取到绑定按键对应的字符序列。</p><p><strong>3、</strong> 比如获取F12的字符序列获取方法如下：先按下Ctrl+V,然后按下F12 .我们就可以得到F12的字符序列 <code>^[[24~。</code></p><p>接着使用bind进行绑定。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">[root@localhost ~]# bind ‘”\\e[24~&quot;:&quot;date&quot;&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@localhost ~]# bind ‘”\\e[24~&quot;:&quot;date&quot;&#39;</span></span></code></pre></div><p>注意：相同的按键在不同的终端或终端模拟器下可能会产生不同的字符序列。</p><p>【附】也可以使用showkey -a命令查看按键对应的字符序列。</p><h3 id="_3、查看各类环境变量用什么命令" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#3%E6%9F%A5%E7%9C%8B%E5%90%84%E7%B1%BB%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E7%94%A8%E4%BB%80%E4%B9%88%E5%91%BD%E4%BB%A4" target="_blank" rel="noreferrer">3、查看各类环境变量用什么命令?</a> <a class="header-anchor" href="#_3、查看各类环境变量用什么命令" aria-label="Permalink to &quot;[3、查看各类环境变量用什么命令?](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新2021年面试题附答案解析，大汇总.md#3查看各类环境变量用什么命令)&quot;">​</a></h3><p><strong>答案：</strong></p><p><strong>1、</strong> 查看所有 env</p><p><strong>2、</strong> 查看某个，如 home： env $HOME</p><h3 id="_4、linux系统中病毒怎么解决" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#4linux%E7%B3%BB%E7%BB%9F%E4%B8%AD%E7%97%85%E6%AF%92%E6%80%8E%E4%B9%88%E8%A7%A3%E5%86%B3" target="_blank" rel="noreferrer">4、Linux系统中病毒怎么解决</a> <a class="header-anchor" href="#_4、linux系统中病毒怎么解决" aria-label="Permalink to &quot;[4、Linux系统中病毒怎么解决](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新2021年面试题附答案解析，大汇总.md#4linux系统中病毒怎么解决)&quot;">​</a></h3><p>1）最简单有效的方法就是重装系统</p><p>2）要查的话就是找到病毒文件然后删除</p><p>中毒之后一般机器cpu、内存使用率会比较高</p><p>机器向外发包等异常情况，排查方法简单介绍下</p><p>top 命令找到cpu使用率最高的进程</p><p>一般病毒文件命名都比较乱，可以用 ps aux 找到病毒文件位置</p><p>rm -f ?命令删除病毒文件</p><p>检查计划任务、开机启动项和病毒文件目录有无其他可以文件等</p><p>3）由于即使删除病毒文件不排除有潜伏病毒，所以最好是把机器备份数据之后重装一下</p><h3 id="_5、如何把一个进程放到后台运行" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#5%E5%A6%82%E4%BD%95%E6%8A%8A%E4%B8%80%E4%B8%AA%E8%BF%9B%E7%A8%8B%E6%94%BE%E5%88%B0%E5%90%8E%E5%8F%B0%E8%BF%90%E8%A1%8C" target="_blank" rel="noreferrer">5、如何把一个进程放到后台运行？</a> <a class="header-anchor" href="#_5、如何把一个进程放到后台运行" aria-label="Permalink to &quot;[5、如何把一个进程放到后台运行？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新2021年面试题附答案解析，大汇总.md#5如何把一个进程放到后台运行)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">[root@iz2ze76ybn73dvwmdij06zz ~]# ./sleep.sh &amp;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@iz2ze76ybn73dvwmdij06zz ~]# ./sleep.sh &amp;</span></span></code></pre></div><p>此时，进程并不能被Ctrl + c 中断。</p><h3 id="_6、你对现在运维工程师的理解和以及对其工作的认识" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#6%E4%BD%A0%E5%AF%B9%E7%8E%B0%E5%9C%A8%E8%BF%90%E7%BB%B4%E5%B7%A5%E7%A8%8B%E5%B8%88%E7%9A%84%E7%90%86%E8%A7%A3%E5%92%8C%E4%BB%A5%E5%8F%8A%E5%AF%B9%E5%85%B6%E5%B7%A5%E4%BD%9C%E7%9A%84%E8%AE%A4%E8%AF%86" target="_blank" rel="noreferrer">6、你对现在运维工程师的理解和以及对其工作的认识</a> <a class="header-anchor" href="#_6、你对现在运维工程师的理解和以及对其工作的认识" aria-label="Permalink to &quot;[6、你对现在运维工程师的理解和以及对其工作的认识](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新2021年面试题附答案解析，大汇总.md#6你对现在运维工程师的理解和以及对其工作的认识)&quot;">​</a></h3><p>运维工程师在公司当中责任重大，需要保证时刻为公司及客户提供最高、最快、最稳定、最安全的服务</p><p>运维工程师的一个小小的失误，很有可能会对公司及客户造成重大损失</p><p>因此运维工程师的工作需要严谨及富有创新精神</p><h3 id="_7、如何优化-linux系统-可以不说太具体" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#7%E5%A6%82%E4%BD%95%E4%BC%98%E5%8C%96-linux%E7%B3%BB%E7%BB%9F%E5%8F%AF%E4%BB%A5%E4%B8%8D%E8%AF%B4%E5%A4%AA%E5%85%B7%E4%BD%93" target="_blank" rel="noreferrer">7、如何优化 Linux系统（可以不说太具体）？</a> <a class="header-anchor" href="#_7、如何优化-linux系统-可以不说太具体" aria-label="Permalink to &quot;[7、如何优化 Linux系统（可以不说太具体）？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新2021年面试题附答案解析，大汇总.md#7如何优化-linux系统可以不说太具体)&quot;">​</a></h3><p><strong>1、</strong> 不用root，添加普通用户，通过sudo授权管理</p><p><strong>2、</strong> 更改默认的远程连接SSH服务端口及禁止root用户远程连接</p><p><strong>3、</strong> 定时自动更新服务器时间</p><p><strong>4、</strong> 配置国内yum源</p><p><strong>5、</strong> 关闭selinux及iptables（iptables工作场景如果有外网IP一定要打开，高并发除外）</p><p><strong>6、</strong> 调整文件描述符的数量</p><p><strong>7、</strong> 精简开机启动服务（crond rsyslog network sshd）</p><p><strong>8、</strong> 内核参数优化（/etc/sysctl.conf）</p><p><strong>9、</strong> 更改字符集，支持中文，但建议还是用英文字符集，防止乱码</p><p><strong>10、</strong> 锁定关键系统文件</p><p><strong>11、</strong> 清空/etc/issue，去除系统及内核版本登录前的屏幕显示</p><h3 id="_8、linux-下命令有哪几种可使用的通配符-分别代表什么含义" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#8linux-%E4%B8%8B%E5%91%BD%E4%BB%A4%E6%9C%89%E5%93%AA%E5%87%A0%E7%A7%8D%E5%8F%AF%E4%BD%BF%E7%94%A8%E7%9A%84%E9%80%9A%E9%85%8D%E7%AC%A6%E5%88%86%E5%88%AB%E4%BB%A3%E8%A1%A8%E4%BB%80%E4%B9%88%E5%90%AB%E4%B9%89" target="_blank" rel="noreferrer">8、Linux 下命令有哪几种可使用的通配符？分别代表什么含义?</a> <a class="header-anchor" href="#_8、linux-下命令有哪几种可使用的通配符-分别代表什么含义" aria-label="Permalink to &quot;[8、Linux 下命令有哪几种可使用的通配符？分别代表什么含义?](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新2021年面试题附答案解析，大汇总.md#8linux-下命令有哪几种可使用的通配符分别代表什么含义)&quot;">​</a></h3><p><strong>答案：</strong></p><p>“？”可替代单个字符。</p><p>“*”可替代任意多个字符。</p><p>方括号“[charset]”可替代 charset 集中的任何单个字符，如[a-z]，[abABC]</p><h3 id="_9、写一个脚本-实现判断192-168-1-0-24网络里-当前在线的ip有哪些-能ping通则认为在线" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#9%E5%86%99%E4%B8%80%E4%B8%AA%E8%84%9A%E6%9C%AC%E5%AE%9E%E7%8E%B0%E5%88%A4%E6%96%AD19216810/24%E7%BD%91%E7%BB%9C%E9%87%8C%E5%BD%93%E5%89%8D%E5%9C%A8%E7%BA%BF%E7%9A%84ip%E6%9C%89%E5%93%AA%E4%BA%9B%E8%83%BDping%E9%80%9A%E5%88%99%E8%AE%A4%E4%B8%BA%E5%9C%A8%E7%BA%BF" target="_blank" rel="noreferrer">9、写一个脚本，实现判断192.168.1.0/24网络里，当前在线的IP有哪些，能ping通则认为在线</a> <a class="header-anchor" href="#_9、写一个脚本-实现判断192-168-1-0-24网络里-当前在线的ip有哪些-能ping通则认为在线" aria-label="Permalink to &quot;[9、写一个脚本，实现判断192.168.1.0/24网络里，当前在线的IP有哪些，能ping通则认为在线](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新2021年面试题附答案解析，大汇总.md#9写一个脚本实现判断19216810/24网络里当前在线的ip有哪些能ping通则认为在线)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">#!/bin/bash</span></span>
<span class="line"><span style="color:#f6f6f4;">for ip in \`seq 1 255\`</span></span>
<span class="line"><span style="color:#f6f6f4;">do</span></span>
<span class="line"><span style="color:#f6f6f4;">{</span></span>
<span class="line"><span style="color:#f6f6f4;">ping -c 1 192.168.1.$ip &gt; /dev/null 2&gt;&amp;1</span></span>
<span class="line"><span style="color:#f6f6f4;">if [ $? -eq 0 ]; then</span></span>
<span class="line"><span style="color:#f6f6f4;">echo 192.168.1.$ip UP</span></span>
<span class="line"><span style="color:#f6f6f4;">else</span></span>
<span class="line"><span style="color:#f6f6f4;">echo 192.168.1.$ip DOWN</span></span>
<span class="line"><span style="color:#f6f6f4;">fi</span></span>
<span class="line"><span style="color:#f6f6f4;">}&amp;</span></span>
<span class="line"><span style="color:#f6f6f4;">done</span></span>
<span class="line"><span style="color:#f6f6f4;">wait</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#!/bin/bash</span></span>
<span class="line"><span style="color:#24292e;">for ip in \`seq 1 255\`</span></span>
<span class="line"><span style="color:#24292e;">do</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">ping -c 1 192.168.1.$ip &gt; /dev/null 2&gt;&amp;1</span></span>
<span class="line"><span style="color:#24292e;">if [ $? -eq 0 ]; then</span></span>
<span class="line"><span style="color:#24292e;">echo 192.168.1.$ip UP</span></span>
<span class="line"><span style="color:#24292e;">else</span></span>
<span class="line"><span style="color:#24292e;">echo 192.168.1.$ip DOWN</span></span>
<span class="line"><span style="color:#24292e;">fi</span></span>
<span class="line"><span style="color:#24292e;">}&amp;</span></span>
<span class="line"><span style="color:#24292e;">done</span></span>
<span class="line"><span style="color:#24292e;">wait</span></span></code></pre></div><h3 id="_10、绝对路径用什么符号表示-当前目录、上层目录用什么表示-主目录用什么表示-切换目录用什么命令" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90%EF%BC%8C%E5%A4%A7%E6%B1%87%E6%80%BB.md#10%E7%BB%9D%E5%AF%B9%E8%B7%AF%E5%BE%84%E7%94%A8%E4%BB%80%E4%B9%88%E7%AC%A6%E5%8F%B7%E8%A1%A8%E7%A4%BA%E5%BD%93%E5%89%8D%E7%9B%AE%E5%BD%95%E4%B8%8A%E5%B1%82%E7%9B%AE%E5%BD%95%E7%94%A8%E4%BB%80%E4%B9%88%E8%A1%A8%E7%A4%BA%E4%B8%BB%E7%9B%AE%E5%BD%95%E7%94%A8%E4%BB%80%E4%B9%88%E8%A1%A8%E7%A4%BA-%E5%88%87%E6%8D%A2%E7%9B%AE%E5%BD%95%E7%94%A8%E4%BB%80%E4%B9%88%E5%91%BD%E4%BB%A4" target="_blank" rel="noreferrer">10、绝对路径用什么符号表示？当前目录、上层目录用什么表示？主目录用什么表示? 切换目录用什么命令？</a> <a class="header-anchor" href="#_10、绝对路径用什么符号表示-当前目录、上层目录用什么表示-主目录用什么表示-切换目录用什么命令" aria-label="Permalink to &quot;[10、绝对路径用什么符号表示？当前目录、上层目录用什么表示？主目录用什么表示? 切换目录用什么命令？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Linux/Linux最新2021年面试题附答案解析，大汇总.md#10绝对路径用什么符号表示当前目录上层目录用什么表示主目录用什么表示-切换目录用什么命令)&quot;">​</a></h3><p><strong>答案：</strong></p><p><strong>1、</strong> 绝对路径： 如/etc/init.d</p><p><strong>2、</strong> 当前目录和上层目录： ./ ?../</p><p><strong>3、</strong> 主目录： ~/</p><p><strong>4、</strong> 切换目录： cd</p><h3 id="_11、请问当用户反馈网站访问慢-你会如何处理" tabindex="-1">11、请问当用户反馈网站访问慢，你会如何处理？ <a class="header-anchor" href="#_11、请问当用户反馈网站访问慢-你会如何处理" aria-label="Permalink to &quot;11、请问当用户反馈网站访问慢，你会如何处理？&quot;">​</a></h3><h3 id="_12、怎么对命令进行取别名" tabindex="-1">12、怎么对命令进行取别名？ <a class="header-anchor" href="#_12、怎么对命令进行取别名" aria-label="Permalink to &quot;12、怎么对命令进行取别名？&quot;">​</a></h3><h3 id="_13、ps-process-status-进程状态-类似于windows的任务管理器" tabindex="-1">13、ps （process status：进程状态，类似于windows的任务管理器） <a class="header-anchor" href="#_13、ps-process-status-进程状态-类似于windows的任务管理器" aria-label="Permalink to &quot;13、ps （process status：进程状态，类似于windows的任务管理器）&quot;">​</a></h3><h3 id="_14、讲述一下lvs三种模式的工作过程" tabindex="-1">14、讲述一下LVS三种模式的工作过程？ <a class="header-anchor" href="#_14、讲述一下lvs三种模式的工作过程" aria-label="Permalink to &quot;14、讲述一下LVS三种模式的工作过程？&quot;">​</a></h3><h3 id="_15、如何重置mysql-root密码" tabindex="-1">15、如何重置MySQL root密码？ <a class="header-anchor" href="#_15、如何重置mysql-root密码" aria-label="Permalink to &quot;15、如何重置MySQL root密码？&quot;">​</a></h3><h3 id="_16、简单-linux-文件系统" tabindex="-1">16、简单 Linux 文件系统？ <a class="header-anchor" href="#_16、简单-linux-文件系统" aria-label="Permalink to &quot;16、简单 Linux 文件系统？&quot;">​</a></h3><h3 id="_17、linux广泛使用的归档数据方法" tabindex="-1">17、Linux广泛使用的归档数据方法? <a class="header-anchor" href="#_17、linux广泛使用的归档数据方法" aria-label="Permalink to &quot;17、Linux广泛使用的归档数据方法?&quot;">​</a></h3><h3 id="_18、如何选择-linux-操作系统版本" tabindex="-1">18、如何选择 Linux 操作系统版本? <a class="header-anchor" href="#_18、如何选择-linux-操作系统版本" aria-label="Permalink to &quot;18、如何选择 Linux 操作系统版本?&quot;">​</a></h3><h3 id="_19、grep-grep-正则表达式-正则表达式-用于字符串的搜索工作-模糊查询-。不懂可以先过" tabindex="-1">19、grep （grep ：正则表达式）正则表达式，用于字符串的搜索工作(模糊查询)。不懂可以先过 <a class="header-anchor" href="#_19、grep-grep-正则表达式-正则表达式-用于字符串的搜索工作-模糊查询-。不懂可以先过" aria-label="Permalink to &quot;19、grep （grep ：正则表达式）正则表达式，用于字符串的搜索工作(模糊查询)。不懂可以先过&quot;">​</a></h3><h3 id="_20、更改为北京时间命令" tabindex="-1">20、更改为北京时间命令 <a class="header-anchor" href="#_20、更改为北京时间命令" aria-label="Permalink to &quot;20、更改为北京时间命令&quot;">​</a></h3><h3 id="_21、在工作中-运维人员经常需要跟运营人员打交道-请问运营人员是做什么工作的" tabindex="-1">21、在工作中，运维人员经常需要跟运营人员打交道，请问运营人员是做什么工作的？ <a class="header-anchor" href="#_21、在工作中-运维人员经常需要跟运营人员打交道-请问运营人员是做什么工作的" aria-label="Permalink to &quot;21、在工作中，运维人员经常需要跟运营人员打交道，请问运营人员是做什么工作的？&quot;">​</a></h3><h3 id="_22、rabbitmq是什么东西" tabindex="-1">22、RabbitMQ是什么东西？ <a class="header-anchor" href="#_22、rabbitmq是什么东西" aria-label="Permalink to &quot;22、RabbitMQ是什么东西？&quot;">​</a></h3><h3 id="_23、什么是硬链接和软链接" tabindex="-1">23、什么是硬链接和软链接？ <a class="header-anchor" href="#_23、什么是硬链接和软链接" aria-label="Permalink to &quot;23、什么是硬链接和软链接？&quot;">​</a></h3><h3 id="_24、随意写文件命令-怎么向屏幕输出带空格的字符串-比如-hello-world" tabindex="-1">24、随意写文件命令？怎么向屏幕输出带空格的字符串，比如”hello world”? <a class="header-anchor" href="#_24、随意写文件命令-怎么向屏幕输出带空格的字符串-比如-hello-world" aria-label="Permalink to &quot;24、随意写文件命令？怎么向屏幕输出带空格的字符串，比如”hello world”?&quot;">​</a></h3><h3 id="_25、查找命令的可执行文件是去哪查找的-怎么对其进行设置及添加" tabindex="-1">25、查找命令的可执行文件是去哪查找的? 怎么对其进行设置及添加? <a class="header-anchor" href="#_25、查找命令的可执行文件是去哪查找的-怎么对其进行设置及添加" aria-label="Permalink to &quot;25、查找命令的可执行文件是去哪查找的? 怎么对其进行设置及添加?&quot;">​</a></h3><h3 id="_26、讲一下keepalived的工作原理" tabindex="-1">26、讲一下Keepalived的工作原理？ <a class="header-anchor" href="#_26、讲一下keepalived的工作原理" aria-label="Permalink to &quot;26、讲一下Keepalived的工作原理？&quot;">​</a></h3><h3 id="_27、如何压缩文件-如何解压文件" tabindex="-1">27、如何压缩文件？如何解压文件? <a class="header-anchor" href="#_27、如何压缩文件-如何解压文件" aria-label="Permalink to &quot;27、如何压缩文件？如何解压文件?&quot;">​</a></h3><h3 id="_28、more-more-更多的意思-分页查看文件命令-不能快速定位到最后一页" tabindex="-1">28、more （more：更多的意思）分页查看文件命令（不能快速定位到最后一页） <a class="header-anchor" href="#_28、more-more-更多的意思-分页查看文件命令-不能快速定位到最后一页" aria-label="Permalink to &quot;28、more （more：更多的意思）分页查看文件命令（不能快速定位到最后一页）&quot;">​</a></h3><h3 id="_29、什么是链接文件" tabindex="-1">29、什么是链接文件？ <a class="header-anchor" href="#_29、什么是链接文件" aria-label="Permalink to &quot;29、什么是链接文件？&quot;">​</a></h3>`,76),l=[t];function r(E,i,p,c,u,B){return e(),s("div",null,l)}const A=a(o,[["render",r]]);export{d as __pageData,A as default};