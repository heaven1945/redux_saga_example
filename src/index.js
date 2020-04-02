import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootSlice";
import App from "./App";
import rootSaga from "./rootSagas";

const sagaMiddleware = createSagaMiddleware({
  onError: error => {
    console.log(error);
  }
});
const middleware = applyMiddleware(sagaMiddleware);

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25
    })) ||
  compose;

const store = createStore(rootReducer, composeEnhancers(middleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
