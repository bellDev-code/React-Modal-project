import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Components/Main";
import { UseNoteContextProvider } from "./Hooks/useContext";

const App = () => {
  return (
    <UseNoteContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </UseNoteContextProvider>
  );
};

export default App;
