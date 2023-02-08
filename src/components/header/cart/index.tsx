import { IconsCart } from '../../../variables'

const ShoppingCart = () => {
  const cartProduct = 0

  return (
    <div className='shoping'>
      <button className='action-icons'>
        <IconsCart />
      </button>
      <div className='qty'>
        <span>{cartProduct}</span>
      </div>
    </div>
  )
}

export default ShoppingCart
