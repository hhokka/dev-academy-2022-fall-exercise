import axios from 'axios'

const baseUrl = '/api/bikeStations'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
export default { getAll }