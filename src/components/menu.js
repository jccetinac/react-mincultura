import React from 'react';
import { Link } from 'react-router-dom';



export default function Menu() {
  return (
    <div className="card p-4 menu">
      
     
     <p><Link to="/laura">Presentacion</Link></p>
     <p><Link to="/presentacion">Introduccion</Link></p>
     <p>
       <Link to="/laura">Elementos que configuran las pedagogías de las músicas de tradición oral</Link>
      </p>

     <p><Link to="/presentacion">1. Dimensiones</Link></p>
        <ul>
          <li>
          <Link to="/laura"> 1.1. Oralidad</Link>
          </li>
          <li>
          <Link to="/laura"> 1.2. Memoria</Link>
          </li>
          <li>
          <Link to="/laura"> 1.3. Corporalidad</Link>
          </li>
        </ul>
        <p><Link to="/laura"> 2. Procesos transversales</Link></p>
        <ul>
          <li>
          <Link to="/laura"> 2.1. La observación: “pele el ojo”</Link>
          </li>
          <li>
          <Link to="/laura"> 2.2. La Escucha: “pare oreja”</Link>
          </li>
          <li>
          <Link to="/laura"> 2.3. La imitación</Link>
          </li>
          <li>
          <Link to="/laura"> 2.4. La exploración</Link>
          </li>
          <li>
          <Link to="/laura"> 2.5. La creación y la improvisación</Link>
          </li>
        </ul>
        <p><Link to="/laura"> 3. Líneas pedagógicas</Link></p>
        <ul>
          <li>
          <Link to="/laura"> 3.1. Texto, voz y canto</Link>
          </li>
          <li>
          <Link to="/laura">3.2. Cuerpo, ritmo y movimiento</Link>
          </li>
          <li>
          <Link to="/laura">3.3. Lo armónico y melódico</Link>
          </li>
          <li>
          <Link to="/laura">3.4. Ensamble y montaje</Link>
          </li>
        </ul>
        <p><Link to="/laura">4. Pautas de Investigación de las pedagogías de las músicas de tradición oral</Link>
           </p>
           <ul>
             <li>
             <Link to="/laura">4.1. ¿Por qué investigar las pedagogías de las músicas de tradición oral?</Link>
             </li>
             <li>
             <Link to="/laura">4.2. ¿Qué investigar en las pedagogías de las músicas de tradición oral?</Link>
             </li>
             <li>
             <Link to="/laura">4.3. ¿Cómo investigar las pedagogías de las músicas de tradición oral desde la escuela?</Link>        
             </li>
             <li>
             <Link to="/laura">4.4. ¿Quiénes pueden investigar las pedagogías de las músicas de tradición oral?</Link>       
              </li>
             </ul>
           <p><Link to="/laura">5. Anexos	69</Link></p>
           <p><Link to="/laura">6. Bibliografía</Link></p>
           
      </div>
  );
}
