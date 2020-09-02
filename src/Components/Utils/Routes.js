import React from "react";
import HomePage from "../HomePage/Homepage";
import LookBook from "../LookBook/LookBook";
import ServicePage from "../ServicePage/ServicePage";
import ContactPage from "../ContactPage/ContactPage";

const Routes = {
  "/": () => <HomePage />,
  "/lookbook": () => <LookBook />,
  "/services": () => <ServicePage />,
  "/contact": () => <ContactPage />,
};

export default Routes;
