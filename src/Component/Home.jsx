import React from "react";
import Encabezado from "./Encabezado";
import Footer from "./Footer";
import EncabezadoPrincipal from "./EncabezadoPrincipal";
import Redes from "./Redes";

function Home(props) {
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

              {props.children}
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
