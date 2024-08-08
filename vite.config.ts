import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import './env/config'
import getBulidTime from './getBulidTime.cjs'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  envDir: 'env',
  define: {
    SERVER_TIMESTAMP: Date.now(),
    // eslint-disable-next-line quotes
    PROJECT_VERSION: "'0.1.0'",
  },
  plugins: [
    getBulidTime(),
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: [
          '@emotion/babel-plugin',
          '@babel/plugin-proposal-optional-chaining',
          '@babel/plugin-proposal-nullish-coalescing-operator',
        ],
      },
    }),
    legacy({
      targets: ['chrome>=75'], // default 'last 2 versions and not dead, > 0.3%, Firefox ESR'
      // If it's not set, plugin-legacy will fallback to the default value.
      // modernTargets: [] default 'edge>=79, firefox>=67, chrome>=64, safari>=12, chromeAndroid>=64, iOS>=12'
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      // polyfills: ['es.array.at'],
      modernPolyfills: ['es.array.at'],
    }),
    visualizer({
      emitFile: true,
      filename: 'visualizer.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 8090,
  },
  build: {
    // sourcemap: true,
    rollupOptions: {
      // output: {
      //   manualChunks (id) {
      //     console.log('file id', id)
      //   },
      // },
      output: {
        chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
        entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
        assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@stores': path.resolve(__dirname, './src/stores'),
      '@api': path.resolve(__dirname, './src/api'),
    },
  },
})
