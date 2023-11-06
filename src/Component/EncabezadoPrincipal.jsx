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
              <Link to="/aprende-conmigo/" >
                <img
                  className="logo-Header"
                  src="images/uploads/logo.png"
                  alt=""
                  width="450"
                  height="450"
                />
              </Link>
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
                      <Link to="/aprende-conmigo/*">Nuestra Mision</Link>
                    </li>
                    <li>
                      <Link to="/aprende-conmigo/*">Nuestra Vision</Link>
                    </li>
                    <li>
                      <Link to="/aprende-conmigo/*">Encuestas de respaldo</Link>
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
                      <Link to="/aprende-conmigo/*">Imagenes</Link>
                    </li>
                    <li>
                      <Link to="/aprende-conmigo/*">Videos</Link>
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
