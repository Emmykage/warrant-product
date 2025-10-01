import { createSlice } from '@reduxjs/toolkit'
import { loginUser, registerUser } from '../actions/auth'

const initialState = {
  user: null,
  logged: false,
  loading: true,
}

const AuthSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    resetUser: (state) => {
      return {
        ...state,
        user: {},
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
        }
      })
  },
})

export default AuthSlice.reducer
export const { resetUser } = AuthSlice.actions
