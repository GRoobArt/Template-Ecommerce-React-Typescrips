import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import {
  ThemeContext,
  ThemeContextProvider,
} from '../../context/theme/themecontext'
import HeaderPage from '../header'
import NavHeader from '../header/nav'

const LayoutPage = () => {
  const SelectTheme = 'light'
  return (
    <ThemeContextProvider>
      <HeaderPage theme={SelectTheme} />
      <nav className='mobile'>
        <NavHeader />
      </nav>
      <main className={`main-content ${SelectTheme}`}>
        <Outlet />
      </main>
    </ThemeContextProvider>
  )
}

export default LayoutPage
