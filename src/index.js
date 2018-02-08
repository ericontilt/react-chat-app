import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import registerServiceWorker from './registerServiceWorker';
import App from './App';
import rootReducer from './reducers';
import { createSocket, createAddMessageMiddleware } from './socket';

import './index.css';

const { socket, start: listen } = createSocket();

const store = createStore(
  rootReducer,
  applyMiddleware(createAddMessageMiddleware(socket)),
);

listen(store.dispatch, '');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
