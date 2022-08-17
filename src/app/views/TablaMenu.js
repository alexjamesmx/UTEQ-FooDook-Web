import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import useInfo from '../components/useInfo'
function TablaMenu () {
  const { menus, setMenus } = useInfo()
  const [row, setRow] = useState([])
  const keys = []
  let rows = []
  const finalrow = []

  for (const property in menus[0]) {
    keys.push(property)
  }
  keys.reverse()

  console.log('rows', rows)
  console.log('Arreglo final', row)

  const handlerow = (rows) => {
    console.log('funcion', rows)
    finalrow.push(rows)
  }

  console.log('FINAL ARREGLO: ', finalrow)
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {keys.map((item, i) => {
            return <th key={i}>{item}</th>
          })}
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {menus.map((item, i) => {
          rows = []
          for (const property in item) {
            rows.push(<th key={i}>{item[property]}</th>)
          }
          // setRow(rows)
          // console.log(rows)
          handlerow(rows)
          return <tr key={i}>{finalrow[i]}</tr>
        })}

        {/* <td>Tacos</td>
          <td>$15</td>
          <td>FOTO.jpg</td>
          <td>Editar/Borrar</td>
          <td>Editar/Borrar</td>
        </tr>  */}
      </tbody>
    </Table>
  )
}

export default TablaMenu

function comida () {
  return <>OLA</>
}
