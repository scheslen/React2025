import "./home.css";
import { Component } from "react";
import { Controls } from "../Controls/Controls.tsx";
import { Results } from "../Results/Results.tsx";
import { Loader } from "../Loader/Loader.tsx";
import { sendRequest } from "../../app/requests";
import { IState } from "../../app/types";

export class Home extends Component {
  state: IState = {
    error: false,
    load: false,
  };

  render() {
   sendRequest("");
    return (
      <main className="main">
        <div className="container">
          <Controls />
          {this.state.load ? <Loader /> : <Results />}
          <button className="btn error_btn" onClick={generateError}>
            Error
          </button>
        </div>
      </main>
    );
  }
}

function generateError() {
  throw new Error("Something went wrong!");
}
