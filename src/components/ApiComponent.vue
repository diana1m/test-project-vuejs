<script setup>
import { ref, watchEffect } from 'vue'

const API_URL = `https://catfact.ninja/fact`

const result = ref(null)
const firstMsg = ref("Дивитись факт про котиків")
const secondMsg = ref("Змінити факт")

// watchEffect(async () => {
//   result.value = await (await fetch(API_URL)).json()
// })

async function fetchFact() {
    result.value = await (await fetch(API_URL)).json()
}

</script>

<template>
    <button :disabled="result" @click="fetchFact">Дивитись факт про котиків</button>
    <p v-if="result">{{ result.fact }}</p>
</template>