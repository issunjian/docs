import{_ as e,o as t,c as p,V as a}from"./chunks/framework.c6d8cbec.js";const h=JSON.parse('{"title":"PC微信3.60版小程序无法抓包如何解决（fiddler抓包）","description":"","frontmatter":{},"headers":[],"relativePath":"operations/小程序抓包.md","filePath":"operations/小程序抓包.md"}'),r={name:"operations/小程序抓包.md"},o=a('<h1 id="pc微信3-60版小程序无法抓包如何解决-fiddler抓包" tabindex="-1"><a href="https://www.cnblogs.com/adam012019/p/16144493.html" target="_blank" rel="noreferrer">PC微信3.60版小程序无法抓包如何解决（fiddler抓包）</a> <a class="header-anchor" href="#pc微信3-60版小程序无法抓包如何解决-fiddler抓包" aria-label="Permalink to &quot;[PC微信3.60版小程序无法抓包如何解决（fiddler抓包）](https://www.cnblogs.com/adam012019/p/16144493.html)&quot;">​</a></h1><p>近期更新了PC端的微信，但忽然发现之前都能正常抓包小程序的内容，突然抓包失败了。</p><p><img src="https://img2022.cnblogs.com/blog/1570232/202204/1570232-20220414144134695-2029486560.png" alt="img"></p><p>发现小程序进程的名字从WechatApp.exe变成了WechatAppex.exe，所以也不能抓包了。</p><p>临时解决方案：</p><p>1、打开一个任意小程序，打开任务管理器，找到进程。右键打开文件位置。</p><p>2、退出电脑微信，右键结束小程序进程。</p><p>3、找到这个目录删除WMPFRuntime下所有的文件夹。</p><p><img src="https://img2022.cnblogs.com/blog/1570232/202204/1570232-20220414143552625-1886568092.png" alt="img"></p><p>4、删除WMPFRuntime下所有的文件夹。</p><p>5、重启PC微信，重新开始抓包即可。</p><p><img src="https://img2022.cnblogs.com/blog/1570232/202204/1570232-20220414143955599-9367564.png" alt="img"></p><p>具体如何条件参数，可参考之前文章：</p><p><a href="https://www.cnblogs.com/adam012019/p/15079427.html" target="_blank" rel="noreferrer">微信小程序音频视频下载（fiddler抓包）</a></p>',14),s=[o];function c(n,l,i,_,m,d){return t(),p("div",null,s)}const f=e(r,[["render",c]]);export{h as __pageData,f as default};
