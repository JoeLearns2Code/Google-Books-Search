//Import React.js libraries & React virtual DOM
import React from "react";
import ReactDOM from "react-dom";
//Import the the main parent component 'App'
import App from "./App";
//registerServiceWorker is included by default with the npm package and can allow for faster load times in production.
import registerServiceWorker from "./registerServiceWorker";

//Renders data into the "root" element on the main index.html page to be displayed on the browser.
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
