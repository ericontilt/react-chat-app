import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import registerServiceWorker from './registerServiceWorker';
import App from './App';
import rootReducer from './reducers';
import startSocketConnection from './socket';

import './index.css';

const store = createStore(rootReducer);

startSocketConnection(store.dispatch, '');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
