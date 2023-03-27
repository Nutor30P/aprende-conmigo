import React from 'react'

function Temas({titulo, imagen, descripcion, duracion, clasificacion, estreno, director, actores, anio}) {
  return (
    <div className="movie-item-style-2">
    <img src={imagen} alt="" />
    <div className="mv-item-infor">
      <h6>
        <a href="moviesingle.html">
          {titulo} <span>({anio})</span>
        </a>
      </h6>
      <p className="rate">
        <i className="ion-android-star"></i>
        <span>{clasificacion}</span> /10
      </p>
      <p className="describe">
        {descripcion}
      </p>
      <p>
        Contenido: <a href="#">{actores[0]},</a> <a href="#">{actores[1]},</a>{" "}
        <a href="#"> {actores[2]}</a>
      </p>
    </div>
  </div>
  )
}

export default Temas
