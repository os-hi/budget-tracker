<script setup lang="ts">
    import Form from '../components/Form.vue';
    import { useCategoryStore } from '../stores/store'
    import {ref, computed} from 'vue'

    const categoryStore = useCategoryStore()
    const findCategory = ref(0)
    const currentTab = ref(categoryStore.state[findCategory.value].name)
    const navigations = categoryStore.state

    const nextBtn = ref('next')
    const prevBtn = ref('prev')
    const submitBtn = ref('submit')

    const tabs = computed(()=>{
        const names = navigations.map((nav)=> nav.name)
        return names
    })
    function onClick(tab: string, index:number){
        currentTab.value = tab
        findCategory.value = index 
    }
    function nextClick(){
        findCategory.value +=1
        currentTab.value = categoryStore.state[findCategory.value].name
    }
    function prevClick(){
      findCategory.value -= 1
      currentTab.value = categoryStore.state[findCategory.value].name
    }
    function submitClick(){
            console.log("total")  
    }
</script>

<template>
    <div class="demo">
        <div class="buttons">
            <button 
                v-for="(tab, index) in tabs"
                :key="tab"
                :class="['tab-button', {active: currentTab === tab}]"
                @click="onClick(tab, index)"
            >{{ tab }}</button>
        </div>
            <Form 
            :is="currentTab" 
            :name="currentTab" 
            :categories="navigations[findCategory].categories" 
            class="tab" 
            />
            <br>
            <button v-if="findCategory !== 7 && findCategory !== 0" @click="prevClick">{{ prevBtn }}</button>
            <button @click="nextClick" v-if="findCategory !== tabs.length-1">{{ nextBtn }}</button>
            <button v-else @click="submitClick">{{ submitBtn }}</button>
            <br>
            <br>
          <div v-if="currentTab === 'Income'">total amount: {{ categoryStore.income }}</div>
          <div v-if="currentTab === 'Household'">total amount: {{ categoryStore.household }}</div>
        </div>
   
</template>



<style scoped>
.demo {
  width: 500px; 
  height: 600px;
  border: 1px solid black;
  border-radius: 2px;
  padding: 20px;
  user-select: none;
  overflow-x: auto;
}
.buttons{
  width: 100%;
  height: 40px;
  padding-left: 10px;
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
}
.tab-button {
  padding: 6px 10px;
  color: #fff;
  opacity: 0.5;
  border: none;
  cursor: pointer;
  background: #303030;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  border-bottom: 1px solid #8255E4;
  opacity: 1;
}
.tab-button.active {
  font-weight: bold;
  color: #BFA7EB;
  border-bottom: 2px solid #8255E4;
  opacity: 1;
}
.tab {
  padding: 10px;
}

.next{
  width: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid white;
}
.next>button{
  padding: 8px;
  background-color: #8255E4;
  color: white;
  border-radius: 5px;
}
</style>