import axios from 'axios'

const baseUrl = '/api/journeys'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log('journeys.js getAll, response.data: ', response.data)
  return response.data
}
export default { getAll }