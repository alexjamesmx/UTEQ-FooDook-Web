import React, { useState } from 'react'
import Stack from 'react-bootstrap/Stack'
import useInfo from '../components/useInfo'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import FormularioRestaurante from '../views/FormularioRestaurante'

function DatosRestaurante () {
  const { restaurante } = useInfo()
  const [show, setShow] = useState(false)
  const [modalid, setModalid] = useState({})
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <main>
        <Stack gap={3}>
          {restaurante.map((item, i) => {
            return (
              <div key={i}>
                <h5>Nombre: {item.name}</h5>
                <h5>Dirección: {item.adress}</h5>
                <h5>Teléfono: {item.phone}</h5>
                <h5>
                  Ubicacion:<br></br>
                  lat:{item?.lat}, long:{item?.long}
                </h5>
                <Button
                  variant="warning"
                  onClick={() => {
                    setModalid(item)
                    handleShow()
                  }}>
                  Editar restaurante
                </Button>
              </div>
            )
          })}

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Editar {modalid.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormularioRestaurante item={modalid} handleClose={handleClose} />
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </Stack>
      </main>
    </>
  )
}
export default DatosRestaurante
