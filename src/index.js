import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import registerServiceWorker from './utils/registerServiceWorker';

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(reducer, middleware);

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>,
document.getElementById('root'));
registerServiceWorker();
