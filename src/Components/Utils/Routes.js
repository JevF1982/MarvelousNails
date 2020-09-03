import React from "react";
import HomePage from "../HomePage/Homepage";
import LookBook from "../LookBook/LookBook";
import ServicePage from "../ServicePage/ServicePage";
import ContactPage from "../ContactPage/ContactPage";
import AppointmentsPage from "../AppointmentsPage/AppointmentsPage";

const Routes = {
  "/": () => <HomePage />,
  "/lookbook": () => <LookBook />,
  "/services": () => <ServicePage />,
  "/contact": () => <ContactPage />,
  "/appointment": () => <AppointmentsPage />,
};

export default Routes;
