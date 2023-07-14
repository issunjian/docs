import{_ as s,o as n,c as a,V as l}from"./chunks/framework.c6d8cbec.js";const p="/docs/assets/asm-43844b78-c01f-4990-b038-3c91ff2eeb34.38387cf5.jpg",o="/docs/assets/asm-e31b7e50-1d48-4eef-9552-6fa7e6c68fed.b9951fd8.jpg",e="/docs/assets/asm-4670450e-6199-4562-9cf4-354234c734c8.867b96ab.jpg",t="/docs/assets/asm-9808d639-327f-4796-80d4-1809be0b9106.917bbf16.jpg",c="/docs/assets/asm-3c8c8db4-5b6a-4576-b147-62965d0e0c1c.07deadaf.jpg",g=JSON.parse('{"title":"史上最通俗易懂的ASM教程","description":"Java程序员进阶之路，小白的零基础Java教程，从入门到进阶，史上最通俗易懂的ASM教程","frontmatter":{"title":"史上最通俗易懂的ASM教程","shortTitle":"史上最通俗易懂的ASM教程","category":["Java核心"],"tag":["Java虚拟机"],"description":"Java程序员进阶之路，小白的零基础Java教程，从入门到进阶，史上最通俗易懂的ASM教程","head":[["meta",{"name":"keywords","content":"Java,JavaSE,教程,Java程序员进阶之路,jvm,Java虚拟机,asm"}]]},"headers":[],"relativePath":"backend/tobetter/jvm/asm.md","filePath":"backend/tobetter/jvm/asm.md"}'),r={name:"backend/tobetter/jvm/asm.md"},i=l('<h1 id="史上最通俗易懂的asm教程" tabindex="-1">史上最通俗易懂的ASM教程 <a class="header-anchor" href="#史上最通俗易懂的asm教程" aria-label="Permalink to &quot;史上最通俗易懂的ASM教程&quot;">​</a></h1><h2 id="一勺思想" tabindex="-1">一勺思想 <a class="header-anchor" href="#一勺思想" aria-label="Permalink to &quot;一勺思想&quot;">​</a></h2><p>We are all in the gutter, but some of us are looking at the stars. （我们都生活在阴沟里，但仍有人仰望星空 ）- 王尔德 《温德米尔夫人的扇子》</p><p>举世混浊我独清，众人皆醉我独醒 - 屈原 《楚辞》</p><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>ASM是一种通用Java字节码操作和分析框架。它可以用于修改现有的class文件或动态生成class文件。</p><blockquote><p>**ASM **is an all purpose Java bytecode manipulation and analysis framework. It can be used to modify existing classes or to dynamically generate classes, directly in binary form. ASM provides some common bytecode transformations and analysis algorithms from which custom complex transformations and code analysis tools can be built. ASM offers similar functionality as other Java bytecode frameworks, but is focused on<a href="https://asm.ow2.io/performance.html" target="_blank" rel="noreferrer">performance</a>. Because it was designed and implemented to be as small and as fast as possible, it is well suited for use in dynamic systems (but can of course be used in a static way too, e.g. in compilers).</p></blockquote><p>本篇文章分享的是对ASM的理解和应用，之前需要我们掌握<strong>class字节码</strong>，<strong>JVM基于栈的设计模式,JVM指令</strong></p><h2 id="class字节码" tabindex="-1">class字节码 <a class="header-anchor" href="#class字节码" aria-label="Permalink to &quot;class字节码&quot;">​</a></h2><p>我们编写的java文件，会通过javac命令编译为class文件，JVM最终会执行该类型文件来运行程序。下图所示为class文件结构。</p><img src="'+p+`"><p>下面我们通过一个简单的实例来进行说明。下面是我们编写的一个简单的java文件，只是简单的函数调用.</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Test</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">private</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> num1 </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">static</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> NUM1 </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">100</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">func</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">a</span><span style="color:#F6F6F4;">,</span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">b</span><span style="color:#F6F6F4;">){</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">add</span><span style="color:#F6F6F4;">(a,b);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">add</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">a</span><span style="color:#F6F6F4;">,</span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">b</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> a</span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;">b</span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;">num1;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">sub</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">a</span><span style="color:#F6F6F4;">, </span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">b</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> a</span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;">b</span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;">NUM1;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Test</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> num1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> NUM1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">func</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">a</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">b</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(a,b);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">a</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">b</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> a</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">b</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">num1;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sub</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">a</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">b</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> a</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">b</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">NUM1;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>使用javac -g Test.java编译为class文件，然后通过 <code>javap -verbose Test.class</code> 命令查看class文件格式。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">public class com.wuba.asmdemo.Test</span></span>
<span class="line"><span style="color:#f6f6f4;">  minor version: 0</span></span>
<span class="line"><span style="color:#f6f6f4;">  major version: 52</span></span>
<span class="line"><span style="color:#f6f6f4;">  flags: ACC_PUBLIC, ACC_SUPER</span></span>
<span class="line"><span style="color:#f6f6f4;">Constant pool:</span></span>
<span class="line"><span style="color:#f6f6f4;">   #1 = Methodref          #6.#26         // java/lang/Object.&quot;&lt;init&gt;&quot;:()V</span></span>
<span class="line"><span style="color:#f6f6f4;">   #2 = Fieldref           #5.#27         // com/wuba/asmdemo/Test.num1:I</span></span>
<span class="line"><span style="color:#f6f6f4;">   #3 = Methodref          #5.#28         // com/wuba/asmdemo/Test.add:(II)I</span></span>
<span class="line"><span style="color:#f6f6f4;">   #4 = Fieldref           #5.#29         // com/wuba/asmdemo/Test.NUM1:I</span></span>
<span class="line"><span style="color:#f6f6f4;">   #5 = Class              #30            // com/wuba/asmdemo/Test</span></span>
<span class="line"><span style="color:#f6f6f4;">   #6 = Class              #31            // java/lang/Object</span></span>
<span class="line"><span style="color:#f6f6f4;">   #7 = Utf8               num1</span></span>
<span class="line"><span style="color:#f6f6f4;">   #8 = Utf8               I</span></span>
<span class="line"><span style="color:#f6f6f4;">   #9 = Utf8               NUM1</span></span>
<span class="line"><span style="color:#f6f6f4;">  #10 = Utf8               &lt;init&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  #11 = Utf8               ()V</span></span>
<span class="line"><span style="color:#f6f6f4;">  #12 = Utf8               Code</span></span>
<span class="line"><span style="color:#f6f6f4;">  #13 = Utf8               LineNumberTable</span></span>
<span class="line"><span style="color:#f6f6f4;">  #14 = Utf8               LocalVariableTable</span></span>
<span class="line"><span style="color:#f6f6f4;">  #15 = Utf8               this</span></span>
<span class="line"><span style="color:#f6f6f4;">  #16 = Utf8               Lcom/wuba/asmdemo/Test;</span></span>
<span class="line"><span style="color:#f6f6f4;">  #17 = Utf8               func</span></span>
<span class="line"><span style="color:#f6f6f4;">  #18 = Utf8               (II)I</span></span>
<span class="line"><span style="color:#f6f6f4;">  #19 = Utf8               a</span></span>
<span class="line"><span style="color:#f6f6f4;">  #20 = Utf8               b</span></span>
<span class="line"><span style="color:#f6f6f4;">  #21 = Utf8               add</span></span>
<span class="line"><span style="color:#f6f6f4;">  #22 = Utf8               sub</span></span>
<span class="line"><span style="color:#f6f6f4;">  #23 = Utf8               &lt;clinit&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  #24 = Utf8               SourceFile</span></span>
<span class="line"><span style="color:#f6f6f4;">  #25 = Utf8               Test.java</span></span>
<span class="line"><span style="color:#f6f6f4;">  #26 = NameAndType        #10:#11        // &quot;&lt;init&gt;&quot;:()V</span></span>
<span class="line"><span style="color:#f6f6f4;">  #27 = NameAndType        #7:#8          // num1:I</span></span>
<span class="line"><span style="color:#f6f6f4;">  #28 = NameAndType        #21:#18        // add:(II)I</span></span>
<span class="line"><span style="color:#f6f6f4;">  #29 = NameAndType        #9:#8          // NUM1:I</span></span>
<span class="line"><span style="color:#f6f6f4;">  #30 = Utf8               com/wuba/asmdemo/Test</span></span>
<span class="line"><span style="color:#f6f6f4;">  #31 = Utf8               java/lang/Object</span></span>
<span class="line"><span style="color:#f6f6f4;">{</span></span>
<span class="line"><span style="color:#f6f6f4;">  public static int NUM1;</span></span>
<span class="line"><span style="color:#f6f6f4;">    descriptor: I</span></span>
<span class="line"><span style="color:#f6f6f4;">    flags: ACC_PUBLIC, ACC_STATIC</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  public com.wuba.asmdemo.Test();     //构造函数</span></span>
<span class="line"><span style="color:#f6f6f4;">    descriptor: ()V</span></span>
<span class="line"><span style="color:#f6f6f4;">    flags: ACC_PUBLIC</span></span>
<span class="line"><span style="color:#f6f6f4;">    Code:</span></span>
<span class="line"><span style="color:#f6f6f4;">      stack=2, locals=1, args_size=1</span></span>
<span class="line"><span style="color:#f6f6f4;">         0: aload_0</span></span>
<span class="line"><span style="color:#f6f6f4;">         1: invokespecial #1                  // Method java/lang/Object.&quot;&lt;init&gt;&quot;:()V</span></span>
<span class="line"><span style="color:#f6f6f4;">         4: aload_0</span></span>
<span class="line"><span style="color:#f6f6f4;">         5: iconst_1</span></span>
<span class="line"><span style="color:#f6f6f4;">         6: putfield      #2                  // Field num1:I</span></span>
<span class="line"><span style="color:#f6f6f4;">         9: return</span></span>
<span class="line"><span style="color:#f6f6f4;">      LineNumberTable:</span></span>
<span class="line"><span style="color:#f6f6f4;">        line 3: 0</span></span>
<span class="line"><span style="color:#f6f6f4;">        line 5: 4</span></span>
<span class="line"><span style="color:#f6f6f4;">      LocalVariableTable:</span></span>
<span class="line"><span style="color:#f6f6f4;">        Start  Length  Slot  Name   Signature</span></span>
<span class="line"><span style="color:#f6f6f4;">            0      10     0  this   Lcom/wuba/asmdemo/Test;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  public int func(int, int);</span></span>
<span class="line"><span style="color:#f6f6f4;">    descriptor: (II)I</span></span>
<span class="line"><span style="color:#f6f6f4;">    flags: ACC_PUBLIC</span></span>
<span class="line"><span style="color:#f6f6f4;">    Code:</span></span>
<span class="line"><span style="color:#f6f6f4;">      stack=3, locals=3, args_size=3</span></span>
<span class="line"><span style="color:#f6f6f4;">         0: aload_0</span></span>
<span class="line"><span style="color:#f6f6f4;">         1: iload_1</span></span>
<span class="line"><span style="color:#f6f6f4;">         2: iload_2</span></span>
<span class="line"><span style="color:#f6f6f4;">         3: invokevirtual #3                  // Method add:(II)I</span></span>
<span class="line"><span style="color:#f6f6f4;">         6: ireturn</span></span>
<span class="line"><span style="color:#f6f6f4;">      LineNumberTable:</span></span>
<span class="line"><span style="color:#f6f6f4;">        line 10: 0</span></span>
<span class="line"><span style="color:#f6f6f4;">      LocalVariableTable:</span></span>
<span class="line"><span style="color:#f6f6f4;">        Start  Length  Slot  Name   Signature</span></span>
<span class="line"><span style="color:#f6f6f4;">            0       7     0  this   Lcom/wuba/asmdemo/Test;</span></span>
<span class="line"><span style="color:#f6f6f4;">            0       7     1     a   I</span></span>
<span class="line"><span style="color:#f6f6f4;">            0       7     2     b   I</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  public int add(int, int);</span></span>
<span class="line"><span style="color:#f6f6f4;">    descriptor: (II)I</span></span>
<span class="line"><span style="color:#f6f6f4;">    flags: ACC_PUBLIC</span></span>
<span class="line"><span style="color:#f6f6f4;">    Code:</span></span>
<span class="line"><span style="color:#f6f6f4;">      stack=2, locals=3, args_size=3</span></span>
<span class="line"><span style="color:#f6f6f4;">         0: iload_1</span></span>
<span class="line"><span style="color:#f6f6f4;">         1: iload_2</span></span>
<span class="line"><span style="color:#f6f6f4;">         2: iadd</span></span>
<span class="line"><span style="color:#f6f6f4;">         3: aload_0</span></span>
<span class="line"><span style="color:#f6f6f4;">         4: getfield      #2                  // Field num1:I</span></span>
<span class="line"><span style="color:#f6f6f4;">         7: iadd</span></span>
<span class="line"><span style="color:#f6f6f4;">         8: ireturn</span></span>
<span class="line"><span style="color:#f6f6f4;">      LineNumberTable:</span></span>
<span class="line"><span style="color:#f6f6f4;">        line 14: 0</span></span>
<span class="line"><span style="color:#f6f6f4;">      LocalVariableTable:</span></span>
<span class="line"><span style="color:#f6f6f4;">        Start  Length  Slot  Name   Signature</span></span>
<span class="line"><span style="color:#f6f6f4;">            0       9     0  this   Lcom/wuba/asmdemo/Test;</span></span>
<span class="line"><span style="color:#f6f6f4;">            0       9     1     a   I</span></span>
<span class="line"><span style="color:#f6f6f4;">            0       9     2     b   I</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  public int sub(int, int);</span></span>
<span class="line"><span style="color:#f6f6f4;">    descriptor: (II)I</span></span>
<span class="line"><span style="color:#f6f6f4;">    flags: ACC_PUBLIC</span></span>
<span class="line"><span style="color:#f6f6f4;">    Code:</span></span>
<span class="line"><span style="color:#f6f6f4;">      stack=2, locals=3, args_size=3</span></span>
<span class="line"><span style="color:#f6f6f4;">         0: iload_1</span></span>
<span class="line"><span style="color:#f6f6f4;">         1: iload_2</span></span>
<span class="line"><span style="color:#f6f6f4;">         2: isub</span></span>
<span class="line"><span style="color:#f6f6f4;">         3: getstatic     #4                  // Field NUM1:I</span></span>
<span class="line"><span style="color:#f6f6f4;">         6: isub</span></span>
<span class="line"><span style="color:#f6f6f4;">         7: ireturn</span></span>
<span class="line"><span style="color:#f6f6f4;">      LineNumberTable:</span></span>
<span class="line"><span style="color:#f6f6f4;">        line 18: 0</span></span>
<span class="line"><span style="color:#f6f6f4;">      LocalVariableTable:</span></span>
<span class="line"><span style="color:#f6f6f4;">        Start  Length  Slot  Name   Signature</span></span>
<span class="line"><span style="color:#f6f6f4;">            0       8     0  this   Lcom/wuba/asmdemo/Test;</span></span>
<span class="line"><span style="color:#f6f6f4;">            0       8     1     a   I</span></span>
<span class="line"><span style="color:#f6f6f4;">            0       8     2     b   I</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  static {};</span></span>
<span class="line"><span style="color:#f6f6f4;">    descriptor: ()V</span></span>
<span class="line"><span style="color:#f6f6f4;">    flags: ACC_STATIC</span></span>
<span class="line"><span style="color:#f6f6f4;">    Code:</span></span>
<span class="line"><span style="color:#f6f6f4;">      stack=1, locals=0, args_size=0</span></span>
<span class="line"><span style="color:#f6f6f4;">         0: bipush        100</span></span>
<span class="line"><span style="color:#f6f6f4;">         2: putstatic     #4                  // Field NUM1:I</span></span>
<span class="line"><span style="color:#f6f6f4;">         5: return</span></span>
<span class="line"><span style="color:#f6f6f4;">      LineNumberTable:</span></span>
<span class="line"><span style="color:#f6f6f4;">        line 7: 0</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">SourceFile: &quot;Test.java&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class com.wuba.asmdemo.Test</span></span>
<span class="line"><span style="color:#24292e;">  minor version: 0</span></span>
<span class="line"><span style="color:#24292e;">  major version: 52</span></span>
<span class="line"><span style="color:#24292e;">  flags: ACC_PUBLIC, ACC_SUPER</span></span>
<span class="line"><span style="color:#24292e;">Constant pool:</span></span>
<span class="line"><span style="color:#24292e;">   #1 = Methodref          #6.#26         // java/lang/Object.&quot;&lt;init&gt;&quot;:()V</span></span>
<span class="line"><span style="color:#24292e;">   #2 = Fieldref           #5.#27         // com/wuba/asmdemo/Test.num1:I</span></span>
<span class="line"><span style="color:#24292e;">   #3 = Methodref          #5.#28         // com/wuba/asmdemo/Test.add:(II)I</span></span>
<span class="line"><span style="color:#24292e;">   #4 = Fieldref           #5.#29         // com/wuba/asmdemo/Test.NUM1:I</span></span>
<span class="line"><span style="color:#24292e;">   #5 = Class              #30            // com/wuba/asmdemo/Test</span></span>
<span class="line"><span style="color:#24292e;">   #6 = Class              #31            // java/lang/Object</span></span>
<span class="line"><span style="color:#24292e;">   #7 = Utf8               num1</span></span>
<span class="line"><span style="color:#24292e;">   #8 = Utf8               I</span></span>
<span class="line"><span style="color:#24292e;">   #9 = Utf8               NUM1</span></span>
<span class="line"><span style="color:#24292e;">  #10 = Utf8               &lt;init&gt;</span></span>
<span class="line"><span style="color:#24292e;">  #11 = Utf8               ()V</span></span>
<span class="line"><span style="color:#24292e;">  #12 = Utf8               Code</span></span>
<span class="line"><span style="color:#24292e;">  #13 = Utf8               LineNumberTable</span></span>
<span class="line"><span style="color:#24292e;">  #14 = Utf8               LocalVariableTable</span></span>
<span class="line"><span style="color:#24292e;">  #15 = Utf8               this</span></span>
<span class="line"><span style="color:#24292e;">  #16 = Utf8               Lcom/wuba/asmdemo/Test;</span></span>
<span class="line"><span style="color:#24292e;">  #17 = Utf8               func</span></span>
<span class="line"><span style="color:#24292e;">  #18 = Utf8               (II)I</span></span>
<span class="line"><span style="color:#24292e;">  #19 = Utf8               a</span></span>
<span class="line"><span style="color:#24292e;">  #20 = Utf8               b</span></span>
<span class="line"><span style="color:#24292e;">  #21 = Utf8               add</span></span>
<span class="line"><span style="color:#24292e;">  #22 = Utf8               sub</span></span>
<span class="line"><span style="color:#24292e;">  #23 = Utf8               &lt;clinit&gt;</span></span>
<span class="line"><span style="color:#24292e;">  #24 = Utf8               SourceFile</span></span>
<span class="line"><span style="color:#24292e;">  #25 = Utf8               Test.java</span></span>
<span class="line"><span style="color:#24292e;">  #26 = NameAndType        #10:#11        // &quot;&lt;init&gt;&quot;:()V</span></span>
<span class="line"><span style="color:#24292e;">  #27 = NameAndType        #7:#8          // num1:I</span></span>
<span class="line"><span style="color:#24292e;">  #28 = NameAndType        #21:#18        // add:(II)I</span></span>
<span class="line"><span style="color:#24292e;">  #29 = NameAndType        #9:#8          // NUM1:I</span></span>
<span class="line"><span style="color:#24292e;">  #30 = Utf8               com/wuba/asmdemo/Test</span></span>
<span class="line"><span style="color:#24292e;">  #31 = Utf8               java/lang/Object</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  public static int NUM1;</span></span>
<span class="line"><span style="color:#24292e;">    descriptor: I</span></span>
<span class="line"><span style="color:#24292e;">    flags: ACC_PUBLIC, ACC_STATIC</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  public com.wuba.asmdemo.Test();     //构造函数</span></span>
<span class="line"><span style="color:#24292e;">    descriptor: ()V</span></span>
<span class="line"><span style="color:#24292e;">    flags: ACC_PUBLIC</span></span>
<span class="line"><span style="color:#24292e;">    Code:</span></span>
<span class="line"><span style="color:#24292e;">      stack=2, locals=1, args_size=1</span></span>
<span class="line"><span style="color:#24292e;">         0: aload_0</span></span>
<span class="line"><span style="color:#24292e;">         1: invokespecial #1                  // Method java/lang/Object.&quot;&lt;init&gt;&quot;:()V</span></span>
<span class="line"><span style="color:#24292e;">         4: aload_0</span></span>
<span class="line"><span style="color:#24292e;">         5: iconst_1</span></span>
<span class="line"><span style="color:#24292e;">         6: putfield      #2                  // Field num1:I</span></span>
<span class="line"><span style="color:#24292e;">         9: return</span></span>
<span class="line"><span style="color:#24292e;">      LineNumberTable:</span></span>
<span class="line"><span style="color:#24292e;">        line 3: 0</span></span>
<span class="line"><span style="color:#24292e;">        line 5: 4</span></span>
<span class="line"><span style="color:#24292e;">      LocalVariableTable:</span></span>
<span class="line"><span style="color:#24292e;">        Start  Length  Slot  Name   Signature</span></span>
<span class="line"><span style="color:#24292e;">            0      10     0  this   Lcom/wuba/asmdemo/Test;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  public int func(int, int);</span></span>
<span class="line"><span style="color:#24292e;">    descriptor: (II)I</span></span>
<span class="line"><span style="color:#24292e;">    flags: ACC_PUBLIC</span></span>
<span class="line"><span style="color:#24292e;">    Code:</span></span>
<span class="line"><span style="color:#24292e;">      stack=3, locals=3, args_size=3</span></span>
<span class="line"><span style="color:#24292e;">         0: aload_0</span></span>
<span class="line"><span style="color:#24292e;">         1: iload_1</span></span>
<span class="line"><span style="color:#24292e;">         2: iload_2</span></span>
<span class="line"><span style="color:#24292e;">         3: invokevirtual #3                  // Method add:(II)I</span></span>
<span class="line"><span style="color:#24292e;">         6: ireturn</span></span>
<span class="line"><span style="color:#24292e;">      LineNumberTable:</span></span>
<span class="line"><span style="color:#24292e;">        line 10: 0</span></span>
<span class="line"><span style="color:#24292e;">      LocalVariableTable:</span></span>
<span class="line"><span style="color:#24292e;">        Start  Length  Slot  Name   Signature</span></span>
<span class="line"><span style="color:#24292e;">            0       7     0  this   Lcom/wuba/asmdemo/Test;</span></span>
<span class="line"><span style="color:#24292e;">            0       7     1     a   I</span></span>
<span class="line"><span style="color:#24292e;">            0       7     2     b   I</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  public int add(int, int);</span></span>
<span class="line"><span style="color:#24292e;">    descriptor: (II)I</span></span>
<span class="line"><span style="color:#24292e;">    flags: ACC_PUBLIC</span></span>
<span class="line"><span style="color:#24292e;">    Code:</span></span>
<span class="line"><span style="color:#24292e;">      stack=2, locals=3, args_size=3</span></span>
<span class="line"><span style="color:#24292e;">         0: iload_1</span></span>
<span class="line"><span style="color:#24292e;">         1: iload_2</span></span>
<span class="line"><span style="color:#24292e;">         2: iadd</span></span>
<span class="line"><span style="color:#24292e;">         3: aload_0</span></span>
<span class="line"><span style="color:#24292e;">         4: getfield      #2                  // Field num1:I</span></span>
<span class="line"><span style="color:#24292e;">         7: iadd</span></span>
<span class="line"><span style="color:#24292e;">         8: ireturn</span></span>
<span class="line"><span style="color:#24292e;">      LineNumberTable:</span></span>
<span class="line"><span style="color:#24292e;">        line 14: 0</span></span>
<span class="line"><span style="color:#24292e;">      LocalVariableTable:</span></span>
<span class="line"><span style="color:#24292e;">        Start  Length  Slot  Name   Signature</span></span>
<span class="line"><span style="color:#24292e;">            0       9     0  this   Lcom/wuba/asmdemo/Test;</span></span>
<span class="line"><span style="color:#24292e;">            0       9     1     a   I</span></span>
<span class="line"><span style="color:#24292e;">            0       9     2     b   I</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  public int sub(int, int);</span></span>
<span class="line"><span style="color:#24292e;">    descriptor: (II)I</span></span>
<span class="line"><span style="color:#24292e;">    flags: ACC_PUBLIC</span></span>
<span class="line"><span style="color:#24292e;">    Code:</span></span>
<span class="line"><span style="color:#24292e;">      stack=2, locals=3, args_size=3</span></span>
<span class="line"><span style="color:#24292e;">         0: iload_1</span></span>
<span class="line"><span style="color:#24292e;">         1: iload_2</span></span>
<span class="line"><span style="color:#24292e;">         2: isub</span></span>
<span class="line"><span style="color:#24292e;">         3: getstatic     #4                  // Field NUM1:I</span></span>
<span class="line"><span style="color:#24292e;">         6: isub</span></span>
<span class="line"><span style="color:#24292e;">         7: ireturn</span></span>
<span class="line"><span style="color:#24292e;">      LineNumberTable:</span></span>
<span class="line"><span style="color:#24292e;">        line 18: 0</span></span>
<span class="line"><span style="color:#24292e;">      LocalVariableTable:</span></span>
<span class="line"><span style="color:#24292e;">        Start  Length  Slot  Name   Signature</span></span>
<span class="line"><span style="color:#24292e;">            0       8     0  this   Lcom/wuba/asmdemo/Test;</span></span>
<span class="line"><span style="color:#24292e;">            0       8     1     a   I</span></span>
<span class="line"><span style="color:#24292e;">            0       8     2     b   I</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  static {};</span></span>
<span class="line"><span style="color:#24292e;">    descriptor: ()V</span></span>
<span class="line"><span style="color:#24292e;">    flags: ACC_STATIC</span></span>
<span class="line"><span style="color:#24292e;">    Code:</span></span>
<span class="line"><span style="color:#24292e;">      stack=1, locals=0, args_size=0</span></span>
<span class="line"><span style="color:#24292e;">         0: bipush        100</span></span>
<span class="line"><span style="color:#24292e;">         2: putstatic     #4                  // Field NUM1:I</span></span>
<span class="line"><span style="color:#24292e;">         5: return</span></span>
<span class="line"><span style="color:#24292e;">      LineNumberTable:</span></span>
<span class="line"><span style="color:#24292e;">        line 7: 0</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">SourceFile: &quot;Test.java&quot;</span></span></code></pre></div><p>可以看出在编译为class文件后，字段名称，方法名称，类型名称等均在常量池中存在的。从而做到减小文件的目的。同时方法定义也转变为了jvm指令。下面我们需要对jvm指令加深一下了解。在了解之前需要我们理解JVM基于栈的设计模式</p><h2 id="jvm基于栈的设计模式" tabindex="-1">JVM基于栈的设计模式 <a class="header-anchor" href="#jvm基于栈的设计模式" aria-label="Permalink to &quot;JVM基于栈的设计模式&quot;">​</a></h2><p>JVM的指令集是基于栈而不是寄存器，基于栈可以具备很好的跨平台性。在线程中执行一个方法时，我们会创建一个栈帧入栈并执行，如果该方法又调用另一个方法时会再次创建新的栈帧然后入栈，方法返回之际，原栈帧会返回方法的执行结果给之前的栈帧，随后虚拟机将会丢弃此栈帧。</p><img src="`+o+`"><h3 id="局部变量表" tabindex="-1">局部变量表 <a class="header-anchor" href="#局部变量表" aria-label="Permalink to &quot;局部变量表&quot;">​</a></h3><p>**局部变量表(Local Variable Table)**是一组变量值存储空间，用于存放方法参数和方法内定义的局部变量。虚拟机通过索引定位的方法查找相应的局部变量。举个例子。以上述的代码为例</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">sub</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> a, </span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> b) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> a</span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;">b</span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;">NUM1;</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sub</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> a, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> b) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> a</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">b</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">NUM1;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span></code></pre></div><p>这个方法大家可以猜测一下局部变量有哪些? 答案是3个，不应该只有a,b吗？还有this,对应实例对象方法编译器都会追加一个this参数。如果该方法为静态方法则为2个了。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">public int sub(int, int);</span></span>
<span class="line"><span style="color:#f6f6f4;">    descriptor: (II)I</span></span>
<span class="line"><span style="color:#f6f6f4;">    flags: ACC_PUBLIC</span></span>
<span class="line"><span style="color:#f6f6f4;">    Code:</span></span>
<span class="line"><span style="color:#f6f6f4;">      stack=2, locals=3, args_size=3</span></span>
<span class="line"><span style="color:#f6f6f4;">         0: iload_1</span></span>
<span class="line"><span style="color:#f6f6f4;">         1: iload_2</span></span>
<span class="line"><span style="color:#f6f6f4;">         2: isub</span></span>
<span class="line"><span style="color:#f6f6f4;">         3: getstatic     #4                  // Field NUM1:I</span></span>
<span class="line"><span style="color:#f6f6f4;">         6: isub</span></span>
<span class="line"><span style="color:#f6f6f4;">         7: ireturn</span></span>
<span class="line"><span style="color:#f6f6f4;">      LineNumberTable:</span></span>
<span class="line"><span style="color:#f6f6f4;">        line 18: 0</span></span>
<span class="line"><span style="color:#f6f6f4;">      LocalVariableTable:</span></span>
<span class="line"><span style="color:#f6f6f4;">        Start  Length  Slot  Name   Signature</span></span>
<span class="line"><span style="color:#f6f6f4;">            0       8     0  this   Lcom/wuba/asmdemo/Test;</span></span>
<span class="line"><span style="color:#f6f6f4;">            0       8     1     a   I</span></span>
<span class="line"><span style="color:#f6f6f4;">            0       8     2     b   I</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public int sub(int, int);</span></span>
<span class="line"><span style="color:#24292e;">    descriptor: (II)I</span></span>
<span class="line"><span style="color:#24292e;">    flags: ACC_PUBLIC</span></span>
<span class="line"><span style="color:#24292e;">    Code:</span></span>
<span class="line"><span style="color:#24292e;">      stack=2, locals=3, args_size=3</span></span>
<span class="line"><span style="color:#24292e;">         0: iload_1</span></span>
<span class="line"><span style="color:#24292e;">         1: iload_2</span></span>
<span class="line"><span style="color:#24292e;">         2: isub</span></span>
<span class="line"><span style="color:#24292e;">         3: getstatic     #4                  // Field NUM1:I</span></span>
<span class="line"><span style="color:#24292e;">         6: isub</span></span>
<span class="line"><span style="color:#24292e;">         7: ireturn</span></span>
<span class="line"><span style="color:#24292e;">      LineNumberTable:</span></span>
<span class="line"><span style="color:#24292e;">        line 18: 0</span></span>
<span class="line"><span style="color:#24292e;">      LocalVariableTable:</span></span>
<span class="line"><span style="color:#24292e;">        Start  Length  Slot  Name   Signature</span></span>
<span class="line"><span style="color:#24292e;">            0       8     0  this   Lcom/wuba/asmdemo/Test;</span></span>
<span class="line"><span style="color:#24292e;">            0       8     1     a   I</span></span>
<span class="line"><span style="color:#24292e;">            0       8     2     b   I</span></span></code></pre></div><p>所以局部变量表第0个元素为this, 第一个为a,第二个为b</p><h3 id="操作数栈" tabindex="-1">操作数栈 <a class="header-anchor" href="#操作数栈" aria-label="Permalink to &quot;操作数栈&quot;">​</a></h3><p>通过局部变量表我们有了要操作和待更新的数据，我们如果对局部变量这些数据进行操作呢？通过操作数栈。当一个方法刚刚开始执行时，其操作数栈是空的，随着方法执行和字节码指令的执行，会从局部变量表或对象实例的字段中复制常量或变量写入到操作数栈，再随着计算的进行将栈中元素出栈到局部变量表或者返回给方法调用者，也就是出栈/入栈操作。一个完整的方法执行期间往往包含多个这样出栈/入栈的过程。</p><h3 id="jvm指令" tabindex="-1">JVM指令 <a class="header-anchor" href="#jvm指令" aria-label="Permalink to &quot;JVM指令&quot;">​</a></h3><ul><li>load 命令：用于将局部变量表的指定位置的相应类型变量加载到操作数栈顶；</li><li>store命令：用于将操作数栈顶的相应类型数据保入局部变量表的指定位置；</li><li>invokevirtual:调用实例方法</li><li>ireturn: 当前方法返回int</li></ul><p><strong>再举个例子</strong></p><p>a = b + c 的字节码执行过程中操作数栈以及局部变量表的变化如下图所示</p><img src="`+e+'"><img src="'+t+`"><h2 id="asm操作" tabindex="-1">ASM操作 <a class="header-anchor" href="#asm操作" aria-label="Permalink to &quot;ASM操作&quot;">​</a></h2><p>通过上面的介绍，我们对字节码和JVM指令有了进一步的了解，下面我们看一下ASM是如果编辑class字节码的。</p><h2 id="asm-api" tabindex="-1">ASM API <a class="header-anchor" href="#asm-api" aria-label="Permalink to &quot;ASM API&quot;">​</a></h2><p>ASM API基于访问者模式，为我们提供了ClassVisitor，MethodVisitor，FieldVisitor API接口，每当ASM扫描到类字段是会回调visitField方法，扫描到类方法是会回调MethodVisitor，下面我们看一下API接口</p><p><strong>ClassVisitor方法解析</strong></p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">abstract</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">ClassVisitor</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">        ......</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">visit</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">version</span><span style="color:#F6F6F4;">, </span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">access</span><span style="color:#F6F6F4;">, </span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F6F6F4;">, </span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">signature</span><span style="color:#F6F6F4;">, </span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">superName</span><span style="color:#F6F6F4;">, </span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;">[] </span><span style="color:#FFB86C;font-style:italic;">interfaces</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//访问类字段时回调</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">FieldVisitor</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">visitField</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">access</span><span style="color:#F6F6F4;">, </span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F6F6F4;">, </span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">desc</span><span style="color:#F6F6F4;">, </span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">signature</span><span style="color:#F6F6F4;">, </span><span style="color:#97E1F1;font-style:italic;">Object</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">value</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//访问类方法是回调</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">MethodVisitor</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">visitMethod</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">access</span><span style="color:#F6F6F4;">, </span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F6F6F4;">, </span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">desc</span><span style="color:#F6F6F4;">, </span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">signature</span><span style="color:#F6F6F4;">, </span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;">[] </span><span style="color:#FFB86C;font-style:italic;">exceptions</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">visitEnd</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">abstract</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ClassVisitor</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        ......</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">visit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">version</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">access</span><span style="color:#24292E;">, String </span><span style="color:#E36209;">name</span><span style="color:#24292E;">, String </span><span style="color:#E36209;">signature</span><span style="color:#24292E;">, String </span><span style="color:#E36209;">superName</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] </span><span style="color:#E36209;">interfaces</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//访问类字段时回调</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> FieldVisitor </span><span style="color:#6F42C1;">visitField</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">access</span><span style="color:#24292E;">, String </span><span style="color:#E36209;">name</span><span style="color:#24292E;">, String </span><span style="color:#E36209;">desc</span><span style="color:#24292E;">, String </span><span style="color:#E36209;">signature</span><span style="color:#24292E;">, Object </span><span style="color:#E36209;">value</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//访问类方法是回调</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> MethodVisitor </span><span style="color:#6F42C1;">visitMethod</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">access</span><span style="color:#24292E;">, String </span><span style="color:#E36209;">name</span><span style="color:#24292E;">, String </span><span style="color:#E36209;">desc</span><span style="color:#24292E;">, String </span><span style="color:#E36209;">signature</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] </span><span style="color:#E36209;">exceptions</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">visitEnd</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="methodvisitor方法解析" tabindex="-1">MethodVisitor方法解析 <a class="header-anchor" href="#methodvisitor方法解析" aria-label="Permalink to &quot;MethodVisitor方法解析&quot;">​</a></h2><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">abstract</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">MethodVisitor</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">        ......</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">visitParameter</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F6F6F4;">, </span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">access</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//访问本地变量类型指令 操作码可以是LOAD,STORE，RET中一种；</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">visitIntInsn</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">opcode</span><span style="color:#F6F6F4;">, </span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">operand</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//域操作指令，用来加载或者存储对象的Field</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">visitFieldInsn</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">opcode</span><span style="color:#F6F6F4;">, </span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">owner</span><span style="color:#F6F6F4;">, </span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F6F6F4;">, </span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">descriptor</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">//访问方法操作指令</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">visitMethodInsn</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">opcode</span><span style="color:#F6F6F4;">, </span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">owner</span><span style="color:#F6F6F4;">, </span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">name</span><span style="color:#F6F6F4;">, </span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> </span><span style="color:#FFB86C;font-style:italic;">descriptor</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">visitEnd</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">abstract</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MethodVisitor</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        ......</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">visitParameter</span><span style="color:#24292E;">(String </span><span style="color:#E36209;">name</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">access</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//访问本地变量类型指令 操作码可以是LOAD,STORE，RET中一种；</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">visitIntInsn</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">opcode</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">operand</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//域操作指令，用来加载或者存储对象的Field</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">visitFieldInsn</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">opcode</span><span style="color:#24292E;">, String </span><span style="color:#E36209;">owner</span><span style="color:#24292E;">, String </span><span style="color:#E36209;">name</span><span style="color:#24292E;">, String </span><span style="color:#E36209;">descriptor</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//访问方法操作指令</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">visitMethodInsn</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">opcode</span><span style="color:#24292E;">, String </span><span style="color:#E36209;">owner</span><span style="color:#24292E;">, String </span><span style="color:#E36209;">name</span><span style="color:#24292E;">, String </span><span style="color:#E36209;">descriptor</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">visitEnd</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="asm-使用demo" tabindex="-1">ASM 使用Demo <a class="header-anchor" href="#asm-使用demo" aria-label="Permalink to &quot;ASM 使用Demo&quot;">​</a></h3><p>java源码</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">add</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> a,</span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> b) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#F286C4;">return</span><span style="color:#F6F6F4;"> a</span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;">b</span><span style="color:#F286C4;">+</span><span style="color:#F6F6F4;">num1;</span></span>
<span class="line"><span style="color:#F6F6F4;"> }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> a,</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> b) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> a</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">b</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">num1;</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span></code></pre></div><p>class字节码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">public int add(int, int);</span></span>
<span class="line"><span style="color:#f6f6f4;">    descriptor: (II)I</span></span>
<span class="line"><span style="color:#f6f6f4;">    flags: ACC_PUBLIC</span></span>
<span class="line"><span style="color:#f6f6f4;">    Code:</span></span>
<span class="line"><span style="color:#f6f6f4;">      stack=2, locals=3, args_size=3</span></span>
<span class="line"><span style="color:#f6f6f4;">         0: iload_1</span></span>
<span class="line"><span style="color:#f6f6f4;">         1: iload_2</span></span>
<span class="line"><span style="color:#f6f6f4;">         2: iadd</span></span>
<span class="line"><span style="color:#f6f6f4;">         3: aload_0</span></span>
<span class="line"><span style="color:#f6f6f4;">         4: getfield      #2                  // Field num1:I</span></span>
<span class="line"><span style="color:#f6f6f4;">         7: iadd</span></span>
<span class="line"><span style="color:#f6f6f4;">         8: ireturn</span></span>
<span class="line"><span style="color:#f6f6f4;">      LineNumberTable:</span></span>
<span class="line"><span style="color:#f6f6f4;">        line 14: 0</span></span>
<span class="line"><span style="color:#f6f6f4;">      LocalVariableTable:</span></span>
<span class="line"><span style="color:#f6f6f4;">        Start  Length  Slot  Name   Signature</span></span>
<span class="line"><span style="color:#f6f6f4;">            0       9     0  this   Lcom/wuba/asmdemo/Test;</span></span>
<span class="line"><span style="color:#f6f6f4;">            0       9     1     a   I</span></span>
<span class="line"><span style="color:#f6f6f4;">            0       9     2     b   I</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public int add(int, int);</span></span>
<span class="line"><span style="color:#24292e;">    descriptor: (II)I</span></span>
<span class="line"><span style="color:#24292e;">    flags: ACC_PUBLIC</span></span>
<span class="line"><span style="color:#24292e;">    Code:</span></span>
<span class="line"><span style="color:#24292e;">      stack=2, locals=3, args_size=3</span></span>
<span class="line"><span style="color:#24292e;">         0: iload_1</span></span>
<span class="line"><span style="color:#24292e;">         1: iload_2</span></span>
<span class="line"><span style="color:#24292e;">         2: iadd</span></span>
<span class="line"><span style="color:#24292e;">         3: aload_0</span></span>
<span class="line"><span style="color:#24292e;">         4: getfield      #2                  // Field num1:I</span></span>
<span class="line"><span style="color:#24292e;">         7: iadd</span></span>
<span class="line"><span style="color:#24292e;">         8: ireturn</span></span>
<span class="line"><span style="color:#24292e;">      LineNumberTable:</span></span>
<span class="line"><span style="color:#24292e;">        line 14: 0</span></span>
<span class="line"><span style="color:#24292e;">      LocalVariableTable:</span></span>
<span class="line"><span style="color:#24292e;">        Start  Length  Slot  Name   Signature</span></span>
<span class="line"><span style="color:#24292e;">            0       9     0  this   Lcom/wuba/asmdemo/Test;</span></span>
<span class="line"><span style="color:#24292e;">            0       9     1     a   I</span></span>
<span class="line"><span style="color:#24292e;">            0       9     2     b   I</span></span></code></pre></div><p>ASM对应的API</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">mv = cw.visitMethod(ACC_PUBLIC, &quot;add&quot;, &quot;(II)I&quot;, null, null);</span></span>
<span class="line"><span style="color:#f6f6f4;">mv.visitCode();</span></span>
<span class="line"><span style="color:#f6f6f4;">mv.visitVarInsn(ILOAD, 1);</span></span>
<span class="line"><span style="color:#f6f6f4;">mv.visitVarInsn(ILOAD, 2);</span></span>
<span class="line"><span style="color:#f6f6f4;">mv.visitInsn(IADD);</span></span>
<span class="line"><span style="color:#f6f6f4;">mv.visitVarInsn(ALOAD, 0);</span></span>
<span class="line"><span style="color:#f6f6f4;">mv.visitFieldInsn(GETFIELD, &quot;com/wuba/asmdemo/Test&quot;, &quot;num1&quot;, &quot;I&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">mv.visitInsn(IADD);</span></span>
<span class="line"><span style="color:#f6f6f4;">mv.visitInsn(IRETURN);</span></span>
<span class="line"><span style="color:#f6f6f4;">Label l1 = new Label();</span></span>
<span class="line"><span style="color:#f6f6f4;">mv.visitLabel(l1);</span></span>
<span class="line"><span style="color:#f6f6f4;">mv.visitLocalVariable(&quot;this&quot;, &quot;Lcom/wuba/asmdemo/Test;&quot;, null, l0, l1, 0);</span></span>
<span class="line"><span style="color:#f6f6f4;">mv.visitLocalVariable(&quot;a&quot;, &quot;I&quot;, null, l0, l1, 1);</span></span>
<span class="line"><span style="color:#f6f6f4;">mv.visitLocalVariable(&quot;b&quot;, &quot;I&quot;, null, l0, l1, 2);</span></span>
<span class="line"><span style="color:#f6f6f4;">mv.visitMaxs(2, 3);</span></span>
<span class="line"><span style="color:#f6f6f4;">mv.visitEnd();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mv = cw.visitMethod(ACC_PUBLIC, &quot;add&quot;, &quot;(II)I&quot;, null, null);</span></span>
<span class="line"><span style="color:#24292e;">mv.visitCode();</span></span>
<span class="line"><span style="color:#24292e;">mv.visitVarInsn(ILOAD, 1);</span></span>
<span class="line"><span style="color:#24292e;">mv.visitVarInsn(ILOAD, 2);</span></span>
<span class="line"><span style="color:#24292e;">mv.visitInsn(IADD);</span></span>
<span class="line"><span style="color:#24292e;">mv.visitVarInsn(ALOAD, 0);</span></span>
<span class="line"><span style="color:#24292e;">mv.visitFieldInsn(GETFIELD, &quot;com/wuba/asmdemo/Test&quot;, &quot;num1&quot;, &quot;I&quot;);</span></span>
<span class="line"><span style="color:#24292e;">mv.visitInsn(IADD);</span></span>
<span class="line"><span style="color:#24292e;">mv.visitInsn(IRETURN);</span></span>
<span class="line"><span style="color:#24292e;">Label l1 = new Label();</span></span>
<span class="line"><span style="color:#24292e;">mv.visitLabel(l1);</span></span>
<span class="line"><span style="color:#24292e;">mv.visitLocalVariable(&quot;this&quot;, &quot;Lcom/wuba/asmdemo/Test;&quot;, null, l0, l1, 0);</span></span>
<span class="line"><span style="color:#24292e;">mv.visitLocalVariable(&quot;a&quot;, &quot;I&quot;, null, l0, l1, 1);</span></span>
<span class="line"><span style="color:#24292e;">mv.visitLocalVariable(&quot;b&quot;, &quot;I&quot;, null, l0, l1, 2);</span></span>
<span class="line"><span style="color:#24292e;">mv.visitMaxs(2, 3);</span></span>
<span class="line"><span style="color:#24292e;">mv.visitEnd();</span></span></code></pre></div><p>可以看出ASM是在指令层次上操作字节码的，和class字节码更加接近。如果我们有些字节码操作的需求，ASM一定可以实现的。只是使用起来比较麻烦一些。这里强烈推荐一款ASM插件</p><blockquote><p><a href="https://plugins.jetbrains.com/plugin/5918-asm-bytecode-outline" target="_blank" rel="noreferrer">https://plugins.jetbrains.com/plugin/5918-asm-bytecode-outline</a></p></blockquote><p>可以一键生成对应的ASM API代码</p><img src="`+c+'"><hr><blockquote><p>参考链接：<a href="https://zhuanlan.zhihu.com/p/94498015" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/94498015</a></p></blockquote><hr>',55),y=[i];function f(F,d,u,b,m,E){return n(),a("div",null,y)}const C=s(r,[["render",f]]);export{g as __pageData,C as default};
