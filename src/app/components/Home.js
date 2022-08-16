import React from 'react'
import Badge from 'react-bootstrap/Badge'
import style from './home.module.css'
function Home () {
  return (
    <>
      <main className={style.home}>
        <h2>Bienvenido a </h2>
        <h1>
          <Badge bg="danger">FooDook</Badge>
        </h1>
        <p>Una aplicación web para la gestión de tu negocio.</p>
      </main>
    </>
  )
}
export default Home
