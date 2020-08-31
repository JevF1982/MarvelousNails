import React from "react";
import HomePage from "../HomePage/Homepage";
import LookBook from "../LookBook/LookBook";

const Routes = {
  "/": () => <HomePage />,
  "/lookbook": () => <LookBook />,
};

export default Routes;
