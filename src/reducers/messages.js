import * as actionTypes from '../constants/actionTypes';

let nextMessageId = 0;
const initialState = [{
  id: nextMessageId++,
  text: 'Hey dude!',
  userId: 1,
}, {
  id: nextMessageId++,
  text: 'How are ya?',
  userId: 1,
}, {
  id: nextMessageId++,
  text: 'Fuckin\' fantastic!',
  userId: 2,
}, {
  id: nextMessageId++,
  text: 'Wassup?',
  userId: 2,
}, {
  id: nextMessageId++,
  text: 'Working on this app..',
  userId: 1,
}, {
  id: nextMessageId++,
  text: 'It\'s supposed to solve the world peace issue..',
  userId: 1,
}];

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MESSAGE:
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
