import { call, put } from 'redux-saga/effects'
import { Client } from '../../api/client'

import * as actions from '../actions'

export function* fetchFavorites(action: actions.FetchFavoritesAction): Iterable<any> {
    const client = new Client
    const data = yield call(client.getFavorites())
    yield put(actions.receiveFavorites(data))
}