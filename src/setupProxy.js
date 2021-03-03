const { createProxyMiddleware } = require('http-proxy-middleware');

// THIS PROXY IS FOR LOCAL HOST TESTING ONLY. For NETLIFY, see _redirects text file
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