import Vue from 'vue';
import Router from 'vue-router';
import Cities from "@/components/Cities";
import Settings from "@/components/Settings";


Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes:
        [
            {
                path: '/',
                name: 'index',
                component: Cities
            },

            {
                path: '/settings',
                name: 'settings',
                component: Settings
            }
        ]
})


export default router;