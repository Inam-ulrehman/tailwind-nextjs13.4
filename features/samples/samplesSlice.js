import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  lastName: '',
  email: '',
  isLoading: false,
}
export const carsThunk = createAsyncThunk(
  'cars/carsThunk',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('')

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const carsSlice = createSlice({
  name: 'samples',
  initialState,
  reducers: {
    createFunction: (state, { payload }) => {
      console.log('function call')
    },
    getStateValues: (state, { payload }) => {
      const { name, value } = payload

      state[name] = value
    },
    clearState: (state, { payload }) => {
      state.name = ''
      state.lastName = ''
      state.email = ''
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(carsThunk.pending, (state, { payload }) => {
        console.log('promise pending')
        state.isLoading = true
      })
      .addCase(carsThunk.fulfilled, (state, { payload }) => {
        console.log('promise fulfilled')
        console.log(payload)
        state.isLoading = false
      })
      .addCase(carsThunk.rejected, (state, { payload }) => {
        console.log('promise rejected')
        console.log(payload)
        state.isLoading = false
      })
  },
})
export const { createFunction, getStateValues, clearState } = carsSlice.actions
export default carsSlice.reducer
