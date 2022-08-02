import { createSlice } from '@reduxjs/toolkit'
import journeyService from '../services/journeys'

const journeySlice = createSlice({
  name: 'journeys',
  initialState: [],
  reducers: {
    setBlogs(state, action) {
      //console.log('setBlogs: ', action.payload);
      return action.payload
    }
  }
})

export const initializeJourneys = () => {
  console.log('initializeJourneys: ')
  return async dispatch => {
    const journeys = await journeyService.getAll()
    dispatch(setBlogs(journeys))
  }
}

export const { setBlogs } = journeySlice.actions
export default journeySlice.reducer