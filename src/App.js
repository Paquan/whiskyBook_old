import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container} from "reactstrap"
import "./App.css";
import { TastingNotes } from "./tasting-notes/TastingNotes";
import { Tastings } from "./tastings/Tastings";
import { Home } from "./home/Home";


export class App extends React.Component {
  render() {
    return (
      <Container>
        <Router>
          <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/tastings" component={Tastings} />
            <Route path="/tasting-notes" component={TastingNotes} />
          </React.Fragment>
        </Router>
      </Container>
    );
  }
}
