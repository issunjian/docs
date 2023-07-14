import{_ as e,o as t,c as a,V as o}from"./chunks/framework.c6d8cbec.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/react/React最新2021年面试题，高级面试题及附答案解析.md","filePath":"interview/backend/react/React最新2021年面试题，高级面试题及附答案解析.md"}'),r={name:"interview/backend/react/React最新2021年面试题，高级面试题及附答案解析.md"},c=o(`<h3 id="_1、react组件生命周期的阶段是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/React/React%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#1react%E7%BB%84%E4%BB%B6%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E7%9A%84%E9%98%B6%E6%AE%B5%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">1、React组件生命周期的阶段是什么？</a> <a class="header-anchor" href="#_1、react组件生命周期的阶段是什么" aria-label="Permalink to &quot;[1、React组件生命周期的阶段是什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/React/React最新2021年面试题，高级面试题及附答案解析.md#1react组件生命周期的阶段是什么)&quot;">​</a></h3><p>React 组件的生命周期有三个不同的阶段：</p><p><strong>1、</strong> 初始渲染阶段：这是组件即将开始其生命之旅并进入 DOM 的阶段。</p><p><strong>2、</strong> 更新阶段：一旦组件被添加到 DOM，它只有在 prop 或状态发生变化时才可能更新和重新渲染。这些只发生在这个阶段。</p><p><strong>3、</strong> 卸载阶段：这是组件生命周期的最后阶段，组件被销毁并从 DOM 中删除。</p><h3 id="_2、redux与flux有何不同" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/React/React%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#2redux%E4%B8%8Eflux%E6%9C%89%E4%BD%95%E4%B8%8D%E5%90%8C" target="_blank" rel="noreferrer">2、Redux与Flux有何不同？</a> <a class="header-anchor" href="#_2、redux与flux有何不同" aria-label="Permalink to &quot;[2、Redux与Flux有何不同？](https://gitee.com/souyunku/DevBooks/blob/master/docs/React/React最新2021年面试题，高级面试题及附答案解析.md#2redux与flux有何不同)&quot;">​</a></h3><table><thead><tr><th>Flux</th><th>Redux</th></tr></thead><tbody><tr><td>1、Store 包含状态和更改逻辑</td><td>1、Store 和更改逻辑是分开的</td></tr><tr><td>2、有多个 Store</td><td>2、只有一个 Store</td></tr><tr><td>3、所有 Store 都互不影响且是平级的</td><td>3、带有分层 reducer 的单一 Store</td></tr><tr><td>4、有单一调度器</td><td>4、没有调度器的概念</td></tr><tr><td>5、React 组件订阅 store</td><td>5、容器组件是有联系的</td></tr><tr><td>6、状态是可变的</td><td>6、状态是不可改变的</td></tr></tbody></table><h3 id="_3、react实现的移动应用中如果出现卡顿有哪些可以考虑的优化方案" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/React/React%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#3react%E5%AE%9E%E7%8E%B0%E7%9A%84%E7%A7%BB%E5%8A%A8%E5%BA%94%E7%94%A8%E4%B8%AD%E5%A6%82%E6%9E%9C%E5%87%BA%E7%8E%B0%E5%8D%A1%E9%A1%BF%E6%9C%89%E5%93%AA%E4%BA%9B%E5%8F%AF%E4%BB%A5%E8%80%83%E8%99%91%E7%9A%84%E4%BC%98%E5%8C%96%E6%96%B9%E6%A1%88" target="_blank" rel="noreferrer">3、React实现的移动应用中如果出现卡顿有哪些可以考虑的优化方案</a> <a class="header-anchor" href="#_3、react实现的移动应用中如果出现卡顿有哪些可以考虑的优化方案" aria-label="Permalink to &quot;[3、React实现的移动应用中如果出现卡顿有哪些可以考虑的优化方案](https://gitee.com/souyunku/DevBooks/blob/master/docs/React/React最新2021年面试题，高级面试题及附答案解析.md#3react实现的移动应用中如果出现卡顿有哪些可以考虑的优化方案)&quot;">​</a></h3><p><strong>1、</strong> 增加<code>shouldComponentUpdate</code>钩子对新旧<code>props</code>进行比较如果值相同则阻止更新避免不必要的渲染或者使用<code>PureReactComponent</code>替代<code>Component</code>其内部已经封装了<code>shouldComponentUpdate</code>的浅比较逻辑</p><p><strong>2、</strong> 对于列表或其他结构相同的节点为其中的每一项增加唯一<code>key</code>属性以方便<code>React</code>的<code>diff</code>算法中对该节点的复用减少节点的创建和删除操作</p><p>render函数中减少类似</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#f6f6f4;">    doSomething()</span></span>
<span class="line"><span style="color:#f6f6f4;">}}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    doSomething()</span></span>
<span class="line"><span style="color:#24292e;">}}</span></span></code></pre></div><p>的写法每次调用<code>render</code>函数时均会创建一个新的函数即使内容没有发生任何变化也会导致节点没必要的重渲染建议将函数保存在组件的成员对象中这样只会创建一次</p><p><strong>1、</strong> 组件的props如果需要经过一系列运算后才能拿到最终结果则可以考虑使用<code>reselect</code>库对结果进行缓存如果props值未发生变化则结果直接从缓存中拿避免高昂的运算代价</p><p><strong>2、</strong> webpack-bundle-analyzer分析当前页面的依赖包是否存在不合理性如果存在找到优化点并进行优化</p><h3 id="_4、redux遵循的三个原则是什么" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/React/React%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#4redux%E9%81%B5%E5%BE%AA%E7%9A%84%E4%B8%89%E4%B8%AA%E5%8E%9F%E5%88%99%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">4、Redux遵循的三个原则是什么？</a> <a class="header-anchor" href="#_4、redux遵循的三个原则是什么" aria-label="Permalink to &quot;[4、Redux遵循的三个原则是什么？](https://gitee.com/souyunku/DevBooks/blob/master/docs/React/React最新2021年面试题，高级面试题及附答案解析.md#4redux遵循的三个原则是什么)&quot;">​</a></h3><p><strong>1、</strong> 单一事实来源：整个应用的状态存储在单个 store 中的对象/状态树里。单一状态树可以更容易地跟踪随时间的变化，并调试或检查应用程序。</p><p><strong>2、</strong> 状态是只读的：改变状态的唯一方法是去触发一个动作。动作是描述变化的普通 JS 对象。就像 state 是数据的最小表示一样，该操作是对数据更改的最小表示。</p><p><strong>3、</strong> 使用纯函数进行更改：为了指定状态树如何通过操作进行转换，你需要纯函数。纯函数是那些返回值仅取决于其参数值的函数。</p><h3 id="_5、简单说一下vue2-x响应式数据原理" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/React/React%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#5%E7%AE%80%E5%8D%95%E8%AF%B4%E4%B8%80%E4%B8%8Bvue2x%E5%93%8D%E5%BA%94%E5%BC%8F%E6%95%B0%E6%8D%AE%E5%8E%9F%E7%90%86" target="_blank" rel="noreferrer">5、简单说一下Vue2.x响应式数据原理</a> <a class="header-anchor" href="#_5、简单说一下vue2-x响应式数据原理" aria-label="Permalink to &quot;[5、简单说一下Vue2.x响应式数据原理](https://gitee.com/souyunku/DevBooks/blob/master/docs/React/React最新2021年面试题，高级面试题及附答案解析.md#5简单说一下vue2x响应式数据原理)&quot;">​</a></h3><p>Vue在初始化数据时，会使用<code>Object.defineProperty</code>重新定义data中的所有属性，当页面使用对应属性时，首先会进行依赖收集(收集当前组件的<code>watcher</code>)如果属性发生变化会通知相关依赖进行更新操作(<code>发布订阅</code>)。</p><h3 id="_6、如何告诉-react-它应该编译生产环境版" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/React/React%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#6%E5%A6%82%E4%BD%95%E5%91%8A%E8%AF%89-react-%E5%AE%83%E5%BA%94%E8%AF%A5%E7%BC%96%E8%AF%91%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E7%89%88" target="_blank" rel="noreferrer">6、如何告诉 React 它应该编译生产环境版</a> <a class="header-anchor" href="#_6、如何告诉-react-它应该编译生产环境版" aria-label="Permalink to &quot;[6、如何告诉 React 它应该编译生产环境版](https://gitee.com/souyunku/DevBooks/blob/master/docs/React/React最新2021年面试题，高级面试题及附答案解析.md#6如何告诉-react-它应该编译生产环境版)&quot;">​</a></h3><p>通常情况下我们会使用 <code>Webpack</code> 的 <code>DefinePlugin</code> 方法来将 <code>NODE_ENV</code> 变量值设置为 <code>production</code>。编译版本中 <code>React</code>会忽略 <code>propType</code> 验证以及其他的告警信息同时还会降低代码库的大小React 使用了 <code>Uglify</code> 插件来移除生产环境下不必要的注释等信息</p><h3 id="_7、react最新的生命周期是怎样的" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/React/React%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#7react%E6%9C%80%E6%96%B0%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%98%AF%E6%80%8E%E6%A0%B7%E7%9A%84" target="_blank" rel="noreferrer">7、React最新的生命周期是怎样的?</a> <a class="header-anchor" href="#_7、react最新的生命周期是怎样的" aria-label="Permalink to &quot;[7、React最新的生命周期是怎样的?](https://gitee.com/souyunku/DevBooks/blob/master/docs/React/React最新2021年面试题，高级面试题及附答案解析.md#7react最新的生命周期是怎样的)&quot;">​</a></h3><p>React 16之后有三个生命周期被废弃(但并未删除)</p><p><strong>1、</strong> componentWillMount</p><p><strong>2、</strong> componentWillReceiveProps</p><p><strong>3、</strong> componentWillUpdate</p><p>官方计划在17版本完全删除这三个函数，只保留UNSAVE_前缀的三个函数，目的是为了向下兼容，但是对于开发者而言应该尽量避免使用他们，而是使用新增的生命周期函数替代它们</p><p>目前React 16.8 +的生命周期分为三个阶段,分别是挂载阶段、更新阶段、卸载阶段</p><p><strong>挂载阶段:</strong></p><p><strong>1、</strong> constructor: 构造函数，最先被执行,我们通常在构造函数里初始化state对象或者给自定义方法绑定this</p><p><strong>2、</strong> getDerivedStateFromProps: <code>static getDerivedStateFromProps(nextProps, prevState)</code>,这是个静态方法,当我们接收到新的属性想去修改我们state，可以使用getDerivedStateFromProps</p><p><strong>3、</strong> render: render函数是纯函数，只返回需要渲染的东西，不应该包含其它的业务逻辑,可以返回原生的DOM、React组件、Fragment、Portals、字符串和数字、Boolean和null等内容</p><p><strong>4、</strong> componentDidMount: 组件装载之后调用，此时我们可以获取到DOM节点并操作，比如对canvas，svg的操作，服务器请求，订阅都可以写在这个里面，但是记得在componentWillUnmount中取消订阅</p><p><strong>更新阶段:</strong></p><p><strong>1、</strong> getDerivedStateFromProps: 此方法在更新个挂载阶段都可能会调用</p><p><strong>2、</strong> shouldComponentUpdate: <code>shouldComponentUpdate(nextProps, nextState)</code>,有两个参数nextProps和nextState，表示新的属性和变化之后的state，返回一个布尔值，true表示会触发重新渲染，false表示不会触发重新渲染，默认返回true,我们通常利用此生命周期来优化React程序性能</p><p><strong>3、</strong> render: 更新阶段也会触发此生命周期</p><p><strong>4、</strong> getSnapshotBeforeUpdate: <code>getSnapshotBeforeUpdate(prevProps, prevState)</code>,这个方法在render之后，componentDidUpdate之前调用，有两个参数prevProps和prevState，表示之前的属性和之前的state，这个函数有一个返回值，会作为第三个参数传给componentDidUpdate，如果你不想要返回值，可以返回null，此生命周期必须与componentDidUpdate搭配使用</p><p><strong>5、</strong> componentDidUpdate: <code>componentDidUpdate(prevProps, prevState, snapshot)</code>,该方法在getSnapshotBeforeUpdate方法之后被调用，有三个参数prevProps，prevState，snapshot，表示之前的props，之前的state，和snapshot。第三个参数是getSnapshotBeforeUpdate返回的,如果触发某些回调函数时需要用到 DOM 元素的状态，则将对比或计算的过程迁移至 getSnapshotBeforeUpdate，然后在 componentDidUpdate 中统一触发回调或更新状态。</p><p><strong>卸载阶段:</strong></p><p>componentWillUnmount: 当我们的组件被卸载或者销毁了就会调用，我们可以在这个函数里去清除一些定时器，取消网络请求，清理无效的DOM元素等垃圾清理工作</p><p><img src="https://gitee.com/souyunkutech/souyunku-home/raw/master/images/souyunku-web/2020/4/30/1939/39/97_1.png#alt=97%5C_1.png" alt=""></p><h3 id="_8、vue事件绑定原理说一下" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/React/React%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#8vue%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E5%8E%9F%E7%90%86%E8%AF%B4%E4%B8%80%E4%B8%8B" target="_blank" rel="noreferrer">8、Vue事件绑定原理说一下</a> <a class="header-anchor" href="#_8、vue事件绑定原理说一下" aria-label="Permalink to &quot;[8、Vue事件绑定原理说一下](https://gitee.com/souyunku/DevBooks/blob/master/docs/React/React最新2021年面试题，高级面试题及附答案解析.md#8vue事件绑定原理说一下)&quot;">​</a></h3><p>原生事件绑定是通过<code>addEventListener</code>绑定给真实元素的，组件事件绑定是通过Vue自定义的<code>$on</code>实现的。</p><p><strong>面试官：(这小子基础还可以，接下来我得上上难度了)</strong></p><h3 id="_9、vue中组件生命周期调用顺序说一下" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/React/React%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#9vue%E4%B8%AD%E7%BB%84%E4%BB%B6%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E8%B0%83%E7%94%A8%E9%A1%BA%E5%BA%8F%E8%AF%B4%E4%B8%80%E4%B8%8B" target="_blank" rel="noreferrer">9、Vue中组件生命周期调用顺序说一下</a> <a class="header-anchor" href="#_9、vue中组件生命周期调用顺序说一下" aria-label="Permalink to &quot;[9、Vue中组件生命周期调用顺序说一下](https://gitee.com/souyunku/DevBooks/blob/master/docs/React/React最新2021年面试题，高级面试题及附答案解析.md#9vue中组件生命周期调用顺序说一下)&quot;">​</a></h3><p><strong>1、</strong> 组件的调用顺序都是<code>先父后子</code>,渲染完成的顺序是<code>先子后父</code>。</p><p><strong>2、</strong> 组件的销毁操作是<code>先父后子</code>，销毁完成的顺序是<code>先子后父</code>。</p><p><strong>加载渲染过程</strong></p><p><code>父beforeCreate-&gt;父created-&gt;父beforeMount-&gt;子beforeCreate-&gt;子created-&gt;子beforeMount- &gt;子mounted-&gt;父mounted</code></p><p><strong>子组件更新过程</strong></p><p><code>父beforeUpdate-&gt;子beforeUpdate-&gt;子updated-&gt;父updated</code></p><p><strong>父组件更新过程</strong></p><p><code>父 beforeUpdate -&gt; 父 updated</code></p><p><strong>销毁过程</strong></p><p><code>父beforeDestroy-&gt;子beforeDestroy-&gt;子destroyed-&gt;父destroyed</code></p><h3 id="_10、react-的渲染过程中兄弟节点之间是怎么处理的也就是key值不一样的时候" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/React/React%E6%9C%80%E6%96%B02021%E5%B9%B4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%8C%E9%AB%98%E7%BA%A7%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E9%99%84%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.md#10react-%E7%9A%84%E6%B8%B2%E6%9F%93%E8%BF%87%E7%A8%8B%E4%B8%AD%E5%85%84%E5%BC%9F%E8%8A%82%E7%82%B9%E4%B9%8B%E9%97%B4%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%E7%9A%84%E4%B9%9F%E5%B0%B1%E6%98%AFkey%E5%80%BC%E4%B8%8D%E4%B8%80%E6%A0%B7%E7%9A%84%E6%97%B6%E5%80%99" target="_blank" rel="noreferrer">10、react 的渲染过程中兄弟节点之间是怎么处理的也就是key值不一样的时候</a> <a class="header-anchor" href="#_10、react-的渲染过程中兄弟节点之间是怎么处理的也就是key值不一样的时候" aria-label="Permalink to &quot;[10、react 的渲染过程中兄弟节点之间是怎么处理的也就是key值不一样的时候](https://gitee.com/souyunku/DevBooks/blob/master/docs/React/React最新2021年面试题，高级面试题及附答案解析.md#10react-的渲染过程中兄弟节点之间是怎么处理的也就是key值不一样的时候)&quot;">​</a></h3><p>通常我们输出节点的时候都是<code>map</code>一个数组然后返回一个<code>ReactNode</code>为了方便<code>react</code>内部进行优化我们必须给每一个<code>reactNode</code>添加<code>key</code>这个<code>key prop</code>在设计值处不是给开发者用的而是给react用的大概的作用就是给每一个reactNode添加一个身份标识方便react进行识别在重渲染过程中如果key一样若组件属性有所变化则<code>react</code>只更新组件对应的属性没有变化则不更新如果<code>key</code>不一样则<code>react</code>先销毁该组件然后重新创建该组件</p><h3 id="_11、说一下v-if和v-show的区别" tabindex="-1">11、说一下v-if和v-show的区别 <a class="header-anchor" href="#_11、说一下v-if和v-show的区别" aria-label="Permalink to &quot;11、说一下v-if和v-show的区别&quot;">​</a></h3><h3 id="_12、为什么选择使用框架而不是原生" tabindex="-1">12、为什么选择使用框架而不是原生? <a class="header-anchor" href="#_12、为什么选择使用框架而不是原生" aria-label="Permalink to &quot;12、为什么选择使用框架而不是原生?&quot;">​</a></h3><h3 id="_13、react如何进行组件-逻辑复用" tabindex="-1">13、React如何进行组件/逻辑复用? <a class="header-anchor" href="#_13、react如何进行组件-逻辑复用" aria-label="Permalink to &quot;13、React如何进行组件/逻辑复用?&quot;">​</a></h3><h3 id="_14、react组件的划分业务组件技术组件" tabindex="-1">14、react组件的划分业务组件技术组件 <a class="header-anchor" href="#_14、react组件的划分业务组件技术组件" aria-label="Permalink to &quot;14、react组件的划分业务组件技术组件&quot;">​</a></h3><h3 id="_15、你对受控组件和非受控组件了解多少" tabindex="-1">15、你对受控组件和非受控组件了解多少？ <a class="header-anchor" href="#_15、你对受控组件和非受控组件了解多少" aria-label="Permalink to &quot;15、你对受控组件和非受控组件了解多少？&quot;">​</a></h3><h3 id="_16、redux中间件" tabindex="-1">16、redux中间件 <a class="header-anchor" href="#_16、redux中间件" aria-label="Permalink to &quot;16、redux中间件&quot;">​</a></h3><h3 id="_17、redux与mobx的区别" tabindex="-1">17、redux与mobx的区别? <a class="header-anchor" href="#_17、redux与mobx的区别" aria-label="Permalink to &quot;17、redux与mobx的区别?&quot;">​</a></h3><h3 id="_18、redux有什么缺点" tabindex="-1">18、redux有什么缺点 <a class="header-anchor" href="#_18、redux有什么缺点" aria-label="Permalink to &quot;18、redux有什么缺点&quot;">​</a></h3><h3 id="_19、react和vue的区别" tabindex="-1">19、react和vue的区别 <a class="header-anchor" href="#_19、react和vue的区别" aria-label="Permalink to &quot;19、react和vue的区别&quot;">​</a></h3><h3 id="_20、解释-react-中-render-的目的。" tabindex="-1">20、解释 React 中 render() 的目的。 <a class="header-anchor" href="#_20、解释-react-中-render-的目的。" aria-label="Permalink to &quot;20、解释 React 中 render() 的目的。&quot;">​</a></h3><h3 id="_21、解释-reducer-的作用。" tabindex="-1">21、解释 Reducer 的作用。 <a class="header-anchor" href="#_21、解释-reducer-的作用。" aria-label="Permalink to &quot;21、解释 Reducer 的作用。&quot;">​</a></h3><h3 id="_22、为什么react-router-v4中使用-switch-关键字" tabindex="-1">22、为什么React Router v4中使用 switch 关键字 ？ <a class="header-anchor" href="#_22、为什么react-router-v4中使用-switch-关键字" aria-label="Permalink to &quot;22、为什么React Router v4中使用 switch 关键字 ？&quot;">​</a></h3><h3 id="_23、setstate-react-中用于修改状态更新视图。它具有以下特点" tabindex="-1">23、setState: React 中用于修改状态更新视图。它具有以下特点: <a class="header-anchor" href="#_23、setstate-react-中用于修改状态更新视图。它具有以下特点" aria-label="Permalink to &quot;23、setState: React 中用于修改状态更新视图。它具有以下特点:&quot;">​</a></h3><h3 id="_24、你理解-在react中-一切都是组件-这句话。" tabindex="-1">24、你理解“在React中，一切都是组件”这句话。 <a class="header-anchor" href="#_24、你理解-在react中-一切都是组件-这句话。" aria-label="Permalink to &quot;24、你理解“在React中，一切都是组件”这句话。&quot;">​</a></h3><h3 id="_25、你对-time-slice的理解" tabindex="-1">25、你对 Time Slice的理解? <a class="header-anchor" href="#_25、你对-time-slice的理解" aria-label="Permalink to &quot;25、你对 Time Slice的理解?&quot;">​</a></h3><h3 id="_26、vue模版编译原理知道吗-能简单说一下吗" tabindex="-1">26、Vue模版编译原理知道吗，能简单说一下吗？ <a class="header-anchor" href="#_26、vue模版编译原理知道吗-能简单说一下吗" aria-label="Permalink to &quot;26、Vue模版编译原理知道吗，能简单说一下吗？&quot;">​</a></h3><h3 id="_27、生命周期钩子-useeffect" tabindex="-1">27、生命周期钩子 (useEffect): <a class="header-anchor" href="#_27、生命周期钩子-useeffect" aria-label="Permalink to &quot;27、生命周期钩子 (useEffect):&quot;">​</a></h3><h3 id="_28、具体实现步骤如下" tabindex="-1">28、具体实现步骤如下 <a class="header-anchor" href="#_28、具体实现步骤如下" aria-label="Permalink to &quot;28、具体实现步骤如下&quot;">​</a></h3>`,78),s=[c];function d(E,n,p,l,u,i){return t(),a("div",null,s)}const B=e(r,[["render",d]]);export{A as __pageData,B as default};
