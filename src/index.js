import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunkMiddleware from 'redux-thunk';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import reducers from './reducers';
import injectTapEventPlugin from 'react-tap-event-plugin';


const createStoreWithMiddleware = applyMiddleware(promise, thunkMiddleware)(createStore);

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
