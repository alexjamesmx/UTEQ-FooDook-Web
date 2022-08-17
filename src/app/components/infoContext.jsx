import { createContext, useState, useMemo } from 'react'

export const InfoContext = createContext({
  menus: [],
  setMenus: () => {},
  userinfo: undefined,
  setUserinfo: () => {},
  restaurante: [],
  setRestaurante: () => {},
  refresh: false,
  setRefresh: () => {},
})
export function InfoProvider (props) {
  const { children } = props
  const [menus, setFinalMenu] = useState([])
  const [userinfo, setFinalUser] = useState([])
  const [restaurante, setFinalRestaurante] = useState([])
  const [refresh, setFinalRefresh] = useState(false)

  const setMenus = (data) => {
    setFinalMenu(data)
  }
  const setUserinfo = (data) => {
    setFinalUser(data)
  }
  const setRefresh = (data) => {
    setFinalRefresh(data)
  }
  const setRestaurante = (data) => {
    setFinalRestaurante(data)
  }
  const valueContext = {
    menus,
    setMenus,
    userinfo,
    setUserinfo,
    refresh,
    setRefresh,
    restaurante,
    setRestaurante,
  }
  return <InfoContext.Provider value={valueContext}>{children}</InfoContext.Provider>
}
