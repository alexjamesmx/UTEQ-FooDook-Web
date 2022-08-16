import React, { useState } from 'react'
import Header from './app/components/Header'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './firebase/firebase'
import AuthProvider from './app/components/authProvider'
import './App.css'
import RegisterForm from './app/routes/registerForm'
function App () {
  const [state, setState] = useState(0)
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
  function handleUserLoggedIn (user) {
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
