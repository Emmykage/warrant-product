import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import ProductForm from './pages/productForm/ProductForm'
import ProductDetail from './pages/productDetails/ProductDetails'
import MainLayout from './layout/MainLayout'
import { AppToast } from './components/toast'
import Products from './pages/products/Products'

function App() {
  return (
    <>
      <AppToast />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="product-form" element={<ProductForm />} />
          <Route path="product-details/:id" element={<ProductDetail />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
