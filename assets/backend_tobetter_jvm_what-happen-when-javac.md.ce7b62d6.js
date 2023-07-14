import{_ as s,a,b as n,c as l,d as p,e as o,f as e,g as c,h as t,i as r}from"./chunks/five-10.85383b2d.js";import{_ as i,o as y,c as f,V as F}from"./chunks/framework.c6d8cbec.js";const S=JSON.parse('{"title":"Java程序在编译期发生了什么？","description":"Java程序员进阶之路，小白的零基础Java教程，从入门到进阶，Java程序在编译期发生了什么？","frontmatter":{"title":"Java程序在编译期发生了什么？","shortTitle":"Java程序在编译期发生了什么？","category":["Java核心"],"tag":["Java虚拟机"],"description":"Java程序员进阶之路，小白的零基础Java教程，从入门到进阶，Java程序在编译期发生了什么？","head":[["meta",{"name":"keywords","content":"Java,JavaSE,教程,Java程序员进阶之路,jvm,Java虚拟机"}]]},"headers":[],"relativePath":"backend/tobetter/jvm/what-happen-when-javac.md","filePath":"backend/tobetter/jvm/what-happen-when-javac.md"}'),d={name:"backend/tobetter/jvm/what-happen-when-javac.md"},u=F(`<h1 id="java程序在编译期发生了什么" tabindex="-1">Java程序在编译期发生了什么？ <a class="header-anchor" href="#java程序在编译期发生了什么" aria-label="Permalink to &quot;Java程序在编译期发生了什么？&quot;">​</a></h1><p>“二哥，看了上一篇 <a href="https://mp.weixin.qq.com/s/191I_2CVOxVuyfLVtb4jhg" target="_blank" rel="noreferrer">Hello World</a> 的程序后，我很好奇，它是怎么在 Run 面板里打印出‘三妹，少看手机少打游戏，好好学，美美哒’呢？”三妹咪了一口麦香可可奶茶后对我说。</p><p>“三妹，我们通常把 Java 分为编译期和运行时，弄清楚这两个阶段就知道原因了。由于运行时涉及到的内容比较多，这篇文章我们先来说说编译期，随后我们再来分析运行时。”</p><p>贴一下 HelloWorld 这段代码：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">/**</span></span>
<span class="line"><span style="color:#7B7F8B;"> * </span><span style="color:#F286C4;">@author</span><span style="color:#7B7F8B;"> 王二</span></span>
<span class="line"><span style="color:#7B7F8B;"> */</span></span>
<span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">HelloWorld</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">static</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">main</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;">[] </span><span style="color:#FFB86C;font-style:italic;">args</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        System.out.</span><span style="color:#62E884;">println</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">三妹，少看手机少打游戏，好好学，美美哒。</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@author</span><span style="color:#6A737D;"> 王二</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HelloWorld</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] </span><span style="color:#E36209;">args</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;三妹，少看手机少打游戏，好好学，美美哒。&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>点击 IDEA 工具栏中的锤子按钮（Build Project，编译整个项目），如下图所示。</p><img src="`+s+'"><p>这时候，就可以在 src 的同级目录 target 下找到一个名为 HelloWorld.class 的文件。</p><img src="'+a+'"><p>如果找不到的话，在目录上右键选择「Reload from Disk，从磁盘上重新加载」，如下图所示：</p><img src="'+n+`"><p>可以双击打开它。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">//</span></span>
<span class="line"><span style="color:#7B7F8B;">// Source code recreated from a .class file by IntelliJ IDEA</span></span>
<span class="line"><span style="color:#7B7F8B;">// (powered by Fernflower decompiler)</span></span>
<span class="line"><span style="color:#7B7F8B;">//</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">package</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">com.itwanger.five</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">HelloWorld</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">HelloWorld</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">static</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">main</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;">[] </span><span style="color:#FFB86C;font-style:italic;">args</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        System.out.</span><span style="color:#62E884;">println</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">三妹，少看手机少打游戏，好好学，美美哒。</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">// Source code recreated from a .class file by IntelliJ IDEA</span></span>
<span class="line"><span style="color:#6A737D;">// (powered by Fernflower decompiler)</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> com.itwanger.five;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HelloWorld</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HelloWorld</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] </span><span style="color:#E36209;">args</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;三妹，少看手机少打游戏，好好学，美美哒。&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>IDEA 默认会用 Fernflower 反编译工具将字节码文件（后缀为 .class 的文件，也就是 Java 源代码编译后的文件）反编译为我们可以看得懂的 Java 源代码。但实际上，字节码文件并不是这样的，而是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// class version 58.0 (58)</span></span>
<span class="line"><span style="color:#f6f6f4;">// access flags 0x21</span></span>
<span class="line"><span style="color:#f6f6f4;">public class com/itwanger/five/HelloWorld {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  // compiled from: HelloWorld.java</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  // access flags 0x1</span></span>
<span class="line"><span style="color:#f6f6f4;">  public &lt;init&gt;()V</span></span>
<span class="line"><span style="color:#f6f6f4;">   L0</span></span>
<span class="line"><span style="color:#f6f6f4;">    LINENUMBER 6 L0</span></span>
<span class="line"><span style="color:#f6f6f4;">    ALOAD 0</span></span>
<span class="line"><span style="color:#f6f6f4;">    INVOKESPECIAL java/lang/Object.&lt;init&gt; ()V</span></span>
<span class="line"><span style="color:#f6f6f4;">    RETURN</span></span>
<span class="line"><span style="color:#f6f6f4;">   L1</span></span>
<span class="line"><span style="color:#f6f6f4;">    LOCALVARIABLE this Lcom/itwanger/five/HelloWorld; L0 L1 0</span></span>
<span class="line"><span style="color:#f6f6f4;">    MAXSTACK = 1</span></span>
<span class="line"><span style="color:#f6f6f4;">    MAXLOCALS = 1</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  // access flags 0x9</span></span>
<span class="line"><span style="color:#f6f6f4;">  public static main([Ljava/lang/String;)V</span></span>
<span class="line"><span style="color:#f6f6f4;">   L0</span></span>
<span class="line"><span style="color:#f6f6f4;">    LINENUMBER 8 L0</span></span>
<span class="line"><span style="color:#f6f6f4;">    GETSTATIC java/lang/System.out : Ljava/io/PrintStream;</span></span>
<span class="line"><span style="color:#f6f6f4;">    LDC &quot;\\u4e09\\u59b9\\uff0c\\u5c11\\u770b\\u624b\\u673a\\u5c11\\u6253\\u6e38\\u620f\\uff0c\\u597d\\u597d\\u5b66\\uff0c\\u7f8e\\u7f8e\\u54d2\\u3002&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">    INVOKEVIRTUAL java/io/PrintStream.println (Ljava/lang/String;)V</span></span>
<span class="line"><span style="color:#f6f6f4;">   L1</span></span>
<span class="line"><span style="color:#f6f6f4;">    LINENUMBER 9 L1</span></span>
<span class="line"><span style="color:#f6f6f4;">    RETURN</span></span>
<span class="line"><span style="color:#f6f6f4;">   L2</span></span>
<span class="line"><span style="color:#f6f6f4;">    LOCALVARIABLE args [Ljava/lang/String; L0 L2 0</span></span>
<span class="line"><span style="color:#f6f6f4;">    MAXSTACK = 2</span></span>
<span class="line"><span style="color:#f6f6f4;">    MAXLOCALS = 1</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// class version 58.0 (58)</span></span>
<span class="line"><span style="color:#24292e;">// access flags 0x21</span></span>
<span class="line"><span style="color:#24292e;">public class com/itwanger/five/HelloWorld {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  // compiled from: HelloWorld.java</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  // access flags 0x1</span></span>
<span class="line"><span style="color:#24292e;">  public &lt;init&gt;()V</span></span>
<span class="line"><span style="color:#24292e;">   L0</span></span>
<span class="line"><span style="color:#24292e;">    LINENUMBER 6 L0</span></span>
<span class="line"><span style="color:#24292e;">    ALOAD 0</span></span>
<span class="line"><span style="color:#24292e;">    INVOKESPECIAL java/lang/Object.&lt;init&gt; ()V</span></span>
<span class="line"><span style="color:#24292e;">    RETURN</span></span>
<span class="line"><span style="color:#24292e;">   L1</span></span>
<span class="line"><span style="color:#24292e;">    LOCALVARIABLE this Lcom/itwanger/five/HelloWorld; L0 L1 0</span></span>
<span class="line"><span style="color:#24292e;">    MAXSTACK = 1</span></span>
<span class="line"><span style="color:#24292e;">    MAXLOCALS = 1</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  // access flags 0x9</span></span>
<span class="line"><span style="color:#24292e;">  public static main([Ljava/lang/String;)V</span></span>
<span class="line"><span style="color:#24292e;">   L0</span></span>
<span class="line"><span style="color:#24292e;">    LINENUMBER 8 L0</span></span>
<span class="line"><span style="color:#24292e;">    GETSTATIC java/lang/System.out : Ljava/io/PrintStream;</span></span>
<span class="line"><span style="color:#24292e;">    LDC &quot;\\u4e09\\u59b9\\uff0c\\u5c11\\u770b\\u624b\\u673a\\u5c11\\u6253\\u6e38\\u620f\\uff0c\\u597d\\u597d\\u5b66\\uff0c\\u7f8e\\u7f8e\\u54d2\\u3002&quot;</span></span>
<span class="line"><span style="color:#24292e;">    INVOKEVIRTUAL java/io/PrintStream.println (Ljava/lang/String;)V</span></span>
<span class="line"><span style="color:#24292e;">   L1</span></span>
<span class="line"><span style="color:#24292e;">    LINENUMBER 9 L1</span></span>
<span class="line"><span style="color:#24292e;">    RETURN</span></span>
<span class="line"><span style="color:#24292e;">   L2</span></span>
<span class="line"><span style="color:#24292e;">    LOCALVARIABLE args [Ljava/lang/String; L0 L2 0</span></span>
<span class="line"><span style="color:#24292e;">    MAXSTACK = 2</span></span>
<span class="line"><span style="color:#24292e;">    MAXLOCALS = 1</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>是不是就有点懵逼了？新手看到这个很容易头大，不过不要担心，后面我再和大家一块深入研究一下，这里就是感受一下字节码的魅力。</p><p>那这个字节码文件是怎么看到的呢？可以通过 IDEA 菜单栏中的「View」→「Show Bytecode」查看，如下图所示。</p><img src="`+l+'"><p>PS：字节码并不是机器码，操作系统无法直接识别，需要在操作系统上安装不同版本的 Java 虚拟机（JVM）来识别。通常情况下，我们只需要安装不同版本的 JDK（Java Development Kit，Java 开发工具包）就行了，它里面包含了 JRE（Java Runtime Environment，Java 运行时环境），而 JRE 又包含了 JVM。</p><img src="'+p+'"><p>Windows、Linux、MacOS 等操作系统都有相应的 JDK，只要安装好了 JDK 就有了 Java 语言的运行时环境，就可以把一份字节码文件在不同的平台上运行了。可以在 <a href="https://www.oracle.com/java/technologies/javase-jdk11-downloads.html" target="_blank" rel="noreferrer">Oracle 官网</a>上下载不同版本的 JDK。</p><img src="'+o+'"><p>PPS：为什么要查看字节码呢？查看字节码文件更容易让我们搞懂 Java 代码背后的原理，比如搞懂 Java 中的各种语法糖的本质。</p><p>相比于 IDEA 自带的「Show Bytecode」功能，我更推荐 <code>jclasslib</code> 这款插件，可以在插件市场中安装（我已经安装过了）。</p><img src="'+e+'"><p>安装完成之后，点击 View -&gt; Show Bytecode With jclasslib 即可通过 jclasslib 查看字节码文件了（点击之前，光标要停留在对应的类文件上），如下图所示。</p><img src="'+c+'"><p>使用 jclasslib 不仅可以直观地查看类对应的字节码文件，还可以查看类的基本信息、常量池、接口、字段、方法等信息，如下图所示。</p><img src="'+t+'"><p>也就是说，在编译阶段，Java 会将 Java 源代码文件编译为字节码文件。在这个阶段，编译器会进行一些检查工作，比如说，某个关键字是不是写错了，语法上是不是符合预期了，不能有很明显的错误，否则带到运行时再检查出来就会比较麻烦了。</p><img src="'+r+'"><hr>',32),E=[u];function v(g,m,A,L,h,b){return y(),f("div",null,E)}const D=i(d,[["render",v]]);export{S as __pageData,D as default};
