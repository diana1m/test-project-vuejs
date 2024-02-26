<script setup>
import { ref, watchEffect } from 'vue'
import IconDelete from './icons/IconDelete.vue'

const STORAGE_KEY = 'my-list'

const usersList = ref(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))
const text = ref('')

watchEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(usersList.value))
})

function addItem(e) {
    usersList.value.push(text.value)
    text.value=''
    e.target.value=''
}
</script>

<template>
    <div class="wrapper">
        <input v-model.lazy="text" @keyup.enter="addItem"> 
        <button @click="addItem" :style="{cursor: 'pointer'}">Додати</button>
    </div>
    <ul v-if="usersList.length" class="list">
        <li v-for="item of usersList" class="listItem">
            <p>{{ item }}</p>
            <button class="button" @click="usersList = usersList.filter(a => a!= item)">
            <IconDelete/> Delete
            </button>
        </li>
    </ul>
    <p v-if="!usersList.length">Тут буде ваш список</p>
</template>

<style>
.wrapper {
    margin-bottom: 35px;
}
.list {
  padding: 0;
}

.listItem {
    display: flex;
    gap: 8px;
    width: 240px;
    justify-content: space-between;
    margin-bottom: 25px;
}

.button {
    cursor: pointer;
    display: flex;
    gap: 5px;
    align-items: center;
}
</style>