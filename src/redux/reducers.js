import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import auth from "./auth/reducers";
import loader from "./loader/reducers";

const createReducer = (asyncReducers) =>
  combineReducers({
    auth,
    loader,
    // navigation,
    router: routerReducer,
    ...asyncReducers,
  });

export default createReducer;
