import "./controls.css";
import { ControlProps } from "../../app/types";
import { useState } from "react";

export const Controls = (props: ControlProps) => {
  const [inputRequest, setInputRequest] = useState(props.inputRequest);

  async function handleInput() {
    const sRequest: string = localStorage.getItem("request") || "";
    setInputRequest(sRequest);
    props.onClick(inputRequest);
  }

  function changeInput(value: string) {
    localStorage.setItem("request", value);
  }

  return (
    <div className="controls">
      <input
        className="search__input"
        defaultValue={inputRequest}
        onChange={(e) => changeInput(e.target.value.trim())}
      ></input>
      <button className="search__btn btn" onClick={() => handleInput()}>
        Search
      </button>
    </div>
  );
};
