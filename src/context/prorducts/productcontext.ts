import { createContext } from 'react'
import data from '../../json/info.json'

const products = data.products

const ProductContext = createContext({})

export default ProductContext
