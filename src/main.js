import Vue from 'vue';
import VueResource from 'vue-resource';

import App from './http/App.vue';

Vue.use(VueResource);
Vue.http.options.root = `${ENVIRONMENT.FIREBASE_URL}/data.json`;
Vue.directive('translate', function(el) {
  el.innerHTML = 'translated';
});

new Vue({
  el: '#app',
  render: h => h(App)
});
