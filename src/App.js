import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';
import Presentacion from './pages/Presentacion';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import './style.css';

export default function App() {
  return (
    <div>
      <Header />
      <Router>
        <div>
          <Switch>
            <Router exact path="/">
              <Home />
            </Router>

            <Router exact path="/presentacion">
              <Presentacion />
            </Router>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}
