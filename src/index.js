import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';
import { loadProducts } from './actionCreators';

import './index.css';

store.dispatch(loadProducts());

ReactDOM.render(
    // el Provider, PROVEE a los componentes del store
    <Provider store={store}>
        <App/> 
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
