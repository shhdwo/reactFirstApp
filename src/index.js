import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import combinedReducers from './reducers/index';

let store = createStore(combinedReducers);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
