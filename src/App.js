import React, { Component } from 'react';

import MessageList from './components/MessageList';
import AddMessage from './components/AddMessage';

import './App.css';

let seqNr = 0;
const assignedUserId = 1;
const messages = [{
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

class App extends Component {
  render() {
    return (
      <div className="App">
        <MessageList userId={assignedUserId} messages={messages} />
        <AddMessage />
      </div>
    );
  }
}

export default App;
