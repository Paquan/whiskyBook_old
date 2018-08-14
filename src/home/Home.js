import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="logo-container">
          <div className="logo">
            <Link to="/">
              <img src="http://via.placeholder.com/200x200" alt="logo" />
            </Link>
          </div>
          <h1 className="title">
            <Link to="/">Slàinte Mhath</Link>
          </h1>
        </div>
        <nav className="navMenu">
          <ul className="nav">
            <NavLink to="/tastings">
              <li className="nav-item">Tastings</li>
            </NavLink>
            <NavLink to="/tasting-notes">
              <li className="nav-item">Tasting Notes</li>
            </NavLink>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}
