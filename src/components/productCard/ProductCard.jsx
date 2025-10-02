import React from 'react'
import { nairaFormat } from '../../utils/nairaFormat'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()

  return (
    <div
      key={product.id}
      className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
    >
      <img src={product.image_url} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h4 className="text-xl font-semibold text-gray-800">{product.name}</h4>
        <p className="text-gray-500 text-sm mb-2">{product.brand}</p>
        <p className="text-gray-600 mb-1">Type: {product.type}</p>
        <p className="text-gray-600 mb-1">Warranty: {product.warranty} Months</p>
        <p className="text-blue-600 font-bold text-lg mb-4">
          {nairaFormat(Number(product?.price || 0))}
        </p>
        <button
          onClick={() => navigate(`/product-details/${product.id}`)}
          className="w-full bg-[#2F855A] text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          View Details
        </button>
      </div>
    </div>
  )
}

export default ProductCard
