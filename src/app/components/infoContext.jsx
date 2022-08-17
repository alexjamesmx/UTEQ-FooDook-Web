import { createContext, useState, useMemo } from 'react'

export const InfoContext = createContext({
  menus: [],
  setMenus: () => {},
  userinfo: undefined,
  setUserinfo: () => {},
})
export function InfoProvider (props) {
  const { children } = props
  const [menus, setFinalMenu] = useState([])
  const [userinfo, setFinalUser] = useState([])

  const setMenus = (data) => {
    setFinalMenu(data)
  }
  const setUserinfo = (data) => {
    setFinalUser(data)
  }
  const valueContext = {
    menus,
    setMenus,
    userinfo,
    setUserinfo,
  }
  return <InfoContext.Provider value={valueContext}>{children}</InfoContext.Provider>
}
