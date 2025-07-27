import { Component } from "react";
import { IErrorState } from "../../app/types";

export class ErrorButton extends Component {
  state: IErrorState = {
    error: false,
  };

  generateError() {
    this.setState({
      error: true,
    });
  }

  componentDidUpdate(): void {
    if (this.state.error) {
      throw new Error("Something went wrong!");
    }
  }

  render() {
    return (
      <button className="btn error__btn" onClick={() => this.generateError()}>
        Error
      </button>
    );
  }
}
