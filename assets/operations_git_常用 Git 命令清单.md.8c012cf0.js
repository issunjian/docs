import{_ as s,o as n,c as a,V as l}from"./chunks/framework.c6d8cbec.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"operations/git/常用 Git 命令清单.md","filePath":"operations/git/常用 Git 命令清单.md"}'),p={name:"operations/git/常用 Git 命令清单.md"},o=l(`<h2 id="常用-git-命令清单" tabindex="-1">常用 Git 命令清单 <a class="header-anchor" href="#常用-git-命令清单" aria-label="Permalink to &quot;常用 Git 命令清单&quot;">​</a></h2><p>每天使用 Git ，但是很多命令记不住。 一般来说，日常使用只要记住下图6个命令，就可以了。但是熟练使用，恐怕要记住大几十个命令。</p><p><img src="http://rcode.rbtree.cn/git_img/git1.png" alt="img"></p><p>下面是整理的常用 Git 命令清单。几个专用名词的译名如下。</p><blockquote><ul><li>Workspace：工作区</li><li>Index / Stage：暂存区</li><li>Repository：仓库区（或本地仓库）</li><li>Remote：远程仓库</li></ul></blockquote><h3 id="git参考教程" tabindex="-1">Git参考教程 <a class="header-anchor" href="#git参考教程" aria-label="Permalink to &quot;Git参考教程&quot;">​</a></h3><p><a href="https://www.runoob.com/git/git-basic-operations.html" target="_blank" rel="noreferrer">菜鸟Git教程</a></p><p>Git官方文档 <a href="https://git-scm.com/book/zh/v2" target="_blank" rel="noreferrer">https://git-scm.com/book/zh/v2</a></p><h3 id="一、新建代码库" tabindex="-1">一、新建代码库 <a class="header-anchor" href="#一、新建代码库" aria-label="Permalink to &quot;一、新建代码库&quot;">​</a></h3><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;"># 在当前目录新建一个Git代码库</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git init</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 新建一个目录，将其初始化为Git代码库</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git init [project-name]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 下载一个项目和它的整个代码历史</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git clone [url]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 在当前目录新建一个Git代码库</span></span>
<span class="line"><span style="color:#24292e;">$ git init</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 新建一个目录，将其初始化为Git代码库</span></span>
<span class="line"><span style="color:#24292e;">$ git init [project-name]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 下载一个项目和它的整个代码历史</span></span>
<span class="line"><span style="color:#24292e;">$ git clone [url]</span></span></code></pre></div></blockquote><h3 id="二、配置" tabindex="-1">二、配置 <a class="header-anchor" href="#二、配置" aria-label="Permalink to &quot;二、配置&quot;">​</a></h3><p>Git的设置文件为<code>.gitconfig</code>，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。</p><blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;"># 显示当前的Git配置</span></span>
<span class="line"><span style="color:#62E884;">$</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">config</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">--list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># 编辑Git配置文件</span></span>
<span class="line"><span style="color:#62E884;">$</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">config</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-e</span><span style="color:#F6F6F4;"> [--global]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># 设置提交代码时的用户信息</span></span>
<span class="line"><span style="color:#62E884;">$</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">config</span><span style="color:#F6F6F4;"> [--global] user.name </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">[name]</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#62E884;">$</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">config</span><span style="color:#F6F6F4;"> [--global] user.email </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">[email address]</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># 设置用户名，可以自行设置</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">config</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">--global</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">user.name</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">itcast</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># 设置用户的邮箱，建议配置工作邮箱</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">config</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">--global</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">user.email</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">hello@itcast.cn</span><span style="color:#DEE492;">&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 显示当前的Git配置</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 编辑Git配置文件</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> [--global]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置提交代码时的用户信息</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> [--global] user.name </span><span style="color:#032F62;">&quot;[name]&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> [--global] user.email </span><span style="color:#032F62;">&quot;[email address]&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置用户名，可以自行设置</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user.name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;itcast&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置用户的邮箱，建议配置工作邮箱</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user.email</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;hello@itcast.cn&quot;</span></span></code></pre></div></blockquote><h3 id="三、增加-删除文件" tabindex="-1">三、增加/删除文件 <a class="header-anchor" href="#三、增加-删除文件" aria-label="Permalink to &quot;三、增加/删除文件&quot;">​</a></h3><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;"># 添加指定文件到暂存区</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git add [file1] [file2] ...</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 添加指定目录到暂存区，包括子目录</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git add [dir]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 添加当前目录的所有文件到暂存区</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git add .</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 添加每个变化前，都会要求确认</span></span>
<span class="line"><span style="color:#f6f6f4;"># 对于同一个文件的多处变化，可以实现分次提交</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git add -p</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 删除工作区文件，并且将这次删除放入暂存区</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git rm [file1] [file2] ...</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 停止追踪指定文件，但该文件会保留在工作区</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git rm --cached [file]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 改名文件，并且将这个改名放入暂存区</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git mv [file-original] [file-renamed]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 添加指定文件到暂存区</span></span>
<span class="line"><span style="color:#24292e;">$ git add [file1] [file2] ...</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 添加指定目录到暂存区，包括子目录</span></span>
<span class="line"><span style="color:#24292e;">$ git add [dir]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 添加当前目录的所有文件到暂存区</span></span>
<span class="line"><span style="color:#24292e;">$ git add .</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 添加每个变化前，都会要求确认</span></span>
<span class="line"><span style="color:#24292e;"># 对于同一个文件的多处变化，可以实现分次提交</span></span>
<span class="line"><span style="color:#24292e;">$ git add -p</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 删除工作区文件，并且将这次删除放入暂存区</span></span>
<span class="line"><span style="color:#24292e;">$ git rm [file1] [file2] ...</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 停止追踪指定文件，但该文件会保留在工作区</span></span>
<span class="line"><span style="color:#24292e;">$ git rm --cached [file]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 改名文件，并且将这个改名放入暂存区</span></span>
<span class="line"><span style="color:#24292e;">$ git mv [file-original] [file-renamed]</span></span></code></pre></div></blockquote><h3 id="四、代码提交" tabindex="-1">四、代码提交 <a class="header-anchor" href="#四、代码提交" aria-label="Permalink to &quot;四、代码提交&quot;">​</a></h3><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft has-diff vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;"># 提交暂存区到仓库区</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git commit -m [message]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 提交暂存区的指定文件到仓库区</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git commit [file1] [file2] ... -m [message]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 提交工作区自上次commit之后的变化，直接到仓库区</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git commit -a</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 提交时显示所有diff信息</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git commit -v</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 使用一次新的commit，替代上一次提交</span></span>
<span class="line"><span style="color:#f6f6f4;"># 如果代码没有任何新变化，则用来改写上一次commit的提交信息</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git commit --amend -m [message]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 重做上一次commit，并包括指定文件的新变化</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git commit --amend [file1] [file2] ...</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;"># 提交暂存区到仓库区</span></span>
<span class="line"><span style="color:#24292e;">$ git commit -m [message]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 提交暂存区的指定文件到仓库区</span></span>
<span class="line"><span style="color:#24292e;">$ git commit [file1] [file2] ... -m [message]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 提交工作区自上次commit之后的变化，直接到仓库区</span></span>
<span class="line"><span style="color:#24292e;">$ git commit -a</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 提交时显示所有diff信息</span></span>
<span class="line"><span style="color:#24292e;">$ git commit -v</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 使用一次新的commit，替代上一次提交</span></span>
<span class="line"><span style="color:#24292e;"># 如果代码没有任何新变化，则用来改写上一次commit的提交信息</span></span>
<span class="line"><span style="color:#24292e;">$ git commit --amend -m [message]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 重做上一次commit，并包括指定文件的新变化</span></span>
<span class="line"><span style="color:#24292e;">$ git commit --amend [file1] [file2] ...</span></span></code></pre></div></blockquote><h3 id="五、分支" tabindex="-1">五、分支 <a class="header-anchor" href="#五、分支" aria-label="Permalink to &quot;五、分支&quot;">​</a></h3><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;"># 列出所有本地分支</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git branch</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 列出所有远程分支</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git branch -r</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 列出所有本地分支和远程分支</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git branch -a</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 新建一个分支，但依然停留在当前分支</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git branch [branch-name]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 新建一个分支，并切换到该分支</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git checkout -b [branch]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 新建一个分支，指向指定commit</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git branch [branch] [commit]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 新建一个分支，与指定的远程分支建立追踪关系</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git branch --track [branch] [remote-branch]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 切换到指定分支，并更新工作区</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git checkout [branch-name]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 切换到上一个分支</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git checkout -</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 建立追踪关系，在现有分支与指定的远程分支之间</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git branch --set-upstream [branch] [remote-branch]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 合并指定分支到当前分支</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git merge [branch]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 选择一个commit，合并进当前分支</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git cherry-pick [commit]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 删除分支</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git branch -d [branch-name]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 删除远程分支</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git push origin --delete [branch-name]</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git branch -dr [remote/branch]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 列出所有本地分支</span></span>
<span class="line"><span style="color:#24292e;">$ git branch</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 列出所有远程分支</span></span>
<span class="line"><span style="color:#24292e;">$ git branch -r</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 列出所有本地分支和远程分支</span></span>
<span class="line"><span style="color:#24292e;">$ git branch -a</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 新建一个分支，但依然停留在当前分支</span></span>
<span class="line"><span style="color:#24292e;">$ git branch [branch-name]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 新建一个分支，并切换到该分支</span></span>
<span class="line"><span style="color:#24292e;">$ git checkout -b [branch]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 新建一个分支，指向指定commit</span></span>
<span class="line"><span style="color:#24292e;">$ git branch [branch] [commit]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 新建一个分支，与指定的远程分支建立追踪关系</span></span>
<span class="line"><span style="color:#24292e;">$ git branch --track [branch] [remote-branch]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 切换到指定分支，并更新工作区</span></span>
<span class="line"><span style="color:#24292e;">$ git checkout [branch-name]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 切换到上一个分支</span></span>
<span class="line"><span style="color:#24292e;">$ git checkout -</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 建立追踪关系，在现有分支与指定的远程分支之间</span></span>
<span class="line"><span style="color:#24292e;">$ git branch --set-upstream [branch] [remote-branch]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 合并指定分支到当前分支</span></span>
<span class="line"><span style="color:#24292e;">$ git merge [branch]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 选择一个commit，合并进当前分支</span></span>
<span class="line"><span style="color:#24292e;">$ git cherry-pick [commit]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 删除分支</span></span>
<span class="line"><span style="color:#24292e;">$ git branch -d [branch-name]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 删除远程分支</span></span>
<span class="line"><span style="color:#24292e;">$ git push origin --delete [branch-name]</span></span>
<span class="line"><span style="color:#24292e;">$ git branch -dr [remote/branch]</span></span></code></pre></div></blockquote><h3 id="六、标签" tabindex="-1">六、标签 <a class="header-anchor" href="#六、标签" aria-label="Permalink to &quot;六、标签&quot;">​</a></h3><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;"># 列出所有tag</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git tag</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 新建一个tag在当前commit</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git tag [tag]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 新建一个tag在指定commit</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git tag [tag] [commit]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 删除本地tag</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git tag -d [tag]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 删除远程tag</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git push origin :refs/tags/[tagName]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 查看tag信息</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git show [tag]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 提交指定tag</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git push [remote] [tag]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 提交所有tag</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git push [remote] --tags</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 新建一个分支，指向某个tag</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git checkout -b [branch] [tag]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 列出所有tag</span></span>
<span class="line"><span style="color:#24292e;">$ git tag</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 新建一个tag在当前commit</span></span>
<span class="line"><span style="color:#24292e;">$ git tag [tag]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 新建一个tag在指定commit</span></span>
<span class="line"><span style="color:#24292e;">$ git tag [tag] [commit]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 删除本地tag</span></span>
<span class="line"><span style="color:#24292e;">$ git tag -d [tag]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 删除远程tag</span></span>
<span class="line"><span style="color:#24292e;">$ git push origin :refs/tags/[tagName]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 查看tag信息</span></span>
<span class="line"><span style="color:#24292e;">$ git show [tag]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 提交指定tag</span></span>
<span class="line"><span style="color:#24292e;">$ git push [remote] [tag]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 提交所有tag</span></span>
<span class="line"><span style="color:#24292e;">$ git push [remote] --tags</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 新建一个分支，指向某个tag</span></span>
<span class="line"><span style="color:#24292e;">$ git checkout -b [branch] [tag]</span></span></code></pre></div></blockquote><h3 id="七、查看信息" tabindex="-1">七、查看信息 <a class="header-anchor" href="#七、查看信息" aria-label="Permalink to &quot;七、查看信息&quot;">​</a></h3><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft has-diff vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;"># 显示有变更的文件</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git status</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 显示当前分支的版本历史</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git log</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 显示commit历史，以及每次commit发生变更的文件</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git log --stat</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 搜索提交历史，根据关键词</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git log -S [keyword]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 显示某个commit之后的所有变动，每个commit占据一行</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git log [tag] HEAD --pretty=format:%s</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 显示某个commit之后的所有变动，其&quot;提交说明&quot;必须符合搜索条件</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git log [tag] HEAD --grep feature</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 显示某个文件的版本历史，包括文件改名</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git log --follow [file]</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git whatchanged [file]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 显示指定文件相关的每一次diff</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git log -p [file]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 显示过去5次提交</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git log -5 --pretty --oneline</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 显示所有提交过的用户，按提交次数排序</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git shortlog -sn</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 显示指定文件是什么人在什么时间修改过</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git blame [file]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 显示暂存区和工作区的差异</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git diff</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 显示暂存区和上一个commit的差异</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git diff --cached [file]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 显示工作区与当前分支最新commit之间的差异</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git diff HEAD</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 显示两次提交之间的差异</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git diff [first-branch]...[second-branch]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 显示今天你写了多少行代码</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git diff --shortstat &quot;@{0 day ago}&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 显示某次提交的元数据和内容变化</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git show [commit]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 显示某次提交发生变化的文件</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git show --name-only [commit]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 显示某次提交时，某个文件的内容</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git show [commit]:[filename]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 显示当前分支的最近几次提交</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git reflog</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;"># 显示有变更的文件</span></span>
<span class="line"><span style="color:#24292e;">$ git status</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 显示当前分支的版本历史</span></span>
<span class="line"><span style="color:#24292e;">$ git log</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 显示commit历史，以及每次commit发生变更的文件</span></span>
<span class="line"><span style="color:#24292e;">$ git log --stat</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 搜索提交历史，根据关键词</span></span>
<span class="line"><span style="color:#24292e;">$ git log -S [keyword]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 显示某个commit之后的所有变动，每个commit占据一行</span></span>
<span class="line"><span style="color:#24292e;">$ git log [tag] HEAD --pretty=format:%s</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 显示某个commit之后的所有变动，其&quot;提交说明&quot;必须符合搜索条件</span></span>
<span class="line"><span style="color:#24292e;">$ git log [tag] HEAD --grep feature</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 显示某个文件的版本历史，包括文件改名</span></span>
<span class="line"><span style="color:#24292e;">$ git log --follow [file]</span></span>
<span class="line"><span style="color:#24292e;">$ git whatchanged [file]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 显示指定文件相关的每一次diff</span></span>
<span class="line"><span style="color:#24292e;">$ git log -p [file]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 显示过去5次提交</span></span>
<span class="line"><span style="color:#24292e;">$ git log -5 --pretty --oneline</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 显示所有提交过的用户，按提交次数排序</span></span>
<span class="line"><span style="color:#24292e;">$ git shortlog -sn</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 显示指定文件是什么人在什么时间修改过</span></span>
<span class="line"><span style="color:#24292e;">$ git blame [file]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 显示暂存区和工作区的差异</span></span>
<span class="line"><span style="color:#24292e;">$ git diff</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 显示暂存区和上一个commit的差异</span></span>
<span class="line"><span style="color:#24292e;">$ git diff --cached [file]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 显示工作区与当前分支最新commit之间的差异</span></span>
<span class="line"><span style="color:#24292e;">$ git diff HEAD</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 显示两次提交之间的差异</span></span>
<span class="line"><span style="color:#24292e;">$ git diff [first-branch]...[second-branch]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 显示今天你写了多少行代码</span></span>
<span class="line"><span style="color:#24292e;">$ git diff --shortstat &quot;@{0 day ago}&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 显示某次提交的元数据和内容变化</span></span>
<span class="line"><span style="color:#24292e;">$ git show [commit]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 显示某次提交发生变化的文件</span></span>
<span class="line"><span style="color:#24292e;">$ git show --name-only [commit]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 显示某次提交时，某个文件的内容</span></span>
<span class="line"><span style="color:#24292e;">$ git show [commit]:[filename]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 显示当前分支的最近几次提交</span></span>
<span class="line"><span style="color:#24292e;">$ git reflog</span></span></code></pre></div></blockquote><h3 id="八、远程同步" tabindex="-1">八、远程同步 <a class="header-anchor" href="#八、远程同步" aria-label="Permalink to &quot;八、远程同步&quot;">​</a></h3><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;"># 下载远程仓库的所有变动</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git fetch [remote]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 显示所有远程仓库</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git remote -v</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 显示某个远程仓库的信息</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git remote show [remote]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 增加一个新的远程仓库，并命名</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git remote add [shortname] [url]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 取回远程仓库的变化，并与本地分支合并</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git pull [remote] [branch]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 上传本地指定分支到远程仓库</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git push [remote] [branch]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 强行推送当前分支到远程仓库，即使有冲突</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git push [remote] --force</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 推送所有分支到远程仓库</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git push [remote] --all</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 下载远程仓库的所有变动</span></span>
<span class="line"><span style="color:#24292e;">$ git fetch [remote]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 显示所有远程仓库</span></span>
<span class="line"><span style="color:#24292e;">$ git remote -v</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 显示某个远程仓库的信息</span></span>
<span class="line"><span style="color:#24292e;">$ git remote show [remote]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 增加一个新的远程仓库，并命名</span></span>
<span class="line"><span style="color:#24292e;">$ git remote add [shortname] [url]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 取回远程仓库的变化，并与本地分支合并</span></span>
<span class="line"><span style="color:#24292e;">$ git pull [remote] [branch]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 上传本地指定分支到远程仓库</span></span>
<span class="line"><span style="color:#24292e;">$ git push [remote] [branch]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 强行推送当前分支到远程仓库，即使有冲突</span></span>
<span class="line"><span style="color:#24292e;">$ git push [remote] --force</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 推送所有分支到远程仓库</span></span>
<span class="line"><span style="color:#24292e;">$ git push [remote] --all</span></span></code></pre></div></blockquote><h3 id="九、撤销" tabindex="-1">九、撤销 <a class="header-anchor" href="#九、撤销" aria-label="Permalink to &quot;九、撤销&quot;">​</a></h3><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;"># 恢复暂存区的指定文件到工作区</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git checkout [file]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 恢复某个commit的指定文件到暂存区和工作区</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git checkout [commit] [file]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 恢复暂存区的所有文件到工作区</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git checkout .</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git reset [file]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 重置暂存区与工作区，与上一次commit保持一致</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git reset --hard</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git reset [commit]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git reset --hard [commit]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 重置当前HEAD为指定commit，但保持暂存区和工作区不变</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git reset --keep [commit]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 新建一个commit，用来撤销指定commit</span></span>
<span class="line"><span style="color:#f6f6f4;"># 后者的所有变化都将被前者抵消，并且应用到当前分支</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git revert [commit]</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"># 暂时将未提交的变化移除，稍后再移入</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git stash</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git stash pop</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 恢复暂存区的指定文件到工作区</span></span>
<span class="line"><span style="color:#24292e;">$ git checkout [file]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 恢复某个commit的指定文件到暂存区和工作区</span></span>
<span class="line"><span style="color:#24292e;">$ git checkout [commit] [file]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 恢复暂存区的所有文件到工作区</span></span>
<span class="line"><span style="color:#24292e;">$ git checkout .</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变</span></span>
<span class="line"><span style="color:#24292e;">$ git reset [file]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 重置暂存区与工作区，与上一次commit保持一致</span></span>
<span class="line"><span style="color:#24292e;">$ git reset --hard</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变</span></span>
<span class="line"><span style="color:#24292e;">$ git reset [commit]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致</span></span>
<span class="line"><span style="color:#24292e;">$ git reset --hard [commit]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 重置当前HEAD为指定commit，但保持暂存区和工作区不变</span></span>
<span class="line"><span style="color:#24292e;">$ git reset --keep [commit]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 新建一个commit，用来撤销指定commit</span></span>
<span class="line"><span style="color:#24292e;"># 后者的所有变化都将被前者抵消，并且应用到当前分支</span></span>
<span class="line"><span style="color:#24292e;">$ git revert [commit]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 暂时将未提交的变化移除，稍后再移入</span></span>
<span class="line"><span style="color:#24292e;">$ git stash</span></span>
<span class="line"><span style="color:#24292e;">$ git stash pop</span></span></code></pre></div></blockquote><h3 id="十、其他" tabindex="-1">十、其他 <a class="header-anchor" href="#十、其他" aria-label="Permalink to &quot;十、其他&quot;">​</a></h3><blockquote><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;"># 生成一个可供发布的压缩包</span></span>
<span class="line"><span style="color:#f6f6f4;">$ git archive</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 生成一个可供发布的压缩包</span></span>
<span class="line"><span style="color:#24292e;">$ git archive</span></span></code></pre></div></blockquote><h2 id="冲突解决" tabindex="-1">冲突解决 <a class="header-anchor" href="#冲突解决" aria-label="Permalink to &quot;冲突解决&quot;">​</a></h2><p>接下来该怎么解决冲突呢？</p><p>冲突肯定是需要在本地先解决好的，然后再push到GitHub。</p><ol><li>直接将GitHub最新版本的项目(47952b8689)拉下来。--&gt; git pull</li><li>这时肯定就会在本地产生冲突，手动解决好冲突。</li><li>将无冲突的版本push到GitHub. --&gt; git push</li></ol><p><strong>补充说明</strong>：当遇到有本地冲突，无法git pull时，可以尝试git stash和git stash pop</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">stash</span></span>
<span class="line"><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">pull</span></span>
<span class="line"><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">stash</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">pop</span></span>
<span class="line"><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">push</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pull</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pop</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span></span></code></pre></div><p>接下来隆重介绍一下git stash和git stash pop</p><p>git stash可以将当前的修改保存起来，并使得代码回退到之前的clean状态</p><p>git stash pop将之前保存的修改释放出来，与当前版本合并，可能会引发冲突，需要手动解决冲突</p><p>git pull之后发现果然产生了冲突：</p><p><img src="https://pic1.zhimg.com/80/v2-9d6f9d045c623ba9eec8e593662604f4_720w.webp" alt="img">开冲突文件，找到了冲突：</p><p><img src="https://pic1.zhimg.com/80/v2-77b825123341a4a369a0338a0f5ca830_720w.webp" alt="img"></p><p>上红框为小刘版本，下红框为小君版本</p><p>此时需要手动解决冲突，也就是删除一个，保留一个。</p><p><strong>补充说明</strong>：使用VS Code这类工具手动解决冲突会更加方便：</p><p>将项目在VS Code中打开：</p><p><img src="https://pic1.zhimg.com/80/v2-70c49c9cb3bf552153da2ba060b43de0_720w.webp" alt="img"></p><p>点击Accept Current Change，就是接受当前的“咖喱味麻辣香锅”</p><p>点击Accept Incoming Change，就是接受新来的“麻辣味麻辣香锅”</p><p>点击了“Accept Incoming Change”</p><h2 id="git常用操作" tabindex="-1">Git常用操作 <a class="header-anchor" href="#git常用操作" aria-label="Permalink to &quot;Git常用操作&quot;">​</a></h2><h3 id="拉取最新提交" tabindex="-1">拉取最新提交 <a class="header-anchor" href="#拉取最新提交" aria-label="Permalink to &quot;拉取最新提交&quot;">​</a></h3><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">fetch</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-p</span><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">#或 git fetch -p origin</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fetch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">#或 git fetch -p origin</span></span></code></pre></div><p><code>git fetch -p</code> （或者 <code>--prune</code>）命令用于从远程仓库中拉取最新的提交记录，同时也会删除 <em>本地不存在的远程分支</em>；不会更新本地分支和远程分支之间的关联关系，需要手动执行 <code>git merge</code> 或 <code>git rebase</code> 命令，或者使用 <code>git pull</code> 命令。例：删除远程 <code>dev</code>分支后，使用此命令，本地的远程分支也会被清理。</p><p><code>git fetch</code> 命令用于将远程仓库中的最新提交记录拉取到本地仓库中，但是不会自动合并（merge）这些提交；不会删除本地不存在的远程分支，可能会导致本地分支列表过长，不便于管理。</p><h3 id="删除远程分支" tabindex="-1">删除远程分支 <a class="header-anchor" href="#删除远程分支" aria-label="Permalink to &quot;删除远程分支&quot;">​</a></h3><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">branch</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">/</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">branch</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-r</span><span style="color:#F6F6F4;"> 	     </span><span style="color:#7B7F8B;">#列出所有本地/远程分支</span></span>
<span class="line"><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">branch</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-D</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">分支名</span><span style="color:#F6F6F4;">              </span><span style="color:#7B7F8B;">#删除本地库分支</span></span>
<span class="line"><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">push</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">origin</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">--delete</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">分支名</span><span style="color:#F6F6F4;">   </span><span style="color:#7B7F8B;">#删除远程库分支</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span><span style="color:#24292E;"> 	     </span><span style="color:#6A737D;">#列出所有本地/远程分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">分支名</span><span style="color:#24292E;">              </span><span style="color:#6A737D;">#删除本地库分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--delete</span><span style="color:#24292E;"> </span><span style="color:#032F62;">分支名</span><span style="color:#24292E;">   </span><span style="color:#6A737D;">#删除远程库分支</span></span></code></pre></div><h3 id="删除远程文件" tabindex="-1">删除远程文件 <a class="header-anchor" href="#删除远程文件" aria-label="Permalink to &quot;删除远程文件&quot;">​</a></h3><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">rm</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-r</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-n</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">--cached</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">文件/文件夹名称</span><span style="color:#F6F6F4;">   </span><span style="color:#7B7F8B;">#预览要删除的文件列表</span></span>
<span class="line"><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">rm</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-r</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">--cached</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">文件/文件夹名称</span><span style="color:#F6F6F4;">      </span><span style="color:#7B7F8B;">#确定无误后删除文件</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-n</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--cached</span><span style="color:#24292E;"> </span><span style="color:#032F62;">文件/文件夹名称</span><span style="color:#24292E;">   </span><span style="color:#6A737D;">#预览要删除的文件列表</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--cached</span><span style="color:#24292E;"> </span><span style="color:#032F62;">文件/文件夹名称</span><span style="color:#24292E;">      </span><span style="color:#6A737D;">#确定无误后删除文件</span></span></code></pre></div><h3 id="fork后的仓库-拉取合并原仓库的更新" tabindex="-1">fork后的仓库，拉取合并原仓库的更新 <a class="header-anchor" href="#fork后的仓库-拉取合并原仓库的更新" aria-label="Permalink to &quot;fork后的仓库，拉取合并原仓库的更新&quot;">​</a></h3><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">remote</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">add</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">upstream</span><span style="color:#F6F6F4;"> [原仓库URL] </span><span style="color:#7B7F8B;">#添加上游分支路径</span></span>
<span class="line"><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">pull</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">upstream</span><span style="color:#F6F6F4;"> [分支名]  				</span><span style="color:#7B7F8B;">#拉取上游分支更新并合并</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">upstream</span><span style="color:#24292E;"> [原仓库URL] </span><span style="color:#6A737D;">#添加上游分支路径</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pull</span><span style="color:#24292E;"> </span><span style="color:#032F62;">upstream</span><span style="color:#24292E;"> [分支名]  				</span><span style="color:#6A737D;">#拉取上游分支更新并合并</span></span></code></pre></div><h3 id="合并多次提交" tabindex="-1">合并多次提交 <a class="header-anchor" href="#合并多次提交" aria-label="Permalink to &quot;合并多次提交&quot;">​</a></h3><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">rebase</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-i</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">HEAD~3</span><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">#合并最近的 3 次提交，并开启交互模式</span></span>
<span class="line"><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">rebase</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-i</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">&lt;</span><span style="color:#E7EE98;">commit_sh</span><span style="color:#F6F6F4;">a</span><span style="color:#F286C4;">&gt;</span><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">#开启交互模式</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rebase</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD~3</span><span style="color:#24292E;">        </span><span style="color:#6A737D;">#合并最近的 3 次提交，并开启交互模式</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rebase</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">commit_sh</span><span style="color:#24292E;">a</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">#开启交互模式</span></span></code></pre></div><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">rebase</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-i</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">8</span><span style="color:#E7EE98;">fc6389</span><span style="color:#F6F6F4;">   </span><span style="color:#7B7F8B;">#填第2 次提交的 hash，则表示合并 2 之后（3和 4）的提交</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rebase</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8</span><span style="color:#032F62;">fc6389</span><span style="color:#24292E;">   </span><span style="color:#6A737D;">#填第2 次提交的 hash，则表示合并 2 之后（3和 4）的提交</span></span></code></pre></div><p><img src="https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302272058564.png" alt="image-20230227205854474"></p><p>把需要压缩的提交 <code>pick </code> 改为 <code>s</code>，必须保留一个 <code>pick</code>，下一步填写合并提交信息，保存退出(<code>:wq</code>)完成合并</p><p><img src="https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302271055952.png" alt="image-20230227105523929"></p><p><img src="https://zerdocs.oss-cn-shanghai.aliyuncs.com/febasis/202302272059457.png" alt="image-20230227205916425"></p><h3 id="关联多个代码托管平台" tabindex="-1">关联多个代码托管平台 <a class="header-anchor" href="#关联多个代码托管平台" aria-label="Permalink to &quot;关联多个代码托管平台&quot;">​</a></h3><blockquote><p>当本地仓库项同时关联 github 和 gitee，同步更新两边代码</p></blockquote><ol><li><strong>方法一</strong> <code> git remote add gitee [gitee_repo_url]</code>，需要多次推送</li></ol><p>效果：</p><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">[branch </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">master</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">]</span></span>
<span class="line"><span style="color:#F6F6F4;">	</span><span style="color:#62E884;">remote</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">origin</span></span>
<span class="line"><span style="color:#F6F6F4;">	</span><span style="color:#62E884;">merge</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">refs/heads/master</span></span>
<span class="line"><span style="color:#F6F6F4;">[remote </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">origin</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">]</span></span>
<span class="line"><span style="color:#F6F6F4;">	</span><span style="color:#62E884;">url</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">git@github.com:fxzer/juejin-server-mysql.git</span></span>
<span class="line"><span style="color:#F6F6F4;">	</span><span style="color:#62E884;">fetch</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">+refs/heads/</span><span style="color:#BF9EEE;font-style:italic;">*</span><span style="color:#E7EE98;">:refs/remotes/origin/</span><span style="color:#BF9EEE;font-style:italic;">*</span></span>
<span class="line"><span style="color:#F6F6F4;">[remote </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">gitee</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">]</span></span>
<span class="line"><span style="color:#F6F6F4;">	</span><span style="color:#62E884;">url</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">git@gitee.com:fxzer/juejin-server-mysql.git</span></span>
<span class="line"><span style="color:#F6F6F4;">	</span><span style="color:#62E884;">fetch</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">+refs/heads/</span><span style="color:#BF9EEE;font-style:italic;">*</span><span style="color:#E7EE98;">:refs/remotes/gitee/</span><span style="color:#BF9EEE;font-style:italic;">*</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[branch </span><span style="color:#032F62;">&quot;master&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">remote</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">merge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">refs/heads/master</span></span>
<span class="line"><span style="color:#24292E;">[remote </span><span style="color:#032F62;">&quot;origin&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">url</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git@github.com:fxzer/juejin-server-mysql.git</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">fetch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+refs/heads/</span><span style="color:#005CC5;">*</span><span style="color:#032F62;">:refs/remotes/origin/</span><span style="color:#005CC5;">*</span></span>
<span class="line"><span style="color:#24292E;">[remote </span><span style="color:#032F62;">&quot;gitee&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">url</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git@gitee.com:fxzer/juejin-server-mysql.git</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">fetch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+refs/heads/</span><span style="color:#005CC5;">*</span><span style="color:#032F62;">:refs/remotes/gitee/</span><span style="color:#005CC5;">*</span></span></code></pre></div><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">#git remote -v                                                   </span></span>
<span class="line"><span style="color:#62E884;">gitee</span><span style="color:#F6F6F4;">   </span><span style="color:#E7EE98;">git@gitee.com:fxzer/juejin-server-mysql.git</span><span style="color:#F6F6F4;"> (fetch)</span></span>
<span class="line"><span style="color:#62E884;">gitee</span><span style="color:#F6F6F4;">   </span><span style="color:#E7EE98;">git@gitee.com:fxzer/juejin-server-mysql.git</span><span style="color:#F6F6F4;"> (push)</span></span>
<span class="line"><span style="color:#62E884;">origin</span><span style="color:#F6F6F4;">  </span><span style="color:#E7EE98;">git@github.com:fxzer/juejin-server-mysql.git</span><span style="color:#F6F6F4;"> (fetch)</span></span>
<span class="line"><span style="color:#62E884;">origin</span><span style="color:#F6F6F4;">  </span><span style="color:#E7EE98;">git@github.com:fxzer/juejin-server-mysql.git</span><span style="color:#F6F6F4;"> (push)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#git remote -v                                                   </span></span>
<span class="line"><span style="color:#6F42C1;">gitee</span><span style="color:#24292E;">   </span><span style="color:#032F62;">git@gitee.com:fxzer/juejin-server-mysql.git</span><span style="color:#24292E;"> (fetch)</span></span>
<span class="line"><span style="color:#6F42C1;">gitee</span><span style="color:#24292E;">   </span><span style="color:#032F62;">git@gitee.com:fxzer/juejin-server-mysql.git</span><span style="color:#24292E;"> (push)</span></span>
<span class="line"><span style="color:#6F42C1;">origin</span><span style="color:#24292E;">  </span><span style="color:#032F62;">git@github.com:fxzer/juejin-server-mysql.git</span><span style="color:#24292E;"> (fetch)</span></span>
<span class="line"><span style="color:#6F42C1;">origin</span><span style="color:#24292E;">  </span><span style="color:#032F62;">git@github.com:fxzer/juejin-server-mysql.git</span><span style="color:#24292E;"> (push)</span></span></code></pre></div><ol start="2"><li><strong>方法二</strong> <code>git remote set-url --add origin [gitee_repo_url]</code> , 只需一次推送</li></ol><p>效果：~</p><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">[remote </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">origin</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">]</span></span>
<span class="line"><span style="color:#F6F6F4;">	</span><span style="color:#62E884;">url</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">git@github.com:fxzer/json-viewer.git</span></span>
<span class="line"><span style="color:#F6F6F4;">	</span><span style="color:#62E884;">fetch</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">+refs/heads/</span><span style="color:#BF9EEE;font-style:italic;">*</span><span style="color:#E7EE98;">:refs/remotes/origin/</span><span style="color:#BF9EEE;font-style:italic;">*</span></span>
<span class="line"><span style="color:#F6F6F4;">	</span><span style="color:#62E884;">url</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">git@gitee.com:fxzer/json-viewer.git</span></span>
<span class="line"><span style="color:#F6F6F4;">[branch </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">master</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">]</span></span>
<span class="line"><span style="color:#F6F6F4;">	</span><span style="color:#62E884;">remote</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">origin</span></span>
<span class="line"><span style="color:#F6F6F4;">	</span><span style="color:#62E884;">merge</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">refs/heads/master</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[remote </span><span style="color:#032F62;">&quot;origin&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">url</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git@github.com:fxzer/json-viewer.git</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">fetch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+refs/heads/</span><span style="color:#005CC5;">*</span><span style="color:#032F62;">:refs/remotes/origin/</span><span style="color:#005CC5;">*</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">url</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git@gitee.com:fxzer/json-viewer.git</span></span>
<span class="line"><span style="color:#24292E;">[branch </span><span style="color:#032F62;">&quot;master&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">remote</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">merge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">refs/heads/master</span></span></code></pre></div><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">#git remote -v</span></span>
<span class="line"><span style="color:#62E884;">origin</span><span style="color:#F6F6F4;">  </span><span style="color:#E7EE98;">git@github.com:fxzer/json-viewer.git</span><span style="color:#F6F6F4;"> (fetch)</span></span>
<span class="line"><span style="color:#62E884;">origin</span><span style="color:#F6F6F4;">  </span><span style="color:#E7EE98;">git@github.com:fxzer/json-viewer.git</span><span style="color:#F6F6F4;"> (push)</span></span>
<span class="line"><span style="color:#62E884;">origin</span><span style="color:#F6F6F4;">  </span><span style="color:#E7EE98;">git@gitee.com:fxzer/json-viewer.git</span><span style="color:#F6F6F4;"> (push)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#git remote -v</span></span>
<span class="line"><span style="color:#6F42C1;">origin</span><span style="color:#24292E;">  </span><span style="color:#032F62;">git@github.com:fxzer/json-viewer.git</span><span style="color:#24292E;"> (fetch)</span></span>
<span class="line"><span style="color:#6F42C1;">origin</span><span style="color:#24292E;">  </span><span style="color:#032F62;">git@github.com:fxzer/json-viewer.git</span><span style="color:#24292E;"> (push)</span></span>
<span class="line"><span style="color:#6F42C1;">origin</span><span style="color:#24292E;">  </span><span style="color:#032F62;">git@gitee.com:fxzer/json-viewer.git</span><span style="color:#24292E;"> (push)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title"><code>git remote add</code> 和 <code>git remote set-url --add</code>区别</p><ul><li>git remote add 用于添加一个新的远程仓库。该本地仓库已关联远程库，希望添加新的远程库。**运用：**fork后的仓库，需要拉取合并原仓库的更新。</li><li>git remote set-url --add 用于向已经存在的远程仓库中添加一个新的 URL。**运用：**同一个仓库关联 github 和 gitee 方便同时更新。</li><li>git remote set-url 命令会替换掉原有的链接，git remote set-url --add 命令，则是添加一个标识对应的远程库链接。</li></ul></div><h3 id="改错分支但为未提交" tabindex="-1">改错分支但为未提交 <a class="header-anchor" href="#改错分支但为未提交" aria-label="Permalink to &quot;改错分支但为未提交&quot;">​</a></h3><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">stash</span><span style="color:#F6F6F4;">            </span><span style="color:#7B7F8B;">#暂存更改到stash</span></span>
<span class="line"><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">checkout</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">分支名</span><span style="color:#F6F6F4;">   </span><span style="color:#7B7F8B;">#切换分支</span></span>
<span class="line"><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">stash</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">pop</span><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">#从stash中取出暂存的代码修改</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;">            </span><span style="color:#6A737D;">#暂存更改到stash</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#032F62;">分支名</span><span style="color:#24292E;">   </span><span style="color:#6A737D;">#切换分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pop</span><span style="color:#24292E;">        </span><span style="color:#6A737D;">#从stash中取出暂存的代码修改</span></span></code></pre></div><h3 id="提交完未推送前-需要再次提交" tabindex="-1">提交完未推送前，需要再次提交 <a class="header-anchor" href="#提交完未推送前-需要再次提交" aria-label="Permalink to &quot;提交完未推送前，需要再次提交&quot;">​</a></h3><ul><li>提交完未推送前，发现代码有的有点小问题，还需要修改再提交，但是不想新增垃圾提交信息，保持简洁。</li><li>只需要修改提交的内容而不需要改变提交信息， 可以使用 --no-edit 参数来跳过编辑提交信息的步骤。</li></ul><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">commit</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">--amend</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">--no-edit</span><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;"># 做的修改合并到最近的提交中，相当于是在原有的提交上进行修改，而不是创建一个新的提交。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># 使用后在拉取代码会出现：位于分支 master</span></span>
<span class="line"><span style="color:#7B7F8B;"># 您的分支和 &#39;origin/master&#39; 出现了偏离，</span></span>
<span class="line"><span style="color:#7B7F8B;"># 并且分别有 1 和 1 处不同的提交。</span></span>
<span class="line"><span style="color:#7B7F8B;">#   （使用 &quot;git pull&quot; 来合并远程分支）</span></span>
<span class="line"><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">config</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">pull.rebase</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">   </span><span style="color:#7B7F8B;"># git pull前，需要执行此命令进行变基</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--amend</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--no-edit</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 做的修改合并到最近的提交中，相当于是在原有的提交上进行修改，而不是创建一个新的提交。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用后在拉取代码会出现：位于分支 master</span></span>
<span class="line"><span style="color:#6A737D;"># 您的分支和 &#39;origin/master&#39; 出现了偏离，</span></span>
<span class="line"><span style="color:#6A737D;"># 并且分别有 1 和 1 处不同的提交。</span></span>
<span class="line"><span style="color:#6A737D;">#   （使用 &quot;git pull&quot; 来合并远程分支）</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pull.rebase</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">   </span><span style="color:#6A737D;"># git pull前，需要执行此命令进行变基</span></span></code></pre></div><h3 id="修改第一次提交信息" tabindex="-1">修改第一次提交信息 <a class="header-anchor" href="#修改第一次提交信息" aria-label="Permalink to &quot;修改第一次提交信息&quot;">​</a></h3><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">rebase</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-i</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">--root</span><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">#把第一次提交的 pick 改为 edit 后 e</span></span>
<span class="line"><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">rebase</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">--continue</span></span>
<span class="line"><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">rebase</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">pull.rebase</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span></span>
<span class="line"><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">pull</span></span>
<span class="line"><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">push</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rebase</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--root</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">#把第一次提交的 pick 改为 edit 后 e</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rebase</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--continue</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rebase</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pull.rebase</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pull</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span></span></code></pre></div><h3 id="代码提交到了错误的分支" tabindex="-1">代码提交到了错误的分支 <a class="header-anchor" href="#代码提交到了错误的分支" aria-label="Permalink to &quot;代码提交到了错误的分支&quot;">​</a></h3><h4 id="方法一" tabindex="-1">方法一 <a class="header-anchor" href="#方法一" aria-label="Permalink to &quot;方法一&quot;">​</a></h4><p>切换到正确的分支并使用， 将指定的提交复制到当前分支，并将其添加到暂存区</p><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#62E884;">git</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">cherry-pick</span><span style="color:#F6F6F4;"> [commit]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cherry-pick</span><span style="color:#24292E;"> [commit]</span></span></code></pre></div><h4 id="方法二" tabindex="-1">方法二 <a class="header-anchor" href="#方法二" aria-label="Permalink to &quot;方法二&quot;">​</a></h4><p>使用 <code>git rebase</code> 命令将提交移动到正确的分支上：</p><ol><li>切换到错误分支上：<code>git checkout [error-branch]</code></li><li>将错误分支上的提交移动到正确分支上：<code>git rebase [correct-branch]</code></li><li>解决冲突（如果有）</li><li>将更改提交到正确的分支上：<code>git checkout [correct-branch]</code>，然后 <code>git merge [error-branch]</code></li><li>在错误分支<code>git push -f</code>更新远程代码</li></ol><h3 id="git-提交规范化" tabindex="-1">Git 提交规范化 <a class="header-anchor" href="#git-提交规范化" aria-label="Permalink to &quot;Git 提交规范化&quot;">​</a></h3><ul><li><strong>husky</strong>: Git 钩子工具,在 Git 提交过程的不同阶段自动运行脚本，以此来实现对代码的验证、格式化、测试等操作</li><li><strong>@commitlint/cli</strong>: 提交信息校验脚手架</li><li><strong>@commitlint/config-conventional</strong>: 定义了 commitlint 默认使用的规范。</li><li><strong>commitizen</strong>: 交互式提交工具</li><li><strong>conventional-changelog</strong>: 规范提交信息、并自动生成变更日志</li><li><strong>cz-conventional-changelog</strong>: git cz 提交规范和 changelog 生成工具</li></ul><h4 id="husky" tabindex="-1">[husky] <a class="header-anchor" href="#husky" aria-label="Permalink to &quot;[husky]&quot;">​</a></h4><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;"># 安装</span></span>
<span class="line"><span style="color:#62E884;">pnpm</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">i</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">husky</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># 初始化husky配置，在根目录新增.husky配置文件。初始化配置pre-commit</span></span>
<span class="line"><span style="color:#62E884;">npx</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">husky-init</span><span style="color:#F6F6F4;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># 新增一个提交git commit 执行前的钩子（commit-msg）</span></span>
<span class="line"><span style="color:#62E884;">npx</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">husky</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">add</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">.husky/commit-msg</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">husky</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 初始化husky配置，在根目录新增.husky配置文件。初始化配置pre-commit</span></span>
<span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">husky-init</span><span style="color:#24292E;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新增一个提交git commit 执行前的钩子（commit-msg）</span></span>
<span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">husky</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.husky/commit-msg</span></span></code></pre></div><h4 id="commitlint-cli与-commitlint-config-conventional" tabindex="-1">@commitlint/cli与@commitlint/config-conventional <a class="header-anchor" href="#commitlint-cli与-commitlint-config-conventional" aria-label="Permalink to &quot;@commitlint/cli与@commitlint/config-conventional&quot;">​</a></h4><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">#安装校验脚手架、校验规范</span></span>
<span class="line"><span style="color:#62E884;">pnpm</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">i</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">@commitlint/cli</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">@commitlint/config-conventional</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">#添加安装脚本呢</span></span>
<span class="line"><span style="color:#62E884;">pnpm</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">set-script</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">&quot;prepare&quot;: &quot;husky install&quot;</span><span style="color:#DEE492;">&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#安装校验脚手架、校验规范</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@commitlint/cli</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@commitlint/config-conventional</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#添加安装脚本呢</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set-script</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&quot;prepare&quot;: &quot;husky install&quot;&#39;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">//commitlint.config.js （若报错 type:&#39;module&#39;）可改：commitlint.config.js ==&gt; commitlint.config.cjs</span></span>
<span class="line"><span style="color:#97E1F1;font-style:italic;">module</span><span style="color:#F6F6F4;">.</span><span style="color:#97E1F1;font-style:italic;">exports</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  ignores</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span><span style="color:#FFB86C;font-style:italic;">commit</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> commit.</span><span style="color:#62E884;">includes</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">init</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">)],</span></span>
<span class="line"><span style="color:#F6F6F4;">  extends</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">@commitlint/config-conventional</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">],</span></span>
<span class="line"><span style="color:#F6F6F4;">  rules</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">body-leading-blank</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">always</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">],</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">footer-leading-blank</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">always</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">],</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">header-max-length</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">always</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">108</span><span style="color:#F6F6F4;">],</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">subject-empty</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">never</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">],</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">type-empty</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">never</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">],</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">type-enum</span><span style="color:#DEE492;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#BF9EEE;">2</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">always</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">      [</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">feat</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">fix</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">perf</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">style</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">docs</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">test</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">refactor</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">build</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">ci</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">chore</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">revert</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">wip</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">workflow</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">types</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">release</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">      ]</span></span>
<span class="line"><span style="color:#F6F6F4;">    ]</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//commitlint.config.js （若报错 type:&#39;module&#39;）可改：commitlint.config.js ==&gt; commitlint.config.cjs</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  ignores: [</span><span style="color:#E36209;">commit</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> commit.</span><span style="color:#6F42C1;">includes</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;init&quot;</span><span style="color:#24292E;">)],</span></span>
<span class="line"><span style="color:#24292E;">  extends: [</span><span style="color:#032F62;">&quot;@commitlint/config-conventional&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  rules: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;body-leading-blank&quot;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;always&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;footer-leading-blank&quot;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;always&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;header-max-length&quot;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;always&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">108</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;subject-empty&quot;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;never&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;type-empty&quot;</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;never&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;type-enum&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;always&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;feat&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;fix&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;perf&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;style&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;docs&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;test&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;refactor&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;build&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;ci&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;chore&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;revert&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;wip&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;workflow&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;types&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;release&quot;</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h4 id="commitizen" tabindex="-1">[commitizen] <a class="header-anchor" href="#commitizen" aria-label="Permalink to &quot;[commitizen]&quot;">​</a></h4><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">#全局安装</span></span>
<span class="line"><span style="color:#62E884;">npm</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">install</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-g</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">commitizen</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#全局安装</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commitizen</span></span></code></pre></div><h4 id="cz-conventional-changelog" tabindex="-1">cz-conventional-changelog <a class="header-anchor" href="#cz-conventional-changelog" aria-label="Permalink to &quot;cz-conventional-changelog&quot;">​</a></h4><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">#全局安装</span></span>
<span class="line"><span style="color:#62E884;">npm</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">install</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-g</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">cz-conventional-changelog</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#全局安装</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cz-conventional-changelog</span></span></code></pre></div><p>配置 <code>~/.czrc</code>， 将其设置为 <code>commitizen</code> 的插件。</p><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">&quot;path&quot;</span><span style="color:#97E1F1;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">cz-conventional-changelog</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">&quot;path&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;cz-conventional-changelog&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">作用：提交代码并生成变更日志</p><p>使用 <code>commitizen</code> 提交代码时，会自动启动 <code>cz-conventional-changelog</code> 插件，</p><p>并根据 <code>conventional-commit</code> 规范提示用户输入提交信息。</p><p>输入完毕后，会自动将提交信息转换成符合规范的格式，并将其写入到 <code>CHANGELOG.md</code> 文件中。</p></div>`,106),e=[o];function t(c,r,i,y,F,E){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{g as __pageData,d as default};
