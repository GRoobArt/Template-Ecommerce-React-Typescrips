import { createContext } from 'react'
import data from '../../json/info.json'

const CartContext = createContext(data.cart)

export default CartContext
