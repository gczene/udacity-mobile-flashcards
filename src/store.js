import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import decks from './reducers/decks';
import thunk from 'redux-thunk';

export default createStore(
  combineReducers({
    decks
  }),
  applyMiddleware(logger, thunk)
);
