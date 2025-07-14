import "./home.css";
import { Component } from "react";
import { Controls } from "../Controls/Controls.tsx";
import { Results } from "../Results/Results.tsx";
import { sendRequest } from "../../app/requests.ts";

export class Home extends Component {
  render() {
    sendRequest("");
    return (
   
       <main className="main">
          <div className="container">
            <Controls />
            <Results />
          <button className="btn error_btn" onClick={generateError}>Error</button>
          </div>
       </main>
    
    );
  }
}

function generateError (){
  throw new Error('Something went wrong!');
}