import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/lib-agile',
  outDir: '../docs',
  title: 'libAgile',
  description: '简单方便快捷的综合库，包含工具函数、组件、样式，与第三方组件库形式优势互补。',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
      { text: '函数', link: '/function/algorithm', activeMatch: '/function/' },
      {
        text: '组件',
        activeMatch: '/components',
        items: [
          {
            text: 'vue3组件',
            link: '/components/vue/scrollBar',
            activeMatch: '/components/vue',
          },
          {
            text: 'react组件',
            link: '/components/react/scrollBar',
            activeMatch: '/components/react',
          },
        ],
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
        { text: '性能优化篇', link: '/function/browser' },
        { text: '数组篇', link: '/function/array' },
        { text: '对象篇', link: '/function/object' },
        { text: '数字篇', link: '/function/number' },
        { text: '字符串篇', link: '/function/string' },
        { text: 'html篇', link: '/function/html' },
        { text: '日期篇', link: '/function/date' },
        { text: '类型判断', link: '/function/type' },
        { text: '平台判断', link: '/function/platform' },
        { text: '正则篇', link: '/function/regex' },
        { text: '其他', link: '/function/other' },
      ],
      '/components/vue': [
        { text: '滚动条', link: '/components/vue/scrollBar' },
        {
          text: '均分网格',
          link: '/components/vue/avGrid',
        },
        {
          text: '三栏布局',
          link: '/components/vue/column',
        },
        {
          text: '拖拽网格',
          link: '/components/vue/dragGrid',
        },
        {
          text: '等比例缩放容器',
          link: '/components/vue/proportional',
        },
        {
          text: '颜色选择器',
          link: '/components/vue/colorPicker',
        },
        {
          text: '文本工具提示',
          link: '/components/vue/tooltip',
        },
      ],
      '/components/react': [
        { text: '滚动条', link: '/components/react/scrollBar' },
        {
          text: '等比例缩放容器',
          link: '/components/react/proportional',
        },
      ],
    },

    outline: {
      label: '页面导航',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/huangriya/lib-agile' }],
  },
})
