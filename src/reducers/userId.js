import * as actionTypes from '../constants/actionTypes';

export default (state = -1, action) => {
  switch (action.type) {
    case actionTypes.REGISTERED:
      return action.userId;
    default:
      return state;
  }
};
