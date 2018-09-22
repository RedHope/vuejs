import Vue from 'vue';
import App from './vuex/App.vue';
import store from './vuex/store';


// Vue.use(VueResource);
// Vue.http.options.root = `${ENVIRONMENT.FIREBASE_URL}/`;
// Vue.http.interceptors.push((req, next) => {
//   next(res => {
//     res.json = () => res.body;
//   });
// });
Vue.directive('translate', function(el) {
  el.innerHTML = 'translated';
});
// Vue.use(VueRouter);

// const router = new VueRouter({
//   routes,
//   mode: 'history'
// });
new Vue({
  store,
  el: '#app',
  // router,
  render: h => h(App)
});
