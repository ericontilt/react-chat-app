import * as actionTypes from '../constants/actionTypes';

let nextMessageId = 0;
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MESSAGE:
    case actionTypes.MESSAGE_RECEIVED:
      return [
        ...state,
        {
          id: nextMessageId++,
          text: action.message,
          userId: action.userId,
        },
      ];
    default:
      return state;
  }
};
