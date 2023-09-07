<script setup lang="ts">
    import type { Option } from '../utils/types';
    import Portfolio from './Portfolio.vue';
    import {ref} from 'vue'
    
    const {name, portfolios} = defineProps<Option>()
        const isClicked = ref(false)

    function onClick(){
        isClicked.value = !isClicked.value
    }
</script>
<template>
    <div>
        <div @click="onClick">{{ name }}</div>
        <div v-if="isClicked" v-for="portfolio in portfolios">
            <Portfolio 
                :label="portfolio.label" 
                :amount="portfolio.amount" 
                @update:amount = "newValue => portfolio.amount = newValue"
                :recurring="portfolio.recurring"
                @update:recurring = "newValue => portfolio.recurring = newValue"
            />
        </div>
    </div>
</template>
<style scoped>

</style>