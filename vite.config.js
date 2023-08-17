import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import { buildPlugin } from 'vite-plugin-build'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      exclude: [/\.jsx$/],
    }),
    react(),
    buildPlugin({
      fileBuild: {
        emitDeclaration: true,
      },
      libBuild: {
        buildOptions: {
          rollupOptions: {
            external: ['vue', 'react'],
            output: { globals: { vue: 'Vue', react: 'React' } },
          },
          lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'lib-agile',
          },
        },
      },
    }),
  ],
  resolve: {
    dedupe: ['vue', 'react'],
    alias: {
      '@': path.join(__dirname, './src'),
    },
  },
  // build: {
  //   lib: {
  //     entry: resolve(__dirname, 'src/index.ts'),
  //     name: 'lib-agile',
  //   },
  //   rollupOptions: {
  //     external: ['vue'],
  //     output: {
  //       globals: {
  //         vue: 'Vue',
  //       },
  //     },
  //   },
  // },
})
