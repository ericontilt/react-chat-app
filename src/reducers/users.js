import * as actionTypes from '../constants/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.USER_LIST:
      return [
        ...action.users,
      ];
    default:
      return state;
  }
};
