import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import toDo from "./store/todo";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

const rootReducer = combineReducers({
  toDo
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export { persistedReducer as default, persistedReducer };