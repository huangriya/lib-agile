import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: '../docs',
  title: 'libAgile',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
      { text: '函数', link: '/function/algorithm', activeMatch: '/function/' },
      {
        text: '组件',
        link: '/components/scrollBar',
        activeMatch: '/components/',
      },
    ],

    sidebar: {
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' },
      //   ],
      // },
      '/function/': [
        { text: '算法篇', link: '/function/algorithm' },
        { text: '数据结构篇', link: '/function/dataStructure' },
        { text: '数组篇', link: '/function/array' },
        { text: '对象篇', link: '/function/object' },
        { text: '数字篇', link: '/function/number' },
        { text: '字符串篇', link: '/function/string' },
        { text: 'html篇', link: '/function/html' },
        { text: '浏览器篇', link: '/function/browser' },
        { text: '日期篇', link: '/function/date' },
        { text: '类型判断', link: '/function/type' },
        { text: '平台判断', link: '/function/platform' },
        { text: '正则篇', link: '/function/regex' },
        { text: '其他', link: '/function/other' },
      ],
      '/components/': [{ text: '滚动条', link: '/components/scrollBar' }],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
