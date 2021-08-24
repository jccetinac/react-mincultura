import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/menu';
import Home from './pages/home';



import Presentacion from './pages/Presentacion';
import Introduccion from './pages/Introduccion';
import Elementos from './pages/Elementos';
import Dimensiones from './pages/1.dimensiones';
import Oralidad from './pages/1.1.oralidad';
import Memoria from './pages/1.2.memoria';
import Corporalidad from './pages/1.3.corporalidad';
import ProcesosTransversales from './pages/2.ProcesosTransversales';
import LaObservacion from './pages/2.1.laObservacion';
import LaEscucha from './pages/2.2.laEscucha';
import LaImitacion from './pages/2.3.laImitacion';
import LaExploracion from './pages/2.4.laExploracion';
import LaCreacion from './pages/2.5.laCreacion';
import LineasPedagogicas from './pages/3.LineasPedagogicas';
import TextoVoz from './pages/3.1.textoVoz';
import CuerpoYritmo from './pages/3.2.cuerpoYritmo';
import LoArmonico from './pages/3.3.loArmonico';
import EnsambleYMontaje from './pages/3.4.ensambleYmontaje';
import PautasDeInvestigacion from './pages/4.PautasDeInvestigacion';
import PorqueInvestigar from './pages/4.1.porqueInvestigar';
import QueInvestigar from './pages/4.2.queInvestigar';
import ComoInvestigar from './pages/4.3.comoInvestigar';
import QuienesPuedenInvestigar from './pages/4.4.quienesPuedenInvestigar';
import Anexos69 from './pages/5.Anexos69';
import Bibliografia from './pages/6.Bibliografia';
import Anexos2 from './pages/5.Anexos2';



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
                <Route exact path="/" component={Home} />
                <Route exact path="/presentacion" component={Presentacion} />
                <Route exact path="/introduccion" component={Introduccion} />
                <Route exact path="/Elementos" component={Elementos} />
                <Route exact path="/1.dimensiones" component={Dimensiones} />
                <Route exact path="/1.1.oralidad" component={Oralidad} />
                <Route exact path="/1.2.memoria" component={Memoria} />
                <Route exact path="/1.3.corporalidad" component={Corporalidad} />
                <Route exact path="/2.ProcesosTransversales" component={ProcesosTransversales} />
                <Route exact path="/2.1.laObservacion" component={LaObservacion} />
                <Route exact path="/2.2.laEscucha" component={LaEscucha} />
                <Route exact path="/2.3.laImitacion" component={LaImitacion} />
                <Route exact path="/2.4.laExploracion" component={LaExploracion} />
                <Route exact path="/2.5.laCreacion" component={LaCreacion} />
                <Route exact path="/3.LineasPedagogicas" component={LineasPedagogicas} />
                <Route exact path="/3.1.textoVoz" component={TextoVoz} />
                <Route exact path="/3.2.cuerpoYritmo" component={CuerpoYritmo} />
                <Route exact path="/3.3.loArmonico" component={LoArmonico} />
                <Route exact path="/3.4.ensambleYmontaje" component={EnsambleYMontaje} />
                <Route exact path="/4.PautasDeInvestigacion" component={PautasDeInvestigacion} /> 
                <Route exact path="/4.1.porqueInvestigar" component={PorqueInvestigar} /> 
                <Route exact path="/4.2.queInvestigar" component={QueInvestigar} />
                <Route exact path="/4.3.comoInvestigar" component={ComoInvestigar} />
                <Route exact path="/4.4.quienesPuedenInvestigar" component={QuienesPuedenInvestigar} />
                <Route exact path="/5.Anexos69" component={Anexos69} />
                <Route exact path="/6.Bibliografia" component={Bibliografia} />
                <Route exact path="/5.Anexos2" component={Anexos2} />
                
                


              </Switch>
            </div>
          </div>
        </Router>
      </div>
      <Footer />
    </>
  );
}
