import Vue from 'vue';
import App from './animations-project/App.vue';

Vue.directive('translate', function(el) {
  el.innerHTML = 'translated';
});

new Vue({
  el: '#app',
  render: h => h(App)
});
