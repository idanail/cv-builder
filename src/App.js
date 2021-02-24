import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Categories from "./Components/Categories/Categories";
import LandingPage from "./Components/Landing page/LandingPage";
import MainRender from "./Components/MainRender/MainRender";
import Popup from "./Components/MainRender/Popup";
import NotFound from "./Components/NotFound/NotFound";
import { DataContextProvider } from "./context/CvContext";

function App() {
  return (
    <Container fluid className="App">
      <DataContextProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/popup" component={Popup} />
            <Route path="/categories" exact component={Categories} />
            <Route path="/categories/:url" component={MainRender} />
            <Route path="/notfound" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </DataContextProvider>
    </Container>
  );
}

export default App;
