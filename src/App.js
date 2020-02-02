import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Switch, Route } from "react-router-dom";

const Hats = props => <h1>Hats</h1>;

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
