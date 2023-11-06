<script setup>
import { ref } from 'vue'
import axios from 'axios'
const count = ref('rkskar')

const baseURL = 'http://finlife.fss.or.kr'
const key = '7ba015560fa92446dca297578a318783'
const getList = async () => {
  try{
    const response = await axios.get(
      `${baseURL}/finlifeapi/depositProductsSearch.json`, {
      params: {
        auth: key,
        topFinGrpNo: '020000',
        pageNo: 1
      }
    })
    console.log(response.data)
    count.value = response.data
  } catch(error){
    console.error(error)
  }
}
getList()
// axios.get('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => {
//     // 성공 핸들링
//     console.log(response);
//     // count.value = response.data
//     return response
//   })
//   .catch((error) => {
//     // 에러 핸들링
//     console.log(error);
//   })

</script>

<template>
  <div>
    {{ count }}
  </div>
</template>


<style scoped>

</style>
