import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    addNotification(state, action) {
      return action.payload
    },
    rmNotification() {
      return null
    }
  }
})

export const setNotification = (text, time) => {
  return (dispatch) => {
    dispatch(addNotification(text))
    setTimeout(() => {
      dispatch(rmNotification())
    }, time*1000)
  }
}

export const { addNotification, rmNotification } = notificationSlice.actions
export default notificationSlice.reducer