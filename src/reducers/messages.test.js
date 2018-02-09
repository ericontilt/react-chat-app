import messages from './messages';

describe('messages', () => {
  describe('ADD_MESSAGE', () => {
    it('stores message data', () => {
      const nextState = messages(undefined, {
        type: 'ADD_MESSAGE',
        message: 'hello',
        userId: 123,
      });
      expect(nextState.length).toBe(1);
      expect(nextState[0]).toEqual({
        id: 1,
        message: 'hello',
        userId: 123,
      });
    });

    it('sequentially numbers messages', () => {
      let nextState = messages(undefined, {
        type: 'ADD_MESSAGE',
        message: 'hello',
        userId: 123,
      });
      nextState = messages(nextState, {
        type: 'ADD_MESSAGE',
        message: 'how are you?',
        userId: 123,
      });
      expect(nextState.length).toBe(2);
      expect(nextState[0].id).toBe(1);
      expect(nextState[1].id).toBe(2);
    });
  });

  describe('MESSAGE_RECEIVED', () => {
    it('stores message data', () => {
      const nextState = messages(undefined, {
        type: 'MESSAGE_RECEIVED',
        message: 'hello',
        userId: 123,
      });
      expect(nextState.length).toBe(1);
      expect(nextState[0]).toEqual({
        id: 1,
        message: 'hello',
        userId: 123,
      });
    });
  
    it('sequentially numbers messages', () => {
      let nextState = messages(undefined, {
        type: 'MESSAGE_RECEIVED',
        message: 'hello',
        userId: 123,
      });
      nextState = messages(nextState, {
        type: 'MESSAGE_RECEIVED',
        message: 'how are you?',
        userId: 123,
      });
      expect(nextState.length).toBe(2);
      expect(nextState[0].id).toBe(1);
      expect(nextState[1].id).toBe(2);
    });
  });
});
