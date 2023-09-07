<script setup lang="ts">
    import { Categories } from '../utils/types';
    import Category from './Category.vue';


    const {categories} = defineProps<Categories>()
</script>

<template>
        <div v-for="item in categories">
            <Category 
                :total="item.total"  
                :type="item.type"
                :options="item.options"
            />
        </div>
</template>
<style scoped>

</style>