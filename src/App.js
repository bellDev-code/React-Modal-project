import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Components/Main";
import { UseContextProvider } from "./Hooks/useContext";

const App = () => {
  return (
    <UseContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </UseContextProvider>
  );
};

export default App;
