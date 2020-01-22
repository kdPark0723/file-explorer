const http = require('http');
const requestListener = require('./request-listener');
const config = require('./config');

const port = config.server.port;

const server = http.createServer(requestListener);
server.listen(port, () => console.log(`port: ${port}`));
