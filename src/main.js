import { createApp } from 'vue';
import App from './App.vue';

import Chusho, { $chusho, mergeDeep } from 'chusho';
import chushoConfig from '../chusho.config.js';

import '@/assets/base.css';

const app = createApp(App);
app.use(Chusho, chushoConfig);
app.mount('#app');

if (import.meta.hot) {
  import.meta.hot.accept('../chusho.config.js', (newConfig) => {
    mergeDeep($chusho.options, newConfig.default);
  });
}
