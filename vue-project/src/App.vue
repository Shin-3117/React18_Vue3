<script setup>
import { ref } from 'vue'
import axios from 'axios'
const count = ref(123)


axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => {
    // 성공 핸들링
    console.log(response);
    return response
  })
  .catch((error) => {
    // 에러 핸들링
    console.log(error);
  })
// console.log('a', a)
// console.log('response', response)
</script>

<template>
  <div>
    {{ count }}
  </div>
</template>


<style scoped>

</style>
