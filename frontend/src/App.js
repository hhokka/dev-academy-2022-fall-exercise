/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import journeyService from './services/journeys'
const App = () => {
  const [journeys, setJourneys] = useState('')

  useEffect(() => {
    getJourneys()
  },[])
  const allJourneys = null
  const getJourneys = async() => {
    const allJourneys = await journeyService.getAll()
    console.log('allJourneys: ', allJourneys)
    setJourneys(allJourneys)
    console.log('journeys: ', journeys)
  }
  return(
    <div>
      <p>Hello world</p>
      <p>{JSON.stringify(journeys)}</p>
      <p>{journeys[0]['Departure']}</p>
    </div>
  )
}
export default App