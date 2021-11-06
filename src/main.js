import { createApp } from 'vue';
import Unicon from 'vue-unicons';
import App from './App.vue';
import './index.css';
import router from './router';
import {
  uniLayerGroupMonochrome,
  uniCarWash,
  uniGithub,
  uniLinkedin,
  uniArrowUp,
  uniMoon,
  uniSun
} from 'vue-unicons/dist/icons';

Unicon.add([
  uniLayerGroupMonochrome,
  uniCarWash,
  uniGithub,
  uniLinkedin,
  uniArrowUp,
  uniMoon,
  uniSun,
]);

createApp(App).use(router).use(Unicon).mount('#app');
