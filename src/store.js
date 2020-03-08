import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import decks from './reducers/decks';

export default createStore(
  combineReducers({
    decks
  }),
  applyMiddleware(logger)
);
