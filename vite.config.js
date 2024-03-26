import {resolve} from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 引入 mixin.scss 这样就可以在全局中使用 mixin.scss中预定义的变量了
        // 给导入的路径最后加上 ; 
        additionalData: '@import "@/style/utils.scss";'
      }
    }
  },
  
  resolve: {
    // 配置路径别名
    alias: {
      '@':resolve(__dirname, './src'),
    },
  },
});

