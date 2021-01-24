import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Categories from "./Components/Categories/Categories";
import LandingPage from "./Components/Landing page/LandingPage";
import MainRender from "./Components/MainRender/MainRender";

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
