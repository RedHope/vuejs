import Vue from 'vue';
import App from './project-3/App.vue';

Vue.directive('translate', function(el) {
  console.log('here');
  el.innerHTML = 'translated';
});

new Vue({
  el: '#app',
  render: h => h(App)
});
