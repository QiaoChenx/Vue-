import Vue from 'vue'
import App from './App.vue'

import router from '@/router'

import store from '@/store'

import '@/mock/mockServer'

import Carousel from '@/components/Carousel';

import '@/assets/swiper.min.css';

import Pagination from '@/components/Pagination';

import * as API from '@/api';

import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(elementUI);

import logo from '@/assets/logo.png';

import lazyLoad from 'vue-lazyload';
Vue.use(lazyLoad, {
  loading: logo
})

Vue.component(Pagination.name, Pagination);

Vue.component('Carousel', Carousel);

Vue.config.productionTip = false;

import '@/plugin/validate';

import NavType from '@/components/NavType';
Vue.component('NavType', NavType);

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    // Vue.prototype === this.__proto__;
    // Vue.prototype.$bus = this; 和下面等价
    this.__proto__.$bus = this;
    Vue.prototype.$API = API;
  },
}).$mount('#app')
