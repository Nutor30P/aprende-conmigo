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
              <h1> LISTAS DE TEMAS</h1>
              <ul className="breadcumb">
                <li className="active">
                  <Link to="/aprende-conmigo/">Inicio</Link>
                </li>
                <li>
                  {" "}
                  <span className="ion-ios-arrow-right"></span> Lista de Temas
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
