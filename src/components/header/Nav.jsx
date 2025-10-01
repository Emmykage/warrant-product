import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getAccessToken, logOut } from '../../redux/auth/authReducer'
import { Spin } from 'antd'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import LoginSetUp from '../loginSetUp/LoginSetUp'

const Nav = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    dispatch(getAccessToken())
  }, [dispatch])

  const handleLogout = () => {
    setLoading(true)
    setTimeout(() => {
      dispatch(logOut())
      setLoading(false)
    }, 3000)
  }

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <NavLink to={'/'}>
            <h1 className="text-2xl font-bold text-blue-600">WarrantyIT</h1>
          </NavLink>

          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <NavLink to="/" className="hover:text-blue-600 transition">
              Home
            </NavLink>
            <NavLink to="/products" className="hover:text-blue-600 transition">
              Products
            </NavLink>

            {accessToken ? (
              <button onClick={handleLogout} className="hover:text-blue-600 transition">
                {loading ? <Spin size="small" /> : 'Log Out'}
              </button>
            ) : (
              <button
                onClick={() => setIsModalOpen(true)}
                className="hover:text-blue-600 transition"
              >
                Log In
              </button>
            )}
          </nav>

          <button className="md:hidden text-2xl text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t px-6 py-4 space-y-4 text-gray-700 font-medium">
            <NavLink
              to="/"
              className="block hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="block hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Products
            </NavLink>

            {accessToken ? (
              <button
                onClick={() => {
                  handleLogout()
                  setIsOpen(false)
                }}
                className="block hover:text-blue-600 transition w-full text-left"
              >
                {loading ? <Spin size="small" /> : 'Log Out'}
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsModalOpen(true)
                  setIsOpen(false)
                }}
                className="block hover:text-blue-600 transition w-full text-left"
              >
                Log In
              </button>
            )}
          </div>
        )}
      </header>

      <LoginSetUp setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </>
  )
}

export default Nav
