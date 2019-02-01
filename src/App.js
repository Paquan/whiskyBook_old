import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';
import { TastingNotes } from './pages/TastingNotes';
import { Tastings } from './pages/Tastings';
import { Home } from './pages/Home';

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
