import api from "../api";
import { takeEvery, put } from "redux-saga/effects";
import { Creators as TodoActions, Types as TodoTypes } from "../store/todo";

function* fetchTodo() {
  try {
    const { data } = yield api.get(); // Endpoint para pegar todas as Todos
    yield put(TodoActions.getAllTodo(data));
  } catch (error) {
    console.error("erros", error);
  }
}

function* watchTodoActions() {
  yield takeEvery(TodoTypes.FETCH_TODO, fetchTodo);
}

export { watchTodoActions as default, watchTodoActions };