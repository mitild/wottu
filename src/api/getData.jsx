import axios from 'axios'
import TmdbParams from '../config/tmdb'

const getData = async (endpoint, setter) => {
  const { Bearer, BASE_URL, TOPRATED_endpoint } = TmdbParams()
  
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}${TOPRATED_endpoint}`)
    setter(response.data.results)
  } catch (err) {
      console.log(err)
    }
  }

  export default getData