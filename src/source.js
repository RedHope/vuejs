import Vue from 'vue';
import HealthBar from './HealthBar.vue';

Vue.component(HealthBar.name, HealthBar);

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    components: {
        HealthBar
    }
});