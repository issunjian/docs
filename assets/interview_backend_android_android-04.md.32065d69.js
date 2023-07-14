import{_ as a,o as e,c as o,V as r}from"./chunks/framework.c6d8cbec.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/android/android-04.md","filePath":"interview/backend/android/android-04.md"}'),t={name:"interview/backend/android/android-04.md"},d=r('<h3 id="_1、dagger2" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#1dagger2" target="_blank" rel="noreferrer">1、dagger2</a> <a class="header-anchor" href="#_1、dagger2" aria-label="Permalink to &quot;[1、dagger2](https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android最新面试题2021年，常见面试题及答案汇总.md#1dagger2)&quot;">​</a></h3><p>Dagger2是一个主要用于依赖注入的框架，减少初始化对象操作，降低耦合度</p><h3 id="_2、android中touch事件的传递机制是怎样的" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#2android%E4%B8%ADtouch%E4%BA%8B%E4%BB%B6%E7%9A%84%E4%BC%A0%E9%80%92%E6%9C%BA%E5%88%B6%E6%98%AF%E6%80%8E%E6%A0%B7%E7%9A%84" target="_blank" rel="noreferrer">2、Android中touch事件的传递机制是怎样的?</a> <a class="header-anchor" href="#_2、android中touch事件的传递机制是怎样的" aria-label="Permalink to &quot;[2、Android中touch事件的传递机制是怎样的?](https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android最新面试题2021年，常见面试题及答案汇总.md#2android中touch事件的传递机制是怎样的)&quot;">​</a></h3><p><strong>1、</strong> Touch事件传递的相关API有dispatchTouchEvent、onTouchEvent、onInterceptTouchEvent</p><p><strong>2、</strong> Touch事件相关的类有View、ViewGroup、Activity</p><p><strong>3、</strong> Touch事件会被封装成MotionEvent对象，该对象封装了手势按下、移动、松开等动作</p><p><strong>4、</strong> Touch事件通常从Activity#dispatchTouchEvent发出，只要没有被消费，会一直往下传递，到最底层的View。</p><p><strong>5、</strong> 如果Touch事件传递到的每个View都不消费事件，那么Touch事件会反向向上传递,最终交由Activity#onTouchEvent处理、</p><p><strong>6、</strong> onInterceptTouchEvent为ViewGroup特有，可以拦截事件、</p><p><strong>7、</strong> Down事件到来时，如果一个View没有消费该事件，那么后续的MOVE/UP事件都不会再给它</p><h3 id="_3、android中任务栈的分配" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#3android%E4%B8%AD%E4%BB%BB%E5%8A%A1%E6%A0%88%E7%9A%84%E5%88%86%E9%85%8D" target="_blank" rel="noreferrer">3、Android中任务栈的分配</a> <a class="header-anchor" href="#_3、android中任务栈的分配" aria-label="Permalink to &quot;[3、Android中任务栈的分配](https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android最新面试题2021年，常见面试题及答案汇总.md#3android中任务栈的分配)&quot;">​</a></h3><p>Task实际上是一个Activity栈，通常用户感受的一个Application就是一个Task。从这个定义来看，Task跟Service或者其他Components是没有任何联系的，它只是针对Activity而言的。</p><p>Activity有不同的启动模式, 可以影响到task的分配</p><h3 id="_4、说说mvc模式的原理-它在android中的运用-android的官方建议应用程序的开发采用mvc模式。何谓mvc" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#4%E8%AF%B4%E8%AF%B4mvc%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%8E%9F%E7%90%86%E5%AE%83%E5%9C%A8android%E4%B8%AD%E7%9A%84%E8%BF%90%E7%94%A8,android%E7%9A%84%E5%AE%98%E6%96%B9%E5%BB%BA%E8%AE%AE%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E7%9A%84%E5%BC%80%E5%8F%91%E9%87%87%E7%94%A8mvc%E6%A8%A1%E5%BC%8F%E3%80%82%E4%BD%95%E8%B0%93mvc" target="_blank" rel="noreferrer">4、说说mvc模式的原理，它在android中的运用,android的官方建议应用程序的开发采用mvc模式。何谓mvc？</a> <a class="header-anchor" href="#_4、说说mvc模式的原理-它在android中的运用-android的官方建议应用程序的开发采用mvc模式。何谓mvc" aria-label="Permalink to &quot;[4、说说mvc模式的原理，它在android中的运用,android的官方建议应用程序的开发采用mvc模式。何谓mvc？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android最新面试题2021年，常见面试题及答案汇总.md#4说说mvc模式的原理它在android中的运用,android的官方建议应用程序的开发采用mvc模式。何谓mvc)&quot;">​</a></h3><p>mvc是model,view,controller的缩写，mvc包含三个部分：</p><p><strong>1、</strong> 模型（model）对象：是应用程序的主体部分，所有的业务逻辑都应该写在该层。</p><p><strong>2、</strong> 视图（view）对象：是应用程序中负责生成用户界面的部分。也是在整个mvc架构中用户唯一可以看到的一层，接收用户的输入，显示处理结果。</p><p><strong>3、</strong> 控制器（control）对象：是根据用户的输入，控制用户界面数据显示及更新model对象状态的部分，控制器更重要的一种导航功能，响应用户出发的相关事件，交给m层处理。</p><p><strong>android鼓励弱耦合和组件的重用，在android中mvc的具体体现如下：</strong></p><p><strong>1、</strong> 视图层（view）：一般采用xml文件进行界面的描述，使用的时候可以非常方便的引入，当然，如果你对android了解的比较的多了话，就一定可以想到在android中也可以使用JavaScript+html等的方式作为view层，当然这里需要进行java和javascript之间的通信，幸运的是，android提供了它们之间非常方便的通信实现。</p><p><strong>2、</strong> 控制层（controller）：android的控制层的重任通常落在了众多的acitvity的肩上，这句话也就暗含了不要在acitivity中写代码，要通过activity交割model业务逻辑层处理，这样做的另外一个原因是android中的acitivity的响应时间是5s，如果耗时的操作放在这里，程序就很容易被回收掉。</p><p><strong>3、</strong> 模型层（model）：对数据库的操作、对网络等的操作都应该在model里面处理，当然对业务计算等操作也是必须放在的该层的。</p><h3 id="_5、内存泄露如何查看和解决" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#5%E5%86%85%E5%AD%98%E6%B3%84%E9%9C%B2%E5%A6%82%E4%BD%95%E6%9F%A5%E7%9C%8B%E5%92%8C%E8%A7%A3%E5%86%B3" target="_blank" rel="noreferrer">5、内存泄露如何查看和解决</a> <a class="header-anchor" href="#_5、内存泄露如何查看和解决" aria-label="Permalink to &quot;[5、内存泄露如何查看和解决](https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android最新面试题2021年，常见面试题及答案汇总.md#5内存泄露如何查看和解决)&quot;">​</a></h3><p>概念：有些对象只有有限的生命周期，当他们的任务完成之后，它们将被垃圾回收，如果在对象的生命周期本该结束的时候，这个对象还被一系列的引用，着就会导致内存泄露。</p><p>解决方法：使用开源框架LeakCanary检测针对性解决</p><p><strong>常见的内存泄露有：</strong></p><p><strong>1、</strong> 单例造成的内存泄露，例如单例中的Context生命周期大于本身Context生命周期</p><p><strong>2、</strong> 线程使用Hander造成的内存卸扣，当activity已经结束，线程依然在运行更新UI</p><p><strong>3、</strong> 非静态类使用静态变量导致无法回收释放造成泄露</p><p><strong>4、</strong> WebView网页过多造成内存泄露</p><p><strong>5、</strong> 资源未关闭造成泄露，例如数据库使用完之后关闭连接</p><h3 id="_6、推送到达率如何提高" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#6%E6%8E%A8%E9%80%81%E5%88%B0%E8%BE%BE%E7%8E%87%E5%A6%82%E4%BD%95%E6%8F%90%E9%AB%98" target="_blank" rel="noreferrer">6、推送到达率如何提高</a> <a class="header-anchor" href="#_6、推送到达率如何提高" aria-label="Permalink to &quot;[6、推送到达率如何提高](https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android最新面试题2021年，常见面试题及答案汇总.md#6推送到达率如何提高)&quot;">​</a></h3><p>判手机系统，小米使用小米推送，华为使用华为推送，其他手机使用友盟推送</p><h3 id="_7、简述jni" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#7%E7%AE%80%E8%BF%B0jni" target="_blank" rel="noreferrer">7、简述JNI</a> <a class="header-anchor" href="#_7、简述jni" aria-label="Permalink to &quot;[7、简述JNI](https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android最新面试题2021年，常见面试题及答案汇总.md#7简述jni)&quot;">​</a></h3><p>是java和c语言之间的桥梁，由于java是一种半解释语言，可以被反编译出来，一种重要涉及安全的代码就使用了C编程，再者很多底层功能调用C语言都实现了Java没必要重复造轮子，所以定义了JNI接口的实现</p><h3 id="_8、fragment中add与replace的区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#8fragment%E4%B8%ADadd%E4%B8%8Ereplace%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">8、Fragment中add与replace的区别？</a> <a class="header-anchor" href="#_8、fragment中add与replace的区别" aria-label="Permalink to &quot;[8、Fragment中add与replace的区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android最新面试题2021年，常见面试题及答案汇总.md#8fragment中add与replace的区别)&quot;">​</a></h3><p>add不会重新初始化fragment,replace每次都会；</p><p>添加相同的fragment时，replace不会有任何变化，add会报IllegalStateException 异常；</p><p>replace 先 remove 掉相同 id 的所有 fragment，然后在add 当前的这个 fragment，而 add 是覆盖前一个fragment。所以如果使用 add 一般会伴随 hide()和show()，避免布局重叠；</p><p>使用 add，如果应用放在后台，或以其他方式被系统销毁，再打开时，hide()中引用的 fragment 会销毁，所以依然会出现布局重叠 bug，可以使用 replace 或使用 add时，添加一个 tag 参数；</p><h3 id="_9、android-root机制" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#9android-root%E6%9C%BA%E5%88%B6" target="_blank" rel="noreferrer">9、Android root机制</a> <a class="header-anchor" href="#_9、android-root机制" aria-label="Permalink to &quot;[9、Android root机制](https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android最新面试题2021年，常见面试题及答案汇总.md#9android-root机制)&quot;">​</a></h3><p>root指的是你有权限可以再系统上对所有档案有 &quot;读&quot; &quot;写&quot; &quot;执行&quot;的权力。root机器不是真正能让你的应用程序具有root权限。它原理就跟linux下的像sudo这样的命令。在系统的bin目录下放个su程序并属主是root并有suid权限。则通过su执行的命令都具有Android root权限。当然使用临时用户权限想把su拷贝的/system/bin目录并改属性并不是一件容易的事情。这里用到2个工具跟2个命令。把busybox拷贝到你有权限访问的目录然后给他赋予4755权限，你就可以用它做很多事了。</p><h3 id="_10、内存溢出和内存泄漏有什么区别-何时会产生内存泄漏" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%982021%E5%B9%B4%EF%BC%8C%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%B1%87%E6%80%BB.md#10%E5%86%85%E5%AD%98%E6%BA%A2%E5%87%BA%E5%92%8C%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%E4%BD%95%E6%97%B6%E4%BC%9A%E4%BA%A7%E7%94%9F%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F" target="_blank" rel="noreferrer">10、内存溢出和内存泄漏有什么区别？何时会产生内存泄漏？</a> <a class="header-anchor" href="#_10、内存溢出和内存泄漏有什么区别-何时会产生内存泄漏" aria-label="Permalink to &quot;[10、内存溢出和内存泄漏有什么区别？何时会产生内存泄漏？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Android/Android最新面试题2021年，常见面试题及答案汇总.md#10内存溢出和内存泄漏有什么区别何时会产生内存泄漏)&quot;">​</a></h3><p>内存溢出：当程序运行时所需的内存大于程序允许的最高内存，这时会出现内存溢出；</p><p>内存泄漏：在一些比较消耗资源的操作中，如果操作中内存一直未被释放，就会出现内存泄漏。比如未关闭io,cursor。</p><h3 id="_11、如何切换-fragement-不重新实例化" tabindex="-1">11、如何切换 fragement,不重新实例化 <a class="header-anchor" href="#_11、如何切换-fragement-不重新实例化" aria-label="Permalink to &quot;11、如何切换 fragement,不重新实例化&quot;">​</a></h3><h3 id="_12、android中的anr" tabindex="-1">12、Android中的ANR <a class="header-anchor" href="#_12、android中的anr" aria-label="Permalink to &quot;12、Android中的ANR&quot;">​</a></h3><h3 id="_13、谈谈android的ipc-进程间通信-机制" tabindex="-1">13、谈谈Android的IPC（进程间通信）机制 <a class="header-anchor" href="#_13、谈谈android的ipc-进程间通信-机制" aria-label="Permalink to &quot;13、谈谈Android的IPC（进程间通信）机制&quot;">​</a></h3><h3 id="_14、让activity变成一个窗口" tabindex="-1">14、让Activity变成一个窗口 <a class="header-anchor" href="#_14、让activity变成一个窗口" aria-label="Permalink to &quot;14、让Activity变成一个窗口&quot;">​</a></h3><h3 id="_15、如果listview中的数据源发生改变-如何更新listview中的数据" tabindex="-1">15、如果Listview中的数据源发生改变，如何更新listview中的数据 <a class="header-anchor" href="#_15、如果listview中的数据源发生改变-如何更新listview中的数据" aria-label="Permalink to &quot;15、如果Listview中的数据源发生改变，如何更新listview中的数据&quot;">​</a></h3><h3 id="_16、如何将sqlite数据库-dictionary-db文件-与apk文件一起发布" tabindex="-1">16、如何将SQLite数据库(dictionary.db文件)与apk文件一起发布 <a class="header-anchor" href="#_16、如何将sqlite数据库-dictionary-db文件-与apk文件一起发布" aria-label="Permalink to &quot;16、如何将SQLite数据库(dictionary.db文件)与apk文件一起发布&quot;">​</a></h3><h3 id="_17、广播接受者的生命周期" tabindex="-1">17、广播接受者的生命周期？ <a class="header-anchor" href="#_17、广播接受者的生命周期" aria-label="Permalink to &quot;17、广播接受者的生命周期？&quot;">​</a></h3><h3 id="_18、activity启动模式" tabindex="-1">18、Activity启动模式 <a class="header-anchor" href="#_18、activity启动模式" aria-label="Permalink to &quot;18、Activity启动模式&quot;">​</a></h3><h3 id="_19、属性动画" tabindex="-1">19、属性动画 <a class="header-anchor" href="#_19、属性动画" aria-label="Permalink to &quot;19、属性动画&quot;">​</a></h3><h3 id="_20、android-中有哪几种解析xml的类-官方推荐哪种-以及它们的原理和区别。" tabindex="-1">20、android 中有哪几种解析xml的类？官方推荐哪种？以及它们的原理和区别。 <a class="header-anchor" href="#_20、android-中有哪几种解析xml的类-官方推荐哪种-以及它们的原理和区别。" aria-label="Permalink to &quot;20、android 中有哪几种解析xml的类？官方推荐哪种？以及它们的原理和区别。&quot;">​</a></h3><h3 id="_21、intent-传递数据时-可以传递哪些类型数据" tabindex="-1">21、Intent 传递数据时，可以传递哪些类型数据？ <a class="header-anchor" href="#_21、intent-传递数据时-可以传递哪些类型数据" aria-label="Permalink to &quot;21、Intent 传递数据时，可以传递哪些类型数据？&quot;">​</a></h3><h3 id="_22、开发中都使用过哪些框架、平台" tabindex="-1">22、开发中都使用过哪些框架、平台 <a class="header-anchor" href="#_22、开发中都使用过哪些框架、平台" aria-label="Permalink to &quot;22、开发中都使用过哪些框架、平台&quot;">​</a></h3><h3 id="_23、什么是-intentservice-有何优点" tabindex="-1">23、什么是 IntentService？有何优点？ <a class="header-anchor" href="#_23、什么是-intentservice-有何优点" aria-label="Permalink to &quot;23、什么是 IntentService？有何优点？&quot;">​</a></h3><h3 id="_24、如何启用service-如何停用service。" tabindex="-1">24、如何启用Service，如何停用Service。 <a class="header-anchor" href="#_24、如何启用service-如何停用service。" aria-label="Permalink to &quot;24、如何启用Service，如何停用Service。&quot;">​</a></h3><h3 id="_25、请介绍下android的数据存储方式。" tabindex="-1">25、请介绍下Android的数据存储方式。 <a class="header-anchor" href="#_25、请介绍下android的数据存储方式。" aria-label="Permalink to &quot;25、请介绍下Android的数据存储方式。&quot;">​</a></h3><h3 id="_26、sim卡的ef文件是什么-有何作用" tabindex="-1">26、sim卡的EF文件是什么？有何作用 <a class="header-anchor" href="#_26、sim卡的ef文件是什么-有何作用" aria-label="Permalink to &quot;26、sim卡的EF文件是什么？有何作用&quot;">​</a></h3><h3 id="_27、activity与fragment区别" tabindex="-1">27、activity与fragment区别 <a class="header-anchor" href="#_27、activity与fragment区别" aria-label="Permalink to &quot;27、activity与fragment区别&quot;">​</a></h3><h3 id="_28、wait和-sleep-的区别" tabindex="-1">28、wait和 sleep 的区别 <a class="header-anchor" href="#_28、wait和-sleep-的区别" aria-label="Permalink to &quot;28、wait和 sleep 的区别&quot;">​</a></h3><h3 id="_29、谈mvc-mvp-mvvm" tabindex="-1">29、谈MVC ，MVP，MVVM <a class="header-anchor" href="#_29、谈mvc-mvp-mvvm" aria-label="Permalink to &quot;29、谈MVC ，MVP，MVVM&quot;">​</a></h3>',64),i=[d];function n(E,s,A,c,l,h){return e(),o("div",null,i)}const u=a(t,[["render",n]]);export{m as __pageData,u as default};