const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 9000 });

console.log('Listening on ws://localhost:9000');

const users = [];
let userId = 1;

const broadcastToOthers = (payload, ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(payload));
    }
  });
};

wss.on('connection', (ws) => {
  const send = payload => ws.send(JSON.stringify(payload), err => {
    console.log(err);
  });

  console.log(`User ${userId} connected`);

  const processMessage = payload => {
    const words = payload.message.trim().split(' ');
    if (words.length === 0) return;

    switch (words[0].toLowerCase()) {
      case '/nick':
        users.find(u => u.id === payload.userId).name = words[1];
        broadcastToOthers({
          type: 'USER_LIST',
          users,
        }, ws);
        break;
      case '/oops':
        broadcastToOthers({
          type: 'MESSAGE_UNDO',
          userId: payload.userId,
        });
        break;
      case '/think':
        broadcastToOthers({
          type: 'MESSAGE_RECEIVED',
          message: payload.message.replace('/think ', ''),
          userId: payload.userId,
          style: 'think',
        }, ws);
        break;
      default:
        broadcastToOthers({
          type: 'MESSAGE_RECEIVED',
          message: payload.message,
          userId: payload.userId,
        }, ws);
    }
  }

  ws.on('message', (message) => {
    const payload = JSON.parse(message);

    console.log(`Received payload: ${message}`);

    switch (payload.type) {
      case 'REGISTER':
        users.push({ name: payload.name, id: userId });
        send({
          type: 'REGISTERED',
          userId: userId,
        });
        broadcastToOthers({
          type: 'USER_LIST',
          users,
        }, ws);
        userId += 1;
        break;
      case 'MESSAGE':
        processMessage(payload);
        break;
      default:
        break;
    }
  });

  ws.on('error', () => console.log('errored'));

  ws.on('close', () => {
    console.log(`Closing connection`);
    users.splice(userId, 1);
    broadcastToOthers({
      type: 'USERS_LIST',
      users,
    }, ws);
  });
});
