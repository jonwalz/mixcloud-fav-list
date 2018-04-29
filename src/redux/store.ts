import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import rootReducer from '../redux/reducers/root_reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const logger = createLogger({
    stateTransformer: (state: {}) => state,
})

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger),
)

sagaMiddleware.run(rootSaga)
