import React, { useEffect, useState, useContext } from 'react'
import Header from './app/components/Header'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth, getMenus, getVentas } from './firebase/firebase'
import AuthProvider from './app/components/authProvider'
import './App.css'
import RegisterForm from './app/routes/registerForm'
import useInfo from './app/components/useInfo'

function App () {
  const { menus, setMenus } = useInfo([])

  const [state, setState] = useState(0)
  const [user, setUser] = useState(undefined)
  const [ventas, setVentas] = useState([])

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
    ;(async () => {
      const ventasres = await getVentas(user.idrestaurante)
      const menusres = await getMenus(user.idrestaurante)
      setVentas(ventasres)
      setMenus(menusres)
    })()
  }, [user])

  function handleUserLoggedIn (user) {
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
        <Header ventas={ventas} />
      </div>
    )
  }

  if (state === 4) {
    return (
      <div className="App">
        <div>
          <h1>Link tree</h1>
        </div>
        <button onClick={handleOnClick}>Login with Google</button>
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
