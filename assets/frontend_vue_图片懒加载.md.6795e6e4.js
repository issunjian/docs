import{_ as s,o as n,c as a,V as l}from"./chunks/framework.c6d8cbec.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/vue/图片懒加载.md","filePath":"frontend/vue/图片懒加载.md"}'),p={name:"frontend/vue/图片懒加载.md"},e=l(`<h2 id="图片懒加载" tabindex="-1">图片懒加载 <a class="header-anchor" href="#图片懒加载" aria-label="Permalink to &quot;图片懒加载&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 1.安装插件</span></span>
<span class="line"><span style="color:#f6f6f4;">yarn add vue-lazyload</span></span>
<span class="line"><span style="color:#f6f6f4;">// 2.在入口文件main.js中引入并使用</span></span>
<span class="line"><span style="color:#f6f6f4;">import VueLazylod from &#39;vue-lazyload&#39;</span></span>
<span class="line"><span style="color:#f6f6f4;">// 在Vue中直接使用</span></span>
<span class="line"><span style="color:#f6f6f4;">Vue.use(VueLazyload)</span></span>
<span class="line"><span style="color:#f6f6f4;">// 3.在Vue文件中将img标签的src属性直接改为v-lazy,从而将图片显示方式改为懒加载显示</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;img v-lazy=&quot;/static/img/1.png&quot;&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 1.安装插件</span></span>
<span class="line"><span style="color:#24292e;">yarn add vue-lazyload</span></span>
<span class="line"><span style="color:#24292e;">// 2.在入口文件main.js中引入并使用</span></span>
<span class="line"><span style="color:#24292e;">import VueLazylod from &#39;vue-lazyload&#39;</span></span>
<span class="line"><span style="color:#24292e;">// 在Vue中直接使用</span></span>
<span class="line"><span style="color:#24292e;">Vue.use(VueLazyload)</span></span>
<span class="line"><span style="color:#24292e;">// 3.在Vue文件中将img标签的src属性直接改为v-lazy,从而将图片显示方式改为懒加载显示</span></span>
<span class="line"><span style="color:#24292e;">&lt;img v-lazy=&quot;/static/img/1.png&quot;&gt;</span></span></code></pre></div><h2 id="依赖注入-跨级通信-默认数据不响应" tabindex="-1">依赖注入(跨级通信)默认数据不响应 <a class="header-anchor" href="#依赖注入-跨级通信-默认数据不响应" aria-label="Permalink to &quot;依赖注入(跨级通信)默认数据不响应&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">export default {</span></span>
<span class="line"><span style="color:#f6f6f4;">  // provide:提供 inject:注入 默认数据不是响应式的！！！</span></span>
<span class="line"><span style="color:#f6f6f4;">  //祖先级组件通过provide提供数据 子孙组件通过inject获取数据</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  // 祖先级组件</span></span>
<span class="line"><span style="color:#f6f6f4;">   data() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    return {</span></span>
<span class="line"><span style="color:#f6f6f4;">      name: &#39;QQ&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">  },</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  provide() {</span></span>
<span class="line"><span style="color:#f6f6f4;">    return {</span></span>
<span class="line"><span style="color:#f6f6f4;">      name: this.name,</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  //   子孙级组件</span></span>
<span class="line"><span style="color:#f6f6f4;">  inject: [&#39;name&#39;],</span></span>
<span class="line"><span style="color:#f6f6f4;">  create(){</span></span>
<span class="line"><span style="color:#f6f6f4;">    console.log(this.name)</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">  // provide:提供 inject:注入 默认数据不是响应式的！！！</span></span>
<span class="line"><span style="color:#24292e;">  //祖先级组件通过provide提供数据 子孙组件通过inject获取数据</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  // 祖先级组件</span></span>
<span class="line"><span style="color:#24292e;">   data() {</span></span>
<span class="line"><span style="color:#24292e;">    return {</span></span>
<span class="line"><span style="color:#24292e;">      name: &#39;QQ&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  provide() {</span></span>
<span class="line"><span style="color:#24292e;">    return {</span></span>
<span class="line"><span style="color:#24292e;">      name: this.name,</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  //   子孙级组件</span></span>
<span class="line"><span style="color:#24292e;">  inject: [&#39;name&#39;],</span></span>
<span class="line"><span style="color:#24292e;">  create(){</span></span>
<span class="line"><span style="color:#24292e;">    console.log(this.name)</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="依赖注入使数据成为响应式" tabindex="-1">依赖注入使数据成为响应式 <a class="header-anchor" href="#依赖注入使数据成为响应式" aria-label="Permalink to &quot;依赖注入使数据成为响应式&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 依赖注入使数据成为响应式的！！！</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    {{obj.name}}</span></span>
<span class="line"><span style="color:#f6f6f4;">    {{num}}</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;button @click=&quot;editAge&quot; &gt;+1&lt;/button&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">export default {</span></span>
<span class="line"><span style="color:#f6f6f4;">  //祖先级组件</span></span>
<span class="line"><span style="color:#f6f6f4;">  data(){</span></span>
<span class="line"><span style="color:#f6f6f4;">    return{</span></span>
<span class="line"><span style="color:#f6f6f4;">      obj:{</span></span>
<span class="line"><span style="color:#f6f6f4;">        name:&#39;QQ&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">        num:10</span></span>
<span class="line"><span style="color:#f6f6f4;">      },</span></span>
<span class="line"><span style="color:#f6f6f4;">      age:21</span></span>
<span class="line"><span style="color:#f6f6f4;">    },</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    methods:{</span></span>
<span class="line"><span style="color:#f6f6f4;">      editAge(){</span></span>
<span class="line"><span style="color:#f6f6f4;">        this.num++</span></span>
<span class="line"><span style="color:#f6f6f4;">        this.age++</span></span>
<span class="line"><span style="color:#f6f6f4;">      }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    provide(){</span></span>
<span class="line"><span style="color:#f6f6f4;">      return{</span></span>
<span class="line"><span style="color:#f6f6f4;">        //一种方法是用对象包裹要传的数据</span></span>
<span class="line"><span style="color:#f6f6f4;">        obj:this.obj</span></span>
<span class="line"><span style="color:#f6f6f4;">        //一种方法传递一个参数用方法返回</span></span>
<span class="line"><span style="color:#f6f6f4;">        age:() =&gt; this.age</span></span>
<span class="line"><span style="color:#f6f6f4;">      },</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    // 子孙级组件</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    {{obj.name}}</span></span>
<span class="line"><span style="color:#f6f6f4;">    {{age()}}</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">export default{</span></span>
<span class="line"><span style="color:#f6f6f4;">    inject:[&#39;obj&#39;,&#39;age&#39;],</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">   }</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 依赖注入使数据成为响应式的！！！</span></span>
<span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    {{obj.name}}</span></span>
<span class="line"><span style="color:#24292e;">    {{num}}</span></span>
<span class="line"><span style="color:#24292e;">    &lt;button @click=&quot;editAge&quot; &gt;+1&lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">  //祖先级组件</span></span>
<span class="line"><span style="color:#24292e;">  data(){</span></span>
<span class="line"><span style="color:#24292e;">    return{</span></span>
<span class="line"><span style="color:#24292e;">      obj:{</span></span>
<span class="line"><span style="color:#24292e;">        name:&#39;QQ&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        num:10</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">      age:21</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    methods:{</span></span>
<span class="line"><span style="color:#24292e;">      editAge(){</span></span>
<span class="line"><span style="color:#24292e;">        this.num++</span></span>
<span class="line"><span style="color:#24292e;">        this.age++</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    provide(){</span></span>
<span class="line"><span style="color:#24292e;">      return{</span></span>
<span class="line"><span style="color:#24292e;">        //一种方法是用对象包裹要传的数据</span></span>
<span class="line"><span style="color:#24292e;">        obj:this.obj</span></span>
<span class="line"><span style="color:#24292e;">        //一种方法传递一个参数用方法返回</span></span>
<span class="line"><span style="color:#24292e;">        age:() =&gt; this.age</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 子孙级组件</span></span>
<span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    {{obj.name}}</span></span>
<span class="line"><span style="color:#24292e;">    {{age()}}</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">export default{</span></span>
<span class="line"><span style="color:#24292e;">    inject:[&#39;obj&#39;,&#39;age&#39;],</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span></code></pre></div>`,6),o=[e];function c(t,i,f,r,y,d){return n(),a("div",null,o)}const m=s(p,[["render",c]]);export{u as __pageData,m as default};
