import React, { useEffect } from 'react'
import FormularioVentas from '../views/FormularioVentas'
import TablaVentas from '../views/TablaVentas'
import { getVentas } from '../../firebase/firebase'
function Ventas () {
  useEffect(() => {
    ;(async () => {
      await getVentas()
    })()
  })

  return (
    <>
      <main>
        <br />
        <h2>Registrar ventas </h2>
        <br />
        <TablaVentas />
        <h4>
          <strong>Total:</strong>
        </h4>
        <h4>$150</h4>

        <br />
        <h3>Agregar producto:</h3>
        <FormularioVentas />
      </main>
    </>
  )
}
export default Ventas
