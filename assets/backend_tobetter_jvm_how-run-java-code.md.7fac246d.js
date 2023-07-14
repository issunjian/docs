import{_ as s,a,b as n,c as l,d as p,e,f as o,g as c,h as t,i as r}from"./chunks/five-10.85383b2d.js";import{_ as i,o as y,c as f,V as d}from"./chunks/framework.c6d8cbec.js";const F="/docs/assets/how-run-java-code-91dac706-1c4e-4775-bc4e-b2104283aa04.6cead970.png",C=JSON.parse('{"title":"JVM到底是如何运行Java代码的？","description":"Java程序员进阶之路，小白的零基础Java教程，从入门到进阶，JVM到底是如何运行Java代码的？","frontmatter":{"title":"JVM到底是如何运行Java代码的？","shortTitle":"JVM是如何运行Java代码的？","category":["Java核心"],"tag":["Java虚拟机"],"description":"Java程序员进阶之路，小白的零基础Java教程，从入门到进阶，JVM到底是如何运行Java代码的？","head":[["meta",{"name":"keywords","content":"Java,JavaSE,教程,Java程序员进阶之路,jvm,Java虚拟机"}]]},"headers":[],"relativePath":"backend/tobetter/jvm/how-run-java-code.md","filePath":"backend/tobetter/jvm/how-run-java-code.md"}'),v={name:"backend/tobetter/jvm/how-run-java-code.md"},u=d(`<h1 id="jvm到底是如何运行java代码的" tabindex="-1">JVM到底是如何运行Java代码的？ <a class="header-anchor" href="#jvm到底是如何运行java代码的" aria-label="Permalink to &quot;JVM到底是如何运行Java代码的？&quot;">​</a></h1><p>“二哥，看了上一篇 <a href="https://mp.weixin.qq.com/s/191I_2CVOxVuyfLVtb4jhg" target="_blank" rel="noreferrer">Hello World</a> 的程序后，我很好奇，它是怎么在 Run 面板里打印出‘三妹，少看手机少打游戏，好好学，美美哒’呢？”三妹咪了一口麦香可可奶茶后对我说。</p><p>“三妹，我们通常把 Java 分为编译期和运行时，弄清楚这两个阶段就知道原因了。”</p><p>贴一下 HelloWorld 这段代码：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">/**</span></span>
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
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>是不是就有点懵逼了？新手看到这个很容易头大，不过不要担心，后面我再和大家一块深入研究一下，这里就是感受一下字节码的魅力。</p><p>那这个字节码文件是怎么看到的呢？可以通过 IDEA 菜单栏中的「View」→「Show Bytecode」查看，如下图所示。</p><img src="`+l+'"><p>PS：字节码并不是机器码，操作系统无法直接识别，需要在操作系统上安装不同版本的 Java 虚拟机（JVM）来识别。通常情况下，我们只需要安装不同版本的 JDK（Java Development Kit，Java 开发工具包）就行了，它里面包含了 JRE（Java Runtime Environment，Java 运行时环境），而 JRE 又包含了 JVM。</p><img src="'+p+'"><p>Windows、Linux、MacOS 等操作系统都有相应的 JDK，只要安装好了 JDK 就有了 Java 语言的运行时环境，就可以把一份字节码文件在不同的平台上运行了。可以在 <a href="https://www.oracle.com/java/technologies/javase-jdk11-downloads.html" target="_blank" rel="noreferrer">Oracle 官网</a>上下载不同版本的 JDK。</p><img src="'+e+'"><p>PPS：为什么要查看字节码呢？查看字节码文件更容易让我们搞懂 Java 代码背后的原理，比如搞懂 Java 中的各种语法糖的本质。</p><p>相比于 IDEA 自带的「Show Bytecode」功能，我更推荐 <code>jclasslib</code> 这款插件，可以在插件市场中安装（我已经安装过了）。</p><img src="'+o+'"><p>安装完成之后，点击 View -&gt; Show Bytecode With jclasslib 即可通过 jclasslib 查看字节码文件了（点击之前，光标要停留在对应的类文件上），如下图所示。</p><img src="'+c+'"><p>使用 jclasslib 不仅可以直观地查看类对应的字节码文件，还可以查看类的基本信息、常量池、接口、字段、方法等信息，如下图所示。</p><img src="'+t+'"><p>也就是说，在编译阶段，Java 会将 Java 源代码文件编译为字节码文件。在这个阶段，编译器会进行一些检查工作，比如说，某个关键字是不是写错了，语法上是不是符合预期了，不能有很明显的错误，否则带到运行时再检查出来就会比较麻烦了。</p><img src="'+r+`"><p>Java 字节码是沟通 JVM 与 Java 代码的桥梁，下面使用 javap 来稍微看一下字节码到底长什么样子。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">0 getstatic #2 &lt;java/lang/System.out&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">3 ldc #3 &lt;Hello World&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">5 invokevirtual #4 &lt;java/io/PrintStream.println&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">8 return</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">0 getstatic #2 &lt;java/lang/System.out&gt;</span></span>
<span class="line"><span style="color:#24292e;">3 ldc #3 &lt;Hello World&gt;</span></span>
<span class="line"><span style="color:#24292e;">5 invokevirtual #4 &lt;java/io/PrintStream.println&gt;</span></span>
<span class="line"><span style="color:#24292e;">8 return</span></span></code></pre></div><p>Java 虚拟机采用基于栈的架构，其指令由操作码和操作数组成。这些<a href="https://tobebetterjavaer.com/jvm/zijiema-zhiling.html" target="_blank" rel="noreferrer">字节码指令</a>，就叫作 opcode。其中，getstatic、ldc、invokevirtual、return 等，就是 opcode，可以看到是比较容易理解的。</p><p>我们继续使用 hexdump 看一下字节码的二进制内容。与以上字节码对应的二进制，就是下面这几个数字：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">b2 00 02 12 03 b6 00 04 b1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">b2 00 02 12 03 b6 00 04 b1</span></span></code></pre></div><blockquote><p>注意：这里是二进制文件的16进制表示，也就是hex，一般分析二进制文件都是以hex进行分析。</p></blockquote><p>我们可以看一下它们的对应关系。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">0xb2   getstatic       获取静态字段的值</span></span>
<span class="line"><span style="color:#f6f6f4;">0x12   ldc             常量池中的常量值入栈</span></span>
<span class="line"><span style="color:#f6f6f4;">0xb6   invokevirtual   运行时方法绑定调用方法</span></span>
<span class="line"><span style="color:#f6f6f4;">0xb1   return          void 函数返回</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">0xb2   getstatic       获取静态字段的值</span></span>
<span class="line"><span style="color:#24292e;">0x12   ldc             常量池中的常量值入栈</span></span>
<span class="line"><span style="color:#24292e;">0xb6   invokevirtual   运行时方法绑定调用方法</span></span>
<span class="line"><span style="color:#24292e;">0xb1   return          void 函数返回</span></span></code></pre></div><p>opcode 有一个字节的长度(0~255)，意味着指令集的操作码个数不能操作 256 条。而紧跟在 opcode 后面的是被操作数。比如 b2 00 02，就代表了 <code>getstatic #2 &lt;java/lang/System.out&gt;</code>。</p><p>JVM 就是靠解析这些 opcode 和操作数来完成程序的执行的。当我们使用 Java 命令运行 .class 文件的时候，实际上就相当于启动了一个 JVM 进程。</p><p>然后 JVM 会翻译这些字节码，它有两种执行方式。常见的就是解释执行，将 opcode + 操作数翻译成机器代码；另外一种执行方式就是 <a href="https://tobebetterjavaer.com/jvm/jit.html" target="_blank" rel="noreferrer">JIT</a>，也就是我们常说的即时编译，它会在一定条件下将字节码编译成机器码之后再执行。</p><p>这些 .class 文件会被加载、存放到 metaspace 中，等待被调用，这里会有一个<a href="https://tobebetterjavaer.com/jvm/class-load.html" target="_blank" rel="noreferrer">类加载器</a>的概念。</p><p>而 JVM 的程序运行，都是在栈上完成的，这和其他普通程序的执行是类似的，同样分为堆和栈。比如我们现在运行到了 main 方法，就会给它分配一个栈帧。当退出方法体时，会弹出相应的栈帧。你会发现，大多数字节码指令，就是不断的对栈帧进行操作。</p><p>而其他大块数据，是存放在堆上的。</p><img src="`+F+'">',46),g=[u];function m(E,b,h,A,L,J){return y(),f("div",null,g)}const S=i(v,[["render",m]]);export{C as __pageData,S as default};
