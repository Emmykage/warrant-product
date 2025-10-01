import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getAccessToken, logOut } from '../../redux/auth/authReducer'
import { Spin } from 'antd'
import LoginSetUp from '../loginSetUp/LoginSetUp'

const Nav = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const { accessToken, user } = useSelector((state) => state.auth)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    dispatch(getAccessToken())
  }, [])

  console.log(accessToken, user)
  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <NavLink to={'/'}>
            <h1 className="text-2xl font-bold text-blue-600">ProductHub</h1>
          </NavLink>
          <nav className="space-x-6 text-gray-700 font-medium">
            <NavLink to="/" className="hover:text-blue-600 transition">
              Home
            </NavLink>
            <NavLink href="#" className="hover:text-blue-600 transition">
              Products
            </NavLink>

            {accessToken ? (
              <button
                onClick={() => {
                  setLoading(true)

                  setTimeout(() => {
                    dispatch(logOut())
                  }, 2000)
                  setLoading(false)
                  // setAccessToken()
                }}
                className="hover:text-blue-600 transition"
              >
                {loading ? <Spin size="small" /> : '  Log Out'}
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsModalOpen(true)
                }}
                className="hover:text-blue-600 transition"
              >
                Log In
              </button>
            )}
          </nav>
        </div>
      </header>

      <LoginSetUp setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </>
  )
}

export default Nav
