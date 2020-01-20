const http = require('http');
const requestListener = require('./request-listener');

const port = 3000;

const server = http.createServer(requestListener);
server.listen(port, () => console.log(`port: ${port}`));
