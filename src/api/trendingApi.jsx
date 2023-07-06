import axios from 'axios'
import TmdbParams from '../config/tmdb'


const getTrending = async (typeEndpoint, setter) =>{
  const { BASE_URL } = TmdbParams()

  try {
    const response = await axios.get(`${BASE_URL}/trending/${ typeEndpoint }/day?language=en-US`)
    setter(response.data.results)
  } catch (err) {
      console.log(err)
    }
}


  export default getTrending 