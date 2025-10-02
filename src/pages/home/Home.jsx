import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/actions/product'
import LoginSetUp from '../../components/loginSetUp/LoginSetUp'
import Loader from '../../components/loader/Loader'
import ProductCard from '../../components/productCard/ProductCard'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { products, loading } = useSelector((state) => state.products)

  const { accessToken } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const toggleAction = () => {
    if (!accessToken) {
      setIsModalOpen(true)
      return
    }

    navigate('/product-form')
  }
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-primary-light to-indigo-600 text-white text-center py-20">
          <h2 className="text-4xl font-extrabold mb-4">Discover Our Products</h2>
          <p className="text-lg mb-6">
            High quality electronics, appliances, and more — all in one place.
          </p>
          <a
            href="#products"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Shop Now
          </a>
        </section>

        <section id="products" className="max-w-7xl mx-auto px-6 py-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Available Products</h3>
          <button
            onClick={toggleAction}
            className="bg-primary -600 text-white px-5 my-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
          >
            {accessToken ? '+ Create Product' : 'Login To Create Product'}
          </button>
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
        </section>
      </div>

      <LoginSetUp isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  )
}

export default Home
