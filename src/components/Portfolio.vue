<script setup lang="ts">
    import type { Portfolio } from '../utils/types';
    
    const {label, amount, recurring}= defineProps<Portfolio>()
    const options = ['day', 'week',  'month',  'year']
    
</script>
<template>
    <div>
        <div class="choices">
            <div>{{ label }}</div>
            <input type="number" :value="amount" @input="$emit('update:amount', $event.target?.value)">
            <select 
            :value="recurring" 
            @change="$emit('update:recurring', $event.target?.value)">
                <option v-for="option in options" :value="option">per {{ option }}</option>
            </select>
        </div>
    </div>
</template>
<style scoped>
.choices{
    margin-left: 10px;
    display: flex;
    gap: 8px;
}
</style>