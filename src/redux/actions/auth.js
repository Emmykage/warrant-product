import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { apiRoute, baseUrl } from '../baseUrl'
import { toast } from 'react-toastify'

export const registerUser = createAsyncThunk('REGISTER_USER', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${baseUrl + apiRoute}users/register`, data)
    const result = response.data
    toast(result.message || 'Sign up', { type: 'success' })

    return result
  } catch (error) {
    const message = error?.response?.data?.message ?? error?.message ?? 'SOmething went wrong'

    return rejectWithValue({ message: message })
  }
})

export const loginUser = createAsyncThunk('LOG_USER', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${baseUrl + apiRoute}users/login`, data)
    const result = response.data

    let accessToken = result.accessToken
    toast(result.message || 'Loged in', { type: 'success' })

    localStorage.setItem('warrantIT', accessToken)
    return result
  } catch (error) {
    console.log(error)
    const message = error?.response?.data?.message ?? error?.message ?? 'SOmething went wrong'

    return rejectWithValue({ message: message })
  }
})
