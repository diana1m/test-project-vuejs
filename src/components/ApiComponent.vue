<script setup>
import { ref } from 'vue'

const API_URL = `https://catfact.ninja/fact`

const result = ref(null)
const firstMsg = ref("Дивитись факт про котиків")
const secondMsg = ref("Змінити факт")

async function fetchFact() {
    result.value = await (await fetch(API_URL)).json()
}

</script>

<template>
    <div class="wrapperApi">
       <button @click="fetchFact">{{ result ? secondMsg : firstMsg }}</button>
        <p v-if="result" :style="{ width: '240px' }">{{ result.fact }}</p> 
    </div>
</template>

<style>
.wrapperApi{
    margin-bottom: 40px;
    height: 300px;
    }
</style>