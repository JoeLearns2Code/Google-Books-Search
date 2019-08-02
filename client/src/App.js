//Import React library
import React from "react";
//Import methods from React for routing and default page displays.  Switch allows conditional rendering and will display a 404/NoMatch page if it cannot read the URL route.
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Import page components
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
//Import Navbar component
import Nav from "./components/Nav";

function App() {
  //Renders the page in index.html
  return (
    <Router>
      <div>
        <Nav />
        {/* Set routing & conditional rendering if route is not recognized. */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
