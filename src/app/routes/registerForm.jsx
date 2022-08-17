import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import AuthProvider from '../components/authProvider'
import { existsUsername, updateUser, logout } from '../../firebase/firebase'
import style from './registerForm.module.css'
export default function RegisterForm () {
  const navigate = useNavigate()
  const [state, setState] = useState(0)
  const [currentUser, setCurrentUser] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [id, setId] = useState('')

  async function handleUsersignOut (user) {
    await logout()
    window.location.reload()
  }
  function handleUserLoggedIn (user) {}
  function handleUserNotRegistered (user) {
    setCurrentUser(user)
    setState(3)
  }
  function handleUserNotLoggedIn () {
    navigate('/login')
  }

  function handleInputUserName (e) {
    setUsername(e.target.value)
  }
  function handleInputUserPassword (e) {
    setPassword(e.target.value)
  }
  function handleInputUserId (e) {
    setId(e.target.value)
  }

  async function handleContinue () {
    if (username !== '' && password !== '' && id !== '') {
      const exists = await existsUsername(username)
      if (exists) {
        setState(5)
      } else {
        if (password === '123456') {
          const tmp = { ...currentUser }
          tmp.username = username
          tmp.processCompleted = true
          tmp.idrestaurante = id
          await updateUser(tmp)
          setState(6)
        } else {
          setState(7)
        }
      }
    }
  }

  if (state === 3 || state === 5 || state === 7) {
    return (
      <div className={style.chooseUsernameContainer}>
        <h1>Bienvenido {currentUser.displayName}</h1>
        <p>Para terminar el proceso elige un nombre de usuario</p>

        {state === 5 ? <p>El nombre de usuario ya existe, escoge otro</p> : ''}
        {state === 7 ? <p>Contraseña incorrecta</p> : ''}
        <div>
          <input
            placeholder="Nombre de usuario"
            className="input"
            type="text"
            onInput={handleInputUserName}
          />
        </div>
        <div>
          <input
            placeholder="id de restaurante"
            className="input"
            type="text"
            onInput={handleInputUserId}
          />
        </div>
        <div>
          <input
            placeholder="Contraseña"
            className="input"
            type="text"
            onInput={handleInputUserPassword}
          />
        </div>
        <div>
          <button className="btn" onClick={handleContinue}>
            Continue
          </button>
          <button className="btn" onClick={handleUsersignOut}>
            Cerrar sesión
          </button>
        </div>
      </div>
    )
  }

  if (state === 6) {
    return (
      <div className={style.chooseUsernameContainer}>
        <h1>Felicidades, has creado tu cuenta</h1>
        {/* <Link to="/home">Continuar</Link> */}
      </div>
    )
  }

  return (
    <AuthProvider
      onUserLoggedIn={handleUserLoggedIn}
      onUserNotRegistered={handleUserNotRegistered}
      onUserNotLoggedIn={handleUserNotLoggedIn}></AuthProvider>
  )
}
