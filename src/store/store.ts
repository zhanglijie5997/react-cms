import { Store, applyMiddleware , createStore, combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import { History } from "history";
import  handle from "./handle";

// 创建集中管理stroe`
const configureStore = (history: History, initState?: string):Store => {
    const middleware = applyMiddleware(thunkMiddleware, routerMiddleware(history)) as any;
    const combineReducer = combineReducers(handle);
    console.log(`创建store`)
    return createStore(
        combineReducer,
        middleware
    );
}

export default configureStore;