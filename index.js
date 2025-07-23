const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const app = express();

app.use(
  '/',
  createProxyMiddleware({
    target: 'https://7dak.fun',
    changeOrigin: true,
    headers: {
      host: '7dak.fun',
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    },
    onProxyReq: (proxyReq) => {
      proxyReq.removeHeader('x-forwarded-host');
    },
  })
);

module.exports = app;
