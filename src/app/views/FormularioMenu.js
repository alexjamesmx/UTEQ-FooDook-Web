import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'
import { updateMenus, addMenus } from '../../firebase/firebase'
import useInfo from '../components/useInfo'
function FormularioMenu (props) {
  const { userinfo } = useInfo()
  const { item, handleClose } = props
  const [name, setName] = useState(item?.name ?? '')
  const [price, setPrice] = useState(item?.price ?? '')
  const [description, setDescription] = useState(item?.description ?? '')
  const [logo, setLogo] = useState(item?.logo ?? '')

  const [state, setState] = useState(0)
  const handlename = (e) => {
    setName(e.target.value)
  }
  const handleprice = (e) => {
    setPrice(e.target.value)
  }
  const handledescription = (e) => {
    setDescription(e.target.value)
  }
  const handlelogo = (e) => {
    setLogo(e.target.value)
  }
  const handleSubmit = async (e) => {
    if (item) {
      e.preventDefault()
      setPrice(price.toString())
      const tmp = {
        name,
        price,
        description,
        logo,
        id: item.id,
        docId: item.docId,
      }
      console.log('actualizamos producto')
      await updateMenus(tmp, item.id)
    } else {
      e.preventDefault()
      if (name !== '' && price !== '' && description !== '' && logo !== '') {
        console.log('Agregamos nuevo')
        setState(0)
        const tmp = {
          name,
          price,
          description,
          logo,
          id: userinfo.idrestaurante,
        }
        await addMenus(tmp)
      } else {
        setState(1)
      }
    }
  }
  return (
    <>
      <main>
        <Form onSubmit={handleSubmit}>
          <Stack>
            <Form.Group className="mb-3" controlId="formNameRest">
              <Form.Label>
                <strong>Nombre del producto:</strong>
              </Form.Label>
              <Form.Control
                type="name"
                placeholder={item?.name ?? 'name'}
                value={name}
                onChange={handlename}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUbicacion">
              <Form.Label>
                <strong>Precio:</strong>
              </Form.Label>
              <Form.Control
                type="number"
                min="0"
                placeholder={item?.price ?? 'price'}
                value={price}
                onChange={handleprice}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>
                <strong>Descripcion:</strong>
              </Form.Label>
              <Form.Control
                type="name"
                placeholder={item?.description ?? 'description'}
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
          </Stack>

          {state === 1 ? <p>Llena todos los campos</p> : <></>}
          <Button variant="primary" type="submit">
            Guardar
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Form>
      </main>
    </>
  )
}
export default FormularioMenu
