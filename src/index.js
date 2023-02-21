//var React = require("react"); // react r benefits/ features/dependancy  take use korbo bole react dependancy r feature gulo ke ekta variable e store korchi
//var ReactDom = require("react-dom"); // react-dom r benefits/features/dependancy  take use korbo bole react-dom dependancy r feature gulo ke ekta variable e store korchi
import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(what to show,where to show it);
// ReactDOM.render(
//   <h1>Hello guysss </h1>,
//  // <p>hello</p>,
//   document.getElementById("root")
// );
// ebar jodi ami line 9 e ekta paragraph element add kori tahole code ta cholbe na as render fn sudhu ektai html element ke nite parbe
// to fix this issue  amra je kota html tag use korte chaichi like in this case 2 to
// tag amra oi duto tag ke div tag r bhetore dhukiye debo
ReactDOM.render(
<div>
  <h1>Hello guysss </h1>
  <p>hello</p>
 </div>,
  document.getElementById("root")
);
