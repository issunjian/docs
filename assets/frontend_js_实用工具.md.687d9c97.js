import{_ as s,o as n,c as a,V as l}from"./chunks/framework.c6d8cbec.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/js/实用工具.md","filePath":"frontend/js/实用工具.md"}'),p={name:"frontend/js/实用工具.md"},e=l(`<h2 id="原型链继承" tabindex="-1">原型链继承 <a class="header-anchor" href="#原型链继承" aria-label="Permalink to &quot;原型链继承&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 将子类的原型对象 设置为 父类的实例对象  父类的原型对象</span></span>
<span class="line"><span style="color:#f6f6f4;">//缺点：只能实现方法的继承</span></span>
<span class="line"><span style="color:#f6f6f4;">function Dog(name) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  this.name = name</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">function Cat(name) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  this.name = name</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">function Animal() {}</span></span>
<span class="line"><span style="color:#f6f6f4;">Animal.prototype.fun = function () {</span></span>
<span class="line"><span style="color:#f6f6f4;">  console.log(&#39;跳&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">Dog.prototype = new Animal()</span></span>
<span class="line"><span style="color:#f6f6f4;">Cat.prototype = new Animal()</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">const dog = new Dog(&#39;狗子&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">const cat = new Cat(&#39;猫子&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(dog)</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(cat)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">dog.run() //结果：Animal { name: &#39;狗子&#39;}</span></span>
<span class="line"><span style="color:#f6f6f4;">cat.run() //结果：Animal { name: &#39;猫子&#39;}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 将子类的原型对象 设置为 父类的实例对象  父类的原型对象</span></span>
<span class="line"><span style="color:#24292e;">//缺点：只能实现方法的继承</span></span>
<span class="line"><span style="color:#24292e;">function Dog(name) {</span></span>
<span class="line"><span style="color:#24292e;">  this.name = name</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function Cat(name) {</span></span>
<span class="line"><span style="color:#24292e;">  this.name = name</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function Animal() {}</span></span>
<span class="line"><span style="color:#24292e;">Animal.prototype.fun = function () {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&#39;跳&#39;)</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Dog.prototype = new Animal()</span></span>
<span class="line"><span style="color:#24292e;">Cat.prototype = new Animal()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const dog = new Dog(&#39;狗子&#39;)</span></span>
<span class="line"><span style="color:#24292e;">const cat = new Cat(&#39;猫子&#39;)</span></span>
<span class="line"><span style="color:#24292e;">console.log(dog)</span></span>
<span class="line"><span style="color:#24292e;">console.log(cat)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">dog.run() //结果：Animal { name: &#39;狗子&#39;}</span></span>
<span class="line"><span style="color:#24292e;">cat.run() //结果：Animal { name: &#39;猫子&#39;}</span></span></code></pre></div><h2 id="借用构造函数继承" tabindex="-1">借用构造函数继承 <a class="header-anchor" href="#借用构造函数继承" aria-label="Permalink to &quot;借用构造函数继承&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">//实现方式：把父类构造函数内部的this改成子类构造函数内部的this 通过call()或apply()方法改变this</span></span>
<span class="line"><span style="color:#f6f6f4;">//缺点：只能实现属性的继承</span></span>
<span class="line"><span style="color:#f6f6f4;">function Animal(name) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  this.name = name</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">function Cat(name) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  // Animal.apply(this,[name])</span></span>
<span class="line"><span style="color:#f6f6f4;">  Animal.call(this, name)</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">const cat = new Cat()</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(cat) //结果:Cat { name: &#39;猫子&#39;}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//实现方式：把父类构造函数内部的this改成子类构造函数内部的this 通过call()或apply()方法改变this</span></span>
<span class="line"><span style="color:#24292e;">//缺点：只能实现属性的继承</span></span>
<span class="line"><span style="color:#24292e;">function Animal(name) {</span></span>
<span class="line"><span style="color:#24292e;">  this.name = name</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function Cat(name) {</span></span>
<span class="line"><span style="color:#24292e;">  // Animal.apply(this,[name])</span></span>
<span class="line"><span style="color:#24292e;">  Animal.call(this, name)</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const cat = new Cat()</span></span>
<span class="line"><span style="color:#24292e;">console.log(cat) //结果:Cat { name: &#39;猫子&#39;}</span></span></code></pre></div><h2 id="组合式继承" tabindex="-1">组合式继承 <a class="header-anchor" href="#组合式继承" aria-label="Permalink to &quot;组合式继承&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">// 把原型链继承和借用构造函数继承组合在一起</span></span>
<span class="line"><span style="color:#f6f6f4;">//缺点：属性继承了两次</span></span>
<span class="line"><span style="color:#f6f6f4;">function Animal(name) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  this.name = name</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">Animal.prototype.run = function () {</span></span>
<span class="line"><span style="color:#f6f6f4;">  console.log(&#39;跳&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">function Cat(name) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  Animal.call(this, name) //借用构造函数继承</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;">Cat.prototype = new Animal() //原型链继承</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">const cat = new Cat(&#39;猫子&#39;)</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(cat) //结果:Animal { name: &#39;猫子&#39; }</span></span>
<span class="line"><span style="color:#f6f6f4;">cat.run() //跳</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 把原型链继承和借用构造函数继承组合在一起</span></span>
<span class="line"><span style="color:#24292e;">//缺点：属性继承了两次</span></span>
<span class="line"><span style="color:#24292e;">function Animal(name) {</span></span>
<span class="line"><span style="color:#24292e;">  this.name = name</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Animal.prototype.run = function () {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&#39;跳&#39;)</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function Cat(name) {</span></span>
<span class="line"><span style="color:#24292e;">  Animal.call(this, name) //借用构造函数继承</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">Cat.prototype = new Animal() //原型链继承</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const cat = new Cat(&#39;猫子&#39;)</span></span>
<span class="line"><span style="color:#24292e;">console.log(cat) //结果:Animal { name: &#39;猫子&#39; }</span></span>
<span class="line"><span style="color:#24292e;">cat.run() //跳</span></span></code></pre></div><h2 id="寄生组合继承" tabindex="-1">寄生组合继承 <a class="header-anchor" href="#寄生组合继承" aria-label="Permalink to &quot;寄生组合继承&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">//使用借用构造函数继承属性和原型链继承去继承方法 使用原型链继承的时候用Object.create()创建一个对象 ，让这个新的对象他的原型对象变成要继承的构造函数的prototype</span></span>
<span class="line"><span style="color:#f6f6f4;">function Animal(name){</span></span>
<span class="line"><span style="color:#f6f6f4;">    this.name = name</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">Animal.prototype.run = function({console.log(&#39;跳&#39;)})</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">function Cat(name){</span></span>
<span class="line"><span style="color:#f6f6f4;">    Animal.call(this,name)</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">Cat.prototype = Object.create(Animal.prototype)</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">const cat = new Cat() //Animal { name: &#39;猫子&#39;, age: 6 }</span></span>
<span class="line"><span style="color:#f6f6f4;">cat.run() //跳</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//使用借用构造函数继承属性和原型链继承去继承方法 使用原型链继承的时候用Object.create()创建一个对象 ，让这个新的对象他的原型对象变成要继承的构造函数的prototype</span></span>
<span class="line"><span style="color:#24292e;">function Animal(name){</span></span>
<span class="line"><span style="color:#24292e;">    this.name = name</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Animal.prototype.run = function({console.log(&#39;跳&#39;)})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function Cat(name){</span></span>
<span class="line"><span style="color:#24292e;">    Animal.call(this,name)</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Cat.prototype = Object.create(Animal.prototype)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const cat = new Cat() //Animal { name: &#39;猫子&#39;, age: 6 }</span></span>
<span class="line"><span style="color:#24292e;">cat.run() //跳</span></span></code></pre></div><h2 id="深拷贝" tabindex="-1">深拷贝 <a class="header-anchor" href="#深拷贝" aria-label="Permalink to &quot;深拷贝&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">const obj = {</span></span>
<span class="line"><span style="color:#f6f6f4;">  id: 1,</span></span>
<span class="line"><span style="color:#f6f6f4;">  name: &#39;andy&#39;,</span></span>
<span class="line"><span style="color:#f6f6f4;">  msg: {</span></span>
<span class="line"><span style="color:#f6f6f4;">    age: 21,</span></span>
<span class="line"><span style="color:#f6f6f4;">  },</span></span>
<span class="line"><span style="color:#f6f6f4;">  arr: [1, 2, 3],</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">const o = {}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">function deepCopy(newobj, oldobj) {</span></span>
<span class="line"><span style="color:#f6f6f4;">  for (let k in oldobj) {</span></span>
<span class="line"><span style="color:#f6f6f4;">    let item = oldobj[k]</span></span>
<span class="line"><span style="color:#f6f6f4;">    if (item instanceof Array) {</span></span>
<span class="line"><span style="color:#f6f6f4;">      newobj[k] = []</span></span>
<span class="line"><span style="color:#f6f6f4;">      deepCopy(newobj[k], item)</span></span>
<span class="line"><span style="color:#f6f6f4;">    } else if (item instanceof Object) {</span></span>
<span class="line"><span style="color:#f6f6f4;">      newobj[k] = {}</span></span>
<span class="line"><span style="color:#f6f6f4;">      deepCopy(newobj[k], item)</span></span>
<span class="line"><span style="color:#f6f6f4;">    } else {</span></span>
<span class="line"><span style="color:#f6f6f4;">      newobj[k] = item</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">  }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">deepCopy(o, obj)</span></span>
<span class="line"><span style="color:#f6f6f4;">o.msg.age = 210</span></span>
<span class="line"><span style="color:#f6f6f4;">o.arr = [10, 20, 30]</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(o)</span></span>
<span class="line"><span style="color:#f6f6f4;">console.log(obj)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const obj = {</span></span>
<span class="line"><span style="color:#24292e;">  id: 1,</span></span>
<span class="line"><span style="color:#24292e;">  name: &#39;andy&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  msg: {</span></span>
<span class="line"><span style="color:#24292e;">    age: 21,</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  arr: [1, 2, 3],</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const o = {}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function deepCopy(newobj, oldobj) {</span></span>
<span class="line"><span style="color:#24292e;">  for (let k in oldobj) {</span></span>
<span class="line"><span style="color:#24292e;">    let item = oldobj[k]</span></span>
<span class="line"><span style="color:#24292e;">    if (item instanceof Array) {</span></span>
<span class="line"><span style="color:#24292e;">      newobj[k] = []</span></span>
<span class="line"><span style="color:#24292e;">      deepCopy(newobj[k], item)</span></span>
<span class="line"><span style="color:#24292e;">    } else if (item instanceof Object) {</span></span>
<span class="line"><span style="color:#24292e;">      newobj[k] = {}</span></span>
<span class="line"><span style="color:#24292e;">      deepCopy(newobj[k], item)</span></span>
<span class="line"><span style="color:#24292e;">    } else {</span></span>
<span class="line"><span style="color:#24292e;">      newobj[k] = item</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">deepCopy(o, obj)</span></span>
<span class="line"><span style="color:#24292e;">o.msg.age = 210</span></span>
<span class="line"><span style="color:#24292e;">o.arr = [10, 20, 30]</span></span>
<span class="line"><span style="color:#24292e;">console.log(o)</span></span>
<span class="line"><span style="color:#24292e;">console.log(obj)</span></span></code></pre></div>`,10),o=[e];function c(t,i,f,r,y,m){return n(),a("div",null,o)}const u=s(p,[["render",c]]);export{h as __pageData,u as default};
