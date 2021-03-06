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

export const messageReceived = (message, userId, style) => ({
  type: actionTypes.MESSAGE_RECEIVED,
  message,
  userId,
  style,
});

export const messageUndo = userId => ({
  type: actionTypes.MESSAGE_UNDO,
  userId,
});

export const usersReceived = users => ({
  type: actionTypes.USER_LIST,
  users,
});
