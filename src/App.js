import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./Components/Landing page/LandingPage";
import Categories from "./Components/Categories/Categories";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/categories" component={Categories} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
