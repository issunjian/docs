import{_ as s,o as a,c as n,V as p}from"./chunks/framework.c6d8cbec.js";const f=JSON.parse('{"title":"为什么JDK源码中，无限循环大多使用for(;;)而不是while(true)?","description":"Java程序员进阶之路，小白的零基础Java教程，从入门到进阶，为什么JDK源码中，无限循环大多使用for(;;)而不是while(true)?","frontmatter":{"title":"为什么JDK源码中，无限循环大多使用for(;;)而不是while(true)?","shortTitle":"JDK源码无限循环大多使用for(;;)而不是while(true)?","category":["Java核心"],"tag":["Java重要知识点"],"description":"Java程序员进阶之路，小白的零基础Java教程，从入门到进阶，为什么JDK源码中，无限循环大多使用for(;;)而不是while(true)?","head":[["meta",{"name":"keywords","content":"Java,Java SE,Java基础,Java教程,Java程序员进阶之路,Java进阶之路,Java入门,教程,java,jdk,无限循环,for,while"}]]},"headers":[],"relativePath":"backend/tobetter/basic-extra-meal/jdk-while-for-wuxian-xunhuan.md","filePath":"backend/tobetter/basic-extra-meal/jdk-while-for-wuxian-xunhuan.md"}'),l={name:"backend/tobetter/basic-extra-meal/jdk-while-for-wuxian-xunhuan.md"},o=p(`<p>在知乎上看到 R 大的这篇回答，着实感觉需要分享给在座的各位 javaer 们，真心透彻。</p><blockquote><p><a href="https://www.zhihu.com/question/52311366/answer/130090347" target="_blank" rel="noreferrer">https://www.zhihu.com/question/52311366/answer/130090347</a></p></blockquote><hr><p>首先是先问是不是再问为什么系列。</p><p>在JDK8u的jdk项目下做个很粗略的搜索：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">mymbp:/Users/me/workspace/jdk8u/jdk/src</span></span>
<span class="line"><span style="color:#f6f6f4;">$ egrep -nr &quot;for \\\\(\\\\s?;\\\\s?;&quot; . | wc -l</span></span>
<span class="line"><span style="color:#f6f6f4;">     369</span></span>
<span class="line"><span style="color:#f6f6f4;">mymbp:/Users/me/workspace/jdk8u/jdk/src</span></span>
<span class="line"><span style="color:#f6f6f4;">$ egrep -nr &quot;while \\\\(true&quot; . | wc -l</span></span>
<span class="line"><span style="color:#f6f6f4;">     323</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mymbp:/Users/me/workspace/jdk8u/jdk/src</span></span>
<span class="line"><span style="color:#24292e;">$ egrep -nr &quot;for \\\\(\\\\s?;\\\\s?;&quot; . | wc -l</span></span>
<span class="line"><span style="color:#24292e;">     369</span></span>
<span class="line"><span style="color:#24292e;">mymbp:/Users/me/workspace/jdk8u/jdk/src</span></span>
<span class="line"><span style="color:#24292e;">$ egrep -nr &quot;while \\\\(true&quot; . | wc -l</span></span>
<span class="line"><span style="color:#24292e;">     323</span></span></code></pre></div><p>并没有差多少。</p><p>其次，for (;😉 在Java中的来源。个人看法是喜欢用这种写法的人，追根溯源是受到C语言里的写法的影响。这些人不一定是自己以前写C习惯了这样写，而可能是间接受以前写C的老师、前辈的影响而习惯这样写的。</p><p>在C语言里，如果不include某些头文件或者自己声明的话，是没有内建的_Bool / bool类型，也没有TRUE / FALSE / true / false这些_Bool / bool类型值的字面量的。</p><p>所以，假定没有include那些头文件或者自己define出上述字面量，一个不把循环条件写在while (...)括号里的while语句，最常见的是这样：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">while (1) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    /* ... */</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">while (1) {</span></span>
<span class="line"><span style="color:#24292e;">    /* ... */</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span></code></pre></div><p>…但不是所有人都喜欢看到那个魔数“1”的。</p><p>而用for (;;)来表达不写循环条件（也就是循环体内不用break或goto就会是无限循环）则非常直观——这就是for语句本身的功能，而且不需要写任何魔数。所以这个写法就流传下来了。</p><p>顺带一提，在Java里我是倾向于写while (true)的，不过我也不介意别人在他们自己的项目里写for (;😉。</p><p>=====================================</p><p>至于Java里while (true)与for (;;)哪个“效率更高”。这种规范没有规定的问题，答案都是“看实现”，毕竟实现只要保证语义符合规范就行了，而效率并不在规范管得着的范畴内。</p><p>以Oracle/Sun JDK8u / OpenJDK8u的实现来看，首先看javac对下面俩语句的编译结果：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">foo</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> i </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">while</span><span style="color:#F6F6F4;"> (</span><span style="color:#BF9EEE;">true</span><span style="color:#F6F6F4;">) { i</span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">; }</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">/*</span></span>
<span class="line"><span style="color:#7B7F8B;">  public void foo();</span></span>
<span class="line"><span style="color:#7B7F8B;">    Code:</span></span>
<span class="line"><span style="color:#7B7F8B;">      stack=1, locals=2, args_size=1</span></span>
<span class="line"><span style="color:#7B7F8B;">         0: iconst_0</span></span>
<span class="line"><span style="color:#7B7F8B;">         1: istore_1</span></span>
<span class="line"><span style="color:#7B7F8B;">         2: iinc          1, 1</span></span>
<span class="line"><span style="color:#7B7F8B;">         5: goto          2</span></span>
<span class="line"><span style="color:#7B7F8B;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">) { i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">; }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">  public void foo();</span></span>
<span class="line"><span style="color:#6A737D;">    Code:</span></span>
<span class="line"><span style="color:#6A737D;">      stack=1, locals=2, args_size=1</span></span>
<span class="line"><span style="color:#6A737D;">         0: iconst_0</span></span>
<span class="line"><span style="color:#6A737D;">         1: istore_1</span></span>
<span class="line"><span style="color:#6A737D;">         2: iinc          1, 1</span></span>
<span class="line"><span style="color:#6A737D;">         5: goto          2</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><p>与</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">public</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;font-style:italic;">void</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">bar</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E1F1;font-style:italic;">int</span><span style="color:#F6F6F4;"> i </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#F286C4;">for</span><span style="color:#F6F6F4;"> (;;) { i</span><span style="color:#F286C4;">++</span><span style="color:#F6F6F4;">; }</span></span>
<span class="line"><span style="color:#F6F6F4;">  }\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">/*</span></span>
<span class="line"><span style="color:#7B7F8B;">  public void bar();</span></span>
<span class="line"><span style="color:#7B7F8B;">    Code:</span></span>
<span class="line"><span style="color:#7B7F8B;">      stack=1, locals=2, args_size=1</span></span>
<span class="line"><span style="color:#7B7F8B;">         0: iconst_0</span></span>
<span class="line"><span style="color:#7B7F8B;">         1: istore_1</span></span>
<span class="line"><span style="color:#7B7F8B;">         2: iinc          1, 1</span></span>
<span class="line"><span style="color:#7B7F8B;">         5: goto          2</span></span>
<span class="line"><span style="color:#7B7F8B;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (;;) { i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">; }</span></span>
<span class="line"><span style="color:#24292E;">  }\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">  public void bar();</span></span>
<span class="line"><span style="color:#6A737D;">    Code:</span></span>
<span class="line"><span style="color:#6A737D;">      stack=1, locals=2, args_size=1</span></span>
<span class="line"><span style="color:#6A737D;">         0: iconst_0</span></span>
<span class="line"><span style="color:#6A737D;">         1: istore_1</span></span>
<span class="line"><span style="color:#6A737D;">         2: iinc          1, 1</span></span>
<span class="line"><span style="color:#6A737D;">         5: goto          2</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><p>连javac这种几乎什么优化都不做（只做了Java语言规范规定一定要做的常量折叠，和非常少量别的优化）的编译器，对上面俩版本的代码都生成了一样的字节码。后面到解释执行、JIT编译之类的就不用说了，输入都一样，输出也不会不同。</p><hr><p>分享的最后，二哥简单说几句。</p><p>可能在我们普通人眼中，这种问题完全没有求真的必要性，但 R大认真去研究了，并且得出了非常令人信服的答案。</p><p>所以，牛逼之人必有三连之处啊。</p><p>以后就可以放心大胆在代码里写 <code>for(;;) while(true)</code> 这样的死循环了。</p><hr>`,27),e=[o];function c(t,r,i,y,F,d){return a(),n("div",null,e)}const h=s(l,[["render",c]]);export{f as __pageData,h as default};
