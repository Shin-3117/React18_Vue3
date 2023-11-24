<script setup>
import { ref } from 'vue'
import getDepositList from './api/bank';
import BankList from './components/BankList.vue';
const count = ref('rkskar')

const data = ref('')

const getData = async ()=>{
  data.value = await getDepositList()
  // console.log(data.value)
  const dataSet = (data)=>{
      for (const base of data.value.result.baseList){
      base.options = []
      for (const option of data.value.result.optionList){
        if (base.fin_prdt_cd === option.fin_prdt_cd){
          base.options.push(option)
        }
      } 
    }
  }
  await dataSet(data)
}
</script>

<template>
  <main>
    <div>
      {{ count }}
    </div>
    <BankList :data="data"/>
  <button v-on:click="getData()">금융정보 부르기</button>
  </main>
</template>


<style scoped>
.bankName{
  padding: 8px;
  
}
</style>
