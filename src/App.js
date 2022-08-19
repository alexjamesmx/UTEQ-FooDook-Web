import React, { useEffect, useState, useContext } from 'react'
import Header from './app/components/Header'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth, getMenus, getRestaurante, getVentas } from './firebase/firebase'
import AuthProvider from './app/components/authProvider'
import './App.css'
import RegisterForm from './app/routes/registerForm'
import useInfo from './app/components/useInfo'
import { Button, Badge } from 'react-bootstrap'

function App () {
  const { ventas, setVentas, setMenus, setUserinfo, refresh, setRestaurante } = useInfo([])

  const [state, setState] = useState(0)
  const [user, setUser] = useState(undefined)

  async function handleOnClick () {
    const googleProvider = new GoogleAuthProvider()
    await signInWithGoogle(googleProvider)

    async function signInWithGoogle (googleProvider) {
      try {
        await signInWithPopup(auth, googleProvider)
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    if (user) {
      ;(async () => {
        const ventasres = await getVentas(user.idrestaurante)
        const menusres = await getMenus(user.idrestaurante)
        setVentas(ventasres)
        setMenus(menusres)
        const restauranteres = await getRestaurante(user.idrestaurante)
        setRestaurante(restauranteres)
      })()
    }
  }, [user, refresh])

  function handleUserLoggedIn (user) {
    setUserinfo(user)
    setUser(user)
    setState(5)
  }
  function handleUserNotRegistered (user) {
    setState(3)
  }
  function handleUserNotLoggedIn () {
    setState(4)
  }

  if (state === 5) {
    return (
      <div className="App">
        <Header />
      </div>
    )
  }

  if (state === 4) {
    return (
      <div className="App">
        <div>
          <h3>Bienvenido a </h3>
          <Badge bg="danger" size="lg">
            <h1> FooDook </h1>
          </Badge>
        </div>
        <h5>Para continuar, favor de:</h5>
        <Button onClick={handleOnClick}>Ingresar con Google</Button>
      </div>
    )
  }

  if (state === 3) {
    return (
      <div className="App">
        <RegisterForm />
      </div>
    )
  }

  return (
    <AuthProvider
      onUserLoggedIn={handleUserLoggedIn}
      onUserNotRegistered={handleUserNotRegistered}
      onUserNotLoggedIn={handleUserNotLoggedIn}>
      <div className="App">Cargando...</div>
    </AuthProvider>
  )
}

export default App
