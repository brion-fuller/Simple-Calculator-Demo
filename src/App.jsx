import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Home from './Home/Home';
import Error from './Error/Error';
import Calculator from './Calculator/Calculator';
import Dashboard from './Dashboard/Dashboard';

import store from './store';

export default () => (
  <Provider store={store}>
    <Router history={syncHistoryWithStore(browserHistory, store)}>
      <Route path="/" component={Home}>
        <Route path="dashboard" component={Dashboard} />
        <Route path="calculator" component={Calculator} />
      </Route>
      <Route path="*" component={Error} />
    </Router>
  </Provider>
);
