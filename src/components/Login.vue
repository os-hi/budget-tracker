<script setup lang="ts">
    import {reactive, ref} from 'vue'
    import {User} from '../types/types'

    let isError = ref<boolean>(false)
    const errorMessage = ref<string>('')
    const data = reactive<User>({
        username: '',
        password: ''
    })
    async function handleSubmit(){
        try{
            const request = await fetch('http://localhost:3000/login', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            const results = await request.json()
            if(request.status === 400 || request.status === 401){
                isError.value = true
                errorMessage.value = results.message 
            }
            else if(request.status === 202){
                console.log(errorMessage.value = results.message)
                
            }
        }
        catch(error){
            console.log(error)
        }
    }
    
</script>


<template>
    <div class="container">
        <form @submit.prevent="handleSubmit">
            <label for="username">Username</label>
            <input 
                id="username" 
                type="text" 
                placeholder="username"
                v-model="data.username"
            >
            <label for="">Password</label>
            <input 
                id="password" 
                type="text" 
                placeholder="password"
                v-model="data.password"
            >
            <div class="error" v-if="isError">{{ errorMessage }}</div>
            <button type="submit">login</button>
            <p>Don't have an account yet? <router-link to="/register">signup</router-link></p>
        </form>
    </div>
</template>

<style scoped>
.container{
    width: 350px;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
}
input,button{
    border-radius: 5px;
    width: 250px;
    padding: 8px;
    color: black;
}

form{
    display: flex;
    flex-direction: column;
    
    gap: 10px;
}
.error{
    display: flex;
    color: red;
}
.register{
    color: blue;
}
</style>