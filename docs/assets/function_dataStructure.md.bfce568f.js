import{_ as s,o as n,c as a,R as l}from"./chunks/framework.b4504927.js";const A=JSON.parse('{"title":"数据结构","description":"","frontmatter":{},"headers":[],"relativePath":"function/dataStructure.md","filePath":"function/dataStructure.md"}'),p={name:"function/dataStructure.md"},o=l(`<h1 id="数据结构" tabindex="-1">数据结构 <a class="header-anchor" href="#数据结构" aria-label="Permalink to &quot;数据结构&quot;">​</a></h1><h2 id="队列" tabindex="-1">队列 <a class="header-anchor" href="#队列" aria-label="Permalink to &quot;队列&quot;">​</a></h2><p>队列是遵循先进先出（FIFO）原则的一组有序的项，从尾部添加新元素，并从顶部移除元素。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Queue</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lib-agile</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> queue </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Queue</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 往队列末尾添加值</span></span>
<span class="line"><span style="color:#A6ACCD;">queue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 移除队列第一项值</span></span>
<span class="line"><span style="color:#A6ACCD;">queue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// =&gt; item</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 返回队列长度</span></span>
<span class="line"><span style="color:#A6ACCD;">queue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">size</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// =&gt; 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 队列是否为空</span></span>
<span class="line"><span style="color:#A6ACCD;">queue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isEmpty</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// =&gt; true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 清空队列</span></span>
<span class="line"><span style="color:#A6ACCD;">queue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear</span><span style="color:#A6ACCD;">()</span></span></code></pre></div><h2 id="双端队列" tabindex="-1">双端队列 <a class="header-anchor" href="#双端队列" aria-label="Permalink to &quot;双端队列&quot;">​</a></h2><p>双端队列是一种允许我们同时从前端和后端添加和移除元素的特殊队列。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Deque</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lib-agile</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> deque </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Deque</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 往队列开始添加值</span></span>
<span class="line"><span style="color:#A6ACCD;">deque</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addFront</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 往队列结尾添加值</span></span>
<span class="line"><span style="color:#A6ACCD;">deque</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addBack</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 移除队列第一项值，返回当前移除的项</span></span>
<span class="line"><span style="color:#A6ACCD;">deque</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeFront</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// =&gt; item</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 移除队列最后一项值，返回当前移除的项</span></span>
<span class="line"><span style="color:#A6ACCD;">deque</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeBack</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// =&gt; item</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 返回队列长度</span></span>
<span class="line"><span style="color:#A6ACCD;">deque</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">size</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 队列是否为空</span></span>
<span class="line"><span style="color:#A6ACCD;">deque</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isEmpty</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 清空队列</span></span>
<span class="line"><span style="color:#A6ACCD;">deque</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear</span><span style="color:#A6ACCD;">()</span></span></code></pre></div><h2 id="栈" tabindex="-1">栈 <a class="header-anchor" href="#栈" aria-label="Permalink to &quot;栈&quot;">​</a></h2><p>栈是一种遵从后进先出原则的有序集合。新添加或待删除的元素都保存在栈的同一端，称作栈顶，另一端就叫栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Stack</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lib-agile</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> stack </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Queue</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 往栈里添加值</span></span>
<span class="line"><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 往栈里移除值</span></span>
<span class="line"><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// =&gt; item</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 返回栈长度</span></span>
<span class="line"><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">size</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// =&gt; 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 栈是否为空</span></span>
<span class="line"><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isEmpty</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// =&gt; true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 清空栈</span></span>
<span class="line"><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear</span><span style="color:#A6ACCD;">()</span></span></code></pre></div><h2 id="链表" tabindex="-1">链表 <a class="header-anchor" href="#链表" aria-label="Permalink to &quot;链表&quot;">​</a></h2><p>存储有序的元素集合，链表中的元素在内存中并不是连续放置的。每个元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称指针或链接）组成</p><h2 id="一维数组转-树-结构" tabindex="-1">一维数组转 树 结构 <a class="header-anchor" href="#一维数组转-树-结构" aria-label="Permalink to &quot;一维数组转 树 结构&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arrToTree</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lib-agile</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 示例数据</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1-1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">parentId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1-2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">parentId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">arrToTree</span><span style="color:#A6ACCD;">(arr)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 输出 =&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     id: 1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     name: &#39;1&#39;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     children: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//       {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//         id: 11,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//         name: &#39;1-1&#39;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//         parentId: 1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//       {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//         id: 12,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//         name: &#39;1-2&#39;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//         parentId: 1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 示例数据</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">uuid</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">uuid</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1-1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">pid</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">uuid</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1-2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">pid</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">arrToTree</span><span style="color:#A6ACCD;">(arr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">uuid</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">parentId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pid</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">child</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 输出 =&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     uuid: 1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     name: &#39;1&#39;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     child: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//       {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//         uuid: 11,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//         name: &#39;1-1&#39;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//         pid: 1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//       {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//         uuid: 12,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//         name: &#39;1-2&#39;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//         pid: 1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ]</span></span></code></pre></div><h2 id="数组转-map-结构" tabindex="-1">数组转 map 结构 <a class="header-anchor" href="#数组转-map-结构" aria-label="Permalink to &quot;数组转 map 结构&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arrToMap</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lib-agile</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 示例数据</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">arrToMap</span><span style="color:#A6ACCD;">(arr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// =&gt; {1: {id: 1, name: a}, 2: {id: 2}}</span></span></code></pre></div>`,16),e=[o];function t(c,r,y,D,i,F){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
