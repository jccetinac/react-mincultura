import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/menu';

import Home from './pages/home';
import Laura from './pages/laura';
import Prueba from './pages/prueba';

import Presentacion from './pages/Presentacion';
import Introduccion from './pages/Introduccion';
import Dimensiones from './pages/1.dimensiones';
import ProcesosTransversales from './pages/2.ProcesosTransversales';
import LineasPedagogicas from './pages/3.LineasPedagogicas';
import PautasDeInvestigacion from './pages/4.PautasDeInvestigacion';


import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';

import './style.css';


export default function App() {
  return (
    <>
      <Header />
      <div className="p-5 text-white">
        <Router>
          <div className="row">
            <div className="col-md-3">
              <Menu />
            </div>
            <div className="col-md-9">
              <Switch>
                <Router exact path="/" component={Home} />
                <Route exact path="/laura" component={Laura} />
                <Route exact path="/presentacion" component={Presentacion} />
                <Route exact path="/prueba" component={Prueba} />
                <Route exact path="/introduccion" component={Introduccion} />
                <Route exact path="/1.dimensiones" component={Dimensiones} />
                <Route exact path="/2.ProcesosTransversales" component={ProcesosTransversales} />
                <Route exact path="/3.LineasPedagogicas" component={LineasPedagogicas} />
                <Route exact path="/4.PautasDeInvestigacion" component={PautasDeInvestigacion} /> 

              </Switch>
            </div>
          </div>
        </Router>
      </div>
      <Footer />
    </>
  );
}
