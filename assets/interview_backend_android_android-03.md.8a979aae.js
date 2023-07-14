import{_ as e,o as a,c as t,V as r}from"./chunks/framework.c6d8cbec.js";const B=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/android/android-03.md","filePath":"interview/backend/android/android-03.md"}'),o={name:"interview/backend/android/android-03.md"},n=r(`<h3 id="_1、andorid-应用第二次登录实现自动登录" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#1andorid-%E5%BA%94%E7%94%A8%E7%AC%AC%E4%BA%8C%E6%AC%A1%E7%99%BB%E5%BD%95%E5%AE%9E%E7%8E%B0%E8%87%AA%E5%8A%A8%E7%99%BB%E5%BD%95" target="_blank" rel="noreferrer">1、andorid 应用第二次登录实现自动登录</a> <a class="header-anchor" href="#_1、andorid-应用第二次登录实现自动登录" aria-label="Permalink to &quot;[1、andorid 应用第二次登录实现自动登录](https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android最新2021年面试题，高级面试题及附答案解析.md#1andorid-应用第二次登录实现自动登录)&quot;">​</a></h3><p>前置条件是所有用户相关接口都走 https，非用户相关列表类数据走 http。</p><p><strong>步骤</strong></p><p><strong>1、</strong> 第一次登陆 getUserInfo 里带有一个长效 token，该长效 token 用来判断用户是否登陆和换取短 token</p><p><strong>2、</strong> 把长效 token 保存到 SharedPreferences</p><p><strong>3、</strong> 接口请求用长效 token 换取短token，短 token 服务端可以根据你的接口最后一次请求作为标示，超时时间为一天。</p><p><strong>4、</strong> 所有接口都用短效 token</p><p><strong>5、</strong> 如果返回短效 token 失效，执行第3步，再直接当前接口</p><p><strong>6、</strong> 如果长效 token 失效（用户换设备或超过一月），提示用户登录。</p><h3 id="_2、contentprovider与sqlite有什么不一样的" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#2contentprovider%E4%B8%8Esqlite%E6%9C%89%E4%BB%80%E4%B9%88%E4%B8%8D%E4%B8%80%E6%A0%B7%E7%9A%84" target="_blank" rel="noreferrer">2、ContentProvider与sqlite有什么不一样的？</a> <a class="header-anchor" href="#_2、contentprovider与sqlite有什么不一样的" aria-label="Permalink to &quot;[2、ContentProvider与sqlite有什么不一样的？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android最新2021年面试题，高级面试题及附答案解析.md#2contentprovider与sqlite有什么不一样的)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">ContentProvider会对外隐藏内部实现，只需要关注访问contentProvider的uri即可，contentProvider应用在应用间共享。</span></span>
<span class="line"><span style="color:#f6f6f4;">Sqlite操作本应用程序的数据库。</span></span>
<span class="line"><span style="color:#f6f6f4;">ContentProiver可以对本地文件进行增删改查操作</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">ContentProvider会对外隐藏内部实现，只需要关注访问contentProvider的uri即可，contentProvider应用在应用间共享。</span></span>
<span class="line"><span style="color:#24292e;">Sqlite操作本应用程序的数据库。</span></span>
<span class="line"><span style="color:#24292e;">ContentProiver可以对本地文件进行增删改查操作</span></span></code></pre></div><h3 id="_3、aidl的全称是什么-如何工作-能处理哪些类型的数据" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#3aidl%E7%9A%84%E5%85%A8%E7%A7%B0%E6%98%AF%E4%BB%80%E4%B9%88%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C%E8%83%BD%E5%A4%84%E7%90%86%E5%93%AA%E4%BA%9B%E7%B1%BB%E5%9E%8B%E7%9A%84%E6%95%B0%E6%8D%AE" target="_blank" rel="noreferrer">3、AIDL的全称是什么？如何工作？能处理哪些类型的数据？</a> <a class="header-anchor" href="#_3、aidl的全称是什么-如何工作-能处理哪些类型的数据" aria-label="Permalink to &quot;[3、AIDL的全称是什么？如何工作？能处理哪些类型的数据？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android最新2021年面试题，高级面试题及附答案解析.md#3aidl的全称是什么如何工作能处理哪些类型的数据)&quot;">​</a></h3><p>全称是：Android Interface Define Language</p><p>在Android中, 每个应用程序都可以有自己的进程、在写UI应用的时候, 经常要用到Service、在不同的进程中, 怎样传递对象呢?显然, Java中不允许跨进程内存共享、因此传递对象, 只能把对象拆分成操作系统能理解的简单形式, 以达到跨界对象访问的目的、在J2EE中,采用RMI的方式, 可以通过序列化传递对象、在Android中, 则采用AIDL的方式、理论上AIDL可以传递Bundle,实际上做起来却比较麻烦。</p><p>AIDL(AndRoid接口描述语言)是一种借口描述语言; 编译器可以通过aidl文件生成一段代码，通过预先定义的接口达到两个进程内部通信进程的目的、如果需要在一个Activity中, 访问另一个Service中的某个对象, 需要先将对象转化成AIDL可识别的参数(可能是多个参数), 然后使用AIDL来传递这些参数, 在消息的接收端, 使用这些参数组装成自己需要的对象.</p><p>AIDL的IPC的机制和COM或CORBA类似, 是基于接口的，但它是轻量级的。它使用代理类在客户端和实现层间传递值、如果要使用AIDL, 需要完成2件事情:</p><p><strong>1、</strong> 引入AIDL的相关类.;</p><p><strong>2、</strong> 调用aidl产生的class.</p><p><strong>AIDL的创建方法:</strong></p><p>AIDL语法很简单,可以用来声明一个带一个或多个方法的接口，也可以传递参数和返回值。 由于远程调用的需要, 这些参数和返回值并不是任何类型.下面是些AIDL支持的数据类型:</p><p><strong>1、</strong> 不需要import声明的简单Java编程语言类型(int,boolean等)</p><p><strong>2、</strong> String, CharSequence不需要特殊声明</p><p><strong>3、</strong> List, Map和Parcelables类型, 这些类型内所包含的数据成员也只能是简单数据类型, String等其他比支持的类型.</p><p>(另外: 我没尝试Parcelables, 在Eclipse+ADT下编译不过, 或许以后会有所支持)</p><h3 id="_4、activity-fragment传值问题" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#4activityfragment%E4%BC%A0%E5%80%BC%E9%97%AE%E9%A2%98" target="_blank" rel="noreferrer">4、activity，fragment传值问题</a> <a class="header-anchor" href="#_4、activity-fragment传值问题" aria-label="Permalink to &quot;[4、activity，fragment传值问题](https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android最新2021年面试题，高级面试题及附答案解析.md#4activityfragment传值问题)&quot;">​</a></h3><p>通过Bundle传值，在activty定义变量传值，扩展fragment创建传值</p><h3 id="_5、manifest-xml文件中主要包括哪些信息" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#5manifestxml%E6%96%87%E4%BB%B6%E4%B8%AD%E4%B8%BB%E8%A6%81%E5%8C%85%E6%8B%AC%E5%93%AA%E4%BA%9B%E4%BF%A1%E6%81%AF" target="_blank" rel="noreferrer">5、Manifest.xml文件中主要包括哪些信息？</a> <a class="header-anchor" href="#_5、manifest-xml文件中主要包括哪些信息" aria-label="Permalink to &quot;[5、Manifest.xml文件中主要包括哪些信息？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android最新2021年面试题，高级面试题及附答案解析.md#5manifestxml文件中主要包括哪些信息)&quot;">​</a></h3><p><strong>1、</strong> manifest：根节点，描述了package中所有的内容。</p><p><strong>2、</strong> uses-permission：请求你的package正常运作所需赋予的安全许可。</p><p><strong>3、</strong> permission： 声明了安全许可来限制哪些程序能你package中的组件和功能。</p><p><strong>4、</strong> instrumentation：声明了用来测试此package或其他package指令组件的代码。</p><p><strong>5、</strong> application：包含package中application级别组件声明的根节点。</p><p><strong>6、</strong> activity：Activity是用来与用户交互的主要工具。</p><p><strong>7、</strong> receiver：IntentReceiver能使的application获得数据的改变或者发生的操作，即使它当前不在运行。</p><p><strong>8、</strong> service：Service是能在后台运行任意时间的组件。</p><p><strong>9、</strong> provider：ContentProvider是用来管理持久化数据并发布给其他应用程序使用的组件。</p><h3 id="_6、简要解释一下activity、-intent-、intent-filter、service、broadcase、broadcasereceiver" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#6%E7%AE%80%E8%A6%81%E8%A7%A3%E9%87%8A%E4%B8%80%E4%B8%8Bactivity-intent-intent-filterservicebroadcasebroadcasereceiver" target="_blank" rel="noreferrer">6、简要解释一下activity、 intent 、intent filter、service、Broadcase、BroadcaseReceiver</a> <a class="header-anchor" href="#_6、简要解释一下activity、-intent-、intent-filter、service、broadcase、broadcasereceiver" aria-label="Permalink to &quot;[6、简要解释一下activity、 intent 、intent filter、service、Broadcase、BroadcaseReceiver](https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android最新2021年面试题，高级面试题及附答案解析.md#6简要解释一下activity-intent-intent-filterservicebroadcasebroadcasereceiver)&quot;">​</a></h3><p>一个activity呈现了一个用户可以操作的可视化用户界面；一个service不包含可见的用户界面，而是在后台运行，可以与一个activity绑定，通过绑定暴露出来接口并与其进行通信；一个broadcast receiver是一个接收广播消息并做出回应的component，broadcast receiver没有界面；一个intent是一个Intent对象，它保存了消息的内容。对于activity和service来说，它指定了请求的操作名称和待操作数据的URI，Intent对象可以显式的指定一个目标component。如果这样的话，android会找到这个component(基于manifest文件中的声明)并激活它。但如果一个目标不是显式指定的，android必须找到响应intent的最佳component。它是通过将Intent对象和目标的intent filter相比较来完成这一工作的；一个component的intent filter告诉android该component能处理的intent。intent filter也是在manifest文件中声明的。</p><h3 id="_7、serializable-和-parcelable-的区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#7serializable-%E5%92%8C-parcelable-%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">7、Serializable 和 Parcelable 的区别？</a> <a class="header-anchor" href="#_7、serializable-和-parcelable-的区别" aria-label="Permalink to &quot;[7、Serializable 和 Parcelable 的区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android最新2021年面试题，高级面试题及附答案解析.md#7serializable-和-parcelable-的区别)&quot;">​</a></h3><p>如果存储在内存中，推荐使用parcelable，使用serialiable在序列化的时候会产生大量的临时变量，会引起频繁的GC</p><p>如果存储在硬盘上，推荐使用Serializable，虽然serializable效率较低</p><p>Serializable的实现：只需要实现Serializable接口，就会自动生成一个序列化id</p><p>Parcelable的实现：需要实现Parcelable接口，还需要Parcelable.CREATER变量</p><h3 id="_8、什么是-aidl-如何使用" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#8%E4%BB%80%E4%B9%88%E6%98%AF-aidl%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8" target="_blank" rel="noreferrer">8、什么是 AIDL？如何使用？</a> <a class="header-anchor" href="#_8、什么是-aidl-如何使用" aria-label="Permalink to &quot;[8、什么是 AIDL？如何使用？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android最新2021年面试题，高级面试题及附答案解析.md#8什么是-aidl如何使用)&quot;">​</a></h3><p>aidl 是 Android interface definition Language 的英文缩写，意思 Android 接口定义语言。</p><p>使用 aidl 可以帮助我们发布以及调用远程服务，实现跨进程通信。</p><p><strong>1、</strong> 将服务的 aidl 放到对应的 src 目录，工程的 gen 目录会生成相应的接口类</p><p><strong>2、</strong> 我们通过 bindService（Intent，ServiceConnect，int）方法绑定远程服务，在 bindService中 有 一 个 ServiceConnec 接 口 ， 我 们 需 要 覆 写 该 类 的onServiceConnected(ComponentName,IBinder)方法，这个方法的第二个参数 IBinder 对象其实就是已经在 aidl 中定义的接口，因此我们可以将 IBinder 对象强制转换为 aidl 中的接口类。我们通过 IBinder 获取到的对象（也就是 aidl 文件生成的接口）其实是系统产生的代理对象，该代理对象既可以跟我们的进程通信， 又可以跟远程进程通信， 作为一个中间的角色实现了进程间通信。</p><h3 id="_9、嵌入式操作系统内存管理有哪几种-各有何特性" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#9%E5%B5%8C%E5%85%A5%E5%BC%8F%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86%E6%9C%89%E5%93%AA%E5%87%A0%E7%A7%8D-%E5%90%84%E6%9C%89%E4%BD%95%E7%89%B9%E6%80%A7" target="_blank" rel="noreferrer">9、嵌入式操作系统内存管理有哪几种， 各有何特性</a> <a class="header-anchor" href="#_9、嵌入式操作系统内存管理有哪几种-各有何特性" aria-label="Permalink to &quot;[9、嵌入式操作系统内存管理有哪几种， 各有何特性](https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android最新2021年面试题，高级面试题及附答案解析.md#9嵌入式操作系统内存管理有哪几种-各有何特性)&quot;">​</a></h3><p>页式，段式，段页，用到了MMU,虚拟空间等技术</p><h3 id="_10、注册广播的几种方法" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#10%E6%B3%A8%E5%86%8C%E5%B9%BF%E6%92%AD%E7%9A%84%E5%87%A0%E7%A7%8D%E6%96%B9%E6%B3%95" target="_blank" rel="noreferrer">10、注册广播的几种方法?</a> <a class="header-anchor" href="#_10、注册广播的几种方法" aria-label="Permalink to &quot;[10、注册广播的几种方法?](https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android最新2021年面试题，高级面试题及附答案解析.md#10注册广播的几种方法)&quot;">​</a></h3><p><strong>1、</strong> 静态注册:在清单文件中注册， 常见的有监听设备启动，常驻注册不会随程序生命周期改变</p><p><strong>2、</strong> 动态注册:在代码中注册，随着程序的结束，也就停止接受广播了补充一点：有些广播只能通过动态方式注册，比如时间变化事件、屏幕亮灭事件、电量变更事件，因为这些事件触发频率通常很高，如果允许后台监听，会导致进程频繁创建和销毁，从而影响系统整体性能</p><h3 id="_11、请介绍下-contentprovider-是如何实现数据共享的" tabindex="-1">11、请介绍下 ContentProvider 是如何实现数据共享的 <a class="header-anchor" href="#_11、请介绍下-contentprovider-是如何实现数据共享的" aria-label="Permalink to &quot;11、请介绍下 ContentProvider 是如何实现数据共享的&quot;">​</a></h3><h3 id="_12、请描述一下-intent-和-intentfilter" tabindex="-1">12、请描述一下 Intent 和 IntentFilter <a class="header-anchor" href="#_12、请描述一下-intent-和-intentfilter" aria-label="Permalink to &quot;12、请描述一下 Intent 和 IntentFilter&quot;">​</a></h3><h3 id="_13、描述下handler-机制" tabindex="-1">13、描述下Handler 机制 <a class="header-anchor" href="#_13、描述下handler-机制" aria-label="Permalink to &quot;13、描述下Handler 机制&quot;">​</a></h3><h3 id="_14、定位项目中-如何选取定位方案-如何平衡耗电与实时位置的精度" tabindex="-1">14、定位项目中，如何选取定位方案，如何平衡耗电与实时位置的精度？ <a class="header-anchor" href="#_14、定位项目中-如何选取定位方案-如何平衡耗电与实时位置的精度" aria-label="Permalink to &quot;14、定位项目中，如何选取定位方案，如何平衡耗电与实时位置的精度？&quot;">​</a></h3><h3 id="_15、如果后台的activity由于某原因被系统回收了-如何在被系统回收之前保存当前状态" tabindex="-1">15、如果后台的Activity由于某原因被系统回收了，如何在被系统回收之前保存当前状态？ <a class="header-anchor" href="#_15、如果后台的activity由于某原因被系统回收了-如何在被系统回收之前保存当前状态" aria-label="Permalink to &quot;15、如果后台的Activity由于某原因被系统回收了，如何在被系统回收之前保存当前状态？&quot;">​</a></h3><h3 id="_16、android-引入广播机制的用意" tabindex="-1">16、Android 引入广播机制的用意 <a class="header-anchor" href="#_16、android-引入广播机制的用意" aria-label="Permalink to &quot;16、Android 引入广播机制的用意&quot;">​</a></h3><h3 id="_17、listview-如何提高其效率" tabindex="-1">17、ListView 如何提高其效率？ <a class="header-anchor" href="#_17、listview-如何提高其效率" aria-label="Permalink to &quot;17、ListView 如何提高其效率？&quot;">​</a></h3><h3 id="_18、请解释下-android-程序运行时权限与文件系统权限的区别" tabindex="-1">18、请解释下 Android 程序运行时权限与文件系统权限的区别？ <a class="header-anchor" href="#_18、请解释下-android-程序运行时权限与文件系统权限的区别" aria-label="Permalink to &quot;18、请解释下 Android 程序运行时权限与文件系统权限的区别？&quot;">​</a></h3><h3 id="_19、什么情况会导致force-close-如何避免-能否捕获导致其的异常" tabindex="-1">19、什么情况会导致Force Close ？如何避免？能否捕获导致其的异常？ <a class="header-anchor" href="#_19、什么情况会导致force-close-如何避免-能否捕获导致其的异常" aria-label="Permalink to &quot;19、什么情况会导致Force Close ？如何避免？能否捕获导致其的异常？&quot;">​</a></h3><h3 id="_20、android中-帧动画" tabindex="-1">20、Android中，帧动画 <a class="header-anchor" href="#_20、android中-帧动画" aria-label="Permalink to &quot;20、Android中，帧动画&quot;">​</a></h3><h3 id="_21、activity-service-intent之间的关系" tabindex="-1">21、activity，service，intent之间的关系 <a class="header-anchor" href="#_21、activity-service-intent之间的关系" aria-label="Permalink to &quot;21、activity，service，intent之间的关系&quot;">​</a></h3><h3 id="_22、service-是否在-main-thread-中执行-service-里面是否能执行耗时的操作" tabindex="-1">22、Service 是否在 main thread 中执行, service 里面是否能执行耗时的操作? <a class="header-anchor" href="#_22、service-是否在-main-thread-中执行-service-里面是否能执行耗时的操作" aria-label="Permalink to &quot;22、Service 是否在 main thread 中执行, service 里面是否能执行耗时的操作?&quot;">​</a></h3><h3 id="_23、asynctask使用在哪些场景-它的缺陷是什么-如何解决" tabindex="-1">23、AsyncTask使用在哪些场景？它的缺陷是什么？如何解决？ <a class="header-anchor" href="#_23、asynctask使用在哪些场景-它的缺陷是什么-如何解决" aria-label="Permalink to &quot;23、AsyncTask使用在哪些场景？它的缺陷是什么？如何解决？&quot;">​</a></h3><h3 id="_24、事件分发中的-ontouch-和-ontouchevent-有什么区别-又该如何使用" tabindex="-1">24、事件分发中的 onTouch 和 onTouchEvent 有什么区别，又该如何使用？ <a class="header-anchor" href="#_24、事件分发中的-ontouch-和-ontouchevent-有什么区别-又该如何使用" aria-label="Permalink to &quot;24、事件分发中的 onTouch 和 onTouchEvent 有什么区别，又该如何使用？&quot;">​</a></h3><h3 id="_25、android-线程间通信有哪几种方式-重要" tabindex="-1">25、Android 线程间通信有哪几种方式（重要） <a class="header-anchor" href="#_25、android-线程间通信有哪几种方式-重要" aria-label="Permalink to &quot;25、Android 线程间通信有哪几种方式（重要）&quot;">​</a></h3><h3 id="_26、消息推送的方式" tabindex="-1">26、消息推送的方式 <a class="header-anchor" href="#_26、消息推送的方式" aria-label="Permalink to &quot;26、消息推送的方式&quot;">​</a></h3><h3 id="_27、如何退出activity" tabindex="-1">27、如何退出Activity <a class="header-anchor" href="#_27、如何退出activity" aria-label="Permalink to &quot;27、如何退出Activity&quot;">​</a></h3><h3 id="_28、如何将一个activity设置成窗口的样式。" tabindex="-1">28、如何将一个Activity设置成窗口的样式。 <a class="header-anchor" href="#_28、如何将一个activity设置成窗口的样式。" aria-label="Permalink to &quot;28、如何将一个Activity设置成窗口的样式。&quot;">​</a></h3><h3 id="_29、如果有个100m大的文件-需要上传至服务器中-而服务器form表单最大只能上传2m-可以用什么方法。" tabindex="-1">29、如果有个100M大的文件，需要上传至服务器中，而服务器form表单最大只能上传2M，可以用什么方法。 <a class="header-anchor" href="#_29、如果有个100m大的文件-需要上传至服务器中-而服务器form表单最大只能上传2m-可以用什么方法。" aria-label="Permalink to &quot;29、如果有个100M大的文件，需要上传至服务器中，而服务器form表单最大只能上传2M，可以用什么方法。&quot;">​</a></h3><h3 id="_30、如何保存activity的状态" tabindex="-1">30、如何保存activity的状态？ <a class="header-anchor" href="#_30、如何保存activity的状态" aria-label="Permalink to &quot;30、如何保存activity的状态？&quot;">​</a></h3>`,73),i=[n];function d(s,l,E,c,A,h){return a(),t("div",null,i)}const b=e(o,[["render",d]]);export{B as __pageData,b as default};