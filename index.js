const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const app = express();

app.use('/', createProxyMiddleware({
  target: 'https://7dak.fun',
  changeOrigin: true,
  onProxyReq(proxyReq, req, res) {
    proxyReq.setHeader('x-forwarded-host', req.headers.host);
  }
}));

module.exports = app;
