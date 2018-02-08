import { combineReducers } from 'redux';

import messages from './messages';
import userId from './userId';

const rootReducer = combineReducers({
  messages,
  userId,
});

export default rootReducer;
