import Home from "./pages/Home";
import React from "react";
import GlobalStyles from "./Components/GlobalStyles";
import Nav from "./Components/Nav";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
