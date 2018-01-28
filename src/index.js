import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import './index.scss';
import App from './containers/App';
import reducer from './reducers';
import registerServiceWorker from './utils/registerServiceWorker';

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(reducer, middleware);
//log the state to see how the data is getting into the store
console.log(store.getState());

ReactDOM.render(
<Provider store={store}>
        <App />
</Provider>,
document.getElementById('root'));
registerServiceWorker();
