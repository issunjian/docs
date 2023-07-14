import{_ as a,o as s,c as n,V as e}from"./chunks/framework.c6d8cbec.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/backend/java/java-21.md","filePath":"interview/backend/java/java-21.md"}'),l={name:"interview/backend/java/java-21.md"},p=e(`<h3 id="_1、string-属于基础的数据类型吗" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E5%9F%BA%E7%A1%80%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86.md#1string-%E5%B1%9E%E4%BA%8E%E5%9F%BA%E7%A1%80%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E5%90%97" target="_blank" rel="noreferrer">1、String 属于基础的数据类型吗？</a> <a class="header-anchor" href="#_1、string-属于基础的数据类型吗" aria-label="Permalink to &quot;[1、String 属于基础的数据类型吗？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新基础面试题及答案整理.md#1string-属于基础的数据类型吗)&quot;">​</a></h3><p>String 不属于基础类型，基础类型有 8 种：byte、boolean、char、short、int、float、long、double，而 String 属于对象。</p><h3 id="_2、如何实现对象克隆" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E5%9F%BA%E7%A1%80%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86.md#2%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%AF%B9%E8%B1%A1%E5%85%8B%E9%9A%86" target="_blank" rel="noreferrer">2、如何实现对象克隆？</a> <a class="header-anchor" href="#_2、如何实现对象克隆" aria-label="Permalink to &quot;[2、如何实现对象克隆？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新基础面试题及答案整理.md#2如何实现对象克隆)&quot;">​</a></h3><p>有两种方式：</p><p>1)、实现Cloneable接口并重写Object类中的clone()方法；</p><p>2)、实现Serializable接口，通过对象的序列化和反序列化实现克隆，可以实现真正的深度克隆，代码如下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">import java.io.ByteArrayInputStream;</span></span>
<span class="line"><span style="color:#f6f6f4;">import java.io.ByteArrayOutputStream;</span></span>
<span class="line"><span style="color:#f6f6f4;">import java.io.ObjectInputStream;</span></span>
<span class="line"><span style="color:#f6f6f4;">import java.io.ObjectOutputStream;</span></span>
<span class="line"><span style="color:#f6f6f4;">import java.io.Serializable;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">public class MyUtil {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    private MyUtil() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        throw new AssertionError();</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    @SuppressWarnings(&quot;unchecked&quot;)</span></span>
<span class="line"><span style="color:#f6f6f4;">    public static &lt;T extends Serializable&gt; T clone(T obj) throws Exception {</span></span>
<span class="line"><span style="color:#f6f6f4;">        ByteArrayOutputStream bout = new ByteArrayOutputStream();</span></span>
<span class="line"><span style="color:#f6f6f4;">        ObjectOutputStream oos = new ObjectOutputStream(bout);</span></span>
<span class="line"><span style="color:#f6f6f4;">        oos.writeObject(obj);</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        ByteArrayInputStream bin = new ByteArrayInputStream(bout.toByteArray());</span></span>
<span class="line"><span style="color:#f6f6f4;">        ObjectInputStream ois = new ObjectInputStream(bin);</span></span>
<span class="line"><span style="color:#f6f6f4;">        return (T) ois.readObject();</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">        // 说明：调用ByteArrayInputStream或ByteArrayOutputStream对象的close方法没有任何意义</span></span>
<span class="line"><span style="color:#f6f6f4;">        // 这两个基于内存的流只要垃圾回收器清理对象就能够释放资源，这一点不同于对外部资源（如文件流）的释放</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import java.io.ByteArrayInputStream;</span></span>
<span class="line"><span style="color:#24292e;">import java.io.ByteArrayOutputStream;</span></span>
<span class="line"><span style="color:#24292e;">import java.io.ObjectInputStream;</span></span>
<span class="line"><span style="color:#24292e;">import java.io.ObjectOutputStream;</span></span>
<span class="line"><span style="color:#24292e;">import java.io.Serializable;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public class MyUtil {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private MyUtil() {</span></span>
<span class="line"><span style="color:#24292e;">        throw new AssertionError();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @SuppressWarnings(&quot;unchecked&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    public static &lt;T extends Serializable&gt; T clone(T obj) throws Exception {</span></span>
<span class="line"><span style="color:#24292e;">        ByteArrayOutputStream bout = new ByteArrayOutputStream();</span></span>
<span class="line"><span style="color:#24292e;">        ObjectOutputStream oos = new ObjectOutputStream(bout);</span></span>
<span class="line"><span style="color:#24292e;">        oos.writeObject(obj);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        ByteArrayInputStream bin = new ByteArrayInputStream(bout.toByteArray());</span></span>
<span class="line"><span style="color:#24292e;">        ObjectInputStream ois = new ObjectInputStream(bin);</span></span>
<span class="line"><span style="color:#24292e;">        return (T) ois.readObject();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        // 说明：调用ByteArrayInputStream或ByteArrayOutputStream对象的close方法没有任何意义</span></span>
<span class="line"><span style="color:#24292e;">        // 这两个基于内存的流只要垃圾回收器清理对象就能够释放资源，这一点不同于对外部资源（如文件流）的释放</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>下面是测试代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">import java.io.Serializable;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">/</span></span>
<span class="line"><span style="color:#f6f6f4;"> * 人类</span></span>
<span class="line"><span style="color:#f6f6f4;"> * @author 骆昊</span></span>
<span class="line"><span style="color:#f6f6f4;"> *</span></span>
<span class="line"><span style="color:#f6f6f4;"> */</span></span>
<span class="line"><span style="color:#f6f6f4;">class Person implements Serializable {</span></span>
<span class="line"><span style="color:#f6f6f4;">    private static final long serialVersionUID = -9102017020286042305L;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    private String name;    // 姓名</span></span>
<span class="line"><span style="color:#f6f6f4;">    private int age;        // 年龄</span></span>
<span class="line"><span style="color:#f6f6f4;">    private Car car;        // 座驾</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public Person(String name, int age, Car car) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        this.name = name;</span></span>
<span class="line"><span style="color:#f6f6f4;">        this.age = age;</span></span>
<span class="line"><span style="color:#f6f6f4;">        this.car = car;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public String getName() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return name;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public void setName(String name) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        this.name = name;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public int getAge() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return age;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public void setAge(int age) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        this.age = age;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public Car getCar() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return car;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public void setCar(Car car) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        this.car = car;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    @Override</span></span>
<span class="line"><span style="color:#f6f6f4;">    public String toString() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return &quot;Person [name=&quot; + name + &quot;, age=&quot; + age + &quot;, car=&quot; + car + &quot;]&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import java.io.Serializable;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">/</span></span>
<span class="line"><span style="color:#24292e;"> * 人类</span></span>
<span class="line"><span style="color:#24292e;"> * @author 骆昊</span></span>
<span class="line"><span style="color:#24292e;"> *</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">class Person implements Serializable {</span></span>
<span class="line"><span style="color:#24292e;">    private static final long serialVersionUID = -9102017020286042305L;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private String name;    // 姓名</span></span>
<span class="line"><span style="color:#24292e;">    private int age;        // 年龄</span></span>
<span class="line"><span style="color:#24292e;">    private Car car;        // 座驾</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public Person(String name, int age, Car car) {</span></span>
<span class="line"><span style="color:#24292e;">        this.name = name;</span></span>
<span class="line"><span style="color:#24292e;">        this.age = age;</span></span>
<span class="line"><span style="color:#24292e;">        this.car = car;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public String getName() {</span></span>
<span class="line"><span style="color:#24292e;">        return name;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public void setName(String name) {</span></span>
<span class="line"><span style="color:#24292e;">        this.name = name;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public int getAge() {</span></span>
<span class="line"><span style="color:#24292e;">        return age;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public void setAge(int age) {</span></span>
<span class="line"><span style="color:#24292e;">        this.age = age;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public Car getCar() {</span></span>
<span class="line"><span style="color:#24292e;">        return car;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public void setCar(Car car) {</span></span>
<span class="line"><span style="color:#24292e;">        this.car = car;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Override</span></span>
<span class="line"><span style="color:#24292e;">    public String toString() {</span></span>
<span class="line"><span style="color:#24292e;">        return &quot;Person [name=&quot; + name + &quot;, age=&quot; + age + &quot;, car=&quot; + car + &quot;]&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">/</span></span>
<span class="line"><span style="color:#f6f6f4;"> * 小汽车类</span></span>
<span class="line"><span style="color:#f6f6f4;"> * @author 骆昊</span></span>
<span class="line"><span style="color:#f6f6f4;"> *</span></span>
<span class="line"><span style="color:#f6f6f4;"> */</span></span>
<span class="line"><span style="color:#f6f6f4;">class Car implements Serializable {</span></span>
<span class="line"><span style="color:#f6f6f4;">    private static final long serialVersionUID = -5713945027627603702L;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    private String brand;       // 品牌</span></span>
<span class="line"><span style="color:#f6f6f4;">    private int maxSpeed;       // 最高时速</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public Car(String brand, int maxSpeed) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        this.brand = brand;</span></span>
<span class="line"><span style="color:#f6f6f4;">        this.maxSpeed = maxSpeed;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public String getBrand() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return brand;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public void setBrand(String brand) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        this.brand = brand;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public int getMaxSpeed() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return maxSpeed;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public void setMaxSpeed(int maxSpeed) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        this.maxSpeed = maxSpeed;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    @Override</span></span>
<span class="line"><span style="color:#f6f6f4;">    public String toString() {</span></span>
<span class="line"><span style="color:#f6f6f4;">        return &quot;Car [brand=&quot; + brand + &quot;, maxSpeed=&quot; + maxSpeed + &quot;]&quot;;</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/</span></span>
<span class="line"><span style="color:#24292e;"> * 小汽车类</span></span>
<span class="line"><span style="color:#24292e;"> * @author 骆昊</span></span>
<span class="line"><span style="color:#24292e;"> *</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">class Car implements Serializable {</span></span>
<span class="line"><span style="color:#24292e;">    private static final long serialVersionUID = -5713945027627603702L;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private String brand;       // 品牌</span></span>
<span class="line"><span style="color:#24292e;">    private int maxSpeed;       // 最高时速</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public Car(String brand, int maxSpeed) {</span></span>
<span class="line"><span style="color:#24292e;">        this.brand = brand;</span></span>
<span class="line"><span style="color:#24292e;">        this.maxSpeed = maxSpeed;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public String getBrand() {</span></span>
<span class="line"><span style="color:#24292e;">        return brand;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public void setBrand(String brand) {</span></span>
<span class="line"><span style="color:#24292e;">        this.brand = brand;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public int getMaxSpeed() {</span></span>
<span class="line"><span style="color:#24292e;">        return maxSpeed;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public void setMaxSpeed(int maxSpeed) {</span></span>
<span class="line"><span style="color:#24292e;">        this.maxSpeed = maxSpeed;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Override</span></span>
<span class="line"><span style="color:#24292e;">    public String toString() {</span></span>
<span class="line"><span style="color:#24292e;">        return &quot;Car [brand=&quot; + brand + &quot;, maxSpeed=&quot; + maxSpeed + &quot;]&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">class CloneTest {</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#f6f6f4;">        try {</span></span>
<span class="line"><span style="color:#f6f6f4;">            Person p1 = new Person(&quot;Hao LUO&quot;, 33, new Car(&quot;Benz&quot;, 300));</span></span>
<span class="line"><span style="color:#f6f6f4;">            Person p2 = MyUtil.clone(p1);   // 深度克隆</span></span>
<span class="line"><span style="color:#f6f6f4;">            p2.getCar().setBrand(&quot;BYD&quot;);</span></span>
<span class="line"><span style="color:#f6f6f4;">            // 修改克隆的Person对象p2关联的汽车对象的品牌属性</span></span>
<span class="line"><span style="color:#f6f6f4;">            // 原来的Person对象p1关联的汽车不会受到任何影响</span></span>
<span class="line"><span style="color:#f6f6f4;">            // 因为在克隆Person对象时其关联的汽车对象也被克隆了</span></span>
<span class="line"><span style="color:#f6f6f4;">            System.out.println(p1);</span></span>
<span class="line"><span style="color:#f6f6f4;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#f6f6f4;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#f6f6f4;">        }</span></span>
<span class="line"><span style="color:#f6f6f4;">    }</span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class CloneTest {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            Person p1 = new Person(&quot;Hao LUO&quot;, 33, new Car(&quot;Benz&quot;, 300));</span></span>
<span class="line"><span style="color:#24292e;">            Person p2 = MyUtil.clone(p1);   // 深度克隆</span></span>
<span class="line"><span style="color:#24292e;">            p2.getCar().setBrand(&quot;BYD&quot;);</span></span>
<span class="line"><span style="color:#24292e;">            // 修改克隆的Person对象p2关联的汽车对象的品牌属性</span></span>
<span class="line"><span style="color:#24292e;">            // 原来的Person对象p1关联的汽车不会受到任何影响</span></span>
<span class="line"><span style="color:#24292e;">            // 因为在克隆Person对象时其关联的汽车对象也被克隆了</span></span>
<span class="line"><span style="color:#24292e;">            System.out.println(p1);</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><blockquote><p>注意：基于序列化和反序列化实现的克隆不仅仅是深度克隆，更重要的是通过泛型限定，可以检查出要克隆的对象是否支持序列化，这项检查是编译器完成的，不是在运行时抛出异常，这种是方案明显优于使用Object类的clone方法克隆对象。让问题在编译的时候暴露出来总是好过把问题留到运行时。</p></blockquote><h3 id="_3、java最顶级的父类是哪个" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E5%9F%BA%E7%A1%80%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86.md#3java%E6%9C%80%E9%A1%B6%E7%BA%A7%E7%9A%84%E7%88%B6%E7%B1%BB%E6%98%AF%E5%93%AA%E4%B8%AA" target="_blank" rel="noreferrer">3、Java最顶级的父类是哪个？</a> <a class="header-anchor" href="#_3、java最顶级的父类是哪个" aria-label="Permalink to &quot;[3、Java最顶级的父类是哪个？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新基础面试题及答案整理.md#3java最顶级的父类是哪个)&quot;">​</a></h3><p>Object</p><h3 id="_4、如何通过反射创建对象" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E5%9F%BA%E7%A1%80%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86.md#4%E5%A6%82%E4%BD%95%E9%80%9A%E8%BF%87%E5%8F%8D%E5%B0%84%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1" target="_blank" rel="noreferrer">4、如何通过反射创建对象？</a> <a class="header-anchor" href="#_4、如何通过反射创建对象" aria-label="Permalink to &quot;[4、如何通过反射创建对象？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新基础面试题及答案整理.md#4如何通过反射创建对象)&quot;">​</a></h3><p><strong>1、</strong> 方法1：通过类对象调用newInstance()方法，例如：String.class.newInstance()</p><p><strong>2、</strong> 方法2：通过类对象的getConstructor()或getDeclaredConstructor()方法获得构造器（Constructor）对象并调用其newInstance()方法创建对象，例如：String.class.getConstructor(String.class).newInstance(“Hello”);</p><h3 id="_5、java-中堆和栈有什么区别" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E5%9F%BA%E7%A1%80%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86.md#5java-%E4%B8%AD%E5%A0%86%E5%92%8C%E6%A0%88%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">5、Java 中堆和栈有什么区别？</a> <a class="header-anchor" href="#_5、java-中堆和栈有什么区别" aria-label="Permalink to &quot;[5、Java 中堆和栈有什么区别？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新基础面试题及答案整理.md#5java-中堆和栈有什么区别)&quot;">​</a></h3><p>JVM 中堆和栈属于不同的内存区域，使用目的也不同。栈常用于保存方法帧和局部变量，而对象总是在堆上分配。栈通常都比堆小，也不会在多个线程之间共享，而堆被整个 JVM 的所有线程共享。</p><h3 id="_6、volatile-能使得一个非原子操作变成原子操作吗" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E5%9F%BA%E7%A1%80%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86.md#6volatile-%E8%83%BD%E4%BD%BF%E5%BE%97%E4%B8%80%E4%B8%AA%E9%9D%9E%E5%8E%9F%E5%AD%90%E6%93%8D%E4%BD%9C%E5%8F%98%E6%88%90%E5%8E%9F%E5%AD%90%E6%93%8D%E4%BD%9C%E5%90%97" target="_blank" rel="noreferrer">6、volatile 能使得一个非原子操作变成原子操作吗？</a> <a class="header-anchor" href="#_6、volatile-能使得一个非原子操作变成原子操作吗" aria-label="Permalink to &quot;[6、volatile 能使得一个非原子操作变成原子操作吗？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新基础面试题及答案整理.md#6volatile-能使得一个非原子操作变成原子操作吗)&quot;">​</a></h3><p><strong>1、</strong> 关键字volatile的主要作用是使变量在多个线程间可见，但无法保证原子性，对于多个线程访问同一个实例变量需要加锁进行同步。</p><p><strong>2、</strong> 虽然volatile只能保证可见性不能保证原子性，但用volatile修饰long和double可以保证其操作原子性。</p><p><strong>所以从Oracle Java Spec里面可以看到：</strong></p><p><strong>1、</strong> 对于64位的long和double，如果没有被volatile修饰，那么对其操作可以不是原子的。在操作的时候，可以分成两步，每次对32位操作。</p><p><strong>2、</strong> 如果使用volatile修饰long和double，那么其读写都是原子操作</p><p><strong>3、</strong> 对于64位的引用地址的读写，都是原子操作</p><p><strong>4、</strong> 在实现JVM时，可以自由选择是否把读写long和double作为原子操作</p><p><strong>5、</strong> 推荐JVM实现为原子操作</p><h3 id="_7、为什么选择使用框架而不是原生" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E5%9F%BA%E7%A1%80%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86.md#7%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E6%8B%A9%E4%BD%BF%E7%94%A8%E6%A1%86%E6%9E%B6%E8%80%8C%E4%B8%8D%E6%98%AF%E5%8E%9F%E7%94%9F" target="_blank" rel="noreferrer">7、为什么选择使用框架而不是原生?</a> <a class="header-anchor" href="#_7、为什么选择使用框架而不是原生" aria-label="Permalink to &quot;[7、为什么选择使用框架而不是原生?](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新基础面试题及答案整理.md#7为什么选择使用框架而不是原生)&quot;">​</a></h3><p>框架的好处:</p><p><strong>1、</strong> 组件化: 其中以 React 的组件化最为彻底,甚至可以到函数级别的原子组件,高度的组件化可以是我们的工程易于维护、易于组合拓展。</p><p><strong>2、</strong> 天然分层: JQuery 时代的代码大部分情况下是面条代码,耦合严重,现代框架不管是 MVC、MVP还是MVVM 模式都能帮助我们进行分层，代码解耦更易于读写。</p><p><strong>3、</strong> 生态: 现在主流前端框架都自带生态,不管是数据流管理架构还是 UI 库都有成熟的解决方案。</p><p><strong>4、</strong> 开发效率: 现代前端框架都默认自动更新DOM,而非我们手动操作,解放了开发者的手动DOM成本,提高开发效率,从根本上解决了UI 与状态同步问题.</p><h3 id="_8、你能写出一个正则表达式来判断一个字符串是否是一个数字吗" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E5%9F%BA%E7%A1%80%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86.md#8%E4%BD%A0%E8%83%BD%E5%86%99%E5%87%BA%E4%B8%80%E4%B8%AA%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E6%9D%A5%E5%88%A4%E6%96%AD%E4%B8%80%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%98%AF%E5%90%A6%E6%98%AF%E4%B8%80%E4%B8%AA%E6%95%B0%E5%AD%97%E5%90%97" target="_blank" rel="noreferrer">8、你能写出一个正则表达式来判断一个字符串是否是一个数字吗？</a> <a class="header-anchor" href="#_8、你能写出一个正则表达式来判断一个字符串是否是一个数字吗" aria-label="Permalink to &quot;[8、你能写出一个正则表达式来判断一个字符串是否是一个数字吗？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新基础面试题及答案整理.md#8你能写出一个正则表达式来判断一个字符串是否是一个数字吗)&quot;">​</a></h3><p>一个数字字符串，只能包含数字，如 0 到 9 以及 +、- 开头，通过这个信息，你可以下一个如下的正则表达式来判断给定的字符串是不是数字。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">首先要import java.util.regex.Pattern 和 java.util.regex.Matcher</span></span>
<span class="line"><span style="color:#f6f6f4;">public boolean isNumeric(String str){ </span></span>
<span class="line"><span style="color:#f6f6f4;">   Pattern pattern = Pattern.compile(&quot;[0-9]*&quot;); </span></span>
<span class="line"><span style="color:#f6f6f4;">   Matcher isNum = pattern.matcher(str);</span></span>
<span class="line"><span style="color:#f6f6f4;">   if( !isNum.matches() ){</span></span>
<span class="line"><span style="color:#f6f6f4;">       return false; </span></span>
<span class="line"><span style="color:#f6f6f4;">   } </span></span>
<span class="line"><span style="color:#f6f6f4;">   return true; </span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">首先要import java.util.regex.Pattern 和 java.util.regex.Matcher</span></span>
<span class="line"><span style="color:#24292e;">public boolean isNumeric(String str){ </span></span>
<span class="line"><span style="color:#24292e;">   Pattern pattern = Pattern.compile(&quot;[0-9]*&quot;); </span></span>
<span class="line"><span style="color:#24292e;">   Matcher isNum = pattern.matcher(str);</span></span>
<span class="line"><span style="color:#24292e;">   if( !isNum.matches() ){</span></span>
<span class="line"><span style="color:#24292e;">       return false; </span></span>
<span class="line"><span style="color:#24292e;">   } </span></span>
<span class="line"><span style="color:#24292e;">   return true; </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="_9、运行时栈帧包含哪些结构" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E5%9F%BA%E7%A1%80%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86.md#9%E8%BF%90%E8%A1%8C%E6%97%B6%E6%A0%88%E5%B8%A7%E5%8C%85%E5%90%AB%E5%93%AA%E4%BA%9B%E7%BB%93%E6%9E%84" target="_blank" rel="noreferrer">9、运行时栈帧包含哪些结构？</a> <a class="header-anchor" href="#_9、运行时栈帧包含哪些结构" aria-label="Permalink to &quot;[9、运行时栈帧包含哪些结构？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新基础面试题及答案整理.md#9运行时栈帧包含哪些结构)&quot;">​</a></h3><p><strong>1、</strong> 局部变量表</p><p><strong>2、</strong> 操作数栈</p><p><strong>3、</strong> 动态连接</p><p><strong>4、</strong> 返回地址</p><p><strong>5、</strong> 附加信息</p><h3 id="_10、什么是java程序的主类-应用程序和小程序的主类有何不同" tabindex="-1"><a href="https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java%E6%9C%80%E6%96%B0%E5%9F%BA%E7%A1%80%E9%9D%A2%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E6%95%B4%E7%90%86.md#10%E4%BB%80%E4%B9%88%E6%98%AFjava%E7%A8%8B%E5%BA%8F%E7%9A%84%E4%B8%BB%E7%B1%BB%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%9A%84%E4%B8%BB%E7%B1%BB%E6%9C%89%E4%BD%95%E4%B8%8D%E5%90%8C" target="_blank" rel="noreferrer">10、什么是Java程序的主类？应用程序和小程序的主类有何不同？</a> <a class="header-anchor" href="#_10、什么是java程序的主类-应用程序和小程序的主类有何不同" aria-label="Permalink to &quot;[10、什么是Java程序的主类？应用程序和小程序的主类有何不同？](https://gitee.com/souyunku/DevBooks/blob/master/docs/Java/Java最新基础面试题及答案整理.md#10什么是java程序的主类应用程序和小程序的主类有何不同)&quot;">​</a></h3><p>一个程序中可以有多个类，但只能有一个类是主类。在Java应用程序中，这个主类是指包含main（）方法的类。而在Java小程序中，这个主类是一个继承自系统类JApplet或Applet的子类。应用程序的主类不一定要求是public类，但小程序的主类要求必须是public类。主类是Java程序执行的入口点。</p><h3 id="_11、什么是模板方法模式" tabindex="-1">11、什么是模板方法模式？ <a class="header-anchor" href="#_11、什么是模板方法模式" aria-label="Permalink to &quot;11、什么是模板方法模式？&quot;">​</a></h3><h3 id="_12、java-中应该使用什么数据类型来代表价格" tabindex="-1">12、Java 中应该使用什么数据类型来代表价格？ <a class="header-anchor" href="#_12、java-中应该使用什么数据类型来代表价格" aria-label="Permalink to &quot;12、Java 中应该使用什么数据类型来代表价格？&quot;">​</a></h3><h3 id="_13、本地方法栈" tabindex="-1">13、本地方法栈 <a class="header-anchor" href="#_13、本地方法栈" aria-label="Permalink to &quot;13、本地方法栈&quot;">​</a></h3><h3 id="_14、静态方法和实例方法有何不同" tabindex="-1">14、静态方法和实例方法有何不同？ <a class="header-anchor" href="#_14、静态方法和实例方法有何不同" aria-label="Permalink to &quot;14、静态方法和实例方法有何不同？&quot;">​</a></h3><h3 id="_15、java虚引用" tabindex="-1">15、JAVA虚引用 <a class="header-anchor" href="#_15、java虚引用" aria-label="Permalink to &quot;15、JAVA虚引用&quot;">​</a></h3><h3 id="_16、java应用程序与小程序之间有那些差别" tabindex="-1">16、Java应用程序与小程序之间有那些差别？ <a class="header-anchor" href="#_16、java应用程序与小程序之间有那些差别" aria-label="Permalink to &quot;16、Java应用程序与小程序之间有那些差别？&quot;">​</a></h3><h3 id="_17、sleep方法和wait方法有什么区别" tabindex="-1">17、sleep方法和wait方法有什么区别? <a class="header-anchor" href="#_17、sleep方法和wait方法有什么区别" aria-label="Permalink to &quot;17、sleep方法和wait方法有什么区别?&quot;">​</a></h3><h3 id="_18、普通类与抽象类有什么区别" tabindex="-1">18、普通类与抽象类有什么区别？ <a class="header-anchor" href="#_18、普通类与抽象类有什么区别" aria-label="Permalink to &quot;18、普通类与抽象类有什么区别？&quot;">​</a></h3><h3 id="_19、现实生活中的模板方法" tabindex="-1">19、现实生活中的模板方法 <a class="header-anchor" href="#_19、现实生活中的模板方法" aria-label="Permalink to &quot;19、现实生活中的模板方法&quot;">​</a></h3><h3 id="_20、一个线程运行时发生异常会怎样" tabindex="-1">20、一个线程运行时发生异常会怎样？ <a class="header-anchor" href="#_20、一个线程运行时发生异常会怎样" aria-label="Permalink to &quot;20、一个线程运行时发生异常会怎样？&quot;">​</a></h3><h3 id="_21、重载-overload-和重写-override-的区别。重载的方法能否根据返回类型进行区分" tabindex="-1">21、重载（Overload）和重写（Override）的区别。重载的方法能否根据返回类型进行区分？ <a class="header-anchor" href="#_21、重载-overload-和重写-override-的区别。重载的方法能否根据返回类型进行区分" aria-label="Permalink to &quot;21、重载（Overload）和重写（Override）的区别。重载的方法能否根据返回类型进行区分？&quot;">​</a></h3><h3 id="_22、java-中怎么创建-bytebuffer" tabindex="-1">22、Java 中怎么创建 ByteBuffer？ <a class="header-anchor" href="#_22、java-中怎么创建-bytebuffer" aria-label="Permalink to &quot;22、Java 中怎么创建 ByteBuffer？&quot;">​</a></h3><h3 id="_23、json是什么" tabindex="-1">23、Json是什么？ <a class="header-anchor" href="#_23、json是什么" aria-label="Permalink to &quot;23、Json是什么？&quot;">​</a></h3><h3 id="_24、jvm调优命令有哪些" tabindex="-1">24、JVM调优命令有哪些？ <a class="header-anchor" href="#_24、jvm调优命令有哪些" aria-label="Permalink to &quot;24、JVM调优命令有哪些？&quot;">​</a></h3><h3 id="_25、集合的特点" tabindex="-1">25、集合的特点 <a class="header-anchor" href="#_25、集合的特点" aria-label="Permalink to &quot;25、集合的特点&quot;">​</a></h3><h3 id="_26、java内存模型" tabindex="-1">26、Java内存模型 <a class="header-anchor" href="#_26、java内存模型" aria-label="Permalink to &quot;26、Java内存模型&quot;">​</a></h3><h3 id="_27、什么是线程同步和线程互斥-有哪几种实现方式" tabindex="-1">27、什么是线程同步和线程互斥，有哪几种实现方式？ <a class="header-anchor" href="#_27、什么是线程同步和线程互斥-有哪几种实现方式" aria-label="Permalink to &quot;27、什么是线程同步和线程互斥，有哪几种实现方式？&quot;">​</a></h3><h3 id="_28、java-中-throw-和-throws-有什么区别" tabindex="-1">28、Java 中，throw 和 throws 有什么区别 <a class="header-anchor" href="#_28、java-中-throw-和-throws-有什么区别" aria-label="Permalink to &quot;28、Java 中，throw 和 throws 有什么区别&quot;">​</a></h3><h3 id="_29、运行时常量池溢出的原因" tabindex="-1">29、运行时常量池溢出的原因？ <a class="header-anchor" href="#_29、运行时常量池溢出的原因" aria-label="Permalink to &quot;29、运行时常量池溢出的原因？&quot;">​</a></h3><h3 id="_30、假如生产环境cpu占用过高-请谈谈你的分析思路和定位。" tabindex="-1">30、假如生产环境CPU占用过高，请谈谈你的分析思路和定位。 <a class="header-anchor" href="#_30、假如生产环境cpu占用过高-请谈谈你的分析思路和定位。" aria-label="Permalink to &quot;30、假如生产环境CPU占用过高，请谈谈你的分析思路和定位。&quot;">​</a></h3><h3 id="_31、java的双亲委托机制是什么" tabindex="-1">31、Java的双亲委托机制是什么？ <a class="header-anchor" href="#_31、java的双亲委托机制是什么" aria-label="Permalink to &quot;31、Java的双亲委托机制是什么？&quot;">​</a></h3><h3 id="_32、什么是不可变对象-immutable-object-java-中怎么创建一个不可变对象" tabindex="-1">32、什么是不可变对象（immutable object）？Java 中怎么创建一个不可变对象？ <a class="header-anchor" href="#_32、什么是不可变对象-immutable-object-java-中怎么创建一个不可变对象" aria-label="Permalink to &quot;32、什么是不可变对象（immutable object）？Java 中怎么创建一个不可变对象？&quot;">​</a></h3><h3 id="_33、char-型变量中能不能存贮一个中文汉字-为什么" tabindex="-1">33、char 型变量中能不能存贮一个中文汉字，为什么？ <a class="header-anchor" href="#_33、char-型变量中能不能存贮一个中文汉字-为什么" aria-label="Permalink to &quot;33、char 型变量中能不能存贮一个中文汉字，为什么？&quot;">​</a></h3><h3 id="_34、84-map有什么特点" tabindex="-1">34、84.Map有什么特点 <a class="header-anchor" href="#_34、84-map有什么特点" aria-label="Permalink to &quot;34、84.Map有什么特点&quot;">​</a></h3><h3 id="_35、监听器有哪些作用和用法" tabindex="-1">35、监听器有哪些作用和用法？ <a class="header-anchor" href="#_35、监听器有哪些作用和用法" aria-label="Permalink to &quot;35、监听器有哪些作用和用法？&quot;">​</a></h3><h3 id="_36、final-在-java-中有什么作用" tabindex="-1">36、final 在 java 中有什么作用？ <a class="header-anchor" href="#_36、final-在-java-中有什么作用" aria-label="Permalink to &quot;36、final 在 java 中有什么作用？&quot;">​</a></h3><h3 id="_37、minor-gc与full-gc分别在什么时候发生" tabindex="-1">37、Minor GC与Full GC分别在什么时候发生？ <a class="header-anchor" href="#_37、minor-gc与full-gc分别在什么时候发生" aria-label="Permalink to &quot;37、Minor GC与Full GC分别在什么时候发生？&quot;">​</a></h3><h3 id="_38、minor-gc和full-gc-有什么不同呢" tabindex="-1">38、Minor Gc和Full GC 有什么不同呢？ <a class="header-anchor" href="#_38、minor-gc和full-gc-有什么不同呢" aria-label="Permalink to &quot;38、Minor Gc和Full GC 有什么不同呢？&quot;">​</a></h3><h3 id="_39、java-中-怎样才能打印出数组中的重复元素" tabindex="-1">39、Java 中，怎样才能打印出数组中的重复元素？ <a class="header-anchor" href="#_39、java-中-怎样才能打印出数组中的重复元素" aria-label="Permalink to &quot;39、Java 中，怎样才能打印出数组中的重复元素？&quot;">​</a></h3><h3 id="_40、一个java类中包含那些内容" tabindex="-1">40、一个java类中包含那些内容？ <a class="header-anchor" href="#_40、一个java类中包含那些内容" aria-label="Permalink to &quot;40、一个java类中包含那些内容？&quot;">​</a></h3>`,75),o=[p];function t(r,c,i,f,u,y){return s(),n("div",null,o)}const E=a(l,[["render",t]]);export{h as __pageData,E as default};
