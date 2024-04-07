import{_ as s,o as i,c as a,a2 as n}from"./chunks/framework.CbPBrffd.js";const E=JSON.parse('{"title":"字符串篇","description":"","frontmatter":{},"headers":[],"relativePath":"function/string.md","filePath":"function/string.md"}'),t={name:"function/string.md"},p=n(`<h1 id="字符串篇" tabindex="-1">字符串篇 <a class="header-anchor" href="#字符串篇" aria-label="Permalink to &quot;字符串篇&quot;">​</a></h1><h2 id="随机字符串" tabindex="-1">随机字符串 <a class="header-anchor" href="#随机字符串" aria-label="Permalink to &quot;随机字符串&quot;">​</a></h2><p>随机生成指定长度的字符串，随机包含大写字母、小写字母、数字</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { randomStr } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;lib-agile&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">randomStr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; D2d4t</span></span></code></pre></div><h2 id="随机颜色" tabindex="-1">随机颜色 <a class="header-anchor" href="#随机颜色" aria-label="Permalink to &quot;随机颜色&quot;">​</a></h2><p>随机生成颜色值，支持 rgb, rgba, hsl, hsla, hex</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { randomColor } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;lib-agile&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">randomColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><h2 id="随机-ip" tabindex="-1">随机 ip <a class="header-anchor" href="#随机-ip" aria-label="Permalink to &quot;随机 ip&quot;">​</a></h2><p>随机生成 ip 地址，支持 ipv4 ipv6</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { randomIp } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;lib-agile&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">randomIp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//ipv4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">randomIp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//ipv6</span></span></code></pre></div>`,10),e=[p];function l(h,r,k,d,o,c){return i(),a("div",null,e)}const y=s(t,[["render",l]]);export{E as __pageData,y as default};