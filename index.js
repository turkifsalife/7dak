const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const target = 'https://7dak.fun';
  const url = target + req.url;

  try {
    const response = await fetch(url, {
      method: req.method,
      headers: req.headers,
    });

    const body = await response.buffer();
    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    res.end(body);
  } catch (error) {
    res.statusCode = 500;
    res.end('Proxy error: ' + error.toString());
  }
};