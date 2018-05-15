import User from './user/User.vue';
import Home from './Home.vue';

export const routes = [
    { path: '/user/:id', component: User },
    { path: '/', component: Home }
];
