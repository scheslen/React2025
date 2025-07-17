import "./home.css";
import { Component } from "react";
import { Controls } from "../Controls/Controls.tsx";
import { Results } from "../Results/Results.tsx";
import { Loader } from "../Loader/Loader.tsx";
import { sendRequest } from "../../app/requests";
import { IHomeState } from "../../app/types";
import { ErrorButton } from "../ErrorButton/ErrorButton.tsx";

export class Home extends Component {
  state: IHomeState = {
    error: false,
    load: false,
  };

  async fetchData(inputRequest: string ) {
    this.setState({
      load: true,
    });

    await sendRequest(inputRequest);

    this.setState({
      load: false,
    });
  }

  componentDidMount(): void {
    const sRequest: string  =  localStorage.getItem('request') || ''
    this.fetchData(sRequest);
  }

  render() {
    return (
      <main className="main">
        <div className="container">
          <Controls />
          {this.state.load ? <Loader /> : <Results />}
          <ErrorButton />
        </div>
      </main>
    );
  }
}
