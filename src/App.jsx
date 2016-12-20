import React from 'react';
import { Provider } from 'react-redux';

import { Calculator } from './Calculator/Calculator';

import { store } from './store';

export const App = () => (
    <Provider store={store}>
        <Calculator />
    </Provider>
);
