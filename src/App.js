import React, { Component } from 'react';

import MessageList from './containers/MessageList';
import AddMessage from './containers/AddMessage';
import Header from './containers/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MessageList />
        <AddMessage />
      </div>
    );
  }
}

export default App;
