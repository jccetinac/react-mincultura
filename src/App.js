import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/menu';



import Home from './pages/home';
import Laura from './pages/laura';
import Prueba from './pages/prueba';

import Presentacion from './pages/Presentacion';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import './style.css';
export default function App() {
  return (
    
    <div>
      <Header />
      <div className="row">
      <div className=" p-5 col-md-3 ">
      <Menu/>
    </div>
      <div className="col-md-9">
        <Router>
        <div>
           <Switch>
            <Router exact path="/">
              <Home />
            </Router>

            <Router exact path="/presentacion">
              <Presentacion />
            </Router>

            <Router exact path="/laura">
              <Laura />
            </Router>

            <Router exact path="/prueba">
              <Prueba />
            </Router>

          </Switch>
        </div>
      </Router>
      </div>
      </div>
     <Footer />
    </div>
  );
}
