import { createSlice } from '@reduxjs/toolkit'
import bikeStationService from '../services/bikeStations'

const bikeStationSlice = createSlice({
  name: 'bikeStations',
  initialState: [],
  reducers: {
    setBikeStations(state, action) {
      return action.payload
    }
  }
})

export const initializeBikeStations = () => {
  return async dispatch => {
    const bikeStations = await bikeStationService.getAll()
    dispatch(setBikeStations(bikeStations))
  }
}

export const { setBikeStations } = bikeStationSlice.actions
export default bikeStationSlice.reducer