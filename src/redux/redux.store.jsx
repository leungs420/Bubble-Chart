import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import rootReducer from "redux/redux.reducers";
import thunk from "redux-thunk";

const reducer = combineReducers({
    graph: rootReducer
})
const store = createStore(reducer, undefined, compose(applyMiddleware(thunk)));

export default store;
