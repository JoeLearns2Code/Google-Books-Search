//Import React.js library
import React from "react";
//Import style.css for this element from within the folder
import "./style.css";

function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
}

export default Jumbotron;
