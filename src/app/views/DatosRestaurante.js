import React from 'react'
import Stack from 'react-bootstrap/Stack'

function DatosRestaurante () {
  return (
    <>
      <main>
        <Stack gap={3}>
          <h5>Nombre:</h5>
          <div className="bg-light border">Nombre</div>
          <h5>Ubicación:</h5>
          <div className="bg-light border">Ubicación</div>
          <h5>Teléfono:</h5>
          <div className="bg-light border">Teléfono</div>
        </Stack>
      </main>
    </>
  )
}
export default DatosRestaurante
