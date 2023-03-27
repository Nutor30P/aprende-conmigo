import React from 'react'

function Redes() {
  return (
    <div className="col-md-4 col-sm-12 col-xs-12">
    <div className="sidebar">
      <div className="searh-form">
        <h4 className="sb-title">Pagina 100%Sanluiseña</h4>
      </div>
      <div className="ads">
        <img src="images/uploads/estatua.jpg" alt="" />
      </div>
      <div className="sb-facebook sb-it">
        <h4 className="sb-title">Noticias </h4>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAlcaldiaSanLuisdeGacenoBoyacaColombia%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          height="325"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  </div>
  )
}

export default Redes
