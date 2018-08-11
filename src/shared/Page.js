import React from "react";
import { Link } from "react-router-dom";

export class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/">
          <img src="http://via.placeholder.com/200x200" alt="back to menu" />
        </Link>
        {this.props.children}
      </React.Fragment>
    );
  }
}
