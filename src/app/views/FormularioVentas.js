import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import useInfo from '../components/useInfo'
function FormularioVentas (props) {
  const { setSelected, select, cantidad, setCantidad, handleSubmit } = props
  const { menus } = useInfo()
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

  return (
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
            <Form.Control type="number" min="1" placeholder="Cantidad" onChange={handleCantidad} />
          </Form.Group>
          <Button variant="warning" size="lg" onClick={handleClick}>
            Agregar
          </Button>{' '}
        </Stack>
        {state === 1 ? <p>Llena todos los campos</p> : <></>}
      </main>
    </>
  )
}
export default FormularioVentas
