import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import {
  ThemeContext,
  ThemeContextProvider,
} from '../../context/theme/themecontext'
import HeaderPage from '../header'

const LayoutPage = () => {
  const SelectTheme = 'light'
  return (
    <ThemeContextProvider>
      <HeaderPage theme={SelectTheme} />
      <main className={`main-content ${SelectTheme}`}>
        <Outlet />
      </main>
    </ThemeContextProvider>
  )
}

export default LayoutPage
