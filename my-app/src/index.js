import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Routes";
import "./index.css";
import CounterContainer from "./pages/counter/containers/counterContainer";
import FunctionalCounterContainer from "./pages/FunctionalCounter/containers/FunctionalCounterContainer";
import CounterOfCountersContainer from "./pages/counterOfCounters/containers/CounterOfCountersContainer";

import MayInLayouts from "./pages/counter/components/Layouts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <BrowserRouter>
      <MayInLayouts>
        <Router />
      </MayInLayouts>
    </BrowserRouter>  
);
