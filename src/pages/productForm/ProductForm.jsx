import { useEffect, useState } from 'react'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { createProduct, updateProduct } from '../../redux/actions/product'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function ProductForm({ product, setIsModalOpen }) {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    price: 0,
    type: '',
    status: '',
    warranty: '',
    image_url: '',
    startDate: '',
    serialNumber: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    setLoading(true)

    e.preventDefault()

    if (product) {
      dispatch(updateProduct({ id: product?.id, data: formData }))
        .unwrap()
        .then(() => {
          setTimeout(() => {
            setIsModalOpen(false)
          }, 1200)
        })
        .catch((err) => {
          toast(err?.message || 'failed to Create up', { type: 'error' })
        })
        .finally(() => {
          setTimeout(() => {
            setLoading(false)
          }, 1200)
        })
    } else {
      dispatch(createProduct(formData))
        .unwrap()
        .then(() => {
          setTimeout(() => {
            navigate('/')
          }, 1200)
        })
        .catch((err) => {
          toast(err?.message || 'failed to Create up', { type: 'error' })
        })
        .finally(() => {
          setTimeout(() => {
            setLoading(false)
          }, 1200)
        })
    }
  }

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product?.price,
        type: product?.type,
        status: product?.status,
        warranty: product?.warranty,
        image_url: product?.image_url,
        startDate: product?.startdate ? product.startdate.split('T')[0] : '',
        serialNumber: product?.serialnumber,
      })
    }
  }, [])

  console.log(product)

  return (
    <div>
      <div className="flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            {product ? 'Edit Product' : ' Product Registration'}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Product Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Product Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter product name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Price</label>
              <input
                type="number"
                name="price"
                min={1}
                value={formData.price}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="e.g. 12"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              >
                <option value="">Select Status</option>
                <option value="active">active</option>
                <option value="expiring">expiring</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              >
                <option value="">Select type</option>
                <option value="Electronics">Electronics</option>
                <option value="Appliance">Appliance</option>
                <option value="Furniture">Furniture</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Warranty Period */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Warranty Period (months)
              </label>
              <input
                type="number"
                name="warranty"
                min={1}
                value={formData.warranty}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="e.g. 12"
                required
              />
            </div>

            {/* Start Date */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Serial Number */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Serial Number</label>
              <input
                type="text"
                name="serialNumber"
                value={formData.serialNumber}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter serial number"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Enter Image URL</label>
              <input
                type="text"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter serial number"
              />
            </div>

            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              className="rounded-md !bg-primary hover:bg-green-700"
            >
              Add Product
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
