import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import TodoReducer from "./reducers/TodoReducer";

const reducer = combineReducers({
 Todo: TodoReducer
});

const initialState = {}

const middlewares = [thunk];

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middlewares)
);

export default store;