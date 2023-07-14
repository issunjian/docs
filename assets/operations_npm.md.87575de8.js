import{_ as s,o as a,c as e,V as p}from"./chunks/framework.c6d8cbec.js";const v=JSON.parse('{"title":"npm 更改为淘宝镜像的方法","description":"","frontmatter":{},"headers":[],"relativePath":"operations/npm.md","filePath":"operations/npm.md"}'),n={name:"operations/npm.md"},o=p('<h1 id="npm-更改为淘宝镜像的方法" tabindex="-1"><strong>npm 更改为淘宝镜像的方法</strong> <a class="header-anchor" href="#npm-更改为淘宝镜像的方法" aria-label="Permalink to &quot;**npm 更改为淘宝镜像的方法**&quot;">​</a></h1><p>1、命令行临时使用指定镜像（淘宝）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">npm --registry https://registry.npm.taobao.org install express</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm --registry https://registry.npm.taobao.org install express</span></span></code></pre></div><p>2、命令行永久更改使用指定镜像（淘宝）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">npm config set registry https://registry.npm.taobao.org</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm config set registry https://registry.npm.taobao.org</span></span></code></pre></div><p>以后 npm install express 默认使用指定（淘宝）镜像</p><p>3、通过npm配置文件直接修改，本质和第2条一样，配置文件位置（windows环境）为C盘下的.npmrc文件（百度很容易查到文件路径），MAC没试过。可以用如下命令找到配置文件位置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">npm config ls -l</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm config ls -l</span></span></code></pre></div><p>4、使用淘宝 NPM 镜像（参考 <a href="http://www.runoob.com/nodejs/nodejs-npm.html%EF%BC%89" target="_blank" rel="noreferrer">http://www.runoob.com/nodejs/nodejs-npm.html）</a></p><p>命令行输入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">npm install -g cnpm --registry=https://registry.npm.taobao.org</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm install -g cnpm --registry=https://registry.npm.taobao.org</span></span></code></pre></div><p>这样就可以使用 cnpm 命令来安装模块了： cnpm install express</p><p>查看目前使用的npm镜像的方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">npm config get registry</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm config get registry</span></span></code></pre></div><p>5、设置单独某个包的下载地址（以包electron，其镜像<a href="https://npm.taobao.org/mirrors/electron/%E4%B8%BA%E4%BE%8B%EF%BC%8C%E5%8F%82%E8%80%83https://reactnative.cn/docs/debugging/%EF%BC%89" target="_blank" rel="noreferrer">https://npm.taobao.org/mirrors/electron/为例，参考https://reactnative.cn/docs/debugging/）</a></p><p>打开.npmrc，添加该包的指定镜像，截图如下</p><p>6、要想将镜像源改回国外的源可以直接将.npmrc文件直接删除，想恢复时直接从回收站还原即可。</p><p>7、查看npm源上包的所有版本，以 <em><strong>babel-core</strong></em> 为例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">npm view babel-core versions</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm view babel-core versions</span></span></code></pre></div><p>8、安装包的最新版本，包含beta版，以 <em><strong>babel-core</strong></em> 为例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">npm install babel-core@next</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm install babel-core@next</span></span></code></pre></div><p>9、查看package-lock.json中具体依赖树(以开源库tar为例)：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">npm ls tar</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm ls tar</span></span></code></pre></div><h1 id="npm的缓存及全局包位置-默认情况" tabindex="-1">npm的缓存及全局包位置（默认情况） <a class="header-anchor" href="#npm的缓存及全局包位置-默认情况" aria-label="Permalink to &quot;npm的缓存及全局包位置（默认情况）&quot;">​</a></h1><p>可以通过命令行”npm config get cache”获取缓存目录，对于全局路径还可以用这个命令”npm root -g”</p><p>mac下：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#62E884;">/Users/apple/.npmrc</span><span style="color:#F6F6F4;"> (“apple”是自己的mac用户名)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">/Users/apple/.npmrc</span><span style="color:#24292E;"> (“apple”是自己的mac用户名)</span></span></code></pre></div><p>window下：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#62E884;">%APPDATA%/npm/node_modules</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">%APPDATA%/npm/node_modules</span></span></code></pre></div><h1 id="npm源管理工具" tabindex="-1">npm源管理工具： <a class="header-anchor" href="#npm源管理工具" aria-label="Permalink to &quot;npm源管理工具：&quot;">​</a></h1><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#62E884;">nrm：npm</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">install</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-g</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">nrm</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">nrm：npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nrm</span></span></code></pre></div>',31),l=[o];function t(c,r,i,d,g,h){return a(),e("div",null,l)}const b=s(n,[["render",t]]);export{v as __pageData,b as default};