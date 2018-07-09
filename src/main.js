// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import Vuex from 'vuex';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css'
import store from './vuex/store'

import 'babel-polyfill';
import VueLazyLoad from 'vue-lazyload'; // 图片懒加载
import 'common/stylus/index.styl'; // 引入样式表
Vue.use(VueLazyLoad, {
  loading: require('./common/image/loading.gif')
});

Vue.use(ElementUI,{ size: 'small', zIndex: 3000 });
Vue.use(VueResource);
Vue.use(Vuex);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  render: h => h(App),
  template: '<App/>'
},)

export default store;
