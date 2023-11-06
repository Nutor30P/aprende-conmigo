import React from "react";
import Encabezado from "./Encabezado";
import Footer from "./Footer";
import EncabezadoPrincipal from "./EncabezadoPrincipal";
import Redes from "./Redes";
import Date from '../date/Date.json';
import Temas from './Temas';


function Home() {
  let temas = Date;
  const validacion = (titulo) => {
    if (titulo === "SUMA") {
      return "/aprende-conmigo/suma";
    } else if (titulo === "RESTA") {
      return "/aprende-conmigo/resta";
    } else if (titulo === "MULTIPLICACION") {
      return "/aprende-conmigo/multiplicacion";
    } else if (titulo === "DIVISION") {
      return "/aprende-conmigo/division";
    } else if (titulo === "FRACCIONES") {
      return "/aprende-conmigo/fracciones";
    } else if (titulo === "Raiz") {
      return "/aprende-conmigo/raiz"; 
    }
  };
  return (
    <div>
      <EncabezadoPrincipal />
      <Encabezado />
      <div className="page-single movie_list">
        <div className="container">
          <div className="row ipad-width2">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="topbar-filter">
                <p>
                  Eligue tu tema <span>6</span> en total
                </p>
              </div>
              {temas.map(tema =>
          <Temas titulo={tema.titulo} imagen={tema.imagen} descripcion={tema.descripcion} duracion={tema.duracion} clasificacion={tema.clasificacion} estreno={tema.estreno} director={tema.director} actores={tema.actores} anio={tema.anio} validacion={validacion(tema.titulo)} />
        )}      
            </div>
            <Redes />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
