/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
//import { useDispatch } from 'react-redux'
import journeyService from './services/journeys'
const App = () => {
  //const dispatch = useDispatch()
  const [journeys, setJourneys] = useState(null)

  useEffect(() => {
    getJourneys()
  },[])

  const getJourneys = async() => {
    const allJourneys = await journeyService.getAll()
    console.log('allJourneys: ', allJourneys)
    //setJourneys(allJourneys)
  }
  return(
    <div>
      <p>Hello world</p>
      <p>{journeys}</p>
    </div>
  )
}
export default App