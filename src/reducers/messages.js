import * as actionTypes from '../constants/actionTypes';

let nextMessageId;

export default (state = [], action) => {
  if (state.length === 0) nextMessageId = 1;
  switch (action.type) {
    case actionTypes.ADD_MESSAGE:
    case actionTypes.MESSAGE_RECEIVED:
      return [
        ...state,
        {
          id: nextMessageId++,
          message: action.message,
          userId: action.userId,
        },
      ];
    default:
      return state;
  }
};
