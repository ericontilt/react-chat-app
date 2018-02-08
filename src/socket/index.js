import * as types from '../constants/actionTypes';
import { registered, addMessage } from '../actions';

const connect = (dispatch, username) => {
  const socket = new WebSocket('ws://localhost:9000');

  socket.onopen = () => {
    socket.send(JSON.stringify({
      type: types.REGISTER,
      name: username,
    }));
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    switch (data.type) {
      case types.REGISTERED:
        dispatch(registered(data.userId));
        break;
      case types.MESSAGE_RECEIVED:
        dispatch(addMessage(data.message, data.userId));
        break;
      default:
        break;
    }
  };

  return socket;
};

export default connect;
