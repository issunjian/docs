import{_ as s,o as n,c as a,V as l}from"./chunks/framework.c6d8cbec.js";const e="/docs/assets/maven-01.160ee36b.png",t="/docs/assets/maven-02.4a35e6b3.png",p="/docs/assets/maven-03.ad6f8fde.png",o="/docs/assets/maven-04.be11efe3.png",c="/docs/assets/maven-05.1b5529c4.png",r="/docs/assets/maven-06.21c0fb4b.png",i="/docs/assets/maven-07.58289663.png",g="/docs/assets/maven-08.33f5e6f1.png",d="/docs/assets/maven-09.458e1059.png",f="/docs/assets/maven-10.84f8d858.png",m="/docs/assets/maven-11.17f47a1a.png",v="/docs/assets/maven-12.87dc0e6d.png",y="/docs/assets/maven-13.0403ea04.png",u="/docs/assets/maven-14.91beda8f.png",h="/docs/assets/mvnd-01.b83536a1.png",b="/docs/assets/mvnd-02.f612d287.png",M="/docs/assets/mvnd-03.c61c461b.png",I="/docs/assets/mvnd-04.46021827.png",k="/docs/assets/mvnd-05.b514fccb.png",_="/docs/assets/mvnd-06.4c8f9a05.png",x="/docs/assets/mvnd-07.b715d40c.png",w="/docs/assets/mvnd-08.b26f3324.gif",V=JSON.parse('{"title":"终于把项目构建神器Maven捋清楚了~","description":"","frontmatter":{"category":["Java企业级开发"],"tag":["Maven"],"shortTitle":"Maven"},"headers":[],"relativePath":"backend/tobetter/maven/maven.md","filePath":"backend/tobetter/maven/maven.md"}'),q={name:"backend/tobetter/maven/maven.md"},j=l('<h1 id="终于把项目构建神器maven捋清楚了" tabindex="-1">终于把项目构建神器Maven捋清楚了~ <a class="header-anchor" href="#终于把项目构建神器maven捋清楚了" aria-label="Permalink to &quot;终于把项目构建神器Maven捋清楚了~&quot;">​</a></h1><p>今天来给大家介绍一款项目构建神器——Maven，不仅能帮我们自动化构建，还能够抽象构建过程，提供构建任务实现；它跨平台，对外提供了一致的操作接口，这一切足以使它成为优秀的、流行的构建工具，从此以后，再也不用担心项目搞崩了。</p><p>总结一下 Maven 的优点，主要有以下 3 点：</p><ul><li><strong>依赖管理</strong>：Maven 能帮助我们解决软件包依赖的管理问题，不再需要提交大量的 jar 包、引入第三方库；</li><li><strong>规范目录结构</strong>：Maven 标准的目录结构有助于项目构建的标准化，通过配置 profile 还可以根据不同的环境（开发环境、测试环境，生产环境）读取不同的配置文件；</li><li><strong>方便集成</strong>：能够集成在 IDE 中更方便使用。</li></ul><h3 id="一、安装-maven" tabindex="-1">一、安装 Maven <a class="header-anchor" href="#一、安装-maven" aria-label="Permalink to &quot;一、安装 Maven&quot;">​</a></h3><p>由于 JDK 是 Maven 安装的前置条件，所以请使用 <code>java -version</code> 确认是否已经安装了 JDK：</p><img src="'+e+'"><p>我本人使用的是 macOS，所以可以有两种安装方式，<strong>一种官网下载，手动安装；一种直接使用 brew 一键安装</strong>。</p><p>我们先介绍<em>官网下载，手动安装</em>，该方式同样适用于 Windows 系统，差别可参照 Maven 官网安装教程：</p><blockquote><p><a href="http://maven.apache.org/install.html" target="_blank" rel="noreferrer">http://maven.apache.org/install.html</a></p></blockquote><p>1）<strong>一种官网下载，手动安装</strong></p><p>第一步，去官网下载 Maven 安装包：</p><blockquote><p>官网地址：<a href="http://maven.apache.org/download.cgi" target="_blank" rel="noreferrer">http://maven.apache.org/download.cgi</a></p></blockquote><img src="'+t+'"><p>很多初学者在官网下载的时候不知道选哪一个，这里做一下简单的介绍。</p><ul><li>bin（binary）代表由 Java 源文件编译后的二进制 class 文件，src（source）代表Java 源文件。</li><li>一般情况下，选择 bin 文件进行安装就 OK 了；如果你想自己编译，可选 src 版本。</li><li>tar.gz 压缩格式适用于 Unix 操作系统，zip 适用于 Windows 操作系统；但不是绝对的。</li></ul><p>第二步，解压下载的安装包，复制该路径：</p><img src="'+p+'"><ul><li>bin 目录：该包含了 Maven 运行的所有脚本，用来配置 Java 命令，准备执行环境，然后执行 Java 命令。</li><li>boot 目录：该目录只包含了一个 plexus-classworlds-xxx-jar 文件，该文件是一个类加载器框架，相当于默认的 Java 类加载器，提供了更加丰富的语法以便配置，Maven 使用该加载器加载自己的类库。</li><li><strong>conf 目录</strong>：该目录包含了一个非常重要的文件 settings.xml。可以直接修改该文件，用来全局定制 Maven 的行为；也可以复制该文件到 <code>~/.m2/</code> 目录下（~表示用户目录），修改该文件可以在用户范围内定制 Maven 的行为。</li><li>lib 目录：该目录包含了Maven运行时所需要的 Java 类库，包括Maven 依赖的第三方类库，比如 slf4j-api.jar。</li></ul><img src="'+o+'"><p>第三步，配置环境变量</p><p>打开终端，输入 <code>vim ~/.bash_profile</code> 命令打开 bash_profile 文件：</p><img src="'+c+'"><p>bash_profile 文件用于配置环境变量和启动程序，详细介绍可参照：</p><blockquote><p><a href="https://www.cnblogs.com/kevingrace/p/8072860.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/kevingrace/p/8072860.html</a></p></blockquote><p>在文件中添加设置环境变量的命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">export M2_HOME=/Users/maweiqing/cmower/save/apache-maven-3.8.3</span></span>\n<span class="line"><span style="color:#f6f6f4;">export PATH=${PATH}:${M2_HOME}/bin</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export M2_HOME=/Users/maweiqing/cmower/save/apache-maven-3.8.3</span></span>\n<span class="line"><span style="color:#24292e;">export PATH=${PATH}:${M2_HOME}/bin</span></span></code></pre></div><img src="'+r+'"><p>保存后退出，可以执行 <code>source ~/.bash_profile</code> 使配置生效：</p><img src="'+i+'"><p>第四步，查看配置是否生效</p><p>输入 <code>mvn -v</code> 命令，如果输出以下内容，表示配置成功：</p><img src="'+g+`"><p>如未生效，可再开一个终端窗口尝试 <code>mvn -v</code> 命令。</p><p><strong>2）brew 一键安装</strong></p><p>第一步，使用 <code>brew install maven</code> 命令一键安装，并自动配置环境变量</p><p>第二步，使用 <code>mvn -v</code> 命令查看版本</p><h3 id="二、maven-配置文件大盘点" tabindex="-1">二、Maven 配置文件大盘点 <a class="header-anchor" href="#二、maven-配置文件大盘点" aria-label="Permalink to &quot;二、Maven 配置文件大盘点&quot;">​</a></h3><p>Maven 是基于 POM（Project Object Model） 进行的，项目的所有配置都会放在 pom.xml 文件中，包括项目的类型、名字，依赖关系，插件定制等等。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span style="color:#f6f6f4;">    xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;groupId&gt;com.itwanger&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;artifactId&gt;MavenDemo&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;name&gt;MavenDemo&lt;/name&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/project&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span style="color:#24292e;">    xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;com.itwanger&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;MavenDemo&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;name&gt;MavenDemo&lt;/name&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/project&gt;</span></span></code></pre></div><ul><li>第一行是XML头，指定了该xml文档的版本和编码方式。</li><li>project 是根元素，声明了一些POM相关的命名空间及xsd元素。</li><li>modelVersion指定了当前POM的版本，对于Maven 3来说，值只能是4.0.0。</li><li>groupId定义了项目属于哪个组织，通常是组织域名的倒序，比如说我的域名是 itwanger.com，所以groupId就是 com.itwanger。</li><li>artifactId定义了项目在组织中的唯一ID。</li><li>version指定了项目当前的版本，SNAPSHOT意为快照，说明该项目还处于开发中。</li><li>name 声明了一个对于用户更为友好的项目名称。</li></ul><p>groupId、artifactId和version这三个元素定义了一个项目的基本坐标，在Maven的世界里，任何的jar和pom都是以基于这些坐标进行区分的。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;project&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">...</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;dependencies&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;groupId&gt;实际项目&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">　　　　 &lt;artifactId&gt;模块&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">　　　　 &lt;version&gt;版本&lt;/version&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">　　　　 &lt;type&gt;依赖类型&lt;/type&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">　　　　 &lt;scope&gt;依赖范围&lt;/scope&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">　　　　 &lt;optional&gt;依赖是否可选&lt;/optional&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">　　　　 &lt;!—主要用于排除传递性依赖--&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">　　　　 &lt;exclusions&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">　　　　     &lt;exclusion&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">　　　　　　　    &lt;groupId&gt;…&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">　　　　　　　　　 &lt;artifactId&gt;…&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">　　　　　　　&lt;/exclusion&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">　　　　 &lt;/exclusions&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">　　&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;dependencies&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">...</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/project&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;project&gt;</span></span>
<span class="line"><span style="color:#24292e;">...</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependencies&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;groupId&gt;实际项目&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">　　　　 &lt;artifactId&gt;模块&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">　　　　 &lt;version&gt;版本&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">　　　　 &lt;type&gt;依赖类型&lt;/type&gt;</span></span>
<span class="line"><span style="color:#24292e;">　　　　 &lt;scope&gt;依赖范围&lt;/scope&gt;</span></span>
<span class="line"><span style="color:#24292e;">　　　　 &lt;optional&gt;依赖是否可选&lt;/optional&gt;</span></span>
<span class="line"><span style="color:#24292e;">　　　　 &lt;!—主要用于排除传递性依赖--&gt;</span></span>
<span class="line"><span style="color:#24292e;">　　　　 &lt;exclusions&gt;</span></span>
<span class="line"><span style="color:#24292e;">　　　　     &lt;exclusion&gt;</span></span>
<span class="line"><span style="color:#24292e;">　　　　　　　    &lt;groupId&gt;…&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">　　　　　　　　　 &lt;artifactId&gt;…&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">　　　　　　　&lt;/exclusion&gt;</span></span>
<span class="line"><span style="color:#24292e;">　　　　 &lt;/exclusions&gt;</span></span>
<span class="line"><span style="color:#24292e;">　　&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependencies&gt;</span></span>
<span class="line"><span style="color:#24292e;">...</span></span>
<span class="line"><span style="color:#24292e;">&lt;/project&gt;</span></span></code></pre></div><ul><li>dependencies 可以包含一个或者多个dependency元素，以声明一个或者多个项目依赖。</li><li>grounpId、artifactId和version 组成了依赖的基本坐标。</li><li>type 指定了依赖的类型，默认为 jar。</li><li>scope 指定了依赖的范围（详情见下面<strong>依赖范围</strong>部分）。</li><li>optional 标记了依赖是否是可选的（详情见下面<strong>依赖可选</strong>部分）。</li><li>exclusions 用来排除传递性依赖（详情见下面<strong>依赖排除</strong>部分）。</li></ul><p><strong>依赖范围</strong>有以下几种：</p><ul><li>compile，默认的依赖范围，表示依赖需要参与当前项目的编译，后续的测试、运行周期也参与其中，是比较强的依赖。</li><li>test，表示依赖仅仅参与测试相关的工作，包括测试代码的编译和运行。比较典型的如 junit。</li><li>runntime，表示依赖无需参与到项目的编译，不过后期的测试和运行需要其参与其中。</li><li>provided，表示打包的时候可以不用包进去，别的容器会提供。和 compile 相当，但是在打包阶段做了排除的动作。</li><li>system，从参与程度上来说，和 provided 类似，但不通过 Maven 仓库解析，可能会造成构建的不可移植，要谨慎使用。</li></ul><img src="`+d+'"><p>关于<strong>传递性依赖</strong>：</p><p>比如一个account-email项目为例，account-email有一个compile范围的spring-code依赖，spring-code有一个compile范围的commons-logging依赖，那么commons-logging就会成为account-email的compile的范围依赖，commons-logging是account-email的一个传递性依赖：</p><img src="'+f+'"><p>有了传递性依赖机制，在使用Spring Framework的时候就不用去考虑它依赖了什么，也不用担心引入多余的依赖。Maven会解析各个直接依赖的POM，将那些必要的间接依赖，以传递性依赖的形式引入到当前的项目中。</p><p>关于<strong>依赖可选</strong>：</p><img src="'+m+`"><p>项目中A依赖B，B依赖于X和Y，如果所有这三个的范围都是compile的话，那么X和Y就是A的compile范围的传递性依赖，但是如果我想X、Y不作为A的传递性依赖，不给它用的话，可以按照下面的方式配置可选依赖：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;project&gt;  </span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;  </span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;groupId&gt;com.itwanger&lt;/groupId&gt;  </span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;artifactId&gt;project-b&lt;/artifactId&gt;  </span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;version&gt;1.0.0&lt;/version&gt;  </span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;dependencies&gt;  </span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;dependency&gt;  </span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;groupId&gt;mysql&lt;/groupId&gt;  </span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;  </span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;version&gt;5.1.10&lt;/version&gt;  </span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;optional&gt;true&lt;/optional&gt;  </span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;/dependency&gt;  </span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;dependency&gt;  </span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;groupId&gt;postgresql&lt;/groupId&gt;  </span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;artifactId&gt;postgresql&lt;/groupId&gt;  </span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;version&gt;8.4-701.jdbc3&lt;/version&gt;  </span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;optional&gt;true&lt;/optional&gt;  </span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;/dependency&gt;  </span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;/dependencies&gt;  </span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/project&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;project&gt;  </span></span>
<span class="line"><span style="color:#24292e;">    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;  </span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;com.itwanger&lt;/groupId&gt;  </span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;project-b&lt;/artifactId&gt;  </span></span>
<span class="line"><span style="color:#24292e;">    &lt;version&gt;1.0.0&lt;/version&gt;  </span></span>
<span class="line"><span style="color:#24292e;">    &lt;dependencies&gt;  </span></span>
<span class="line"><span style="color:#24292e;">        &lt;dependency&gt;  </span></span>
<span class="line"><span style="color:#24292e;">            &lt;groupId&gt;mysql&lt;/groupId&gt;  </span></span>
<span class="line"><span style="color:#24292e;">            &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;  </span></span>
<span class="line"><span style="color:#24292e;">            &lt;version&gt;5.1.10&lt;/version&gt;  </span></span>
<span class="line"><span style="color:#24292e;">            &lt;optional&gt;true&lt;/optional&gt;  </span></span>
<span class="line"><span style="color:#24292e;">        &lt;/dependency&gt;  </span></span>
<span class="line"><span style="color:#24292e;">        &lt;dependency&gt;  </span></span>
<span class="line"><span style="color:#24292e;">            &lt;groupId&gt;postgresql&lt;/groupId&gt;  </span></span>
<span class="line"><span style="color:#24292e;">            &lt;artifactId&gt;postgresql&lt;/groupId&gt;  </span></span>
<span class="line"><span style="color:#24292e;">            &lt;version&gt;8.4-701.jdbc3&lt;/version&gt;  </span></span>
<span class="line"><span style="color:#24292e;">            &lt;optional&gt;true&lt;/optional&gt;  </span></span>
<span class="line"><span style="color:#24292e;">        &lt;/dependency&gt;  </span></span>
<span class="line"><span style="color:#24292e;">    &lt;/dependencies&gt;  </span></span>
<span class="line"><span style="color:#24292e;">&lt;/project&gt;</span></span></code></pre></div><p>关于<strong>依赖排除</strong>：</p><p>有时候你引入的依赖中包含你不想要的依赖包，你想引入自己想要的，这时候就要用到排除依赖了，比如下图中spring-boot-starter-web自带了logback这个日志包，我想引入log4j2的，所以我先排除掉logback的依赖包，再引入想要的包就行了。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">	&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">	&lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">	&lt;version&gt;2.5.6&lt;/version&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">	&lt;exclusions&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">		&lt;exclusion&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">			&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">			&lt;artifactId&gt;spring-boot-starter-logging&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">		&lt;/exclusion&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">	&lt;/exclusions&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;!-- 使用 log4j2 --&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">	&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">	&lt;artifactId&gt;spring-boot-starter-log4j2&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">	&lt;version&gt;2.5.6&lt;/version&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;version&gt;2.5.6&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;exclusions&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;exclusion&gt;</span></span>
<span class="line"><span style="color:#24292e;">			&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">			&lt;artifactId&gt;spring-boot-starter-logging&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;/exclusion&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/exclusions&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!-- 使用 log4j2 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;artifactId&gt;spring-boot-starter-log4j2&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;version&gt;2.5.6&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>声明exclustion的时候只需要groupId和artifactId，不需要version元素，因为groupId和artifactId就能唯一定位某个依赖。</p><h3 id="三、maven-仓库" tabindex="-1">三、Maven 仓库 <a class="header-anchor" href="#三、maven-仓库" aria-label="Permalink to &quot;三、Maven 仓库&quot;">​</a></h3><p>在 Maven 的术语中，仓库是一个位置（place），项目中依赖的第三方库以及插件（可统称为构件），都放在这里。所有的 Maven 项目都可以共享这个仓库，只需要根据依赖的坐标，就可以在需要的时候找到仓库中的依赖，并使用它们。</p><p>举个例子，项目中使用了分页插件的依赖：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">      &lt;groupId&gt;com.github.pagehelper&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">      &lt;artifactId&gt;pagehelper-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">      &lt;version&gt;1.1.0&lt;/version&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;groupId&gt;com.github.pagehelper&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;artifactId&gt;pagehelper-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;version&gt;1.1.0&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>那么它对应的仓库路径是这样的：</p><img src="`+v+'"><p>仓库可以以下几种：</p><img src="'+y+`"><p><strong>1）本地仓库</strong></p><p>当Maven在执行编译或测试时，如果需要使用依赖文件，它总是基于坐标使用本地仓库的依赖文件。</p><p>默认情况下，不管是Window还是macOS，或者是 Linux，每个用户都会在自己的用户目录下有一个路径名为 <code>.m2/repository/</code> 的仓库目录。</p><p>如果你想自定义本地仓库目录地址，可以编辑文件<code>~/.m2/settings.xml</code>，设置localRepository元素的值为你想要的仓库地址，例如:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;localRepository&gt;/path/to/local/repo&lt;/localRepository&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;localRepository&gt;/path/to/local/repo&lt;/localRepository&gt;</span></span></code></pre></div><p>如果找不到 <code>~/.m2/settings.xml</code> 的话，可以到 Maven 的安装目录（前文提到的 <strong>conf 目录</strong>）下去拷贝。</p><p><strong>2）远程仓库</strong></p><p>默认情况下，本地仓库是被注释掉的，也就是空的，那么就必须得给 Maven 配置一个可用的远程仓库，否则 Maven 在 build（构建）的时候就无法去下载依赖。</p><p><strong>中央仓库</strong>就是这样一个可用的远程仓库，里面包含了这个世界上绝大多数流行的开源 Java 类库，以及源码、作者信息、许可证信息等等。</p><p>不过，默认的中央仓库访问速度比较慢，通常我们会选择使用阿里的 Maven 远程仓库。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;repositories&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">	&lt;repository&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">		&lt;id&gt;ali-maven&lt;/id&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">		&lt;url&gt;http://maven.aliyun.com/nexus/content/groups/public&lt;/url&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">		&lt;releases&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">			&lt;enabled&gt;true&lt;/enabled&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">		&lt;/releases&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">		&lt;snapshots&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">			&lt;enabled&gt;true&lt;/enabled&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">			&lt;updatePolicy&gt;always&lt;/updatePolicy&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">			&lt;checksumPolicy&gt;fail&lt;/checksumPolicy&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">		&lt;/snapshots&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">	&lt;/repository&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/repositories&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;repositories&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;repository&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;id&gt;ali-maven&lt;/id&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;url&gt;http://maven.aliyun.com/nexus/content/groups/public&lt;/url&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;releases&gt;</span></span>
<span class="line"><span style="color:#24292e;">			&lt;enabled&gt;true&lt;/enabled&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;/releases&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;snapshots&gt;</span></span>
<span class="line"><span style="color:#24292e;">			&lt;enabled&gt;true&lt;/enabled&gt;</span></span>
<span class="line"><span style="color:#24292e;">			&lt;updatePolicy&gt;always&lt;/updatePolicy&gt;</span></span>
<span class="line"><span style="color:#24292e;">			&lt;checksumPolicy&gt;fail&lt;/checksumPolicy&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;/snapshots&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/repository&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/repositories&gt;</span></span></code></pre></div><ul><li>repositories 可以包含一个或者多个repository元素，以声明一个或者多个仓库。</li><li>id，仓库声明的唯一id，需要注意的是，Maven自带的中央仓库使用的id为central，如果其他仓库也使用了该id，就会覆盖中央仓库的配置。</li><li>url，指向了仓库的地址。</li><li>releases和snapshots，用来控制Maven对于发布版构件和快照版构件的下载权限。</li><li>enabled子元素为 true 时表示可以从仓库下载发布版构件和快照版构件。</li><li>updatePolicy 子元素用来配置Maven从远处仓库检查更新的频率。 <ul><li>默认值是daily，表示每天检查一次；</li><li>可选值 never 表示从不检查；</li><li>可选值always表示每次构建时检查更新；</li><li>可选值interval表示每隔X分钟检查一次更新（X为任意整数）。</li></ul></li><li>checksumPolicy 子元素用来配置Maven检查校验的策略。在下载构件的时候，Maven会去校验，如果校验失败， <ul><li>当checksumPolicy的值为默认的warn时，Maven会在执行构建时输出警告信息；</li><li>值为fail 时，Maven遇到校验错误就让构建失败；</li><li>值为ignore时，Maven将完全忽略校验。</li></ul></li></ul><p>搭建远程仓库的另外一个目的是<strong>方便部署我们自己的项目构件至远程仓库供其他团队成员使用</strong>，这时候需要配置distributionManagement元素：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;distributionManagement&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;repository&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;id&gt;releases&lt;/id&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;name&gt;public&lt;/name&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;url&gt;http://59.50.95.66:8081/nexus/content/repositories/releases&lt;/url&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;/repository&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;snapshotRepository&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;id&gt;snapshots&lt;/id&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;name&gt;Snapshots&lt;/name&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">            &lt;url&gt;http://59.50.95.66:8081/nexus/content/repositories/snapshots&lt;/url&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">        &lt;/snapshotRepository&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;/distributionManagement&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;distributionManagement&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;repository&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;id&gt;releases&lt;/id&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;name&gt;public&lt;/name&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;url&gt;http://59.50.95.66:8081/nexus/content/repositories/releases&lt;/url&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/repository&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;snapshotRepository&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;id&gt;snapshots&lt;/id&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;name&gt;Snapshots&lt;/name&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;url&gt;http://59.50.95.66:8081/nexus/content/repositories/snapshots&lt;/url&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/snapshotRepository&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/distributionManagement&gt;</span></span></code></pre></div><ul><li>repository表示发布版本构件的仓库。</li><li>snapshotRepository 表示快照版本（开发测试用）的仓库。</li><li>这两个元素都需要配置id、name和url，id为远程仓库的唯一标识，name是为了方便阅读，url表示仓库的地址。</li></ul><p>配置好了以后运行命令 <code>mvn clean deploy</code>，Maven就会将项目部署到对应的远程仓库。项目是快照还是发布版本通过之前远程仓库配置项中的 releases 和 snapshots 来区分。</p><p><strong>3）仓库镜像</strong></p><p>如果仓库X可以提供仓库Y存储的所有内容，那么就可以认为X是Y的一个镜像。通常我们会在 settings.xml 文件中添加阿里云镜像：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">&lt;mirrors&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;mirror&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">      &lt;id&gt;alimaven&lt;/id&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">      &lt;name&gt;aliyun maven&lt;/name&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">      &lt;url&gt;http://maven.aliyun.com/nexus/content/groups/public/&lt;/url&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">      &lt;mirrorOf&gt;central&lt;/mirrorOf&gt;        </span></span>
<span class="line"><span style="color:#f6f6f4;">    &lt;/mirror&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">  &lt;/mirrors&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;mirrors&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;mirror&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;id&gt;alimaven&lt;/id&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;name&gt;aliyun maven&lt;/name&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;url&gt;http://maven.aliyun.com/nexus/content/groups/public/&lt;/url&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;mirrorOf&gt;central&lt;/mirrorOf&gt;        </span></span>
<span class="line"><span style="color:#24292e;">    &lt;/mirror&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/mirrors&gt;</span></span></code></pre></div><p>通过 <code>https://developer.aliyun.com/mvn/search</code> 可以查看阿里云镜像 Maven 的地址</p><p>其中 mirrorOf 元素的可选项有：</p><ul><li><code>&lt;mirrorOf&gt;*&lt;/mirrorOf&gt;</code>，匹配所有远程仓库。</li><li><code>&lt;mirrorOf&gt;external:*&lt;/mirrorOf&gt;</code>，匹配所有远程仓库，使用localhost的除外，使用 <code>file://</code> 协议的除外。也就是说，匹配所有不在本机上的远程仓库。</li><li><code>&lt;mirrorOf&gt;repo1,repo2&lt;/mirrorOf&gt;</code>，匹配仓库repo1和repo2，使用逗号分隔多个远程仓库。</li><li><code>&lt;mirrorOf&gt;*,!repo1&lt;mirrorOf&gt;</code>，匹配所有远程仓库，repo1除外，使用感叹号将仓库从匹配中排除。</li></ul><p>上例中 <code>&lt;mirrorOf&gt;central&lt;/mirrorOf&gt;</code> 表示任何对于中央仓库的请求都会转至该镜像。</p><p><strong>4）私服</strong></p><p>私服是一种特殊的远程仓库，它架设在局域网内中，私服代理广域网上的远程仓库，供局域网内的Maven用户使用。当Maven需要下载构件的时候，先从私服请求，如果私服上不存在该构件，则从外部的远程仓库下载，并缓存到私服上。</p><p>私服有以下好处：</p><ul><li>节省外网访问速度</li><li>加速Maven构建</li><li>提高稳定性，增强控制</li><li>降低中央仓库的负荷</li></ul><p><strong>5）仓库服务搜索</strong></p><p>推荐 2 个提供仓库搜索服务的网站：</p><blockquote><ul><li>Sonatype Nexus：<a href="https://repository.sonatype.org/" target="_blank" rel="noreferrer">https://repository.sonatype.org/</a></li><li>MVNrepository：<a href="http://mvnrepository.com/" target="_blank" rel="noreferrer">http://mvnrepository.com/</a></li></ul></blockquote><h3 id="四、使用-maven" tabindex="-1">四、使用 Maven <a class="header-anchor" href="#四、使用-maven" aria-label="Permalink to &quot;四、使用 Maven&quot;">​</a></h3><p><strong>1）Maven 常见命令</strong></p><ul><li><code>mvn clean</code>：表示运行清理操作（会默认把target文件夹中的数据清理）。</li><li><code>mvn clean compile</code>：表示先运行清理之后运行编译，会将代码编译到target文件夹中。</li><li><code>mvn clean test</code>：运行清理和测试。</li><li><code>mvn clean package</code>：运行清理和打包。</li><li><code>mvn clean install</code>：运行清理和安装，会将打好的包安装到本地仓库中，以便其他的项目可以调用。</li><li><code>mvn clean deploy</code>：运行清理和发布（发布到私服上面）。</li><li><code>mvn help:effective-settings</code>：查看 Maven 的有效配置信息。</li></ul><p><strong>2）Maven 常用 POM 属性</strong></p><ul><li><code>\${project.build.sourceDirectory}</code>：项目的主源码目录，默认为<code>src/main/java/</code></li><li><code>\${project.build.testSourceDirectory}</code>：项目的测试源码目录，默认为 <code>/src/test/java/</code></li><li><code>\${project.build.directory}</code>：项目构建输出目录，默认为 <code>target/</code></li><li><code>\${project.build.outputDirectory}</code>：项目主代码编译输出目录，默认为 <code>target/classes/</code></li><li><code>\${project.build.testOutputDirectory}</code>：项目测试代码编译输出目录，默认为 <code>target/testclasses/</code></li><li><code>\${project.groupId}</code>：项目的 groupId.</li><li><code>\${project.artifactId}</code>：项目的 artifactId.</li><li><code>\${project.version}</code>：项目的 version，于 <code>\${version}</code> 等价</li><li><code>\${project.build.finalName}</code>：项目打包输出文件的名称，默认为<code>\${project.artifactId}\${project.version}</code></li></ul><p><strong>3）Intellij IDEA 配置 Maven</strong></p><img src="`+u+'"><p><strong>4）Maven 常用插件</strong></p><p>插件是Maven的核心功能，它允许在多个项目中重用通用的构建逻辑。插件可用于：</p><ul><li>创建jar文件，</li><li>创建war文件，</li><li>编译代码，</li><li>单元测试代码，</li><li>创建项目文档等。</li></ul><p>常用的插件有：</p><ul><li>maven-antrun-plugin，让用户在 Maven 项目中运行 Ant 任务。用户可以直接在该插件的配置以 Ant 的方式编写 Target，然后交给该插件的 run 目标去执行。在一些由 Ant 往 Maven 迁移的项目中，该插件尤其有用。此外当你发现需要编写一些自定义程度很高的任务，同时又觉得 Maven 不够灵活时，也可以以 Ant 的方式实现之。maven-antrun-plugin 的 run 目标通常与生命周期绑定运行。</li><li>maven-assembly-plugin，制作项目分发包，该分发包可能包含了项目的可执行文件、源代码、readme、平台脚本等等。maven-assembly-plugin 支持各种主流的格式如 zip、tar.gz、jar 和 war 等，具体打包哪些文件是高度可控的，例如用户可以按文件级别的粒度、文件集级别的粒度、模块级别的粒度、以及依赖级别的粒度控制打包，此外，包含和排除配置也是支持的。maven-assembly-plugin 要求用户使用一个名为assembly.xml的元数据文件来表述打包，它的 single 目标可以直接在命令行调用，也可以被绑定至生命周期。</li><li>maven-help-plugin，一个小巧的辅助工具，最简单的help:system可以打印所有可用的环境变量和 Java 系统属性。help:effective-pom和help:effective-settings最为有用，它们分别打印项目的有效 POM 和有效 settings，有效 POM 是指合并了所有父 POM（包括 Super POM）后的 XML，当你不确定 POM 的某些信息从何而来时，就可以查看有效 POM。</li><li>maven-javadoc-plugin，javadoc 插件，将源码的 javadoc 发布出去。</li></ul><h3 id="五、守护版-maven-更快" tabindex="-1">五、守护版 Maven，更快！ <a class="header-anchor" href="#五、守护版-maven-更快" aria-label="Permalink to &quot;五、守护版 Maven，更快！&quot;">​</a></h3><p>在 GitHub 上闲逛的时候，发现了一个新的项目：<strong>maven-mvnd</strong>，持续霸占 GitHub trending 榜单好几天了。</p><img src="'+h+'"><p>maven-mvnd，可以读作 Maven Daemon，译作 Maven 守护版，旨在为 Maven 提供更快的构建速度，灵感借鉴了 Gradle 和 Takari（Maven 生命周期优化器）。</p><blockquote><p><a href="https://github.com/apache/maven-mvnd" target="_blank" rel="noreferrer">https://github.com/apache/maven-mvnd</a></p></blockquote><p>Maven 和 Gradle 可以说是项目构建工具中的绝代双骄，我自己的观点是：<strong>Maven 不比 Gradle 好，Gradle 也不比 Maven 好</strong>。</p><img src="'+b+`"><p>瞧我这该死的观点，足够的圆滑。</p><p>Maven 的优点是稳定可靠，在绝大多数的项目上工作良好，社区生态很完善，几乎所有的 Java 开发者都在用。Maven 的缺点是，对于大一点的项目来说，构建太慢了。</p><p>Gradle 的优点是足够的灵活，构建速度也会更快一点，因为使用了后台进程和缓存机制。Gradle 的缺点是版本迭代速度太快，社区跟不上，对于初学者来说，学习曲线比较陡峭。</p><p>mvnd 并不是 Maven 的重构版，<strong>等于是 Maven ∩ (Gradle &amp; Takari) 部分优点的一个交集</strong>。</p><p>mvnd 使用了以下架构方式：</p><ul><li>内部嵌入了 Maven，所以不需要单独安装 Maven。</li><li>使用守护进程进行构建，守护进程可以为多个 mvnd 客户端的连续请求提供服务。</li><li>使用了内置的 <a href="https://www.graalvm.org/reference-manual/native-image/" target="_blank" rel="noreferrer">GraalVM</a> 虚拟机，和传统的 Java 虚拟机相比，它的启动速度更快，使用内存更少，内部的 JIT 编译器在编译时花费的时间也更少。</li><li>如果已有的守护进程都在工作中，则可以新建多个守护进程来支撑新的构建请求。</li></ul><p>这种架构方式使得 mvnd 的性能优势得到了进一步提升。</p><p>好，我们来简单尝试下。</p><p>mvnd 像 Maven 一样，可以跨平台，支持 Windows、macOS和 Linux。自动化安装的命令也非常简单，如下所示：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;"># Windows</span></span>
<span class="line"><span style="color:#f6f6f4;">choco install mvndaemon </span></span>
<span class="line"><span style="color:#f6f6f4;"># Linux</span></span>
<span class="line"><span style="color:#f6f6f4;">sdk install mvnd</span></span>
<span class="line"><span style="color:#f6f6f4;"># macOS</span></span>
<span class="line"><span style="color:#f6f6f4;">brew install mvndaemon/homebrew-mvnd/mvnd</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># Windows</span></span>
<span class="line"><span style="color:#24292e;">choco install mvndaemon </span></span>
<span class="line"><span style="color:#24292e;"># Linux</span></span>
<span class="line"><span style="color:#24292e;">sdk install mvnd</span></span>
<span class="line"><span style="color:#24292e;"># macOS</span></span>
<span class="line"><span style="color:#24292e;">brew install mvndaemon/homebrew-mvnd/mvnd</span></span></code></pre></div><p>为了方便演示，我这里采用手动安装的方式，速度也会更快一点。</p><p>通过下面的网址下载 mvnd 的 release 版本：</p><blockquote><p><a href="https://github.com/apache/maven-mvnd/releases" target="_blank" rel="noreferrer">https://github.com/apache/maven-mvnd/releases</a></p></blockquote><img src="`+M+'"><p>下载完成后解压，然后把 bin 目录添加到 PATH 路径下。</p><p>在终端执行 <code>mvnd -v</code> 就可以查看到 mvnd 的配置信息了。</p><img src="'+I+'"><p>如果出现类似下面这样的错误，未找到 JAVA_HOME，可以按照提示在对应的文件中追加 java.home 属性，也就是 JDK 的安装路径。</p><img src="'+k+'"><p>刚好之前搭建了一个Spring Boot 项目，我们可以拿 Maven 和 mvnd 来对比一下构建速度。</p><p>先执行 <code>mvn clean package</code> 命令，一共花费的时间是 5.318 秒。</p><img src="'+_+'"><p>再执行 <code>mvnd clean package</code> 命令，一共花费的时间是 3.225 秒。</p><img src="'+x+'"><p>反复多测试几次，发现 mvnd 确实比 Maven 要快上许多！Maven 维持在 5 秒多，mvnd 维持在 3 秒左右。</p><p>当然了，我本地这个 Spring Boot 项目本身非常简单，如果是构建时间更长一点的项目，mvnd 的优势会更大。</p><p>感受一下 mvnd 在一个 24 核电脑上执行的样子吧，简直就是效率神器！</p><img src="'+w+'"><hr><p>参考链接：</p><blockquote><ul><li>嘟嘟MD：<a href="http://tengj.top/2018/01/01/maven/" target="_blank" rel="noreferrer">http://tengj.top/2018/01/01/maven/</a></li><li>杭建：《Java 工程师修炼之道》</li><li>许晓斌：<a href="https://www.infoq.cn/article/2011/04/xxb-maven-7-plugin" target="_blank" rel="noreferrer">https://www.infoq.cn/article/2011/04/xxb-maven-7-plugin</a></li></ul></blockquote><p>希望大家能在阅读完本篇文章后对 Maven 有一个初步的了解和掌握，并将这些技能在项目的实战中加以练习，以达到项目工程化的要求。</p>',148),O=[j];function P(S,C,A,T,$,D){return n(),a("div",null,O)}const H=s(q,[["render",P]]);export{V as __pageData,H as default};
