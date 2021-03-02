import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  fetchUser: ["payload"],
  getAllUser: ["payload"],
  addUser: ["payload"],
});

const INITIAL_STATE = {
  payload: [],
};

const fetchTodo = (state = INITIAL_STATE) => ({
  ...state,
});

const getTodo = (state = INITIAL_STATE, action) => ({
  ...state,
  payload: action.payload,
});

const addTodo = (state = INITIAL_STATE, action) => ({
  ...state,
  payload: [...state.payload, action.payload],
});

const HANDLERS = {
  [Types.FETCH_TODO]: fetchTodo,
  [Types.GET_ALL_TODO]: getTodo,
  [Types.ADD_TODO]: addTodo,
};

export default createReducer(INITIAL_STATE, HANDLERS);
