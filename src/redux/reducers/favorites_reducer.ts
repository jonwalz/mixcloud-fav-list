import { ACTION } from '../actions'
import {
    INITIAL_STATE,
    Favorites,
} from '../core'

function favorites(state: Favorites = INITIAL_STATE.favorites, action: ACTION): Favorites {
    switch (action.type) {
        case 'FETCH_FAVORITES':
            return state
        default:
            return state
    }
}

export default favorites