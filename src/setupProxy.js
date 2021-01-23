const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/auth/callback',
    createProxyMiddleware({ 
      target: 'https://apparel-store-mern.netlify.app/',
      changeOrigin: true
    })
  );
  app.use(
    '/api',
    createProxyMiddleware({ 
      target: 'https://apparel-store-mern.netlify.app/',
      changeOrigin: true
    })
  );
}
