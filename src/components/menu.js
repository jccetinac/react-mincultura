import React from 'react';
import { NavLink } from 'react-router-dom';



export default function Menu() {
  return (
    <div className="card p-4 menu">
      
      <p><NavLink activeClassName="linkselected" to="/creditos">Créditos</NavLink></p>
     <p><NavLink activeClassName="linkselected" to="/presentacion">Presentación</NavLink></p>
     <p><NavLink activeClassName="linkselected" to="/introduccion">Introducción</NavLink></p>
     <p>
       <NavLink activeClassName="linkselected" to="/Elementos">Elementos que configuran las pedagogías de las músicas de tradición oral</NavLink>
      </p>

     <p><NavLink activeClassName="linkselected" to="/1.dimensiones">1. Dimensiones</NavLink></p>
        <ul>
          <li className="subitems">
          <NavLink activeClassName="linkselected" to="/1.1.oralidad"> 1.1. Oralidad</NavLink>
          </li>
          <li className="subitems">
          <NavLink activeClassName="linkselected" to="/1.2.memoria"> 1.2. Memoria</NavLink>
          </li>
          <li className="subitems">
          <NavLink activeClassName="linkselected" to="/1.3.corporalidad"> 1.3. Corporalidad</NavLink>
          </li>
        </ul>
        <p><NavLink activeClassName="linkselected" to="/2.ProcesosTransversales"> 2. Procesos transversales</NavLink></p>
        <ul>
          <li className="subitems">
          <NavLink activeClassName="linkselected" to="/2.1.laObservacion"> 2.1. La observación: “pele el ojo”</NavLink>
          </li>
          <li className="subitems">
          <NavLink activeClassName="linkselected" to="/2.2.laEscucha"> 2.2. La Escucha: “pare oreja”</NavLink>
          </li>
          <li className="subitems">
          <NavLink activeClassName="linkselected" to="/2.3.laImitacion"> 2.3. La imitación</NavLink>
          </li>
          <li className="subitems">
          <NavLink activeClassName="linkselected" to="/2.4.laExploracion"> 2.4. La exploración</NavLink>
          </li>
          <li className="subitems">
          <NavLink activeClassName="linkselected" to="/2.5.laCreacion"> 2.5. La creación y la improvisación</NavLink>
          </li>
        </ul>
        <p><NavLink activeClassName="linkselected" to="/3.LineasPedagogicas"> 3. Líneas pedagógicas</NavLink></p>
        <ul>
          <li className="subitems">
          <NavLink activeClassName="linkselected" to="/3.1.textoVoz"> 3.1. Texto, voz y canto</NavLink>
          </li>
          <li className="subitems">
          <NavLink activeClassName="linkselected" to="/3.2.cuerpoYritmo">3.2. Cuerpo, ritmo y movimiento</NavLink>
          </li>
          <li className="subitems">
          <NavLink activeClassName="linkselected" to="/3.3.loArmonico">3.3. Lo armónico y melódico</NavLink>
          </li>
          <li className="subitems">
          <NavLink activeClassName="linkselected" to="/3.4.ensambleYmontaje">3.4. Ensamble y montaje</NavLink>
          </li>
        </ul>
        <p><NavLink activeClassName="linkselected" to="/4.PautasDeInvestigacion">4. Pautas de Investigación de las pedagogías de las músicas de tradición oral</NavLink>
           </p>
           <ul>
             <li className="subitems">
             <NavLink activeClassName="linkselected" to="/4.1.porqueInvestigar">4.1. ¿Por qué investigar las pedagogías de las músicas de tradición oral?</NavLink>
             </li>
             <li className="subitems">
             <NavLink activeClassName="linkselected" to="/4.2.queInvestigar">4.2. ¿Qué investigar en las pedagogías de las músicas de tradición oral?</NavLink>
             </li>
             <li className="subitems">
             <NavLink activeClassName="linkselected" to="/4.3.comoInvestigar">4.3. ¿Cómo investigar las pedagogías de las músicas de tradición oral desde la escuela?</NavLink>        
             </li>
             <li className="subitems">
             <NavLink activeClassName="linkselected" to="/4.4.quienesPuedenInvestigar">4.4. ¿Quiénes pueden investigar las pedagogías de las músicas de tradición oral?</NavLink>       
              </li>
             </ul>
           <p><NavLink activeClassName="linkselected" to="/5.Anexos2">5. Anexos</NavLink></p>
           <p><NavLink activeClassName="linkselected" to="/6.Bibliografia">6. Bibliografía</NavLink></p>
          
           
      </div>
  );
}
