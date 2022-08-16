import React  from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

function FormularioRestaurante() {
    return (
      <>
        <main>


    <Form>
    <Stack direction="horizontal" gap={3}> 
      <Form.Group className="mb-3" controlId="formNameRest">
        <Form.Label>Nombre:</Form.Label>
        <Form.Control type="name" placeholder="Nombre de tu negocio" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUbicacion">
        <Form.Label>Ubicación</Form.Label>
        <Form.Control type="text" placeholder="Ingresa la ubicación" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Label>Teléfono</Form.Label>
        <Form.Control type="text" placeholder="Ingresa el teléfono" />
      </Form.Group>
      </Stack>
      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>

</main>

</>
);
}
export default FormularioRestaurante;
