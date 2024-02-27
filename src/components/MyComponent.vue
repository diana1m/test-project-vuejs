<script setup>
import { ref, watchEffect } from 'vue'
import IconDelete from './icons/IconDelete.vue'
import {useListStore} from '../stores/list'
import { storeToRefs } from 'pinia'

const STORAGE_KEY = 'my-list'
const store = useListStore()

const { taskList } = storeToRefs(store)
const { addItem, deleteItem} = store

// const usersList = ref(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))
const text = ref('')

// watchEffect(() => {
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(usersList.value))
// })

function createItem(e) {
    addItem(text.value)
    text.value=''
    e.target.value=''
}

</script>

<template>
    <div class="wrapper">
        <input v-model.lazy="text" @keyup.enter="createItem"> 
        <button @click="createItem" :style="{cursor: 'pointer'}">Додати</button>
    </div>
    <ul v-if="taskList.length" class="list">
        <li v-for="item of taskList" class="listItem">
            <p>{{ item }}</p>
            <button class="button" @click="()=>deleteItem(item)"> 
                <IconDelete/> Delete
            </button> 
        </li>
    </ul>
    <p v-if="!taskList.length">Тут буде ваш список</p>
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