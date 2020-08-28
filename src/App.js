import React from "react";
import Routes from "./Components/Utils/Routes";
import { useRoutes } from "hookrouter";
import "./App.css";

function App() {
  const routeResult = useRoutes(Routes);

  return <div className="App">{routeResult}</div>;
}

export default App;
