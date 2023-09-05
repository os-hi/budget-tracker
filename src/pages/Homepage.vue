<script setup lang="ts">
import {ref, computed} from 'vue'
    import homepage from '../layouts/homepage.vue';
    import Login from '../components/Login.vue';
    import Signup from '../components/Signup.vue';
    import About from '../components/About.vue';

    const routes: Record<string, any> = {
        '/': Login,
        '/register': Signup
    }

    const currentPath = ref(window.location.hash)

    window.addEventListener('hashchange', () => {
        currentPath.value = window.location.hash
    })

    const currentView = computed(() => {
        return  routes[currentPath.value.slice(1) || '/'] 
    })
</script>

<template>
     <div class="parent">
        <homepage>
            <div class="container">
                <About />
                <component :is="currentView" />
            </div>
        </homepage>
    </div>
</template>

<style scoped>
.parent{
    background: #3F3E41;
}
.container{
    display: flex;
    justify-content: space-around;
}
</style>
