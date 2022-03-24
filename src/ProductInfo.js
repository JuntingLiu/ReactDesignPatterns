import useResource from './useResource'
const ProductInfo = ({productId}) => {
  const product = useResource(`/products/${productId}`)

  const { name, price, description, rating } = product || {}

  return product ? (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h4>Description: </h4>
      <p>{description}</p>
      <p>Average Rating: {rating}</p>
    </>
  ) : <p>Loading.....</p>
}

export default ProductInfo