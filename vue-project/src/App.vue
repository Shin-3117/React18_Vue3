<script setup>
import { ref } from 'vue'
import getDepositList from './api/bank';
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
  <div>
    {{ count }}
  </div>
  <div v-if="data">
    {{ data && data.result.total_count }}
    <ul v-for="d in data.result.baseList" :key="d.fin_prdt_nm">
      <span class="bankName">{{ d.kor_co_nm }}</span>
      <span>{{ d.fin_prdt_nm }} </span>
      <p>가입경로: {{ d.join_way }}</p>
      <p>{{ d.mtrt_int }}</p>
      <!-- <p>fin_co_no: {{ d.fin_co_no }}</p>
      <p>fin_prdt_cd: {{ d.fin_prdt_cd }}</p> -->
      <!-- <p>{{ d.options }}</p> -->
      <p>---옵션---</p>
      <li v-for="(option, index) in d.options" :key="index">
        <p>기간: {{ option.save_trm }} 
          <span>이자적용: {{ option.intr_rate_type_nm }}</span>
          <span>이자율: {{ option.intr_rate }}</span>
          <span>우대이자율: {{ option.intr_rate2 }}</span>
        </p>
      </li>
      <hr>
    </ul>
  </div>
  <button v-on:click="getData()">금융정보 부르기</button>
</template>


<style scoped>
.bankName{
  padding: 8px;
  
}
</style>
