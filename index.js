const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const app = express();

app.use(
  '/',
  createProxyMiddleware({
    target: 'https://7dak.fun',
    changeOrigin: true,
    onProxyReq: (proxyReq) => {
      proxyReq.removeHeader('x-forwarded-host');
      proxyReq.removeHeader('host');
    },
  })
);

module.exports = app;
