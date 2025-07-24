import "./app.css";
import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageHome } from "./pages/pageHome";
import { PageNotFound } from "./pages/pageNotFound";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
