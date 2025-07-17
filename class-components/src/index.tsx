import "./app/app.css";
import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageHome } from "./pages/pageHome";
import { PageNotFound } from "./pages/pageNotFound";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="*" element={<PageNotFound />} />
     </Routes>
    </BrowserRouter>
  </StrictMode>
);
