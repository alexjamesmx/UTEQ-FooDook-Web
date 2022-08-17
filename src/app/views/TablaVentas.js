import React from 'react'
import Table from 'react-bootstrap/Table'

function TablaVentas (props) {
  const { menuEspecifico } = props

  return (
    <>
      <main>
        <Table striped bordered hover size="md">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {menuEspecifico ? <td>{menuEspecifico?.name}</td> : <></>}
              {/* <td>{menuEspecifico[0]?.name}</td> */}
              <td>10</td>
              <td>$15</td>
              <td>$150</td>
            </tr>
          </tbody>
        </Table>
      </main>
    </>
  )
}
export default TablaVentas
