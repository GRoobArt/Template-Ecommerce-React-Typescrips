import { useParams } from 'react-router-dom'
import CardProduct from '../../../components/category/cardproduct'
import data from '../../../json/info.json'

const AllCategory = () => {
  const params = useParams()

  const pageid = Number(params.id)

  const products = () => {
    if (pageid === 0) return data.products
    else return data.products.filter((i) => i.category === pageid)
  }

  const categories = data.category.find((i) => i.id === pageid)

  const LengthProduct = products().length

  const ListProduct = products().map(
    ({ id, img, name, price, special_price, cart_to }) => (
      <CardProduct
        key={id}
        id={id}
        img={img}
        name={name}
        price={price}
        specialprice={special_price}
        cart_to={cart_to}
      />
    )
  )

  return (
    <section>
      <div className='header-category'>
        <h1 className='page-title'>{categories?.name}</h1>
        <div>
          <p>{`1 de ${LengthProduct} Products`}</p>
        </div>
      </div>

      <div className='categorygrid'>{ListProduct}</div>
    </section>
  )
}

export default AllCategory
