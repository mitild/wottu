import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import TmdbParams from '../config/tmdb'
import { DataContext } from '../context/Context'

const useGetCast = (id, endpoint) => {
  const { BASE_URL } = TmdbParams()
  const [ cast, setCast ] = useState(
    {
      director: '',
      cast: [],
    }
  )
  const { code } = useContext(DataContext)

  const getCast = async() => {
    try {
      const response = await axios.get(`${BASE_URL}${endpoint}/${id}/credits?language=en-${ code }`)
      const getDirectors = response.data.crew && response.data.crew.find(crew => crew.department === 'Directing')
      const director = getDirectors.length > 0 ? getDirectors.map(director => director.name) : getDirectors.name

      const getCast = response.data.cast && response.data.cast.filter(cast => cast.known_for_department === 'Acting')
      const cast = getCast && getCast.slice(0, 10).map(cast => {
        return (
          {
            name: cast.name, 
            img: cast.profile_path ? cast.profile_path : null, 
            id: cast.id 
          }
        )
      })

      setCast(
        {
          director: director,
          cast: cast,
        }
      )
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getCast()
  },[id])

  return cast 

}

export default useGetCast