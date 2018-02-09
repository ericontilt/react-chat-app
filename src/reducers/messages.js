import * as actionTypes from '../constants/actionTypes';
import { findLastIndex } from '../utils';

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
          style: action.style,
        },
      ];
    case actionTypes.MESSAGE_UNDO:
    {
      const nextState = [...state];
      const index = findLastIndex(state, m => m.userId === action.userId);
      if (index > -1) {
        nextState.splice(index, 1);
      }
      return nextState;
    }
    default:
      return state;
  }
};
