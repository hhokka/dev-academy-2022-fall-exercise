/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initializeJourneys } from './reducers/journeyReducer'
import JourneyList from './components/JourneyList'
import StationList from './components/StationList'
import Menu from './components/Menu'
import {
  BrowserRouter as Router,
  Routes, Route, Link, useNavigate, useParams
} from 'react-router-dom'

const App = () => {
  const dispatch = useDispatch()
  const journeys = useSelector(state => state.journeys)

  useEffect(() => {
    dispatch(initializeJourneys())
  },[dispatch])

  console.log('journeys App.js: ', journeys)


  return(
    <>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<JourneyList/>} />
        <Route path="/stations" element={<StationList/>} />
        <Route path="/single" element={<JourneyList/>} />
        <Route path="/stations/:id" element={<JourneyList/>} />
      </Routes>
    </>
  )
}
export default App