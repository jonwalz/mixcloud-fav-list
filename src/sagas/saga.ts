import { all } from "redux-saga/effects";

function* helloSaga(): any {
    console.log("Hello Sagas!");
}

export default function* rootSaga() {
    yield all([helloSaga()]);
}
