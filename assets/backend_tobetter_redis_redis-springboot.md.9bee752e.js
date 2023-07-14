import{_ as s,o as n,c as a,V as l}from"./chunks/framework.c6d8cbec.js";const p="/docs/assets/redis-springboot-182f2469-b7f2-4fec-bd41-e5a33dca185a.a717192a.png",e="/docs/assets/redis-springboot-cdf02715-5ed6-44b5-a1ce-db0249107dd7.49e67746.png",o="/docs/assets/redis-springboot-8c272a19-e961-449c-afee-c973fb44a5e0.717ba77f.png",t="/docs/assets/redis-springboot-13b569ca-e747-4d64-af0d-a9a5d0260f5f.8cbe9060.png",c="/docs/assets/redis-springboot-df5e600b-1290-447c-b140-6f513c69492c.f3fe0e2e.png",r="/docs/assets/redis-springboot-d36b9022-fe3b-4fb1-80c3-8d23d19d9025.54ca36e0.png",i="/docs/assets/redis-springboot-d7d4043b-b753-484c-bfc1-25533004cca5.5266b943.png",y="/docs/assets/redis-springboot-f4456aea-2e48-4bad-910d-2d963ef0224e.a6e77d29.png",F="/docs/assets/redis-springboot-f7551ebb-0bde-4084-9ab0-4a724d8ad2ec.c9d0140f.png",d="/docs/assets/redis-springboot-eb6d69d7-9152-4695-87c7-cba138ca93fd.26cb9dd0.png",f="/docs/assets/redis-springboot-afed274d-458d-4e6e-9fd0-b421ac811f47.747f4332.png",g="/docs/assets/redis-springboot-6463fdda-6cc2-43f4-91e6-e0de9f0f1c0c.c3dfc343.png",E="/docs/assets/redis-springboot-468a253d-931a-4e5b-8f7e-36ecc1561dac.78f33634.png",u="/docs/assets/redis-springboot-c94651b5-1e53-42e5-ad5f-162b4bf509a7.2a57b27c.png",m="/docs/assets/redis-springboot-e4cd346c-07d0-4ee3-9832-4c7a2aa1b7b4.6f0e097d.png",h="/docs/assets/redis-springboot-7e86e208-bf5f-4dc2-a962-2b926adaa524.bbdae0c5.png",C="/docs/assets/redis-springboot-01aa7dc6-b9f7-46bd-b8a4-0a24e44185bc.5e62eed0.png",b="/docs/assets/redis-springboot-c87d8e02-aace-4d86-8011-13e4087956e0.ae665844.png",v="/docs/assets/redis-springboot-f28a3b84-ed0b-4a78-a5e5-5803bae967be.e48bac75.png",D="/docs/assets/redis-springboot-9b89af51-c2fd-4b2d-ba57-a59efa4cbffd.36d56d43.png",O=JSON.parse('{"title":"Spring Boot 整合 Redis  缓存","description":"","frontmatter":{"category":["Java企业级开发"],"tag":["Spring Boot","Redis"],"title":"Spring Boot 整合 Redis  缓存"},"headers":[],"relativePath":"backend/tobetter/redis/redis-springboot.md","filePath":"backend/tobetter/redis/redis-springboot.md"}'),R={name:"backend/tobetter/redis/redis-springboot.md"},A=l('<p>作为开发者，相信大家都知道 Redis 的重要性。Redis 是使用 C 语言开发的一个高性能键值对数据库，是互联网技术领域使用最为广泛的存储中间件，它是「Remote Dictionary Service」的首字母缩写，也就是「远程字典服务」。</p><p>Redis 以超高的性能、完美的文档、简洁的源码著称，国内外很多大型互联网公司都在用，比如说阿里、腾讯、GitHub、Stack Overflow 等等。当然了，中小型公司也都在用。</p><h2 id="安装-redis" tabindex="-1">安装 Redis <a class="header-anchor" href="#安装-redis" aria-label="Permalink to &quot;安装 Redis&quot;">​</a></h2><p>Redis 的官网提供了各种平台的安装包，Linux、macOS、Windows 的都有。</p><img src="'+p+'"><blockquote><p>官方地址：<a href="https://redis.io/docs/getting-started/" target="_blank" rel="noreferrer">https://redis.io/docs/getting-started/</a></p></blockquote><p>我目前用的是 macOS，直接执行 <code>brew install redis</code> 就可以完成安装了。</p><img src="'+e+'"><p>完成安装后执行 <code>redis-server</code> 就可以启动 Redis 服务了。</p><img src="'+o+'"><p>Windows 用户可以通过我之前提到的 <a href="https://mp.weixin.qq.com/s/Hgm3ZAbOeBqpSUsJZBtlNg" target="_blank" rel="noreferrer">chocolatey 命令行软件管理神器</a>安装（可以戳链接了解详情），只需要一行命令 <code>choco install redis</code> 就可以完成安装了，非常方便。</p><img src="'+t+'"><p>生产环境中，我们通常会在 Linux 上安装 Redis。我的服务器上安装了宝塔面板，可以直接在软件商店里搜「Redis」关键字，然后直接安装（我已经安装过了）。</p><img src="'+c+'"><p>顺带安装一下 Redis 客户端工具，推荐 GitHub 星标 20k+ 的 AnotherRedisDesktopManager，一款 🚀🚀🚀 更快、更好、更稳定的Redis桌面(GUI)管理客户端，支持 Windows、macOS 和 Linux，性能出众，可以轻松加载海量键值。</p><blockquote><p><a href="https://github.com/qishibo/AnotherRedisDesktopManager" target="_blank" rel="noreferrer">https://github.com/qishibo/AnotherRedisDesktopManager</a></p></blockquote><p>安装完成后，链接 Redis 服务：</p><img src="'+r+'"><h2 id="redis-数据类型" tabindex="-1">Redis 数据类型 <a class="header-anchor" href="#redis-数据类型" aria-label="Permalink to &quot;Redis 数据类型&quot;">​</a></h2><p>Redis支持五种数据类型：string（字符串），hash（哈希），list（列表），set（集合）及zset(sorted set：有序集合)。</p><blockquote><p>Redis 教程：<a href="https://www.redis.net.cn/tutorial/3508.html" target="_blank" rel="noreferrer">https://www.redis.net.cn/tutorial/3508.html</a></p></blockquote><p><strong>1）string</strong></p><p>string 是 Redis 最基本的数据类型，一个key对应一个value。</p><p>我们可以通过 AnotherRedisDesktopManager 客户端来练习一下基本的 set、get 命令（参考 Redis 文档，客户端会有提示，所以命令完全不用死记硬背）。</p><img src="'+i+`"><p>对应文本命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">## 增加一个 key 为 name，value 为 沉默王二</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; set name &#39;沉默王二&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">OK</span></span>
<span class="line"><span style="color:#f6f6f4;">## 获取</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; get name</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王二</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; set name &#39;沉默王三&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">OK</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; get name</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王三</span></span>
<span class="line"><span style="color:#f6f6f4;">## 删除</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; del name</span></span>
<span class="line"><span style="color:#f6f6f4;">1</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; get name</span></span>
<span class="line"><span style="color:#f6f6f4;">null</span></span>
<span class="line"><span style="color:#f6f6f4;">## 测试是否存在 name</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; EXISTS key</span></span>
<span class="line"><span style="color:#f6f6f4;">0</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; EXISTS name</span></span>
<span class="line"><span style="color:#f6f6f4;">0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">## 增加一个 key 为 name，value 为 沉默王二</span></span>
<span class="line"><span style="color:#24292e;">&gt; set name &#39;沉默王二&#39;</span></span>
<span class="line"><span style="color:#24292e;">OK</span></span>
<span class="line"><span style="color:#24292e;">## 获取</span></span>
<span class="line"><span style="color:#24292e;">&gt; get name</span></span>
<span class="line"><span style="color:#24292e;">沉默王二</span></span>
<span class="line"><span style="color:#24292e;">&gt; set name &#39;沉默王三&#39;</span></span>
<span class="line"><span style="color:#24292e;">OK</span></span>
<span class="line"><span style="color:#24292e;">&gt; get name</span></span>
<span class="line"><span style="color:#24292e;">沉默王三</span></span>
<span class="line"><span style="color:#24292e;">## 删除</span></span>
<span class="line"><span style="color:#24292e;">&gt; del name</span></span>
<span class="line"><span style="color:#24292e;">1</span></span>
<span class="line"><span style="color:#24292e;">&gt; get name</span></span>
<span class="line"><span style="color:#24292e;">null</span></span>
<span class="line"><span style="color:#24292e;">## 测试是否存在 name</span></span>
<span class="line"><span style="color:#24292e;">&gt; EXISTS key</span></span>
<span class="line"><span style="color:#24292e;">0</span></span>
<span class="line"><span style="color:#24292e;">&gt; EXISTS name</span></span>
<span class="line"><span style="color:#24292e;">0</span></span></code></pre></div><p><strong>2）hash</strong></p><p>Redis hash 是一个键值对集合，值可以看成是一个 Map。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">## 清除数据库</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; flushdb</span></span>
<span class="line"><span style="color:#f6f6f4;">OK</span></span>
<span class="line"><span style="color:#f6f6f4;">## 创建 hash，key 为 user_hset 字段为 user1，值为 沉默王二</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; hset user_hset user1 沉默王二</span></span>
<span class="line"><span style="color:#f6f6f4;">1</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; hset user_hset user2 沉默王三</span></span>
<span class="line"><span style="color:#f6f6f4;">1</span></span>
<span class="line"><span style="color:#f6f6f4;">## 字段长度</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; hlen user_hset</span></span>
<span class="line"><span style="color:#f6f6f4;">2</span></span>
<span class="line"><span style="color:#f6f6f4;">## 所有字段</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; HKEYS user_hset</span></span>
<span class="line"><span style="color:#f6f6f4;">user1</span></span>
<span class="line"><span style="color:#f6f6f4;">user2</span></span>
<span class="line"><span style="color:#f6f6f4;">## 所有值</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; hvals user_hset</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王二</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王三</span></span>
<span class="line"><span style="color:#f6f6f4;">## 字段 user1 的值</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; hget user_hset user1</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王二</span></span>
<span class="line"><span style="color:#f6f6f4;">## 获取 key 为 user_hset 的所有字段和值</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; hgetall user_hset</span></span>
<span class="line"><span style="color:#f6f6f4;">user1</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王二</span></span>
<span class="line"><span style="color:#f6f6f4;">user2</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王三</span></span>
<span class="line"><span style="color:#f6f6f4;">## 更新字段</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; hset user_hset user1 沉默王四</span></span>
<span class="line"><span style="color:#f6f6f4;">0</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; hgetall user_hset</span></span>
<span class="line"><span style="color:#f6f6f4;">user1</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王四</span></span>
<span class="line"><span style="color:#f6f6f4;">user2</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王三</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; hdel user_hset user1</span></span>
<span class="line"><span style="color:#f6f6f4;">1</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; hgetall user_hset</span></span>
<span class="line"><span style="color:#f6f6f4;">user2</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王三</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">## 清除数据库</span></span>
<span class="line"><span style="color:#24292e;">&gt; flushdb</span></span>
<span class="line"><span style="color:#24292e;">OK</span></span>
<span class="line"><span style="color:#24292e;">## 创建 hash，key 为 user_hset 字段为 user1，值为 沉默王二</span></span>
<span class="line"><span style="color:#24292e;">&gt; hset user_hset user1 沉默王二</span></span>
<span class="line"><span style="color:#24292e;">1</span></span>
<span class="line"><span style="color:#24292e;">&gt; hset user_hset user2 沉默王三</span></span>
<span class="line"><span style="color:#24292e;">1</span></span>
<span class="line"><span style="color:#24292e;">## 字段长度</span></span>
<span class="line"><span style="color:#24292e;">&gt; hlen user_hset</span></span>
<span class="line"><span style="color:#24292e;">2</span></span>
<span class="line"><span style="color:#24292e;">## 所有字段</span></span>
<span class="line"><span style="color:#24292e;">&gt; HKEYS user_hset</span></span>
<span class="line"><span style="color:#24292e;">user1</span></span>
<span class="line"><span style="color:#24292e;">user2</span></span>
<span class="line"><span style="color:#24292e;">## 所有值</span></span>
<span class="line"><span style="color:#24292e;">&gt; hvals user_hset</span></span>
<span class="line"><span style="color:#24292e;">沉默王二</span></span>
<span class="line"><span style="color:#24292e;">沉默王三</span></span>
<span class="line"><span style="color:#24292e;">## 字段 user1 的值</span></span>
<span class="line"><span style="color:#24292e;">&gt; hget user_hset user1</span></span>
<span class="line"><span style="color:#24292e;">沉默王二</span></span>
<span class="line"><span style="color:#24292e;">## 获取 key 为 user_hset 的所有字段和值</span></span>
<span class="line"><span style="color:#24292e;">&gt; hgetall user_hset</span></span>
<span class="line"><span style="color:#24292e;">user1</span></span>
<span class="line"><span style="color:#24292e;">沉默王二</span></span>
<span class="line"><span style="color:#24292e;">user2</span></span>
<span class="line"><span style="color:#24292e;">沉默王三</span></span>
<span class="line"><span style="color:#24292e;">## 更新字段</span></span>
<span class="line"><span style="color:#24292e;">&gt; hset user_hset user1 沉默王四</span></span>
<span class="line"><span style="color:#24292e;">0</span></span>
<span class="line"><span style="color:#24292e;">&gt; hgetall user_hset</span></span>
<span class="line"><span style="color:#24292e;">user1</span></span>
<span class="line"><span style="color:#24292e;">沉默王四</span></span>
<span class="line"><span style="color:#24292e;">user2</span></span>
<span class="line"><span style="color:#24292e;">沉默王三</span></span>
<span class="line"><span style="color:#24292e;">&gt; hdel user_hset user1</span></span>
<span class="line"><span style="color:#24292e;">1</span></span>
<span class="line"><span style="color:#24292e;">&gt; hgetall user_hset</span></span>
<span class="line"><span style="color:#24292e;">user2</span></span>
<span class="line"><span style="color:#24292e;">沉默王三</span></span></code></pre></div><p><strong>3）list</strong></p><p>list 是一个简单的字符串列表，按照插入顺序排序。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">## 添加 key 为 user_list value 为 沉默王二、沉默万三的集合</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; lpush user_list 沉默王二 沉默王三</span></span>
<span class="line"><span style="color:#f6f6f4;">2</span></span>
<span class="line"><span style="color:#f6f6f4;">## 查询</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; lrange user_list 0 -1</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王三</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王二</span></span>
<span class="line"><span style="color:#f6f6f4;">## 往尾部添加</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; rpush user_list 沉默王二是沙比</span></span>
<span class="line"><span style="color:#f6f6f4;">3</span></span>
<span class="line"><span style="color:#f6f6f4;">## 头部添加</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; lpush user_list 沉默王二是傻叉</span></span>
<span class="line"><span style="color:#f6f6f4;">4</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; lrange user_list 0 -1</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王二是傻叉</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王三</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王二</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王二是沙比</span></span>
<span class="line"><span style="color:#f6f6f4;">## 更新 index 为 0 的值</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; lset user_list 0 沉默王四</span></span>
<span class="line"><span style="color:#f6f6f4;">OK</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; lrange user_list 0 -1</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王四</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王三</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王二</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王二是沙比</span></span>
<span class="line"><span style="color:#f6f6f4;">## 删除 index 为 0 的值</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; lrem user_list 0 沉默王四</span></span>
<span class="line"><span style="color:#f6f6f4;">1</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; lrange user_list 0 -1</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王三</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王二</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王二是沙比</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">## 添加 key 为 user_list value 为 沉默王二、沉默万三的集合</span></span>
<span class="line"><span style="color:#24292e;">&gt; lpush user_list 沉默王二 沉默王三</span></span>
<span class="line"><span style="color:#24292e;">2</span></span>
<span class="line"><span style="color:#24292e;">## 查询</span></span>
<span class="line"><span style="color:#24292e;">&gt; lrange user_list 0 -1</span></span>
<span class="line"><span style="color:#24292e;">沉默王三</span></span>
<span class="line"><span style="color:#24292e;">沉默王二</span></span>
<span class="line"><span style="color:#24292e;">## 往尾部添加</span></span>
<span class="line"><span style="color:#24292e;">&gt; rpush user_list 沉默王二是沙比</span></span>
<span class="line"><span style="color:#24292e;">3</span></span>
<span class="line"><span style="color:#24292e;">## 头部添加</span></span>
<span class="line"><span style="color:#24292e;">&gt; lpush user_list 沉默王二是傻叉</span></span>
<span class="line"><span style="color:#24292e;">4</span></span>
<span class="line"><span style="color:#24292e;">&gt; lrange user_list 0 -1</span></span>
<span class="line"><span style="color:#24292e;">沉默王二是傻叉</span></span>
<span class="line"><span style="color:#24292e;">沉默王三</span></span>
<span class="line"><span style="color:#24292e;">沉默王二</span></span>
<span class="line"><span style="color:#24292e;">沉默王二是沙比</span></span>
<span class="line"><span style="color:#24292e;">## 更新 index 为 0 的值</span></span>
<span class="line"><span style="color:#24292e;">&gt; lset user_list 0 沉默王四</span></span>
<span class="line"><span style="color:#24292e;">OK</span></span>
<span class="line"><span style="color:#24292e;">&gt; lrange user_list 0 -1</span></span>
<span class="line"><span style="color:#24292e;">沉默王四</span></span>
<span class="line"><span style="color:#24292e;">沉默王三</span></span>
<span class="line"><span style="color:#24292e;">沉默王二</span></span>
<span class="line"><span style="color:#24292e;">沉默王二是沙比</span></span>
<span class="line"><span style="color:#24292e;">## 删除 index 为 0 的值</span></span>
<span class="line"><span style="color:#24292e;">&gt; lrem user_list 0 沉默王四</span></span>
<span class="line"><span style="color:#24292e;">1</span></span>
<span class="line"><span style="color:#24292e;">&gt; lrange user_list 0 -1</span></span>
<span class="line"><span style="color:#24292e;">沉默王三</span></span>
<span class="line"><span style="color:#24292e;">沉默王二</span></span>
<span class="line"><span style="color:#24292e;">沉默王二是沙比</span></span></code></pre></div><p><strong>4）set</strong></p><p>set 是 string 类型的无序集合，不允许有重复的元素。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">## 添加 key 为 user_set value 为沉默王二 沉默王三 沉默王二的狗腿子的集合</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; sadd user_set 沉默王二 沉默王三 沉默王二的狗腿子</span></span>
<span class="line"><span style="color:#f6f6f4;">3</span></span>
<span class="line"><span style="color:#f6f6f4;">## 查询</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; smembers user_set</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王二</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王二的狗腿子</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王三</span></span>
<span class="line"><span style="color:#f6f6f4;">## 删除 value 为沉默王二的元素</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; srem user_set 沉默王二</span></span>
<span class="line"><span style="color:#f6f6f4;">1</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; smembers user_set</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王二的狗腿子</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王三</span></span>
<span class="line"><span style="color:#f6f6f4;">## 添加</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; sadd user_set 沉默王二</span></span>
<span class="line"><span style="color:#f6f6f4;">1</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; smembers user_set</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王二</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王二的狗腿子</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王三</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">## 添加 key 为 user_set value 为沉默王二 沉默王三 沉默王二的狗腿子的集合</span></span>
<span class="line"><span style="color:#24292e;">&gt; sadd user_set 沉默王二 沉默王三 沉默王二的狗腿子</span></span>
<span class="line"><span style="color:#24292e;">3</span></span>
<span class="line"><span style="color:#24292e;">## 查询</span></span>
<span class="line"><span style="color:#24292e;">&gt; smembers user_set</span></span>
<span class="line"><span style="color:#24292e;">沉默王二</span></span>
<span class="line"><span style="color:#24292e;">沉默王二的狗腿子</span></span>
<span class="line"><span style="color:#24292e;">沉默王三</span></span>
<span class="line"><span style="color:#24292e;">## 删除 value 为沉默王二的元素</span></span>
<span class="line"><span style="color:#24292e;">&gt; srem user_set 沉默王二</span></span>
<span class="line"><span style="color:#24292e;">1</span></span>
<span class="line"><span style="color:#24292e;">&gt; smembers user_set</span></span>
<span class="line"><span style="color:#24292e;">沉默王二的狗腿子</span></span>
<span class="line"><span style="color:#24292e;">沉默王三</span></span>
<span class="line"><span style="color:#24292e;">## 添加</span></span>
<span class="line"><span style="color:#24292e;">&gt; sadd user_set 沉默王二</span></span>
<span class="line"><span style="color:#24292e;">1</span></span>
<span class="line"><span style="color:#24292e;">&gt; smembers user_set</span></span>
<span class="line"><span style="color:#24292e;">沉默王二</span></span>
<span class="line"><span style="color:#24292e;">沉默王二的狗腿子</span></span>
<span class="line"><span style="color:#24292e;">沉默王三</span></span></code></pre></div><p><strong>5）sorted set</strong></p><p>sorted set 是 string 类型的有序集合，不允许有重复的元素。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&gt; FLUSHDB</span></span>
<span class="line"><span style="color:#f6f6f4;">OK</span></span>
<span class="line"><span style="color:#f6f6f4;">## 添加 key 为 user_zset 分数为 1 值为沉默王二、分数为 2 值为沉默王三、分数为 3 值为沉默王二的狗腿子</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; zadd user_zset 1 沉默王二 2 沉默王三 3 沉默王二的狗腿子</span></span>
<span class="line"><span style="color:#f6f6f4;">3</span></span>
<span class="line"><span style="color:#f6f6f4;">## 查询</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; zrange user_zset 0 -1</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王二</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王三</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王二的狗腿子</span></span>
<span class="line"><span style="color:#f6f6f4;">## 反转</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; zrevrange user_zset 0 -1</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王二的狗腿子</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王三</span></span>
<span class="line"><span style="color:#f6f6f4;">沉默王二</span></span>
<span class="line"><span style="color:#f6f6f4;">## 查询元素沉默王二的分数</span></span>
<span class="line"><span style="color:#f6f6f4;">&gt; zscore user_zset 沉默王二</span></span>
<span class="line"><span style="color:#f6f6f4;">1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&gt; FLUSHDB</span></span>
<span class="line"><span style="color:#24292e;">OK</span></span>
<span class="line"><span style="color:#24292e;">## 添加 key 为 user_zset 分数为 1 值为沉默王二、分数为 2 值为沉默王三、分数为 3 值为沉默王二的狗腿子</span></span>
<span class="line"><span style="color:#24292e;">&gt; zadd user_zset 1 沉默王二 2 沉默王三 3 沉默王二的狗腿子</span></span>
<span class="line"><span style="color:#24292e;">3</span></span>
<span class="line"><span style="color:#24292e;">## 查询</span></span>
<span class="line"><span style="color:#24292e;">&gt; zrange user_zset 0 -1</span></span>
<span class="line"><span style="color:#24292e;">沉默王二</span></span>
<span class="line"><span style="color:#24292e;">沉默王三</span></span>
<span class="line"><span style="color:#24292e;">沉默王二的狗腿子</span></span>
<span class="line"><span style="color:#24292e;">## 反转</span></span>
<span class="line"><span style="color:#24292e;">&gt; zrevrange user_zset 0 -1</span></span>
<span class="line"><span style="color:#24292e;">沉默王二的狗腿子</span></span>
<span class="line"><span style="color:#24292e;">沉默王三</span></span>
<span class="line"><span style="color:#24292e;">沉默王二</span></span>
<span class="line"><span style="color:#24292e;">## 查询元素沉默王二的分数</span></span>
<span class="line"><span style="color:#24292e;">&gt; zscore user_zset 沉默王二</span></span>
<span class="line"><span style="color:#24292e;">1</span></span></code></pre></div><h2 id="spring-boot-整合-redis" tabindex="-1">Spring Boot 整合 Redis <a class="header-anchor" href="#spring-boot-整合-redis" aria-label="Permalink to &quot;Spring Boot 整合 Redis&quot;">​</a></h2><p>第一步，在 pom.xml 文件中添加 Redis 的 starter。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>第二步，在 application.yml 文件中添加 Redis 的配置信息</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">spring:</span></span>
<span class="line"><span style="color:#f6f6f4;">  redis:</span></span>
<span class="line"><span style="color:#f6f6f4;">    host: xxx.xxx.99.232 # Redis服务器地址</span></span>
<span class="line"><span style="color:#f6f6f4;">    database: 0 # Redis数据库索引（默认为0）</span></span>
<span class="line"><span style="color:#f6f6f4;">    port: 6379 # Redis服务器连接端口</span></span>
<span class="line"><span style="color:#f6f6f4;">    password: xxx # Redis服务器连接密码（默认为空）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">spring:</span></span>
<span class="line"><span style="color:#24292e;">  redis:</span></span>
<span class="line"><span style="color:#24292e;">    host: xxx.xxx.99.232 # Redis服务器地址</span></span>
<span class="line"><span style="color:#24292e;">    database: 0 # Redis数据库索引（默认为0）</span></span>
<span class="line"><span style="color:#24292e;">    port: 6379 # Redis服务器连接端口</span></span>
<span class="line"><span style="color:#24292e;">    password: xxx # Redis服务器连接密码（默认为空）</span></span></code></pre></div><p>第三步，在测试类中添加以下代码。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">@</span><span style="color:#97E1F1;font-style:italic;">SpringBootTest</span></span>
<span class="line"><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">CodingmoreRedisApplicationTests</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    @</span><span style="color:#97E1F1;font-style:italic;">Resource</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">private</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">RedisTemplate</span><span style="color:#F6F6F4;"> redisTemplate;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    @</span><span style="color:#97E1F1;font-style:italic;">Resource</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">private</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">StringRedisTemplate</span><span style="color:#F6F6F4;"> stringRedisTemplate;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    @</span><span style="color:#97E1F1;font-style:italic;">Test</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">testRedis</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 添加</span></span>
<span class="line"><span style="color:#F6F6F4;">        redisTemplate.</span><span style="color:#62E884;">opsForValue</span><span style="color:#F6F6F4;">().</span><span style="color:#62E884;">set</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">name</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">沉默王二</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 查询</span></span>
<span class="line"><span style="color:#F6F6F4;">        System.out.</span><span style="color:#62E884;">println</span><span style="color:#F6F6F4;">(redisTemplate.</span><span style="color:#62E884;">opsForValue</span><span style="color:#F6F6F4;">().</span><span style="color:#62E884;">get</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">name</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">));</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 删除</span></span>
<span class="line"><span style="color:#F6F6F4;">        redisTemplate.</span><span style="color:#62E884;">delete</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">name</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 更新</span></span>
<span class="line"><span style="color:#F6F6F4;">        redisTemplate.</span><span style="color:#62E884;">opsForValue</span><span style="color:#F6F6F4;">().</span><span style="color:#62E884;">set</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">name</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">沉默王二的狗腿子</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 查询</span></span>
<span class="line"><span style="color:#F6F6F4;">        System.out.</span><span style="color:#62E884;">println</span><span style="color:#F6F6F4;">(redisTemplate.</span><span style="color:#62E884;">opsForValue</span><span style="color:#F6F6F4;">().</span><span style="color:#62E884;">get</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">name</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 添加</span></span>
<span class="line"><span style="color:#F6F6F4;">        stringRedisTemplate.</span><span style="color:#62E884;">opsForValue</span><span style="color:#F6F6F4;">().</span><span style="color:#62E884;">set</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">name</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">沉默王二</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 查询</span></span>
<span class="line"><span style="color:#F6F6F4;">        System.out.</span><span style="color:#62E884;">println</span><span style="color:#F6F6F4;">(stringRedisTemplate.</span><span style="color:#62E884;">opsForValue</span><span style="color:#F6F6F4;">().</span><span style="color:#62E884;">get</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">name</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">));</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 删除</span></span>
<span class="line"><span style="color:#F6F6F4;">        stringRedisTemplate.</span><span style="color:#62E884;">delete</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">name</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 更新</span></span>
<span class="line"><span style="color:#F6F6F4;">        stringRedisTemplate.</span><span style="color:#62E884;">opsForValue</span><span style="color:#F6F6F4;">().</span><span style="color:#62E884;">set</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">name</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">沉默王二的狗腿子</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 查询</span></span>
<span class="line"><span style="color:#F6F6F4;">        System.out.</span><span style="color:#62E884;">println</span><span style="color:#F6F6F4;">(stringRedisTemplate.</span><span style="color:#62E884;">opsForValue</span><span style="color:#F6F6F4;">().</span><span style="color:#62E884;">get</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">name</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">SpringBootTest</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CodingmoreRedisApplicationTests</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Resource</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> RedisTemplate redisTemplate;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Resource</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> StringRedisTemplate stringRedisTemplate;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Test</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">testRedis</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 添加</span></span>
<span class="line"><span style="color:#24292E;">        redisTemplate.</span><span style="color:#6F42C1;">opsForValue</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;沉默王二&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 查询</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(redisTemplate.</span><span style="color:#6F42C1;">opsForValue</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 删除</span></span>
<span class="line"><span style="color:#24292E;">        redisTemplate.</span><span style="color:#6F42C1;">delete</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 更新</span></span>
<span class="line"><span style="color:#24292E;">        redisTemplate.</span><span style="color:#6F42C1;">opsForValue</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;沉默王二的狗腿子&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 查询</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(redisTemplate.</span><span style="color:#6F42C1;">opsForValue</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 添加</span></span>
<span class="line"><span style="color:#24292E;">        stringRedisTemplate.</span><span style="color:#6F42C1;">opsForValue</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;沉默王二&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 查询</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(stringRedisTemplate.</span><span style="color:#6F42C1;">opsForValue</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 删除</span></span>
<span class="line"><span style="color:#24292E;">        stringRedisTemplate.</span><span style="color:#6F42C1;">delete</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 更新</span></span>
<span class="line"><span style="color:#24292E;">        stringRedisTemplate.</span><span style="color:#6F42C1;">opsForValue</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;沉默王二的狗腿子&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 查询</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(stringRedisTemplate.</span><span style="color:#6F42C1;">opsForValue</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>RedisTemplate 和 StringRedisTemplate 都是 Spring Data Redis 提供的模板类，可以对 Redis 进行操作，后者针对键值对都是 String 类型的数据，前者可以是任何类型的对象。</p><p>RedisTemplate 和 StringRedisTemplate 除了提供 opsForValue 方法来操作字符串之外，还提供了以下方法：</p><ul><li>opsForList：操作 list</li><li>opsForSet：操作 set</li><li>opsForZSet：操作有序 set</li><li>opsForHash：操作 hash</li></ul><p>运行测试类后可以在控制台看到以下输出信息：</p><img src="`+y+'"><p>也可以通过 AnotherRedisDesktopManager 客户端查看 Redis 数据库中的数据。</p><img src="'+F+'"><h2 id="编程喵整合-redis" tabindex="-1">编程喵整合 Redis <a class="header-anchor" href="#编程喵整合-redis" aria-label="Permalink to &quot;编程喵整合 Redis&quot;">​</a></h2><p>编程喵是一个 Spring Boot + Vue 的前后端分离项目，要整合 Redis 的话，最好的方式是使用 Spring Cache，仅仅通过 @Cacheable、@CachePut、@CacheEvict、@EnableCaching 等注解就可以轻松使用 Redis 做缓存了。</p><img src="'+d+'"><p><strong>1）@EnableCaching</strong>，开启缓存功能。</p><p><strong>2）@Cacheable</strong>，调用方法前，去缓存中找，找到就返回，找不到就执行方法，并将返回值放到缓存中。</p><p><strong>3）@CachePut</strong>，方法调用前不会去缓存中找，无论如何都会执行方法，执行完将返回值放到缓存中。</p><p><strong>4）@CacheEvict</strong>，清理缓存中的一个或多个记录。</p><p>Spring Cache 是 Spring 提供的一套完整的缓存解决方案，虽然它本身没有提供缓存的实现，但它提供的一整套接口、规范、配置、注解等，可以让我们无缝衔接 Redis、Ehcache 等缓存实现。</p><p>Spring Cache 的注解（前面提到的四个）会在调用方法之后，去缓存方法返回的最终结果；或者在方法调用之前拿缓存中的结果，当然还有删除缓存中的结果。</p><p>这些读写操作不用我们手动再去写代码实现了，直接交给 Spring Cache 来打理就 OK 了，是不是非常贴心？</p><img src="'+f+`"><p><strong>第一步</strong>，在 pom.xml 文件中追加 Redis 的 starter。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p><strong>第二步</strong>，在 application.yml 文件中添加 Redis 链接配置。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">spring:</span></span>
<span class="line"><span style="color:#f6f6f4;">    redis:</span></span>
<span class="line"><span style="color:#f6f6f4;">        host: 118.xx.xx.xxx # Redis服务器地址</span></span>
<span class="line"><span style="color:#f6f6f4;">        database: 0 # Redis数据库索引（默认为0）</span></span>
<span class="line"><span style="color:#f6f6f4;">        port: 6379 # Redis服务器连接端口</span></span>
<span class="line"><span style="color:#f6f6f4;">        password: xx # Redis服务器连接密码（默认为空）</span></span>
<span class="line"><span style="color:#f6f6f4;">        timeout: 1000ms # 连接超时时间（毫秒）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">spring:</span></span>
<span class="line"><span style="color:#24292e;">    redis:</span></span>
<span class="line"><span style="color:#24292e;">        host: 118.xx.xx.xxx # Redis服务器地址</span></span>
<span class="line"><span style="color:#24292e;">        database: 0 # Redis数据库索引（默认为0）</span></span>
<span class="line"><span style="color:#24292e;">        port: 6379 # Redis服务器连接端口</span></span>
<span class="line"><span style="color:#24292e;">        password: xx # Redis服务器连接密码（默认为空）</span></span>
<span class="line"><span style="color:#24292e;">        timeout: 1000ms # 连接超时时间（毫秒）</span></span></code></pre></div><p><strong>第三步</strong>，新增 RedisConfig.java 类，通过 RedisTemplate 设置 JSON 格式的序列化器，这样的话存储到 Redis 里的数据将是有类型的 JSON 数据，例如：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">@</span><span style="color:#97E1F1;font-style:italic;">EnableCaching</span></span>
<span class="line"><span style="color:#F6F6F4;">@</span><span style="color:#97E1F1;font-style:italic;">Configuration</span></span>
<span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">RedisConfig</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">extends</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">CachingConfigurerSupport</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    @</span><span style="color:#97E1F1;font-style:italic;">Bean</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">RedisTemplate</span><span style="color:#F6F6F4;">&lt;String, Object&gt; </span><span style="color:#62E884;">redisTemplate</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">RedisConnectionFactory</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">redisConnectionFactory</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;font-style:italic;">RedisTemplate</span><span style="color:#F6F6F4;">&lt;String, Object&gt; redisTemplate </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">RedisTemplate</span><span style="color:#F6F6F4;">&lt;&gt;();</span></span>
<span class="line"><span style="color:#F6F6F4;">        redisTemplate.</span><span style="color:#62E884;">setConnectionFactory</span><span style="color:#F6F6F4;">(redisConnectionFactory);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 通过 Jackson 组件进行序列化</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;font-style:italic;">RedisSerializer</span><span style="color:#F6F6F4;">&lt;Object&gt; serializer </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">redisSerializer</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// key 和 value</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 一般来说， redis-key采用字符串序列化；</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// redis-value采用json序列化， json的体积小，可读性高，不需要实现serializer接口。</span></span>
<span class="line"><span style="color:#F6F6F4;">        redisTemplate.</span><span style="color:#62E884;">setKeySerializer</span><span style="color:#F6F6F4;">(</span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">StringRedisSerializer</span><span style="color:#F6F6F4;">());</span></span>
<span class="line"><span style="color:#F6F6F4;">        redisTemplate.</span><span style="color:#62E884;">setValueSerializer</span><span style="color:#F6F6F4;">(serializer);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        redisTemplate.</span><span style="color:#62E884;">setHashKeySerializer</span><span style="color:#F6F6F4;">(</span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">StringRedisSerializer</span><span style="color:#F6F6F4;">());</span></span>
<span class="line"><span style="color:#F6F6F4;">        redisTemplate.</span><span style="color:#62E884;">setHashValueSerializer</span><span style="color:#F6F6F4;">(serializer);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">        redisTemplate.</span><span style="color:#62E884;">afterPropertiesSet</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> redisTemplate;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    @</span><span style="color:#97E1F1;font-style:italic;">Bean</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">RedisSerializer</span><span style="color:#F6F6F4;">&lt;Object&gt; </span><span style="color:#62E884;">redisSerializer</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">//创建JSON序列化器</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;font-style:italic;">Jackson2JsonRedisSerializer</span><span style="color:#F6F6F4;">&lt;Object&gt; serializer </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Jackson2JsonRedisSerializer</span><span style="color:#F6F6F4;">&lt;&gt;(Object.class);</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;font-style:italic;">ObjectMapper</span><span style="color:#F6F6F4;"> objectMapper </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">ObjectMapper</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">        objectMapper.</span><span style="color:#62E884;">setVisibility</span><span style="color:#F6F6F4;">(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// https://www.cnblogs.com/shanheyongmu/p/15157378.html</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// objectMapper.enableDefaultTyping()被弃用</span></span>
<span class="line"><span style="color:#F6F6F4;">        objectMapper.</span><span style="color:#62E884;">activateDefaultTyping</span><span style="color:#F6F6F4;">(</span></span>
<span class="line"><span style="color:#F6F6F4;">                LaissezFaireSubTypeValidator.instance,</span></span>
<span class="line"><span style="color:#F6F6F4;">                ObjectMapper.DefaultTyping.NON_FINAL,</span></span>
<span class="line"><span style="color:#F6F6F4;">                JsonTypeInfo.As.WRAPPER_ARRAY);</span></span>
<span class="line"><span style="color:#F6F6F4;">        serializer.</span><span style="color:#62E884;">setObjectMapper</span><span style="color:#F6F6F4;">(objectMapper);</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> serializer;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">EnableCaching</span></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Configuration</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RedisConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CachingConfigurerSupport</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Bean</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> RedisTemplate&lt;</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">Object</span><span style="color:#24292E;">&gt; </span><span style="color:#6F42C1;">redisTemplate</span><span style="color:#24292E;">(RedisConnectionFactory </span><span style="color:#E36209;">redisConnectionFactory</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        RedisTemplate&lt;</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">Object</span><span style="color:#24292E;">&gt; redisTemplate </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> RedisTemplate&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292E;">        redisTemplate.</span><span style="color:#6F42C1;">setConnectionFactory</span><span style="color:#24292E;">(redisConnectionFactory);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 通过 Jackson 组件进行序列化</span></span>
<span class="line"><span style="color:#24292E;">        RedisSerializer&lt;</span><span style="color:#D73A49;">Object</span><span style="color:#24292E;">&gt; serializer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">redisSerializer</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// key 和 value</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 一般来说， redis-key采用字符串序列化；</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// redis-value采用json序列化， json的体积小，可读性高，不需要实现serializer接口。</span></span>
<span class="line"><span style="color:#24292E;">        redisTemplate.</span><span style="color:#6F42C1;">setKeySerializer</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">StringRedisSerializer</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">        redisTemplate.</span><span style="color:#6F42C1;">setValueSerializer</span><span style="color:#24292E;">(serializer);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        redisTemplate.</span><span style="color:#6F42C1;">setHashKeySerializer</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">StringRedisSerializer</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">        redisTemplate.</span><span style="color:#6F42C1;">setHashValueSerializer</span><span style="color:#24292E;">(serializer);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        redisTemplate.</span><span style="color:#6F42C1;">afterPropertiesSet</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> redisTemplate;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Bean</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> RedisSerializer&lt;</span><span style="color:#D73A49;">Object</span><span style="color:#24292E;">&gt; </span><span style="color:#6F42C1;">redisSerializer</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//创建JSON序列化器</span></span>
<span class="line"><span style="color:#24292E;">        Jackson2JsonRedisSerializer&lt;</span><span style="color:#D73A49;">Object</span><span style="color:#24292E;">&gt; serializer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Jackson2JsonRedisSerializer&lt;&gt;(Object.class);</span></span>
<span class="line"><span style="color:#24292E;">        ObjectMapper objectMapper </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ObjectMapper</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        objectMapper.</span><span style="color:#6F42C1;">setVisibility</span><span style="color:#24292E;">(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// https://www.cnblogs.com/shanheyongmu/p/15157378.html</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// objectMapper.enableDefaultTyping()被弃用</span></span>
<span class="line"><span style="color:#24292E;">        objectMapper.</span><span style="color:#6F42C1;">activateDefaultTyping</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">                LaissezFaireSubTypeValidator.instance,</span></span>
<span class="line"><span style="color:#24292E;">                ObjectMapper.DefaultTyping.NON_FINAL,</span></span>
<span class="line"><span style="color:#24292E;">                JsonTypeInfo.As.WRAPPER_ARRAY);</span></span>
<span class="line"><span style="color:#24292E;">        serializer.</span><span style="color:#6F42C1;">setObjectMapper</span><span style="color:#24292E;">(objectMapper);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> serializer;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>通过 RedisCacheConfiguration 设置超时时间，来避免产生很多不必要的缓存数据。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">@</span><span style="color:#97E1F1;font-style:italic;">Bean</span></span>
<span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">RedisCacheManager</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">redisCacheManager</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">RedisConnectionFactory</span><span style="color:#F6F6F4;"> redisConnectionFactory) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E1F1;font-style:italic;">RedisCacheWriter</span><span style="color:#F6F6F4;"> redisCacheWriter </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> RedisCacheWriter.</span><span style="color:#62E884;">nonLockingRedisCacheWriter</span><span style="color:#F6F6F4;">(redisConnectionFactory);</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//设置Redis缓存有效期为1天</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E1F1;font-style:italic;">RedisCacheConfiguration</span><span style="color:#F6F6F4;"> redisCacheConfiguration </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> RedisCacheConfiguration.</span><span style="color:#62E884;">defaultCacheConfig</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">            .</span><span style="color:#62E884;">serializeValuesWith</span><span style="color:#F6F6F4;">(RedisSerializationContext.SerializationPair.</span><span style="color:#62E884;">fromSerializer</span><span style="color:#F6F6F4;">(</span><span style="color:#62E884;">redisSerializer</span><span style="color:#F6F6F4;">())).</span><span style="color:#62E884;">entryTtl</span><span style="color:#F6F6F4;">(Duration.</span><span style="color:#62E884;">ofDays</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">));</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">RedisCacheManager</span><span style="color:#F6F6F4;">(redisCacheWriter, redisCacheConfiguration);</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Bean</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> RedisCacheManager </span><span style="color:#6F42C1;">redisCacheManager</span><span style="color:#24292E;">(RedisConnectionFactory redisConnectionFactory) {</span></span>
<span class="line"><span style="color:#24292E;">    RedisCacheWriter redisCacheWriter </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> RedisCacheWriter.</span><span style="color:#6F42C1;">nonLockingRedisCacheWriter</span><span style="color:#24292E;">(redisConnectionFactory);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//设置Redis缓存有效期为1天</span></span>
<span class="line"><span style="color:#24292E;">    RedisCacheConfiguration redisCacheConfiguration </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> RedisCacheConfiguration.</span><span style="color:#6F42C1;">defaultCacheConfig</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">            .</span><span style="color:#6F42C1;">serializeValuesWith</span><span style="color:#24292E;">(RedisSerializationContext.SerializationPair.</span><span style="color:#6F42C1;">fromSerializer</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">redisSerializer</span><span style="color:#24292E;">())).</span><span style="color:#6F42C1;">entryTtl</span><span style="color:#24292E;">(Duration.</span><span style="color:#6F42C1;">ofDays</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RedisCacheManager</span><span style="color:#24292E;">(redisCacheWriter, redisCacheConfiguration);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><strong>第四步</strong>，在标签更新接口中添加 @CachePut 注解，也就是说方法执行前不会去缓存中找，但方法执行完会将返回值放入缓存中。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">@</span><span style="color:#97E1F1;font-style:italic;">Controller</span></span>
<span class="line"><span style="color:#F6F6F4;">@</span><span style="color:#97E1F1;font-style:italic;">Api</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">tags</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">标签</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">@</span><span style="color:#97E1F1;font-style:italic;">RequestMapping</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">/postTag</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">PostTagController</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    @</span><span style="color:#97E1F1;font-style:italic;">Autowired</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">private</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">IPostTagService</span><span style="color:#F6F6F4;"> postTagService;</span></span>
<span class="line"><span style="color:#F6F6F4;">    @</span><span style="color:#97E1F1;font-style:italic;">Autowired</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">private</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">IPostTagRelationService</span><span style="color:#F6F6F4;"> postTagRelationService;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    @</span><span style="color:#97E1F1;font-style:italic;">RequestMapping</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">value</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">/update</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">method</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> RequestMethod.POST)</span></span>
<span class="line"><span style="color:#F6F6F4;">    @</span><span style="color:#97E1F1;font-style:italic;">ResponseBody</span></span>
<span class="line"><span style="color:#F6F6F4;">    @</span><span style="color:#97E1F1;font-style:italic;">ApiOperation</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">修改标签</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">    @</span><span style="color:#97E1F1;font-style:italic;">CachePut</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">value</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">codingmore</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">key</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">&#39;codingmore:postag:&#39;+#postAddTagParam.postTagId</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">ResultObject</span><span style="color:#F6F6F4;">&lt;String&gt; </span><span style="color:#62E884;">update</span><span style="color:#F6F6F4;">(@</span><span style="color:#97E1F1;font-style:italic;">Valid</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">PostTagParam</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">postAddTagParam</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (postAddTagParam.</span><span style="color:#62E884;">getPostTagId</span><span style="color:#F6F6F4;">() </span><span style="color:#F286C4;">==</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> ResultObject.</span><span style="color:#62E884;">failed</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">标签id不能为空</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;font-style:italic;">PostTag</span><span style="color:#F6F6F4;"> postTag </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> postTagService.</span><span style="color:#62E884;">getById</span><span style="color:#F6F6F4;">(postAddTagParam.</span><span style="color:#62E884;">getPostTagId</span><span style="color:#F6F6F4;">());</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (postTag </span><span style="color:#F286C4;">==</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> ResultObject.</span><span style="color:#62E884;">failed</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">标签不存在</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;font-style:italic;">QueryWrapper</span><span style="color:#F6F6F4;">&lt;PostTag&gt; queryWrapper </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">QueryWrapper</span><span style="color:#F6F6F4;">&lt;&gt;();</span></span>
<span class="line"><span style="color:#F6F6F4;">        queryWrapper.</span><span style="color:#62E884;">eq</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">description</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, postAddTagParam.</span><span style="color:#62E884;">getDescription</span><span style="color:#F6F6F4;">());</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> count </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> postTagService.</span><span style="color:#62E884;">count</span><span style="color:#F6F6F4;">(queryWrapper);</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (count </span><span style="color:#F286C4;">&gt;</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">            </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> ResultObject.</span><span style="color:#62E884;">failed</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">标签名称已存在</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">        }</span></span>
<span class="line"><span style="color:#F6F6F4;">        BeanUtils.</span><span style="color:#62E884;">copyProperties</span><span style="color:#F6F6F4;">(postAddTagParam, postTag);</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> ResultObject.</span><span style="color:#62E884;">success</span><span style="color:#F6F6F4;">(postTagService.</span><span style="color:#62E884;">updateById</span><span style="color:#F6F6F4;">(postTag) </span><span style="color:#F286C4;">?</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">修改成功</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">修改失败</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Controller</span></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Api</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">tags</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;标签&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">RequestMapping</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/postTag&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PostTagController</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Autowired</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> IPostTagService postTagService;</span></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Autowired</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> IPostTagRelationService postTagRelationService;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">RequestMapping</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">value</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;/update&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">method</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> RequestMethod.POST)</span></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">ResponseBody</span></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">ApiOperation</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;修改标签&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">CachePut</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">value</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;codingmore&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">key</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&#39;codingmore:postag:&#39;+#postAddTagParam.postTagId&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> ResultObject&lt;</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">&gt; </span><span style="color:#6F42C1;">update</span><span style="color:#24292E;">(@</span><span style="color:#D73A49;">Valid</span><span style="color:#24292E;"> PostTagParam </span><span style="color:#E36209;">postAddTagParam</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (postAddTagParam.</span><span style="color:#6F42C1;">getPostTagId</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ResultObject.</span><span style="color:#6F42C1;">failed</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;标签id不能为空&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        PostTag postTag </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> postTagService.</span><span style="color:#6F42C1;">getById</span><span style="color:#24292E;">(postAddTagParam.</span><span style="color:#6F42C1;">getPostTagId</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (postTag </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ResultObject.</span><span style="color:#6F42C1;">failed</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;标签不存在&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        QueryWrapper&lt;</span><span style="color:#D73A49;">PostTag</span><span style="color:#24292E;">&gt; queryWrapper </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> QueryWrapper&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292E;">        queryWrapper.</span><span style="color:#6F42C1;">eq</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;description&quot;</span><span style="color:#24292E;">, postAddTagParam.</span><span style="color:#6F42C1;">getDescription</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> postTagService.</span><span style="color:#6F42C1;">count</span><span style="color:#24292E;">(queryWrapper);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (count </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ResultObject.</span><span style="color:#6F42C1;">failed</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;标签名称已存在&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        BeanUtils.</span><span style="color:#6F42C1;">copyProperties</span><span style="color:#24292E;">(postAddTagParam, postTag);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ResultObject.</span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">(postTagService.</span><span style="color:#6F42C1;">updateById</span><span style="color:#24292E;">(postTag) </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;修改成功&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;修改失败&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>注意看 @CachePut 注解这行代码：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">@</span><span style="color:#97E1F1;font-style:italic;">CachePut</span><span style="color:#F6F6F4;">(</span><span style="color:#BF9EEE;">value</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">codingmore</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">key</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">&#39;codingmore:postag:&#39;+#postAddTagParam.postTagId</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">CachePut</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">value</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;codingmore&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">key</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&#39;codingmore:postag:&#39;+#postAddTagParam.postTagId&quot;</span><span style="color:#24292E;">)</span></span></code></pre></div><ul><li>value：缓存名称，也就是缓存的命名空间，value 这里应该换成 namespace 更好一点；</li><li>key：用于在命名空间中缓存的 key 值，可以使用 SpEL 表达式，比如说 <code>&#39;codingmore:postag:&#39;+#postAddTagParam.postTagId</code>；</li><li>还有两个属性 unless 和 condition 暂时没用到，分别表示条件符合则不缓存，条件符合则缓存。</li></ul><p><strong>第五步</strong>，启动服务器端，启动客户端，修改标签进行测试。</p><img src="`+g+'"><p>通过 Red 客户端（一款 macOS 版的 Redis 桌面工具），可以看到刚刚更新的返回值已经添加到 Redis 中了。</p><img src="'+E+'"><h2 id="使用-redis-连接池" tabindex="-1">使用 Redis 连接池 <a class="header-anchor" href="#使用-redis-连接池" aria-label="Permalink to &quot;使用 Redis 连接池&quot;">​</a></h2><p>Redis 是基于内存的数据库，本来是为了提高程序性能的，但如果不使用 Redis 连接池的话，建立连接、断开连接就需要消耗大量的时间。</p><p>用了连接池，就可以实现在客户端建立多个连接，需要的时候从连接池拿，用完了再放回去，这样就节省了连接建立、断开的时间。</p><p>要使用连接池，我们得先了解 Redis 的客户端，常用的有两种：Jedis 和 Lettuce。</p><ul><li>Jedis：Spring Boot 1.5.x 版本时默认的 Redis 客户端，实现上是直接连接 Redis Server，如果在多线程环境下是非线程安全的，这时候要使用连接池为每个 jedis 实例增加物理连接；</li><li>Lettuce：Spring Boot 2.x 版本后默认的 Redis 客户端，基于 Netty 实现，连接实例可以在多个线程间并发访问，一个连接实例不够的情况下也可以按需要增加连接实例。</li></ul><p>它俩在 GitHub 上都挺受欢迎的，大家可以按需选用。</p><img src="'+u+`"><p>我这里把两种客户端的情况都演示一下，方便小伙伴们参考。</p><p><strong>1）Lettuce</strong></p><p><strong>第一步</strong>，修改 application-dev.yml，添加 Lettuce 连接池配置（pool 节点）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">spring:</span></span>
<span class="line"><span style="color:#f6f6f4;">    redis:</span></span>
<span class="line"><span style="color:#f6f6f4;">        lettuce:</span></span>
<span class="line"><span style="color:#f6f6f4;">          pool:</span></span>
<span class="line"><span style="color:#f6f6f4;">            max-active: 8 # 连接池最大连接数</span></span>
<span class="line"><span style="color:#f6f6f4;">            max-idle: 8 # 连接池最大空闲连接数</span></span>
<span class="line"><span style="color:#f6f6f4;">            min-idle: 0 # 连接池最小空闲连接数</span></span>
<span class="line"><span style="color:#f6f6f4;">            max-wait: -1ms # 连接池最大阻塞等待时间，负值表示没有限制</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">spring:</span></span>
<span class="line"><span style="color:#24292e;">    redis:</span></span>
<span class="line"><span style="color:#24292e;">        lettuce:</span></span>
<span class="line"><span style="color:#24292e;">          pool:</span></span>
<span class="line"><span style="color:#24292e;">            max-active: 8 # 连接池最大连接数</span></span>
<span class="line"><span style="color:#24292e;">            max-idle: 8 # 连接池最大空闲连接数</span></span>
<span class="line"><span style="color:#24292e;">            min-idle: 0 # 连接池最小空闲连接数</span></span>
<span class="line"><span style="color:#24292e;">            max-wait: -1ms # 连接池最大阻塞等待时间，负值表示没有限制</span></span></code></pre></div><p><strong>第二步</strong>，在 pom.xml 文件中添加 commons-pool2 依赖，否则会在启动的时候报 ClassNotFoundException 的错。这是因为 Spring Boot 2.x 里默认没启用连接池。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">Caused by: java.lang.ClassNotFoundException: org.apache.commons.pool2.impl.GenericObjectPoolConfig</span></span>
<span class="line"><span style="color:#f6f6f4;">    at java.net.URLClassLoader.findClass(URLClassLoader.java:381)</span></span>
<span class="line"><span style="color:#f6f6f4;">    at java.lang.ClassLoader.loadClass(ClassLoader.java:424)</span></span>
<span class="line"><span style="color:#f6f6f4;">    at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:335)</span></span>
<span class="line"><span style="color:#f6f6f4;">    at java.lang.ClassLoader.loadClass(ClassLoader.java:357)</span></span>
<span class="line"><span style="color:#f6f6f4;">    ... 153 common frames omitted</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Caused by: java.lang.ClassNotFoundException: org.apache.commons.pool2.impl.GenericObjectPoolConfig</span></span>
<span class="line"><span style="color:#24292e;">    at java.net.URLClassLoader.findClass(URLClassLoader.java:381)</span></span>
<span class="line"><span style="color:#24292e;">    at java.lang.ClassLoader.loadClass(ClassLoader.java:424)</span></span>
<span class="line"><span style="color:#24292e;">    at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:335)</span></span>
<span class="line"><span style="color:#24292e;">    at java.lang.ClassLoader.loadClass(ClassLoader.java:357)</span></span>
<span class="line"><span style="color:#24292e;">    ... 153 common frames omitted</span></span></code></pre></div><p>添加 commons-pool2 依赖：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;groupId&gt;org.apache.commons&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;artifactId&gt;commons-pool2&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;version&gt;2.6.2&lt;/version&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;type&gt;jar&lt;/type&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;scope&gt;compile&lt;/scope&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.apache.commons&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;commons-pool2&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;version&gt;2.6.2&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;type&gt;jar&lt;/type&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;scope&gt;compile&lt;/scope&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>重新启动服务，在 RedisConfig 类的 redisTemplate 方法里对 redisTemplate 打上断点，debug 模式下可以看到连接池的配置信息（<code>redisConnectionFactory→clientConfiguration→poolConfig</code>）。如下图所示。</p><img src="`+m+'"><p>如果在 application-dev.yml 文件中没有添加 Lettuce 连接池配置的话，是不会看到</p><img src="'+h+`"><p><strong>2）Jedis</strong></p><p><strong>第一步</strong>，在 pom.xml 文件中添加 Jedis 依赖，去除 Lettuce 默认依赖。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;exclusions&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;exclusion&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;groupId&gt;io.lettuce&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;artifactId&gt;lettuce-core&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;/exclusion&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;/exclusions&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;groupId&gt;redis.clients&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;artifactId&gt;jedis&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;exclusions&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;exclusion&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;groupId&gt;io.lettuce&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;artifactId&gt;lettuce-core&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/exclusion&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/exclusions&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;redis.clients&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;jedis&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p><strong>第二步</strong>，修改 application-dev.yml，添加 Jedis 连接池配置。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">spring:</span></span>
<span class="line"><span style="color:#f6f6f4;">    redis:</span></span>
<span class="line"><span style="color:#f6f6f4;">        jedis:</span></span>
<span class="line"><span style="color:#f6f6f4;">          pool:</span></span>
<span class="line"><span style="color:#f6f6f4;">            max-active: 8 # 连接池最大连接数</span></span>
<span class="line"><span style="color:#f6f6f4;">            max-idle: 8 # 连接池最大空闲连接数</span></span>
<span class="line"><span style="color:#f6f6f4;">            min-idle: 0 # 连接池最小空闲连接数</span></span>
<span class="line"><span style="color:#f6f6f4;">            max-wait: -1ms # 连接池最大阻塞等待时间，负值表示没有限制</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">spring:</span></span>
<span class="line"><span style="color:#24292e;">    redis:</span></span>
<span class="line"><span style="color:#24292e;">        jedis:</span></span>
<span class="line"><span style="color:#24292e;">          pool:</span></span>
<span class="line"><span style="color:#24292e;">            max-active: 8 # 连接池最大连接数</span></span>
<span class="line"><span style="color:#24292e;">            max-idle: 8 # 连接池最大空闲连接数</span></span>
<span class="line"><span style="color:#24292e;">            min-idle: 0 # 连接池最小空闲连接数</span></span>
<span class="line"><span style="color:#24292e;">            max-wait: -1ms # 连接池最大阻塞等待时间，负值表示没有限制</span></span></code></pre></div><p>启动服务后，观察 redisTemplate 的 clientConfiguration 节点，可以看到它的值已经变成 DefaultJedisClientConfiguration 对象了。</p><img src="`+C+'"><p>当然了，也可以不配置 Jedis 客户端的连接池，走默认的连接池配置。因为 Jedis 客户端默认增加了连接池的依赖包，在 pom.xml 文件中点开 Jedis 客户端依赖可以查看到。</p><img src="'+b+'"><h2 id="自由操作-redis" tabindex="-1">自由操作 Redis <a class="header-anchor" href="#自由操作-redis" aria-label="Permalink to &quot;自由操作 Redis&quot;">​</a></h2><p>Spring Cache 虽然提供了操作 Redis 的便捷方法，比如我们前面演示的 @CachePut 注解，但注解提供的操作非常有限，比如说它只能保存返回值到缓存中，而返回值并不一定是我们想要保存的结果。</p><img src="'+v+'"><p>与其保存这个返回给客户端的 JSON 信息，我们更想保存的是更新后的标签。那该怎么自由地操作 Redis 呢？</p><img src="'+D+`"><p><strong>第一步</strong>，增加 RedisService 接口：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">interface</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">RedisService</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">    /**</span></span>
<span class="line"><span style="color:#7B7F8B;">     * 保存属性</span></span>
<span class="line"><span style="color:#7B7F8B;">     */</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">set</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">key</span><span style="color:#F6F6F4;">, </span><span style="color:#97E1F1;font-style:italic;">Object</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">value</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">    /**</span></span>
<span class="line"><span style="color:#7B7F8B;">     * 获取属性</span></span>
<span class="line"><span style="color:#7B7F8B;">     */</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E1F1;font-style:italic;">Object</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">get</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">key</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">    /**</span></span>
<span class="line"><span style="color:#7B7F8B;">     * 删除属性</span></span>
<span class="line"><span style="color:#7B7F8B;">     */</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E1F1;font-style:italic;">Boolean</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">del</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">key</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 更多方法见：https://github.com/itwanger/coding-more/blob/main/codingmore-mbg/src/main/java/com/codingmore/service/RedisService.java</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RedisService</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 保存属性</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(String </span><span style="color:#E36209;">key</span><span style="color:#24292E;">, Object </span><span style="color:#E36209;">value</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 获取属性</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    Object </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(String </span><span style="color:#E36209;">key</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 删除属性</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    Boolean </span><span style="color:#6F42C1;">del</span><span style="color:#24292E;">(String </span><span style="color:#E36209;">key</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 更多方法见：https://github.com/itwanger/coding-more/blob/main/codingmore-mbg/src/main/java/com/codingmore/service/RedisService.java</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><strong>第二步</strong>，增加 RedisServiceImpl 实现类：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">@</span><span style="color:#97E1F1;font-style:italic;">Service</span></span>
<span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">RedisServiceImpl</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">implements</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">RedisService</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    @</span><span style="color:#97E1F1;font-style:italic;">Autowired</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">private</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">RedisTemplate</span><span style="color:#F6F6F4;">&lt;String, Object&gt; redisTemplate;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    @</span><span style="color:#97E1F1;font-style:italic;">Override</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">set</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">key</span><span style="color:#F6F6F4;">, </span><span style="color:#97E1F1;font-style:italic;">Object</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">value</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        redisTemplate.</span><span style="color:#62E884;">opsForValue</span><span style="color:#F6F6F4;">().</span><span style="color:#62E884;">set</span><span style="color:#F6F6F4;">(key, value);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    @</span><span style="color:#97E1F1;font-style:italic;">Override</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Object</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">get</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">key</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> redisTemplate.</span><span style="color:#62E884;">opsForValue</span><span style="color:#F6F6F4;">().</span><span style="color:#62E884;">get</span><span style="color:#F6F6F4;">(key);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    @</span><span style="color:#97E1F1;font-style:italic;">Override</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Boolean</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">del</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">key</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> redisTemplate.</span><span style="color:#62E884;">delete</span><span style="color:#F6F6F4;">(key);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 更多代码参考：https://github.com/itwanger/coding-more/blob/main/codingmore-mbg/src/main/java/com/codingmore/service/impl/RedisServiceImpl.java</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Service</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RedisServiceImpl</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">implements</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RedisService</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Autowired</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> RedisTemplate&lt;</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">Object</span><span style="color:#24292E;">&gt; redisTemplate;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Override</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(String </span><span style="color:#E36209;">key</span><span style="color:#24292E;">, Object </span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        redisTemplate.</span><span style="color:#6F42C1;">opsForValue</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(key, value);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Override</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> Object </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(String </span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> redisTemplate.</span><span style="color:#6F42C1;">opsForValue</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(key);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#D73A49;">Override</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> Boolean </span><span style="color:#6F42C1;">del</span><span style="color:#24292E;">(String </span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> redisTemplate.</span><span style="color:#6F42C1;">delete</span><span style="color:#24292E;">(key);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 更多代码参考：https://github.com/itwanger/coding-more/blob/main/codingmore-mbg/src/main/java/com/codingmore/service/impl/RedisServiceImpl.java</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><strong>第三步</strong>，在标签 PostTagController 中增加 Redis 测试用接口 simpleTest ：</p><hr><p>更多内容，只针对《Java程序员进阶之路》星球用户开放，需要的小伙伴可以<a href="https://tobebetterjavaer.com/zhishixingqiu/" target="_blank" rel="noreferrer">戳链接🔗</a>加入我们的星球，一起学习，一起卷。。<strong>编程喵</strong>🐱是一个 Spring Boot+Vue 的前后端分离项目，融合了市面上绝大多数流行的技术要点。通过学习实战项目，你可以将所学的知识通过实践进行检验、你可以拓宽自己的技术边界，你可以掌握一个真正的实战项目是如何从 0 到 1 的。</p><hr><h2 id="项目源码" tabindex="-1">项目源码 <a class="header-anchor" href="#项目源码" aria-label="Permalink to &quot;项目源码&quot;">​</a></h2><blockquote><ul><li>编程喵：<a href="https://github.com/itwanger/coding-more" target="_blank" rel="noreferrer">https://github.com/itwanger/coding-more</a></li><li>整合 Redis 专用：<a href="https://github.com/itwanger/codingmore-learning/tree/main/codingmore-redis" target="_blank" rel="noreferrer">https://github.com/itwanger/coding-more</a></li></ul></blockquote>`,124),S=[A];function T(k,q,_,B,j,x){return n(),a("div",null,S)}const z=s(R,[["render",T]]);export{O as __pageData,z as default};
