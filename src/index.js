/* eslint-env browser */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import olympicsApp from './reducers';
import App from './components/App';
import dataService from './service';


const store = createStore(
    olympicsApp,
    {},
    compose(
        applyMiddleware(dataService),
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('app-node'),
);

store.dispatch({ type: 'GET_OLYMPICS_DATA' });
