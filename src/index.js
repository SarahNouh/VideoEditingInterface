/**
 * @Author: sarahnouh
 * @Date:   1985-10-26T10:15:00+02:00
 * @Last modified by:   sarahnouh
 * @Last modified time: 2019-06-12T00:32:01+02:00
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
