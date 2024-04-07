import{h as n,o as i,c as a,F as p,G as k,e as o,a2 as l,U as E,m as h,t as g}from"./chunks/framework.CbPBrffd.js";const c=(d,s,e)=>{const t=document.createElement("script");t.type="text/javascript",t.readyState?t.onreadystatechange=function(){(t.readyState==="loaded"||t.readyState==="complete")&&(t.onreadystatechange=null,s())}:t.onload=function(){s()},t.onerror=function(){e()},t.src=d,document.body.appendChild(t)},y=l('<link href="https://cdn.bootcdn.net/ajax/libs/gridstack.js/9.2.0/gridstack.css" rel="stylesheet"><h1 id="拖拽网格" tabindex="-1">拖拽网格 <a class="header-anchor" href="#拖拽网格" aria-label="Permalink to &quot;拖拽网格&quot;">​</a></h1><p>拖拽网格布局</p><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2>',4),u={key:0,class:"grid-stack"},m=["gs-id"],_={class:"grid-stack-item-content",style:{border:"solid 1px #ddd","border-radius":"4px"}},b=l(`<details><summary>查看代码</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dragGrid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dragGridItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">item</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">w</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">h</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> v-for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">item </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{{item}}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dragGridItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dragGrid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></details><h2 id="api" tabindex="-1">api <a class="header-anchor" href="#api" aria-label="Permalink to &quot;api&quot;">​</a></h2><h3 id="draggrid-props" tabindex="-1">dragGrid props <a class="header-anchor" href="#draggrid-props" aria-label="Permalink to &quot;dragGrid props&quot;">​</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>cellHeight</td><td>一栏单元格高度</td><td>Number</td><td>50</td></tr><tr><td>float</td><td></td><td>boolean</td><td>false</td></tr><tr><td>handleClass</td><td>设置拖拽抓手</td><td>string</td><td></td></tr><tr><td>disableDrag</td><td>禁止拖拽</td><td>boolean</td><td>false</td></tr><tr><td>disableResize</td><td>禁止改变单元格大小</td><td>boolean</td><td>false</td></tr></tbody></table><h3 id="draggriditem-props" tabindex="-1">dragGridItem props <a class="header-anchor" href="#draggriditem-props" aria-label="Permalink to &quot;dragGridItem props&quot;">​</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>x</td><td>位置</td><td>Number</td><td>-</td></tr><tr><td>y</td><td>位置</td><td>Number</td><td>-</td></tr><tr><td>w</td><td>宽度 1 - 12之间</td><td>Number</td><td>2</td></tr><tr><td>h</td><td>高度</td><td>boolean</td><td>2</td></tr><tr><td>minW</td><td>最小宽度</td><td>boolean</td><td>-</td></tr><tr><td>minH</td><td>最小高度</td><td>boolean</td><td>-</td></tr><tr><td>maxW</td><td>最大宽度</td><td>boolean</td><td>-</td></tr><tr><td>maxH</td><td>最大高度</td><td>boolean</td><td>-</td></tr><tr><td>noResize</td><td>禁止改变单元格大小</td><td>boolean</td><td>false</td></tr><tr><td>noMove</td><td>禁止拖动</td><td>boolean</td><td>false</td></tr><tr><td>locked</td><td>锁住单元格</td><td>boolean</td><td>false</td></tr></tbody></table>`,6),C=JSON.parse('{"title":"拖拽网格","description":"","frontmatter":{},"headers":[],"relativePath":"components/vue/dragGrid.md","filePath":"components/vue/dragGrid.md"}'),F={name:"components/vue/dragGrid.md"},v=Object.assign(F,{setup(d){const s=n(!1);return c("https://gridstackjs.com/node_modules/gridstack/dist/es5/gridstack-all.js",()=>{s.value=!0,E(()=>{GridStack.init({cellHeight:80})})}),(e,t)=>(i(),a("div",null,[y,s.value?(i(),a("div",u,[(i(),a(p,null,k(12,r=>h("div",{class:"grid-stack-item","gs-id":r,"gs-w":3,"gs-h":2},[h("div",_,g(r),1)],8,m)),64))])):o("",!0),b]))}});export{C as __pageData,v as default};