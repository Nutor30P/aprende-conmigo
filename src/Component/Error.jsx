import React from 'react'
import EncabezadoPrincipal from './EncabezadoPrincipal'
import Encabezado from './Encabezado'

function Error() {
  return (
    <>
    <EncabezadoPrincipal/>
    <Encabezado/>
    <h1>Oops!</h1>
    <h1>Lo sentimos</h1>
    <h1>Error 404</h1>
    <h2>La página que buscas esta en construccion, intentalo despues</h2>
    <img src="images/uploads/error.png" alt="" />
    </>
  )
}

export default Error
