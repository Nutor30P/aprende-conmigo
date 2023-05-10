import React from 'react'
import { Link} from 'react-router-dom'
function EncabezadoPrincipal() {
  return (
    <header className="ht-header">
        <div className="container">
          <nav className="navbar navbar-default navbar-custom">
            <div className="navbar-header logo">
              <div
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <div id="nav-icon1">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
                <img
                  className="logo-Header"
                  src="images/uploads/logito.png"
                  alt=""
                  width="119"
                  height="58"
                />
            </div>

            <div
              className="collapse navbar-collapse flex-parent"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav flex-child-menu menu-left">
                <li className="hidden">
                  <a href="#page-top"></a>
                </li>
                <li className="dropdown first">
                  <a
                    className="btn btn-default dropdown-toggle lv1"
                    data-toggle="dropdown"
                  >
                    Quienes Somos{" "}
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                  <ul className="dropdown-menu level1">
                    <li>
                      <Link to="">Nuestra Mision</Link>
                    </li>
                    <li>
                      <Link to="/aprende-conmigo/contenido">Nuestra Vision</Link>
                    </li>
                    <li>
                      <a href="homev3.html">Encuestas de respaldo</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown first">
                  <a
                    className="btn btn-default dropdown-toggle lv1"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    Evidencias
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                  <ul className="dropdown-menu level1">
                    <li className="dropdown">
                      <a href="movielist.html">Imagenes</a>
                    </li>
                    <li>
                      <a href="movielist.html">Videos</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown first">
                  <a
                    className="btn btn-default dropdown-toggle lv1"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    Descubre mas...{" "}
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                  <ul className="dropdown-menu level1">
                    <li>
                      <Link to="/aprende-conmigo/triki">Triki</Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown first">
                  <a
                    className="btn btn-default dropdown-toggle lv1"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    Que es react <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                  <ul className="dropdown-menu level1">
                    <li>
                      <a href="bloglist.html">x</a>
                    </li>
                    <li>
                      <a href="bloggrid.html">x</a>
                    </li>
                    <li className="it-last">
                      <a href="blogdetail.html">x</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown first">
                  <a
                    className="btn btn-default dropdown-toggle lv1"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    Acerca de...{""}
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                  <ul className="dropdown-menu level1">
                    <li>
                    <Link to="/aprende-conmigo/team">Nuestro Equipo</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
  )
}

export default EncabezadoPrincipal
