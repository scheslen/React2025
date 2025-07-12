import "./home.css";
import { Component } from "react";
import { Controls } from "../Controls/Controls.tsx";
import { Results } from "../Results/Results.tsx";

export class Home extends Component {
  render() {
    return (
      <main className="main">
        <div className="container">
          <Controls />
          <Results />
          <button className="error_btn btn">Error</button>
        </div>
      </main>
    );
  }
}
