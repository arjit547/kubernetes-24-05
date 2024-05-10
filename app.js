const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Indian Air Force');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
