import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../src/Component/Home/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Start from './Component/Start/Start';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Start></Start>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
