const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const app = express();

app.use(
  '/',
  createProxyMiddleware({
    target: 'https://7dak.fun', // Hedef siten
    changeOrigin: true,
    onProxyReq: (proxyReq, req, res) => {
      // Sonsuz döngü yaratabilecek header'ları temizle
      proxyReq.removeHeader('x-forwarded-host');
      proxyReq.removeHeader('host');
    }
  })
);

module.exports = app;
