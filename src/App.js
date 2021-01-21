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
import MainRender from "./Components/MainRender/MainRender";
import CV from "./Components/MainRender/CV";

function App() {
  return (
    <div className="App container-fluid">
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/categories" exact component={Categories} />
          <Route path="/categories/:url" component={MainRender} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
