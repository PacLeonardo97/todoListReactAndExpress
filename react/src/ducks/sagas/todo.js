import api from "../api";
import { takeEvery, put } from "redux-saga/effects";
import { Creators as TodoActions, Types as TodoTypes } from "../store/todo";

function* addTodo({ payload }) {
  try {
    const { title, description } = payload;
    yield api.post('/todo', { title, description });
    window.location.reload();
  } catch (error) {
    console.error("erros", error);
  }
}

function* getAllTodo() {
  try {
    const { data } = yield api.get('/todo');
    yield put(TodoActions.successTodo(data));
  } catch (error) {
    console.error("erros", error);
  }
}

function* deleteTodo({ id }) {
  try {
    yield api.delete(`/todo/${id}`);
    window.location.reload();
  } catch (error) {
    console.error("erros", error);
  }
}

function* watchTodoActions() {
  yield takeEvery(TodoTypes.ADD_TODO, addTodo);
  yield takeEvery(TodoTypes.GET_ALL_TODO, getAllTodo);
  yield takeEvery(TodoTypes.DELETE_TODO, deleteTodo);
}

export { watchTodoActions as default, watchTodoActions };