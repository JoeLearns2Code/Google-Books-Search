//Import React.js library
import React from "react";

//This is a card element to be used on page components.  It inherits {} properties from the Home & Saved page components.
function Card({ icon, title, children }) {
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

//export for use in page components
export default Card;
