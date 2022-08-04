import { createSlice } from '@reduxjs/toolkit'
import journeyService from '../services/journeys'

const journeySlice = createSlice({
  name: 'journeys',
  initialState: [],
  reducers: {
    setJourneys(state, action) {
      return action.payload
    }
  }
})

export const initializeJourneys = () => {
  return async dispatch => {
    const journeys = await journeyService.getAll()
    dispatch(setJourneys(journeys))
  }
}

export const { setJourneys } = journeySlice.actions
export default journeySlice.reducer