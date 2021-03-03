import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  getAllTodo: ["payload"],
  addTodo: ["payload"],
  successTodo: ["payload"],
  deleteTodo: ["id"]
});

const INITIAL_STATE = {
  payload: [],
};

const getAllTodo = (state = INITIAL_STATE, action) => ({
  ...state,
  payload: action.payload,
});

const addTodo = (state = INITIAL_STATE) => ({
  ...state,
});

const successTodo = (state = INITIAL_STATE, action) => ({
  ...state,
  payload: action.payload,
});

const deleteTodo = (state = INITIAL_STATE, action) => ({
  ...state,
  id: action.id,
});

const HANDLERS = {
  [Types.GET_ALL_TODO]: getAllTodo,
  [Types.ADD_TODO]: addTodo,
  [Types.SUCCESS_TODO]: successTodo,
  [Types.DELETE_TODO]: deleteTodo,
};

export default createReducer(INITIAL_STATE, HANDLERS);
