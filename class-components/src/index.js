"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
var react_router_dom_1 = require("react-router-dom");
var pageHome_1 = require("./pages/pageHome");
var pageNotFound_1 = require("./pages/pageNotFound");
require("./app/app.css");
var root = client_1.default.createRoot(document.getElementById("root"));
root.render(<react_1.StrictMode>
      <react_router_dom_1.BrowserRouter>
        <react_router_dom_1.Routes>
          <react_router_dom_1.Route path="/" element={<pageHome_1.PageHome />}/>
          <react_router_dom_1.Route path="*" element={<pageNotFound_1.PageNotFound />}/>
        </react_router_dom_1.Routes>
      </react_router_dom_1.BrowserRouter>
  </react_1.StrictMode>);
