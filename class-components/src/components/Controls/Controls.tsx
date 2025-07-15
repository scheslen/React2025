import "./controls.css";
import { Component } from "react";

export class Controls extends Component {
  render() {
    return (
      <div className="controls">
        <input className="search__input"></input>
        <button className="search__btn btn" onClick={handleInput}>
          Search
        </button>
      </div>
    );
  }
}

function handleInput() {
  const pInput = document.querySelector(".search__input");
  if (pInput) {
    const sRequest = ""; //pInput.value
    localStorage.setItem("request", sRequest);
  }
}
