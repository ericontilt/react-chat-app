import React, { Component } from 'react';

import MessageList from './components/MessageList';

import './App.css';

let seqNr = 0;
const assignedUserId = 1;
const messages = [{
  id: seqNr++,
  text: 'Hey dude!',
  user: 1,
}, {
  id: seqNr++,
  text: 'How are ya?',
  user: 1,
}, {
  id: seqNr++,
  text: 'Fuckin\' fantastic!',
  user: 2,
}, {
  id: seqNr++,
  text: 'Wassup?',
  user: 2,
}, {
  id: seqNr++,
  text: 'Working on this app..',
  user: 1,
}, {
  id: seqNr++,
  text: 'It\'s supposed to solve the world peace issue..',
  user: 1,
}];

class App extends Component {
  render() {
    return (
      <div className="App">
        <MessageList userId={assignedUserId} messages={messages} />
      </div>
    );
  }
}

export default App;
