import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, NavLink, Link} from "react-router-dom";
import {TastingNotes} from './tasting-notes/TastingNotes'
import {Home} from './home/Home'

export class App extends React.Component {

  render() {
    return (
      <Router>
        <React.Fragment>
          <Link to="/"><h1>Hello Whisky</h1></Link>
          <nav>
            <ul>
              <li>
                <NavLink to="/tasting-notes">Tasting Notes</NavLink>
              </li>
            </ul>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/tasting-notes" component={TastingNotes} />
        </React.Fragment>
      </Router>
    );
  }
}