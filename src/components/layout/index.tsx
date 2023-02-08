import { Outlet } from 'react-router-dom'
import HeaderPage from '../header'
import NavHeader from '../header/nav'

const LayoutPage = () => {
  const SelectTheme = 'light'
  return (
    <>
      <HeaderPage />
      <nav className='mobile'>
        <NavHeader />
      </nav>
      <main className={`main-content ${SelectTheme}`}>
        <Outlet />
      </main>
    </>
  )
}

export default LayoutPage
