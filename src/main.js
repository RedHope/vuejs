import Vue from 'vue';
import App from './project-4-sol/App.vue';

Vue.directive('translate', function(el) {
  el.innerHTML = 'translated';
});

new Vue({
  el: '#app',
  render: h => h(App)
});
