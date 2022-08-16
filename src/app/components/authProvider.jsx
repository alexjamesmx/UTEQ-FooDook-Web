import React, { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, getUserInfo, registerNewUser, userExists } from '../../firebase/firebase'
import { useNavigate } from 'react-router-dom'

export default function AuthProvider ({
  children,
  onUserLoggedIn,
  onUserNotLoggedIn,
  onUserNotRegistered,
}) {
  const navigate = useNavigate()
  // State
  // 0 inicializando
  // 1 loading
  // 2 login completo
  // 3 login sin registro
  // 4 no hay nadie logueado
  // 5 existeusername
  // 6 nuevo username, click para continuar
  // 7 username no existe
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const isRegistered = await userExists(user.uid)
        if (isRegistered) {
          const userInfo = await getUserInfo(user.uid)
          if (userInfo.processCompleted) {
            onUserLoggedIn(userInfo)
          } else {
            onUserNotRegistered(userInfo)
          }

          // TODO: redirect dashboard
        } else {
          // TODO: redirect choosename
          await registerNewUser({
            uid: user.uid,
            displayName: user.displayName,
            profilePicture: '',
            username: '',
            processCompleted: false,
          })
          onUserNotRegistered(user)
        }
      } else {
        onUserNotLoggedIn()
      }
    })
  }, [navigate, onUserLoggedIn, onUserNotRegistered, onUserNotLoggedIn])

  return <div>{children}</div>
}
