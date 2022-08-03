import { useSelector } from 'react-redux'

const JourneyList = () => {
  const journeys = useSelector(state => state.journeys)
  return(
    <div>
      <p>{journeys.map((journey) => {
        return (
          <li key={journey.id}>
          Departure station: {journey.departureStationName} |
          Return station: {journey.returnStationName} |
          Covered distance in km: {journey.coveredDistance / 1000} |
          Duration in min: {Math.round(journey.duration / 60)}
          </li>)})}</p>
    </div>
  )
}

export default JourneyList