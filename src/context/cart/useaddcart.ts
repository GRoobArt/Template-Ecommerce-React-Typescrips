import data from '../../json/info.json'

export const AddCart = (
  id: number | string,
  price: number,
  specialprice: number | null | undefined
) => {
  const product = data.products.find((i) => i.id === id)

  console.log(product)
}
