import React from 'react'
import clothesProducts from './clothesProducts'
import { Link } from 'react-router-dom'
const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-gray-800 my-6">
        Click Product to navigate to the Product Detail page
      </h1>

      <div className=''>
        {clothesProducts.length > 0 ? (
          <div className='flex gap-4 flex-wrap'>
            {clothesProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="w-60 p-3 border rounded-md cursor-pointer transition duration-200 hover:scale-105">
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-full h-64 object-cover rounded-md' // Fixed height and width for images
                />
                <div className="flex justify-between mt-2">
                  <span className='font-semibold'>{product.name}</span>
                  <span className='text-sm'>{`$${product.price}`}</span>
                </div>
              </Link>
            ))}
          </div>

        ) : (
          <p>No product found</p>
        )}
      </div >
    </>
  )
}

export default App