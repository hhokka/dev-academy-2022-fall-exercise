import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeJourneys } from './reducers/journeyReducer'
import { initializeBikeStations } from './reducers/bikeStationReducer'
import JourneyList from './components/JourneyList'
import StationList from './components/StationList'
import Menu from './components/Menu'
import { Routes, Route } from 'react-router-dom'
import SingleStation from './components/SingleStation'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeJourneys())
    dispatch(initializeBikeStations())
  },[dispatch])

  return(
    <>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<JourneyList/>} />
        <Route path="/stations" element={<StationList/>} />
        <Route path="/stations/:id" element={<SingleStation/>} />
      </Routes>
    </>
  )
}
export default App