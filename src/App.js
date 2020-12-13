import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.js'
import Productlist from './components/Productlist.js'
import Default from './components/Default.js'
import Details from './components/Details.js'
import Cart from './components/Cart.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
          <Switch>
            <Route path="/" exact component={Productlist}/>
            <Route path="/details" component={Details}/>
            <Route path="/cart" component={Cart}/>
            <Route  component={Default}/>
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App; 
