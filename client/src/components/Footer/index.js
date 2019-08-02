//Import React.js library
import React from "react";

//JSX element to be used on page components
function Footer() {
  return (
    <footer>
      <hr />
      <p className="pull-right">
        <i className="fab fa-github" /> Proudly built using React.js
      </p>
    </footer>
  );
}

//export for use in page components.
export default Footer;
