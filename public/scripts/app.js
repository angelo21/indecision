"use strict";

//JSX = JavaScript XML

var template = React.createElement(
  "h1",
  null,
  "Indecision app"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
