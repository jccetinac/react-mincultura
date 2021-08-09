import React from 'react';
import { Link } from 'react-router-dom';



export default function Menu() {
  return (
    <div className="card p-4 menu">
      
     
     <p><Link to="/presentacion">Presentación</Link></p>
     <p><Link to="/introduccion">Introducción</Link></p>
     <p>
       <Link to="/Elementos">Elementos que configuran las pedagogías de las músicas de tradición oral</Link>
      </p>

     <p><Link to="/1.dimensiones">1. Dimensiones</Link></p>
        <ul>
          <li className="subitems">
          <Link to="/1.1.oralidad"> 1.1. Oralidad</Link>
          </li>
          <li className="subitems">
          <Link to="/1.2.memoria"> 1.2. Memoria</Link>
          </li>
          <li className="subitems">
          <Link to="/1.3.corporalidad"> 1.3. Corporalidad</Link>
          </li>
        </ul>
        <p><Link to="/2.ProcesosTransversales"> 2. Procesos transversales</Link></p>
        <ul>
          <li className="subitems">
          <Link to="/2.1.laObservacion"> 2.1. La observación: “pele el ojo”</Link>
          </li>
          <li className="subitems">
          <Link to="/2.2.laEscucha"> 2.2. La Escucha: “pare oreja”</Link>
          </li>
          <li className="subitems">
          <Link to="/2.3.laImitacion"> 2.3. La imitación</Link>
          </li>
          <li className="subitems">
          <Link to="/2.4.laExploracion"> 2.4. La exploración</Link>
          </li>
          <li className="subitems">
          <Link to="/2.5.laCreacion"> 2.5. La creación y la improvisación</Link>
          </li>
        </ul>
        <p><Link to="/3.LineasPedagogicas"> 3. Líneas pedagógicas</Link></p>
        <ul>
          <li className="subitems">
          <Link to="/3.1.textoVoz"> 3.1. Texto, voz y canto</Link>
          </li>
          <li className="subitems">
          <Link to="/3.2.cuerpoYritmo">3.2. Cuerpo, ritmo y movimiento</Link>
          </li>
          <li className="subitems">
          <Link to="/3.3.loArmonico">3.3. Lo armónico y melódico</Link>
          </li>
          <li className="subitems">
          <Link to="/3.4.ensambleYmontaje">3.4. Ensamble y montaje</Link>
          </li>
        </ul>
        <p><Link to="/4.PautasDeInvestigacion">4. Pautas de Investigación de las pedagogías de las músicas de tradición oral</Link>
           </p>
           <ul>
             <li className="subitems">
             <Link to="/4.1.porqueInvestigar">4.1. ¿Por qué investigar las pedagogías de las músicas de tradición oral?</Link>
             </li>
             <li className="subitems">
             <Link to="/4.2.queInvestigar">4.2. ¿Qué investigar en las pedagogías de las músicas de tradición oral?</Link>
             </li>
             <li className="subitems">
             <Link to="/4.3.comoInvestigar">4.3. ¿Cómo investigar las pedagogías de las músicas de tradición oral desde la escuela?</Link>        
             </li>
             <li className="subitems">
             <Link to="/4.4.quienesPuedenInvestigar">4.4. ¿Quiénes pueden investigar las pedagogías de las músicas de tradición oral?</Link>       
              </li>
             </ul>
           <p><Link to="/5.Anexos69">5. Anexos</Link></p>
           <p><Link to="/6.Bibliografia">6. Bibliografía</Link></p>
           
      </div>
  );
}
