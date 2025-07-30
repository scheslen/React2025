import "./home.css";
import { useState } from "react";
import { Controls } from "../Controls/Controls.tsx";
import { Results } from "../Results/Results.tsx";
import { Loader } from "../Loader/Loader.tsx";
import { sendRequest } from "../../app/requests";
import { ErrorButton } from "../ErrorButton/ErrorButton.tsx";
import { Page } from "../Page/page.tsx";
import { useLSRequest, useLSPage } from "../../app/hooks.tsx";

export const Home = () => {
  const [load, setLoad] = useState(false);
  const [inputRequest, setInputRequest] = useState(useLSRequest());
  const [pageNumber, setPageNumber] = useState(useLSPage());

  async function fetchData(iRequest: string, pNumber: number) {
    setLoad(true);
    await sendRequest(iRequest, pNumber);
    setLoad(false);
  }

  async function newSearchInput() {
    const iRequest = localStorage.getItem("request") || "";
    await fetchData(iRequest, pageNumber);
    setInputRequest(iRequest);
  }

  async function newSearchPage() {
    const pNumber = localStorage.getItem("page") || 0;
    await fetchData(inputRequest, Number(pNumber));
    setPageNumber(Number(pNumber));
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
        <Page
          pageNumber={pageNumber}
          onClick={() => {
            newSearchPage();
          }}
        />
        <ErrorButton />
      </div>
    </main>
  );
};
