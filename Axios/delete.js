const axios = require('axios');

const deleteArticle = async (id) => {
  const url = `http://127.0.0.1:8000/api/v1/articles/${id}/`;

  try {
    const response = await axios.delete(url);
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

deleteArticle(22)