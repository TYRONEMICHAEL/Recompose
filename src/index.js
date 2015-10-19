import React from 'react';
import { Provider } from 'react-redux';
import appFactory from './containers/App';
import counterFactory from './components/counter';
import * as actions from './actions/counter';
import configureStore from './store/configureStore';

const Counter = counterFactory(React);
const App = appFactory(Counter, actions);

const store = configureStore();

React.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
