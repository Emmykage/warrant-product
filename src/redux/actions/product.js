import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { apiRoute, baseUrl } from '../baseUrl'
import { fetchToken } from '../../hooks/localStorage'
import { toast } from 'react-toastify'

export const createProduct = createAsyncThunk(
  'CREATE_PRODUCT',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl + apiRoute}products`, data, {
        headers: {
          Authorization: `Bearer ${fetchToken()}`,
        },
      })
      const result = response.data

      return result.data
    } catch (error) {
      const message = error.response.data.message ?? error?.message ?? 'Something went wrong'
      return rejectWithValue({ message: message })
    }
  }
)
export const updateProduct = createAsyncThunk(
  'UPDATE_PRODUCT',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${baseUrl + apiRoute}products/${id}`, data, {
        headers: {
          Authorization: `Bearer ${fetchToken()}`,
        },
      })
      const result = response.data
      toast(result?.message || 'Product updated to Create up', { type: 'success' })

      return result.data
    } catch (error) {
      if (error.response) {
        return rejectWithValue({ message: error.response.data })
      }
      return rejectWithValue({ message: 'Something went wrong' })
    }
  }
)
export const getProducts = createAsyncThunk('GET__PRODUCTS', async (_, { rejectWithValue }) => {
  console.log('first')
  try {
    const response = await axios.get(`${baseUrl + apiRoute}products`)
    const result = response.data

    console.log(result.data)
    return result.data
  } catch (error) {
    if (error.response) {
      console.log(error)
      return rejectWithValue({ message: error.response.data.message })
    }
    return rejectWithValue({ message: 'Something went wrong' })
  }
})

export const getProduct = createAsyncThunk('GET_PRODUCT', async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${baseUrl + apiRoute}products/${id}`)
    const result = response.data

    console.log(result, '[Get product]')
    return result.data
  } catch (error) {
    if (error.response) {
      return rejectWithValue({ message: error.response.data })
    }
    return rejectWithValue({ message: 'Something went wrong' })
  }
})

export const delProduct = createAsyncThunk('DEL_PRODUCT', async (id, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`${baseUrl + apiRoute}products/${id}`, {
      headers: {
        Authorization: `Bearer ${fetchToken()}`,
      },
    })
    const result = response.data

    console.log(result, '[Get product]')
    toast(result?.message || 'Product Dleted', { type: 'success' })

    return result.data
  } catch (error) {
    if (error.response) {
      toast(error.response?.data?.message || 'failed to delete product up', { type: 'error' })

      return rejectWithValue({ message: error.response.data })
    }
    return rejectWithValue({ message: 'Something went wrong' })
  }
})
