import{_ as s,o as a,c as l,V as n}from"./chunks/framework.c6d8cbec.js";const o="/docs/assets/native-method-2a6fd1da-8b64-4fe1-bf3b-fbb117774549.6a3e932d.png",p="/docs/assets/native-method-41e11e7f-31c1-4611-9b85-63ec211ff31b.7e036168.png",e="/docs/assets/native-method-0b08bf51-7bd9-4d06-a0dc-4262c1a71fd5.9d9adc00.png",t="/docs/assets/native-method-e5c34f63-84df-4a99-96e1-b45ea04929df.660da4b1.png",c="/docs/assets/native-method-e93c8fa8-6e33-4374-81da-8bd9360d1bb4.da9e4db0.png",r="/docs/assets/native-method-34beba0f-8fe8-48d0-aa48-b25c1b504b59.703d6ff5.png",i="/docs/assets/native-method-6673cf73-c4dd-4434-b821-0d705f756a73.7b30db98.png",I=JSON.parse('{"title":"手把手教你用 C语言实现 Java native 本地方法","description":"掌握C语言实现Java native方法的技巧，提升Java程序性能，深入理解Java Native Interface (JNI)。跟随我们的手把手教程，轻松实现跨语言编程。","frontmatter":{"title":"手把手教你用 C语言实现 Java native 本地方法","shortTitle":"Java native方法","description":"掌握C语言实现Java native方法的技巧，提升Java程序性能，深入理解Java Native Interface (JNI)。跟随我们的手把手教程，轻松实现跨语言编程。","category":["Java 核心"],"tag":["面向对象编程"],"head":[["meta",{"name":"keywords","content":"Java, C语言, Native方法, JNI,native,本地方法,java native method"}]]},"headers":[],"relativePath":"backend/tobetter/oo/native-method.md","filePath":"backend/tobetter/oo/native-method.md"}'),y={name:"backend/tobetter/oo/native-method.md"},F=n(`<h1 id="_5-6-java-native方法" tabindex="-1">5.6 Java native方法 <a class="header-anchor" href="#_5-6-java-native方法" aria-label="Permalink to &quot;5.6 Java native方法&quot;">​</a></h1><p>“三妹，之前我们学习了 Java 中的<a href="https://tobebetterjavaer.com/oo/method.html" target="_blank" rel="noreferrer">基本方法</a>，其实 Java 还有一种方法，本地方法，或者叫 native 方法，它与之前的方法有很大的不同。”我放下手中的手机，扭过脸来对三妹说。</p><p>“听起来挺有意思的。”三妹很期待。</p><p>“我会教你用 C语言实现一个 native 方法。”我继续说到，“C语言是另外一种编程语言，你可以点这个<a href="https://tobebetterjavaer.com/xuexiluxian/c.html" target="_blank" rel="noreferrer">链接</a>去了解和学习。让我们开始吧”</p><p>类似 Thread 类中的 <code>private native start0()</code> 方法；</p><p>又或者 Object.class 类中的 getClass() 方法、hashCode()方法、clone() 方法，其中方法签名如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">final</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">native</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Class</span><span style="color:#F286C4;">&lt;?&gt;</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">getClass</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">native</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">hashCode</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F286C4;">protected</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">native</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">Object</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">clone</span><span style="color:#F6F6F4;">() throws CloneNotSupportedException;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">final</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">native</span><span style="color:#24292E;"> Class</span><span style="color:#D73A49;">&lt;?&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getClass</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">native</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">hashCode</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">native</span><span style="color:#24292E;"> Object </span><span style="color:#6F42C1;">clone</span><span style="color:#24292E;">() throws CloneNotSupportedException;</span></span></code></pre></div><p>也就是用【native】关键词修饰的方法，多数情况下不需要用 Java 语言实现。</p><p>“二哥，为什么要用 native 来修饰方法呢，这样做有什么用？”三妹很乖，但这个问题也问的很掷地有声。</p><p>“好的，三妹，我们一步步来扒拉”。</p><h3 id="_1、jni-java-native-interface" tabindex="-1"><strong>1、JNI：Java Native Interface</strong> <a class="header-anchor" href="#_1、jni-java-native-interface" aria-label="Permalink to &quot;**1、JNI：Java Native Interface**&quot;">​</a></h3><p>在介绍 native 之前，我们先了解什么是 JNI。</p><p>一般情况下，我们完全可以使用 Java 语言编写程序，但某些情况下，Java 可能满足不了需求，或者不能更好的满足需求，比如：</p><ul><li>①、标准的 Java 类库不支持。</li><li>②、我们已经用另一种语言，比如说 C/C++ 编写了一个类库，如何用 Java 代码调用呢？</li><li>③、某些运行次数特别多的方法，为了加快性能，需要用更接近硬件的语言（比如汇编）编写。</li></ul><p>上面这三种需求，说到底就是如何用 Java 代码调用不同语言编写的代码。那么 JNI 应运而生了。</p><p>从 Java 1.1 开始，Java Native Interface (JNI)标准就成为 Java 平台的一部分，它允许 Java 代码和其他语言编写的代码进行交互。</p><p>JNI 一开始是为了本地已编译语言，尤其是 C 和 C++而设计的，但是它并不妨碍你使用其他语言，只要调用约定受支持就可以了。使用 Java 与本地已编译的代码交互，通常会丧失平台可移植性，但是，有些情况下这样做是可以接受的，甚至是必须的，比如，使用一些旧的库，与硬件、操作系统进行交互，或者为了提高程序的性能。JNI 标准至少保证本地代码能工作能在任何 Java 虚拟机实现下。</p><img src="`+o+`"><p>通过 JNI，我们就可以通过 Java 程序（代码）调用到操作系统相关的技术实现的库函数，从而与其他技术和系统交互；同时其他技术和系统也可以通过 JNI 提供的相应原生接口调用 Java 应用系统内部实现的功能。</p><p>“二哥，等一下，Java 不是跨平台的吗？如果用 JNI，那么程序不就失去了跨平台的优点？”不得不说，三妹这个问题起到好处。</p><p>“确实是这样的。”我掐灭了中指和无名指之间的烟头，继续娓娓道来。</p><p>JNI 的缺点：</p><ul><li>①、程序不再跨平台。要想跨平台，必须在不同的系统环境下重新编译本地语言部分。</li><li>②、程序不再是绝对安全的，本地代码的不当使用可能导致整个程序崩溃。一个通用规则是，你应该让本地方法集中在少数几个类当中。这样就降低了 Java 和 C/C++ 之间的耦合性。</li></ul><p>目前来讲使用 JNI 的缺点相对于优点还是可以接受的，可能后面随着 Java 的技术发展，我们不在需要 JNI，但是目前 JDK 还是一直提供了对 JNI 标准的支持。</p><h3 id="_2、用-c-语言编写程序本地方法" tabindex="-1"><strong>2、用 C 语言编写程序本地方法</strong> <a class="header-anchor" href="#_2、用-c-语言编写程序本地方法" aria-label="Permalink to &quot;**2、用 C 语言编写程序本地方法**&quot;">​</a></h3><p>“上面讲解了什么是 JNI，接下来我们来写个例子：如何用 Java 代码调用本地的 C 程序。”我扭头对三妹说，“你注意📢看。”</p><blockquote><p>官方文档如下：<a href="https://docs.oracle.com/javase/8/docs/technotes/guides/jni/spec/jniTOC.html" target="_blank" rel="noreferrer">https://docs.oracle.com/javase/8/docs/technotes/guides/jni/spec/jniTOC.html</a></p></blockquote><p>步骤如下：</p><p>①、编写带有 native 方法的 Java 类，生成.java 文件；</p><p>②、使用 javac 命令编译所编写的 Java 类，生成.class 文件；</p><p>③、使用 javah -jni java 类名 生成扩展名为 h 的头文件，也即生成 .h 文件；</p><p>④、使用 C/C++（或者其他编程想语言）实现本地方法，创建 .h 文件的实现，也就是创建 .cpp 文件实现.h 文件中的方法；</p><p>⑤、将 C/C++ 编写的文件生成动态连接库，生成 dll 文件；</p><p>下面我们通过一个 HelloWorld 程序的调用来完成这几个步骤。</p><h4 id="_01-编写带有-native-方法的-java-类-hellojni-java" tabindex="-1">01）编写带有 native 方法的 Java 类 HelloJNI.java <a class="header-anchor" href="#_01-编写带有-native-方法的-java-类-hellojni-java" aria-label="Permalink to &quot;01）编写带有 native 方法的 Java 类 HelloJNI.java&quot;">​</a></h4><p>在 <code>/Users/itwanger/Documents/Github/javabetter/testjni</code> 目录下创建 HelloJNI.java 文件，内容如下所示。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">HelloJNI</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">static</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">        System.</span><span style="color:#62E884;">loadLibrary</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">hello</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">); </span><span style="color:#7B7F8B;">// 加载名为 libhello.dylib 的动态链接库</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 定义本地方法</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">private</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">native</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">helloJNI</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">static</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">main</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;">[] </span><span style="color:#FFB86C;font-style:italic;">args</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">HelloJNI</span><span style="color:#F6F6F4;">().</span><span style="color:#62E884;">helloJNI</span><span style="color:#F6F6F4;">(); </span><span style="color:#7B7F8B;">// 调用本地方法</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HelloJNI</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        System.</span><span style="color:#6F42C1;">loadLibrary</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;hello&quot;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 加载名为 libhello.dylib 的动态链接库</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 定义本地方法</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">native</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">helloJNI</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] </span><span style="color:#E36209;">args</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HelloJNI</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">helloJNI</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 调用本地方法</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><strong>PS：后面执行的命令都将在 testjni 的目录下</strong>。</p><p>解释一下这段代码：</p><p><code>private native void helloJNI()</code>：用 native 声明的方法告知 JVM 调用该方法在外部定义，也就是我们会用 C 语言去实现。</p><p><code>System.loadLibrary(&quot;hello&quot;)</code>：加载动态库，参数 hello 是动态库的名字。我们可以这样理解：程序中的方法 helloJNI() 在程序中没有实现，但是我们下面要调用这个方法，怎么办呢？</p><p>我们就需要对这个方法进行初始化，所以用了 <a href="https://tobebetterjavaer.com/oo/static.html" target="_blank" rel="noreferrer">static 代码块进行初始化</a>，后面会讲到。</p><h4 id="_02-编译-hellojni-java" tabindex="-1">02）编译 HelloJNI.java <a class="header-anchor" href="#_02-编译-hellojni-java" aria-label="Permalink to &quot;02）编译 HelloJNI.java&quot;">​</a></h4><p>在命令行通过 <code>javac HelloJNI.java</code> 来编译源代码。</p><img src="`+p+'"><h4 id="_03-使用-javah-jni-hellojni-生成扩展名为-h-的头文件" tabindex="-1">03）使用 <code>javah -jni HelloJNI</code> 生成扩展名为 h 的头文件 <a class="header-anchor" href="#_03-使用-javah-jni-hellojni-生成扩展名为-h-的头文件" aria-label="Permalink to &quot;03）使用 `javah -jni HelloJNI` 生成扩展名为 h 的头文件&quot;">​</a></h4><img src="'+e+'"><blockquote><p>PS：Java 9 以后，javah 被弃用，取而代之的是使用 -h 选项来生成头文件，例如 <code>javac -h . ClassName.java</code>。</p></blockquote><p>执行完毕后，会在 HelloJNI.java 所在目录下生成一个名为 HelloJNI.h 的头文件。打开 HelloJNI.h 文件，可以看到如下代码。</p><img src="'+t+`"><p>看不懂没关系，无所谓，直到它是自动生成的就好。</p><h4 id="_04-使用-c-语言实现本地方法" tabindex="-1">04）使用 C 语言实现本地方法 <a class="header-anchor" href="#_04-使用-c-语言实现本地方法" aria-label="Permalink to &quot;04）使用 C 语言实现本地方法&quot;">​</a></h4><p>创建一个 C 文件 HelloJNI.c，实现本地方法 sayHello。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">#include</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&lt;</span><span style="color:#E7EE98;">stdio.h</span><span style="color:#DEE492;">&gt;</span></span>
<span class="line"><span style="color:#F286C4;">#include</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&lt;</span><span style="color:#E7EE98;">jni.h</span><span style="color:#DEE492;">&gt;</span></span>
<span class="line"><span style="color:#F286C4;">#include</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">HelloJNI.h</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">JNIEXPORT </span><span style="color:#F286C4;">void</span><span style="color:#F6F6F4;"> JNICALL </span><span style="color:#62E884;">Java_HelloJNI_helloJNI</span><span style="color:#F6F6F4;">(JNIEnv </span><span style="color:#F286C4;">*</span><span style="color:#FFB86C;font-style:italic;">env</span><span style="color:#F6F6F4;">, jobject </span><span style="color:#FFB86C;font-style:italic;">obj</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#62E884;">printf</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">Hello, JNI!</span><span style="color:#F286C4;">\\n</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;jni.h&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;HelloJNI.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">JNIEXPORT </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> JNICALL </span><span style="color:#6F42C1;">Java_HelloJNI_helloJNI</span><span style="color:#24292E;">(JNIEnv </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">env</span><span style="color:#24292E;">, jobject </span><span style="color:#E36209;">obj</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Hello, JNI!</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>注意，这里需要引入 JNI 头文件，并且实现的方法名称需要与在 Java 中声明的名称一致（<code>HelloJNI_helloJNI</code> HelloJNI 类的 helloJNI 方法）。</p><h4 id="_05-编写编译脚本-compile-sh" tabindex="-1">05）编写编译脚本 compile.sh <a class="header-anchor" href="#_05-编写编译脚本-compile-sh" aria-label="Permalink to &quot;05）编写编译脚本 compile.sh&quot;">​</a></h4><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># 编译 HelloJNI.c 文件</span></span>
<span class="line"><span style="color:#62E884;">gcc</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-I</span><span style="color:#DEE492;">&quot;</span><span style="color:#BF9EEE;">$JAVA_HOME</span><span style="color:#E7EE98;">/include</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-I</span><span style="color:#DEE492;">&quot;</span><span style="color:#BF9EEE;">$JAVA_HOME</span><span style="color:#E7EE98;">/include/darwin</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-shared</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-o</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">libhello.dylib</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">HelloJNI.c</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># 把生成的 libhello.dylib 文件拷贝到当前目录</span></span>
<span class="line"><span style="color:#62E884;">cp</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">libhello.dylib</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 编译 HelloJNI.c 文件</span></span>
<span class="line"><span style="color:#6F42C1;">gcc</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-I</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$JAVA_HOME</span><span style="color:#032F62;">/include&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-I</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$JAVA_HOME</span><span style="color:#032F62;">/include/darwin&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-shared</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-o</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libhello.dylib</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HelloJNI.c</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 把生成的 libhello.dylib 文件拷贝到当前目录</span></span>
<span class="line"><span style="color:#6F42C1;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libhello.dylib</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span></code></pre></div><p>注意事项：</p><ul><li><code>$JAVA_HOME</code> 是 JDK 的安装路径，需要根据实际情况修改。</li><li>在 macOS 上，动态链接库（hello）的后缀是 .dylib，而不是 Linux 上的 .so。</li></ul><p>这里的 -I 选项是为了告诉编译器头文件的位置，<code>$JAVA_HOME</code> 是 Java 安装目录的路径。</p><h4 id="_06-执行编译脚本" tabindex="-1">06）执行编译脚本 <a class="header-anchor" href="#_06-执行编译脚本" aria-label="Permalink to &quot;06）执行编译脚本&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">sh compile.sh</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">sh compile.sh</span></span></code></pre></div><p>执行完毕后，会在当前目录下生成一个名为 libhello.dylib 的动态链接库。</p><img src="`+c+'"><h4 id="_07-运行-hellojni" tabindex="-1">07）运行 HelloJNI <a class="header-anchor" href="#_07-运行-hellojni" aria-label="Permalink to &quot;07）运行 HelloJNI&quot;">​</a></h4><p>执行<code>java HelloJNI</code>命令运行 HelloJNI，如果一切正常，就会在终端上输出 Hello, JNI!。</p><img src="'+r+'"><h3 id="_3、jni-调用-c-的流程图" tabindex="-1"><strong>3、JNI 调用 C 的流程图</strong> <a class="header-anchor" href="#_3、jni-调用-c-的流程图" aria-label="Permalink to &quot;**3、JNI 调用 C 的流程图**&quot;">​</a></h3><img src="'+i+'"><h3 id="_4、native-关键字" tabindex="-1"><strong>4、native 关键字</strong> <a class="header-anchor" href="#_4、native-关键字" aria-label="Permalink to &quot;**4、native 关键字**&quot;">​</a></h3><p>“三妹，现在应该知道什么是 native 了吧？”我问三妹。</p><p>“嗯嗯，我来简述一下，二哥你看看我说的是否正确。”</p><p>native 用来修饰方法，用 native 声明的方法表示该方法的实现在外部定义，可以用任何语言去实现它，比如说 C/C++。 简单地讲，一个 native Method 就是一个 Java 调用非 Java 代码的接口。</p><p>native 语法：</p><ul><li>①、修饰方法的位置必须在返回类型之前，和其余的方法控制符前后关系不受限制。</li><li>②、不能用 abstract 修饰，也没有方法体，也没有左右大括号。</li><li>③、返回值可以是任意类型</li></ul><p>“三妹，你学的不错嘛。”我对三妹的学习能力感到非常的欣慰，“<strong>我们在日常编程中看到 native 修饰的方法，只需要知道这个方法的作用是什么，至于别的就不用管了，操作系统会给我们实现，初学的时候也不需要太过深入</strong>。”</p><blockquote><ul><li>Windows 下安装 gcc 教程：<a href="https://blog.csdn.net/altland/article/details/63252757" target="_blank" rel="noreferrer">http://blog.csdn.net/altland/article/details/63252757</a></li><li>native 参考链接：<a href="https://www.zhihu.com/question/28001771/answer/2049534464" target="_blank" rel="noreferrer">https://www.zhihu.com/question/28001771/answer/2049534464</a></li></ul></blockquote><hr>',78),d=[F];function h(v,E,b,J,u,C){return a(),l("div",null,d)}const N=s(y,[["render",h]]);export{I as __pageData,N as default};