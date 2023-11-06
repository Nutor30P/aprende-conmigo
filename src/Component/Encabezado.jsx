import React from "react";
import "../styles/home.css"
import { Link } from "react-router-dom";

function Encabezado() {
  return (
    <div className="hero common-hero">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hero-ct">
              <Link to="/aprende-conmigo/"><h1> LISTAS DE TEMAS</h1></Link>
              
              <ul className="breadcumb">
                <li className="active">
                  {" "}
                  <Link to="/aprende-conmigo/">Inicio</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/aprende-conmigo/"><span className="ion-ios-arrow-right"></span> Listas de Temas</Link>       
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Encabezado;
