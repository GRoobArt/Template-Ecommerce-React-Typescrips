import LayoutPage from './components/layout'
import CartContext from './context/cart/cartcontext'
import data from './json/info.json'

function App() {
  const cart = data.cart

  return (
    <CartContext.Provider value={cart}>
      <LayoutPage />
    </CartContext.Provider>
  )
}

export default App
