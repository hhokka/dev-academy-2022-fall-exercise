import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const SingleStation = () => {
  const id = useParams().id

  let journeys = ''
  let journey = ''

  journeys = useSelector(state => state.journeys)
  journey = journeys.find(n => n.id === id)
  const totalNumberStartingFromStation = journeys.filter(n => n.departureStationName === journey.departureStationName).length
  const totalNumberEndingAtStation = journeys.filter(n => n.returnStationName === journey.departureStationName).length
  console.log('journeys.filter(n => n.returnStationName === journey.returnStationName): ', journeys.filter(n => n.returnStationName === journey.departureStationName))
  return (
    <div key={journey.id}>

      <li>{journey.departure}</li>
      <li>{journey.departureStationName}</li>
      <li>{totalNumberStartingFromStation}</li>
      <li>{totalNumberEndingAtStation}</li>

    </div>
  )
}

export default SingleStation