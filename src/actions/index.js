import * as actionTypes from '../constants/actionTypes';

export const addMessage = (message, userId) => ({
  type: actionTypes.ADD_MESSAGE,
  message,
  userId,
});

export const silenceLinter = () => {};
