import { Link } from 'react-router-dom'
import SignInButton from './signin/index'
import ShoppingCart from './cart/index'
import NavHeader from './nav/index'
import { IconsBurger } from '../../variables'
import ButtonTheme from '../layout/buttontheme'

const HeaderPage = ({ theme }: any) => {
  return (
    <header className={theme}>
      <nav>
        <button className='action-icons burger'>
          <IconsBurger />
        </button>
        <div className='logo'>
          <Link to='/'>
            <img src='/logo_yard_sale.svg' alt='Bota_Fora' />
          </Link>
        </div>

        <NavHeader />
        <ButtonTheme />
        <SignInButton />
        <ShoppingCart />
      </nav>
    </header>
  )
}

export default HeaderPage
