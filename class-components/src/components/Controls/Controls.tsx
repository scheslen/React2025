import "./controls.css";
import { Component } from "react";

export class Controls extends Component {
  render() {
    return (
      <div className="controls">
        <input className="search__input"></input>
        <button className="search__btn btn">Search</button>
      </div>
    );
  }
}
