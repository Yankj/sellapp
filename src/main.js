// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResourse from 'vue-resource';
import App from './App';
import router from './router';

import '@/common/stylus/index.styl';

Vue.use(VueResourse);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
router.push('/goods');
// router.push({path: '/ratings', query: {userId: 123}});
// router.push({name: 'goods', query: {userId: 123}});

