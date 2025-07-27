import "./home.css";
import { useState } from "react";
import { Controls } from "../Controls/Controls.tsx";
import { Results } from "../Results/Results.tsx";
import { Loader } from "../Loader/Loader.tsx";
import { sendRequest } from "../../app/requests";
import { ErrorButton } from "../ErrorButton/ErrorButton.tsx";

export const Home = () => {

  const [load, setLoad] = useState(false)
  const [inputRequest , setInputRequest] = useState ('')

  async function fetchData(inputRequest: string) {
    setLoad(true) ;
    setInputRequest(inputRequest);
    await sendRequest(inputRequest);
    setLoad(false);
  }

  async function newSearch() {
    await fetchData(inputRequest);
  }

  return (
      <main className="main">
        <div className="container">
          <Controls
            inputRequest={inputRequest}
            onClick={() => {
             newSearch();
            }}
          />
          {load ? <Loader /> : <Results />}
          <ErrorButton />
        </div>
      </main>
    );
 }
