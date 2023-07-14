import{_ as s,o as a,c as n,V as l}from"./chunks/framework.c6d8cbec.js";const v=JSON.parse('{"title":"Java中的包：如何创建、导入和使用 package 来优化代码结构","description":"Java中的包是一种用于组织和管理代码的机制，可以帮助开发者更有效地处理复杂的项目。本文将详细讲解Java包的概念、创建、导入以及使用方法，以及如何通过包提高代码可读性和模块化。掌握Java包的使用技巧，为更高级的Java编程打下坚实基础。","frontmatter":{"title":"Java中的包：如何创建、导入和使用 package 来优化代码结构","shortTitle":"Java中的包","description":"Java中的包是一种用于组织和管理代码的机制，可以帮助开发者更有效地处理复杂的项目。本文将详细讲解Java包的概念、创建、导入以及使用方法，以及如何通过包提高代码可读性和模块化。掌握Java包的使用技巧，为更高级的Java编程打下坚实基础。","category":["Java 核心"],"tag":["面向对象编程"],"head":[["meta",{"name":"keywords","content":"Java,Java编程, 包, 代码组织, 代码管理, 包创建, 包导入,包,import,package"}]]},"headers":[],"relativePath":"backend/tobetter/oo/package.md","filePath":"backend/tobetter/oo/package.md"}'),p={name:"backend/tobetter/oo/package.md"},o=l(`<h1 id="_5-2-java中的包" tabindex="-1">5.2 Java中的包 <a class="header-anchor" href="#_5-2-java中的包" aria-label="Permalink to &quot;5.2 Java中的包&quot;">​</a></h1><p>“三妹，这一节，我们简单过一下 Java 中的包，也就是 package，这个一点就透，很好掌握。”我放下手中的雪碧，翻开笔记本，登上 GitHub，点开《二哥的 Java 进阶之路》，找到这篇「Java 中的包」，开始滔滔不绝起来。</p><p>“二哥，你等一下。”让我打开思维导图做一下笔记📒。</p><h3 id="关于包" tabindex="-1">关于包 <a class="header-anchor" href="#关于包" aria-label="Permalink to &quot;关于包&quot;">​</a></h3><p>在前面的代码中，我们把类和接口命名为<code>Person</code>、<code>Student</code>、<code>Hello</code>等简单的名字。</p><p>在团队开发中，如果小明写了一个<code>Person</code>类，小红也写了一个<code>Person</code>类，现在，小白既想用小明的<code>Person</code>，也想用小红的<code>Person</code>，怎么办？</p><p>如果小军写了一个<code>Arrays</code>类，恰好 JDK 也自带了一个<code>Arrays</code>类，如何解决类名冲突？</p><p>在 Java 中，我们使用<code>package</code>来解决名字冲突。</p><p>Java 定义了一种名字空间，称之为包：<code>package</code>。一个类总是属于某个包，类名（比如<code>Person</code>）只是一个简写，真正的完整类名是<code>包名.类名</code>。</p><p>例如：</p><p>小明的<code>Person</code>类存放在包<code>ming</code>下面，因此，完整类名是<code>ming.Person</code>；</p><p>小红的<code>Person</code>类存放在包<code>hong</code>下面，因此，完整类名是<code>hong.Person</code>；</p><p>小军的<code>Arrays</code>类存放在包<code>mr.jun</code>下面，因此，完整类名是<code>mr.jun.Arrays</code>；</p><p>JDK 的<code>Arrays</code>类存放在包<code>java.util</code>下面，因此，完整类名是<code>java.util.Arrays</code>。</p><p>在定义<code>class</code>的时候，我们需要在第一行声明这个<code>class</code>属于哪个包。</p><p>小明的<code>Person.java</code>文件：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">package</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">ming</span><span style="color:#F6F6F4;">; </span><span style="color:#7B7F8B;">// 申明包名ming</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Person</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> ming; </span><span style="color:#6A737D;">// 申明包名ming</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>小军的<code>Arrays.java</code>文件：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">package</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">mr.jun</span><span style="color:#F6F6F4;">; </span><span style="color:#7B7F8B;">// 申明包名mr.jun</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Arrays</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> mr.jun; </span><span style="color:#6A737D;">// 申明包名mr.jun</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Arrays</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>在 Java 虚拟机执行的时候，JVM 只看完整类名，因此，只要包名不同，类就不同。</p><p>包可以是多层结构，用<code>.</code>隔开。例如：<code>java.util</code>。</p><blockquote><p>要特别注意：包没有父子关系。java.util和java.util.zip是不同的包，两者没有任何继承关系。</p></blockquote><p>没有定义包名的<code>class</code>，它使用的是默认包，非常容易引起名字冲突，因此，不推荐不写包名的做法。</p><p>我们还需要按照包结构把上面的 Java 文件组织起来。假设以<code>package_sample</code>作为根目录，<code>src</code>作为源码目录，那么所有文件结构就是：</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">package_sample</span></span>
<span class="line"><span style="color:#f6f6f4;">└─ src</span></span>
<span class="line"><span style="color:#f6f6f4;">    ├─ hong</span></span>
<span class="line"><span style="color:#f6f6f4;">    │  └─ Person.java</span></span>
<span class="line"><span style="color:#f6f6f4;">    │  ming</span></span>
<span class="line"><span style="color:#f6f6f4;">    │  └─ Person.java</span></span>
<span class="line"><span style="color:#f6f6f4;">    └─ mr</span></span>
<span class="line"><span style="color:#f6f6f4;">       └─ jun</span></span>
<span class="line"><span style="color:#f6f6f4;">          └─ Arrays.java</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package_sample</span></span>
<span class="line"><span style="color:#24292e;">└─ src</span></span>
<span class="line"><span style="color:#24292e;">    ├─ hong</span></span>
<span class="line"><span style="color:#24292e;">    │  └─ Person.java</span></span>
<span class="line"><span style="color:#24292e;">    │  ming</span></span>
<span class="line"><span style="color:#24292e;">    │  └─ Person.java</span></span>
<span class="line"><span style="color:#24292e;">    └─ mr</span></span>
<span class="line"><span style="color:#24292e;">       └─ jun</span></span>
<span class="line"><span style="color:#24292e;">          └─ Arrays.java</span></span></code></pre></div><p>即所有 Java 文件对应的目录层次要和包的层次一致。</p><p>编译后的<code>.class</code>文件也需要按照包结构存放。如果使用 IDE，把编译后的<code>.class</code>文件放到<code>bin</code>目录下，那么，编译的文件结构就是：</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">package_sample</span></span>
<span class="line"><span style="color:#f6f6f4;">└─ bin</span></span>
<span class="line"><span style="color:#f6f6f4;">   ├─ hong</span></span>
<span class="line"><span style="color:#f6f6f4;">   │  └─ Person.class</span></span>
<span class="line"><span style="color:#f6f6f4;">   │  ming</span></span>
<span class="line"><span style="color:#f6f6f4;">   │  └─ Person.class</span></span>
<span class="line"><span style="color:#f6f6f4;">   └─ mr</span></span>
<span class="line"><span style="color:#f6f6f4;">      └─ jun</span></span>
<span class="line"><span style="color:#f6f6f4;">         └─ Arrays.class</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package_sample</span></span>
<span class="line"><span style="color:#24292e;">└─ bin</span></span>
<span class="line"><span style="color:#24292e;">   ├─ hong</span></span>
<span class="line"><span style="color:#24292e;">   │  └─ Person.class</span></span>
<span class="line"><span style="color:#24292e;">   │  ming</span></span>
<span class="line"><span style="color:#24292e;">   │  └─ Person.class</span></span>
<span class="line"><span style="color:#24292e;">   └─ mr</span></span>
<span class="line"><span style="color:#24292e;">      └─ jun</span></span>
<span class="line"><span style="color:#24292e;">         └─ Arrays.class</span></span></code></pre></div><p>编译的命令相对比较复杂，我们需要在<code>src</code>目录下执行<code>javac</code>命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">javac -d ../bin ming/Person.java hong/Person.java mr/jun/Arrays.java</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">javac -d ../bin ming/Person.java hong/Person.java mr/jun/Arrays.java</span></span></code></pre></div><p>在 IDE 中，会自动根据包结构编译所有 Java 源码，所以不必担心使用命令行编译的复杂命令。</p><h3 id="包的作用域" tabindex="-1">包的作用域 <a class="header-anchor" href="#包的作用域" aria-label="Permalink to &quot;包的作用域&quot;">​</a></h3><p>位于同一个包的类，可以访问包作用域的字段和方法。</p><p>不用<code>public</code>、<code>protected</code>、<code>private</code>修饰的字段和方法就是包作用域。例如，<code>Person</code>类定义在<code>hello</code>包下面：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">package</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">hello</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Person</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// 包作用域:</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">hello</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">        System.out.</span><span style="color:#62E884;">println</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">Hello!</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> hello;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 包作用域:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">hello</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Hello!&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><code>Main</code>类也定义在<code>hello</code>包下面，就可以直接访问 Person 类：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">package</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">hello</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Main</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">static</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">main</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;">[] </span><span style="color:#FFB86C;font-style:italic;">args</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;font-style:italic;">Person</span><span style="color:#F6F6F4;"> p </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Person</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">        p.</span><span style="color:#62E884;">hello</span><span style="color:#F6F6F4;">(); </span><span style="color:#7B7F8B;">// 可以调用，因为Main和Person在同一个包</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> hello;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Main</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] </span><span style="color:#E36209;">args</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        Person p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        p.</span><span style="color:#6F42C1;">hello</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 可以调用，因为Main和Person在同一个包</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="导入包" tabindex="-1">导入包 <a class="header-anchor" href="#导入包" aria-label="Permalink to &quot;导入包&quot;">​</a></h3><p>在一个<code>class</code>中，我们总会引用其他的<code>class</code>。例如，小明的<code>ming.Person</code>类，如果要引用小军的<code>mr.jun.Arrays</code>类，他有三种写法：</p><p>第一种，直接写出完整类名，例如：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">// Person.java</span></span>
<span class="line"><span style="color:#F286C4;">package</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">ming</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Person</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">run</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;font-style:italic;">mr</span><span style="color:#F6F6F4;">.</span><span style="color:#97E1F1;font-style:italic;">jun</span><span style="color:#F6F6F4;">.</span><span style="color:#97E1F1;font-style:italic;">Arrays</span><span style="color:#F6F6F4;"> arrays </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> mr.jun.</span><span style="color:#62E884;">Arrays</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Person.java</span></span>
<span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> ming;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">run</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        mr.jun.Arrays arrays </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> mr.jun.</span><span style="color:#6F42C1;">Arrays</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>很显然，每次都要写完整的类名比较痛苦。</p><p>因此，第二种写法是用<code>import</code>语句，导入小军的<code>Arrays</code>，然后写简单类名：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">// Person.java</span></span>
<span class="line"><span style="color:#F286C4;">package</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">ming</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// 导入完整类名:</span></span>
<span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> mr.jun.Arrays;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Person</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">run</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;font-style:italic;">Arrays</span><span style="color:#F6F6F4;"> arrays </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Arrays</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Person.java</span></span>
<span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> ming;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 导入完整类名:</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> mr.jun.Arrays;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">run</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        Arrays arrays </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Arrays</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>在写<code>import</code>的时候，可以使用<code>*</code>，表示把这个包下面的所有<code>class</code>都导入进来（但不包括子包的<code>class</code>）：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">// Person.java</span></span>
<span class="line"><span style="color:#F286C4;">package</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">ming</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// 导入mr.jun包的所有class:</span></span>
<span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> mr.jun.</span><span style="color:#BF9EEE;font-style:italic;">*</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Person</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">run</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;font-style:italic;">Arrays</span><span style="color:#F6F6F4;"> arrays </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Arrays</span><span style="color:#F6F6F4;">();</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Person.java</span></span>
<span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> ming;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 导入mr.jun包的所有class:</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> mr.jun.</span><span style="color:#005CC5;">*</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Person</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">run</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        Arrays arrays </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Arrays</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>我们一般不推荐这种写法，因为在导入了多个包后，很难看出<code>Arrays</code>类属于哪个包。</p><p>还有一种<code>import static</code>的语法，它可以导入一个类的静态字段和静态方法：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">package</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">main</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// 导入System类的所有静态字段和静态方法:</span></span>
<span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">static</span><span style="color:#F6F6F4;"> java.lang.System.</span><span style="color:#BF9EEE;font-style:italic;">*</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Main</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">static</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">main</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;">[] </span><span style="color:#FFB86C;font-style:italic;">args</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#7B7F8B;">// 相当于调用System.out.println(…)</span></span>
<span class="line"><span style="color:#F6F6F4;">        out.</span><span style="color:#62E884;">println</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">Hello, world!</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">);</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> main;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 导入System类的所有静态字段和静态方法:</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> java.lang.System.</span><span style="color:#005CC5;">*</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Main</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] </span><span style="color:#E36209;">args</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 相当于调用System.out.println(…)</span></span>
<span class="line"><span style="color:#24292E;">        out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Hello, world!&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><code>import static</code>很少使用。</p><p>Java 编译器最终编译出的<code>.class</code>文件只使用 <em>完整类名</em>，因此，在代码中，当编译器遇到一个<code>class</code>名称时：</p><ul><li>如果是完整类名，就直接根据完整类名查找这个<code>class</code>；</li><li>如果是简单类名，按下面的顺序依次查找： <ul><li>查找当前<code>package</code>是否存在这个<code>class</code>；</li><li>查找<code>import</code>的包是否包含这个<code>class</code>；</li><li>查找<code>java.lang</code>包是否包含这个<code>class</code>。</li></ul></li></ul><p>如果按照上面的规则还无法确定类名，则编译报错。</p><p>我们来看一个例子：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">// Main.java</span></span>
<span class="line"><span style="color:#F286C4;">package</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">test</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> java.text.Format;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">class</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Main</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">static</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">main</span><span style="color:#F6F6F4;">(</span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;">[] </span><span style="color:#FFB86C;font-style:italic;">args</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;font-style:italic;">java</span><span style="color:#F6F6F4;">.</span><span style="color:#97E1F1;font-style:italic;">util</span><span style="color:#F6F6F4;">.</span><span style="color:#97E1F1;font-style:italic;">List</span><span style="color:#F6F6F4;"> list; </span><span style="color:#7B7F8B;">// ok，使用完整类名 -&gt; java.util.List</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;font-style:italic;">Format</span><span style="color:#F6F6F4;"> format </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">; </span><span style="color:#7B7F8B;">// ok，使用import的类 -&gt; java.text.Format</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;font-style:italic;">String</span><span style="color:#F6F6F4;"> s </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">hi</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">; </span><span style="color:#7B7F8B;">// ok，使用java.lang包的String -&gt; java.lang.String</span></span>
<span class="line"><span style="color:#F6F6F4;">        System.out.</span><span style="color:#62E884;">println</span><span style="color:#F6F6F4;">(s); </span><span style="color:#7B7F8B;">// ok，使用java.lang包的System -&gt; java.lang.System</span></span>
<span class="line"><span style="color:#F6F6F4;">        </span><span style="color:#97E1F1;font-style:italic;">MessageFormat</span><span style="color:#F6F6F4;"> mf </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">null</span><span style="color:#F6F6F4;">; </span><span style="color:#7B7F8B;">// 编译错误：无法找到MessageFormat: MessageFormat cannot be resolved to a type</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Main.java</span></span>
<span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> test;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.text.Format;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Main</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] </span><span style="color:#E36209;">args</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        java.util.List list; </span><span style="color:#6A737D;">// ok，使用完整类名 -&gt; java.util.List</span></span>
<span class="line"><span style="color:#24292E;">        Format format </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// ok，使用import的类 -&gt; java.text.Format</span></span>
<span class="line"><span style="color:#24292E;">        String s </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;hi&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// ok，使用java.lang包的String -&gt; java.lang.String</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(s); </span><span style="color:#6A737D;">// ok，使用java.lang包的System -&gt; java.lang.System</span></span>
<span class="line"><span style="color:#24292E;">        MessageFormat mf </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 编译错误：无法找到MessageFormat: MessageFormat cannot be resolved to a type</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>因此，编写 class 的时候，编译器会自动帮我们做两个 import 动作：</p><ul><li>默认自动<code>import</code>当前<code>package</code>的其他<code>class</code>；</li><li>默认自动<code>import java.lang.*</code>。</li></ul><blockquote><p>注意：自动导入的是java.lang包，但类似java.lang.reflect这些包仍需要手动导入。</p></blockquote><p>如果有两个<code>class</code>名称相同，例如，<code>mr.jun.Arrays</code>和<code>java.util.Arrays</code>，那么只能<code>import</code>其中一个，另一个必须写完整类名。</p><h3 id="包的最佳实践" tabindex="-1">包的最佳实践 <a class="header-anchor" href="#包的最佳实践" aria-label="Permalink to &quot;包的最佳实践&quot;">​</a></h3><p>为了避免名字冲突，我们需要确定唯一的包名。推荐的做法是使用倒置的域名来确保唯一性。例如：</p><ul><li>org.apache</li><li>org.apache.commons.log</li><li>com.tobebetterjavaer.sample</li></ul><p>子包就可以根据功能自行命名。</p><p>要注意不要和<code>java.lang</code>包的类重名，即自己的类不要使用这些名字：</p><ul><li>String</li><li>System</li><li>Runtime</li><li>...</li></ul><p>要注意也不要和 JDK 常用类重名：</p><ul><li>java.util.List</li><li>java.text.Format</li><li>java.math.BigInteger</li><li>...</li></ul><h3 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h3><p>Java 内建的<code>package</code>机制是为了避免<code>class</code>命名冲突；</p><p>JDK 的核心类使用<code>java.lang</code>包，编译器会自动导入；</p><p>JDK 的其它常用类定义在<code>java.util.*</code>，<code>java.math.*</code>，<code>java.text.*</code>，……；</p><p>包名推荐使用倒置的域名，例如<code>org.apache</code>。</p>`,72),e=[o];function c(t,r,y,i,F,d){return a(),n("div",null,e)}const g=s(p,[["render",c]]);export{v as __pageData,g as default};
