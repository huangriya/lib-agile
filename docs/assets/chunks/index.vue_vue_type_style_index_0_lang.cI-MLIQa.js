import{d as a,h as l,l as r,y as i,o as m,c as d}from"./framework.D57hjDWj.js";const p={name:"LHtmlCodePreview"},f=a({...p,props:{html:{type:String,default:""},css:{type:String},js:{type:String}},setup(s,{expose:c}){const e=s,t=l(),n=()=>{if(t.value){console.log("ddd");const o=t.value.contentDocument||t.value.contentWindow.document;o.open(),o.write(`
        <!DOCTYPE html>
        <html lang="zh">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
            body {
              padding: 0;
              margin: 0;
            }
            </style>
            <style>${e.css}</style>
        </head>
        <body>
            ${e.html}
            <script>${e.js}<\/script>
        </body>
        </html>
    `),o.close()}};return n(),r(()=>{n()}),i(()=>[e.html,e.css,e.js],()=>{n()}),c({preview:n}),(o,h)=>(m(),d("iframe",{class:"lib-html-code-preview",ref_key:"iFrameRef",ref:t},null,512))}});export{f as _};
