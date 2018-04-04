import Vue from 'vue';
import VueResource from 'vue-resource';

import App from './http/App.vue';

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

new Vue({
  el: '#app',
  render: h => h(App)
});
