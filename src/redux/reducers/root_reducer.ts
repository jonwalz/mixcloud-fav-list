import { combineReducers } from 'redux'

import favorites from './favorites_reducer'

const rootReducer = combineReducers({
    favorites,
})

export default rootReducer