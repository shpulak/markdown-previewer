import React from "react";
import './header.css';

const header = props => {
  return (
    <nav className="navbar navbar-dark bg-dark header">
      <span className="navbar-brand mb-0 h1">{props.title}</span>
    </nav>
  );
};

export default header;
