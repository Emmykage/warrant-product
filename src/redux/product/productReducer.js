import { createSlice } from '@reduxjs/toolkit'
import { createProduct, getProduct, getProducts } from '../actions/product'

const initialState = {
  products: [],
  product: null,
  loading: true,
}

const ProductSlice = createSlice({
  initialState,
  name: 'auth',

  extraReducers: (builder) => {
    builder
      .addCase(createProduct.fulfilled, (state, action) => {
        return {
          ...state,
          product: action.payload,
          logged: true,
          loading: false,
        }
      })
      .addCase(createProduct.rejected, (state, action) => {
        return {
          ...state,
          message: action.payload.message,
          loading: false,
        }
      })
      .addCase(createProduct.pending, (state) => {
        return {
          ...state,
          loading: true,
        }
      })

      .addCase(getProduct.fulfilled, (state, action) => {
        return {
          ...state,
          product: action.payload,
          loading: false,
        }
      })
      .addCase(getProduct.rejected, (state, action) => {
        return {
          ...state,
          message: action.payload.message,
          loading: false,
        }
      })
      .addCase(getProduct.pending, (state) => {
        return {
          ...state,
          loading: true,
        }
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        return {
          ...state,
          products: action.payload,
          loading: false,
        }
      })
      .addCase(getProducts.rejected, (state, action) => {
        return {
          ...state,
          message: action.payload.message,
          loading: false,
        }
      })
      .addCase(getProducts.pending, (state) => {
        return {
          ...state,
          loading: true,
        }
      })
  },
})

export default ProductSlice.reducer
