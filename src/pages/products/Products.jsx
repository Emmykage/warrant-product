import React, { useEffect } from 'react'
import { getProducts } from '../../redux/actions/product'
import { useDispatch, useSelector } from 'react-redux'
import { nairaFormat } from '../../utils/nairaFormat'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/loader/Loader'
import ProductCard from '../../components/productCard/ProductCard'

const Products = () => {
  const { products, loading } = useSelector((state) => state.products)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])
  return (
    <div className="max-w-7xl m-auto my-10 min-h-screen  shadow px-4">
      <h2 className="text-2xl font-extrabold mb-4">All Products</h2>

      <div>
        {loading ? (
          <div className="flex justify-center py-10">
            <Loader size="large" />
          </div>
        ) : products.length === 0 ? (
          <h3 className="text-center text-3xl font-bold">No Item has been added</h3>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Products
