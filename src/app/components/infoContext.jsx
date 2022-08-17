import { createContext, useState, useMemo } from 'react'

export const InfoContext = createContext({
  menus: [],
  setMenus: () => {},
})
export function InfoProvider (props) {
  const { children } = props
  const [menus, setFinalMenu] = useState([])

  const setMenus = (data) => {
    setFinalMenu(data)
  }
  const valueContext = {
    menus,
    setMenus,
  }
  return <InfoContext.Provider value={valueContext}>{children}</InfoContext.Provider>
}
