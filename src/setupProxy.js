const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/auth/callback',
    createProxyMiddleware({ 
      target: 'https://frozen-garden-94356.herokuapp.com/',
      changeOrigin: true
    })
  );
  app.use(
    '/api',
    createProxyMiddleware({ 
      target: 'https://frozen-garden-94356.herokuapp.com/',
      changeOrigin: true
    })
  );
}