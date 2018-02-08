const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 9000 });

console.log('Listening on ws://localhost:9000');

const users = [];

const broadcastToOthers = (data, ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data));
    }
  });
};

wss.on('connection', (ws) => {
  const userIndex = users.length + 1;

  const send = payload => ws.send(JSON.stringify(payload), err => {
    console.log(err);
  });

  console.log(`User ${userIndex} connected`);

  ws.on('message', (message) => {
    const payload = JSON.parse(message);

    console.log(`Received payload: ${message}`);

    switch (payload.type) {
      case 'REGISTER': {
        users.push({ name: payload.name, id: userIndex });
        send({
          type: 'REGISTERED',
          userId: userIndex,
        });
        broadcastToOthers({
          type: 'USER_LIST',
          users,
        }, ws);
        break;
      }
      case 'MESSAGE':
        broadcastToOthers({
          type: 'MESSAGE_RECEIVED',
          message: payload.message,
          userId: payload.userId,
        }, ws);
        break;
      default:
        break;
    }
  });

  ws.on('close', () => {
    users.splice(userIndex, 1);
    console.log(`Closed connection for user ${userIndex}`);
    broadcast({
      type: 'USERS_LIST',
      users,
    }, ws);
  });
});
