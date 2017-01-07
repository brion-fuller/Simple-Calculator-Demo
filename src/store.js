import { createStore, combineReducers, compose } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as burgerMenu } from 'redux-burger-menu';
import reducers from './reducers';

export default createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer,
    burgerMenu,
  }),
  compose(
    window.devToolsExtension ? window.devToolsExtension() : undefined,
  ),
);
