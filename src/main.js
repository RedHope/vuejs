import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './vuex/App.vue';

import { routes } from './routing/routes';

Vue.use(VueResource);
Vue.http.options.root = `${ENVIRONMENT.FIREBASE_URL}/`;
Vue.http.interceptors.push((req, next) => {
  next(res => {
    res.json = () => res.body;
  });
});
Vue.directive('translate', function(el) {
  el.innerHTML = 'translated';
});
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
