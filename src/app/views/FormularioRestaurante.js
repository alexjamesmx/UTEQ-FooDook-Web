import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'
import useInfo from '../components/useInfo'
import { updateRestaurante } from '../../firebase/firebase'
function FormularioRestaurante (props) {
  const { setRefresh } = useInfo()
  const { item, handleClose } = props

  const [state, setState] = useState(0)
  const [name, setName] = useState(item?.name ?? '')
  const [adress, setAdress] = useState(item?.adress ?? '')
  const [phone, setPhone] = useState(item?.phone ?? '')
  const [description, setDescription] = useState(item?.description ?? '')
  const [logo, setLogo] = useState(item?.logo ?? '')
  const [lat, setLat] = useState(item?.lat ?? '')
  const [long, setLong] = useState(item?.long ?? '')

  const handlename = (e) => {
    setName(e.target.value)
  }
  const handleadress = (e) => {
    setAdress(e.target.value)
  }
  const handlephone = (e) => {
    setPhone(e.target.value)
  }
  const handledescription = (e) => {
    setDescription(e.target.value)
  }
  const handlelogo = (e) => {
    setLogo(e.target.value)
  }
  const handlelat = (e) => {
    setLat(e.target.value)
  }
  const handlelong = (e) => {
    setLong(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (name !== '' && adress !== '' && phone !== '' && lat !== '' && long !== '') {
      setState(0)
      setPhone(phone.toString())

      const tmp = {
        name,
        adress,
        phone,
        description,
        id: item.id,
        docId: item.docId,
        logo,
        lat,
        long,
      }
      await updateRestaurante(tmp, item.docId)
      setRefresh((prevstate) => !prevstate)
      handleClose()
    } else {
      setState(1)
    }
  }
  return (
    <>
      <main>
        <Form onSubmit={handleSubmit}>
          <Stack direction="vertical" gap={3}>
            <Form.Group className="mb-3" controlId="formNameRest">
              <Form.Label>
                <strong>Nombre:</strong>
              </Form.Label>
              <Form.Control
                type="name"
                placeholder={item?.name ?? 'Nombre'}
                value={name}
                onChange={handlename}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>
                <strong>Telefono:</strong>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder={item?.phone ?? 'Telefono'}
                value={phone}
                onChange={handlephone}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>
                <strong>Descripcion:</strong>
              </Form.Label>
              <Form.Control
                type="name"
                placeholder={item?.description ?? 'Descripción'}
                value={description}
                onChange={handledescription}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>
                <strong>Imagen:</strong>
              </Form.Label>
              <Form.Control
                type="name"
                placeholder={item?.logo ?? 'logo'}
                value={logo}
                onChange={handlelogo}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUbicacion">
              <Form.Label>
                <strong>Ubicación:</strong>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder={item?.adress ?? 'Ubicación'}
                value={adress}
                onChange={handleadress}
              />
            </Form.Group>

            <h4>
              <strong>Coordenadas</strong>
            </h4>

            <Form.Group className="mb-3" controlId="formBasicUbicacion">
              <Form.Label>
                <strong>Latitud:</strong>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder={item?.lat ?? 'Latitud'}
                value={lat}
                onChange={handlelat}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUbicacion">
              <Form.Label>
                <strong>Longitud:</strong>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder={item?.long ?? 'Longitud'}
                value={long}
                onChange={handlelong}
              />
            </Form.Group>
          </Stack>
          {state === 1 ? <p>Llena todos los campos</p> : <></>}
          <Stack direction="horizontal" gap={3}>
            <Button variant="secondary" onClick={handleClose} className="ms-auto">
              Close
            </Button>
            <Button variant="warning" type="submit">
              Guardar
            </Button>
          </Stack>
        </Form>
      </main>
    </>
  )
}
export default FormularioRestaurante
