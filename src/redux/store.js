import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import createReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["loader"],
};

const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, routeMiddleware];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, createReducer());
const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(...middlewares))
);
const persistor = persistStore(store);

export { store, history, persistor };
