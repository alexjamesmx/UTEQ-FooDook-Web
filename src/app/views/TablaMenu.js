import React  from "react";
import Table from 'react-bootstrap/Table';

function TablaMenu(){
    return(
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tacos</td>
            <td>$15</td>
            <td>FOTO.jpg</td>
            <td>Editar/Borrar</td>
          </tr>
        
        </tbody>
        </Table>
    );
    }

export default TablaMenu;
