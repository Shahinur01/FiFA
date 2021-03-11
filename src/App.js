import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import Detail from './Components/Details/Detail';
import Home from './Components/Home/Home';


function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/Home">
          <Home />
        </Route>

        <Route path="/Detail/:idTeam">
          <Detail></Detail>
        </Route>

        <Route path="*">
          <NoMatch />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
