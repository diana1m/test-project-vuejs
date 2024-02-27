import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useListStore = defineStore('list', () => {
    const taskList = ref([])
    
    function addItem(text) {
        taskList.value.push(text)
    }

    function deleteItem(text) {
        taskList.value = taskList.value.filter((item) => item !== text)
    }
  
    return { taskList, addItem, deleteItem }
})