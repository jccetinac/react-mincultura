import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/menu';

import Home from './pages/home';
import Laura from './pages/laura';

import Presentacion from './pages/Presentacion';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import './style.css';

export default function App() {
  return (
    <div>
      <Header />
      <Router>
        <Menu />
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
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}
