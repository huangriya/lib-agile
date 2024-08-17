function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/index.CWHECLqW.js","assets/chunks/framework.D57hjDWj.js","assets/chunks/index.vue_vue_type_style_index_0_lang.y8mHdDYn.js","assets/chunks/index.vue_vue_type_style_index_0_lang.cI-MLIQa.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a3 as p,o as e,c as o,J as l,p as d,m as i,a as s,a2 as h,a4 as k}from"./chunks/framework.D57hjDWj.js";const g=i("h1",{id:"html代码在线运行",tabindex:"-1"},[s("html代码在线运行 "),i("a",{class:"header-anchor",href:"#html代码在线运行","aria-label":'Permalink to "html代码在线运行"'},"​")],-1),x=i("p",null,"html代码在线运行器，支持在线编辑，在线预览",-1),c=i("h2",{id:"基本用法",tabindex:"-1"},[s("基本用法 "),i("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1),b=h(`<details><summary>查看代码</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">htmlCodeRun</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">js</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">js</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">html</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">css</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">css</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">htmlCodeRun</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> html</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`&lt;div class=&#39;box&#39;&gt;我是一段html代码&lt;/div&gt;\`</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> css</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    .box {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      width:150px;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      height:150px;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      background:#ff0000;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  \`</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> js</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`console.log(&#39;运行js代码&#39;)\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></details><h2 id="api" tabindex="-1">api <a class="header-anchor" href="#api" aria-label="Permalink to &quot;api&quot;">​</a></h2><h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>html</td><td>自定义html代码</td><td>string</td><td>-</td></tr><tr><td>css</td><td>自定义css代码</td><td>string</td><td>-</td></tr><tr><td>js</td><td>自定义js代码</td><td>string</td><td>-</td></tr></tbody></table>`,4),f=JSON.parse('{"title":"html代码在线运行","description":"","frontmatter":{},"headers":[],"relativePath":"components/vue/htmlCodeRun.md","filePath":"components/vue/htmlCodeRun.md"}'),u={name:"components/vue/htmlCodeRun.md"},v=Object.assign(u,{setup(m){const t=p(()=>k(()=>import("./chunks/index.CWHECLqW.js"),__vite__mapDeps([0,1,2,3]))),a=`<div class="solarsys">
  <!--太阳-->
  <div class='sun'></div>

  <!--水星轨道-->
  <div class='mercuryOrbit'></div>

  <!--水星-->
  <div class='mercury'></div>

  <!--金星轨道-->
  <div class='venusOrbit'></div>

  <!--金星-->
  <div class='venus'></div>

  <!--地球轨道-->
  <div class='earthOrbit'></div>

  <!--地球-->
  <div class='earth'></div>

  <!--火星轨道-->
  <div class='marsOrbit'></div>

  <!--火星-->
  <div class='mars'></div>

  <!--木星轨道-->
  <div class='jupiterOrbit'></div>

  <!--木星-->
  <div class='jupiter'></div>

  <!--土星轨道-->
  <div class='saturnOrbit'></div>

  <!--土星-->
  <div class='saturn'></div>

  <!--天王星轨道-->
  <div class='uranusOrbit'></div>

  <!--天王星-->
  <div class='uranus'></div>

  <!--海王星轨道-->
  <div class='neptuneOrbit'></div>

  <!--海王星-->
  <div class='neptune'></div>
</div>`,r=`.solarsys{
  width: 800px;
  height: 800px;;
  position: relative;
  margin: 0 auto;
  background-color: #000000;
  padding: 0;
  transform: scale(1);
}

/*太阳*/
.sun {
  left:357px;
  top:357px;
  height: 90px;
  width: 90px;
  background-color: rgb(248,107,35);
  border-radius: 50%;
  box-shadow: 5px 5px 10px rgb(248,107,35), -5px -5px 10px rgb(248,107,35), 5px -5px 10px rgb(248,107,35), -5px 5px 10px rgb(248,107,35);
  position: absolute;
  margin: 0;
}

/*水星*/
.mercury {
  left:337.5px;
  top:395px;
  height: 10px;
  width: 10px;
  background-color: rgb(166,138,56);
  border-radius: 50%;
  position: absolute;
  transform-origin: 62.5px 5px;
  animation: rotate 1.5s infinite linear;
}

/*水星轨道*/
.mercuryOrbit {
  left:342.5px;
  top:342.5px;
  height: 115px;
  width: 115px;
  background-color: transparent;
  border-radius: 50%;
  border-style: dashed;
  border-color: gray;
  position: absolute;
  border-width: 1px;
  margin: 0px;
  padding: 0px;
}

/*金星*/
.venus {
  left:309px;
  top:389px;
  height: 22px;
  width: 22px;
  background-color: rgb(246,157,97);
  border-radius: 50%;
  position: absolute;
  transform-origin: 91px 11px;
  animation: rotate 3.84s infinite linear;
}

/*金星轨道*/
.venusOrbit {
  left:320px;
  top:320px;
  height: 160px;
  width: 160px;
  background-color: transparent;
  border-radius: 50%;
  border-style: dashed;
  border-color: gray;
  position: absolute;
  border-width: 1px;
  /*margin: 100px;*/
  /*transform-origin: -75px -75px;*/
  /*animation: rotate 4s infinite linear;*/
  margin: 0px;
  padding: 0px;
}

/*地球*/
.earth {
  left:266.5px;
  top:391px;
  height: 18px;
  width: 18px;
  background-color: rgb(115,114,174);
  border-radius: 50%;
  position: absolute;
  transform-origin: 134px 9px;
  animation: rotate 6.25s infinite linear;
}

/*地球轨道*/
.earthOrbit {
  left:275px;
  top:275px;
  height: 250px;
  width: 250px;
  background-color: transparent;
  border-radius: 50%;
  border-style: dashed;
  border-color: gray;
  position: absolute;
  border-width: 1px;
  /*margin: 100px;*/
  /*transform-origin: -75px -75px;*/
  /*animation: rotate 4s infinite linear;*/
  margin: 0px;
  padding: 0px;
}

/*火星*/
.mars {
  left:222.5px;
  top:392.5px;
  height: 15px;
  width: 15px;
  background-color: rgb(140,119,63);
  border-radius: 50%;
  position: absolute;
  transform-origin: 177.5px 7.5px;
  animation: rotate 11.75s infinite linear;
}

/*火星轨道*/
.marsOrbit {
  left:230px;
  top:230px;
  height: 340px;
  width: 340px;
  background-color: transparent;
  border-radius: 50%;
  border-style: dashed;
  border-color: gray;
  position: absolute;
  border-width: 1px;
  /*margin: 100px;*/
  /*transform-origin: -75px -75px;*/
  /*animation: rotate 4s infinite linear;*/
  margin: 0px;
  padding: 0px;
}

/*木星*/
.jupiter {
  left:134px;
  top:379px;
  height: 42px;
  width: 42px;
  background-color: rgb(156,164,143);
  border-radius: 50%;
  position: absolute;
  transform-origin: 266px 21px;
  animation: rotate 74.04s infinite linear;
}

/*木星轨道*/
.jupiterOrbit {
  left:155px;
  top:155px;
  height: 490px;
  width: 490px;
  background-color: transparent;
  border-radius: 50%;
  border-style: dashed;
  border-color: gray;
  position: absolute;
  border-width: 1px;
  /*margin: 100px;*/
  /*transform-origin: -75px -75px;*/
  /*animation: rotate 4s infinite linear;*/
  margin: 0px;
  padding: 0px;
}

/*土星*/
.saturn {
  left:92px;
  top:387px;
  height: 26px;
  width: 26px;
  background-color: rgb(215,171,68);
  border-radius: 50%;
  position: absolute;
  transform-origin: 308px 13px;
  animation: rotate 183.92s infinite linear;
}

/*土星轨道*/
.saturnOrbit {
  left:105px;
  top:105px;
  height: 590px;
  width: 590px;
  background-color: transparent;
  border-radius: 50%;
  border-style: dashed;
  border-color: gray;
  position: absolute;
  border-width: 1px;
  /*margin: 100px;*/
  /*transform-origin: -75px -75px;*/
  /*animation: rotate 4s infinite linear;*/
  margin: 0px;
  padding: 0px;
}

/*天王星*/
.uranus {
  left:41.5px;
  top:386.5px;
  height: 27px;
  width: 27px;
  background-color: rgb(164,192,206);
  border-radius: 50%;
  position: absolute;
  transform-origin: 358.5px 13.5px;
  animation: rotate 524.46s infinite linear;
}

/*天王星轨道*/
.uranusOrbit {
  left:55px;
  top:55px;
  height: 690px;
  width: 690px;
  background-color: transparent;
  border-radius: 50%;
  border-style: dashed;
  border-color: gray;
  position: absolute;
  border-width: 1px;
  /*margin: 100px;*/
  /*transform-origin: -75px -75px;*/
  /*animation: rotate 4s infinite linear;*/
  margin: 0px;
  padding: 0px;
}

/*海王星*/
.neptune {
  left:10px;
  top:390px;
  height: 20px;
  width: 20px;
  background-color: rgb(133,136,180);
  border-radius: 50%;
  position: absolute;
  transform-origin: 390px 10px;
  animation: rotate 1028.76s infinite linear;
}

/*海王星轨道*/
.neptuneOrbit {
  left:20px;
  top:20px;
  height: 760px;
  width: 760px;
  background-color: transparent;
  border-radius: 50%;
  border-style: dashed;
  border-color: gray;
  position: absolute;
  border-width: 1px;
  /*margin: 100px;*/
  /*transform-origin: -75px -75px;*/
  /*animation: rotate 4s infinite linear;*/
  margin: 0px;
  padding: 0px;
}

@keyframes rotate {
  100% {
    transform: rotate(-360deg);
  }
}
`,n="console.log('运行js代码')";return(E,y)=>(e(),o("div",null,[g,x,c,l(d(t),{js:n,html:a,css:r}),b]))}});export{f as __pageData,v as default};
