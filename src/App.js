import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Components/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
