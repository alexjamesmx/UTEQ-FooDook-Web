import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Routes, Route } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Home from './Home'
import Ventas from './Ventas'
import Cuenta from './Cuenta'
import Grafica from './Grafica'
import Menu from './Menu'
import Restaurante from './Restaurante'
import RegisterForm from '../routes/registerForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChartLine,
  faCartPlus,
  faUtensils,
  faStore,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

function Header () {
  return (
    <>
      <Navbar expand="lg" bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="home">
            <strong>
              <h1>FooDook</h1>
            </strong>
          </Navbar.Brand>
          <Nav className="me-auto">
            &nbsp;&nbsp;&nbsp;
            <Nav.Link href="ventas">
              <FontAwesomeIcon icon={faCartPlus} size="2x" /> <br />
              Venta
            </Nav.Link>
            &nbsp;&nbsp;&nbsp;
            <Nav.Link href="menu">
              <FontAwesomeIcon icon={faUtensils} size="2x" /> <br />
              Menú
            </Nav.Link>
            &nbsp;&nbsp;&nbsp;
            <Nav.Link href="restaurante">
              <FontAwesomeIcon icon={faStore} size="2x" /> <br />
              Editar Restaurante
            </Nav.Link>
            &nbsp;&nbsp;&nbsp;
            <Nav.Link href="grafica">
              <FontAwesomeIcon icon={faChartLine} size="2x" /> <br />
              Gráfica de ventas
            </Nav.Link>
            &nbsp;&nbsp;&nbsp;
            <Nav.Link href="cuenta">
              <FontAwesomeIcon icon={faUser} size="2x" /> <br />
              Cuenta{' '}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="registro" element={<RegisterForm />} />
        <Route path="ventas" element={<Ventas />} />
        <Route path="restaurante" element={<Restaurante />} />
        <Route path="grafica" element={<Grafica />} />
        <Route path="menu" element={<Menu />} />
        <Route path="cuenta" element={<Cuenta />} />
      </Routes>
    </>
  )
}
export default Header
