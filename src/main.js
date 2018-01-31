import App from './project-1/App.vue';
import Vue from 'vue';

Vue.component(App.name, App);

let app = new Vue({
    el: '#app',
    components: {
        App
    }
});
export default App;