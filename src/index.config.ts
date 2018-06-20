import { createEpicMiddleware } from 'redux-observable'
import { createStore, applyMiddleware, compose } from 'redux'
import { rootEpic } from './epics'
import reducer from './reducers'
import { AppState } from './models'

export function configureStore() {
    const composeEnhancers =
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const epicMiddleware = createEpicMiddleware(rootEpic)

    return createStore<AppState>(
        reducer,
        composeEnhancers(applyMiddleware(epicMiddleware))
    )
}
