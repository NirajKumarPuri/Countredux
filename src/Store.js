import {createStore ,applyMiddleware } from "redux";
import { todoReducer } from "./Reducer";
import {logger} from "redux-logger";

const store = createStore(todoReducer,applyMiddleware(logger))
export default store