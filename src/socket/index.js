import * as types from '../constants/actionTypes';
import { registered, messageReceived } from '../actions';

export const createSocket = () => {
  const socket = new WebSocket('ws://localhost:9000');

  socket.onopen = () => {
  };

  socket.onerror = () => {
    console.log('Socket error!');
  };

  let retryCount = 0;
  const start = (dispatch, username) => {
    if (socket.readyState !== 1 && retryCount < 3) {
      setTimeout(() => start(dispatch, username), 100);
      retryCount++;
      return;
    }
    if (retryCount >= 3) {
      throw new Error('Unable to establish socket connection');
    }
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      switch (data.type) {
        case types.REGISTERED:
          dispatch(registered(data.userId));
          break;
        case types.MESSAGE_RECEIVED:
          dispatch(messageReceived(data.message, data.userId));
          break;
        default:
          break;
      }
    };

    socket.send(JSON.stringify({
      type: types.REGISTER,
      name: username,
    }));
  };

  return {
    socket,
    start,
  };
};

export const createAddMessageMiddleware = socket => () => next => (action) => {
  try {
    if (action.type === types.ADD_MESSAGE) {
      socket.send(JSON.stringify({
        type: 'MESSAGE',
        message: action.message,
        userId: action.userId,
      }));
    }
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    throw err;
  }
};
