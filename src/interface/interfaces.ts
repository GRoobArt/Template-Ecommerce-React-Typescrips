export interface UserInterface {
  dateCreate?: Date
  id?: number
  firstname: string
  lastname: string
  age?: number
  sex?: string
  phone?: number
  email: string
  password: string | number
}

export interface CartInterface {
  id: number | string
  customer: number
  current: string
  subtotal: number
  descuento: number
  envio: number
  products: Array<Object>
}

export interface ProductInterface {
  id: number | string
  img: string
  name: string
  color?: string
  size?: string
  gender?: string
  price: number
  specialprice?: number | null
  category?: number
  stock?: number
  cart_to: boolean
}
