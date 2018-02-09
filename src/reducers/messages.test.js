import messages from './messages';

describe('messages', () => {
  it('ADD_MESSAGE', () => {
    const nextState = messages(undefined, {
      type: 'ADD_MESSAGE',
      message: 'hello',
      userdId: 123,
    });
    expect(nextState.length).toBe(1);
  });
});
