import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import TodoReducer from "./reducers/TodoReducer";
import NotificationReducer from "./reducers/NotificationReducer";
import NotificationRateLimiter from "./redux-middleware/NotificationRateLimiter";

const reducer = combineReducers({
 Todo: TodoReducer,
 Notifications: NotificationReducer
});

const initialState = {}

const middlewares = [thunk,NotificationRateLimiter];

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middlewares)
);

export default store;