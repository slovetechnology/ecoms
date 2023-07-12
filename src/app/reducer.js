import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  carts: [],
  admin: {},
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    dispatchUser: (state, action) => {
        state.user = action.payload
    },
    dispatchCart: (state, action) => {
      state.carts = action.payload
    },
    dispatchAdmin: (state, action) => {
      state.admin = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { dispatchUser, dispatchCart, dispatchAdmin } = counterSlice.actions

export default counterSlice.reducer