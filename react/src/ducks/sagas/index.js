import { all } from "redux-saga/effects";
import todo from './todo';

function* rootSaga() {
    yield all([
        //Pegar todas os Sagas
        todo(),
    ]);
}

export { rootSaga as default, rootSaga };