import "./controls.css";
import { Component } from "react";
import { IControlState } from "../../app/types";
import { sendRequest} from "../../app/requests";

export class Controls extends Component {
  state: IControlState = {
    inputRequest: "",
    load: false,
  };

  componentDidMount(): void {
    let sRequest: string | null = "";
    sRequest = localStorage.getItem("request");
    if (sRequest) {
      this.setState({
        inputRequest: sRequest,
      });
    }
  }

  async fetchData(inputRequest: string) {

    // let aMovies: IMovie[] = [];

    this.setState({
      load: true,
    });

    // aMovies = 
    await sendRequest(inputRequest);

    this.setState({
      load: false,
    });
  }

  async handleInput() {
    const pInput: HTMLInputElement | null =
      document.querySelector(".search__input");
    if (pInput) {
      const sRequest = pInput.value.trim();
      localStorage.setItem("request", sRequest);

      this.setState({
        inputRequest: sRequest
      });

      await this.fetchData(sRequest);
    }
  }

  render() {
    return (
      <div className="controls">
        <input
          className="search__input"
          defaultValue={this.state.inputRequest}
        ></input>
        <button className="search__btn btn" onClick={() => this.handleInput()}>
          Search
        </button>
      </div>
    );
  }
}
