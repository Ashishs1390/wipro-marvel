import logo from './logo.svg';
import './App.scss';
import {Provider} from 'react-redux';
import Home from './Components/Home/Home';
import store from './redux/store'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <Router>
      <Switch>
      <Route exact path="/Home">
        <Home />
      </Route>
      {/* <Route exact path="/Product/Details/:productid"  children={<ProductDetails />} ></Route> */}
      </Switch>
      </Router>      
    </div>
    </Provider>
  );
}

export default App;
