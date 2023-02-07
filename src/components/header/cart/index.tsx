import { IconsCart } from '../../../variables'
import usecart from '../../../context/cart/usecart'
import { CartInterface } from '../../../interface/interfaces'

const ShoppingCart = () => {
  const cart = usecart()
  const cartProduct = cart.products
  console.log(cart)

  const OpenCart = () => {}
  return (
    <div className='shoping'>
      <button className='action-icons' onClick={OpenCart}>
        <IconsCart />
      </button>
      <div className='qty'>
        <span>{cartProduct.length}</span>
      </div>
    </div>
  )
}

export default ShoppingCart
