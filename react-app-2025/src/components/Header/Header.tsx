import "./header.css";
import { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <h1>Star Trek</h1>
        </div>
      </header>
    );
  }
}
