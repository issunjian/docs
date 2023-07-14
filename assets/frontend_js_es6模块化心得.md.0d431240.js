import{_ as s,o as a,c as n,V as p}from"./chunks/framework.c6d8cbec.js";const h=JSON.parse('{"title":"es6模块化心得","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/js/es6模块化心得.md","filePath":"frontend/js/es6模块化心得.md"}'),e={name:"frontend/js/es6模块化心得.md"},l=p(`<h1 id="es6模块化心得" tabindex="-1">es6模块化心得 <a class="header-anchor" href="#es6模块化心得" aria-label="Permalink to &quot;es6模块化心得&quot;">​</a></h1><h2 id="import函数" tabindex="-1">import函数 <a class="header-anchor" href="#import函数" aria-label="Permalink to &quot;import函数&quot;">​</a></h2><p><code>import()</code>函数在<a href="https://github.com/tc39/proposal-dynamic-import" target="_blank" rel="noreferrer">ES2020提案</a> 中引入，他可以异步动态加载模块，<code>import()</code>函数与所加载的模块没有静态连接关系，这点也是与<code>import</code>语句不相同之一。import函数的返回值是<a href="https://so.csdn.net/so/search?q=promise&amp;spm=1001.2101.3001.7020" target="_blank" rel="noreferrer">promise</a>对象，可以使用<code>.then</code>和<code>.catch</code>方法进行接收数据处理，<code>import()</code>加载模块成功以后，这个模块会作为一个对象，当作<code>then</code>方法的参数。因此，可以使用对象解构赋值的语法，获取输出接口。，其允许模块路径动态生成。<code>import</code>函数可以放在任何地方，因为它是运行时执行的，什么时候执行到它，就什么时候进行指定模块的加载，所以它可以在条件语句和函数中进行动态的加载，例如</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">if(true){</span></span>
<span class="line"><span style="color:#f6f6f4;">    return import(&#39;./xxx/aaa&#39;).then(msg=&gt;{</span></span>
<span class="line"><span style="color:#f6f6f4;">        //加载内容  不会报错</span></span>
<span class="line"><span style="color:#f6f6f4;">    }).catch(err=&gt;{</span></span>
<span class="line"><span style="color:#f6f6f4;">        //error codo</span></span>
<span class="line"><span style="color:#f6f6f4;">    })</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">if(true){</span></span>
<span class="line"><span style="color:#24292e;">    return import(&#39;./xxx/aaa&#39;).then(msg=&gt;{</span></span>
<span class="line"><span style="color:#24292e;">        //加载内容  不会报错</span></span>
<span class="line"><span style="color:#24292e;">    }).catch(err=&gt;{</span></span>
<span class="line"><span style="color:#24292e;">        //error codo</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>由于它动态加载等特性，可以在一些场合很好的使用：</p><ol><li>vue项目路由按需加载</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">{</span></span>
<span class="line"><span style="color:#f6f6f4;">    path:&#39;/xxx&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">    name:&#39;/XXX&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">    component:()=&gt;import(../xxx/xxx.vue)</span></span>
<span class="line"><span style="color:#f6f6f4;">    </span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    path:&#39;/xxx&#39;</span></span>
<span class="line"><span style="color:#24292e;">    name:&#39;/XXX&#39;</span></span>
<span class="line"><span style="color:#24292e;">    component:()=&gt;import(../xxx/xxx.vue)</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>2.模块的按需加载</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">xxx.click=function(){</span></span>
<span class="line"><span style="color:#f6f6f4;">    import(&#39;../xxx&#39;).then(fn=&gt;{</span></span>
<span class="line"><span style="color:#f6f6f4;">        ...</span></span>
<span class="line"><span style="color:#f6f6f4;">    })</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">xxx.click=function(){</span></span>
<span class="line"><span style="color:#24292e;">    import(&#39;../xxx&#39;).then(fn=&gt;{</span></span>
<span class="line"><span style="color:#24292e;">        ...</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>3.条件加载</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">if(true){</span></span>
<span class="line"><span style="color:#f6f6f4;">    return import(&#39;./xxx/aaa&#39;).then(msg=&gt;{</span></span>
<span class="line"><span style="color:#f6f6f4;">        //加载内容</span></span>
<span class="line"><span style="color:#f6f6f4;">    }).catch(err=&gt;{</span></span>
<span class="line"><span style="color:#f6f6f4;">        //error codo</span></span>
<span class="line"><span style="color:#f6f6f4;">    })</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">if(true){</span></span>
<span class="line"><span style="color:#24292e;">    return import(&#39;./xxx/aaa&#39;).then(msg=&gt;{</span></span>
<span class="line"><span style="color:#24292e;">        //加载内容</span></span>
<span class="line"><span style="color:#24292e;">    }).catch(err=&gt;{</span></span>
<span class="line"><span style="color:#24292e;">        //error codo</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>还可以配合promise的方法<code>.all</code>方法进行多个模块的加载， 还有很多的有趣用法这里就不一一列举了。</p><h2 id="import语句" tabindex="-1"><a href="https://so.csdn.net/so/search?q=import%E8%AF%AD%E5%8F%A5&amp;spm=1001.2101.3001.7020" target="_blank" rel="noreferrer">import语句</a> <a class="header-anchor" href="#import语句" aria-label="Permalink to &quot;[import语句](https://so.csdn.net/so/search?q=import语句&amp;spm=1001.2101.3001.7020)&quot;">​</a></h2><p>import语句是<a href="https://so.csdn.net/so/search?q=es6&amp;spm=1001.2101.3001.7020" target="_blank" rel="noreferrer">es6</a>中提出的静态化的模块化思想的产物，与export配合使用，<code>export</code>命令用于规定模块的对外接口，<code>import</code>命令用于输入其他模块提供的功能。在import和export都可以使用as关键字来为导出/导入的变量重新命名。例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">./a.js</span></span>
<span class="line"><span style="color:#f6f6f4;">var chara=52</span></span>
<span class="line"><span style="color:#f6f6f4;">var charb=99</span></span>
<span class="line"><span style="color:#f6f6f4;">export {</span></span>
<span class="line"><span style="color:#f6f6f4;">    chara,</span></span>
<span class="line"><span style="color:#f6f6f4;">    charb as hhh</span></span>
<span class="line"><span style="color:#f6f6f4;">    charb as www</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">./b.js</span></span>
<span class="line"><span style="color:#f6f6f4;">import {chara as a,hhh,www as xxx} from ./a.js</span></span>
<span class="line"><span style="color:#f6f6f4;">//在文件中使用a,hhh,xxx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">./a.js</span></span>
<span class="line"><span style="color:#24292e;">var chara=52</span></span>
<span class="line"><span style="color:#24292e;">var charb=99</span></span>
<span class="line"><span style="color:#24292e;">export {</span></span>
<span class="line"><span style="color:#24292e;">    chara,</span></span>
<span class="line"><span style="color:#24292e;">    charb as hhh</span></span>
<span class="line"><span style="color:#24292e;">    charb as www</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">./b.js</span></span>
<span class="line"><span style="color:#24292e;">import {chara as a,hhh,www as xxx} from ./a.js</span></span>
<span class="line"><span style="color:#24292e;">//在文件中使用a,hhh,xxx</span></span></code></pre></div><p><code>export</code>语句输出的<code>接口</code>，与其对应的值是动态绑定关系，<code>接口名与模块内部变量之间，建立了一一对应的关系</code>。即通过该接口可以取到模块内部实时的值。export和import一样不可出现在块级作用域中，必须在顶层，导出的不可以为准确值必须是接口，且与ConmonJS不同的是，输出的接口不存在动态更新。 错误写法案例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">1.</span></span>
<span class="line"><span style="color:#f6f6f4;">var a = 3</span></span>
<span class="line"><span style="color:#f6f6f4;">export a //错误 -&gt;相当于直接传了个3</span></span>
<span class="line"><span style="color:#f6f6f4;">正确：</span></span>
<span class="line"><span style="color:#f6f6f4;">export var a = 3 或者 var a = 3 export{ a }</span></span>
<span class="line"><span style="color:#f6f6f4;">2.</span></span>
<span class="line"><span style="color:#f6f6f4;">function fn(){}</span></span>
<span class="line"><span style="color:#f6f6f4;">export fn //错误</span></span>
<span class="line"><span style="color:#f6f6f4;">正确：</span></span>
<span class="line"><span style="color:#f6f6f4;">export function fn(){} 或者 function fn(){}  export { fn }  </span></span>
<span class="line"><span style="color:#f6f6f4;">其他同理</span></span>
<span class="line"><span style="color:#f6f6f4;">1234567891011</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1.</span></span>
<span class="line"><span style="color:#24292e;">var a = 3</span></span>
<span class="line"><span style="color:#24292e;">export a //错误 -&gt;相当于直接传了个3</span></span>
<span class="line"><span style="color:#24292e;">正确：</span></span>
<span class="line"><span style="color:#24292e;">export var a = 3 或者 var a = 3 export{ a }</span></span>
<span class="line"><span style="color:#24292e;">2.</span></span>
<span class="line"><span style="color:#24292e;">function fn(){}</span></span>
<span class="line"><span style="color:#24292e;">export fn //错误</span></span>
<span class="line"><span style="color:#24292e;">正确：</span></span>
<span class="line"><span style="color:#24292e;">export function fn(){} 或者 function fn(){}  export { fn }  </span></span>
<span class="line"><span style="color:#24292e;">其他同理</span></span>
<span class="line"><span style="color:#24292e;">1234567891011</span></span></code></pre></div><p>import命令会被 JavaScript 引擎静态分析，先于模块内的其他语句执行，异步加载，只能放在模块首部，并不能支持条件语句，引擎处理<code>import</code>语句是在编译时，这时不会去分析或执行<code>if</code>等条件语句或者函数，所以<code>import</code>语句放在<code>if</code>等控制语句或函数代码块之中毫无意义，因此会报句法错误，而不是执行时错误。 例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">if(true){</span></span>
<span class="line"><span style="color:#f6f6f4;">    import xxx from ./xxx; //报错</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">if(true){</span></span>
<span class="line"><span style="color:#24292e;">    import xxx from ./xxx; //报错</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>在使用<code>import</code>命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。但是，如果没去了解模块有哪些属性和方法，为了方便，就要用到<code>export default</code>命令，为模块指定默认输出（注意：在一个文件或模块中，export、import可以有多个，export default仅有一个）。例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">//导出非匿名接口</span></span>
<span class="line"><span style="color:#f6f6f4;">function aa(){}</span></span>
<span class="line"><span style="color:#f6f6f4;">export default aa</span></span>
<span class="line"><span style="color:#f6f6f4;">或者</span></span>
<span class="line"><span style="color:#f6f6f4;">export default function aa(){}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//导出非匿名接口</span></span>
<span class="line"><span style="color:#24292e;">function aa(){}</span></span>
<span class="line"><span style="color:#24292e;">export default aa</span></span>
<span class="line"><span style="color:#24292e;">或者</span></span>
<span class="line"><span style="color:#24292e;">export default function aa(){}</span></span></code></pre></div><p>当export default导出匿名接口的时候，import会为这个匿名接口起任意的想要的名字。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">//b.js</span></span>
<span class="line"><span style="color:#f6f6f4;">export default function(){}</span></span>
<span class="line"><span style="color:#f6f6f4;">//a.js</span></span>
<span class="line"><span style="color:#f6f6f4;">import xxx from ./b.js</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//b.js</span></span>
<span class="line"><span style="color:#24292e;">export default function(){}</span></span>
<span class="line"><span style="color:#24292e;">//a.js</span></span>
<span class="line"><span style="color:#24292e;">import xxx from ./b.js</span></span></code></pre></div><p>export …from … 在一个模块中可以先导入再导出，例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">export {a,b}from ./ab.js </span></span>
<span class="line"><span style="color:#f6f6f4;">//也可以使用as，与合并前的区别在于a,b并没有导入当前模块，只是转发，使得当前模块不能使用a,b</span></span>
<span class="line"><span style="color:#f6f6f4;">//等同于：</span></span>
<span class="line"><span style="color:#f6f6f4;">import {a,b}  from ./ab.js</span></span>
<span class="line"><span style="color:#f6f6f4;">export {a,b}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export {a,b}from ./ab.js </span></span>
<span class="line"><span style="color:#24292e;">//也可以使用as，与合并前的区别在于a,b并没有导入当前模块，只是转发，使得当前模块不能使用a,b</span></span>
<span class="line"><span style="color:#24292e;">//等同于：</span></span>
<span class="line"><span style="color:#24292e;">import {a,b}  from ./ab.js</span></span>
<span class="line"><span style="color:#24292e;">export {a,b}</span></span></code></pre></div><p>默认导出和具名导出切换：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">export { default as juming } from &#39;./defa&#39;; //默认接口-&gt;具名接口</span></span>
<span class="line"><span style="color:#f6f6f4;">export { juming as default } from &#39;./defa&#39;; //具名接口-&gt;默认接口</span></span>
<span class="line"><span style="color:#f6f6f4;">相当于：</span></span>
<span class="line"><span style="color:#f6f6f4;">import { juming } from &#39;./defa&#39;;</span></span>
<span class="line"><span style="color:#f6f6f4;">export default juming;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export { default as juming } from &#39;./defa&#39;; //默认接口-&gt;具名接口</span></span>
<span class="line"><span style="color:#24292e;">export { juming as default } from &#39;./defa&#39;; //具名接口-&gt;默认接口</span></span>
<span class="line"><span style="color:#24292e;">相当于：</span></span>
<span class="line"><span style="color:#24292e;">import { juming } from &#39;./defa&#39;;</span></span>
<span class="line"><span style="color:#24292e;">export default juming;</span></span></code></pre></div><p>补充：</p><p>1.commonjs模块输出的是值的拷贝且具有缓存，运行时加载，在使用require时是进行同步加载，es6的模块化是在编译时输出接口，是异步加载，具有独立的模块依赖的解析阶段，在遇见import时，会生成一个只读引用，在脚本被执行的时候再到加载的模块内取值，因为只是导入是只读的，所以并不可以重新赋值。</p><p>2.es6模块简称<code>ESM</code>,commonjs模块的简称是<code>CJS</code>。</p><p>3.commonjs已经实现es6模块的支持，但是需要一些设置，但是最好不要混用。</p><p>4.在es6模块时默认使用严格模式，所以不可以使用with和arguments，且顶层的this关键字之乡undefined。</p><p>import {xxx , xx} from &#39;/xx.js’实质上并不是解构赋值。</p><p>\\5. <code>import * as xx from &#39;/xxx.js&#39;</code>-&gt;是生成了一个名为xx的对象，并将非默认导出的所有名字做为这个对象的属性。</p><p>6.<code>细节</code>使用export {xx,cc}和export defaule {}是不同的,</p><p>7.<code>常识</code>es6导入与函数声明类似，会被‘提升’到顶部，随时可以使用。</p><ol start="8"><li></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;script type=&quot;module&quot; src=&quot;./foo.js&quot;&gt;&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;script type=&quot;module&quot; src=&quot;./foo.js&quot;&gt;&lt;/script&gt;</span></span></code></pre></div><p>设置type=“module”证明是es6模块，异步加载，到整个页面渲染完，再执行模块脚本，等同于打开了\`\`标签的<code>defer</code>属性。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;script type=&quot;module&quot; src=&quot;./foo.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;!-- 等同于 --&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;script type=&quot;module&quot; src=&quot;./foo.js&quot; defer&gt;&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;script type=&quot;module&quot; src=&quot;./foo.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!-- 等同于 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;script type=&quot;module&quot; src=&quot;./foo.js&quot; defer&gt;&lt;/script&gt;</span></span></code></pre></div><p>如果网页有多个\`\`，它们会按照在页面出现的顺序依次执行。</p><p>9.<code>细节</code>对于 import ‘./xx.js’.这样的模块在导入的时候会被运行一次，之后导入则不再运行，如果模块内定义了一些代码，即便没有到处也很有用。web应用可以使用分析模块，运行注册各种事件处理的代码，然后通过这些时间处理程序在合适的时机向服务器发送遥测数据，虽然是自包含的，不需要导出任何值，但是仍需要import导入才能让他成为程序的一部分运行，对这些有导出的模块也可以使用什么也不导入的语法。这种方式叫做 <code>仅为副作用</code>而导入一个模块，整个模块仅为副作用（中性词，无贬义含义）而导入，而不导入模块中的任何内容（接口）。 这<code>将运行模块中的全局代码, 但实际上不导入任何值</code>。</p>`,42),o=[l];function c(t,r,i,f,d,y){return a(),n("div",null,o)}const m=s(e,[["render",c]]);export{h as __pageData,m as default};
