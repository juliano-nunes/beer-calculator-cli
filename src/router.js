import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue';
import Result from './components/Home.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/result',
            name: 'result',
            component: Result
        },
    ]
})