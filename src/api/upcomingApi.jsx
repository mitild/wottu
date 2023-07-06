import axios from 'axios'
import TmdbParams from '../config/tmdb';


const getUpcoming = async (endpoint, setter) =>{
  const { BASE_URL } = TmdbParams()
  const todayDate = new Date().toISOString().slice(0, 10);

  try {
    const response = await axios.get(`${BASE_URL}/discover${endpoint}?include_adult=false&include_video=false&language=en-US&page=1&release_date.gte=2023-01-01&release_date.lte=${ todayDate }&sort_by=popularity.desc&with_release_type=2|3`)
    setter(response.data.results)
  } catch (err) {
      console.log(err)
    }
}


  export default getUpcoming  