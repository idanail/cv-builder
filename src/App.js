import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Categories from "./Components/Categories/Categories";
import LandingPage from "./Components/Landing page/LandingPage";

function App() {
  return (
    <div className="App container-fluid">
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
