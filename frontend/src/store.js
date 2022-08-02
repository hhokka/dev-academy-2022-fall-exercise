import { configureStore } from '@reduxjs/toolkit'
import journeyReducer from './reducers/journeyReducer'

const store = configureStore({
  reducer: {
    journeys: journeyReducer }
})

export default store