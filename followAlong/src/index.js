import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


// Two design philosophies (in general, not specific to React or any language/framework)
// 1. Convention over Configuration, opinionated design (e.g., iPhone, Mac, Ruby on Rails, Redux, Mandalorian)
// 2. Konfiguration is King: More open, configurable design (e.g., Android, Linux, JavaScript, Context API, YOLO swag choose your own adventure)