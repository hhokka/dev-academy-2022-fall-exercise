import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
//import { useState, useEffect, useRef } from 'react'

const StationList = () => {
  const journeys = useSelector(state => state.journeys)
  return(
    <div>
      <p>{journeys.map((journey) => {
        return (
          <li key={journey.id}>
          Departure station: <Link to={`/stations/${journey.id}`}>{journey.departureStationName}</Link>
          </li>)})}</p>
    </div>
  )
}

export default StationList