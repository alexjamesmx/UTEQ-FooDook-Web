import React from 'react'
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

function FormularioVentas () {
  return (
    <>
      <main>
        <Stack direction="horizontal" gap={3}>
          <Form.Select aria-label="Default select example" size="lg">
            <option>Selecciona producto</option>
            <option value="1">Taco de Pastor</option>
            <option value="2">Quesadilla</option>
            <option value="3">Agua de jamaica</option>
          </Form.Select>
          <Form.Group className="mb-3 ms-auto" size="lg" controlId="formNameRest">
            <Form.Label>Cantidad:</Form.Label>
            <Form.Control type="number" min="1" placeholder="Cantidad" />
          </Form.Group>
          <Button variant="warning" size="lg">
            Agregar
          </Button>{' '}
        </Stack>
      </main>
    </>
  )
}
export default FormularioVentas
