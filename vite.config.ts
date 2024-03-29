import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import MockServer from './plugin/index';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), MockServer({
    api:{
      'page/index': {
        res: {
          name: 'xiaoming',
          id: 1,
          list: [{
            name: '1'
          },{
            name: '2'
          }]
        }      
      }
    }
  })],
})
