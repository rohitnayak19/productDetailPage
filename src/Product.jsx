import React from 'react'
import { useParams } from 'react-router-dom'
import clothesProducts from './clothesProducts';
const Product = () => {
  const { productId } = useParams();
  const product = clothesProducts.find((product) => product.id === parseInt(productId));

  if (!product) {
    return <p>No product found</p>
  }
  return (
    <>
      <div key={product.id} className="w-60 p-3 border rounded-md cursor-pointer transition duration-200 hover:scale-105">
        <img
          src={product.image}
          alt={product.name}
          className='w-full h-64 object-cover rounded-md' // Fixed height and width for images
        />
        <div className="flex justify-between mt-2">
          <span className='font-semibold'>{product.name}</span>
          <span className='text-sm'>{`$${product.price}`}</span>
        </div>
      </div>
    </>
  )
}

export default Product