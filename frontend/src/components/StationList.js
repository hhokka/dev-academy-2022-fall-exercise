import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
//import { useState, useEffect, useRef } from 'react'

const StationList = () => {
  const journeys = useSelector(state => state.journeys)
  //const journeysNoDuplicates = [...journeys.reduce((map, obj) => map.set(obj.id, obj), new Map()).values()]
  const journeysNoDuplicates = journeys.filter((value, index, self) =>
    index === self.findIndex((t) => (
      t.departureStationName === value.departureStationName
    ))
  )
  return(
    <div>
      <p>{journeysNoDuplicates.map((journey) => {
        return (
          <li key={journey.id}>
          Departure station: <Link id={journey.id} to={`/stations/${journey.id}`}>{journey.departureStationName}</Link>
          </li>)})}</p>
    </div>
  )
}

export default StationList