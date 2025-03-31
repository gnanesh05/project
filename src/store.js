import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import TodoReducer from "./reducers/TodoReducer";
import NotificationReducer from "./reducers/NotificationReducer";

const reducer = combineReducers({
 Todo: TodoReducer,
 Notification: NotificationReducer
});

const initialState = {}

const middlewares = [thunk];

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middlewares)
);

export default store;