import{_ as s,o as a,c as n,V as l}from"./chunks/framework.c6d8cbec.js";const u=JSON.parse('{"title":"携程面试官：大文件上传时如何做到秒传？","description":"携程面试官：大文件上传时如何做到秒传？","frontmatter":{"title":"携程面试官：大文件上传时如何做到秒传？","shortTitle":"如何秒传大文件？","description":"携程面试官：大文件上传时如何做到秒传？","category":["求职面试"],"tag":["面试题&八股文"],"head":[["meta",{"name":"keywords","content":"Java,java,面试题,八股文,大文件,秒传"}]]},"headers":[],"relativePath":"interview/interview/mianshiguan-bigfile-miaochuan.md","filePath":"interview/interview/mianshiguan-bigfile-miaochuan.md"}'),e={name:"interview/interview/mianshiguan-bigfile-miaochuan.md"},p=l(`<p>大家好，我是二哥呀~</p><p>文件上传是一个老生常谈的话题了，在文件相对比较小的情况下，可以直接把文件转化为字节流上传到服务器，但在文件比较大的情况下，用这种方式进行上传，可不是一个好的办法，毕竟很少有用户能忍受，尤其是当文件上传到一半中断后，继续上传却只能重头开始上传，让用户的体验尤其不爽。</p><p>那有没有比较好的上传体验呢，答案有的，就是下边要介绍的几种上传方式。</p><h2 id="秒传" tabindex="-1">秒传 <a class="header-anchor" href="#秒传" aria-label="Permalink to &quot;秒传&quot;">​</a></h2><h3 id="_1、什么是秒传" tabindex="-1">1、什么是秒传 <a class="header-anchor" href="#_1、什么是秒传" aria-label="Permalink to &quot;1、什么是秒传&quot;">​</a></h3><p>通俗的说，你把要上传的东西上传，服务器会先做 MD5 校验，如果服务器上有同样的东西，它就直接给你个新地址，其实你下载的都是服务器上的同一个文件，想要不秒传，其实只要让 MD5 改变，就是对文件本身做一下修改（改名字不行），例如一个文本文件，你多加几个字，MD5 就变了，就不会秒传了.</p><h3 id="_2、本文实现的秒传核心逻辑" tabindex="-1">2、本文实现的秒传核心逻辑 <a class="header-anchor" href="#_2、本文实现的秒传核心逻辑" aria-label="Permalink to &quot;2、本文实现的秒传核心逻辑&quot;">​</a></h3><p>a、利用 redis 的 set 方法存放文件上传状态，其中 key 为文件上传的 md5，value 为是否上传完成的标志位；</p><p>b、当标志位为 true 表示上传已经完成，此时如果有相同文件上传，则进入秒传逻辑。如果标志位为 false，则说明还没上传完成，此时需要再调用 set 方法，保存块号文件记录的路径，其中 key 为上传文件的 md5 + 一个固定前缀，value 为块号文件的记录路径</p><h2 id="分片上传" tabindex="-1">分片上传 <a class="header-anchor" href="#分片上传" aria-label="Permalink to &quot;分片上传&quot;">​</a></h2><h3 id="_1、什么是分片上传" tabindex="-1">1、什么是分片上传 <a class="header-anchor" href="#_1、什么是分片上传" aria-label="Permalink to &quot;1、什么是分片上传&quot;">​</a></h3><p>分片上传，就是将所要上传的文件，按照一定的大小，将整个文件分隔成多个数据块（我们称之为 Part）来进行上传，上传完之后再由服务端对所有上传的文件进行汇总整合成原始的文件。</p><h3 id="_2、分片上传的场景" tabindex="-1">2、分片上传的场景 <a class="header-anchor" href="#_2、分片上传的场景" aria-label="Permalink to &quot;2、分片上传的场景&quot;">​</a></h3><p>1.大文件上传</p><p>2.网络环境环境不好，存在需要重传风险的场景</p><h2 id="断点续传" tabindex="-1">断点续传 <a class="header-anchor" href="#断点续传" aria-label="Permalink to &quot;断点续传&quot;">​</a></h2><h3 id="_1、什么是断点续传" tabindex="-1">1、什么是断点续传 <a class="header-anchor" href="#_1、什么是断点续传" aria-label="Permalink to &quot;1、什么是断点续传&quot;">​</a></h3><p>断点续传是在下载或上传时，将下载或上传任务（一个文件或一个压缩包）人为的划分为几个部分，每一个部分采用一个线程进行上传或下载，如果碰到网络故障，可以从已经上传或下载的部分开始继续上传或者下载未完成的部分，而没有必要从头开始上传或者下载。</p><p>PS：本文的断点续传主要是针对断点上传场景。</p><h3 id="_2、应用场景" tabindex="-1">2、应用场景 <a class="header-anchor" href="#_2、应用场景" aria-label="Permalink to &quot;2、应用场景&quot;">​</a></h3><p>断点续传可以看成是分片上传的一个衍生，因此可以使用分片上传的场景，都可以使用断点续传。</p><h3 id="_3、实现断点续传的核心逻辑" tabindex="-1">3、实现断点续传的核心逻辑 <a class="header-anchor" href="#_3、实现断点续传的核心逻辑" aria-label="Permalink to &quot;3、实现断点续传的核心逻辑&quot;">​</a></h3><p>在分片上传的过程中，如果因为系统崩溃或者网络中断等异常因素导致上传中断，这时候客户端需要记录上传的进度。在之后支持再次上传时，可以继续从上次上传中断的地方进行继续上传。</p><p>为了避免客户端在上传之后的进度数据被删除而导致重新开始从头上传的问题，服务端也可以提供相应的接口便于客户端对已经上传的分片数据进行查询，从而使客户端知道已经上传的分片数据，从而从下一个分片数据开始继续上传。</p><h3 id="_4、实现流程步骤" tabindex="-1">4、实现流程步骤 <a class="header-anchor" href="#_4、实现流程步骤" aria-label="Permalink to &quot;4、实现流程步骤&quot;">​</a></h3><p>a、方案一，常规步骤</p><ul><li>将需要上传的文件按照一定的分割规则，分割成相同大小的数据块；</li><li>初始化一个分片上传任务，返回本次分片上传唯一标识；</li><li>按照一定的策略（串行或并行）发送各个分片数据块；</li><li>发送完成后，服务端根据判断数据上传是否完整，如果完整，则进行数据块合成得到原始文件。</li></ul><p>b、方案二、本文实现的步骤</p><ul><li>前端（客户端）需要根据固定大小对文件进行分片，请求后端（服务端）时要带上分片序号和大小</li><li>服务端创建 conf 文件用来记录分块位置，conf 文件长度为总分片数，每上传一个分块即向 conf 文件中写入一个 127，那么没上传的位置就是默认的 0,已上传的就是 Byte.MAX_VALUE 127（这步是实现断点续传和秒传的核心步骤）</li><li>服务器按照请求数据中给的分片序号和每片分块大小（分片大小是固定且一样的）算出开始位置，与读取到的文件片段数据，写入文件。</li></ul><h4 id="_5、分片上传-断点上传代码实现" tabindex="-1">5、分片上传/断点上传代码实现 <a class="header-anchor" href="#_5、分片上传-断点上传代码实现" aria-label="Permalink to &quot;5、分片上传/断点上传代码实现&quot;">​</a></h4><p>a、前端采用百度提供的 webuploader 插件，进行分片。因本文主要介绍服务端代码实现，webuploader 如何进行分片，具体实现可以查看如下链接:</p><p><a href="http://fex.baidu.com/webuploader/getting-started.html" target="_blank" rel="noreferrer">http://fex.baidu.com/webuploader/getting-started.html</a></p><p>b、后端用两种方式实现文件写入，一种是用 RandomAccessFile，如果对 RandomAccessFile 不熟悉的朋友，可以查看如下链接:</p><p><a href="https://blog.csdn.net/dimudan2015/article/details/81910690" target="_blank" rel="noreferrer">https://blog.csdn.net/dimudan2015/article/details/81910690</a></p><p>另一种是使用 MappedByteBuffer，对 MappedByteBuffer 不熟悉的朋友，可以查看如下链接进行了解:</p><p><a href="https://www.jianshu.com/p/f90866dcbffc" target="_blank" rel="noreferrer">https://www.jianshu.com/p/f90866dcbffc</a></p><h2 id="后端进行写入操作的核心代码" tabindex="-1">后端进行写入操作的核心代码 <a class="header-anchor" href="#后端进行写入操作的核心代码" aria-label="Permalink to &quot;后端进行写入操作的核心代码&quot;">​</a></h2><h3 id="_1、randomaccessfile-实现方式" tabindex="-1">1、RandomAccessFile 实现方式 <a class="header-anchor" href="#_1、randomaccessfile-实现方式" aria-label="Permalink to &quot;1、RandomAccessFile 实现方式&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@UploadMode(mode = UploadModeEnum.RANDOM_ACCESS)  </span></span>
<span class="line"><span style="color:#f6f6f4;">@Slf4j  </span></span>
<span class="line"><span style="color:#f6f6f4;">public class RandomAccessUploadStrategy extends SliceUploadTemplate {  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">  @Autowired  </span></span>
<span class="line"><span style="color:#f6f6f4;">  private FilePathUtil filePathUtil;  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">  @Value(&quot;\${upload.chunkSize}&quot;)  </span></span>
<span class="line"><span style="color:#f6f6f4;">  private long defaultChunkSize;  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">  @Override  </span></span>
<span class="line"><span style="color:#f6f6f4;">  public boolean upload(FileUploadRequestDTO param) {  </span></span>
<span class="line"><span style="color:#f6f6f4;">    RandomAccessFile accessTmpFile = null;  </span></span>
<span class="line"><span style="color:#f6f6f4;">    try {  </span></span>
<span class="line"><span style="color:#f6f6f4;">      String uploadDirPath = filePathUtil.getPath(param);  </span></span>
<span class="line"><span style="color:#f6f6f4;">      File tmpFile = super.createTmpFile(param);  </span></span>
<span class="line"><span style="color:#f6f6f4;">      accessTmpFile = new RandomAccessFile(tmpFile, &quot;rw&quot;);  </span></span>
<span class="line"><span style="color:#f6f6f4;">      //这个必须与前端设定的值一致  </span></span>
<span class="line"><span style="color:#f6f6f4;">      long chunkSize = Objects.isNull(param.getChunkSize()) ? defaultChunkSize * 1024 * 1024  </span></span>
<span class="line"><span style="color:#f6f6f4;">          : param.getChunkSize();  </span></span>
<span class="line"><span style="color:#f6f6f4;">      long offset = chunkSize * param.getChunk();  </span></span>
<span class="line"><span style="color:#f6f6f4;">      //定位到该分片的偏移量  </span></span>
<span class="line"><span style="color:#f6f6f4;">      accessTmpFile.seek(offset);  </span></span>
<span class="line"><span style="color:#f6f6f4;">      //写入该分片数据  </span></span>
<span class="line"><span style="color:#f6f6f4;">      accessTmpFile.write(param.getFile().getBytes());  </span></span>
<span class="line"><span style="color:#f6f6f4;">      boolean isOk = super.checkAndSetUploadProgress(param, uploadDirPath);  </span></span>
<span class="line"><span style="color:#f6f6f4;">      return isOk;  </span></span>
<span class="line"><span style="color:#f6f6f4;">    } catch (IOException e) {  </span></span>
<span class="line"><span style="color:#f6f6f4;">      log.error(e.getMessage(), e);  </span></span>
<span class="line"><span style="color:#f6f6f4;">    } finally {  </span></span>
<span class="line"><span style="color:#f6f6f4;">      FileUtil.close(accessTmpFile);  </span></span>
<span class="line"><span style="color:#f6f6f4;">    }  </span></span>
<span class="line"><span style="color:#f6f6f4;">   return false;  </span></span>
<span class="line"><span style="color:#f6f6f4;">  }  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@UploadMode(mode = UploadModeEnum.RANDOM_ACCESS)  </span></span>
<span class="line"><span style="color:#24292e;">@Slf4j  </span></span>
<span class="line"><span style="color:#24292e;">public class RandomAccessUploadStrategy extends SliceUploadTemplate {  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  @Autowired  </span></span>
<span class="line"><span style="color:#24292e;">  private FilePathUtil filePathUtil;  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  @Value(&quot;\${upload.chunkSize}&quot;)  </span></span>
<span class="line"><span style="color:#24292e;">  private long defaultChunkSize;  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  @Override  </span></span>
<span class="line"><span style="color:#24292e;">  public boolean upload(FileUploadRequestDTO param) {  </span></span>
<span class="line"><span style="color:#24292e;">    RandomAccessFile accessTmpFile = null;  </span></span>
<span class="line"><span style="color:#24292e;">    try {  </span></span>
<span class="line"><span style="color:#24292e;">      String uploadDirPath = filePathUtil.getPath(param);  </span></span>
<span class="line"><span style="color:#24292e;">      File tmpFile = super.createTmpFile(param);  </span></span>
<span class="line"><span style="color:#24292e;">      accessTmpFile = new RandomAccessFile(tmpFile, &quot;rw&quot;);  </span></span>
<span class="line"><span style="color:#24292e;">      //这个必须与前端设定的值一致  </span></span>
<span class="line"><span style="color:#24292e;">      long chunkSize = Objects.isNull(param.getChunkSize()) ? defaultChunkSize * 1024 * 1024  </span></span>
<span class="line"><span style="color:#24292e;">          : param.getChunkSize();  </span></span>
<span class="line"><span style="color:#24292e;">      long offset = chunkSize * param.getChunk();  </span></span>
<span class="line"><span style="color:#24292e;">      //定位到该分片的偏移量  </span></span>
<span class="line"><span style="color:#24292e;">      accessTmpFile.seek(offset);  </span></span>
<span class="line"><span style="color:#24292e;">      //写入该分片数据  </span></span>
<span class="line"><span style="color:#24292e;">      accessTmpFile.write(param.getFile().getBytes());  </span></span>
<span class="line"><span style="color:#24292e;">      boolean isOk = super.checkAndSetUploadProgress(param, uploadDirPath);  </span></span>
<span class="line"><span style="color:#24292e;">      return isOk;  </span></span>
<span class="line"><span style="color:#24292e;">    } catch (IOException e) {  </span></span>
<span class="line"><span style="color:#24292e;">      log.error(e.getMessage(), e);  </span></span>
<span class="line"><span style="color:#24292e;">    } finally {  </span></span>
<span class="line"><span style="color:#24292e;">      FileUtil.close(accessTmpFile);  </span></span>
<span class="line"><span style="color:#24292e;">    }  </span></span>
<span class="line"><span style="color:#24292e;">   return false;  </span></span>
<span class="line"><span style="color:#24292e;">  }  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="_2、mappedbytebuffer-实现方式" tabindex="-1">2、MappedByteBuffer 实现方式 <a class="header-anchor" href="#_2、mappedbytebuffer-实现方式" aria-label="Permalink to &quot;2、MappedByteBuffer 实现方式&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@UploadMode(mode = UploadModeEnum.MAPPED_BYTEBUFFER)  </span></span>
<span class="line"><span style="color:#f6f6f4;">@Slf4j  </span></span>
<span class="line"><span style="color:#f6f6f4;">public class MappedByteBufferUploadStrategy extends SliceUploadTemplate {  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">  @Autowired  </span></span>
<span class="line"><span style="color:#f6f6f4;">  private FilePathUtil filePathUtil;  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">  @Value(&quot;\${upload.chunkSize}&quot;)  </span></span>
<span class="line"><span style="color:#f6f6f4;">  private long defaultChunkSize;  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">  @Override  </span></span>
<span class="line"><span style="color:#f6f6f4;">  public boolean upload(FileUploadRequestDTO param) {  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">    RandomAccessFile tempRaf = null;  </span></span>
<span class="line"><span style="color:#f6f6f4;">    FileChannel fileChannel = null;  </span></span>
<span class="line"><span style="color:#f6f6f4;">    MappedByteBuffer mappedByteBuffer = null;  </span></span>
<span class="line"><span style="color:#f6f6f4;">    try {  </span></span>
<span class="line"><span style="color:#f6f6f4;">      String uploadDirPath = filePathUtil.getPath(param);  </span></span>
<span class="line"><span style="color:#f6f6f4;">      File tmpFile = super.createTmpFile(param);  </span></span>
<span class="line"><span style="color:#f6f6f4;">      tempRaf = new RandomAccessFile(tmpFile, &quot;rw&quot;);  </span></span>
<span class="line"><span style="color:#f6f6f4;">      fileChannel = tempRaf.getChannel();  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">      long chunkSize = Objects.isNull(param.getChunkSize()) ? defaultChunkSize * 1024 * 1024  </span></span>
<span class="line"><span style="color:#f6f6f4;">          : param.getChunkSize();  </span></span>
<span class="line"><span style="color:#f6f6f4;">      //写入该分片数据  </span></span>
<span class="line"><span style="color:#f6f6f4;">      long offset = chunkSize * param.getChunk();  </span></span>
<span class="line"><span style="color:#f6f6f4;">      byte[] fileData = param.getFile().getBytes();  </span></span>
<span class="line"><span style="color:#f6f6f4;">      mappedByteBuffer = fileChannel  </span></span>
<span class="line"><span style="color:#f6f6f4;">.map(FileChannel.MapMode.READ_WRITE, offset, fileData.length);  </span></span>
<span class="line"><span style="color:#f6f6f4;">      mappedByteBuffer.put(fileData);  </span></span>
<span class="line"><span style="color:#f6f6f4;">      boolean isOk = super.checkAndSetUploadProgress(param, uploadDirPath);  </span></span>
<span class="line"><span style="color:#f6f6f4;">      return isOk;  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">    } catch (IOException e) {  </span></span>
<span class="line"><span style="color:#f6f6f4;">      log.error(e.getMessage(), e);  </span></span>
<span class="line"><span style="color:#f6f6f4;">    } finally {  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">      FileUtil.freedMappedByteBuffer(mappedByteBuffer);  </span></span>
<span class="line"><span style="color:#f6f6f4;">      FileUtil.close(fileChannel);  </span></span>
<span class="line"><span style="color:#f6f6f4;">      FileUtil.close(tempRaf);  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">    }  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">    return false;  </span></span>
<span class="line"><span style="color:#f6f6f4;">  }  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@UploadMode(mode = UploadModeEnum.MAPPED_BYTEBUFFER)  </span></span>
<span class="line"><span style="color:#24292e;">@Slf4j  </span></span>
<span class="line"><span style="color:#24292e;">public class MappedByteBufferUploadStrategy extends SliceUploadTemplate {  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  @Autowired  </span></span>
<span class="line"><span style="color:#24292e;">  private FilePathUtil filePathUtil;  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  @Value(&quot;\${upload.chunkSize}&quot;)  </span></span>
<span class="line"><span style="color:#24292e;">  private long defaultChunkSize;  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  @Override  </span></span>
<span class="line"><span style="color:#24292e;">  public boolean upload(FileUploadRequestDTO param) {  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">    RandomAccessFile tempRaf = null;  </span></span>
<span class="line"><span style="color:#24292e;">    FileChannel fileChannel = null;  </span></span>
<span class="line"><span style="color:#24292e;">    MappedByteBuffer mappedByteBuffer = null;  </span></span>
<span class="line"><span style="color:#24292e;">    try {  </span></span>
<span class="line"><span style="color:#24292e;">      String uploadDirPath = filePathUtil.getPath(param);  </span></span>
<span class="line"><span style="color:#24292e;">      File tmpFile = super.createTmpFile(param);  </span></span>
<span class="line"><span style="color:#24292e;">      tempRaf = new RandomAccessFile(tmpFile, &quot;rw&quot;);  </span></span>
<span class="line"><span style="color:#24292e;">      fileChannel = tempRaf.getChannel();  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">      long chunkSize = Objects.isNull(param.getChunkSize()) ? defaultChunkSize * 1024 * 1024  </span></span>
<span class="line"><span style="color:#24292e;">          : param.getChunkSize();  </span></span>
<span class="line"><span style="color:#24292e;">      //写入该分片数据  </span></span>
<span class="line"><span style="color:#24292e;">      long offset = chunkSize * param.getChunk();  </span></span>
<span class="line"><span style="color:#24292e;">      byte[] fileData = param.getFile().getBytes();  </span></span>
<span class="line"><span style="color:#24292e;">      mappedByteBuffer = fileChannel  </span></span>
<span class="line"><span style="color:#24292e;">.map(FileChannel.MapMode.READ_WRITE, offset, fileData.length);  </span></span>
<span class="line"><span style="color:#24292e;">      mappedByteBuffer.put(fileData);  </span></span>
<span class="line"><span style="color:#24292e;">      boolean isOk = super.checkAndSetUploadProgress(param, uploadDirPath);  </span></span>
<span class="line"><span style="color:#24292e;">      return isOk;  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">    } catch (IOException e) {  </span></span>
<span class="line"><span style="color:#24292e;">      log.error(e.getMessage(), e);  </span></span>
<span class="line"><span style="color:#24292e;">    } finally {  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">      FileUtil.freedMappedByteBuffer(mappedByteBuffer);  </span></span>
<span class="line"><span style="color:#24292e;">      FileUtil.close(fileChannel);  </span></span>
<span class="line"><span style="color:#24292e;">      FileUtil.close(tempRaf);  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">    }  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">    return false;  </span></span>
<span class="line"><span style="color:#24292e;">  }  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="_3、文件操作核心模板类代码" tabindex="-1">3、文件操作核心模板类代码 <a class="header-anchor" href="#_3、文件操作核心模板类代码" aria-label="Permalink to &quot;3、文件操作核心模板类代码&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#f6f6f4;">@Slf4j  </span></span>
<span class="line"><span style="color:#f6f6f4;">public abstract class SliceUploadTemplate implements SliceUploadStrategy {  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">  public abstract boolean upload(FileUploadRequestDTO param);  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">  protected File createTmpFile(FileUploadRequestDTO param) {  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">    FilePathUtil filePathUtil = SpringContextHolder.getBean(FilePathUtil.class);  </span></span>
<span class="line"><span style="color:#f6f6f4;">    param.setPath(FileUtil.withoutHeadAndTailDiagonal(param.getPath()));  </span></span>
<span class="line"><span style="color:#f6f6f4;">    String fileName = param.getFile().getOriginalFilename();  </span></span>
<span class="line"><span style="color:#f6f6f4;">    String uploadDirPath = filePathUtil.getPath(param);  </span></span>
<span class="line"><span style="color:#f6f6f4;">    String tempFileName = fileName + &quot;_tmp&quot;;  </span></span>
<span class="line"><span style="color:#f6f6f4;">    File tmpDir = new File(uploadDirPath);  </span></span>
<span class="line"><span style="color:#f6f6f4;">    File tmpFile = new File(uploadDirPath, tempFileName);  </span></span>
<span class="line"><span style="color:#f6f6f4;">    if (!tmpDir.exists()) {  </span></span>
<span class="line"><span style="color:#f6f6f4;">      tmpDir.mkdirs();  </span></span>
<span class="line"><span style="color:#f6f6f4;">    }  </span></span>
<span class="line"><span style="color:#f6f6f4;">    return tmpFile;  </span></span>
<span class="line"><span style="color:#f6f6f4;">  }  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">  @Override  </span></span>
<span class="line"><span style="color:#f6f6f4;">  public FileUploadDTO sliceUpload(FileUploadRequestDTO param) {  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">    boolean isOk = this.upload(param);  </span></span>
<span class="line"><span style="color:#f6f6f4;">    if (isOk) {  </span></span>
<span class="line"><span style="color:#f6f6f4;">      File tmpFile = this.createTmpFile(param);  </span></span>
<span class="line"><span style="color:#f6f6f4;">      FileUploadDTO fileUploadDTO = this.saveAndFileUploadDTO(param.getFile().getOriginalFilename(), tmpFile);  </span></span>
<span class="line"><span style="color:#f6f6f4;">      return fileUploadDTO;  </span></span>
<span class="line"><span style="color:#f6f6f4;">    }  </span></span>
<span class="line"><span style="color:#f6f6f4;">    String md5 = FileMD5Util.getFileMD5(param.getFile());  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">    Map&lt;Integer, String&gt; map = new HashMap&lt;&gt;();  </span></span>
<span class="line"><span style="color:#f6f6f4;">    map.put(param.getChunk(), md5);  </span></span>
<span class="line"><span style="color:#f6f6f4;">    return FileUploadDTO.builder().chunkMd5Info(map).build();  </span></span>
<span class="line"><span style="color:#f6f6f4;">  }  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">  /**  </span></span>
<span class="line"><span style="color:#f6f6f4;">   * 检查并修改文件上传进度  </span></span>
<span class="line"><span style="color:#f6f6f4;">   */  </span></span>
<span class="line"><span style="color:#f6f6f4;">  public boolean checkAndSetUploadProgress(FileUploadRequestDTO param, String uploadDirPath) {  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">    String fileName = param.getFile().getOriginalFilename();  </span></span>
<span class="line"><span style="color:#f6f6f4;">    File confFile = new File(uploadDirPath, fileName + &quot;.conf&quot;);  </span></span>
<span class="line"><span style="color:#f6f6f4;">    byte isComplete = 0;  </span></span>
<span class="line"><span style="color:#f6f6f4;">    RandomAccessFile accessConfFile = null;  </span></span>
<span class="line"><span style="color:#f6f6f4;">    try {  </span></span>
<span class="line"><span style="color:#f6f6f4;">      accessConfFile = new RandomAccessFile(confFile, &quot;rw&quot;);  </span></span>
<span class="line"><span style="color:#f6f6f4;">      //把该分段标记为 true 表示完成  </span></span>
<span class="line"><span style="color:#f6f6f4;">      System.out.println(&quot;set part &quot; + param.getChunk() + &quot; complete&quot;);  </span></span>
<span class="line"><span style="color:#f6f6f4;">      //创建conf文件文件长度为总分片数，每上传一个分块即向conf文件中写入一个127，那么没上传的位置就是默认0,已上传的就是Byte.MAX_VALUE 127  </span></span>
<span class="line"><span style="color:#f6f6f4;">      accessConfFile.setLength(param.getChunks());  </span></span>
<span class="line"><span style="color:#f6f6f4;">      accessConfFile.seek(param.getChunk());  </span></span>
<span class="line"><span style="color:#f6f6f4;">      accessConfFile.write(Byte.MAX_VALUE);  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">      //completeList 检查是否全部完成,如果数组里是否全部都是127(全部分片都成功上传)  </span></span>
<span class="line"><span style="color:#f6f6f4;">      byte[] completeList = FileUtils.readFileToByteArray(confFile);  </span></span>
<span class="line"><span style="color:#f6f6f4;">      isComplete = Byte.MAX_VALUE;  </span></span>
<span class="line"><span style="color:#f6f6f4;">      for (int i = 0; i &lt; completeList.length &amp;&amp; isComplete == Byte.MAX_VALUE; i++) {  </span></span>
<span class="line"><span style="color:#f6f6f4;">        //与运算, 如果有部分没有完成则 isComplete 不是 Byte.MAX_VALUE  </span></span>
<span class="line"><span style="color:#f6f6f4;">        isComplete = (byte) (isComplete &amp; completeList[i]);  </span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out.println(&quot;check part &quot; + i + &quot; complete?:&quot; + completeList[i]);  </span></span>
<span class="line"><span style="color:#f6f6f4;">      }  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">    } catch (IOException e) {  </span></span>
<span class="line"><span style="color:#f6f6f4;">      log.error(e.getMessage(), e);  </span></span>
<span class="line"><span style="color:#f6f6f4;">    } finally {  </span></span>
<span class="line"><span style="color:#f6f6f4;">      FileUtil.close(accessConfFile);  </span></span>
<span class="line"><span style="color:#f6f6f4;">    }  </span></span>
<span class="line"><span style="color:#f6f6f4;"> boolean isOk = setUploadProgress2Redis(param, uploadDirPath, fileName, confFile, isComplete);  </span></span>
<span class="line"><span style="color:#f6f6f4;">    return isOk;  </span></span>
<span class="line"><span style="color:#f6f6f4;">  }  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">  /**  </span></span>
<span class="line"><span style="color:#f6f6f4;">   * 把上传进度信息存进redis  </span></span>
<span class="line"><span style="color:#f6f6f4;">   */  </span></span>
<span class="line"><span style="color:#f6f6f4;">  private boolean setUploadProgress2Redis(FileUploadRequestDTO param, String uploadDirPath,  </span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">      String fileName, File confFile, byte isComplete) {  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">    RedisUtil redisUtil = SpringContextHolder.getBean(RedisUtil.class);  </span></span>
<span class="line"><span style="color:#f6f6f4;">    if (isComplete == Byte.MAX_VALUE) {  </span></span>
<span class="line"><span style="color:#f6f6f4;">      redisUtil.hset(FileConstant.FILE_UPLOAD_STATUS, param.getMd5(), &quot;true&quot;);  </span></span>
<span class="line"><span style="color:#f6f6f4;">      redisUtil.del(FileConstant.FILE_MD5_KEY + param.getMd5());  </span></span>
<span class="line"><span style="color:#f6f6f4;">      confFile.delete();  </span></span>
<span class="line"><span style="color:#f6f6f4;">      return true;  </span></span>
<span class="line"><span style="color:#f6f6f4;">    } else {  </span></span>
<span class="line"><span style="color:#f6f6f4;">      if (!redisUtil.hHasKey(FileConstant.FILE_UPLOAD_STATUS, param.getMd5())) {  </span></span>
<span class="line"><span style="color:#f6f6f4;">        redisUtil.hset(FileConstant.FILE_UPLOAD_STATUS, param.getMd5(), &quot;false&quot;);  </span></span>
<span class="line"><span style="color:#f6f6f4;">        redisUtil.set(FileConstant.FILE_MD5_KEY + param.getMd5(),  </span></span>
<span class="line"><span style="color:#f6f6f4;">            uploadDirPath + FileConstant.FILE_SEPARATORCHAR + fileName + &quot;.conf&quot;);  </span></span>
<span class="line"><span style="color:#f6f6f4;">      }  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">      return false;  </span></span>
<span class="line"><span style="color:#f6f6f4;">    }  </span></span>
<span class="line"><span style="color:#f6f6f4;">  }  </span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">  /**  </span></span>
<span class="line"><span style="color:#f6f6f4;">   * 保存文件操作  </span></span>
<span class="line"><span style="color:#f6f6f4;">   */  </span></span>
<span class="line"><span style="color:#f6f6f4;">  public FileUploadDTO saveAndFileUploadDTO(String fileName, File tmpFile) {  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">    FileUploadDTO fileUploadDTO = null;  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">    try {  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">      fileUploadDTO = renameFile(tmpFile, fileName);  </span></span>
<span class="line"><span style="color:#f6f6f4;">      if (fileUploadDTO.isUploadComplete()) {  </span></span>
<span class="line"><span style="color:#f6f6f4;">        System.out  </span></span>
<span class="line"><span style="color:#f6f6f4;">            .println(&quot;upload complete !!&quot; + fileUploadDTO.isUploadComplete() + &quot; name=&quot; + fileName);  </span></span>
<span class="line"><span style="color:#f6f6f4;">        //TODO 保存文件信息到数据库  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">      }  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">    } catch (Exception e) {  </span></span>
<span class="line"><span style="color:#f6f6f4;">      log.error(e.getMessage(), e);  </span></span>
<span class="line"><span style="color:#f6f6f4;">    } finally {  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">    }  </span></span>
<span class="line"><span style="color:#f6f6f4;">    return fileUploadDTO;  </span></span>
<span class="line"><span style="color:#f6f6f4;">  }  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">  /**  </span></span>
<span class="line"><span style="color:#f6f6f4;">   * 文件重命名  </span></span>
<span class="line"><span style="color:#f6f6f4;">   *  </span></span>
<span class="line"><span style="color:#f6f6f4;">   * @param toBeRenamed 将要修改名字的文件  </span></span>
<span class="line"><span style="color:#f6f6f4;">   * @param toFileNewName 新的名字  </span></span>
<span class="line"><span style="color:#f6f6f4;">   */  </span></span>
<span class="line"><span style="color:#f6f6f4;">  private FileUploadDTO renameFile(File toBeRenamed, String toFileNewName) {  </span></span>
<span class="line"><span style="color:#f6f6f4;">    //检查要重命名的文件是否存在，是否是文件  </span></span>
<span class="line"><span style="color:#f6f6f4;">    FileUploadDTO fileUploadDTO = new FileUploadDTO();  </span></span>
<span class="line"><span style="color:#f6f6f4;">    if (!toBeRenamed.exists() || toBeRenamed.isDirectory()) {  </span></span>
<span class="line"><span style="color:#f6f6f4;">      log.info(&quot;File does not exist: {}&quot;, toBeRenamed.getName());  </span></span>
<span class="line"><span style="color:#f6f6f4;">      fileUploadDTO.setUploadComplete(false);  </span></span>
<span class="line"><span style="color:#f6f6f4;">      return fileUploadDTO;  </span></span>
<span class="line"><span style="color:#f6f6f4;">    }  </span></span>
<span class="line"><span style="color:#f6f6f4;">    String ext = FileUtil.getExtension(toFileNewName);  </span></span>
<span class="line"><span style="color:#f6f6f4;">    String p = toBeRenamed.getParent();  </span></span>
<span class="line"><span style="color:#f6f6f4;">    String filePath = p + FileConstant.FILE_SEPARATORCHAR + toFileNewName;  </span></span>
<span class="line"><span style="color:#f6f6f4;">    File newFile = new File(filePath);  </span></span>
<span class="line"><span style="color:#f6f6f4;">    //修改文件名  </span></span>
<span class="line"><span style="color:#f6f6f4;">    boolean uploadFlag = toBeRenamed.renameTo(newFile);  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">    fileUploadDTO.setMtime(DateUtil.getCurrentTimeStamp());  </span></span>
<span class="line"><span style="color:#f6f6f4;">    fileUploadDTO.setUploadComplete(uploadFlag);  </span></span>
<span class="line"><span style="color:#f6f6f4;">    fileUploadDTO.setPath(filePath);  </span></span>
<span class="line"><span style="color:#f6f6f4;">    fileUploadDTO.setSize(newFile.length());  </span></span>
<span class="line"><span style="color:#f6f6f4;">    fileUploadDTO.setFileExt(ext);  </span></span>
<span class="line"><span style="color:#f6f6f4;">    fileUploadDTO.setFileId(toFileNewName);  </span></span>
<span class="line"><span style="color:#f6f6f4;">  </span></span>
<span class="line"><span style="color:#f6f6f4;">    return fileUploadDTO;  </span></span>
<span class="line"><span style="color:#f6f6f4;">  }  </span></span>
<span class="line"><span style="color:#f6f6f4;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Slf4j  </span></span>
<span class="line"><span style="color:#24292e;">public abstract class SliceUploadTemplate implements SliceUploadStrategy {  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  public abstract boolean upload(FileUploadRequestDTO param);  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  protected File createTmpFile(FileUploadRequestDTO param) {  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">    FilePathUtil filePathUtil = SpringContextHolder.getBean(FilePathUtil.class);  </span></span>
<span class="line"><span style="color:#24292e;">    param.setPath(FileUtil.withoutHeadAndTailDiagonal(param.getPath()));  </span></span>
<span class="line"><span style="color:#24292e;">    String fileName = param.getFile().getOriginalFilename();  </span></span>
<span class="line"><span style="color:#24292e;">    String uploadDirPath = filePathUtil.getPath(param);  </span></span>
<span class="line"><span style="color:#24292e;">    String tempFileName = fileName + &quot;_tmp&quot;;  </span></span>
<span class="line"><span style="color:#24292e;">    File tmpDir = new File(uploadDirPath);  </span></span>
<span class="line"><span style="color:#24292e;">    File tmpFile = new File(uploadDirPath, tempFileName);  </span></span>
<span class="line"><span style="color:#24292e;">    if (!tmpDir.exists()) {  </span></span>
<span class="line"><span style="color:#24292e;">      tmpDir.mkdirs();  </span></span>
<span class="line"><span style="color:#24292e;">    }  </span></span>
<span class="line"><span style="color:#24292e;">    return tmpFile;  </span></span>
<span class="line"><span style="color:#24292e;">  }  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  @Override  </span></span>
<span class="line"><span style="color:#24292e;">  public FileUploadDTO sliceUpload(FileUploadRequestDTO param) {  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">    boolean isOk = this.upload(param);  </span></span>
<span class="line"><span style="color:#24292e;">    if (isOk) {  </span></span>
<span class="line"><span style="color:#24292e;">      File tmpFile = this.createTmpFile(param);  </span></span>
<span class="line"><span style="color:#24292e;">      FileUploadDTO fileUploadDTO = this.saveAndFileUploadDTO(param.getFile().getOriginalFilename(), tmpFile);  </span></span>
<span class="line"><span style="color:#24292e;">      return fileUploadDTO;  </span></span>
<span class="line"><span style="color:#24292e;">    }  </span></span>
<span class="line"><span style="color:#24292e;">    String md5 = FileMD5Util.getFileMD5(param.getFile());  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">    Map&lt;Integer, String&gt; map = new HashMap&lt;&gt;();  </span></span>
<span class="line"><span style="color:#24292e;">    map.put(param.getChunk(), md5);  </span></span>
<span class="line"><span style="color:#24292e;">    return FileUploadDTO.builder().chunkMd5Info(map).build();  </span></span>
<span class="line"><span style="color:#24292e;">  }  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  /**  </span></span>
<span class="line"><span style="color:#24292e;">   * 检查并修改文件上传进度  </span></span>
<span class="line"><span style="color:#24292e;">   */  </span></span>
<span class="line"><span style="color:#24292e;">  public boolean checkAndSetUploadProgress(FileUploadRequestDTO param, String uploadDirPath) {  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">    String fileName = param.getFile().getOriginalFilename();  </span></span>
<span class="line"><span style="color:#24292e;">    File confFile = new File(uploadDirPath, fileName + &quot;.conf&quot;);  </span></span>
<span class="line"><span style="color:#24292e;">    byte isComplete = 0;  </span></span>
<span class="line"><span style="color:#24292e;">    RandomAccessFile accessConfFile = null;  </span></span>
<span class="line"><span style="color:#24292e;">    try {  </span></span>
<span class="line"><span style="color:#24292e;">      accessConfFile = new RandomAccessFile(confFile, &quot;rw&quot;);  </span></span>
<span class="line"><span style="color:#24292e;">      //把该分段标记为 true 表示完成  </span></span>
<span class="line"><span style="color:#24292e;">      System.out.println(&quot;set part &quot; + param.getChunk() + &quot; complete&quot;);  </span></span>
<span class="line"><span style="color:#24292e;">      //创建conf文件文件长度为总分片数，每上传一个分块即向conf文件中写入一个127，那么没上传的位置就是默认0,已上传的就是Byte.MAX_VALUE 127  </span></span>
<span class="line"><span style="color:#24292e;">      accessConfFile.setLength(param.getChunks());  </span></span>
<span class="line"><span style="color:#24292e;">      accessConfFile.seek(param.getChunk());  </span></span>
<span class="line"><span style="color:#24292e;">      accessConfFile.write(Byte.MAX_VALUE);  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">      //completeList 检查是否全部完成,如果数组里是否全部都是127(全部分片都成功上传)  </span></span>
<span class="line"><span style="color:#24292e;">      byte[] completeList = FileUtils.readFileToByteArray(confFile);  </span></span>
<span class="line"><span style="color:#24292e;">      isComplete = Byte.MAX_VALUE;  </span></span>
<span class="line"><span style="color:#24292e;">      for (int i = 0; i &lt; completeList.length &amp;&amp; isComplete == Byte.MAX_VALUE; i++) {  </span></span>
<span class="line"><span style="color:#24292e;">        //与运算, 如果有部分没有完成则 isComplete 不是 Byte.MAX_VALUE  </span></span>
<span class="line"><span style="color:#24292e;">        isComplete = (byte) (isComplete &amp; completeList[i]);  </span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;check part &quot; + i + &quot; complete?:&quot; + completeList[i]);  </span></span>
<span class="line"><span style="color:#24292e;">      }  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">    } catch (IOException e) {  </span></span>
<span class="line"><span style="color:#24292e;">      log.error(e.getMessage(), e);  </span></span>
<span class="line"><span style="color:#24292e;">    } finally {  </span></span>
<span class="line"><span style="color:#24292e;">      FileUtil.close(accessConfFile);  </span></span>
<span class="line"><span style="color:#24292e;">    }  </span></span>
<span class="line"><span style="color:#24292e;"> boolean isOk = setUploadProgress2Redis(param, uploadDirPath, fileName, confFile, isComplete);  </span></span>
<span class="line"><span style="color:#24292e;">    return isOk;  </span></span>
<span class="line"><span style="color:#24292e;">  }  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  /**  </span></span>
<span class="line"><span style="color:#24292e;">   * 把上传进度信息存进redis  </span></span>
<span class="line"><span style="color:#24292e;">   */  </span></span>
<span class="line"><span style="color:#24292e;">  private boolean setUploadProgress2Redis(FileUploadRequestDTO param, String uploadDirPath,  </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      String fileName, File confFile, byte isComplete) {  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">    RedisUtil redisUtil = SpringContextHolder.getBean(RedisUtil.class);  </span></span>
<span class="line"><span style="color:#24292e;">    if (isComplete == Byte.MAX_VALUE) {  </span></span>
<span class="line"><span style="color:#24292e;">      redisUtil.hset(FileConstant.FILE_UPLOAD_STATUS, param.getMd5(), &quot;true&quot;);  </span></span>
<span class="line"><span style="color:#24292e;">      redisUtil.del(FileConstant.FILE_MD5_KEY + param.getMd5());  </span></span>
<span class="line"><span style="color:#24292e;">      confFile.delete();  </span></span>
<span class="line"><span style="color:#24292e;">      return true;  </span></span>
<span class="line"><span style="color:#24292e;">    } else {  </span></span>
<span class="line"><span style="color:#24292e;">      if (!redisUtil.hHasKey(FileConstant.FILE_UPLOAD_STATUS, param.getMd5())) {  </span></span>
<span class="line"><span style="color:#24292e;">        redisUtil.hset(FileConstant.FILE_UPLOAD_STATUS, param.getMd5(), &quot;false&quot;);  </span></span>
<span class="line"><span style="color:#24292e;">        redisUtil.set(FileConstant.FILE_MD5_KEY + param.getMd5(),  </span></span>
<span class="line"><span style="color:#24292e;">            uploadDirPath + FileConstant.FILE_SEPARATORCHAR + fileName + &quot;.conf&quot;);  </span></span>
<span class="line"><span style="color:#24292e;">      }  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">      return false;  </span></span>
<span class="line"><span style="color:#24292e;">    }  </span></span>
<span class="line"><span style="color:#24292e;">  }  </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  /**  </span></span>
<span class="line"><span style="color:#24292e;">   * 保存文件操作  </span></span>
<span class="line"><span style="color:#24292e;">   */  </span></span>
<span class="line"><span style="color:#24292e;">  public FileUploadDTO saveAndFileUploadDTO(String fileName, File tmpFile) {  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">    FileUploadDTO fileUploadDTO = null;  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">    try {  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">      fileUploadDTO = renameFile(tmpFile, fileName);  </span></span>
<span class="line"><span style="color:#24292e;">      if (fileUploadDTO.isUploadComplete()) {  </span></span>
<span class="line"><span style="color:#24292e;">        System.out  </span></span>
<span class="line"><span style="color:#24292e;">            .println(&quot;upload complete !!&quot; + fileUploadDTO.isUploadComplete() + &quot; name=&quot; + fileName);  </span></span>
<span class="line"><span style="color:#24292e;">        //TODO 保存文件信息到数据库  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">      }  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">    } catch (Exception e) {  </span></span>
<span class="line"><span style="color:#24292e;">      log.error(e.getMessage(), e);  </span></span>
<span class="line"><span style="color:#24292e;">    } finally {  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">    }  </span></span>
<span class="line"><span style="color:#24292e;">    return fileUploadDTO;  </span></span>
<span class="line"><span style="color:#24292e;">  }  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">  /**  </span></span>
<span class="line"><span style="color:#24292e;">   * 文件重命名  </span></span>
<span class="line"><span style="color:#24292e;">   *  </span></span>
<span class="line"><span style="color:#24292e;">   * @param toBeRenamed 将要修改名字的文件  </span></span>
<span class="line"><span style="color:#24292e;">   * @param toFileNewName 新的名字  </span></span>
<span class="line"><span style="color:#24292e;">   */  </span></span>
<span class="line"><span style="color:#24292e;">  private FileUploadDTO renameFile(File toBeRenamed, String toFileNewName) {  </span></span>
<span class="line"><span style="color:#24292e;">    //检查要重命名的文件是否存在，是否是文件  </span></span>
<span class="line"><span style="color:#24292e;">    FileUploadDTO fileUploadDTO = new FileUploadDTO();  </span></span>
<span class="line"><span style="color:#24292e;">    if (!toBeRenamed.exists() || toBeRenamed.isDirectory()) {  </span></span>
<span class="line"><span style="color:#24292e;">      log.info(&quot;File does not exist: {}&quot;, toBeRenamed.getName());  </span></span>
<span class="line"><span style="color:#24292e;">      fileUploadDTO.setUploadComplete(false);  </span></span>
<span class="line"><span style="color:#24292e;">      return fileUploadDTO;  </span></span>
<span class="line"><span style="color:#24292e;">    }  </span></span>
<span class="line"><span style="color:#24292e;">    String ext = FileUtil.getExtension(toFileNewName);  </span></span>
<span class="line"><span style="color:#24292e;">    String p = toBeRenamed.getParent();  </span></span>
<span class="line"><span style="color:#24292e;">    String filePath = p + FileConstant.FILE_SEPARATORCHAR + toFileNewName;  </span></span>
<span class="line"><span style="color:#24292e;">    File newFile = new File(filePath);  </span></span>
<span class="line"><span style="color:#24292e;">    //修改文件名  </span></span>
<span class="line"><span style="color:#24292e;">    boolean uploadFlag = toBeRenamed.renameTo(newFile);  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">    fileUploadDTO.setMtime(DateUtil.getCurrentTimeStamp());  </span></span>
<span class="line"><span style="color:#24292e;">    fileUploadDTO.setUploadComplete(uploadFlag);  </span></span>
<span class="line"><span style="color:#24292e;">    fileUploadDTO.setPath(filePath);  </span></span>
<span class="line"><span style="color:#24292e;">    fileUploadDTO.setSize(newFile.length());  </span></span>
<span class="line"><span style="color:#24292e;">    fileUploadDTO.setFileExt(ext);  </span></span>
<span class="line"><span style="color:#24292e;">    fileUploadDTO.setFileId(toFileNewName);  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">    return fileUploadDTO;  </span></span>
<span class="line"><span style="color:#24292e;">  }  </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>在实现分片上传的过程，需要前端和后端配合，比如前后端上传块号的文件大小，前后端必须得要一致，否则上传就会有问题。其次文件相关操作正常都是要搭建一个文件服务器的，比如使用 fastdfs、hdfs 等。</p><p>本示例代码在电脑配置为 4 核内存 8G 情况下，上传 24G 大小的文件，上传时间需要 30 多分钟，主要时间耗费在前端的 md5 值计算，后端写入的速度还是比较快。</p><p>如果项目组觉得自建文件服务器太花费时间，且项目的需求仅仅只是上传下载，那么推荐使用阿里的 oss 服务器，其介绍可以查看官网:</p><p><a href="https://help.aliyun.com/product/31815.html" target="_blank" rel="noreferrer">https://help.aliyun.com/product/31815.html</a></p><p>阿里的 oss 它本质是一个对象存储服务器，而非文件服务器，因此如果有涉及到大量删除或者修改文件的需求，oss 可能就不是一个好的选择。</p><p>文末提供一个 oss 表单上传的链接 demo，通过 oss 表单上传，可以直接从前端把文件上传到 oss 服务器，把上传的压力都推给 oss 服务器:</p><p><a href="https://www.cnblogs.com/ossteam/p/4942227.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/ossteam/p/4942227.html</a></p>`,51),o=[p];function t(i,c,r,f,y,d){return a(),n("div",null,o)}const h=s(e,[["render",t]]);export{u as __pageData,h as default};
