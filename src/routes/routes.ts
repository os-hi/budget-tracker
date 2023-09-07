import {createRouter, createWebHistory} from "vue-router"
import Homepage from '../pages/Homepage.vue'
import Dashboardpage from "../pages/Dashboardpage.vue"
import Multiform from "../pages/Multiform.vue"
import Signup from "../components/Signup.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
                {
                    path: '/',
                    name: 'home',
                    component: Homepage
                },
                {
                    path: '/dashboard/:name',
                    name: 'dashboard',
                    component: Dashboardpage
                },
                {
                    path: '/register',
                    name: 'register',
                    component: Signup
                },
                {
                    path: '/multiform/:name',
                    name: 'multiform',
                    component: Multiform
                },
            ]

})

export default router