import React from "react";
import Routes from "./Components/Utils/Routes";
import { useRoutes } from "hookrouter";
import GlobalStyle from "./Components/Styles/GlobalStyles";

import "./App.css";

function App() {
  const routeResult = useRoutes(Routes);

  return (
    <div className="App">
      <GlobalStyle />
      {routeResult}
    </div>
  );
}

export default App;
