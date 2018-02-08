import React, { Component } from 'react';

import MessageList from './containers/MessageList';
import AddMessage from './components/AddMessage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MessageList />
        <AddMessage />
      </div>
    );
  }
}

export default App;
