import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'rxjs';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import {enthusiasm} from './reducers';
import {StoreState} from './types';
import './index.css';

import {createEpicMiddleware} from 'redux-observable';
import {rootEpic} from './epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore<StoreState>(
  enthusiasm,
  composeEnhancers(
    applyMiddleware(epicMiddleware)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
