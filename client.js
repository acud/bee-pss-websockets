const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080/pss/subscribe/testtopic');

ws.on('message', function incoming(data) {
  console.log(data);
});

