import{d,h as r,l as o,y as c,o as l,c as p,J as E,m as t,a as k,a2 as g}from"./chunks/framework.CbPBrffd.js";const y={name:"LHtmlCodePreview"},F=d({...y,props:{html:{type:String,default:""},css:{type:String},js:{type:String}},setup(e,{expose:h}){const s=e,i=r(),n=()=>{if(i.value){const a=i.value.contentDocument||i.value.contentWindow.document;a.open(),a.write(`
        <!DOCTYPE html>
        <html lang="zh">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>${s.css}</style>
        </head>
        <body>
            ${s.html}
            <script>${s.js}<\/script>
        </body>
        </html>
    `),a.close()}};return o(()=>{n()}),c(()=>[s.html,s.css,s.js],()=>{n()}),h({preview:n}),(a,f)=>(l(),p("iframe",{class:"lib-html-code-preview",ref_key:"iFrameRef",ref:i},null,512))}}),m=t("h1",{id:"html代码预览",tabindex:"-1"},[k("html代码预览 "),t("a",{class:"header-anchor",href:"#html代码预览","aria-label":'Permalink to "html代码预览"'},"​")],-1),u=t("p",null,"设置自定义html、css、js代码预览器效果",-1),_=t("h2",{id:"基本用法",tabindex:"-1"},[k("基本用法 "),t("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1),C=t("p",null,"运行html、css、js代码",-1),v=g("",4),D=JSON.parse('{"title":"html代码预览","description":"","frontmatter":{},"headers":[],"relativePath":"components/vue/htmlCodePreview.md","filePath":"components/vue/htmlCodePreview.md"}'),b={name:"components/vue/htmlCodePreview.md"},w=Object.assign(b,{setup(e){const h="<div class='box'>我是一段html代码</div>",s=`
    .box {
      width:150px;
      height:150px;
      background:#ff0000;
    }
  `,i="console.log('运行js代码')";return(n,a)=>(l(),p("div",null,[m,u,_,C,E(F,{html:h,css:s,js:i}),v]))}});export{D as __pageData,w as default};
