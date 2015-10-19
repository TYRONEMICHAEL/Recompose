import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/counter';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export default (initialState) => {
  return createStoreWithMiddleware(reducer, initialState);
};
