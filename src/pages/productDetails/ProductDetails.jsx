import { useParams, useNavigate } from 'react-router-dom' // if using React Router
import { useEffect, useState } from 'react'
import Nav from '../../components/header/Nav'
import AppModal from '../../components/modal/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { delProduct, getProduct } from '../../redux/actions/product'
import ProductForm from '../productForm/ProductForm'
import dateFormater from '../../utils/dateFormat'
import { nairaFormat } from '../../utils/nairaFormat'
import Loader from '../../components/loader/Loader'

export default function ProductDetail() {
  const { id } = useParams() // product id from route
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { accessToken } = useSelector((state) => state.auth)

  const { product, loading } = useSelector((state) => state.products)
  const [delLoading, setDelLoading] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProduct(id))
  }, [])

  const handleDel = () => {
    setDelLoading(true)
    dispatch(delProduct(id))
      .unwrap()
      .then(() => {
        setTimeout(() => {
          setDelLoading(false)
          navigate('/')
        }, 1200)
      })
      .catch(() => {
        setDelLoading(false)
      })
  }

  return (
    <>
      <div className="min-h-screen  bg-background ">
        {loading ? (
          <h2 className="flex justify-center h-96 items-center">
            {' '}
            <Loader size="large" />
          </h2>
        ) : (
          <div className="max-w-4xl mx-auto bg-surface mt-10 shadow-lg rounded-2xl overflow-hidden">
            <img
              src={product?.image_url}
              alt={product?.name}
              className="w-full h-72 object-cover"
            />

            <div className="p-6">
              <h1 className="text-3xl font-bold text-primary mb-2">{product?.name}</h1>
              <p className="text-text-muted mb-4">{product?.brand}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="font-semibold text-text">Type:</p>
                  <p className="text-text-muted">{product?.type}</p>
                </div>
                <div>
                  <p className="font-semibold text-text">Warranty:</p>
                  <p className="text-text-muted">{product?.warranty}</p>
                </div>
                <div>
                  <p className="font-semibold text-text">Start Date:</p>
                  <p className="text-text-muted">{dateFormater(product?.startdate)}</p>
                </div>
                <div>
                  <p className="font-semibold text-text">Serial Number:</p>
                  <p className="text-text-muted">{product?.serialnumber}</p>
                </div>
                <div>
                  <p className="font-semibold text-text">Price:</p>
                  <p className="text-text-muted">{nairaFormat(product?.price)}</p>
                </div>
                <div>
                  <p className="font-semibold text-text">Status:</p>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      product?.status === 'active'
                        ? 'bg-success/20 text-success'
                        : product?.status === 'expiring'
                          ? ' text-warning'
                          : 'text-error'
                    }`}
                  >
                    {product?.status?.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <button
                  onClick={() => navigate(-1)}
                  className="bg-gray-200 text-text px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                >
                  ← Back
                </button>
                {accessToken && (
                  <>
                    <button
                      onClick={() => {
                        setIsModalOpen(true)
                      }}
                      className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition"
                    >
                      Edit Product
                    </button>
                    <button
                      onClick={handleDel}
                      className="bg-error bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                    >
                      {delLoading ? 'deleting...' : 'Delete Product'}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <AppModal isModalOpen={isModalOpen} handleCancel={() => {}} setIsModalOpen={setIsModalOpen}>
        <ProductForm product={product} setIsModalOpen={setIsModalOpen} />
      </AppModal>
    </>
  )
}
