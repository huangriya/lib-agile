import{_ as s,o as n,c as a,R as l}from"./chunks/framework.b4504927.js";const F=JSON.parse('{"title":"浏览器相关","description":"","frontmatter":{},"headers":[],"relativePath":"function/browser.md","filePath":"function/browser.md"}'),o={name:"function/browser.md"},p=l(`<h1 id="浏览器相关" tabindex="-1">浏览器相关 <a class="header-anchor" href="#浏览器相关" aria-label="Permalink to &quot;浏览器相关&quot;">​</a></h1><h2 id="同步任务转异步任务-交给浏览器去调度" tabindex="-1">同步任务转异步任务，交给浏览器去调度 <a class="header-anchor" href="#同步任务转异步任务-交给浏览器去调度" aria-label="Permalink to &quot;同步任务转异步任务，交给浏览器去调度&quot;">​</a></h2><p>我们屏幕的刷新频率大多数是 60 Hz，也就是浏览器每秒钟大概需要渲染 60 次，但如果我们的代码块执行的时间过长，就会导致浏览器的渲染被阻塞，导致丢帧、卡顿； 我们可以通过此方法把大任务拆分成小任务，并放入浏览器的延时队列里等待执行，这样浏览器就会根据自身情况，选择空闲时间来执行异步任务，不会阻塞渲染，导致卡顿，丢帧等问题。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Scheduling</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lib-agile</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> taskList </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [] </span><span style="color:#676E95;font-style:italic;">//任务列表</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//每次处理5个，每5个任务合成一个异步任务放入异步队列</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> scheduling </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Scheduling</span><span style="color:#A6ACCD;">(taskList</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> num</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">o</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 处理任务</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">o</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 执行完成后的回调</span></span>
<span class="line"><span style="color:#A6ACCD;">scheduling</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">done</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">执行完成</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 如果没执行完成就要离开了，可以清除任务</span></span>
<span class="line"><span style="color:#A6ACCD;">scheduling</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear</span><span style="color:#A6ACCD;">()</span></span></code></pre></div>`,4),e=[p];function t(c,r,y,D,A,i){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{F as __pageData,d as default};
