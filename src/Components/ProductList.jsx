import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({data}) => {
  return (
    <div>
        {
React.Children.toArray(
  data.map(el=><ProductCard item={el} />)

)        }
    </div>
  )
}

export default ProductList