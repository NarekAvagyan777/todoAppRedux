import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import filterReducer from "./filterReducer";
import todosReducer from "./todosReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filterReducer,
});

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
