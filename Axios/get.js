// npm install axios
// 설치 한 axios 가져오기, 파이썬으로 치면 import
const axios = require('axios');
// import axios from 'axios';
//게시글 리스트를 가져오기
const django = async() => {
  const url = "http://127.0.0.1:8000/api/v1/articles/"
  const response = await axios.get(url);
  console.log(response.data)
}

//게시글(상세) 가져오기
const djangoDetail = async(id) => {
  const url = `http://127.0.0.1:8000/api/v1/articles/${id}/`
  try{
    const response = await axios.get(url);
    console.log(response.data);
  } catch(error){
    if (error.response) {
      // 에러 응답이 있는 경우
      console.error('에러 상태 코드:', error.response.status);
      console.error('에러 헤더:', error.response.headers);
    } else {
      console.error('에러 발생:', error);
    }
  }
  
}


// django()
djangoDetail(4)