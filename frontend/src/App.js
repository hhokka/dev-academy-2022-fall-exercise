/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initializeJourneys } from './reducers/journeyReducer'
import JourneyList from './components/JourneyList'
const App = () => {
  const dispatch = useDispatch()
  const journeys = useSelector(state => state.journeys)
  useEffect(() => {
    dispatch(initializeJourneys())
  },[dispatch])
  console.log('journeys App.js: ', journeys)
  return(
    <JourneyList></JourneyList>
  )
}
export default App