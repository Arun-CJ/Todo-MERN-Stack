import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/home';
import AddBucket from './components/addBucket';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/addbucket" component={AddBucket} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
