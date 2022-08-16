import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button'
import {
  logout,
  getProfilePhotoUrl,
  setUserProfilePhoto,
  updateUser,
} from '../../firebase/firebase'
import style from './cuenta.module.css'
import AuthProvider from './authProvider'

function Cuenta () {
  const [state, setState] = useState(0)
  const [currentUser, setCurrentUser] = useState([])
  const [profleUrl, setProfleUrl] = useState(null)
  const fileRef = useRef(null)

  async function handleUserLoggedIn (user) {
    setCurrentUser(user)
    const url = await getProfilePhotoUrl(user.profilePicture)
    setProfleUrl(url)
    setState(2)
  }

  function handleUserNotRegistered (user) {}
  function handleUserNotLoggedIn () {}

  async function handleUsersignOut (user) {
    await logout()
    window.location.reload()
  }

  function handleOpenFilePicker () {
    if (fileRef.current) {
      fileRef.current.click()
    }
  }
  function handleChangeFile (e) {
    const files = e.target.files
    const fileReader = new FileReader()
    if (fileReader && files && files.length > 0) {
      fileReader.readAsArrayBuffer(files[0])
      fileReader.onload = async function () {
        const imageData = fileReader.result
        const res = await setUserProfilePhoto(currentUser.uid, imageData)
        if (res) {
          const tmpUser = { ...currentUser }
          tmpUser.profilePicture = res.metadata.fullPath
          await updateUser(tmpUser)
          setCurrentUser({ ...tmpUser })

          const url = await getProfilePhotoUrl(currentUser.profilePicture)
          setProfleUrl(url)
        }
      }
    }
  }
  if (state !== 2) {
    return (
      <AuthProvider
        onUserLoggedIn={handleUserLoggedIn}
        onUserNotLoggedIn={handleUserNotLoggedIn}
        onUserNotRegistered={handleUserNotRegistered}></AuthProvider>
    )
  }
  return (
    <>
      <main>
        <div>
          <h2>{currentUser?.displayName}</h2>
          <div className={style.profilePictureContainer}>
            <div>
              <img src={profleUrl} alt="" width={100} />
            </div>
            <div>
              <button className="btn" onClick={handleOpenFilePicker}>
                Choose new profle picture
              </button>
              <input hidden ref={fileRef} type="file" onChange={handleChangeFile}></input>
            </div>
          </div>
        </div>
        <br />
        <h2> ¿Estás seguro que quieres salir?</h2>
        <Button variant="warning" size="lg" onClick={handleUsersignOut}>
          Cerrar sesión
        </Button>{' '}
        <p>Hasta pronto.</p>
      </main>
    </>
  )
}
export default Cuenta
