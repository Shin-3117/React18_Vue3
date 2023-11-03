const axios = require('axios');

const put = async (id) => {
  const url = `http://127.0.0.1:8000/api/v1/articles/${id}/`;
  const data = {
    title: '제목수정12',
    content: '내용수정',
  };
  // const headers = {
  //   'Content-Type': 'application/json',
  // };
  const config = {
    method: 'put',
    url: url,
    data: data,
    // headers: headers,
  };
// 파이썬의 try except 와 비슷합니다.
  try {
    const response = await axios(config);
    console.log(response.data);
  } catch (error) {
    if (error.response) {
      // 에러 응답이 있는 경우
      console.error('에러 상태 코드:', error.response.status);
      // console.error('에러 헤더:', error.response.headers);
    } else {
      console.error('에러 발생:', error);
    }
  }
};

// 함수 호출
// put(2);

const put2 = async (id) => {
  const url = `http://127.0.0.1:8000/api/v1/articles/${id}/`;
  const data = {
    title: '제목수정1234',
    content: '내용수정',
  };
  try {
    const response = await axios.put(url,data);
    console.log(response.data);
  } catch (error) {
    if (error.response) {
      // 에러 응답이 있는 경우
      console.error('에러 상태 코드:', error.response.status);
      // console.error('에러 헤더:', error.response.headers);
    } else {
      console.error('에러 발생:', error);
    }
  }
};

put2(3)