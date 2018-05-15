import User from './user/User.vue';
import UserStart from './user/UserStart.vue';
import UserDetail from './user/UserDetail.vue';
import EditUser from './user/EditUser.vue';
import Home from './Home.vue';

export const routes = [
    {
        path: '/user',
        component: User,
        children: [
            {
                path: '',
                component: UserStart
            },
            {
                path: ':id',
                component: UserDetail
            },
            {
                path: ':id/edit',
                component: EditUser
            }
        ]
    },
    { path: '/', component: Home }
];
