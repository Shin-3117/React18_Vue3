const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  devServer: {
    before: (app) => {
      app.use('/api', createProxyMiddleware({
        target: 'http://finlife.fss.or.kr', // 원격 서버 주소
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/finlifeapi' // 경로에서 '/api'를 '/finlifeapi'로 대체
        }
      }));
    }
  }
}

