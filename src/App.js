import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { TastingNotes } from "./tasting-notes/TastingNotes";
import { Tastings } from "./tastings/Tastings";
import { Home } from "./home/Home";

export class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route path="/tastings" component={Tastings} />
          <Route path="/tasting-notes" component={TastingNotes} />
        </React.Fragment>
      </Router>
    );
  }
}
