import { takeEvery } from 'redux-saga/effects'
import { fetchFavorites } from './favorites_sagas'

export default function *root(): {} {
    yield [
        takeEvery('FETCH_FAVORITES', fetchFavorites),
    ]
}