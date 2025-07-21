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
    aMovies: [],
    inputRequest: "",
    error: false,
    load: false,
  };

  async fetchData(inputRequest: string) {
    this.setState({
      load: true,
    });

    this.state.aMovies = await sendRequest(inputRequest);

    this.setState({
      load: false,
    });
  }

  async componentDidMount() {
    const sRequest: string = localStorage.getItem("request") || "";
    this.setState({ inputRequest: sRequest });
    await this.fetchData(sRequest);
  }

  async newSearch() {
    const sRequest: string = localStorage.getItem("request") || "";
    this.setState({
      inputRequest: sRequest,
    });
    await this.fetchData(sRequest);
  }

  render() {
    return (
      <main className="main">
        <div className="container">
          <Controls
            inputRequest={this.state.inputRequest}
            onClick={() => {
              this.newSearch();
            }}
          />
          {this.state.load ? <Loader /> : <Results />}
          <ErrorButton />
        </div>
      </main>
    );
  }
}
