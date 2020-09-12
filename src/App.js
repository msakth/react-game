import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./redux/reducers/rootReducer";
import PlayersContainer from "./components/playersContainer";
import sagas from "./sagas/rootSaga";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

function App() {
  const sagaMiddleWare = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleWare, reduxImmutableStateInvariant())
  );

  sagaMiddleWare.run(sagas);

  return (
    <Provider store={store}>
      <PlayersContainer />
    </Provider>
  );
}

export default App;
