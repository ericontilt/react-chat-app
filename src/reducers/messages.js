let seqNr = 0;
const initialState = [{
  id: seqNr++,
  text: 'Hey dude!',
  userId: 1,
}, {
  id: seqNr++,
  text: 'How are ya?',
  userId: 1,
}, {
  id: seqNr++,
  text: 'Fuckin\' fantastic!',
  userId: 2,
}, {
  id: seqNr++,
  text: 'Wassup?',
  userId: 2,
}, {
  id: seqNr++,
  text: 'Working on this app..',
  userId: 1,
}, {
  id: seqNr++,
  text: 'It\'s supposed to solve the world peace issue..',
  userId: 1,
}];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
