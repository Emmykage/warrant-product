import { createSlice } from '@reduxjs/toolkit'
import { loginUser, registerUser } from '../actions/auth'

const initialState = {
  user: null,
  accessToken: null,
  logged: false,
  loading: true,
}

const AuthSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    getAccessToken: (state, action) => {
      return {
        ...state,
        accessToken: action.payload ?? localStorage.getItem('warrantIT'),
      }
    },
    logOut: (state) => {
      localStorage.removeItem('warrantIT')
      return {
        ...state,
        accessToken: null,
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        return {
          ...state,
          user: action.payload.data,
          logged: true,
          loading: false,
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        return {
          ...state,
          message: action.payload.message,
          loading: false,
        }
      })
      .addCase(registerUser.pending, (state) => {
        return {
          ...state,
          loading: true,
        }
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        return {
          ...state,
          user: action.payload.data,
          logged: true,
          loading: false,
          accessToken: action.payload.accessToken,
        }
      })
      .addCase(loginUser.rejected, (state) => {
        return {
          ...state,
          logged: false,
          loading: false,
        }
      })
      .addCase(loginUser.pending, (state) => {
        return {
          ...state,
          logged: false,
          loading: true,
        }
      })
  },
})

export default AuthSlice.reducer
export const { getAccessToken, logOut } = AuthSlice.actions
