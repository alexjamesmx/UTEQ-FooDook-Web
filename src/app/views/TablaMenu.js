import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import useInfo from '../components/useInfo'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import Modal from 'react-bootstrap/Modal'
import Stack from 'react-bootstrap/Stack'
import FormularioMenu from './FormularioMenu'
import { deleteMenu } from '../../firebase/firebase'
function TablaMenu () {
  const { menus, setRefresh } = useInfo()
  const [show, setShow] = useState(false)
  const [modalAgregar, setModalAgregar] = useState(false)
  const [modalid, setModalid] = useState({})
  const [smShow, setSmShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleCloseModalAgregar = () => setModalAgregar(false)
  const handleShowModalAgregar = () => setModalAgregar(true)

  const handleRemove = async (docId) => {
    await deleteMenu(docId)
    setRefresh((prevState) => !prevState)
  }
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
                  <Button
                    variant="danger"
                    onClick={() => {
                      setModalid(item)
                      setSmShow(true)
                    }}>
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
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            ¿Eliminar <strong>{modalid.name}</strong>?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack direction="horizontal" gap={3}>
            <Button className="ms-auto" variant="secondary" onClick={() => setSmShow(false)}>
              Cancelar
            </Button>
            <Button
              className="ms-auto"
              variant="danger"
              onClick={() => {
                setSmShow(false)
                handleRemove(modalid.docId)
              }}>
              Eliminar
            </Button>
          </Stack>
        </Modal.Body>
      </Modal>
      <Button variant="warning" onClick={handleShowModalAgregar}>
        Agregar producto
      </Button>{' '}
      <br />
    </>
  )
}

export default TablaMenu
