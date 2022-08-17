import React from 'react'
import DatosRestaurante from '../views/DatosRestaurante'
import FormularioRestaurante from '../views/FormularioRestaurante'

function Restaurante () {
  return (
    <>
      <main>
        <h2>Tu información</h2>
        <DatosRestaurante />
        <h2>Edita información de tu negocio </h2>
        {/* <FormularioRestaurante /> */}
      </main>
    </>
  )
}
export default Restaurante
