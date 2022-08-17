import React from 'react'
import Button from 'react-bootstrap/Button'
import FormularioMenu from '../views/FormularioMenu'
import TablaMenu from '../views/TablaMenu'
function Menu () {
  return (
    <>
      <main>
        <br />
        <h2>Editar menú </h2> <br />
        <TablaMenu />
        <Button variant="warning">Agregar producto</Button> <br />
        <FormularioMenu />
      </main>
    </>
  )
}
export default Menu
