import "./controls.css";
import { Component } from "react";
import { IControlState, ControlProps } from "../../app/types";

export class Controls extends Component <ControlProps> {
  state: IControlState = {
    inputRequest: this.props.inputRequest,
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

  async handleInput() {
    const sRequest: string  =  localStorage.getItem('request') || ''
    this.setState ({inputRequest: sRequest})
    this.props.onClick(this.state.inputRequest || '');
  }

  changeInput(value: string){
    localStorage.setItem("request", value);
  }

  render() {
    return (
      <div className="controls">
        <input
          className="search__input"
          defaultValue={this.state.inputRequest}
          onChange = {(e) => this.changeInput(e.target.value.trim())}
        ></input>
        <button className="search__btn btn" onClick={() => this.handleInput()}>
          Search
        </button>
      </div>
    );
  }
}
