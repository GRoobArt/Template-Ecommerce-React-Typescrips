import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext('light')

const ThemeContextProvider = ({ children }: any) => {
  const [theme, setTheme] = useState('light')

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeContextProvider }
