/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initializeJourneys } from './reducers/journeyReducer'
const App = () => {
  const dispatch = useDispatch()
  const journeys = useSelector(state => state.journeys)
  useEffect(() => {
    dispatch(initializeJourneys())
  },[dispatch])
  console.log('journeys App.js: ', journeys)
  return(
    <div>
      <p>Hello world</p>
      <p>{journeys[0]['Departure']}</p>
    </div>
  )
}
export default App