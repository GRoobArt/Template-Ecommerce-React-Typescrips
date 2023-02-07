import { ProductInterface } from '../../../interface/interfaces'
import { IconsAddCart, IconsRemoveCart } from '../../../variables'
import useFormat from '../../../hook/useFormat'
import { AddCart } from '../../../context/cart/useaddcart'

const CardProduct = ({
  id,
  img,
  name,
  price,
  specialprice,
  cart_to,
}: ProductInterface) => {
  const underline = () => {
    if (specialprice) return 'line-through'
  }

  const PorcentDescuento = () => {
    if (!specialprice) return null
    else return ((price - specialprice) / price) * 100
  }

  const addToCart = () => {
    AddCart(id, price, specialprice)
  }

  return (
    <div className='product-card'>
      <div className='header-content'>
        {specialprice && (
          <div className='ribbon porcent'>
            % {Number(PorcentDescuento()).toFixed(1)}
          </div>
        )}
        <img src={img} />
      </div>
      <div className='body-content'>
        <div className='info-product'>
          <div className='price-content'>
            <p className={`price ${underline()}`}>
              ${useFormat(price, /\B(?=(\d{3})+(?!\d))/g, '.')}
            </p>
            {specialprice && (
              <p className='special-price'>
                ${useFormat(specialprice, /\B(?=(\d{3})+(?!\d))/g, '.')}
              </p>
            )}
          </div>
          <h3 className='product-name'>{name}</h3>
        </div>
        <button className='button action-icons' onClick={addToCart}>
          <figure>{!cart_to ? <IconsAddCart /> : <IconsRemoveCart />}</figure>
        </button>
      </div>
    </div>
  )
}

export default CardProduct
