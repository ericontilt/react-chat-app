import * as actionTypes from '../constants/actionTypes';

export const registered = userId => ({
  type: actionTypes.REGISTERED,
  userId,
});

export const addMessage = (message, userId) => ({
  type: actionTypes.ADD_MESSAGE,
  message,
  userId,
});

export const messageReceived = (message, userId) => ({
  type: actionTypes.MESSAGE_RECEIVED,
  message,
  userId,
});

export const silenceLinter = () => { };
