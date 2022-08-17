import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import useInfo from '../components/useInfo'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import Modal from 'react-bootstrap/Modal'
import FormularioMenu from './FormularioMenu'
function TablaMenu () {
  const { menus, setMenus, userinfo } = useInfo()
  const [show, setShow] = useState(false)
  const [modalAgregar, setModalAgregar] = useState(false)
  const [modalid, setModalid] = useState({})

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleCloseModalAgregar = () => setModalAgregar(false)
  const handleShowModalAgregar = () => setModalAgregar(true)
  console.log(menus)
  console.log(userinfo)
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Acciones</th>
            <th>Descripcion</th>
          </tr>
        </thead>
        <tbody>
          {menus.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>{item.logo}</td>
                <td
                  style={{
                    justifyContent: 'space-between',
                    backgroundColor: 'grey',
                  }}>
                  {' '}
                  <Button
                    variant="info"
                    onClick={() => {
                      handleShow()
                      setModalid(item)
                    }}>
                    <FontAwesomeIcon icon={solid('edit')} />
                  </Button>
                  <Button variant="danger">
                    <FontAwesomeIcon icon={solid('trash')} />
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar {modalid.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormularioMenu item={modalid} handleClose={handleClose} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <Modal show={modalAgregar} onHide={handleCloseModalAgregar}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormularioMenu item={null} handleClose={handleCloseModalAgregar} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <Button variant="warning" onClick={handleShowModalAgregar}>
        Agregar producto
      </Button>{' '}
      <br />
    </>
  )
}

export default TablaMenu
