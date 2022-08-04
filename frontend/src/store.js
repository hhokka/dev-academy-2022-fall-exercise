import { configureStore } from '@reduxjs/toolkit'
import bikeStationReducer from './reducers/bikeStationReducer'
import journeyReducer from './reducers/journeyReducer'

const store = configureStore({
  reducer: {
    journeys: journeyReducer,
    bikeStations: bikeStationReducer }
})

export default store