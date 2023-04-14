import React from "react";
import { Link } from "react-router-dom";
import EncabezadoPrincipal from "./EncabezadoPrincipal";

function Team() {
  return (
    <div>
      <EncabezadoPrincipal />
      <div class="hero common-hero">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="hero-ct">
                <h1>Nuestro Equipo</h1>
                <ul class="breadcumb">
                  <li class="active">
                    <Link to="/aprende-conmigo/">Home</Link>
                  </li>
                  <li>
                    {" "}
                    <span class="ion-ios-arrow-right"></span> Nuestro Equipo
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="page-single">
        <div class="container">
          <div class="row ipad-width2">
            <div class="col-md-9 col-sm-12 col-xs-12">
              <div class="celebrity-items">
                <div class="ceb-item">
                  <a href="celebritysingle.html">
                    <img className="foto" src="images/uploads/persona3.jpg" alt="" />
                  </a>
                  <div class="ceb-infor">
                    <h2>
                      <a href="celebritylist.html">Diego</a>
                    </h2>
                    <span>16 Años</span>
                  </div>
                </div>
                <div class="ceb-item">
                  <a href="celebritysingle.html">
                    <img className="foto" src="images/uploads/persona1.jpg" alt="" />
                  </a>
                  <div class="ceb-infor">
                    <h2>
                      <a href="celebritylist.html">Ian</a>
                    </h2>
                    <span>16 Años</span>
                  </div>
                </div>
                <div class="ceb-item">
                  <a href="celebritysingle.html">
                    <img className="foto" src="images/uploads/persona2.jpg" alt="" />
                  </a>
                  <div class="ceb-infor">
                    <h2>
                      <a href="celebritylist.html">X</a>
                    </h2>
                    <span>16 Años</span>
                  </div>
                </div>
                <div class="ceb-item">
                  <a href="celebritysingle.html">
                    <img className="foto" src="images/uploads/persona4.jpg" alt="" />
                  </a>
                  <div class="ceb-infor">
                    <h2>
                      <a href="celebritylist.html">Juan Diego</a>
                    </h2>
                    <span>16 Años</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Team;
