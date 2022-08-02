import { createSlice } from '@reduxjs/toolkit'
import journeyService from '../services/journeys'

const journeySlice = createSlice({
  name: 'journeys',
  initialState: [],
  reducers: {
    setJourneys(state, action) {
      console.log('setJourneys (inside reducer)): ', action.payload)
      return action.payload
    }
  }
})

export const initializeJourneys = () => {
  console.log('initializeJourneys here ')
  return async dispatch => {
    const journeys = await journeyService.getAll()
    console.log('inside dispatch here')
    dispatch(setJourneys(journeys))
  }
}

export const { setJourneys } = journeySlice.actions
export default journeySlice.reducer