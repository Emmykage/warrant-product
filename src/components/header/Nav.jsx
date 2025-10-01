import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const accessToken = localStorage.getItem('warrantIT')

  return (
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
          <NavLink href="#" className="hover:text-blue-600 transition">
            About
          </NavLink>
          {accessToken && (
            <NavLink href="#" className="hover:text-blue-600 transition">
              Logged In
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Nav
