import React from 'react'
import { Link } from 'react-router-dom'

function Temas({titulo, imagen, descripcion, duracion, clasificacion, actores}) {
  
  return (
    <div className="movie-item-style-2">
    <img src={imagen} alt="" />
    <div className="mv-item-infor">
      <h6>
        <Link to={`/aprende-conmigo/${titulo}`}>{titulo}</Link>
      </h6>
      <p className="rate">
        <i className="ion-android-star"></i>
        <span>{clasificacion}</span> /10
      </p>
      <p className="describe">
        {descripcion}
      </p>
      <p>
        Contenido: <a >{actores[0]},</a> <a>{actores[1]},</a>{" "}
        <a> {actores[2]}</a>
      </p>
    </div>
  </div>
  )
}

export default Temas
