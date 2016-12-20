import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { App } from './App';

export const render = () => {
  ReactDOM.render(<AppContainer><App /></AppContainer>, document.getElementById('react'));
}

render();

if(module.hot){
    module.hot.accept('./App', render);
}