import{_ as a,o as e,c as t,V as r}from"./chunks/framework.c6d8cbec.js";const b=JSON.parse('{"title":"网络接口层","description":"","frontmatter":{},"headers":[],"relativePath":"java/理论基础/计算机网络/网络接口层.md","filePath":"java/理论基础/计算机网络/网络接口层.md"}'),l={name:"java/理论基础/计算机网络/网络接口层.md"},o=r('<h1 id="网络接口层" tabindex="-1">网络接口层 <a class="header-anchor" href="#网络接口层" aria-label="Permalink to &quot;网络接口层&quot;">​</a></h1><hr><h2 id="网络接口层功能" tabindex="-1">网络接口层功能 <a class="header-anchor" href="#网络接口层功能" aria-label="Permalink to &quot;网络接口层功能&quot;">​</a></h2><h3 id="数据链路层" tabindex="-1">数据链路层 <a class="header-anchor" href="#数据链路层" aria-label="Permalink to &quot;数据链路层&quot;">​</a></h3><p>将网络层交下来的 IP 数据报组装成帧，根据 MAC 地址建立网络中两个相邻节点间的点对点传输。</p><p>同时也会对传输帧进行基本的差错检测。如果发现差错数据链路层会直接丢弃出错的帧，以避免继续传输浪费网络资源。部分算法也可以对帧进行简单的纠错。</p><h3 id="物理层" tabindex="-1">物理层 <a class="header-anchor" href="#物理层" aria-label="Permalink to &quot;物理层&quot;">​</a></h3><p>屏蔽具体传输设备的差异，实现相邻计算机节点之间比特流的透明传送。</p><hr><h2 id="介质访问控制" tabindex="-1">介质访问控制 <a class="header-anchor" href="#介质访问控制" aria-label="Permalink to &quot;介质访问控制&quot;">​</a></h2><p>在局域网内，通常使用广播通信。可能会出现多个主机信号争用广播信道的情况。</p><h3 id="信道划分" tabindex="-1">信道划分 <a class="header-anchor" href="#信道划分" aria-label="Permalink to &quot;信道划分&quot;">​</a></h3><p>将广播信道按时间或空间划分，分配给多个信号使用。</p><ul><li><strong>频分复用</strong></li></ul><p>将物理信道的总带宽分割成多个子信道通信。如果通过光纤传输则叫做波分复用。</p><ul><li><strong>时分复用</strong></li></ul><p>将物理信道分割成多个时间片，轮流分配给多个信号使用。</p><ul><li><strong>码分复用</strong></li></ul><p>依靠编码将信号混合，既共享了时间又共享了空间。</p><h3 id="随机访问" tabindex="-1">随机访问 <a class="header-anchor" href="#随机访问" aria-label="Permalink to &quot;随机访问&quot;">​</a></h3><ul><li><strong>CSMA/CD 协议</strong></li></ul><p>先听后发，边听边发。冲突停发，随机重发。</p><p>适用于网络状态良好的有线网络</p><ul><li><strong>CSMA/CA 协议</strong></li></ul><p>发前广播，避免碰撞。</p><p>适用于网络状态不佳的无线网络</p><h3 id="轮询访问" tabindex="-1">轮询访问 <a class="header-anchor" href="#轮询访问" aria-label="Permalink to &quot;轮询访问&quot;">​</a></h3><ul><li>令牌传递协议</li></ul><p>环形网络，交替传递令牌。持有令牌的主机才被允许在信道上传递信号。</p><p>适用于负载非常高的网络信道。</p><hr><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2>',32),i=[o];function n(h,s,d,p,c,u){return e(),t("div",null,i)}const m=a(l,[["render",n]]);export{b as __pageData,m as default};
