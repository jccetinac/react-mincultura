import React from 'react';
import { Link } from 'react-router-dom';

export default function Presentacion() {
  return (
    <div className="page card ">
      <h1 className="titulorojo">PRESENTACION</h1>
      <h2 className="subtituloazul">SUBTITULO </h2>
      <p><i className="cursiva">Esta es la pagina de prueba</i></p>
      <p className="parrafo">·	Acumulativas: cuando un coplero toma una tonada que ya tiene incorporada al ser “hablante” de esas músicas, la llena de contenido (texto) siguiendo patrones métricos y estróficos ya aprendidos por tradición oral. Es decir, a elementos ya apropiados —podemos decir acumulados— se agregan nuevas acciones que permiten transitar por las formas particulares de repentismo. Esto sucede con claridad en las formas de la trova, del contrapunteo o de la piqueria
      </p>
      <p className="parrafo">·	Acumulativas: cuando un coplero toma una tonada que ya tiene incorporada al ser “hablante” de esas músicas, la llena de contenido (texto) siguiendo patrones métricos y estróficos ya aprendidos por tradición oral. Es decir, a elementos ya apropiados —podemos decir acumulados— se agregan nuevas acciones que permiten transitar por las formas particulares de repentismo. Esto sucede con claridad en las formas de la trova, del contrapunteo o de la piqueria
     </p>
     <img className="imagenmin" src="https://i.pinimg.com/236x/6b/5f/17/6b5f17f45147940b9e3aad2c0dc1d3dd--german-shepherd-husky-shepherd-dogs.jpg" 
     alt="Imagen de prueba">
       </img>
       <p className="parrafo">·	Acumulativas: cuando un coplero toma una tonada que ya tiene incorporada al ser “hablante” de esas músicas, la llena de contenido (texto) siguiendo patrones métricos y estróficos ya aprendidos por tradición oral. Es decir, a elementos ya apropiados —podemos decir acumulados— se agregan nuevas acciones que permiten transitar por las formas particulares de repentismo. Esto sucede con claridad en las formas de la trova, del contrapunteo o de la piqueria
      </p>

        <table className="tablamin">
        <tr>
          <th>Eje</th>
          <th>Eje</th>
          <th>Eje</th> 
          </tr>

          <tr>
            <td>Eje</td>
            <td>Eje</td>
            <td>Eje</td>
          </tr>

          <tr>
           <td>Eje</td>
           <td>Eje</td>
           <td>Eje</td>
          </tr>
        </table>

        <iframe className="videomin"
        src="https://www.youtube.com/embed/ZSHyR--4Pek" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
       </iframe>

        <p className="parrafo">Este es el modal de prueba para el libro min 
        <sup><a data-toggle="modal" data-target="#notapie1">1</a></sup>
        </p>

        <p className="parrafo">Estas cartillas definieron rutas de abordaje a través de niveles
          <Link to="/laura"> Visita</Link>: ritmo percusivo, ritmo armónico, ritmo melódico e improvisatorio, enfocándose en algunas formas de estructuración de estas músicas, pero no en las características de las pedagogías de las mismas. En años posteriores, desde el área de música del Ministerio de Cultura, se han diseñado lineamientos de formación musical en los que se han recogido los aportes pedagógicos de diversas corrientes y procedencias. De esta manera, las cartillas y lineamientos anteriores, se han centrado en las músicas y sus formatos y han propuesto caminos para su abordaje.
         </p>
    
    </div>
  );
}



// inicio modales

<div id="notapie1" class="modal fade" role="dialog">
  <div class="modal-dialog">

    
    <div class="modal-content">
      <div class="modal-header"> <button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">1</h4> 
      </div>
      <div class="modal-body">
        <p>
        modal de prueba
         </p>
      </div>

      </div>
      </div>
      </div>