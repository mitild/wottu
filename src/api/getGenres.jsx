import axios from 'axios'
import TmdbParams from '../config/tmdb'

const getGenres = async (type, setter) => {
  const { BASE_URL } = TmdbParams()
  
  try {
    const response = await axios.get(`${BASE_URL}/genre/${ type }/list?language=en`)
    if(response.status === 200){
      setter(response.data.genres)
    }
  } catch (err) {
        console.log(err)
    }
}

export default getGenres