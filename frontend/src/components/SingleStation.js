import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const SingleStation = () => {
  const id = useParams().id

  let bikeStations = useSelector(state => state.bikeStations)
  let journeys = useSelector(state => state.journeys)
  let journey = journeys.find(n => n.id === id)
  const totalNumberStartingFromStation = journeys.filter(n => n.departureStationName === journey.departureStationName).length
  const totalNumberEndingAtStation = journeys.filter(n => n.returnStationName === journey.departureStationName).length
  const stationAddress = bikeStations.filter(n => n.Nimi === journey.departureStationName)[0].Osoite

  return (
    <div key={journey.id}>

      <li>Station name: {journey.departureStationName}</li>
      <li>Station address: {stationAddress}</li>
      <li>Total number of journeys starting from the station: {totalNumberStartingFromStation}</li>
      <li>Total number of journeys ending at the station: {totalNumberEndingAtStation}</li>

    </div>
  )
}

export default SingleStation