import React from "react";
import ReactDOM from "react-dom";
import "purecss/build/pure.css";
import "purecss/build/grids-responsive-min.css";
import "./index.css";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const container = document.getElementById("root");
let count = 0;
const increment = () => {
  console.log(count);
  count++;
};

const render = App =>
  ReactDOM.render(<App {...{ increment, count }} />, container);

render(App);

if (module.hot) {
  module.hot.accept("./App", () => {
    const X = require("./App").default;
    render(X);
  });
}

registerServiceWorker();
