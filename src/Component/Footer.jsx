import React from 'react'

function Footer() {
  return (
    <footer className="ht-footer">
        <div className="container">
          <div className="flex-parent-ft">
            <div className="flex-child-ft item1">
              <a href="index-2.html">
                <img className="logo" src="images/uploads/logo.png" alt="" />
              </a>
              <p>
              </p>
            </div>
            <div className="equipo">
              <img src="images/uploads/equipo.jpg" alt="" />
              <h4 className='titulo-equipo'>Equipo de Trabajo</h4>
            </div>
          </div>
        </div>
        <div className="ft-copyright">
          <div className="ft-left">
            <p>
              <a target="_blank" href="https://www.templateshub.net">
                Templates Hub
              </a>
            </p>
          </div>
          <div className="backtotop">
            <p>
              <a href="#" id="back-to-top">
                Back to top <i className="ion-ios-arrow-thin-up"></i>
              </a>
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer
