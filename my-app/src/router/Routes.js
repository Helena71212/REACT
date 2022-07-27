import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ROUTE_NAMES } from "./routeNames";
import CounterContainer from "../pages/counter/containers/counterContainer";
import FunctionalCounterContainer from "../pages/FunctionalCounter/containers/FunctionalCounterContainer";
import CounterOfCountersContainer from "../pages/counterOfCounters/containers/CounterOfCountersContainer";
import Home from "../pages/Home";
import ListContainer from "../pages/lists/container/listContainer";


const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<Home />} />

      <Route path={ROUTE_NAMES.COUNTER} element={<CounterContainer />} />
      <Route
        path={ROUTE_NAMES.FUNCTIONAL_COUNTER}
        element={<FunctionalCounterContainer />}
      />
            <Route
        path={ROUTE_NAMES.LISTS}
        element={<ListContainer />}
      />
      <Route
        path={ROUTE_NAMES.COUNTER_OF_COUNTERS}
        element={<CounterOfCountersContainer />}
      />
    </Routes>
  );
};

export default Router;
