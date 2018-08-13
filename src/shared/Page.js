import React from "react";
import "./Page.css";
import { Link } from "react-router-dom";

export class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="backToMenu">
          <Link to="/">
            <img src="http://via.placeholder.com/200x200" alt="back to menu" />
          </Link>
        </div>
        {this.props.children}
      </React.Fragment>
    );
  }
}
