import { all } from 'redux-saga/effects'

function* helloSaga(): Iterable<void> {
    console.log('Hello Sagas!')
}

export default function* rootSaga() {
    yield all([helloSaga()])
}
