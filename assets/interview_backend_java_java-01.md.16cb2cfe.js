import{_ as a,o as e,c as t,V as o}from"./chunks/framework.c6d8cbec.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/java/java-01.md","filePath":"interview/backend/java/java-01.md"}'),r={name:"interview/backend/java/java-01.md"},l=o('<h3 id="_1、创建socket通讯的步骤" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E5%B8%B8%E8%A7%812021%E5%B9%B4%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#1%E5%88%9B%E5%BB%BAsocket%E9%80%9A%E8%AE%AF%E7%9A%84%E6%AD%A5%E9%AA%A4" target="_blank" rel="noreferrer">1、创建socket通讯的步骤？</a> <a class="header-anchor" href="#_1、创建socket通讯的步骤" aria-label="Permalink to &quot;[1、创建socket通讯的步骤？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java常见2021年最新面试题，附答案解析.md#1创建socket通讯的步骤)&quot;">​</a></h3><p><strong>1、</strong> 服务器程序创建一个ServerSocket，然后再用accept方法等待客户来连接</p><p><strong>2、</strong> 客户端程序创建一个Socket并请求与服务器建立连接</p><p><strong>3、</strong> 服务器接收客户的连接请求,并创建一个新的Socket与该客户建立专线连接</p><p><strong>4、</strong> 刚才建立了连接的两个Socket在一个线程上对话</p><p><strong>5、</strong> 服务器开始等待新的连接请求</p><h3 id="_2、java-中-sleep-方法和-wait-方法的区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E5%B8%B8%E8%A7%812021%E5%B9%B4%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#2java-%E4%B8%AD-sleep-%E6%96%B9%E6%B3%95%E5%92%8C-wait-%E6%96%B9%E6%B3%95%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">2、Java 中 sleep 方法和 wait 方法的区别？</a> <a class="header-anchor" href="#_2、java-中-sleep-方法和-wait-方法的区别" aria-label="Permalink to &quot;[2、Java 中 sleep 方法和 wait 方法的区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java常见2021年最新面试题，附答案解析.md#2java-中-sleep-方法和-wait-方法的区别)&quot;">​</a></h3><p>虽然两者都是用来暂停当前运行的线程，但是 sleep() 实际上只是短暂停顿，因为它不会释放锁，而 wait() 意味着条件等待，这就是为什么该方法要释放锁，因为只有这样，其他等待的线程才能在满足条件时获取到该锁。</p><h3 id="_3、程序计数器-线程私有" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E5%B8%B8%E8%A7%812021%E5%B9%B4%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#3%E7%A8%8B%E5%BA%8F%E8%AE%A1%E6%95%B0%E5%99%A8%E7%BA%BF%E7%A8%8B%E7%A7%81%E6%9C%89" target="_blank" rel="noreferrer">3、程序计数器(线程私有)</a> <a class="header-anchor" href="#_3、程序计数器-线程私有" aria-label="Permalink to &quot;[3、程序计数器(线程私有)](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java常见2021年最新面试题，附答案解析.md#3程序计数器线程私有)&quot;">​</a></h3><p>一块较小的内存空间, 是当前线程所执行的字节码的行号指示器，每条线程都要有一个独立的程序计数器，这类内存也称为“线程私有” 的内存。</p><p>正在执行 java 方法的话，计数器记录的是虚拟机字节码指令的地址（当前指令的地址） 。如果还是 Native 方法，则为空。</p><p>这个内存区域是唯一一个在虚拟机中没有规定任何 OutOfMemoryError 情况的区域。</p><h3 id="_4、什么是线程调度器-thread-scheduler-和时间分片-time-slicing" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E5%B8%B8%E8%A7%812021%E5%B9%B4%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#4%E4%BB%80%E4%B9%88%E6%98%AF%E7%BA%BF%E7%A8%8B%E8%B0%83%E5%BA%A6%E5%99%A8thread-scheduler%E5%92%8C%E6%97%B6%E9%97%B4%E5%88%86%E7%89%87time-slicing" target="_blank" rel="noreferrer">4、什么是线程调度器(Thread Scheduler)和时间分片(Time Slicing)？</a> <a class="header-anchor" href="#_4、什么是线程调度器-thread-scheduler-和时间分片-time-slicing" aria-label="Permalink to &quot;[4、什么是线程调度器(Thread Scheduler)和时间分片(Time Slicing)？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java常见2021年最新面试题，附答案解析.md#4什么是线程调度器thread-scheduler和时间分片time-slicing)&quot;">​</a></h3><p>线程调度器是一个操作系统服务，它负责为Runnable状态的线程分配CPU时间。一旦我们创建一个线程并启动它，它的执行便依赖于线程调度器的实现。时间分片是指将可用的CPU时间分配给可用的Runnable线程的过程。分配CPU时间可以基于线程优先级或者线程等待的时间。线程调度并不受到Java虚拟机控制，所以由应用程序来控制它是更好的选择（也就是说不要让你的程序依赖于线程的优先级）。</p><h3 id="_5、迭代器-iterator-是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E5%B8%B8%E8%A7%812021%E5%B9%B4%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#5%E8%BF%AD%E4%BB%A3%E5%99%A8-iterator-%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">5、迭代器 Iterator 是什么？</a> <a class="header-anchor" href="#_5、迭代器-iterator-是什么" aria-label="Permalink to &quot;[5、迭代器 Iterator 是什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java常见2021年最新面试题，附答案解析.md#5迭代器-iterator-是什么)&quot;">​</a></h3><p>Iterator 接口提供遍历任何 Collection 的接口。我们可以从一个 Collection 中使用迭代器方法来获取迭代器实例。迭代器取代了 Java 集合框架中的 Enumeration，迭代器允许调用者在迭代过程中移除元素。</p><p>因为所有Collection接继承了Iterator迭代器</p><p><img src="https://gitee.com/souyunkutech/souyunku-home/raw/master/images/souyunku-web/2020/5/2/056/58/114_2.png#alt=114%5C_2.png" alt=""></p><h3 id="_6、线程的-sleep-方法和-yield-方法有什么区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E5%B8%B8%E8%A7%812021%E5%B9%B4%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#6%E7%BA%BF%E7%A8%8B%E7%9A%84-sleep%E6%96%B9%E6%B3%95%E5%92%8C-yield%E6%96%B9%E6%B3%95%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">6、线程的 sleep()方法和 yield()方法有什么区别？</a> <a class="header-anchor" href="#_6、线程的-sleep-方法和-yield-方法有什么区别" aria-label="Permalink to &quot;[6、线程的 sleep()方法和 yield()方法有什么区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java常见2021年最新面试题，附答案解析.md#6线程的-sleep方法和-yield方法有什么区别)&quot;">​</a></h3><p><strong>1、</strong> sleep()方法给其他线程运行机会时不考虑线程的优先级，因此会给低优先级的线程以运行的机会；yield()方法只会给相同优先级或更高优先级的线程以运行的机会；</p><p><strong>2、</strong> 线程执行 sleep()方法后转入阻塞（blocked）状态，而执行 yield()方法后转入就绪（ready）状态；</p><p><strong>3、</strong> sleep()方法声明抛出 InterruptedException，而 yield()方法没有声明任何异常；</p><p><strong>4、</strong> sleep()方法比 yield()方法（跟操作系统 CPU 调度相关）具有更好的可移植性，通常不建议使用yield()方法来控制并发线程的执行。</p><h3 id="_7、java-中能创建-volatile-数组吗" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E5%B8%B8%E8%A7%812021%E5%B9%B4%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#7java-%E4%B8%AD%E8%83%BD%E5%88%9B%E5%BB%BA-volatile-%E6%95%B0%E7%BB%84%E5%90%97" target="_blank" rel="noreferrer">7、Java 中能创建 volatile 数组吗？</a> <a class="header-anchor" href="#_7、java-中能创建-volatile-数组吗" aria-label="Permalink to &quot;[7、Java 中能创建 volatile 数组吗？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java常见2021年最新面试题，附答案解析.md#7java-中能创建-volatile-数组吗)&quot;">​</a></h3><p>能，Java 中可以创建 volatile 类型数组，不过只是一个指向数组的引用，而不是整个数组。意思是，如果改变引用指向的数组，将会受到 volatile 的保护，但是如果多个线程同时改变数组的元素，volatile 标示符就不能起到之前的保护作用了。</p><h3 id="_8、java中equals方法的用法以及-的用法" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E5%B8%B8%E8%A7%812021%E5%B9%B4%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#8java%E4%B8%ADequals%E6%96%B9%E6%B3%95%E7%9A%84%E7%94%A8%E6%B3%95%E4%BB%A5%E5%8F%8A%E7%9A%84%E7%94%A8%E6%B3%95" target="_blank" rel="noreferrer">8、java中equals方法的用法以及==的用法</a> <a class="header-anchor" href="#_8、java中equals方法的用法以及-的用法" aria-label="Permalink to &quot;[8、java中equals方法的用法以及==的用法](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java常见2021年最新面试题，附答案解析.md#8java中equals方法的用法以及的用法)&quot;">​</a></h3><p><a href="http://tech.souyunku.com/bluestorm/archive/2012/03/02/2377615.html" target="_blank" rel="noreferrer">tech.souyunku.com/bluestorm/a…</a></p><h3 id="_9、如何创建一个json对象" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E5%B8%B8%E8%A7%812021%E5%B9%B4%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#9%E5%A6%82%E4%BD%95%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AAjson%E5%AF%B9%E8%B1%A1" target="_blank" rel="noreferrer">9、如何创建一个json对象？</a> <a class="header-anchor" href="#_9、如何创建一个json对象" aria-label="Permalink to &quot;[9、如何创建一个json对象？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java常见2021年最新面试题，附答案解析.md#9如何创建一个json对象)&quot;">​</a></h3><p>使用{}实例化一个json对象，json对象多个元素使用逗号隔开，每个元素都是一个键值对</p><h3 id="_10、如何判断对象是否是垃圾" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E5%B8%B8%E8%A7%812021%E5%B9%B4%E6%9C%80%E6%96%B0%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#10%E5%A6%82%E4%BD%95%E5%88%A4%E6%96%AD%E5%AF%B9%E8%B1%A1%E6%98%AF%E5%90%A6%E6%98%AF%E5%9E%83%E5%9C%BE" target="_blank" rel="noreferrer">10、如何判断对象是否是垃圾？</a> <a class="header-anchor" href="#_10、如何判断对象是否是垃圾" aria-label="Permalink to &quot;[10、如何判断对象是否是垃圾？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java常见2021年最新面试题，附答案解析.md#10如何判断对象是否是垃圾)&quot;">​</a></h3><p>**引用计数：**在对象中添加一个引用计数器，如果被引用计数器加 1，引用失效时计数器减 1，如果计数器为 0 则被标记为垃圾。原理简单，效率高，但是在 Java 中很少使用，因为存在对象间循环引用的问题，导致计数器无法清零。</p><p>**可达性分析：**主流语言的内存管理都使用可达性分析判断对象是否存活。基本思路是通过一系列称为 GC Roots 的根对象作为起始节点集，从这些节点开始，根据引用关系向下搜索，搜索过程走过的路径称为引用链，如果某个对象到 GC Roots 没有任何引用链相连，则会被标记为垃圾。可作为 GC Roots 的对象包括虚拟机栈和本地方法栈中引用的对象、类静态属性引用的对象、常量引用的对象。</p><h3 id="_11、gc是什么-为什么要有gc" tabindex="-1">11、GC是什么？为什么要有GC？ <a class="header-anchor" href="#_11、gc是什么-为什么要有gc" aria-label="Permalink to &quot;11、GC是什么？为什么要有GC？&quot;">​</a></h3><h3 id="_12、线程池四种创建方式" tabindex="-1">12、线程池四种创建方式？ <a class="header-anchor" href="#_12、线程池四种创建方式" aria-label="Permalink to &quot;12、线程池四种创建方式？&quot;">​</a></h3><h3 id="_13、形成死锁的四个必要条件是什么" tabindex="-1">13、形成死锁的四个必要条件是什么 <a class="header-anchor" href="#_13、形成死锁的四个必要条件是什么" aria-label="Permalink to &quot;13、形成死锁的四个必要条件是什么&quot;">​</a></h3><h3 id="_14、java-面向对象编程三大特性-封装、继承、多态" tabindex="-1">14、java 面向对象编程三大特性------封装、继承、多态 <a class="header-anchor" href="#_14、java-面向对象编程三大特性-封装、继承、多态" aria-label="Permalink to &quot;14、java 面向对象编程三大特性------封装、继承、多态&quot;">​</a></h3><h3 id="_15、什么是ioc和di-di是如何实现的" tabindex="-1">15、什么是IoC和DI？DI是如何实现的？ <a class="header-anchor" href="#_15、什么是ioc和di-di是如何实现的" aria-label="Permalink to &quot;15、什么是IoC和DI？DI是如何实现的？&quot;">​</a></h3><h3 id="_16、假设数组内有5个元素-如果对数组进行反序-该如何做" tabindex="-1">16、假设数组内有5个元素，如果对数组进行反序，该如何做？ <a class="header-anchor" href="#_16、假设数组内有5个元素-如果对数组进行反序-该如何做" aria-label="Permalink to &quot;16、假设数组内有5个元素，如果对数组进行反序，该如何做？&quot;">​</a></h3><h3 id="_17、java的内存模型是什么-jmm是什么" tabindex="-1">17、Java的内存模型是什么？（JMM是什么？） <a class="header-anchor" href="#_17、java的内存模型是什么-jmm是什么" aria-label="Permalink to &quot;17、Java的内存模型是什么？（JMM是什么？）&quot;">​</a></h3><h3 id="_18、什么时候用断言-assert" tabindex="-1">18、什么时候用断言（assert）？ <a class="header-anchor" href="#_18、什么时候用断言-assert" aria-label="Permalink to &quot;18、什么时候用断言（assert）？&quot;">​</a></h3><h3 id="_19、对象在哪块内存分配" tabindex="-1">19、对象在哪块内存分配？ <a class="header-anchor" href="#_19、对象在哪块内存分配" aria-label="Permalink to &quot;19、对象在哪块内存分配？&quot;">​</a></h3><h3 id="_20、一个-java-源文件中是否可以包含多个类-不是内部类-有什么限制" tabindex="-1">20、一个”.java”源文件中是否可以包含多个类（不是内部类）？有什么限制？ <a class="header-anchor" href="#_20、一个-java-源文件中是否可以包含多个类-不是内部类-有什么限制" aria-label="Permalink to &quot;20、一个”.java”源文件中是否可以包含多个类（不是内部类）？有什么限制？&quot;">​</a></h3><h3 id="_21、怎么将-byte-转换为-string" tabindex="-1">21、怎么将 byte 转换为 String？ <a class="header-anchor" href="#_21、怎么将-byte-转换为-string" aria-label="Permalink to &quot;21、怎么将 byte 转换为 String？&quot;">​</a></h3><h3 id="_22、swing-是线程安全的" tabindex="-1">22、Swing 是线程安全的？ <a class="header-anchor" href="#_22、swing-是线程安全的" aria-label="Permalink to &quot;22、Swing 是线程安全的？&quot;">​</a></h3><h3 id="_23、线程b怎么知道线程a修改了变量" tabindex="-1">23、线程B怎么知道线程A修改了变量 <a class="header-anchor" href="#_23、线程b怎么知道线程a修改了变量" aria-label="Permalink to &quot;23、线程B怎么知道线程A修改了变量&quot;">​</a></h3><h3 id="_24、notify-和-notifyall-有什么区别" tabindex="-1">24、notify() 和 notifyAll() 有什么区别？ <a class="header-anchor" href="#_24、notify-和-notifyall-有什么区别" aria-label="Permalink to &quot;24、notify() 和 notifyAll() 有什么区别？&quot;">​</a></h3><h3 id="_25、java-中的-linkedlist-是单向链表还是双向链表" tabindex="-1">25、Java 中的 LinkedList 是单向链表还是双向链表？ <a class="header-anchor" href="#_25、java-中的-linkedlist-是单向链表还是双向链表" aria-label="Permalink to &quot;25、Java 中的 LinkedList 是单向链表还是双向链表？&quot;">​</a></h3><h3 id="_26、java中垃圾回收有什么目的-什么时候进行垃圾回收" tabindex="-1">26、Java中垃圾回收有什么目的？什么时候进行垃圾回收？ <a class="header-anchor" href="#_26、java中垃圾回收有什么目的-什么时候进行垃圾回收" aria-label="Permalink to &quot;26、Java中垃圾回收有什么目的？什么时候进行垃圾回收？&quot;">​</a></h3><h3 id="_27、你对线程优先级的理解是什么" tabindex="-1">27、你对线程优先级的理解是什么？ <a class="header-anchor" href="#_27、你对线程优先级的理解是什么" aria-label="Permalink to &quot;27、你对线程优先级的理解是什么？&quot;">​</a></h3><h3 id="_28、jvm内存模型" tabindex="-1">28、JVM内存模型 <a class="header-anchor" href="#_28、jvm内存模型" aria-label="Permalink to &quot;28、JVM内存模型&quot;">​</a></h3><h3 id="_29、解释servlet如何完成生命周期" tabindex="-1">29、解释servlet如何完成生命周期? <a class="header-anchor" href="#_29、解释servlet如何完成生命周期" aria-label="Permalink to &quot;29、解释servlet如何完成生命周期?&quot;">​</a></h3><h3 id="_30、java中是如何支持正则表达式操作的" tabindex="-1">30、Java中是如何支持正则表达式操作的？ <a class="header-anchor" href="#_30、java中是如何支持正则表达式操作的" aria-label="Permalink to &quot;30、Java中是如何支持正则表达式操作的？&quot;">​</a></h3><h3 id="_31、接口有什么特点" tabindex="-1">31、接口有什么特点？ <a class="header-anchor" href="#_31、接口有什么特点" aria-label="Permalink to &quot;31、接口有什么特点？&quot;">​</a></h3><h3 id="_32、什么是过滤器-怎么创建一个过滤器" tabindex="-1">32、什么是过滤器？怎么创建一个过滤器 <a class="header-anchor" href="#_32、什么是过滤器-怎么创建一个过滤器" aria-label="Permalink to &quot;32、什么是过滤器？怎么创建一个过滤器&quot;">​</a></h3><h3 id="_33、在-java-程序中怎么保证多线程的运行安全" tabindex="-1">33、在 Java 程序中怎么保证多线程的运行安全？ <a class="header-anchor" href="#_33、在-java-程序中怎么保证多线程的运行安全" aria-label="Permalink to &quot;33、在 Java 程序中怎么保证多线程的运行安全？&quot;">​</a></h3><h3 id="_34、直接内存是什么" tabindex="-1">34、直接内存是什么？ <a class="header-anchor" href="#_34、直接内存是什么" aria-label="Permalink to &quot;34、直接内存是什么？&quot;">​</a></h3><h3 id="_35、char类型能不能转成int类型-能不能转化成string类型-能不能转成double类型" tabindex="-1">35、Char类型能不能转成int类型？能不能转化成string类型，能不能转成double类型 <a class="header-anchor" href="#_35、char类型能不能转成int类型-能不能转化成string类型-能不能转成double类型" aria-label="Permalink to &quot;35、Char类型能不能转成int类型？能不能转化成string类型，能不能转成double类型&quot;">​</a></h3><h3 id="_36、解释何时在tomcat使用ssl" tabindex="-1">36、解释何时在Tomcat使用SSL ? <a class="header-anchor" href="#_36、解释何时在tomcat使用ssl" aria-label="Permalink to &quot;36、解释何时在Tomcat使用SSL ?&quot;">​</a></h3><h3 id="_37、堆-heap-线程共享-运行时数据区" tabindex="-1">37、堆（Heap-线程共享） -运行时数据区 <a class="header-anchor" href="#_37、堆-heap-线程共享-运行时数据区" aria-label="Permalink to &quot;37、堆（Heap-线程共享） -运行时数据区&quot;">​</a></h3><h3 id="_38、swap会影响性能么" tabindex="-1">38、SWAP会影响性能么？ <a class="header-anchor" href="#_38、swap会影响性能么" aria-label="Permalink to &quot;38、SWAP会影响性能么？&quot;">​</a></h3><h3 id="_39、什么是方法内联" tabindex="-1">39、什么是方法内联？ <a class="header-anchor" href="#_39、什么是方法内联" aria-label="Permalink to &quot;39、什么是方法内联？&quot;">​</a></h3><h3 id="_40、谈一谈hibernate的一级缓存、二级缓存和查询缓存。" tabindex="-1">40、谈一谈Hibernate的一级缓存、二级缓存和查询缓存。 <a class="header-anchor" href="#_40、谈一谈hibernate的一级缓存、二级缓存和查询缓存。" aria-label="Permalink to &quot;40、谈一谈Hibernate的一级缓存、二级缓存和查询缓存。&quot;">​</a></h3>',62),s=[l];function i(n,h,E,d,c,u){return e(),t("div",null,s)}const A=a(r,[["render",i]]);export{b as __pageData,A as default};
