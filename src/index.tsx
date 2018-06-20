import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from './index.config'
import registerServiceWorker from './registerServiceWorker'

// vendor
import 'rxjs'

import App from './App'
import './index.css'
import 'typeface-roboto'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
)

registerServiceWorker()
