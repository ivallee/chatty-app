
const express = require('express');
const WebSocket = require('ws');
const uuidv1 = require('uuid/v1');

const PORT = 3001;

const server = express()

  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));


// Create WebSockets server
const wss = new WebSocket.Server({ server });

// Broadcast Messages to all clients
wss.broadcast = (data) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  })
}

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log('Incoming message');
    const msg = JSON.parse(message);
    console.log(`User: ${msg.username} says: ${msg.content}`)
    msg.id = uuidv1();
    console.log('Broadcasting message');

  wss.broadcast(msg);
  }); 
  ws.on('close', () => console.log('Client disconnected'));
});