import { all, takeEvery } from 'redux-saga/effects'
import { fetchFavorites } from './favorites_sagas'

export default function* root(): Iterator<any> {
    yield all([
        takeEvery('FETCH_FAVORITES', fetchFavorites),
    ])
}