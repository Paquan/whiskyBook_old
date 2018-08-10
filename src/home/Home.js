import React from "react";
import { NavLink, Link } from "react-router-dom";

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
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <NavLink to="/tastings">Tastings</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/tasting-notes">Tasting Notes</NavLink>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}
