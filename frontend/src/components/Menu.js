import { Link } from 'react-router-dom'
const Menu = () => {
  const padding = {
    paddingRight: 5
  }
  return (
    < div >
      <Link style={padding} to="/">Journey list</Link>
      <Link style={padding} to="/stations">Station list</Link>
      <Link style={padding} to="/single">Single station</Link>
    </div >
  )
}

export default Menu