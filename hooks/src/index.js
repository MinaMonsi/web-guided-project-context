import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import { Provider } from "react-redux";

import Title from "./components/Title";
import Joke from "./components/Joke";
import { jokeReducer } from "./reducers/jokeReducer";
import "./styles.css";
import thunk from "redux-thunk";

// Step 1: create the store
const store = createStore(jokeReducer, applyMiddleware(logger));

function App() {
  return (
    <div className="App">
      {/* <Title /> */}
      <Joke />
    </div>
  );
}

const rootElement = document.getElementById("root");

// Step 2: provide the store
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
