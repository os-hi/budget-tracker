<script setup lang="ts">
    import {ref, reactive} from 'vue'
    import {useRouter} from 'vue-router'

    const router = useRouter()
    let isError = ref<boolean>(false)
    const errorMessage = ref<string>('')

    const data = reactive({
        username: '',
        password: ''
    })

    async function handleSubmit(){

        const request = await fetch('http://localhost:3000/register',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const results = await request.json()
        if(request.status === 409){
            isError.value = true
            errorMessage.value = results.message 
        }
        else if(request.status === 201){
            console.log(errorMessage.value = results.message)
            router.push({ name:'multiform', params:{name: results.username}})
        }
    }

</script>

<template>
    <div class="container">
       <form @submit.prevent="handleSubmit">
            <label for="username">username</label>
            <input 
                id="username"
                type="text"
                placeholder="username"
                v-model="data.username"
            >
            <div class="error" v-if="isError">{{ errorMessage }}</div>
            <label for="password">password</label>
            <input 
                id="password"
                type="password"
                placeholder="password"
                v-model="data.password"
            >
            <button type="submit">signup</button>
            <p>Already have an account? <router-link to="/">login</router-link></p>
       </form>
    </div>
</template>


<style scoped>
.container{
    width: 350px;
    border: 1px solid white;
    background: white;
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