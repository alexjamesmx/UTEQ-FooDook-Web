import React  from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

function FormularioMenu() {
    return (
      <>
        <main>


    <Form>
    <Stack direction="horizontal" gap={3}> 
      <Form.Group className="mb-3" controlId="formNameRest">
        <Form.Label><strong>Nombre del producto:</strong></Form.Label>
        <Form.Control type="name" placeholder="Nombre de tu producto" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUbicacion">
        <Form.Label><strong>Precio:</strong></Form.Label>
        <Form.Control type="number" min="0" placeholder="Precio" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Label><strong>Imagen:</strong></Form.Label>
        <Form.Control type="file" placeholder="Foto de tu producto" />
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
export default FormularioMenu;