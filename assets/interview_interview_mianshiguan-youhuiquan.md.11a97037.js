import{_ as a,o as s,c as n,V as e}from"./chunks/framework.c6d8cbec.js";const m=JSON.parse('{"title":"淘宝面试官：优惠券系统该如何设计？","description":"大厂的优惠券系统是如何设计的？","frontmatter":{"title":"淘宝面试官：优惠券系统该如何设计？","shortTitle":"如何设计优惠券系统？","description":"大厂的优惠券系统是如何设计的？","category":["求职面试"],"tag":["面试题&八股文"],"head":[["meta",{"name":"keywords","content":"Java,java,面试题,八股文,优惠券"}]]},"headers":[],"relativePath":"interview/interview/mianshiguan-youhuiquan.md","filePath":"interview/interview/mianshiguan-youhuiquan.md"}'),l={name:"interview/interview/mianshiguan-youhuiquan.md"},t=e(`<h2 id="_1-scenario-场景" tabindex="-1">1 Scenario 场景 <a class="header-anchor" href="#_1-scenario-场景" aria-label="Permalink to &quot;1 Scenario 场景&quot;">​</a></h2><p>电商大厂常见促销手段：</p><ul><li>优惠券</li><li>拼团</li><li>砍价</li><li>老带新</li></ul><h3 id="_1-1-优惠券的种类" tabindex="-1"><strong>1.1 优惠券的种类</strong> <a class="header-anchor" href="#_1-1-优惠券的种类" aria-label="Permalink to &quot;**1.1 优惠券的种类**&quot;">​</a></h3><ul><li>满减券</li><li>直减券</li><li>折扣券</li></ul><h3 id="_1-2-优惠券系统的核心流程" tabindex="-1"><strong>1.2 优惠券系统的核心流程</strong> <a class="header-anchor" href="#_1-2-优惠券系统的核心流程" aria-label="Permalink to &quot;**1.2 优惠券系统的核心流程**&quot;">​</a></h3><h4 id="_1-2-1-发券" tabindex="-1"><strong>1.2.1 发券</strong> <a class="header-anchor" href="#_1-2-1-发券" aria-label="Permalink to &quot;**1.2.1 发券**&quot;">​</a></h4><p>发券的方式：同步发送 or 异步发送</p><h4 id="_1-2-2-领券" tabindex="-1"><strong>1.2.2 领券</strong> <a class="header-anchor" href="#_1-2-2-领券" aria-label="Permalink to &quot;**1.2.2 领券**&quot;">​</a></h4><ul><li>谁能领？</li></ul><p>所有用户 or 指定的用户</p><ul><li>领取上限</li></ul><p>一个优惠券最多能领取多少张？</p><ul><li>领取方式</li></ul><p>用户主动领取 or 自动发放被动领取</p><h4 id="_1-2-3-用券" tabindex="-1"><strong>1.2.3 用券</strong> <a class="header-anchor" href="#_1-2-3-用券" aria-label="Permalink to &quot;**1.2.3 用券**&quot;">​</a></h4><ul><li>作用范围</li></ul><p>商品、商户、类目</p><ul><li>计算方式</li></ul><p>是否互斥、是否达到门槛等</p><h3 id="_1-3-需求拆解" tabindex="-1"><strong>1.3 需求拆解</strong> <a class="header-anchor" href="#_1-3-需求拆解" aria-label="Permalink to &quot;**1.3 需求拆解**&quot;">​</a></h3><h4 id="_1-3-1-商家侧" tabindex="-1"><strong>1.3.1 商家侧</strong> <a class="header-anchor" href="#_1-3-1-商家侧" aria-label="Permalink to &quot;**1.3.1 商家侧**&quot;">​</a></h4><ul><li>创建优惠券</li><li>发送优惠券</li></ul><h4 id="_1-3-2-用户侧" tabindex="-1"><strong>1.3.2 用户侧</strong> <a class="header-anchor" href="#_1-3-2-用户侧" aria-label="Permalink to &quot;**1.3.2 用户侧**&quot;">​</a></h4><ul><li>领取优惠券</li><li>下单</li><li>使用优惠券</li><li>支付</li></ul><h2 id="_2-service-服务" tabindex="-1"><strong>2 Service 服务</strong> <a class="header-anchor" href="#_2-service-服务" aria-label="Permalink to &quot;**2 Service 服务**&quot;">​</a></h2><h3 id="_2-1-服务结构设计" tabindex="-1"><strong>2.1 服务结构设计</strong> <a class="header-anchor" href="#_2-1-服务结构设计" aria-label="Permalink to &quot;**2.1 服务结构设计**&quot;">​</a></h3><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-cdf44a4a-f648-49f0-bebe-686c4a66d2fd.jpg" alt=""></p><h3 id="_2-2-优惠券系统设计技术难点" tabindex="-1"><strong>2.2 优惠券系统设计技术难点</strong> <a class="header-anchor" href="#_2-2-优惠券系统设计技术难点" aria-label="Permalink to &quot;**2.2 优惠券系统设计技术难点**&quot;">​</a></h3><ul><li>券的分布式事务，使用券的过程会出现的分布式问题分析?</li><li>如何防止超发?</li><li>如何大批量给用户发券?</li><li>如何限制券的使用条件?</li><li>如何防止用户重复领券?</li></ul><h2 id="_3-storage存储" tabindex="-1">3 Storage存储 <a class="header-anchor" href="#_3-storage存储" aria-label="Permalink to &quot;3 Storage存储&quot;">​</a></h2><h3 id="_3-1-表单设计" tabindex="-1"><strong>3.1 表单设计</strong> <a class="header-anchor" href="#_3-1-表单设计" aria-label="Permalink to &quot;**3.1 表单设计**&quot;">​</a></h3><h4 id="券批次-券模板-coupon-batch" tabindex="-1"><strong>券批次（券模板），coupon_batch</strong> <a class="header-anchor" href="#券批次-券模板-coupon-batch" aria-label="Permalink to &quot;**券批次（券模板），coupon\\_batch**&quot;">​</a></h4><p>指一批优惠券的抽象、模板，包含优惠券的大部分属性。</p><p>如商家创建了一批优惠券，共1000张，使用时间为2022-11-11 00:00:00 ~ 2022-11-11 23:59:59，规定只有数码类目商品才能使用，满100减50。</p><h4 id="券" tabindex="-1"><strong>券</strong> <a class="header-anchor" href="#券" aria-label="Permalink to &quot;**券**&quot;">​</a></h4><p>发放到用户的一个实体，已与用户绑定。</p><p>如将某批次的优惠券中的一张发送给某个用户，此时优惠券属于用户。</p><h4 id="规则" tabindex="-1"><strong>规则</strong> <a class="header-anchor" href="#规则" aria-label="Permalink to &quot;**规则**&quot;">​</a></h4><p>优惠券的使用有规则和条件限制，比如满100减50券，需要达到门槛金额100元才能使用。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-638df6ed-12f8-4a20-8c58-89051bc9376a.jpg" alt=""></p><p><strong>券批次表 coupon_batch</strong></p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-c4d8f639-328b-42b9-94b0-5e15b8eee784.jpg" alt=""></p><p><strong>规则表 rule：</strong></p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-b2383938-ffbc-4686-808c-908ab11e4b2b.jpg" alt=""></p><p><strong>规则内容：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">{ </span></span>
<span class="line"><span style="color:#f6f6f4;">  threshold: 5.01 // 使用门槛 </span></span>
<span class="line"><span style="color:#f6f6f4;">  amount: 5 // 优惠金额 </span></span>
<span class="line"><span style="color:#f6f6f4;">  use_range: 3 // 使用范围，0—全场，1—商家，2—类别，3—商品 </span></span>
<span class="line"><span style="color:#f6f6f4;">  commodity_id: 10 // 商品 id </span></span>
<span class="line"><span style="color:#f6f6f4;">  receive_count: 1 // 每个用户可以领取的数量 </span></span>
<span class="line"><span style="color:#f6f6f4;">  is_mutex: true // 是否互斥，true 表示互斥，false 表示不互斥 </span></span>
<span class="line"><span style="color:#f6f6f4;">  receive_started_at: 2020-11-1 00:08:00 // 领取开始时间 </span></span>
<span class="line"><span style="color:#f6f6f4;">  receive_ended_at: 2020-11-6 00:08:00 // 领取结束时间 </span></span>
<span class="line"><span style="color:#f6f6f4;">  use_started_at: 2020-11-1 00:00:00 // 使用开始时间 </span></span>
<span class="line"><span style="color:#f6f6f4;">  use_ended_at: 2020-11-11 11:59:59 // 使用结束时间 </span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{ </span></span>
<span class="line"><span style="color:#24292e;">  threshold: 5.01 // 使用门槛 </span></span>
<span class="line"><span style="color:#24292e;">  amount: 5 // 优惠金额 </span></span>
<span class="line"><span style="color:#24292e;">  use_range: 3 // 使用范围，0—全场，1—商家，2—类别，3—商品 </span></span>
<span class="line"><span style="color:#24292e;">  commodity_id: 10 // 商品 id </span></span>
<span class="line"><span style="color:#24292e;">  receive_count: 1 // 每个用户可以领取的数量 </span></span>
<span class="line"><span style="color:#24292e;">  is_mutex: true // 是否互斥，true 表示互斥，false 表示不互斥 </span></span>
<span class="line"><span style="color:#24292e;">  receive_started_at: 2020-11-1 00:08:00 // 领取开始时间 </span></span>
<span class="line"><span style="color:#24292e;">  receive_ended_at: 2020-11-6 00:08:00 // 领取结束时间 </span></span>
<span class="line"><span style="color:#24292e;">  use_started_at: 2020-11-1 00:00:00 // 使用开始时间 </span></span>
<span class="line"><span style="color:#24292e;">  use_ended_at: 2020-11-11 11:59:59 // 使用结束时间 </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>优惠券表 coupon：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">create table t_coupon</span></span>
<span class="line"><span style="color:#f6f6f4;">(</span></span>
<span class="line"><span style="color:#f6f6f4;">    coupon_id     int          null comment &#39;券ID，主键&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    user_id       int          null comment &#39;用户ID&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    batch_id      int          null comment &#39;批次ID&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    status        int          null comment &#39;0-未使用、1-已使用、2-已过期、3-冻结&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    order_id      varchar(255) null comment &#39;对应订单ID&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    received_time datetime     null comment &#39;领取时间&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    validat_time  datetime     null comment &#39;有效日期&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    used_time     datetime     null comment &#39;使用时间&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">create table t_coupon</span></span>
<span class="line"><span style="color:#24292e;">(</span></span>
<span class="line"><span style="color:#24292e;">    coupon_id     int          null comment &#39;券ID，主键&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    user_id       int          null comment &#39;用户ID&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    batch_id      int          null comment &#39;批次ID&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    status        int          null comment &#39;0-未使用、1-已使用、2-已过期、3-冻结&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    order_id      varchar(255) null comment &#39;对应订单ID&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    received_time datetime     null comment &#39;领取时间&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    validat_time  datetime     null comment &#39;有效日期&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    used_time     datetime     null comment &#39;使用时间&#39;</span></span>
<span class="line"><span style="color:#24292e;">);</span></span></code></pre></div><h3 id="_3-2-建券" tabindex="-1"><strong>3.2 建券</strong> <a class="header-anchor" href="#_3-2-建券" aria-label="Permalink to &quot;**3.2 建券**&quot;">​</a></h3><p><strong>1、新建规则</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">INSERT INTO rule (name, type, rule_content) </span></span>
<span class="line"><span style="color:#f6f6f4;">VALUES(“满减规则”, 0, &#39;{ </span></span>
<span class="line"><span style="color:#f6f6f4;">                         threshold: 100 </span></span>
<span class="line"><span style="color:#f6f6f4;">                         amount: 10 </span></span>
<span class="line"><span style="color:#f6f6f4;">                         ...... </span></span>
<span class="line"><span style="color:#f6f6f4;">                       }&#39;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">INSERT INTO rule (name, type, rule_content) </span></span>
<span class="line"><span style="color:#24292e;">VALUES(“满减规则”, 0, &#39;{ </span></span>
<span class="line"><span style="color:#24292e;">                         threshold: 100 </span></span>
<span class="line"><span style="color:#24292e;">                         amount: 10 </span></span>
<span class="line"><span style="color:#24292e;">                         ...... </span></span>
<span class="line"><span style="color:#24292e;">                       }&#39;);</span></span></code></pre></div><p><strong>2、新建优惠券批次</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">INSERT INTO coupon\\_batch (coupon\\_name, rule\\_id, total\\_count ) </span></span>
<span class="line"><span style="color:#f6f6f4;">VALUES(“劳斯莱斯5元代金券”, 1010, 10000);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">INSERT INTO coupon\\_batch (coupon\\_name, rule\\_id, total\\_count ) </span></span>
<span class="line"><span style="color:#24292e;">VALUES(“劳斯莱斯5元代金券”, 1010, 10000);</span></span></code></pre></div><h3 id="_3-3-发券" tabindex="-1"><strong>3.3 发券</strong> <a class="header-anchor" href="#_3-3-发券" aria-label="Permalink to &quot;**3.3 发券**&quot;">​</a></h3><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-066459b1-1271-468e-9e45-c409b6298144.jpg" alt=""></p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-a448c453-8b50-4af8-a913-bda03a6c6f97.jpg" alt=""></p><h5 id="如何给大量用户发券" tabindex="-1"><strong>如何给大量用户发券？</strong> <a class="header-anchor" href="#如何给大量用户发券" aria-label="Permalink to &quot;**如何给大量用户发券？**&quot;">​</a></h5><p>异步发送！</p><h5 id="触达系统" tabindex="-1"><strong>触达系统</strong> <a class="header-anchor" href="#触达系统" aria-label="Permalink to &quot;**触达系统**&quot;">​</a></h5><ul><li>短信、邮件</li></ul><p>可通过调用第三方接口的方式实现</p><ul><li>站内信</li></ul><p>通过数据库插入记录来实现</p><p><strong>信息表 message</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">create table t_message</span></span>
<span class="line"><span style="color:#f6f6f4;">(</span></span>
<span class="line"><span style="color:#f6f6f4;">    id         int null comment &#39;信息ID&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    send_id    int null comment &#39;发送者id&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    rec_id     int null comment &#39;接受者id&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    content    vachar(255) comment &#39;站内信内容&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    is_read    int null comment &#39;是否已读&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    send_time  datetime comment &#39;发送时间&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">)</span></span>
<span class="line"><span style="color:#f6f6f4;">comment &#39;信息表&#39;;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">create table t_message</span></span>
<span class="line"><span style="color:#24292e;">(</span></span>
<span class="line"><span style="color:#24292e;">    id         int null comment &#39;信息ID&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    send_id    int null comment &#39;发送者id&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    rec_id     int null comment &#39;接受者id&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    content    vachar(255) comment &#39;站内信内容&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    is_read    int null comment &#39;是否已读&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    send_time  datetime comment &#39;发送时间&#39;</span></span>
<span class="line"><span style="color:#24292e;">)</span></span>
<span class="line"><span style="color:#24292e;">comment &#39;信息表&#39;;</span></span></code></pre></div><p>先考虑用户量很少的情况，商家要给所有人发站内信，则先遍历用户表，再按照用户表中的所有用户依次将站内信插入到 message 表中。这样，如果有100个用户，则群发一条站内信要执行100个插入操作。</p><h4 id="系统用户数增加到w级" tabindex="-1"><strong>系统用户数增加到w级</strong> <a class="header-anchor" href="#系统用户数增加到w级" aria-label="Permalink to &quot;**系统用户数增加到w级**&quot;">​</a></h4><p>发一条站内信，就得重复插入上万条数据。而且这上万条数据的 content 一样！假设一条站内信占100K，发一次站内信就要消耗十几M。对此，可将原来的表拆成两个表：</p><p><strong>信息表 message</strong></p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-19c6ce5d-8e83-4552-902d-5d28cd17a7be.jpg" alt=""></p><p><strong>信息内容表 message_content</strong></p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-e04b414f-6b41-4882-8324-208715b52284.jpg" alt=""></p><h4 id="发一封站内信的步骤" tabindex="-1"><strong>发一封站内信的步骤</strong> <a class="header-anchor" href="#发一封站内信的步骤" aria-label="Permalink to &quot;**发一封站内信的步骤**&quot;">​</a></h4><ol><li>往 message_content 插入站内信的内容</li><li>在 message 表中，给所有用户插入一条记录，标识有一封站内信</li></ol><h4 id="千w级用户数" tabindex="-1"><strong>千w级用户数</strong> <a class="header-anchor" href="#千w级用户数" aria-label="Permalink to &quot;**千w级用户数**&quot;">​</a></h4><p>这就有【非活跃用户】的问题，假设注册用户一千万，根据二八原则，其中活跃用户占20%。若采用上面拆成两个表的情况，发一封“站内信”，得执行一千万个插入操作。可能剩下80%用户基本都不会再登录，其实只需对其中20%用户插入数据。</p><p><strong>信息表 message：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">create table t_message</span></span>
<span class="line"><span style="color:#f6f6f4;">(</span></span>
<span class="line"><span style="color:#f6f6f4;">    id         int null comment &#39;信息 ID&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    # send_id    int null comment &#39;发送者 id&#39;, 去除该字段</span></span>
<span class="line"><span style="color:#f6f6f4;">    rec_id     int null comment &#39;接受者 id&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    message_id int null comment &#39;外键，信息内容&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    is_read    int null comment &#39;是否已读&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">)</span></span>
<span class="line"><span style="color:#f6f6f4;">    comment &#39;信息表&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;">create table t_message_content</span></span>
<span class="line"><span style="color:#f6f6f4;">(</span></span>
<span class="line"><span style="color:#f6f6f4;">    id        int          null comment &#39;信息内容id&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    send_id     int         null comment &#39;发送者id&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    content   varchar(255) null comment &#39;内容&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    send_time datetime     null comment &#39;发送时间&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">create table t_message</span></span>
<span class="line"><span style="color:#24292e;">(</span></span>
<span class="line"><span style="color:#24292e;">    id         int null comment &#39;信息 ID&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    # send_id    int null comment &#39;发送者 id&#39;, 去除该字段</span></span>
<span class="line"><span style="color:#24292e;">    rec_id     int null comment &#39;接受者 id&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    message_id int null comment &#39;外键，信息内容&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    is_read    int null comment &#39;是否已读&#39;</span></span>
<span class="line"><span style="color:#24292e;">)</span></span>
<span class="line"><span style="color:#24292e;">    comment &#39;信息表&#39;;</span></span>
<span class="line"><span style="color:#24292e;">create table t_message_content</span></span>
<span class="line"><span style="color:#24292e;">(</span></span>
<span class="line"><span style="color:#24292e;">    id        int          null comment &#39;信息内容id&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    send_id     int         null comment &#39;发送者id&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    content   varchar(255) null comment &#39;内容&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    send_time datetime     null comment &#39;发送时间&#39;</span></span>
<span class="line"><span style="color:#24292e;">);</span></span></code></pre></div><h4 id="用户侧操作" tabindex="-1"><strong>用户侧操作</strong> <a class="header-anchor" href="#用户侧操作" aria-label="Permalink to &quot;**用户侧操作**&quot;">​</a></h4><p>登录后，首先查询 message_content 中的那些没有在 message 中有记录的数据，表示是未读的站内信。在查阅站内信的内容时，再将相关的记录插入 message。</p><h4 id="系统侧操作" tabindex="-1"><strong>系统侧操作</strong> <a class="header-anchor" href="#系统侧操作" aria-label="Permalink to &quot;**系统侧操作**&quot;">​</a></h4><p>发站内信时：</p><ul><li>只在 message_content 插入站内信的主体内容</li><li>message 不插入记录</li></ul><h4 id="给-10w-用户发券" tabindex="-1"><strong>给 10W 用户发券</strong> <a class="header-anchor" href="#给-10w-用户发券" aria-label="Permalink to &quot;**给 10W 用户发券**&quot;">​</a></h4><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-e6134270-a52f-4579-a200-e0c0e4c13c82.jpg" alt=""></p><p>有什么问题？重复消费，导致超发！</p><ol><li>运营提供满足条件的用户文件，上传到发券管理后台并选择要发送的优惠券</li><li>管理服务器根据【用户ID】、【券批次ID】生成消息，发送到MQ</li><li>优惠券服务器消费消息</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;"># 记住使用事务哦！</span></span>
<span class="line"><span style="color:#f6f6f4;">INSERT INTO coupon (user_id, coupon_id，batch_id)</span></span>
<span class="line"><span style="color:#f6f6f4;">  VALUES(1001, 66889, 1111);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">UPDATE coupon_batch SET total_count = total_count - 1,</span></span>
<span class="line"><span style="color:#f6f6f4;">                          assign_count = assign_count + 1</span></span>
<span class="line"><span style="color:#f6f6f4;">                      WHERE batch_id = 1111 AND total_count &gt; 0;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 记住使用事务哦！</span></span>
<span class="line"><span style="color:#24292e;">INSERT INTO coupon (user_id, coupon_id，batch_id)</span></span>
<span class="line"><span style="color:#24292e;">  VALUES(1001, 66889, 1111);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">UPDATE coupon_batch SET total_count = total_count - 1,</span></span>
<span class="line"><span style="color:#24292e;">                          assign_count = assign_count + 1</span></span>
<span class="line"><span style="color:#24292e;">                      WHERE batch_id = 1111 AND total_count &gt; 0;</span></span></code></pre></div><h3 id="_3-4-领券" tabindex="-1"><strong>3.4 领券</strong> <a class="header-anchor" href="#_3-4-领券" aria-label="Permalink to &quot;**3.4 领券**&quot;">​</a></h3><h4 id="步骤" tabindex="-1">步骤 <a class="header-anchor" href="#步骤" aria-label="Permalink to &quot;步骤&quot;">​</a></h4><ol><li>校验优惠券余量</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">SELECT total_count FROM coupon_batch</span></span>
<span class="line"><span style="color:#f6f6f4;">WHERE batch_id = 1111;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">SELECT total_count FROM coupon_batch</span></span>
<span class="line"><span style="color:#24292e;">WHERE batch_id = 1111;</span></span></code></pre></div><ol start="2"><li>新增优惠券用户表，扣减余量</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;"># 注意事务！</span></span>
<span class="line"><span style="color:#f6f6f4;">INSERT INTO coupon (user_id, coupon_id，batch_id)</span></span>
<span class="line"><span style="color:#f6f6f4;">  VALUES(1001, 66889, 1111); </span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">UPDATE coupon_batch SET total_count = total_count - 1,</span></span>
<span class="line"><span style="color:#f6f6f4;">                          assign_count = assign_count + 1</span></span>
<span class="line"><span style="color:#f6f6f4;">                      WHERE batch_id = 1111 AND total_count &gt; 0;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 注意事务！</span></span>
<span class="line"><span style="color:#24292e;">INSERT INTO coupon (user_id, coupon_id，batch_id)</span></span>
<span class="line"><span style="color:#24292e;">  VALUES(1001, 66889, 1111); </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">UPDATE coupon_batch SET total_count = total_count - 1,</span></span>
<span class="line"><span style="color:#24292e;">                          assign_count = assign_count + 1</span></span>
<span class="line"><span style="color:#24292e;">                      WHERE batch_id = 1111 AND total_count &gt; 0;</span></span></code></pre></div><p>用户领券过程中，其实也会出现类似秒杀场景。秒杀场景下会有哪些问题，如何解决？</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-8367d61b-2a12-4225-9fc2-586a1baac77d.jpg" alt=""></p><h4 id="用户重复领取或多领" tabindex="-1"><strong>用户重复领取或多领</strong> <a class="header-anchor" href="#用户重复领取或多领" aria-label="Permalink to &quot;**用户重复领取或多领**&quot;">​</a></h4><p>Redis 数据校验！</p><ol><li>领券前，先查缓存</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;"># 判断成员元素是否是集合的成员</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 判断成员元素是否是集合的成员</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">SISMEMBER KEY VALUE</span></span>
<span class="line"><span style="color:#f6f6f4;">SISMEMBER batch_id:1111:user_id 1001</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">SISMEMBER KEY VALUE</span></span>
<span class="line"><span style="color:#24292e;">SISMEMBER batch_id:1111:user_id 1001</span></span></code></pre></div><ol start="2"><li>领券</li><li>领券后，更新缓存</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;"># 将一或多个成员元素加入到集合中，已经存在于集合的成员元素将被忽略</span></span>
<span class="line"><span style="color:#f6f6f4;">SADD KEY VALUE1......VALUEN</span></span>
<span class="line"><span style="color:#f6f6f4;">SADD batch_id:1111:user_id 1001</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 将一或多个成员元素加入到集合中，已经存在于集合的成员元素将被忽略</span></span>
<span class="line"><span style="color:#24292e;">SADD KEY VALUE1......VALUEN</span></span>
<span class="line"><span style="color:#24292e;">SADD batch_id:1111:user_id 1001</span></span></code></pre></div><h2 id="_3-5-用券" tabindex="-1"><strong>3.5 用券</strong> <a class="header-anchor" href="#_3-5-用券" aria-label="Permalink to &quot;**3.5 用券**&quot;">​</a></h2><p>何时校验优惠券使用规则？</p><ol><li>确认订单（√）</li><li>提交订单</li><li>立即付款</li></ol><p>确认订单页，对优惠券进行校验：</p><ul><li>判断是否过期</li><li>判断适用范围</li><li>判断是否达到门槛</li><li>判断是否互斥</li></ul><h3 id="返回可用券" tabindex="-1"><strong>返回可用券</strong> <a class="header-anchor" href="#返回可用券" aria-label="Permalink to &quot;**返回可用券**&quot;">​</a></h3><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-182ea6b8-4702-4f01-b3dd-f9636815863f.jpg" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">SELECT batch_id FROM coupon WHERE user_id = 1001 AND status = 0;</span></span>
<span class="line"><span style="color:#f6f6f4;">SELECT rule_id FROM coupon_batch WHERE batch_id = 1111;</span></span>
<span class="line"><span style="color:#f6f6f4;">SELECT name, type, rule_content FROM rule WHERE rule_id = 1010;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">SELECT batch_id FROM coupon WHERE user_id = 1001 AND status = 0;</span></span>
<span class="line"><span style="color:#24292e;">SELECT rule_id FROM coupon_batch WHERE batch_id = 1111;</span></span>
<span class="line"><span style="color:#24292e;">SELECT name, type, rule_content FROM rule WHERE rule_id = 1010;</span></span></code></pre></div><h3 id="选择可用券-并返回结果" tabindex="-1">选择可用券，并返回结果 <a class="header-anchor" href="#选择可用券-并返回结果" aria-label="Permalink to &quot;选择可用券，并返回结果&quot;">​</a></h3><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-3d50a63e-2c1a-413b-9143-f808dcc4e0da.jpg" alt=""></p><h3 id="同时操作多个服务-如何保证一致性" tabindex="-1"><strong>同时操作多个服务，如何保证一致性？</strong> <a class="header-anchor" href="#同时操作多个服务-如何保证一致性" aria-label="Permalink to &quot;**同时操作多个服务，如何保证一致性？**&quot;">​</a></h3><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-3b30f2df-fd77-4265-b655-31a82028505e.jpg" alt=""></p><h3 id="表设计" tabindex="-1"><strong>表设计</strong> <a class="header-anchor" href="#表设计" aria-label="Permalink to &quot;**表设计**&quot;">​</a></h3><p><strong>优惠券操作记录表 Coupon_opt_record</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">create table t_coupon_opt_record</span></span>
<span class="line"><span style="color:#f6f6f4;">(</span></span>
<span class="line"><span style="color:#f6f6f4;">    user_id     int      null comment &#39;用户id&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    coupon_id   int      null comment &#39;优惠券id&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    operating   int      null comment &#39;操作，0-锁定、1-核销、2-解锁&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    operated_at datetime null comment &#39;操作时间&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">create table t_coupon_opt_record</span></span>
<span class="line"><span style="color:#24292e;">(</span></span>
<span class="line"><span style="color:#24292e;">    user_id     int      null comment &#39;用户id&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    coupon_id   int      null comment &#39;优惠券id&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    operating   int      null comment &#39;操作，0-锁定、1-核销、2-解锁&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    operated_at datetime null comment &#39;操作时间&#39;</span></span>
<span class="line"><span style="color:#24292e;">);</span></span></code></pre></div><p>TCC，Try-Confirm-Cancel，目前分布式事务主流解决方案。</p><ol><li>阶段一：Try</li></ol><p>对资源进行冻结，预留业务资源</p><p>创建订单时，将优惠券状态改为 “冻结”</p><ol start="2"><li>阶段二：Confirm</li></ol><p>确认执行业务操作，做真正提交，将第一步Try中冻结的资源，真正扣减</p><p>订单支付成功，将优惠券状态改为 “已使用”</p><ol start="3"><li>阶段三：Cancel</li></ol><p>取消执行业务操作，取消Try阶段预留的业务资源</p><p>支付失败/超时或订单关闭情况，将优惠券状态改为 “未使用”</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-c6a77fdf-4f4d-4082-92a7-c2cd11aba686.jpg" alt=""></p><h2 id="_4-scale-扩展" tabindex="-1">4 Scale 扩展 <a class="header-anchor" href="#_4-scale-扩展" aria-label="Permalink to &quot;4 Scale 扩展&quot;">​</a></h2><h3 id="_4-1-快过期券提醒" tabindex="-1"><strong>4.1 快过期券提醒</strong> <a class="header-anchor" href="#_4-1-快过期券提醒" aria-label="Permalink to &quot;**4.1 快过期券提醒**&quot;">​</a></h3><h4 id="定时扫券表" tabindex="-1"><strong>定时扫券表</strong> <a class="header-anchor" href="#定时扫券表" aria-label="Permalink to &quot;**定时扫券表**&quot;">​</a></h4><p>缺点：扫描数据量太大，随着历史数据越来越多，会影响线上主业务，最终导致慢SQL。</p><h4 id="延时消息" tabindex="-1"><strong>延时消息</strong> <a class="header-anchor" href="#延时消息" aria-label="Permalink to &quot;**延时消息**&quot;">​</a></h4><p>缺点：有些券的有效时间太长了(30天)以上，有可能造成大量 MQ 积压</p><h4 id="新增通知表" tabindex="-1"><strong>新增通知表</strong> <a class="header-anchor" href="#新增通知表" aria-label="Permalink to &quot;**新增通知表**&quot;">​</a></h4><p>优点：扫描的数据量小，效率高。删除无用的已通知的数据记录</p><h5 id="通知信息表-notify-msg-设计" tabindex="-1"><strong>通知信息表（notify_msg）设计</strong> <a class="header-anchor" href="#通知信息表-notify-msg-设计" aria-label="Permalink to &quot;**通知信息表（notify\\_msg）设计**&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">create table t_notify_msg</span></span>
<span class="line"><span style="color:#f6f6f4;">(</span></span>
<span class="line"><span style="color:#f6f6f4;">    id          bigint auto_increment comment &#39;自增主键&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    coupon_id   bigint       null comment &#39;券id&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    user_id     bigint       null comment &#39;用户id&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    notify_day  varchar(255) null comment &#39;需要执行通知的日期&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    notify_type int          null comment &#39;通知类型，1-过期提醒&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    notif_time  timestamp    null comment &#39;通知的时间，在该时间戳所在天内通知&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    status      int          null comment &#39;通知状态，0-初始状态、1-成功、2-失败&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    constraint t_notify_msg_id_uindex</span></span>
<span class="line"><span style="color:#f6f6f4;">        unique (id)</span></span>
<span class="line"><span style="color:#f6f6f4;">);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">alter table t_notify_msg</span></span>
<span class="line"><span style="color:#f6f6f4;">    add primary key (id);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">create table t_notify_msg</span></span>
<span class="line"><span style="color:#24292e;">(</span></span>
<span class="line"><span style="color:#24292e;">    id          bigint auto_increment comment &#39;自增主键&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    coupon_id   bigint       null comment &#39;券id&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    user_id     bigint       null comment &#39;用户id&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    notify_day  varchar(255) null comment &#39;需要执行通知的日期&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    notify_type int          null comment &#39;通知类型，1-过期提醒&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    notif_time  timestamp    null comment &#39;通知的时间，在该时间戳所在天内通知&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    status      int          null comment &#39;通知状态，0-初始状态、1-成功、2-失败&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    constraint t_notify_msg_id_uindex</span></span>
<span class="line"><span style="color:#24292e;">        unique (id)</span></span>
<span class="line"><span style="color:#24292e;">);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">alter table t_notify_msg</span></span>
<span class="line"><span style="color:#24292e;">    add primary key (id);</span></span></code></pre></div><p><strong>过期券提</strong></p><ol><li>在创建优惠券的时候就将需要提醒的记录插入提醒表中notify_msg</li><li>把用户ID+批次ID+通知日期作为唯一索引，防止同一个批次有重复的记录通知，保证每天只会被通知一次</li><li>建立notify_time，通知时间索引，每日的通知扫描通过该索引列查询，通过索引列来提高查询效率</li><li>通知完成后该表中的数据变失去了意义，通过定时任务将该数据删除</li></ol><h3 id="_4-2-数据库层面优化-索引" tabindex="-1"><strong>4.2 数据库层面优化 - 索引</strong> <a class="header-anchor" href="#_4-2-数据库层面优化-索引" aria-label="Permalink to &quot;**4.2 数据库层面优化 - 索引**&quot;">​</a></h3><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-9e10c3cb-d0af-4b0e-a2f9-3da2fe7e72f1.jpg" alt=""></p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-8df5b954-9e5a-445d-882f-f91616fee662.jpg" alt=""></p><h3 id="_4-3-发券接口-限流保护" tabindex="-1"><strong>4.3 发券接口，限流保护</strong> <a class="header-anchor" href="#_4-3-发券接口-限流保护" aria-label="Permalink to &quot;**4.3 发券接口，限流保护**&quot;">​</a></h3><h4 id="前端限流" tabindex="-1"><strong>前端限流</strong> <a class="header-anchor" href="#前端限流" aria-label="Permalink to &quot;**前端限流**&quot;">​</a></h4><p>点击一次后，按钮短时间内置灰</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-daadyhqjtsrhsjd-d2d8684d-9488-4543-9b2b-8e7559c8e625.jpg" alt=""></p><h4 id="后端限流" tabindex="-1"><strong>后端限流</strong> <a class="header-anchor" href="#后端限流" aria-label="Permalink to &quot;**后端限流**&quot;">​</a></h4><p>部分请求直接跳转到【繁忙页】</p>`,151),o=[t];function p(c,i,r,d,f,h){return s(),n("div",null,o)}const g=a(l,[["render",p]]);export{m as __pageData,g as default};
