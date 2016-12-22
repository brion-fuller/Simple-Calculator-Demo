import { createStore, combineReducers, compose } from 'redux';
import reducers from './reducers';

export default createStore(
  combineReducers(reducers),
  compose(
    window.devToolsExtension ? window.devToolsExtension() : undefined,
  ),
);
