import { combineReducers } from 'redux';

import messages from './messages';
import userId from './userId';
import users from './users';

const rootReducer = combineReducers({
  messages,
  userId,
  users,
});

export default rootReducer;
