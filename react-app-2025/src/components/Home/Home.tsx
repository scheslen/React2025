import "./home.css";
import { useState } from "react";
import { Controls } from "../Controls/Controls.tsx";
import { Results } from "../Results/Results.tsx";
import { Loader } from "../Loader/Loader.tsx";
import { sendRequest } from "../../app/requests";
import { ErrorButton } from "../ErrorButton/ErrorButton.tsx";
import { Page } from "../Page/page.tsx";

export const Home = () => {
  const [load, setLoad] = useState(false);
  const [inputRequest, setInputRequest] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  async function fetchData() {
    setLoad(true);
    await sendRequest(inputRequest, pageNumber);
    setLoad(false);
  }

  async function newSearchInput() {
    setInputRequest(inputRequest);
    await fetchData();
  }

 async function newSearchPage() {
    setPageNumber(pageNumber);
    await fetchData();
  }

  return (
    <main className="main">
      <div className="container">
        <Controls
          inputRequest={inputRequest}
          onClick={() => {
            newSearchInput();
          }}
        />
        {load ? <Loader /> : <Results />}
        <Page pageNumber={pageNumber}  onClick={() => {
            newSearchPage();
          }}/>
        <ErrorButton />
      </div>
    </main>
  );
};
