import { Link } from 'react-router-dom'
const Menu = () => {
  const padding = {
    paddingRight: 5
  }
  return (
    < div >
      <Link id='journeyList' style={padding} to="/">Journey list</Link>
      <Link id='stationList' style={padding} to="/stations">Station list</Link>
    </div >
  )
}

export default Menu