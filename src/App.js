import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
