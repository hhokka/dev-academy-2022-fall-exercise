import { Link } from 'react-router-dom'
const Menu = () => {
  const padding = {
    paddingRight: 5
  }
  return (
    < div >
      <Link style={padding} to="/">Journey list</Link>
      <Link style={padding} to="/stations">Station list</Link>
    </div >
  )
}

export default Menu