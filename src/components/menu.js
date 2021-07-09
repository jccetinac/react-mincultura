import React from 'react';
import Presentacion from '../pages/Presentacion';
import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';


export default function Menu() {
  return (
    <div className="card p-4 menu">
      
     <Router>
     <Link to="/presentacion">Presentacion</Link>
     </Router>

      <p><b>Introduccion</b></p>        
      <p><b className="negrita">Elementos que configuran las pedagogías de las músicas de tradición oral</b></p>
      <p>1. Dimensiones</p>  
        <ul>
          <li>
          1.1.Oralidad
          </li>
          <li>
          1.2.Memoria
          </li>
          <li>
          1.3.Corporalidad
          </li>
        </ul>
        <p>2.	Procesos transversales</p>
        <ul>
          <li>
          2.1.La observación: “pele el ojo”
          </li>
          <li>
          2.2.La Escucha: “pare oreja”
          </li>
          <li>
          2.3.La imitación
          </li>
          <li>
          2.4.La exploración
          </li>
          <li>
          2.5.La creación y la improvisación
          </li>
        </ul>
        <p>3.	Líneas pedagógicas</p>
        <ul>
          <li>
          3.1.Texto, voz y canto
          </li>
          <li>
          3.2.Cuerpo, ritmo y movimiento
          </li>
          <li>
          3.3.Lo armónico y melódico
          </li>
          <li>
          3.4.Ensamble y montaje
          </li>
        </ul>
        <p>4.	Pautas de Investigación de las pedagogías de las músicas de tradición oral
           </p>
           <ul>
             <li>
             4.1.¿Por qué investigar las pedagogías de las músicas de tradición oral?
             </li>
             <li>
             4.2.¿Qué investigar en las pedagogías de las músicas de tradición oral?
             </li>
             <li>
             4.3.¿Cómo investigar las pedagogías de las músicas de tradición oral desde la escuela?
             </li>
             <li>
             4.4.¿Quiénes pueden investigar las pedagogías de las músicas de tradición oral?
             </li>
           </ul>
           <p>5.	Anexos	69</p>
           <p>6.	Bibliografía</p>
      </div>
  );
}
