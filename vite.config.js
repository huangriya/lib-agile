import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import { buildPlugin } from 'vite-plugin-build'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    buildPlugin({
      fileBuild: {
        emitDeclaration: true,
      },
      libBuild: {
        buildOptions: {
          rollupOptions: {
            external: ['vue'],
            output: { globals: { vue: 'Vue' } },
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
    dedupe: ['vue'],
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
