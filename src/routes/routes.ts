import {createRouter, createWebHistory} from "vue-router"
import Homepage from '../pages/Homepage.vue'
import Signup from "../components/Signup.vue"
import Dashboardpage from "../pages/Dashboardpage.vue"
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
                {
                    path: '/',
                    name: 'home',
                    component: Homepage
                },
                {
                    path: '/register',
                    name: 'register',
                    component: Signup
                },
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: Dashboardpage
                },
            ]

})

export default router