const { createProxyMiddleware } = require('http-proxy-middleware');

 

module.exports = function (app) {

  app.use(

    '/api/v1/react',

    createProxyMiddleware({

      target: 'http://172.26.1.245',

      changeOrigin: true,

    })

  );

};