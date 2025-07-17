import "./controls.css";
import { Component } from "react";
import { IControlState } from "../../app/types";
import { sendRequest} from "../../app/requests";

export class Controls extends Component {
  state: IControlState = {
    inputRequest: "",
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

  render() {
    return (
      <div className="controls">
        <input
          className="search__input"
          defaultValue={this.state.inputRequest}
        ></input>
        <button className="search__btn btn" onClick={this.handleInput}>
          Search
        </button>
      </div>
    );
  }

  async handleInput() {
    const pInput: HTMLInputElement | null =
      document.querySelector(".search__input");
    if (pInput) {
      const sRequest = pInput.value.trim();
      localStorage.setItem("request", sRequest);

      await sendRequest(sRequest);
    }
  }
}
