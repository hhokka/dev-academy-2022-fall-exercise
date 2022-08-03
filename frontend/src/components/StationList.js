import { useSelector } from 'react-redux'

const StationList = () => {
  const journeys = useSelector(state => state.journeys)
  return(
    <div>
      <p>{journeys.map((journey) => {
        return (
          <li key={journey.id}>
          Departure station: {journey.departureStationName}
          </li>)})}</p>
    </div>
  )
}

export default StationList