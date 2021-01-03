import Login from "./components/pages/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import User from "./components/pages/User";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/user" component={User} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
