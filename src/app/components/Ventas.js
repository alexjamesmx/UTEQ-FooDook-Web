import React, { useEffect, useState } from 'react'
import FormularioVentas from '../views/FormularioVentas'
import TablaVentas from '../views/TablaVentas'
import useInfo from '../components/useInfo'
import { getMenu, addVenta } from '../../firebase/firebase'
import Table from 'react-bootstrap/Table'

import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
function Ventas () {
  const { menus, ventas, userinfo } = useInfo()
  const [cantidad, setCantidad] = useState('')
  const [select, setSelected] = useState('')
  const [menufinal, setMenufinal] = useState([])

  const handleSubmit = async () => {
    const res = await getMenu(select, userinfo.idrestaurante, cantidad)
    setMenufinal([...menufinal, res])
  }

  const [state, setState] = useState(0)
  const handleSelect = (e) => {
    const index = e.nativeEvent.target.selectedIndex
    setSelected(e.nativeEvent.target[index].text)
  }
  const handleCantidad = (e) => {
    setCantidad(e.target.value)
  }
  const handleClick = () => {
    if (select !== '' && cantidad !== '') {
      setState(0)
      handleSubmit()
    } else {
      setState(1)
    }
  }

  let sub = 0
  let total = 0
  const subArray = []
  if (menufinal) {
    menufinal.forEach((item) => {
      // console.log('itemforeach', item)
      sub = item.price * item.cantidad
      subArray.push(sub)
    })
    subArray.forEach((item) => {
      total = total + item
      console.log(item)
    })
  }
  const handleVenta = async () => {
    console.log('agregando venta')
    const tmp = {
      fecha: new Date(),
      idrestaurant: userinfo.idrestaurante,
      total,
    }
    await addVenta(tmp)
    setMenufinal([])
  }
  return (
    <>
      <main>
        <br />
        <h2>Registrar ventas </h2>
        <br />
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
                {menufinal.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.cantidad}</td>
                      <td>{item.cantidad * item.price}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </main>
        </>
        <h4>
          <strong>Total: ${total} </strong>
        </h4>
        <br />
        <h3>Agregar detalle de compra</h3>
        <>
          <main>
            <Stack direction="horizontal" gap={3}>
              <Form.Select
                aria-label="Default select example"
                size="lg"
                onChange={(event) => {
                  handleSelect(event)
                }}>
                <option>Selecciona producto</option>
                {menus.map((item, i) => {
                  return (
                    <option key={item.name} value={i} onSelect>
                      {item.name}
                    </option>
                  )
                })}
              </Form.Select>
              <Form.Group className="mb-3 ms-auto" size="lg" controlId="formNameRest">
                <Form.Label>Cantidad:</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  placeholder="Cantidad"
                  onChange={handleCantidad}
                />
              </Form.Group>
              <Button variant="warning" size="lg" onClick={handleClick}>
                Agregar
              </Button>{' '}
            </Stack>
            {state === 1 ? <p>Llena todos los campos</p> : <></>}
          </main>
        </>
        <Button variant="success" size="lg" onClick={handleVenta}>
          Guardar compra
        </Button>{' '}
      </main>
    </>
  )
}
export default Ventas
